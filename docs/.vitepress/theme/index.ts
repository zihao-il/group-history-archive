// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import {useData, useRoute} from 'vitepress';
import {onMounted, h, watch} from 'vue';
import './styles.css'
import '@bprogress/core/css';
import {BProgress} from '@bprogress/core';
import mediumZoom from 'medium-zoom';

// VolumeBar QWindow RubyCurtain Curtain on code from: https://github.com/GraiaCommunity/Docs
// License: MIT

import Curtain from "./components/Curtain.vue"
import RubyCurtain from "./components/RubyCurtain.vue"
import QWindow from './components/QWindow.vue'
import VolumeBar from './components/VolumeBar.vue'

import BackTop from "./components/BackTop.vue";

import {FakeQQUI} from 'fake-qq-ui'
import 'fake-qq-ui/styles/fake-qq-ui.css'
import 'fake-qq-ui/styles/light.scss'
import 'fake-qq-ui/styles/dark.scss'


export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-footer-before': () => h(BackTop),
        })
    },
    enhanceApp({app}) {
        app.component('Curtain', Curtain)
        app.component('RubyCurtain', RubyCurtain)
        app.component('QWindow', QWindow)
        app.component('VolumeBar', VolumeBar)
        app.use(FakeQQUI)
    },
    setup() {
        BProgress.configure({
            showSpinner: false
        });
        const {frontmatter, isDark} = useData();
        const route = useRoute();
        watch(
            () => route.path,
            (newPath, oldPath) => {
                BProgress.start()
                requestAnimationFrame(() => {
                    BProgress.done()
                    initZoom()
                })
            }
        );
        const updateThemeColor = (dark: boolean) => {
            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) {
                meta.setAttribute('content', dark ? '#1B1B1F' : '#FFFFFF');
            }
        };
        const initZoom = () => {
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'});
        };
        onMounted(() => {
            initZoom();
            updateThemeColor(isDark.value);
            watch(isDark, (newVal) => {
                updateThemeColor(newVal);
            });
        });

        giscusTalk({
                repo: 'zihao-il/group-history-archive',
                repoId: 'R_kgDOO4leAA',
                category: 'Announcements',
                categoryId: 'DIC_kwDOO4leAM4CrO7l',
                mapping: 'pathname',
                inputPosition: 'bottom',
                lang: 'zh-CN',
            },
            {
                frontmatter, route
            },
            true
        );

    },
};
