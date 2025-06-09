import {defineConfig} from 'vitepress'

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
        plugins: [],
    },

    sitemap: {
        hostname: 'https://qqun.mcarc.top'
    },

    head: [
        ['link', {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
        ['meta', {name: 'theme-color', content: '#FFFFFF'}],
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/favicon.ico',
        nav: [
            {text: '首页', link: '/'},
            {text: '聊天记录', link: '/guide/', activeMatch: '/guide/'},
        ],

        sidebar: {
            '/': [
                {
                    text: '查看聊天记录',
                    items: [
                        {text: '聊天记录', link: '/guide/index.md'},
                    ]
                }
            ],
            '/guide/': [
                {
                    text: '聊天记录',
                    link: '/guide/index.md',
                    items: [
                        {
                            text: '2025年',
                            collapsed: false,
                            items: [
                                {text: '12月', link: '/guide/2025/12月.md'},
                                {text: '11月', link: '/guide/2025/11月.md'},
                            ]
                        },
                        {
                            text: '2024年',
                            collapsed: true,
                            items: [
                                {text: '12月', link: '/guide/2024/12月.md'},
                                {text: '11月', link: '/guide/2024/11月.md'},
                            ]
                        },
                    ]
                },

            ]
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/zihao-il/group-history-archive'}
        ],

        editLink: {
            pattern: 'https://github.com/zihao-il/group-history-archive/tree/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },

        search: {
            provider: 'local',
            options: {
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
