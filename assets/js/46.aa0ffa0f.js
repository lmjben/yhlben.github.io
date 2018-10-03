(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{167:function(t,e,i){"use strict";i.r(e);var r=i(0),_=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),i("p",[t._v("跨域，因为域名不同。")]),t._v(" "),i("p",[t._v("服务器端可以接收到请求。")]),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("跨域请求，后端拿不到 cookie，x-requested-with，新增 referer 字段。")]),t._v(" "),i("p",[t._v("返回的都是 200 OK。")]),t._v(" "),t._m(5),t._v(" "),i("p",[i("router-link",{attrs:{to:"/blog/fontend-security.html"}},[t._v("参考链接")])],1),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("1、解释一下什么是 Javascript Bridge。")]),t._v(" "),i("p",[t._v("2、Javascript Bridge 的实现原理。")]),t._v(" "),i("p",[t._v("3、你所了解的 Javascript Bridge 通讯中的优化方案。")]),t._v(" "),i("p",[t._v("JSBridge 是一座用 JavaScript 搭建起来的桥，一端是 web，一端是 native。我们搭建这座桥的目的也很简单，让 native 可以调用 web 的 js 代码，让 web 可以 “调用” 原生的代码。请注意这个我加了 引号的调用，它并不是直接调用，而是可以根据 web 和 native 约定好的规则来通知 native 要做什么，native 可以更具这个来执行相应的代码。")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),i("p",[t._v("优点：可靠 稳定")]),t._v(" "),i("p",[t._v("TCP 的可靠体现在 TCP 在传输数据之前，会有三次握手来建立连接，而且在数据传递时，有确认. 窗口. 重传. 拥塞控制机制，在数据传完之后，还会断开来连接用来节约系统资源。")]),t._v(" "),i("p",[t._v("缺点：慢，效率低，占用系统资源高。")]),t._v(" "),i("p",[t._v("在传递数据之前要先建立连接，这会消耗时间，而且在数据传递时，确认机制. 重传机制. 拥塞机制等都会消耗大量时间，而且要在每台设备上维护所有的传输连接。然而，每个连接都会占用系统的 CPU，内存等硬件资源。")]),t._v(" "),t._m(10),t._v(" "),i("p",[t._v("优点：快。")]),t._v(" "),i("p",[t._v("UDP 没有 TCP 拥有的各种机制，是一种无状态的传输协议，所以传输数据非常快，没有 TCP 的这些机制，被攻击利用的机会就少一些，但是也无法避免被攻击。")]),t._v(" "),i("p",[t._v("缺点：不可靠，不稳定。")]),t._v(" "),i("p",[t._v("因为没有 TCP 的这些机制，UDP 在传输数据时，如果网络质量不好，就会很容易丢包，造成数据的缺失。")]),t._v(" "),t._m(11),t._v(" "),i("p",[t._v("1、减少请求数（合并 js，css，图片等）。")]),t._v(" "),i("p",[t._v("2、减少资源大小（压缩，删掉无用代码）。")]),t._v(" "),i("p",[t._v("3、静态资源放 CDN。")]),t._v(" "),i("p",[t._v("4、过滤请求，使用本地缓存（缓存策略），减少服务器压力。")]),t._v(" "),i("p",[t._v("5、使用压力测试，测试单个服务器的最大 QPS，从而计算出后端多台服务器集群的抗压能力。")]),t._v(" "),i("p",[t._v("6、前端错误日志（监听 window.onerror 等）。")]),t._v(" "),i("p",[t._v("7、后端错误日志记录（process.on('uncaughtException')等）。")]),t._v(" "),i("p",[t._v("8、nginx 负载均衡。")]),t._v(" "),i("p",[t._v("9、后端守护进程（pm2），心跳检测。")]),t._v(" "),i("p",[t._v("10、Varnish，Stupid 后端缓存。")]),t._v(" "),i("p",[t._v("11、数据库读写分离。")]),t._v(" "),t._m(12),t._v(" "),i("p",[t._v("1、通过 User-Agent 来控制访问（可以被伪造）。")]),t._v(" "),i("p",[t._v("2、通过 IP 限制来反爬虫。（如果一个固定的 ip 在短暂的时间内，快速大量的访问一个网站，那自然会引起注意，管理员可以通过一些手段把这个 ip 给封了）。")]),t._v(" "),i("p",[t._v("3、通过 JS 脚本来防止爬虫。（如验证码，滑动解锁等）。")]),t._v(" "),i("p",[t._v("4、通过 robots.txt 来限制爬虫。（君子协议）。")]),t._v(" "),t._m(13),t._v(" "),i("p",[t._v("BOM（Browser Object Model）即浏览器对象模型。\nBOM 提供了独立于内容 而与浏览器窗口进行交互的对象；\n由于 BOM 主要用于管理窗口与窗口之间的通讯，因此其核心对象是 window；\nBOM 由一系列相关的对象构成，并且每个对象都提供了很多方法与属性；\nBOM 缺乏标准，JavaScript 语法的标准化组织是 ECMA，DOM 的标准化组织是 W3C。")]),t._v(" "),i("p",[t._v("常用对象：location，navigation，history，screen，frames。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),i("p",[t._v("HTTP 请求方法并不是只有 GET 和 POST，只是最常用的。据 RFC2616 标准（现行的 HTTP/1.1）得知，通常有以下 8 种方法：OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE 和 CONNECT。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),i("p",[t._v("1、获取服务器支持的 HTTP 请求方法。")]),t._v(" "),i("p",[t._v("2、用来检查服务器的性能。例如：AJAX 进行跨域请求时的预检，需要向另外一个域名的资源发送一个 HTTP OPTIONS 请求头，用以判断实际发送的请求是否安全。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"基础题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础题","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1、下列请求算跨域吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1、下列请求算跨域吗？","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、下列请求算跨域吗？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("1、"),e("code",[this._v("xx.com")]),this._v("向"),e("code",[this._v("mp.xx.com")]),this._v("发请求跨域吗？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("2、"),e("code",[this._v("mp.xx.com")]),this._v("的服务器能接收到请求吗？是怎样的请求？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/blog/front-interview-cross-domain.png",alt:"跨域后端获取到的请求"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2、请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2、请解释-xss-与-csrf-分别是什么？两者有什么联系，如何防御？","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、请解释 XSS 与 CSRF 分别是什么？两者有什么联系，如何防御？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"关乎-javascript-bridge。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关乎-javascript-bridge。","aria-hidden":"true"}},[this._v("#")]),this._v(" 关乎 Javascript Bridge。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"front-interview-jsbridge.png",alt:"jsbridge原理"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3、tcp-udp-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3、tcp-udp-是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、TCP/UDP 是什么？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"tcp："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp：","aria-hidden":"true"}},[this._v("#")]),this._v(" TCP：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"udp："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#udp：","aria-hidden":"true"}},[this._v("#")]),this._v(" UDP：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4、如何处理高流量，高并发？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4、如何处理高流量，高并发？","aria-hidden":"true"}},[this._v("#")]),this._v(" 4、如何处理高流量，高并发？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_5、反爬虫方案？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5、反爬虫方案？","aria-hidden":"true"}},[this._v("#")]),this._v(" 5、反爬虫方案？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_6、什么是-bom？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6、什么是-bom？","aria-hidden":"true"}},[this._v("#")]),this._v(" 6、什么是 BOM？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"interview-bom.jpg",alt:"bom模型图"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_7、http-常用的请求方式？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7、http-常用的请求方式？","aria-hidden":"true"}},[this._v("#")]),this._v(" 7、HTTP 常用的请求方式？")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("GET 获取资源。")]),t._v(" "),i("li",[t._v("POST 传输实体的主体。")]),t._v(" "),i("li",[t._v("PUT 传输文件。")]),t._v(" "),i("li",[t._v("HEAD 获得报文首部（类似 get，不返回报文实体）。")]),t._v(" "),i("li",[t._v("DELETE 删除文件。")]),t._v(" "),i("li",[t._v("OPTIONS 询问支持的方法。")]),t._v(" "),i("li",[t._v("TRACE 追踪路径（让服务器将之前的请求通信返回给客户端）。")]),t._v(" "),i("li",[t._v("CONNECT 要求用隧道协议连接代理（主要使用 SSL）。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_8、options-请求方法的主要用途有两个："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8、options-请求方法的主要用途有两个：","aria-hidden":"true"}},[this._v("#")]),this._v(" 8、OPTIONS 请求方法的主要用途有两个：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_9、常用的跨域解决方案-？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9、常用的跨域解决方案-？","aria-hidden":"true"}},[this._v("#")]),this._v(" 9、常用的跨域解决方案 ？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("PostMessage （HTML5 协议：跨窗口通信，不论这两个窗口是否同源）")]),this._v(" "),e("li",[this._v("JSONP （浏览器 hack 方式）")]),this._v(" "),e("li",[this._v("WebSocket (协议不同，没有同源策略)")]),this._v(" "),e("li",[this._v("CORS （终极解决方案，服务器端允许跨域）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_10、http-中和缓存相关的-header-有哪些？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10、http-中和缓存相关的-header-有哪些？","aria-hidden":"true"}},[this._v("#")]),this._v(" 10、HTTP 中和缓存相关的 Header 有哪些？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Expires：过期时间，一个具体的时间。")]),this._v(" "),e("li",[this._v("Cache-Control：相比 Expires，有更多的控制，可以控制多久后过期。")]),this._v(" "),e("li",[this._v("ETag/If-None-Match：通过资源标识符，判断资源是否改变。")]),this._v(" "),e("li",[this._v("Last-Modified/If-Modified-Since：通过发送上一次请求的时间，判断在这期间内资源是否改变。")])])}],!1,null,null,null);_.options.__file="base.md";e.default=_.exports}}]);