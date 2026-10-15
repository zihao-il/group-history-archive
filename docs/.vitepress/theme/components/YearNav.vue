<script lang="ts" setup>
interface MonthItem {
    label: string
    href: string
    fullWidth?: boolean
}

interface YearItem {
    year: string
    unit?: string
    months: MonthItem[]
}

const years: YearItem[] = [
    {
        year: '2026',
        unit: '年',
        months: [
            {label: '10月', href: '/guide/2026/10月.md'},
            {label: '9月', href: '/guide/2026/9月.md'},
            {label: '8月', href: '/guide/2026/8月.md'},
            {label: '7月', href: '/guide/2026/7月.md'},
            {label: '6月', href: '/guide/2026/6月.md'},
            {label: '5月', href: '/guide/2026/5月.md'},
            {label: '4月', href: '/guide/2026/4月.md'},
            {label: '3月', href: '/guide/2026/3月.md'},
            {label: '2月', href: '/guide/2026/2月.md'},
            {label: '1月', href: '/guide/2026/1月.md'},
        ],
    },
    {
        year: '2025',
        unit: '年',
        months: [
            {label: '12月', href: '/guide/2025/12月.md'},
            {label: '11月', href: '/guide/2025/11月.md'},
            {label: '10月', href: '/guide/2025/10月.md'},
            {label: '9月', href: '/guide/2025/9月.md'},
            {label: '8月', href: '/guide/2025/8月.md'},
            {label: '7月', href: '/guide/2025/7月.md'},
            {label: '6月', href: '/guide/2025/6月.md'},
            {label: '5月', href: '/guide/2025/5月.md'},
            {label: '4月', href: '/guide/2025/4月.md'},
            {label: '3月', href: '/guide/2025/3月.md'},
            {label: '2月', href: '/guide/2025/2月.md'},
            {label: '1月', href: '/guide/2025/1月.md'},
        ],
    },
    {
        year: '2024',
        unit: '年',
        months: [
            {label: '12月', href: '/guide/2024/12月.md'},
            {label: '11月', href: '/guide/2024/11月.md'},
            {label: '10月', href: '/guide/2024/10月.md'},
            {label: '9月', href: '/guide/2024/9月.md'},
            {label: '8月', href: '/guide/2024/8月.md'},
            {label: '7月', href: '/guide/2024/7月.md'},
            {label: '6月', href: '/guide/2024/6月.md'},
            {label: '5月', href: '/guide/2024/5月.md'},
            {label: '4月', href: '/guide/2024/4月.md'},
            {label: '3月', href: '/guide/2024/3月.md'},
            {label: '2月', href: '/guide/2024/2月.md'},
            {label: '1月', href: '/guide/2024/1月.md'},
        ],
    },
    {
        year: '2023',
        unit: '年',
        months: [
            {label: '12月', href: '/guide/2023/12月.md'},
            {label: '11月', href: '/guide/2023/11月.md'},
            {label: '10月', href: '/guide/2023/10月.md'},
            {label: '9月', href: '/guide/2023/9月.md'},
            {label: '8月', href: '/guide/2023/8月.md'},
            {label: '7月', href: '/guide/2023/7月.md'},
            {label: '6月', href: '/guide/2023/6月.md'},
            {label: '5月', href: '/guide/2023/5月.md'},
            {label: '4月', href: '/guide/2023/4月.md'},
            {label: '3月', href: '/guide/2023/3月.md'},
            {label: '2月', href: '/guide/2023/2月.md'},
            {label: '1月', href: '/guide/2023/1月.md'},
        ],
    },
    {
        year: '2022',
        unit: '年',
        months: [
            {label: '10月', href: '/guide/2022/10月.md'},
            {label: '8月', href: '/guide/2022/8月.md'},
            {label: '7月', href: '/guide/2022/7月.md'},
            {label: '6月', href: '/guide/2022/6月.md'},
            {label: '5月', href: '/guide/2022/5月.md'},
            {label: '4月', href: '/guide/2022/4月.md'},
            {label: '2月', href: '/guide/2022/2月.md'},
            {label: '1月', href: '/guide/2022/1月.md'},
        ],
    },
    {
        year: '2021',
        unit: '年',
        months: [
            {label: '12月', href: '/guide/2021/12月.md'},
            {label: '10月', href: '/guide/2021/10月.md'},
            {label: '9月', href: '/guide/2021/9月.md'},
            {label: '8月', href: '/guide/2021/8月.md'},
        ],
    },
    {
        year: '未知时间',
        months: [
            {label: '未知时间', href: '/guide/未知时间.md', fullWidth: true},
        ],
    },
]
</script>

<template>
    <div class="year-nav">
        <section v-for="item in years" :key="item.year" class="year-card">
            <div class="year-header">
                <h2 class="year-title">
                    <span class="year-num">{{ item.year }}</span>
                    <span v-if="item.unit" class="year-unit">{{ item.unit }}</span>
                </h2>
            </div>
            <div class="month-grid">
                <a
                    v-for="month in item.months"
                    :key="month.href"
                    :class="{ 'full-width': month.fullWidth }"
                    :href="month.href"
                    class="month-link"
                >{{ month.label }}</a>
            </div>
        </section>
    </div>
</template>

<style scoped>
.year-nav {
    display: grid;
    margin: 20px 0 32px;
    gap: 16px;
    grid-template-columns: 1fr;
}

@media (min-width: 640px) {
    .year-nav {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
}

@media (min-width: 1100px) {
    .year-nav {
        grid-template-columns: repeat(3, 1fr);
    }
}

.vp-doc .year-card {
    margin: 0;
    padding: 18px 20px 20px;
    transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
    border: 1px solid var(--vp-c-divider);
    border-radius: 12px;
    background-color: var(--vp-c-bg-soft);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.04);
}

.vp-doc .year-card:hover {
    transform: translateY(-2px);
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.08);
}

.vp-doc .year-card .year-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--vp-c-brand-1);
}

.vp-doc .year-card h2.year-title,
.vp-doc .year-card .year-title {
    display: flex;
    align-items: baseline;
    margin: 0 !important;
    padding: 0 !important;
    letter-spacing: -0.01em;
    color: var(--vp-c-brand-1);
    border: none !important;
    gap: 3px;
}

.vp-doc .year-card .year-num {
    font-size: 1.55rem;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: 0.02em;
    color: var(--vp-c-brand-1);
}

.vp-doc .year-card .year-unit {
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.vp-doc .year-card .header-anchor {
    display: none !important;
}

.vp-doc .year-card .month-grid {
    display: grid;
    padding-top: 14px;
    gap: 8px;
    grid-template-columns: repeat(3, 1fr);
}

.vp-doc .year-card .month-link {
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    min-height: 36px;
    padding: 7px 0;
    transition: all 0.2s ease-in-out;
    text-align: center;
    text-decoration: none !important;
    color: var(--vp-c-text-1) !important;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background-color: var(--vp-c-bg);
}

.vp-doc .year-card .month-link.full-width,
.vp-doc .year-card .month-grid > .month-link:only-child {
    font-size: 0.95rem;
    min-height: 40px;
    padding: 8px 16px;
    grid-column: 1 / -1;
}

.vp-doc .year-card .month-link:hover,
.vp-doc .year-card .month-link:focus {
    transform: translateY(-1px);
    text-decoration: none !important;
    color: var(--vp-c-brand-1) !important;
    border-color: var(--vp-c-brand-1);
    background-color: var(--vp-c-default-soft);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.vp-doc .year-card .month-link:active {
    transform: translateY(0);
    color: var(--vp-c-white) !important;
    background-color: var(--vp-c-brand-1);
}

@media (max-width: 639px) {
    .vp-doc .year-card {
        padding: 16px 16px 18px;
    }

    .vp-doc .year-card .month-grid {
        gap: 8px;
    }
}

@media (max-width: 419px) {
    .vp-doc .year-card {
        padding: 14px 12px 14px;
    }

    .vp-doc .year-card .month-grid {
        gap: 6px;
    }

    .vp-doc .year-card .month-link {
        font-size: 0.85rem;
        min-height: 34px;
        padding: 6px 0;
    }
}

</style>