(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aa8f98d"],{"0905":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var a=n("b775");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o={};return t&&(o["uid"]=t),n&&(o["kind"]=n),i&&(o["namespace"]=i),s&&(o["name"]=s),Object(a["a"])({url:"event/".concat(e),method:"get",params:o})}function i(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec.count,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"147d":function(e,t,n){"use strict";var a=n("f6bf"),s=n.n(a);s.a},"3ee1":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));n("99af");var a=n("b775");function s(e){return Object(a["a"])({url:"persistent_volume_claim/".concat(e),method:"get"})}function i(e,t,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a["a"])({url:"persistent_volume_claim/".concat(e,"/").concat(t,"/").concat(n),method:"get",params:{output:s}})}function o(e,t,n,s){return Object(a["a"])({url:"persistent_volume_claim/".concat(e,"/").concat(t,"/").concat(n),method:"post",data:{yaml:s}})}},"43df":function(e,t,n){},5451:function(e,t,n){},"589b":function(e,t,n){"use strict";var a=n("714a"),s=n.n(a);s.a},"5be6":function(e,t,n){"use strict";var a=n("b3a9"),s=n.n(a);s.a},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return E})),n.d(t,"d",(function(){return $}));var a,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},i=[],o=(n("b0c0"),n("aad4")),l=n("5c96"),r={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){e.nameFunc(e.nameInput),a=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(o["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):l["Message"].error("获取集群异常，请刷新重试")}}},c=r,u=(n("589b"),n("dda3"),n("2877")),m=Object(u["a"])(c,s,i,!1,null,"3d7b3a75",null),d=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},p=[],h=(n("99af"),n("abb2"),n("fcf3")),v=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new h["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new v["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="ws://".concat(window.location.host,"/api/v1/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else l["Message"].error("获取POD参数异常，请刷新重试");else l["Message"].error("获取命名空间参数异常，请刷新重试");else l["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},C=b,y=Object(u["a"])(C,f,p,!1,null,null,null),_=y.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},V=[],w=n("5f87"),P={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(w["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="ws://".concat(window.location.host,"/osp/api/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(t+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else l["Message"].error("获取POD参数异常，请刷新重试");else l["Message"].error("获取命名空间参数异常，请刷新重试");else l["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},O=P,x=(n("147d"),Object(u["a"])(O,k,V,!1,null,"72e53532",null)),E=x.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},S=[],j=n("56b3"),M=n.n(j);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var F={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=M.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},D=F,T=(n("db62"),Object(u["a"])(D,N,S,!1,null,"5bb854da",null)),$=T.exports},"714a":function(e,t,n){},"9c8c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,editFunc:e.getPersistentVolumeClaimYaml}}),n("div",{staticClass:"dashboard-container"},[e.PersistentVolumeClaim.metadata?n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"180px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("span",[e._v(e._s(e.PersistentVolumeClaim.metadata.name))])]),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[e._v(e._s(e.PersistentVolumeClaim.metadata.creationTimestamp))])]),n("el-form-item",{attrs:{label:"状态"}},[n("span",[e._v(e._s(e.PersistentVolumeClaim.status.phase))])]),n("el-form-item",{attrs:{label:"Namespace"}},[n("span",[e._v(e._s(e.PersistentVolumeClaim.metadata.namespace))])]),n("el-form-item",{attrs:{label:"Capacity"}},[n("span",[e._v(e._s(e.PersistentVolumeClaim.spec.resources.requests.storage))])]),n("el-form-item",{attrs:{label:"storageClassName"}},[e.PersistentVolumeClaim.spec.storageClassName?n("span",[e._v(e._s(e.PersistentVolumeClaim.spec.storageClassName))]):n("span",[e._v("——")])]),n("el-form-item",{attrs:{label:"AccessMode"}},[e._l(e.PersistentVolumeClaim.spec.accessModes,(function(t){return[n("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)+" "),n("br")])]}))],2),n("el-form-item",{attrs:{label:"Finalizers"}},[e.PersistentVolumeClaim.metadata.finalizers?e._l(e.PersistentVolumeClaim.metadata.finalizers,(function(t){return[n("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)),n("br")])]})):n("span",[e._v("——")])],2)],1):e._e(),n("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[e.PersistentVolumeClaim.spec&&e.PersistentVolumeClaim.spec.selector?n("el-collapse-item",{attrs:{title:"Selector",name:"1"}},[n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"180px"}},[n("el-form-item",{attrs:{label:"Match Labels"}},[e._l(e.PersistentVolumeClaim.spec.selector.matchLabels,(function(t,a){return[n("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)+":"+e._s(a))])]}))],2),n("el-form-item",{attrs:{label:"Match Expressions"}},[e.PersistentVolumeClaim.spec.selector.matchExpressions?e._l(e.PersistentVolumeClaim.spec.selector.matchExpressions,(function(t,a){return[n("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)+":"+e._s(a))])]})):n("span",[e._v("——")])],2)],1)],1):e._e(),n("el-collapse-item",{attrs:{title:"Events",name:"2"}},[n("template",{slot:"title"},[n("span",{staticClass:"title-class"},[e._v("Events")])]),n("div",{staticClass:"msgClass"},[e.persistentVolumeClaimEvents&&e.persistentVolumeClaimEvents.length>0?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.persistentVolumeClaimEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.message?t.row.message:"——")+" ")])]}}],null,!1,2705410019)}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):n("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:e.updatePersistentVolumeClaim}},[e._v("确 定")])],1)],1)],1)],1)},s=[],i=n("61b2"),o=n("3ee1"),l=n("0905"),r=n("5c96"),c={name:"PersistentVolumeClaimDetail",components:{Clusterbar:i["a"],Yaml:i["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originPersistentVolumeClaim:{},selectContainer:"",eventLoading:!0,activeNames:["1"],persistentVolumeClaimEvents:[]}},created:function(){this.fetchData()},watch:{},computed:{titleName:function(){return["PersistentVolumeClaim",this.PersistentVolumeClaimName]},PersistentVolumeClaimName:function(){return this.$route.params?this.$route.params.persistentVolumeClaimName:""},cluster:function(){return this.$store.state.cluster},PersistentVolumeClaim:function(){return console.log(this.originPersistentVolumeClaim),this.originPersistentVolumeClaim},namespace:function(){return this.$route.params?this.$route.params.namespace:""}},methods:{handleChange:function(e){console.log(e)},fetchData:function(){var e=this;this.originPersistentVolumeClaim={},this.loading=!0;var t=this.$store.state.cluster;return t?this.PersistentVolumeClaimName?(this.namespace||r["Message"].error("获取获取PersistentVolumeClaim命名空间参数异常，请刷新重试"),void Object(o["a"])(t,this.namespace,this.PersistentVolumeClaimName).then((function(n){e.loading=!1,e.originPersistentVolumeClaim=n.data,Object(l["b"])(t,e.originPersistentVolumeClaim.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.persistentVolumeClaimEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1}))):(r["Message"].error("获取PersistentVolumeClaim名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(r["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},getPersistentVolumeClaimYaml:function(){var e=this;if(this.PersistentVolumeClaimName){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(o["a"])(t,this.namespace,this.PersistentVolumeClaimName,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取PersistentVolumeClaim参数异常，请刷新重试")},updatePersistentVolumeClaim:function(){if(this.PersistentVolumeClaim){var e=this.$store.state.cluster;e?Object(o["c"])(e,this.namespace,this.PersistentVolumeClaimName,this.yamlValue).then((function(){r["Message"].success("更新成功")})).catch((function(){})):r["Message"].error("获取集群参数异常，请刷新重试")}else r["Message"].error("获取PersistentVolumeClaim参数异常，请刷新重试")}}},u=c,m=(n("d688"),n("5be6"),n("2877")),d=Object(m["a"])(u,a,s,!1,null,"7b0ed5c8",null);t["default"]=d.exports},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));n("99af");var a=n("b775");function s(e){return Object(a["a"])({url:"namespace/".concat(e),method:"get"})}function i(e,t,n){return Object(a["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b3a9:function(e,t,n){},b92f:function(e,t,n){},d688:function(e,t,n){"use strict";var a=n("5451"),s=n.n(a);s.a},db62:function(e,t,n){"use strict";var a=n("43df"),s=n.n(a);s.a},dda3:function(e,t,n){"use strict";var a=n("b92f"),s=n.n(a);s.a},f6bf:function(e,t,n){}}]);