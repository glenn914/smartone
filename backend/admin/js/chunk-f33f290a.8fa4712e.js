(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f33f290a"],{"1d4b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("avue-crud",{attrs:{data:t.data.data,option:t.option},on:{"row-save":t.create,"row-update":t.update,"row-del":t.remove}})],1)},o=[],i=(r("96cf"),r("1da1")),a=r("d4ec"),c=r("bee2"),u=r("262e"),s=r("2caf"),h=r("9ab4"),f=r("60a3"),l=function(t){Object(u["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(a["a"])(this,r),t=e.apply(this,arguments),t.data={},t.option={excelBtn:!0,title:"表格的标题",addBtnText:"Create",editBtnText:"Edit",delBtnText:"Delete",column:[{prop:"stuName",label:"Name"},{prop:"stuAge",label:"Age"},{prop:"stuClass",label:"Class"}]},t}return Object(c["a"])(r,[{key:"create",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r,n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.post("stuinfo",e);case 2:this.$message.success("创建成功"),this.fetch(),r(),n();case 6:case"end":return t.stop()}}),t,this)})));function e(e,r,n){return t.apply(this,arguments)}return e}()},{key:"update",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e,r,n,o){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=JSON.parse(JSON.stringify(e)),delete i.$index,t.next=4,this.$http.put("stuinfo/".concat(e._id),i);case 4:this.$message.success("更新成功"),this.fetch(),n(),o();case 8:case"end":return t.stop()}}),t,this)})));function e(e,r,n,o){return t.apply(this,arguments)}return e}()},{key:"remove",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$confirm("是否确认删除？");case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t["catch"](0),t.abrupt("return");case 8:return t.next=10,this.$http.delete("stuinfo/".concat(e._id));case 10:this.$message.success("删除成功"),this.fetch();case 12:case"end":return t.stop()}}),t,this,[[0,5]])})));function e(e){return t.apply(this,arguments)}return e}()},{key:"fetch",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("stuinfo");case 2:e=t.sent,this.data=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){this.fetch()}}]),r}(f["b"]);l=Object(h["a"])([Object(f["a"])({})],l);var p=l,v=p,d=r("2877"),y=Object(d["a"])(v,n,o,!1,null,null,null);e["default"]=y.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,h=e.regeneratorRuntime;if(h)s&&(t.exports=h);else{h=e.regeneratorRuntime=s?t.exports:{},h.wrap=b;var f="suspendedStart",l="suspendedYield",p="executing",v="completed",d={},y={};y[a]=function(){return this};var g=Object.getPrototypeOf,m=g&&g(g(G([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=E.prototype=L.prototype=Object.create(y);O.prototype=w.constructor=E,E.constructor=O,E[u]=O.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===O||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},j(k.prototype),k.prototype[c]=function(){return this},h.AsyncIterator=k,h.async=function(t,e,r,n){var o=new k(b(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=G,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new $(n||[]);return i._invoke=_(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function O(){}function E(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){u.value=t,i(u)}),a)}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function _(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return S()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?v:l,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}function N(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,N(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},bee2:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return o}))}}]);