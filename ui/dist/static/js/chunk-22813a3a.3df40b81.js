(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22813a3a"],{"0905":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var s=n("b775");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r={};return t&&(r["uid"]=t),n&&(r["kind"]=n),i&&(r["namespace"]=i),a&&(r["name"]=a),Object(s["a"])({url:"event/".concat(e),method:"get",params:r})}function i(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec?e.spec.count:1,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"43df":function(e,t,n){},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"b",(function(){return j})),n.d(t,"d",(function(){return V}));var s,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.createFunc?n("el-button",{attrs:{size:"small",plain:""},on:{click:function(t){return e.createFunc()}}},[e._v(e._s(e.createDisplay))]):e._e(),"undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],r=(n("b0c0"),n("aad4")),o=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0},createDisplay:{type:String,required:!1,default:"创建"},createFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(s&&clearTimeout(s),s=setTimeout((function(){e.nameFunc(e.nameInput),s=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(r["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):o["Message"].error("获取集群异常，请刷新重试")}}},l=c,u=(n("a6e1"),n("dda3"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"3a53f646",null),m=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},h=[],p=(n("99af"),n("abb2"),n("fcf3")),g=n("47d0"),v=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new g["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="http:"==window.location.protocol?"ws":"wss",s="".concat(n,"://").concat(window.location.host,"/ws/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(s+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else o["Message"].error("获取POD参数异常，请刷新重试");else o["Message"].error("获取命名空间参数异常，请刷新重试");else o["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new v["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,w=Object(u["a"])(y,f,h,!1,null,null,null),k=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},O=[],E=n("5f87"),I={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(E["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="http:"==window.location.protocol?"ws":"wss",n="".concat(t,"://").concat(window.location.host,"/ws/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else o["Message"].error("获取POD参数异常，请刷新重试");else o["Message"].error("获取命名空间参数异常，请刷新重试");else o["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},x=I,C=(n("ca6d"),Object(u["a"])(x,_,O,!1,null,"19556679",null)),j=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},F=[],M=n("56b3"),$=n.n(M);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var D={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=$.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},L=D,N=(n("db62"),Object(u["a"])(L,S,F,!1,null,"5bb854da",null)),V=N.exports},"64d3":function(e,t,n){},"9f46":function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o}));n("99af");var s=n("b775");function a(e){return Object(s["a"])({url:"ingress/".concat(e),method:"get"})}function i(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(s["a"])({url:"ingress/".concat(e,"/").concat(t,"/").concat(n),method:"get",params:{output:a}})}function r(e,t){return Object(s["a"])({url:"ingress/".concat(e,"/delete"),method:"post",data:t})}function o(e,t,n,a){return Object(s["a"])({url:"ingress/".concat(e,"/update/").concat(t,"/").concat(n),method:"post",data:{yaml:a}})}},a6e1:function(e,t,n){"use strict";var s=n("ab7f"),a=n.n(s);a.a},a97d:function(e,t,n){"use strict";var s=n("b739"),a=n.n(s);a.a},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("99af");var s=n("b775");function a(e){return Object(s["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,n){return Object(s["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},ab7f:function(e,t,n){},b739:function(e,t,n){},b92f:function(e,t,n){},c98b:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,delFunc:e.deleteIngresses,editFunc:e.getIngressYaml}}),n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("span",[e._v(e._s(e.ingress.name))])]),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[e._v(e._s(e.ingress.created))])]),n("el-form-item",{attrs:{label:"命名空间"}},[n("span",[e._v(e._s(e.ingress.namespace))])]),e.ingress.backend?n("el-form-item",{attrs:{label:"默认后端"}},[n("span",[e._v(e._s(e.ingress.backend.serviceName+":"+e.ingress.backend.servicePort))])]):e._e(),n("el-form-item",{attrs:{label:"标签"}},[e.ingress.labels?e._l(e.ingress.labels,(function(t,s){return[n("span",{key:s,staticClass:"back-class"},[e._v(e._s(s)+": "+e._s(t)+" "),n("br")])]})):n("span",[e._v("—")])],2),n("el-form-item",{attrs:{label:"注解"}},[e.ingress.annotations?e._l(e.ingress.annotations,(function(t,s){return[n("span",{key:s},[e._v(e._s(s)+": "+e._s(t)),n("br")])]})):n("span",[e._v("—")])],2)],1),n("el-collapse",{staticClass:"podCollapse",attrs:{value:["rules","events"]}},[n("el-collapse-item",{attrs:{title:"Rules",name:"rules"}},[n("template",{slot:"title"},[n("span",{staticClass:"title-class"},[e._v("Rules")])]),n("div",{staticClass:"msgClass"},e._l(e.ingress.rules,(function(t){return n("div",{key:t.host},[n("div",[n("span",{staticStyle:{color:"#606266"}},[n("b",[e._v("访问域名： "+e._s(t.host))])])]),t.http?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.http.paths,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[n("el-table-column",{attrs:{prop:"path",label:"路径","min-width":"25","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.path?n("span",[e._v(" "+e._s(t.row.path)+" ")]):n("span",[e._v("—")])]}}],null,!0)}),n("el-table-column",{attrs:{prop:"backend",label:"服务后端","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.backend.serviceName)+":"+e._s(t.row.backend.servicePort)+" ")])]}}],null,!0)})],1):e._e()],1)})),0)],2),n("el-collapse-item",{attrs:{title:"Events",name:"events"}},[n("template",{slot:"title"},[n("span",{staticClass:"title-class"},[e._v("Events")])]),n("div",{staticClass:"msgClass"},[e.ingressEvents&&e.ingressEvents.length>0?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.ingressEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.message?t.row.message:"——")+" ")])]}}],null,!1,2705410019)}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):n("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){return e.updateIngress()}}},[e._v("确 定")])],1)],1)],1)],1)},a=[],i=(n("4de4"),n("b0c0"),n("61b2")),r=n("9f46"),o=n("0905"),c=n("5c96"),l={name:"IngressDetail",components:{Clusterbar:i["a"],Yaml:i["d"]},data:function(){return{cellStyle:{border:0},yamlDialog:!1,yamlValue:"",yamlLoading:!0,loading:!0,originIngress:void 0,endpoints:[],ingressEvents:[],eventLoading:!0}},created:function(){this.fetchData()},watch:{ingressWatch:function(e){if(e&&this.originIngress){var t=e.resource.metadata.uid;if(t!==this.ingress.uid)return;var n=e.resource.metadata.resourceVersion;this.ingress.resource_version<n&&(this.originIngress=e.resource)}},eventWatch:function(e){if(e&&this.originIngress){var t=e.resource;if(t.involvedObject.namespace!==this.ingress.namespace)return;if(t.involvedObject.uid!==this.ingress.uid)return;var n=e.resource.metadata.uid;if("add"===e.event)this.ingressEvents.push(Object(o["a"])(t));else if("update"==e.event){var s=e.resource.metadata.resourceVersion;for(var a in this.ingressEvents){var i=this.ingressEvents[a];if(i.uid===n){if(i.resource_version<s){var r=Object(o["a"])(e.resource);this.$set(this.ingressEvents,a,r)}break}}}else"delete"===e.event&&(this.ingressEvents=this.ingressEvents.filter((function(e){var t=e.uid;return t!==n})))}}},computed:{titleName:function(){return["Ingresses",this.ingressName]},ingressName:function(){return this.$route.params?this.$route.params.ingressName:""},namespace:function(){return this.$route.params?this.$route.params.namespace:""},ingress:function(){var e=this.buildIngress(this.originIngress);return e},cluster:function(){return this.$store.state.cluster},ingressWatch:function(){return this.$store.getters["ws/ingressesWatch"]},eventWatch:function(){return this.$store.getters["ws/eventWatch"]}},methods:{fetchData:function(){var e=this;this.originIngress=null,this.ingressEvents=[],this.loading=!0,this.eventLoading=!0;var t=this.$store.state.cluster;return t?this.namespace?this.ingressName?void Object(r["b"])(t,this.namespace,this.ingressName).then((function(n){e.originIngress=n.data,e.loading=!1,Object(o["b"])(t,e.originIngress.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.ingressEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1,e.eventLoading=!1})):(c["Message"].error("获取Ingress名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取命名空间参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(c["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},buildIngress:function(e){if(!e)return{};var t={uid:e.metadata.uid,namespace:e.metadata.namespace,name:e.metadata.name,backend:e.spec.backend,tls:e.spec.tls,rules:e.spec.rules,resource_version:e.metadata.resourceVersion,created:e.metadata.creationTimestamp,labels:e.metadata.labels,annotations:e.metadata.annotations};return t},deleteIngresses:function(){var e=this.$store.state.cluster;if(e){this.ingress||c["Message"].error("获取Ingress参数异常，请刷新重试");var t=[{namespace:this.ingress.namespace,name:this.ingress.name}],n={resources:t};Object(r["a"])(e,n).then((function(){c["Message"].success("删除成功")})).catch((function(){}))}else c["Message"].error("获取集群参数异常，请刷新重试")},getIngressYaml:function(){var e=this;if(this.ingress){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(r["b"])(t,this.ingress.namespace,this.ingress.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Ingress参数异常，请刷新重试")},updateIngress:function(){if(this.ingress){var e=this.$store.state.cluster;e?(console.log(this.yamlValue),Object(r["d"])(e,this.ingress.namespace,this.ingress.name,this.yamlValue).then((function(){c["Message"].success("更新成功")})).catch((function(){}))):c["Message"].error("获取集群参数异常，请刷新重试")}else c["Message"].error("获取Ingress参数异常，请刷新重试")}}},u=l,d=(n("a97d"),n("ee97"),n("2877")),m=Object(d["a"])(u,s,a,!1,null,"bd332dfa",null);t["default"]=m.exports},ca6d:function(e,t,n){"use strict";var s=n("64d3"),a=n.n(s);a.a},db62:function(e,t,n){"use strict";var s=n("43df"),a=n.n(s);a.a},dda3:function(e,t,n){"use strict";var s=n("b92f"),a=n.n(s);a.a},ee97:function(e,t,n){"use strict";var s=n("fc8e"),a=n.n(s);a.a},fc8e:function(e,t,n){}}]);