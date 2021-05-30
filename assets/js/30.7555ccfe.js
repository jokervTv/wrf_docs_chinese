(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{638:function(t,a,r){"use strict";r.r(a);var s=r(3),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#arw-动力求解器-arw-dynamics-solver"}},[t._v("ARW 动力求解器 (ARW Dynamics Solver)")])]),r("li",[r("a",{attrs:{href:"#物理模型-model-physics"}},[t._v("物理模型 (Model Physics)")])]),r("li",[r("a",{attrs:{href:"#wrfda-系统-wrfda-system"}},[t._v("WRFDA 系统 (WRFDA System)")])]),r("li",[r("a",{attrs:{href:"#wrf-软件架构-wrf-software-framework"}},[t._v("WRF 软件架构 (WRF Software Framework)")])]),r("li",[r("a",{attrs:{href:"#wrf-chem-wrf-hydro-and-wrf-fire"}},[t._v("WRF-Chem, WRF-Hydro and WRF-Fire")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"arw-动力求解器-arw-dynamics-solver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arw-动力求解器-arw-dynamics-solver"}},[t._v("#")]),t._v(" ARW 动力求解器 (ARW Dynamics Solver)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("方程组：带有一个运行时静力选项的完全可压缩的欧拉非静力方程求解器。干空气质量和标量质量守恒。")])]),t._v(" "),r("li",[r("p",[t._v("预报变量：笛卡尔坐标中的速度分量 "),r("span",{staticClass:"katex"},[r("span",{staticClass:"katex-mathml"},[r("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[r("semantics",[r("mrow",[r("mi",[t._v("u")])],1),r("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u")])],1)],1)],1),r("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[r("span",{staticClass:"base"},[r("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),r("span",{staticClass:"mord mathnormal"},[t._v("u")])])])]),t._v(" 和 "),r("span",{staticClass:"katex"},[r("span",{staticClass:"katex-mathml"},[r("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[r("semantics",[r("mrow",[r("mi",[t._v("v")])],1),r("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("v")])],1)],1)],1),r("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[r("span",{staticClass:"base"},[r("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),r("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("v")])])])]),t._v("，垂直速度 "),r("span",{staticClass:"katex"},[r("span",{staticClass:"katex-mathml"},[r("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[r("semantics",[r("mrow",[r("mi",[t._v("w")])],1),r("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("w")])],1)],1)],1),r("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[r("span",{staticClass:"base"},[r("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),r("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.02691em"}},[t._v("w")])])])]),t._v("，扰动湿位温，扰动位势和扰动干空气地面压力。可选地，湍动能和任意数量的标量，例如水汽混合比，雨雪混合比，云水/冰混合比以及化学物质和示踪剂。")])]),t._v(" "),r("li",[r("p",[t._v("垂直坐标：基于干静力，地形跟踪以及质量的 sigma-pressure 混合垂直坐标，允许垂直网格拉伸。模型的顶部是恒压面。")])]),t._v(" "),r("li",[r("p",[t._v("水平网格：交错 Arakawa C 网格")])]),t._v(" "),r("li",[r("p",[t._v("时间积分：对于声波和重力波模式，使用时间步长更短的二阶或三阶 Runge-Kutta 方案的时间分割积分。可变时间步长。")])]),t._v(" "),r("li",[r("p",[t._v("空间离散化：水平和垂直的 2 到 6 阶对流选项。")])]),t._v(" "),r("li",[r("p",[t._v("湍流混合和模式过滤：坐标和物理空间中的子网格尺度湍流公式。散度阻尼，外部模式滤波，垂直隐式声学偏心步进。显式过滤选项。")])]),t._v(" "),r("li",[r("p",[t._v("初始条件：三维用于真实数据，一维，二维和三维用于理想数据。可用的数字过滤初始化（DFI）功能（实际数据案例）。")])]),t._v(" "),r("li",[r("p",[t._v("侧边界条件：提供周期边界，开放，对称边界和特定的选项。")])]),t._v(" "),r("li",[r("p",[t._v("上边界条件：重力波吸收（扩散，瑞利阻尼或垂直速度的隐式瑞利阻尼）。沿物质表面的顶部边界处的压力水平恒定。刚性盖选项。")])]),t._v(" "),r("li",[r("p",[t._v("底部边界条件：摩擦或自由滑动。")])]),t._v(" "),r("li",[r("p",[t._v("地球自转：包括完整的科里奥利项。")])]),t._v(" "),r("li",[r("p",[t._v("球体映射：支持四种地图投影以进行真实数据模拟：极地投影，兰伯特保角投影，墨卡托和纬度-经度（允许旋转极点）。包括曲率项。")])]),t._v(" "),r("li",[r("p",[t._v("嵌套：单向交互式、双向交互和移动嵌套。多个级别和整数比率。")])]),t._v(" "),r("li",[r("p",[t._v("张驰逼近：网格，频谱和观察张驰逼近功能。")])]),t._v(" "),r("li",[r("p",[t._v("全球网格：具有使用极傅立叶滤波器和周期性东西方条件进行全球模拟的功能。")])]),t._v(" "),r("li",[r("p",[t._v("热带通道：利用周期性的东西向和特定的南北横向边界条件的热带通道能力。")])])]),t._v(" "),r("h2",{attrs:{id:"物理模型-model-physics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#物理模型-model-physics"}},[t._v("#")]),t._v(" 物理模型 (Model Physics)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("微物理：从简化的适合理想化研究的物理方案，到混合相，多阶矩，bin 和气溶胶感知方法，为过程研究和准确的数值天气预报提供支持。")])]),t._v(" "),r("li",[r("p",[t._v("积云参数化：可以使用深对流，浅对流，调整，质量通量和可缩放方案。")])]),t._v(" "),r("li",[r("p",[t._v("地表物理：多层陆地表面模型，从简单的热模型到完整的植被和土壤水分模型，包括雪盖和海冰。可以进行城市参数化")])]),t._v(" "),r("li",[r("p",[t._v("行星边界层物理：湍动能预测或非局部 K 方案。")])]),t._v(" "),r("li",[r("p",[t._v("大气辐射物理：具有多个光谱带的长波和短波方案以及适用于气候和天气应用的简单短波方案。包括云效果和表面通量。")])])]),t._v(" "),r("h2",{attrs:{id:"wrfda-系统-wrfda-system"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wrfda-系统-wrfda-system"}},[t._v("#")]),t._v(" WRFDA 系统 (WRFDA System)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("数据同化功能已合并到 WRF 软件框架中。")])]),t._v(" "),r("li",[r("p",[t._v("集成到 WRF 软件包中的 WRFPlus 代码（即 WRF 的相切线性和伴随版本）。")])]),t._v(" "),r("li",[r("p",[t._v("模型空间成本函数的增量公式。")])]),t._v(" "),r("li",[r("p",[t._v("拟牛顿或共轭梯度最小化算法。")])]),t._v(" "),r("li",[r("p",[t._v("在无交错的 Arakawa-A 网格上的增量分析。")])]),t._v(" "),r("li",[r("p",[t._v("通过递归滤波器（区域）或功率谱（全局）表示背景误差 B 的水平分量。通过投影将垂直分量应用到垂直误差的气候平均特征向量上。水平/垂直误差是不可分割的（水平比例随垂直特征向量而变化）。")])]),t._v(" "),r("li",[r("p",[t._v("通过定义 B = UUT 的控制变量变换 U，对背景成本函数（Jb）进行预处理。")])]),t._v(" "),r("li",[r("p",[t._v("灵活选择背景误差模型和控制变量。")])]),t._v(" "),r("li",[r("p",[t._v("通过平均预测差异的 NMC 方法或适当平均的整体摄动法估计的背景误差协方差。")])]),t._v(" "),r("li",[r("p",[t._v("3DVAR，4DVAR，hybrid-3DEnVar 和 Hybrid-4DEnVar 方法可用于确定性分析。")])]),t._v(" "),r("li",[r("p",[t._v("以双分辨率设置运行混合 3D/4DEnVar 的能力（即以比确定性背景和分析更低的分辨率进行整体输入）。")])]),t._v(" "),r("li",[r("p",[t._v("计算预测对观测的敏感性（FSO）的能力。")])]),t._v(" "),r("li",[r("p",[t._v("集成变换卡尔曼滤波器（ETKF），具有扰动观测值的混合 EnVar 集合进行集合分析。")])]),t._v(" "),r("li",[r("p",[t._v("从研究和业务数据源中灵活选择观察同化量。")])]),t._v(" "),r("li",[r("p",[t._v("卫星辐射数据同化的快速辐射传输模型的两种选择（CRTM 和 RTTOV）。")])]),t._v(" "),r("li",[r("p",[t._v("同化全天候卫星辐射数据的能力。")])]),t._v(" "),r("li",[r("p",[t._v("同化雷达观测的多种选择。")])])]),t._v(" "),r("h2",{attrs:{id:"wrf-软件架构-wrf-software-framework"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wrf-软件架构-wrf-software-framework"}},[t._v("#")]),t._v(" WRF 软件架构 (WRF Software Framework)")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("高度模块化的单源可维护代码。")])]),t._v(" "),r("li",[r("p",[t._v("用于分布式和共享内存并行计算的两级域分解。")])]),t._v(" "),r("li",[r("p",[t._v("可移植到各种可用的计算平台上。")])]),t._v(" "),r("li",[r("p",[t._v("支持众多物理模块。")])]),t._v(" "),r("li",[r("p",[t._v("将科学代码与并行以及其他特定于体系架构的方面分开。")])]),t._v(" "),r("li",[r("p",[t._v("输入/输出应用程序接口（API）允许各种外部程序与 WRF 一起安装，从而使 WRF 轻松支持各种数据格式。")])]),t._v(" "),r("li",[r("p",[t._v("在各种计算平台（分布式和共享内存，向量和标量机器）上有效执行。")])])]),t._v(" "),r("h2",{attrs:{id:"wrf-chem-wrf-hydro-and-wrf-fire"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wrf-chem-wrf-hydro-and-wrf-fire"}},[t._v("#")]),t._v(" WRF-Chem, WRF-Hydro and WRF-Fire")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("WRF-Chem 是一个具有许多选项的完整在线大气化学模型，在选择了适当的选项后，还会通过气溶胶影响辐射和微物理过程，发生某些物理相互作用。通常，它需要排放清单作为附加输入。有关 WRF-Chem 的更多信息，请参见："),r("br"),t._v(" "),r("a",{attrs:{href:"https://ruc.noaa.gov/wrf/wrf-chem/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ruc.noaa.gov/wrf/wrf-chem/"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("WRF-Hydro 是一种地表水文模型，可以与 WRF 在线或离线运行，并通过陆面模型与 WRF 交互。该模型可以计算土地水预算项，包括给定路线的附加数据的流量。相对于大气模式，它在更高分辨率的子网格上运行。有关 WRF-Hydro 的更多信息，请参见"),r("br"),t._v(" "),r("a",{attrs:{href:"https://ral.ucar.edu/projects/wrf_hydro/overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ral.ucar.edu/projects/wrf_hydro/overview"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("WRF-Fire 作为耦合的火灾模型运行，在子网格级别跟踪火场。它通过风和热通量与模型相互作用，并需要燃料信息作为附加输入。有关 WRF-Fire 的更多信息，可以在"),r("br"),t._v(" "),r("a",{attrs:{href:"http://www2.mmm.ucar.edu/wrf/users/fre/wrf-fre.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www2.mmm.ucar.edu/wrf/users/fre/wrf-fre.html"),r("OutboundLink")],1),r("br"),t._v("\n和 ARW 用户指南中的"),r("br"),t._v(" "),r("a",{attrs:{href:"http://www2.mmm.ucar.edu/wrf/users/docs/user_guide_v4/contents.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www2.mmm.ucar.edu/wrf/users/docs/user_guide_v4/contents.html"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("另外，可以在 Powers（2017）等人的文章中找到对这些组件的简短描述以及对更多信息的引用。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);