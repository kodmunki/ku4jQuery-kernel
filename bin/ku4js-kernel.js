(function(S){function P(){$.ku4={author:"kodmunki\u2122",license:'The MIT License (MIT)\n\nCopyright (c) 2013 kodmunki\u2122.\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the "Software"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'}}try{P()}catch(W){$={};P()}$.isArray=function(e){return e instanceof Array};$.isBool=function(e){return(/boolean/i.test(typeof(e)))};$.isDate=function(e){return e instanceof Date};$.isEvent=function(l){try{return l instanceof Event}catch(ac){return l===window.event}};$.isNumber=function(e){return((/number/i.test(typeof(e)))||e instanceof Number)&&!isNaN(e)};$.isObject=function(e){return $.exists(e)&&(/object/i.test(typeof(e)))&&!($.isBool(e)||$.isNumber(e)||$.isDate(e)||$.isArray(e)||$.isString(e)||$.isFunction(e))};$.isObjectLiteral=function(e){return $.isObject(e)&&e.constructor==({}).constructor};$.isFunction=function(e){return(e instanceof Function)};$.isString=function(e){return(/string/i.test(typeof(e)))||e instanceof String};$.isZero=function(e){return e===0};$.isEven=function(e){return($.isNullOrEmpty(e)||$.isDate(e))?false:(isNaN(e)?false:($.isZero(e)?false:e%2===0))};$.isOdd=function(e){return($.isNullOrEmpty(e)||$.isDate(e))?false:(isNaN(e)?false:($.isZero(e)?false:!$.isEven(e)))};$.isNull=function(e){return e===null};$.isUndefined=function(e){return typeof(e)=="undefined"};$.isEmpty=function(e){return $.isString(e)&&$.isZero(e.split(/\B/).length)};$.isNullOrEmpty=function(e){return !$.exists(e)||$.isEmpty(e)};$.exists=function(e){return(e!==null)&&(!$.isUndefined(e))};$.areEqual=function(l,e){if(this.exists(l)&&this.exists(e)){if(this.exists(l.equals)&&l.equals(e)){return true}if(this.exists(l.getTime)&&this.exists(e.getTime)&&l.getTime()==e.getTime()){return true}if(l===e){return true}else{return l===e}}else{return l===e}};$.xor=function(l,e){return !l!=!e};function r(l,ac,e,ae){var ad="ku4EXCEPTION @ {0}: {1}\n\nBrowser Stack Trace:\n{2}\n\nku4Trace:\n{3}";return new Error($.str.format(ad,l.toUpperCase(),ac,e,ae))}$.ku4exception=function(ac,ad){var l=arguments.callee.caller,ae="",e="";(function(){try{generate.exeception}catch(ah){e=($.exists(ah.stack))?ah.stack.replace(/generate is.+/,""):"[Unavailable]";var ag=0,ai,af;while(l&&(ag<10)){ai=l.toString().replace(/[\n\t\r\s]+/g," ").substring(0,100);af=ai.replace(/\W/g,"a").replace(/\s/g,"").replace(/.*base\.js:216/,"").split(/\B/).length>99?ai+"...":ai;ae+=$.str.format("<ku4Idx[{0}]>:{1}\n",ag,af);l=l.caller;ag++}}})();return r(ac,ad,e,ae)};$.ku4Log=function(){try{console.log.apply(console,arguments)}catch(l){alert(Array.prototype.slice.call(arguments).join("\n"))}};$.replicate=function(ac){var e=($.isDate(ac))?new Date(ac):($.isArray(ac))?[]:($.isObject(ac))?{}:ac,l;for(n in ac){l=ac[n];e[n]=(($.isArray(l))||($.isObject(l)))?$.replicate(l):l}return e};if(!$.exists($.obj)){$.obj={}}$.obj.keys=function(l){var e=[];for(n in l){e[e.length]=n}return e};$.obj.values=function(l){var e=[];for(n in l){e[e.length]=l[n]}return e};$.obj.count=function(e){var l=0;for(n in e){l++}return l};$.obj.hasProp=function(e,l){return($.exists(e.hasOwnProperty))?e.hasOwnProperty(l):false};$.obj.merge=function(l,e){var ac=$.replicate(e);for(n in l){ac[n]=l[n]}return ac};$.obj.meld=function(ac,l){var e=$.replicate(l);for(n in ac){if($.exists(e[n])){continue}e[n]=ac[n]}return e};$.obj.filter=function(){var e=Array.prototype.slice.call(arguments),ad={},ae=e[0],ac=e.slice(1);for(var af in ac){var l=ac[af];ad[l]=ae[l]}return ad};if(!$.exists($.arr)){$.arr={}}$.arr.indexOfRegExp=function(ac,l){for(n in ac){var e=ac[n];if(l.test(ac[n])){return n}}return -1};$.Class=function(){};$.Class.prototype={get:function(e){return this["_"+e]},set:function(l,e){this["_"+l]=e;return this},property:function(l,e){return($.isUndefined(e))?this.get(l):this.set(l,e)}};$.Class.extend=function(l,e){if(!l||!e){return null}var ac=function(){};ac.prototype=e.prototype;l.base=e;l.prototype=$.obj.merge(l.prototype,new ac());l.prototype.constructor=l;return l};function d(e){d.base.call(this);this._isLocked=e||false}d.prototype={isLocked:function(){return this.get("isLocked")},lock:function(){this._isLocked=true;return this},unlock:function(){this._isLocked=false;return this}};$.Class.extend(d,$.Class);$.lock=function(e){return new d(e)};if(!$.exists($.math)){$.math={}}$.math.round=function(ad,ac){var l=ac||0,e=Math.pow(10,-l);return Math.round(parseFloat((ad*e).toFixed(Math.abs(l))))/e};$.math.roundUp=function(ad,ac){var l=ac||0,e=5*(Math.pow(10,l-1));return $.math.round(ad+e,ac)};$.math.roundDown=function(ad,ac){if(ad===0){return 0}var l=ac||0,e=5*(Math.pow(10,l-1));return $.math.round(ad-e,ac)};$.math.roundTowardZero=function(l,e){return(l<0)?$.math.roundUp(l,e):$.math.roundDown(l,e)};$.math.factorial=function(ac){var e=ac,l=ac;while(l--){if(!!l){e*=l}}return e};$.math.divide=function(l,e){var ac=$.isNumber(l)&&$.isNumber(e)&&!$.isZero(e);if(!ac){throw $.ku4exception("$.math",$.str.format("Invalid division. value: {0}/{1} | type: {2}/{3}",l,e,typeof l,typeof e))}return l/e};$.math.gcd=function(l,e){return(e==0)?Math.abs(l):$.math.gcd(e,l%e)};if(!$.exists($.str)){$.str={}}var X="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";$.str.build=function(){return"".concat.apply(new String(),arguments)};$.str.format=function(){var ad=arguments,af=ad[0],ac=ad.length,e,ae;for(i=1;i<ac;i++){e=ad[i];ae=($.isNull(e))?"null":($.isUndefined(e))?"undefined":e.toString();af=af.replace(RegExp("\\{"+(i-1)+"\\}","g"),ae)}return af};$.str.render=function(l,ad,ac){var e=""+l;for(var ae in ad){e=e.replace(RegExp("\\{{"+ae+"\\}}","g"),ad[ae])}return $.exists(ac)?e.replace(/\{\{.*\}\}/g,ac):e};$.str.replaceCharsAtIndex=function(l,e,ac,ad){if($.isNullOrEmpty(l)||e<0||e>l.length||$.isNullOrEmpty(ad)){throw $.ku4exception("Argument Exception","Invalid arguments at $.str.replaceStringAtIndex")}return l.substring(0,e)+ad+l.substring(e+ac)};$.str.parse=function(){return String.fromCharCode.apply(String,arguments)};$.str.trim=function(e){return $.str.trimStart($.str.trimEnd(e))};$.str.trimStart=function(e){if(!$.isString(e)){throw new Error("Cannot trim non-string values")}return($.exists(e.replace))?e.replace(/^[\s\n]*/,""):e};$.str.trimEnd=function(e){if(!$.isString(e)){throw new Error("Cannot trim non-string values")}return($.exists(e.replace))?e.replace(/[\s\n]*$/,""):e};$.str.encodeBase64=function(af){if(!$.isString(af)){throw $.ku4exception("str","Cannot base64 encode non-string value.")}try{return btoa(af)}catch(ae){var ag="",ad=0,an=$.str.encodeUtf8(af),ao,al,aj,am,ak,ai,ah,l=function(e){return an.charCodeAt(e)},ac=function(e){return X.charAt(e)};while(ad<an.length){ao=l(ad++);al=l(ad++);aj=l(ad++);am=ao>>2;ak=((ao&3)<<4)|(al>>4);ai=((al&15)<<2)|(aj>>6);ah=aj&63;if(isNaN(al)){ai=ah=64}else{if(isNaN(aj)){ah=64}}ag+=(ac(am)+ac(ak)+ac(ai)+ac(ah))}return ag}};$.str.decodeBase64=function(af){if(!$.isString(af)){throw $.ku4exception("str","Cannot base64 encode non-string value.")}try{return atob(af)}catch(ae){var ag="",ad=0,an=af.replace(/[^A-Za-z0-9\+\/\=]/g,""),ao,al,aj,am,ak,ai,ah,ac=function(e){return X.indexOf(an.charAt(e))},l=function(e){return String.fromCharCode(e)};while(ad<an.length){am=ac(ad++);ak=ac(ad++);ai=ac(ad++);ah=ac(ad++);ao=(am<<2)|(ak>>4);al=((ak&15)<<4)|(ai>>2);aj=((ai&3)<<6)|ah;ag+=l(ao);if(ai!=64){ag+=l(al)}if(ah!=64){ag+=l(aj)}}return $.str.decodeUtf8(ag)}};$.str.encodeUtf8=function(e){var af="",ad=e.replace(/\r\n/g,"\n");function ae(ah){return ad.charCodeAt(ah)}function ac(ah){return String.fromCharCode(ah)}for(var l=0;l<ad.length;l++){var ag=ae(l);if(ag<128){af+=ac(ag)}else{if((ag>127)&&(ag<2048)){af+=(ac((ag>>6)|192)+ac((ag&63)|128))}else{af+=ac((ag>>12)|224)+ac(((ag>>6)&63)|128)+ac((ag&63)|128)}}}return af};$.str.decodeUtf8=function(ag){var ah="",ae=0,af=0,ad=0,ac=0,ai=ag;function e(aj){return ai.charCodeAt(aj)}function l(aj){return String.fromCharCode(aj)}while(ae<ai.length){af=e(ae);if(af<128){ah+=l(af);ae++}else{if((af>191)&&(af<224)){ad=e(ae+1);ah+=l(((af&31)<<6)|(ad&63));ae+=2}else{ad=e(ae+1);ac=e(ae+2);ah+=l(((af&15)<<12)|((ad&63)<<6)|(ac&63));ae+=3}}}return ah};$.uid=function(){var l=Math.random().toString().replace(/\b\.\b/,""),e=Math.random().toString().replace(/\b\.\b/,"");return $.str.encodeBase64($.str.format("{0}x{1}",l,e)).replace(/=+/g,"0").substr(3,32)};function g(e,l,ac){g.base.call(this);this._local=e;this._domain=l;this._topLevelDomain=ac}g.prototype={local:function(){return this._local},domain:function(){return this._domain},topLevelDomain:function(){return this._topLevelDomain},equals:function(e){if(!$.exists(e)){return false}return e.local()==this._local&&e.domain().toUpperCase()==this._domain.toUpperCase()&&e.topLevelDomain().toUpperCase()==this._topLevelDomain.toUpperCase()},toString:function(){return $.str.format("{0}@{1}.{2}",this._local,this._domain,this._topLevelDomain)}};$.Class.extend(g,$.Class);$.emailAddress=function(e,l,ac){return new g(e,l,ac)};$.emailAddress.Class=g;$.emailAddress.parse=function(ag){if(!($.exists(ag))&&/@{1}/.test(ag)){return null}var ad=ag.split("@"),e=ad[1],ac=e.split("."),l=ad[0],af=ac.splice(ac.length-1,1),ae=ac.join(".");return new g(l,ae,af)};function h(e){h.base.call(this);this._value=e}h.prototype={value:function(){return this._value},equals:function(e){if(!$.exists(e)){return false}return e.value()==this._value},toStringWithFormat:function(l){var e=l;$.list((this._value.toString().split(""))).each(function(ac){e=e.replace("#",ac)});return e.replace(/#/g,"")}};$.Class.extend(h,$.Class);$.phoneNumber=function(e){return new h(e)};$.phoneNumber.Class=h;$.phoneNumber.parse=function(e){return new h(parseInt(e.replace(/[^0-9]/gi,"")))};function T(ac,e,l){T.base.call(this);this._first=ac;this._middle=e||"";this._last=l}T.prototype={first:function(){return this._first},middle:function(){return this._middle},last:function(){return this._last},full:function(){var e=($.isNullOrEmpty(this._middle))?"{F} {L}":"{F} {M} {L}";return this.toStringWithFormat(e)},initials:function(){var e=($.isNullOrEmpty(this._middle))?"{f}.{l}.":"{f}.{m}.{l}.";return this.toStringWithFormat(e)},equals:function(e){if(!$.exists(e)){return false}return e.first()==this._first&&e.middle()==this._middle&&e.last()==this._last},toStringWithFormat:function(ac){var e=this._first.charAt(0),l=this._middle.charAt(0),ad=this._last.charAt(0);return ac.replace("{F}",this._first).replace("{M}",this._middle).replace("{L}",this._last).replace("{f}",e).replace("{m}",l).replace("{l}",ad)}};$.Class.extend(T,$.Class);$.properName=function(ac,e,l){return new T(ac,e,l)};$.properName.Class=T;function R(e){R.base.call(this);this.$h={};this._count=0;var l=($.exists(e)&&$.exists(e.toObject))?e.toObject():e;for(var ac in l){this.add(ac,l[ac])}}R.prototype={count:function(){return this.get("count")},keys:function(){return $.obj.keys(this.$h)},values:function(){return $.obj.values(this.$h)},add:function(l,e){if((!($.isString(l)||$.isNumber(l)))||/(^null$)|(^undefined$)/.test(l)||this.containsKey(l)){throw $.ku4exception("$.hash",$.str.format("Invalid key: {0}. Must be unique number or string.",l))}if($.isUndefined(e)){return this}this.$h[l]=e;this._count++;return this},clear:function(){var e=this.$h;for(n in e){delete e[n]}this._count=0;return this},find:function(e){if(!$.exists(e)){return null}return this.$h[e]},findKey:function(e){var l=this.$h;for(n in l){if($.areEqual(l[n],e)){return n}}return null},findValue:function(e){return this.find(e)},quit:function(){this._iterator.quit();return this},each:function(l,e){var ac=e||this;this._iterator=$.iterator(this.toObject());this._iterator.each(l,ac);return this},isEmpty:function(){return this._count<1},contains:function(e){if(!$.exists(e)||$.isNullOrEmpty(e)||$.hash(e).isEmpty()){return false}var ac=$.exists(e.toObject)?e:$.hash(e),l=true;ac.each(function(ae){if(!$.exists(ae)){l=false;ac.quit()}else{var ad=ae.key;l=this.containsKey(ad)&&$.areEqual(this.findValue(ad),ae.value);if(!l){ac.quit()}}},this);return l},containsKey:function(e){if(!$.exists(e)){return false}return !$.isUndefined(this.$h[e])},containsValue:function(l){var e=$.obj.values(this.$h),ac=e.length;while(ac--){if($.areEqual(l,e[ac])){return true}}return false},merge:function(e){return Q(this,e,"merge")},meld:function(e){return Q(this,e,"meld")},filter:function(){var e=[this.$h].concat(Array.prototype.slice.call(arguments));return $.hash($.obj.filter.apply($.obj,e))},remove:function(e){if(!this.containsKey(e)){return this}var l=this.$h;l[e]="value";delete l[e];this._count--;return this},replicate:function(){return $.hash($.replicate(this.$h))},toObject:function(){return this.$h},update:function(l,e){if((!($.isString(l)||$.isNumber(l)))||/(^null$)|(^undefined$)/.test(l)){throw $.ku4exception("$.hash",$.str.format("Invalid key: {0}. Must be number or string.",l))}if($.isUndefined(e)){return this}if(!this.containsKey(l)){this._count++}this.$h[l]=e;return this}};$.Class.extend(R,$.Class);function Q(ac,l,e){var ad=($.exists(l)&&$.exists(l.toObject))?l.toObject():l;ac.$h=$.obj[e](ad,ac.$h);ac._count=$.obj.count(ac.$h);return ac}$.hash=function(e){return new R(e)};$.hash.Class=R;function z(ac){z.base.call(this);this._keys=[];this._hash=$.hash();this._count=this._keys.length;if(!$.exists(ac)){return}var ae=0,e=ac.length;while(ae<e){var ad=ac[ae];if(!$.isUndefined(ad)){this.add(ad)}ae++}}z.prototype={count:function(){return this.get("count")},add:function(l){var e=this._keys,ac=$.uid();e[e.length]=ac;this._hash.add(ac,l);this._count=this._keys.length;return this},clear:function(){this._hash.clear();this._keys=[];this._count=this._keys.length;return this},contains:function(e){return this._hash.containsValue(e)},find:function(l){var e=this._keys;return($.exists(e[l]))?this._hash.find(e[l]):null},quit:function(){this._iterator.quit();return this},each:function(l,e){var ac=e||this;this._iterator=$.iterator(this.toArray());this._iterator.each(l,ac);return this},isEmpty:function(){return this._count<1},remove:function(ac){var l=this._hash;if(!this.contains(ac)){return this}var e=l.findKey(ac);this._keys.splice(e,1);l.remove(e);this._count=l.count();return this},toArray:function(){var e=[];this._hash.each(function(l){e.push(l.value)});return e}};$.Class.extend(z,$.Class);$.list=function(e){return new z(e)};$.list.Class=z;$.list.parseArguments=function(e){return new z(Array.prototype.slice.call(e))};function V(l,ac,e){V.base.call(this);if((ac<1)||(ac>12)){throw $.ku4exception("$.dayPoint",$.str.format("Invalid month= {0}",ac))}if((e<1)||(e>aa(ac,l))){throw $.ku4exception("$.dayPoint",$.str.format("Invalid date= {0}",e))}this._value=(arguments.length>=3)?new Date(l,ac-1,e):new Date();this._day=this._value.getDay();this._date=e;this._month=ac;this._year=l}V.prototype={value:function(){return this._value},day:function(){return this._day},date:function(){return this._date},month:function(){return this._month},year:function(){return this._year},shortYear:function(){var e=this._year.toString();return parseInt(e.substr(e.length-2))},isWeekday:function(){var e=this._day;return e>0&&e<6},isWeekend:function(){return !this.isWeekday()},isLeapYear:function(){return x(this._year)},nextDay:function(){return ab(this,1,0,0)},prevDay:function(){return ab(this,-1,0,0)},nextMonth:function(){return ab(this,0,1,0)},prevMonth:function(){return ab(this,0,-1,0)},nextYear:function(){return ab(this,0,0,1)},prevYear:function(){return ab(this,0,0,-1)},add:function(af,e,aj){function ai(al,ap,ao){var am=al,an=ap;while(an--){am=am[ao]()}return am}var ak=Math.abs,ah=ak(af),ag=ak(aj),ac=ak(e),l=af<0?"prevYear":"nextYear",ae=aj<0?"prevDay":"nextDay",ad=e<0?"prevMonth":"nextMonth";return ai(ai(ai(this,ah,l),ac,ad),ag,ae)},firstDayOfMonth:function(){return new V(this._year,this._month,1)},lastDayOfMonth:function(){return new V(this._year,this._month,aa(this._month,this._year))},isBefore:function(e){return !(this.isAfter(e)||this.equals(e))},isAfter:function(l){var e=this._year,ad=l.year(),ac=this._month,ae=l.month();if(e>ad){return true}if((e==ad)&&(ac>ae)){return true}return((e==ad)&&(ac==ae)&&(this._date>l.date()))},equals:function(e){return(this._year==e.year())&&(this._month==e.month())&&(this._date==e.date())},toString:function(){return this.toStringWithFormat("mm/dd/yyyy")},toStringWithFormat:function(ad){var ag=(/y{3,}/i.test(ad))?this._year:this.shortYear(),e=this._month,af=this._date,ac="{0}",l=(/m{2}/i.test(ad)&&e<10)?"0{1}":"{1}",ae=(/d{2}/i.test(ad)&&af<10)?"0{2}":"{2}";f=ad.replace(/y{1,}/gi,ac).replace(/m{1,}/gi,l).replace(/d{1,}/gi,ae);return $.str.format(f,ag,e,af)},toDate:function(){return this.value()},toJson:function(){return this.value().toJSON()}};$.Class.extend(V,$.Class);$.dayPoint=function(ae,af,ac,e,ad,ag,l){if(!($.isDate(ae)||($.isNumber(ae)&&$.isNumber(af)&&$.isNumber(ac)))){return null}return new V(ae,af,ac,e,ad,ag,l)};$.dayPoint.Class=V;$.dayPoint.canParse=function(e){return($.isString(e)||$.isNumber(e)||$.isDate(e))?!isNaN(new Date(e).valueOf()):false};$.dayPoint.parse=function(ad){if(ad instanceof V){return ad}var e=($.isString(ad)&&/^\d{4}\-\d{,12}\-\d{1,2}$/.test($.str.trim(ad)))?ad.replace(/(?:\D)(0)/g,"-").replace(/^0/,""):ad;if(/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(e)){var l=e.split("-"),ac=l[0];l.push(ac);l.shift();e=l.join("/")}var ae=new Date(e);if(!$.exists(e)||isNaN(ae).valueOf()){throw $.ku4exception("$.dayPoint",$.str.format("Cannot parse value= {0}",e))}return $.dayPoint(ae.getFullYear(),ae.getMonth()+1,ae.getDate())};$.dayPoint.tryParse=function(e){return $.dayPoint.canParse(e)?$.dayPoint.parse(e):null};var O;$.dayPoint.assumeNow=function(e){O=$.dayPoint.parse(e)};$.dayPoint.today=function(){return O||$.dayPoint.parse(new Date())};function aa(ac,l){var e=ac,ad=l;if(e==2){return(x(ad))?29:28}return(((e<8)&&($.isEven(e)))||((e>7)&&($.isOdd(e))))?30:31}function x(e){var ac=e.toString().split(/\B/),l=parseFloat($.str.build(ac[ac.length-2],ac[ac.length-1]));return(l%4==0)}function ab(ag,al,ac,an){var ap=ag.month(),ah=ag.year(),ae=ag.date(),e=aa(ap,ah),ao=al,af=ac,ak=an,l=ae+ao,aj=ap+af,am=ah+ak;if((ae+ao)>e){l=1;aj=(ap+(af+1))}if((ae+ao)<1){var ad=ag.prevMonth(),l=aa(ad.month(),ad.year());(aj=ap+(af-1))}if((aj)>12){aj=1;am=(ah+(ak+1))}if((aj)<1){aj=12;am=(ah+(ak-1))}var ai=aa(aj,am);l=(l>ai)?ai:l;return new V(am,aj,l)}function M(ac,l){if(!$.exists(ac)||isNaN(ac)){throw $.ku4exception("$.money",$.str.format("Invalid amount= {0}. Amount must be a number.",ac))}M.base.call(this);var e=$.math.roundTowardZero(ac);this._cents=ac-e;this._dollars=e;this._currency=l||"$";this._value=ac}M.prototype={value:function(){return this._value},dollars:function(){return this._dollars},cents:function(){return this._cents},currency:function(){return this._currency},add:function(e){C(this,e);return new M(this._value+e.value(),this._currency)},divide:function(e){if(!$.isNumber(e)){throw $.ku4exception("$.money",$.str.format("Invalid divisor value= {0}",e))}return new M(this._value/e,this._currency)},equals:function(e){return(this.isOfCurrency(e))&&(this._value==e.value())},exchange:function(l,e){return new M(this.multiply(l).value(),e)},isOfCurrency:function(e){return this._currency==e.currency()},isGreaterThan:function(e){C(this,e);return this._value>e.value()},isLessThan:function(e){C(this,e);return this._value<e.value()},multiply:function(e){if(!$.isNumber(e)){throw $.ku4exception("$.money",$.str.format("Invalid multiplier value= {0}",e))}return new M(this._value*e,this._currency)},nearestDollar:function(){return new M($.math.round(this.value(),0),this._currency)},round:function(){return new M($.math.round(this.value(),-2),this._currency)},roundDown:function(){return new M($.math.roundDown(this.value(),-2),this._currency)},roundUp:function(){return new M($.math.roundUp(this.value(),-2),this._currency)},subtract:function(e){C(this,e);return new M(this._value-e.value(),this._currency)},toString:function(ad,ah){var ac=this.round(),af=(ac.isLessThan($.money.zero(this.currency())))?"({0}{1}{2}{3})":"{0}{1}{2}{3}",ae=ad||",",ag=ah||".";var l=t(ac.dollars(),ae);var e=I(ac.cents());return $.str.format(af,this._currency,l,ag,e)}};$.Class.extend(M,$.Class);$.money=function(l,e){return new M(l,e)};$.money.Class=M;$.money.zero=function(e){return $.money(0,e)};$.money.isMoney=function(e){return e instanceof M};$.money.canParse=function(l){try{$.money.parse(l);return true}catch(ac){return false}};$.money.parse=function(af){if($.isNumber(af)){return $.money(af)}if(/\,\d{2}$/.test(af)){var ag=af.split(","),ae=ag.pop(),e=ag.join().replace(/\./g,",");af=e+"."+ae}var ah=/(\(.*\))|(\-)/.test(af),ad=(ah)?1:0,aj=af.match(/[^\d\.\,\-]/g)||[],ac=$.exists(aj[ad])?aj[ad]:"$",l=parseFloat(af.replace(/[^\d\.]/g,"")),ai=(ah)?-l:l;return $.money(ai,ac)};$.money.tryParse=function(e){return $.money.canParse(e)?$.money.parse(e):null};function C(l,e){if(!l.isOfCurrency(e)){throw $.ku4exception("$.money",$.str.format("Invalid operation on non-conforming currencies. currency: {0} != currency: {1}",l._currency,e._currency))}}function t(e,ae){if($.isZero(e)){return"0"}var af=e.toString(),ad=af.replace(/[^\d]/,"").split(/\B/).reverse(),ag=ae||",",ac=$.list(),l=0;$.list(ad).each(function(ah){if(l!=0&&(l%3==0)){ac.add(ag);l=0}ac.add(ah);l++});return $.str.build.apply(this,ac.toArray().reverse()).replace(/[^\d]$/,"")}function I(l){var e=Math.abs($.math.round(l,-2)),ac=e.toString().replace(/[^\d]|0\./g,"");if($.isZero(e)){return"00"}if(e<0.1){return"0"+ac}if(/^\d$/.test(ac)){return ac+"0"}return ac}function w(e,l){if(!$.isNumber(e)||!$.isNumber(l)){throw $.ku4exception("$.coord",$.str.format("Invalid arguments x= {0}, y= {1} ",e,l))}w.base.call(this);this.x(e).y(l)}w.prototype={x:function(e){return this.property("x",e)},y:function(e){return this.property("y",e)},abs:function(){return new w(Math.abs(this._x),Math.abs(this._y))},add:function(l){var e=this._x+l.x(),ac=this._y+l.y();return new w(e,ac)},divide:function(l){var e=this._x/l.x(),ac=this._y/l.y();return new w(e,ac)},equals:function(e){return(this._x===e.x())&&(this._y===e.y())},multiply:function(l){var e=this._x*l.x(),ac=this._y*l.y();return new w(e,ac)},subtract:function(l){var e=this._x-l.x(),ac=this._y-l.y();return new w(e,ac)},round:function(e){var l=e||0;return new w($.math.round(this.x(),l),$.math.round(this.y(),l))},half:function(){return this.divide(new w(2,2))},value:function(){return{x:this._x,y:this._y}},toEm:function(){return H(this,"em")},toPixel:function(){return H(this,"px")},toString:function(){return $.str.format("({0},{1})",this._x,this._y)}};$.Class.extend(w,$.Class);$.coord=function(e,l){return new w(e,l)};$.coord.Class=w;$.coord.isInstance=function(e){return e instanceof w};function H(l,e){return{x:function(){return l.x()+e},y:function(){return l.y()+e}}}function K(l){try{if($.isArray(l)){return !(isNaN(l[0])||isNaN(l[1]))}if($.isObjectLiteral(l)){if(("x" in l)&&("y" in l)){return !(isNaN(l.x)||isNaN(l.y))}if(("left" in l)&&("top" in l)){return !(isNaN(l.left)||isNaN(l.top))}if(("width" in l)&&("height" in l)){return !(isNaN(l.width)||isNaN(l.height))}}return $.coord.isInstance(l)}catch(ac){return false}}function k(e){if(!$.exists(e)){return null}if($.coord.isInstance(e)){return e}if($.isArray(e)){return new w(e[0],e[1])}if($.isObjectLiteral(e)){if($.exists(e.left)&&$.exists(e.top)){return new w(e.left,e.top)}if($.exists(e.width)&&$.exists(e.height)){return new w(e.width,e.height)}if($.exists(e.x)&&$.exists(e.y)){return new w(e.x,e.y)}}return null}$.coord.zero=function(){return new w(0,0)};$.coord.random=function(ac,l){var e=ac*Math.random(),ad=l*Math.random(l);return new w(e,ad)};$.coord.canParse=K;$.coord.parse=k;$.coord.tryParse=function(e){return K(e)?k(e):null};function G(e,l){G.base.call(this,e,l)}G.prototype={isAbove:function(e){return this.y()<e.y()},isBelow:function(e){return this.y()>e.y()},isLeftOf:function(e){return this.x()<e.x()},isRightOf:function(e){return this.x()>e.x()},distanceFrom:function(e){return $.vector(this.x()-e.x(),this.y()-e.y())},distanceTo:function(e){return this.distanceFrom(e).invert()}};$.Class.extend(G,$.coord.Class);$.point=function(e,l){return new G(e,l)};$.point.Class=G;$.point.isInstance=function(e){return e instanceof G};$.point.zero=function(){return new G(0,0)};$.point.canParse=D;$.point.parse=a;$.point.tryParse=function(e){return D(e)?a(e):null};function D(l){try{return $.point.isInstance(G)||$.coord.canParse(l)}catch(ac){return false}}function a(e){if($.point.isInstance(e)){return e}var l=$.coord.parse(e);return new G(l.x(),l.y())}function Z(e,l){Z.base.call(this);this._topLeft=$.point.parse(e);this._dims=$.point.parse(l);this._bottomRight=$.point.parse(this._topLeft.add(this._dims))}Z.prototype={dims:function(){return this.get("dims")},topLeft:function(){return this.get("topLeft")},bottomRight:function(){return this.get("bottomRight")},center:function(){return this._topLeft.add(this._bottomRight.subtract(this._topLeft)).half()},contains:function(ac){var l=this._topLeft,e=this._bottomRight;return l.isAbove(ac)&&l.isLeftOf(ac)&&e.isRightOf(ac)&&e.isBelow(ac)},aspectToFit:function(l){var ag=this.dims(),af=l.dims(),ac=ag.x(),e=ag.y(),ae=af.x(),ad=af.y();if(ac>e){if(ac>ae){e*=ae/ac;ac=ae}}else{if(e>ad){ac*=ad/e;e=ad}}return new Z(this._topLeft,{width:ac,height:e})}};$.Class.extend(Z,$.Class);$.rectangle=function(e,l){return new Z(e,l)};$.rectangle.Class=Z;function b(e,l){if(!$.isNumber(e)||!$.isNumber(l)){throw $.ku4exception("$.vector",$.str.format("Invalid arguments x= {0}, y= {1} ",e,l))}b.base.call(this,e,l);this._lengthSquared=c(this,e,l);this._length=u(this,this._lengthSquared);this._unitNormalX=J(this,e);this._unitNormalY=J(this,l)}b.prototype={magnitude:function(){return this.get("length")},equals:function(e){return(e instanceof b)&&((this._x===e.x())&&(this._y===e.y()))},normal:function(){return $.vector(this._unitNormalX,this._unitNormalY)},invert:function(){return $.vector(this.x()*-1,this.y()*-1)},norm:function(){return $.vector(Math.abs(this.x()),Math.abs(this.y()))},perpendicular:function(){return $.vector(this.y()*-1,this.x())},isZero:function(){return this.x()==0&&this.y()==0},add:function(e){return $.vector(this.x()+e.x(),this.y()+e.y())},dot:function(e){return(this.x()*e.x())+(this.y()*e.y())},perpendicularAtTo:function(e){var l=e.add(this.projectionOfOnto(e).invert());return $.vector(l.x(),l.y())},projectionOfOnto:function(e){var l=e.normal().scale(this.dot(e.normal()));return $.vector(l.x(),l.y())},scale:function(e){return $.vector((this.x()*e),(this.y()*e))},unitNormalDot:function(e){return(this.normal().x()*e.normal().x())+(this.normal().y()*e.normal().y())},reflect:function(e){if(e.isZero()){return this}var l=e.normal();return this.add(l.scale(2*(l.dot(this))).invert())},round:function(e){var l=e||0;return $.vector($.math.round(this.x(),l),$.math.round(this.y(),l))}};$.Class.extend(b,$.coord.Class);$.vector=function(e,l){return new b(e,l)};$.vector.Class=b;$.vector.zero=function(){return $.vector(0,0)};$.vector.random=function(ac,l){var e=ac*Math.random(),ad=l*Math.random();return $.vector(e,ad)};function u(e,l){if(e.isZero()){return 0}return Math.sqrt(l)}function c(l,e,ac){if(l.isZero()){return 0}return Math.pow(e,2)+Math.pow(ac,2)}function J(l,e){if(l.isZero()){return 0}return e/l.magnitude()}function v(e,l){if(!$.isNumber(e)||!$.isNumber(l)){throw $.ku4exception("$.fraction",$.str.format("Invalid arguments numerator= {0}, denominator= {1} ",e,l))}this._numerator=e;this._denominator=l}v.prototype={numerator:function(){return this._numerator},denominator:function(){return this._denominator},value:function(){return this._numerator/this._denominator},equals:function(e){return this.value()==e.value()},add:function(e){var ae=this.commonDenominator(e),ac=this.withDenominator(ae),l=e.withDenominator(ae),ad=ac.numerator()+l.numerator();return new v(ad,ae)},subtract:function(e){var ae=this.commonDenominator(e),ac=this.withDenominator(ae),l=e.withDenominator(ae),ad=ac.numerator()-l.numerator();return new v(ad,ae)},multiply:function(e){var l=this._numerator*e.numerator(),ac=this._denominator*e.denominator();return new v(l,ac)},divide:function(e){return this.multiply(e.reciprocal())},reciprocal:function(){return new v(this._denominator,this._numerator)},commonDenominator:function(e){return this._denominator*e.denominator()},withDenominator:function(l){var e=(l/this._denominator)*this._numerator;return new v(e,l)},simplify:function(){var e=$.math.gcd(this._denominator,this._numerator);return new v(this._numerator/e,this._denominator/e)},toString:function(){return this._numerator+"/"+this._denominator}};$.fraction=function(e,l){return new v(e,l)};$.fraction.isInstance=function(e){return e instanceof v};$.abstractContext=function(e){$.abstractContext.base.call(this);this.state(e)};$.abstractContext.prototype={state:function(e){if(!$.exists(e)){return this._state}return this.set("state",e.context(this))}};$.Class.extend($.abstractContext,$.Class);$.abstractState=function(e){$.abstractState.base.call(this);this.states(e)};$.abstractState.prototype={context:function(e){return this.property("context",e)},states:function(e){return this.set("states",e)},state:function(e){var l=this._context;l.state(new this._states[e](l));return this}};$.Class.extend($.abstractState,$.Class);$.abstractVisitor=function(){};$.abstractVisitor.prototype={$visit:function(){throw new Error("visit method is abstract an must be defined.")},subject:function(e){return this.property("subject",$.replicate(e))},visit:function(){return this.$visit()}};function y(e){y.base.call(this);this.$current=0;this._quit=false;this.subject(e)}y.prototype={$hasNext:function(){return $.exists(this._subject[this.$current+1])},$hasPrev:function(){return $.exists(this._subject[this.$current-1])},$each:function(l,ac){var e=ac||this;this.reset();do{l.call(e,this.current())}while(this.next()&&(!this._quit));this._end=false;this.reset()},$exec:function(ac){var e=this._subject,l=e[ac];if(!$.exists(l)){return null}this.$current=ac;return l},subject:function(l){var e=($.isArray(l))?l:($.isObject(l))?m(l):l;if(!$.isUndefined(l)){this.reset()}this.$subject=e;return this.property("subject",e)},current:function(){return this.$exec(this.$current)},next:function(){return this.$exec(this.$current+1)},prev:function(){return this.$exec(this.$current-1)},hasNext:function(){return this.$hasNext()},hasPrev:function(){return this.$hasPrev()},reset:function(){this.$current=0;return this},quit:function(){return this.set("quit",true)},each:function(e,l){if(this._subject.length<1){return this}this.$each(e,l);return this}};function m(e){var l=[];for(n in e){l.push({key:n,value:e[n]})}return l}$.Class.extend(y,$.Class);$.iterator=function(e){return new y(e)};$.iterator.Class=y;function E(e){E.base.call(this);this._name=e||$.uid();this._observers=$.hash();this._throwErrors=0}E.prototype={throwErrors:function(){this._throwErrors=2;return this},logErrors:function(){this._throwErrors=1;return this},catchErrors:function(){this._throwErrors=0;return this},isEmpty:function(){return this._observers.isEmpty()},count:function(){return this._observers.count()},activeSubscriptionKeys:function(){return this._observers.keys()},subscribe:function(e,ae,l,ad){var ac=this._observers;if($.isNullOrEmpty(e)){throw $.ku4exception("$.mediator","subscribe name must be a valid, non-empty string value.")}if(!$.isFunction(ae)){throw $.ku4exception("$.mediator","subscribe method must be a valid function.")}ae.__ku4mediator_name__=this._name;if(ac.containsKey(e)){ac.find(e).add(ae,l,ad)}else{ac.add(e,$.observer(e).add(ae,l,ad))}return this},unsubscribe:function(e,ac){var l=this._observers;if(l.containsKey(e)){l.find(e).remove(ac)}return this},notify:function(){var e=$.list.parseArguments(arguments),l=$.list(),ac=$.list();e.each(function(ad){if(this._observers.containsKey(ad)){ac.add(ad)}else{l.add(ad)}},this);return(ac.isEmpty())?this._notifyAll(l.toArray()):this._notify(l.toArray(),ac)},clear:function(){this._observers.each(function(e){e.value.clear()}).clear();return this},_notifyAll:function(e){$.list(this._observers.values()).each(function(l){l.notify.apply(l,e)});return this},_notify:function(ad,ac){var ae=this._observers,l=this._throwErrors,e=this._name;ac.each(function(ag){try{var af=ae.find(ag);af.notify.apply(af,ad)}catch(aj){var ai="This exception may be thrown for various reasons. BE SURE TO CHECK FOR:\n\n1) INFINITE LOOPS: Occur due to inadvertent unfiltered calls to notify. Check calls to notify for inadvertent missing or misspelled filters.\n\n2) SUBSCRIBER EXCEPTIONS: Occur due to exceptions thrown in a subscriber. Check subscriber methods for uncaught exceptions.\n\n*NOTE: For more information see the documentation at https://github.com/kodmunki/ku4js-kernel#mediator",ah=$.ku4exception("$.mediator",$.str.format("{0}. \nMediator name = {1}\nSubscriber name = {2}\n\n {3}\n",aj.message,e,ag,ai));if(l==2){throw ah}if(l==1){$.ku4Log(ah.message)}}});return this}};$.Class.extend(E,$.Class);$.mediator=function(e){return new E(e)};$.mediator.Class=E;function F(e){F.base.call(this);this._name=e||$.uid();this._methods=new $.hash()}F.prototype={add:function(ae,l,ad){var e=ad||$.uid(),ac=l||this;ae.__ku4observer_name__=this._name;ae.__ku4observer_method_id__=e;this._methods.add(e,{m:ae,s:ac});return this},remove:function(e){this._methods.remove(e);return this},clear:function(){this._methods.clear();return this},notify:function(){var ac=new $.iterator(this._methods.values()),l=arguments,e=this._name;ac.each(function(ad){var af=ad.m;if(!$.exists(af)){throw $.ku4exception("$.observer",$.str.format("Attempt to call invalid or undefined method @ observer: {0}.\n",e))}else{try{af.apply(ad.s,l)}catch(ae){throw $.ku4exception("$.observer",$.str.format("Error in subscribed method @ observer: {0} methodId: {1}.\nmessage:{2}\n\n",e,af.__ku4observer_method_id__,ae.message))}}});return this},isEmpty:function(){return this._methods.isEmpty()}};$.Class.extend(F,$.Class);$.observer=function(e){return new F(e)};$.observer.Class=F;function o(){this._q=[]}o.prototype={isEmpty:function(){return this._q.length==0},enqueue:function(e){var l=this._q;l[l.length]=e;return this},dequeue:function(){var l=this._q,e=l[0];l.splice(0,1);return e},clear:function(){this._q=[]}};$.fifo=function(){return new o()};$.fifo.Class=o;function N(e){N.base.call(this,e)}N.prototype={$hasNext:function(){var ad=this.$subject,e=ad.length-1,af=this.$current,ae=af+1,ac=(ae>e)?0:ae;return $.exists(ad[ac])},$hasPrev:function(){var ad=this.$subject,e=ad.length-1,af=this.$current,ae=af+1,ac=(ae<0)?e:ae;return $.exists(ad[ac])},$each:function(l,ac){var e=ac||this;this.reset();do{l.call(ac,this.current())}while(this.next()&&(this.$current>0));this.reset()},$exec:function(ad){var ac=this.$subject,e=(ac.length-1);this.$current=(ad>e)?0:((ad<0)?e:ad);return ac[this.$current]}};$.Class.extend(N,$.iterator.Class);$.rolodex=function(e){return new N(e)};$.rolodex.Class=N;function Y(){}Y.prototype={$isSatisfiedBy:function(e){return},isSatisfiedBy:function(e){return this.$isSatisfiedBy(e)},and:function(e){return new L(this,e)},or:function(e){return new p(this,e)},xor:function(e){return new B(this,e)},not:function(){return new U(this)}};function L(l,e){L.base.call(this);this.$1=l;this.$2=e}L.prototype.$isSatisfiedBy=function(e){return this.$1.isSatisfiedBy(e)&&this.$2.isSatisfiedBy(e)};$.Class.extend(L,Y);function p(l,e){p.base.call(this);this.$1=l;this.$2=e}p.prototype.$isSatisfiedBy=function(e){return this.$1.isSatisfiedBy(e)||this.$2.isSatisfiedBy(e)};$.Class.extend(p,Y);function B(l,e){B.base.call(this);this.$1=l;this.$2=e}B.prototype.$isSatisfiedBy=function(e){return $.xor(this.$1.isSatisfiedBy(e),this.$2.isSatisfiedBy(e))};$.Class.extend(B,Y);function q(){q.base.call(this)}q.prototype.$isSatisfiedBy=function(e){return true};$.Class.extend(q,Y);function j(){j.base.call(this)}j.prototype.$isSatisfiedBy=function(e){return false};$.Class.extend(j,Y);function U(e){U.base.call(this);this._s=e}U.prototype.$isSatisfiedBy=function(e){return !this._s.isSatisfiedBy(e)};$.Class.extend(U,Y);function s(e){s.base.call(this);this.$isSatisfiedBy=e}$.Class.extend(s,Y);$.spec=function(e){return new s(e)};function A(){this._q=[]}A.prototype={isEmpty:function(){return this._q.length==0},push:function(e){var l=this._q;l[l.length]=e;return this},pop:function(){return this._q.pop()},clear:function(){this._q=[]}};$.lifo=function(){return new A()};$.lifo.Class=A})();