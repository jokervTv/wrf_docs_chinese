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
    "revision": "e6ad93d4370b76b3632ce9a67b04eb33"
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
    "url": "assets/js/app.339fced8.js",
    "revision": "ad42a0cd914cbf3ba10973bb59de729a"
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
    "revision": "1b5dacffda4505049b380814a45ed6a2"
  },
  {
    "url": "categories/WRF 技术手册-第四版/index.html",
    "revision": "4ace21276961a556d806206fbf270f0e"
  },
  {
    "url": "categories/WRF 技术手册-第四版/page/2/index.html",
    "revision": "9143bd5b0ba7ec613928ae7549c193c5"
  },
  {
    "url": "categories/WRF-Chem 用户手册/index.html",
    "revision": "6ac839dc21ef726ff201cbfae35f7f91"
  },
  {
    "url": "categories/WRF-Chem 用户手册/page/2/index.html",
    "revision": "a76ba2c56590f0906b0eb88252e3990e"
  },
  {
    "url": "Guide.html",
    "revision": "2407f27848e155a3867de1f208bd512a"
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
    "revision": "7614a69e2dc9959f8d27f8668f5537ef"
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
    "revision": "08fe8c0588a32b57ad87bd9a7a863f4c"
  },
  {
    "url": "tag/translate/index.html",
    "revision": "bd8e9c86709a301c900e509672883844"
  },
  {
    "url": "tag/translate/page/2/index.html",
    "revision": "dca8c3f63cae2394dc195a411891820f"
  },
  {
    "url": "tag/translate/page/3/index.html",
    "revision": "24140a478349b5c57102649a4a67e199"
  },
  {
    "url": "tag/WRF/index.html",
    "revision": "dd15c13844fe0cf2cac45b5efe6c3c88"
  },
  {
    "url": "tag/WRF/page/2/index.html",
    "revision": "cb0e4d0da59d54274f6082262a398f32"
  },
  {
    "url": "tag/WRF/page/3/index.html",
    "revision": "64181ae5b19d6fd1338e4a331c152eec"
  },
  {
    "url": "timeline/index.html",
    "revision": "cee3337949494438519c8a78db0f3f14"
  },
  {
    "url": "wrf_chem_user_guide/1.1_Introduction.html",
    "revision": "3865b211f2a10570c9282303635fc41d"
  },
  {
    "url": "wrf_chem_user_guide/1.2_Software.html",
    "revision": "c5d68393d3a51d4c2aa5e3dd31006904"
  },
  {
    "url": "wrf_chem_user_guide/1.3_Possible_applications.html",
    "revision": "d13bdd87a9bfb83b71c01fd6a90af942"
  },
  {
    "url": "wrf_chem_user_guide/1.4_Modeling_system_overview.html",
    "revision": "4aae06a8ee7d7d840bfd3791422710e2"
  },
  {
    "url": "wrf_chem_user_guide/2.1_Installation_Introduction.html",
    "revision": "d08777075121cb44cccdaa0ce00bd95e"
  },
  {
    "url": "wrf_chem_user_guide/2.2_Building_the_WRF-chemistry_code.html",
    "revision": "b58f894fd3a6d9b30d1fa18c48630fc3"
  },
  {
    "url": "wrf_chem_user_guide/3.1_Emissions_Generation_Overview.html",
    "revision": "d6e14d87268574c8c274dd9977eaa004"
  },
  {
    "url": "wrf_chem_user_guide/3.2_Generating_Dust_Emissions.html",
    "revision": "272bb7a2eb5cfc319cd08d06fdf90f1a"
  },
  {
    "url": "wrf_chem_user_guide/4.1_Running_WRF-Chem_Introduction.html",
    "revision": "3705c7b82edab606ebcad4d14a57119f"
  },
  {
    "url": "wrf_chem_user_guide/4.2_Namelist_options_the_choice_of_CHEM_OPT.html",
    "revision": "8611e5cb824d609808f8c2d414e98875"
  },
  {
    "url": "wrf_chem_user_guide/4.3_Other_chemistry_namelist_options.html",
    "revision": "1b0de3af3a0317ff228394018862912a"
  },
  {
    "url": "wrf_chem_user_guide/index.html",
    "revision": "b1118fe64351f1047bd084b92cf34042"
  },
  {
    "url": "wrf_technote/1_Introduction.html",
    "revision": "c3c274c1bc8819b59c409331f46d830d"
  },
  {
    "url": "wrf_technote/1.1_Advanced_Research_WRF.html",
    "revision": "116eab5d74c04805e2898ed156060b60"
  },
  {
    "url": "wrf_technote/1.2_Major_Features_of_the_ARW_System_Version_4.html",
    "revision": "b842c23c342d75cf8e7c3bfb8ffdde8f"
  },
  {
    "url": "wrf_technote/11_Datra_Assimilation.html",
    "revision": "76d8a92509ff59dc686877c6c07342d5"
  },
  {
    "url": "wrf_technote/11.1_Introduction.html",
    "revision": "4b28bdf55f2ac4ee75f3d9022039ce60"
  },
  {
    "url": "wrf_technote/11.2_Improvements_to_the_WRFDA_Algorithm.html",
    "revision": "6e1d1bd881517d582f31de66935d9845"
  },
  {
    "url": "wrf_technote/11.3_Background_Error_Covariances.html",
    "revision": "ace38515f4bd9e1775a4a47e41d7fb74"
  },
  {
    "url": "wrf_technote/2_Governing_Equations.html",
    "revision": "adf390c6616be00bbdc992a8f45280f5"
  },
  {
    "url": "wrf_technote/2.1_Vertical_Coordinate_and_Flux-Form_Variables.html",
    "revision": "4193c1bf8b1c2969be969d0e63a14af5"
  },
  {
    "url": "wrf_technote/2.2_Flux-Form_Euler_Equation.html",
    "revision": "80dd3fb2bf8f62d7befa373f4a2df8c0"
  },
  {
    "url": "wrf_technote/2.3_Map_Projections_Coriolis_and_Curvature_Terms.html",
    "revision": "dae92508ea7504ec8064f491806a61b0"
  },
  {
    "url": "wrf_technote/2.4_Perturbation_Form_of_the_Governing_Equations.html",
    "revision": "6e32eda297d8d698cb7a8bffe5f71a73"
  },
  {
    "url": "wrf_technote/3.1_Temporal_Discretization.html",
    "revision": "daff9411848ffdc3ca6b792396dfc4a4"
  },
  {
    "url": "wrf_technote/index.html",
    "revision": "27be9ceaaf23d5881a0771188844821a"
  },
  {
    "url": "wrf_technote/preface.html",
    "revision": "d2208d9a8166f338015f1b33beac7d3c"
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
