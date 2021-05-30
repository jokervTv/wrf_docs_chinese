const googleAnalytics = require('./googleAnalytics');

module.exports = {
    'vuepress-plugin-smooth-scroll': {},
    'vuepress-plugin-cat': {},
    '@vuepress/last-updated': {
        transformer(timestamp) {
            return timestamp;
        }
    },
    'seo': {},
    'sitemap': {
        hostname: 'https://jokervtv.top/wrf/'
    },
    'reading-progress': {},
    'vuepress-plugin-auto-sidebar': {
    },
    'vuepress-plugin-baidu-autopush': {},
    'minimal-analytics': {
        'ga': googleAnalytics
    },
    'flowchart': {},
    'vuepress-plugin-code-copy': {
        successText: "复制成功！",
        backgroundColor: "#2FB800",
        color: "#3eaf7c"
    },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "有新内容可用。",
            buttonText: "刷新"
        }
    },
    'graysite': {
        startDate: '2020-04-03 00:00:00',
        endDate: '2020-04-04 23:59:59'
    }, 'vuepress-plugin-right-anchor': {
        showLevel: 1,
    },
    //'vuepress-plugin-sponsor': {
    //    theme: 'simple',
    //    alipay: '/sponsor-qrcode/alipay.jpg',
    //    wechat: '/sponsor-qrcode/wechat.jpg',
    //    paypal: 'https://www.paypal.me/zhangyp6603',
    //    duration: 2000
    //},
    'last-reading': {
        popupConfig: {
            message: '返回之前位置',
            buttonText: '确定'
        }
    },
    'check-md': {
        pattern: '**/*.md'
    },
}