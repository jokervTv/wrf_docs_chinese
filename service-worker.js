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
    "revision": "bf27666c07c5b507f02e8e8445517ce0"
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
    "url": "assets/js/1.b22ba87a.js",
    "revision": "0e3e47bbecf9cd8bc48a23fee8cbf89d"
  },
  {
    "url": "assets/js/10.472cee86.js",
    "revision": "dc25426e27fa454266a4e23748492db7"
  },
  {
    "url": "assets/js/11.9899dc2e.js",
    "revision": "6449bfb5c71cf11a0e46da5d232537ef"
  },
  {
    "url": "assets/js/12.eb4878c9.js",
    "revision": "a1a1113df1e3bb2aad7a0c1877bfa2f6"
  },
  {
    "url": "assets/js/13.d71478db.js",
    "revision": "84c4b0d46c9e7fd847af451a756a940f"
  },
  {
    "url": "assets/js/14.1e056469.js",
    "revision": "29459a782c98bfbb5eb46c3e36731d42"
  },
  {
    "url": "assets/js/15.594d6582.js",
    "revision": "2ca9b4cd24ed8a5dc1ae29317dc7f6f3"
  },
  {
    "url": "assets/js/16.9906c506.js",
    "revision": "f01b6af235dd89ecfb050110d4489e9b"
  },
  {
    "url": "assets/js/17.ee5fbb90.js",
    "revision": "1393b66852009c20f56a9d483ae42cbb"
  },
  {
    "url": "assets/js/18.0e83e706.js",
    "revision": "4780caadda00e5d7dcb73ea8d867a30c"
  },
  {
    "url": "assets/js/19.7e76e33b.js",
    "revision": "40f08fb6b31e899e4005f945fdf2e303"
  },
  {
    "url": "assets/js/20.0a8d8359.js",
    "revision": "4546cc1a04959ff01dc27b5e8b431d39"
  },
  {
    "url": "assets/js/21.452297ca.js",
    "revision": "c884d501baba65f2448badeeeb12d034"
  },
  {
    "url": "assets/js/22.965bb6b8.js",
    "revision": "ce806276b2a4964649ffd0fc318a18ab"
  },
  {
    "url": "assets/js/23.283e145c.js",
    "revision": "dbbc4eb7b8bd83d2bcd5b165b5458d3c"
  },
  {
    "url": "assets/js/24.e0f09ff2.js",
    "revision": "ee319843a3eca8992189e998419d95c9"
  },
  {
    "url": "assets/js/25.de5f0623.js",
    "revision": "4ae29f9ab3f33038cbd0ca99db94cb94"
  },
  {
    "url": "assets/js/26.fcb27ed2.js",
    "revision": "9f8de5df00fe6ae10aa0931725272ce7"
  },
  {
    "url": "assets/js/27.f75349b7.js",
    "revision": "5355aa298813548db83e470b0dc6c1ac"
  },
  {
    "url": "assets/js/28.245bf4c1.js",
    "revision": "d8cad2e5edc4c172bbfbbfe617b91a94"
  },
  {
    "url": "assets/js/29.8dc38778.js",
    "revision": "4d952a5bff2a9dea13abe4f3d727dd4f"
  },
  {
    "url": "assets/js/30.7555ccfe.js",
    "revision": "4a0a0d0c5a94c8a974947f7856ec288a"
  },
  {
    "url": "assets/js/31.c82a55bc.js",
    "revision": "c4c40b439a97d0e682d7840d0bda1340"
  },
  {
    "url": "assets/js/32.ac2fbb39.js",
    "revision": "ba03162dcf91191fac60cca446b5af06"
  },
  {
    "url": "assets/js/33.5c14fa84.js",
    "revision": "1a41980dce14b16115ecd3224739a853"
  },
  {
    "url": "assets/js/34.b77913bc.js",
    "revision": "2bcb5379bf7fe794d9e3db9a4fc2146a"
  },
  {
    "url": "assets/js/35.f8867899.js",
    "revision": "2c9f57dface4183e6ffb3ce00f2855ec"
  },
  {
    "url": "assets/js/36.9a5f7ddc.js",
    "revision": "c63d0d50e04d9f57d72d6215a3f01388"
  },
  {
    "url": "assets/js/37.5ea8e720.js",
    "revision": "a2164dea3e13a3e47e3493d967e8e0cd"
  },
  {
    "url": "assets/js/38.356e900c.js",
    "revision": "c399a170fc9eec3bdce77816c608237b"
  },
  {
    "url": "assets/js/39.6f5c4d5f.js",
    "revision": "7149cc331b0909688207e11a797ad4a4"
  },
  {
    "url": "assets/js/4.7ba1ea20.js",
    "revision": "29f87849f06cc0d9c09cfdf419942ced"
  },
  {
    "url": "assets/js/40.e2dc5081.js",
    "revision": "4ac84e50ad74dc8a2b7284f39ebe80f2"
  },
  {
    "url": "assets/js/41.1fe32736.js",
    "revision": "c775ce53f4df3f73ce397dedf2b4ab60"
  },
  {
    "url": "assets/js/5.3488c728.js",
    "revision": "833a4058d5e66c4a72ff97d49fd426fd"
  },
  {
    "url": "assets/js/6.b4127b4f.js",
    "revision": "7f23503d9d991af365a9477e63d8b864"
  },
  {
    "url": "assets/js/7.65e5d82c.js",
    "revision": "9081cb5b3116f2ddbad0c761fc26414b"
  },
  {
    "url": "assets/js/8.ae7a5305.js",
    "revision": "ab62668ac0b05dd3bc83946cb41bd2ce"
  },
  {
    "url": "assets/js/9.2f4d6cd2.js",
    "revision": "bd4785fbd012d1b2aec4dafc3f82fcf0"
  },
  {
    "url": "assets/js/app.c18d9f64.js",
    "revision": "60650256449a73609d8e873d0ea30b43"
  },
  {
    "url": "assets/js/vendors~flowchart.8cc1a622.js",
    "revision": "606cfc06cc476b84cbce2c1f332de5a4"
  },
  {
    "url": "cat.jpg",
    "revision": "24cd1b1fe0746c6b869b5b9d5a456dc0"
  },
  {
    "url": "categories/index.html",
    "revision": "87f6d4a3143ec85af237b10cf10789a9"
  },
  {
    "url": "categories/WRF 技术手册-第四版/index.html",
    "revision": "0c50cba0504b329fd43d3b61a6654ac1"
  },
  {
    "url": "categories/WRF 技术手册-第四版/page/2/index.html",
    "revision": "cb929ca07872af85c8b0a49e5f00010a"
  },
  {
    "url": "categories/WRF-Chem 用户手册/index.html",
    "revision": "d19375b07fd7bb95ee3291721569d728"
  },
  {
    "url": "categories/WRF-Chem 用户手册/page/2/index.html",
    "revision": "37b9af077a798553f607a82d5c2d157d"
  },
  {
    "url": "Guide.html",
    "revision": "e197e8788708d33938b90dd4f2462247"
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
    "revision": "5f77abf3ded137f51af2d14d0102b716"
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
    "revision": "b04efb2cdf10677409c85307282daa83"
  },
  {
    "url": "tag/translate/index.html",
    "revision": "00d7942425513b0ceb084a6e12533c4a"
  },
  {
    "url": "tag/translate/page/2/index.html",
    "revision": "93de85a21c79d16d021df178463f7e07"
  },
  {
    "url": "tag/translate/page/3/index.html",
    "revision": "b62796404fb19f1aaaa08399f35bee6d"
  },
  {
    "url": "tag/WRF/index.html",
    "revision": "13ee84d5139ea2f1fbd3ba9154508e2a"
  },
  {
    "url": "tag/WRF/page/2/index.html",
    "revision": "35b487e848535cfc1dfad88d5cf9ad46"
  },
  {
    "url": "tag/WRF/page/3/index.html",
    "revision": "9ca74c5763a30e1e865b257abe141081"
  },
  {
    "url": "timeline/index.html",
    "revision": "b31f1cd082f6f742c9f8bef7bef08a5c"
  },
  {
    "url": "wrf_chem_user_guide/1.1_Introduction.html",
    "revision": "26651d9db0db9d047d81be7b11e4571d"
  },
  {
    "url": "wrf_chem_user_guide/1.2_Software.html",
    "revision": "daa9bb9786ebe2cb19e7e0b3fccc703b"
  },
  {
    "url": "wrf_chem_user_guide/1.3_Possible_applications.html",
    "revision": "3108692962d1ead4c1c600c0c3e41c16"
  },
  {
    "url": "wrf_chem_user_guide/1.4_Modeling_system_overview.html",
    "revision": "abf990407784d8f28aa92376eacbff79"
  },
  {
    "url": "wrf_chem_user_guide/2.1_Installation_Introduction.html",
    "revision": "8280b90b67682a2de7a1b9b4d44d9cc4"
  },
  {
    "url": "wrf_chem_user_guide/2.2_Building_the_WRF-chemistry_code.html",
    "revision": "c406afa05a12080569ac6d7ebcdc8e71"
  },
  {
    "url": "wrf_chem_user_guide/3.1_Emissions_Generation_Overview.html",
    "revision": "90c9f29fd7076ab7fdd30e73ad434fbf"
  },
  {
    "url": "wrf_chem_user_guide/3.2_Generating_Dust_Emissions.html",
    "revision": "6bd83c6fb960a27d6a85e7f0c5d8a2e6"
  },
  {
    "url": "wrf_chem_user_guide/4.1_Running_WRF-Chem_Introduction.html",
    "revision": "eda8c6a6b4a051db34b66e16e0a89cbc"
  },
  {
    "url": "wrf_chem_user_guide/4.2_Namelist_options_the_choice_of_CHEM_OPT.html",
    "revision": "11926e31eba8bcffda3a421434a97d6e"
  },
  {
    "url": "wrf_chem_user_guide/4.3_Other_chemistry_namelist_options.html",
    "revision": "47bd96248dea80f278328bc6c2cc006e"
  },
  {
    "url": "wrf_chem_user_guide/index.html",
    "revision": "3c0e9bf7480b512ab05372ee6d6f1bab"
  },
  {
    "url": "wrf_technote/1_Introduction.html",
    "revision": "b5f9f19016f5dcca980eb4e0c893cb75"
  },
  {
    "url": "wrf_technote/1.1_Advanced_Research_WRF.html",
    "revision": "708a23cd998d42cbeb2e236a891eff33"
  },
  {
    "url": "wrf_technote/1.2_Major_Features_of_the_ARW_System_Version_4.html",
    "revision": "84e31c97cf58d6b24d749c6516c9ff81"
  },
  {
    "url": "wrf_technote/11_Datra_Assimilation.html",
    "revision": "0117d01834f4d55547c87adca857ca97"
  },
  {
    "url": "wrf_technote/11.1_Introduction.html",
    "revision": "5b1e0208501ce370924d707bd72738c3"
  },
  {
    "url": "wrf_technote/11.2_Improvements_to_the_WRFDA_Algorithm.html",
    "revision": "2e0ebdc53f969e1d56943050aad89044"
  },
  {
    "url": "wrf_technote/11.3_Background_Error_Covariances.html",
    "revision": "06be208c354c9b9e98ed578cb167ca0d"
  },
  {
    "url": "wrf_technote/2_Governing_Equations.html",
    "revision": "a31569c978fad7b0c5eadaf14e66c0de"
  },
  {
    "url": "wrf_technote/2.1_Vertical_Coordinate_and_Flux-Form_Variables.html",
    "revision": "716a6a520cdd6bced23689b3151e9e06"
  },
  {
    "url": "wrf_technote/2.2_Flux-Form_Euler_Equation.html",
    "revision": "87b016b9a505c5ba3f202d30cf766625"
  },
  {
    "url": "wrf_technote/2.3_Map_Projections_Coriolis_and_Curvature_Terms.html",
    "revision": "209d0d6b1e0ffee5a92507cb127c5616"
  },
  {
    "url": "wrf_technote/2.4_Perturbation_Form_of_the_Governing_Equations.html",
    "revision": "7051942410fb991318e1fd35f4adaede"
  },
  {
    "url": "wrf_technote/3.1_Temporal_Discretization.html",
    "revision": "90d292e027e8192401e6a28ea6bbe06a"
  },
  {
    "url": "wrf_technote/index.html",
    "revision": "ee937439ced51246b661a6b8de0bd71f"
  },
  {
    "url": "wrf_technote/preface.html",
    "revision": "08fb0f00c22dbaa06f760de5ed5fca36"
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
