!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AxiosRepeatAbandon=t():e.AxiosRepeatAbandon=t()}(this,(function(){return function(){var e={924:function(e,t,r){"use strict";var o=r(210),n=r(559),i=n(o("String.prototype.indexOf"));e.exports=function(e,t){var r=o(e,!!t);return"function"==typeof r&&i(e,".prototype.")>-1?n(r):r}},559:function(e,t,r){"use strict";var o=r(612),n=r(210),i=n("%Function.prototype.apply%"),a=n("%Function.prototype.call%"),p=n("%Reflect.apply%",!0)||o.call(a,i),c=n("%Object.getOwnPropertyDescriptor%",!0),u=n("%Object.defineProperty%",!0),l=n("%Math.max%");if(u)try{u({},"a",{value:1})}catch(e){u=null}e.exports=function(e){var t=p(o,a,arguments);if(c&&u){var r=c(t,"length");r.configurable&&u(t,"length",{value:1+l(0,e.length-(arguments.length-1))})}return t};var f=function(){return p(o,i,arguments)};u?u(e.exports,"apply",{value:f}):e.exports.apply=f},648:function(e){"use strict";var t="Function.prototype.bind called on incompatible ",r=Array.prototype.slice,o=Object.prototype.toString,n="[object Function]";e.exports=function(e){var i=this;if("function"!=typeof i||o.call(i)!==n)throw new TypeError(t+i);for(var a,p=r.call(arguments,1),c=function(){if(this instanceof a){var t=i.apply(this,p.concat(r.call(arguments)));return Object(t)===t?t:this}return i.apply(e,p.concat(r.call(arguments)))},u=Math.max(0,i.length-p.length),l=[],f=0;f<u;f++)l.push("$"+f);if(a=Function("binder","return function ("+l.join(",")+"){ return binder.apply(this,arguments); }")(c),i.prototype){var y=function(){};y.prototype=i.prototype,a.prototype=new y,y.prototype=null}return a}},612:function(e,t,r){"use strict";var o=r(648);e.exports=Function.prototype.bind||o},210:function(e,t,r){"use strict";var o,n=SyntaxError,i=Function,a=TypeError,p=function(e){try{return i('"use strict"; return ('+e+").constructor;")()}catch(e){}},c=Object.getOwnPropertyDescriptor;if(c)try{c({},"")}catch(e){c=null}var u=function(){throw new a},l=c?function(){try{return u}catch(e){try{return c(arguments,"callee").get}catch(e){return u}}}():u,f=r(405)(),y=Object.getPrototypeOf||function(e){return e.__proto__},s={},d="undefined"==typeof Uint8Array?o:y(Uint8Array),g={"%AggregateError%":"undefined"==typeof AggregateError?o:AggregateError,"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?o:ArrayBuffer,"%ArrayIteratorPrototype%":f?y([][Symbol.iterator]()):o,"%AsyncFromSyncIteratorPrototype%":o,"%AsyncFunction%":s,"%AsyncGenerator%":s,"%AsyncGeneratorFunction%":s,"%AsyncIteratorPrototype%":s,"%Atomics%":"undefined"==typeof Atomics?o:Atomics,"%BigInt%":"undefined"==typeof BigInt?o:BigInt,"%Boolean%":Boolean,"%DataView%":"undefined"==typeof DataView?o:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":"undefined"==typeof Float32Array?o:Float32Array,"%Float64Array%":"undefined"==typeof Float64Array?o:Float64Array,"%FinalizationRegistry%":"undefined"==typeof FinalizationRegistry?o:FinalizationRegistry,"%Function%":i,"%GeneratorFunction%":s,"%Int8Array%":"undefined"==typeof Int8Array?o:Int8Array,"%Int16Array%":"undefined"==typeof Int16Array?o:Int16Array,"%Int32Array%":"undefined"==typeof Int32Array?o:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?y(y([][Symbol.iterator]())):o,"%JSON%":"object"==typeof JSON?JSON:o,"%Map%":"undefined"==typeof Map?o:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&f?y((new Map)[Symbol.iterator]()):o,"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?o:Promise,"%Proxy%":"undefined"==typeof Proxy?o:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":"undefined"==typeof Reflect?o:Reflect,"%RegExp%":RegExp,"%Set%":"undefined"==typeof Set?o:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&f?y((new Set)[Symbol.iterator]()):o,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?o:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":f?y(""[Symbol.iterator]()):o,"%Symbol%":f?Symbol:o,"%SyntaxError%":n,"%ThrowTypeError%":l,"%TypedArray%":d,"%TypeError%":a,"%Uint8Array%":"undefined"==typeof Uint8Array?o:Uint8Array,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?o:Uint8ClampedArray,"%Uint16Array%":"undefined"==typeof Uint16Array?o:Uint16Array,"%Uint32Array%":"undefined"==typeof Uint32Array?o:Uint32Array,"%URIError%":URIError,"%WeakMap%":"undefined"==typeof WeakMap?o:WeakMap,"%WeakRef%":"undefined"==typeof WeakRef?o:WeakRef,"%WeakSet%":"undefined"==typeof WeakSet?o:WeakSet},m=function e(t){var r;if("%AsyncFunction%"===t)r=p("async function () {}");else if("%GeneratorFunction%"===t)r=p("function* () {}");else if("%AsyncGeneratorFunction%"===t)r=p("async function* () {}");else if("%AsyncGenerator%"===t){var o=e("%AsyncGeneratorFunction%");o&&(r=o.prototype)}else if("%AsyncIteratorPrototype%"===t){var n=e("%AsyncGenerator%");n&&(r=y(n.prototype))}return g[t]=r,r},h={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},b=r(612),v=r(642),S=b.call(Function.call,Array.prototype.concat),A=b.call(Function.apply,Array.prototype.splice),j=b.call(Function.call,String.prototype.replace),O=b.call(Function.call,String.prototype.slice),w=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,P=/\\(\\)?/g,x=function(e){var t=O(e,0,1),r=O(e,-1);if("%"===t&&"%"!==r)throw new n("invalid intrinsic syntax, expected closing `%`");if("%"===r&&"%"!==t)throw new n("invalid intrinsic syntax, expected opening `%`");var o=[];return j(e,w,(function(e,t,r,n){o[o.length]=r?j(n,P,"$1"):t||e})),o},E=function(e,t){var r,o=e;if(v(h,o)&&(o="%"+(r=h[o])[0]+"%"),v(g,o)){var i=g[o];if(i===s&&(i=m(o)),void 0===i&&!t)throw new a("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:r,name:o,value:i}}throw new n("intrinsic "+e+" does not exist!")};e.exports=function(e,t){if("string"!=typeof e||0===e.length)throw new a("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof t)throw new a('"allowMissing" argument must be a boolean');var r=x(e),o=r.length>0?r[0]:"",i=E("%"+o+"%",t),p=i.name,u=i.value,l=!1,f=i.alias;f&&(o=f[0],A(r,S([0,1],f)));for(var y=1,s=!0;y<r.length;y+=1){var d=r[y],m=O(d,0,1),h=O(d,-1);if(('"'===m||"'"===m||"`"===m||'"'===h||"'"===h||"`"===h)&&m!==h)throw new n("property names with quotes must have matching quotes");if("constructor"!==d&&s||(l=!0),v(g,p="%"+(o+="."+d)+"%"))u=g[p];else if(null!=u){if(!(d in u)){if(!t)throw new a("base intrinsic for "+e+" exists, but the property is not available.");return}if(c&&y+1>=r.length){var b=c(u,d);u=(s=!!b)&&"get"in b&&!("originalValue"in b.get)?b.get:u[d]}else s=v(u,d),u=u[d];s&&!l&&(g[p]=u)}}return u}},405:function(e,t,r){"use strict";var o="undefined"!=typeof Symbol&&Symbol,n=r(419);e.exports=function(){return"function"==typeof o&&"function"==typeof Symbol&&"symbol"==typeof o("foo")&&"symbol"==typeof Symbol("bar")&&n()}},419:function(e){"use strict";e.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var e={},t=Symbol("test"),r=Object(t);if("string"==typeof t)return!1;if("[object Symbol]"!==Object.prototype.toString.call(t))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(t in e[t]=42,e)return!1;if("function"==typeof Object.keys&&0!==Object.keys(e).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(e).length)return!1;var o=Object.getOwnPropertySymbols(e);if(1!==o.length||o[0]!==t)return!1;if(!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(e,t);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},642:function(e,t,r){"use strict";var o=r(612);e.exports=o.call(Function.call,Object.prototype.hasOwnProperty)},631:function(e,t,r){var o="function"==typeof Map&&Map.prototype,n=Object.getOwnPropertyDescriptor&&o?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,i=o&&n&&"function"==typeof n.get?n.get:null,a=o&&Map.prototype.forEach,p="function"==typeof Set&&Set.prototype,c=Object.getOwnPropertyDescriptor&&p?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,u=p&&c&&"function"==typeof c.get?c.get:null,l=p&&Set.prototype.forEach,f="function"==typeof WeakMap&&WeakMap.prototype?WeakMap.prototype.has:null,y="function"==typeof WeakSet&&WeakSet.prototype?WeakSet.prototype.has:null,s=Boolean.prototype.valueOf,d=Object.prototype.toString,g=Function.prototype.toString,m=String.prototype.match,h="function"==typeof BigInt?BigInt.prototype.valueOf:null,b=Object.getOwnPropertySymbols,v="function"==typeof Symbol?Symbol.prototype.toString:null,S=Object.prototype.propertyIsEnumerable,A=r(654).custom,j=A&&x(A)?A:null;function O(e,t,r){var o="double"===(r.quoteStyle||t)?'"':"'";return o+e+o}function w(e){return String(e).replace(/"/g,"&quot;")}function P(e){return"[object Array]"===R(e)}function x(e){return"[object Symbol]"===R(e)}e.exports=function e(t,r,o,n){var p=r||{};if(F(p,"quoteStyle")&&"single"!==p.quoteStyle&&"double"!==p.quoteStyle)throw new TypeError('option "quoteStyle" must be "single" or "double"');if(F(p,"maxStringLength")&&("number"==typeof p.maxStringLength?p.maxStringLength<0&&p.maxStringLength!==1/0:null!==p.maxStringLength))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var c=!F(p,"customInspect")||p.customInspect;if("boolean"!=typeof c)throw new TypeError('option "customInspect", if provided, must be `true` or `false`');if(F(p,"indent")&&null!==p.indent&&"\t"!==p.indent&&!(parseInt(p.indent,10)===p.indent&&p.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(void 0===t)return"undefined";if(null===t)return"null";if("boolean"==typeof t)return t?"true":"false";if("string"==typeof t)return I(t,p);if("number"==typeof t)return 0===t?1/0/t>0?"0":"-0":String(t);if("bigint"==typeof t)return String(t)+"n";var d=void 0===p.depth?5:p.depth;if(void 0===o&&(o=0),o>=d&&d>0&&"object"==typeof t)return P(t)?"[Array]":"[Object]";var b,S=function(e,t){var r;if("\t"===e.indent)r="\t";else{if(!("number"==typeof e.indent&&e.indent>0))return null;r=Array(e.indent+1).join(" ")}return{base:r,prev:Array(t+1).join(r)}}(p,o);if(void 0===n)n=[];else if(k(n,t)>=0)return"[Circular]";function A(t,r,i){if(r&&(n=n.slice()).push(r),i){var a={depth:p.depth};return F(p,"quoteStyle")&&(a.quoteStyle=p.quoteStyle),e(t,a,o+1,n)}return e(t,p,o+1,n)}if("function"==typeof t){var E=function(e){if(e.name)return e.name;var t=m.call(g.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}(t),N=T(t,A);return"[Function"+(E?": "+E:" (anonymous)")+"]"+(N.length>0?" { "+N.join(", ")+" }":"")}if(x(t)){var B=v.call(t);return"object"==typeof t?M(B):B}if((b=t)&&"object"==typeof b&&("undefined"!=typeof HTMLElement&&b instanceof HTMLElement||"string"==typeof b.nodeName&&"function"==typeof b.getAttribute)){for(var L="<"+String(t.nodeName).toLowerCase(),W=t.attributes||[],q=0;q<W.length;q++)L+=" "+W[q].name+"="+O(w(W[q].value),"double",p);return L+=">",t.childNodes&&t.childNodes.length&&(L+="..."),L+"</"+String(t.nodeName).toLowerCase()+">"}if(P(t)){if(0===t.length)return"[]";var G=T(t,A);return S&&!function(e){for(var t=0;t<e.length;t++)if(k(e[t],"\n")>=0)return!1;return!0}(G)?"["+C(G,S)+"]":"[ "+G.join(", ")+" ]"}if(function(e){return"[object Error]"===R(e)}(t)){var _=T(t,A);return 0===_.length?"["+String(t)+"]":"{ ["+String(t)+"] "+_.join(", ")+" }"}if("object"==typeof t&&c){if(j&&"function"==typeof t[j])return t[j]();if("function"==typeof t.inspect)return t.inspect()}if(function(e){if(!i||!e||"object"!=typeof e)return!1;try{i.call(e);try{u.call(e)}catch(e){return!0}return e instanceof Map}catch(e){}return!1}(t)){var H=[];return a.call(t,(function(e,r){H.push(A(r,t,!0)+" => "+A(e,t))})),U("Map",i.call(t),H,S)}if(function(e){if(!u||!e||"object"!=typeof e)return!1;try{u.call(e);try{i.call(e)}catch(e){return!0}return e instanceof Set}catch(e){}return!1}(t)){var V=[];return l.call(t,(function(e){V.push(A(e,t))})),U("Set",u.call(t),V,S)}if(function(e){if(!f||!e||"object"!=typeof e)return!1;try{f.call(e,f);try{y.call(e,y)}catch(e){return!0}return e instanceof WeakMap}catch(e){}return!1}(t))return D("WeakMap");if(function(e){if(!y||!e||"object"!=typeof e)return!1;try{y.call(e,y);try{f.call(e,f)}catch(e){return!0}return e instanceof WeakSet}catch(e){}return!1}(t))return D("WeakSet");if(function(e){return"[object Number]"===R(e)}(t))return M(A(Number(t)));if(function(e){return"[object BigInt]"===R(e)}(t))return M(A(h.call(t)));if(function(e){return"[object Boolean]"===R(e)}(t))return M(s.call(t));if(function(e){return"[object String]"===R(e)}(t))return M(A(String(t)));if(!function(e){return"[object Date]"===R(e)}(t)&&!function(e){return"[object RegExp]"===R(e)}(t)){var z=T(t,A);return 0===z.length?"{}":S?"{"+C(z,S)+"}":"{ "+z.join(", ")+" }"}return String(t)};var E=Object.prototype.hasOwnProperty||function(e){return e in this};function F(e,t){return E.call(e,t)}function R(e){return d.call(e)}function k(e,t){if(e.indexOf)return e.indexOf(t);for(var r=0,o=e.length;r<o;r++)if(e[r]===t)return r;return-1}function I(e,t){if(e.length>t.maxStringLength){var r=e.length-t.maxStringLength,o="... "+r+" more character"+(r>1?"s":"");return I(e.slice(0,t.maxStringLength),t)+o}return O(e.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,N),"single",t)}function N(e){var t=e.charCodeAt(0),r={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return r?"\\"+r:"\\x"+(t<16?"0":"")+t.toString(16).toUpperCase()}function M(e){return"Object("+e+")"}function D(e){return e+" { ? }"}function U(e,t,r,o){return e+" ("+t+") {"+(o?C(r,o):r.join(", "))+"}"}function C(e,t){if(0===e.length)return"";var r="\n"+t.prev+t.base;return r+e.join(","+r)+"\n"+t.prev}function T(e,t){var r=P(e),o=[];if(r){o.length=e.length;for(var n=0;n<e.length;n++)o[n]=F(e,n)?t(e[n],e):""}for(var i in e)F(e,i)&&(r&&String(Number(i))===i&&i<e.length||(/[^\w$]/.test(i)?o.push(t(i,e)+": "+t(e[i],e)):o.push(i+": "+t(e[i],e))));if("function"==typeof b)for(var a=b(e),p=0;p<a.length;p++)S.call(e,a[p])&&o.push("["+t(a[p])+"]: "+t(e[a[p]],e));return o}},798:function(e){"use strict";var t=String.prototype.replace,r=/%20/g,o="RFC3986";e.exports={default:o,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:"RFC1738",RFC3986:o}},129:function(e,t,r){"use strict";var o=r(261),n=r(235),i=r(798);e.exports={formats:i,parse:n,stringify:o}},235:function(e,t,r){"use strict";var o=r(769),n=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:o.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},p=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},u=function(e,t,r,o){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,p=r.depth>0&&/(\[[^[\]]*])/.exec(i),u=p?i.slice(0,p.index):i,l=[];if(u){if(!r.plainObjects&&n.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u)}for(var f=0;r.depth>0&&null!==(p=a.exec(i))&&f<r.depth;){if(f+=1,!r.plainObjects&&n.call(Object.prototype,p[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(p[1])}return p&&l.push("["+i.slice(p.index)+"]"),function(e,t,r,o){for(var n=o?t:c(t,r),i=e.length-1;i>=0;--i){var a,p=e[i];if("[]"===p&&r.parseArrays)a=[].concat(n);else{a=r.plainObjects?Object.create(null):{};var u="["===p.charAt(0)&&"]"===p.charAt(p.length-1)?p.slice(1,-1):p,l=parseInt(u,10);r.parseArrays||""!==u?!isNaN(l)&&p!==u&&String(l)===u&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(a=[])[l]=n:a[u]=n:a={0:n}}n=a}return n}(l,t,r,o)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:a.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||o.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var l="string"==typeof e?function(e,t){var r,u={},l=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,f=t.parameterLimit===1/0?void 0:t.parameterLimit,y=l.split(t.delimiter,f),s=-1,d=t.charset;if(t.charsetSentinel)for(r=0;r<y.length;++r)0===y[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===y[r]?d="utf-8":"utf8=%26%2310003%3B"===y[r]&&(d="iso-8859-1"),s=r,r=y.length);for(r=0;r<y.length;++r)if(r!==s){var g,m,h=y[r],b=h.indexOf("]="),v=-1===b?h.indexOf("="):b+1;-1===v?(g=t.decoder(h,a.decoder,d,"key"),m=t.strictNullHandling?null:""):(g=t.decoder(h.slice(0,v),a.decoder,d,"key"),m=o.maybeMap(c(h.slice(v+1),t),(function(e){return t.decoder(e,a.decoder,d,"value")}))),m&&t.interpretNumericEntities&&"iso-8859-1"===d&&(m=p(m)),h.indexOf("[]=")>-1&&(m=i(m)?[m]:m),n.call(u,g)?u[g]=o.combine(u[g],m):u[g]=m}return u}(e,r):e,f=r.plainObjects?Object.create(null):{},y=Object.keys(l),s=0;s<y.length;++s){var d=y[s],g=u(d,l[d],r,"string"==typeof e);f=o.merge(f,g,r)}return!0===r.allowSparse?f:o.compact(f)}},261:function(e,t,r){"use strict";var o=r(478),n=r(769),i=r(798),a=Object.prototype.hasOwnProperty,p={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,u=Array.prototype.push,l=function(e,t){u.apply(e,c(t)?t:[t])},f=Date.prototype.toISOString,y=i.default,s={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:y,formatter:i.formatters[y],indices:!1,serializeDate:function(e){return f.call(e)},skipNulls:!1,strictNullHandling:!1},d=function e(t,r,i,a,p,u,f,y,d,g,m,h,b,v,S){var A,j=t;if(S.has(t))throw new RangeError("Cyclic object value");if("function"==typeof f?j=f(r,j):j instanceof Date?j=g(j):"comma"===i&&c(j)&&(j=n.maybeMap(j,(function(e){return e instanceof Date?g(e):e}))),null===j){if(a)return u&&!b?u(r,s.encoder,v,"key",m):r;j=""}if("string"==typeof(A=j)||"number"==typeof A||"boolean"==typeof A||"symbol"==typeof A||"bigint"==typeof A||n.isBuffer(j))return u?[h(b?r:u(r,s.encoder,v,"key",m))+"="+h(u(j,s.encoder,v,"value",m))]:[h(r)+"="+h(String(j))];var O,w=[];if(void 0===j)return w;if("comma"===i&&c(j))O=[{value:j.length>0?j.join(",")||null:void 0}];else if(c(f))O=f;else{var P=Object.keys(j);O=y?P.sort(y):P}for(var x=0;x<O.length;++x){var E=O[x],F="object"==typeof E&&void 0!==E.value?E.value:j[E];if(!p||null!==F){var R=c(j)?"function"==typeof i?i(r,E):r:r+(d?"."+E:"["+E+"]");S.set(t,!0);var k=o();l(w,e(F,R,i,a,p,u,f,y,d,g,m,h,b,v,k))}}return w};e.exports=function(e,t){var r,n=e,u=function(e){if(!e)return s;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||s.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=i.default;if(void 0!==e.format){if(!a.call(i.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var o=i.formatters[r],n=s.filter;return("function"==typeof e.filter||c(e.filter))&&(n=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:s.addQueryPrefix,allowDots:void 0===e.allowDots?s.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:s.charsetSentinel,delimiter:void 0===e.delimiter?s.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:s.encode,encoder:"function"==typeof e.encoder?e.encoder:s.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:s.encodeValuesOnly,filter:n,format:r,formatter:o,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:s.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:s.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:s.strictNullHandling}}(t);"function"==typeof u.filter?n=(0,u.filter)("",n):c(u.filter)&&(r=u.filter);var f,y=[];if("object"!=typeof n||null===n)return"";f=t&&t.arrayFormat in p?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var g=p[f];r||(r=Object.keys(n)),u.sort&&r.sort(u.sort);for(var m=o(),h=0;h<r.length;++h){var b=r[h];u.skipNulls&&null===n[b]||l(y,d(n[b],b,g,u.strictNullHandling,u.skipNulls,u.encode?u.encoder:null,u.filter,u.sort,u.allowDots,u.serializeDate,u.format,u.formatter,u.encodeValuesOnly,u.charset,m))}var v=y.join(u.delimiter),S=!0===u.addQueryPrefix?"?":"";return u.charsetSentinel&&("iso-8859-1"===u.charset?S+="utf8=%26%2310003%3B&":S+="utf8=%E2%9C%93&"),v.length>0?S+v:""}},769:function(e,t,r){"use strict";var o=r(798),n=Object.prototype.hasOwnProperty,i=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),p=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r};e.exports={arrayToObject:p,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],a=n.obj[n.prop],p=Object.keys(a),c=0;c<p.length;++c){var u=p[c],l=a[u];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:u}),r.push(l))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(i(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}}(t),e},decode:function(e,t,r){var o=e.replace(/\+/g," ");if("iso-8859-1"===r)return o.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(o)}catch(e){return o}},encode:function(e,t,r,n,i){if(0===e.length)return e;var p=e;if("symbol"==typeof e?p=Symbol.prototype.toString.call(e):"string"!=typeof e&&(p=String(e)),"iso-8859-1"===r)return escape(p).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var c="",u=0;u<p.length;++u){var l=p.charCodeAt(u);45===l||46===l||95===l||126===l||l>=48&&l<=57||l>=65&&l<=90||l>=97&&l<=122||i===o.RFC1738&&(40===l||41===l)?c+=p.charAt(u):l<128?c+=a[l]:l<2048?c+=a[192|l>>6]+a[128|63&l]:l<55296||l>=57344?c+=a[224|l>>12]+a[128|l>>6&63]+a[128|63&l]:(u+=1,l=65536+((1023&l)<<10|1023&p.charCodeAt(u)),c+=a[240|l>>18]+a[128|l>>12&63]+a[128|l>>6&63]+a[128|63&l])}return c},isBuffer:function(e){return!(!e||"object"!=typeof e||!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e)))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(i(e)){for(var r=[],o=0;o<e.length;o+=1)r.push(t(e[o]));return r}return t(e)},merge:function e(t,r,o){if(!r)return t;if("object"!=typeof r){if(i(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(o&&(o.plainObjects||o.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return i(t)&&!i(r)&&(a=p(t,o)),i(t)&&i(r)?(r.forEach((function(r,i){if(n.call(t,i)){var a=t[i];a&&"object"==typeof a&&r&&"object"==typeof r?t[i]=e(a,r,o):t.push(r)}else t[i]=r})),t):Object.keys(r).reduce((function(t,i){var a=r[i];return n.call(t,i)?t[i]=e(t[i],a,o):t[i]=a,t}),a)}}},478:function(e,t,r){"use strict";var o=r(210),n=r(924),i=r(631),a=o("%TypeError%"),p=o("%WeakMap%",!0),c=o("%Map%",!0),u=n("WeakMap.prototype.get",!0),l=n("WeakMap.prototype.set",!0),f=n("WeakMap.prototype.has",!0),y=n("Map.prototype.get",!0),s=n("Map.prototype.set",!0),d=n("Map.prototype.has",!0),g=function(e,t){for(var r,o=e;null!==(r=o.next);o=r)if(r.key===t)return o.next=r.next,r.next=e.next,e.next=r,r};e.exports=function(){var e,t,r,o={assert:function(e){if(!o.has(e))throw new a("Side channel does not contain "+i(e))},get:function(o){if(p&&o&&("object"==typeof o||"function"==typeof o)){if(e)return u(e,o)}else if(c){if(t)return y(t,o)}else if(r)return function(e,t){var r=g(e,t);return r&&r.value}(r,o)},has:function(o){if(p&&o&&("object"==typeof o||"function"==typeof o)){if(e)return f(e,o)}else if(c){if(t)return d(t,o)}else if(r)return function(e,t){return!!g(e,t)}(r,o);return!1},set:function(o,n){p&&o&&("object"==typeof o||"function"==typeof o)?(e||(e=new p),l(e,o,n)):c?(t||(t=new c),s(t,o,n)):(r||(r={key:{},next:null}),function(e,t,r){var o=g(e,t);o?o.value=r:e.next={key:t,next:e.next,value:r}}(r,o,n))}};return o}},654:function(){}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};return function(){"use strict";r.d(o,{default:function(){return a}});var e=r(129),t=r.n(e),n=new Map,i=function(e){var r=e.method,o=e.url,n=e.params,i=e.data;return[r.toLowerCase(),o,t().stringify(n),t().stringify(i)].join(":")},a=function(e,t){var r=t.time,o=void 0===r?800:r,a=t.openSwitch,p=void 0===a||a;if(e){var c=e.Axios.prototype.request;e.request=e.Axios.prototype.request=function(e){if(p&&!1===e.cancelRepeat)return c.call(this,e);if(p||e.cancelRepeat){var t=i(e);if(n.has(t)){var r=n.get(t).oldReqTime,a=(new Date).getTime();a-r<o?n.set(t,{oldReqTime:a,isCancel:!0}):n.set(t,{oldReqTime:a})}else!function(e,t){var r=t.curTime,o=i(e);n.has(o)||n.set(o,{oldReqTime:r})}(e,{curTime:(new Date).getTime(),limitTime:o})}return c.call(this,e)},e.interceptors.request.use((function(t){if(p&&!1===t.cancelRepeat)return t;if(p||t.cancelRepeat){var r=i(t);(n.get(r)||{isCancel:!1}).isCancel&&(t.cancelToken=new e.CancelToken((function(e){e("重复请求: "+t.url)})))}return t}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return e}),(function(t){return e.isCancel(t)&&console.log("已取消的重复请求："+t.message),Promise.reject(t)}))}else console.warn("axios is request")}}(),o.default}()}));