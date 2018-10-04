(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{211:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("文档模式：混杂模式和标准模式，主要影响 css 内容的呈现，在某些情况下也会影响 js 的执行。不同浏览器的怪异模式差别非常大。")]),t._v(" "),a("p",[t._v("在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。")]),t._v(" "),a("p",[t._v("HTML5 不基于 SGML，所以不需要引用 DTD。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("不可替换元素：其内容直接表现给浏览器。")]),t._v(" "),a("p",[t._v("例如：div 中的内容可以直接显示。")]),t._v(" "),t._m(5),a("p",[t._v("替换元素：没有实际的内容，需根据元素的标签和属性，来决定元素的具体显示内容。")]),t._v(" "),a("p",[t._v("例如浏览器会根据 img 标签的 src 属性的值来读取图片信息并显示出来，这些元素往往没有实际的内容，即是一个空元素。")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("clientWidth：元素的 width + padding")]),t._v(" "),a("p",[t._v("offsetWidth：元素的 width + padding + border")]),t._v(" "),a("p",[t._v("scrollWidth：")]),t._v(" "),t._m(8),t._v(" "),a("p",[a("a",{attrs:{href:"https://codepen.io/yhlben/pen/WgowLz",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试 offsetWidth，clientWidth，scrollWidth"),a("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("id 选择器权重： 0100")]),t._v(" "),a("p",[t._v("类选择器，属性选择器，伪类选择器权重： 0010")]),t._v(" "),a("p",[t._v("元素选择器，伪元素选择器权重 0001")]),t._v(" "),a("p",[t._v("统配选择器 *")]),t._v(" "),a("p",[t._v("受多个 css 规则影响时，会计算一个元素上的选择器权重，权重大的选择器优先。")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("跨域，因为域名不同。")]),t._v(" "),a("p",[t._v("服务器端可以接收到请求。")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("跨域请求，后端拿不到 cookie，x-requested-with，新增 referer 字段。")]),t._v(" "),a("p",[t._v("返回的都是 200 OK。")]),t._v(" "),t._m(12),t._v(" "),a("p",[a("router-link",{attrs:{to:"./fontend-security.html"}},[t._v("参考链接")])],1),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("1、解释一下什么是 Javascript Bridge。")]),t._v(" "),a("p",[t._v("2、Javascript Bridge 的实现原理。")]),t._v(" "),a("p",[t._v("3、你所了解的 Javascript Bridge 通讯中的优化方案。")]),t._v(" "),a("p",[t._v("JSBridge 是一座用 JavaScript 搭建起来的桥，一端是 web，一端是 native。我们搭建这座桥的目的也很简单，让 native 可以调用 web 的 js 代码，让 web 可以 “调用” 原生的代码。请注意这个我加了 引号的调用，它并不是直接调用，而是可以根据 web 和 native 约定好的规则来通知 native 要做什么，native 可以更具这个来执行相应的代码。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("优点：可靠 稳定")]),t._v(" "),a("p",[t._v("TCP 的可靠体现在 TCP 在传输数据之前，会有三次握手来建立连接，而且在数据传递时，有确认. 窗口. 重传. 拥塞控制机制，在数据传完之后，还会断开来连接用来节约系统资源。")]),t._v(" "),a("p",[t._v("缺点：慢，效率低，占用系统资源高。")]),t._v(" "),a("p",[t._v("在传递数据之前要先建立连接，这会消耗时间，而且在数据传递时，确认机制. 重传机制. 拥塞机制等都会消耗大量时间，而且要在每台设备上维护所有的传输连接。然而，每个连接都会占用系统的 CPU，内存等硬件资源。")]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("优点：快。")]),t._v(" "),a("p",[t._v("UDP 没有 TCP 拥有的各种机制，是一种无状态的传输协议，所以传输数据非常快，没有 TCP 的这些机制，被攻击利用的机会就少一些，但是也无法避免被攻击。")]),t._v(" "),a("p",[t._v("缺点：不可靠，不稳定。")]),t._v(" "),a("p",[t._v("因为没有 TCP 的这些机制，UDP 在传输数据时，如果网络质量不好，就会很容易丢包，造成数据的缺失。")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("1、减少请求数（合并 js，css，图片等）。")]),t._v(" "),a("p",[t._v("2、减少资源大小（压缩，删掉无用代码）。")]),t._v(" "),a("p",[t._v("3、静态资源放 CDN。")]),t._v(" "),a("p",[t._v("4、过滤请求，使用本地缓存（缓存策略），减少服务器压力。")]),t._v(" "),a("p",[t._v("5、使用压力测试，测试单个服务器的最大 QPS，从而计算出后端多台服务器集群的抗压能力。")]),t._v(" "),a("p",[t._v("6、前端错误日志（监听 window.onerror 等）。")]),t._v(" "),a("p",[t._v("7、后端错误日志记录（process.on('uncaughtException')等）。")]),t._v(" "),a("p",[t._v("8、nginx 负载均衡。")]),t._v(" "),a("p",[t._v("9、后端守护进程（pm2），心跳检测。")]),t._v(" "),a("p",[t._v("10、Varnish，Stupid 后端缓存。")]),t._v(" "),a("p",[t._v("11、数据库读写分离。")]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("1、通过 User-Agent 来控制访问（可以被伪造）。")]),t._v(" "),a("p",[t._v("2、通过 IP 限制来反爬虫。（如果一个固定的 ip 在短暂的时间内，快速大量的访问一个网站，那自然会引起注意，管理员可以通过一些手段把这个 ip 给封了）。")]),t._v(" "),a("p",[t._v("3、通过 JS 脚本来防止爬虫。（如验证码，滑动解锁等）。")]),t._v(" "),a("p",[t._v("4、通过 robots.txt 来限制爬虫。（君子协议）。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),a("p",[t._v("定义：触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。")]),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v("定义：多次触发事件后，事件处理函数只执行一次，并且是在触发操作结束时执行。")]),t._v(" "),t._m(25),t._m(26),t._v(" "),a("p",[t._v("1、arguments 不是数组，但有 length 属性。")]),t._v(" "),a("p",[t._v("2、可以转换成数组，因为他有 Symbol(Symbol.iterator) 方法。")]),t._v(" "),t._m(27),a("p",[t._v("3、类数组是一个对象，typeof 判断出来就不一致。\n类数组无法使用数组方法。")]),t._v(" "),t._m(28),t._v(" "),t._m(29),t._m(30),t._v(" "),a("p",[t._v("setTimeout 是宏任务。\npromise 和 async/await 是微任务。")]),t._v(" "),a("p",[t._v("执行顺序：宏任务-》微任务-》宏任务")]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._m(33),t._v(" "),a("p",[t._v("类似于 "),a("a",{attrs:{href:"https://yhlben.github.io/blog/js-observer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("观察者模式"),a("OutboundLink")],1)]),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("BOM（Browser Object Model）即浏览器对象模型。\nBOM 提供了独立于内容 而与浏览器窗口进行交互的对象；\n由于 BOM 主要用于管理窗口与窗口之间的通讯，因此其核心对象是 window；\nBOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性；\nBOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C。")]),t._v(" "),a("p",[t._v("常用对象：location，navigation，history，screen，frames。")]),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39),t._v(" "),a("p",[t._v("Ajax 的本质是使用 XMLHttpRequest 对象来请求数据。（源生调用相当繁琐，得处理兼容性问题）。")]),t._v(" "),a("p",[t._v("fetch 采用了 Promise 的异步处理机制,更加简单.在默认情况下 fetch 不会接受或者发送 cookies")]),t._v(" "),t._m(40),t._v(" "),a("p",[t._v("增加自定义属性的可读性，可维护性。\ndom.dataset 可以直接访问 dataset。")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),a("p",[t._v("prototype 它的作用很像 java 中的静态属性/方法。其中的对象可以给所有实例使用。")]),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),a("p",[t._v("HTTP 请求方法并不是只有 GET 和 POST，只是最常用的。据 RFC2616 标准（现行的 HTTP/1.1）得知，通常有以下 8 种方法：OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE 和 CONNECT。")]),t._v(" "),a("p",[t._v("OPTIONS 请求方法的主要用途有两个：")]),t._v(" "),a("p",[t._v("1、获取服务器支持的 HTTP 请求方法。")]),t._v(" "),a("p",[t._v("2、用来检查服务器的性能。例如：AJAX 进行跨域请求时的预检，需要向另外一个域名的资源发送一个 HTTP OPTIONS 请求头，用以判断实际发送的请求是否安全。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面试题","aria-hidden":"true"}},[this._v("#")]),this._v(" 面试题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1、doctype-有什么用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、doctype-有什么用？","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、DOCTYPE 有什么用？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请简述-javascript-中的-this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请简述-javascript-中的-this","aria-hidden":"true"}},[this._v("#")]),this._v(" 请简述 JavaScript 中的 this")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("在调用函数时使用 new 关键字，函数内的 this 是一个全新的对象。")]),t._v(" "),a("li",[t._v("如果 apply、call 或 bind 方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。")]),t._v(" "),a("li",[t._v("当函数作为对象里的方法被调用时，函数内的 this 是调用该函数的对象。比如当 obj.method()被调用时，函数内的 this 将绑定到 obj 对象。")]),t._v(" "),a("li",[t._v("如果调用函数不符合上述规则，那么 this 的值指向全局对象（global object）。浏览器环境下 this 的值指向 window 对象，但是在严格模式下('use strict')，this 的值为 undefined。")]),t._v(" "),a("li",[t._v("如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定 this 的值。")]),t._v(" "),a("li",[t._v("如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，this 被设置为它被创建时的上下文。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"offsetwidth，clientwidth，scrollwidth-的区别？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offsetwidth，clientwidth，scrollwidth-的区别？","aria-hidden":"true"}},[this._v("#")]),this._v(" offsetWidth，clientWidth，scrollWidth 的区别？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("内部元素小于外部元素，scrollWidth = clientWidth")]),this._v(" "),s("li",[this._v("内部元素大于外部元素，scrollWidth = 内部元素 offsetWidth + 外部 padding")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"css-选择器的优先级是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-选择器的优先级是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 选择器的优先级是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"toutiao-com-向-mp-toutiao-com-发请求跨域吗？-mp-toutiao-com-的服务器能接收到请求吗？是怎样的请求？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toutiao-com-向-mp-toutiao-com-发请求跨域吗？-mp-toutiao-com-的服务器能接收到请求吗？是怎样的请求？","aria-hidden":"true"}},[this._v("#")]),this._v(" <toutiao.com> 向 <mp.toutiao.com> 发请求跨域吗？<mp.toutiao.com> 的服务器能接收到请求吗？是怎样的请求？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"front-interview-cross-domain.png",alt:"跨域后端获取到的请求"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御？","aria-hidden":"true"}},[this._v("#")]),this._v(" 请解释 XSS 与 CSRF 分别是什么？两者有什么联系，如何防御？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"关乎-javascript-bridge。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关乎-javascript-bridge。","aria-hidden":"true"}},[this._v("#")]),this._v(" 关乎 Javascript Bridge。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"front-interview-jsbridge.png",alt:"jsbridge原理"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"tcp-udp-是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp-udp-是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" TCP/UDP 是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"tcp："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tcp：","aria-hidden":"true"}},[this._v("#")]),this._v(" TCP：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"udp："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#udp：","aria-hidden":"true"}},[this._v("#")]),this._v(" UDP：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何处理高流量，高并发？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何处理高流量，高并发？","aria-hidden":"true"}},[this._v("#")]),this._v(" 如何处理高流量，高并发？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"反爬虫方案？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反爬虫方案？","aria-hidden":"true"}},[this._v("#")]),this._v(" 反爬虫方案？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"随意给定一个无序的、不重复的数组-data，任意抽取-n-个数，相加和为-sum，也可能无解，请写出该函数。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#随意给定一个无序的、不重复的数组-data，任意抽取-n-个数，相加和为-sum，也可能无解，请写出该函数。","aria-hidden":"true"}},[this._v("#")]),this._v(" 随意给定一个无序的、不重复的数组 data，任意抽取 n 个数，相加和为 sum，也可能无解，请写出该函数。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code")]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"节流函数怎么写？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#节流函数怎么写？","aria-hidden":"true"}},[this._v("#")]),this._v(" 节流函数怎么写？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("throttle")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" last "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("rest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" now "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" last "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" timeout"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("throttleId "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("null")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      last "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"防抖函数？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防抖函数？","aria-hidden":"true"}},[this._v("#")]),this._v(" 防抖函数？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("debounce")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("clearInterval")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    id "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"arguments-是数组吗？怎么实现用它调用数组方法？类数组和数组的区别是什么？arguments-有-length-属性吗？-为什么要遍历类数组取值组成数组，还有更简单的方法吗？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arguments-是数组吗？怎么实现用它调用数组方法？类数组和数组的区别是什么？arguments-有-length-属性吗？-为什么要遍历类数组取值组成数组，还有更简单的方法吗？","aria-hidden":"true"}},[this._v("#")]),this._v(" arguments 是数组吗？怎么实现用它调用数组方法？类数组和数组的区别是什么？arguments 有 length 属性吗？ 为什么要遍历类数组取值组成数组，还有更简单的方法吗？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("slice"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nArray"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"手写一个-bind-函数。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手写一个-bind-函数。","aria-hidden":"true"}},[this._v("#")]),this._v(" 手写一个 bind 函数。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Function"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("bind")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" that "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("NoFunc")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("result")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("...")]),t._v("rest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("warn")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"instade of :"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("that")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    that"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("apply")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("that")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" that"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rest"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  NoFunc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" that"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  result"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("NoFunc")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"promise、settimeout、async-await-的执行顺序。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise、settimeout、async-await-的执行顺序。","aria-hidden":"true"}},[this._v("#")]),this._v(" promise、setTimeout、async/await 的执行顺序。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一个-div，高度是宽度的-50-，让该-div-的宽度占据整个屏幕，然后能自适应，垂直居中，怎么实现？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一个-div，高度是宽度的-50-，让该-div-的宽度占据整个屏幕，然后能自适应，垂直居中，怎么实现？","aria-hidden":"true"}},[this._v("#")]),this._v(" 一个 div，高度是宽度的 50%，让该 div 的宽度占据整个屏幕，然后能自适应，垂直居中，怎么实现？")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("display")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("align-items")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("height")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100vh"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("width")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"用过-nodejs-的-eventemitter-模块吗，它是怎么实现功能的，步骤是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用过-nodejs-的-eventemitter-模块吗，它是怎么实现功能的，步骤是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" 用过 NodeJS 的 EventEmitter 模块吗，它是怎么实现功能的，步骤是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是-bom？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-bom？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是 BOM？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://images2015.cnblogs.com/blog/997049/201608/997049-20160830235030324-1067760196.jpg",alt:"bom模型图"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"行内标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行内标签","aria-hidden":"true"}},[this._v("#")]),this._v(" 行内标签")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("1.行属性标签它和其它标签处在同一行内")]),this._v(" "),s("li",[this._v("2.行属性标签无法设置宽度，高度 行高 距顶部距离 距底部距离")]),this._v(" "),s("li",[this._v("3.行属性标签的宽度是直接由内部的文字或者图片等内容撑开的")]),this._v(" "),s("li",[this._v("4.行属性标签内部不能嵌套行属性标签（a 链接内不能嵌套其他链接）")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("var")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cite")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("code")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"fetch-和-ajax-的比较"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetch-和-ajax-的比较","aria-hidden":"true"}},[this._v("#")]),this._v(" fetch 和 ajax 的比较")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"data-xxx-属性的作用是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-xxx-属性的作用是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" data-xxx 属性的作用是什么？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"js-中的-proto-和-prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-中的-proto-和-prototype","aria-hidden":"true"}},[this._v("#")]),this._v(" js 中的"),s("code",[this._v("__proto__")]),this._v("和 prototype")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("任何对象都有一个 "),s("code",[this._v("__proto__")]),this._v(" 属性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("任何方法都有一个"),s("code",[this._v("prototype")]),this._v("属性，"),s("code",[this._v("prototype")]),this._v("也是一个对象 ，所以其中也有一个"),s("code",[this._v("__proto__")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("__proto__")]),this._v("指向 new 出来的构造函数。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("1 函数对象有"),a("code",[t._v("__proto__")]),t._v("和 prototype 属性")]),t._v(" "),a("li",[t._v("2 非函数对象只有"),a("code",[t._v("__proto__")]),t._v("属性")]),t._v(" "),a("li",[t._v("3 prototype 中有"),a("code",[t._v("__proto__")]),t._v("属性。且是 Object 构造函数创建的")]),t._v(" "),a("li",[t._v("4 函数对象"),a("code",[t._v("__proto__")]),t._v("指向它的创建者及 Function 构造函数")]),t._v(" "),a("li",[t._v("5 Function 构造函数"),a("code",[t._v("__proto__")]),t._v("指向它自己")]),t._v(" "),a("li",[t._v("6 Object 对象的 prototype 中的"),a("code",[t._v("__proto__")]),t._v("是 null")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"http-请求-option"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-请求-option","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP 请求 OPTION")])}],!1,null,null,null);e.options.__file="fontend-interview.md";s.default=e.exports}}]);