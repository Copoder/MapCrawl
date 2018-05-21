from urllib import request
import urllib
from bs4 import BeautifulSoup
import re
import sqlite3
from pypinyin import pinyin, lazy_pinyin

# coding=utf-8

HEADERS = {'user-agent': ('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)'
                          'AppleWebKit/537.36 (KHTML, like Gecko)'
                          'Chrome/45.0.2454.101 Safari/537.36'),
           'Content-Type': 'application/json'
           }

map_url = "http://12366.chinatax.gov.cn/BsdtAllBLH_bsdtGetBst.do"
root_url = "http://www.chinatax.gov.cn/"
area_url = "http://12366.chinatax.gov.cn/BsdtAllBLH_bsdtMain.do"

cookie_map = {'yfx_c_g_u_id_10003701': '_ck18051114072616371289942589730',
              'yfx_f_l_v_t_10003701': 'yfx_f_l_v_t_10003701'}


def get_code():
    root_req = urllib.request.Request(area_url, headers=HEADERS)
    conn = init_db()
    with request.urlopen(root_req) as r:
        if r.status == 200 and r.reason == 'OK':
            data = r.read()
            bs_manager = BeautifulSoup(data, 'html.parser')
            all_province = bs_manager.find_all('li', attrs={'id': re.compile('\d+')})
            for pro_item in all_province:
                # 省级TAG
                print(pro_item['name'], ":", pro_item['id'])
                print(pro_item)
                cur_pro_city = pro_item.find_all('a', attrs={'id': re.compile('\d+')})
                for city_item in cur_pro_city:
                    print('     ', city_item['name'], ':', city_item['id'])
                    try:
                        if city_item['name'][0] == '>':
                            city_item['name'] = city_item['name'][1:len(city_item['name'])]
                        save_data(city_item['id'], city_item['name'], pro_item['id'], pro_item['name'], conn.cursor())
                    except:
                        print("city id is not unique:", city_item['id'], city_item['name'])
            conn.commit()
            print("count", conn.cursor().rowcount)


def init_db():
    db_coon = sqlite3.connect("/home/copo/city.db")
    cursor = db_coon.cursor()
    cursor.execute(
        'CREATE TABLE cities(c_code VARCHAR(10) PRIMARY KEY , c_name TEXT(50),pro_id VARCHAR(10),c_province TEXT(50),c_pinyin TEXT(50))')
    cursor.execute(
        'CREATE TABLE history(c_code VARCHAR(10) PRIMARY KEY , c_name TEXT(50),pro_id VARCHAR(10),c_province TEXT(50),c_pinyin TEXT(50))'
    )
    return db_coon


def save_data(id, name, pro_id, pro_name, cursor):
    name_pinyin = ""
    for str in lazy_pinyin(name):
        name_pinyin = name_pinyin + str
    # cursor.execute('insert into city(id,name,pro_id,pro_name) VALUES (%s , %s ,%s,%s)' % (id, name, pro_id, pro_name))
    s = 'insert into cities VALUES (%s,%s,%s,%s,%s)' % (
        id, '\'' + name + '\'', pro_id, '\'' + pro_name + '\'', '\'' + name_pinyin + '\'')
    print('sql: ', s)
    cursor.execute(s)


def init_file():
    pass


def save_json_array():
    pass


def save_json_obj():
    pass
