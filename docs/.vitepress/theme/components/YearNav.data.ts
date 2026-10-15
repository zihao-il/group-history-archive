import fs from 'node:fs'
import path from 'node:path'

export interface MonthItem {
    label: string
    href: string
    fullWidth?: boolean
    month?: number
}

export interface YearItem {
    year: string
    unit?: string
    months: MonthItem[]
}

declare const data: YearItem[]
export {data}

export default {
    watch: ['../../../guide/*/*.md'],
    load(): YearItem[] {
        const guideRoot = path.resolve(__dirname, '../../../guide')
        if (!fs.existsSync(guideRoot)) return []

        const yearDirs = fs
            .readdirSync(guideRoot, {withFileTypes: true})
            .filter(d => d.isDirectory() && /^\d{4}$/.test(d.name))
            .map(d => d.name)
            .sort((a, b) => Number(b) - Number(a))

        const result: YearItem[] = yearDirs.map(year => {
            const yearPath = path.join(guideRoot, year)
            const files = fs.readdirSync(yearPath)
            const months: MonthItem[] = []

            for (const file of files) {
                const match = file.match(/^(\d{1,2})月\.md$/)
                if (!match) continue
                const m = Number(match[1])
                months.push({
                    label: `${m}月`,
                    href: `/guide/${year}/${m}月`,
                    month: m,
                })
            }

            months.sort((a, b) => (b.month ?? 0) - (a.month ?? 0))

            return {
                year,
                unit: '年',
                months,
            }
        })

        result.push({
            year: '其他',
            months: [
                {label: '未知时间', href: '/guide/未知时间', fullWidth: true},
                {label: '牛至诗集', href: '/guide/牛至诗集', fullWidth: true},
            ],
        })

        return result
    },
}
