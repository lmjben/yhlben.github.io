(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{164:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"html-面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-面试题","aria-hidden":"true"}},[t._v("#")]),t._v(" HTML 面试题")]),t._v(" "),s("h2",{attrs:{id:"_1、doctype-有什么用？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、doctype-有什么用？","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、DOCTYPE 有什么用？")]),t._v(" "),s("p",[t._v("文档模式：混杂模式和标准模式，主要影响 css 内容的呈现，在某些情况下也会影响 js 的执行。不同浏览器的怪异模式差别非常大。")]),t._v(" "),s("p",[t._v("在 HTML 4.01 中，<!DOCTYPE> 声明引用 DTD，因为 HTML 4.01 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确地呈现内容。")]),t._v(" "),s("p",[t._v("HTML5 不基于 SGML，所以不需要引用 DTD。")]),t._v(" "),s("h2",{attrs:{id:"_2、什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、什么是可替换元素，什么是非替换元素，他们的差异是什么，并举例说明。")]),t._v(" "),s("p",[t._v("不可替换元素：其内容直接表现给浏览器。")]),t._v(" "),s("p",[t._v("例如：div 中的内容可以直接显示。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("content"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("替换元素：没有实际的内容，需根据元素的标签和属性，来决定元素的具体显示内容。")]),t._v(" "),s("p",[t._v("例如浏览器会根据 img 标签的 src 属性的值来读取图片信息并显示出来，这些元素往往没有实际的内容，即是一个空元素。")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("xxx"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_3、一个-div，高度是宽度的-50-，让该-div-的宽度占据整个屏幕，然后能自适应，垂直居中，怎么实现？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、一个-div，高度是宽度的-50-，让该-div-的宽度占据整个屏幕，然后能自适应，垂直居中，怎么实现？","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、一个 div，高度是宽度的 50%，让该 div 的宽度占据整个屏幕，然后能自适应，垂直居中，怎么实现？")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("display")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("align-items")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("height")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100vh"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token selector"}},[t._v(".item")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("padding-bottom")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token property"}},[t._v("width")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("h2",{attrs:{id:"_4、行内标签都有哪些"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、行内标签都有哪些","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、行内标签都有哪些")]),t._v(" "),s("ul",[s("li",[t._v("1.行属性标签它和其它标签处在同一行内")]),t._v(" "),s("li",[t._v("2.行属性标签无法设置宽度，高度 行高 距顶部距离 距底部距离")]),t._v(" "),s("li",[t._v("3.行属性标签的宽度是直接由内部的文字或者图片等内容撑开的")]),t._v(" "),s("li",[t._v("4.行属性标签内部不能嵌套行属性标签（a 链接内不能嵌套其他链接）")])]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("i")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("label")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("var")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cite")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("、"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("code")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"_5、data-xxx-属性的作用是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、data-xxx-属性的作用是什么？","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、data-xxx 属性的作用是什么？")]),t._v(" "),s("ul",[s("li",[t._v("增加自定义属性的可读性，可维护性。")]),t._v(" "),s("li",[t._v("dom.dataset 可以直接访问 dataset。")])])])}],!1,null,null,null);e.options.__file="html.md";a.default=e.exports}}]);