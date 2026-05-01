"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var v=c(function(m,f){
var n=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/math-base-assert-is-infinite/dist'),q=require('@stdlib/math-base-special-pow/dist'),s=require('@stdlib/math-base-special-ceil/dist'),o=require('@stdlib/math-base-special-ceiln/dist');function l(r,e,i){var a,t;return n(r)||n(e)||n(i)||i<=0||u(e)||u(i)?NaN:u(r)||r===0?r:i===10?o(r,e):e===0||i===1?s(r):(t=q(i,-e),u(t)||(a=s(r*t)/t,u(a))?r:a)}f.exports=l
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
