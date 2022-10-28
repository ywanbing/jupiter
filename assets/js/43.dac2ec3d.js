(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{369:function(_,v,a){"use strict";a.r(v);var t=a(10),e=Object(t.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"_2-1-资源中心介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-资源中心介绍"}},[_._v("#")]),_._v(" 2.1 资源中心介绍")]),_._v(" "),v("h2",{attrs:{id:"_2-1-1-概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-概念"}},[_._v("#")]),_._v(" 2.1.1 概念")]),_._v(" "),v("p",[_._v("资源是微服务的基础。为了更好的管理微服务的资源，"),v("code",[_._v("juno")]),_._v("会将所有的资源数据进行管理。我们将资源分为三大类，应用、机房、节点。")]),_._v(" "),v("h3",{attrs:{id:"_2-1-1-1-应用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-1-应用"}},[_._v("#")]),_._v(" 2.1.1.1 应用")]),_._v(" "),v("p",[_._v("我们定义了应用名称"),v("code",[_._v("app_name")]),_._v("和应用ID"),v("code",[_._v("aid")]),_._v("作为唯一值，确定一个应用。我们可以通过这些数据查询应用。")]),_._v(" "),v("h3",{attrs:{id:"_2-1-1-2-机房"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-2-机房"}},[_._v("#")]),_._v(" 2.1.1.2 机房")]),_._v(" "),v("p",[_._v("我们定义了地区"),v("code",[_._v("Region")]),_._v("、可用区"),v("code",[_._v("Zone")]),_._v("、环境"),v("code",[_._v("Env")]),_._v("，三个值作为唯一值，确定一个机房信息。")]),_._v(" "),v("h3",{attrs:{id:"_2-1-1-3-节点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-3-节点"}},[_._v("#")]),_._v(" 2.1.1.3 节点")]),_._v(" "),v("p",[_._v("我们定义了节点名称"),v("code",[_._v("host_name")]),_._v("和节点ID"),v("code",[_._v("node_id")]),_._v("作为唯一值，确定一个节点。")]),_._v(" "),v("h2",{attrs:{id:"_2-1-2-管理资源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-管理资源"}},[_._v("#")]),_._v(" 2.1.2 管理资源")]),_._v(" "),v("h3",{attrs:{id:"_2-1-2-1-自发现方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-1-自发现方式"}},[_._v("#")]),_._v(" 2.1.2.1 自发现方式")]),_._v(" "),v("p",[_._v("我们可以将"),v("code",[_._v("agent")]),_._v("部署到节点上。"),v("code",[_._v("agent")]),_._v("会读取节点上环境变量里的节点和机房信息上报给"),v("code",[_._v("juno")]),_._v("。")]),_._v(" "),v("p",[v("code",[_._v("juno")]),_._v("拿到节点和机房信息后，会将节点和机房信息写入到"),v("code",[_._v("MySQL")]),_._v("中。")]),_._v(" "),v("h3",{attrs:{id:"_2-1-2-2-接口方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-2-接口方式"}},[_._v("#")]),_._v(" 2.1.2.2 接口方式")]),_._v(" "),v("p",[_._v("我们可以将"),v("code",[_._v("agent")]),_._v("关闭上报的资源信息，"),v("code",[_._v("agent")]),_._v("这个时候只会上报心跳数据。")]),_._v(" "),v("p",[_._v("我们能够根据自己的"),v("code",[_._v("CMDB")]),_._v("系统，将机房、节点信息，通过调用"),v("code",[_._v("juno")]),_._v("的接口，写入到系统里。")]),_._v(" "),v("h3",{attrs:{id:"_2-1-2-3-后台方式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-3-后台方式"}},[_._v("#")]),_._v(" 2.1.2.3 后台方式")]),_._v(" "),v("p",[_._v("我们可以将"),v("code",[_._v("agent")]),_._v("关闭上报的资源信息，"),v("code",[_._v("agent")]),_._v("这个时候只会上报心跳数据。")]),_._v(" "),v("p",[_._v("我们能够自己在后台，创建和更改这些资源数据")]),_._v(" "),v("p",[_._v("通过以上三种方式，管理员可以创建应用后，将节点分配给应用。这样应用就可以进行发布、配置和治理了。")])])}),[],!1,null,null,null);v.default=e.exports}}]);