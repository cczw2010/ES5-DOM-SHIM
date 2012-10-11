/* ES6/DOM4 polyfill | @version 0.7 alpha-3 | MIT License | github.com/termi */
;(function() {"use strict";
var g=void 0,h=!0,i=null,l=!1,m=window,n,p=Object.prototype,aa=Function.prototype.apply,r=Array.prototype.slice,s=String.prototype.split,ca=Array.prototype.splice,t,da,ea,u=Function.prototype.bind||function(a,b){var c=this,d=r.call(arguments,1);return function(){return aa.call(c,a,d.concat(r.call(arguments)))}},v=u.call(Function.prototype.call,p.hasOwnProperty);function w(a,b,c){return aa.call(a,b,r.call(arguments,2))}
function x(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)v(d,e)&&!v(a,e)&&(a[e]=d[e])}return a}var fa="a"!=Object("a")[0]||!(0 in Object("a"));function y(a,b){if(a==i&&!b)throw new TypeError;return fa&&"string"==typeof a&&a?s.call(a,""):Object(a)}var ga=p.toString;function ha(a){var b=Object.create(DOMException.prototype);b.code=DOMException[a];b.message=a+": DOM Exception "+b.code;throw b;}function ia(){return l}function ja(a){return a}
var ka="every filter forEach indexOf join lastIndexOf map reduce reduceRight reverse slice some toString".split(" "),z=m.Element&&m.Element.prototype||{},A=u.call(document.__orig__createElement__||document.createElement,document),B=A("p"),C,la=/\s+$/g,ma=/\s+/g,D=1,E,F,na,oa=/^(\w+)?((?:\.(?:[\w\-]+))+)?$|^#([\w\-]+$)/,pa=/\s*([,>+~ ])\s*/g,qa,G,H,I,K,L,ra,M,N,sa,ta,O,ua,P,Q="\t\n\x0B\f\r \u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff",
va,wa,xa,ya,za,Aa,S,T,Ba,U,V,W=m.Date,X,Ca,Y,Z,Da,Ea,$;n=(n=/msie (\d+)/i.exec(navigator.userAgent)||[])&&+n[1]||g;m.HTMLDocument||(m.HTMLDocument=m.Document);m.Document||(m.Document=m.HTMLDocument);m.DocumentFragment||(m.DocumentFragment=m.HTMLDocument);Object.append=x;Object.extend||(Object.extend=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e;for(e in d)v(d,e)&&(a[e]=d[e])}return a});na=function(a,b){a[b]=Object.getOwnPropertyDescriptor(this,b);return a};
Object.inherits=function(a,b){a.prototype=Object.create((a.superclass=b).prototype,(a.prototype&&Object.getOwnPropertyNames(a.prototype)||[]).reduce(na.bind(a.prototype),{constructor:{value:a,enumerable:l}}))};
Function.prototype.bind||(Function.prototype.bind=function(a,b){function c(){return aa.call(d,this instanceof c?this:a,e.concat(r.call(arguments)))}if("function"!=typeof this&&(!n||0!==P.call(this+"").indexOf("function")))throw new TypeError("Function.prototype.bind called on incompatible "+this);var d=this,e=r.call(arguments,1);d.prototype&&(c.prototype=Object.create(d.prototype));return c});
var Ha="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),Ia=!{toString:i}.propertyIsEnumerable(Ha[0]),Ja=Ha.length;
x(Object,{keys:function(a){if("object"!=typeof a&&"function"!=typeof a||a===i)throw new TypeError("Object.keys called on a non-object");var b=[],c;for(c in a)v(a,c)&&b.push(c);if(Ia)for(c=0;c<Ja;c++)v(a,Ha[c])&&b.push(Ha[c]);return b},getOwnPropertyNames:function(a){return Object.keys(a)},seal:ja,freeze:ja,preventExtensions:ja,isSealed:ia,isFrozen:ia,isExtensible:function(a){if(Object(a)!==a)throw new TypeError;for(var b="";v(a,b);)b+="?";a[b]=h;var c=v(a,b);delete a[b];return c},getPrototypeOf:function(a){return a.__proto__||
(a.constructor?a.constructor.prototype:p)},create:function(a,b){var c;if(a===i)c={__proto__:i};else{if("object"!=typeof a)throw new TypeError("typeof prototype["+typeof a+"] != 'object'");c=function(){};c.prototype=a;c=new c;c.__proto__=a}b&&Object.defineProperties(c,b);return c},is:function(a,b){return a===b?0===a?1/a===1/b:h:a!==a&&b!==b},isnt:function(a,b){return!Object.is(a,b)}});
if(Object.defineProperty&&(xa=function(a){try{return Object.defineProperty(a,"sentinel",{}),"sentinel"in a}catch(b){return l}},za=xa({}),Aa=xa(B),!za||!Aa))S=Object.defineProperty,T=Object.defineProperties;
if(!Object.defineProperty||S)Object.defineProperty=function(a,b,c){if("object"!=typeof a&&"function"!=typeof a||a===i)throw new TypeError("Object.defineProperty called on non-object: "+a);if("object"!=typeof c&&"function"!=typeof c||c===i)throw new TypeError("Property description must be an object: "+c);if(S)try{return S.call(Object,a,b,c)}catch(d){if(-2146823252===d.number){c.enumerable=l;try{return S.call(Object,a,b,c)}catch(e){}}}if(c.value!==g)if(a.__defineGetter__&&(a.__lookupGetter__(b)||a.__lookupSetter__(b))){var f=
a.__proto__;a.__proto__=p;delete a[b];a[b]=c.value;a.__proto__=f}else a[b]=c.value;else if(a.__defineGetter__)c.get!==g&&a.__defineGetter__(b,c.get),c.set!==g&&a.__defineSetter__(b,c.set);else if(Object.defineProperty.ielt8)c.get!==g&&(a["get"+b]=c.get),c.set!==g&&(a["set"+b]=c.set);else throw new TypeError("getters & setters not supported");return a};z.ie&&8>n&&(z.ielt8=Object.defineProperty.ielt8=h);
if(!Object.defineProperties||T)Object.defineProperties=function(a,b){if(T)try{return T.call(Object,a,b)}catch(c){}for(var d in b)v(b,d)&&Object.defineProperty(a,d,b[d]);return a};if(Object.getOwnPropertyDescriptor){ya=function(a){try{return a.sentinel2=0,0===Object.getOwnPropertyDescriptor(a,"sentinel2").value}catch(b){return l}};Ba=ya({});if((U=ya(B))&&document.__proto__)try{U=!!Object.getOwnPropertyDescriptor(document.__proto__,"firstChild")}catch(Ka){U=l}if(!U||!Ba)V=Object.getOwnPropertyDescriptor}
if(!Object.getOwnPropertyDescriptor||V)Object.getOwnPropertyDescriptor=function(a,b){if("object"!=typeof a&&"function"!=typeof a||a===i)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+a);if(V)try{return V.call(Object,a,b)}catch(c){}if(v(a,b)){var d={enumerable:h,configurable:h},e,f;if(a.__defineGetter__){var k=a.__proto__;a.__proto__=p;e=a.__lookupGetter__(b);f=a.__lookupSetter__(b);a.__proto__=k}else Object.defineProperty.ielt8&&(e=a["get"+b],f=a["set"+b]);if(e||f)return e&&
(d.get=e),f&&(d.set=f),d;d.value=a[b];return d}};if(!Object.d||V){var La=Object.d;Object.d=function(a,b){if(La)try{return La.call(Object,a,b)}catch(c){}for(var d=Object.getOwnPropertyDescriptor(a,b),e=a;!d&&(e=Object.getPrototypeOf(e));)d=Object.getOwnPropertyDescriptor(e,b);return d}}2!=[1,2].splice(0).length&&(Array.prototype.splice=function(a,b){return a===g&&b===g?[]:ca.apply(this,[a===g?0:a,b===g?this.length-a:b].concat(r.call(arguments,2)))});
ea=function(a){if(a instanceof Array||Array.isArray(a))return a;if(a.m)return a.m();var a=y(a,h),b=a.length>>>0,c;try{c=r.call(a)}catch(d){}if(c&&c.length===b)return c;c=[];for(var e=0;e<b;e++)e in a&&(c[e]=a[e]);return c};x(Array,{isArray:function(a){return"[object Array]"==ga.call(a)},from:ea,of:function(a){return r.call(arguments)}});
x(Array.prototype,{reduce:function(a,b){var c=y(this),d=c.length>>>0,e=0;if(0===d&&1>=arguments.length)throw new TypeError("Array length is 0 and no second argument");for(b===g&&(b=(++e,c[0]));e<d;++e)e in c&&(b=w(a,g,b,c[e],e,c));return b},reduceRight:function(a,b){var c=y(this),d=c.length>>>0;if(0===d&&1>=arguments.length)throw new TypeError("Array length is 0 and no second argument");--d;for(b===g&&(b=(--d,c[d+1]));0<=d;--d)d in c&&(b=w(a,g,b,c[d],d,c));return b},forEach:function(a,b){for(var c=
y(this),d=c.length>>>0,e=-1;++e<d;)e in c&&w(a,b,c[e],e,c)},indexOf:function(a,b){var c=y(this),d=c.length>>>0;if(!d||(b=~~b)>=d)return-1;for(b=(d+b)%d;b<d&&(!(b in c)||c[b]!==a);b++);return b^d?b:-1},lastIndexOf:function(a,b){var c=y(this),d=c.length>>>0,e;if(!d)return-1;e=d-1;b!==g&&(e=Math.min(e,Number.toInteger(b)));for(e=0<=e?e:d-Math.abs(e);0<=e;e--)if(e in c&&c[e]===a)return e;return-1},every:function(a,b,c){c===g&&(c=h);var d=c;O(this,function(e,f){d==c&&(d=!!w(a,b,e,f,this))},this);return d},
some:function(a,b){return ua.call(this,a,b,l)},filter:function(a,b){for(var c=y(this),d=c.length>>>0,e=[],f,k=0;k<d;k++)k in c&&(f=c[k],w(a,b,f,k,c)&&e.push(f));return e},map:function(a,b){for(var c=y(this),d=c.length>>>0,e=[],f=0;f<d;f++)f in c&&(e[f]=w(a,b,c[f],f,this));return e},contains:function(a){return!!~this.indexOf(a)}});O=u.call(Function.prototype.call,Array.prototype.forEach);da=Array.prototype.map;ua=Array.prototype.every;
if(!String.prototype.trim||Q.trim())Q="["+Q+"]",va=RegExp("^"+Q+Q+"*"),wa=RegExp(Q+Q+"*$"),String.prototype.trim=function(){return String(this).replace(va,"").replace(wa,"")};P=String.prototype.trim;"0".split(g,0).length&&(String.prototype.split=function(a,b){return a===g&&0===b?[]:s.call(this,a,b)});t=function(a,b){return!!~this.indexOf(a,b|0)};
x(String.prototype,{repeat:function(a){if(0>a)return"";for(var b="",c=this;a;)if(a&1&&(b+=c),a>>=1)c+=c;return b},startsWith:function(a,b){return this.indexOf(a,b|=0)===b},endsWith:function(a,b){return this.lastIndexOf(a,b)===(0<=b?b|0:this.length-1)},contains:t,toArray:function(){return s.call(this,"")},reverse:function(){return Array.prototype.reverse.call(s.call(this+"","")).join("")}});
x(Number,{isFinite:function(a){return"number"===typeof a&&m.i(a)},isInteger:function(a){return Number.isFinite(a)&&-9007199254740992<=a&&9007199254740992>=a&&Math.floor(a)===a},isNaN:function(a){return Object.is(a,NaN)},toInteger:function(a){a=+a;return Number.isNaN(a)?0:0===a||!m.i(a)?a:(0>a?-1:1)*Math.floor(Math.abs(a))}});G=function(a,b){var c=document.createEvent("Events"),b=b||{};c.initEvent(a,b.bubbles||l,b.cancelable||l);"isTrusted"in c||(c.j=l);return c};
try{I=Event.prototype,new Event("click")}catch(Ma){m.Event=G,I?G.prototype=I:I=G.prototype}H=function(a,b){var c,d;try{c=document.createEvent("CustomEvent")}catch(e){c=document.createEvent("Event")}b=b||{};d=b.detail!==g?b.detail:i;(c.initCustomEvent||(c.detail=d,c.initEvent)).call(c,a,b.bubbles||l,b.cancelable||l,d);"isTrusted"in c||(c.j=l);return c};try{K=(m.CustomEvent||Event).prototype,new CustomEvent("magic")}catch(Na){if(m.CustomEvent=H,K||I)H.prototype=K||I}
try{E=document.createEvent("Event")}catch(Oa){E={}}"defaultPrevented"in E||(Object.defineProperty(I,"defaultPrevented",{value:l}),ra=I.preventDefault,I.preventDefault=function(){this.defaultPrevented=h;ra.apply(this,arguments)});
"stopImmediatePropagation"in E||(L=function(a){var b=this.f,c=this.g;if("function"!==typeof b)if("handleEvent"in b)c=b,b=b.handleEvent;else return;if(a.timeStamp&&a.__stopNow===a.timeStamp)a.stopPropagation();else return b.apply(c,arguments)},I.stopImmediatePropagation=function(){this.__stopNow=this.timeStamp||(this.timeStamp=(new Date).getTime())});
if("addEventListener"in B&&!B.addEventListener.__shim__){E=0;try{F=function(){E++},B.addEventListener("click",F),B.addEventListener("click",F),B.click?B.click():B.dispatchEvent(new G("click"))}catch(Pa){}if(0==E||2==E||L){var Qa=2==E;O([m.HTMLDocument&&m.HTMLDocument.prototype||m.document,m.Window&&m.Window.prototype||m,z],function(a){if(a){var b=a.addEventListener,c=a.removeEventListener;b&&(a.addEventListener=function(a,c,f){var k,j,f=f||l;if(Qa||L){j="_e_8vj"+(f?"-":"")+(c.__UUID__||(c.__UUID__=
++D))+a;if(!(k=this._))k=this._={};if(j in k)return;c=L?k[j]=u.call(L,{f:c,g:this}):k[j]=g;c}return b.call(this,a,c,f)},c&&(a.removeEventListener=function(a,b,f){var k,j,f=f||l;if(Qa||L)if((k=this._)&&k[j="_e_8vj"+(f?"-":"")+b.__UUID__+a])b=k[j],delete k[j];return c.call(this,a,b,f)}))}})}}M=function(a,b,c){this.e=a;this.a=b;this.c=c;this.length=0;this.value="";this.b("1")};
N=function(a,b){var c=b||"",d=!!a.length;if(d){for(;0<a.length;)delete a[--a.length];a.value=""}c&&((c=P.call(c))&&s.call(c,ma).forEach(N.add,a),a.value=b);d&&a.a&&a.a.call(a.c,a.value)};N.add=function(a){this[this.length++]=a};N.k=function(a,b,c,d){return c&&a.length+c<d.length?" ":""};
x(M.prototype,{b:function(a){var b=this.e.call(this.c);b!=this.value&&N(this,b);a===g&&ha("WRONG_ARGUMENTS_ERR");""===a&&ha("SYNTAX_ERR");t.call(a+""," ")&&ha("INVALID_CHARACTER_ERR")},add:function(){var a=arguments,b=0,c=a.length,d,e=this.value,f;do d=a[b],f=this.contains(d),f||(e+=(0<b||e&&!e.match(la)?" ":"")+d,this[this.length++]=d);while(++b<c);this.value=e;this.a&&this.a.call(this.c,this.value)},remove:function(){var a=arguments,b=0,c=a.length,d,e=this.value,f=s.call(this.value," ");do d=a[b],
this.b(d),e=e.replace(RegExp("((?:\\ +|^)"+d+"(?:\\ +|$))","g"),N.k);while(++b<c);for(a=this.length-1;0<a;--a)if(!(this[a]=f[a]))this.length--,delete this[a];this.value=e;this.a&&this.a.call(this.c,this.value)},contains:function(a){this.b(a);return t.call(" "+this.value+" "," "+a+" ")},item:function(a){this.b("1");return this[a]||i},toggle:function(a,b){var c=this.contains(a),d=c?b!==h&&"remove":b!==l&&"add";if(d)this[d](a);return c}});M.prototype.toString=function(){return this.value||""};
m.DOMStringCollection=M;I.AT_TARGET||(I.AT_TARGET=2,I.BUBBLING_PHASE=3,I.CAPTURING_PHASE=1);Event.AT_TARGET||(Event.AT_TARGET=2,Event.BUBBLING_PHASE=3,Event.CAPTURING_PHASE=1);try{m.getComputedStyle(B)}catch(Ra){m.getComputedStyle=u.call(function(a,b){return this.call(m,a,b||i)},m.getComputedStyle)}E=!("classList"in B)?g:(B.classList.add(1,2),B.classList.contains(2))&&h||l;
if(!E)if(E===g)ta=function(a){this.className=a},sa=function(){return this.className},Object.defineProperty(z,"classList",{get:function(){if(this.tagName){var a=this._||(this._={});a._ccl_||(a._ccl_=new M(sa,ta,this));return a._ccl_}}});else if(E===l&&(E=m.DOMTokenList)&&(E=E.prototype)){var Sa=E.add,Ta=E.remove;Object.defineProperties(E,{add:{configurable:h,enumerable:h,writable:h,value:function(){var a=arguments,b,c=0,d=a.length;do b=a[c],Sa.call(this,b);while(++c<d)}},remove:{configurable:h,enumerable:h,
writable:h,value:function(){var a=arguments,b,c=0,d=a.length;do b=a[c],Ta.call(this,b);while(++c<d)}},toggle:{configurable:h,enumerable:h,writable:h,value:M.prototype.toggle}})}"parentElement"in B||Object.defineProperty(z,"parentElement",{get:function(){var a=this.parentNode;return a&&1===a.nodeType?a:i}});"contains"in B||(m.Node.prototype.contains=function(a){return!!(this.compareDocumentPosition(a)&16)});
"insertAdjacentHTML"in B||(m.HTMLElement.prototype.insertAdjacentHTML=function(a,b){var c=this.ownerDocument.createElement("_"),d={beforebegin:"before",afterbegin:"prepend",beforeend:"append",afterend:"after"},e;c.innerHTML=b;(c=c.childNodes)&&(c.length&&(e=this[d[a]]))&&e.apply(this,c)});if(document.importNode&&!document.importNode.shim)try{document.importNode(B)}catch(Ua){var Va=document.importNode;delete document.importNode;document.importNode=function(a,b){b===g&&(b=h);return Va.call(this,a,b)}}
try{B.cloneNode()}catch(Wa){[Node.prototype,Comment&&Comment.prototype,z,ProcessingInstruction&&ProcessingInstruction.prototype,Document.prototype,DocumentType&&DocumentType.prototype,DocumentFragment.prototype].forEach(function(a){if(a){var b=a.cloneNode;delete a.cloneNode;a.cloneNode=function(a){a===g&&(a=h);return b.call(this,a)}}})}
z.matchesSelector||(z.matchesSelector=z.webkitMatchesSelector||z.mozMatchesSelector||z.msMatchesSelector||z.oMatchesSelector||function(a,b){if(!a)return l;if("*"===a)return h;var c,d,e,f=0,k,j,q;b?"length"in b?c=b[0]:(c=b,b=g):c=this;do if(q=l,c===document.documentElement?q=":root"===a:c===document.body&&(q="BODY"===a.toUpperCase()),!q){a=P.call(a.replace(pa,"$1"));if(k=a.match(oa))switch(a.charAt(0)){case "#":q=c.id===a.slice(1);break;default:if((q=!k[1]||!("tagName"in c)||c.tagName.toUpperCase()===
k[1].toUpperCase())&&k[2]){e=-1;j=k[2].slice(1).split(".");for(k=" "+c.className+" ";j[++e]&&q;)q=t.call(k," "+j[e]+" ")}}if(!/([,>+~ ])/.test(a)&&(d=c.parentNode)&&d.querySelector)q=d.querySelector(a)===c;if(!q&&(d=c.ownerDocument)){j=d.querySelectorAll(a);for(e=-1;!q&&j[++e];)q=j[e]===c}}while(q&&b&&(c=b[++f]));return b&&"length"in b?q&&b.length==f:q});document.documentElement.matchesSelector||(document.documentElement.matchesSelector=z.matchesSelector);
"matches"in z||(z.matches=document.documentElement.matches=z.matchesSelector);
B.prepend||(C=function(a){var b=i,c=0,d=a.length,a=da.call(a,C.l);if(1===d)return a[0];b=document.createDocumentFragment();a=Array.from(a);for(c=0;c<d;++c)b.appendChild(a[c]);return b},C.l=function(a){return"string"===typeof a?document.createTextNode(a):a},z.after||(z.after=function(){this.parentNode&&this.parentNode.insertBefore(C(arguments),this.nextSibling)}),z.before||(z.before=function(){this.parentNode&&this.parentNode.insertBefore(C(arguments),this)}),z.append||(z.append=function(){this.appendChild(C(arguments))}),
z.prepend||(z.prepend=function(){this.insertBefore(C(arguments),this.firstChild)}),z.replace||(z.replace=function(){this.parentNode&&this.parentNode.replaceChild(C(arguments),this)}),z.remove||(z.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),"prepend"in document||(document.prepend=m.Document.prototype.prepend=m.DocumentFragment.prototype.prepend=function(){z.prepend.apply(this.documentElement,arguments)},document.append=m.Document.prototype.append=m.DocumentFragment.prototype.append=
function(){z.append.apply(this.documentElement,arguments)}));
"find"in document||(qa=/(\:scope)(?=[ >~+])/,document.find=m.Document.prototype.find=m.DocumentFragment.prototype.find=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c,d=0,e=b.length,f;do f=b[d],a=a.replace(qa,9==f.nodeType?":root":function(){return"#"+(f.id||(f.id="find"+ ++D))}),c=f.querySelector(a);while(!c&&++d<e);return c||i},document.findAll=m.Document.prototype.findAll=m.DocumentFragment.prototype.findAll=function(a,b){b&&("length"in b||(b=[b]))||(b=[this]);var c=[],d=0,e=b.length,
f,k,j,q,ba,R={},J;do{f=b[d];a=a.replace(qa,9==f.nodeType?":root":function(){return"#"+(f.id||(f.id="find"+ ++D))});k=f.querySelectorAll(a);q=0;for(ba=k.length;q<ba;++q)if(j=k[q],J=l,j=j.__UUID__||(J=h,j.__UUID__=++D),J||!(j in R))R[j]=g,c.push(k[q])}while(++d<e);return c});"find"in z||(z.find=z.querySelector,z.findAll=z.querySelectorAll);
"labels"in A("input")||Object.defineProperty(z,"labels",{enumerable:h,get:function(){if(t.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT "," "+this.nodeName.toUpperCase()+" ")){for(var a=this,b=this.id?ea(document.querySelectorAll("label[for='"+this.id+"']")):[],c=b.length-1;(a=a.parentNode)&&(!a.h||a.h===this);)if("LABEL"===a.nodeName.toUpperCase()){for(;b[c]&&b[c].compareDocumentPosition(a)&2;)c--;ca.call(b,c+1,0,a)}return b}}});
"control"in A("label")||(Da=function(a,b){for(var c=0,d=a.length;c<d;c++){var e=a[c],f=b(e);if(f||e.childNodes&&0<e.childNodes.length&&(f=Da(e.childNodes,b)))return f}},Object.defineProperty(m.HTMLLabelElement&&m.HTMLLabelElement.prototype||z,"control",{enumerable:h,get:function(){return"LABEL"!==this.nodeName.toUpperCase()?g:this.hasAttribute("for")?document.getElementById(this.htmlFor):Da(this.childNodes,function(a){if(t.call(" INPUT BUTTON KEYGEN METER OUTPUT PROGRESS TEXTAREA SELECT "," "+a.nodeName.toUpperCase()+
" "))return a})||i}}));
"reversed"in A("ol")||(Ea=function(a){var b=a.getAttribute("reversed"),c=a._,d,e;c||(c=a._={});"olreversed"in c&&c.olreversed==(b!==i)||(d=a.children,e=a.getAttribute("start"),e!==i&&(e=Number(e),isNaN(e)&&(e=i)),b!==i?(c.olreversed=h,e===i&&(e=d.length),O(d,function(a){a.value=e--})):(c.olreversed=l,d[0]&&(d[0].value=e||0),O(d,function(a){a.removeAttribute("value")})))},Object.defineProperty(m.HTMLOListElement&&m.HTMLOListElement.prototype||z,"reversed",{get:function(){return"OL"!==(this.nodeName||
"").toUpperCase()?g:this.getAttribute("reversed")!==i},set:function(a){if("OL"===(this.nodeName||"").toUpperCase())return this[(a?"set":"remove")+"Attribute"]("reversed",""),Ea(this),a}}),$=function(){document.removeEventListener("DOMContentLoaded",$,l);$=g;O(document.getElementsByTagName("ol"),Ea)},"complete"==document.readyState?$():document.addEventListener("DOMContentLoaded",$,l));
[document.getElementsByClassName&&document.getElementsByClassName("")||{},document.querySelectorAll&&document.querySelectorAll("#z")||{}].forEach(function(a){(a=a.__proto__||a.constructor.prototype)&&a!==Array.prototype&&ka.forEach(function(b){a[b]||(a[b]=Array.prototype[b])})});E=document.createElement("form");E.innerHTML="<input type=radio name=t value=1><input type=radio checked name=t value=2>";
E.t&&2!==E.t.value&&(E=(E=E.t)&&(E=E.constructor)&&E.prototype||(E=m.NodeList)&&E.prototype)&&E!==Object.prototype&&Object.defineProperty(E,"value",{get:function(){if(this[0]&&"form"in this[0])for(var a=this.length,b;b=this[--a];)if(b.checked)return b.value},set:function(a){if(this[0]&&"form"in this[0])for(var b=this.length,c;c=this[--b];)if(c.checked)return c.value=a,c.value},configurable:h});
if(!W.prototype.toISOString||t.call((new W(-621987552E5)).toISOString(),"-000001")||"1969-12-31T23:59:59.999Z"!==(new W(-1)).toISOString())W.prototype.toISOString=function(){var a,b,c,d;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");d=this.getUTCFullYear();a=this.getUTCMonth();d+=~~(a/12);a=[(a%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()];d=(0>d?"-":9999<d?"+":"")+("00000"+Math.abs(d)).slice(0<=d&&9999>=
d?-4:-6);for(b=a.length;b--;)c=a[b],10>c&&(a[b]="0"+c);return d+"-"+a.slice(0,2).join("-")+"T"+a.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};W.now||(W.now=function(){return(new W).getTime()});var Xa;if(!(Xa=!W.prototype.toJSON)){var Ya;if(!(Ya=t.call((new W(-621987552E5)).toJSON(),"-000001"))){var Za;a:{try{Za=W.prototype.toJSON.call({toISOString:function(){return-1}});break a}catch($a){}Za=g}Ya=~Za}Xa=Ya}Xa&&(W.prototype.toJSON=function(){return w(this.toISOString,this)});
if(!W.parse){X=function(a,b,c,d,e,f,k){var j=arguments.length;return this instanceof W?(j=1==j&&String(a)===a?new W(X.parse(a)):7<=j?new W(a,b,c,d,e,f,k):6<=j?new W(a,b,c,d,e,f):5<=j?new W(a,b,c,d,e):4<=j?new W(a,b,c,d):3<=j?new W(a,b,c):2<=j?new W(a,b):1<=j?new W(a):new W,j.constructor=X,j):W.apply(this,arguments)};Ca=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");Y=[0,31,59,90,120,151,181,212,243,273,
304,334,365];Z=function(a){return Math.ceil(a/4)-Math.ceil(a/100)+Math.ceil(a/400)};for(E in W)X[E]=W[E];X.now=W.now;X.UTC=W.UTC;X.prototype=W.prototype;X.prototype.constructor=X;X.parse=function(a){var b=Ca.exec(a);if(b){var c=Number(b[1]),d=Number(b[2]||1),e=Number(b[3]||1),f=Number(b[4]||0),k=Number(b[5]||0),j=Number(b[6]||0),q=Number(b[7]||0),ba=b[8]?0:Number(new Date(1970,0)),R="-"===b[9]?1:-1,J=Number(b[10]||0),b=Number(b[11]||0),Fa=Z(c),Ga=Z(c+1);if(f<(0<k||0<j||0<q?24:25)&&60>k&&60>j&&1E3>
q&&24>J&&60>b&&0<d&&13>d&&0<e&&e<1+Y[d]-Y[d-1]+(2===d?Ga-Fa:0))if(c=365*(c-1970)+(2<d?Ga:Fa)-Z(1970)+Y[d-1]+e-1,c=1E3*(60*(60*(24*c+f+J*R)+k+b*R)+j)+q+ba,-864E13<=c&&864E13>=c)return c;return NaN}return W.parse.apply(this,arguments)};m.Date=X}if((E=m._)&&E.ielt9shims)E.ielt9shims.forEach(w),m._=E.orig_;x=E=B=ka=A=G=H=I=K=F=z=X=ia=za=Aa=g;
})();