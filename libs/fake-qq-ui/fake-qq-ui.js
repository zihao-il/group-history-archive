import { Fragment as e, createBlock as t, createCommentVNode as n, createElementBlock as r, createElementVNode as i, createTextVNode as a, createVNode as o, defineComponent as s, getCurrentScope as c, isRef as l, normalizeClass as u, normalizeStyle as d, onBeforeUnmount as f, onMounted as p, onScopeDispose as m, openBlock as h, ref as g, renderList as _, renderSlot as v, resolveDynamicComponent as y, shallowReadonly as b, shallowRef as x, toDisplayString as S, toValue as C, vShow as w, watch as T, withCtx as E, withDirectives as D, withModifiers as O } from "vue";
//#region src/package/components/QHeader.vue?vue&type=script&setup=true&lang.ts
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
}, M = /*#__PURE__*/ j(A, [["__scopeId", "data-v-014fb637"]]), ee = { class: "qq_container" }, N = /*#__PURE__*/ j(/* @__PURE__ */ s({
	name: "QMain",
	__name: "QMain",
	setup(e) {
		return (e, t) => (h(), r("main", ee, [v(e.$slots, "default", {}, void 0, !0)]));
	}
}), [["__scopeId", "data-v-ce48c77a"]]), P = /* @__PURE__ */ function(e) {
	return e.sage_green = "sage_green", e.red = "red", e.orange = "orange", e.purple = "purple", e.blue = "blue", e.grey = "grey", e;
}(P || {}), F = { class: "qq-message__avatar-span" }, I = {
	key: 1,
	class: "qq-message__text-avatar"
}, te = { class: "qq-message__user-name nocopy qq-text-ellipsis" }, ne = { class: "qq-text-ellipsis" }, re = {
	key: 2,
	class: "qq-bot-label qq-bot-label--middle qq-bot-label--mini"
}, ie = { class: "message-content__wrapper" }, L = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QMessageBase",
	props: {
		self: {
			type: Boolean,
			default: !1
		},
		name: {},
		avatar: { default: void 0 },
		tag: { default: void 0 },
		tagColor: { default: P.grey },
		isBot: {
			type: Boolean,
			default: !1
		}
	},
	setup(e) {
		return (t, a) => (h(), r("section", { class: u(["message-container", e.self ? ["message-container--self", "message-container--align-right"] : ""]) }, [
			i("div", F, [e.avatar ? (h(), r("div", {
				key: 0,
				style: d({ backgroundImage: `url(${e.avatar})` }),
				class: "qq-message__avatar"
			}, null, 4)) : (h(), r("div", I, [i("span", null, S(e.name[0]), 1)]))]),
			i("div", te, [
				i("span", ne, S(e.name), 1),
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
				e.isBot ? (h(), r("label", re, [...a[0] ||= [i("i", {
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
			i("div", ie, [v(t.$slots, "default", {}, void 0, !0)])
		], 2));
	}
}), [["__scopeId", "data-v-e8e4e08e"]]), ae = { class: "reply-title" }, oe = { class: "reply-info" }, se = { class: "qq-text-ellipsis" }, ce = { class: "reply-content" }, le = {
	key: 0,
	class: "pic"
}, ue = { class: "image nocopy" }, R = ["alt", "src"], z = {
	key: 1,
	class: "mixed-container qq-text-ellipsis"
}, B = /*#__PURE__*/ j(/* @__PURE__ */ s({
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
		return (t, n) => (h(), r("div", { class: u(["reply-element nocopy", e.self ? ["reply-element--self"] : ""]) }, [i("div", ae, [i("div", oe, [i("span", se, S(e.target), 1)])]), i("div", ce, [e.replyImageUrl ? (h(), r("div", le, [i("div", ue, [i("img", {
			class: "image-content",
			style: d({
				"--max-image-width": e.maxImgWidth,
				"--max-image-height": e.maxImgHeight
			}),
			alt: e.replyImageAlt,
			src: e.replyImageUrl
		}, null, 12, R)])])) : (h(), r("span", z, S(e.replyText), 1))])], 2));
	}
}), [["__scopeId", "data-v-3a432c13"]]), V = { class: "message-content reply-message__inner" }, H = /*#__PURE__*/ j(/* @__PURE__ */ s({
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
		return (n, r) => (h(), t(L, {
			self: e.self,
			name: e.name,
			avatar: e.avatar,
			tag: e.tag,
			"tag-color": e.tagColor,
			"is-bot": e.isBot
		}, {
			default: E(() => [i("div", { class: u(["msg-content-container reply-message__container", e.self ? "container--self" : "container--others"]) }, [i("div", V, [o(B, {
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
}), [["__scopeId", "data-v-57c4891a"]]), U = /*#__PURE__*/ j(/* @__PURE__ */ s({
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
		return (n, r) => (h(), t(L, {
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
}), [["__scopeId", "data-v-c26b7d0c"]]), de = ["href", "download"], fe = { class: "message-content mix-message__inner" }, pe = ["src", "alt"], me = {
	key: 0,
	class: "file-info-mask"
}, he = {
	key: 0,
	class: "qq-text-ellipsis",
	style: { display: "flex" }
}, ge = { class: "qq-text-ellipsis" }, _e = { key: 1 }, W = /*#__PURE__*/ j(/* @__PURE__ */ s({
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
		return (a, o) => (h(), t(L, {
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
			}, null, 8, de)) : n("", !0), i("div", fe, [i("div", {
				class: "image pic-element",
				style: d({
					"--max-image-width": e.maxWidth,
					"--max-image-height": e.maxHeight
				})
			}, [i("img", {
				src: e.src,
				alt: e.alt,
				class: "image-content"
			}, null, 8, pe)], 4), e.isFile ? (h(), r("div", me, [e.fileName ? (h(), r("p", he, [i("span", ge, S(e.fileName), 1)])) : n("", !0), e.fileSize ? (h(), r("p", _e, S(e.fileSize), 1)) : n("", !0)])) : n("", !0)])], 2)]),
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
}), [["__scopeId", "data-v-0945e2df"]]), ve = { class: "file-message--content nocopy" }, ye = ["href", "download"], be = { class: "normal-file file-element" }, xe = { class: "file-header" }, Se = { class: "file-name" }, Ce = { class: "qq-text-ellipsis" }, we = {
	key: 0,
	class: "file-info"
}, G = /*#__PURE__*/ j(/* @__PURE__ */ s({
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
		return (a, o) => (h(), t(L, {
			self: e.self,
			name: e.name,
			avatar: e.avatar,
			tag: e.tag,
			"tag-color": e.tagColor,
			"is-bot": e.isBot
		}, {
			default: E(() => [i("div", ve, [e.fileSrc && e.canDownload ? (h(), r("a", {
				key: 0,
				class: "file-link",
				href: e.fileSrc,
				download: e.fileName
			}, null, 8, ye)) : n("", !0), i("div", be, [i("div", xe, [i("p", Se, [i("span", Ce, S(e.fileName), 1)]), e.iconSrc ? (h(), r("div", {
				key: 0,
				class: "file-icon",
				style: d({ backgroundImage: `url(${e.iconSrc})` })
			}, null, 4)) : n("", !0)]), e.fileSize ? (h(), r("div", we, [i("span", null, S(e.fileSize), 1)])) : n("", !0)])])]),
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
}), [["__scopeId", "data-v-8bf4d901"]]), Te = {
	key: 0,
	class: "message__timestamp no-copy"
}, Ee = { class: "babble" }, De = {
	key: 1,
	class: "gray-tip-message no-copy"
}, Oe = { class: "gray-tip-content babble" }, K = /*#__PURE__*/ j(/* @__PURE__ */ s({
	__name: "QTip",
	props: { isTime: {
		type: Boolean,
		default: !1
	} },
	setup(e) {
		return (t, n) => e.isTime ? (h(), r("div", Te, [i("span", Ee, [v(t.$slots, "default", {}, void 0, !0)])])) : (h(), r("div", De, [i("div", Oe, [v(t.$slots, "default", {}, void 0, !0)])]));
	}
}), [["__scopeId", "data-v-e6e407a4"]]);
//#endregion
//#region node_modules/.pnpm/@vueuse+shared@15.0.0_vue@3.5.44_typescript@5.9.3_/node_modules/@vueuse/shared/dist/index.js
function q(e, t) {
	return c() ? (m(e, t), !0) : !1;
}
var J = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function Y(e, t = 1e3, n = {}) {
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
	return r && J && u(), (l(t) || typeof t == "function") && q(T(t, () => {
		o.value && J && u();
	})), q(c), {
		isActive: b(o),
		pause: c,
		resume: u
	};
}
//#endregion
//#region src/package/components/base/QVoicePlayIcon.vue?vue&type=script&setup=true&lang.ts
var ke = {
	id: "play_fill_24",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, Ae = /* @__PURE__ */ s({
	name: "QVoicePlayIcon",
	__name: "QVoicePlayIcon",
	setup(e) {
		return (e, t) => (h(), r("svg", ke, [...t[0] ||= [i("path", {
			d: "M6 20.2428V3.75722C6 2.56846 7.31683 1.85207 8.31488 2.49786L21.0537 10.7406C21.9672 11.3317 21.9672 12.6683 21.0537 13.2594L8.31488 21.5021C7.31683 22.1479 6 21.4315 6 20.2428Z",
			fill: "currentColor"
		}, null, -1)]]));
	}
}), je = {
	id: "pause_24",
	viewBox: "0 0 24 24",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg"
}, Me = /* @__PURE__ */ s({
	name: "QVoicePauseIcon",
	__name: "QVoicePauseIcon",
	setup(e) {
		return (e, t) => (h(), r("svg", je, [...t[0] ||= [i("path", {
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
}), Ne = { class: "ptt-message__inner" }, Pe = { class: "ptt-element__top-area" }, Fe = { class: "ptt-element__button" }, Ie = {
	class: "q-svg-icon q-icon",
	style: {
		width: "10px",
		height: "10px"
	}
}, Le = { class: "ptt-element__duration" }, X = { class: "ptt-element__bottom-area" }, Re = { class: "ptt-element__bottom-area-text" }, Z = /*#__PURE__*/ j(/* @__PURE__ */ s({
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
		return (r, o) => (h(), t(L, {
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
			}, [i("div", Ne, [i("div", {
				class: "ptt-element",
				onClick: o[0] ||= (...t) => e.play && e.play(...t)
			}, [i("div", Pe, [
				i("div", Fe, [i("i", Ie, [(h(), t(y(e.playPaused ? Ae : Me)))])]),
				v(r.$slots, "default", {}, void 0, !0),
				i("div", Le, [i("span", null, S(e.formatedDuration), 1)])
			])]), D(i("div", X, [i("div", Re, [a(S(e.text) + " ", 1), i("div", {
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
}), [["__scopeId", "data-v-467a0efc"]]), Q = /* @__PURE__ */ s({
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
			return e /= 1.2, e < 4 ? 4 : e > 30 ? 30 : e;
		}
		function w(e) {
			return e >= 0 ? 1 : e <= -80 ? .2 : (e - -80) / 80 * .8 + .2;
		}
		function D(e) {
			let t = Math.floor(e / 60), n = Math.round(e % 60);
			return t > 0 ? `${t}'${n}"` : `${n}"`;
		}
		async function O(e) {
			y = new (window.AudioContext || window.webkitAudioContext)(), S = y.createGain(), S.connect(y.destination);
			try {
				let t = await (await fetch(e)).arrayBuffer();
				b = await y.decodeAudioData(t);
				let n = b.getChannelData(0), r = C(b.duration), i = Math.floor(n.length / r), a = Array.from({ length: r }, (e, t) => {
					let r = n.slice(t * i, (t + 1) * i), a = Math.sqrt(r.reduce((e, t) => e + t ** 2, 0) / r.length);
					return 20 * Math.log10(Math.max(a, 1e-10));
				});
				l.value = D(b.duration), u.value = a.map(w);
			} catch (e) {
				console.error("Error loading audio file:", e), l.value = "Error", u.value = Array(10).fill(.05);
			}
		}
		function k() {
			if (y !== void 0 && b !== void 0 && s.value !== void 0 && S !== void 0) {
				if (m.value) {
					let e = y.createBufferSource();
					e.buffer = b, e.connect(S), e.onended = () => {
						m.value = !0, v.value = !0;
					}, e.start(), m.value = !1, v.value = !1, s.value.style.setProperty("--process-item-color", "var(--qq-text-secondary-01)"), x = new A([...s.value.children], b.duration), x.start();
				} else y.state === "running" ? (y.suspend(), x?.pause(), v.value = !0) : y.state === "suspended" && (y.resume(), x?.resume(), v.value = !1);
			}
		}
		class A {
			progressItems;
			duration;
			pauseFn = void 0;
			resumeFn = void 0;
			constructor(e, t) {
				this.progressItems = e, this.duration = t;
			}
			start() {
				let e = 0, { pause: t, resume: n } = Y(() => {
					m.value && (t(), e = 0, this.progressItems.forEach((e) => e.style.removeProperty("--process-item-color")), s.value?.style.setProperty("--process-item-color", "var(--qq-text_primary)")), this.progressItems[e].style.setProperty("--process-item-color", "var(--qq-text_primary)"), e++;
				}, Math.floor(this.duration) / this.progressItems.length * 1e3, { immediate: !0 }), { pause: r, resume: i } = Y(() => {
					m.value && (r(), c.value = 0), c.value++;
				}, Math.floor(this.duration) / 100 * 1e3, { immediate: !0 });
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
			await O(o.src);
		}), f(() => {
			y !== void 0 && y.close();
		}), T(() => o.volume, (e) => {
			S !== void 0 && (S.gain.value = e);
		}), (o, f) => (h(), t(Z, {
			self: a.self,
			name: a.name,
			avatar: a.avatar,
			tag: a.tag,
			"tag-color": a.tagColor,
			"is-bot": a.isBot,
			src: a.src,
			play: k,
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
}), ze = ["src"], Be = /* @__PURE__ */ s({
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
			return e /= 1.2, Array.from({ length: e >= 25 ? 25 : e < 5 ? 5 : e }, () => x(30, 60));
		}
		function x(e, t) {
			return Math.floor(Math.random() * (t - e + 1)) + e;
		}
		function S(e) {
			let t = Math.floor(e / 60), n = Math.round(e % 60);
			return t > 0 ? `${t}'${n}"` : `${n}"`;
		}
		async function C() {
			s.value && (u.value = Math.round(s.value.duration), f.value = S(u.value), p.value = b(u.value));
		}
		function w() {
			s.value && c.value && (v.value = !v.value, m.value ? (s.value.play(), m.value = !1, v.value = !1, c.value.style.setProperty("--process-item-color", "var(--qq-text-secondary-01)"), y = new D([...c.value.children]), y.start()) : s.value.paused ? (s.value.play(), y?.resume(), v.value = !1) : (s.value.pause(), y?.pause(), v.value = !0));
		}
		class D {
			progressItems;
			pauseFn = void 0;
			resumeFn = void 0;
			constructor(e) {
				this.progressItems = e;
			}
			start() {
				let e = 0, { pause: t, resume: n } = Y(() => {
					m.value && (t(), e = 0, this.progressItems.forEach((e) => e.style.removeProperty("--process-item-color")), c.value?.style.setProperty("--process-item-color", "var(--qq-text_primary)")), this.progressItems[e]?.style.setProperty("--process-item-color", "var(--qq-text_primary)"), e++;
				}, Math.floor(u.value) / this.progressItems.length * 1e3, { immediate: !0 }), { pause: r, resume: i } = Y(() => {
					m.value && (r(), l.value = 0), l.value++;
				}, Math.floor(u.value) / 100 * 1e3, { immediate: !0 });
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
		function O() {
			m.value = !0, v.value = !0;
		}
		return T(() => o.volume, (e) => {
			s.value !== void 0 && (s.value.volume = e);
		}), (o, u) => (h(), t(Z, {
			self: a.self,
			name: a.name,
			avatar: a.avatar,
			tag: a.tag,
			"tag-color": a.tagColor,
			"is-bot": a.isBot,
			src: a.src,
			play: w,
			"play-paused": v.value,
			"formated-duration": f.value,
			text: a.text
		}, {
			default: E(() => [i("audio", {
				ref_key: "audio",
				ref: s,
				src: a.src,
				onEnded: O,
				onLoadedmetadata: C
			}, null, 40, ze), i("div", {
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
}), Ve = { class: "forward-msg nocopy" }, He = { class: "fwd-title text-ellipsis" }, Ue = { class: "count" }, We = [
	H,
	U,
	W,
	G,
	K,
	Q,
	Be,
	/* @__PURE__ */ j(/* @__PURE__ */ s({
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
			return (a, o) => (h(), t(L, {
				self: n.self,
				name: n.name,
				avatar: n.avatar,
				tag: n.tag,
				"tag-color": n.tagColor,
				"is-bot": n.isBot
			}, {
				default: E(() => [i("div", Ve, [
					i("div", He, S(n.title), 1),
					(h(!0), r(e, null, _(n.contents, (e, t) => (h(), r("div", {
						key: t,
						class: "fwd-content text-ellipsis"
					}, S(e), 1))), 128)),
					i("div", Ue, "查看" + S(n.contents.length) + "条转发消息", 1)
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
	}), [["__scopeId", "data-v-0352b5ff"]]),
	L
], Ge = [M, N], $ = (e, t) => {
	t.__name ? e.component(t.__name, t) : t.name ? e.component(t.name, t) : t.__name === void 0 && t.name === void 0 && console.error("[Fake QQ UI] The follow component has no name.", t);
}, Ke = { install(e) {
	We.forEach((t) => $(e, t)), Ge.forEach((t) => $(e, t));
} };
//#endregion
export { Ke as FakeQQUI, G as QFile, M as QHeader, W as QImage, N as QMain, H as QReply, P as QTagColors, U as QText, K as QTip, Q as QVoice };

//# sourceMappingURL=fake-qq-ui.js.map