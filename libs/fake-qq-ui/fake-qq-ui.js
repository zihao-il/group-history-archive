import { Fragment as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, createVNode as o, defineComponent as s, getCurrentScope as c, isRef as l, normalizeClass as u, normalizeStyle as d, onBeforeUnmount as f, onMounted as p, onScopeDispose as m, openBlock as h, ref as g, renderList as _, renderSlot as v, resolveDynamicComponent as y, shallowReadonly as b, shallowRef as x, toDisplayString as S, toValue as C, vShow as w, watch as T, withCtx as E, withDirectives as D, withModifiers as O } from "vue";
// src/package/components/QHeader.vue?vue&type=script&setup=true&lang.ts
var k = { class: "qq-header__title" }, A = /*@__PURE__*/ s({
	__name: "QHeader",
	props: { height: { default: 45 } },
	setup(e) {
		return (t, n) => (h(), r("header", {
			class: "qq-header",
			style: d({ "--qq-header-height": e.height + "px" })
		}, [n[0] ||= i("div", { class: "qq-header__btn-bar" }, [
			i("span", { class: "qq-header__btn red" }),
			i("span", { class: "qq-header__btn yellow" }),
			i("span", { class: "qq-header__btn green" })
		], -1), i("div", k, [v(t.$slots, "default", {}, void 0, !0)])], 4));
	}
}), j = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, M = /*#__PURE__*/ j(A, [["__scopeId", "data-v-014fb637"]]), N = { class: "qq_container" }, P = /*#__PURE__*/ j(/* @__PURE__ */ s({
	name: "QMain",
	__name: "QMain",
	setup(e) {
		return (e, t) => (h(), r("main", N, [v(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-ce48c77a"]]), F = /* @__PURE__ */ function(e) {
	return e.sage_green = "sage_green", e.red = "red", e.orange = "orange", e.purple = "purple", e.blue = "blue", e.grey = "grey", e;
}(F || {}), ee = { class: "qq-message__avatar-span" }, I = {
	key: 1,
	class: "qq-message__text-avatar"
}, L = { class: "qq-message__user-name nocopy qq-text-ellipsis" }, te = { class: "qq-text-ellipsis" }, ne = {
	key: 2,
	class: "qq-bot-label qq-bot-label--middle qq-bot-label--mini"
}, re = { class: "message-content__wrapper" }, R = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QMessageBase",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: F.grey },
		isBot: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, a) => (h(), r("section", { class: u(["message-container", e.self ? ["message-container--self", "message-container--align-right"] : ""]) }, [
			i("div", ee, [e.avatar ? (h(), r("div", {
				key: 0,
				style: d({ backgroundImage: `url(${e.avatar})` }),
				class: "qq-message__avatar"
			}, null, 4)) : (h(), r("div", I, [i("span", null, S(e.name[0]), 1)]))]),
			i("div", L, [
				i("span", te, S(e.name), 1),
				e.tag && typeof e.tagColor == "string" ? (h(), r("div", {
					key: 0,
					class: u(["q-tag qq-message__user-label", [`q-tag--${e.tagColor}`]])
				}, S(e.tag), 3)) : e.tag && typeof e.tagColor == "object" ? (h(), r("div", {
					key: 1,
					class: "q-tag qq-message__user-label",
					style: d({
						backgroundColor: e.tagColor.backgroundColor,
						color: e.tagColor.color
					})
				}, S(e.tag), 5)) : n("", !0),
				e.isBot ? (h(), r("label", ne, [...a[0] ||= [i("i", {
					class: "q-svg-icon q-icon",
					style: {
						width: "1em",
						height: "1em"
					}
				}, [i("svg", {
					id: "channle_robot_small_16",
					viewBox: "0 0 16 16",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg"
				}, [i("path", {
					"fill-rule": "evenodd",
					"clip-rule": "evenodd",
					d: "M8.5 3.29119C8.91311 3.10159 9.2 2.6843 9.2 2.2C9.2 1.53726 8.66274 1 8 1C7.33726 1 6.8 1.53726 6.8 2.2C6.8 2.6843 7.08689 3.10159 7.5 3.29119V4.00015V4.02059C4.42023 4.27466 2 6.85472 2 10V10.5715C2 12.465 3.53502 14 5.42857 14H10.5714C12.465 14 14 12.465 14 10.5715V10C14 6.85472 11.5798 4.27466 8.5 4.02059V4.00015V3.29119ZM13 10.5715V10C13 7.23863 10.7614 5.00005 8 5.00005C5.23858 5.00005 3 7.23863 3 10V10.5715C3 11.9127 4.08731 13 5.42857 13H10.5714C11.9127 13 13 11.9127 13 10.5715ZM5.7002 9.5V7.5H6.7002V9.5H5.7002ZM9.2998 7.5V9.5H10.2998V7.5H9.2998Z",
					fill: "currentColor"
				})])], -1)]])) : n("", !0)
			]),
			i("div", re, [v(t.$slots, "default", {}, void 0, !0)])
		], 2));
	}
}), [["__scopeId", "data-v-e8e4e08e"]]), ie = { class: "reply-title" }, ae = { class: "reply-info" }, oe = { class: "qq-text-ellipsis" }, se = { class: "reply-content" }, ce = {
	key: 0,
	class: "pic"
}, le = { class: "image nocopy" }, ue = ["alt", "src"], de = {
	key: 1,
	class: "mixed-container qq-text-ellipsis"
}, fe = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QReplyBase",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		target: {},
		replyText: { default: "" },
		replyImageUrl: { default: void 0 },
		replyImageAlt: { default: void 0 },
		maxImgWidth: { default: "200px" },
		maxImgHeight: { default: "220px" }
	},
	setup(e) {
		return (t, n) => (h(), r("div", { class: u(["reply-element nocopy", e.self ? ["reply-element--self"] : ""]) }, [i("div", ie, [i("div", ae, [i("span", oe, S(e.target), 1)])]), i("div", se, [e.replyImageUrl ? (h(), r("div", ce, [i("div", le, [i("img", {
			class: "image-content",
			style: d({
				"--max-image-width": e.maxImgWidth,
				"--max-image-height": e.maxImgHeight
			}),
			alt: e.replyImageAlt,
			src: e.replyImageUrl
		}, null, 12, ue)])])) : (h(), r("span", de, S(e.replyText), 1))])], 2));
	}
}), [["__scopeId", "data-v-3a432c13"]]), z = { class: "message-content reply-message__inner" }, B = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QReply",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		target: {},
		replyText: { default: "" },
		replyImageUrl: { default: void 0 },
		replyImageAlt: { default: void 0 },
		maxImgWidth: { default: "200px" },
		maxImgHeight: { default: "220px" }
	},
	setup(e) {
		return (n, r) => (h(), t(R, {
			self: e.self,
			name: e.name,
			avatar: e.avatar,
			tag: e.tag,
			"tag-color": e.tagColor,
			"is-bot": e.isBot
		}, {
			default: E(() => [i("div", { class: u(["msg-content-container reply-message__container", e.self ? "container--self" : "container--others"]) }, [i("div", z, [o(fe, {
				self: e.self,
				target: e.target,
				"reply-text": e.replyText,
				"reply-image-url": e.replyImageUrl,
				"reply-image-alt": e.replyImageAlt,
				"max-img-width": e.maxImgWidth,
				"max-img-height": e.maxImgHeight
			}, null, 8, [
				"self",
				"target",
				"reply-text",
				"reply-image-url",
				"reply-image-alt",
				"max-img-width",
				"max-img-height"
			]), i("span", null, [v(n.$slots, "default", {}, void 0, !0)])])], 2)]),
			_: 3
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot"
		]));
	}
}), [["__scopeId", "data-v-57c4891a"]]), V = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QText",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		maxImgWidth: { default: "230px" },
		maxImgHeight: { default: "250px" }
	},
	setup(e) {
		return (n, r) => (h(), t(R, {
			self: e.self,
			name: e.name,
			avatar: e.avatar,
			tag: e.tag,
			"tag-color": e.tagColor,
			"is-bot": e.isBot
		}, {
			default: E(() => [i("div", { class: u(["msg-content-container mix-message__container", e.self ? "container--self" : "container--others"]) }, [i("div", {
				class: "message-content mix-message__inner",
				style: d({
					"--max-image-width": e.maxImgWidth,
					"--max-image-height": e.maxImgHeight
				})
			}, [i("span", null, [v(n.$slots, "default", {}, void 0, !0)])], 4)], 2)]),
			_: 3
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot"
		]));
	}
}), [["__scopeId", "data-v-c26b7d0c"]]), pe = ["href", "download"], me = { class: "message-content mix-message__inner" }, he = ["src", "alt"], ge = {
	key: 0,
	class: "file-info-mask"
}, _e = {
	key: 0,
	class: "qq-text-ellipsis",
	style: { display: "flex" }
}, ve = { class: "qq-text-ellipsis" }, ye = { key: 1 }, H = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QImage",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		src: {},
		alt: { default: void 0 },
		isFile: {
			type: Boolean,
			default: !1
		},
		fileName: { default: void 0 },
		fileSize: { default: void 0 },
		maxWidth: { default: "230px" },
		maxHeight: { default: "250px" },
		canDownload: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		return (a, o) => (h(), t(R, {
			self: e.self,
			name: e.name,
			avatar: e.avatar,
			tag: e.tag,
			"tag-color": e.tagColor,
			"is-bot": e.isBot
		}, {
			default: E(() => [i("div", { class: u(["msg-content-container mix-message__container mix-message__container--pic", e.self ? "container--self" : "container--others"]) }, [e.isFile && e.canDownload ? (h(), r("a", {
				key: 0,
				class: "file-link",
				href: e.src,
				download: e.fileName
			}, null, 8, pe)) : n("", !0), i("div", me, [i("div", {
				class: "image pic-element",
				style: d({
					"--max-image-width": e.maxWidth,
					"--max-image-height": e.maxHeight
				})
			}, [i("img", {
				src: e.src,
				alt: e.alt,
				class: "image-content"
			}, null, 8, he)], 4), e.isFile ? (h(), r("div", ge, [e.fileName ? (h(), r("p", _e, [i("span", ve, S(e.fileName), 1)])) : n("", !0), e.fileSize ? (h(), r("p", ye, S(e.fileSize), 1)) : n("", !0)])) : n("", !0)])], 2)]),
			_: 1
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot"
		]));
	}
}), [["__scopeId", "data-v-0945e2df"]]), be = { class: "file-message--content nocopy" }, xe = ["href", "download"], Se = { class: "normal-file file-element" }, Ce = { class: "file-header" }, we = { class: "file-name" }, Te = { class: "qq-text-ellipsis" }, Ee = {
	key: 0,
	class: "file-info"
}, U = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QFile",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		fileName: {},
		fileSize: { default: void 0 },
		fileSrc: { default: void 0 },
		iconSrc: { default: void 0 },
		canDownload: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		return (a, o) => (h(), t(R, {
			self: e.self,
			name: e.name,
			avatar: e.avatar,
			tag: e.tag,
			"tag-color": e.tagColor,
			"is-bot": e.isBot
		}, {
			default: E(() => [i("div", be, [e.fileSrc && e.canDownload ? (h(), r("a", {
				key: 0,
				class: "file-link",
				href: e.fileSrc,
				download: e.fileName
			}, null, 8, xe)) : n("", !0), i("div", Se, [i("div", Ce, [i("p", we, [i("span", Te, S(e.fileName), 1)]), e.iconSrc ? (h(), r("div", {
				key: 0,
				class: "file-icon",
				style: d({ backgroundImage: `url(${e.iconSrc})` })
			}, null, 4)) : n("", !0)]), e.fileSize ? (h(), r("div", Ee, [i("span", null, S(e.fileSize), 1)])) : n("", !0)])])]),
			_: 1
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot"
		]));
	}
}), [["__scopeId", "data-v-8bf4d901"]]), De = {
	key: 0,
	class: "message__timestamp no-copy"
}, Oe = { class: "babble" }, ke = {
	key: 1,
	class: "gray-tip-message no-copy"
}, Ae = { class: "gray-tip-content babble" }, W = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QTip",
	props: { isTime: {
		type: Boolean,
		default: !1
	} },
	setup(e) {
		return (t, n) => e.isTime ? (h(), r("div", De, [i("span", Oe, [v(t.$slots, "default", {}, void 0, !0)])])) : (h(), r("div", ke, [i("div", Ae, [v(t.$slots, "default", {}, void 0, !0)])]));
	}
}), [["__scopeId", "data-v-e6e407a4"]]);
// node_modules/.pnpm/@vueuse+shared@15.0.0_vue@3.5.45_typescript@5.9.3_/node_modules/@vueuse/shared/dist/index.js
function G(e, t) {
	return c() ? (m(e, t), !0) : !1;
}
var K = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function q(e, t = 1e3, n = {}) {
	let { immediate: r = !0, immediateCallback: i = !1 } = n, a = null, o = x(!1);
	function s() {
		a &&= (clearInterval(a), null);
	}
	function c() {
		o.value = !1, s();
	}
	function u() {
		let n = C(t);
		n <= 0 || (o.value = !0, i && e(), s(), o.value && (a = setInterval(e, n)));
	}
	return r && K && u(), (l(t) || typeof t == "function") && G(T(t, () => {
		o.value && K && u();
	})), G(c), {
		isActive: b(o),
		pause: c,
		resume: u
	};
}
// src/package/components/base/QVoicePlayIcon.vue?vue&type=script&setup=true&lang.ts
var je = {
	id: "play_fill_24",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, Me = /* @__PURE__ */ s({
	name: "QVoicePlayIcon",
	__name: "QVoicePlayIcon",
	setup(e) {
		return (e, t) => (h(), r("svg", je, [...t[0] ||= [i("path", {
			d: "M6 20.2428V3.75722C6 2.56846 7.31683 1.85207 8.31488 2.49786L21.0537 10.7406C21.9672 11.3317 21.9672 12.6683 21.0537 13.2594L8.31488 21.5021C7.31683 22.1479 6 21.4315 6 20.2428Z",
			fill: "currentColor"
		}, null, -1)]]));
	}
}), Ne = {
	id: "pause_24",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, Pe = /* @__PURE__ */ s({
	name: "QVoicePauseIcon",
	__name: "QVoicePauseIcon",
	setup(e) {
		return (e, t) => (h(), r("svg", Ne, [...t[0] ||= [i("path", {
			"fill-rule": "evenodd",
			"clip-rule": "evenodd",
			d: "M17 4C17.5523 4 18 4.44771 18 5L18 19C18 19.5523 17.5523 20 17 20L15 20C14.4477 20 14 19.5523 14 19L14 5C14 4.44771 14.4477 4 15 4L17 4Z",
			fill: "currentColor"
		}, null, -1), i("path", {
			"fill-rule": "evenodd",
			"clip-rule": "evenodd",
			d: "M9 4C9.55229 4 10 4.44771 10 5L10 19C10 19.5523 9.55228 20 9 20L7 20C6.44772 20 6 19.5523 6 19L6 5C6 4.44771 6.44772 4 7 4L9 4Z",
			fill: "currentColor"
		}, null, -1)]]));
	}
}), Fe = { class: "ptt-message__inner" }, Ie = { class: "ptt-element__top-area" }, Le = { class: "ptt-element__button" }, Re = {
	class: "q-svg-icon q-icon",
	style: {
		width: "10px",
		height: "10px"
	}
}, ze = { class: "ptt-element__duration" }, J = { class: "ptt-element__bottom-area" }, Be = { class: "ptt-element__bottom-area-text" }, Y = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QVoiceBase",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		src: {},
		text: { default: "[呃，什么都没有听到]" },
		play: {},
		playPaused: { type: Boolean },
		formatedDuration: {}
	},
	setup(e) {
		let n = g(!1);
		return (r, o) => (h(), t(R, {
			self: e.self,
			name: e.name,
			avatar: e.avatar,
			tag: e.tag,
			"tag-color": e.tagColor,
			"is-bot": e.isBot
		}, {
			default: E(() => [i("div", {
				class: u(["msg-content-container mix-message__container ptt-message nocopy", e.self ? "container--self" : "container--others"]),
				onContextmenu: o[2] ||= O((e) => n.value = !n.value, ["prevent", "stop"])
			}, [i("div", Fe, [i("div", {
				class: "ptt-element",
				onClick: o[0] ||= (...t) => e.play && e.play(...t)
			}, [i("div", Ie, [
				i("div", Le, [i("i", Re, [(h(), t(y(e.playPaused ? Me : Pe)))])]),
				v(r.$slots, "default", {}, void 0, !0),
				i("div", ze, [i("span", null, S(e.formatedDuration), 1)])
			])]), D(i("div", J, [i("div", Be, [a(S(e.text) + " ", 1), i("div", {
				class: "ptt-element__bottom-area-icon",
				onClick: o[1] ||= (e) => n.value = !1
			}, [...o[3] ||= [i("i", {
				class: "q-svg-icon q-icon",
				style: {
					width: "1em",
					height: "1em"
				}
			}, [i("svg", {
				id: "arrow_up_24",
				viewBox: "0 0 24 24",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, [i("path", {
				d: "M3 16L12 7L21 16",
				stroke: "currentColor",
				"stroke-width": "1.5",
				"stroke-linejoin": "round"
			})])], -1)]])])], 512), [[w, n.value]])])], 34)]),
			_: 3
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot"
		]));
	}
}), [["__scopeId", "data-v-467a0efc"]]), X = /* @__PURE__ */ s({
	__name: "QVoice",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		src: {},
		text: { default: "[呃，什么都没有听到]" },
		volume: { default: 1 }
	},
	setup(a) {
		let o = a, s = g(), c = g(0), l = g(""), u = g([]), m = g(!0), v = g(!0), y, b, x, S;
		function C(e) {
			return Math.max(4, Math.min(30, Math.floor(e / 1.2)));
		}
		function w(e) {
			return e >= 0 ? 1 : e <= -80 ? .2 : (e - -80) / 80 * .8 + .2;
		}
		function D(e) {
			let t = Math.floor(e), n = Math.floor(t / 60), r = t % 60;
			return n > 0 ? `${n}'${r}"` : `${r}"`;
		}
		function O() {
			x?.pause(), x = void 0, y && k && (k.onended = null, k.stop()), k = void 0, m.value = !0, v.value = !0, c.value = 0, s.value?.style.setProperty("--process-item-color", "var(--qq-text_primary)"), s.value?.querySelectorAll(".ptt-element__progress-item").forEach((e) => e.style.removeProperty("--process-item-color"));
		}
		let k, A = 0;
		async function j(e) {
			let t = ++A, n = y;
			y = void 0, S = void 0, b = void 0;
			try {
				n && await n.close();
				let r = window.AudioContext ?? window.webkitAudioContext;
				if (!r) throw Error("AudioContext is not supported by this browser");
				let i = new r(), a = i.createGain();
				if (a.gain.value = Math.max(0, Math.min(1, o.volume)), a.connect(i.destination), t !== A) {
					await i.close();
					return;
				}
				y = i, S = a;
				let s = await fetch(e);
				if (!s.ok) throw Error(`Failed to load audio (${s.status} ${s.statusText})`);
				let c = await s.arrayBuffer(), d = await i.decodeAudioData(c);
				if (t !== A) return;
				b = d;
				let f = b.getChannelData(0), p = C(b.duration), m = Array.from({ length: p }, (e, t) => {
					let n = Math.floor(t * f.length / p), r = Math.floor((t + 1) * f.length / p), i = f.subarray(n, r);
					if (i.length === 0) return 0;
					let a = Math.sqrt(i.reduce((e, t) => e + t ** 2, 0) / i.length);
					return 20 * Math.log10(Math.max(a, 1e-10));
				});
				l.value = D(b.duration), u.value = m.map(w);
			} catch (e) {
				if (t !== A) return;
				console.error("Error loading audio file:", e), b = void 0, l.value = "Error", u.value = [];
			}
		}
		function M() {
			if (y !== void 0 && b !== void 0 && s.value !== void 0 && S !== void 0) {
				if (m.value) {
					let e = y.createBufferSource();
					e.buffer = b, e.connect(S), e.onended = () => {
						k === e && (k = void 0, m.value = !0, v.value = !0, x?.pause(), x = void 0, c.value = 0, s.value?.querySelectorAll(".ptt-element__progress-item").forEach((e) => e.style.removeProperty("--process-item-color")), s.value?.style.setProperty("--process-item-color", "var(--qq-text_primary)"));
					}, k = e, y.resume(), e.start(), m.value = !1, v.value = !1, s.value.style.setProperty("--process-item-color", "var(--qq-text-secondary-01)"), x = new N([...s.value.children], b.duration), x.start();
				} else y.state === "running" ? (y.suspend(), x?.pause(), v.value = !0) : y.state === "suspended" && (y.resume(), x?.resume(), v.value = !1);
			}
		}
		class N {
			progressItems;
			duration;
			pauseFn = void 0;
			resumeFn = void 0;
			constructor(e, t) {
				this.progressItems = e, this.duration = t;
			}
			start() {
				let e = 0, { pause: t, resume: n } = q(() => {
					m.value ? (t(), e = 0, this.progressItems.forEach((e) => e.style.removeProperty("--process-item-color")), s.value?.style.setProperty("--process-item-color", "var(--qq-text_primary)")) : (this.progressItems[e]?.style.setProperty("--process-item-color", "var(--qq-text_primary)"), e = Math.min(e + 1, this.progressItems.length - 1));
				}, Math.max(16, this.duration / this.progressItems.length * 1e3), { immediate: !0 }), { pause: r, resume: i } = q(() => {
					m.value ? (r(), c.value = 0) : c.value = Math.min(c.value + 1, 100);
				}, Math.max(16, this.duration / 100 * 1e3), { immediate: !0 });
				this.pauseFn = () => {
					t(), r();
				}, this.resumeFn = () => {
					n(), i();
				};
			}
			pause() {
				this.pauseFn && this.pauseFn();
			}
			resume() {
				this.resumeFn && this.resumeFn();
			}
		}
		return p(async () => {
			await j(o.src);
		}), f(() => {
			A++, O(), y !== void 0 && y.close();
		}), T(() => o.src, (e) => {
			O(), l.value = "", u.value = [], j(e);
		}), T(() => o.volume, (e) => {
			S !== void 0 && (S.gain.value = Math.max(0, Math.min(1, e)));
		}), (o, f) => (h(), t(Y, {
			self: a.self,
			name: a.name,
			avatar: a.avatar,
			tag: a.tag,
			"tag-color": a.tagColor,
			"is-bot": a.isBot,
			src: a.src,
			play: M,
			"play-paused": v.value,
			"formated-duration": l.value,
			text: a.text
		}, {
			default: E(() => [i("div", {
				ref_key: "progressItemsRef",
				ref: s,
				class: "ptt-element__progress",
				style: { "--process-item-color": "var(--qq-text_primary)" }
			}, [m.value ? n("", !0) : (h(), r("div", {
				key: 0,
				class: "ptt-element__progress-tag",
				style: d({ left: `calc(${c.value}% - 1px)` })
			}, null, 4)), (h(!0), r(e, null, _(u.value, (e, t) => (h(), r("div", {
				key: t,
				class: "ptt-element__progress-item",
				style: d({ height: `${e * 100}%` })
			}, null, 4))), 128))], 512)]),
			_: 1
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot",
			"src",
			"play-paused",
			"formated-duration",
			"text"
		]));
	}
}), Ve = ["src"], Z = /* @__PURE__ */ s({
	__name: "QVoiceLegacy",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		src: {},
		text: { default: "[呃，什么都没有听到]" },
		volume: { default: 1 }
	},
	setup(a) {
		let o = a, s = g(), c = g(), l = g(0), u = g(0), f = g(""), p = g([]), m = g(!0), v = g(!0), y;
		function b(e) {
			let t = Math.max(5, Math.min(25, Math.floor(e / 1.2)));
			return Array.from({ length: t }, () => x(30, 60));
		}
		function x(e, t) {
			return Math.floor(Math.random() * (t - e + 1)) + e;
		}
		function S(e) {
			let t = Math.floor(e), n = Math.floor(t / 60), r = t % 60;
			return n > 0 ? `${n}'${r}"` : `${r}"`;
		}
		async function C() {
			s.value && (s.value.volume = Math.max(0, Math.min(1, o.volume)), u.value = Number.isFinite(s.value.duration) ? s.value.duration : 0, f.value = S(u.value), p.value = b(u.value));
		}
		function w() {
			s.value?.play().catch((e) => {
				console.error("Error playing audio file:", e), k();
			});
		}
		function D() {
			s.value && c.value && (v.value = !v.value, m.value ? (m.value = !1, v.value = !1, c.value.style.setProperty("--process-item-color", "var(--qq-text-secondary-01)"), y = new O([...c.value.children]), y.start(), w()) : s.value.paused ? (y?.resume(), v.value = !1, w()) : (s.value.pause(), y?.pause(), v.value = !0));
		}
		class O {
			progressItems;
			pauseFn = void 0;
			resumeFn = void 0;
			constructor(e) {
				this.progressItems = e;
			}
			start() {
				let e = 0, { pause: t, resume: n } = q(() => {
					m.value ? (t(), e = 0, this.progressItems.forEach((e) => e.style.removeProperty("--process-item-color")), c.value?.style.setProperty("--process-item-color", "var(--qq-text_primary)")) : (this.progressItems[e]?.style.setProperty("--process-item-color", "var(--qq-text_primary)"), e = Math.min(e + 1, this.progressItems.length - 1));
				}, Math.max(16, u.value / this.progressItems.length * 1e3), { immediate: !0 }), { pause: r, resume: i } = q(() => {
					m.value ? (r(), l.value = 0) : l.value = Math.min(l.value + 1, 100);
				}, Math.max(16, u.value / 100 * 1e3), { immediate: !0 });
				this.pauseFn = () => {
					t(), r();
				}, this.resumeFn = () => {
					n(), i();
				};
			}
			pause() {
				this.pauseFn && this.pauseFn();
			}
			resume() {
				this.resumeFn && this.resumeFn();
			}
		}
		function k() {
			m.value = !0, v.value = !0, l.value = 0, y?.pause(), y = void 0, c.value?.querySelectorAll(".ptt-element__progress-item").forEach((e) => e.style.removeProperty("--process-item-color")), c.value?.style.setProperty("--process-item-color", "var(--qq-text_primary)");
		}
		return T(() => o.volume, (e) => {
			s.value !== void 0 && (s.value.volume = Math.max(0, Math.min(1, e)));
		}, { immediate: !0 }), T(() => o.src, () => {
			s.value?.pause(), k(), f.value = "", p.value = [];
		}), (o, u) => (h(), t(Y, {
			self: a.self,
			name: a.name,
			avatar: a.avatar,
			tag: a.tag,
			"tag-color": a.tagColor,
			"is-bot": a.isBot,
			src: a.src,
			play: D,
			"play-paused": v.value,
			"formated-duration": f.value,
			text: a.text
		}, {
			default: E(() => [i("audio", {
				ref_key: "audio",
				ref: s,
				src: a.src,
				onEnded: k,
				onLoadedmetadata: C
			}, null, 40, Ve), i("div", {
				ref_key: "progressItemsRef",
				ref: c,
				class: "ptt-element__progress",
				style: { "--process-item-color": "var(--qq-text_primary)" }
			}, [m.value ? n("", !0) : (h(), r("div", {
				key: 0,
				class: "ptt-element__progress-tag",
				style: d({ left: `calc(${l.value}% - 1px)` })
			}, null, 4)), (h(!0), r(e, null, _(p.value, (e, t) => (h(), r("div", {
				key: t,
				class: "ptt-element__progress-item",
				style: d({ height: `${e}%` })
			}, null, 4))), 128))], 512)]),
			_: 1
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot",
			"src",
			"play-paused",
			"formated-duration",
			"text"
		]));
	}
}), He = { class: "forward-msg nocopy" }, Ue = { class: "fwd-title text-ellipsis" }, We = { class: "count" }, Q = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QForward",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: void 0 },
		isBot: {
			type: Boolean,
			default: !1
		},
		title: { default: "群聊的聊天记录" },
		contents: {}
	},
	setup(n) {
		return (a, o) => (h(), t(R, {
			self: n.self,
			name: n.name,
			avatar: n.avatar,
			tag: n.tag,
			"tag-color": n.tagColor,
			"is-bot": n.isBot
		}, {
			default: E(() => [i("div", He, [
				i("div", Ue, S(n.title), 1),
				(h(!0), r(e, null, _(n.contents, (e, t) => (h(), r("div", {
					key: t,
					class: "fwd-content text-ellipsis"
				}, S(e), 1))), 128)),
				i("div", We, "查看" + S(n.contents.length) + "条转发消息", 1)
			])]),
			_: 1
		}, 8, [
			"self",
			"name",
			"avatar",
			"tag",
			"tag-color",
			"is-bot"
		]));
	}
}), [["__scopeId", "data-v-c80d8ef0"]]), Ge = [
	B,
	V,
	H,
	U,
	W,
	X,
	Z,
	Q,
	R
], Ke = [M, P], $ = (e, t) => {
	t.__name ? e.component(t.__name, t) : t.name ? e.component(t.name, t) : t.__name === void 0 && t.name === void 0 && console.error("[Fake QQ UI] The follow component has no name.", t);
}, qe = { install(e) {
	Ge.forEach((t) => $(e, t)), Ke.forEach((t) => $(e, t));
} };
export { qe as FakeQQUI, U as QFile, Q as QForward, M as QHeader, H as QImage, P as QMain, B as QReply, F as QTagColors, V as QText, W as QTip, X as QVoice, Z as QVoiceLegacy };

//# sourceMappingURL=fake-qq-ui.js.map