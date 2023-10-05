/*! For license information please see 177.f179da7d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[177],{177:function(t,r,e){e.r(r),e.d(r,{default:function(){return w}});var n=e(433),o=e(439),a=e(854),i=e(728),c=e(184),u=function(t){var r=t.searchParams;return(0,c.jsxs)("form",{className:"d-flex mt-2",role:"search",onSubmit:function(t){t.preventDefault(),r({query:""})},children:[(0,c.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"search","area-label":"search",onChange:function(t){var e=t.target.value;r({query:e,page:1})}}),(0,c.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:(0,c.jsx)(i.Vph,{})})]})},s=e(861),l=e(610),f=e(73),h=e(791),p=function(t){var r=t.loadMoreMovies;return(0,c.jsx)("div",{className:"d-grid gap-2",children:(0,c.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:r,children:"Load more..."})})},v=e(959),y=e(126);function d(){d=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var a=r&&r.prototype instanceof g?r:g,i=Object.create(a.prototype),c=new Z(n||[]);return o(i,"_invoke",{value:O(t,e,c)}),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="executing",v="completed",y={};function g(){}function m(){}function w(){}var x={};s(x,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(P([])));E&&E!==e&&n.call(E,i)&&(x=E);var L=w.prototype=g.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return a=a?a.then(o,o):o()}})}function O(r,e,n){var o=h;return function(a,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,k(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=f(o,r.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,y;var i=a.arg;return i?i.done?(e[r.resultName]=i.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function Z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function P(r){if(r||""===r){var e=r[i];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,a=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return a.next=a}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=s(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},j(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new _(l(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(L),s(L,u,"Generator"),s(L,i,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=P,Z.prototype={constructor:Z,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var g=function(t){var r=t.searchText,e=(0,h.useState)([]),i=(0,o.Z)(e,2),u=i[0],g=i[1],m=(0,h.useState)(1),w=(0,o.Z)(m,2),x=w[0],b=w[1],E=(0,h.useState)(f.Q.IDLE),L=(0,o.Z)(E,2),j=L[0],_=L[1];(0,h.useEffect)((function(){var t=function(){var t=(0,s.Z)(d().mark((function t(r){var e;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!==r&&void 0!==r){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,(0,l.z1)(r,x);case 5:e=t.sent,console.log(r),1===x?(_(f.Q.PENDING),g(e.data.results),_(f.Q.RESOLVED)):(g((function(t){return[].concat((0,n.Z)(t),(0,n.Z)(e.data.results))})),_(f.Q.RESOLVED)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),_(f.Q.REJECTED);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(r){return t.apply(this,arguments)}}();t(r)}),[r,x]);return j===f.Q.PENDING?(0,c.jsx)(a.Z,{}):j===f.Q.RESOLVED?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(y.Z,{movies:u}),"|",(0,c.jsx)(p,{loadMoreMovies:function(){b((function(t){return t+1}))}})]}):j===f.Q.REJECTED?(0,c.jsx)(v.Z,{}):void 0},m=e(87),w=function(){var t=(0,m.lr)(),r=(0,o.Z)(t,2),e=r[0],i=r[1],s=(0,h.useMemo)((function(){return Object.fromEntries((0,n.Z)(e))}),[e]).query;return(0,c.jsxs)(h.Suspense,{fallback:(0,c.jsx)(a.Z,{}),children:[(0,c.jsx)(u,{searchParams:i}),(0,c.jsx)(g,{searchText:s})]})}}}]);
//# sourceMappingURL=177.f179da7d.chunk.js.map