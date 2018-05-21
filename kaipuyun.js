try {
    var _$RVersion = '20161011';
    var _Sauthor;
    var _Scount_iframe;
    var _Sload_time;
    var _Spage_type;
    var _Spage_pic;
    var _Spage_id;
    var _$Rformlist = '';
    var _$Rformdetails = {};
    var _$Rformfielddetails = {};
    var _$Rwebsite = _$Rpartner_website = '10003701';
    var _Spartner_website_id;
    var _Schannel_website_id;
    var _Schannel_webshop_id;
    var _Spageformjs = false;
    var _Sorder_encode_url;
    var _$Rchkdomain = '';
    if (_Scount_iframe === true) {
        var _$Rdocument = top.window.document
    } else {
        var _$Rdocument = window.document
    }
    var _$Rdocumentbody = _$Rdocument.getElementsByTagName('body')[0];
    var _$Rprotocol = _$Rdocument.location.protocol;
    var _trackDataType;
    var _trackData = _trackData || [];
    var _$Riserror = 0;
    var _$Rerrorcode = '';
    var _$Rflashid = 'yfx_n_r_u';
    var _$Rcounturl = '//fxsjcj.kaipuyun.cn/';
    var _$Rcounturl_proxy = '//fxsjcj.kaipuyun.cn/';
    var _$Rmediumsource = _$Rmediumsourcefirst = _$Rkeywordsource = _$Redmemail = _$Rkeywordkey = '';
    var _$Rstarttime = _$Rtimestart = _$Rloadtime = _$Rdowntime = _$Rgettime = (new Date()).getTime();
    window.onerror = function (msg, url, line, column) {
        _$Rerrorcode = "msg[" + msg + "]#line[" + line + "]#column[" + column + "]";
        return true
    };

    function _$Runicode(s) {
        var len = s.length;
        var rs = 0;
        for (var i = 0; i < len; i++) {
            rs += parseInt(s.charCodeAt(i) % 10)
        }
        return rs
    }

    function _$Rreadmapcookie(name) {
        var cV = end = '';
        var v = name + '=';
        if (_$Rdocument.cookie) {
            var p = _$Rdocument.cookie.indexOf(v);
            if (p > -1) {
                p += v.length;
                end = _$Rdocument.cookie.indexOf(";", p);
                if (end == -1) {
                    end = _$Rdocument.cookie.length
                }
                ;
                cV = _$Rdocument.cookie.substring(p, end)
            }
            return cV
        }
    }

    function _$Rsplitdomain(gethost) {
        var pattern = new Array();
        var domain = '';
        var isdomain = 0;
        var domainlen = 0;
        pattern['.com.cn'] = 4;
        pattern['.net.cn'] = 4;
        pattern['.gov.cn'] = 4;
        pattern['.org.cn'] = 4;
        pattern['.com'] = 3;
        pattern['.net'] = 3;
        pattern['.org'] = 3;
        pattern['.gov'] = 3;
        pattern['.cc'] = 3;
        pattern['.biz'] = 3;
        pattern['.info'] = 3;
        pattern['.cn'] = 3;
        pattern['.hk'] = 3;
        for (var dk in pattern) {
            if (gethost.indexOf(dk) > -1) {
                isdomain = 1;
                domainlen = parseInt(pattern[dk]);
                break
            }
        }
        if (isdomain == 1) {
            var s = gethost.split('.');
            if (s.length >= (domainlen)) {
                s[0] = '';
                domain = (s.join('.')).substr(1)
            } else {
                domain = gethost
            }
        } else {
            domain = gethost
        }
        return domain
    }

    function _$Rgetservercookie(ghostvar, gtype) {
        var _$Rurl = _$Rcounturl + '/getcookie.js.php';
        var _$Robj = _$Rdocument.createElement('script');
        _$Robj.type = 'text/javascript';
        _$Robj.async = true;
        _$Robj.id = 'getcookie_id';
        _$Robj.charset = 'utf-8';
        var _$Rdurl = _$Rurl + '?website=' + _$Rwebsite + '&prefix=_$R&jsprefix=yfx_&domain=' + ghostvar + '&type=' + gtype + '&rand=' + Math.random();
        _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Robj);
        _$Rdocument.getElementById('getcookie_id').src = _$Rdurl
    }

    (function () {
        var CHARS = '01234567891357924680'.split('');
        Math.uuid = function (len, radix) {
            var chars = CHARS,
                uuid = [],
                i;
            radix = radix || chars.length;
            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
            }
            return uuid.join('')
        }
    })();

    function _$Rflash_cookie() {
        var f = 0;
        var v = 0;
        var swf;
        var ie = _$Ruseragent.match(/msie ([\d.]+)/);
        if (ie) {
            try {
                swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (swf) {
                    f = 1;
                    var vs = swf.GetVariable("$version");
                    v = parseInt(vs.split(" ")[1].split(",")[0])
                }
            } catch (e) {
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                swf = navigator.plugins["Shockwave Flash"];
                if (swf) {
                    f = 1;
                    var ws = swf.description.split(" ");
                    for (var i = 0; i < ws.length; ++i) {
                        if (isNaN(parseInt(ws[i]))) continue;
                        v = parseInt(ws[i])
                    }
                }
            }
        }
        return {
            f: f,
            v: v
        }
    }

    var _$Rrandomid = _$Rstarttime;
    var _$Ruseragent = navigator.userAgent.toLowerCase();
    var _$Rtelphone = /(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|android|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexusone|playstation|nintendo|symbianos|dangerhiptop|dopod|midp)/.exec(_$Ruseragent);
    _$Rtelphone = _$Rtelphone === null ? '' : _$Rtelphone[0];
    var _$Rflashok = _$Rflash_cookie();
    var _$Rphpstat_flash_object;

    function _$Rdownloadflash() {
        "use strict";
        var counter = 0;
        var alpnum = /[^a-z0-9_]/ig;
        window.phpstatCookie = function (config) {
            config = config || {};
            var defaults = {
                swf_url: _$Rcounturl_proxy + '/cookie/storage.swf',
                namespace: 'namespace_phpstat',
                debug: true,
                timeout: 10,
                onready: null,
                onerror: null
            };
            var key;
            for (key in defaults) {
                if (defaults.hasOwnProperty(key)) {
                    if (!config.hasOwnProperty(key)) {
                        config[key] = defaults[key]
                    }
                }
            }

            function _$Rdiv(visible) {
                var d = _$Rdocument.createElement('div');
                d.id = "kpyfx_js_div_id_10003701";
                var s = (_$Rfgid('kpyfx_js_id_10003701') || _$Rfgid('kpyfx_js_id'));
                if (s) {
                    d.async = true;
                    s.parentNode.insertBefore(d, s)
                }
                return d
            }

            var swfContainer = _$Rdiv(config.debug);
            config.namespace = config.namespace.replace(alpnum, '_');
            this.config = config;

            function _$Rfid() {
                return "phpstatCookie_" + config.namespace + "_" + (counter++)
            }

            function _$Rfgid(id) {
                return _$Rdocument.getElementById(id)
            }

            phpstatCookie[config.namespace] = this;
            var swfName = _$Rfid();
            var flashvars = "logfn=phpstatCookie." + config.namespace + ".log&amp;" + "onload=phpstatCookie." + config.namespace + ".onload&amp;" + "onerror=phpstatCookie." + config.namespace + ".onerror&amp;" + "LSOName=" + config.namespace;
            swfContainer.innerHTML = '<object height="1" width="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + swfName + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' + '	<param value="' + config.swf_url + '" name="movie">' + '	<param value="' + flashvars + '" name="FlashVars">' + '	<param value="always" name="allowScriptAccess">' + '	<embed height="1" align="middle" width="1" pluginspage="http://www.macromedia.com/go/getflashplayer" ' + 'flashvars="' + flashvars + '" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" ' + 'name="' + swfName + '" bgcolor="#ffffff" src="' + config.swf_url + '">' + '</object>';
            this.swf = _$Rdocument[swfName] || window[swfName];
            this._timeout = setTimeout(function () {
                if (config.onerror) {
                    config.onerror()
                }
            }, config.timeout * 1000)
        };
        phpstatCookie.prototype = {
            version: "1.5",
            ready: false,
            set: function (key, value) {
                this._checkReady();
                this.swf.set(key, value)
            },
            get: function (key) {
                this._checkReady();
                return this.swf.get(key)
            },
            getAll: function () {
                this._checkReady();
                var data = this.swf.getAll();
                if (data.__flashBugFix) {
                    delete data.__flashBugFix
                }
                return data
            },
            clear: function (key) {
                this._checkReady();
                this.swf.clear(key)
            },
            _checkReady: function () {
            },
            "onload": function () {
                var that = this;
                setTimeout(function () {
                    clearTimeout(that._timeout);
                    that.ready = true;
                    that.set('__flashBugFix', '1');
                    if (that.config.onready) {
                        that.config.onready()
                    }
                }, 0)
            },
            onerror: function () {
                clearTimeout(this._timeout);
                if (this.config.onerror) {
                    this.config.onerror()
                }
            }
        }
    }

    var _$Risdownloadflash = 0;
    if (_$Rflashok.v >= 88 && _$Rdocument.location.hash.toString().indexOf('clickmapcode') <= -1 && typeof(_$Rdocumentbody) !== 'undefined' && _$Rtelphone === '' && _$Rreadmapcookie('yfxm') === '') {
        _$Risdownloadflash = 1
    }
    if (_$Risdownloadflash === 1) {
        _$Rdownloadflash()
    }
    var _$Rclienturl = new Array();
    var _$Rthehostname = _$Rdocument.location.hostname;
    var _$Rgetclienthost;
    for (_$Rgetclienthost in _$Rclienturl) {
        if (_$Rgetclienthost == _$Rthehostname) {
            _$Rcounturl_proxy = _$Rclienturl[_$Rgetclienthost];
            break
        }
    }

    function _$Rphpstat(cookietype, serverclientcookie) {
        var _$Rdoimgerr_1 = 1;
        var _$Rreferrer = _$Rdocument.referrer;
        var _$Rtitle = _$Rdocument.title;
        var _$Rhashcode = _$Rdocument.location.hash;
        var _$Rlanguage = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
        var _$Rcolor = screen.colorDepth;
        var _$Rclientwidth = _$Rdocument.documentElement.clientWidth;
        var _$Rclientheight = _$Rdocument.documentElement.clientHeight;
        var _$Rscrollheight = _$Rdocument.documentElement.scrollHeight;
        var _$Rscreensize = screen.width + '*' + screen.height;
        var _$Rlastmodify = new Date(_$Rdocument.lastModified).getTime();
        var _$Rcookie = navigator.cookieEnabled ? 1 : 0;
        var _$Rutm_replace = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id', 'ca_kid', 'ca_source'];
        var _$Rutm_pmf_replace = ['pmf_group', 'pmf_medium', 'pmf_source', 'pmf_keyword', 'pmf_advname', 'pmf_id', 'pmf_id', 'pmf_group'];
        var _$Rbdu_replace = ['hmsr', 'hmmd', 'hmpl', 'hmci', 'hmkw', 'hmid'];
        var _$Rbdu_pmf_replace = ['pmf_group', 'pmf_medium', 'pmf_source', 'pmf_keyword', 'pmf_advname', 'pmf_id'];
        var _$Rsearchkey = ['baidu', 'baidu', 'google', 'yahoo', 'sogou', 'bing', 'youdao', 'soso', 'haosou', 'sm', 'so', 'www.chinatax.gov.cn'];
        var _$Rkeyword = ['wd', 'word', 'q', 'p', 'query', 'q', 'q', 'w', 'q', 'q', 'q', 'fullText'];
        var _$Rsearchtype = ['default', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'default', 'customer'];
        var _$Rkeywordrelated = ['bs', 'bs', '', '', '', '', 'lq', 'bs', '', '', '', ''];
        var _$Rhostname = _$Rdocument.location.hostname + (_$Rdocument.location.port.length > 0 ? ':' + _$Rdocument.location.port : '');
        var _$Rhostname_no_port = _$Rdocument.location.hostname;
        var _$Rcounturl_logcount = _$Rcounturl_proxy + '/logcount.php';
        var _$Rfirsttime;
        var _$Rlasttime;
        var _$Rnlasttime;
        var _$Rvisittime;
        var _$Rf_l_v_ck = 0;
        var _$Rreturncount;
        var _$Rusercookie;
        var _$Rsetusercookie;
        var _$Rserusercookie;
        var _$Rusername;
        var _$Ruserid;
        var _$Ruserregtime;
        var _$Ruserage;
        var _$Rusersex;
        var _$Rdomain = '';
        var _$Rrefid = new Array();
        var _$Rf_l_v_time = new Array();
        var _$Rgtd = window._trackData;
        _$Rrefid['phptag_recom_id'] = '';
        _$Rdomain = _$Rgethost(_$Rhostname_no_port);
        _Sauthor = _$Rtypeof(_Sauthor);
        _Spage_type = _$Rtypeof(_Spage_type);
        _Spage_pic = _$Rtypeof(_Spage_pic);
        _Spage_id = _$Rtypeof(_Spage_id);
        if (typeof(_Sload_time) == 'undefined') {
            _$Rdowntime = 0
        } else {
            _$Rstarttime = parseInt(_Sload_time);
            _$Rdowntime = _$Rdowntime - parseInt(_Sload_time)
        }
        _$Rfirsttime = _$Rgettimestr('f_t_');
        if (_$Rfirsttime === '') {
            _$Rfirsttime = _$Rgettime;
            _$Rf_l_v_ck = 1
        }
        if (_$Rgtd && _$Rgtd.length) {
            for (var _$Rk in _$Rgtd) {
                if (!isNaN(_$Rk)) {
                    for (var _$Rkk in _$Rgtd[_$Rk]) {
                        if (_$Rgtd[_$Rk]['0'] == 'userset' && _$Rgtd[_$Rk]['1'] == 'userid' && _$Rgtd[_$Rk]['2'].length) {
                            _$Ruserid = _$Rgtd[_$Rk]['2'];
                            _$Rsetflashcookie('yfx_s_u_id', _$Rgtd[_$Rk]['2'], 3650, _$Rdomain, '')
                        }
                        if (_$Rgtd[_$Rk]['0'] == 'userset' && _$Rgtd[_$Rk]['1'] == 'username' && _$Rgtd[_$Rk]['2'].length) {
                            _$Rusername = _$Rgtd[_$Rk]['2'];
                            _$Rsetflashcookie('yfx_s_u_name', _$Rgtd[_$Rk]['2'], 3650, _$Rdomain, '')
                        }
                        if (_$Rgtd[_$Rk]['0'] == 'userset' && _$Rgtd[_$Rk]['1'] == 'age' && _$Rgtd[_$Rk]['2'].length) {
                            _$Ruserage = _$Rgtd[_$Rk]['2'];
                            _$Rsetflashcookie('yfx_s_u_age', _$Rgtd[_$Rk]['2'], 3650, _$Rdomain, '')
                        }
                        if (_$Rgtd[_$Rk]['0'] == 'userset' && _$Rgtd[_$Rk]['1'] == 'sex' && _$Rgtd[_$Rk]['2'].length) {
                            _$Rusersex = _$Rgtd[_$Rk]['2'];
                            _$Rsetflashcookie('yfx_s_u_sex', _$Rgtd[_$Rk]['2'], 3650, _$Rdomain, '')
                        }
                        if (_$Rgtd[_$Rk]['0'] == 'userset' && _$Rgtd[_$Rk]['1'] == 'cookie' && _$Rgtd[_$Rk]['2'].length) {
                            _$Rsetusercookie = _$Rgtd[_$Rk]['2'];
                            _$Rsetflashcookie('yfx_s_c_g_u_id', _$Rgtd[_$Rk]['2'], 3650, _$Rdomain, '')
                        }
                        if (_$Rgtd[_$Rk]['0'] == 'userregtime' && _$Rgtd[_$Rk]['1'] == 'regtime' && _$Rgtd[_$Rk]['2'].length) {
                            _$Ruserregtime = _$Rgtd[_$Rk]['2'];
                            _$Rsetflashcookie('yfx_s_u_reg', _$Rgtd[_$Rk]['2'], 3650, _$Rdomain, '')
                        }
                    }
                }
            }
        }
        _$Rreturncount = _$Rgettimestr('r_c_');
        _$Rreturncount = _$Rreturncount === '' ? 0 : _$Rreturncount;
        _$Rusername = _$Rusername || (_$Rreadflashcookie('PHPSTATNULLCOOKIE') ? _$Rreadflashcookie('PHPSTATNULLCOOKIE') : (_$Rreadflashcookie('yfx_s_u_name') ? _$Rreadflashcookie('yfx_s_u_name') : _$Rreadflashcookie('yfx_s_u_id')));
        _$Ruserid = _$Ruserid || (_$Rreadflashcookie('PHPSTATNULLCOOKIE') ? _$Rreadflashcookie('PHPSTATNULLCOOKIE') : (_$Rreadflashcookie('yfx_s_u_id') ? _$Rreadflashcookie('yfx_s_u_id') : _$Rreadflashcookie('yfx_s_u_name')));
        _$Ruserage = _$Ruserage || (_$Rreadflashcookie('PHPSTATNULLCOOKIE') ? _$Rreadflashcookie('PHPSTATNULLCOOKIE') : _$Rreadflashcookie('yfx_s_u_age'));
        _$Ruserregtime = _$Ruserregtime || (_$Rreadflashcookie('PHPSTATNULLCOOKIE') ? _$Rreadflashcookie('PHPSTATNULLCOOKIE') : _$Rreadflashcookie('yfx_s_u_reg'));
        _$Rusersex = _$Rusersex || (_$Rreadflashcookie('PHPSTATNULLCOOKIE') ? _$Rreadflashcookie('PHPSTATNULLCOOKIE') : _$Rreadflashcookie('yfx_s_u_sex'));
        _$Rsetusercookie = _$Rsetusercookie || _$Rreadflashcookie('yfx_s_c_g_u_id');
        _$Rusercookie = _$Rsetusercookie || _$Rreadflashcookie('yfx_c_g_u_id');
        _$Rserusercookie = serverclientcookie || _$Rreadflashcookie('yfx_c_c_g_u_id');
        if (_$Rsetusercookie === '') {
            if (_$Rusercookie === '' && _$Rserusercookie === '') {
                _$Rusercookie = _$Runique();
                _$Rsetflashcookie('yfx_c_g_u_id', _$Rusercookie, 3650, _$Rdomain, '')
            }
            if (_$Rserusercookie && _$Rserusercookie !== _$Rusercookie) {
                _$Rusercookie = _$Rserusercookie;
                _$Rsetflashcookie('yfx_c_g_u_id', _$Rserusercookie, 3650, _$Rdomain, '')
            }
        } else if (_$Rsetusercookie) {
            _$Rusercookie = '_ck_' + _$Rsetusercookie;
            _$Rserusercookie = '_ck_' + _$Rsetusercookie
        }
        _$Rlasttime = _$Rnlasttime = _$Rgettimestr('r_t_');
        if (_$Rlasttime === '') {
            _$Rlasttime = _$Rnlasttime = _$Rgettime;
            _$Rf_l_v_ck = 1
        }
        if (_$Rgettime - _$Rlasttime >= 43200000) {
            _$Rnlasttime = _$Rgettime;
            _$Rreturncount++;
            _$Rf_l_v_ck = 1
        } else {
            _$Rreturncount = _$Rreturncount
        }
        _$Rvisittime = _$Rgettimestr('v_t_');
        if (_$Rvisittime === '' || (_$Rgettime - _$Rvisittime) >= 1800000) {
            _$Rvisittime = _$Rgettime;
            _$Rf_l_v_ck = 1
        }
        if (_$Rf_l_v_ck > 0) {
            _$Rf_l_v_time['0'] = 'f_t_' + _$Rfirsttime;
            _$Rf_l_v_time['1'] = 'r_t_' + _$Rnlasttime;
            _$Rf_l_v_time['2'] = 'v_t_' + _$Rvisittime;
            _$Rf_l_v_time['3'] = 'r_c_' + _$Rreturncount;
            _$Rsetflashcookie('yfx_f_l_v_t', _$Rf_l_v_time.join('__'), 3650, _$Rdomain, '')
        }
        _$Rvisittime = '_vk' + _$Rvisittime;

        function _$Rgethost(gethost) {
            var _$Rpattern = new Array();
            var _$Risdomain = 0;
            var _$Rdomainlen = 0;
            _$Rpattern['.com.cn'] = 4;
            _$Rpattern['.net.cn'] = 4;
            _$Rpattern['.gov.cn'] = 4;
            _$Rpattern['.org.cn'] = 4;
            _$Rpattern['.com'] = 3;
            _$Rpattern['.net'] = 3;
            _$Rpattern['.org'] = 3;
            _$Rpattern['.gov'] = 3;
            _$Rpattern['.cc'] = 3;
            _$Rpattern['.biz'] = 3;
            _$Rpattern['.info'] = 3;
            _$Rpattern['.cn'] = 3;
            _$Rpattern['.hk'] = 3;
            for (var $dk in _$Rpattern) {
                if (gethost.indexOf($dk) > -1) {
                    _$Risdomain = 1;
                    _$Rdomainlen = parseInt(_$Rpattern[$dk]);
                    break
                }
            }
            if (_$Rdomain.length <= 0) {
                if (_$Risdomain == 1) {
                    var s = gethost.split('.');
                    if (s.length >= (_$Rdomainlen)) {
                        s[0] = '';
                        _$Rdomain = (s.join('.')).substr(1)
                    } else {
                        _$Rdomain = gethost
                    }
                } else {
                    _$Rdomain = gethost
                }
                return _$Rdomain
            } else {
                return gethost
            }
        }

        function _$Rgt() {
            return (new Date()).getTime()
        }

        function _$Rencode(s) {
            return (typeof(encodeURIComponent) == "function") ? encodeURIComponent(s) : escape(s)
        }

        function _$Rdecode(s) {
            return (typeof(decodeURIComponent) == "function") ? decodeURIComponent(s) : unescape(s)
        }

        function _$Rid(id) {
            return _$Rdocument.getElementById(id)
        }

        function _$Rname(name) {
            return _$Rdocument.getElementsByName(name)
        }

        function _$Runique() {
            var T = new Date();
            var Y = T.getYear();
            var M = T.getMonth() + 1;
            var D = T.getDate();
            var H = T.getHours();
            var I = T.getMinutes();
            var S = T.getSeconds();
            var MS = T.getMilliseconds();
            Y = Y < 1900 ? Y + 1900 : Y;
            Y = (Y - 2000) <= 0 ? '10' : (Y - 2000);
            M = M < 10 ? '0' + '' + M : M;
            D = D < 10 ? '0' + '' + D : D;
            H = H < 10 ? '0' + '' + H : H;
            I = I < 10 ? '0' + '' + I : I;
            S = S < 10 ? '0' + '' + S : S;
            MS = (MS + 999) + '';
            return '_ck' + Y + '' + M + '' + D + '' + H + '' + I + '' + S + '' + MS.substr(0, 3) + '' + Math.uuid(14, 14)
        }

        function _$RgetYMD() {
            var T = new Date();
            var Y = T.getYear();
            var M = T.getMonth() + 1;
            var D = T.getDate();
            Y = Y < 1900 ? Y + 1900 : Y;
            M = M < 10 ? '0' + '' + M : M;
            D = D < 10 ? '0' + '' + D : D;
            return Y + '-' + M + '-' + D
        }

        function _$Rgettimestr(id) {
            id = id || 'f_t_';
            var flvt_ret = '';
            var flvt_arr = _$Rreadflashcookie('yfx_f_l_v_t').split('__');
            for (var vk in flvt_arr) {
                var vkv = _$Rtypeof(flvt_arr[vk]);
                if (vkv && vkv.indexOf(id) > -1) {
                    flvt_ret = vkv.replace(id, '')
                }
            }
            return flvt_ret
        }

        function _$Rreadflashcookie(name) {
            var cV = fcV = '';
            if (!_$Rphpstat_flash_object && !_$Rcookie) {
                return 'not_support_cookie'
            }
            if (_$Rphpstat_flash_object) {
                fcV = _$Rtypeof(_$Rphpstat_flash_object.get(name))
            }
            if (_$Rcookie) {
                cV = _$Rtypeof(_$Rreadcookie(name));
                if (cV !== fcV && fcV) {
                    cV = fcV;
                    _$Rsetcookie(name, fcV, 3650, _$Rdomain, '')
                }
                if (fcV === '' && cV && _$Rphpstat_flash_object) {
                    _$Rsetflashcookie(name, cV, 3650, _$Rdomain, '')
                }
            }
            return cV
        }

        function _$Rreadcookie(name) {
            var cV = end = '';
            var v = 'yfx_cookie_group_' + _$Rwebsite + '=';
            v = name + '_' + _$Rwebsite + '=';
            if (_$Rcookie) {
                var p = _$Rdocument.cookie.indexOf(v);
                if (p > -1) {
                    p += v.length;
                    end = _$Rdocument.cookie.indexOf(";", p);
                    if (end == -1) {
                        end = _$Rdocument.cookie.length
                    }
                    ;
                    cV = _$Rdecode(_$Rdocument.cookie.substring(p, end))
                }
                if (name != 'yfx_get_cookie_group' && 0) cV = _$Rgetgroupcookie(cV, name);
                return _$Rtypeof(cV)
            } else {
                return 'not_support_cookie'
            }
        }

        function _$Rsetflashcookie(name, gv, h, d, t) {
            if (!_$Rphpstat_flash_object && !_$Rcookie) {
                return 'not_support_cookie'
            }
            if (_$Rphpstat_flash_object) {
                _$Rphpstat_flash_object.set(name, gv)
            }
            if (_$Rcookie) {
                _$Rsetcookie(name, gv, h, d, t)
            }
        }

        function _$Rsetcookie(name, gv, h, d, t) {
            var v = '';
            if (_$Rcookie) {
                v = new Date(_$Rgt() + parseInt(h) * 24 * 60 * 60 * 1000);
                v = '; expires=' + v.toGMTString();
                if (t == '' && 0) {
                    gv = _$Rsetgroupcookie(name, gv);
                    name = 'yfx_cookie_group_' + _$Rwebsite
                }
                name = name + '_' + _$Rwebsite;
                _$Rdocument.cookie = name + '=' + _$Rencode(gv) + v + ';domain=' + d + ';path=/;'
            } else {
                return 'not_support_cookie'
            }
        }

        function _$Rgetgroupcookie(jsonname, name) {
            var returnstr = '';
            var groupcookie = new Array();
            groupcookie = _$Rdecode(jsonname).split('|:|');
            for (var jk in groupcookie) {
                var gcs = _$Rtypeof(groupcookie[jk]);
                if (gcs.indexOf(name + '=') >= 0) {
                    returnstr = gcs.substring((name + '=').length);
                    break
                }
            }
            return _$Rtypeof(returnstr) || ''
        }

        function _$Rsetgroupcookie(name, value) {
            var jsonname = _$Rreadcookie('yfx_get_cookie_group') || '';
            if (jsonname.indexOf(name + '=') < 0) {
                jsonname = jsonname + '|:|' + name + '=' + _$Rtypeof(value)
            } else {
                var groupcookie = new Array();
                groupcookie = _$Rdecode(jsonname).split('|:|');
                for (var jk in groupcookie) {
                    groupcookie[jk] = _$Rtypeof(groupcookie[jk]);
                    if (groupcookie[jk].indexOf(name + '=') >= 0) {
                        groupcookie[jk] = name + '=' + _$Rtypeof(value)
                    }
                }
                jsonname = groupcookie.join('|:|')
            }
            return jsonname
        }

        function _$Rtestnull(r) {
            if (typeof(r) === null || r === null) {
                return false
            } else if (typeof(r) === 'undefined' || r === 'undefined') {
                return false
            } else {
                return true
            }
        }

        function _$Rteststr(r) {
            if (typeof(r) === null || r === null) {
                return ''
            } else if (typeof(r) === 'undefined' || r === 'undefined') {
                return ''
            } else if (r === '') {
                return ''
            } else {
                return r
            }
        }

        function _$Rgeturlparam(u) {
            var i = 0,
                j = 0;
            var h = '',
                p = '';
            if ((i = u.indexOf("://")) < 0 && u.length > 0) {
                return {
                    h: u,
                    p: ''
                }
            }
            ;
            u = u.substring(i + 3);
            h = u.substring(0, u.indexOf('/'));
            if ((i = u.indexOf("/")) > -1) {
                if ((j = u.indexOf('#clickmapcode=')) > -1) {
                    p = u.substring(i, j)
                } else {
                    p = u.substring(i)
                }
            }
            ;
            return {
                h: h,
                p: p
            }
        }

        function _$Rgeturlkey(u, k) {
            var i, j, h = '';
            if ((i = u.indexOf('?' + k + '=')) > -1 || (i = u.indexOf('&' + k + '=')) > -1) {
                h = u.substring(i + 2 + k.length);
                j = h.indexOf('&');
                j = j <= 0 ? h.length : j;
                {
                    h = h.substring(0, j)
                }
            }
            return h
        }

        function _$Rgetkeyword(u, b) {
            var v, dv, i, j, h, k, rk, e, ek, f, p = 10;
            u = u.toLowerCase();
            h = _$Rgeturlparam(u).h;
            if (b == '_') {
                b = ''
            }
            for (var ii = 0; ii < _$Rsearchkey.length; ii++) {
                if (h.toLowerCase().indexOf('.' + _$Rsearchkey[ii].toLowerCase() + '.') > -1) {
                    if ((i = u.indexOf('?' + _$Rkeyword[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Rkeyword[ii] + '=')) > -1) {
                        k = u.substring(i + _$Rkeyword[ii].length + 2);
                        if (_$Rsearchtype[ii] == 'default') {
                            _$Rkeywordsource = _$Rsearchkey[ii] + b + '::' + k
                        }
                        _$Rkeywordkey = k;
                        v = '&KW=' + k + '&WC=' + _$Rsearchtype[ii] + '&WP=' + _$Rsearchkey[ii] + b;
                        if ((i = k.indexOf('&')) > -1) {
                            k = k.substring(0, i);
                            if (_$Rsearchtype[ii] == 'default') {
                                _$Rkeywordsource = _$Rsearchkey[ii] + b + '::' + k
                            }
                            _$Rkeywordkey = k;
                            v = '&KW=' + k + '&WC=' + _$Rsearchtype[ii] + '&WP=' + _$Rsearchkey[ii] + b
                        }
                    }
                    if ((i = u.indexOf('?' + _$Rkeywordrelated[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Rkeywordrelated[ii] + '=')) > -1) {
                        k = u.substring(i + _$Rkeywordrelated[ii].length + 2);
                        rk = '&RW=' + k;
                        if ((i = k.indexOf('&')) > -1) {
                            k = k.substring(0, i);
                            rk = '&RW=' + k
                        }
                    }
                }
            }
            ;
            v = v ? v : dv;
            if (_$Rtypeof(v) === '') {
                return ''
            } else if (rk) {
                return v + rk
            } else {
                return v
            }
        }

        function _$Rreplace_utm(s) {
            if (s.indexOf('pmf_source=') <= -1) {
                if (s.indexOf('utm_source=') > -1) {
                    for (var ii = 0; ii < _$Rutm_replace.length; ii++) {
                        s = s.replace(_$Rutm_replace[ii] + '=', _$Rutm_pmf_replace[ii] + '=')
                    }
                } else if (s.indexOf('hmsr=') > -1) {
                    for (var ii = 0; ii < _$Rbdu_replace.length; ii++) {
                        s = s.replace(_$Rbdu_replace[ii] + '=', _$Rbdu_pmf_replace[ii] + '=')
                    }
                }
            }
            return s
        }

        function _$Rgetmap(u) {
            var c = '';
            var s = new Array();
            if (u.indexOf('#clickmapcode=') > -1) {
                c = u.substring(14);
                s = c.split('|');
                s[2] = s[2] === '' ? _$Rwebsite : s[2];
                _$Rsetcookie('yfxm', s[0], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_t', s[1], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_code', s[2], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_site', s[3], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_p', s[4], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_s_d', s[5], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_e_d', s[6], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_sv', s[7], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_p_g', s[8], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_p_c', s[9], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_c', s[10], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_e', s[11], 1, _$Rdomain, '');
                _$Rsetcookie('yfxm_o', s[12], 1, _$Rdomain, '');
                return {
                    a: s[0],
                    b: s[1],
                    c: s[2],
                    d: s[3],
                    e: s[4],
                    f: s[5],
                    g: s[6],
                    h: s[7],
                    i: s[8],
                    j: s[9],
                    p: s[10],
                    q: s[11],
                    r: s[12],
                    ht: s[13] || '',
                    pu: s[14] || ''
                }
            } else if (_$Rreadcookie('yfxm') && _$Rreadcookie('yfxm_code') && _$Rreadcookie('yfxm_site')) {
                s[0] = _$Rreadcookie('yfxm');
                s[1] = _$Rreadcookie('yfxm_t');
                s[2] = _$Rreadcookie('yfxm_code');
                s[3] = _$Rreadcookie('yfxm_site');
                s[4] = _$Rreadcookie('yfxm_p');
                s[5] = _$Rreadcookie('yfxm_s_d');
                s[6] = _$Rreadcookie('yfxm_e_d');
                s[7] = _$Rreadcookie('yfxm_sv');
                s[8] = _$Rreadcookie('yfxm_p_g');
                s[9] = _$Rreadcookie('yfxm_p_c');
                s[10] = _$Rreadcookie('yfxm_c');
                s[11] = _$Rreadcookie('yfxm_e');
                s[12] = _$Rreadcookie('yfxm_o');
                s[13] = _$Rreadcookie('yfxm_h_h');
                s[14] = _$Rreadcookie('yfxm_h_p');
                return {
                    a: s[0],
                    b: s[1],
                    c: s[2],
                    d: s[3],
                    e: s[4],
                    f: s[5],
                    g: s[6],
                    h: s[7],
                    i: s[8],
                    j: s[9],
                    p: s[10],
                    q: s[11],
                    r: s[12],
                    ht: s[13] || '',
                    pu: s[14] || ''
                }
            } else {
                return {
                    a: '',
                    b: '',
                    c: '',
                    d: '',
                    e: '',
                    f: '',
                    g: '',
                    h: '',
                    i: '',
                    j: '',
                    p: '',
                    q: '',
                    r: '',
                    ht: '',
                    pu: ''
                }
            }
        }

        function _$Rgettag(u) {
            var c = '';
            var s = new Array();
            if (u.indexOf('#tagcontent=') > -1) {
                c = u.substring(12);
                s = c.split('|');
                return {
                    a: s[0],
                    b: s[1]
                }
            } else {
                return {
                    a: '',
                    b: ''
                }
            }
        }

        function _$Rgetpagetag(u) {
            var c = '';
            var s = new Array();
            if (u.indexOf('#pagecontent=') > -1) {
                c = u.substring(13);
                s = c.split('|');
                return {
                    a: s[0],
                    b: s[1],
                    c: s[2]
                }
            } else {
                return {
                    a: '',
                    b: '',
                    c: ''
                }
            }
        }

        function _$Rjsgif(gs) {
            if (_$Ris_can_record == 0) {
                return
            }
            var gif = new Image();
            gif.onload = function () {
                gif.onload = null;
                _$Rdoimgerr_1 = 1
            };
            gif.onerror = function () {
                _$Rjsgif(gs);
                _$Rdoimgerr_1++
            };
            if (_$Rdoimgerr_1 <= 2) {
                gif.src = gs
            }
        }

        function _$Rparseurl(u) {
            var p = new Array();
            u = u + '&phpstat';
            var c = u.replace(/^\?/, '').split('&');
            for (var b = 0; b < c.length; b++) {
                var e = c[b].split('=');
                p[e[0]] = e[1]
            }
            return p
        }

        function _$Rtypeof(tp) {
            var rp = tp;
            if (tp === null) {
                rp = ''
            } else if (typeof(tp) === 'undefined') {
                rp = ''
            } else if (typeof(tp) === 'object') {
                rp = ''
            } else if (typeof(tp) === 'function') {
                rp = ''
            }
            return rp
        }

        function _$Rsetfirst(fvar, nvalue) {
            if (_$Rtypeof(fvar) == '') {
                _$Rsetcookie('yfx_mr_f', nvalue, 30, _$Rdomain, '')
            }
        }

        var _$Rjava = 0;
        if (navigator.javaEnabled()) {
            _$Rjava = '1'
        }
        var _$Rbrowser = /(weibo|micromessenger)/.exec(_$Ruseragent);
        if (!_$Rbrowser) {
            _$Rbrowser = /(firefox|360se|sogou|lbbrowser|bidubrowser|tencenttraveler|theworld|maxthon|opera|ucweb|konqueror|lynx|greenbrowser|netcaptor|netscape|safari|chrome)/.exec(_$Ruseragent)
        }
        if (!_$Rbrowser) {
            _$Rbrowser = /(msie) ([0-9\.]*)[^;)]/.exec(_$Ruseragent)
        }
        _$Rbrowser = _$Rbrowser === null ? 'other' : _$Rbrowser[0];
        var _$Rsystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh) ([0-9\.]*)[^;)]/.exec(_$Ruseragent);
        _$Rsystem = _$Rsystem === null ? 'other' : _$Rsystem[0];
        var _$Ralexa = (_$Ruseragent.indexOf('alexa') !== -1) === false ? '0' : '1';
        var _$Rflash = _$Rflashok.f;
        var _$Rpathname = _$Rdocument.location.pathname;
        var _$Rfreferrer = _$Rgeturlparam(_$Rreferrer);
        var _$Rfreferrerhost = _$Rfreferrer.h;
        var _$Rref = _$Rencode(_$Rfreferrer.p);
        var _$Rmapcode = _$Rgetmap(_$Rhashcode);
        var _$Rtagcode = _$Rgettag(_$Rhashcode);
        var _$Rpagecode = _$Rgetpagetag(_$Rhashcode);
        var _$Rsearch = _$Rreplace_utm(_$Rdocument.location.search);
        if (_$Rhashcode && 0) {
            _$Rsearch = _$Rsearch + _$Rhashcode
        }
        _$Rpathname = _$Rencode(_$Rpathname + _$Rsearch);
        _$Rpartner_website = _$Rreadflashcookie('yfx_p');
        _$Rmediumsource = _$Rreadflashcookie('yfx_mr');
        _$Rmediumsourcefirst = _$Rreadflashcookie('yfx_mr_f');
        _$Redmemail = _$Rreadflashcookie('yfx_e');
        var _$Ris_can_record = 1;
        var _$Rparseurlarr = _$Rparseurl(_$Rsearch);
        var _$Rpmf_key = _$Rtypeof(_$Rparseurlarr['k']);
        var _$Rpmf_from = _$Rtypeof(_$Rparseurlarr['f']);
        var _$Rpmf_key_macth = _$Rtypeof(_$Rparseurlarr['m']);
        var _$Rpmf_key_word = _$Rtypeof(_$Rparseurlarr['w']);
        var _$Rpmf_key_id = _$Rtypeof(_$Rparseurlarr['kid']);
        var _$Rpmf_key_tid = _$Rtypeof(_$Rparseurlarr['tid']);
        var _$Rpmf_gclid = _$Rtypeof(_$Rparseurlarr['gclid']);
        var _$Rpmf_bdclkid = _$Rtypeof(_$Rparseurlarr['bdclkid']);
        var _$Rpmf_group = _$Rtypeof(_$Rparseurlarr['pmf_group']);
        var _$Rpmf_medium = _$Rtypeof(_$Rparseurlarr['pmf_medium']);
        var _$Rpmf_source = _$Rtypeof(_$Rparseurlarr['pmf_source']);
        var _$Rpmf_match = _$Rtypeof(_$Rparseurlarr['pmf_match']);
        var _$Rpmf_keyword = _$Rtypeof(_$Rparseurlarr['pmf_keyword']);
        var _$Rpmf_advname = _$Rtypeof(_$Rparseurlarr['pmf_advname']);
        var _$Rpmf_partner = _$Rtypeof(_$Rparseurlarr['pmf_partner']);
        var _$Rpmf_email = _$Rtypeof(_$Rparseurlarr['pmf_email']);
        var _$Rpmf_area = _$Rtypeof(_$Rparseurlarr['pmf_area']);
        var _$Rpmf_id = _$Rtypeof(_$Rparseurlarr['pmf_id']);
        var _$Rpmf_tid = _$Rtypeof(_$Rparseurlarr['pmf_tid']);
        var _$Rpmf_tui_id = _$Rpmf_tid ? _$Rpmf_tid : _$Rpmf_key_tid;
        if (_$Rpmf_tui_id) {
            _$Rsetflashcookie('yfx_f_id', _$Rpmf_tui_id, 3650, _$Rdomain, '')
        } else {
            _$Rpmf_tui_id = _$Rreadflashcookie('yfx_f_id')
        }
        if (_$Rpagecode.a && _$Rpagecode.b && _$Rpagecode.c) {
            var ac = 'pageab_' + _$Rpagecode.a + '_' + _$Rpagecode.c;
            _$Rsetflashcookie('yfx_p_ab_' + _$Rpagecode.a, _$Rpagecode.c, 30, _$Rdomain, 'new');
            _trackData.push(['addclick', 'HTML', ac, _$Rpagecode.c])
        }
        if (_$Rmapcode.a && _$Rmapcode.b && _$Rmapcode.c) {
            _$Ris_can_record = 0
        } else if (_$Rhashcode.indexOf('#visitorplay') > -1) {
            _$Ris_can_record = 0
        } else if (_$Rhashcode.indexOf('#onlinevisitor') > -1) {
            _$Ris_can_record = 0
        } else if (_$Rpathname.indexOf('fromclickhot') > -1) {
            _$Ris_can_record = 0
        }
        if (_$Rpmf_medium && _$Rpmf_medium.indexOf('market_type_') <= -1) {
            _$Rpmf_medium = "market_type_" + _$Rpmf_medium
        }
        var _$Rpstac = _$Rtypeof(_$Rparseurlarr['pstac']);
        if ((_$Rpmf_medium && _$Rpmf_source) || ((_$Rpmf_gclid || _$Rpmf_bdclkid) && _$Rpmf_key !== 'ppc')) {
            _$Rpmf_key = 'ppc'
        }
        var _$Rpmf_channel = _$Rpmf_medium;
        var _$Rsearchkeyword = _$Rgetkeyword(_$Rreferrer, '_' + _$Rpmf_key);
        if (_$Rpmf_medium && _$Rpmf_source) {
            _$Rmediumsource = _$Rpmf_group + '::' + _$Rpmf_medium + '::' + _$Rpmf_source + '::' + _$Rkeywordsource + '::' + _$Rpmf_match + '::' + _$Rpmf_keyword + '::' + _$Rfreferrerhost + '::' + _$Rpmf_id + '::pmf_from_adv';
            _$Rsetflashcookie('yfx_mr', _$Rmediumsource, 3650, _$Rdomain, '');
            _$Rsetfirst(_$Rmediumsourcefirst, _$Rmediumsource);
            _$Rsetflashcookie('yfx_key', _$Rkeywordkey, 3650, _$Rdomain, '')
        } else if (_$Rpmf_key && _$Rpmf_from && _$Rmediumsource.indexOf('pmf_from_adv') <= -1) {
            _$Rpmf_channel = 'market_type_paid_search';
            _$Rmediumsource = _$Rpmf_group + '::market_type_paid_search::::' + _$Rkeywordsource + '::' + _$Rpmf_key_macth + '::' + _$Rpmf_key_word + '::' + _$Rfreferrerhost + '::' + _$Rpmf_key_id + '_' + _$Rpmf_from + '_' + _$Rpmf_key + '::pmf_from_paid_search';
            _$Rsetflashcookie('yfx_mr', _$Rmediumsource, 3650, _$Rdomain, '');
            _$Rsetfirst(_$Rmediumsourcefirst, _$Rmediumsource);
            _$Rsetflashcookie('yfx_key', _$Rkeywordkey, 3650, _$Rdomain, '')
        } else if (_$Rkeywordsource && _$Rmediumsource.indexOf('pmf_from_paid_search') <= -1) {
            _$Rpmf_channel = 'market_type_free_search';
            _$Rmediumsource = _$Rpmf_group + '::market_type_free_search::::' + _$Rkeywordsource + '::::::' + _$Rfreferrerhost + '::::pmf_from_free_search';
            _$Rsetflashcookie('yfx_mr', _$Rmediumsource, 3650, _$Rdomain, '');
            _$Rsetfirst(_$Rmediumsourcefirst, _$Rmediumsource);
            _$Rsetflashcookie('yfx_key', _$Rkeywordkey, 3650, _$Rdomain, '')
        }
        _$Rkeywordkey = _$Rreadcookie('yfx_key');
        if (_$Rpmf_partner) {
            _$Rpartner_website = _$Rpmf_partner;
            _$Rsetflashcookie('yfx_p', _$Rpartner_website, 3650, _$Rdomain, '')
        }
        if (_$Rpmf_email) {
            _$Redmemail = _$Rpmf_group + '::' + _$Rpmf_medium + '::' + _$Rpmf_source + '::' + _$Rpmf_email + '::' + _$Rpmf_area + '::pmf_from_edm';
            _$Rsetflashcookie('yfx_e', _$Redmemail, 3650, _$Rdomain, '')
        }
        _$Rmediumsourcefirst = _$Rmediumsourcefirst == _$Rmediumsource ? 'same' : _$Rmediumsource;
        var _$Rcourl = _$Rcounturl_logcount + '?WS=' + _$Rwebsite + '&RD=common&SWS=' + _$Rteststr(_$Rpartner_website) + '&SWSID=' + _$Rteststr(_Schannel_website_id) + '&SWSPID=' + _$Rteststr(_Schannel_webshop_id) + '&JSVER=' + _$RVersion + '&TDT=' + _$Rteststr(_trackDataType) + '&UC=' + _$Rusercookie + '&LUC=' + (_$Rserusercookie == _$Rusercookie ? 'same' : _$Rserusercookie) + '&VUC=' + _$Rvisittime + '&FS=' + _$Rfreferrerhost + '&RF=' + _$Rencode(_$Rref) + '&PS=' + _$Rhostname + '&PU=' + _$Rpathname + _$Rsearchkeyword + '&PT=' + _Spage_type + '&PER=' + _$Riserror + '&PC=' + _$Rencode(_Spage_pic) + '&PI=' + _Spage_id + '&LM=' + _$Rlastmodify + '&LG=' + _$Rlanguage + '&CL=' + _$Rcolor + '&CK=' + _$Rcookie + '&SS=' + _$Rscreensize + '&SCW=' + _$Rclientwidth + '&SCH=' + _$Rclientheight + '&SSH=' + _$Rscrollheight + '&FT=' + _$Rfirsttime + '&LT=' + _$Rlasttime + '&DL=' + _$Rdowntime + '&FL=' + _$Rflash + '&CKT=' + cookietype + '&JV=' + _$Rjava + '&AL=' + _$Ralexa + '&SY=' + _$Rencode(_$Rsystem) + '&BR=' + _$Rencode(_$Rbrowser) + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&AU=' + _Sauthor + '&UN=' + _$Rencode(_$Rusername) + '&UID=' + _$Rencode(_$Ruserid) + '&URT=' + _$Rencode(_$Ruserregtime) + '&UA=' + _$Rencode(_$Ruserage) + '&US=' + _$Rencode(_$Rusersex) + '&TID=' + _$Rencode(_$Rpmf_tui_id) + '&MT=' + _$Rtelphone + '&FMSRC=' + _$Rencode(_$Rmediumsourcefirst) + '&MSRC=' + _$Rencode(_$Rmediumsource) + '&MSCH=&EDM=' + _$Rencode(_$Redmemail) + '&RC=' + _$Rreturncount + '&SHPIC=&MID=' + _$Rrandomid + '&TT=' + _$Rencode(_$Rtitle) + "&CHK=" + _$Runicode(_$Rwebsite + _$Rrandomid) + "&SHT=" + _$Rdomain + "&RDM=" + Math.random();
        var _$Rclickhotokstr = true;

        function _$Rcreatejs() {
            if (_$Rmapcode.a && _$Rmapcode.b && _$Rmapcode.c) {
                _$Rclickhotokstr = false;
                var _$Rurl = _$Rcounturl + '/clickareamap.js.php';
                var _$Robj = _$Rdocument.createElement('script');
                _$Robj.type = 'text/javascript';
                _$Robj.async = true;
                _$Robj.id = 'clickareamap_id';
                _$Robj.charset = 'utf-8';
                var _$Rpage_site = _$Rhostname;
                var _$Rpath_name = _$Rpathname;
                if (_$Rpathname.indexOf('clickhotcount') > -1 && _$Rmapcode.ht && _$Rmapcode.pu) {
                    _$Rpage_site = _$Rmapcode.ht;
                    _$Rpath_name = _$Rmapcode.pu
                }
                var _$Rdurl = _$Rurl + '?jsprefix=yfx_&clicktype=' + _$Rmapcode.a + '&areatype=' + _$Rmapcode.b + '&website=' + _$Rmapcode.d + '&server=' + _$Rmapcode.h + '&starttime=' + _$Rreadcookie('yfxm_s_d') + '&endtime=' + _$Rreadcookie('yfxm_e_d') + '&fromtype=' + _$Rreadcookie('yfxm_f') + '&pagesite=' + _$Rpage_site + '&pageurl=' + _$Rpath_name + '&pagegroup=' + _$Rmapcode.i + '&rand=' + Math.random() + '&clickmapcode=' + _$Rmapcode.c + '&clickmapposition=' + _$Rmapcode.e + '&counturl=' + _$Rencode(_$Rcounturl) + '&type=' + _$Rmapcode.j + '&chose=' + _$Rmapcode.p + '&first=' + _$Rmapcode.q + '&order=' + _$Rmapcode.r + '&hashcode=' + _$Rencode(_$Rhashcode.substr(1));
                _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Robj);
                setTimeout("_$Rdocument.getElementById('clickareamap_id').src='" + _$Rdurl + "'; ", 1500)
            }
            if (30) {
                var _$Rurl = _$Rcounturl + '/onlinevisite.js.php';
                var _$Robj = _$Rdocument.createElement('script');
                _$Robj.type = 'text/javascript';
                _$Robj.async = true;
                _$Robj.id = 'onlinevisite_id';
                _$Robj.charset = 'utf-8';
                var _$Rdurl = _$Rurl + '?counturl=' + _$Rencode(_$Rcounturl) + '&WS=' + _$Rwebsite + '&CK=' + _$Rencode(_$Rusercookie) + '&UN=' + _$Rencode(_$Rusername) + '&clientw=' + _$Rclientwidth + '&clienth=' + _$Rclientheight + '&platform=' + _$Rsystem + '&rand=' + Math.random();
                _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Robj);
                setTimeout("_$Rdocument.getElementById('onlinevisite_id').src='" + _$Rdurl + "'; ", 1600)
            }
            if (_$Rhashcode.indexOf('#visitorplay') > -1) {
                if (_$Rhashcode.indexOf('|dtest') > -1) var _$Rurl = '//test.yeefx.cn/phpstat/visitorplay.js.php';
                else var _$Rurl = _$Rcounturl + '/visitorplay.js.php';
                var _$Robj = _$Rdocument.createElement('script');
                _$Robj.type = 'text/javascript';
                _$Robj.async = true;
                _$Robj.id = 'visitorplay_id';
                _$Robj.charset = 'utf-8';
                var _$Rdurl = _$Rurl + '?counturl=' + _$Rencode(_$Rcounturl) + '&WS=' + _$Rwebsite + '&pagesite=' + _$Rhostname + '&pageurl=' + _$Rpathname + '&hashcode=' + _$Rencode(_$Rhashcode.substr(1)) + '&width=' + _$Rclientwidth + '&rand=' + Math.random();
                _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Robj);
                setTimeout("_$Rdocument.getElementById('visitorplay_id').src='" + _$Rdurl + "'; ", 1700)
            }
            if (_$Rhashcode.indexOf('#onlinevisitor') > -1) {
                if (_$Rhashcode.indexOf('|dtest') > -1) var _$Rurl = '//test.yeefx.cn/phpstat/onlinevisitor.js.php';
                else var _$Rurl = _$Rcounturl + '/onlinevisitor.js.php';
                var _$Robj = _$Rdocument.createElement('script');
                _$Robj.type = 'text/javascript';
                _$Robj.async = true;
                _$Robj.id = 'onlinevisitor_id';
                _$Robj.charset = 'utf-8';
                var _$Rdurl = _$Rurl + '?counturl=' + _$Rencode(_$Rcounturl) + '&WS=' + _$Rwebsite + '&pagesite=' + _$Rhostname + '&pageurl=' + _$Rpathname + '&height=' + _$Rclientheight + '&hashcode=' + _$Rencode(_$Rhashcode.substr(1)) + '&rand=' + Math.random();
                _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Robj);
                setTimeout("_$Rdocument.getElementById('onlinevisitor_id').src='" + _$Rdurl + "'; ", 1800)
            }
            if (false) {
                if (_$Rtagcode.a && _$Rtagcode.b) {
                    var _$Rturl = _$Rcounturl_proxy + '/optimizer.js.php';
                    var _$Rtobj = _$Rdocument.createElement('script');
                    _$Rtobj.type = 'text/javascript';
                    _$Rtobj.async = true;
                    _$Rtobj.id = 'tagcode_id';
                    _$Rtobj.charset = 'utf-8';
                    var _$Rdurl = _$Rturl + '?abtype=test&website=' + _$Rwebsite + '&abtestid=' + _$Rtagcode.a + '&tagcheckcode=' + _$Rtagcode.b + "&rand=" + Math.random();
                    _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Rtobj);
                    setTimeout("_$Rdocument.getElementById('tagcode_id').src='" + _$Rdurl + "'; ", 1900)
                } else {
                    var _$Rturl = _$Rcounturl_proxy + '/optimizer.js.php';
                    var _$Rtobj = _$Rdocument.createElement('script');
                    _$Rtobj.type = 'text/javascript';
                    _$Rtobj.async = true;
                    _$Rtobj.id = 'tagcode_id';
                    _$Rtobj.charset = 'utf-8';
                    var _$Rdurl = _$Rturl + '?abtype=show&website=' + _$Rwebsite + "&prefix=_$R&rand=" + Math.random();
                    _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Rtobj);
                    setTimeout("_$Rdocument.getElementById('tagcode_id').src='" + _$Rdurl + "'; ", 2000)
                }
            }
            if (_Spageformjs) {
                var _$Rturl = _$Rcounturl_proxy + '/formtrans.js.php';
                var _$Rtobj = _$Rdocument.createElement('script');
                _$Rtobj.type = 'text/javascript';
                _$Rtobj.async = true;
                _$Rtobj.id = 'formtrans_id';
                _$Rtobj.charset = 'utf-8';
                if (_$Rformlist && _$Rcfre_f) {
                    var _$Rdurl = _$Rturl + '?action=reaction&website=' + _$Rwebsite + '&swebsite=' + _$Rpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&uipcode=' + _$Rusercookie + '&luipcode=' + _$Rserusercookie + '&formlist=' + _$Rencode(_$Rformlist) + '&pagesite=' + _$Rhostname + '&phone=' + _$Rencode(_$Rtelphone) + '&system=' + _$Rencode(_$Rsystem) + '&medium=' + _$Rencode(_$Rmediumsource) + '&marknum=' + _$Rrandomid + '&prefix=_$R&rand=' + Math.random()
                }
                if (_$Rformhidden) {
                    var _$Rdurl = _$Rturl + '?action=hidden&website=' + _$Rwebsite + '&swebsite=' + _$Rpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&formlist=' + _$Rencode(_$Rformlist) + '&prefix=_$R&rand=' + Math.random()
                }
                _$Rdocument.getElementsByTagName('head').item(0).appendChild(_$Rtobj);
                setTimeout("_$Rdocument.getElementById('formtrans_id').src='" + _$Rdurl + "'; ", 2100)
            }
        }

        var _$Rformhiddenloop = 1;
        var _$Rclickhot;
        var _$Rdoimgerr_2 = 1;
        var _$Rclickhotok = 0;
        var _$Rmessageid = '';
        var _$Rformhidden = 0 || 0;
        var _$Rclickarray = new Array();
        var _$Rcf_f = 1 || 0;
        var _$Rcfre_f = 0 || 0;
        _$Rclickarray[0] = '(*)';
        var _$Rclickreg = '';
        if (_$Rclickarray[0] == 'clickhotall') {
            _$Rclickhotok = 1
        }

        function _$Rdotest(r) {
            r = r + '';
            r = r.replace(/\\/g, '\\/');
            r = r.replace(/\//g, '\\/');
            r = r.replace(/\*/g, '(.*)');
            return r
        }

        if (_$Rclickhot !== 'clickhot' && _$Rclickarray[0] !== 'clickhotall') {
            for (var ci = 0; ci < _$Rclickarray.length; ci++) {
                if (_$Rclickarray[ci].lastIndexOf('*') > -1) {
                    _$Rclickarray[ci] = _$Rdotest(_$Rclickarray[ci]);
                    if (_$Rclickarray[ci].indexOf('/') === 0) {
                        _$Rclickarray[ci] = _$Rclickarray[ci].substring(1)
                    }
                    _$Rclickreg = eval('/' + _$Rclickarray[ci] + '/ig');
                    if (_$Rclickreg.test(_$Rpathname)) {
                        _$Rclickhotok = 1;
                        break
                    }
                } else {
                    if (_$Rclickarray[ci].indexOf('/') !== 0) {
                        _$Rclickarray[ci] = '/' + _$Rclickarray[ci]
                    }
                    if (_$Rclickarray[ci] == _$Rpathname) {
                        _$Rclickhotok = 1;
                        break
                    }
                }
            }
        }
        var _$Rclienturlstr = '';
        var _$Rposarr = new Array();

        function _$Rtimelong(ini) {
            var tl = _$Rgt() - _$Rstarttime;
            if (tl >= 1800000) {
                tl = 1000
            }
            if (ini) {
                tl = _$Rgt() - _$Rtimestart;
                _$Rtimestart = _$Rgt()
            }
            tl <= 0 ? 0 : tl;
            return tl
        }

        function _$Rsetformfield(a, b) {
            if (typeof(_$Rformfielddetails[a][b]) == null || typeof(_$Rformfielddetails[a][b]) == 'undefined') {
                _$Rformfielddetails[a][b] = {
                    change: 0,
                    onkey: 0,
                    times: 0,
                    focus: 0,
                    errors: 0,
                    submits: 0,
                    inputinfo: 0
                }
            }
        }

        function _$Rinitevent(init) {
            var _$Rfn;
            var _$Rfc;
            _$Raddlistener(window, 'unload', _$Runload);
            _$Raddlistener(window, 'blur', _$Runload);
            if (_$Rcf_f) {
                for (var a = 0; a < _$Rdocument.forms.length; a++) {
                    _$Rfn = _$Rdocument.forms.item(a);
                    _$Rfc = _$Rfn.name || _$Rfn.id;
                    if (_$Rfc && _$Rcfre_f) {
                        _$Rformlist = _$Rformlist + _$Rfc + "::" + _$Rfn.action + "||";
                        _$Rformdetails[_$Rfc] = {
                            change: 0,
                            onkey: 0,
                            times: 0,
                            focus: 0,
                            submits: 0,
                            errors: 0,
                            inputinfo: 0
                        };
                        _$Rformfielddetails[_$Rfc] = {}
                    }
                    _$Rinitform(_$Rfn)
                }
                _$Rgetelementby(['form'], ['submit'], _$Rsubmit);
                _$Rgetelementby(['select', 'input', 'textarea'], ['change'], _$Rchangeselect);
                _$Rgetelementby(['select', 'input', 'textarea', 'button'], ['blur'], _$Rfocus);
                _$Rgetelementby(['select', 'input', 'textarea', 'button'], ['click'], _$Rclick)
            }
            if (init && 1) {
                _$Raddlistener(_$Rdocument, 'click', _$Rclick);
                _$Raddlistener(_$Rdocument, 'mousemove', _$Rmousemove)
            }
            if (init && _$Rcf_f && 0) {
                _$Raddlistener(_$Rdocument, 'keydown', _$Rkeydown);
                _$Raddlistener(_$Rdocument, 'keyup', _$Rkeyup)
            }
        }

        function _$Rrecord(a) {
            var s = '';
            if (parseInt(Math.random() * 100) < 9 * 10 && a.a === 'msmv') return;
            switch (a.a) {
                case 'msmv':
                    s = '||' + a.a + '::' + a.t + '::' + a.x + '::' + a.y + '::' + _$Rencode(a.i) + '::' + a.p;
                    _$Rcountdourl(s);
                    break;
                case 'clk':
                case 'fus':
                case 'link':
                case 'chn':
                case 'down':
                case 'onkey':
                case 'clkout':
                case 'submit':
                    s = '||' + a.a + '::' + _$Rencode(a.tn) + '::' + _$Rencode(a.i) + '::' + _$Rencode(a.n) + '::' + a.tp + '::' + _$Rencode(a.v) + '::' + _$Rencode(a.h) + '::' + _$Rencode(a.u) + '::' + a.t + '::' + a.x + '::' + a.y + '::' + a.p + '::' + _$Rencode(a.fn) + '::' + _$Rencode(a.fa) + '::' + a.e + '::' + a.ef + '::' + _$Rencode(a.msg) + '::' + _$Rencode(a.ak) + '::' + _$Rencode(a.eor);
                    _$Rcountdourl(s);
                    break;
                default:
                    _$Rcountdourl(a.a);
                    break
            }
        }

        function _$Runload() {
            _$Rloadgif(_$Rclienturlstr);
            _$Rclienturlstr = ''
        }

        function _$Rcountdourl(s) {
            _$Rclienturlstr += s;
            if (_$Rclienturlstr.length > 2048 && s) {
                _$Rloadgif(_$Rclienturlstr);
                _$Rclienturlstr = ''
            }
        }

        function _$Rdownload(p) {
            var ckda = new Array();
            ckda[0] = '.doc';
            ckda[1] = '.csv';
            ckda[2] = '.xls';
            ckda[3] = '.pdf';
            ckda[4] = '.rar';
            ckda[5] = '.zip';
            var _pin = p.toLowerCase();
            for (var ckdi = 0; ckdi < ckda.length; ckdi++) {
                if (_pin.indexOf(ckda[ckdi]) > -1) {
                    return 1
                }
            }
            return 0
        }

        function _$Rclickout(h) {
            var ckoa = new Array();
            if (ckoa.length <= 0) {
                return false
            }
            var hi = h.toLowerCase();
            for (var ci = 0; ci < ckoa.length; ci++) {
                ckoa[ci] = _$Rdotest(ckoa[ci])
            }
            var reg = eval('/' + ckoa.join('|') + '/ig');
            return (!reg.test(hi))
        }

        function _$Rtrackevent() {
            var s = '';
            var rs = '';
            var td = window._trackData;
            if (typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length) {
                s = _trackEvent.trackActionUrl;
                _trackEvent.trackActionUrl = ''
            } else if (td && td.length) {
                for (var k in td) {
                    if (!isNaN(k)) {
                        for (var kk in td[k]) {
                            if (td[k]['0'] == 'viewgoods') {
                                for (var rd in _$Rrefid) {
                                    rs = _$Rtypeof(_$Rparseurlarr[rd]);
                                    if (rs) {
                                        td[k]['9'] = rs
                                    }
                                }
                            }
                            var jsonid = 0;
                            var jsonarr = [];
                            var jsonrarr = new Array();
                            if (td[k]['0'] == 'addaction' && typeof(td[k]['3']) == 'object') {
                                jsonarr = td[k]['3'];
                                for (var jk in jsonarr) {
                                    jsonrarr[jsonid] = jk + ':' + jsonarr[jk];
                                    jsonid++
                                }
                                td[k]['3'] = jsonrarr.join('$')
                            }
                            if (td[k]['0'] == 'userset' && td[k]['1'] == 'userset' && typeof(td[k]['2']) == 'object') {
                                jsonarr = td[k]['2'];
                                for (var jk in jsonarr) {
                                    jsonrarr[jsonid] = jk + ':' + jsonarr[jk];
                                    jsonid++
                                }
                                td[k]['2'] = jsonrarr.join('$')
                            }
                            if (_$Rtestnull(_Sorder_encode_url) === false) td[k][kk] = _$Rencode(td[k][kk])
                        }
                        if (td[k].length == 1) {
                            s += '||' + td[k]['0']
                        } else {
                            s += '||' + (td[k].join('::'))
                        }
                    }
                }
                window._trackData = []
            }
            return s
        }

        function _$Rdirecttrackevent() {
            if (typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length) {
                _$Rloadgif('')
            } else if (window._trackData && window._trackData.length) {
                _$Rloadgif('')
            }
        }

        function _$Rloadgif(gs) {
            if (_$Ris_can_record == 0) {
                return
            }
            var gif = new Image();
            var clestr = gs + _$Rtrackevent();
            if (clestr.length <= 0) {
                return
            }
            gif.onload = function () {
                gif.onload = null;
                _$Rdoimgerr_2 = 1
            };
            gif.onerror = function () {
                _$Rloadgif(gs);
                _$Rdoimgerr_2++
            };
            if (_$Rdoimgerr_2 <= 2) {
                gif.src = _$Rcounturl_logcount + '?WS=' + _$Rwebsite + '&RD=record&SWS=' + _$Rteststr(_$Rpartner_website) + '&SWSID=' + _$Rteststr(_Schannel_website_id) + '&SWSPID=' + _$Rteststr(_Schannel_webshop_id) + '&JSVER=' + _$RVersion + '&TDT=' + _$Rteststr(_trackDataType) + '&UC=' + _$Rusercookie + '&LUC=' + (_$Rserusercookie == _$Rusercookie ? 'same' : _$Rserusercookie) + '&VUC=' + _$Rvisittime + '&UN=' + _$Rencode(_$Rusername) + '&UID=' + _$Rencode(_$Ruserid) + '&RC=' + _$Rreturncount + '&PS=' + _$Rhostname + '&PU=' + _$Rpathname + '&PT=' + _Spage_type + '&FS=' + _$Rfreferrerhost + '&RF=' + _$Rencode(_$Rref) + '&KW=' + _$Rkeywordkey + '&SS=' + _$Rscreensize + '&SW=' + _$Rscreen_width() + '&SCW=' + _$Rclient_width() + '&SCH=' + _$Rclientheight + '&SSH=' + _$Rscrollheight + '&BR=' + _$Rencode(_$Rbrowser) + '&LTL=' + Math.ceil(_$Rtimelong(1) / 1000) + '&MSRC=' + _$Rencode(_$Rmediumsource) + '&EDM=' + _$Rencode(_$Redmemail) + '&CLE=' + clestr + '&MID=' + _$Rrandomid + '&CHK=' + _$Runicode(_$Rwebsite + _$Rrandomid) + '&RDM=' + Math.random()
            }
            if (_$Rpstac.toLowerCase() == 'debug') _$Rmessage(gif.src)
        }

        function _$Raddlistener(a, b, c) {
            if (a.addEventListener) {
                a.addEventListener(b, c, false)
            } else {
                if (a.attachEvent) {
                    a.attachEvent('on' + b, c)
                }
            }
        }

        function _$Rclick(ev) {
            _$Rcountimg(ev);
            var b = ev.srcElement || ev.target;
            if (b && /input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
                _$Rchange(b, b.checked)
            }
            if (b && /button|img|input/i.test(b.tagName) && /submit|button/i.test(b.type)) {
                _$Rsubmit_button(b, ev)
            }
        }

        function _$Rrecodeelement(ele, eleev, eleslt, type, host, url, eff, fname) {
            var $v = $e = $x = $y = $fn = $fa = $gfn = $typekey = $p = '';
            var $error = _$Rerrorcode || '';
            _$Rerrorcode = '';
            $x = _$Rposition(ele).x;
            $y = _$Rposition(ele).y;
            $p = ele.type;
            if (type == 'fus') {
                $v = _$Rgetvalue(ele)
            }
            if ((type == 'clk' || type == 'down' || type == 'clkout') && ele.tagName == 'A') {
                $v = _$Rencode(ele.innerHTML.replace(/<[^>].*?>/g, '') || '');
                $x = _$Rcltxy(eleev).x;
                $y = _$Rcltxy(eleev).y;
                $e = _$Rencode(ele.getAttribute('phpstatevent') || '')
            }
            if (type == 'clk' && ele.tagName !== 'A') {
                $v = _$Rgetvalue(ele);
                $x = _$Rcltxy(eleev).x;
                $y = _$Rcltxy(eleev).y
            }
            if (type == 'chn') {
                $e = (eleslt === true ? 1 : (eleslt === false ? 0 : eleslt));
                $v = _$Rgetvalue(ele)
            }
            if (type == 'onkey') {
                $v = eff;
                $typekey = eleslt
            }
            if (type == 'msmv') {
                $x = _$Rcltxy(eleev).x;
                $y = _$Rcltxy(eleev).y
            }
            if ((/input|textarea|select|button/i.test(ele.tagName)) || (/img/i.test(ele.tagName) && /submit|button/i.test(ele.type))) {
                $gfn = _$Rgetformname(ele);
                $fn = $gfn.n;
                $fa = $gfn.a
            }
            if (type == 'submit') {
                $gfn = _$Rgetformname(ele);
                $fn = $gfn.n;
                $fa = $gfn.a
            }
            if (fname !== '') {
                $fn = fname
            }
            if ($p === 'password' && $v) {
                $v = '********'
            }
            $fa = '';
            var $ig = {
                pose: '',
                tagid: ''
            };
            $ig = _$Rinindeof(ele);
            var $fmsg = '';
            if ($fn && window._trackFormMsg && window._trackFormMsg.length > 0) {
                $fmsg = window._trackFormMsg
            }
            window._trackFormMsg = '';
            if ($fn && $fa && _$Rcfre_f) {
                var $eln_id = ele.name || ele.id;
                $eln_id = $eln_id || 'unname';
                _$Rsetformfield($fn, $eln_id);
                if ($eln_id != 'unname') {
                    if (type == 'chn') {
                        _$Rformdetails[$fn].change++;
                        _$Rformfielddetails[$fn][$eln_id].change++;
                        _$Rformdetails[$fn].inputinfo = $v;
                        _$Rformfielddetails[$fn][$eln_id].inputinfo = $v
                    }
                    if (type == 'onkey') {
                        _$Rformdetails[$fn].onkey++;
                        _$Rformfielddetails[$fn][$eln_id].onkey++
                    }
                    if (type == 'fus') {
                        _$Rformdetails[$fn].focus++;
                        _$Rformfielddetails[$fn][$eln_id].focus++
                    }
                    if (type == 'submit') {
                        _$Rformdetails[$fn].submits++;
                        _$Rformfielddetails[$fn][$eln_id].submits++
                    }
                    if ($fmsg && $fmsg.indexOf('==failed')) {
                        _$Rformdetails[$fn].errors++;
                        _$Rformfielddetails[$fn][$eln_id].errors++
                    }
                    _$Rformdetails[$fn].times = _$Rtimelong(0);
                    _$Rformfielddetails[$fn][$eln_id].times = _$Rtimelong(0)
                }
            }
            _$Rrecord({
                a: type,
                ak: $typekey,
                p: $ig.pose,
                h: host,
                u: url,
                t: _$Rtimelong(0),
                n: (_$Rtestobject(ele.name) || ''),
                i: ($ig.tagid || _$Rtestobject(ele.id)),
                v: $v,
                x: $x,
                y: $y,
                e: $e,
                tp: (_$Rtestobject(ele.type) || ''),
                tn: (_$Rtestobject(ele.tagName) || ''),
                fn: $fn,
                fa: $fa,
                ef: eff,
                msg: $fmsg,
                eor: $error
            })
        }

        function _$Rfocus(ev) {
            if (!ev) {
                var ev = event
            }
            var b = ev.srcElement || ev.target;
            if (b && /input|textarea|select/i.test(b.tagName)) {
                _$Rrecodeelement(b, ev, '', 'fus', '', '', 0, '')
            }
        }

        function _$Ronkey(ev, vc) {
            if (!ev) {
                var ev = event
            }
            var b = ev.srcElement || ev.target;
            var c = ev.keyCode || ev.charCode;
            if (/input|textarea|select/i.test(b.tagName)) {
                _$Rrecodeelement(b, ev, vc, 'onkey', '', '', c, '')
            }
        }

        function _$Rkeydown(ev) {
            _$Ronkey(ev, 'k_d')
        }

        function _$Rkeyup(ev) {
            _$Ronkey(ev, 'k_u')
        }

        function _$Rkeypress(ev) {
            _$Ronkey(ev, 'k_p')
        }

        function _$Rcountimg(ev) {
            if (!ev) {
                var ev = event
            }
            var b = ev.srcElement || ev.target;
            var c = b;
            while (b && (!b.href || /img/i.test(b.tagName))) {
                b = b.parentNode
            }
            var gettype = 'clk';
            var chu = clkhost = clkurl = '';
            if (b) {
                chu = _$Rgeturlparam(b.href);
                clkhost = chu.h;
                clkurl = chu.p;
                _$Rrecodeelement(b, ev, '', gettype, clkhost, clkurl, 0, '');
                if (_$Rdownload(b.href)) {
                    gettype = 'down';
                    _$Rrecodeelement(b, ev, '', gettype, clkhost, clkurl, 0, '')
                }
                if (_$Rclickout(clkhost)) {
                    gettype = 'clkout';
                    _$Rrecodeelement(b, ev, '', gettype, clkhost, clkurl, 0, '')
                }
            }
            if (c && b != c) {
                var eff = 0;
                var effid = 'id';
                if ((/img|input|textarea|select|a/i.test(c.tagName))) {
                    eff = 1
                }
                if ((/img/i.test(c.tagName)) && chu) {
                    effid = c.id || ''
                }
                if (effid == 'id' || effid) {
                    _$Rrecodeelement(c, ev, '', 'clk', '', '', eff, '')
                }
            }
        }

        function _$Rscreen_width() {
            return _$Rdocument.documentElement.scrollWidth
        }

        function _$Rclient_width() {
            return _$Rdocument.documentElement.clientWidth
        }

        function _$Rtestnull(r) {
            if (typeof(r) === null) {
                return false
            } else if (typeof(r) === 'undefined') {
                return false
            } else {
                return true
            }
        }

        function _$Rtestobject(r) {
            if (typeof(r) === 'object') {
                return ''
            } else {
                return r
            }
        }

        function _$Rinindeof(c) {
            while (c && !c.tagName) {
                c = c.parentNode
            }
            var i = 0;
            var b = c;
            var phptag = '';
            var fetchtag = 'phptag';
            var parentnodes = new Array();
            var resultarray = new Array();
            var resultarraystr = new Array();
            while (b && b !== _$Rdocument.body && b !== _$Rdocument.documentElement) {
                var ch = 1;
                var g = new Array();
                if (!_$Rtestnull(b.parentNode) || !b.parentNode) break;
                g = b.parentNode.childNodes;
                for (var e = 0; e < g.length; e++) {
                    if (g[e].tagName && g[e].tagName !== '!' && g[e].tagName !== 'SCRIPT') {
                        if (g[e] == b) {
                            break
                        }
                        ch++
                    }
                }
                if (ch < 10) {
                    parentnodes[i] = '0' + ch
                } else {
                    parentnodes[i] = ch
                }
                phptag = phptag == '' ? (b.getAttribute(fetchtag) || '') : phptag;
                b = b.parentNode;
                i++
            }
            resultarray = parentnodes.reverse();
            resultarraystr = resultarray.join('-');
            return {
                pose: resultarraystr,
                tagid: phptag
            }
        }

        function _$Rgetformname(c) {
            while (c && !c.tagName) {
                c = c.parentNode
            }
            var b = c;
            if (/input|textarea|select|img|button/i.test(c.tagName)) {
                var i = 0;
                while (b && b.tagName !== 'FORM') {
                    if (b.tagName == 'BODY') break;
                    b = b.parentNode;
                    i++
                }
            }
            if (b && b.tagName == 'FORM') {
                return {
                    n: ((b.getAttribute('name') || b.getAttribute('id')) || ''),
                    a: (b.getAttribute('action') || _$Rpathname)
                }
            } else {
                return {
                    n: '',
                    a: ''
                }
            }
        }

        function _$Rposition(b) {
            var a = {
                x: 0,
                y: 0
            };
            while (b.offsetParent) {
                a.x += parseInt(b.offsetLeft);
                a.y += parseInt(b.offsetTop);
                b = b.offsetParent
            }
            a.x += parseInt(b.offsetLeft);
            a.y += parseInt(b.offsetTop);
            return a
        }

        function _$Rgetxy() {
            var x = 0;
            var y = 0;
            if (_$Rdocument.body.scrollTop) {
                x = parseInt(_$Rdocument.body.scrollLeft);
                y = parseInt(_$Rdocument.body.scrollTop)
            } else {
                x = parseInt(_$Rdocument.documentElement.scrollLeft);
                y = parseInt(_$Rdocument.documentElement.scrollTop)
            }
            ;
            return {
                x: x,
                y: y
            }
        }

        function _$Ristable(a) {
            return (a.tagName == 'TBODY' || a.tagName == 'TR')
        }

        function _$Rchangeselect(c) {
            var b = c.srcElement || c.target;
            if (/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
                _$Rchange(b, b.checked)
            } else if (/input/i.test(b.tagName) && /text/i.test(b.type)) {
                _$Rchange(b, b.value.length)
            } else if (/textarea/i.test(b.tagName)) {
                _$Rchange(b, _$Rtxt_len(b.value))
            } else if (/select/i.test(b.tagName)) {
                _$Rchange(b, b.selectedIndex)
            }
        }

        function _$Rchange(b, a) {
            if (b.lastvalue && b.lastvalue == a) {
                return
            }
            ;
            _$Rrecodeelement(b, '', a, 'chn', '', '', 0, '');
            _$Rgetby_idname(b);
            _$Rhiddenele(b, b);
            b.lastvalue = a
        }

        function _$Rchange_com(b, a) {
            if (b.lastvalue && b.lastvalue == a) {
                return
            }
            ;
            b.lastvalue = a
        }

        function _$Rinitform(b) {
            for (var a = 0; a < b.elements.length; a++) {
                var c = b.elements[a];
                if (/input/i.test(c.tagName) && /checkbox|radio/i.test(c.type)) {
                    _$Rchange_com(c, c.checked)
                } else {
                    if (/input/i.test(c.tagName) && /text/i.test(c.type)) {
                        _$Rchange_com(c, c.value.length)
                    } else {
                        if (/textarea/i.test(c.tagName)) {
                            _$Rchange_com(c, _$Rtxt_len(c.value))
                        } else {
                            if (/select/i.test(c.tagName)) {
                                _$Rchange_com(c, c.selectedIndex)
                            }
                        }
                    }
                }
            }
        }

        function _$Rtxt_len(a) {
            return a.length - (a.split("\r").length - 1)
        }

        function _$Rcltxy(ev) {
            if (!ev) {
                var ev = event
            }
            var y = parseInt(ev.clientY) + parseInt(_$Rgetxy().y) - parseInt(_$Rdocument.getElementsByTagName('body')[0].offsetTop);
            var x = parseInt(ev.clientX) + parseInt(_$Rgetxy().x) - parseInt(_$Rdocument.getElementsByTagName('body')[0].offsetLeft);
            if (x > 5000 || x < 0) {
                x = 0
            }
            if (y > 50000 || y < 0) {
                y = 0
            }
            return {
                x: x,
                y: y
            }
        }

        function _$Rmousemove(ev) {
            var t = _$Rgt();
            var e = ev.srcElement || ev.target;
            if ((t - _$Rloadtime) > (parseInt(9) + 1) * 100) {
                _$Rrecodeelement(e, ev, 0, 'msmv', '', '', '', '')
            }
            _$Rloadtime = t
        }

        function _$Rgetvalue(a) {
            var rv = '';
            if (a.tagName == 'SELECT') {
                rv = a.options[a.selectedIndex].text || ''
            } else {
                rv = a.value || '';
                if (rv == '' && _$Rtestchildren(a) == 1) {
                    rv = a.innerHTML.replace(/<[^>].*?>/g, '') || ''
                }
            }
            rv = _$Rteststr(_$Rencode(rv.replace(/\s/g, '')));
            return rv.substring(0, 512)
        }

        function _$Rsubmit(ev) {
            if (!ev) {
                var ev = event
            }
            var b = ev.srcElement || ev.currentTarget;
            if (b) {
                _$Rrecodeelement(b, ev, '', 'submit', '', '', 0, '')
            }
        }

        function _$Rhiddenele(f, t) {
            var loop = 1;
            while (f && f.tagName !== 'FORM' && loop <= 10) {
                if (f && f.tagName === 'BODY') break;
                f = f.parentNode;
                t = f;
                loop++
            }
            if (f && f.tagName === 'FORM' && _$Rformhiddenloop <= 10) {
                var b = t.childNodes;
                for (var i = 0; i < b.length; i++) {
                    if (b[i] && b[i].tagName === 'INPUT' && (b[i].type === 'hidden' || b[i].style.display === 'none')) {
                        var b_lastvalue = _$Rteststr(_$Rgetvalue(b[i]));
                        b[i].lastvalue = _$Rteststr(b[i].lastvalue);
                        if (b_lastvalue && b[i].lastvalue !== b_lastvalue) {
                            _$Rrecodeelement(b[i], '', '', 'chn', '', '', 0, '');
                            b[i].lastvalue = b_lastvalue
                        }
                    } else {
                        _$Rhiddenele(f, b[i]);
                        _$Rformhiddenloop++
                    }
                }
            }
        }

        function _$Rtestchildren(f) {
            if (f) {
                return f.childNodes.length
            } else {
                return 0
            }
        }

        function _$Rsubmit_button(b, ev) {
            var i = 0;
            while (b && b.tagName !== 'FORM' && i <= 10) {
                if (b && b.tagName == 'BODY') break;
                b = b.parentNode;
                i++
            }
            if (b && b.tagName == 'FORM') {
                _$Rrecodeelement(b, ev, '', 'submit', '', '', 0, '');
                _$Rgetby_idname(b);
                _$Rhiddenele(b, b)
            }
        }

        function _$Rgetby_idname(b) {
            var i = 0;
            while (b && b.tagName !== 'FORM' && i <= 10) {
                if (b && b.tagName == 'BODY') break;
                b = b.parentNode;
                i++
            }
            if (b && b.tagName === 'FORM' && b.name && _$Rformlist && _$Rformhidden) {
                var gh = phpstat_do_hidden_form(b.name);
                for (var ghk in gh) {
                    var _fidv = _$Rteststr(_$Rid(gh[ghk]['ffield']));
                    if (_fidv === '') {
                        var _fidva = _$Rname(gh[ghk]['ffield']);
                        if (_fidva.length > 0) {
                            _fidv = _fidva['0']
                        }
                    }
                    if (_fidv) {
                        var b_lastvalue = _$Rteststr(_$Rgetvalue(_fidv));
                        _fidv.lastvalue = _$Rteststr(_fidv.lastvalue);
                        if (b_lastvalue && _fidv.lastvalue !== b_lastvalue) {
                            _$Rrecodeelement(_fidv, '', '', 'chn', '', '', 0, b.name);
                            _fidv.lastvalue = b_lastvalue
                        }
                    }
                }
            }
        }

        function _$Rgetelementby(b, f, a) {
            for (var d = 0; d < b.length; d++) {
                var j = _$Rdocument.getElementsByTagName(b[d]);
                for (var c = 0; c < j.length; c++) {
                    for (var g = 0; g < f.length; g++) {
                        _$Raddlistener(j[c], f[g], a)
                    }
                }
            }
        }

        function _$Rgetmessageid(a) {
            if (a.toLowerCase() == 'debug') {
                setTimeout(function () {
                    var _$Robj = _$Rdocument.createElement("div");
                    _$Robj.innerHTML = '<textarea id="pst_messageid" name="message" rows="12" cols="100" style="position: absolute; left:10px; bottom:20px; border: solid #6C358D;">' + _$Rcourl + '</textarea>';
                    _$Rdocument.getElementsByTagName('body').item(0).appendChild(_$Robj);
                    _$Rmessageid = _$Rdocument.getElementById('pst_messageid')
                }, 3000)
            }
        }

        function _$Rmessage(a) {
            if (_$Rmessageid) {
                _$Rmessageid.value = a
            }
        }

        _$Rgetmessageid(_$Rpstac);
        _$Rclickhotokstr ? setTimeout(function () {
            _$Rinitevent(_$Rclickhotok)
        }, 3000) : '';
        window.setInterval(function () {
            _$Runload()
        }, 5000);
        _$Rdirecttrackevent();
        _$Rjsgif(_$Rcourl);
        _$Rcreatejs();
        _$Rshare(_$Rusercookie)
    }

    function _$Rshare(userunique) {
    };
    if (_$Rprotocol.toString().toLowerCase().indexOf('http') > -1) {
        if (_$Risdownloadflash === 0) {
            var ghostvar = _$Rsplitdomain(_$Rthehostname);
            var _$Rclientcookie = _$Rreadmapcookie("yfx_c_c_g_u_id");
            if (_$Rchkdomain && _$Rcounturl.indexOf(_$Rchkdomain) > -1 && _$Rclientcookie === '') {
                _$Rgetservercookie(ghostvar, 'outfunc')
            } else {
                _$Rphpstat('HttpCookie', '')
            }
        } else {
            _$Rphpstat_flash_object = new phpstatCookie({
                namespace: 'namespace_phpstat',
                swf_url: _$Rcounturl_proxy + '/cookie/storage.swf?' + Math.random(),
                debug: false,
                onready: function () {
                    _$Rphpstat('FlashCookie', '')
                },
                onerror: function () {
                    _$Rphpstat('FlashCookie-err', '')
                }
            })
        }
    }
} catch (e) {
}