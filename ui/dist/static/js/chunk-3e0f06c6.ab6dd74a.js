(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e0f06c6"],{"147d":function(t,e,n){"use strict";var a=n("f6bf"),o=n.n(a);o.a},"3ee1":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return s}));n("99af");var a=n("b775");function o(t){return Object(a["a"])({url:"persistent_volume_claim/".concat(t),method:"get"})}function i(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a["a"])({url:"persistent_volume_claim/".concat(t,"/").concat(e,"/").concat(n),method:"get",params:{output:o}})}function s(t,e,n,o){return Object(a["a"])({url:"persistent_volume_claim/".concat(t,"/").concat(e,"/").concat(n),method:"post",data:{yaml:o}})}},"43df":function(t,e,n){},"4e10":function(t,e,n){"use strict";var a=n("ec0c"),o=n.n(a);o.a},"589b":function(t,e,n){"use strict";var a=n("714a"),o=n.n(a);o.a},"61b2":function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"c",(function(){return k})),n.d(e,"b",(function(){return F})),n.d(e,"d",(function(){return N}));var a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.titleName,(function(e){return n("el-breadcrumb-item",{key:e,staticClass:"no-redirect"},[t._v(" "+t._s(e)+" ")])})),1),"undefined"!==typeof t.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(e){return t.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):t._e(),"undefined"!==typeof t.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(e){return t.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):t._e(),n("div",{staticClass:"right"},["undefined"!==typeof t.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:t.nsChange},model:{value:t.nsInput,callback:function(e){t.nsInput=e},expression:"nsInput"}},t._l(t.namespaces,(function(t){return n("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1):t._e(),"undefined"!==typeof t.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:t.nameDebounce},model:{value:t.nameInput,callback:function(e){t.nameInput=e},expression:"nameInput"}}):t._e()],1)],1)},i=[],s=(n("b0c0"),n("aad4")),r=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(t){this.nsFunc&&this.nsFunc(t)},nameDebounce:function(){var t=this;this.nameFunc&&(a&&clearTimeout(a),a=setTimeout((function(){t.nameFunc(t.nameInput),a=void 0}),500))},fetchNamespace:function(){var t=this;this.namespaces=[];var e=this.$store.state.cluster;e?Object(s["b"])(e).then((function(e){t.namespaces=e.data,t.namespaces.sort((function(t,e){return t.name>e.name?1:-1}))})).catch((function(){})):r["Message"].error("获取集群异常，请刷新重试")}}},l=c,u=(n("589b"),n("dda3"),n("2877")),d=Object(u["a"])(l,o,i,!1,null,"3d7b3a75",null),m=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},h=[],p=(n("99af"),n("abb2"),n("fcf3")),g=n("47d0"),v=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var t=Math.floor((window.innerHeight-100)/20);console.log(t);var e=new p["Terminal"]({fontSize:14,cursorBlink:!0,rows:t}),n=new g["FitAddon"];e.loadAddon(n),e.open(document.getElementById("xterm")),n.fit(),e.focus(),this.term=e,this.initSocket()},initSocket:function(){var t=this.term.cols,e=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="ws://".concat(window.location.host,"/osp/api/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&cols=").concat(t,"&rows=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var t=this;this.socket.onopen=function(){var e=new v["AttachAddon"](t.socket);t.term.loadAddon(e)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,w=Object(u["a"])(y,f,h,!1,null,null,null),k=w.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"log-class",style:{height:t.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.logs))])])},x=[],O=n("5f87"),C={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var t=document.getElementById("logDiv"),e=this;t.addEventListener("scroll",(function(){e.scrollToBottom=!1,t.scrollTop+t.clientHeight===t.scrollHeight&&(e.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var t=Object(O["a"])();if(console.log(t),this.cluster)if(this.namespace)if(this.pod){var e="ws://".concat(window.location.host,"/osp/api/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(e+"?container=".concat(this.container,"&token=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else r["Message"].error("获取POD参数异常，请刷新重试");else r["Message"].error("获取命名空间参数异常，请刷新重试");else r["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var t=this;this.socket.onmessage=function(e){t.logs+=e.data;var n=t;t.$nextTick((function(){if(n.scrollToBottom){var t=document.getElementById("logDiv");t.scrollTop=t.scrollHeight}}))}}}},S=C,E=(n("147d"),Object(u["a"])(S,_,x,!1,null,"72e53532",null)),F=E.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+t.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},D=[],j=n("56b3"),T=n.n(j);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var M={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(t){var e=this.yamlEditor.getValue();t!==e&&this.yamlEditor.setValue(this.value)}},mounted:function(){var t=this;this.yamlEditor=T.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(e){t.$emit("input",e.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},H=M,I=(n("db62"),Object(u["a"])(H,V,D,!1,null,"5bb854da",null)),N=I.exports},"714a":function(t,e,n){},aad4:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));n("99af");var a=n("b775");function o(t){return Object(a["a"])({url:"namespace/".concat(t),method:"get"})}function i(t,e,n){return Object(a["a"])({url:"namespace/".concat(t,"/").concat(e),method:"get",params:{output:n}})}},b22b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("clusterbar",{attrs:{titleName:t.titleName,nsFunc:t.nsSearch,nameFunc:t.nameSearch}}),n("div",{staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.persistentVolumeClaim,"tooltip-effect":"dark","max-height":t.maxHeight,"cell-style":t.cellStyle,"default-sort":{prop:"name"},"row-key":"uid"}},[n("el-table-column",{attrs:{type:"selection",width:"45"}}),n("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"45","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"name-class",on:{click:function(n){return t.nameClick(e.row.namespace,e.row.name)}}},[t._v(" "+t._s(e.row.name)+" ")])]}}])}),n("el-table-column",{attrs:{prop:"namespace",label:"Namespace","min-width":"40","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"storage_class",label:"Storage Class","min-width":"40","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"capacity",label:"Capacity","min-width":"45","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"pods",label:"Pods","min-width":"45","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"status",label:"Status","min-width":"45","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"create_time",label:"Create Time","min-width":"45","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{label:"","show-overflow-tooltip":"",width:"45"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-dropdown",{attrs:{size:"medium"}},[n("el-link",{attrs:{underline:!1}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),t.nameClick(e.row.namespace,e.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"detail"}}),n("span",{staticStyle:{"margin-left":"5px"}},[t._v("详情")])],1),n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),t.getPersistentVolumeClaimYaml(e.row.namespace,e.row.name)}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"edit"}}),n("span",{staticStyle:{"margin-left":"5px"}},[t._v("修改")])],1),n("el-dropdown-item",{nativeOn:{click:function(t){t.preventDefault()}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),n("span",{staticStyle:{"margin-left":"5px"}},[t._v("删除")])],1)],1)],1)]}}])})],1)],1),n("el-dialog",{attrs:{title:"编辑",visible:t.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(e){t.yamlDialog=e}}},[t.yamlDialog?n("yaml",{attrs:{loading:t.yamlLoading},model:{value:t.yamlValue,callback:function(e){t.yamlValue=e},expression:"yamlValue"}}):t._e(),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",size:"small"},on:{click:function(e){t.yamlDialog=!1}}},[t._v("取 消")]),n("el-button",{attrs:{plain:"",size:"small"}},[t._v("确 定")])],1)],1)],1)},o=[],i=(n("caad"),n("c975"),n("b0c0"),n("2532"),n("b85c")),s=n("61b2"),r=n("5c96"),c=n("3ee1"),l={name:"PersistentVolumeClaim",components:{Clusterbar:s["a"],Yaml:s["d"]},data:function(){return{titleName:["PersistentVolumeClaim"],originPersistentVolumeClaims:[],search_name:"",search_ns:[],cellStyle:{border:0},maxHeight:window.innerHeight-150,loading:!0,yamlDialog:!1,yamlName:"",yamlValue:"",yamlLoading:!0}},created:function(){this.fetchData()},computed:{persistentVolumeClaim:function(){var t,e=[],n=Object(i["a"])(this.originPersistentVolumeClaims);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.search_ns.length>0&&this.search_ns.indexOf(a.namespace)<0||(this.search_name&&!a.name.includes(this.search_name)||e.push(a))}}catch(o){n.e(o)}finally{n.f()}return e}},methods:{nameClick:function(t,e){console.log(t,e),this.$router.push({name:"pvcDetail",params:{persistentVolumeClaimName:e,namespace:t}})},nsSearch:function(t){this.search_ns=[];var e,n=Object(i["a"])(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.search_ns.push(a)}}catch(o){n.e(o)}finally{n.f()}},nameSearch:function(t){this.search_name=t},fetchData:function(){var t=this;this.loading=!0,this.originConfigMaps=[];var e=this.$store.state.cluster;e?Object(c["b"])(e).then((function(e){t.loading=!1,t.originPersistentVolumeClaims=e.data})).catch((function(){t.loading=!1})):(this.loading=!1,r["Message"].error("获取集群异常，请刷新重试."))},getPersistentVolumeClaimYaml:function(t,e){var n=this,a=this.$store.state.cluster;console.log("xxxxxxx",e),a?e?(this.yamlLoading=!0,this.yamlDialog=!0,Object(c["a"])(a,t,e,"yaml").then((function(t){n.yamlLoading=!1,n.yamlValue=t.data,n.yamlName=e})).catch((function(){n.yamlLoading=!1}))):r["Message"].error("获取Pod名称参数异常，请刷新重试"):r["Message"].error("获取集群参数异常，请刷新重试")}}},u=l,d=(n("4e10"),n("2877")),m=Object(d["a"])(u,a,o,!1,null,"12e3a870",null);e["default"]=m.exports},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var a=n("06c5");function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(a["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){c=!0,s=t},f:function(){try{r||null==n["return"]||n["return"]()}finally{if(c)throw s}}}}},b92f:function(t,e,n){},db62:function(t,e,n){"use strict";var a=n("43df"),o=n.n(a);o.a},dda3:function(t,e,n){"use strict";var a=n("b92f"),o=n.n(a);o.a},ec0c:function(t,e,n){},f6bf:function(t,e,n){}}]);