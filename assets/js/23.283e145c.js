(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{630:function(e,s,v){"use strict";v.r(s);var a=v(3),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,v=e._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#_2-2-1-获取源代码"}},[e._v("2.2.1 获取源代码")])]),v("li",[v("a",{attrs:{href:"#_2-2-2-wrf-chem-的-unix-环境设置"}},[e._v("2.2.2 WRF-Chem 的 UNIX 环境设置")])]),v("li",[v("a",{attrs:{href:"#_2-2-3-配置模型并编译代码"}},[e._v("2.2.3 配置模型并编译代码")])])])]),v("p"),e._v(" "),v("h3",{attrs:{id:"_2-2-1-获取源代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-获取源代码"}},[e._v("#")]),e._v(" 2.2.1 获取源代码")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[e._v("自 WRF v4.0 以后，WRF-Chem 代码已集成在 WRF 压缩文件中，无需单独下载")])]),v("p",[e._v("要获得 WRF-Chem 模型，应遵循以下步骤：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("下载或复制以压缩 WRF 的 tar 文件到您的工作空间")]),e._v(" "),v("ul",[v("li",[e._v("可从 WRF 模型下载网站（http://www2.mmm.ucar.edu/wrf/users）获得 WRF 模型和化学代码目录。")]),e._v(" "),v("li",[e._v("化学代码是从 WRF 模型下载网页上单独下载的，可以在 WRF-Chemistry 标题下找到")]),e._v(" "),v("li",[e._v("如果您不打算继续进行长时间的项目，请始终获取最新版本")]),e._v(" "),v("li",[e._v("通过浏览 WRF 和 WRF-Chem 网页，浏览 WRF 和 WRF-Chem 的已知错误修复")])])]),e._v(" "),v("li",[v("p",[e._v("解压缩文件")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("> gzip –cd WRFV3-Chem-3.9.1.1.TAR | tar –xf –")])]),e._v(" "),v("li",[e._v("同样，如果有较新版本的代码使用，则 3.9.1.1 仅用作示例")]),e._v(" "),v("li",[v("code",[e._v("> cd WRF")])])])])]),e._v(" "),v("p",[e._v("请记住，会定期发布已知错误修复，可以从 WRF-Chem 网站（https://ruc.noaa.gov/wrf/wrf-chem/）下载。\n您应该经常浏览该网页以获取有关错误修复的更新。\n这还包括气象 WRF 代码的更新和错误修复（http://www2.mmm.ucar.edu/wrf/users）")]),e._v(" "),v("h3",{attrs:{id:"_2-2-2-wrf-chem-的-unix-环境设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-wrf-chem-的-unix-环境设置"}},[e._v("#")]),e._v(" 2.2.2 WRF-Chem 的 UNIX 环境设置")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[e._v("如果您使用 "),v("code",[e._v("bash")]),e._v("，则使用 "),v("code",[e._v("export")]),e._v(" 替换下方 "),v("code",[e._v("setenv")]),e._v(" 即可")])]),v("p",[e._v("在构建 WRF-Chem 代码之前，使用几个环境设置来指定是否需要在模型构建中包括代码的某些部分。\n在 c-shell 语法中，重要的环境变量设置为：")]),e._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[e._v("setenv EM_CORE "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsetenv NMM_CORE "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br")])]),v("p",[e._v("他们显式定义了要构建的模型核心。\n当然这通常是默认值。")]),e._v(" "),v("p",[e._v("环境变量")]),e._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[e._v("setenv WRFCHEM\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br")])]),v("p",[e._v("显式定义了化学代码将包含在 WRF 模型构建中，并且是 WRF-Chem 必需的。\n在配置时和编译时都需要此变量。")]),e._v(" "),v("p",[e._v("可选的，")]),e._v(" "),v("div",{staticClass:"language-sh line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sh"}},[v("code",[e._v("setenv WRF_KPP "),v("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsetenv YACC ‘/usr/bin/yacc –d’\nsetenv FLEX_LIB_DIR /usr/local/lib\n")])]),e._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[e._v("1")]),v("br"),v("span",{staticClass:"line-number"},[e._v("2")]),v("br"),v("span",{staticClass:"line-number"},[e._v("3")]),v("br")])]),v("p",[e._v("明确定义了动力学预处理器（KPP）（Damian 等人 2002; Sandu 等人 2003; Sandu 和 Sander 2006）将包含在使用 flex 库（libfl.a）的 WRF-Chem 模型构建中。\n在我们的例子中，flex 库位于 "),v("code",[e._v("/usr/local/lib")]),e._v(" 中，并使用 "),v("code",[e._v("/usr/bin")]),e._v(" 中的 "),v("code",[e._v("yacc")]),e._v("（还有另一个编译器）来编译 KPP 代码。\n这是可选的，因为并非所有化学机制都需要在编译期间构建的 KPP 库。\n用户可以首先确定是否需要 KPP 库（有关可用选项的说明，请参阅第 6 章）。\n如果不需要 KPP 库，则应将 KPP 环境变量设置为零（"),v("code",[e._v("setenv WRF_KPP 0")]),e._v("）。")]),e._v(" "),v("h3",{attrs:{id:"_2-2-3-配置模型并编译代码"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-配置模型并编译代码"}},[e._v("#")]),e._v(" 2.2.3 配置模型并编译代码")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"title"}),v("p",[v("strong",[e._v("对于 WRF-Chem，请勿使用共享内存 OPENMP 选项（smpar 或 dm+sm），因为不支持这些选项。")])])]),v("p",[e._v("WRF 代码具有相当复杂的构建机制。\n它尝试确定您所使用的体系结构，然后为您提供选项以允许您选择首选的构建方法。\n例如，如果您使用的是 Linux 计算机，则脚本将确定这是 32 位还是 64 位计算机，然后提示您使用所需的处理器（例如串行，共享内存或分布式内存），以及编译器。\n首先选择构建方法：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("> ./configu")])]),e._v(" "),v("li",[e._v("选择一个选项\n"),v("ul",[v("li",[e._v("通常，选项 "),v("code",[e._v("1")]),e._v(" 用于串行构建。**对于 WRF-Chem，请勿使用共享内存 OPENMP 选项（smpar 或 dm+sm），因为不支持这些选项。**如果要调试程序并使用非常小的数据集（例如，如果正在开发代码），则串行构建是首选。")]),e._v(" "),v("li",[e._v("由于 WRF-Chem 使用大量内存（许多其他变量），因此在所有其他情况下，首选使用分布式内存选项")])])]),e._v(" "),v("li",[e._v("您现在可以使用 "),v("code",[e._v("> ./compile em_real >& compile.log")]),e._v(" 来编译代码")]),e._v(" "),v("li",[e._v("如果编译成功，则应在子目录 "),v("code",[e._v("main")]),e._v(" 中找到可执行文件。\n"),v("ul",[v("li",[e._v("通过 "),v("code",[e._v("> ls -ls main/*.exe")])]),e._v(" "),v("li",[e._v("您应该看到列出了 "),v("code",[e._v("ndown.exe")]),e._v("，"),v("code",[e._v("real.exe")]),e._v(" 和"),v("code",[e._v("wrf.exe")]),e._v("。")])])])]),e._v(" "),v("p",[e._v("至此，WRF-Chem 模型的所有部分都已建立。\n该模型可以运行，并且运行时应提示已包括 "),v("code",[e._v("chemistry")]),e._v("。\n但是，在可以充分利用 WRF 化学模型之前，需要生成排放输入数据。\n生成排放输入数据是下一章和《WRF-Chem 排放指南》的主题。")])])}),[],!1,null,null,null);s.default=t.exports}}]);