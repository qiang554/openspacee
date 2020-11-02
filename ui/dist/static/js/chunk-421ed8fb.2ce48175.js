(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-421ed8fb"],{"147d":function(t,e,n){"use strict";var r=n("f6bf"),a=n.n(r);a.a},"43df":function(t,e,n){},"589b":function(t,e,n){"use strict";var r=n("714a"),a=n.n(r);a.a},"61b2":function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return w})),n.d(e,"b",(function(){return C})),n.d(e,"d",(function(){return $}));var r,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cluster-bar"},[n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{"separator-class":"el-icon-arrow-right"}},t._l(t.titleName,(function(e){return n("el-breadcrumb-item",{key:e,staticClass:"no-redirect"},[t._v(" "+t._s(e)+" ")])})),1),"undefined"!==typeof t.editFunc?n("el-link",{staticClass:"icon-create",on:{click:function(e){return t.editFunc()}}},[n("svg-icon",{attrs:{"icon-class":"edit"}})],1):t._e(),"undefined"!==typeof t.delFunc?n("el-link",{staticClass:"icon-create",on:{click:function(e){return t.delFunc()}}},[n("svg-icon",{attrs:{"icon-class":"delete"}})],1):t._e(),n("div",{staticClass:"right"},["undefined"!==typeof t.nsFunc?n("el-select",{attrs:{multiple:"",placeholder:"命名空间",size:"small"},on:{change:t.nsChange},model:{value:t.nsInput,callback:function(e){t.nsInput=e},expression:"nsInput"}},t._l(t.namespaces,(function(t){return n("el-option",{key:t.name,attrs:{label:t.name,value:t.name}})})),1):t._e(),"undefined"!==typeof t.nameFunc?n("el-input",{attrs:{size:"small",placeholder:"搜索","suffix-icon":"el-icon-search"},on:{input:t.nameDebounce},model:{value:t.nameInput,callback:function(e){t.nameInput=e},expression:"nameInput"}}):t._e()],1)],1)},o=[],s=(n("b0c0"),n("aad4")),i=n("5c96"),c={name:"Clusterbar",props:{titleName:{type:Array,required:!0,default:function(){return[]}},nsFunc:{type:Function,required:!1,default:void 0},nameFunc:{type:Function,required:!1,default:void 0},delFunc:{type:Function,required:!1,default:void 0},editFunc:{type:Function,required:!1,default:void 0}},data:function(){return{nameInput:"",nsInput:[],namespaces:[]}},created:function(){"undefined"!==typeof this.nsFunc&&this.fetchNamespace()},methods:{nsChange:function(t){this.nsFunc&&this.nsFunc(t)},nameDebounce:function(){var t=this;this.nameFunc&&(r&&clearTimeout(r),r=setTimeout((function(){t.nameFunc(t.nameInput),r=void 0}),500))},fetchNamespace:function(){var t=this;this.namespaces=[];var e=this.$store.state.cluster;e?Object(s["b"])(e).then((function(e){t.namespaces=e.data,t.namespaces.sort((function(t,e){return t.name>e.name?1:-1}))})).catch((function(){})):i["Message"].error("获取集群异常，请刷新重试")}}},u=c,l=(n("589b"),n("dda3"),n("2877")),d=Object(l["a"])(u,a,o,!1,null,"3d7b3a75",null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xterm",attrs:{id:"xterm"}})},p=[],h=(n("99af"),n("abb2"),n("fcf3")),v=n("47d0"),g=n("173c"),b={name:"Xterm",data:function(){return{socket:null,term:null}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},mounted:function(){this.initTerm()},beforeDestroy:function(){this.socket&&(this.socket.send("\r\nexit\r"),this.socket.close()),this.term&&this.term.dispose()},methods:{initTerm:function(){var t=Math.floor((window.innerHeight-100)/20);console.log(t);var e=new h["Terminal"]({fontSize:14,cursorBlink:!0,rows:t}),n=new v["FitAddon"];e.loadAddon(n),e.open(document.getElementById("xterm")),n.fit(),e.focus(),this.term=e,this.initSocket()},initSocket:function(){var t=this.term.cols,e=this.term.rows;if(this.cluster)if(this.namespace)if(this.pod){var n="ws://".concat(window.location.host,"/osp/api/exec/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(n+"?container=".concat(this.container,"&cols=").concat(t,"&rows=").concat(e)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError()}else i["Message"].error("获取POD参数异常，请刷新重试");else i["Message"].error("获取命名空间参数异常，请刷新重试");else i["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){var t=this;this.socket.onopen=function(){var e=new g["AttachAddon"](t.socket);t.term.loadAddon(e)}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}}}},y=b,k=Object(l["a"])(y,m,p,!1,null,null,null),w=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"log-class",style:{height:t.logHeight+"px"},attrs:{id:"logDiv"}},[n("p",{staticStyle:{"white-space":"pre-line"}},[t._v(t._s(t.logs))])])},x=[],_=n("5f87"),E={name:"Logs",data:function(){return{logs:"",socket:null,scrollToBottom:!0}},props:{cluster:{type:String,required:!0,default:""},namespace:{type:String,required:!0,default:""},pod:{type:String,required:!0,default:""},container:{type:String,required:!1,default:""}},computed:{logHeight:function(){return window.innerHeight-200}},mounted:function(){var t=document.getElementById("logDiv"),e=this;t.addEventListener("scroll",(function(){e.scrollToBottom=!1,t.scrollTop+t.clientHeight===t.scrollHeight&&(e.scrollToBottom=!0)}),!0),this.initSocket()},beforeDestroy:function(){this.socket&&this.socket.close()},methods:{initSocket:function(){var t=Object(_["a"])();if(console.log(t),this.cluster)if(this.namespace)if(this.pod){var e="ws://".concat(window.location.host,"/osp/api/log/").concat(this.cluster,"/").concat(this.namespace,"/").concat(this.pod);this.socket=new WebSocket(e+"?container=".concat(this.container,"&token=").concat(t)),this.socketOnClose(),this.socketOnOpen(),this.socketOnError(),this.socketOnMessage()}else i["Message"].error("获取POD参数异常，请刷新重试");else i["Message"].error("获取命名空间参数异常，请刷新重试");else i["Message"].error("获取集群参数异常，请刷新重试")},socketOnOpen:function(){this.socket.onopen=function(){}},socketOnClose:function(){this.socket.onclose=function(){}},socketOnError:function(){this.socket.onerror=function(){}},socketOnMessage:function(){var t=this;this.socket.onmessage=function(e){t.logs+=e.data;var n=t;t.$nextTick((function(){if(n.scrollToBottom){var t=document.getElementById("logDiv");t.scrollTop=t.scrollHeight}}))}}}},j=E,S=(n("147d"),Object(l["a"])(j,O,x,!1,null,"72e53532",null)),C=S.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"yaml-editor",style:"--yamlHeight: "+t.yamlHeight+"px"},[n("textarea",{ref:"textarea"})])},F=[],q=n("56b3"),N=n.n(q);n("0dd0"),n("a7be"),n("cc10"),n("ced0"),n("8822"),n("b8d1");window.jsyaml=n("651e");var T={name:"YamlEditor",props:["value","loading","updateValue"],data:function(){return{yamlEditor:!1}},computed:{yamlHeight:function(){return window.innerHeight-250}},watch:{value:function(t){var e=this.yamlEditor.getValue();t!==e&&this.yamlEditor.setValue(this.value)}},mounted:function(){var t=this;this.yamlEditor=N.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"base16-light",lint:!0,lineWrapping:!0}),this.yamlEditor.setValue(this.value),this.yamlEditor.on("change",(function(e){t.$emit("input",e.getValue())}))},methods:{getValue:function(){return this.yamlEditor.getValue()}}},A=T,M=(n("db62"),Object(l["a"])(A,I,F,!1,null,"5bb854da",null)),$=M.exports},"714a":function(t,e,n){},aad4:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));n("99af");var r=n("b775");function a(t){return Object(r["a"])({url:"namespace/".concat(t),method:"get"})}function o(t,e,n){return Object(r["a"])({url:"namespace/".concat(t,"/").concat(e),method:"get",params:{output:n}})}},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function a(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,o=function(){};return{s:o,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){c=!0,s=t},f:function(){try{i||null==n["return"]||n["return"]()}finally{if(c)throw s}}}}},b92f:function(t,e,n){},d63a:function(t,e,n){"use strict";const r=Function.call.bind(Object.prototype.hasOwnProperty);function a(t){const e=t.trim().split(" "),n=e[0],r=e[1],a=e[2],o=(a||"").slice(1,-1).split(",").map(t=>t.trim());switch(r){case void 0:return"!"===n[0]?{operator:"DoesNotExist",key:n.slice(1)}:{operator:"Exists",key:n};case"=":case"==":return{operator:"=",key:n,value:a};case"!=":return{operator:"NotIn",values:[a],key:n};case"in":return{operator:"In",key:n,values:o};case"notin":return{operator:"NotIn",key:n,values:o};default:}throw new Error("Invalid expression: "+t)}function o(t){const e=t.split(/,(?![^(]*\))/).map(a),n=e.filter(t=>r(t,"value")).reduce((t,e)=>Object.assign(t,{[e.key]:e.value}),{}),o=e.filter(t=>!r(t,"value"));return{matchLabels:n,matchExpressions:o}}function s(t){const e=t.operator.toLowerCase(),n=t.key,r=t.values;switch(e){case"exists":return n;case"doesnotexist":return"!"+n;default:}return`${n} ${e} (${r.join(",")})`}function i(t){const e=t.matchLabels||{},n=t.matchExpressions||[];return Object.keys(e).map(t=>`${t} = ${e[t]}`).concat(n.map(s)).join(",")}function c(t){if("string"===typeof t)return c(o(t));const e=t.matchExpressions||[],n=t.matchLabels||{};return Object.keys(n).map(t=>({operator:"In",key:t,values:[n[t]]})).concat(e)}function u(t,e){const n=t.operator,a=t.key,o=t.values,s=e[a];switch(n){case"Exists":return r(e,a);case"DoesNotExist":return!r(e,a);case"In":return o.indexOf(s)>=0;case"NotIn":return o.indexOf(s)<0;default:}throw new Error("Invalid operator: "+n)}function l(t){const e=c(t);return t=>e.every(e=>u(e,t||{}))}t.exports={stringify:i,parse:o,Selector:l}},db62:function(t,e,n){"use strict";var r=n("43df"),a=n.n(r);a.a},dda3:function(t,e,n){"use strict";var r=n("b92f"),a=n.n(r);a.a},f492:function(t,e,n){"use strict";n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return m}));n("99af"),n("b0c0");var r=n("b85c"),a=n("b775"),o=n("d63a");function s(t,e){var n=Object(o["Selector"])(t);return console.log(n,t,e),n(e)}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={};return e&&(n["label_selector"]=e),Object(a["a"])({url:"pods/".concat(t,"/list"),method:"post",data:n})}function c(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Object(a["a"])({url:"pods/".concat(t,"/").concat(e,"/").concat(n),method:"get",params:{output:r}})}function u(t,e){return Object(a["a"])({url:"pods/".concat(t,"/delete"),method:"post",data:e})}function l(t,e,n,r){return Object(a["a"])({url:"pods/".concat(t,"/").concat(e,"/").concat(n),method:"post",data:{yaml:r}})}function d(t){return"running"===t?"running-class":"terminated"===t?"terminate-class":"waiting"===t?"waiting-class":void 0}function f(t,e){if(!t)return{};if(!e)return{};var n,a={name:t.name,status:"unknown",image:t.image,restarts:0,command:t.command?t.command:[],args:t.args?t.args:[],ports:t.ports?t.ports:[],env:t.env?t.env:[],volume_mounts:t.volumeMounts?t.volumeMounts:[],image_pull_policy:t.imagePullPolicy?t.imagePullPolicy:"",resources:t.resources?t.resources:{},start_time:""},o=Object(r["a"])(e);try{for(o.s();!(n=o.n()).done;){var s=n.value;if(s.name==t.name){a.restarts=s.restartCount,s.state.running?(a.status="running",a.start_time=s.state.running.startedAt):s.state.terminated?(a.status="terminated",a.start_time=s.state.terminated.startedAt):s.state.waiting&&(a.status="waiting"),a.ready=s.ready;break}}}catch(i){o.e(i)}finally{o.f()}return a}function m(t){if(!t)return{};var e,n=[],a=Object(r["a"])(t.spec.containers);try{for(a.s();!(e=a.n()).done;){var o=e.value,s=f(o,t.status.containerStatuses);n.push(s)}}catch(b){a.e(b)}finally{a.f()}var i=[];if(t.spec.initContainers){var c,u=Object(r["a"])(t.spec.initContainers);try{for(u.s();!(c=u.n()).done;){var l=c.value;i.push(f(l,t.status.initContainerStatuses))}}catch(b){u.e(b)}finally{u.f()}}var d="",m="";t.metadata.ownerReferences.length>0&&(d=t.metadata.ownerReferences[0].kind,m=t.metadata.ownerReferences[0].name);var p={uid:t.metadata.uid,name:t.metadata.name,namespace:t.metadata.namespace,containers:n,init_containers:i,controlled:d,controlled_name:m,qos:t.status.qosClass,status:t.status.phase,ip:t.status.podIP,created:t.metadata.creationTimestamp,node_name:t.spec.nodeName,resource_version:t.metadata.resourceVersion,labels:t.metadata.labels,annonations:t.metadata.annotations,service_account:t.spec.serviceAccountName||t.spec.serviceAccount,node_selector:t.spec.nodeSelector,volumes:t.spec.volumes,conditions:t.status.conditions};p["containerNum"]=p.containers.length,p.init_containers&&(p["containerNum"]+=p.init_containers.length),p["restarts"]=0;var h,v=Object(r["a"])(p.containers);try{for(v.s();!(h=v.n()).done;){var g=h.value;g.restarts>p["restarts"]&&(p["restarts"]=g.restarts)}}catch(b){v.e(b)}finally{v.f()}return p}},f6bf:function(t,e,n){}}]);