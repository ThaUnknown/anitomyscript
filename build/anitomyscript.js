
var anitomyscript = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(anitomyscript) {
  anitomyscript = anitomyscript || {};

var e;e||(e=typeof anitomyscript !== 'undefined' ? anitomyscript : {});var p={},q;for(q in e)e.hasOwnProperty(q)&&(p[q]=e[q]);var aa="./this.program",t=!1,u=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;u="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!u;da=!t&&!ba&&!u;var v="",ea,w,fa,ha;
if(ba)v=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),process.on("uncaughtException",function(a){throw a;}),process.on("unhandledRejection",x),e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=
function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(t||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),_scriptDir&&(v=_scriptDir),0!==v.indexOf("blob:")?v=v.substr(0,v.lastIndexOf("/")+
1):v="",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ia=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(q in p)p.hasOwnProperty(q)&&(e[q]=p[q]);p=null;e.thisProgram&&(aa=e.thisProgram);var z;e.wasmBinary&&(z=e.wasmBinary);"object"!==typeof WebAssembly&&y("no native wasm support detected");
var A,ja=new WebAssembly.Table({initial:409,maximum:409,element:"anyfunc"}),ka=!1;function assert(a,b){a||x("Assertion failed: "+b)}var la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&la)return la.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function na(a){return a?ma(B,a,void 0):""}
function oa(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,C,B,qa,ra,D,E,sa,ta,ua=e.TOTAL_MEMORY||16777216;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:ua/65536,maximum:ua/65536});A&&(buffer=A.buffer);ua=buffer.byteLength;var G=buffer;buffer=G;e.HEAP8=C=new Int8Array(G);
e.HEAP16=qa=new Int16Array(G);e.HEAP32=D=new Int32Array(G);e.HEAPU8=B=new Uint8Array(G);e.HEAPU16=ra=new Uint16Array(G);e.HEAPU32=E=new Uint32Array(G);e.HEAPF32=sa=new Float32Array(G);e.HEAPF64=ta=new Float64Array(G);D[8616]=5277504;function va(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ka;"number"===typeof c?void 0===b.Ca?e.dynCall_v(c):e.dynCall_vi(c,b.Ca):c(void 0===b.Ca?null:b.Ca)}}}var wa=[],xa=[],ya=[],za=[];
function Aa(){var a=e.preRun.shift();wa.unshift(a)}var H=0,Ba=null,I=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ia(a);y(a);ka=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ca(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="anitomyscript.wasm";
if(!Ca()){var Da=J;J=e.locateFile?e.locateFile(Da,v):v+Da}function Ea(){try{if(z)return new Uint8Array(z);if(w)return w(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Fa(){return z||!t&&!u||"function"!==typeof fetch?new Promise(function(a){a(Ea())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ea()})}xa.push({Ka:function(){Ga()}});
var Ha=[null,[],[]],Ia=0;function Ja(){Ia+=4;return D[Ia-4>>2]}var Ka={};function La(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var Ma=void 0;function K(a){for(var b="";B[a];)b+=Ma[B[a++]];return b}var L={},M={},Na={};function Oa(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Pa(a,b){a=Oa(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Qa(a){var b=Error,c=Pa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var N=void 0;function O(a){throw new N(a);}var Ra=void 0;function Sa(a){throw new Ra(a);}function P(a,b,c){function d(b){b=c(b);b.length!==a.length&&Sa("Mismatched type converter count");for(var d=0;d<a.length;++d)Q(a[d],b[d])}a.forEach(function(a){Na[a]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(a,b){M.hasOwnProperty(a)?f[b]=M[a]:(g.push(a),L.hasOwnProperty(a)||(L[a]=[]),L[a].push(function(){f[b]=M[a];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}
function Q(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||O('type "'+d+'" must have a positive integer typeid pointer');if(M.hasOwnProperty(a)){if(c.Na)return;O("Cannot register type '"+d+"' twice")}M[a]=b;delete Na[a];L.hasOwnProperty(a)&&(b=L[a],delete L[a],b.forEach(function(a){a()}))}function Ta(a){return{count:a.count,qa:a.qa,ta:a.ta,ga:a.ga,ha:a.ha,ka:a.ka,la:a.la}}
function Ua(a){O(a.ea.ha.fa.name+" instance already deleted")}var Va=!1;function Wa(){}function Xa(a){--a.count.value;0===a.count.value&&(a.ka?a.la.pa(a.ka):a.ha.fa.pa(a.ga))}
function S(a){if("undefined"===typeof FinalizationGroup)return S=function(a){return a},a;Va=new FinalizationGroup(function(a){for(var b=a.next();!b.done;b=a.next())b=b.value,b.ga?Xa(b):console.warn("object already deleted: "+b.ga)});S=function(a){Va.register(a,a.ea,a.ea);return a};Wa=function(a){Va.unregister(a.ea)};return S(a)}var T=void 0,Ya=[];function Za(){for(;Ya.length;){var a=Ya.pop();a.ea.qa=!1;a["delete"]()}}function U(){}var $a={};
function ab(a,b,c){if(void 0===a[b].ia){var d=a[b];a[b]=function(){a[b].ia.hasOwnProperty(arguments.length)||O("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].ia+")!");return a[b].ia[arguments.length].apply(this,arguments)};a[b].ia=[];a[b].ia[d.wa]=d}}
function bb(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].ia&&void 0!==e[a].ia[c])&&O("Cannot register public name '"+a+"' twice"),ab(e,a,a),e.hasOwnProperty(c)&&O("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].ia[c]=b):(e[a]=b,void 0!==c&&(e[a].fb=c))}function cb(a,b,c,d,f,g,h,l){this.name=a;this.constructor=b;this.ra=c;this.pa=d;this.ma=f;this.La=g;this.va=h;this.Ia=l;this.Qa=[]}
function db(a,b,c){for(;b!==c;)b.va||O("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.va(a),b=b.ma;return a}function eb(a,b){if(null===b)return this.Da&&O("null is not a valid "+this.name),0;b.ea||O('Cannot pass "'+V(b)+'" as a '+this.name);b.ea.ga||O("Cannot pass deleted object as a pointer of type "+this.name);return db(b.ea.ga,b.ea.ha.fa,this.fa)}
function fb(a,b){if(null===b){this.Da&&O("null is not a valid "+this.name);if(this.ya){var c=this.Ra();null!==a&&a.push(this.pa,c);return c}return 0}b.ea||O('Cannot pass "'+V(b)+'" as a '+this.name);b.ea.ga||O("Cannot pass deleted object as a pointer of type "+this.name);!this.xa&&b.ea.ha.xa&&O("Cannot convert argument of type "+(b.ea.la?b.ea.la.name:b.ea.ha.name)+" to parameter type "+this.name);c=db(b.ea.ga,b.ea.ha.fa,this.fa);if(this.ya)switch(void 0===b.ea.ka&&O("Passing raw pointer to smart pointer is illegal"),
this.Ta){case 0:b.ea.la===this?c=b.ea.ka:O("Cannot convert argument of type "+(b.ea.la?b.ea.la.name:b.ea.ha.name)+" to parameter type "+this.name);break;case 1:c=b.ea.ka;break;case 2:if(b.ea.la===this)c=b.ea.ka;else{var d=b.clone();c=this.Sa(c,gb(function(){d["delete"]()}));null!==a&&a.push(this.pa,c)}break;default:O("Unsupporting sharing policy")}return c}
function hb(a,b){if(null===b)return this.Da&&O("null is not a valid "+this.name),0;b.ea||O('Cannot pass "'+V(b)+'" as a '+this.name);b.ea.ga||O("Cannot pass deleted object as a pointer of type "+this.name);b.ea.ha.xa&&O("Cannot convert argument of type "+b.ea.ha.name+" to parameter type "+this.name);return db(b.ea.ga,b.ea.ha.fa,this.fa)}function ib(a){return this.fromWireType(E[a>>2])}function jb(a,b,c){if(b===c)return a;if(void 0===c.ma)return null;a=jb(a,b,c.ma);return null===a?null:c.Ia(a)}
var kb={};function lb(a,b){for(void 0===b&&O("ptr should not be undefined");a.ma;)b=a.va(b),a=a.ma;return kb[b]}function mb(a,b){b.ha&&b.ga||Sa("makeClassHandle requires ptr and ptrType");!!b.la!==!!b.ka&&Sa("Both smartPtrType and smartPtr must be specified");b.count={value:1};return S(Object.create(a,{ea:{value:b}}))}
function W(a,b,c,d){this.name=a;this.fa=b;this.Da=c;this.xa=d;this.ya=!1;this.pa=this.Sa=this.Ra=this.Ga=this.Ta=this.Pa=void 0;void 0!==b.ma?this.toWireType=fb:(this.toWireType=d?eb:hb,this.na=null)}function nb(a,b,c){e.hasOwnProperty(a)||Sa("Replacing nonexistant public symbol");void 0!==e[a].ia&&void 0!==c?e[a].ia[c]=b:(e[a]=b,e[a].wa=c)}
function X(a,b){a=K(a);if(void 0!==e["FUNCTION_TABLE_"+a])var c=e["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=e["dynCall_"+a];void 0===c&&(c=e["dynCall_"+a.replace(/f/g,"d")],void 0===c&&O("No dynCall invoker for signature: "+a));for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b)}"function"!==typeof c&&O("unknown function pointer with signature "+a+": "+b);return c}var ob=void 0;function pb(a){a=qb(a);var b=K(a);Y(a);return b}function rb(a,b){function c(a){f[a]||M[a]||(Na[a]?Na[a].forEach(c):(d.push(a),f[a]=!0))}var d=[],f={};b.forEach(c);throw new ob(a+": "+d.map(pb).join([", "]));}function sb(a,b){for(var c=[],d=0;d<a;d++)c.push(D[(b>>2)+d]);return c}function tb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function ub(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Pa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function vb(a,b,c,d,f){var g=b.length;2>g&&O("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==b[1]&&null!==c,l=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].na){l=!0;break}var n="void"!==b[0].name,k="",m="";for(c=0;c<g-2;++c)k+=(0!==c?", ":"")+"arg"+c,m+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Oa(a)+"("+k+") {\nif (arguments.length !== "+(g-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(g-2)+" args!');\n}\n";l&&(a+="var destructors = [];\n");var r=l?"destructors":"null";k="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[O,d,f,tb,b[0],b[1]];h&&(a+="var thisWired = classParam.toWireType("+r+", this);\n");for(c=0;c<g-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+r+", arg"+c+"); // "+b[c+2].name+"\n",k.push("argType"+c),d.push(b[c+2]);h&&(m="thisWired"+(0<m.length?", ":"")+m);a+=(n?"var rv = ":"")+"invoker(fn"+(0<m.length?", ":"")+m+");\n";if(l)a+=
"runDestructors(destructors);\n";else for(c=h?1:2;c<b.length;++c)g=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].na&&(a+=g+"_dtor("+g+"); // "+b[c].name+"\n",k.push(g+"_dtor"),d.push(b[c].na));n&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");k.push(a+"}\n");return ub(k).apply(null,d)}var wb=[],Z=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function xb(a){4<a&&0===--Z[a].Ea&&(Z[a]=void 0,wb.push(a))}
function gb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=wb.length?wb.pop():Z.length;Z[b]={Ea:1,value:a};return b}}function yb(a,b,c){switch(b){case 0:return function(a){return this.fromWireType((c?C:B)[a])};case 1:return function(a){return this.fromWireType((c?qa:ra)[a>>1])};case 2:return function(a){return this.fromWireType((c?D:E)[a>>2])};default:throw new TypeError("Unknown integer type: "+a);}}
function zb(a,b){var c=M[a];void 0===c&&O(b+" has unknown type "+pb(a));return c}function V(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Ab(a,b){switch(b){case 2:return function(a){return this.fromWireType(sa[a>>2])};case 3:return function(a){return this.fromWireType(ta[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Bb(a,b,c){switch(b){case 0:return c?function(a){return C[a]}:function(a){return B[a]};case 1:return c?function(a){return qa[a>>1]}:function(a){return ra[a>>1]};case 2:return c?function(a){return D[a>>2]}:function(a){return E[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Cb={};
function Db(){if(!Eb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:aa},b;for(b in Cb)a[b]=Cb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Eb=c}return Eb}var Eb;function Fb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Gb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Hb=[31,29,31,30,31,30,31,31,30,31,30,31],Ib=[31,28,31,30,31,30,31,31,30,31,30,31];
function Jb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Fb(a.getFullYear())?Hb:Ib)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Kb(a,b,c,d){function f(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function g(a,b){return f(a,b,"0")}function h(a,b){function c(a){return 0>a?-1:0<a?1:0}var d;0===(d=c(a.getFullYear()-b.getFullYear()))&&0===(d=c(a.getMonth()-b.getMonth()))&&(d=c(a.getDate()-b.getDate()));return d}function l(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function n(a){a=Jb(new Date(a.ja+1900,0,1),a.Ba);var b=l(new Date(a.getFullYear()+1,0,4));return 0>=h(l(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var k=D[d+40>>2];d={Wa:D[d>>2],Va:D[d+4>>2],za:D[d+8>>2],ua:D[d+12>>2],sa:D[d+16>>2],ja:D[d+20>>2],Aa:D[d+24>>2],Ba:D[d+28>>2],gb:D[d+32>>2],Ua:D[d+36>>2],
Xa:k?na(k):""};c=na(c);k={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var m in k)c=c.replace(new RegExp(m,"g"),k[m]);var r="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
R="January February March April May June July August September October November December".split(" ");k={"%a":function(a){return r[a.Aa].substring(0,3)},"%A":function(a){return r[a.Aa]},"%b":function(a){return R[a.sa].substring(0,3)},"%B":function(a){return R[a.sa]},"%C":function(a){return g((a.ja+1900)/100|0,2)},"%d":function(a){return g(a.ua,2)},"%e":function(a){return f(a.ua,2," ")},"%g":function(a){return n(a).toString().substring(2)},"%G":function(a){return n(a)},"%H":function(a){return g(a.za,
2)},"%I":function(a){a=a.za;0==a?a=12:12<a&&(a-=12);return g(a,2)},"%j":function(a){return g(a.ua+Gb(Fb(a.ja+1900)?Hb:Ib,a.sa-1),3)},"%m":function(a){return g(a.sa+1,2)},"%M":function(a){return g(a.Va,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.za&&12>a.za?"AM":"PM"},"%S":function(a){return g(a.Wa,2)},"%t":function(){return"\t"},"%u":function(a){return a.Aa||7},"%U":function(a){var b=new Date(a.ja+1900,0,1),c=0===b.getDay()?b:Jb(b,7-b.getDay());a=new Date(a.ja+1900,a.sa,a.ua);return 0>
h(c,a)?g(Math.ceil((31-c.getDate()+(Gb(Fb(a.getFullYear())?Hb:Ib,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=l(new Date(a.ja+1900,0,4)),c=l(new Date(a.ja+1901,0,4)),d=Jb(new Date(a.ja+1900,0,1),a.Ba);return 0>h(d,b)?"53":0>=h(c,d)?"01":g(Math.ceil((b.getFullYear()<a.ja+1900?a.Ba+32-b.getDate():a.Ba+1-b.getDate())/7),2)},"%w":function(a){return a.Aa},"%W":function(a){var b=new Date(a.ja,0,1),c=1===b.getDay()?b:Jb(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.ja+
1900,a.sa,a.ua);return 0>h(c,a)?g(Math.ceil((31-c.getDate()+(Gb(Fb(a.getFullYear())?Hb:Ib,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.ja+1900).toString().substring(2)},"%Y":function(a){return a.ja+1900},"%z":function(a){a=a.Ua;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.Xa},"%%":function(){return"%"}};for(m in k)0<=c.indexOf(m)&&(c=c.replace(new RegExp(m,"g"),k[m](d)));m=Lb(c);if(m.length>
b)return 0;C.set(m,a);return m.length-1}for(var Mb=Array(256),Nb=0;256>Nb;++Nb)Mb[Nb]=String.fromCharCode(Nb);Ma=Mb;N=e.BindingError=Qa("BindingError");Ra=e.InternalError=Qa("InternalError");U.prototype.isAliasOf=function(a){if(!(this instanceof U&&a instanceof U))return!1;var b=this.ea.ha.fa,c=this.ea.ga,d=a.ea.ha.fa;for(a=a.ea.ga;b.ma;)c=b.va(c),b=b.ma;for(;d.ma;)a=d.va(a),d=d.ma;return b===d&&c===a};
U.prototype.clone=function(){this.ea.ga||Ua(this);if(this.ea.ta)return this.ea.count.value+=1,this;var a=S(Object.create(Object.getPrototypeOf(this),{ea:{value:Ta(this.ea)}}));a.ea.count.value+=1;a.ea.qa=!1;return a};U.prototype["delete"]=function(){this.ea.ga||Ua(this);this.ea.qa&&!this.ea.ta&&O("Object already scheduled for deletion");Wa(this);Xa(this.ea);this.ea.ta||(this.ea.ka=void 0,this.ea.ga=void 0)};U.prototype.isDeleted=function(){return!this.ea.ga};
U.prototype.deleteLater=function(){this.ea.ga||Ua(this);this.ea.qa&&!this.ea.ta&&O("Object already scheduled for deletion");Ya.push(this);1===Ya.length&&T&&T(Za);this.ea.qa=!0;return this};W.prototype.Ma=function(a){this.Ga&&(a=this.Ga(a));return a};W.prototype.Fa=function(a){this.pa&&this.pa(a)};W.prototype.argPackAdvance=8;W.prototype.readValueFromPointer=ib;W.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
W.prototype.fromWireType=function(a){function b(){return this.ya?mb(this.fa.ra,{ha:this.Pa,ga:c,la:this,ka:a}):mb(this.fa.ra,{ha:this,ga:a})}var c=this.Ma(a);if(!c)return this.Fa(a),null;var d=lb(this.fa,c);if(void 0!==d){if(0===d.ea.count.value)return d.ea.ga=c,d.ea.ka=a,d.clone();d=d.clone();this.Fa(a);return d}d=this.fa.La(c);d=$a[d];if(!d)return b.call(this);d=this.xa?d.Ha:d.pointerType;var f=jb(c,this.fa,d.fa);return null===f?b.call(this):this.ya?mb(d.fa.ra,{ha:d,ga:f,la:this,ka:a}):mb(d.fa.ra,
{ha:d,ga:f})};e.getInheritedInstanceCount=function(){return Object.keys(kb).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in kb)kb.hasOwnProperty(b)&&a.push(kb[b]);return a};e.flushPendingDeletes=Za;e.setDelayFunction=function(a){T=a;Ya.length&&T&&T(Za)};ob=e.UnboundTypeError=Qa("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<Z.length;++b)void 0!==Z[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<Z.length;++a)if(void 0!==Z[a])return Z[a];return null};
function Lb(a){var b=Array(pa(a)+1);oa(a,b,0,b.length);return b}
var Pb={E:function(){},z:function(){e.___errno_location&&(D[e.___errno_location()>>2]=63);return-1},y:function(a,b){Ia=b;try{var c=Ja();var d=Ja();if(-1===c||0===d)var f=-28;else{var g=Ka.Oa[c];if(g&&d===g.bb){var h=(void 0).$a(g.fd);Ka.Za(c,h,d,g.flags);(void 0).eb(h);Ka.Oa[c]=null;g.Ya&&Y(g.cb)}f=0}return f}catch(l){return x(l),-l.Ja}},k:function(){},v:function(a,b,c,d,f){var g=La(c);b=K(b);Q(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===
c)var d=C;else if(2===c)d=qa;else if(4===c)d=D;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(d[a>>g])},na:null})},g:function(a,b,c,d,f,g,h,l,n,k,m,r,R){m=K(m);g=X(f,g);l&&(l=X(h,l));k&&(k=X(n,k));R=X(r,R);var F=Oa(m);bb(F,function(){rb("Cannot construct "+m+" due to unbound types",[d])});P([a,b,c],d?[d]:[],function(b){b=b[0];if(d){var c=b.fa;var f=c.ra}else f=U.prototype;b=Pa(F,function(){if(Object.getPrototypeOf(this)!==h)throw new N("Use 'new' to construct "+
m);if(void 0===n.oa)throw new N(m+" has no accessible constructor");var a=n.oa[arguments.length];if(void 0===a)throw new N("Tried to invoke ctor of "+m+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(n.oa).toString()+") parameters instead!");return a.apply(this,arguments)});var h=Object.create(f,{constructor:{value:b}});b.prototype=h;var n=new cb(m,b,h,R,c,g,l,k);c=new W(m,n,!0,!1);f=new W(m+"*",n,!1,!1);var r=new W(m+" const*",n,!1,!0);$a[a]={pointerType:f,Ha:r};
nb(F,b);return[c,f,r]})},f:function(a,b,c,d,f,g){assert(0<b);var h=sb(b,c);f=X(d,f);var l=[g],n=[];P([],[a],function(a){a=a[0];var c="constructor "+a.name;void 0===a.fa.oa&&(a.fa.oa=[]);if(void 0!==a.fa.oa[b-1])throw new N("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+a.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");a.fa.oa[b-1]=function(){rb("Cannot construct "+a.name+" due to unbound types",
h)};P([],h,function(d){a.fa.oa[b-1]=function(){arguments.length!==b-1&&O(c+" called with "+arguments.length+" arguments, expected "+(b-1));n.length=0;l.length=b;for(var a=1;a<b;++a)l[a]=d[a].toWireType(n,arguments[a-1]);a=f.apply(null,l);tb(n);return d[0].fromWireType(a)};return[]});return[]})},c:function(a,b,c,d,f,g,h,l){var n=sb(c,d);b=K(b);g=X(f,g);P([],[a],function(a){function d(){rb("Cannot call "+f+" due to unbound types",n)}a=a[0];var f=a.name+"."+b;l&&a.fa.Qa.push(b);var k=a.fa.ra,F=k[b];
void 0===F||void 0===F.ia&&F.className!==a.name&&F.wa===c-2?(d.wa=c-2,d.className=a.name,k[b]=d):(ab(k,b,f),k[b].ia[c-2]=d);P([],n,function(d){d=vb(f,d,a,g,h);void 0===k[b].ia?(d.wa=c-2,k[b]=d):k[b].ia[c-2]=d;return[]});return[]})},t:function(a,b){b=K(b);Q(a,{name:b,fromWireType:function(a){var b=Z[a].value;xb(a);return b},toWireType:function(a,b){return gb(b)},argPackAdvance:8,readValueFromPointer:ib,na:null})},o:function(a,b,c,d){function f(){}c=La(c);b=K(b);f.values={};Q(a,{name:b,constructor:f,
fromWireType:function(a){return this.constructor.values[a]},toWireType:function(a,b){return b.value},argPackAdvance:8,readValueFromPointer:yb(b,c,d),na:null});bb(b,f)},b:function(a,b,c){var d=zb(a,"enum");b=K(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Pa(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},i:function(a,b,c){c=La(c);b=K(b);Q(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+
V(b)+'" to '+this.name);return b},argPackAdvance:8,readValueFromPointer:Ab(b,c),na:null})},l:function(a,b,c,d,f,g){var h=sb(b,c);a=K(a);f=X(d,f);bb(a,function(){rb("Cannot call "+a+" due to unbound types",h)},b-1);P([],h,function(c){c=[c[0],null].concat(c.slice(1));nb(a,vb(a,c,null,f,g),b-1);return[]})},e:function(a,b,c,d,f){function g(a){return a}b=K(b);-1===f&&(f=4294967295);var h=La(c);if(0===d){var l=32-8*c;g=function(a){return a<<l>>>l}}var n=-1!=b.indexOf("unsigned");Q(a,{name:b,fromWireType:g,
toWireType:function(a,c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+V(c)+'" to '+this.name);if(c<d||c>f)throw new TypeError('Passing a number "'+V(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return n?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Bb(b,h,0!==d),na:null})},d:function(a,b,c){function d(a){a>>=2;return new f(E.buffer,E[a+1],E[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,
Int32Array,Uint32Array,Float32Array,Float64Array][b];c=K(c);Q(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{Na:!0})},j:function(a,b){b=K(b);var c="std::string"===b;Q(a,{name:b,fromWireType:function(a){var b=E[a>>2];if(c){var d=B[a+4+b],h=0;0!=d&&(h=d,B[a+4+b]=0);var l=a+4;for(d=0;d<=b;++d){var n=a+4+d;if(0==B[n]){l=na(l);if(void 0===k)var k=l;else k+=String.fromCharCode(0),k+=l;l=n+1}}0!=h&&(B[a+4+b]=h)}else{k=Array(b);for(d=0;d<b;++d)k[d]=String.fromCharCode(B[a+4+d]);k=k.join("")}Y(a);
return k},toWireType:function(a,b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var d="string"===typeof b;d||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||O("Cannot pass non-string to std::string");var f=(c&&d?function(){return pa(b)}:function(){return b.length})(),l=Ob(4+f+1);E[l>>2]=f;if(c&&d)oa(b,B,l+4,f+1);else if(d)for(d=0;d<f;++d){var n=b.charCodeAt(d);255<n&&(Y(l),O("String has UTF-16 code units that do not fit in 8 bits"));B[l+4+d]=n}else for(d=0;d<f;++d)B[l+
4+d]=b[d];null!==a&&a.push(Y,l);return l},argPackAdvance:8,readValueFromPointer:ib,na:function(a){Y(a)}})},u:function(a,b,c){c=K(c);if(2===b){var d=function(){return ra};var f=1}else 4===b&&(d=function(){return E},f=2);Q(a,{name:c,fromWireType:function(a){for(var b=d(),c=E[a>>2],g=Array(c),k=a+4>>f,m=0;m<c;++m)g[m]=String.fromCharCode(b[k+m]);Y(a);return g.join("")},toWireType:function(a,c){var g=c.length,h=Ob(4+g*b),k=d();E[h>>2]=g;for(var m=h+4>>f,r=0;r<g;++r)k[m+r]=c.charCodeAt(r);null!==a&&a.push(Y,
h);return h},argPackAdvance:8,readValueFromPointer:ib,na:function(a){Y(a)}})},w:function(a,b){b=K(b);Q(a,{ab:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},m:xb,n:function(a){4<a&&(Z[a].Ea+=1)},h:function(a,b){a=zb(a,"_emval_take_value");a=a.readValueFromPointer(b);return gb(a)},a:function(){x()},r:function(a,b,c){B.set(B.subarray(b,b+c),a)},s:function(){x("OOM")},A:function(a,b){var c=0;Db().forEach(function(d,f){var g=b+c;f=D[a+4*f>>2]=g;for(g=0;g<d.length;++g)C[f++>>
0]=d.charCodeAt(g);C[f>>0]=0;c+=d.length+1});return 0},B:function(a,b){var c=Db();D[a>>2]=c.length;var d=0;c.forEach(function(a){d+=a.length+1});D[b>>2]=d;return 0},D:function(){return 0},p:function(){return 0},C:function(a,b,c,d){try{for(var f=0,g=0;g<c;g++){for(var h=D[b+8*g>>2],l=D[b+(8*g+4)>>2],n=0;n<l;n++){var k=B[h+n],m=Ha[a];0===k||10===k?((1===a?ia:y)(ma(m,0)),m.length=0):m.push(k)}f+=l}D[d>>2]=f;return 0}catch(r){return x(r),r.Ja}},memory:A,q:function(){},x:function(a,b,c,d){return Kb(a,
b,c,d)},table:ja},Qb=function(){function a(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Ba&&(clearInterval(Ba),Ba=null),I&&(a=I,I=null,a()))}function b(b){a(b.instance)}function c(a){return Fa().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);x(a)})}var d={env:Pb,wasi_unstable:Pb};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ca()||"function"!==typeof fetch)return c(b);fetch(J,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();e.asm=Qb;
var Ga=e.___wasm_call_ctors=function(){return e.asm.F.apply(null,arguments)},Ob=e._malloc=function(){return e.asm.G.apply(null,arguments)},Y=e._free=function(){return e.asm.H.apply(null,arguments)},qb=e.___getTypeName=function(){return e.asm.I.apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return e.asm.J.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.K.apply(null,arguments)};e.dynCall_ii=function(){return e.asm.L.apply(null,arguments)};
e.dynCall_vii=function(){return e.asm.M.apply(null,arguments)};e.dynCall_viii=function(){return e.asm.N.apply(null,arguments)};e.dynCall_iii=function(){return e.asm.O.apply(null,arguments)};e.dynCall_i=function(){return e.asm.P.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.Q.apply(null,arguments)};e.dynCall_viiii=function(){return e.asm.R.apply(null,arguments)};e.dynCall_iiiii=function(){return e.asm.S.apply(null,arguments)};e.dynCall_jiji=function(){return e.asm.T.apply(null,arguments)};
e.dynCall_iidiiii=function(){return e.asm.U.apply(null,arguments)};e.dynCall_iiiiii=function(){return e.asm.V.apply(null,arguments)};e.dynCall_iiiiiiiii=function(){return e.asm.W.apply(null,arguments)};e.dynCall_iiiiiii=function(){return e.asm.X.apply(null,arguments)};e.dynCall_iiiiij=function(){return e.asm.Y.apply(null,arguments)};e.dynCall_iiiiid=function(){return e.asm.Z.apply(null,arguments)};e.dynCall_iiiiijj=function(){return e.asm._.apply(null,arguments)};
e.dynCall_iiiiiiii=function(){return e.asm.$.apply(null,arguments)};e.dynCall_iiiiiijj=function(){return e.asm.aa.apply(null,arguments)};e.dynCall_viiiiii=function(){return e.asm.ba.apply(null,arguments)};e.dynCall_v=function(){return e.asm.ca.apply(null,arguments)};e.dynCall_viiiii=function(){return e.asm.da.apply(null,arguments)};e.asm=Qb;var Rb;e.then=function(a){if(Rb)a(e);else{var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b();a(e)}}return e};
I=function Sb(){Rb||Tb();Rb||(I=Sb)};
function Tb(){function a(){if(!Rb&&(Rb=!0,!ka)){va(xa);va(ya);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();za.unshift(a)}va(za)}}if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Aa();va(wa);0<H||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=Tb;
if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();Tb();


  return anitomyscript
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
      module.exports = anitomyscript;
    else if (typeof define === 'function' && define['amd'])
      define([], function() { return anitomyscript; });
    else if (typeof exports === 'object')
      exports["anitomyscript"] = anitomyscript;
    