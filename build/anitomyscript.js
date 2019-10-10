
var anitomyscript = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  return (
function(anitomyscript) {
  anitomyscript = anitomyscript || {};

var e;e||(e=typeof anitomyscript !== 'undefined' ? anitomyscript : {});var n={},q;for(q in e)e.hasOwnProperty(q)&&(n[q]=e[q]);var r=!1,t=!1,aa=!1,ba=!1,ca=!1;r="object"===typeof window;t="function"===typeof importScripts;aa=(ba="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!r&&!t;ca=!r&&!aa&&!t;var v="",da,w;
if(aa){v=__dirname+"/";var ea,fa;da=function(a,b){ea||(ea=require("fs"));fa||(fa=require("path"));a=fa.normalize(a);a=ea.readFileSync(a);return b?a:a.toString()};w=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||x("Assertion failed: undefined");return a};1<process.argv.length&&process.argv[1].replace(/\\/g,"/");process.argv.slice(2);process.on("uncaughtException",function(a){throw a;});process.on("unhandledRejection",x);e.inspect=function(){return"[Emscripten Module object]"}}else if(ca)"undefined"!=
typeof read&&(da=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");"object"===typeof a||x("Assertion failed: undefined");return a},"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(r||t)t?v=self.location.href:document.currentScript&&(v=document.currentScript.src),_scriptDir&&(v=_scriptDir),0!==v.indexOf("blob:")?
v=v.substr(0,v.lastIndexOf("/")+1):v="",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});var ha=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(q in n)n.hasOwnProperty(q)&&(e[q]=n[q]);n=null;var ia={"f64-rem":function(a,b){return a%b},"debugger":function(){}},z;e.wasmBinary&&(z=e.wasmBinary);
"object"!==typeof WebAssembly&&y("no native wasm support detected");var A,ja=new WebAssembly.Table({initial:508,maximum:508,element:"anyfunc"}),ka=!1,la="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ma(a){if(a){for(var b=B,c=a+void 0,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&la)a=la.decode(b.subarray(a,d));else{for(c="";a<d;){var f=b[a++];if(f&128){var g=b[a++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|g);else{var h=b[a++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|b[a++]&63;65536>f?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}a=c}}else a="";return a}
function na(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var h=a.charCodeAt(++f);g=65536+((g&1023)<<10)|h&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");var buffer,C,B,pa,qa,D,E,ra,sa,ta=e.TOTAL_MEMORY||16777216;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:ta/65536,maximum:ta/65536});A&&(buffer=A.buffer);ta=buffer.byteLength;var G=buffer;buffer=G;e.HEAP8=C=new Int8Array(G);
e.HEAP16=pa=new Int16Array(G);e.HEAP32=D=new Int32Array(G);e.HEAPU8=B=new Uint8Array(G);e.HEAPU16=qa=new Uint16Array(G);e.HEAPU32=E=new Uint32Array(G);e.HEAPF32=ra=new Float32Array(G);e.HEAPF64=sa=new Float64Array(G);D[8752]=5278096;function ua(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.Ia;"number"===typeof c?void 0===b.Ba?e.dynCall_v(c):e.dynCall_vi(c,b.Ba):c(void 0===b.Ba?null:b.Ba)}}}var va=[],wa=[],xa=[],ya=[];
function za(){var a=e.preRun.shift();va.unshift(a)}var H=0,Aa=null,I=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ha(a);y(a);ka=!0;throw"abort("+a+"). Build with -s ASSERTIONS=1 for more info.";}function Ba(){var a=J;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var J="anitomyscript.wasm";if(!Ba()){var Ca=J;J=e.locateFile?e.locateFile(Ca,v):v+Ca}
function Da(){try{if(z)return new Uint8Array(z);if(w)return w(J);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}function Ea(){return z||!r&&!t||"function"!==typeof fetch?new Promise(function(a){a(Da())}):fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Da()})}
e.asm=function(){function a(a){e.asm=a.exports;H--;e.monitorRunDependencies&&e.monitorRunDependencies(H);0==H&&(null!==Aa&&(clearInterval(Aa),Aa=null),I&&(a=I,I=null,a()))}function b(b){a(b.instance)}function c(a){return Ea().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){y("failed to asynchronously prepare wasm: "+a);x(a)})}var d={env:Fa,wasi_unstable:Fa,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:ia};H++;e.monitorRunDependencies&&e.monitorRunDependencies(H);
if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ba()||"function"!==typeof fetch)return c(b);fetch(J,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){y("wasm streaming compile failed: "+a);y("falling back to ArrayBuffer instantiation");c(b)})})})();return{}};wa.push({Ia:function(){Ga()}});
var Ha=0;function Ia(){Ha+=4;return D[Ha-4>>2]}var Ja={};function Ka(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}var La=void 0;function K(a){for(var b="";B[a];)b+=La[B[a++]];return b}var L={},M={},Ma={};function Na(a){if(void 0===a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}
function Oa(a,b){a=Na(a);return(new Function("body","return function "+a+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(b)}function Pa(a){var b=Error,c=Oa(a,function(b){this.name=a;this.message=b;b=Error(b).stack;void 0!==b&&(this.stack=this.toString()+"\n"+b.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(b.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};return c}
var N=void 0;function O(a){throw new N(a);}var Qa=void 0;function Ra(a){throw new Qa(a);}function P(a,b,c){function d(b){b=c(b);b.length!==a.length&&Ra("Mismatched type converter count");for(var d=0;d<a.length;++d)Q(a[d],b[d])}a.forEach(function(a){Ma[a]=b});var f=Array(b.length),g=[],h=0;b.forEach(function(a,b){M.hasOwnProperty(a)?f[b]=M[a]:(g.push(a),L.hasOwnProperty(a)||(L[a]=[]),L[a].push(function(){f[b]=M[a];++h;h===g.length&&d(f)}))});0===g.length&&d(f)}
function Q(a,b,c){c=c||{};if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=b.name;a||O('type "'+d+'" must have a positive integer typeid pointer');if(M.hasOwnProperty(a)){if(c.La)return;O("Cannot register type '"+d+"' twice")}M[a]=b;delete Ma[a];L.hasOwnProperty(a)&&(b=L[a],delete L[a],b.forEach(function(a){a()}))}function Sa(a){return{count:a.count,pa:a.pa,sa:a.sa,ea:a.ea,fa:a.fa,ia:a.ia,ja:a.ja}}
function Ta(a){O(a.ba.fa.da.name+" instance already deleted")}var Ua=!1;function Va(){}function Wa(a){--a.count.value;0===a.count.value&&(a.ia?a.ja.oa(a.ia):a.fa.da.oa(a.ea))}
function R(a){if("undefined"===typeof FinalizationGroup)return R=function(a){return a},a;Ua=new FinalizationGroup(function(a){for(var b=a.next();!b.done;b=a.next())b=b.value,b.ea?Wa(b):console.warn("object already deleted: "+b.ea)});R=function(a){Ua.register(a,a.ba,a.ba);return a};Va=function(a){Ua.unregister(a.ba)};return R(a)}var Xa=void 0,Ya=[];function Za(){for(;Ya.length;){var a=Ya.pop();a.ba.pa=!1;a["delete"]()}}function T(){}var $a={};
function ab(a,b,c){if(void 0===a[b].ga){var d=a[b];a[b]=function(){a[b].ga.hasOwnProperty(arguments.length)||O("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+a[b].ga+")!");return a[b].ga[arguments.length].apply(this,arguments)};a[b].ga=[];a[b].ga[d.va]=d}}
function bb(a,b,c){e.hasOwnProperty(a)?((void 0===c||void 0!==e[a].ga&&void 0!==e[a].ga[c])&&O("Cannot register public name '"+a+"' twice"),ab(e,a,a),e.hasOwnProperty(c)&&O("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),e[a].ga[c]=b):(e[a]=b,void 0!==c&&(e[a].eb=c))}function cb(a,b,c,d,f,g,h,k){this.name=a;this.constructor=b;this.qa=c;this.oa=d;this.ka=f;this.Ja=g;this.ua=h;this.Ha=k;this.Oa=[]}
function db(a,b,c){for(;b!==c;)b.ua||O("Expected null or instance of "+c.name+", got an instance of "+b.name),a=b.ua(a),b=b.ka;return a}function eb(a,b){if(null===b)return this.Ca&&O("null is not a valid "+this.name),0;b.ba||O('Cannot pass "'+U(b)+'" as a '+this.name);b.ba.ea||O("Cannot pass deleted object as a pointer of type "+this.name);return db(b.ba.ea,b.ba.fa.da,this.da)}
function fb(a,b){if(null===b){this.Ca&&O("null is not a valid "+this.name);if(this.xa){var c=this.Pa();null!==a&&a.push(this.oa,c);return c}return 0}b.ba||O('Cannot pass "'+U(b)+'" as a '+this.name);b.ba.ea||O("Cannot pass deleted object as a pointer of type "+this.name);!this.wa&&b.ba.fa.wa&&O("Cannot convert argument of type "+(b.ba.ja?b.ba.ja.name:b.ba.fa.name)+" to parameter type "+this.name);c=db(b.ba.ea,b.ba.fa.da,this.da);if(this.xa)switch(void 0===b.ba.ia&&O("Passing raw pointer to smart pointer is illegal"),
this.Ra){case 0:b.ba.ja===this?c=b.ba.ia:O("Cannot convert argument of type "+(b.ba.ja?b.ba.ja.name:b.ba.fa.name)+" to parameter type "+this.name);break;case 1:c=b.ba.ia;break;case 2:if(b.ba.ja===this)c=b.ba.ia;else{var d=b.clone();c=this.Qa(c,gb(function(){d["delete"]()}));null!==a&&a.push(this.oa,c)}break;default:O("Unsupporting sharing policy")}return c}
function hb(a,b){if(null===b)return this.Ca&&O("null is not a valid "+this.name),0;b.ba||O('Cannot pass "'+U(b)+'" as a '+this.name);b.ba.ea||O("Cannot pass deleted object as a pointer of type "+this.name);b.ba.fa.wa&&O("Cannot convert argument of type "+b.ba.fa.name+" to parameter type "+this.name);return db(b.ba.ea,b.ba.fa.da,this.da)}function ib(a){return this.fromWireType(E[a>>2])}function jb(a,b,c){if(b===c)return a;if(void 0===c.ka)return null;a=jb(a,b,c.ka);return null===a?null:c.Ha(a)}
var kb={};function lb(a,b){for(void 0===b&&O("ptr should not be undefined");a.ka;)b=a.ua(b),a=a.ka;return kb[b]}function mb(a,b){b.fa&&b.ea||Ra("makeClassHandle requires ptr and ptrType");!!b.ja!==!!b.ia&&Ra("Both smartPtrType and smartPtr must be specified");b.count={value:1};return R(Object.create(a,{ba:{value:b}}))}
function V(a,b,c,d){this.name=a;this.da=b;this.Ca=c;this.wa=d;this.xa=!1;this.oa=this.Qa=this.Pa=this.Fa=this.Ra=this.Na=void 0;void 0!==b.ka?this.toWireType=fb:(this.toWireType=d?eb:hb,this.la=null)}function nb(a,b,c){e.hasOwnProperty(a)||Ra("Replacing nonexistant public symbol");void 0!==e[a].ga&&void 0!==c?e[a].ga[c]=b:(e[a]=b,e[a].va=c)}
function W(a,b){a=K(a);if(void 0!==e["FUNCTION_TABLE_"+a])var c=e["FUNCTION_TABLE_"+a][b];else if("undefined"!==typeof FUNCTION_TABLE)c=FUNCTION_TABLE[b];else{c=e["dynCall_"+a];void 0===c&&(c=e["dynCall_"+a.replace(/f/g,"d")],void 0===c&&O("No dynCall invoker for signature: "+a));for(var d=[],f=1;f<a.length;++f)d.push("a"+f);f="return function "+("dynCall_"+a+"_"+b)+"("+d.join(", ")+") {\n";f+="    return dynCall(rawFunction"+(d.length?", ":"")+d.join(", ")+");\n";c=(new Function("dynCall","rawFunction",
f+"};\n"))(c,b)}"function"!==typeof c&&O("unknown function pointer with signature "+a+": "+b);return c}var ob=void 0;function pb(a){a=qb(a);var b=K(a);X(a);return b}function rb(a,b){function c(a){f[a]||M[a]||(Ma[a]?Ma[a].forEach(c):(d.push(a),f[a]=!0))}var d=[],f={};b.forEach(c);throw new ob(a+": "+d.map(pb).join([", "]));}function sb(a,b){for(var c=[],d=0;d<a;d++)c.push(D[(b>>2)+d]);return c}function tb(a){for(;a.length;){var b=a.pop();a.pop()(b)}}
function ub(a){var b=Function;if(!(b instanceof Function))throw new TypeError("new_ called with constructor type "+typeof b+" which is not a function");var c=Oa(b.name||"unknownFunctionName",function(){});c.prototype=b.prototype;c=new c;a=b.apply(c,a);return a instanceof Object?a:c}
function vb(a,b,c,d,f){var g=b.length;2>g&&O("argTypes array size mismatch! Must at least get return value and 'this' types!");var h=null!==b[1]&&null!==c,k=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].la){k=!0;break}var p="void"!==b[0].name,l="",m="";for(c=0;c<g-2;++c)l+=(0!==c?", ":"")+"arg"+c,m+=(0!==c?", ":"")+"arg"+c+"Wired";a="return function "+Na(a)+"("+l+") {\nif (arguments.length !== "+(g-2)+") {\nthrowBindingError('function "+a+" called with ' + arguments.length + ' arguments, expected "+
(g-2)+" args!');\n}\n";k&&(a+="var destructors = [];\n");var u=k?"destructors":"null";l="throwBindingError invoker fn runDestructors retType classParam".split(" ");d=[O,d,f,tb,b[0],b[1]];h&&(a+="var thisWired = classParam.toWireType("+u+", this);\n");for(c=0;c<g-2;++c)a+="var arg"+c+"Wired = argType"+c+".toWireType("+u+", arg"+c+"); // "+b[c+2].name+"\n",l.push("argType"+c),d.push(b[c+2]);h&&(m="thisWired"+(0<m.length?", ":"")+m);a+=(p?"var rv = ":"")+"invoker(fn"+(0<m.length?", ":"")+m+");\n";if(k)a+=
"runDestructors(destructors);\n";else for(c=h?1:2;c<b.length;++c)g=1===c?"thisWired":"arg"+(c-2)+"Wired",null!==b[c].la&&(a+=g+"_dtor("+g+"); // "+b[c].name+"\n",l.push(g+"_dtor"),d.push(b[c].la));p&&(a+="var ret = retType.fromWireType(rv);\nreturn ret;\n");l.push(a+"}\n");return ub(l).apply(null,d)}var wb=[],Y=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function xb(a){4<a&&0===--Y[a].Da&&(Y[a]=void 0,wb.push(a))}
function gb(a){switch(a){case void 0:return 1;case null:return 2;case !0:return 3;case !1:return 4;default:var b=wb.length?wb.pop():Y.length;Y[b]={Da:1,value:a};return b}}function yb(a,b,c){switch(b){case 0:return function(a){return this.fromWireType((c?C:B)[a])};case 1:return function(a){return this.fromWireType((c?pa:qa)[a>>1])};case 2:return function(a){return this.fromWireType((c?D:E)[a>>2])};default:throw new TypeError("Unknown integer type: "+a);}}
function zb(a,b){var c=M[a];void 0===c&&O(b+" has unknown type "+pb(a));return c}function U(a){if(null===a)return"null";var b=typeof a;return"object"===b||"array"===b||"function"===b?a.toString():""+a}function Ab(a,b){switch(b){case 2:return function(a){return this.fromWireType(ra[a>>2])};case 3:return function(a){return this.fromWireType(sa[a>>3])};default:throw new TypeError("Unknown float type: "+a);}}
function Bb(a,b,c){switch(b){case 0:return c?function(a){return C[a]}:function(a){return B[a]};case 1:return c?function(a){return pa[a>>1]}:function(a){return qa[a>>1]};case 2:return c?function(a){return D[a>>2]}:function(a){return E[a>>2]};default:throw new TypeError("Unknown integer type: "+a);}}var Cb={};function Db(a){if(0===a)return 0;a=ma(a);if(!Cb.hasOwnProperty(a))return 0;Db.ma&&X(Db.ma);a=Cb[a];var b=oa(a)+1,c=Eb(b);c&&na(a,C,c,b);Db.ma=c;return Db.ma}
function Z(){Z.ma||(Z.ma=[]);Z.ma.push(Fb());return Z.ma.length-1}function Gb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Hb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Ib=[31,29,31,30,31,30,31,31,30,31,30,31],Jb=[31,28,31,30,31,30,31,31,30,31,30,31];
function Kb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Gb(a.getFullYear())?Ib:Jb)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Lb(a,b,c,d){function f(a,b,c){for(a="number"===typeof a?a.toString():a||"";a.length<b;)a=c[0]+a;return a}function g(a,b){return f(a,b,"0")}function h(a,b){function c(a){return 0>a?-1:0<a?1:0}var d;0===(d=c(a.getFullYear()-b.getFullYear()))&&0===(d=c(a.getMonth()-b.getMonth()))&&(d=c(a.getDate()-b.getDate()));return d}function k(a){switch(a.getDay()){case 0:return new Date(a.getFullYear()-1,11,29);case 1:return a;case 2:return new Date(a.getFullYear(),0,3);case 3:return new Date(a.getFullYear(),
0,2);case 4:return new Date(a.getFullYear(),0,1);case 5:return new Date(a.getFullYear()-1,11,31);case 6:return new Date(a.getFullYear()-1,11,30)}}function p(a){a=Kb(new Date(a.ha+1900,0,1),a.Aa);var b=k(new Date(a.getFullYear()+1,0,4));return 0>=h(k(new Date(a.getFullYear(),0,4)),a)?0>=h(b,a)?a.getFullYear()+1:a.getFullYear():a.getFullYear()-1}var l=D[d+40>>2];d={Ua:D[d>>2],Ta:D[d+4>>2],ya:D[d+8>>2],ta:D[d+12>>2],ra:D[d+16>>2],ha:D[d+20>>2],za:D[d+24>>2],Aa:D[d+28>>2],fb:D[d+32>>2],Sa:D[d+36>>2],
Va:l?ma(l):""};c=ma(c);l={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var m in l)c=c.replace(new RegExp(m,"g"),l[m]);var u="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
S="January February March April May June July August September October November December".split(" ");l={"%a":function(a){return u[a.za].substring(0,3)},"%A":function(a){return u[a.za]},"%b":function(a){return S[a.ra].substring(0,3)},"%B":function(a){return S[a.ra]},"%C":function(a){return g((a.ha+1900)/100|0,2)},"%d":function(a){return g(a.ta,2)},"%e":function(a){return f(a.ta,2," ")},"%g":function(a){return p(a).toString().substring(2)},"%G":function(a){return p(a)},"%H":function(a){return g(a.ya,
2)},"%I":function(a){a=a.ya;0==a?a=12:12<a&&(a-=12);return g(a,2)},"%j":function(a){return g(a.ta+Hb(Gb(a.ha+1900)?Ib:Jb,a.ra-1),3)},"%m":function(a){return g(a.ra+1,2)},"%M":function(a){return g(a.Ta,2)},"%n":function(){return"\n"},"%p":function(a){return 0<=a.ya&&12>a.ya?"AM":"PM"},"%S":function(a){return g(a.Ua,2)},"%t":function(){return"\t"},"%u":function(a){return a.za||7},"%U":function(a){var b=new Date(a.ha+1900,0,1),c=0===b.getDay()?b:Kb(b,7-b.getDay());a=new Date(a.ha+1900,a.ra,a.ta);return 0>
h(c,a)?g(Math.ceil((31-c.getDate()+(Hb(Gb(a.getFullYear())?Ib:Jb,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%V":function(a){var b=k(new Date(a.ha+1900,0,4)),c=k(new Date(a.ha+1901,0,4)),d=Kb(new Date(a.ha+1900,0,1),a.Aa);return 0>h(d,b)?"53":0>=h(c,d)?"01":g(Math.ceil((b.getFullYear()<a.ha+1900?a.Aa+32-b.getDate():a.Aa+1-b.getDate())/7),2)},"%w":function(a){return a.za},"%W":function(a){var b=new Date(a.ha,0,1),c=1===b.getDay()?b:Kb(b,0===b.getDay()?1:7-b.getDay()+1);a=new Date(a.ha+
1900,a.ra,a.ta);return 0>h(c,a)?g(Math.ceil((31-c.getDate()+(Hb(Gb(a.getFullYear())?Ib:Jb,a.getMonth()-1)-31)+a.getDate())/7),2):0===h(c,b)?"01":"00"},"%y":function(a){return(a.ha+1900).toString().substring(2)},"%Y":function(a){return a.ha+1900},"%z":function(a){a=a.Sa;var b=0<=a;a=Math.abs(a)/60;return(b?"+":"-")+String("0000"+(a/60*100+a%60)).slice(-4)},"%Z":function(a){return a.Va},"%%":function(){return"%"}};for(m in l)0<=c.indexOf(m)&&(c=c.replace(new RegExp(m,"g"),l[m](d)));m=Mb(c);if(m.length>
b)return 0;C.set(m,a);return m.length-1}for(var Nb=Array(256),Ob=0;256>Ob;++Ob)Nb[Ob]=String.fromCharCode(Ob);La=Nb;N=e.BindingError=Pa("BindingError");Qa=e.InternalError=Pa("InternalError");T.prototype.isAliasOf=function(a){if(!(this instanceof T&&a instanceof T))return!1;var b=this.ba.fa.da,c=this.ba.ea,d=a.ba.fa.da;for(a=a.ba.ea;b.ka;)c=b.ua(c),b=b.ka;for(;d.ka;)a=d.ua(a),d=d.ka;return b===d&&c===a};
T.prototype.clone=function(){this.ba.ea||Ta(this);if(this.ba.sa)return this.ba.count.value+=1,this;var a=R(Object.create(Object.getPrototypeOf(this),{ba:{value:Sa(this.ba)}}));a.ba.count.value+=1;a.ba.pa=!1;return a};T.prototype["delete"]=function(){this.ba.ea||Ta(this);this.ba.pa&&!this.ba.sa&&O("Object already scheduled for deletion");Va(this);Wa(this.ba);this.ba.sa||(this.ba.ia=void 0,this.ba.ea=void 0)};T.prototype.isDeleted=function(){return!this.ba.ea};
T.prototype.deleteLater=function(){this.ba.ea||Ta(this);this.ba.pa&&!this.ba.sa&&O("Object already scheduled for deletion");Ya.push(this);1===Ya.length&&Xa&&Xa(Za);this.ba.pa=!0;return this};V.prototype.Ka=function(a){this.Fa&&(a=this.Fa(a));return a};V.prototype.Ea=function(a){this.oa&&this.oa(a)};V.prototype.argPackAdvance=8;V.prototype.readValueFromPointer=ib;V.prototype.deleteObject=function(a){if(null!==a)a["delete"]()};
V.prototype.fromWireType=function(a){function b(){return this.xa?mb(this.da.qa,{fa:this.Na,ea:c,ja:this,ia:a}):mb(this.da.qa,{fa:this,ea:a})}var c=this.Ka(a);if(!c)return this.Ea(a),null;var d=lb(this.da,c);if(void 0!==d){if(0===d.ba.count.value)return d.ba.ea=c,d.ba.ia=a,d.clone();d=d.clone();this.Ea(a);return d}d=this.da.Ja(c);d=$a[d];if(!d)return b.call(this);d=this.wa?d.Ga:d.pointerType;var f=jb(c,this.da,d.da);return null===f?b.call(this):this.xa?mb(d.da.qa,{fa:d,ea:f,ja:this,ia:a}):mb(d.da.qa,
{fa:d,ea:f})};e.getInheritedInstanceCount=function(){return Object.keys(kb).length};e.getLiveInheritedInstances=function(){var a=[],b;for(b in kb)kb.hasOwnProperty(b)&&a.push(kb[b]);return a};e.flushPendingDeletes=Za;e.setDelayFunction=function(a){Xa=a;Ya.length&&Xa&&Xa(Za)};ob=e.UnboundTypeError=Pa("UnboundTypeError");e.count_emval_handles=function(){for(var a=0,b=5;b<Y.length;++b)void 0!==Y[b]&&++a;return a};e.get_first_emval=function(){for(var a=5;a<Y.length;++a)if(void 0!==Y[a])return Y[a];return null};
function Mb(a){var b=Array(oa(a)+1);na(a,b,0,b.length);return b}
var Fa={D:function(){},y:function(){e.___errno_location&&(D[e.___errno_location()>>2]=63);return-1},u:function(a,b){Ha=b;try{var c=Ia();var d=Ia();if(-1===c||0===d)var f=-28;else{var g=Ja.Ma[c];if(g&&d===g.ab){var h=(void 0).Za(g.fd);Ja.Xa(c,h,d,g.flags);(void 0).cb(h);Ja.Ma[c]=null;g.Wa&&X(g.bb)}f=0}return f}catch(k){return x(k),-k.Ya}},n:function(){},t:function(a,b,c,d,f){var g=Ka(c);b=K(b);Q(a,{name:b,fromWireType:function(a){return!!a},toWireType:function(a,b){return b?d:f},argPackAdvance:8,readValueFromPointer:function(a){if(1===
c)var d=C;else if(2===c)d=pa;else if(4===c)d=D;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(d[a>>g])},la:null})},m:function(a,b,c,d,f,g,h,k,p,l,m,u,S){m=K(m);g=W(f,g);k&&(k=W(h,k));l&&(l=W(p,l));S=W(u,S);var F=Na(m);bb(F,function(){rb("Cannot construct "+m+" due to unbound types",[d])});P([a,b,c],d?[d]:[],function(b){b=b[0];if(d){var c=b.da;var f=c.qa}else f=T.prototype;b=Oa(F,function(){if(Object.getPrototypeOf(this)!==h)throw new N("Use 'new' to construct "+
m);if(void 0===p.na)throw new N(m+" has no accessible constructor");var a=p.na[arguments.length];if(void 0===a)throw new N("Tried to invoke ctor of "+m+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(p.na).toString()+") parameters instead!");return a.apply(this,arguments)});var h=Object.create(f,{constructor:{value:b}});b.prototype=h;var p=new cb(m,b,h,S,c,g,k,l);c=new V(m,p,!0,!1);f=new V(m+"*",p,!1,!1);var u=new V(m+" const*",p,!1,!0);$a[a]={pointerType:f,Ga:u};
nb(F,b);return[c,f,u]})},k:function(a,b,c,d,f,g){var h=sb(b,c);f=W(d,f);P([],[a],function(a){a=a[0];var c="constructor "+a.name;void 0===a.da.na&&(a.da.na=[]);if(void 0!==a.da.na[b-1])throw new N("Cannot register multiple constructors with identical number of parameters ("+(b-1)+") for class '"+a.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");a.da.na[b-1]=function(){rb("Cannot construct "+a.name+" due to unbound types",h)};P([],h,function(d){a.da.na[b-
1]=function(){arguments.length!==b-1&&O(c+" called with "+arguments.length+" arguments, expected "+(b-1));var a=[],h=Array(b);h[0]=g;for(var k=1;k<b;++k)h[k]=d[k].toWireType(a,arguments[k-1]);h=f.apply(null,h);tb(a);return d[0].fromWireType(h)};return[]});return[]})},d:function(a,b,c,d,f,g,h,k){var p=sb(c,d);b=K(b);g=W(f,g);P([],[a],function(a){function d(){rb("Cannot call "+f+" due to unbound types",p)}a=a[0];var f=a.name+"."+b;k&&a.da.Oa.push(b);var l=a.da.qa,F=l[b];void 0===F||void 0===F.ga&&F.className!==
a.name&&F.va===c-2?(d.va=c-2,d.className=a.name,l[b]=d):(ab(l,b,f),l[b].ga[c-2]=d);P([],p,function(d){d=vb(f,d,a,g,h);void 0===l[b].ga?(d.va=c-2,l[b]=d):l[b].ga[c-2]=d;return[]});return[]})},s:function(a,b){b=K(b);Q(a,{name:b,fromWireType:function(a){var b=Y[a].value;xb(a);return b},toWireType:function(a,b){return gb(b)},argPackAdvance:8,readValueFromPointer:ib,la:null})},C:function(a,b,c,d){function f(){}c=Ka(c);b=K(b);f.values={};Q(a,{name:b,constructor:f,fromWireType:function(a){return this.constructor.values[a]},
toWireType:function(a,b){return b.value},argPackAdvance:8,readValueFromPointer:yb(b,c,d),la:null});bb(b,f)},b:function(a,b,c){var d=zb(a,"enum");b=K(b);a=d.constructor;d=Object.create(d.constructor.prototype,{value:{value:c},constructor:{value:Oa(d.name+"_"+b,function(){})}});a.values[c]=d;a[b]=d},r:function(a,b,c){c=Ka(c);b=K(b);Q(a,{name:b,fromWireType:function(a){return a},toWireType:function(a,b){if("number"!==typeof b&&"boolean"!==typeof b)throw new TypeError('Cannot convert "'+U(b)+'" to '+
this.name);return b},argPackAdvance:8,readValueFromPointer:Ab(b,c),la:null})},q:function(a,b,c,d,f,g){var h=sb(b,c);a=K(a);f=W(d,f);bb(a,function(){rb("Cannot call "+a+" due to unbound types",h)},b-1);P([],h,function(c){c=[c[0],null].concat(c.slice(1));nb(a,vb(a,c,null,f,g),b-1);return[]})},f:function(a,b,c,d,f){function g(a){return a}b=K(b);-1===f&&(f=4294967295);var h=Ka(c);if(0===d){var k=32-8*c;g=function(a){return a<<k>>>k}}var p=-1!=b.indexOf("unsigned");Q(a,{name:b,fromWireType:g,toWireType:function(a,
c){if("number"!==typeof c&&"boolean"!==typeof c)throw new TypeError('Cannot convert "'+U(c)+'" to '+this.name);if(c<d||c>f)throw new TypeError('Passing a number "'+U(c)+'" from JS side to C/C++ side to an argument of type "'+b+'", which is outside the valid range ['+d+", "+f+"]!");return p?c>>>0:c|0},argPackAdvance:8,readValueFromPointer:Bb(b,h,0!==d),la:null})},e:function(a,b,c){function d(a){a>>=2;return new f(E.buffer,E[a+1],E[a])}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,
Float32Array,Float64Array][b];c=K(c);Q(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{La:!0})},p:function(a,b){b=K(b);var c="std::string"===b;Q(a,{name:b,fromWireType:function(a){var b=E[a>>2];if(c){var d=B[a+4+b],h=0;0!=d&&(h=d,B[a+4+b]=0);var k=a+4;for(d=0;d<=b;++d){var p=a+4+d;if(0==B[p]){k=ma(k);if(void 0===l)var l=k;else l+=String.fromCharCode(0),l+=k;k=p+1}}0!=h&&(B[a+4+b]=h)}else{l=Array(b);for(d=0;d<b;++d)l[d]=String.fromCharCode(B[a+4+d]);l=l.join("")}X(a);return l},toWireType:function(a,
b){b instanceof ArrayBuffer&&(b=new Uint8Array(b));var d="string"===typeof b;d||b instanceof Uint8Array||b instanceof Uint8ClampedArray||b instanceof Int8Array||O("Cannot pass non-string to std::string");var f=(c&&d?function(){return oa(b)}:function(){return b.length})(),k=Eb(4+f+1);E[k>>2]=f;if(c&&d)na(b,B,k+4,f+1);else if(d)for(d=0;d<f;++d){var p=b.charCodeAt(d);255<p&&(X(k),O("String has UTF-16 code units that do not fit in 8 bits"));B[k+4+d]=p}else for(d=0;d<f;++d)B[k+4+d]=b[d];null!==a&&a.push(X,
k);return k},argPackAdvance:8,readValueFromPointer:ib,la:function(a){X(a)}})},B:function(a,b,c){c=K(c);if(2===b){var d=function(){return qa};var f=1}else 4===b&&(d=function(){return E},f=2);Q(a,{name:c,fromWireType:function(a){for(var b=d(),c=E[a>>2],g=Array(c),l=a+4>>f,m=0;m<c;++m)g[m]=String.fromCharCode(b[l+m]);X(a);return g.join("")},toWireType:function(a,c){var g=c.length,h=Eb(4+g*b),l=d();E[h>>2]=g;for(var m=h+4>>f,u=0;u<g;++u)l[m+u]=c.charCodeAt(u);null!==a&&a.push(X,h);return h},argPackAdvance:8,
readValueFromPointer:ib,la:function(a){X(a)}})},A:function(a,b){b=K(b);Q(a,{$a:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},z:xb,x:function(a){4<a&&(Y[a].Da+=1)},o:function(a,b){a=zb(a,"_emval_take_value");a=a.readValueFromPointer(b);return gb(a)},__memory_base:1024,__table_base:0,a:function(){x()},j:function(){return C.length},w:function(a,b,c){B.set(B.subarray(b,b+c),a)},i:function(){x("OOM")},l:Db,h:function(a){var b=Z.ma[a];Z.ma.splice(a,1);Pb(b)},g:Z,v:function(a,
b,c,d){return Lb(a,b,c,d)},c:x,memory:A,table:ja},Qb=e.asm({},Fa,buffer);e.asm=Qb;e.___embind_register_native_and_builtin_types=function(){return e.asm.E.apply(null,arguments)};
var qb=e.___getTypeName=function(){return e.asm.F.apply(null,arguments)},X=e._free=function(){return e.asm.G.apply(null,arguments)},Eb=e._malloc=function(){return e.asm.H.apply(null,arguments)},Ga=e.globalCtors=function(){return e.asm._.apply(null,arguments)},Pb=e.stackRestore=function(){return e.asm.$.apply(null,arguments)},Fb=e.stackSave=function(){return e.asm.aa.apply(null,arguments)};e.dynCall_i=function(){return e.asm.I.apply(null,arguments)};
e.dynCall_ii=function(){return e.asm.J.apply(null,arguments)};e.dynCall_iii=function(){return e.asm.K.apply(null,arguments)};e.dynCall_iiii=function(){return e.asm.L.apply(null,arguments)};e.dynCall_iiiii=function(){return e.asm.M.apply(null,arguments)};e.dynCall_iiiiid=function(){return e.asm.N.apply(null,arguments)};e.dynCall_iiiiii=function(){return e.asm.O.apply(null,arguments)};e.dynCall_iiiiiid=function(){return e.asm.P.apply(null,arguments)};
e.dynCall_iiiiiii=function(){return e.asm.Q.apply(null,arguments)};e.dynCall_iiiiiiii=function(){return e.asm.R.apply(null,arguments)};e.dynCall_iiiiiiiii=function(){return e.asm.S.apply(null,arguments)};e.dynCall_iiiiij=function(){return e.asm.T.apply(null,arguments)};e.dynCall_vi=function(){return e.asm.U.apply(null,arguments)};e.dynCall_vii=function(){return e.asm.V.apply(null,arguments)};e.dynCall_viii=function(){return e.asm.W.apply(null,arguments)};
e.dynCall_viiii=function(){return e.asm.X.apply(null,arguments)};e.dynCall_viiiii=function(){return e.asm.Y.apply(null,arguments)};e.dynCall_viiiiii=function(){return e.asm.Z.apply(null,arguments)};e.asm=Qb;var Rb;e.then=function(a){if(Rb)a(e);else{var b=e.onRuntimeInitialized;e.onRuntimeInitialized=function(){b&&b();a(e)}}return e};I=function Sb(){Rb||Tb();Rb||(I=Sb)};
function Tb(){function a(){if(!Rb&&(Rb=!0,!ka)){ua(wa);ua(xa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var a=e.postRun.shift();ya.unshift(a)}ua(ya)}}if(!(0<H)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)za();ua(va);0<H||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},1)):a())}}e.run=Tb;
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
    