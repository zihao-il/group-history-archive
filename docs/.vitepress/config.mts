import {defineConfig} from 'vitepress'
import {pagefindPlugin} from 'vitepress-plugin-pagefind'
import fs from 'fs'
import path from 'path'


function generateChatSidebar(): any[] {
    const guideRoot = path.resolve(__dirname, '../guide')
    const currentYear = new Date().getFullYear()
    const yearDirs = fs.readdirSync(guideRoot)
        .filter(name => /^\d{4}$/.test(name))
        .sort((a, b) => Number(b) - Number(a))

    const yearSections = yearDirs.map(year => {
        const yearPath = path.join(guideRoot, year)
        const mdFiles = fs.readdirSync(yearPath)
            .filter(name => /^\d{1,2}月\.md$/.test(name))
            .sort((a, b) => parseInt(b) - parseInt(a))

        const items = mdFiles.map(file => ({
            text: file.replace('.md', ''),
            link: `/guide/${year}/${file}`
        }))

        return {
            text: `${year}年`,
            collapsed: Number(year) !== currentYear,
            items
        }
    })

    return [
        {
            text: '聊天记录',
            link: '/guide/index.md',
            items: yearSections
        },
        {text: '无法确定记录', link: '/guide/未知时间.md'},
        {text: '语音记录', link: '/voices/index.md'},
        {text: '牛至诗集', link: '/guide/牛至诗集.md'},
        {text: '黑名单记录', link: '/blacklist/index.md'},
    ]
}


// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Q群发言档案馆",
    description: "Q群发言档案馆-记录群友各种逆天发言",
    lang: 'zh-CN',
    lastUpdated: true,
    markdown: {
        config(md) {

        },
        theme: {
            light: 'min-light',
            dark: 'one-dark-pro'
        },
        image: {
            lazyLoading: true
        },
        lineNumbers: true,
    },

    vite: {
        plugins: [
            pagefindPlugin({
                btnPlaceholder: '搜索发言',
                placeholder: '搜索发言',
                emptyText: '没有找到任何结果',
                heading: '共: {{searchResult}} 条结果',
                forceLanguage: 'zh-cn',
                toSelect: '回车选择',
                toNavigate: '上下键切换',
                toClose: 'ESC 关闭搜索',
                searchBy: '搜索提供者',
            }),],
    },

    sitemap: {
        hostname: 'https://qqun.mcarc.top'
    },

    head: [
        ['link', {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
        ['meta', {name: 'theme-color', content: '#FFFFFF'}],
        ['link', {rel: 'manifest', href: '/manifest.webmanifest'}],
        [
            "script",
            {
                async: "",
                src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3895263615276360",
                crossorigin: "anonymous"
            }
        ]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon.ico',
        nav: [
            {text: '首页', link: '/'},
            {text: '聊天记录', link: '/guide/', activeMatch: '/guide/'},
            {text: '语音记录', link: '/voices/', activeMatch: '/voices/'},
            {text: '黑名单记录', link: '/blacklist/index.md'},

        ],

        sidebar: {
            '/': [
                {
                    text: '查看聊天记录',
                    items: [
                        {text: '聊天记录', link: '/guide/index.md'},
                        {text: '语音记录', link: '/voices/index.md'},
                        {text: '牛至诗集', link: '/guide/牛至诗集.md'},
                        {text: '黑名单用户', link: '/blacklist/index.md'},

                    ]
                }
            ],
            '/guide/': generateChatSidebar()
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/zihao-il/group-history-archive'}
        ],

        editLink: {
            pattern: 'https://github.com/zihao-il/group-history-archive/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        search: {
            provider: 'algolia',
            options: {
                appId: 'SD6MK33RGP',
                apiKey: '7ebcf99c210e55b9afd8b39f584f8459',
                indexName: 'qun_vitePress',
                translations: {
                    button: {
                        buttonText: '搜索发言',
                        buttonAriaLabel: '搜索发言'
                    },
                    modal: {
                        noResultsText: '没有找到任何结果',
                        resetButtonTitle: '清除关键词',
                        footer: {
                            selectText: '回车选择',
                            navigateText: '上下键切换',
                            closeText: 'ESC 关闭搜索'
                        }
                    }
                }
            }
        },

        footer: {
            message: 'MIT License',
            copyright: 'Copyright © 2025 Q群发言档案馆',
        },

        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        outline: {
            label: '页面导航'
        },

        lastUpdated: {
            text: '最后更新于'
        },

        notFound: {
            title: '页面未找到',
            quote:
                '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
            linkLabel: '前往首页',
            linkText: '带我回首页'
        },

        externalLinkIcon: true,
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容',
    }

})
