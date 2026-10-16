import { default as QTagColors } from '../lib/QTagColors';
import { default as QTagCustomize } from '../lib/QTagCustomize';
type __VLS_Props = {
    self?: boolean;
    name: string;
    avatar?: string;
    tag?: string;
    tagColor?: QTagColors | keyof typeof QTagColors | QTagCustomize;
    isBot?: boolean;
    title?: string;
    contents: string[];
};
declare const __VLS_export: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    title: string;
    self: boolean;
    avatar: string;
    tag: string;
    tagColor: "sage_green" | "red" | "orange" | "purple" | "blue" | "grey" | QTagCustomize | QTagColors;
    isBot: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
