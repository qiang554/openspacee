(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db570e06"],{"0905":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return l}));var o=a("b775");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",s={};return e&&(s["uid"]=e),a&&(s["kind"]=a),l&&(s["namespace"]=l),n&&(s["name"]=n),Object(o["a"])({url:"event/".concat(t),method:"get",params:s})}function l(t){if(t){var e=t.lastTimestamp;return e||(e=t.firstTimestamp),e||(e=t.metadata.creationTimestamp),{uid:t.metadata.uid,namespace:t.metadata.namespace,count:t.spec?t.spec.count:1,reason:t.reason,message:t.message,type:t.type,object:t.involvedObject,source:t.source,event_time:e,resource_version:t.metadata.resourceVersion}}}},1148:function(t,e,a){"use strict";var o=a("a691"),n=a("1d80");t.exports="".repeat||function(t){var e=String(n(this)),a="",l=o(t);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(e+=e))1&l&&(a+=e);return a}},"1b1e":function(t,e,a){"use strict";var o=a("21a2"),n=a.n(o);n.a},"21a2":function(t,e,a){},"408a":function(t,e,a){var o=a("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},a5bf:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("clusterbar",{attrs:{titleName:t.titleName,editFunc:t.getNodeYaml}}),t.node?a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"dashboard-container"},[a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"120px"}},[a("el-form-item",{attrs:{label:"名称"}},[a("span",[t._v(t._s(t.node.metadata.name))])]),a("el-form-item",{attrs:{label:"创建时间"}},[a("span",[t._v(t._s(t.node.metadata.creationTimestamp))])]),a("el-form-item",{attrs:{label:"IP地址"}},[a("span",[t._v(t._s(t.nodeInternalIp(t.node)))])]),a("el-form-item",{attrs:{label:"版本"}},[a("span",[t._v(t._s(t.node.status.nodeInfo.kubeletVersion))])]),a("el-form-item",{attrs:{label:"操作系统"}},[a("span",[t._v(t._s(t.node.status.nodeInfo.osImage))])]),a("el-form-item",{attrs:{label:"容器运行时"}},[a("span",[t._v(t._s(t.node.status.nodeInfo.containerRuntimeVersion))])])],1),a("el-tabs",{staticStyle:{padding:"0px 8px"},attrs:{value:"conditions"}},[a("el-tab-pane",{attrs:{label:"状态",name:"conditions"}},[a("div",{staticClass:"msgClass"},[t.node.status.conditions&&t.node.status.conditions.length>0?a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.node.status.conditions,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"lastProbeTime"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"30","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"20","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.reason?e.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.message?e.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{label:"触发时间","min-width":"40","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.lastProbeTime?e.row.lastProbeTime:e.row.lastTransitionTime)+" ")])]}}],null,!1,2572631955)})],1):a("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[t._v("暂无数据")])],1)]),a("el-tab-pane",{attrs:{label:"地址",name:"addresses"}},[a("div",{staticClass:"msgClass"},[a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.node.status.addresses,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"address",label:"地址","min-width":"","show-overflow-tooltip":""}})],1)],1)]),a("el-tab-pane",{attrs:{label:"信息",name:"nodeInfo"}},[a("div",{staticClass:"msgClass"},[a("el-form",{staticClass:"pod-item",attrs:{"label-position":"left","label-width":"180px"}},[t._l(t.node.status.nodeInfo,(function(e,o){return[a("el-form-item",{key:o,attrs:{label:o}},[a("span",[t._v(t._s(e))])])]}))],2)],1)]),a("el-tab-pane",{attrs:{label:"污点",name:"taints"}},[a("div",{staticClass:"msgClass"},[a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.node.spec.taints,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"key",label:"键","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"value",label:"值","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"effect",label:"影响","min-width":"25","show-overflow-tooltip":""}})],1)],1)]),a("el-tab-pane",{attrs:{label:"镜像",name:"images"}},[a("div",{staticClass:"msgClass"},[a("el-table",{staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.node.status.images,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"names",label:"名称","min-width":"","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.names,(function(e){return a("div",{key:e},[t._v(" "+t._s(e)+" ")])}))}}],null,!1,1647074042)}),a("el-table-column",{attrs:{prop:"sizeBytes",label:"大小","min-width":"15","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.sizeStr(e.row.sizeBytes)))])]}}],null,!1,2412001963)})],1)],1)]),a("el-tab-pane",{attrs:{label:"事件",name:"events"}},[a("div",{staticClass:"msgClass"},[t.nodeEvents&&t.nodeEvents.length>0?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.eventLoading,expression:"eventLoading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:t.nodeEvents,"tooltip-effect":"dark","cell-style":t.cellStyle,"default-sort":{prop:"event_time",order:"descending"}}},[a("el-table-column",{attrs:{prop:"type",label:"类型","min-width":"25","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"object",label:"对象","min-width":"55","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.object.kind)+"/"+t._s(e.row.object.name)+" ")])]}}],null,!1,1803908363)}),a("el-table-column",{attrs:{prop:"reason",label:"原因","min-width":"50","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.reason?e.row.reason:"—")+" ")])]}}],null,!1,548534711)}),a("el-table-column",{attrs:{prop:"message",label:"信息","min-width":"120","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(" "+t._s(e.row.message?e.row.message:"—")+" ")])]}}],null,!1,2501580055)}),a("el-table-column",{attrs:{prop:"event_time",label:"触发时间","min-width":"50","show-overflow-tooltip":""}})],1):a("div",{staticStyle:{padding:"25px 15px",color:"#909399","text-align":"center"}},[t._v("暂无事件发生")])],1)])],1),a("el-dialog",{attrs:{title:"编辑",visible:t.yamlDialog,"close-on-click-modal":!1,width:"60%",top:"55px"},on:{"update:visible":function(e){t.yamlDialog=e}}},[t.yamlDialog?a("yaml",{attrs:{loading:t.yamlLoading},model:{value:t.yamlValue,callback:function(e){t.yamlValue=e},expression:"yamlValue"}}):t._e(),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{plain:"",size:"small"},on:{click:function(e){t.yamlDialog=!1}}},[t._v("取 消")]),a("el-button",{attrs:{plain:"",size:"small"},on:{click:t.updateNode}},[t._v("确 定")])],1)],1)],1):t._e()],1)},n=[],l=(a("b680"),a("b85c")),s=a("61b2"),i=a("84ed"),r=a("0905"),d=a("5c96"),c={name:"nodeDetail",components:{Clusterbar:s["a"],Yaml:s["f"]},data:function(){return{yamlDialog:!1,yamlValue:"",yamlLoading:!0,cellStyle:{border:0},loading:!0,originNode:{},selectContainer:"",eventLoading:!0,nodeEvents:[]}},created:function(){this.fetchData()},watch:{},computed:{titleName:function(){return["Node",this.nodeName]},nodeName:function(){return this.$route.params?this.$route.params.nodeName:""},cluster:function(){return this.$store.state.cluster},node:function(){return console.log(this.originNode),this.originNode}},methods:{fetchData:function(){var t=this;this.originNode={},this.loading=!0;var e=this.$store.state.cluster;return e?this.nodeName?void Object(i["b"])(e,this.nodeName).then((function(a){t.loading=!1,t.originNode=a.data,Object(r["b"])(e,t.originNode.metadata.uid).then((function(e){t.eventLoading=!1,e.data&&(t.nodeEvents=e.data.length>0?e.data:[])})).catch((function(){t.eventLoading=!1}))})).catch((function(){t.loading=!1})):(d["Message"].error("获取node名称参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1)):(d["Message"].error("获取集群参数异常，请刷新重试"),this.loading=!1,void(this.eventLoading=!1))},getNodeYaml:function(){var t=this;if(this.nodeName){var e=this.$store.state.cluster;e?(this.yamlValue="",this.yamlDialog=!0,this.yamlLoading=!0,Object(i["b"])(e,this.nodeName,"yaml").then((function(e){t.yamlLoading=!1,t.yamlValue=e.data})).catch((function(){t.yamlLoading=!1}))):d["Message"].error("获取集群参数异常，请刷新重试")}else d["Message"].error("获取node参数异常，请刷新重试")},updateNode:function(){if(this.node){var t=this.$store.state.cluster;t?Object(i["d"])(t,this.nodeName,this.yamlValue).then((function(){d["Message"].success("更新成功")})).catch((function(){})):d["Message"].error("获取集群参数异常，请刷新重试")}else d["Message"].error("获取node参数异常，请刷新重试")},nodeInternalIp:function(t){var e,a=Object(l["a"])(t.status.addresses);try{for(a.s();!(e=a.n()).done;){var o=e.value;if("InternalIP"==o.type)return o.address}}catch(n){a.e(n)}finally{a.f()}return""},sizeStr:function(t){var e=t;return e/1024<1?t+"B":(e/=1024,e/1024<1?e.toFixed(2)+"KB":(e/=1024,e.toFixed(2)+"MB"))}}},u=c,m=(a("1b1e"),a("ca5a"),a("2877")),f=Object(m["a"])(u,o,n,!1,null,"88b72e6c",null);e["default"]=f.exports},b680:function(t,e,a){"use strict";var o=a("23e7"),n=a("a691"),l=a("408a"),s=a("1148"),i=a("d039"),r=1..toFixed,d=Math.floor,c=function(t,e,a){return 0===e?a:e%2===1?c(t,e-1,a*t):c(t*t,e/2,a)},u=function(t){var e=0,a=t;while(a>=4096)e+=12,a/=4096;while(a>=2)e+=1,a/=2;return e},m=r&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i((function(){r.call({})}));o({target:"Number",proto:!0,forced:m},{toFixed:function(t){var e,a,o,i,r=l(this),m=n(t),f=[0,0,0,0,0,0],p="",b="0",v=function(t,e){var a=-1,o=e;while(++a<6)o+=t*f[a],f[a]=o%1e7,o=d(o/1e7)},h=function(t){var e=6,a=0;while(--e>=0)a+=f[e],f[e]=d(a/t),a=a%t*1e7},g=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==f[t]){var a=String(f[t]);e=""===e?a:e+s.call("0",7-a.length)+a}return e};if(m<0||m>20)throw RangeError("Incorrect fraction digits");if(r!=r)return"NaN";if(r<=-1e21||r>=1e21)return String(r);if(r<0&&(p="-",r=-r),r>1e-21)if(e=u(r*c(2,69,1))-69,a=e<0?r*c(2,-e,1):r/c(2,e,1),a*=4503599627370496,e=52-e,e>0){v(0,a),o=m;while(o>=7)v(1e7,0),o-=7;v(c(10,o,1),0),o=e-1;while(o>=23)h(1<<23),o-=23;h(1<<o),v(1,1),h(2),b=g()}else v(0,a),v(1<<-e,0),b=g()+s.call("0",m);return m>0?(i=b.length,b=p+(i<=m?"0."+s.call("0",m-i)+b:b.slice(0,i-m)+"."+b.slice(i-m))):b=p+b,b}})},c628:function(t,e,a){},ca5a:function(t,e,a){"use strict";var o=a("c628"),n=a.n(o);n.a}}]);