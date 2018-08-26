(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{171:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("测试的目的：")]),t._v(" "),a("ul",[a("li",[t._v("正确性：测试可以验证代码的正确性，在上线前心里有底。")]),t._v(" "),a("li",[t._v("自动化：通过编写测试用例，可以做到一次编写，多次运行。"),a("code",[t._v("当然手工也可以测试，通过console可以打印出内部信息，但是这是一次性的事情，下次测试还得重头来过，效率不能得到保证。")])]),t._v(" "),a("li",[t._v("解释性：测试用例用于测试接口、模块的重要性，在测试用例中会设计如何使用这些 API。"),a("code",[t._v("其他开发人员如果要使用这些API，阅读测试用例是一种很好的途径，有时比文档说明更清晰。")])]),t._v(" "),a("li",[t._v("驱动开发，设计指导：代码被测试的前提是代码本身的可测试性，要保证代码的可测试性，就需要在开发中注意 API 的设计，TDD 将测试前移就是起到这么一个作用。")]),t._v(" "),a("li",[t._v("保证重构：互联网行业产品迭代速度很快，迭代后必然存在代码重构的过程，那怎么才能保证重构后代码的质量呢？有测试用例做后盾，就可以大胆的进行重构。")])]),t._v(" "),a("h2",{attrs:{id:"单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单元测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 单元测试")]),t._v(" "),a("p",[t._v("单元测试包括：断言，测试框架，测试用例，测试覆盖率，mock，持续集成等几个方面。")]),t._v(" "),a("p",[t._v("目的：单元测试能够让开发者明确知道代码结果。")]),t._v(" "),a("h3",{attrs:{id:"断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断言","aria-hidden":"true"}},[t._v("#")]),t._v(" 断言")]),t._v(" "),a("p",[t._v("断言：保证最小单元是否正常运行检测方法。")]),t._v(" "),a("h3",{attrs:{id:"测试框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试框架","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试框架")]),t._v(" "),a("p",[t._v("测试框架用于为测试服务，让本身并不参与测试，主要用于管理测试用例和生成测试报告，提升测试用例的开发速度，提高测试用例的可维护性和可读性。"),a("code",[t._v("有mocha，jest，jasmine等框架。")])]),t._v(" "),a("p",[t._v("测试风格:")]),t._v(" "),a("ul",[a("li",[t._v("测试驱动开发（TDD）关注所有的功能是否被实现，每一个功能都具备对应的测试用例。")]),t._v(" "),a("li",[t._v("行为驱动开发（BDD）关注整体行为是否符合预期，编写的每一行代码都有目的提供一个全面的测试用例集。")])]),t._v(" "),a("h4",{attrs:{id:"tdd-运行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tdd-运行流程","aria-hidden":"true"}},[t._v("#")]),t._v(" TDD 运行流程")]),t._v(" "),a("p",[t._v("TDD（Test Drived Develop）。TDD 的原理是在开发功能代码之前，先编写单元测试用例代码，通过测试来推动整个开发的进行。")]),t._v(" "),a("ul",[a("li",[t._v("setup（单个测试用例开始之前）")]),t._v(" "),a("li",[t._v("suiteSetup（每一个测试用例开始之前）")]),t._v(" "),a("li",[t._v("test（定义测试用例，并用断言库进行设置）")]),t._v(" "),a("li",[t._v("teardown（单个测试用例开始之后）")]),t._v(" "),a("li",[t._v("suiteTeardown（每一个测试用例开始之后）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mocha "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" suite "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" test "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 断言\n\n"),a("span",{attrs:{class:"token function"}},[t._v("suite")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Array'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("setup")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 测试用例开始之前")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("suite")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#indexOf'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'should return -1 when not present'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            assert"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("equal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("teardown")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 测试用例之后")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"bdd-运行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bdd-运行流程","aria-hidden":"true"}},[t._v("#")]),t._v(" BDD 运行流程")]),t._v(" "),a("p",[t._v("BDD（Behavior Driven Development）。行为驱动的开发，描述了软件的行为过程，可以直接作为软件的需求文档。")]),t._v(" "),a("ul",[a("li",[t._v("before（单个测试用例开始之前）")]),t._v(" "),a("li",[t._v("beforeEach（每一个测试用例开始之前）")]),t._v(" "),a("li",[t._v("it（定义测试用例，并用断言库进行设置）")]),t._v(" "),a("li",[t._v("after（单个测试用例开始之后）")]),t._v(" "),a("li",[t._v("afterEach（每一个测试用例开始之后）")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mocha  "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" describe "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" it "),a("span",{attrs:{class:"token operator"}},[t._v("--")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" 断言\n\n"),a("span",{attrs:{class:"token function"}},[t._v("describe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Array'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("before")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token comment"}},[t._v("// 测试用例开始之前")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("describe")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#indexOf'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("it")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'should return -1 when not present'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("should"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("equal")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"测试用例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试用例","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试用例")]),t._v(" "),a("p",[t._v("测试用例最小需要通过正向测试和反向测试来保证测试对功能的覆盖。")]),t._v(" "),a("h4",{attrs:{id:"异步测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 异步测试")]),t._v(" "),a("p",[t._v("在执行测试用例时，会将 done()注入实参。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("it")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"should return -1 when not present"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("done"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("done")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"测试覆盖率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试覆盖率","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试覆盖率")]),t._v(" "),a("p",[t._v("判断单元测试对代码的覆盖情况。"),a("code",[t._v("原理是通过向代码中注入代码，然后执行，可以统计：是否执行和执行次数。")])]),t._v(" "),a("ul",[a("li",[t._v("行覆盖率（line coverage）：是否每一行都执行了？")]),t._v(" "),a("li",[t._v("函数覆盖率（function coverage）：是否每个函数都调用了？")]),t._v(" "),a("li",[t._v("分支覆盖率（branch coverage）：是否每个 if 代码块都执行了？")]),t._v(" "),a("li",[t._v("语句覆盖率（statement coverage）：是否每个语句都执行了？")])]),t._v(" "),a("h3",{attrs:{id:"e2e-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#e2e-测试","aria-hidden":"true"}},[t._v("#")]),t._v(" e2e 测试")]),t._v(" "),a("p",[t._v("E2E（End To End）测试是模拟用户进行页面操作，通过来判断页面状态的变化，从而检查功能是否运行正常的测试方法。")]),t._v(" "),a("p",[t._v("常用的库：")]),t._v(" "),a("ul",[a("li",[t._v("selenium/webdriver")]),t._v(" "),a("li",[t._v("nightwatch")]),t._v(" "),a("li",[t._v("puppeteer")])]),t._v(" "),a("h2",{attrs:{id:"性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 性能测试")]),t._v(" "),a("p",[t._v("性能测试的范畴比较广泛，包括负载测试、要测试和基准测试等。")]),t._v(" "),a("h3",{attrs:{id:"基准测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基准测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 基准测试")]),t._v(" "),a("p",[t._v("基准测试统计的是在多少时间内执行了多少次某个方法。")]),t._v(" "),a("p",[t._v("使用 Benchmark 库")]),t._v(" "),a("ul",[a("li",[t._v("面向切面编程 AOP 无侵入式统计")]),t._v(" "),a("li",[t._v("Benchmark 基准测试方法，他并不是简单地统计执行多少次测试代码后对比时间，它对测试有着严密的抽样过程，执行多少次取决于采样到的额数据能否完成统计。根据统计次数计算方差。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" suite "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Benchmark"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Suite")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// add tests")]),t._v("\nsuite\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"RegExp#test"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token regex"}},[t._v("/o/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"String#indexOf"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"o"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// add listeners")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"cycle"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("String")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("on")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"complete"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Fastest is "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("filter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"fastest"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("map")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"name"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// run async")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("run")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// logs:")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => RegExp#test x 4,161,532 +-0.99% (59 cycles)")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => String#indexOf x 6,139,623 +-1.00% (131 cycles)")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// => Fastest is String#indexOf")]),t._v("\n")])])]),a("h3",{attrs:{id:"压力测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#压力测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 压力测试")]),t._v(" "),a("p",[t._v("对网络接口做压力测试需要检查的几个常用指标有吞吐率，响应时间和并发数，这些指标反映了服务器并发处理能力。")]),t._v(" "),a("p",[t._v("pv 网站当日访问人数，uv 独立访问人数。 QPS=pv/t。")]),t._v(" "),a("p",[t._v("常用的压力测试工具：ab、siege、http_load。")]),t._v(" "),a("p",[t._v("QPS: Request per second 标识服务器每秒处理请求数。")]),t._v(" "),a("h2",{attrs:{id:"安全测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 安全测试")]),t._v(" "),a("ul",[a("li",[t._v("XSS")]),t._v(" "),a("li",[t._v("SQL")]),t._v(" "),a("li",[t._v("CSRF")])]),t._v(" "),a("h2",{attrs:{id:"功能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能测试")]),t._v(" "),a("h3",{attrs:{id:"冒烟测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冒烟测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 冒烟测试")]),t._v(" "),a("p",[t._v("自由测试的一种，找到一个 bug 然后修复，然后专门针对此 bug。")]),t._v(" "),a("ul",[a("li",[t._v("优点节省时间。")]),t._v(" "),a("li",[t._v("缺点覆盖率极低。")])]),t._v(" "),a("h3",{attrs:{id:"回归测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#回归测试","aria-hidden":"true"}},[t._v("#")]),t._v(" 回归测试")]),t._v(" "),a("p",[t._v("修改一处对整体功能全部测试，一般配合自动化测试。")]),t._v(" "),a("h2",{attrs:{id:"测试相关库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试相关库","aria-hidden":"true"}},[t._v("#")]),t._v(" 测试相关库")]),t._v(" "),a("ul",[a("li",[t._v("karma：使用真实的浏览器环境，并且可测试兼容性")]),t._v(" "),a("li",[t._v("mocha：测试框架")]),t._v(" "),a("li",[t._v("chai：断言库")]),t._v(" "),a("li",[t._v("istanbuljs/nyc：覆盖率库")]),t._v(" "),a("li",[t._v("backstopjs：测试 UI")]),t._v(" "),a("li",[t._v("benchmark：基准测试")]),t._v(" "),a("li",[t._v("phantomjs：无头浏览器")]),t._v(" "),a("li",[t._v("nightwatch：e2e 测试")]),t._v(" "),a("li",[t._v("jest：大而全")])])])}],!1,null,null,null);o.options.__file="js-test.md";s.default=o.exports}}]);