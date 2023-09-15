(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{411:function(s,t,a){"use strict";a.r(t);var n=a(10),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_9-5-应用配置解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-应用配置解析"}},[s._v("#")]),s._v(" 9.5 应用配置解析")]),s._v(" "),t("p",[s._v("配置是微服务治理里最重要的环节之一。但现在的行业内，大部分都只做到配置的下发，而没有梳理配置的关系，依赖配置的探活。\n因此本文主要介绍以上的配置治理。")]),s._v(" "),t("h2",{attrs:{id:"_9-5-1-用户配置玩法多样性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-1-用户配置玩法多样性"}},[s._v("#")]),s._v(" 9.5.1 用户配置玩法多样性")]),s._v(" "),t("p",[s._v("因为用户的配置的格式是多种多样，我们需要用户自己设置的配置模板，来解析对应的配置。以下举一个例子\n例如一个用户的MySQL配置可能存在如下三种配置方式。")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("mysqlconfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("addr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip:port"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("mysqlconfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"port"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("mysqlconfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dsn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user:password@ip:port"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在我们不清楚用户配置的字段情况下，我们是无法将这些配置解析出来。所以我们必须设计一种方式，能够让我们的"),t("code",[s._v("Juno agent")]),s._v("能够准确理解用户的这些配置。")]),s._v(" "),t("h2",{attrs:{id:"_9-5-2-配置模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-2-配置模板"}},[s._v("#")]),s._v(" 9.5.2 配置模板")]),s._v(" "),t("p",[s._v("为了适应用户不同配置方式，所以我们首先需要引入模板的概念。\n我们要将用户不同的配置方式，配置成一个解析模板，将这种模板存入到数据库中，将其标记为一种类型，我们把这种类型称之为"),t("code",[s._v("JunoTpl")]),s._v("，那么我们可以把上面的三种mysql配置方式，可以将配置设置为"),t("code",[s._v("JunoTpl")]),s._v("=1，"),t("code",[s._v("JunoTpl")]),s._v("=2，"),t("code",[s._v("JunoTpl")]),s._v("=3，这样我们就可以去类型去解析不同的配置方式。")]),s._v(" "),t("h2",{attrs:{id:"_9-5-3-配置基础结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-3-配置基础结构"}},[s._v("#")]),s._v(" 9.5.3 配置基础结构")]),s._v(" "),t("p",[s._v("但这样只是解决了配置的方式，但是我们的"),t("code",[s._v("Juno agent")]),s._v("还是无法理解模板里的字段类型，这个字段是将起解析为ip，还是port，还是dsn，我们需要一个基础结构去识别。\n在这里"),t("code",[s._v("Juno agent")]),s._v("规范了基本的几个基础结构，定义如下：")]),s._v(" "),t("ul",[t("li",[s._v("$SCHEME")]),s._v(" "),t("li",[s._v("$IP")]),s._v(" "),t("li",[s._v("$PORT")]),s._v(" "),t("li",[s._v("$DSN")]),s._v(" "),t("li",[s._v("$USERNAME")]),s._v(" "),t("li",[s._v("$PASSWORD")])]),s._v(" "),t("h2",{attrs:{id:"_9-5-4-配置类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-4-配置类型"}},[s._v("#")]),s._v(" 9.5.4 配置类型")]),s._v(" "),t("p",[t("code",[s._v("Juno agent")]),s._v("可以通过模板和基础结构，很好的解析出配置。但是他仍然不知道这个配置类型，因为配置解析出来，他可以是MySQL，也可能是Redis，我们还需要识别配置的类型。这样的好处，是为了根据不同类型，去做该类型的探活，这样效果更准确。（例如MySQL，如果只做接口探活，那么有可能你可以访问端口，但你该机器其实是没有访问权限。而"),t("code",[s._v("Juno agent")]),s._v("用MySQL客户端方式访问，就可以提前知道你的应用[agent和你的应用同机部署]部署的机器是否有该MySQL权限）。")]),s._v(" "),t("p",[s._v("目前"),t("code",[s._v("Juno agent")]),s._v("支持以下类型")]),s._v(" "),t("ul",[t("li",[s._v("$MYSQL")]),s._v(" "),t("li",[s._v("$REDIS")]),s._v(" "),t("li",[s._v("$GRPC")])]),s._v(" "),t("p",[s._v("后续会支持更多类型")]),s._v(" "),t("h2",{attrs:{id:"_9-5-5-配置结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-配置结构"}},[s._v("#")]),s._v(" 9.5.5 配置结构")]),s._v(" "),t("p",[s._v("根据上述的介绍，我们的"),t("code",[s._v("Juno agent")]),s._v("可以将之前多样性的而用户配置完全解析。")]),s._v(" "),t("h3",{attrs:{id:"_9-5-5-1-第一种配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-1-第一种配置"}},[s._v("#")]),s._v(" 9.5.5.1 第一种配置")]),s._v(" "),t("p",[s._v("我们在用户端的配置的表现形式将是")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("mysqlconfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("addr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip:port"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JunoTpl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("我们在后台配置JunoTpl为1的模板内容以下所示，该数据存储在ETCD中。\nkeyname为/Juno-agent/configtpl/1\nvalue如下所示")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("addr")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $IP:$PORT\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $USERNAME\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $PASSWORD\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JunoType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $MYSQL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_9-5-5-2-第二种配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-2-第二种配置"}},[s._v("#")]),s._v(" 9.5.5.2 第二种配置")]),s._v(" "),t("p",[s._v("我们在用户端的配置的表现形式将是")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("mysqlconfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ip"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"port"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"world"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JunoTpl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("我们在后台配置JunoTpl为2的模板内容以下所示，该数据存储在ETCD中。\nkeyname为/Juno-agent/configtpl/2\nvalue如下所示")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("ip")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $IP\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("port")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $PORT\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("user")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $USERNAME\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("password")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $PASSWORD\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JunoType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v("  $MYSQL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"_9-5-5-3-第三种配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-5-3-第三种配置"}},[s._v("#")]),s._v(" 9.5.5.3 第三种配置")]),s._v(" "),t("p",[s._v("我们在用户端的配置的表现形式将是")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("mysqlconfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dsn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user:password@ip:port"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JunoTpl")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("我们在后台配置JunoTpl为3的模板内容以下所示，该数据存储在ETCD中。\nkeyname为/Juno-agent/configtpl/3\nvalue如下所示")]),s._v(" "),t("div",{staticClass:"language-toml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-toml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("dsn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $DSN\n"),t("span",{pre:!0,attrs:{class:"token key property"}},[s._v("JunoType")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" $MYSQL\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);