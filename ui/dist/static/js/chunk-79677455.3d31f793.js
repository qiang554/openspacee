(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79677455"],{"0905":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var s=n("b775");function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i={};return t&&(i["uid"]=t),n&&(i["kind"]=n),o&&(i["namespace"]=o),a&&(i["name"]=a),Object(s["a"])({url:"event/".concat(e),method:"get",params:i})}function o(e){if(e){var t=e.lastTimestamp;return t||(t=e.firstTimestamp),t||(t=e.metadata.creationTimestamp),{uid:e.metadata.uid,namespace:e.metadata.namespace,count:e.spec.count,reason:e.reason,message:e.message,type:e.type,object:e.involvedObject,source:e.source,event_time:t,resource_version:e.metadata.resourceVersion}}}},"147d":function(e,t,n){"use strict";var s=n("f6bf"),a=n.n(s);a.a},"1ab8":function(e,t,n){"use strict";var s=n("5d7d"),a=n.n(s);a.a},"2c65":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));n("99af");var s=n("b775");function a(e){return Object(s["a"])({url:"persistent_volume/".concat(e),method:"get"})}function o(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return Object(s["a"])({url:"persistent_volume/".concat(e,"/").concat(t),method:"get",params:{output:n}})}function i(e,t,n){return Object(s["a"])({url:"persistent_volume/".concat(e,"/").concat(t),method:"post",data:{yaml:n}})}},"43df":function(e,t,n){},"589b":function(e,t,n){"use strict";var s=n("714a"),a=n.n(s);a.a},"5d7d":function(e,t,n){},"61b2":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return S})),n.d(t,"d",(function(){return $}));var s,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.titleName,(function(t){return n("el-breadcrumb-item",{key:t,staticClass:"no-redirect"},[e._v(" "+e._s(t)+" ")])})),1),"undefined"!==typeof e.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):e._e(),"undefined"!==typeof e.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(t){return e.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):e._e(),n("div",{staticClass:"right"},["undefined"!==typeof e.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:e.nsChange},model:{value:e.nsInput,callback:function(t){e.nsInput=t},expression:"nsInput"}},e._l(e.namespaces,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1):e._e(),"undefined"!==typeof e.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:e.nameDebounce},model:{value:e.nameInput,callback:function(t){e.nameInput=t},expression:"nameInput"}}):e._e()],1)],1)},o=[],i=(n("b0c0"),n("aad4")),r=n("5c96"),l={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(e){this.nsFunc&&this.nsFunc(e)},nameDebounce:function(){var e=this;this.nameFunc&&(s&&clearTimeout(s),s=setTimeout((function(){e.nameFunc(e.nameInput),s=void 0}),500))},fetchNamespace:function(){var e=this;this.namespaces=[];var t=this.$store.state.cluster;t?Object(i["b"])(t).then((function(t){e.namespaces=t.data,e.namespaces.sort((function(e,t){return e.name>t.name?1:-1}))})).catch((function(){})):r["Message"].error("获取集群异常，请刷新重试")}}},c=l,u=(n("589b"),n("dda3"),n("2877")),m=Object(u["a"])(c,a,o,!1,null,"3d7b3a75",null),d=m.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},f=[],h=(n("99af"),n("abb2"),n("fcf3")),v=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var e=Math.floor((window.innerHeight-100)/20);console.log(e);var t=new h["Terminal"]({fontSize:14,cursorBlink:!0,rows:e}),n=new v["FitAddon"];t.loadAddon(n),t.open(document.getElementById("xterm")),n.fit(),t.focus(),this.term=t,this.initSocket()},initSocket:function(){var e=this.term.cols,t=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="ws://".concat(window.location.host,"/osp/api/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&cols=").concat(e,"&rows=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var e=this;this.socket.onopen=function(){var t=new g["AttachAddon"](e.socket);e.term.loadAddon(t)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,k=Object(u["a"])(y,p,f,!1,null,null,null),_=k.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"log-class",style:{height:e.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.logs))])])},V=[],O=n("5f87"),C={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var e=document.getElementById("logDiv"),t=this;e.addEventListener("scroll",(function(){t.scrollToBottom=!1,e.scrollTop+e.clientHeight===e.scrollHeight&&(t.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var e=Object(O["a"])();if(console.log(e),this.cluster)if(this.namespace)if(this.pod){var t="ws://".concat(window.location.host,"/osp/api/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(t+"?container=".concat(this.container,"&token=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var e=this;this.socket.onmessage=function(t){e.logs+=t.data;var n=e;e.$nextTick((function(){if(n.scrollToBottom){var e=document.getElementById("logDiv");e.scrollTop=e.scrollHeight}}))}}}},x=C,E=(n("147d"),Object(u["a"])(x,w,V,!1,null,"72e53532",null)),S=E.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+e.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},N=[],F=n("56b3"),M=n.n(F);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var D={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(e){var t=this.yamlEditor.getValue();e!==t&&this.yamlEditor.setValue(this.value)}},mounted:function(){var e=this;this.yamlEditor=M.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(t){e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},P=D,T=(n("db62"),Object(u["a"])(P,j,N,!1,null,"5bb854da",null)),$=T.exports},"6ff3":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,editFunc:e.getPersistentVolumeYaml}}),n("div",{staticClass:"dashboard-container"},[e.persistentVolume.metadata?n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"名称"}},[n("span",[e._v(e._s(e.persistentVolume.metadata.name))])]),n("el-form-item",{attrs:{label:"创建时间"}},[n("span",[e._v(e._s(e.persistentVolume.metadata.creationTimestamp))])]),n("el-form-item",{attrs:{label:"状态"}},[n("span",[e._v(e._s(e.persistentVolume.status.phase))])]),n("el-form-item",{attrs:{label:"Capacity"}},[n("span",[e._v(e._s(e.persistentVolume.spec.capacity.storage))])]),n("el-form-item",{attrs:{label:"AccessMode"}},[e._l(e.persistentVolume.spec.accessModes,(function(t){return[n("span",{key:t,staticClass:"back-class"},[e._v(e._s(t)+" "),n("br")])]}))],2),n("el-form-item",{attrs:{label:"标签"}},[e.persistentVolume.metadata.labels?e._l(e.persistentVolume.metadata.labels,(function(t,s){return[n("span",{key:s,staticClass:"back-class"},[e._v(e._s(s)+": "+e._s(t)+" "),n("br")])]})):n("span",[e._v("——")])],2)],1):e._e(),n("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[e.persistentVolume.spec&&e.persistentVolume.spec.claimRef?n("el-collapse-item",{attrs:{title:"Claim",name:"1"}},[e.persistentVolume.spec?n("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[n("el-form-item",{attrs:{label:"类型"}},[n("span",[e._v(e._s(e.persistentVolume.spec.claimRef.kind))])]),n("el-form-item",{attrs:{label:"名称"}},[n("span",[e._v(e._s(e.persistentVolume.spec.claimRef.name))])]),n("el-form-item",{attrs:{label:"NameSpace"}},[n("span",[e._v(e._s(e.persistentVolume.spec.claimRef.namespace))])])],1):e._e()],1):e._e(),n("el-collapse-item",{attrs:{title:"Events",name:"2"}},[n("template",{slot:"title"},[n("span",{staticClass:"title-class"},[e._v("Events")])]),n("div",{staticClass:"msgClass"},[e.persistentVolumeEvents&&e.persistentVolumeEvents.length>0?n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.persistentVolumeEvents,"tooltip-effect":"dark","cell-style":e.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[n("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.object.kind)+"/"+e._s(t.row.object.name)+" ")])]}}],null,!1,1803908363)}),n("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.reason?t.row.reason:"——")+" ")])]}}],null,!1,3284152067)}),n("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(" "+e._s(t.row.message?t.row.message:"——")+" ")])]}}],null,!1,2705410019)}),n("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):n("div",{staticStyle:{color:"#909399","text-align":"center"}},[e._v("暂无数据")])],1)],2)],1),n("el-dialog",{attrs:{title:"编辑",visible:e.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(t){e.yamlDialog=t}}},[e.yamlDialog?n("yaml",{attrs:{loading:e.yamlLoading},model:{value:e.yamlValue,callback:function(t){e.yamlValue=t},expression:"yamlValue"}}):e._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(t){e.yamlDialog=!1}}},[e._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"},on:{click:e.updatePersistentVolume}},[e._v("确 定")])],1)],1)],1)],1)},a=[],o=(n("b0c0"),n("61b2")),i=n("2c65"),r=n("0905"),l=n("5c96"),c={name:"PersistentVolumeDetail",components:{Clusterbar:o["a"],Yaml:o["d"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originPersistentVolume:{},selectContainer:"",eventLoading:!0,activeNames:["1"],persistentVolumeEvents:[]}},created:function(){this.fetchData()},watch:{},computed:{titleName:function(){return["PersistentVolume",this.persistentVolumeName]},persistentVolumeName:function(){return this.$route.params?this.$route.params.persistentVolumeName:""},cluster:function(){return this.$store.state.cluster},persistentVolume:function(){return console.log(this.originPersistentVolume),this.originPersistentVolume}},methods:{handleChange:function(e){console.log(e)},fetchData:function(){var e=this;this.originPersistentVolume={},this.loading=!0;var t=this.$store.state.cluster;return t?this.persistentVolumeName?void Object(i["a"])(t,this.persistentVolumeName).then((function(n){e.loading=!1,e.originPersistentVolume=n.data,Object(r["b"])(t,e.originPersistentVolume.metadata.uid).then((function(t){e.eventLoading=!1,t.data&&(e.persistentVolumeEvents=t.data.length>0?t.data:[])})).catch((function(){e.eventLoading=!1}))})).catch((function(){e.loading=!1})):(l["Message"].error("获取PersistentVolume名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(l["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},getPersistentVolumeYaml:function(){var e=this;if(this.persistentVolumeName){var t=this.$store.state.cluster;t?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["a"])(t,this.persistentVolume.metadata.name,"yaml").then((function(t){e.yamlLoading=!1,e.yamlValue=t.data})).catch((function(){e.yamlLoading=!1}))):l["Message"].error("获取集群参数异常，请刷新重试")}else l["Message"].error("获取PersistentVolume参数异常，请刷新重试")},updatePersistentVolume:function(){if(this.persistentVolume){var e=this.$store.state.cluster;e?Object(i["c"])(e,this.persistentVolumeName,this.yamlValue).then((function(){l["Message"].success("更新成功")})).catch((function(){})):l["Message"].error("获取集群参数异常，请刷新重试")}else l["Message"].error("获取PersistentVolume参数异常，请刷新重试")}}},u=c,m=(n("8298"),n("1ab8"),n("2877")),d=Object(m["a"])(u,s,a,!1,null,"434e1dd2",null);t["default"]=d.exports},"714a":function(e,t,n){},8298:function(e,t,n){"use strict";var s=n("a190"),a=n.n(s);a.a},a190:function(e,t,n){},aad4:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));n("99af");var s=n("b775");function a(e){return Object(s["a"])({url:"namespace/".concat(e),method:"get"})}function o(e,t,n){return Object(s["a"])({url:"namespace/".concat(e,"/").concat(t),method:"get",params:{output:n}})}},b92f:function(e,t,n){},db62:function(e,t,n){"use strict";var s=n("43df"),a=n.n(s);a.a},dda3:function(e,t,n){"use strict";var s=n("b92f"),a=n.n(s);a.a},f6bf:function(e,t,n){}}]);