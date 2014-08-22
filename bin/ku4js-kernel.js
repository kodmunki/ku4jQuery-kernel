(function(R){function O(){$.ku4={author:"kodmunki\u2122",license:'The MIT License (MIT)\n\nCopyright (c) 2013 kodmunki\u2122.\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the "Software"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'}}try{O()}catch(V){$={};O()}$.isArray=function(e){return e instanceof Array};$.isBool=function(e){return(/boolean/i.test(typeof(e)))};$.isDate=function(e){return e instanceof Date};$.isEvent=function(l){try{return l instanceof Event}catch(ab){return l===window.event}};$.isNumber=function(e){return((/number/i.test(typeof(e)))||e instanceof Number)&&!isNaN(e)};$.isObject=function(e){return $.exists(e)&&(/object/i.test(typeof(e)))&&!($.isBool(e)||$.isNumber(e)||$.isDate(e)||$.isArray(e)||$.isString(e)||$.isFunction(e))};$.isObjectLiteral=function(e){return $.isObject(e)&&e.constructor==({}).constructor},$.isFunction=function(e){return(e instanceof Function)};$.isString=function(e){return(/string/i.test(typeof(e)))||e instanceof String};$.isZero=function(e){return e===0};$.isEven=function(e){return($.isNullOrEmpty(e)||$.isDate(e))?false:(isNaN(e)?false:($.isZero(e)?false:e%2===0))};$.isOdd=function(e){return($.isNullOrEmpty(e)||$.isDate(e))?false:(isNaN(e)?false:($.isZero(e)?false:!$.isEven(e)))};$.isNull=function(e){return e===null};$.isUndefined=function(e){return(/undefined/i.test(typeof(e)))};$.isEmpty=function(e){return $.isString(e)&&$.isZero(e.split(/\B/).length)};$.isNullOrEmpty=function(e){return !$.exists(e)||$.isEmpty(e)};$.exists=function(e){return(e!==null)&&(!$.isUndefined(e))};$.areEqual=function(l,e){if(this.exists(l)&&this.exists(e)){if(this.exists(l.equals)&&value.equals(e)){return true}if(this.exists(l.getTime)&&this.exists(e.getTime)&&l.getTime()==e.getTime()){return true}if(l===e){return true}else{return l===e}}else{return l===e}};$.xor=function(l,e){return !l!=!e};function r(l,ab,e,ad){var ac="ku4EXCEPTION @ {0}: {1}\n\nBrowser Stack Trace:\n{2}\n\nku4Trace:\n{3}";return new Error($.str.format(ac,l.toUpperCase(),ab,e,ad))}$.ku4exception=function(ab,ac){var l=arguments.callee.caller,ad="",e="";(function(){try{generate.exeception}catch(ag){e=($.exists(ag.stack))?ag.stack.replace(/generate is.+/,""):"[Unavailable]";var af=0,ah,ae;while(l&&(af<10)){ah=l.toString().replace(/[\n\t\r\s]+/g," ").substring(0,100);ae=ah.replace(/\W/g,"a").replace(/\s/g,"").replace(/.*base\.js:216/,"").split(/\B/).length>99?ah+"...":ah;ad+=$.str.format("<ku4Idx[{0}]>:{1}\n",af,ae);l=l.caller;af++}}})();return r(ab,ac,e,ad)};$.ku4Log=function(){try{console.log.apply(console,arguments)}catch(l){alert(Array.prototype.slice.call(arguments).join("\n"))}};$.replicate=function(ab){var e=($.isDate(ab))?new Date(ab):($.isArray(ab))?[]:($.isObject(ab))?{}:ab,l;for(n in ab){l=ab[n];e[n]=(($.isArray(l))||($.isObject(l)))?$.replicate(l):l}return e};if(!$.exists($.obj)){$.obj={}}$.obj.keys=function(l){var e=[];for(n in l){e[e.length]=n}return e};$.obj.values=function(l){var e=[];for(n in l){e[e.length]=l[n]}return e};$.obj.count=function(e){var l=0;for(n in e){l++}return l};$.obj.hasProp=function(e,l){return($.exists(e.hasOwnProperty))?e.hasOwnProperty(l):false};$.obj.merge=function(l,e){var ab=$.replicate(e);for(n in l){ab[n]=l[n]}return ab};$.obj.meld=function(ab,l){var e=$.replicate(l);for(n in ab){if($.exists(e[n])){continue}e[n]=ab[n]}return e};$.obj.filter=function(){var e=Array.prototype.slice.call(arguments),ac={},ad=e[0],ab=e.slice(1);for(var ae in ab){var l=ab[ae];ac[l]=ad[l]}return ac};if(!$.exists($.arr)){$.arr={}}$.arr.indexOfRegExp=function(ab,l){for(n in ab){var e=ab[n];if(l.test(ab[n])){return n}}return -1};$.Class=function(){};$.Class.prototype={get:function(e){return this["_"+e]},set:function(l,e){this["_"+l]=e;return this},property:function(l,e){return($.isUndefined(e))?this.get(l):this.set(l,e)}};$.Class.extend=function(l,e){if(!l||!e){return null}var ab=function(){};ab.prototype=e.prototype;l.base=e;l.prototype=$.obj.merge(l.prototype,new ab());l.prototype.constructor=l;return l};function d(e){d.base.call(this);this._isLocked=e||false}d.prototype={isLocked:function(){return this.get("isLocked")},lock:function(){this._isLocked=true;return this},unlock:function(){this._isLocked=false;return this}};$.Class.extend(d,$.Class);$.lock=function(e){return new d(e)};if(!$.exists($.math)){$.math={}}$.math.round=function(ac,ab){var l=ab||0,e=Math.pow(10,-l);return Math.round(parseFloat((ac*e).toFixed(Math.abs(l))))/e};$.math.roundUp=function(ac,ab){var l=ab||0,e=5*(Math.pow(10,l-1));return $.math.round(ac+e,ab)};$.math.roundDown=function(ac,ab){if(ac===0){return 0}var l=ab||0,e=5*(Math.pow(10,l-1));return $.math.round(ac-e,ab)};$.math.roundTowardZero=function(l,e){return(l<0)?$.math.roundUp(l,e):$.math.roundDown(l,e)};$.math.factorial=function(ab){var e=ab,l=ab;while(l--){if(!!l){e*=l}}return e};$.math.divide=function(l,e){var ab=$.isNumber(l)&&$.isNumber(e)&&!$.isZero(e);if(!ab){throw $.ku4exception("$.math",$.str.format("Invalid division. value: {0}/{1} | type: {2}/{3}",l,e,typeof l,typeof e))}return l/e};if(!$.exists($.str)){$.str={}}var W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";$.str.build=function(){return"".concat.apply(new String(),arguments)};$.str.format=function(){var ac=arguments,ae=ac[0],ab=ac.length,e,ad;for(i=1;i<ab;i++){e=ac[i];ad=($.isNull(e))?"null":($.isUndefined(e))?"undefined":e.toString();ae=ae.replace(RegExp("\\{"+(i-1)+"\\}","g"),ad)}return ae};$.str.render=function(l,ac,ab){var e=""+l;for(var ad in ac){e=e.replace(RegExp("\\{{"+ad+"\\}}","g"),ac[ad])}return $.exists(ab)?e.replace(/\{\{.*\}\}/g,ab):e};$.str.replaceCharsAtIndex=function(l,e,ab,ac){if($.isNullOrEmpty(l)||e<0||e>l.length||$.isNullOrEmpty(ac)){throw $.ku4exception("Argument Exception","Invalid arguments at $.str.replaceStringAtIndex")}return l.substring(0,e)+ac+l.substring(e+ab)};$.str.parse=function(){return String.fromCharCode.apply(String,arguments)};$.str.trim=function(e){return $.str.trimStart($.str.trimEnd(e))};$.str.trimStart=function(e){if(!$.isString(e)){throw new Error("Cannot trim non-string values")}return($.exists(e.replace))?e.replace(/^\s*\b/,""):e};$.str.trimEnd=function(e){if(!$.isString(e)){throw new Error("Cannot trim non-string values")}return($.exists(e.replace))?e.replace(/\b\s*$/,""):e};$.str.encodeBase64=function(ac){var ad="",ab=0,ak=$.str.encodeUtf8(ac),al,ai,ag,aj,ah,af,ae,e=function(am){return ak.charCodeAt(am)},l=function(am){return W.charAt(am)};while(ab<ak.length){al=e(ab++);ai=e(ab++);ag=e(ab++);aj=al>>2;ah=((al&3)<<4)|(ai>>4);af=((ai&15)<<2)|(ag>>6);ae=ag&63;if(isNaN(ai)){af=ae=64}else{if(isNaN(ag)){ae=64}}ad+=(l(aj)+l(ah)+l(af)+l(ae))}return ad};$.str.decodeBase64=function(ac){var ad="",ab=0,ak=ac.replace(/[^A-Za-z0-9\+\/\=]/g,""),al,ai,ag,aj,ah,af,ae,l=function(am){return W.indexOf(ak.charAt(am))},e=function(am){return String.fromCharCode(am)};while(ab<ak.length){aj=l(ab++);ah=l(ab++);af=l(ab++);ae=l(ab++);al=(aj<<2)|(ah>>4);ai=((ah&15)<<4)|(af>>2);ag=((af&3)<<6)|ae;ad+=e(al);if(af!=64){ad+=e(ai)}if(ae!=64){ad+=e(ag)}}return $.str.decodeUtf8(ad)};$.str.encodeUtf8=function(e){var ae="",ac=e.replace(/\r\n/g,"\n"),ad=function(ag){return ac.charCodeAt(ag)},ab=function(ag){return String.fromCharCode(ag)};for(var l=0;l<ac.length;l++){var af=ad(l);if(af<128){ae+=ab(af)}else{if((af>127)&&(af<2048)){ae+=(ab((af>>6)|192)+ab((af&63)|128))}else{ae+=ab((af>>12)|224)+ab(((af>>6)&63)|128)+ab((af&63)|128)}}}return ae};$.str.decodeUtf8=function(af){var ag="",ad=0,ae=0,ac=0,ab=0,ah=af,e=function(ai){return ah.charCodeAt(ai)},l=function(ai){return String.fromCharCode(ai)};while(ad<ah.length){ae=e(ad);if(ae<128){ag+=l(ae);ad++}else{if((ae>191)&&(ae<224)){ac=e(ad+1);ag+=l(((ae&31)<<6)|(ac&63));ad+=2}else{ac=e(ad+1);ab=e(ad+2);ag+=l(((ae&15)<<12)|((ac&63)<<6)|(ab&63));ad+=3}}}return ag};$.uid=function(){var l=Math.random().toString().replace(/\b\.\b/,""),e=Math.random().toString().replace(/\b\.\b/,"");return $.str.encodeBase64($.str.format("{0}x{1}",l,e)).replace(/=+/g,"0").substr(3,32)};function g(e,l,ab){g.base.call(this);this._local=e;this._domain=l;this._topLevelDomain=ab}g.prototype={local:function(){return this._local},domain:function(){return this._domain},topLevelDomain:function(){return this._topLevelDomain},equals:function(e){if(!$.exists(e)){return false}return e.local()==this._local&&e.domain().toUpperCase()==this._domain.toUpperCase()&&e.topLevelDomain().toUpperCase()==this._topLevelDomain.toUpperCase()},toString:function(){return $.str.format("{0}@{1}.{2}",this._local,this._domain,this._topLevelDomain)}};$.Class.extend(g,$.Class);$.emailAddress=function(e,l,ab){return new g(e,l,ab)};$.emailAddress.Class=g;$.emailAddress.parse=function(af){if(!($.exists(af))&&/@{1}/.test(af)){return null}var ac=af.split("@"),e=ac[1],ab=e.split("."),l=ac[0],ae=ab.splice(ab.length-1,1),ad=ab.join(".");return new g(l,ad,ae)};function h(e){h.base.call(this);this._value=e}h.prototype={value:function(){return this._value},equals:function(e){if(!$.exists(e)){return false}return e.value()==this._value},toStringWithFormat:function(l){var e=l;$.list((this._value.toString().split(""))).each(function(ab){e=e.replace("#",ab)});return e.replace(/#/g,"")}};$.Class.extend(h,$.Class);$.phoneNumber=function(e){return new h(e)};$.phoneNumber.Class=h;$.phoneNumber.parse=function(e){return new h(parseInt(e.replace(/[^0-9]/gi,"")))};function S(ab,e,l){S.base.call(this);this._first=ab;this._middle=e||"";this._last=l}S.prototype={first:function(){return this._first},middle:function(){return this._middle},last:function(){return this._last},full:function(){var e=($.isNullOrEmpty(this._middle))?"{F} {L}":"{F} {M} {L}";return this.toStringWithFormat(e)},initials:function(){var e=($.isNullOrEmpty(this._middle))?"{f}.{l}.":"{f}.{m}.{l}.";return this.toStringWithFormat(e)},equals:function(e){if(!$.exists(e)){return false}return e.first()==this._first&&e.middle()==this._middle&&e.last()==this._last},toStringWithFormat:function(ab){var e=this._first.charAt(0),l=this._middle.charAt(0),ac=this._last.charAt(0);return ab.replace("{F}",this._first).replace("{M}",this._middle).replace("{L}",this._last).replace("{f}",e).replace("{m}",l).replace("{l}",ac)}};$.Class.extend(S,$.Class);$.properName=function(ab,e,l){return new S(ab,e,l)};$.properName.Class=S;function Q(e){Q.base.call(this);this.$h={};this._count=0;var l=($.exists(e)&&$.exists(e.toObject))?e.toObject():e;for(var ab in l){this.add(ab,l[ab])}}Q.prototype={count:function(){return this.get("count")},keys:function(){return $.obj.keys(this.$h)},values:function(){return $.obj.values(this.$h)},add:function(l,e){if((!($.isString(l)||$.isNumber(l)))||/(^null$)|(^undefined$)/.test(l)||this.containsKey(l)){throw $.ku4exception("$.hash",$.str.format("Invalid key: {0}. Must be unique number or string.",l))}if($.isUndefined(e)){return this}this.$h[l]=e;this._count++;return this},clear:function(){var e=this.$h;for(n in e){delete e[n]}this._count=0;return this},find:function(e){if(!$.exists(e)){return null}return this.$h[e]},findKey:function(e){var l=this.$h;for(n in l){if($.areEqual(l[n],e)){return n}}return null},findValue:function(e){return this.find(e)},quit:function(){this._iterator.quit();return this},each:function(l,e){var ab=e||this;this._iterator=$.iterator(this.toObject());this._iterator.each(l,ab);return this},isEmpty:function(){return this._count<1},contains:function(e){if(!$.exists(e)||$.isNullOrEmpty(e)||$.hash(e).isEmpty()){return false}var ab=$.exists(e.toObject)?e:$.hash(e),l=true;ab.each(function(ad){if(!$.exists(ad)){l=false;ab.quit()}else{var ac=ad.key;l=this.containsKey(ac)&&$.areEqual(this.findValue(ac),ad.value);if(!l){ab.quit()}}},this);return l},containsKey:function(e){if(!$.exists(e)){return false}return !$.isUndefined(this.$h[e])},containsValue:function(l){var e=$.obj.values(this.$h),ab=e.length;while(ab--){if($.areEqual(e[ab],l)){return true}}return false},merge:function(e){return P(this,e,"merge")},meld:function(e){return P(this,e,"meld")},filter:function(){var e=[this.$h].concat(Array.prototype.slice.call(arguments));return $.hash($.obj.filter.apply($.obj,e))},remove:function(e){if(!this.containsKey(e)){return this}var l=this.$h;l[e]="value";delete l[e];this._count--;return this},replicate:function(){return $.hash($.replicate(this.$h))},toObject:function(){return this.$h},update:function(l,e){if((!($.isString(l)||$.isNumber(l)))||/(^null$)|(^undefined$)/.test(l)){throw $.ku4exception("$.hash",$.str.format("Invalid key: {0}. Must be number or string.",l))}if($.isUndefined(e)){return this}if(!this.containsKey(l)){this._count++}this.$h[l]=e;return this}};$.Class.extend(Q,$.Class);function P(ab,l,e){var ac=($.exists(l)&&$.exists(l.toObject))?l.toObject():l;ab.$h=$.obj[e](ac,ab.$h);ab._count=$.obj.count(ab.$h);return ab}$.hash=function(e){return new Q(e)};$.hash.Class=Q;function y(ab){y.base.call(this);this._keys=[];this._hash=$.hash();this._count=this._keys.length;if(!$.exists(ab)){return}var ad=0,e=ab.length;while(ad<e){var ac=ab[ad];if(!$.isUndefined(ac)){this.add(ac)}ad++}}y.prototype={count:function(){return this.get("count")},add:function(l){var e=this._keys,ab=$.uid();e[e.length]=ab;this._hash.add(ab,l);this._count=this._keys.length;return this},clear:function(){this._hash.clear();this._keys=[];this._count=this._keys.length;return this},contains:function(e){return this._hash.containsValue(e)},find:function(l){var e=this._keys;return($.exists(e[l]))?this._hash.find(e[l]):null},quit:function(){this._iterator.quit();return this},each:function(l,e){var ab=e||this;this._iterator=$.iterator(this.toArray());this._iterator.each(l,ab);return this},isEmpty:function(){return this._count<1},remove:function(ab){var l=this._hash;if(!this.contains(ab)){return this}var e=l.findKey(ab);this._keys.splice(e,1);l.remove(e);this._count=l.count();return this},toArray:function(){var e=[];this._hash.each(function(l){e.push(l.value)});return e}};$.Class.extend(y,$.Class);$.list=function(e){return new y(e)};$.list.Class=y;$.list.parseArguments=function(e){return new y(Array.prototype.slice.call(e))};function U(l,ab,e){U.base.call(this);if((ab<1)||(ab>12)){throw $.ku4exception("$.dayPoint",$.str.format("Invalid month= {0}",ab))}if((e<1)||(e>Z(ab,l))){throw $.ku4exception("$.dayPoint",$.str.format("Invalid date= {0}",e))}this._value=(arguments.length>=3)?new Date(l,ab-1,e):new Date();this._day=this._value.getDay();this._date=e;this._month=ab;this._year=l}U.prototype={value:function(){return this._value},day:function(){return this._day},date:function(){return this._date},month:function(){return this._month},year:function(){return this._year},shortYear:function(){var e=this._year.toString();return parseInt(e.substr(e.length-2))},isWeekday:function(){var e=this._day;return e>0&&e<6},isWeekend:function(){return !this.isWeekday()},isLeapYear:function(){return w(this._year)},nextDay:function(){return aa(this,1,0,0)},prevDay:function(){return aa(this,-1,0,0)},nextMonth:function(){return aa(this,0,1,0)},prevMonth:function(){return aa(this,0,-1,0)},nextYear:function(){return aa(this,0,0,1)},prevYear:function(){return aa(this,0,0,-1)},add:function(ae,e,ai){function ah(ak,ao,an){var al=ak,am=ao;while(am--){al=al[an]()}return al}var aj=Math.abs,ag=aj(ae),af=aj(ai),ab=aj(e),l=ae<0?"prevYear":"nextYear",ad=ai<0?"prevDay":"nextDay",ac=e<0?"prevMonth":"nextMonth";return ah(ah(ah(this,ag,l),ab,ac),af,ad)},firstDayOfMonth:function(){return new U(this._year,this._month,1)},lastDayOfMonth:function(){return new U(this._year,this._month,Z(this._month,this._year))},isBefore:function(e){return !(this.isAfter(e)||this.equals(e))},isAfter:function(l){var e=this._year,ac=l.year(),ab=this._month,ad=l.month();if(e>ac){return true}if((e==ac)&&(ab>ad)){return true}return((e==ac)&&(ab==ad)&&(this._date>l.date()))},equals:function(e){return(this._year==e.year())&&(this._month==e.month())&&(this._date==e.date())},toString:function(){return this.toStringWithFormat("mm/dd/yyyy")},toStringWithFormat:function(ac){var af=(/y{3,}/i.test(ac))?this._year:this.shortYear(),e=this._month,ae=this._date,ab="{0}",l=(/m{2}/i.test(ac)&&e<10)?"0{1}":"{1}",ad=(/d{2}/i.test(ac)&&ae<10)?"0{2}":"{2}";f=ac.replace(/y{1,}/gi,ab).replace(/m{1,}/gi,l).replace(/d{1,}/gi,ad);return $.str.format(f,af,e,ae)},toDate:function(){return this.value()},toJson:function(){return this.value().toJSON()}};$.Class.extend(U,$.Class);$.dayPoint=function(ad,ae,ab,e,ac,af,l){if(!($.isDate(ad)||($.isNumber(ad)&&$.isNumber(ae)&&$.isNumber(ab)))){return null}return new U(ad,ae,ab,e,ac,af,l)};$.dayPoint.Class=U;$.dayPoint.canParse=function(e){return($.isString(e)||$.isNumber(e)||$.isDate(e))?!isNaN(new Date(e).valueOf()):false};$.dayPoint.parse=function(e){if(e instanceof U){return e}var l=new Date(e);if(!$.exists(e)||isNaN(l).valueOf()){throw $.ku4exception("$.dayPoint",$.str.format("Cannot parse value= {0}",e))}return $.dayPoint(l.getFullYear(),l.getMonth()+1,l.getDate())};$.dayPoint.tryParse=function(e){return $.dayPoint.canParse(e)?$.dayPoint.parse(e):null};var N;$.dayPoint.assumeNow=function(e){N=$.dayPoint.parse(e)};$.dayPoint.today=function(){return N||$.dayPoint.parse(new Date())};function Z(ab,l){var e=ab,ac=l;if(e==2){return(w(ac))?29:28}return(((e<8)&&($.isEven(e)))||((e>7)&&($.isOdd(e))))?30:31}function w(e){var ab=e.toString().split(/\B/),l=parseFloat($.str.build(ab[ab.length-2],ab[ab.length-1]));return(l%4==0)}function aa(af,ak,ab,am){var ao=af.month(),ag=af.year(),ad=af.date(),e=Z(ao,ag),an=ak,ae=ab,aj=am,l=ad+an,ai=ao+ae,al=ag+aj;if((ad+an)>e){l=1;ai=(ao+(ae+1))}if((ad+an)<1){var ac=af.prevMonth(),l=Z(ac.month(),ac.year());(ai=ao+(ae-1))}if((ai)>12){ai=1;al=(ag+(aj+1))}if((ai)<1){ai=12;al=(ag+(aj-1))}var ah=Z(ai,al);l=(l>ah)?ah:l;return new U(al,ai,l)}function L(ab,l){if(!$.exists(ab)||isNaN(ab)){throw $.ku4exception("$.money",$.str.format("Invalid amount= {0}. Amount must be a number.",ab))}L.base.call(this);var e=$.math.roundTowardZero(ab);this._cents=ab-e;this._dollars=e;this._currency=l||"$";this._value=ab}L.prototype={value:function(){return this._value},dollars:function(){return this._dollars},cents:function(){return this._cents},currency:function(){return this._currency},add:function(e){B(this,e);return new L(this._value+e.value(),this._currency)},divide:function(e){if(!$.isNumber(e)){throw $.ku4exception("$.money",$.str.format("Invalid divisor value= {0}",e))}return new L(this._value/e,this._currency)},equals:function(e){return(this.isOfCurrency(e))&&(this._value==e.value())},exchange:function(l,e){return new L(this.multiply(l).value(),e)},isOfCurrency:function(e){return this._currency==e.currency()},isGreaterThan:function(e){B(this,e);return this._value>e.value()},isLessThan:function(e){B(this,e);return this._value<e.value()},multiply:function(e){if(!$.isNumber(e)){throw $.ku4exception("$.money",$.str.format("Invalid multiplier value= {0}",e))}return new L(this._value*e,this._currency)},nearestDollar:function(){return new L($.math.round(this.value(),0),this._currency)},round:function(){return new L($.math.round(this.value(),-2),this._currency)},roundDown:function(){return new L($.math.roundDown(this.value(),-2),this._currency)},roundUp:function(){return new L($.math.roundUp(this.value(),-2),this._currency)},subtract:function(e){B(this,e);return new L(this._value-e.value(),this._currency)},toString:function(ac,ag){var ab=this.round(),ae=(ab.isLessThan($.money.zero(this.currency())))?"({0}{1}{2}{3})":"{0}{1}{2}{3}",ad=ac||",",af=ag||".";var l=t(ab.dollars(),ad);var e=H(ab.cents());return $.str.format(ae,this._currency,l,af,e)}};$.Class.extend(L,$.Class);$.money=function(l,e){return new L(l,e)};$.money.Class=L;$.money.zero=function(e){return $.money(0,e)};$.money.isMoney=function(e){return e instanceof L};$.money.canParse=function(l){try{$.money.parse(l);return true}catch(ab){return false}};$.money.parse=function(ae){if($.isNumber(ae)){return $.money(ae)}var e=/(\(.*\))|(\-)/.test(ae),ad=(e)?1:0,ac=ae.match(/[^\d\.\,\-]/g)||[],ab=$.exists(ac[ad])?ac[ad]:"$",af=parseFloat(ae.replace(/[^\d\.]/g,"")),l=(e)?-af:af;return $.money(l,ab)};$.money.tryParse=function(e){return $.money.canParse(e)?$.money.parse(e):null};function B(l,e){if(!l.isOfCurrency(e)){throw $.ku4exception("$.money",$.str.format("Invalid operation on non-conforming currencies. currency: {0} != currency: {1}",l._currency,e._currency))}}function t(l,ae){if($.isZero(l)){return"0"}var af=l.toString(),ad=af.replace(/[^\d]/,"").split(/\B/).reverse(),e=af.length>3,ag=ae||",",ac=$.list(),ab=0;$.list(ad).each(function(ah){if(ab!=0&&(ab%3==0)){ac.add(ag);ab=0}ac.add(ah);ab++});return $.str.build.apply(this,ac.toArray().reverse()).replace(/[^\d]$/,"")}function H(l){var e=Math.abs($.math.round(l,-2)),ab=e.toString().replace(/[^\d]|0\./g,"");if($.isZero(e)){return"00"}if(e<0.1){return"0"+ab}if(/^\d$/.test(ab)){return ab+"0"}return ab}function v(e,l){if(!$.isNumber(e)||!$.isNumber(l)){throw $.ku4exception("$.coord",$.str.format("Invalid arguments x= {0}, y= {1} ",e,l))}v.base.call(this);this.x(e).y(l)}v.prototype={x:function(e){return this.property("x",e)},y:function(e){return this.property("y",e)},abs:function(){return new v(Math.abs(this._x),Math.abs(this._y))},add:function(l){var e=this._x+l.x(),ab=this._y+l.y();return new v(e,ab)},divide:function(l){var e=this._x/l.x(),ab=this._y/l.y();return new v(e,ab)},equals:function(e){return(this._x===e.x())&&(this._y===e.y())},multiply:function(l){var e=this._x*l.x(),ab=this._y*l.y();return new v(e,ab)},subtract:function(l){var e=this._x-l.x(),ab=this._y-l.y();return new v(e,ab)},round:function(e){var l=e||0;return new v($.math.round(this.x(),l),$.math.round(this.y(),l))},half:function(){return this.divide(new v(2,2))},value:function(){return{x:this._x,y:this._y}},toEm:function(){return G(this,"em")},toPixel:function(){return G(this,"px")},toString:function(){return $.str.format("({0},{1})",this._x,this._y)}};$.Class.extend(v,$.Class);$.coord=function(e,l){return new v(e,l)};$.coord.Class=v;function G(l,e){return{x:function(){return l.x()+e},y:function(){return l.y()+e}}}function J(l){try{if(("left" in l)&&("top" in l)){return !isNaN(l.left)&&!isNaN(l.top)}if(("width" in l)&&("height" in l)){return !isNaN(l.width)&&!isNaN(l.height)}return false}catch(ab){return false}}function k(e){if(!$.exists(e)){return null}if($.exists(e.left)&&$.exists(e.top)){return new v(e.left,e.top)}if($.exists(e.width)&&$.exists(e.height)){return new v(e.width,e.height)}return null}$.coord.zero=function(){return new v(0,0)};$.coord.random=function(ab,l){var e=ab*Math.random(),ac=l*Math.random(l);return new v(e,ac)};$.coord.canParse=k;$.coord.parse=k;$.coord.tryParse=function(e){return J(e)?k(e):null};function F(e,l){F.base.call(this,e,l)}F.prototype={isAbove:function(e){return this.y()<e.y()},isBelow:function(e){return this.y()>e.y()},isLeftOf:function(e){return this.x()<e.x()},isRightOf:function(e){return this.x()>e.x()},distanceFrom:function(e){return $.vector(this.x()-e.x(),this.y()-e.y())},distanceTo:function(e){return this.distanceFrom(e).invert()}};$.Class.extend(F,$.coord.Class);$.point=function(e,l){return new F(e,l)};$.point.Class=F;$.point.zero=function(){return new F(0,0)};$.point.canParse=C;$.point.parse=a;$.point.tryParse=function(e){return C(e)?a(e):null};function C(l){try{return !isNaN(l.x())&&!isNaN(l.y())}catch(ab){return false}}function a(e){return new F(e.x(),e.y())}function Y(e,l){Y.base.call(this);this._topLeft=$.point.parse(e);this._dims=$.point.parse(l);this._bottomRight=$.point.parse(e.add(l))}Y.prototype={dims:function(){return this.get("dims")},topLeft:function(){return this.get("topLeft")},bottomRight:function(){return this.get("bottomRight")},center:function(){return this._topLeft.add(this._bottomRight.subtract(this._topLeft)).half()},contains:function(ab){var l=this._topLeft,e=this._bottomRight;return l.isAbove(ab)&&l.isLeftOf(ab)&&e.isRightOf(ab)&&e.isBelow(ab)}};$.Class.extend(Y,$.Class);$.rectangle=function(l,e){return new Y(l,e)};$.rectangle.Class=Y;function b(e,l){if(!$.isNumber(e)||!$.isNumber(l)){throw $.ku4exception("$.vector",$.str.format("Invalid arguments x= {0}, y= {1} ",e,l))}b.base.call(this,e,l);this._lengthSquared=c(this,e,l);this._length=u(this,this._lengthSquared);this._unitNormalX=I(this,e);this._unitNormalY=I(this,l)}b.prototype={magnitude:function(){return this.get("length")},equals:function(e){return(e instanceof b)&&((this._x===e.x())&&(this._y===e.y()))},normal:function(){return $.vector(this._unitNormalX,this._unitNormalY)},invert:function(){return $.vector(this.x()*-1,this.y()*-1)},norm:function(){return $.vector(Math.abs(this.x()),Math.abs(this.y()))},perpendicular:function(){return $.vector(this.y()*-1,this.x())},isZero:function(){return this.x()==0&&this.y()==0},add:function(e){return $.vector(this.x()+e.x(),this.y()+e.y())},dot:function(e){return(this.x()*e.x())+(this.y()*e.y())},perpendicularAtTo:function(e){var l=e.add(this.projectionOfOnto(e).invert());return $.vector(l.x(),l.y())},projectionOfOnto:function(e){var l=e.normal().scale(this.dot(e.normal()));return $.vector(l.x(),l.y())},scale:function(e){return $.vector((this.x()*e),(this.y()*e))},unitNormalDot:function(e){return(this.normal().x()*e.normal().x())+(this.normal().y()*e.normal().y())},reflect:function(e){if(e.isZero()){return this}var l=e.normal();return this.add(l.scale(2*(l.dot(this))).invert())},round:function(e){var l=e||0;return $.vector($.math.round(this.x(),l),$.math.round(this.y(),l))}};$.Class.extend(b,$.coord.Class);$.vector=function(e,l){return new b(e,l)};$.vector.Class=b;$.vector.zero=function(){return $.vector(0,0)};$.vector.random=function(ab,l){var e=ab*Math.random(),ac=l*Math.random();return $.vector(e,ac)};function u(e,l){if(e.isZero()){return 0}return Math.sqrt(l)}function c(l,e,ab){if(l.isZero()){return 0}return Math.pow(e,2)+Math.pow(ab,2)}function I(l,e){if(l.isZero()){return 0}return e/l.magnitude()}$.abstractContext=function(e){$.abstractContext.base.call(this);this.state(e)};$.abstractContext.prototype={state:function(e){if(!$.exists(e)){return this._state}return this.set("state",e.context(this))}};$.Class.extend($.abstractContext,$.Class);$.abstractState=function(e){$.abstractState.base.call(this);this.states(e)};$.abstractState.prototype={context:function(e){return this.property("context",e)},states:function(e){return this.set("states",e)},state:function(e){var l=this._context;l.state(new this._states[e](l));return this}};$.Class.extend($.abstractState,$.Class);$.abstractVisitor=function(){};$.abstractVisitor.prototype={$visit:function(){throw new Error("visit method is abstract an must be defined.")},subject:function(e){return this.property("subject",$.replicate(e))},visit:function(){return this.$visit()}};function x(e){x.base.call(this);this.$current=0;this._quit=false;this.subject(e)}x.prototype={$hasNext:function(){return $.exists(this._subject[this.$current+1])},$hasPrev:function(){return $.exists(this._subject[this.$current-1])},$each:function(l,ab){var e=ab||this;this.reset();do{l.call(e,this.current())}while(this.next()&&(!this._quit));this._end=false;this.reset()},$exec:function(ab){var e=this._subject,l=e[ab];if(!$.exists(l)){return null}this.$current=ab;return l},subject:function(l){var e=($.isArray(l))?l:($.isObject(l))?m(l):l;if(!$.isUndefined(l)){this.reset()}this.$subject=e;return this.property("subject",e)},current:function(){return this.$exec(this.$current)},next:function(){return this.$exec(this.$current+1)},prev:function(){return this.$exec(this.$current-1)},hasNext:function(){return this.$hasNext()},hasPrev:function(){return this.$hasPrev()},reset:function(){this.$current=0;return this},quit:function(){return this.set("quit",true)},each:function(e,l){if(this._subject.length<1){return this}this.$each(e,l);return this}};function m(e){var l=[];for(n in e){l.push({key:n,value:e[n]})}return l}$.Class.extend(x,$.Class);$.iterator=function(e){return new x(e)};$.iterator.Class=x;function D(){D.base.call(this);this._observers=$.hash();this._throwErrors=0}D.prototype={throwErrors:function(){this._throwErrors=2;return this},logErrors:function(){this._throwErrors=1;return this},catchErrors:function(){this._throwErrors=0;return this},isEmpty:function(){return this._observers.isEmpty()},count:function(){return this._observers.count()},activeSubscriptionKeys:function(){return this._observers.keys()},subscribe:function(e,ad,l,ac){var ab=this._observers;if(ab.containsKey(e)){ab.find(e).add(ad,l,ac)}else{ab.add(e,$.observer().add(ad,l,ac))}return this},unsubscribe:function(e,ab){var l=this._observers;if(l.containsKey(e)){l.find(e).remove(ab)}return this},notify:function(){var e=$.list.parseArguments(arguments),l=$.list(),ab=$.list();e.each(function(ac){if(this._observers.containsKey(ac)){ab.add(ac)}else{l.add(ac)}},this);return(ab.isEmpty())?this._notifyAll(l.toArray()):this._notify(l.toArray(),ab)},clear:function(){this._observers.each(function(e){e.value.clear()}).clear();return this},_notifyAll:function(e){$.list(this._observers.values()).each(function(l){l.notify.apply(l,e)});return this},_notify:function(ab,l){var ac=this._observers,e=this._throwErrors;l.each(function(ae){try{var ad=ac.find(ae);ad.notify.apply(ad,ab)}catch(ah){var ag="This exception may be thrown for various reasons. BE SURE TO CHECK FOR:\n\n1) INFINITE LOOPS: Occur due to inadvertent unfiltered calls to notify. Check calls to notify for inadvertent missing or misspelled filters.\n\n2) SUBSCRIBER EXCEPTIONS: Occur due to exceptions thrown in a subscriber. Check subscriber methods for uncaught exceptions.\n\n*NOTE: For more information see the documentation at https://github.com/kodmunki/ku4node-kernel#mediator",af=$.ku4exception("$.mediator",$.str.format("{0}. Subscriber key = {1} \n\n {2}",ah.message,ae,ag));if(e==2){throw af}if(e==1){$.ku4Log(af.message)}}});return this}};$.Class.extend(D,$.Class);$.mediator=function(){return new D()};$.mediator.Class=D;function E(){E.base.call(this);this._methods=new $.hash()}E.prototype={add:function(ad,l,ac){var e=ac||$.uid("observerMethod"),ab=l||this;this._methods.add(e,{m:ad,s:ab});return this},remove:function(e){this._methods.remove(e);return this},clear:function(){this._methods.clear();return this},notify:function(){var l=new $.iterator(this._methods.values()),e=arguments;l.each(function(ab){if(!$.exists(ab.m)){throw $.ku4exception("$.observer",$.str.format("Invalid or null method"))}ab.m.apply(ab.s,e)});return this},isEmpty:function(){return this._methods.isEmpty()}};$.Class.extend(E,$.Class);$.observer=function(){return new E()};$.observer.Class=E;function o(){this._q=[]}o.prototype={isEmpty:function(){return this._q.length==0},enqueue:function(e){var l=this._q;l[l.length]=e;return this},dequeue:function(){var l=this._q,e=l[0];l.splice(0,1);return e},clear:function(){this._q=[]}};$.fifo=function(){return new o()};$.fifo.Class=o;function M(e){M.base.call(this,e)}M.prototype={$hasNext:function(){var ac=this.$subject,e=ac.length-1,ae=this.$current,ad=ae+1,ab=(ad>e)?0:ad;return $.exists(ac[ab])},$hasPrev:function(){var ac=this.$subject,e=ac.length-1,ae=this.$current,ad=ae+1,ab=(ad<0)?e:ad;return $.exists(ac[ab])},$each:function(l,ab){var e=ab||this;this.reset();do{l.call(ab,this.current())}while(this.next()&&(this.$current>0));this.reset()},$exec:function(ac){var ab=this.$subject,e=(ab.length-1);this.$current=(ac>e)?0:((ac<0)?e:ac);return ab[this.$current]}};$.Class.extend(M,$.iterator.Class);$.rolodex=function(e){return new M(e)};$.rolodex.Class=M;function X(){}X.prototype={$isSatisfiedBy:function(e){return},isSatisfiedBy:function(e){return this.$isSatisfiedBy(e)},and:function(e){return new K(this,e)},or:function(e){return new p(this,e)},xor:function(e){return new A(this,e)},not:function(){return new T(this)}};function K(l,e){K.base.call(this);this.$1=l;this.$2=e}K.prototype.$isSatisfiedBy=function(e){return this.$1.isSatisfiedBy(e)&&this.$2.isSatisfiedBy(e)};$.Class.extend(K,X);function p(l,e){p.base.call(this);this.$1=l;this.$2=e}p.prototype.$isSatisfiedBy=function(e){return this.$1.isSatisfiedBy(e)||this.$2.isSatisfiedBy(e)};$.Class.extend(p,X);function A(l,e){A.base.call(this);this.$1=l;this.$2=e}A.prototype.$isSatisfiedBy=function(e){return $.xor(this.$1.isSatisfiedBy(e),this.$2.isSatisfiedBy(e))};$.Class.extend(A,X);function q(){q.base.call(this)}q.prototype.$isSatisfiedBy=function(e){return true};$.Class.extend(q,X);function j(){j.base.call(this)}j.prototype.$isSatisfiedBy=function(e){return false};$.Class.extend(j,X);function T(e){T.base.call(this);this._s=e}T.prototype.$isSatisfiedBy=function(e){return !this._s.isSatisfiedBy(e)};$.Class.extend(T,X);function s(e){s.base.call(this);this.$isSatisfiedBy=e}$.Class.extend(s,X);$.spec=function(e){return new s(e)};function z(){this._q=[]}z.prototype={isEmpty:function(){return this._q.length==0},push:function(e){var l=this._q;l[l.length]=e;return this},pop:function(){return this._q.pop()},clear:function(){this._q=[]}};$.lifo=function(){return new z()};$.lifo.Class=z})();