const googleAnalytics = require('./googleAnalytics');

module.exports = {
    'vuepress-plugin-smooth-scroll': {},
    'reading-progress': {},
    'vuepress-plugin-auto-sidebar': {
    },
    '@vuepress/google-analytics': {
        'ga': googleAnalytics
    },
    'flowchart':{},
    'graysite': {
        startDate: '2020-04-03 00:00:00',
        endDate: '2020-04-04 23:59:59'
    },
}