(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{165:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"常用框架面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用框架面试题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常用框架面试题")]),t._v(" "),a("h2",{attrs:{id:"react-vue-使用感受？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-vue-使用感受？","aria-hidden":"true"}},[t._v("#")]),t._v(" React Vue 使用感受？")]),t._v(" "),a("p",[t._v("遇到这个问题，我也是楞了一下，要是之前能稍微总结一下就能回答得更好。")]),t._v(" "),a("p",[t._v("相同点：")]),t._v(" "),a("ol",[a("li",[t._v("虚拟 DOM")]),t._v(" "),a("li",[t._v("组件化")]),t._v(" "),a("li",[t._v("保持对视图的关注")]),t._v(" "),a("li",[t._v("数据驱动视图")]),t._v(" "),a("li",[t._v("都有支持 native 的方案")])]),t._v(" "),a("p",[t._v("不同点：")]),t._v(" "),a("ol",[a("li",[t._v("state 状态管理 vs 对象属性 get，set")]),t._v(" "),a("li",[t._v("vue 实现了数据的双向绑定 v-model,而组件之间的 props 传递是单向的，react 数据流动是单向的。")])]),t._v(" "),a("h3",{attrs:{id:"运行时优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行时优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行时优化")]),t._v(" "),a("p",[t._v("在 React 应用中，当某个组件的状态发生变化时，它会以该组件为根，重新渲染整个组件子树，开发者不得不手动使用 shouldComponentUpdate 去优化性能。")]),t._v(" "),a("p",[t._v("在 Vue 组件的依赖是在渲染过程中自动追踪的，开发者不再需要考虑此类优化。另外 Vue 还做了很多其他方面的优化，例如：标记静态节点，优化静态循环等。")]),t._v(" "),a("blockquote",[a("p",[t._v("总结：Vue 在运行时帮我们做了很多优化了处理，开发者可以直接上手，React 则是由开发者自己去处理优化，让程序有更多的定制化。")])]),t._v(" "),a("h3",{attrs:{id:"jsx-vs-templates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsx-vs-templates","aria-hidden":"true"}},[t._v("#")]),t._v(" JSX vs Templates")]),t._v(" "),a("p",[t._v("JSX 中你可以使用完整的编程语言 JavaScript 功能来构建你的视图页面。比如你可以使用临时变量、JS 自带的流程控制、以及直接引用当前 JS 作用域中的值等等。")]),t._v(" "),a("p",[t._v("Templates 对于很多习惯了 HTML 的开发者来说，模板比起 JSX 读写起来更自然。基于 HTML 的模板使得将已有的应用逐步迁移到 Vue 更为容易。你甚至可以使用其他模板预处理器，比如 Pug 来书写 Vue 的模板。")]),t._v(" "),a("blockquote",[a("p",[t._v("总结：Vue 在模板上实现定制化，可以使用类 HTML 模板，以及可以使用 JSX，React 则是推荐 JSX。")])]),t._v(" "),a("h3",{attrs:{id:"生态圈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生态圈","aria-hidden":"true"}},[t._v("#")]),t._v(" 生态圈")]),t._v(" "),a("p",[t._v("Vue 的路由库和状态管理库都是由官方维护支持且与核心库同步更新的。")]),t._v(" "),a("p",[t._v("React 的路由库和状态管理库是由社区维护，因此创建了一个更分散的生态系统。React 的生态系统相比 Vue 更加繁荣。")]),t._v(" "),a("h2",{attrs:{id:"单向数据流和双向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流和双向数据流","aria-hidden":"true"}},[t._v("#")]),t._v(" 单向数据流和双向数据流")]),t._v(" "),a("h3",{attrs:{id:"单向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单向数据流","aria-hidden":"true"}},[t._v("#")]),t._v(" 单向数据流")]),t._v(" "),a("ol",[a("li",[t._v("所有状态的改变可记录、可跟踪，源头易追溯;")]),t._v(" "),a("li",[t._v("所有数据只有一份，组件数据只有唯一的入口和出口，使得程序更直观更容易理解，有利于应用的可维护性;")]),t._v(" "),a("li",[t._v("一旦数据变化，就去更新页面(data-页面)，没有(页面-data);")]),t._v(" "),a("li",[t._v("如果用户在页面上做了变动，需要手动更新数据。")])]),t._v(" "),a("p",[t._v("双向绑定 = 单向绑定 + UI 事件监听")]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ol",[a("li",[t._v("HTML 代码渲染完成，无法改变，新数据到来时，就会整合新数据和模板重新渲染。")]),t._v(" "),a("li",[t._v("代码量上升，数据流转过程变长，需要进行统一的数据流管理，例如：redux。")])]),t._v(" "),a("h3",{attrs:{id:"双向数据流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向数据流","aria-hidden":"true"}},[t._v("#")]),t._v(" 双向数据流")]),t._v(" "),a("ol",[a("li",[t._v("用户在视图上的修改会自动同步到数据模型中去，数据模型中值的变化也会立刻同步到视图中去。")]),t._v(" "),a("li",[t._v("在表单交互较多的场景下，会简化大量业务无关的代码。")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ol",[a("li",[t._v("无法追踪局部状态的变化。")]),t._v(" "),a("li",[t._v("“暗箱操作”，增加了出错时 debug 的难度。")]),t._v(" "),a("li",[t._v("由于组件数据变化来源入口变得不止一个，数据流转方向易混乱，如果不加以控制，容易出错。")])]),t._v(" "),a("h2",{attrs:{id:"react-优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-优点","aria-hidden":"true"}},[t._v("#")]),t._v(" React 优点")]),t._v(" "),a("ol",[a("li",[t._v("函数式编程思想，无状态组件，同样的 prop 对应同样的输出。")]),t._v(" "),a("li",[t._v("虚拟 dom，firber，底层优化，提高渲染效率。")]),t._v(" "),a("li",[t._v("模块化思想，复用性更强。")]),t._v(" "),a("li",[t._v("单向数据流，让事情一目了然。")]),t._v(" "),a("li",[t._v("以 JS 为中心，使用 JSX 开发页面，CSS In JS 书写样式。")]),t._v(" "),a("li",[t._v("支持服务器端渲染。")]),t._v(" "),a("li",[t._v("一套代码多端运行。")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ol",[a("li",[t._v("只是视图层，构建大型项目的话，需要引入 Redux 和 React-Router 等相关的东西。")]),t._v(" "),a("li",[t._v("不好控制 DOM")])]),t._v(" "),a("h2",{attrs:{id:"vue-优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-优点","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 优点")]),t._v(" "),a("ol",[a("li",[t._v("类 HTML 模板语法，更容易上手。")]),t._v(" "),a("li",[t._v("模块化思想，复用性强。")]),t._v(" "),a("li",[t._v("虚拟 dom，运行时优化，提高渲染效率。")]),t._v(" "),a("li",[t._v("支持双向数据绑定，易用性强。")]),t._v(" "),a("li",[t._v("支持服务器端渲染。")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ol",[a("li",[t._v("社区不如 react，大多是中国开发者。")]),t._v(" "),a("li",[t._v("生态圈不够，vue 全家桶都是 vue 官方自己出的东西。")])]),t._v(" "),a("h2",{attrs:{id:"webpack-插件怎么编写？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-插件怎么编写？","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack 插件怎么编写？")]),t._v(" "),a("p",[t._v("webpack 就像是一条生产线，要经过一系列流程处理之后才能将源文件转换成输出结果。")]),t._v(" "),a("p",[t._v("webpack plugin 实质就是一个类，在被创建的时候，会监听 webpack 生产线上的事件，然后加入生产线中，改变生产线输出。")]),t._v(" "),a("p",[t._v("webpack 启动后，会读取配置中的plugins，并创建对应实例，在webpack初始化compiler对象之后，再调用plugin中的aplpy方法，把compiler注入到插件中。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("HelloAsyncPlugin")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("compiler"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// tapAsync() 基于回调(callback-based)")]),t._v("\n    compiler"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tapAsync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"HelloAsyncPlugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      compilation"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      callback\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Done with async work..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// tapPromise() 基于 promise(promise-based)")]),t._v("\n    compiler"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tapPromise")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"HelloAsyncPlugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" compilation "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("doSomethingAsync")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Done with async work..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 原先基本的 tap() 也在这里列出：")]),t._v("\n    compiler"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hooks"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emit"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tap")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"HelloAsyncPlugin"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 这里没有异步任务")]),t._v("\n      console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Done with sync work..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" HelloAsyncPlugin"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"webpack-loader-编写？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-loader-编写？","aria-hidden":"true"}},[t._v("#")]),t._v(" webpack loader 编写？")]),t._v(" "),a("p",[t._v("webpack loader 实质就是一个"),a("code",[t._v("function")]),t._v("，function 中会被注入需要被处理的资源，然后加以处理。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getOptions "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"loader-utils"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" validateOptions "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"schema-utils"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" schema "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"object"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  properties"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    test"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("getOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token function"}},[t._v("validateOptions")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("schema"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Example Loader"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// 对资源应用一些转换……")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`export default ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("stringify")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="framework.md";s.default=o.exports}}]);