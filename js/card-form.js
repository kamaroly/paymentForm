! function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = e.length,
			n = et.type(e);
		return "function" === n || et.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}
	function r(e, t, n) {
		if (et.isFunction(t)) return et.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return et.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (st.test(t)) return et.filter(t, e, n);
			t = et.filter(t, e)
		}
		return et.grep(e, function(e) {
			return V.call(t, e) >= 0 !== n
		})
	}
	function i(e, t) {
		for (;
		(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	function o(e) {
		var t = ht[e] = {};
		return et.each(e.match(dt) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	function a() {
		K.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), et.ready()
	}
	function s() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = et.expando + Math.random()
	}
	function u(e, t, n) {
		var r;
		if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(bt, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
			try {
				n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : xt.test(n) ? et.parseJSON(n) : n
			} catch (i) {}
			yt.set(e, t, n)
		} else n = void 0;
		return n
	}
	function l() {
		return !0
	}
	function c() {
		return !1
	}
	function f() {
		try {
			return K.activeElement
		} catch (e) {}
	}
	function p(e, t) {
		return et.nodeName(e, "table") && et.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function d(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}
	function h(e) {
		var t = Ft.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function g(e, t) {
		for (var n = 0, r = e.length; r > n; n++) vt.set(e[n], "globalEval", !t || vt.get(t[n], "globalEval"))
	}
	function m(e, t) {
		var n, r, i, o, a, s, u, l;
		if (1 === t.nodeType) {
			if (vt.hasData(e) && (o = vt.access(e), a = vt.set(t, o), l = o.events)) {
				delete a.handle, a.events = {};
				for (i in l) for (n = 0, r = l[i].length; r > n; n++) et.event.add(t, i, l[i][n])
			}
			yt.hasData(e) && (s = yt.access(e), u = et.extend({}, s), yt.set(t, u))
		}
	}
	function v(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && et.nodeName(e, t) ? et.merge([e], n) : n
	}
	function y(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && kt.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}
	function x(t, n) {
		var r = et(n.createElement(t)).appendTo(n.body),
			i = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(r[0]).display : et.css(r[0], "display");
		return r.detach(), i
	}
	function b(e) {
		var t = K,
			n = _t[e];
		return n || (n = x(e, t), "none" !== n && n || (Rt = (Rt || et("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Rt[0].contentDocument, t.write(), t.close(), n = x(e, t), Rt.detach()), _t[e] = n), n
	}
	function w(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || Bt(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || et.contains(e.ownerDocument, e) || (a = et.style(e, t)), It.test(a) && Wt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}
	function C(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}
	function T(e, t) {
		if (t in e) return t;
		for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Gt.length; i--;) if (t = Gt[i] + n, t in e) return t;
		return r
	}
	function k(e, t, n) {
		var r = zt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function N(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += et.css(e, n + Ct[o], !0, i)), r ? ("content" === n && (a -= et.css(e, "padding" + Ct[o], !0, i)), "margin" !== n && (a -= et.css(e, "border" + Ct[o] + "Width", !0, i))) : (a += et.css(e, "padding" + Ct[o], !0, i), "padding" !== n && (a += et.css(e, "border" + Ct[o] + "Width", !0, i)));
		return a
	}
	function E(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Bt(e),
			a = "border-box" === et.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), It.test(i)) return i;
			r = a && (J.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + N(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}
	function D(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = vt.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Tt(r) && (o[a] = vt.access(r, "olddisplay", b(r.nodeName)))) : o[a] || (i = Tt(r), (n && "none" !== n || !i) && vt.set(r, "olddisplay", i ? n : et.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	function S(e, t, n, r, i) {
		return new S.prototype.init(e, t, n, r, i)
	}
	function j() {
		return setTimeout(function() {
			Qt = void 0
		}), Qt = et.now()
	}
	function L(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ct[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}
	function A(e, t, n) {
		for (var r, i = (nn[t] || []).concat(nn["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
	}
	function $(e, t, n) {
		var r, i, o, a, s, u, l, c = this,
			f = {}, p = e.style,
			d = e.nodeType && Tt(e),
			h = vt.get(e, "fxshow");
		n.queue || (s = et._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
			s.unqueued || u()
		}), s.unqueued++, c.always(function() {
			c.always(function() {
				s.unqueued--, et.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], l = et.css(e, "display"), "none" === l && (l = b(e.nodeName)), "inline" === l && "none" === et.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
			p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
		}));
		for (r in t) if (i = t[r], Kt.exec(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
				if ("show" !== i || !h || void 0 === h[r]) continue;
				d = !0
			}
			f[r] = h && h[r] || et.style(e, r)
		}
		if (!et.isEmptyObject(f)) {
			h ? "hidden" in h && (d = h.hidden) : h = vt.access(e, "fxshow", {}), o && (h.hidden = !d), d ? et(e).show() : c.done(function() {
				et(e).hide()
			}), c.done(function() {
				var t;
				vt.remove(e, "fxshow");
				for (t in f) et.style(e, t, f[t])
			});
			for (r in f) a = A(d ? h[r] : 0, r, c), r in h || (h[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function q(e, t) {
		var n, r, i, o, a;
		for (n in e) if (r = et.camelCase(n), i = t[r], o = e[n], et.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = et.cssHooks[r], a && "expand" in a) {
			o = a.expand(o), delete e[r];
			for (n in o) n in e || (e[n] = o[n], t[n] = i)
		} else t[r] = i
	}
	function H(e, t, n) {
		var r, i, o = 0,
			a = tn.length,
			s = et.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) return !1;
				for (var t = Qt || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
			}, l = s.promise({
				elem: e,
				props: et.extend({}, t),
				opts: et.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Qt || j(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = et.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (q(c, l.opts.specialEasing); a > o; o++) if (r = tn[o].call(l, e, c, l.opts)) return r;
		return et.map(c, A, l), et.isFunction(l.opts.start) && l.opts.start.call(e, l), et.fx.timer(et.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function O(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(dt) || [];
			if (et.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function F(e, t, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, et.each(e[s] || [], function(e, s) {
				var l = s(t, n, r);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {}, a = e === Cn;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}
	function M(e, t) {
		var n, r, i = et.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && et.extend(!0, e, r), e
	}
	function P(e, t, n) {
		for (var r, i, o, a, s = e.contents, u = e.dataTypes;
		"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r) for (i in s) if (s[i] && s[i].test(r)) {
			u.unshift(i);
			break
		}
		if (u[0] in n) o = u[0];
		else {
			for (i in n) {
				if (!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}
	function R(e, t, n, r) {
		var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
		if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;
		else if ("*" !== u && u !== o) {
			if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
				a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
				break
			}
			if (a !== !0) if (a && e["throws"]) t = a(t);
			else try {
				t = a(t)
			} catch (f) {
				return {
					state: "parsererror",
					error: a ? f : "No conversion from " + u + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	function _(e, t, n, r) {
		var i;
		if (et.isArray(t)) et.each(t, function(t, i) {
			n || En.test(e) ? r(e, i) : _(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== et.type(t)) r(e, t);
		else for (i in t) _(e + "[" + i + "]", t[i], n, r)
	}
	function W(e) {
		return et.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var I = [],
		B = I.slice,
		X = I.concat,
		z = I.push,
		V = I.indexOf,
		U = {}, Y = U.toString,
		G = U.hasOwnProperty,
		Q = "".trim,
		J = {}, K = e.document,
		Z = "2.1.0",
		et = function(e, t) {
			return new et.fn.init(e, t)
		}, tt = /^-ms-/,
		nt = /-([\da-z])/gi,
		rt = function(e, t) {
			return t.toUpperCase()
		};
	et.fn = et.prototype = {
		jquery: Z,
		constructor: et,
		selector: "",
		length: 0,
		toArray: function() {
			return B.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : B.call(this)
		},
		pushStack: function(e) {
			var t = et.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return et.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(et.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(B.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: z,
		sort: I.sort,
		splice: I.splice
	}, et.extend = et.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {}, s = 1,
			u = arguments.length,
			l = !1;
		for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || et.isFunction(a) || (a = {}), s === u && (a = this, s--); u > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], r = e[t], a !== r && (l && r && (et.isPlainObject(r) || (i = et.isArray(r))) ? (i ? (i = !1, o = n && et.isArray(n) ? n : []) : o = n && et.isPlainObject(n) ? n : {}, a[t] = et.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, et.extend({
		expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === et.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return e - parseFloat(e) >= 0
		},
		isPlainObject: function(e) {
			if ("object" !== et.type(e) || e.nodeType || et.isWindow(e)) return !1;
			try {
				if (e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
			} catch (t) {
				return !1
			}
			return !0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? U[Y.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			e = et.trim(e), e && (1 === e.indexOf("use strict") ? (t = K.createElement("script"), t.text = e, K.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(tt, "ms-").replace(nt, rt)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e);
			if (r) {
				if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
				else for (o in e) if (i = t.apply(e[o], r), i === !1) break
			} else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : Q.call(e)
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? et.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : V.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e),
				u = [];
			if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && u.push(i);
			else for (o in e) i = t(e[o], o, r), null != i && u.push(i);
			return X.apply([], u)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (n = e[t], t = e, e = n), et.isFunction(e) ? (r = B.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(B.call(arguments)))
			}, i.guid = e.guid = e.guid || et.guid++, i) : void 0
		},
		now: Date.now,
		support: J
	}), et.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		U["[object " + t + "]"] = t.toLowerCase()
	});
	var it = function(e) {
		function t(e, t, n, r) {
			var i, o, a, s, u, l, f, h, g, m;
			if ((t ? t.ownerDocument || t : _) !== $ && A(t), t = t || $, n = n || [], !e || "string" != typeof e) return n;
			if (1 !== (s = t.nodeType) && 9 !== s) return [];
			if (H && !r) {
				if (i = yt.exec(e)) if (a = i[1]) {
					if (9 === s) {
						if (o = t.getElementById(a), !o || !o.parentNode) return n;
						if (o.id === a) return n.push(o), n
					} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && P(t, o) && o.id === a) return n.push(o), n
				} else {
					if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
					if ((a = i[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n
				}
				if (T.qsa && (!O || !O.test(e))) {
					if (h = f = R, g = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						for (l = p(e), (f = t.getAttribute("id")) ? h = f.replace(bt, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", u = l.length; u--;) l[u] = h + d(l[u]);
						g = xt.test(e) && c(t.parentNode) || t, m = l.join(",")
					}
					if (m) try {
						return Z.apply(n, g.querySelectorAll(m)), n
					} catch (v) {} finally {
						f || t.removeAttribute("id")
					}
				}
			}
			return w(e.replace(ut, "$1"), t, n, r)
		}
		function n() {
			function e(n, r) {
				return t.push(n + " ") > k.cacheLength && delete e[t.shift()], e[n + " "] = r
			}
			var t = [];
			return e
		}
		function r(e) {
			return e[R] = !0, e
		}
		function i(e) {
			var t = $.createElement("div");
			try {
				return !!e(t)
			} catch (n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}
		function o(e, t) {
			for (var n = e.split("|"), r = e.length; r--;) k.attrHandle[n[r]] = t
		}
		function a(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
			if (r) return r;
			if (n) for (; n = n.nextSibling;) if (n === t) return -1;
			return e ? 1 : -1
		}
		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function u(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function l(e) {
			return r(function(t) {
				return t = +t, r(function(n, r) {
					for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}
		function c(e) {
			return e && typeof e.getElementsByTagName !== U && e
		}
		function f() {}
		function p(e, n) {
			var r, i, o, a, s, u, l, c = X[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (s = e, u = [], l = k.preFilter; s;) {
				(!r || (i = lt.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(ut, " ")
				}), s = s.slice(r.length));
				for (a in k.filter)!(i = ht[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if (!r) break
			}
			return n ? s.length : s ? t.error(e) : X(e, u).slice(0)
		}
		function d(e) {
			for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}
		function h(e, t, n) {
			var r = t.dir,
				i = n && "parentNode" === r,
				o = I++;
			return t.first ? function(t, n, o) {
				for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
			} : function(t, n, a) {
				var s, u, l = [W, o];
				if (a) {
					for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
				} else for (; t = t[r];) if (1 === t.nodeType || i) {
					if (u = t[R] || (t[R] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2];
					if (u[r] = l, l[2] = e(t, n, a)) return !0
				}
			}
		}
		function g(e) {
			return e.length > 1 ? function(t, n, r) {
				for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}
		function m(e, t, n, r, i) {
			for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
			return a
		}
		function v(e, t, n, i, o, a) {
			return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function(r, a, s, u) {
				var l, c, f, p = [],
					d = [],
					h = a.length,
					g = r || b(t || "*", s.nodeType ? [s] : s, []),
					v = !e || !r && t ? g : m(g, p, e, s, u),
					y = n ? o || (r ? e : h || i) ? [] : a : v;
				if (n && n(v, y, s, u), i) for (l = m(y, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
				if (r) {
					if (o || e) {
						if (o) {
							for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
							o(null, y = [], l, u)
						}
						for (c = y.length; c--;)(f = y[c]) && (l = o ? tt.call(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
					}
				} else y = m(y === a ? y.splice(h, y.length) : y), o ? o(null, a, y, u) : Z.apply(a, y)
			})
		}
		function y(e) {
			for (var t, n, r, i = e.length, o = k.relative[e[0].type], a = o || k.relative[" "], s = o ? 1 : 0, u = h(function(e) {
				return e === t
			}, a, !0), l = h(function(e) {
				return tt.call(t, e) > -1
			}, a, !0), c = [function(e, n, r) {
				return !o && (r || n !== S) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
			}]; i > s; s++) if (n = k.relative[e[s].type]) c = [h(g(c), n)];
			else {
				if (n = k.filter[e[s].type].apply(null, e[s].matches), n[R]) {
					for (r = ++s; i > r && !k.relative[e[r].type]; r++);
					return v(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
						value: " " === e[s - 2].type ? "*" : ""
					})).replace(ut, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && d(e))
				}
				c.push(n)
			}
			return g(c)
		}
		function x(e, n) {
			var i = n.length > 0,
				o = e.length > 0,
				a = function(r, a, s, u, l) {
					var c, f, p, d = 0,
						h = "0",
						g = r && [],
						v = [],
						y = S,
						x = r || o && k.find.TAG("*", l),
						b = W += null == y ? 1 : Math.random() || .1,
						w = x.length;
					for (l && (S = a !== $ && a); h !== w && null != (c = x[h]); h++) {
						if (o && c) {
							for (f = 0; p = e[f++];) if (p(c, a, s)) {
								u.push(c);
								break
							}
							l && (W = b)
						}
						i && ((c = !p && c) && d--, r && g.push(c))
					}
					if (d += h, i && h !== d) {
						for (f = 0; p = n[f++];) p(g, v, a, s);
						if (r) {
							if (d > 0) for (; h--;) g[h] || v[h] || (v[h] = J.call(u));
							v = m(v)
						}
						Z.apply(u, v), l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
					}
					return l && (W = b, S = y), g
				};
			return i ? r(a) : a
		}
		function b(e, n, r) {
			for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
			return r
		}
		function w(e, t, n, r) {
			var i, o, a, s, u, l = p(e);
			if (!r && 1 === l.length) {
				if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && H && k.relative[o[1].type]) {
					if (t = (k.find.ID(a.matches[0].replace(wt, Ct), t) || [])[0], !t) return n;
					e = e.slice(o.shift().value.length)
				}
				for (i = ht.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !k.relative[s = a.type]);) if ((u = k.find[s]) && (r = u(a.matches[0].replace(wt, Ct), xt.test(o[0].type) && c(t.parentNode) || t))) {
					if (o.splice(i, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;
					break
				}
			}
			return D(e, l)(r, t, !H, n, xt.test(e) && c(t.parentNode) || t), n
		}
		var C, T, k, N, E, D, S, j, L, A, $, q, H, O, F, M, P, R = "sizzle" + -new Date,
			_ = e.document,
			W = 0,
			I = 0,
			B = n(),
			X = n(),
			z = n(),
			V = function(e, t) {
				return e === t && (L = !0), 0
			}, U = "undefined",
			Y = 1 << 31,
			G = {}.hasOwnProperty,
			Q = [],
			J = Q.pop,
			K = Q.push,
			Z = Q.push,
			et = Q.slice,
			tt = Q.indexOf || function(e) {
				for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
				return -1
			}, nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			rt = "[\\x20\\t\\r\\n\\f]",
			it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			ot = it.replace("w", "w#"),
			at = "\\[" + rt + "*(" + it + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ot + ")|)|)" + rt + "*\\]",
			st = ":(" + it + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
			ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
			lt = new RegExp("^" + rt + "*," + rt + "*"),
			ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
			ft = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
			pt = new RegExp(st),
			dt = new RegExp("^" + ot + "$"),
			ht = {
				ID: new RegExp("^#(" + it + ")"),
				CLASS: new RegExp("^\\.(" + it + ")"),
				TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + at),
				PSEUDO: new RegExp("^" + st),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + nt + ")$", "i"),
				needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
			}, gt = /^(?:input|select|textarea|button)$/i,
			mt = /^h\d$/i,
			vt = /^[^{]+\{\s*\[native \w/,
			yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			xt = /[+~]/,
			bt = /'|\\/g,
			wt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
			Ct = function(e, t, n) {
				var r = "0x" + t - 65536;
				return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
			};
		try {
			Z.apply(Q = et.call(_.childNodes), _.childNodes), Q[_.childNodes.length].nodeType
		} catch (Tt) {
			Z = {
				apply: Q.length ? function(e, t) {
					K.apply(e, et.call(t))
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		T = t.support = {}, E = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, A = t.setDocument = function(e) {
			var t, n = e ? e.ownerDocument || e : _,
				r = n.defaultView;
			return n !== $ && 9 === n.nodeType && n.documentElement ? ($ = n, q = n.documentElement, H = !E(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function() {
				A()
			}, !1) : r.attachEvent && r.attachEvent("onunload", function() {
				A()
			})), T.attributes = i(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), T.getElementsByTagName = i(function(e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), T.getElementsByClassName = vt.test(n.getElementsByClassName) && i(function(e) {
				return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
			}), T.getById = i(function(e) {
				return q.appendChild(e).id = R, !n.getElementsByName || !n.getElementsByName(R).length
			}), T.getById ? (k.find.ID = function(e, t) {
				if (typeof t.getElementById !== U && H) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, k.filter.ID = function(e) {
				var t = e.replace(wt, Ct);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (delete k.find.ID, k.filter.ID = function(e) {
				var t = e.replace(wt, Ct);
				return function(e) {
					var n = typeof e.getAttributeNode !== U && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), k.find.TAG = T.getElementsByTagName ? function(e, t) {
				return typeof t.getElementsByTagName !== U ? t.getElementsByTagName(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, k.find.CLASS = T.getElementsByClassName && function(e, t) {
				return typeof t.getElementsByClassName !== U && H ? t.getElementsByClassName(e) : void 0
			}, F = [], O = [], (T.qsa = vt.test(n.querySelectorAll)) && (i(function(e) {
				e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && O.push("[*^$]=" + rt + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + rt + "*(?:value|" + nt + ")"), e.querySelectorAll(":checked").length || O.push(":checked")
			}), i(function(e) {
				var t = n.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + rt + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
			})), (T.matchesSelector = vt.test(M = q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
				T.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), F.push("!=", st)
			}), O = O.length && new RegExp(O.join("|")), F = F.length && new RegExp(F.join("|")), t = vt.test(q.compareDocumentPosition), P = t || vt.test(q.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t) for (; t = t.parentNode;) if (t === e) return !0;
				return !1
			}, V = t ? function(e, t) {
				if (e === t) return L = !0, 0;
				var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return r ? r : (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & r || !T.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === _ && P(_, e) ? -1 : t === n || t.ownerDocument === _ && P(_, t) ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0 : 4 & r ? -1 : 1)
			} : function(e, t) {
				if (e === t) return L = !0, 0;
				var r, i = 0,
					o = e.parentNode,
					s = t.parentNode,
					u = [e],
					l = [t];
				if (!o || !s) return e === n ? -1 : t === n ? 1 : o ? -1 : s ? 1 : j ? tt.call(j, e) - tt.call(j, t) : 0;
				if (o === s) return a(e, t);
				for (r = e; r = r.parentNode;) u.unshift(r);
				for (r = t; r = r.parentNode;) l.unshift(r);
				for (; u[i] === l[i];) i++;
				return i ? a(u[i], l[i]) : u[i] === _ ? -1 : l[i] === _ ? 1 : 0
			}, n) : $
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if ((e.ownerDocument || e) !== $ && A(e), n = n.replace(ft, "='$1']"), !(!T.matchesSelector || !H || F && F.test(n) || O && O.test(n))) try {
				var r = M.call(e, n);
				if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch (i) {}
			return t(n, $, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return (e.ownerDocument || e) !== $ && A(e), P(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== $ && A(e);
			var n = k.attrHandle[t.toLowerCase()],
				r = n && G.call(k.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
			return void 0 !== r ? r : T.attributes || !H ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if (L = !T.detectDuplicates, j = !T.sortStable && e.slice(0), e.sort(V), L) {
				for (; t = e[i++];) t === e[i] && (r = n.push(i));
				for (; r--;) e.splice(n[r], 1)
			}
			return j = null, e
		}, N = t.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
				} else if (3 === i || 4 === i) return e.nodeValue
			} else for (; t = e[r++];) n += N(t);
			return n
		}, k = t.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: ht,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(wt, Ct), e[3] = (e[4] || e[5] || "").replace(wt, Ct), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[5] && e[2];
					return ht.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && pt.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(wt, Ct).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = B[e + " "];
					return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && B(e, function(e) {
						return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== U && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, r) {
					return function(i) {
						var o = t.attr(i, e);
						return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !u && !s;
						if (m) {
							if (o) {
								for (; g;) {
									for (f = t; f = f[g];) if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && y) {
								for (c = m[R] || (m[R] = {}), l = c[e] || [], d = l[0] === W && l[1], p = l[0] === W && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) if (1 === f.nodeType && ++p && f === t) {
									c[e] = [W, d, p];
									break
								}
							} else if (y && (l = (t[R] || (t[R] = {}))[e]) && l[0] === W) p = l[1];
							else for (;
							(f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[R] || (f[R] = {}))[e] = [W, p]), f !== t)););
							return p -= i, p === r || p % r === 0 && p / r >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var i, o = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], k.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
						for (var r, i = o(e, n), a = i.length; a--;) r = tt.call(e, i[a]), e[r] = !(t[r] = i[a])
					}) : function(e) {
						return o(e, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function(e) {
					var t = [],
						n = [],
						i = D(e.replace(ut, "$1"));
					return i[R] ? r(function(e, t, n, r) {
						for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
					}) : function(e, r, o) {
						return t[0] = e, i(t, null, o, n), !n.pop()
					}
				}),
				has: r(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: r(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
					}
				}),
				lang: r(function(e) {
					return dt.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(wt, Ct).toLowerCase(),
					function(t) {
						var n;
						do if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
						while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === q
				},
				focus: function(e) {
					return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !! e.checked || "option" === t && !! e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !k.pseudos.empty(e)
				},
				header: function(e) {
					return mt.test(e.nodeName)
				},
				input: function(e) {
					return gt.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: l(function() {
					return [0]
				}),
				last: l(function(e, t) {
					return [t - 1]
				}),
				eq: l(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: l(function(e, t) {
					for (var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: l(function(e, t) {
					for (var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: l(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: l(function(e, t, n) {
					for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, k.pseudos.nth = k.pseudos.eq;
		for (C in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) k.pseudos[C] = s(C);
		for (C in {
			submit: !0,
			reset: !0
		}) k.pseudos[C] = u(C);
		return f.prototype = k.filters = k.pseudos, k.setFilters = new f, D = t.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = z[e + " "];
			if (!o) {
				for (t || (t = p(e)), n = t.length; n--;) o = y(t[n]), o[R] ? r.push(o) : i.push(o);
				o = z(e, x(i, r))
			}
			return o
		}, T.sortStable = R.split("").sort(V).join("") === R, T.detectDuplicates = !! L, A(), T.sortDetached = i(function(e) {
			return 1 & e.compareDocumentPosition($.createElement("div"))
		}), i(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), T.attributes && i(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), i(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(nt, function(e, t, n) {
			var r;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), t
	}(e);
	et.find = it, et.expr = it.selectors, et.expr[":"] = et.expr.pseudos, et.unique = it.uniqueSort, et.text = it.getText, et.isXMLDoc = it.isXML, et.contains = it.contains;
	var ot = et.expr.match.needsContext,
		at = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		st = /^.[^:#\[\.,]*$/;
	et.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? et.find.matchesSelector(r, e) ? [r] : [] : et.find.matches(e, et.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, et.fn.extend({
		find: function(e) {
			var t, n = this.length,
				r = [],
				i = this;
			if ("string" != typeof e) return this.pushStack(et(e).filter(function() {
				for (t = 0; n > t; t++) if (et.contains(i[t], this)) return !0
			}));
			for (t = 0; n > t; t++) et.find(e, i[t], r);
			return r = this.pushStack(n > 1 ? et.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && ot.test(e) ? et(e) : e || [], !1).length
		}
	});
	var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ct = et.fn.init = function(e, t) {
			var n, r;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : lt.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || ut).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof et ? t[0] : t, et.merge(this, et.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : K, !0)), at.test(n[1]) && et.isPlainObject(t)) for (n in t) et.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return r = K.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = K, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : et.isFunction(e) ? "undefined" != typeof ut.ready ? ut.ready(e) : e(et) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), et.makeArray(e, this))
		};
	ct.prototype = et.fn, ut = et(K);
	var ft = /^(?:parents|prev(?:Until|All))/,
		pt = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	et.extend({
		dir: function(e, t, n) {
			for (var r = [], i = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
				if (i && et(e).is(n)) break;
				r.push(e)
			}
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), et.fn.extend({
		has: function(e) {
			var t = et(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++) if (et.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = ot.test(e) || "string" != typeof e ? et(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && et.find.matchesSelector(n, e))) {
				o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? et.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? V.call(et(e), this[0]) : V.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(et.unique(et.merge(this.get(), et(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), et.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return et.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return et.dir(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return et.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return et.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return et.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return et.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return et.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return et.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || et.merge([], e.childNodes)
		}
	}, function(e, t) {
		et.fn[e] = function(n, r) {
			var i = et.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = et.filter(r, i)), this.length > 1 && (pt[e] || et.unique(i), ft.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var dt = /\S+/g,
		ht = {};
	et.Callbacks = function(e) {
		e = "string" == typeof e ? ht[e] || o(e) : et.extend({}, e);
		var t, n, r, i, a, s, u = [],
			l = !e.once && [],
			c = function(o) {
				for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = u.length, r = !0; u && a > s; s++) if (u[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
					t = !1;
					break
				}
				r = !1, u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
			}, f = {
				add: function() {
					if (u) {
						var n = u.length;
						! function o(t) {
							et.each(t, function(t, n) {
								var r = et.type(n);
								"function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), r ? a = u.length : t && (i = n, c(t))
					}
					return this
				},
				remove: function() {
					return u && et.each(arguments, function(e, t) {
						for (var n;
						(n = et.inArray(t, u, n)) > -1;) u.splice(n, 1), r && (a >= n && a--, s >= n && s--)
					}), this
				},
				has: function(e) {
					return e ? et.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], a = 0, this
				},
				disable: function() {
					return u = l = t = void 0, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = void 0, t || f.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, t) {
					return !u || n && !l || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? l.push(t) : c(t)), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return f
	}, et.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", et.Callbacks("once memory"), "resolved"],
				["reject", "fail", et.Callbacks("once memory"), "rejected"],
				["notify", "progress", et.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return et.Deferred(function(n) {
							et.each(t, function(t, o) {
								var a = et.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && et.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? et.extend(e, r) : r
					}
				}, i = {};
			return r.pipe = r.then, et.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = B.call(arguments),
				a = o.length,
				s = 1 !== a || e && et.isFunction(e.promise) ? a : 0,
				u = 1 === s ? e : et.Deferred(),
				l = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? B.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
					}
				};
			if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && et.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
			return s || u.resolveWith(r, o), u.promise()
		}
	});
	var gt;
	et.fn.ready = function(e) {
		return et.ready.promise().done(e), this
	}, et.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? et.readyWait++ : et.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --et.readyWait : et.isReady) || (et.isReady = !0, e !== !0 && --et.readyWait > 0 || (gt.resolveWith(K, [et]), et.fn.trigger && et(K).trigger("ready").off("ready")))
		}
	}), et.ready.promise = function(t) {
		return gt || (gt = et.Deferred(), "complete" === K.readyState ? setTimeout(et.ready) : (K.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), gt.promise(t)
	}, et.ready.promise();
	var mt = et.access = function(e, t, n, r, i, o, a) {
		var s = 0,
			u = e.length,
			l = null == n;
		if ("object" === et.type(n)) {
			i = !0;
			for (s in n) et.access(e, t, s, n[s], !0, o, a)
		} else if (void 0 !== r && (i = !0, et.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
			return l.call(et(e), n)
		})), t)) for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
		return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
	};
	et.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, s.uid = 1, s.accepts = et.acceptData, s.prototype = {
		key: function(e) {
			if (!s.accepts(e)) return 0;
			var t = {}, n = e[this.expando];
			if (!n) {
				n = s.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n, et.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if ("string" == typeof t) o[t] = n;
			else if (et.isEmptyObject(o)) et.extend(this.cache[i], t);
			else for (r in t) o[r] = t[r];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return void 0 === t ? n : n[t]
		},
		access: function(e, t, n) {
			var r;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, et.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r, i, o = this.key(e),
				a = this.cache[o];
			if (void 0 === t) this.cache[o] = {};
			else {
				et.isArray(t) ? r = t.concat(t.map(et.camelCase)) : (i = et.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(dt) || [])), n = r.length;
				for (; n--;) delete a[r[n]]
			}
		},
		hasData: function(e) {
			return !et.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var vt = new s,
		yt = new s,
		xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		bt = /([A-Z])/g;
	et.extend({
		hasData: function(e) {
			return yt.hasData(e) || vt.hasData(e)
		},
		data: function(e, t, n) {
			return yt.access(e, t, n)
		},
		removeData: function(e, t) {
			yt.remove(e, t)
		},
		_data: function(e, t, n) {
			return vt.access(e, t, n)
		},
		_removeData: function(e, t) {
			vt.remove(e, t)
		}
	}), et.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (i = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
					for (n = a.length; n--;) r = a[n].name, 0 === r.indexOf("data-") && (r = et.camelCase(r.slice(5)), u(o, r, i[r]));
					vt.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				yt.set(this, e)
			}) : mt(this, function(t) {
				var n, r = et.camelCase(e);
				if (o && void 0 === t) {
					if (n = yt.get(o, e), void 0 !== n) return n;
					if (n = yt.get(o, r), void 0 !== n) return n;
					if (n = u(o, r, void 0), void 0 !== n) return n
				} else this.each(function() {
					var n = yt.get(this, r);
					yt.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && yt.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				yt.remove(this, e)
			})
		}
	}), et.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = vt.get(e, t), n && (!r || et.isArray(n) ? r = vt.access(e, t, et.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = et.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = et._queueHooks(e, t),
				a = function() {
					et.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return vt.get(e, n) || vt.access(e, n, {
				empty: et.Callbacks("once memory").add(function() {
					vt.remove(e, [t + "queue", n])
				})
			})
		}
	}), et.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? et.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = et.queue(this, e, t);
				et._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && et.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				et.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = et.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = vt.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ct = ["Top", "Right", "Bottom", "Left"],
		Tt = function(e, t) {
			return e = t || e, "none" === et.css(e, "display") || !et.contains(e.ownerDocument, e)
		}, kt = /^(?:checkbox|radio)$/i;
	! function() {
		var e = K.createDocumentFragment(),
			t = e.appendChild(K.createElement("div"));
		t.innerHTML = "<input type='radio' checked='checked' name='t'/>", J.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue
	}();
	var Nt = "undefined";
	J.focusinBubbles = "onfocusin" in e;
	var Et = /^key/,
		Dt = /^(?:mouse|contextmenu)|click/,
		St = /^(?:focusinfocus|focusoutblur)$/,
		jt = /^([^.]*)(?:\.(.+)|)$/;
	et.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, m = vt.get(e);
			if (m) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = et.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
				return typeof et !== Nt && et.event.triggered !== t.type ? et.event.dispatch.apply(e, arguments) : void 0
			}), t = (t || "").match(dt) || [""], l = t.length; l--;) s = jt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = et.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = et.event.special[d] || {}, c = et.extend({
				type: d,
				origType: g,
				data: r,
				handler: n,
				guid: n.guid,
				selector: i,
				needsContext: i && et.expr.match.needsContext.test(i),
				namespace: h.join(".")
			}, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a, !1)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), et.event.global[d] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, m = vt.hasData(e) && vt.get(e);
			if (m && (u = m.events)) {
				for (t = (t || "").match(dt) || [""], l = t.length; l--;) if (s = jt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
					for (f = et.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
					a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || et.removeEvent(e, d, m.handle), delete u[d])
				} else for (d in u) et.event.remove(e, d + t[l], n, r, !0);
				et.isEmptyObject(u) && (delete m.handle, vt.remove(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var o, a, s, u, l, c, f, p = [r || K],
				d = G.call(t, "type") ? t.type : t,
				h = G.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = s = r = r || K, 3 !== r.nodeType && 8 !== r.nodeType && !St.test(d + et.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."), d = h.shift(), h.sort()), l = d.indexOf(":") < 0 && "on" + d, t = t[et.expando] ? t : new et.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : et.makeArray(n, [t]), f = et.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if (!i && !f.noBubble && !et.isWindow(r)) {
					for (u = f.delegateType || d, St.test(u + d) || (a = a.parentNode); a; a = a.parentNode) p.push(a), s = a;
					s === (r.ownerDocument || K) && p.push(s.defaultView || s.parentWindow || e)
				}
				for (o = 0;
				(a = p[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? u : f.bindType || d, c = (vt.get(a, "events") || {})[t.type] && vt.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && et.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !et.acceptData(r) || l && et.isFunction(r[d]) && !et.isWindow(r) && (s = r[l], s && (r[l] = null), et.event.triggered = d, r[d](), et.event.triggered = void 0, s && (r[l] = s)), t.result
			}
		},
		dispatch: function(e) {
			e = et.event.fix(e);
			var t, n, r, i, o, a = [],
				s = B.call(arguments),
				u = (vt.get(this, "events") || {})[e.type] || [],
				l = et.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
				for (a = et.event.handlers.call(this, e, u), t = 0;
				(i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0;
				(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((et.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return l.postDispatch && l.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a = [],
				s = t.delegateCount,
				u = e.target;
			if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) if (u.disabled !== !0 || "click" !== e.type) {
				for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? et(i, this).index(u) >= 0 : et.find(i, this, null, [u]).length), r[i] && r.push(o);
				r.length && a.push({
					elem: u,
					handlers: r
				})
			}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || K, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[et.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = Dt.test(i) ? this.mouseHooks : Et.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new et.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = K), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== f() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === f() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && et.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return et.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = et.extend(new et.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? et.event.trigger(i, null, t) : et.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, et.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, et.Event = function(e, t) {
		return this instanceof et.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && et.extend(this, t), this.timeStamp = e && e.timeStamp || et.now(), void(this[et.expando] = !0)) : new et.Event(e, t)
	}, et.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = l, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = l, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = l, this.stopPropagation()
		}
	}, et.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		et.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !et.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), J.focusinBubbles || et.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			et.event.simulate(t, e.target, et.event.fix(e), !0)
		};
		et.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = vt.access(r, t);
				i || r.addEventListener(e, n, !0), vt.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = vt.access(r, t) - 1;
				i ? vt.access(r, t, i) : (r.removeEventListener(e, n, !0), vt.remove(r, t))
			}
		}
	}), et.fn.extend({
		on: function(e, t, n, r, i) {
			var o, a;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (a in e) this.on(a, t, n, e[a], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
			else if (!r) return this;
			return 1 === i && (o = r, r = function(e) {
				return et().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = et.guid++)), this.each(function() {
				et.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, et(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
				et.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				et.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? et.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		At = /<([\w:]+)/,
		$t = /<|&#?\w+;/,
		qt = /<(?:script|style|link)/i,
		Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ot = /^$|\/(?:java|ecma)script/i,
		Ft = /^true\/(.*)/,
		Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Pt = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Pt.optgroup = Pt.option, Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead, Pt.th = Pt.td, et.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s = e.cloneNode(!0),
				u = et.contains(e.ownerDocument, e);
			if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || et.isXMLDoc(e))) for (a = v(s), o = v(e), r = 0, i = o.length; i > r; r++) y(o[r], a[r]);
			if (t) if (n) for (o = o || v(e), a = a || v(s), r = 0, i = o.length; i > r; r++) m(o[r], a[r]);
			else m(e, s);
			return a = v(s, "script"), a.length > 0 && g(a, !u && v(e, "script")), s
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; d > p; p++) if (i = e[p], i || 0 === i) if ("object" === et.type(i)) et.merge(f, i.nodeType ? [i] : i);
			else if ($t.test(i)) {
				for (o = o || c.appendChild(t.createElement("div")), a = (At.exec(i) || ["", ""])[1].toLowerCase(), s = Pt[a] || Pt._default, o.innerHTML = s[1] + i.replace(Lt, "<$1></$2>") + s[2], l = s[0]; l--;) o = o.lastChild;
				et.merge(f, o.childNodes), o = c.firstChild, o.textContent = ""
			} else f.push(t.createTextNode(i));
			for (c.textContent = "", p = 0; i = f[p++];) if ((!r || -1 === et.inArray(i, r)) && (u = et.contains(i.ownerDocument, i), o = v(c.appendChild(i), "script"), u && g(o), n)) for (l = 0; i = o[l++];) Ot.test(i.type || "") && n.push(i);
			return c
		},
		cleanData: function(e) {
			for (var t, n, r, i, o, a, s = et.event.special, u = 0; void 0 !== (n = e[u]); u++) {
				if (et.acceptData(n) && (o = n[vt.expando], o && (t = vt.cache[o]))) {
					if (r = Object.keys(t.events || {}), r.length) for (a = 0; void 0 !== (i = r[a]); a++) s[i] ? et.event.remove(n, i) : et.removeEvent(n, i, t.handle);
					vt.cache[o] && delete vt.cache[o]
				}
				delete yt.cache[n[yt.expando]]
			}
		}
	}), et.fn.extend({
		text: function(e) {
			return mt(this, function(e) {
				return void 0 === e ? et.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = p(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? et.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || et.cleanData(v(n)), n.parentNode && (t && et.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (et.cleanData(v(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return et.clone(this, e, t)
			})
		},
		html: function(e) {
			return mt(this, function(e) {
				var t = this[0] || {}, n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !qt.test(e) && !Pt[(At.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Lt, "<$1></$2>");
					try {
						for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (et.cleanData(v(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, et.cleanData(v(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = X.apply([], e);
			var n, r, i, o, a, s, u = 0,
				l = this.length,
				c = this,
				f = l - 1,
				p = e[0],
				g = et.isFunction(p);
			if (g || l > 1 && "string" == typeof p && !J.checkClone && Ht.test(p)) return this.each(function(n) {
				var r = c.eq(n);
				g && (e[0] = p.call(this, n, r.html())), r.domManip(e, t)
			});
			if (l && (n = et.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
				for (i = et.map(v(n, "script"), d), o = i.length; l > u; u++) a = n, u !== f && (a = et.clone(a, !0, !0), o && et.merge(i, v(a, "script"))), t.call(this[u], a, u);
				if (o) for (s = i[i.length - 1].ownerDocument, et.map(i, h), u = 0; o > u; u++) a = i[u], Ot.test(a.type || "") && !vt.access(a, "globalEval") && et.contains(s, a) && (a.src ? et._evalUrl && et._evalUrl(a.src) : et.globalEval(a.textContent.replace(Mt, "")))
			}
			return this
		}
	}), et.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		et.fn[e] = function(e) {
			for (var n, r = [], i = et(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), et(i[a])[t](n), z.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var Rt, _t = {}, Wt = /^margin/,
		It = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
		Bt = function(e) {
			return e.ownerDocument.defaultView.getComputedStyle(e, null)
		};
	! function() {
		function t() {
			s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", o.appendChild(a);
			var t = e.getComputedStyle(s, null);
			n = "1%" !== t.top, r = "4px" === t.width, o.removeChild(a)
		}
		var n, r, i = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
			o = K.documentElement,
			a = K.createElement("div"),
			s = K.createElement("div");
		s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(s), e.getComputedStyle && et.extend(J, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return null == r && t(), r
			},
			reliableMarginRight: function() {
				var t, n = s.appendChild(K.createElement("div"));
				return n.style.cssText = s.style.cssText = i, n.style.marginRight = n.style.width = "0", s.style.width = "1px", o.appendChild(a), t = !parseFloat(e.getComputedStyle(n, null).marginRight), o.removeChild(a), s.innerHTML = "", t
			}
		})
	}(), et.swap = function(e, t, n, r) {
		var i, o, a = {};
		for (o in t) a[o] = e.style[o], e.style[o] = t[o];
		i = n.apply(e, r || []);
		for (o in t) e.style[o] = a[o];
		return i
	};
	var Xt = /^(none|table(?!-c[ea]).+)/,
		zt = new RegExp("^(" + wt + ")(.*)$", "i"),
		Vt = new RegExp("^([+-])=(" + wt + ")", "i"),
		Ut = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, Yt = {
			letterSpacing: 0,
			fontWeight: 400
		}, Gt = ["Webkit", "O", "Moz", "ms"];
	et.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = w(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = et.camelCase(t),
					u = e.style;
				return t = et.cssProps[s] || (et.cssProps[s] = T(u, s)), a = et.cssHooks[t] || et.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = Vt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(et.css(e, t)), o = "number"), null != n && n === n && ("number" !== o || et.cssNumber[s] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = "", u[t] = n)), void 0)
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = et.camelCase(t);
			return t = et.cssProps[s] || (et.cssProps[s] = T(e.style, s)), a = et.cssHooks[t] || et.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Yt && (i = Yt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || et.isNumeric(o) ? o || 0 : i) : i
		}
	}), et.each(["height", "width"], function(e, t) {
		et.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? 0 === e.offsetWidth && Xt.test(et.css(e, "display")) ? et.swap(e, Ut, function() {
					return E(e, t, r)
				}) : E(e, t, r) : void 0
			},
			set: function(e, n, r) {
				var i = r && Bt(e);
				return k(e, n, r ? N(e, t, r, "border-box" === et.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), et.cssHooks.marginRight = C(J.reliableMarginRight, function(e, t) {
		return t ? et.swap(e, {
			display: "inline-block"
		}, w, [e, "marginRight"]) : void 0
	}), et.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		et.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ct[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Wt.test(e) || (et.cssHooks[e + t].set = k)
	}), et.fn.extend({
		css: function(e, t) {
			return mt(this, function(e, t, n) {
				var r, i, o = {}, a = 0;
				if (et.isArray(t)) {
					for (r = Bt(e), i = t.length; i > a; a++) o[t[a]] = et.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? et.style(e, t, n) : et.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return D(this, !0)
		},
		hide: function() {
			return D(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Tt(this) ? et(this).show() : et(this).hide()
			})
		}
	}), et.Tween = S, S.prototype = {
		constructor: S,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (et.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = S.propHooks[this.prop];
			return e && e.get ? e.get(this) : S.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = S.propHooks[this.prop];
			return this.pos = t = this.options.duration ? et.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : S.propHooks._default.set(this), this
		}
	}, S.prototype.init.prototype = S.prototype, S.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = et.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				et.fx.step[e.prop] ? et.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[et.cssProps[e.prop]] || et.cssHooks[e.prop]) ? et.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, S.propHooks.scrollTop = S.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, et.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, et.fx = S.prototype.init, et.fx.step = {};
	var Qt, Jt, Kt = /^(?:toggle|show|hide)$/,
		Zt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
		en = /queueHooks$/,
		tn = [$],
		nn = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Zt.exec(t),
					o = i && i[3] || (et.cssNumber[e] ? "" : "px"),
					a = (et.cssNumber[e] || "px" !== o && +r) && Zt.exec(et.css(n.elem, e)),
					s = 1,
					u = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, et.style(n.elem, e, a + o);
					while (s !== (s = n.cur() / r) && 1 !== s && --u)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	et.Animation = et.extend(H, {
		tweener: function(e, t) {
			et.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nn[n] = nn[n] || [], nn[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? tn.unshift(e) : tn.push(e)
		}
	}), et.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? et.extend({}, e) : {
			complete: n || !n && t || et.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !et.isFunction(t) && t
		};
		return r.duration = et.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in et.fx.speeds ? et.fx.speeds[r.duration] : et.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			et.isFunction(r.old) && r.old.call(this), r.queue && et.dequeue(this, r.queue)
		}, r
	}, et.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(Tt).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = et.isEmptyObject(e),
				o = et.speed(t, n, r),
				a = function() {
					var t = H(this, et.extend({}, e), o);
					(i || vt.get(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, t, n) {
			var r = function(e) {
				var t = e.stop;
				delete e.stop, t(n)
			};
			return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					i = null != e && e + "queueHooks",
					o = et.timers,
					a = vt.get(this);
				if (i) a[i] && a[i].stop && r(a[i]);
				else for (i in a) a[i] && a[i].stop && en.test(i) && r(a[i]);
				for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
				(t || !n) && et.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = vt.get(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = et.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, et.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), et.each(["toggle", "show", "hide"], function(e, t) {
		var n = et.fn[t];
		et.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, r, i)
		}
	}), et.each({
		slideDown: L("show"),
		slideUp: L("hide"),
		slideToggle: L("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		et.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), et.timers = [], et.fx.tick = function() {
		var e, t = 0,
			n = et.timers;
		for (Qt = et.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
		n.length || et.fx.stop(), Qt = void 0
	}, et.fx.timer = function(e) {
		et.timers.push(e), e() ? et.fx.start() : et.timers.pop()
	}, et.fx.interval = 13, et.fx.start = function() {
		Jt || (Jt = setInterval(et.fx.tick, et.fx.interval))
	}, et.fx.stop = function() {
		clearInterval(Jt), Jt = null
	}, et.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, et.fn.delay = function(e, t) {
		return e = et.fx ? et.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
			var r = setTimeout(t, e);
			n.stop = function() {
				clearTimeout(r)
			}
		})
	},
	function() {
		var e = K.createElement("input"),
			t = K.createElement("select"),
			n = t.appendChild(K.createElement("option"));
		e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, e = K.createElement("input"), e.value = "t", e.type = "radio", J.radioValue = "t" === e.value
	}();
	var rn, on, an = et.expr.attrHandle;
	et.fn.extend({
		attr: function(e, t) {
			return mt(this, et.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				et.removeAttr(this, e)
			})
		}
	}), et.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === Nt ? et.prop(e, t, n) : (1 === o && et.isXMLDoc(e) || (t = t.toLowerCase(), r = et.attrHooks[t] || (et.expr.match.bool.test(t) ? on : rn)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = et.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void et.removeAttr(e, t))
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(dt);
			if (o && 1 === e.nodeType) for (; n = o[i++];) r = et.propFix[n] || n, et.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!J.radioValue && "radio" === t && et.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), on = {
		set: function(e, t, n) {
			return t === !1 ? et.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, et.each(et.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = an[t] || et.find.attr;
		an[t] = function(e, t, r) {
			var i, o;
			return r || (o = an[t], an[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, an[t] = o), i
		}
	});
	var sn = /^(?:input|select|textarea|button)$/i;
	et.fn.extend({
		prop: function(e, t) {
			return mt(this, et.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[et.propFix[e] || e]
			})
		}
	}), et.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o, a = e.nodeType;
			if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !et.isXMLDoc(e), o && (t = et.propFix[t] || t, i = et.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || sn.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), J.optSelected || (et.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), et.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		et.propFix[this.toLowerCase()] = this
	});
	var un = /[\t\r\n\f]/g;
	et.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, a, s = "string" == typeof e && e,
				u = 0,
				l = this.length;
			if (et.isFunction(e)) return this.each(function(t) {
				et(this).addClass(e.call(this, t, this.className))
			});
			if (s) for (t = (e || "").match(dt) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : " ")) {
				for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
				a = et.trim(r), n.className !== a && (n.className = a)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
				u = 0,
				l = this.length;
			if (et.isFunction(e)) return this.each(function(t) {
				et(this).removeClass(e.call(this, t, this.className))
			});
			if (s) for (t = (e || "").match(dt) || []; l > u; u++) if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(un, " ") : "")) {
				for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
				a = e ? et.trim(r) : "", n.className !== a && (n.className = a)
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(et.isFunction(e) ? function(n) {
				et(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n) for (var t, r = 0, i = et(this), o = e.match(dt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else(n === Nt || "boolean" === n) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : vt.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(un, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	});
	var ln = /\r/g;
	et.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if (arguments.length) return r = et.isFunction(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, et(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : et.isArray(i) && (i = et.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = et.valHooks[this.type] || et.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if (i) return t = et.valHooks[i.type] || et.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ln, "") : null == n ? "" : n)
			}
		}
	}), et.extend({
		valHooks: {
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) if (n = r[u], !(!n.selected && u !== i || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && et.nodeName(n.parentNode, "optgroup"))) {
						if (t = et(n).val(), o) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = et.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = et.inArray(et(r).val(), o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), et.each(["radio", "checkbox"], function() {
		et.valHooks[this] = {
			set: function(e, t) {
				return et.isArray(t) ? e.checked = et.inArray(et(e).val(), t) >= 0 : void 0
			}
		}, J.checkOn || (et.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), et.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		et.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), et.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var cn = et.now(),
		fn = /\?/;
	et.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, et.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			n = new DOMParser, t = n.parseFromString(e, "text/xml")
		} catch (r) {
			t = void 0
		}
		return (!t || t.getElementsByTagName("parsererror").length) && et.error("Invalid XML: " + e), t
	};
	var pn, dn, hn = /#.*$/,
		gn = /([?&])_=[^&]*/,
		mn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		vn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		yn = /^(?:GET|HEAD)$/,
		xn = /^\/\//,
		bn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		wn = {}, Cn = {}, Tn = "*/".concat("*");
	try {
		dn = location.href
	} catch (kn) {
		dn = K.createElement("a"), dn.href = "", dn = dn.href
	}
	pn = bn.exec(dn.toLowerCase()) || [], et.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: dn,
			type: "GET",
			isLocal: vn.test(pn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Tn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": et.parseJSON,
				"text xml": et.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? M(M(e, et.ajaxSettings), t) : M(et.ajaxSettings, e)
		},
		ajaxPrefilter: O(wn),
		ajaxTransport: O(Cn),
		ajax: function(e, t) {
			function n(e, t, n, a) {
				var u, c, v, y, b, C = t;
				2 !== x && (x = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, n && (y = P(f, w, n)), y = R(f, y, w, u), u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"), b && (et.lastModified[i] = b), b = w.getResponseHeader("etag"), b && (et.etag[i] = b)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state, c = y.data, v = y.error, u = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || C) + "", u ? h.resolveWith(p, [c, C, w]) : h.rejectWith(p, [w, C, v]), w.statusCode(m), m = void 0, l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]), g.fireWith(p, [w, C]), l && (d.trigger("ajaxComplete", [w, f]), --et.active || et.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var r, i, o, a, s, u, l, c, f = et.ajaxSetup({}, t),
				p = f.context || f,
				d = f.context && (p.nodeType || p.jquery) ? et(p) : et.event,
				h = et.Deferred(),
				g = et.Callbacks("once memory"),
				m = f.statusCode || {}, v = {}, y = {}, x = 0,
				b = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!a) for (a = {}; t = mn.exec(o);) a[t[1].toLowerCase()] = t[2];
							t = a[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? o : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = y[n] = y[n] || e, v[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (f.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > x) for (t in e) m[t] = [m[t], e[t]];
						else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || b;
						return r && r.abort(t), n(0, t), this
					}
				};
			if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, f.url = ((e || f.url || dn) + "").replace(hn, "").replace(xn, pn[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = et.trim(f.dataType || "*").toLowerCase().match(dt) || [""], null == f.crossDomain && (u = bn.exec(f.url.toLowerCase()), f.crossDomain = !(!u || u[1] === pn[1] && u[2] === pn[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (pn[3] || ("http:" === pn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = et.param(f.data, f.traditional)), F(wn, f, t, w), 2 === x) return w;
			l = f.global, l && 0 === et.active++ && et.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !yn.test(f.type), i = f.url, f.hasContent || (f.data && (i = f.url += (fn.test(i) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = gn.test(i) ? i.replace(gn, "$1_=" + cn++) : i + (fn.test(i) ? "&" : "?") + "_=" + cn++)), f.ifModified && (et.lastModified[i] && w.setRequestHeader("If-Modified-Since", et.lastModified[i]), et.etag[i] && w.setRequestHeader("If-None-Match", et.etag[i])), (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Tn + "; q=0.01" : "") : f.accepts["*"]);
			for (c in f.headers) w.setRequestHeader(c, f.headers[c]);
			if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x)) return w.abort();
			b = "abort";
			for (c in {
				success: 1,
				error: 1,
				complete: 1
			}) w[c](f[c]);
			if (r = F(Cn, f, t, w)) {
				w.readyState = 1, l && d.trigger("ajaxSend", [w, f]), f.async && f.timeout > 0 && (s = setTimeout(function() {
					w.abort("timeout")
				}, f.timeout));
				try {
					x = 1, r.send(v, n)
				} catch (C) {
					if (!(2 > x)) throw C;
					n(-1, C)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function(e, t, n) {
			return et.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return et.get(e, void 0, t, "script")
		}
	}), et.each(["get", "post"], function(e, t) {
		et[t] = function(e, n, r, i) {
			return et.isFunction(n) && (i = i || r, r = n, n = void 0), et.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), et.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		et.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), et._evalUrl = function(e) {
		return et.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, et.fn.extend({
		wrapAll: function(e) {
			var t;
			return et.isFunction(e) ? this.each(function(t) {
				et(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = et(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return this.each(et.isFunction(e) ? function(t) {
				et(this).wrapInner(e.call(this, t))
			} : function() {
				var t = et(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = et.isFunction(e);
			return this.each(function(n) {
				et(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				et.nodeName(this, "body") || et(this).replaceWith(this.childNodes)
			}).end()
		}
	}), et.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, et.expr.filters.visible = function(e) {
		return !et.expr.filters.hidden(e)
	};
	var Nn = /%20/g,
		En = /\[\]$/,
		Dn = /\r?\n/g,
		Sn = /^(?:submit|button|image|reset|file)$/i,
		jn = /^(?:input|select|textarea|keygen)/i;
	et.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = et.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = et.ajaxSettings && et.ajaxSettings.traditional), et.isArray(e) || e.jquery && !et.isPlainObject(e)) et.each(e, function() {
			i(this.name, this.value)
		});
		else for (n in e) _(n, e[n], t, i);
		return r.join("&").replace(Nn, "+")
	}, et.fn.extend({
		serialize: function() {
			return et.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = et.prop(this, "elements");
				return e ? et.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !et(this).is(":disabled") && jn.test(this.nodeName) && !Sn.test(e) && (this.checked || !kt.test(e))
			}).map(function(e, t) {
				var n = et(this).val();
				return null == n ? null : et.isArray(n) ? et.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Dn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Dn, "\r\n")
				}
			}).get()
		}
	}), et.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var Ln = 0,
		An = {}, $n = {
			0: 200,
			1223: 204
		}, qn = et.ajaxSettings.xhr();
	e.ActiveXObject && et(e).on("unload", function() {
		for (var e in An) An[e]()
	}), J.cors = !! qn && "withCredentials" in qn, J.ajax = qn = !! qn, et.ajaxTransport(function(e) {
		var t;
		return J.cors || qn && !e.crossDomain ? {
			send: function(n, r) {
				var i, o = e.xhr(),
					a = ++Ln;
				if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
				e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n) o.setRequestHeader(i, n[i]);
				t = function(e) {
					return function() {
						t && (delete An[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r($n[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
							text: o.responseText
						} : void 0, o.getAllResponseHeaders()))
					}
				}, o.onload = t(), o.onerror = t("error"), t = An[a] = t("abort"), o.send(e.hasContent && e.data || null)
			},
			abort: function() {
				t && t()
			}
		} : void 0
	}), et.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return et.globalEval(e), e
			}
		}
	}), et.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), et.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = et("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), K.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Hn = [],
		On = /(=)\?(?=&|$)|\?\?/;
	et.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Hn.pop() || et.expando + "_" + cn++;
			return this[e] = !0, e
		}
	}), et.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, a, s = t.jsonp !== !1 && (On.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && On.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = et.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(On, "$1" + i) : t.jsonp !== !1 && (t.url += (fn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return a || et.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			a = arguments
		}, r.always(function() {
			e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Hn.push(i)), a && et.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), et.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || K;
		var r = at.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = et.buildFragment([e], t, i), i && i.length && et(i).remove(), et.merge([], r.childNodes))
	};
	var Fn = et.fn.load;
	et.fn.load = function(e, t, n) {
		if ("string" != typeof e && Fn) return Fn.apply(this, arguments);
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s >= 0 && (r = e.slice(s), e = e.slice(0, s)), et.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && et.ajax({
			url: e,
			type: i,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? et("<div>").append(et.parseHTML(e)).find(r) : e)
		}).complete(n && function(e, t) {
			a.each(n, o || [e.responseText, t, e])
		}), this
	}, et.expr.filters.animated = function(e) {
		return et.grep(et.timers, function(t) {
			return e === t.elem
		}).length
	};
	var Mn = e.document.documentElement;
	et.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l, c = et.css(e, "position"),
				f = et(e),
				p = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = et.css(e, "top"), u = et.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), et.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, et.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				et.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0],
				i = {
					top: 0,
					left: 0
				}, o = r && r.ownerDocument;
			if (o) return t = o.documentElement, et.contains(t, r) ? (typeof r.getBoundingClientRect !== Nt && (i = r.getBoundingClientRect()), n = W(o), {
				top: i.top + n.pageYOffset - t.clientTop,
				left: i.left + n.pageXOffset - t.clientLeft
			}) : i
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === et.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), et.nodeName(e[0], "html") || (r = e.offset()), r.top += et.css(e[0], "borderTopWidth", !0), r.left += et.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - r.top - et.css(n, "marginTop", !0),
					left: t.left - r.left - et.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Mn; e && !et.nodeName(e, "html") && "static" === et.css(e, "position");) e = e.offsetParent;
				return e || Mn
			})
		}
	}), et.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, n) {
		var r = "pageYOffset" === n;
		et.fn[t] = function(i) {
			return mt(this, function(t, i, o) {
				var a = W(t);
				return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
			}, t, i, arguments.length, null)
		}
	}), et.each(["top", "left"], function(e, t) {
		et.cssHooks[t] = C(J.pixelPosition, function(e, n) {
			return n ? (n = w(e, t), It.test(n) ? et(e).position()[t] + "px" : n) : void 0
		})
	}), et.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		et.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			et.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					a = n || (r === !0 || i === !0 ? "margin" : "border");
				return mt(this, function(t, n, r) {
					var i;
					return et.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? et.css(t, n, a) : et.style(t, n, r, a)
				}, t, o ? r : void 0, o, null)
			}
		})
	}), et.fn.size = function() {
		return this.length
	}, et.fn.andSelf = et.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return et
	});
	var Pn = e.jQuery,
		Rn = e.$;
	return et.noConflict = function(t) {
		return e.$ === et && (e.$ = Rn), t && e.jQuery === et && (e.jQuery = Pn), et
	}, typeof t === Nt && (e.jQuery = e.$ = et), et
}),

// 
function() {
	var e, t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, m, v, y, x = [].slice,
		b = [].indexOf || function(e) {
			for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
			return -1
		};
	e = jQuery, e.payment = {}, e.payment.fn = {}, e.fn.payment = function() {
		var t, n;
		return n = arguments[0], t = 2 <= arguments.length ? x.call(arguments, 1) : [], e.payment.fn[n].apply(this, t)
	}, i = /(\d{1,4})/g, r = [{
		type: "maestro",
		pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
		format: i,
		length: [12, 13, 14, 15, 16, 17, 18, 19],
		cvcLength: [3],
		luhn: !0
	}, {
		type: "dinersclub",
		pattern: /^(36|38|30[0-5])/,
		format: i,
		length: [14],
		cvcLength: [3],
		luhn: !0
	}, {
		type: "laser",
		pattern: /^(6706|6771|6709)/,
		format: i,
		length: [16, 17, 18, 19],
		cvcLength: [3],
		luhn: !0
	}, {
		type: "jcb",
		pattern: /^35/,
		format: i,
		length: [16],
		cvcLength: [3],
		luhn: !0
	}, {
		type: "unionpay",
		pattern: /^62/,
		format: i,
		length: [16, 17, 18, 19],
		cvcLength: [3],
		luhn: !1
	}, {
		type: "discover",
		pattern: /^(6011|65|64[4-9]|622)/,
		format: i,
		length: [16],
		cvcLength: [3],
		luhn: !0
	}, {
		type: "mastercard",
		pattern: /^5[1-5]/,
		format: i,
		length: [16],
		cvcLength: [3],
		luhn: !0
	}, {
		type: "amex",
		pattern: /^3[47]/,
		format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
		length: [15],
		cvcLength: [3, 4],
		luhn: !0
	}, {
		type: "visa",
		pattern: /^4/,
		format: i,
		length: [13, 14, 15, 16],
		cvcLength: [3],
		luhn: !0
	},{
		type: "smartcard",
		pattern: /^913/,
		format: i,
		length: [13, 14, 15, 16],
		cvcLength: [3],
		luhn: !0
	}], t = function(e) {
		var t, n, i;
		for (e = (e + "").replace(/\D/g, ""), n = 0, i = r.length; i > n; n++) if (t = r[n], t.pattern.test(e)) return t
	}, n = function(e) {
		var t, n, i;
		for (n = 0, i = r.length; i > n; n++) if (t = r[n], t.type === e) return t
	}, p = function(e) {
		var t, n, r, i, o, a;
		for (r = !0, i = 0, n = (e + "").split("").reverse(), o = 0, a = n.length; a > o; o++) t = n[o], t = parseInt(t, 10), (r = !r) && (t *= 2), t > 9 && (t -= 9), i += t;
		return i % 10 === 0
	}, f = function(e) {
		var t;
		return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : ("undefined" != typeof document && null !== document && null != (t = document.selection) && "function" == typeof t.createRange ? t.createRange().text : void 0) ? !0 : !1
	}, d = function(t) {
		return setTimeout(function() {
			var n, r;
			return n = e(t.currentTarget), r = n.val(), r = e.payment.formatCardNumber(r), n.val(r)
		})
	}, s = function(n) {
		var r, i, o, a, s, u, l;
		return o = String.fromCharCode(n.which), !/^\d+$/.test(o) || (r = e(n.currentTarget), l = r.val(), i = t(l + o), a = (l.replace(/\D/g, "") + o).length, u = 16, i && (u = i.length[i.length.length - 1]), a >= u || null != r.prop("selectionStart") && r.prop("selectionStart") !== l.length) ? void 0 : (s = i && "amex" === i.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, s.test(l) ? (n.preventDefault(), r.val(l + " " + o)) : s.test(l + o) ? (n.preventDefault(), r.val(l + o + " ")) : void 0)
	}, o = function(t) {
		var n, r;
		return n = e(t.currentTarget), r = n.val(), t.meta || 8 !== t.which || null != n.prop("selectionStart") && n.prop("selectionStart") !== r.length ? void 0 : /\d\s$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d\s$/, ""))) : /\s\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\d?$/, ""))) : void 0
	}, u = function(t) {
		var n, r, i;
		return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val() + r, /^\d$/.test(i) && "0" !== i && "1" !== i ? (t.preventDefault(), n.val("0" + i + " / ")) : /^\d\d$/.test(i) ? (t.preventDefault(), n.val("" + i + " / ")) : void 0) : void 0
	}, l = function(t) {
		var n, r, i;
		return r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (n = e(t.currentTarget), i = n.val(), /^\d\d$/.test(i) ? n.val("" + i + " / ") : void 0) : void 0
	}, c = function(t) {
		var n, r, i;
		return r = String.fromCharCode(t.which), "/" === r ? (n = e(t.currentTarget), i = n.val(), /^\d$/.test(i) && "0" !== i ? n.val("0" + i + " / ") : void 0) : void 0
	}, a = function(t) {
		var n, r;
		if (!t.meta && (n = e(t.currentTarget), r = n.val(), 8 === t.which && (null == n.prop("selectionStart") || n.prop("selectionStart") === r.length))) return /\d(\s|\/)+$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\d(\s|\/)*$/, ""))) : /\s\/\s?\d?$/.test(r) ? (t.preventDefault(), n.val(r.replace(/\s\/\s?\d?$/, ""))) : void 0
	}, v = function(e) {
		var t;
		return e.metaKey || e.ctrlKey ? !0 : 32 === e.which ? !1 : 0 === e.which ? !0 : e.which < 33 ? !0 : (t = String.fromCharCode(e.which), !! /[\d\s]/.test(t))
	}, g = function(n) {
		var r, i, o, a;
		return r = e(n.currentTarget), o = String.fromCharCode(n.which), /^\d+$/.test(o) && !f(r) ? (a = (r.val() + o).replace(/\D/g, ""), i = t(a), i ? a.length <= i.length[i.length.length - 1] : a.length <= 16) : void 0
	}, m = function(t) {
		var n, r, i;
		return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) && !f(n) ? (i = n.val() + r, i = i.replace(/\D/g, ""), i.length > 6 ? !1 : void 0) : void 0
	}, h = function(t) {
		var n, r, i;
		return n = e(t.currentTarget), r = String.fromCharCode(t.which), /^\d+$/.test(r) ? (i = n.val() + r, i.length <= 4) : void 0
	}, y = function(t) {
		var n, i, o, a, s;
		return n = e(t.currentTarget), s = n.val(), a = e.payment.cardType(s) || "unknown", n.hasClass(a) ? void 0 : (i = function() {
			var e, t, n;
			for (n = [], e = 0, t = r.length; t > e; e++) o = r[e], n.push(o.type);
			return n
		}(), n.removeClass("unknown"), n.removeClass(i.join(" ")), n.addClass(a), n.toggleClass("identified", "unknown" !== a), n.trigger("payment.cardType", a))
	}, e.payment.fn.formatCardCVC = function() {
		return this.payment("restrictNumeric"), this.on("keypress", h), this
	}, e.payment.fn.formatCardExpiry = function() {
		return this.payment("restrictNumeric"), this.on("keypress", m), this.on("keypress", u), this.on("keypress", c), this.on("keypress", l), this.on("keydown", a), this
	}, e.payment.fn.formatCardNumber = function() {
		return this.payment("restrictNumeric"), this.on("keypress", g), this.on("keypress", s), this.on("keydown", o), this.on("keyup", y), this.on("paste", d), this
	}, e.payment.fn.restrictNumeric = function() {
		return this.on("keypress", v), this
	}, e.payment.fn.cardExpiryVal = function() {
		return e.payment.cardExpiryVal(e(this).val())
	}, e.payment.cardExpiryVal = function(e) {
		var t, n, r, i;
		return e = e.replace(/\s/g, ""), i = e.split("/", 2), t = i[0], r = i[1], 2 === (null != r ? r.length : void 0) && /^\d+$/.test(r) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), r = n + r), t = parseInt(t, 10), r = parseInt(r, 10), {
			month: t,
			year: r
		}
	}, e.payment.validateCardNumber = function(e) {
		var n, r;
		return e = (e + "").replace(/\s+|-/g, ""), /^\d+$/.test(e) ? (n = t(e), n ? (r = e.length, b.call(n.length, r) >= 0 && (n.luhn === !1 || p(e))) : !1) : !1
	}, e.payment.validateCardExpiry = function(t, n) {
		var r, i, o, a;
		return "object" == typeof t && "month" in t && (a = t, t = a.month, n = a.year), t && n ? (t = e.trim(t), n = e.trim(n), /^\d+$/.test(t) && /^\d+$/.test(n) && parseInt(t, 10) <= 12 ? (2 === n.length && (o = (new Date).getFullYear(), o = o.toString().slice(0, 2), n = o + n), i = new Date(n, t), r = new Date, i.setMonth(i.getMonth() - 1), i.setMonth(i.getMonth() + 1, 1), i > r) : !1) : !1
	}, e.payment.validateCardCVC = function(t, r) {
		var i, o;
		return t = e.trim(t), /^\d+$/.test(t) ? r ? (i = t.length, b.call(null != (o = n(r)) ? o.cvcLength : void 0, i) >= 0) : t.length >= 3 && t.length <= 4 : !1
	}, e.payment.cardType = function(e) {
		var n;
		return e ? (null != (n = t(e)) ? n.type : void 0) || null : null
	}, e.payment.formatCardNumber = function(e) {
		var n, r, i, o;
		return (n = t(e)) ? (i = n.length[n.length.length - 1], e = e.replace(/\D/g, ""), e = e.slice(0, +i + 1 || 9e9), n.format.global ? null != (o = e.match(n.format)) ? o.join(" ") : void 0 : (r = n.format.exec(e), null != r && r.shift(), null != r ? r.join(" ") : void 0)) : e
	}
}.call(this), $(function() {
	$(".cc-num").payment("formatCardNumber"), $(".cc-exp").payment("formatCardExpiry"), $(".cc-cvc").payment("formatCardCVC"), $(".cancel-link").click(function() {
		return !1
	}), $(".payment").submit(function() {
		return !1
	});
	var e = function() {
		var e = $(".cc-exp__example").payment("cardExpiryVal"),
			t = $.payment.validateCardExpiry(e.month, e.year),
			n = $.payment.validateCardCVC($(".cc-cvc__example").val());
		$(".cc-exp__ouputMonth").text(e.month), $(".cc-exp__ouputYear").text(e.year), t ? ($(".cc-exp__example").addClass("identified"), $(".cc-exp__ouputValid").text("Yes")) : ($(".cc-exp__example").removeClass("identified"), $(".cc-exp__ouputValid").text("No")), n ? $(".cc-cvc__example").addClass("identified") : $(".cc-cvc__example").removeClass("identified")
	};
	$(".cc-cvc__example ,.cc-exp__example").bind("change paste keyup", function() {
		e()
	});
	var t = function() {
		var e = $(".cc-exp").payment("cardExpiryVal"),
			t = $.payment.validateCardExpiry(e.month, e.year),
			n = $.payment.validateCardCVC($(".cc-cvc").val());
		t ? $(".cc-exp__demo").addClass("identified") : $(".cc-exp__demo").removeClass("identified"), n ? $(".cc-cvc__demo").addClass("identified") : $(".cc-cvc__demo").removeClass("identified")
	};
	$(".paymentInput").bind("change paste keyup", function() {
		t()
	})
});