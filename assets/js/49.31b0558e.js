(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{185:function(t,a,r){"use strict";r.r(a);var e=r(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"tcp-总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp-总结","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 总结")]),t._v(" "),r("h2",{attrs:{id:"建立连接过程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#建立连接过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 建立连接过程")]),t._v(" "),r("h3",{attrs:{id:"三次握手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),r("p",[t._v("第一次握手")]),t._v(" "),r("p",[t._v("客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号。请求发送后，客户端便进入 SYN-SENT 状态。")]),t._v(" "),r("p",[t._v("第二次握手")]),t._v(" "),r("p",[t._v("服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号，发送完成后便进入 SYN-RECEIVED 状态。")]),t._v(" "),r("p",[t._v("第三次握手")]),t._v(" "),r("p",[t._v("当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。")]),t._v(" "),r("p",[t._v("PS：第三次握手中可以包含数据，通过快速打开（TFO）技术就可以实现这一功能。其实只要涉及到握手的协议，都可以使用类似 TFO 的方式，客户端和服务端存储相同的 cookie，下次握手时发出 cookie 达到减少 RTT 的目的。")]),t._v(" "),r("h3",{attrs:{id:"四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),r("h2",{attrs:{id:"滑动窗口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#滑动窗口","aria-hidden":"true"}},[t._v("#")]),t._v(" 滑动窗口")]),t._v(" "),r("h2",{attrs:{id:"拥塞窗口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拥塞窗口","aria-hidden":"true"}},[t._v("#")]),t._v(" 拥塞窗口")])])}],!1,null,null,null);a.default=s.exports}}]);