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
    'graysite': {
        startDate: '2020-04-03 00:00:00',
        endDate: '2020-04-04 23:59:59'
    },
    'flowchart':{}
}