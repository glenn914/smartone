(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513451a0"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7");function a(e,t,r,a,n,i,o){try{var l=e[i](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(a,n)}function n(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function l(e){a(o,n,i,l,c,"next",e)}function c(e){a(o,n,i,l,c,"throw",e)}l(void 0)}))}}},"96cf":function(e,t){!function(t){"use strict";var r,a=Object.prototype,n=a.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof e,u=t.regeneratorRuntime;if(u)s&&(e.exports=u);else{u=t.regeneratorRuntime=s?e.exports:{},u.wrap=m;var h="suspendedStart",p="suspendedYield",f="executing",d="completed",v={},b={};b[o]=function(){return this};var R=Object.getPrototypeOf,g=R&&R(R(x([])));g&&g!==a&&n.call(g,o)&&(b=g);var y=S.prototype=O.prototype=Object.create(b);A.prototype=y.constructor=S,S.constructor=A,S[c]=A.displayName="GeneratorFunction",u.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===A||"GeneratorFunction"===(t.displayName||t.name))},u.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,S):(e.__proto__=S,c in e||(e[c]="GeneratorFunction")),e.prototype=Object.create(y),e},u.awrap=function(e){return{__await:e}},w(N.prototype),N.prototype[l]=function(){return this},u.AsyncIterator=N,u.async=function(e,t,r,a){var n=new N(m(e,t,r,a));return u.isGeneratorFunction(t)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},w(y),y[c]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},u.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},u.values=x,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=r)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(a,n){return l.type="throw",l.arg=e,t.next=a,n&&(t.method="next",t.arg=r),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),s=n.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;L(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=r),v}}}function m(e,t,r,a){var n=t&&t.prototype instanceof O?t:O,i=Object.create(n.prototype),o=new C(a||[]);return i._invoke=I(e,r,o),i}function E(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(a){return{type:"throw",arg:a}}}function O(){}function A(){}function S(){}function w(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function N(e){function t(r,a,i,o){var l=E(e[r],e,a);if("throw"!==l.type){var c=l.arg,s=c.value;return s&&"object"===typeof s&&n.call(s,"__await")?Promise.resolve(s.__await).then((function(e){t("next",e,i,o)}),(function(e){t("throw",e,i,o)})):Promise.resolve(s).then((function(e){c.value=e,i(c)}),o)}o(l.arg)}var r;function a(e,a){function n(){return new Promise((function(r,n){t(e,a,r,n)}))}return r=r?r.then(n,n):n()}this._invoke=a}function I(e,t,r){var a=h;return function(n,i){if(a===f)throw new Error("Generator is already running");if(a===d){if("throw"===n)throw i;return P()}r.method=n,r.arg=i;while(1){var o=r.delegate;if(o){var l=T(o,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===h)throw a=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=f;var c=E(e,t,r);if("normal"===c.type){if(a=r.done?d:p,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=d,r.method="throw",r.arg=c.arg)}}}function T(e,t){var a=e.iterator[t.method];if(a===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=r,T(e,t),"throw"===t.method))return v;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=E(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,v;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=r),t.delegate=null,v):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,i=function t(){while(++a<e.length)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},b0c0:function(e,t,r){var a=r("83ab"),n=r("9bf2").f,i=Function.prototype,o=i.toString,l=/^\s*function ([^ (]*)/,c="name";a&&!(c in i)&&n(i,c,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(e){return""}}})},bee2:function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}r.d(t,"a",(function(){return n}))},d396:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("avue-crud",{staticStyle:{height:"100vh"},attrs:{data:e.data.result,option:e.option,page:e.page,"cell-style":e.cellStyle},on:{"row-save":e.create,"row-update":e.update,"row-del":e.remove,"update:page":function(t){e.page=t},"on-load":e.onLoad,"refresh-change":e.freshList,"selection-change":e.selectionChange,"search-change":e.searchChange}},[r("template",{slot:"menuLeft"},[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:e.downLoadTemplate}},[e._v("下载模板")])],1),r("template",{slot:"tip"},[r("el-button",{attrs:{type:"text",size:"small"},on:{click:e.deleteSelected}},[r("i",{staticClass:"el-icon-delete el-icon--right"},[e._v("删除选中")])])],1),r("template",{slot:"tip"},[r("el-upload",{attrs:{"show-file-list":!1,action:"/stuinfo/upload",accept:"*.csv","on-success":e.onLoad}},[r("el-button",{attrs:{size:"small",type:"text"}},[r("i",{staticClass:"el-icon-upload el-icon--right"},[e._v("批量上传")])])],1)],1),r("template",{slot:"menuRight"},[r("el-button",{attrs:{icon:"el-icon-s-data",circle:"",size:"small"},on:{click:function(t){e.dialogVisible=!0}}}),r("el-dialog",{attrs:{title:"Data Analysis",visible:e.dialogVisible,width:"60%",top:"20vh"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("ve-pie",{attrs:{data:e.chartData}})],1)],1)],2)],1)},n=[],i=(r("b0c0"),r("96cf"),r("1da1")),o=r("d4ec"),l=r("bee2"),c=r("262e"),s=r("2caf"),u=r("9ab4"),h=r("60a3"),p=function(e){Object(c["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(o["a"])(this,r),e=t.apply(this,arguments),e.data={},e.dialogVisible=!1,e.page={total:1,pageSize:9,pagerCount:5,currentPage:1,pageSizes:[5,10,15,20,25,30,50],layout:"total, sizes, prev, pager, next, jumper",background:!0},e.selected=[],e.dicdata={role:[{label:"STUDENT",value:"STUDENT"},{label:"STAFF",value:"STAFF"}],gender:[{label:"M",value:"M"},{label:"F",value:"F"}],class:[{label:"BABY",value:"BABY"},{label:"MIDDLE",value:"MIDDLE"},{label:"TOP",value:"TOP"},{label:"DAY CARE",value:"DAY CARE"},{label:"P.1",value:"P.1"},{label:"P.2",value:"P.2"},{label:"P.3",value:"P.3"},{label:"P.4",value:"P.4"},{label:"P.5",value:"P.5"},{label:"P.6",value:"P.6"},{label:"P.7",value:"P.7"},{label:"S.1",value:"S.1"},{label:"S.2",value:"S.2"},{label:"S.3",value:"S.3"},{label:"S.4",value:"S.4"},{label:"S.5",value:"S.5"},{label:"S.6",value:"S.6"},{label:"STAFF",value:"STAFF"}],schoolName:[{label:"KITEGOMBA C/U PRIMARY SCHOOL",value:"KITEGOMBA C/U PRIMARY SCHOOL"},{label:"KIDE NURSERY AND PRIMARY SCHOOL",value:"KIDE NURSERY AND PRIMARY SCHOOL"},{label:"BEST QUALITY SCHOOL",value:"BEST QUALITY SCHOOL"},{label:"VISION CHRISTIAN JUNIOR SCHOOL",value:"VISION CHRISTIAN JUNIOR SCHOOL"},{label:"HIS GRACE JUNIOR SCHOOL",value:"HIS GRACE JUNIOR SCHOOL"},{label:"RAINLAND KINDERGARTEN",value:"RAINLAND KINDERGARTEN"},{label:"HIDDEN TREASURE NURSERY AND PRIMARY SCHOOL",value:"HIDDEN TREASURE NURSERY AND PRIMARY SCHOOL"},{label:"RAYYAN ISLAMIC NURSERY AND PRIMARY SCHOOL",value:"RAYYAN ISLAMIC NURSERY AND PRIMARY SCHOOL"},{label:"NAKIGO SECONDARY SCHOOL",value:"NAKIGO SECONDARY SCHOOL"}],createTime:[{label:"19T1",value:"19T1"},{label:"19T2",value:"19T2"},{label:"19T3",value:"19T3"}],fileStatus:[{label:"INACTIVE",value:"INACTIVE"},{label:"ACTIVE",value:"ACTIVE"}],fileProgress:[{label:"BUDGETING",value:"BUDGETING"},{label:"FUND RECEIVED",value:"FUND RECEIVED"},{label:"FUND TRANSFERRED",value:"FUND TRANSFERRED"}],fileTip:[{label:"DROPOUT",value:"DROPOUT"},{label:"TRANSFER",value:"TRANSFER"},{label:"GRADUATED",value:"GRADUATED"},{label:"IRREGULAR ATTENDANCE",value:"IRREGULAR ATTENDANCE"},{label:"ERROR",value:"ERROR"}],gdRelation:[{label:"MOTHER",value:"MOTHER"},{label:"FATHER",value:"FATHER"},{label:"GRANDMOTHER ",value:"GRANDMOTHER"},{label:"GRANDFATHER",value:"GRANDFATHER"},{label:"AUNT",value:"AUNT"},{label:"UNCLE",value:"UNCLE"},{label:"SISTER",value:"SISTER"},{label:"BROTHER",value:"BROTHER"},{label:"NEIGHBOUR",value:"NEIGHBOUR"},{label:"GUARDIAN",value:"GUARDIAN"},{label:"STAFF MATE",value:"STAFF MATE"},{label:"N/A",value:"N/A"}],gdIdType:[{label:"ID_CARD",value:"ID_CARD"},{label:"PASSPORT",value:"PASSPORT"},{label:"DRIVING_LICENSE",value:"DRIVING_LICENSE"},{label:"VILLAGE_ID",value:"VILLAGE_ID"},{label:"OTHER",value:"OTHER"}],schoolNameMap:{school_1:"KITEGOMBA C/U PRIMARY SCHOOL",school_2:"KIDE NURSERY AND PRIMARY SCHOOL",school_3:"BEST QUALITY SCHOOL",school_4:"VISION CHRISTIAN JUNIOR SCHOOL",school_5:"HIS GRACE JUNIOR SCHOOL",school_6:"RAINLAND KINDERGARTEN",school_7:"HIDDEN TREASURE NURSERY AND PRIMARY SCHOOL",school_8:"RAYYAN ISLAMIC NURSERY AND PRIMARY SCHOOL",school_9:"NAKIGO SECONDARY SCHOOL"}},e.query={limit:2,position:1,where:{schoolName:e.dicdata.schoolNameMap[e.schoolCode]}},e.option={dialogWidth:"60%",dialogTop:"100vh",selection:!0,stripe:!0,title:"lfcList",addBtnText:"Create",editBtnText:"Edit",delBtnText:"Delete",excelBtnText:"Excel",excelBtn:!0,printBtn:!0,printBtnText:"Print",searchShow:!1,menuWidth:149,column:[{prop:"id",label:"ID",sortable:!0},{prop:"role",label:"ROLE",sortable:!0,filter:!0,type:"radio",dicData:e.dicdata.role,width:"85"},{prop:"name",label:"NAME",sortable:!0,search:!0,width:"161"},{prop:"gender",label:"GENDER",sortable:!0,filter:!0,type:"radio",dicData:e.dicdata.gender,width:"105"},{prop:"class",label:"CLASS",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.class,width:"95"},{prop:"schoolName",label:"SCHOOLNAME",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.schoolName,width:"140"},{prop:"gdName",label:"Guardian's Name",sortable:!0,width:"161"},{prop:"gdRelation",label:"Relationship",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.gdRelation,width:"130"},{prop:"gdContact",label:"Contact",sortable:!0,width:"90"},{prop:"gdId",label:"Guardian's ID",sortable:!0,width:"130"},{prop:"gdIdType",label:"GD's ID Type",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.gdIdType,width:"130"},{prop:"createTime",label:"建档时间",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.createTime,width:"105"},{prop:"fileStatus",label:"档案状态",sortable:!0,filter:!0,type:"switch",dicData:e.dicdata.fileStatus,search:!0,width:"105"},{prop:"fileProgress",label:"档案进度",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.fileProgress,width:"105"},{prop:"fileTip",label:"档案备注",sortable:!0,filter:!0,type:"select",dicData:e.dicdata.fileTip,width:"105"},{prop:"privateKey",label:"私钥",sortable:!0,addDisabled:!0,editDisabled:!0},{prop:"bnbAddress",label:"钱包地址",sortable:!0,addDisabled:!0,editDisabled:!0,width:"105"}]},e.chartData={},e}return Object(l["a"])(r,[{key:"fetch",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("stuinfo/fetch",{params:{query:this.query}});case 2:t=e.sent,this.page.total=t.data.total,this.data=t.data;case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"fetchStatistic",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("stuinfo/statistic",{params:{query:this.query}});case 2:t=e.sent,this.chartData=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"freshList",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.query.where={schoolName:this.dicdata.schoolNameMap[this.schoolCode]},this.fetch();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.post("stuinfo",t);case 2:this.$message.success("创建成功"),this.fetch(),r(),a();case 6:case"end":return e.stop()}}),e,this)})));function t(t,r,a){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r,a,n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=JSON.parse(JSON.stringify(t)),delete i.$index,delete i.$role,delete i.$gender,delete i.$class,delete i.$schoolName,delete i.$fileStatus,delete i.$fileProgress,delete i.$fileTip,delete i.$gdRelation,delete i.$gdIdType,e.next=13,this.$http.put("stuinfo/".concat(t._id),i);case 13:this.$message.success("更新成功"),this.fetch(),a(),n();case 17:case"end":return e.stop()}}),e,this)})));function t(t,r,a,n){return e.apply(this,arguments)}return t}()},{key:"remove",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("是否确认删除？");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return");case 8:return e.next=10,this.$http.delete("stuinfo/".concat(t._id));case 10:this.$message.success("删除成功"),this.fetch();case 12:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"downLoadTemplate",value:function(){this.$message.success("下载模板"),this.fetch()}},{key:"onLoad",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.pageSize,a=t.currentPage,this.query.position=a,this.query.limit=r,this.fetch();case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"selectionChange",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.selected=t;case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"print",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"deleteSelected",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("是否确认删除？");case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e["catch"](0),e.abrupt("return");case 8:console.log(this.selected),t=this.selected,r=0;case 11:if(!(r<t.length)){e.next=20;break}return a=t[r],n=a["_id"],console.log(n),e.next=17,this.$http.delete("stuinfo/".concat(n));case 17:r++,e.next=11;break;case 20:this.$message.success("删除成功"),this.fetch();case 22:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"searchChange",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.name=t.name?{$regex:t.name}:t.name,this.query.where=t,this.fetch(),console.log(t),r();case 5:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"cellStyle",value:function(e){var t=e.row.fileStatus;if(e.column.showOverflowTooltip=!0,"fileStatus"==e.column.property){var r="INACTIVE"==t?"red":"green";return{color:r}}}},{key:"created",value:function(){this.fetch(),this.fetchStatistic()}}]),r}(h["c"]);Object(u["a"])([Object(h["b"])(String)],p.prototype,"schoolCode",void 0),p=Object(u["a"])([Object(h["a"])({})],p);var f=p,d=f,v=r("2877"),b=Object(v["a"])(d,a,n,!1,null,null,null);t["default"]=b.exports}}]);