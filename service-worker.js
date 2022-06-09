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
    "revision": "ca956a8d3466d7ad62d0551ad714d7cb"
  },
  {
    "url": "assets/css/0.styles.aa524171.css",
    "revision": "6fbbc17adbc1cdc2ffca6550cad07ff1"
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
    "url": "assets/js/1.a88a63e6.js",
    "revision": "6d89ed86d3a73f3ee4fde558582c8d5c"
  },
  {
    "url": "assets/js/10.dfa7ccc4.js",
    "revision": "a4d798dbd0e8ac772826f901f8ccad2f"
  },
  {
    "url": "assets/js/11.8763549e.js",
    "revision": "7680d895f7f7b979824c15786ae21e0d"
  },
  {
    "url": "assets/js/12.66e9edef.js",
    "revision": "66e7fadd62a565436a9794ccc2361c97"
  },
  {
    "url": "assets/js/13.2404fbd6.js",
    "revision": "7a356859b87281ef5e1eb37a0eba57c2"
  },
  {
    "url": "assets/js/14.f2b0a97e.js",
    "revision": "d372a9dba93f24a39e16c771a5cafa0a"
  },
  {
    "url": "assets/js/15.c56ea1a4.js",
    "revision": "660ed1a42e45fedbf3dd50d24ed89688"
  },
  {
    "url": "assets/js/16.b79c1c2c.js",
    "revision": "c7d396958f1becb1c9e75fe1de733ad2"
  },
  {
    "url": "assets/js/17.aa21d047.js",
    "revision": "5c167c5e3d7d35d48120602f3af6d90c"
  },
  {
    "url": "assets/js/18.2c5719c7.js",
    "revision": "4cfe535a8c62c6aa0283858c975f2246"
  },
  {
    "url": "assets/js/19.e5bf4aa0.js",
    "revision": "7d092950169e91fb4c880fbdac24de1c"
  },
  {
    "url": "assets/js/20.3ca035b1.js",
    "revision": "34c544f9b862ea1ce5d2ca3a96eb2208"
  },
  {
    "url": "assets/js/21.8cea75e3.js",
    "revision": "2e64453b4912288c53e2f5b09bff2141"
  },
  {
    "url": "assets/js/22.7c29646b.js",
    "revision": "8f3f50fe549c3cb1a21a75729ce9a58c"
  },
  {
    "url": "assets/js/23.f83731c8.js",
    "revision": "246bc7fa2cbc999e398553e0a994c653"
  },
  {
    "url": "assets/js/24.e6654c93.js",
    "revision": "943cfcacd1d14c140874cea26c2edaa5"
  },
  {
    "url": "assets/js/25.13d7cf29.js",
    "revision": "5e23aca23905aa2855abf82acf3d52ed"
  },
  {
    "url": "assets/js/26.9f78a7b9.js",
    "revision": "b6e80866d9ac99a2cbd18c256238ebb5"
  },
  {
    "url": "assets/js/27.52c12848.js",
    "revision": "a54238e0105acaeec38c792f6421f89b"
  },
  {
    "url": "assets/js/28.9831c44e.js",
    "revision": "d807b49a692f84a38525968c362bccad"
  },
  {
    "url": "assets/js/29.e46ba1ef.js",
    "revision": "ab058a98494054e3a99e233ca7beb041"
  },
  {
    "url": "assets/js/30.64c1dbe2.js",
    "revision": "3558cd243b810abd6654deb61b24ef67"
  },
  {
    "url": "assets/js/31.bdaf16a3.js",
    "revision": "a09b00d40528007c5c4bba88d7918236"
  },
  {
    "url": "assets/js/32.db6995fa.js",
    "revision": "74be6f610bad925b33fdb507a5fedced"
  },
  {
    "url": "assets/js/33.56fc8d2f.js",
    "revision": "65f9a0b2f8988c85d77a93b6eb752885"
  },
  {
    "url": "assets/js/34.f480c754.js",
    "revision": "e9b27671e68d3659fac429dc2fce5d01"
  },
  {
    "url": "assets/js/35.b9a7c7f0.js",
    "revision": "e326582eb79ed4dcafab9082b71cb4c0"
  },
  {
    "url": "assets/js/36.79e3395e.js",
    "revision": "b0d4d5855d890ec6ebca588d63a9a65b"
  },
  {
    "url": "assets/js/37.42164d7c.js",
    "revision": "bb32ff87b057f27211f473874b5e79f6"
  },
  {
    "url": "assets/js/38.6f158a82.js",
    "revision": "49b0ef56cc2362513be94d758f964a03"
  },
  {
    "url": "assets/js/39.58935ed1.js",
    "revision": "9178669d07971dfd641d36c333b60040"
  },
  {
    "url": "assets/js/4.bf7a7d64.js",
    "revision": "5f35d0ec9f85929b0d4f7ee4f9e24be1"
  },
  {
    "url": "assets/js/40.7f6d526d.js",
    "revision": "c7b4eee0268e7317de23a8eb6dc14dc6"
  },
  {
    "url": "assets/js/41.abf941c4.js",
    "revision": "2a5eb859decc11abe9eb8e35dc7badcb"
  },
  {
    "url": "assets/js/5.452f6b70.js",
    "revision": "59327544549a9e9b8c869f587680855f"
  },
  {
    "url": "assets/js/6.9e968b24.js",
    "revision": "359c43b23ef9e1364d38ca3fd4c05d70"
  },
  {
    "url": "assets/js/7.3d3eedb6.js",
    "revision": "4a0f092ba0250c23771d4650035cd1d3"
  },
  {
    "url": "assets/js/8.db451fdf.js",
    "revision": "75455652fc8b6b80afebabc9fb42d90b"
  },
  {
    "url": "assets/js/9.7ad52431.js",
    "revision": "9a99f7a7f70f3a0a62841dedaaae84c7"
  },
  {
    "url": "assets/js/app.1b83629e.js",
    "revision": "55200ab00768baa65e3a37a9135712ba"
  },
  {
    "url": "assets/js/vendors~flowchart.d3e81334.js",
    "revision": "ad43c46626bea111e94551202ce3683d"
  },
  {
    "url": "cat.jpg",
    "revision": "24cd1b1fe0746c6b869b5b9d5a456dc0"
  },
  {
    "url": "categories/index.html",
    "revision": "62309f9aadd216bb8161f5924979f20a"
  },
  {
    "url": "categories/WRF 技术手册-第四版/index.html",
    "revision": "45195d2383a42ee476c4031fbb57aa06"
  },
  {
    "url": "categories/WRF 技术手册-第四版/page/2/index.html",
    "revision": "d4e79d1063fd6641c35a122b0d428c43"
  },
  {
    "url": "categories/WRF-Chem 用户手册/index.html",
    "revision": "e5125376402670131da9870bb8f35142"
  },
  {
    "url": "categories/WRF-Chem 用户手册/page/2/index.html",
    "revision": "5878ab20490a0f857bec10ba2e7dbf6b"
  },
  {
    "url": "Guide.html",
    "revision": "0fabc74d799ce18a2b6ea3f8ffad6bc0"
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
    "revision": "a8d23a5dd8acede9d3bd96ad271762b3"
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
    "revision": "1f3e112fc52358b4035ff63181b9eea3"
  },
  {
    "url": "tag/translate/index.html",
    "revision": "b3d98f74f95347dfe484a410050b41a0"
  },
  {
    "url": "tag/translate/page/2/index.html",
    "revision": "c485e34627ce17246912809f78c137cd"
  },
  {
    "url": "tag/translate/page/3/index.html",
    "revision": "72911fce7883d8c44d688b96a3fdbf98"
  },
  {
    "url": "tag/WRF/index.html",
    "revision": "c6f11bba95344600165f09ea2aa37671"
  },
  {
    "url": "tag/WRF/page/2/index.html",
    "revision": "89270b83349624ae7d1e0914b70ea616"
  },
  {
    "url": "tag/WRF/page/3/index.html",
    "revision": "848d5365c1f13a96d19797ef2952c14d"
  },
  {
    "url": "timeline/index.html",
    "revision": "b28b22350dca3162946cfa05c2c97e6a"
  },
  {
    "url": "wrf_chem_user_guide/1.1_Introduction.html",
    "revision": "c7fff2a200c0fcb8268fb3c9c4c3e541"
  },
  {
    "url": "wrf_chem_user_guide/1.2_Software.html",
    "revision": "0880335700c69c219a4ab02be2e149aa"
  },
  {
    "url": "wrf_chem_user_guide/1.3_Possible_applications.html",
    "revision": "68d5d2d2a0451c370b3c6953c0ede8c3"
  },
  {
    "url": "wrf_chem_user_guide/1.4_Modeling_system_overview.html",
    "revision": "cb9879d32c024d3e6b3e58c26accef9d"
  },
  {
    "url": "wrf_chem_user_guide/2.1_Installation_Introduction.html",
    "revision": "b48acee25d5f4b54f9d88058c0eaadcd"
  },
  {
    "url": "wrf_chem_user_guide/2.2_Building_the_WRF-chemistry_code.html",
    "revision": "7ba76c142643cf9164d5e0c12022574d"
  },
  {
    "url": "wrf_chem_user_guide/3.1_Emissions_Generation_Overview.html",
    "revision": "a483df6dda945238aff387c66aa86b3b"
  },
  {
    "url": "wrf_chem_user_guide/3.2_Generating_Dust_Emissions.html",
    "revision": "c73c82ba5098a1d0c0b3587882d26370"
  },
  {
    "url": "wrf_chem_user_guide/4.1_Running_WRF-Chem_Introduction.html",
    "revision": "69d28a10a2c6c873d588932c8ce1d78b"
  },
  {
    "url": "wrf_chem_user_guide/4.2_Namelist_options_the_choice_of_CHEM_OPT.html",
    "revision": "2ce4774a5bf87ecd433757eafa03f4ae"
  },
  {
    "url": "wrf_chem_user_guide/4.3_Other_chemistry_namelist_options.html",
    "revision": "5045af5fdccf028acb08e4bfa055a95a"
  },
  {
    "url": "wrf_chem_user_guide/index.html",
    "revision": "2c0f3f650d22b541e1b86d535ef6a6f3"
  },
  {
    "url": "wrf_technote/1_Introduction.html",
    "revision": "3ec7c717582b2a0413f12b3ffefda192"
  },
  {
    "url": "wrf_technote/1.1_Advanced_Research_WRF.html",
    "revision": "17f6811eb0c254a7f40b2784dc08811c"
  },
  {
    "url": "wrf_technote/1.2_Major_Features_of_the_ARW_System_Version_4.html",
    "revision": "bcbc85a4c2f25f6afbea0408ae822bf6"
  },
  {
    "url": "wrf_technote/11_Datra_Assimilation.html",
    "revision": "baadab0f3bda267977ed526480fc7963"
  },
  {
    "url": "wrf_technote/11.1_Introduction.html",
    "revision": "d74adf8ead003f09559fb5c4be27fa08"
  },
  {
    "url": "wrf_technote/11.2_Improvements_to_the_WRFDA_Algorithm.html",
    "revision": "4644c862c0b0b02116020c870bef912b"
  },
  {
    "url": "wrf_technote/11.3_Background_Error_Covariances.html",
    "revision": "7cdb41424d31592599a34c16aecd3937"
  },
  {
    "url": "wrf_technote/2_Governing_Equations.html",
    "revision": "4aba8a39b6abd53ac0623aaf977522c3"
  },
  {
    "url": "wrf_technote/2.1_Vertical_Coordinate_and_Flux-Form_Variables.html",
    "revision": "489ffb3d85cbf9af6215cdf11b54f6ff"
  },
  {
    "url": "wrf_technote/2.2_Flux-Form_Euler_Equation.html",
    "revision": "068801d827399dbf84524787ca24c33f"
  },
  {
    "url": "wrf_technote/2.3_Map_Projections_Coriolis_and_Curvature_Terms.html",
    "revision": "abd4163ede950dcd1f4e1e03321dc78d"
  },
  {
    "url": "wrf_technote/2.4_Perturbation_Form_of_the_Governing_Equations.html",
    "revision": "13c8168c827f242cb7dd5f14aed7768e"
  },
  {
    "url": "wrf_technote/3.1_Temporal_Discretization.html",
    "revision": "fdc41015d4715a7b8f3e09b875d9b56c"
  },
  {
    "url": "wrf_technote/index.html",
    "revision": "2f89dc110393698a65a7ef51a3668461"
  },
  {
    "url": "wrf_technote/preface.html",
    "revision": "f9e3928c068bc70f64cfd36c1314c0ac"
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
