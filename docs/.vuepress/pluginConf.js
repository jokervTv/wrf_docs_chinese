const googleAnalytics = require('./googleAnalytics');

module.exports = {
    'vuepress-plugin-smooth-scroll': {},
    'seo': {},
    'sitemap': {
        hostname: 'https://jokervtv.top/wrf/'
    },
    'reading-progress': {},
    'vuepress-plugin-auto-sidebar': {
    },
    'vuepress-plugin-baidu-autopush': {},
    '@vuepress/google-analytics': {
        'ga': googleAnalytics
    },
    'flowchart':{}
}