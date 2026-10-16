import { default as QTagColors } from '../../lib/QTagColors';
import { default as QTagCustomize } from '../../lib/QTagCustomize';
type __VLS_Props = {
    self?: boolean;
    name: string;
    avatar?: string;
    tag?: string;
    tagColor?: QTagColors | keyof typeof QTagColors | QTagCustomize;
    isBot?: boolean;
    src: string;
    text?: string;
    play: () => void;
    playPaused: boolean;
    formatedDuration: string;
};
declare var __VLS_12: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_12) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    text: string;
    self: boolean;
    avatar: string;
    tag: string;
    tagColor: "sage_green" | "red" | "orange" | "purple" | "blue" | "grey" | QTagCustomize | QTagColors;
    isBot: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
