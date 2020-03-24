const pluginConf = require('./pluginConf');
const headConf = require('./headConf');
const themeConf = require('./themeConf');
const editThisOnly = require('./editThisOnly');

module.exports = {
    base: '/wrf/',
    title: editThisOnly.title,
    description: editThisOnly.description,
    dest: 'build',
    head: headConf,
    locales: {
        '/': {
            lang: 'zh-CN',
            title: editThisOnly.title,
            description: editThisOnly.description,
        },
    },
    theme: 'reco',
    themeConfig: themeConf,
    plugins: pluginConf,
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.use(require('@neilsustc/markdown-it-katex')),
            md.use(require('markdown-it-task-lists'))
        }
    }
}
