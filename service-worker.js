/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "741705ff800780ed974835ee4501cd98"
  },
  {
    "url": "assets/css/0.styles.18698a5b.css",
    "revision": "87e5d25745d8d97542e22323281ff2af"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/fig-1.1.793506b8.jpg",
    "revision": "793506b8c9c36dcb69ad6aa6415b95d3"
  },
  {
    "url": "assets/img/fig-11.1.7f92024e.jpg",
    "revision": "7f92024e618a428cd971e2a3b72a6cd1"
  },
  {
    "url": "assets/img/fig-11.3.a7d9af49.jpg",
    "revision": "a7d9af49e6fc2a43e9ade287dc4b5db4"
  },
  {
    "url": "assets/img/fig-2.1.1.aa816791.jpg",
    "revision": "aa816791464329e00005c9f69628df31"
  },
  {
    "url": "assets/img/fig-2.1.2.3805b97b.jpg",
    "revision": "3805b97b5a6588ebfb60e16bac1225ab"
  },
  {
    "url": "assets/js/1.139af932.js",
    "revision": "7f77841ab2a8f27856cd810b05a17922"
  },
  {
    "url": "assets/js/10.29d95973.js",
    "revision": "8345bd62f0d781597ee0de84c02774d0"
  },
  {
    "url": "assets/js/11.b897c30c.js",
    "revision": "9987cbcd4e1a3b1751d662922c41d586"
  },
  {
    "url": "assets/js/12.62536657.js",
    "revision": "a4c6650218494e79441d42d018ca6c46"
  },
  {
    "url": "assets/js/13.19d14b0f.js",
    "revision": "f5256e35e08555346bc1aa1a16a5aa47"
  },
  {
    "url": "assets/js/14.4ba9d741.js",
    "revision": "cab4f7530059f0dfaec73c01b2128cc1"
  },
  {
    "url": "assets/js/15.551c2da6.js",
    "revision": "a2a67632bc53cb9b5014067e99d4ab78"
  },
  {
    "url": "assets/js/16.c75e352c.js",
    "revision": "bba5635eeeaee604ad8d7d57ec4a6c4b"
  },
  {
    "url": "assets/js/17.8ecad037.js",
    "revision": "459da466ac8d783fe691e8dfff4de5b0"
  },
  {
    "url": "assets/js/18.179b4248.js",
    "revision": "107abb32595151ceb067052ce59ebc0d"
  },
  {
    "url": "assets/js/19.20386475.js",
    "revision": "d5f1005ffc0052161016b182d4d953e3"
  },
  {
    "url": "assets/js/20.6dcd6f9e.js",
    "revision": "8f336b68579c2dc9febb9e479275594f"
  },
  {
    "url": "assets/js/21.6dd2e088.js",
    "revision": "8d3bee4114e3c98da0d3d059b139c4df"
  },
  {
    "url": "assets/js/22.78230070.js",
    "revision": "61f3c39a5654101bfdc943916ff8deeb"
  },
  {
    "url": "assets/js/23.4baf8e6a.js",
    "revision": "e7cac9332b3bbf37ca787e578b97f4c6"
  },
  {
    "url": "assets/js/24.ca3d99f8.js",
    "revision": "64b73d1f969a5bb2f99763f0d4311f24"
  },
  {
    "url": "assets/js/25.6217f035.js",
    "revision": "9eb8e832ee6ebabfa53f3b80ebc225f5"
  },
  {
    "url": "assets/js/26.b0416570.js",
    "revision": "167e1c7ba83be3e8cb4823c650c79a07"
  },
  {
    "url": "assets/js/27.f831911d.js",
    "revision": "cbd6d1a496377692bc8018cca29f6554"
  },
  {
    "url": "assets/js/28.ac2acdc3.js",
    "revision": "8960e7cd97494cb3a47b89209d2bfc47"
  },
  {
    "url": "assets/js/29.a10f7ca0.js",
    "revision": "069b3335564ce011040fbc2c2e704bf5"
  },
  {
    "url": "assets/js/30.bb20d0d7.js",
    "revision": "d1e321f4f22b2069522098c312c81300"
  },
  {
    "url": "assets/js/31.ec357674.js",
    "revision": "2089f3e3dfe4541e744b95232a89ed0e"
  },
  {
    "url": "assets/js/32.ab2fcd4f.js",
    "revision": "2b2609cb5c19bf84c19d0d5b3ed39422"
  },
  {
    "url": "assets/js/33.7d532585.js",
    "revision": "2cde6578616819cb7bdd636118d6681f"
  },
  {
    "url": "assets/js/34.202c26b9.js",
    "revision": "ab7b1612b6af6c0a5c7e477fc5b8f197"
  },
  {
    "url": "assets/js/35.09889425.js",
    "revision": "03494888b8c71dcba4f3e086f450e7d6"
  },
  {
    "url": "assets/js/36.235d7fde.js",
    "revision": "a9e6efb83c1f741a8737d35bfafed9bb"
  },
  {
    "url": "assets/js/37.823e1802.js",
    "revision": "4587a62ea6cac1364922fa74c2d164a0"
  },
  {
    "url": "assets/js/38.d30963cd.js",
    "revision": "173c06913c507021d9c71edc489cd151"
  },
  {
    "url": "assets/js/39.3c86f29c.js",
    "revision": "7b2035796cc7028bf4eafd31efefbf62"
  },
  {
    "url": "assets/js/4.371bbd03.js",
    "revision": "169f250f7ddf69759cd4a1b92bfa17ca"
  },
  {
    "url": "assets/js/40.470fe32f.js",
    "revision": "1bfbedbc7c047c88269c3d6dc2d54b0b"
  },
  {
    "url": "assets/js/41.92007f0f.js",
    "revision": "e38786dbf40db0d34fb4fa653df4619d"
  },
  {
    "url": "assets/js/5.20409e57.js",
    "revision": "12b381c52188b4afb3f7afef4aa89b0d"
  },
  {
    "url": "assets/js/6.eff47b3f.js",
    "revision": "93690a767dfc205a42369d48baf48d16"
  },
  {
    "url": "assets/js/7.94f2f6e5.js",
    "revision": "3a1ae592d2be176c8c91d5a3b77b5ca6"
  },
  {
    "url": "assets/js/8.79a233c8.js",
    "revision": "8c37ec19325190d7fc1c591b1c0d0462"
  },
  {
    "url": "assets/js/9.ba37f04c.js",
    "revision": "114d802bdd1de30de158e13a40d3777b"
  },
  {
    "url": "assets/js/app.df516106.js",
    "revision": "696b9285f919ce46a3eb7bc0b853ad70"
  },
  {
    "url": "assets/js/vendors~flowchart.19e58078.js",
    "revision": "77dfd52409ab44ec62084c9496663728"
  },
  {
    "url": "cat.jpg",
    "revision": "24cd1b1fe0746c6b869b5b9d5a456dc0"
  },
  {
    "url": "categories/index.html",
    "revision": "cd76602035b10c541028685195c6dcd0"
  },
  {
    "url": "categories/WRF 技术手册-第四版/index.html",
    "revision": "ba4582fdd3c9f86423292c0e2fc51c37"
  },
  {
    "url": "categories/WRF 技术手册-第四版/page/2/index.html",
    "revision": "7073da0e2b2f32bfcd69d0e2ff9f9c40"
  },
  {
    "url": "categories/WRF-Chem 用户手册/index.html",
    "revision": "88433f2d6509b5a5d1845b5c02a56d70"
  },
  {
    "url": "categories/WRF-Chem 用户手册/page/2/index.html",
    "revision": "f887c5a9391cf234da261da4ee920d1f"
  },
  {
    "url": "Guide.html",
    "revision": "11e8576f16122b2d3be1c05c2c1fe2b8"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "b8fb30d1601c01e9e06b1d7c6d411b66"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "430d2f4b8b9f11c504be64ef98fb257c"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "4fca759f0d7c398f89c57a8c051fdd11"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "e55f1119ab9d93d731c10fa163d178a3"
  },
  {
    "url": "icons/icon-35x35.png",
    "revision": "01219b17cbb68c9412190f0218e5bdcd"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "371481a787a00a0f880bfbe4a2449601"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "02bb89e3bd8b32abf9c92215c842226a"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "8c570021ac6f7f9d7a495ae54213b728"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "82db3d82edb4bd96103b35b7f8488016"
  },
  {
    "url": "index.html",
    "revision": "b83b471cce0773c8fb6dbc5a1b63de28"
  },
  {
    "url": "sponsor-qrcode/alipay.jpg",
    "revision": "217f47353fd38d027f42710847903a8e"
  },
  {
    "url": "sponsor-qrcode/wechat.jpg",
    "revision": "8bf02c25f1d3eaa4981f54b2c7cdfc8b"
  },
  {
    "url": "tag/index.html",
    "revision": "8b943a6f04fe8f7018858420d2aba140"
  },
  {
    "url": "tag/translate/index.html",
    "revision": "29cc1c7c039cd006d14448094f70fa97"
  },
  {
    "url": "tag/translate/page/2/index.html",
    "revision": "9d525b75d0af1e60ccff827c9aef62a2"
  },
  {
    "url": "tag/translate/page/3/index.html",
    "revision": "cf737ddd9e764a04ba1989fc41e3b23a"
  },
  {
    "url": "tag/WRF/index.html",
    "revision": "926cd6f2d233c9aa562d8f1a2018828b"
  },
  {
    "url": "tag/WRF/page/2/index.html",
    "revision": "e672611024dc20ccd6b8a329745a73fd"
  },
  {
    "url": "tag/WRF/page/3/index.html",
    "revision": "03c9850c342b25b593df706c3a2c608e"
  },
  {
    "url": "timeline/index.html",
    "revision": "f3145915538ff5b8b13bd0c012b49587"
  },
  {
    "url": "wrf_chem_user_guide/1.1_Introduction.html",
    "revision": "a1197bedb9e3aa6e2f898efbc1b70cbe"
  },
  {
    "url": "wrf_chem_user_guide/1.2_Software.html",
    "revision": "c5305326713bf2a8b0ac2f624bd3bcff"
  },
  {
    "url": "wrf_chem_user_guide/1.3_Possible_applications.html",
    "revision": "bca66fca5b57847ec887540a6d8f9afe"
  },
  {
    "url": "wrf_chem_user_guide/1.4_Modeling_system_overview.html",
    "revision": "b4c85dc7447f661f780e7773ccbea901"
  },
  {
    "url": "wrf_chem_user_guide/2.1_Installation_Introduction.html",
    "revision": "02dd690ecbd0d5c0738f198c98a929cc"
  },
  {
    "url": "wrf_chem_user_guide/2.2_Building_the_WRF-chemistry_code.html",
    "revision": "3ceb50f424b61ad4bc16990413f2bf9f"
  },
  {
    "url": "wrf_chem_user_guide/3.1_Emissions_Generation_Overview.html",
    "revision": "30ad680d6456f5c6dd230ab8f8049b34"
  },
  {
    "url": "wrf_chem_user_guide/3.2_Generating_Dust_Emissions.html",
    "revision": "8b7a20c974ca5f4f47f37ddfb4102b1a"
  },
  {
    "url": "wrf_chem_user_guide/4.1_Running_WRF-Chem_Introduction.html",
    "revision": "52680ffa3743cc8e176639eee109fe75"
  },
  {
    "url": "wrf_chem_user_guide/4.2_Namelist_options_the_choice_of_CHEM_OPT.html",
    "revision": "a097e828c53bd13024e808c2758b303a"
  },
  {
    "url": "wrf_chem_user_guide/4.3_Other_chemistry_namelist_options.html",
    "revision": "af5e554ebb739d6b6b2e4d87dad65553"
  },
  {
    "url": "wrf_chem_user_guide/index.html",
    "revision": "28576769f099db79786b3b58ac441c6a"
  },
  {
    "url": "wrf_technote/1_Introduction.html",
    "revision": "331f49a4d864e7f6e4ba80ffe110dbe5"
  },
  {
    "url": "wrf_technote/1.1_Advanced_Research_WRF.html",
    "revision": "16474119e4059eaa7750d2fb0bc098cd"
  },
  {
    "url": "wrf_technote/1.2_Major_Features_of_the_ARW_System_Version_4.html",
    "revision": "159cf50b20183df559df3f3d3b219b0c"
  },
  {
    "url": "wrf_technote/11_Datra_Assimilation.html",
    "revision": "cae1ce15a1d82e6fb85d75ae502eafd9"
  },
  {
    "url": "wrf_technote/11.1_Introduction.html",
    "revision": "a71887a00ed345dc6ce9ec1db6b36fe4"
  },
  {
    "url": "wrf_technote/11.2_Improvements_to_the_WRFDA_Algorithm.html",
    "revision": "128a82aabff6ed0bb6ea1582669ab73f"
  },
  {
    "url": "wrf_technote/11.3_Background_Error_Covariances.html",
    "revision": "90af2ee1e64d8917e1872858af308d8b"
  },
  {
    "url": "wrf_technote/2_Governing_Equations.html",
    "revision": "6003dd9fd282621586c5f42135acc077"
  },
  {
    "url": "wrf_technote/2.1_Vertical_Coordinate_and_Flux-Form_Variables.html",
    "revision": "600bd603b4a7d48da08f81f0d59b4960"
  },
  {
    "url": "wrf_technote/2.2_Flux-Form_Euler_Equation.html",
    "revision": "e2a6ccd6e77506ccc8701270d1b05279"
  },
  {
    "url": "wrf_technote/2.3_Map_Projections_Coriolis_and_Curvature_Terms.html",
    "revision": "529196597922fc6b3d2833dc7ed58815"
  },
  {
    "url": "wrf_technote/2.4_Perturbation_Form_of_the_Governing_Equations.html",
    "revision": "9d6d0b68ca14225e280b4baff41eb9a2"
  },
  {
    "url": "wrf_technote/3.1_Temporal_Discretization.html",
    "revision": "029c566b55d9ad77bb6141e7c4dd7230"
  },
  {
    "url": "wrf_technote/index.html",
    "revision": "12e9e36dc676301168a8dd2d8c090bfa"
  },
  {
    "url": "wrf_technote/preface.html",
    "revision": "bb81f189679db42ed44e25e0691aa95c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
