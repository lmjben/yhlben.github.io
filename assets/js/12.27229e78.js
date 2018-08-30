(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{189:function(t,s,a){"use strict";a.r(s);var e=a(0),i=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("文档模式：混杂模式和标准模式，主要影响 css 内容的呈现，在某些情况下也会影响 js 的执行。不同浏览器的怪异模式差别非常大。")]),t._v(" "),a("p",[t._v("在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。")]),t._v(" "),a("p",[t._v("HTML5 不基于 SGML，所以不需要引用 DTD。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("不可替换元素：其内容直接表现给浏览器。")]),t._v(" "),a("p",[t._v("例如：div 中的内容可以直接显示。")]),t._v(" "),t._m(5),a("p",[t._v("替换元素：没有实际的内容，需根据元素的标签和属性，来决定元素的具体显示内容。")]),t._v(" "),a("p",[t._v("例如浏览器会根据 img 标签的 src 属性的值来读取图片信息并显示出来，这些元素往往没有实际的内容，即是一个空元素。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("clientWidth：元素的 width + padding")]),t._v(" "),a("p",[t._v("offsetWidth：元素的 width + padding + border")]),t._v(" "),a("p",[t._v("scrollWidth：")]),t._v(" "),t._m(8),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/yhlben/pen/WgowLz",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试 offsetWidth，clientWidth，scrollWidth"),a("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("id 选择器权重： 0100")]),t._v(" "),a("p",[t._v("类选择器，属性选择器，伪类选择器权重： 0010")]),t._v(" "),a("p",[t._v("元素选择器，伪元素选择器权重 0001")]),t._v(" "),a("p",[t._v("统配选择器 *")]),t._v(" "),a("p",[t._v("受多个 css 规则影响时，会计算一个元素上的选择器权重，权重大的选择器优先。")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("跨域，因为域名不同。")]),t._v(" "),a("p",[t._v("服务器端可以接收到请求。")]),t._v(" "),a("p",[t._v("待调试。")]),t._v(" "),t._m(11),t._v(" "),a("p",[a("router-link",{attrs:{to:"./fontend-security.html"}},[t._v("参考链接")])],1),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("1、解释一下什么是 Javascript Bridge。\n2、Javascript Bridge 的实现原理。\n3、你所了解的 Javascript Bridge 通讯中的优化方案。")]),t._v(" "),a("p",[t._v("Javascript Bridge 是 js 于其他语言通信的一个中间层。")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("TCP 和 UDP 都是传输层上的协议。\nTCP 链接经过 3 次握手，保证连接是可靠的，UDP 类似于广播不可靠。")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("待完成。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题","aria-hidden":"true"}},[this._v("#")]),this._v(" 面试题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1、doctype-有什么用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、doctype-有什么用？","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、DOCTYPE 有什么用？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请简述-javascript-中的-this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请简述-javascript-中的-this","aria-hidden":"true"}},[this._v("#")]),this._v(" 请简述 JavaScript 中的 this")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。")]),t._v(" "),a("li",[t._v("如果 apply、call 或 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。")]),t._v(" "),a("li",[t._v("当函数作为对象里的方法被调用时，函数内的 this 是调用该函数的对象。比如当 obj.method()被调用时，函数内的 this 将绑定到 obj 对象。")]),t._v(" "),a("li",[t._v("如果调用函数不符合上述规则，那么 this 的值指向全局对象（global object）。浏览器环境下 this 的值指向 window 对象，但是在严格模式下('use strict')，this 的值为 undefined。")]),t._v(" "),a("li",[t._v("如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定 this 的值。")]),t._v(" "),a("li",[t._v("如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this 被设置为它被创建时的上下文。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"offsetwidth，clientwidth，scrollwidth-的区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetwidth，clientwidth，scrollwidth-的区别？","aria-hidden":"true"}},[this._v("#")]),this._v(" offsetWidth，clientWidth，scrollWidth 的区别？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("内部元素小于外部元素，scrollWidth = clientWidth")]),this._v(" "),s("li",[this._v("内部元素大于外部元素，scrollWidth = 内部元素 offsetWidth + 外部 padding")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"css-选择器的优先级是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器的优先级是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 选择器的优先级是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"toutiao-com-向-mp-toutiao-com-发请求跨域吗？-mp-toutiao-com-的服务器能接收到请求吗？是怎样的请求？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toutiao-com-向-mp-toutiao-com-发请求跨域吗？-mp-toutiao-com-的服务器能接收到请求吗？是怎样的请求？","aria-hidden":"true"}},[this._v("#")]),this._v(" <toutiao.com> 向 <mp.toutiao.com> 发请求跨域吗？<mp.toutiao.com> 的服务器能接收到请求吗？是怎样的请求？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御？","aria-hidden":"true"}},[this._v("#")]),this._v(" 请解释 XSS 与 CSRF 分别是什么？两者有什么联系，如何防御？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关乎-javascript-bridge。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关乎-javascript-bridge。","aria-hidden":"true"}},[this._v("#")]),this._v(" 关乎 Javascript Bridge。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tcp-udp-是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" TCP/UDP 是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请用算法实现，从给定的无序、不重复的数组-a-中，去除-n-个数使其相加和为-m。并给出算法的时间，空间复杂度。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请用算法实现，从给定的无序、不重复的数组-a-中，去除-n-个数使其相加和为-m。并给出算法的时间，空间复杂度。","aria-hidden":"true"}},[this._v("#")]),this._v(" 请用算法实现，从给定的无序、不重复的数组 A 中，去除 N 个数使其相加和为 M。并给出算法的时间，空间复杂度。")])}],!1,null,null,null);i.options.__file="fontend-interview.md";s.default=i.exports}}]);