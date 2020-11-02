(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a1ef0ce"],{"02df":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,nsFunc:e.nsSearch,nameFunc:e.nameSearch,delFunc:e.delFunc}}),n("div",{staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.events,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"event_time"},"row-key":"uid"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"20","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"namespace",label:"命名空间","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"40","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"—")+" ")])]}}])}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"100","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.message?t.row.message:"—")+" ")])]}}])}),n("el-table-column",{attrs:{prop:"count",label:"次数","min-width":"20","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1)],1)],1)},i=[],a=(n("4de4"),n("caad"),n("c975"),n("b0c0"),n("2532"),n("b85c")),r=n("61b2"),s=n("0905"),c=n("5c96"),u={name:"Event",components:{Clusterbar:r["a"]},data:function(){return{cellStyle:{border:0},titleName:["Events"],maxHeight:window.innerHeight-150,loading:!0,originEvents:[],search_ns:[],search_name:"",delFunc:void 0,delEvents:[]}},created:function(){this.fetchData()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;e.maxHeight=t}()}},watch:{eventsWatch:function(e){if(e){var t=e.resource.metadata.uid,n=e.resource.metadata.resourceVersion;if("add"===e.event)this.originEvents.push(buildEvents(e.resource));else if("update"===e.event)for(var o in this.originEvents){var i=this.originEvents[o];if(i.uid===t){if(i.resource_version<n){var a=buildEvents(e.resource);this.$set(this.originEvents,o,a)}break}}else"delete"===e.event&&(this.originEvents=this.originEvents.filter((function(e){var n=e.uid;return n!==t})))}}},computed:{events:function(){var e,t=[],n=Object(a["a"])(this.originEvents);try{for(n.s();!(e=n.n()).done;){var o=e.value;this.search_ns.length>0&&this.search_ns.indexOf(o.namespace)<0||(this.search_name&&!o.name.includes(this.search_name)||t.push(o))}}catch(i){n.e(i)}finally{n.f()}return t},eventsWatch:function(){return this.$store.getters["ws/eventsWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,this.originEvents=[];var t=this.$store.state.cluster;t?Object(s["b"])(t).then((function(t){e.loading=!1,e.originEvents=t.data})).catch((function(){e.loading=!1})):(this.loading=!1,c["Message"].error("获取集群异常，请刷新重试"))},nsSearch:function(e){this.search_ns=[];var t,n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;this.search_ns.push(o)}}catch(i){n.e(i)}finally{n.f()}},nameSearch:function(e){this.search_name=e}}},l=u,d=(n("f75a"),n("473c"),n("2877")),f=Object(d["a"])(l,o,i,!1,null,"e78cc8c4",null);t["default"]=f.exports},"0905":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var o=n("b775");function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r={};return t&&(r["uid"]=t),n&&(r["kind"]=n),a&&(r["namespace"]=a),i&&(r["name"]=i),Object(o["a"])({url:"event/".concat(e),method:"get",params:r})}function a(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec.count,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"147d":function(e,t,n){"use strict";var o=n("f6bf"),i=n.n(o);i.a},"2b70":function(e,t,n){},"43df":function(e,t,n){},"473c":function(e,t,n){"use strict";var o=n("6735"),i=n.n(o);i.a},"589b":function(e,t,n){"use strict";var o=n("714a"),i=n.n(o);i.a},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return D}));var o,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},a=[],r=(n("b0c0"),n("aad4")),s=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(o&&clearTimeout(o),o=setTimeout((function(){e.nameFunc(e.nameInput),o=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(r["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):s["Message"].error("获取集群异常，请刷新重试")}}},u=c,l=(n("589b"),n("dda3"),n("2877")),d=Object(l["a"])(u,i,a,!1,null,"3d7b3a75",null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},m=[],p=(n("99af"),n("abb2"),n("fcf3")),v=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new v["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="ws://".concat(window.location.host,"/osp/api/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else s["Message"].error("获取POD参数异常，请刷新重试");else s["Message"].error("获取命名空间参数异常，请刷新重试");else s["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},w=b,y=Object(l["a"])(w,h,m,!1,null,null,null),k=y.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},E=[],O=n("5f87"),x={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(O["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="ws://".concat(window.location.host,"/osp/api/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(t+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else s["Message"].error("获取POD参数异常，请刷新重试");else s["Message"].error("获取命名空间参数异常，请刷新重试");else s["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},S=x,F=(n("147d"),Object(l["a"])(S,_,E,!1,null,"72e53532",null)),j=F.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},T=[],H=n("56b3"),I=n.n(H);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var q={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=I.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},M=q,$=(n("db62"),Object(l["a"])(M,C,T,!1,null,"5bb854da",null)),D=$.exports},6735:function(e,t,n){},"714a":function(e,t,n){},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));n("99af");var o=n("b775");function i(e){return Object(o["a"])({url:"namespace/".concat(e),method:"get"})}function a(e,t,n){return Object(o["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b85c:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var o=n("06c5");function i(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(o["a"])(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var i=0,a=function(){};return{s:a,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,r=e},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw r}}}}},b92f:function(e,t,n){},db62:function(e,t,n){"use strict";var o=n("43df"),i=n.n(o);i.a},dda3:function(e,t,n){"use strict";var o=n("b92f"),i=n.n(o);i.a},f6bf:function(e,t,n){},f75a:function(e,t,n){"use strict";var o=n("2b70"),i=n.n(o);i.a}}]);