(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ec6a07e"],{"753c":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("clusterbar",{attrs:{titleName:e.titleName,nameFunc:e.nameSearch,createFunc:e.createClusterDialog,createDisplay:"添加集群"}}),n("div",{ref:"tableCot",staticClass:"dashboard-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"table-fix",staticStyle:{width:"100%"},attrs:{data:e.clusters,"tooltip-effect":"dark","max-height":e.maxHeight,"cell-style":e.cellStyle,"default-sort":{prop:"name"},"row-key":"name"}},[n("el-table-column",{attrs:{prop:"name",label:"名称","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"create_time",label:"创建时间","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"34%","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{style:{color:"Connect"===t.row.status?"#409EFF":"#F56C6C"}},[e._v(" "+e._s(t.row.status)+" "),"Connect"===t.row.status?[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"correct"}})]:[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"wrong"}})]],2)]}}])}),n("el-table-column",{attrs:{label:"",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-dropdown",{attrs:{size:"medium"}},[n("el-link",{attrs:{underline:!1}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em"},attrs:{"icon-class":"operate"}})],1),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.$updatePerm()?["Pending"===t.row.status?n("el-dropdown-item",{nativeOn:{click:function(n){n.preventDefault(),e.clusterConnectToken=t.row.token,e.clusterConnectDialog=!0}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"link"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("连接")])],1):e._e()]:e._e(),e.$updatePerm()?n("el-dropdown-item",{nativeOn:{click:function(n){n.preventDefault(),e.createClusterFormVisible=!0,e.inviteForm=!0,e.form={name:t.row.name,members:t.row.members}}}},[n("svg-icon",{staticStyle:{width:"1.2em",height:"1.2em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"invite"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("邀请")])],1):e._e(),e.$deletePerm()?n("el-dropdown-item",{nativeOn:{click:function(n){return n.preventDefault(),e.deleteClusters([{name:t.row.name}])}}},[n("svg-icon",{staticStyle:{width:"1.3em",height:"1.3em","line-height":"40px","vertical-align":"-0.25em"},attrs:{"icon-class":"delete"}}),n("span",{staticStyle:{"margin-left":"5px"}},[e._v("删除")])],1):e._e()],2)],1)]}}])})],1)],1),n("div",[n("el-dialog",{attrs:{title:e.inviteForm?"邀请用户":"创建集群",visible:e.createClusterFormVisible,"close-on-click-modal":!1,"destroy-on-close":!0},on:{"update:visible":function(t){e.createClusterFormVisible=t},close:function(t){e.form={name:"",members:[]},e.inviteForm=!1}}},[n("el-form",{attrs:{model:e.form}},[n("el-form-item",{attrs:{label:"集群名称"}},[n("el-input",{attrs:{disabled:e.inviteForm,autocomplete:"off",placeholder:"请输入集群名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"邀请"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{multiple:"",filterable:"",placeholder:"请选择要邀请的用户"},model:{value:e.form.members,callback:function(t){e.$set(e.form,"members",t)},expression:"form.members"}},e._l(e.users,(function(e){return n("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})})),1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.createClusterFormVisible=!1,e.form={name:"",members:[]},e.inviteForm=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.inviteForm?e.handleClusterMembers():e.handleCreateCluster()}}},[e._v("确 定")])],1)],1)],1),n("el-dialog",{attrs:{title:"集群导入",visible:e.clusterConnectDialog,"close-on-click-modal":!1},on:{"update:visible":function(t){e.clusterConnectDialog=t}}},[n("div",{staticStyle:{"font-size":"15px"}},[e._v("请在现有Kubernetes集群上运行下面的kubeclt命令，以连接OpenSpace平台：")]),n("div",{staticStyle:{"margin-top":"15px"}},[n("el-tag",{staticStyle:{"font-size":"14px","border-radius":"4px"},attrs:{type:"info"}},[e._v(" "+e._s(e.copyCluster)+" ")])],1),n("div",{staticStyle:{"font-size":"13px","margin-top":"8px",color:"#e6a23c"}},[e._v(" *注意：请将上述访问地址"+e._s(this.locationAddr)+"换为Kubernetes集群可以访问的地址。 ")]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.clusterConnectDialog=!1}}},[e._v("确 定")])],1)])],1)},o=[],s=(n("99af"),n("4de4"),n("b0c0"),n("61b2")),a=n("7ea2"),r=n("c24f"),l=n("5c96"),c={name:"SettingsCluster",components:{Clusterbar:s["a"]},data:function(){return{titleName:["Clusters"],search_name:"",users:[],cellStyle:{border:0},maxHeight:window.innerHeight-150,loading:!0,clusters:[],createClusterFormVisible:!1,inviteForm:!1,clusterConnectDialog:!1,clusterConnectToken:"",form:{name:"",members:[]},locationAddr:window.location.origin}},created:function(){this.fetchData(),this.fetchUsers()},mounted:function(){var e=this;window.onresize=function(){return function(){var t=window.innerHeight-150;console.log(t),e.maxHeight=t}()}},watch:{clusterWatch:function(e){if(e){var t=e.resource.name;if("add"===e.event)this.clusters.push(e.resource);else if("update"===e.event)for(var n in this.clusters){var i=this.clusters[n];if(i.name===t){this.$set(this.clusters,n,e.resource);break}}else"delete"===e.event&&(this.clusters=this.clusters.filter((function(e){var n=e.name;return n!==t})))}}},computed:{copyCluster:function(){return"curl -sk ".concat(this.locationAddr,"/v1/import/").concat(this.clusterConnectToken," | kubectl apply -f -")},clusterWatch:function(){return this.$store.getters["ws/globalClusterWatch"]}},methods:{fetchData:function(){var e=this;this.loading=!0,Object(a["g"])().then((function(t){e.loading=!1,e.clusters=t.data||[]})).catch((function(){e.loading=!1}))},fetchUsers:function(){var e=this;Object(r["e"])({}).then((function(t){e.users=t.data}))},nameSearch:function(e){this.search_name=e},createClusterDialog:function(){this.createClusterFormVisible=!0},handleCreateCluster:function(){var e=this;this.form.name?Object(a["d"])(this.form).then((function(t){l["Message"].success("集群添加成功"),e.createClusterFormVisible=!1,e.loading=!1,e.fetchData(),e.clusterConnectToken=t.data.token,e.clusterConnectDialog=!0})).catch((function(){e.loading=!1})):l["Message"].error("集群名称不能为空！")},handleClusterMembers:function(){var e=this;this.form.name?Object(a["c"])(this.form).then((function(t){l["Message"].success("邀请用户成功"),e.createClusterFormVisible=!1,e.inviteForm=!1,e.loading=!1,e.fetchData()})).catch((function(){e.loading=!1})):l["Message"].error("集群名称不能为空！")},deleteClusters:function(e){var t=this;e.length<=0?l["Message"].error("请选择要删除的集群"):Object(a["f"])(e).then((function(e){t.fetchData()})).catch((function(e){console.log(e)}))},onCopy:function(e){l["Message"].success("复制成功")},onError:function(e){}}},u=c,m=(n("f757"),n("2877")),f=Object(m["a"])(u,i,o,!1,null,"f008b098",null);t["default"]=f.exports},dc60:function(e,t,n){},f757:function(e,t,n){"use strict";var i=n("dc60"),o=n.n(i);o.a}}]);