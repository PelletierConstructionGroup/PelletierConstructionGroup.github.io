(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    69921: function (t, e, n) {
        "use strict";
        n.d(e, {
            j: function () {
                return c
            }
        });
        var r = n(9791), s = n(93371), i = n(12343), o = n(47513), a = n(13821);

        function c() {
            a.m && a.m.document ? a.m.document.addEventListener("visibilitychange", (() => {
                const t = (0, r.x1)();
                if (a.m.document.hidden && t) {
                    const e = "cancelled", {op: n, status: r} = (0, s.XU)(t);
                    o.X && i.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.end()
                }
            })) : o.X && i.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")
        }
    }, 16174: function (t, e, n) {
        "use strict";
        n.d(e, {
            E8: function () {
                return w
            }, Wo: function () {
                return T
            }, og: function () {
                return x
            }
        });
        var r = n(65544), s = n(77850), i = n(95659), o = n(93371), a = n(76754), c = n(32336), u = n(9791),
            l = n(64487), d = n(77638), p = n(12343), h = n(21170), f = n(28425), m = n(58464), g = n(47513),
            y = n(69921), _ = n(26367), v = n(41930), b = n(27579), S = n(13821);
        const k = {
            ...r.AT,
            instrumentNavigation: !0,
            instrumentPageLoad: !0,
            markBackgroundSpan: !0,
            enableLongTask: !0,
            enableInp: !1,
            _experiments: {}, ...b.k3
        }, w = (t = {}) => {
            const e = !!g.X && !(!t.tracePropagationTargets && !t.tracingOrigins);
            (0, s.T)(), !t.tracePropagationTargets && t.tracingOrigins && (t.tracePropagationTargets = t.tracingOrigins);
            const n = {...k, ...t}, r = (0, v.PR)(), c = {};
            n.enableInp && (0, v.NR)(c), n.enableLongTask && (0, v.Fv)(), n._experiments.enableInteractions && (0, v.sn)();
            const m = {name: void 0, context: void 0};

            function w(t) {
                const e = (0, i.Gd)(), {beforeStartSpan: o, idleTimeout: a, finalTimeout: c, heartbeatInterval: u} = n,
                    l = "pageload" === t.op;
                let h;
                if (l) {
                    const e = l ? E("sentry-trace") : "", n = l ? E("baggage") : void 0, {
                        traceId: r,
                        dsc: s,
                        parentSpanId: i,
                        sampled: o
                    } = (0, d.pT)(e, n);
                    h = {
                        traceId: r,
                        parentSpanId: i,
                        parentSampled: o, ...t,
                        metadata: {...t.metadata, dynamicSamplingContext: s},
                        trimEnd: !0
                    }
                } else h = {trimEnd: !0, ...t};
                const f = o ? o(h) : h;
                f.metadata = f.name !== h.name ? {
                    ...f.metadata,
                    source: "custom"
                } : f.metadata, m.name = f.name, m.context = f, !1 === f.sampled && g.X && p.kg.log(`[Tracing] Will not send ${f.op} transaction because of beforeNavigate.`), g.X && p.kg.log(`[Tracing] Starting ${f.op} transaction on scope`);
                const {location: y} = S.m, _ = (0, s.l)(e, f, a, c, !0, {location: y}, u, l);
                return l && S.m.document && (S.m.document.addEventListener("readystatechange", (() => {
                    ["interactive", "complete"].includes(S.m.document.readyState) && _.sendAutoFinishSignal()
                })), ["interactive", "complete"].includes(S.m.document.readyState) && _.sendAutoFinishSignal()), _.registerBeforeFinishCallback((t => {
                    r(), (0, v.f7)(t)
                })), _
            }

            return {
                name: "BrowserTracing", setupOnce: () => {
                }, afterAllSetup(t) {
                    const r = t.getOptions(), {
                        markBackgroundSpan: d,
                        traceFetch: v,
                        traceXHR: k,
                        shouldCreateSpanForRequest: E,
                        enableHTTPTimings: R,
                        _experiments: M
                    } = n, O = r && r.tracePropagationTargets, A = O || n.tracePropagationTargets;
                    let D;
                    g.X && e && O && p.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.");
                    let N = S.m.location && S.m.location.href;
                    if (t.on && (t.on("startNavigationSpan", (t => {
                        D && (g.X && p.kg.log(`[Tracing] Finishing current transaction with op: ${(0, o.XU)(D).op}`), D.end()), D = w({op: "navigation", ...t})
                    })), t.on("startPageLoadSpan", (t => {
                        D && (g.X && p.kg.log(`[Tracing] Finishing current transaction with op: ${(0, o.XU)(D).op}`), D.end()), D = w({op: "pageload", ...t})
                    }))), n.instrumentPageLoad && t.emit && S.m.location) {
                        const e = {
                            name: S.m.location.pathname,
                            startTimestamp: h.Z1 ? h.Z1 / 1e3 : void 0,
                            origin: "auto.pageload.browser",
                            attributes: {[a.Zj]: "url"}
                        };
                        T(t, e)
                    }
                    n.instrumentNavigation && t.emit && S.m.location && (0, f.a)((({to: e, from: n}) => {
                        if (void 0 === n && N && -1 !== N.indexOf(e)) N = void 0; else if (n !== e) {
                            N = void 0;
                            const e = {
                                name: S.m.location.pathname,
                                origin: "auto.navigation.browser",
                                attributes: {[a.Zj]: "url"}
                            };
                            x(t, e)
                        }
                    })), d && (0, y.j)(), M.enableInteractions && function (t, e) {
                        let n;
                        const r = () => {
                            const {idleTimeout: r, finalTimeout: o, heartbeatInterval: c} = t, l = "ui.action.click",
                                d = (0, u.x1)();
                            if (d && d.op && ["navigation", "pageload"].includes(d.op)) return void (g.X && p.kg.warn(`[Tracing] Did not create ${l} transaction because a pageload or navigation transaction is in progress.`));
                            if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !e.name) return void (g.X && p.kg.warn(`[Tracing] Did not create ${l} transaction because _latestRouteName is missing.`));
                            const {location: h} = S.m, f = {
                                name: e.name,
                                op: l,
                                trimEnd: !0,
                                data: {[a.Zj]: e.context ? I(e.context) : "url"}
                            };
                            n = (0, s.l)((0, i.Gd)(), f, r, o, !0, {location: h}, c)
                        };
                        ["click"].forEach((t => {
                            addEventListener(t, r, {once: !1, capture: !0})
                        }))
                    }(n, m), n.enableInp && function (t, e) {
                        (0, _._j)("event", (({entries: n}) => {
                            const r = (0, l.s3)(),
                                s = void 0 !== r && void 0 !== r.getIntegrationByName ? r.getIntegrationByName("Replay") : void 0,
                                i = void 0 !== s ? s.getReplayId() : void 0, o = (0, u.x1)(), a = (0, l.nZ)(),
                                c = void 0 !== a ? a.getUser() : void 0;
                            for (const u of n) if (C(u)) {
                                const n = u.duration, r = Object.keys(t),
                                    s = r.length > 0 ? r.reduce(((e, n) => t[e].duration < t[n].duration ? e : n)) : void 0;
                                if (void 0 === s || n > t[s].duration) {
                                    const r = u.interactionId, a = e.name, l = e.context;
                                    r && a && l && (s && Object.keys(t).length >= 10 && delete t[s], t[r] = {
                                        routeName: a,
                                        duration: n,
                                        parentContext: l,
                                        user: c,
                                        activeTransaction: o,
                                        replayId: i
                                    })
                                }
                            }
                        }))
                    }(c, m), (0, b.L7)({
                        traceFetch: v,
                        traceXHR: k,
                        tracePropagationTargets: A,
                        shouldCreateSpanForRequest: E,
                        enableHTTPTimings: R
                    })
                }, options: n
            }
        };

        function T(t, e) {
            if (!t.emit) return;
            t.emit("startPageLoadSpan", e);
            const n = (0, c.HN)();
            return "pageload" === (n && (0, o.XU)(n).op) ? n : void 0
        }

        function x(t, e) {
            if (!t.emit) return;
            t.emit("startNavigationSpan", e);
            const n = (0, c.HN)();
            return "navigation" === (n && (0, o.XU)(n).op) ? n : void 0
        }

        function E(t) {
            const e = (0, m.qT)(`meta[name=${t}]`);
            return e ? e.getAttribute("content") : void 0
        }

        function C(t) {
            return "duration" in t
        }

        function I(t) {
            const e = t.attributes && t.attributes[a.Zj], n = t.data && t.data[a.Zj],
                r = t.metadata && t.metadata.source;
            return e || n || r
        }
    }, 36752: function (t, e, n) {
        "use strict";
        n.d(e, {
            gE: function () {
                return _
            }
        });
        var r = n(65544), s = n(77850), i = n(9791), o = n(76754), a = n(12343), c = n(77638), u = n(58464),
            l = n(47513), d = n(69921), p = n(41930), h = n(27579), f = n(21170), m = n(28425), g = n(13821);
        const y = {
            ...r.AT,
            markBackgroundTransactions: !0,
            routingInstrumentation: function (t, e = !0, n = !0) {
                if (!g.m || !g.m.location) return void (l.X && a.kg.warn("Could not initialize routing instrumentation due to invalid location"));
                let r, s = g.m.location.href;
                e && (r = t({
                    name: g.m.location.pathname,
                    startTimestamp: f.Z1 ? f.Z1 / 1e3 : void 0,
                    op: "pageload",
                    origin: "auto.pageload.browser",
                    metadata: {source: "url"}
                })), n && (0, m.a)((({to: e, from: n}) => {
                    void 0 === n && s && -1 !== s.indexOf(e) ? s = void 0 : n !== e && (s = void 0, r && (l.X && a.kg.log(`[Tracing] Finishing current transaction with op: ${r.op}`), r.end()), r = t({
                        name: g.m.location.pathname,
                        op: "navigation",
                        origin: "auto.navigation.browser",
                        metadata: {source: "url"}
                    }))
                }))
            },
            startTransactionOnLocationChange: !0,
            startTransactionOnPageLoad: !0,
            enableLongTask: !0,
            _experiments: {}, ...h.k3
        };

        class _ {
            constructor(t) {
                this.name = "BrowserTracing", this._hasSetTracePropagationTargets = !1, (0, s.T)(), l.X && (this._hasSetTracePropagationTargets = !(!t || !t.tracePropagationTargets && !t.tracingOrigins)), this.options = {...y, ...t}, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, p.PR)(), this.options.enableLongTask && (0, p.Fv)(), this.options._experiments.enableInteractions && (0, p.sn)()
            }

            setupOnce(t, e) {
                this._getCurrentHub = e;
                const n = e().getClient(), r = n && n.getOptions(), {
                    routingInstrumentation: s,
                    startTransactionOnLocationChange: i,
                    startTransactionOnPageLoad: o,
                    markBackgroundTransactions: c,
                    traceFetch: u,
                    traceXHR: p,
                    shouldCreateSpanForRequest: f,
                    enableHTTPTimings: m,
                    _experiments: g
                } = this.options, y = r && r.tracePropagationTargets, _ = y || this.options.tracePropagationTargets;
                l.X && this._hasSetTracePropagationTargets && y && a.kg.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), s((t => {
                    const n = this._createRouteTransaction(t);
                    return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
                }), o, i), c && (0, d.j)(), g.enableInteractions && this._registerInteractionListener(), (0, h.L7)({
                    traceFetch: u,
                    traceXHR: p,
                    tracePropagationTargets: _,
                    shouldCreateSpanForRequest: f,
                    enableHTTPTimings: m
                })
            }

            _createRouteTransaction(t) {
                if (!this._getCurrentHub) return void (l.X && a.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`));
                const e = this._getCurrentHub(), {
                    beforeNavigate: n,
                    idleTimeout: r,
                    finalTimeout: i,
                    heartbeatInterval: u
                } = this.options, d = "pageload" === t.op;
                let h;
                if (d) {
                    const e = d ? v("sentry-trace") : "", n = d ? v("baggage") : void 0, {
                        traceId: r,
                        dsc: s,
                        parentSpanId: i,
                        sampled: o
                    } = (0, c.pT)(e, n);
                    h = {
                        traceId: r,
                        parentSpanId: i,
                        parentSampled: o, ...t,
                        metadata: {...t.metadata, dynamicSamplingContext: s},
                        trimEnd: !0
                    }
                } else h = {trimEnd: !0, ...t};
                const f = "function" === typeof n ? n(h) : h, m = void 0 === f ? {...h, sampled: !1} : f;
                m.metadata = m.name !== h.name ? {
                    ...m.metadata,
                    source: "custom"
                } : m.metadata, this._latestRouteName = m.name, this._latestRouteSource = function (t) {
                    const e = t.attributes && t.attributes[o.Zj], n = t.data && t.data[o.Zj],
                        r = t.metadata && t.metadata.source;
                    return e || n || r
                }(m), !1 === m.sampled && l.X && a.kg.log(`[Tracing] Will not send ${m.op} transaction because of beforeNavigate.`), l.X && a.kg.log(`[Tracing] Starting ${m.op} transaction on scope`);
                const {location: y} = g.m, _ = (0, s.l)(e, m, r, i, !0, {location: y}, u, d);
                return d && (g.m.document.addEventListener("readystatechange", (() => {
                    ["interactive", "complete"].includes(g.m.document.readyState) && _.sendAutoFinishSignal()
                })), ["interactive", "complete"].includes(g.m.document.readyState) && _.sendAutoFinishSignal()), _.registerBeforeFinishCallback((t => {
                    this._collectWebVitals(), (0, p.f7)(t)
                })), _
            }

            _registerInteractionListener() {
                let t;
                const e = () => {
                    const {idleTimeout: e, finalTimeout: n, heartbeatInterval: r} = this.options, c = "ui.action.click",
                        u = (0, i.x1)();
                    if (u && u.op && ["navigation", "pageload"].includes(u.op)) return void (l.X && a.kg.warn(`[Tracing] Did not create ${c} transaction because a pageload or navigation transaction is in progress.`));
                    if (t && (t.setFinishReason("interactionInterrupted"), t.end(), t = void 0), !this._getCurrentHub) return void (l.X && a.kg.warn(`[Tracing] Did not create ${c} transaction because _getCurrentHub is invalid.`));
                    if (!this._latestRouteName) return void (l.X && a.kg.warn(`[Tracing] Did not create ${c} transaction because _latestRouteName is missing.`));
                    const d = this._getCurrentHub(), {location: p} = g.m, h = {
                        name: this._latestRouteName,
                        op: c,
                        trimEnd: !0,
                        data: {[o.Zj]: this._latestRouteSource || "url"}
                    };
                    t = (0, s.l)(d, h, e, n, !0, {location: p}, r)
                };
                ["click"].forEach((t => {
                    addEventListener(t, e, {once: !1, capture: !0})
                }))
            }
        }

        function v(t) {
            const e = (0, u.qT)(`meta[name=${t}]`);
            return e ? e.getAttribute("content") : void 0
        }
    }, 26367: function (t, e, n) {
        "use strict";
        n.d(e, {
            PR: function () {
                return A
            }, to: function () {
                return N
            }, YF: function () {
                return L
            }, $A: function () {
                return D
            }, _j: function () {
                return P
            }
        });
        var r = n(12343), s = n(30360), i = n(47513);
        const o = (t, e, n) => {
            let r, s;
            return i => {
                e.value >= 0 && (i || n) && (s = e.value - (r || 0), (s || void 0 === r) && (r = e.value, e.delta = s, t(e)))
            }
        };
        var a = n(13821);
        const c = () => a.m.__WEB_VITALS_POLYFILL__ ? a.m.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
                const t = a.m.performance.timing, e = a.m.performance.navigation.type, n = {
                    entryType: "navigation",
                    startTime: 0,
                    type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                };
                for (const r in t) "navigationStart" !== r && "toJSON" !== r && (n[r] = Math.max(t[r] - t.navigationStart, 0));
                return n
            })()) : a.m.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
            u = () => {
                const t = c();
                return t && t.activationStart || 0
            }, l = (t, e) => {
                const n = c();
                let r = "navigate";
                return n && (r = a.m.document.prerendering || u() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                    name: t,
                    value: "undefined" === typeof e ? -1 : e,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: `v3-${Date.now()}-${Math.floor(8999999999999 * Math.random()) + 1e12}`,
                    navigationType: r
                }
            }, d = (t, e, n) => {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                        const r = new PerformanceObserver((t => {
                            e(t.getEntries())
                        }));
                        return r.observe(Object.assign({type: t, buffered: !0}, n || {})), r
                    }
                } catch (r) {
                }
            };
        var p = n(80188);
        var h = n(25029);
        let f = 0, m = 1 / 0, g = 0;
        const y = t => {
            t.forEach((t => {
                t.interactionId && (m = Math.min(m, t.interactionId), g = Math.max(g, t.interactionId), f = g ? (g - m) / 7 + 1 : 0)
            }))
        };
        let _;
        const v = () => {
            "interactionCount" in performance || _ || (_ = d("event", y, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        }, b = () => _ ? f : performance.interactionCount || 0, S = [], k = {}, w = t => {
            const e = S[S.length - 1], n = k[t.interactionId];
            if (n || S.length < 10 || t.duration > e.latency) {
                if (n) n.entries.push(t), n.latency = Math.max(n.latency, t.duration); else {
                    const e = {id: t.interactionId, latency: t.duration, entries: [t]};
                    k[e.id] = e, S.push(e)
                }
                S.sort(((t, e) => e.latency - t.latency)), S.splice(10).forEach((t => {
                    delete k[t.id]
                }))
            }
        }, T = (t, e) => {
            e = e || {}, v();
            const n = l("INP");
            let r;
            const s = t => {
                t.forEach((t => {
                    if (t.interactionId && w(t), "first-input" === t.entryType) {
                        !S.some((e => e.entries.some((e => t.duration === e.duration && t.startTime === e.startTime)))) && w(t)
                    }
                }));
                const e = (() => {
                    const t = Math.min(S.length - 1, Math.floor(b() / 50));
                    return S[t]
                })();
                e && e.latency !== n.value && (n.value = e.latency, n.entries = e.entries, r())
            }, i = d("event", s, {durationThreshold: e.durationThreshold || 40});
            r = o(t, n, e.reportAllChanges), i && (i.observe({type: "first-input", buffered: !0}), (0, p.u)((() => {
                s(i.takeRecords()), n.value < 0 && b() > 0 && (n.value = 0, n.entries = []), r(!0)
            })))
        }, x = {}, E = {}, C = {};
        let I, R, M, O;

        function A(t, e = !1) {
            return H("cls", t, F, I, e)
        }

        function D(t, e = !1) {
            return H("lcp", t, U, M, e)
        }

        function N(t) {
            return H("fid", t, j, R)
        }

        function L(t) {
            return H("inp", t, B, O)
        }

        function P(t, e) {
            return X(t, e), C[t] || (!function (t) {
                const e = {};
                "event" === t && (e.durationThreshold = 0);
                d(t, (e => {
                    $(t, {entries: e})
                }), e)
            }(t), C[t] = !0), z(t, e)
        }

        function $(t, e) {
            const n = E[t];
            if (n && n.length) for (const a of n) try {
                a(e)
            } catch (o) {
                i.X && r.kg.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0, s.$P)(a)}\nError:`, o)
            }
        }

        function F() {
            return (t => {
                const e = l("CLS", 0);
                let n, r = 0, s = [];
                const i = t => {
                    t.forEach((t => {
                        if (!t.hadRecentInput) {
                            const i = s[0], o = s[s.length - 1];
                            r && 0 !== s.length && t.startTime - o.startTime < 1e3 && t.startTime - i.startTime < 5e3 ? (r += t.value, s.push(t)) : (r = t.value, s = [t]), r > e.value && (e.value = r, e.entries = s, n && n())
                        }
                    }))
                }, a = d("layout-shift", i);
                if (a) {
                    n = o(t, e);
                    const r = () => {
                        i(a.takeRecords()), n(!0)
                    };
                    return (0, p.u)(r), r
                }
            })((t => {
                $("cls", {metric: t}), I = t
            }))
        }

        function j() {
            return (t => {
                const e = (0, h.Y)(), n = l("FID");
                let r;
                const s = t => {
                    t.startTime < e.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), r(!0))
                }, i = t => {
                    t.forEach(s)
                }, a = d("first-input", i);
                r = o(t, n), a && (0, p.u)((() => {
                    i(a.takeRecords()), a.disconnect()
                }), !0)
            })((t => {
                $("fid", {metric: t}), R = t
            }))
        }

        function U() {
            return (t => {
                const e = (0, h.Y)(), n = l("LCP");
                let r;
                const s = t => {
                    const s = t[t.length - 1];
                    if (s) {
                        const t = Math.max(s.startTime - u(), 0);
                        t < e.firstHiddenTime && (n.value = t, n.entries = [s], r())
                    }
                }, i = d("largest-contentful-paint", s);
                if (i) {
                    r = o(t, n);
                    const e = () => {
                        x[n.id] || (s(i.takeRecords()), i.disconnect(), x[n.id] = !0, r(!0))
                    };
                    return ["keydown", "click"].forEach((t => {
                        addEventListener(t, e, {once: !0, capture: !0})
                    })), (0, p.u)(e, !0), e
                }
            })((t => {
                $("lcp", {metric: t}), M = t
            }))
        }

        function B() {
            return T((t => {
                $("inp", {metric: t}), O = t
            }))
        }

        function H(t, e, n, r, s = !1) {
            let i;
            return X(t, e), C[t] || (i = n(), C[t] = !0), r && e({metric: r}), z(t, e, s ? i : void 0)
        }

        function X(t, e) {
            E[t] = E[t] || [], E[t].push(e)
        }

        function z(t, e, n) {
            return () => {
                n && n();
                const r = E[t];
                if (!r) return;
                const s = r.indexOf(e);
                -1 !== s && r.splice(s, 1)
            }
        }
    }, 41930: function (t, e, n) {
        "use strict";
        n.d(e, {
            f7: function () {
                return D
            }, NR: function () {
                return A
            }, sn: function () {
                return O
            }, Fv: function () {
                return M
            }, PR: function () {
                return R
            }
        });
        var r = n(9791), s = n(64487), i = n(38903), o = n(58725);

        function a(t) {
            const e = {sent_at: (new Date).toISOString()}, n = t.map(c);
            return (0, o.Jd)(e, n)
        }

        function c(t) {
            return [{type: "span"}, t]
        }

        var u = n(93371), l = n(39080), d = n(47522), p = n(71221), h = n(21170), f = n(58464), m = n(12343),
            g = n(26956), y = n(47513), _ = n(26367), v = n(13821), b = n(25029);

        function S(t) {
            return "number" === typeof t && isFinite(t)
        }

        function k(t, {startTimestamp: e, ...n}) {
            return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({startTimestamp: e, ...n})
        }

        function w(t) {
            return t / 1e3
        }

        function T() {
            return v.m && v.m.addEventListener && v.m.performance
        }

        let x, E, C = 0, I = {};

        function R() {
            const t = T();
            if (t && h.Z1) {
                t.mark && v.m.performance.mark("sentry-tracing-init");
                const e = (0, _.to)((({metric: t}) => {
                    const e = t.entries[t.entries.length - 1];
                    if (!e) return;
                    const n = w(h.Z1), r = w(e.startTime);
                    y.X && m.kg.log("[Measurements] Adding FID"), I.fid = {
                        value: t.value,
                        unit: "millisecond"
                    }, I["mark.fid"] = {value: n + r, unit: "second"}
                })), n = (0, _.PR)((({metric: t}) => {
                    const e = t.entries[t.entries.length - 1];
                    e && (y.X && m.kg.log("[Measurements] Adding CLS"), I.cls = {value: t.value, unit: ""}, E = e)
                }), !0), r = (0, _.$A)((({metric: t}) => {
                    const e = t.entries[t.entries.length - 1];
                    e && (y.X && m.kg.log("[Measurements] Adding LCP"), I.lcp = {
                        value: t.value,
                        unit: "millisecond"
                    }, x = e)
                }), !0);
                return () => {
                    e(), n(), r()
                }
            }
            return () => {
            }
        }

        function M() {
            (0, _._j)("longtask", (({entries: t}) => {
                for (const e of t) {
                    const t = (0, r.x1)();
                    if (!t) return;
                    const n = w(h.Z1 + e.startTime), s = w(e.duration);
                    t.startChild({
                        description: "Main UI thread blocked",
                        op: "ui.long-task",
                        origin: "auto.ui.browser.metrics",
                        startTimestamp: n,
                        endTimestamp: n + s
                    })
                }
            }))
        }

        function O() {
            (0, _._j)("event", (({entries: t}) => {
                for (const e of t) {
                    const t = (0, r.x1)();
                    if (!t) return;
                    if ("click" === e.name) {
                        const n = w(h.Z1 + e.startTime), r = w(e.duration), s = {
                            description: (0, f.Rt)(e.target),
                            op: `ui.interaction.${e.name}`,
                            origin: "auto.ui.browser.metrics",
                            startTimestamp: n,
                            endTimestamp: n + r
                        }, i = (0, f.iY)(e.target);
                        i && (s.attributes = {"ui.component_name": i}), t.startChild(s)
                    }
                }
            }))
        }

        function A(t) {
            if (T() && h.Z1) {
                const e = function (t) {
                    return (0, _.YF)((({metric: e}) => {
                        const n = e.entries.find((t => "click" === t.name)), r = (0, s.s3)();
                        if (!n || !r) return;
                        const o = r.getOptions(), c = w(h.Z1 + n.startTime), u = w(e.value), {
                                routeName: l,
                                parentContext: g,
                                activeTransaction: _,
                                user: b,
                                replayId: S
                            } = void 0 !== n.interactionId ? t[n.interactionId] : {
                                routeName: void 0,
                                parentContext: void 0,
                                activeTransaction: void 0,
                                user: void 0,
                                replayId: void 0
                            }, k = void 0 !== b ? b.email || b.id || b.ip_address : void 0,
                            T = void 0 !== _ ? _.getProfileId() : void 0, x = new i.D({
                                startTimestamp: c,
                                endTimestamp: c + u,
                                op: "ui.interaction.click",
                                name: (0, f.Rt)(n.target),
                                attributes: {
                                    release: o.release,
                                    environment: o.environment,
                                    transaction: l, ...void 0 !== k && "" !== k ? {user: k} : {}, ...void 0 !== T ? {profile_id: T} : {}, ...void 0 !== S ? {replay_id: S} : {}
                                },
                                exclusiveTime: e.value,
                                measurements: {inp: {value: e.value, unit: "millisecond"}}
                            }), E = function (t, e) {
                                if (!(0, d.z)(e)) return !1;
                                let n;
                                n = void 0 !== t && "function" === typeof e.tracesSampler ? e.tracesSampler({
                                    transactionContext: t,
                                    name: t.name,
                                    parentSampled: t.parentSampled,
                                    attributes: {...t.data, ...t.attributes},
                                    location: v.m.location
                                }) : void 0 !== t && void 0 !== t.sampled ? t.sampled : "undefined" !== typeof e.tracesSampleRate ? e.tracesSampleRate : 1;
                                if (!(0, p.X)(n)) return y.X && m.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), !1;
                                return n
                            }(g, o);
                        if (E) if (Math.random() < E) {
                            const t = x ? a([x]) : void 0, e = r && r.getTransport();
                            e && t && e.send(t).then(null, (t => {
                                y.X && m.kg.error("Error while sending interaction:", t)
                            }))
                        } else ;
                    }))
                }(t);
                return () => {
                    e()
                }
            }
            return () => {
            }
        }

        function D(t) {
            const e = T();
            if (!e || !v.m.performance.getEntries || !h.Z1) return;
            y.X && m.kg.log("[Tracing] Adding & adjusting spans using Performance API");
            const n = w(h.Z1), r = e.getEntries();
            let s, i;
            const {op: o, start_timestamp: a} = (0, u.XU)(t);
            if (r.slice(C).forEach((e => {
                const r = w(e.startTime), o = w(e.duration);
                if (!("navigation" === t.op && a && n + r < a)) switch (e.entryType) {
                    case"navigation":
                        !function (t, e, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                                N(t, e, r, n)
                            })), N(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), N(t, e, "fetch", n, "cache", "domainLookupStart"), N(t, e, "domainLookup", n, "DNS"), function (t, e, n) {
                                e.responseEnd && (k(t, {
                                    op: "browser",
                                    origin: "auto.browser.browser.metrics",
                                    description: "request",
                                    startTimestamp: n + w(e.requestStart),
                                    endTimestamp: n + w(e.responseEnd)
                                }), k(t, {
                                    op: "browser",
                                    origin: "auto.browser.browser.metrics",
                                    description: "response",
                                    startTimestamp: n + w(e.responseStart),
                                    endTimestamp: n + w(e.responseEnd)
                                }))
                            }(t, e, n)
                        }(t, e, n), s = n + w(e.responseStart), i = n + w(e.requestStart);
                        break;
                    case"mark":
                    case"paint":
                    case"measure": {
                        !function (t, e, n, r, s) {
                            const i = s + n, o = i + r;
                            k(t, {
                                description: e.name,
                                endTimestamp: o,
                                op: e.entryType,
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: i
                            })
                        }(t, e, r, o, n);
                        const s = (0, b.Y)(), i = e.startTime < s.firstHiddenTime;
                        "first-paint" === e.name && i && (y.X && m.kg.log("[Measurements] Adding FP"), I.fp = {
                            value: e.startTime,
                            unit: "millisecond"
                        }), "first-contentful-paint" === e.name && i && (y.X && m.kg.log("[Measurements] Adding FCP"), I.fcp = {
                            value: e.startTime,
                            unit: "millisecond"
                        });
                        break
                    }
                    case"resource":
                        !function (t, e, n, r, s, i) {
                            if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                            const o = (0, g.en)(n), a = {};
                            L(a, e, "transferSize", "http.response_transfer_size"), L(a, e, "encodedBodySize", "http.response_content_length"), L(a, e, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in e && (a["resource.render_blocking_status"] = e.renderBlockingStatus);
                            o.protocol && (a["url.scheme"] = o.protocol.split(":").pop());
                            o.host && (a["server.address"] = o.host);
                            a["url.same_origin"] = n.includes(v.m.location.origin);
                            const c = i + r, u = c + s;
                            k(t, {
                                description: n.replace(v.m.location.origin, ""),
                                endTimestamp: u,
                                op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                origin: "auto.resource.browser.metrics",
                                startTimestamp: c,
                                data: a
                            })
                        }(t, e, e.name, r, o, n)
                }
            })), C = Math.max(r.length - 1, 0), function (t) {
                const e = v.m.navigator;
                if (!e) return;
                const n = e.connection;
                n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), S(n.rtt) && (I["connection.rtt"] = {
                    value: n.rtt,
                    unit: "millisecond"
                }));
                S(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`);
                S(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
            }(t), "pageload" === o) {
                !function (t, e, n, r) {
                    "number" === typeof e && r && (y.X && m.kg.log("[Measurements] Adding TTFB"), t.ttfb = {
                        value: 1e3 * Math.max(e - r, 0),
                        unit: "millisecond"
                    }, "number" === typeof n && n <= e && (t["ttfb.requestTime"] = {
                        value: 1e3 * (e - n),
                        unit: "millisecond"
                    }))
                }(I, s, i, a), ["fcp", "fp", "lcp"].forEach((t => {
                    if (!I[t] || !a || n >= a) return;
                    const e = I[t].value, r = n + w(e), s = Math.abs(1e3 * (r - a)), i = s - e;
                    y.X && m.kg.log(`[Measurements] Normalized ${t} from ${e} to ${s} (${i})`), I[t].value = s
                }));
                const e = I["mark.fid"];
                e && I.fid && (k(t, {
                    description: "first input delay",
                    endTimestamp: e.value + w(I.fid.value),
                    op: "ui.action",
                    origin: "auto.ui.browser.metrics",
                    startTimestamp: e.value
                }), delete I["mark.fid"]), "fcp" in I || delete I.cls, Object.keys(I).forEach((t => {
                    (0, l.o)(t, I[t].value, I[t].unit)
                })), function (t) {
                    x && (y.X && m.kg.log("[Measurements] Adding LCP Data"), x.element && t.setTag("lcp.element", (0, f.Rt)(x.element)), x.id && t.setTag("lcp.id", x.id), x.url && t.setTag("lcp.url", x.url.trim().slice(0, 200)), t.setTag("lcp.size", x.size));
                    E && E.sources && (y.X && m.kg.log("[Measurements] Adding CLS Data"), E.sources.forEach(((e, n) => t.setTag(`cls.source.${n + 1}`, (0, f.Rt)(e.node)))))
                }(t)
            }
            x = void 0, E = void 0, I = {}
        }

        function N(t, e, n, r, s, i) {
            const o = i ? e[i] : e[`${n}End`], a = e[`${n}Start`];
            a && o && k(t, {
                op: "browser",
                origin: "auto.browser.browser.metrics",
                description: s || n,
                startTimestamp: r + w(a),
                endTimestamp: r + w(o)
            })
        }

        function L(t, e, n, r) {
            const s = e[n];
            null != s && s < 2147483647 && (t[r] = s)
        }
    }, 27579: function (t, e, n) {
        "use strict";
        n.d(e, {
            k3: function () {
                return S
            }, L7: function () {
                return k
            }
        });
        var r = n(93371), s = n(47522), i = n(27387), o = n(64487), a = n(95659), c = n(32336), u = n(76754),
            l = n(90454), d = n(21394), p = n(55322), h = n(21170), f = n(57321), m = n(77638), g = n(99181),
            y = n(67597);

        function _(t, e, n, d, p = "auto.http.browser") {
            if (!(0, s.z)() || !t.fetchData) return;
            const h = e(t.fetchData.url);
            if (t.endTimestamp && h) {
                const e = t.fetchData.__span;
                if (!e) return;
                const n = d[e];
                if (n) {
                    if (t.response) {
                        (0, i.Q0)(n, t.response.status);
                        const e = t.response && t.response.headers && t.response.headers.get("content-length");
                        if (e) {
                            const t = parseInt(e);
                            t > 0 && n.setAttribute("http.response_content_length", t)
                        }
                    } else t.error && n.setStatus("internal_error");
                    n.end(), delete d[e]
                }
                return
            }
            const f = (0, o.nZ)(), _ = (0, o.s3)(), {method: v, url: b} = t.fetchData, S = h ? (0, c.qp)({
                name: `${v} ${b}`,
                onlyIfParent: !0,
                attributes: {url: b, type: "fetch", "http.method": v, [u.S3]: p},
                op: "http.client"
            }) : void 0;
            if (S && (t.fetchData.__span = S.spanContext().spanId, d[S.spanContext().spanId] = S), n(t.fetchData.url) && _) {
                const e = t.args[0];
                t.args[1] = t.args[1] || {};
                const n = t.args[1];
                n.headers = function (t, e, n, s, i) {
                    const o = i || n.getSpan(), c = (0, a.aF)(), {
                            traceId: u,
                            spanId: d,
                            sampled: p,
                            dsc: h
                        } = {...c.getPropagationContext(), ...n.getPropagationContext()},
                        f = o ? (0, r.Hb)(o) : (0, m.$p)(u, d, p),
                        _ = (0, g.IQ)(h || (o ? (0, l.j)(o) : (0, l._)(u, e, n))),
                        v = s.headers || ("undefined" !== typeof Request && (0, y.V9)(t, Request) ? t.headers : void 0);
                    if (v) {
                        if ("undefined" !== typeof Headers && (0, y.V9)(v, Headers)) {
                            const t = new Headers(v);
                            return t.append("sentry-trace", f), _ && t.append(g.bU, _), t
                        }
                        if (Array.isArray(v)) {
                            const t = [...v, ["sentry-trace", f]];
                            return _ && t.push([g.bU, _]), t
                        }
                        {
                            const t = "baggage" in v ? v.baggage : void 0, e = [];
                            return Array.isArray(t) ? e.push(...t) : t && e.push(t), _ && e.push(_), {
                                ...v,
                                "sentry-trace": f,
                                baggage: e.length > 0 ? e.join(",") : void 0
                            }
                        }
                    }
                    return {"sentry-trace": f, baggage: _}
                }(e, _, f, n, S)
            }
            return S
        }

        var v = n(26367);
        const b = ["localhost", /^\/(?!\/)/],
            S = {traceFetch: !0, traceXHR: !0, enableHTTPTimings: !0, tracingOrigins: b, tracePropagationTargets: b};

        function k(t) {
            const {
                    traceFetch: e,
                    traceXHR: n,
                    tracePropagationTargets: h,
                    tracingOrigins: y,
                    shouldCreateSpanForRequest: v,
                    enableHTTPTimings: k
                } = {traceFetch: S.traceFetch, traceXHR: S.traceXHR, ...t}, T = "function" === typeof v ? v : t => !0,
                x = t => function (t, e) {
                    return (0, f.U0)(t, e || b)
                }(t, h || y), E = {};
            e && (0, d.U)((t => {
                const e = _(t, T, x, E);
                k && e && w(e)
            })), n && (0, p.UK)((t => {
                const e = function (t, e, n, d) {
                    const h = t.xhr, f = h && h[p.xU];
                    if (!(0, s.z)() || !h || h.__sentry_own_request__ || !f) return;
                    const y = e(f.url);
                    if (t.endTimestamp && y) {
                        const t = h.__sentry_xhr_span_id__;
                        if (!t) return;
                        const e = d[t];
                        return void (e && void 0 !== f.status_code && ((0, i.Q0)(e, f.status_code), e.end(), delete d[t]))
                    }
                    const _ = (0, o.nZ)(), v = (0, a.aF)(), b = y ? (0, c.qp)({
                        name: `${f.method} ${f.url}`,
                        onlyIfParent: !0,
                        attributes: {type: "xhr", "http.method": f.method, url: f.url, [u.S3]: "auto.http.browser"},
                        op: "http.client"
                    }) : void 0;
                    b && (h.__sentry_xhr_span_id__ = b.spanContext().spanId, d[h.__sentry_xhr_span_id__] = b);
                    const S = (0, o.s3)();
                    if (h.setRequestHeader && n(f.url) && S) {
                        const {
                            traceId: t,
                            spanId: e,
                            sampled: n,
                            dsc: s
                        } = {...v.getPropagationContext(), ..._.getPropagationContext()};
                        !function (t, e, n) {
                            try {
                                t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(g.bU, n)
                            } catch (r) {
                            }
                        }(h, b ? (0, r.Hb)(b) : (0, m.$p)(t, e, n), (0, g.IQ)(s || (b ? (0, l.j)(b) : (0, l._)(t, S, _))))
                    }
                    return b
                }(t, T, x, E);
                k && e && w(e)
            }))
        }

        function w(t) {
            const {url: e} = (0, r.XU)(t).data || {};
            if (!e || "string" !== typeof e) return;
            const n = (0, v._j)("resource", (({entries: r}) => {
                r.forEach((r => {
                    if (function (t) {
                        return "resource" === t.entryType && "initiatorType" in t && "string" === typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType)
                    }(r) && r.name.endsWith(e)) {
                        (function (t) {
                            const {name: e, version: n} = function (t) {
                                let e = "unknown", n = "unknown", r = "";
                                for (const s of t) {
                                    if ("/" === s) {
                                        [e, n] = t.split("/");
                                        break
                                    }
                                    if (!isNaN(Number(s))) {
                                        e = "h" === r ? "http" : r, n = t.split(r)[1];
                                        break
                                    }
                                    r += s
                                }
                                r === t && (e = r);
                                return {name: e, version: n}
                            }(t.nextHopProtocol), r = [];
                            if (r.push(["network.protocol.version", n], ["network.protocol.name", e]), !h.Z1) return r;
                            return [...r, ["http.request.redirect_start", T(t.redirectStart)], ["http.request.fetch_start", T(t.fetchStart)], ["http.request.domain_lookup_start", T(t.domainLookupStart)], ["http.request.domain_lookup_end", T(t.domainLookupEnd)], ["http.request.connect_start", T(t.connectStart)], ["http.request.secure_connection_start", T(t.secureConnectionStart)], ["http.request.connection_end", T(t.connectEnd)], ["http.request.request_start", T(t.requestStart)], ["http.request.response_start", T(t.responseStart)], ["http.request.response_end", T(t.responseEnd)]]
                        })(r).forEach((e => t.setAttribute(...e))), setTimeout(n)
                    }
                }))
            }))
        }

        function T(t = 0) {
            return ((h.Z1 || performance.timeOrigin) + t) / 1e3
        }
    }, 13821: function (t, e, n) {
        "use strict";
        n.d(e, {
            m: function () {
                return r
            }
        });
        const r = n(71235).n2
    }, 25029: function (t, e, n) {
        "use strict";
        n.d(e, {
            Y: function () {
                return o
            }
        });
        var r = n(13821), s = n(80188);
        let i = -1;
        const o = () => (i < 0 && (i = "hidden" !== r.m.document.visibilityState || r.m.document.prerendering ? 1 / 0 : 0, (0, s.u)((({timeStamp: t}) => {
            i = t
        }), !0)), {
            get firstHiddenTime() {
                return i
            }
        })
    }, 80188: function (t, e, n) {
        "use strict";
        n.d(e, {
            u: function () {
                return s
            }
        });
        var r = n(13821);
        const s = (t, e) => {
            const n = s => {
                "pagehide" !== s.type && "hidden" !== r.m.document.visibilityState || (t(s), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
            };
            addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
        }
    }, 47513: function (t, e, n) {
        "use strict";
        n.d(e, {
            X: function () {
                return r
            }
        });
        const r = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    }, 7935: function (t, e, n) {
        "use strict";
        n.d(e, {
            R: function () {
                return m
            }
        });
        var r = n(32825), s = n(82799), i = n(68518), o = n(12343), a = n(58725), c = n(21170);

        function u(t, e, n) {
            const r = [{type: "client_report"}, {timestamp: n || (0, c.yW)(), discarded_events: t}];
            return (0, a.Jd)(e ? {dsn: e} : {}, [r])
        }

        var l = n(30292), d = n(23562), p = n(84773), h = n(86891), f = n(70911);

        class m extends r.W {
            constructor(t) {
                const e = h.m9.SENTRY_SDK_SOURCE || (0, i.S)();
                (0, s.V)(t, "browser", ["browser"], e), super(t), t.sendClientReports && h.m9.document && h.m9.document.addEventListener("visibilitychange", (() => {
                    "hidden" === h.m9.document.visibilityState && this._flushOutcomes()
                }))
            }

            eventFromException(t, e) {
                return (0, p.dr)(this._options.stackParser, t, e, this._options.attachStacktrace)
            }

            eventFromMessage(t, e = "info", n) {
                return (0, p.aB)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
            }

            captureUserFeedback(t) {
                if (!this._isEnabled()) return void (d.X && o.kg.warn("SDK not enabled, will not capture user feedback."));
                const e = (0, f.r)(t, {
                    metadata: this.getSdkMetadata(),
                    dsn: this.getDsn(),
                    tunnel: this.getOptions().tunnel
                });
                this._sendEnvelope(e)
            }

            _prepareEvent(t, e, n) {
                return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
            }

            _flushOutcomes() {
                const t = this._clearOutcomes();
                if (0 === t.length) return void (d.X && o.kg.log("No outcomes to send"));
                if (!this._dsn) return void (d.X && o.kg.log("No dsn provided, will not send outcomes"));
                d.X && o.kg.log("Sending outcomes:", t);
                const e = u(t, this._options.tunnel && (0, l.RA)(this._dsn));
                this._sendEnvelope(e)
            }
        }
    }, 23562: function (t, e, n) {
        "use strict";
        n.d(e, {
            X: function () {
                return r
            }
        });
        const r = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    }, 84773: function (t, e, n) {
        "use strict";
        n.d(e, {
            GJ: function () {
                return u
            }, ME: function () {
                return g
            }, aB: function () {
                return m
            }, dr: function () {
                return f
            }
        });
        var r = n(64487), s = n(67597), i = n(34754), o = n(62844), a = n(96893), c = n(20535);

        function u(t, e) {
            const n = d(t, e), r = {type: e && e.name, value: h(e)};
            return n.length && (r.stacktrace = {frames: n}), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
        }

        function l(t, e) {
            return {exception: {values: [u(t, e)]}}
        }

        function d(t, e) {
            const n = e.stacktrace || e.stack || "", r = function (t) {
                if (t) {
                    if ("number" === typeof t.framesToPop) return t.framesToPop;
                    if (p.test(t.message)) return 1
                }
                return 0
            }(e);
            try {
                return t(n, r)
            } catch (s) {
            }
            return []
        }

        const p = /Minified React error #\d+;/i;

        function h(t) {
            const e = t && t.message;
            return e ? e.error && "string" === typeof e.error.message ? e.error.message : e : "No error message"
        }

        function f(t, e, n, r) {
            const s = g(t, e, n && n.syntheticException || void 0, r);
            return (0, o.EG)(s), s.level = "error", n && n.event_id && (s.event_id = n.event_id), (0, a.WD)(s)
        }

        function m(t, e, n = "info", r, s) {
            const i = y(t, e, r && r.syntheticException || void 0, s);
            return i.level = n, r && r.event_id && (i.event_id = r.event_id), (0, a.WD)(i)
        }

        function g(t, e, n, a, c) {
            let u;
            if ((0, s.VW)(e) && e.error) {
                return l(t, e.error)
            }
            if ((0, s.TX)(e) || (0, s.fm)(e)) {
                const r = e;
                if ("stack" in e) u = l(t, e); else {
                    const e = r.name || ((0, s.TX)(r) ? "DOMError" : "DOMException"),
                        i = r.message ? `${e}: ${r.message}` : e;
                    u = y(t, i, n, a), (0, o.Db)(u, i)
                }
                return "code" in r && (u.tags = {...u.tags, "DOMException.code": `${r.code}`}), u
            }
            if ((0, s.VZ)(e)) return l(t, e);
            if ((0, s.PO)(e) || (0, s.cO)(e)) {
                return u = function (t, e, n, o) {
                    const a = (0, r.s3)(), c = a && a.getOptions().normalizeDepth, u = {
                        exception: {
                            values: [{
                                type: (0, s.cO)(e) ? e.constructor.name : o ? "UnhandledRejection" : "Error",
                                value: _(e, {isUnhandledRejection: o})
                            }]
                        }, extra: {__serialized__: (0, i.Qy)(e, c)}
                    };
                    if (n) {
                        const e = d(t, n);
                        e.length && (u.exception.values[0].stacktrace = {frames: e})
                    }
                    return u
                }(t, e, n, c), (0, o.EG)(u, {synthetic: !0}), u
            }
            return u = y(t, e, n, a), (0, o.Db)(u, `${e}`, void 0), (0, o.EG)(u, {synthetic: !0}), u
        }

        function y(t, e, n, r) {
            const i = {};
            if (r && n) {
                const r = d(t, n);
                r.length && (i.exception = {values: [{value: e, stacktrace: {frames: r}}]})
            }
            if ((0, s.Le)(e)) {
                const {__sentry_template_string__: t, __sentry_template_values__: n} = e;
                return i.logentry = {message: t, params: n}, i
            }
            return i.message = e, i
        }

        function _(t, {isUnhandledRejection: e}) {
            const n = (0, c.zf)(t), r = e ? "promise rejection" : "exception";
            if ((0, s.VW)(t)) return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
            if ((0, s.cO)(t)) {
                return `Event \`${function (t) {
                    try {
                        const e = Object.getPrototypeOf(t);
                        return e ? e.constructor.name : void 0
                    } catch (e) {
                    }
                }(t)}\` (type=${t.type}) captured as ${r}`
            }
            return `Object captured as ${r} with keys: ${n}`
        }
    }, 86891: function (t, e, n) {
        "use strict";
        n.d(e, {
            Wz: function () {
                return u
            }, m9: function () {
                return a
            }, re: function () {
                return d
            }
        });
        var r = n(64487), s = n(71235), i = n(20535), o = n(62844);
        const a = s.n2;
        let c = 0;

        function u() {
            return c > 0
        }

        function l() {
            c++, setTimeout((() => {
                c--
            }))
        }

        function d(t, e = {}, n) {
            if ("function" !== typeof t) return t;
            try {
                const e = t.__sentry_wrapped__;
                if (e) return e;
                if ((0, i.HK)(t)) return t
            } catch (a) {
                return t
            }
            const s = function () {
                const s = Array.prototype.slice.call(arguments);
                try {
                    n && "function" === typeof n && n.apply(this, arguments);
                    const r = s.map((t => d(t, e)));
                    return t.apply(this, r)
                } catch (i) {
                    throw l(), (0, r.$e)((t => {
                        t.addEventProcessor((t => (e.mechanism && ((0, o.Db)(t, void 0, void 0), (0, o.EG)(t, e.mechanism)), t.extra = {
                            ...t.extra,
                            arguments: s
                        }, t))), (0, r.Tb)(i)
                    })), i
                }
            };
            try {
                for (const e in t) Object.prototype.hasOwnProperty.call(t, e) && (s[e] = t[e])
            } catch (c) {
            }
            (0, i.$Q)(s, t), (0, i.xp)(t, "__sentry_wrapped__", s);
            try {
                Object.getOwnPropertyDescriptor(s, "name").configurable && Object.defineProperty(s, "name", {get: () => t.name})
            } catch (c) {
            }
            return s
        }
    }, 26104: function (t, e, n) {
        "use strict";
        n.r(e), n.d(e, {
            Breadcrumbs: function () {
                return ut.O
            }, BrowserClient: function () {
                return nt.R
            }, BrowserProfilingIntegration: function () {
                return uo
            }, BrowserTracing: function () {
                return Ci.gE
            }, Dedupe: function () {
                return lt.I
            }, Feedback: function () {
                return Ei
            }, FunctionToString: function () {
                return i.c
            }, GlobalHandlers: function () {
                return dt.d
            }, HttpContext: function () {
                return pt.q
            }, Hub: function () {
                return H.Xb
            }, InboundFilters: function () {
                return o.Q
            }, Integrations: function () {
                return po
            }, LinkedErrors: function () {
                return ht.i
            }, ModuleMetadata: function () {
                return k
            }, Replay: function () {
                return Ss
            }, ReplayCanvas: function () {
                return Ks
            }, SDK_VERSION: function () {
                return X.J
            }, SEMANTIC_ATTRIBUTE_SENTRY_OP: function () {
                return z.$J
            }, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN: function () {
                return z.S3
            }, SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE: function () {
                return z.TE
            }, SEMANTIC_ATTRIBUTE_SENTRY_SOURCE: function () {
                return z.Zj
            }, Scope: function () {
                return W.sX
            }, TryCatch: function () {
                return ft.p
            }, WINDOW: function () {
                return et.m9
            }, addBreadcrumb: function () {
                return R.n_
            }, addEventProcessor: function () {
                return q.Q
            }, addGlobalEventProcessor: function () {
                return G.cc
            }, addIntegration: function () {
                return l.M5
            }, addTracingExtensions: function () {
                return J.T
            }, breadcrumbsIntegration: function () {
                return ut.f
            }, browserApiErrorsIntegration: function () {
                return ft.t
            }, browserProfilingIntegration: function () {
                return co
            }, browserTracingIntegration: function () {
                return Ii.E8
            }, captureEvent: function () {
                return R.eN
            }, captureException: function () {
                return R.Tb
            }, captureMessage: function () {
                return R.uT
            }, captureSession: function () {
                return R.cg
            }, captureUserFeedback: function () {
                return ct.Jd
            }, chromeStackLineParser: function () {
                return it.$3
            }, close: function () {
                return R.xv
            }, configureScope: function () {
                return R.e
            }, continueTrace: function () {
                return V.yn
            }, createTransport: function () {
                return Y.q
            }, createUserFeedbackEnvelope: function () {
                return at.r
            }, dedupeIntegration: function () {
                return lt.R
            }, defaultIntegrations: function () {
                return ct.SS
            }, defaultRequestInstrumentationOptions: function () {
                return Ri.k3
            }, defaultStackLineParsers: function () {
                return it.d8
            }, defaultStackParser: function () {
                return it.Dt
            }, endSession: function () {
                return R.TM
            }, eventFromException: function () {
                return ot.dr
            }, eventFromMessage: function () {
                return ot.aB
            }, exceptionFromError: function () {
                return ot.GJ
            }, extractTraceparentData: function () {
                return K.qG
            }, feedbackIntegration: function () {
                return xi
            }, flush: function () {
                return R.yl
            }, forceLoad: function () {
                return ct.Eg
            }, functionToStringIntegration: function () {
                return i.C
            }, geckoStackLineParser: function () {
                return it.$Q
            }, getActiveSpan: function () {
                return V.HN
            }, getActiveTransaction: function () {
                return K.x1
            }, getClient: function () {
                return R.s3
            }, getCurrentHub: function () {
                return H.Gd
            }, getCurrentScope: function () {
                return R.nZ
            }, getDefaultIntegrations: function () {
                return ct.nV
            }, getHubFromCarrier: function () {
                return H.vi
            }, getReplay: function () {
                return ws
            }, getSpanStatusFromHttpCode: function () {
                return Z.ix
            }, globalHandlersIntegration: function () {
                return dt.k
            }, httpContextIntegration: function () {
                return pt.s
            }, inboundFiltersIntegration: function () {
                return o.S
            }, init: function () {
                return ct.S1
            }, instrumentOutgoingRequests: function () {
                return Ri.L7
            }, isInitialized: function () {
                return R.dk
            }, lastEventId: function () {
                return R.eW
            }, linkedErrorsIntegration: function () {
                return ht.O
            }, makeBrowserOfflineTransport: function () {
                return Li
            }, makeFetchTransport: function () {
                return rt.f
            }, makeMain: function () {
                return H.pj
            }, makeMultiplexedTransport: function () {
                return E
            }, makeXHRTransport: function () {
                return st.K
            }, metrics: function () {
                return U
            }, moduleMetadataIntegration: function () {
                return S
            }, onLoad: function () {
                return ct.lA
            }, onProfilingStartRouteTransaction: function () {
                return io
            }, opera10StackLineParser: function () {
                return it.NP
            }, opera11StackLineParser: function () {
                return it.HH
            }, parameterize: function () {
                return B
            }, replayCanvasIntegration: function () {
                return Ys
            }, replayIntegration: function () {
                return bs
            }, sendFeedback: function () {
                return ui
            }, setContext: function () {
                return R.v
            }, setCurrentClient: function () {
                return Q.K
            }, setExtra: function () {
                return R.sU
            }, setExtras: function () {
                return R.rJ
            }, setHttpStatus: function () {
                return Z.Q0
            }, setMeasurement: function () {
                return tt.o
            }, setTag: function () {
                return R.YA
            }, setTags: function () {
                return R.mG
            }, setUser: function () {
                return R.av
            }, showReportDialog: function () {
                return ct.jp
            }, spanStatusfromHttpCode: function () {
                return Z.Zd
            }, startBrowserTracingNavigationSpan: function () {
                return Ii.og
            }, startBrowserTracingPageLoadSpan: function () {
                return Ii.Wo
            }, startInactiveSpan: function () {
                return V.qp
            }, startSession: function () {
                return R.yj
            }, startSpan: function () {
                return V.GK
            }, startSpanManual: function () {
                return V.V0
            }, startTransaction: function () {
                return R.Yr
            }, trace: function () {
                return V.g4
            }, winjsStackLineParser: function () {
                return it.R2
            }, withIsolationScope: function () {
                return R.wi
            }, withScope: function () {
                return R.$e
            }, wrap: function () {
                return ct.re
            }
        });
        var r = {};
        n.r(r), n.d(r, {
            FunctionToString: function () {
                return i.c
            }, InboundFilters: function () {
                return o.Q
            }, LinkedErrors: function () {
                return h
            }
        });
        var s = {};
        n.r(s), n.d(s, {
            Breadcrumbs: function () {
                return ut.O
            }, Dedupe: function () {
                return lt.I
            }, GlobalHandlers: function () {
                return dt.d
            }, HttpContext: function () {
                return pt.q
            }, LinkedErrors: function () {
                return ht.i
            }, TryCatch: function () {
                return ft.p
            }
        });
        var i = n(19116), o = n(42422), a = n(86045);

        function c(t, e) {
            return t(e.stack || "", 1)
        }

        function u(t, e) {
            const n = {type: e.name || e.constructor.name, value: e.message}, r = c(t, e);
            return r.length && (n.stacktrace = {frames: r}), n
        }

        var l = n(22967);
        const d = "LinkedErrors", p = (0, l._I)(((t = {}) => {
            const e = t.limit || 5, n = t.key || "cause";
            return {
                name: d, setupOnce() {
                }, preprocessEvent(t, r, s) {
                    const i = s.getOptions();
                    (0, a.Z)(u, i.stackParser, i.maxValueLength, n, e, t, r)
                }
            }
        })), h = (0, l.RN)(d, p), f = r;
        var m = n(58725), g = n(71235);
        const y = new Map, _ = new Set;

        function v(t, e) {
            return function (t) {
                if (g.n2._sentryModuleMetadata) for (const e of Object.keys(g.n2._sentryModuleMetadata)) {
                    const n = g.n2._sentryModuleMetadata[e];
                    if (_.has(e)) continue;
                    _.add(e);
                    const r = t(e);
                    for (const t of r.reverse()) if (t.filename) {
                        y.set(t.filename, n);
                        break
                    }
                }
            }(t), y.get(e)
        }

        const b = "ModuleMetadata", S = (0, l._I)((() => ({
            name: b, setupOnce() {
            }, setup(t) {
                "function" === typeof t.on && t.on("beforeEnvelope", (t => {
                    (0, m.gv)(t, ((t, e) => {
                        if ("event" === e) {
                            const e = Array.isArray(t) ? t[1] : void 0;
                            e && (!function (t) {
                                try {
                                    t.exception.values.forEach((t => {
                                        if (t.stacktrace) for (const e of t.stacktrace.frames || []) delete e.module_metadata
                                    }))
                                } catch (e) {
                                }
                            }(e), t[1] = e)
                        }
                    }))
                }))
            }, processEvent: (t, e, n) => (function (t, e) {
                try {
                    e.exception.values.forEach((e => {
                        if (e.stacktrace) for (const n of e.stacktrace.frames || []) {
                            if (!n.filename) continue;
                            const e = v(t, n.filename);
                            e && (n.module_metadata = e)
                        }
                    }))
                } catch (n) {
                }
            }(n.getOptions().stackParser, t), t)
        }))), k = (0, l.RN)(b, S);
        var w = n(30292), T = n(1984);

        function x(t, e) {
            let n;
            return (0, m.gv)(t, ((t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n))), n
        }

        function E(t, e) {
            return n => {
                const r = t(n), s = {};

                function i(e, r) {
                    const i = r ? `${e}:${r}` : e;
                    if (!s[i]) {
                        const o = (0, w.U4)(e);
                        if (!o) return;
                        const a = (0, T.U)(o);
                        s[i] = r ? function (t, e) {
                            return n => {
                                const r = t(n);
                                return {
                                    send: async t => {
                                        const n = x(t, ["event", "transaction", "profile", "replay_event"]);
                                        return n && (n.release = e), r.send(t)
                                    }, flush: t => r.flush(t)
                                }
                            }
                        }(t, r)({...n, url: a}) : t({...n, url: a})
                    }
                    return s[i]
                }

                return {
                    send: async function (t) {
                        const n = e({
                            envelope: t, getEvent: function (e) {
                                const n = e && e.length ? e : ["event"];
                                return x(t, n)
                            }
                        }).map((t => "string" === typeof t ? i(t, void 0) : i(t.dsn, t.release))).filter((t => !!t));
                        return 0 === n.length && n.push(r), (await Promise.all(n.map((e => e.send(t)))))[0]
                    }, flush: async function (t) {
                        const e = [...Object.keys(s).map((t => s[t])), r];
                        return (await Promise.all(e.map((e => e.flush(t))))).every((t => t))
                    }
                }
            }
        }

        var C = n(12343), I = n(81703), R = n(64487), M = n(93371), O = n(56631), A = n(21170), D = n(6189);
        const N = {
            [O.JM]: class {
                constructor(t) {
                    this._value = t
                }

                get weight() {
                    return 1
                }

                add(t) {
                    this._value += t
                }

                toString() {
                    return `${this._value}`
                }
            }, [O.uG]: class {
                constructor(t) {
                    this._last = t, this._min = t, this._max = t, this._sum = t, this._count = 1
                }

                get weight() {
                    return 5
                }

                add(t) {
                    this._last = t, t < this._min && (this._min = t), t > this._max && (this._max = t), this._sum += t, this._count++
                }

                toString() {
                    return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`
                }
            }, [O.g_]: class {
                constructor(t) {
                    this._value = [t]
                }

                get weight() {
                    return this._value.length
                }

                add(t) {
                    this._value.push(t)
                }

                toString() {
                    return this._value.join(":")
                }
            }, [O.is]: class {
                constructor(t) {
                    this.first = t, this._value = new Set([t])
                }

                get weight() {
                    return this._value.size
                }

                add(t) {
                    this._value.add(t)
                }

                toString() {
                    return Array.from(this._value).map((t => "string" === typeof t ? (0, D.M)(t) : t)).join(":")
                }
            }
        };
        var L = n(55986);

        class P {
            constructor(t) {
                this._client = t, this._buckets = new Map, this._interval = setInterval((() => this.flush()), O.RF)
            }

            add(t, e, n, r = "none", s = {}, i = (0, A.ph)()) {
                const o = Math.floor(i), a = e.replace(O.X7, "_"), c = (0, D.Bg)(s), u = (0, D.Ic)(t, a, r, c);
                let l = this._buckets.get(u);
                const d = l && t === O.is ? l.metric.weight : 0;
                l ? (l.metric.add(n), l.timestamp < o && (l.timestamp = o)) : (l = {
                    metric: new N[t](n),
                    timestamp: o,
                    metricType: t,
                    name: a,
                    unit: r,
                    tags: c
                }, this._buckets.set(u, l));
                const p = "string" === typeof n ? l.metric.weight - d : n;
                (0, L.v)(t, a, p, r, s, u)
            }

            flush() {
                if (0 !== this._buckets.size) {
                    if (this._client.captureAggregateMetrics) {
                        const t = Array.from(this._buckets).map((([, t]) => t));
                        this._client.captureAggregateMetrics(t)
                    }
                    this._buckets.clear()
                }
            }

            close() {
                clearInterval(this._interval), this.flush()
            }
        }

        const $ = "MetricsAggregator", F = (0, l._I)((() => ({
            name: $, setupOnce() {
            }, setup(t) {
                t.metricsAggregator = new P(t)
            }
        })));

        function j(t, e, n, r = {}) {
            const s = (0, R.s3)(), i = (0, R.nZ)();
            if (s) {
                if (!s.metricsAggregator) return void (I.X && C.kg.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs"));
                const {unit: o, tags: a, timestamp: c} = r, {release: u, environment: l} = s.getOptions(),
                    d = i.getTransaction(), p = {};
                u && (p.release = u), l && (p.environment = l), d && (p.transaction = (0, M.XU)(d).description || ""), I.X && C.kg.log(`Adding value of ${n} to ${t} metric ${e}`), s.metricsAggregator.add(t, e, n, o, {...p, ...a}, c)
            }
        }

        const U = {
            increment: function (t, e = 1, n) {
                j(O.JM, t, e, n)
            }, distribution: function (t, e, n) {
                j(O.g_, t, e, n)
            }, set: function (t, e, n) {
                j(O.is, t, e, n)
            }, gauge: function (t, e, n) {
                j(O.uG, t, e, n)
            }, MetricsAggregator: (0, l.RN)($, F), metricsAggregatorIntegration: F
        };

        function B(t, ...e) {
            const n = new String(String.raw(t, ...e));
            return n.__sentry_template_string__ = t.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), n.__sentry_template_values__ = e, n
        }

        var H = n(95659), X = n(40105), z = n(76754), W = n(10350), q = n(32825), G = n(71195), J = n(77850),
            V = n(32336), Y = n(32570), K = n(9791), Z = n(27387), Q = n(67966), tt = n(39080), et = n(86891),
            nt = n(7935), rt = n(54025), st = n(68131), it = n(34469), ot = n(84773), at = n(70911), ct = n(19011),
            ut = n(42741), lt = n(69730), dt = n(52136), pt = n(61945), ht = n(61634), ft = n(53692);
        var mt = n(64307);

        function gt(t, e) {
            const n = e && function (t) {
                return void 0 !== t.getClient
            }(e) ? e.getClient() : e, r = n && n.getDsn(), s = n && n.getOptions().tunnel;
            return function (t, e) {
                return !!e && t.includes(e.host)
            }(t, r) || function (t, e) {
                if (!e) return !1;
                return yt(t) === yt(e)
            }(t, s)
        }

        function yt(t) {
            return "/" === t[t.length - 1] ? t.slice(0, -1) : t
        }

        var _t = n(88942), vt = n(34754), bt = n(20535), St = n(58464), kt = n(62844), wt = n(55322), Tt = n(57321),
            xt = n(21394), Et = n(85316), Ct = n(28425), It = n(80228), Rt = n(61422);

        function Mt() {
            return "undefined" !== typeof window && (!(0, Rt.KV)() || void 0 !== g.n2.process && "renderer" === g.n2.process.type)
        }

        var Ot = n(26367);
        const At = g.n2, Dt = "sentryReplaySession", Nt = "Unable to send Replay", Lt = 15e4, Pt = 5e3, $t = 2e7,
            Ft = 36e5;

        function jt(t) {
            let e, n = t[0], r = 1;
            for (; r < t.length;) {
                const s = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...t) => n.call(e, ...t))), e = void 0)
            }
            return n
        }

        var Ut;

        function Bt(t) {
            const e = jt([t, "optionalAccess", t => t.host]);
            return Boolean(jt([e, "optionalAccess", t => t.shadowRoot]) === t)
        }

        function Ht(t) {
            return "[object ShadowRoot]" === Object.prototype.toString.call(t)
        }

        function Xt(t) {
            try {
                const n = t.rules || t.cssRules;
                return n ? ((e = Array.from(n, zt).join("")).includes(" background-clip: text;") && !e.includes(" -webkit-background-clip: text;") && (e = e.replace(" background-clip: text;", " -webkit-background-clip: text; background-clip: text;")), e) : null
            } catch (n) {
                return null
            }
            var e
        }

        function zt(t) {
            let e;
            if (function (t) {
                return "styleSheet" in t
            }(t)) try {
                e = Xt(t.styleSheet) || function (t) {
                    const {cssText: e} = t;
                    if (e.split('"').length < 3) return e;
                    const n = ["@import", `url(${JSON.stringify(t.href)})`];
                    return "" === t.layerName ? n.push("layer") : t.layerName && n.push(`layer(${t.layerName})`), t.supportsText && n.push(`supports(${t.supportsText})`), t.media.length && n.push(t.media.mediaText), n.join(" ") + ";"
                }(t)
            } catch (n) {
            } else if (function (t) {
                return "selectorText" in t
            }(t) && t.selectorText.includes(":")) return function (t) {
                const e = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
                return t.replace(e, "$1\\$2")
            }(t.cssText);
            return e || t.cssText
        }

        !function (t) {
            t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
        }(Ut || (Ut = {}));

        class Wt {
            constructor() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
            }

            getId(t) {
                if (!t) return -1;
                const e = jt([this, "access", t => t.getMeta, "call", e => e(t), "optionalAccess", t => t.id]);
                return r = () => -1, null != (n = e) ? n : r();
                var n, r
            }

            getNode(t) {
                return this.idNodeMap.get(t) || null
            }

            getIds() {
                return Array.from(this.idNodeMap.keys())
            }

            getMeta(t) {
                return this.nodeMetaMap.get(t) || null
            }

            removeNodeFromMap(t) {
                const e = this.getId(t);
                this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach((t => this.removeNodeFromMap(t)))
            }

            has(t) {
                return this.idNodeMap.has(t)
            }

            hasNode(t) {
                return this.nodeMetaMap.has(t)
            }

            add(t, e) {
                const n = e.id;
                this.idNodeMap.set(n, t), this.nodeMetaMap.set(t, e)
            }

            replace(t, e) {
                const n = this.getNode(t);
                if (n) {
                    const t = this.nodeMetaMap.get(n);
                    t && this.nodeMetaMap.set(e, t)
                }
                this.idNodeMap.set(t, e)
            }

            reset() {
                this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
            }
        }

        function qt({maskInputOptions: t, tagName: e, type: n}) {
            return "OPTION" === e && (e = "SELECT"), Boolean(t[e.toLowerCase()] || n && t[n] || "password" === n || "INPUT" === e && !n && t.text)
        }

        function Gt({isMasked: t, element: e, value: n, maskInputFn: r}) {
            let s = n || "";
            return t ? (r && (s = r(s, e)), "*".repeat(s.length)) : s
        }

        function Jt(t) {
            return t.toLowerCase()
        }

        function Vt(t) {
            return t.toUpperCase()
        }

        const Yt = "__rrweb_original__";

        function Kt(t) {
            const e = t.type;
            return t.hasAttribute("data-rr-is-password") ? "password" : e ? Jt(e) : null
        }

        function Zt(t, e, n) {
            return "INPUT" !== e || "radio" !== n && "checkbox" !== n ? t.value : t.getAttribute("value") || ""
        }

        let Qt = 1;
        const te = new RegExp("[^a-z0-9-_:]");

        function ee() {
            return Qt++
        }

        let ne, re;
        const se = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, ie = /^(?:[a-z+]+:)?\/\//i, oe = /^www\..*/i,
            ae = /^(data:)([^,]*),(.*)/i;

        function ce(t, e) {
            return (t || "").replace(se, ((t, n, r, s, i, o) => {
                const a = r || i || o, c = n || s || "";
                if (!a) return t;
                if (ie.test(a) || oe.test(a)) return `url(${c}${a}${c})`;
                if (ae.test(a)) return `url(${c}${a}${c})`;
                if ("/" === a[0]) return `url(${c}${function (t) {
                    let e = "";
                    return e = t.indexOf("//") > -1 ? t.split("/").slice(0, 3).join("/") : t.split("/")[0], e = e.split("?")[0], e
                }(e) + a}${c})`;
                const u = e.split("/"), l = a.split("/");
                u.pop();
                for (const e of l) "." !== e && (".." === e ? u.pop() : u.push(e));
                return `url(${c}${u.join("/")}${c})`
            }))
        }

        const ue = /^[^ \t\n\r\u000c]+/, le = /^[, \t\n\r\u000c]+/;

        function de(t, e) {
            if (!e || "" === e.trim()) return e;
            const n = t.createElement("a");
            return n.href = e, n.href
        }

        function pe(t) {
            return Boolean("svg" === t.tagName || t.ownerSVGElement)
        }

        function he() {
            const t = document.createElement("a");
            return t.href = "", t.href
        }

        function fe(t, e, n, r, s, i) {
            return r ? "src" === n || "href" === n && ("use" !== e || "#" !== r[0]) || "xlink:href" === n && "#" !== r[0] ? de(t, r) : "background" !== n || "table" !== e && "td" !== e && "th" !== e ? "srcset" === n ? function (t, e) {
                if ("" === e.trim()) return e;
                let n = 0;

                function r(t) {
                    let r;
                    const s = t.exec(e.substring(n));
                    return s ? (r = s[0], n += r.length, r) : ""
                }

                const s = [];
                for (; r(le), !(n >= e.length);) {
                    let i = r(ue);
                    if ("," === i.slice(-1)) i = de(t, i.substring(0, i.length - 1)), s.push(i); else {
                        let r = "";
                        i = de(t, i);
                        let o = !1;
                        for (; ;) {
                            const t = e.charAt(n);
                            if ("" === t) {
                                s.push((i + r).trim());
                                break
                            }
                            if (o) ")" === t && (o = !1); else {
                                if ("," === t) {
                                    n += 1, s.push((i + r).trim());
                                    break
                                }
                                "(" === t && (o = !0)
                            }
                            r += t, n += 1
                        }
                    }
                }
                return s.join(", ")
            }(t, r) : "style" === n ? ce(r, he()) : "object" === e && "data" === n ? de(t, r) : "function" === typeof i ? i(n, r, s) : r : de(t, r) : r
        }

        function me(t, e, n) {
            return ("video" === t || "audio" === t) && "autoplay" === e
        }

        function ge(t, e, n = 1 / 0, r = 0) {
            return t ? t.nodeType !== t.ELEMENT_NODE || r > n ? -1 : e(t) ? r : ge(t.parentNode, e, n, r + 1) : -1
        }

        function ye(t, e) {
            return n => {
                const r = n;
                if (null === r) return !1;
                try {
                    if (t) if ("string" === typeof t) {
                        if (r.matches(`.${t}`)) return !0
                    } else if (function (t, e) {
                        for (let n = t.classList.length; n--;) {
                            const r = t.classList[n];
                            if (e.test(r)) return !0
                        }
                        return !1
                    }(r, t)) return !0;
                    return !(!e || !r.matches(e))
                } catch (s) {
                    return !1
                }
            }
        }

        function _e(t, e, n, r, s, i) {
            try {
                const o = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
                if (null === o) return !1;
                if ("INPUT" === o.tagName) {
                    const t = o.getAttribute("autocomplete");
                    if (["current-password", "new-password", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc"].includes(t)) return !0
                }
                let a = -1, c = -1;
                if (i) {
                    if (c = ge(o, ye(r, s)), c < 0) return !0;
                    a = ge(o, ye(e, n), c >= 0 ? c : 1 / 0)
                } else {
                    if (a = ge(o, ye(e, n)), a < 0) return !1;
                    c = ge(o, ye(r, s), a >= 0 ? a : 1 / 0)
                }
                return a >= 0 ? !(c >= 0) || a <= c : !(c >= 0) && !!i
            } catch (o) {
            }
            return !!i
        }

        function ve(t, e) {
            const {
                doc: n,
                mirror: r,
                blockClass: s,
                blockSelector: i,
                unblockSelector: o,
                maskAllText: a,
                maskAttributeFn: c,
                maskTextClass: u,
                unmaskTextClass: l,
                maskTextSelector: d,
                unmaskTextSelector: p,
                inlineStylesheet: h,
                maskInputOptions: f = {},
                maskTextFn: m,
                maskInputFn: g,
                dataURLOptions: y = {},
                inlineImages: _,
                recordCanvas: v,
                keepIframeSrcFn: b,
                newlyAddedElement: S = !1
            } = e, k = function (t, e) {
                if (!e.hasNode(t)) return;
                const n = e.getId(t);
                return 1 === n ? void 0 : n
            }(n, r);
            switch (t.nodeType) {
                case t.DOCUMENT_NODE:
                    return "CSS1Compat" !== t.compatMode ? {
                        type: Ut.Document,
                        childNodes: [],
                        compatMode: t.compatMode
                    } : {type: Ut.Document, childNodes: []};
                case t.DOCUMENT_TYPE_NODE:
                    return {type: Ut.DocumentType, name: t.name, publicId: t.publicId, systemId: t.systemId, rootId: k};
                case t.ELEMENT_NODE:
                    return function (t, e) {
                        const {
                            doc: n,
                            blockClass: r,
                            blockSelector: s,
                            unblockSelector: i,
                            inlineStylesheet: o,
                            maskInputOptions: a = {},
                            maskAttributeFn: c,
                            maskInputFn: u,
                            dataURLOptions: l = {},
                            inlineImages: d,
                            recordCanvas: p,
                            keepIframeSrcFn: h,
                            newlyAddedElement: f = !1,
                            rootId: m,
                            maskAllText: g,
                            maskTextClass: y,
                            unmaskTextClass: _,
                            maskTextSelector: v,
                            unmaskTextSelector: b
                        } = e, S = function (t, e, n, r) {
                            try {
                                if (r && t.matches(r)) return !1;
                                if ("string" === typeof e) {
                                    if (t.classList.contains(e)) return !0
                                } else for (let n = t.classList.length; n--;) {
                                    const r = t.classList[n];
                                    if (e.test(r)) return !0
                                }
                                if (n) return t.matches(n)
                            } catch (s) {
                            }
                            return !1
                        }(t, r, s, i), k = function (t) {
                            if (t instanceof HTMLFormElement) return "form";
                            const e = Jt(t.tagName);
                            return te.test(e) ? "div" : e
                        }(t);
                        let w = {};
                        const T = t.attributes.length;
                        for (let C = 0; C < T; C++) {
                            const e = t.attributes[C];
                            e.name && !me(k, e.name, e.value) && (w[e.name] = fe(n, k, Jt(e.name), e.value, t, c))
                        }
                        if ("link" === k && o) {
                            const e = Array.from(n.styleSheets).find((e => e.href === t.href));
                            let r = null;
                            e && (r = Xt(e)), r && (delete w.rel, delete w.href, w._cssText = ce(r, e.href))
                        }
                        if ("style" === k && t.sheet && !(t.innerText || t.textContent || "").trim().length) {
                            const e = Xt(t.sheet);
                            e && (w._cssText = ce(e, he()))
                        }
                        if ("input" === k || "textarea" === k || "select" === k || "option" === k) {
                            const e = t, n = Kt(e), r = Zt(e, Vt(k), n), s = e.checked;
                            if ("submit" !== n && "button" !== n && r) {
                                const t = _e(e, y, v, _, b, qt({type: n, tagName: Vt(k), maskInputOptions: a}));
                                w.value = Gt({isMasked: t, element: e, value: r, maskInputFn: u})
                            }
                            s && (w.checked = s)
                        }
                        "option" === k && (t.selected && !a.select ? w.selected = !0 : delete w.selected);
                        if ("canvas" === k && p) if ("2d" === t.__context) (function (t) {
                            const e = t.getContext("2d");
                            if (!e) return !0;
                            for (let n = 0; n < t.width; n += 50) for (let r = 0; r < t.height; r += 50) {
                                const s = e.getImageData, i = Yt in s ? s.__rrweb_original__ : s;
                                if (new Uint32Array(i.call(e, n, r, Math.min(50, t.width - n), Math.min(50, t.height - r)).data.buffer).some((t => 0 !== t))) return !1
                            }
                            return !0
                        })(t) || (w.rr_dataURL = t.toDataURL(l.type, l.quality)); else if (!("__context" in t)) {
                            const e = t.toDataURL(l.type, l.quality), n = document.createElement("canvas");
                            n.width = t.width, n.height = t.height;
                            e !== n.toDataURL(l.type, l.quality) && (w.rr_dataURL = e)
                        }
                        if ("img" === k && d) {
                            ne || (ne = n.createElement("canvas"), re = ne.getContext("2d"));
                            const e = t, r = e.crossOrigin;
                            e.crossOrigin = "anonymous";
                            const s = () => {
                                e.removeEventListener("load", s);
                                try {
                                    ne.width = e.naturalWidth, ne.height = e.naturalHeight, re.drawImage(e, 0, 0), w.rr_dataURL = ne.toDataURL(l.type, l.quality)
                                } catch (t) {
                                    console.warn(`Cannot inline img src=${e.currentSrc}! Error: ${t}`)
                                }
                                r ? w.crossOrigin = r : e.removeAttribute("crossorigin")
                            };
                            e.complete && 0 !== e.naturalWidth ? s() : e.addEventListener("load", s)
                        }
                        "audio" !== k && "video" !== k || (w.rr_mediaState = t.paused ? "paused" : "played", w.rr_mediaCurrentTime = t.currentTime);
                        f || (t.scrollLeft && (w.rr_scrollLeft = t.scrollLeft), t.scrollTop && (w.rr_scrollTop = t.scrollTop));
                        if (S) {
                            const {width: e, height: n} = t.getBoundingClientRect();
                            w = {class: w.class, rr_width: `${e}px`, rr_height: `${n}px`}
                        }
                        "iframe" !== k || h(w.src) || (t.contentDocument || (w.rr_src = w.src), delete w.src);
                        let x;
                        try {
                            customElements.get(k) && (x = !0)
                        } catch (E) {
                        }
                        return {
                            type: Ut.Element,
                            tagName: k,
                            attributes: w,
                            childNodes: [],
                            isSVG: pe(t) || void 0,
                            needBlock: S,
                            rootId: m,
                            isCustom: x
                        }
                    }(t, {
                        doc: n,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        inlineStylesheet: h,
                        maskAttributeFn: c,
                        maskInputOptions: f,
                        maskInputFn: g,
                        dataURLOptions: y,
                        inlineImages: _,
                        recordCanvas: v,
                        keepIframeSrcFn: b,
                        newlyAddedElement: S,
                        rootId: k,
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p
                    });
                case t.TEXT_NODE:
                    return function (t, e) {
                        const {
                            maskAllText: n,
                            maskTextClass: r,
                            unmaskTextClass: s,
                            maskTextSelector: i,
                            unmaskTextSelector: o,
                            maskTextFn: a,
                            maskInputOptions: c,
                            maskInputFn: u,
                            rootId: l
                        } = e, d = t.parentNode && t.parentNode.tagName;
                        let p = t.textContent;
                        const h = "STYLE" === d || void 0, f = "SCRIPT" === d || void 0, m = "TEXTAREA" === d || void 0;
                        if (h && p) {
                            try {
                                t.nextSibling || t.previousSibling || jt([t, "access", t => t.parentNode, "access", t => t.sheet, "optionalAccess", t => t.cssRules]) && (p = Xt(t.parentNode.sheet))
                            } catch (y) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${y}`, t)
                            }
                            p = ce(p, he())
                        }
                        f && (p = "SCRIPT_PLACEHOLDER");
                        const g = _e(t, r, i, s, o, n);
                        h || f || m || !p || !g || (p = a ? a(p) : p.replace(/[\S]/g, "*"));
                        m && p && (c.textarea || g) && (p = u ? u(p, t.parentNode) : p.replace(/[\S]/g, "*"));
                        if ("OPTION" === d && p) {
                            p = Gt({
                                isMasked: _e(t, r, i, s, o, qt({type: null, tagName: d, maskInputOptions: c})),
                                element: t,
                                value: p,
                                maskInputFn: u
                            })
                        }
                        return {type: Ut.Text, textContent: p || "", isStyle: h, rootId: l}
                    }(t, {
                        maskAllText: a,
                        maskTextClass: u,
                        unmaskTextClass: l,
                        maskTextSelector: d,
                        unmaskTextSelector: p,
                        maskTextFn: m,
                        maskInputOptions: f,
                        maskInputFn: g,
                        rootId: k
                    });
                case t.CDATA_SECTION_NODE:
                    return {type: Ut.CDATA, textContent: "", rootId: k};
                case t.COMMENT_NODE:
                    return {type: Ut.Comment, textContent: t.textContent || "", rootId: k};
                default:
                    return !1
            }
        }

        function be(t) {
            return void 0 === t || null === t ? "" : t.toLowerCase()
        }

        function Se(t, e) {
            const {
                doc: n,
                mirror: r,
                blockClass: s,
                blockSelector: i,
                unblockSelector: o,
                maskAllText: a,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: d,
                skipChild: p = !1,
                inlineStylesheet: h = !0,
                maskInputOptions: f = {},
                maskAttributeFn: m,
                maskTextFn: g,
                maskInputFn: y,
                slimDOMOptions: _,
                dataURLOptions: v = {},
                inlineImages: b = !1,
                recordCanvas: S = !1,
                onSerialize: k,
                onIframeLoad: w,
                iframeLoadTimeout: T = 5e3,
                onStylesheetLoad: x,
                stylesheetLoadTimeout: E = 5e3,
                keepIframeSrcFn: C = (() => !1),
                newlyAddedElement: I = !1
            } = e;
            let {preserveWhiteSpace: R = !0} = e;
            const M = ve(t, {
                doc: n,
                mirror: r,
                blockClass: s,
                blockSelector: i,
                maskAllText: a,
                unblockSelector: o,
                maskTextClass: c,
                unmaskTextClass: u,
                maskTextSelector: l,
                unmaskTextSelector: d,
                inlineStylesheet: h,
                maskInputOptions: f,
                maskAttributeFn: m,
                maskTextFn: g,
                maskInputFn: y,
                dataURLOptions: v,
                inlineImages: b,
                recordCanvas: S,
                keepIframeSrcFn: C,
                newlyAddedElement: I
            });
            if (!M) return console.warn(t, "not serialized"), null;
            let O;
            O = r.hasNode(t) ? r.getId(t) : !function (t, e) {
                if (e.comment && t.type === Ut.Comment) return !0;
                if (t.type === Ut.Element) {
                    if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel || "modulepreload" === t.attributes.rel) && "script" === t.attributes.as || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" === typeof t.attributes.href && t.attributes.href.endsWith(".js"))) return !0;
                    if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (be(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === be(t.attributes.name) || "icon" === be(t.attributes.rel) || "apple-touch-icon" === be(t.attributes.rel) || "shortcut icon" === be(t.attributes.rel)))) return !0;
                    if ("meta" === t.tagName) {
                        if (e.headMetaDescKeywords && be(t.attributes.name).match(/^description|keywords$/)) return !0;
                        if (e.headMetaSocial && (be(t.attributes.property).match(/^(og|twitter|fb):/) || be(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === be(t.attributes.name))) return !0;
                        if (e.headMetaRobots && ("robots" === be(t.attributes.name) || "googlebot" === be(t.attributes.name) || "bingbot" === be(t.attributes.name))) return !0;
                        if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                        if (e.headMetaAuthorship && ("author" === be(t.attributes.name) || "generator" === be(t.attributes.name) || "framework" === be(t.attributes.name) || "publisher" === be(t.attributes.name) || "progid" === be(t.attributes.name) || be(t.attributes.property).match(/^article:/) || be(t.attributes.property).match(/^product:/))) return !0;
                        if (e.headMetaVerification && ("google-site-verification" === be(t.attributes.name) || "yandex-verification" === be(t.attributes.name) || "csrf-token" === be(t.attributes.name) || "p:domain_verify" === be(t.attributes.name) || "verify-v1" === be(t.attributes.name) || "verification" === be(t.attributes.name) || "shopify-checkout-api-token" === be(t.attributes.name))) return !0
                    }
                }
                return !1
            }(M, _) && (R || M.type !== Ut.Text || M.isStyle || M.textContent.replace(/^\s+|\s+$/gm, "").length) ? ee() : -2;
            const A = Object.assign(M, {id: O});
            if (r.add(t, A), -2 === O) return null;
            k && k(t);
            let D = !p;
            if (A.type === Ut.Element) {
                D = D && !A.needBlock, delete A.needBlock;
                const e = t.shadowRoot;
                e && Ht(e) && (A.isShadowHost = !0)
            }
            if ((A.type === Ut.Document || A.type === Ut.Element) && D) {
                _.headWhitespace && A.type === Ut.Element && "head" === A.tagName && (R = !1);
                const e = {
                    doc: n,
                    mirror: r,
                    blockClass: s,
                    blockSelector: i,
                    maskAllText: a,
                    unblockSelector: o,
                    maskTextClass: c,
                    unmaskTextClass: u,
                    maskTextSelector: l,
                    unmaskTextSelector: d,
                    skipChild: p,
                    inlineStylesheet: h,
                    maskInputOptions: f,
                    maskAttributeFn: m,
                    maskTextFn: g,
                    maskInputFn: y,
                    slimDOMOptions: _,
                    dataURLOptions: v,
                    inlineImages: b,
                    recordCanvas: S,
                    preserveWhiteSpace: R,
                    onSerialize: k,
                    onIframeLoad: w,
                    iframeLoadTimeout: T,
                    onStylesheetLoad: x,
                    stylesheetLoadTimeout: E,
                    keepIframeSrcFn: C
                };
                for (const n of Array.from(t.childNodes)) {
                    const t = Se(n, e);
                    t && A.childNodes.push(t)
                }
                if (function (t) {
                    return t.nodeType === t.ELEMENT_NODE
                }(t) && t.shadowRoot) for (const n of Array.from(t.shadowRoot.childNodes)) {
                    const r = Se(n, e);
                    r && (Ht(t.shadowRoot) && (r.isShadow = !0), A.childNodes.push(r))
                }
            }
            return t.parentNode && Bt(t.parentNode) && Ht(t.parentNode) && (A.isShadow = !0), A.type === Ut.Element && "iframe" === A.tagName && function (t, e, n) {
                const r = t.contentWindow;
                if (!r) return;
                let s, i = !1;
                try {
                    s = r.document.readyState
                } catch (a) {
                    return
                }
                if ("complete" !== s) {
                    const r = setTimeout((() => {
                        i || (e(), i = !0)
                    }), n);
                    return void t.addEventListener("load", (() => {
                        clearTimeout(r), i = !0, e()
                    }))
                }
                const o = "about:blank";
                if (r.location.href !== o || t.src === o || "" === t.src) return setTimeout(e, 0), t.addEventListener("load", e);
                t.addEventListener("load", e)
            }(t, (() => {
                const e = t.contentDocument;
                if (e && w) {
                    const n = Se(e, {
                        doc: e,
                        mirror: r,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: _,
                        dataURLOptions: v,
                        inlineImages: b,
                        recordCanvas: S,
                        preserveWhiteSpace: R,
                        onSerialize: k,
                        onIframeLoad: w,
                        iframeLoadTimeout: T,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: E,
                        keepIframeSrcFn: C
                    });
                    n && w(t, n)
                }
            }), T), A.type === Ut.Element && "link" === A.tagName && "stylesheet" === A.attributes.rel && function (t, e, n) {
                let r, s = !1;
                try {
                    r = t.sheet
                } catch (o) {
                    return
                }
                if (r) return;
                const i = setTimeout((() => {
                    s || (e(), s = !0)
                }), n);
                t.addEventListener("load", (() => {
                    clearTimeout(i), s = !0, e()
                }))
            }(t, (() => {
                if (x) {
                    const e = Se(t, {
                        doc: n,
                        mirror: r,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskAllText: a,
                        maskTextClass: c,
                        unmaskTextClass: u,
                        maskTextSelector: l,
                        unmaskTextSelector: d,
                        skipChild: !1,
                        inlineStylesheet: h,
                        maskInputOptions: f,
                        maskAttributeFn: m,
                        maskTextFn: g,
                        maskInputFn: y,
                        slimDOMOptions: _,
                        dataURLOptions: v,
                        inlineImages: b,
                        recordCanvas: S,
                        preserveWhiteSpace: R,
                        onSerialize: k,
                        onIframeLoad: w,
                        iframeLoadTimeout: T,
                        onStylesheetLoad: x,
                        stylesheetLoadTimeout: E,
                        keepIframeSrcFn: C
                    });
                    e && x(t, e)
                }
            }), E), A
        }

        function ke(t) {
            let e, n = t[0], r = 1;
            for (; r < t.length;) {
                const s = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...t) => n.call(e, ...t))), e = void 0)
            }
            return n
        }

        function we(t, e, n = document) {
            const r = {capture: !0, passive: !0};
            return n.addEventListener(t, e, r), () => n.removeEventListener(t, e, r)
        }

        const Te = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
        let xe = {
            map: {},
            getId: () => (console.error(Te), -1),
            getNode: () => (console.error(Te), null),
            removeNodeFromMap() {
                console.error(Te)
            },
            has: () => (console.error(Te), !1),
            reset() {
                console.error(Te)
            }
        };

        function Ee(t, e, n = {}) {
            let r = null, s = 0;
            return function (...i) {
                const o = Date.now();
                s || !1 !== n.leading || (s = o);
                const a = e - (o - s), c = this;
                a <= 0 || a > e ? (r && (clearTimeout(r), r = null), s = o, t.apply(c, i)) : r || !1 === n.trailing || (r = setTimeout((() => {
                    s = !1 === n.leading ? 0 : Date.now(), r = null, t.apply(c, i)
                }), a))
            }
        }

        function Ce(t, e, n, r, s = window) {
            const i = s.Object.getOwnPropertyDescriptor(t, e);
            return s.Object.defineProperty(t, e, r ? n : {
                set(t) {
                    setTimeout((() => {
                        n.set.call(this, t)
                    }), 0), i && i.set && i.set.call(this, t)
                }
            }), () => Ce(t, e, i || {}, !0)
        }

        function Ie(t, e, n) {
            try {
                if (!(e in t)) return () => {
                };
                const r = t[e], s = n(r);
                return "function" === typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })), t[e] = s, () => {
                    t[e] = r
                }
            } catch (r) {
                return () => {
                }
            }
        }

        "undefined" !== typeof window && window.Proxy && window.Reflect && (xe = new Proxy(xe, {get: (t, e, n) => ("map" === e && console.error(Te), Reflect.get(t, e, n))}));
        let Re, Me = Date.now;

        function Oe(t) {
            const e = t.document;
            return {
                left: e.scrollingElement ? e.scrollingElement.scrollLeft : void 0 !== t.pageXOffset ? t.pageXOffset : ke([e, "optionalAccess", t => t.documentElement, "access", t => t.scrollLeft]) || ke([e, "optionalAccess", t => t.body, "optionalAccess", t => t.parentElement, "optionalAccess", t => t.scrollLeft]) || ke([e, "optionalAccess", t => t.body, "optionalAccess", t => t.scrollLeft]) || 0,
                top: e.scrollingElement ? e.scrollingElement.scrollTop : void 0 !== t.pageYOffset ? t.pageYOffset : ke([e, "optionalAccess", t => t.documentElement, "access", t => t.scrollTop]) || ke([e, "optionalAccess", t => t.body, "optionalAccess", t => t.parentElement, "optionalAccess", t => t.scrollTop]) || ke([e, "optionalAccess", t => t.body, "optionalAccess", t => t.scrollTop]) || 0
            }
        }

        function Ae() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        }

        function De() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        }

        function Ne(t, e, n, r, s) {
            if (!t) return !1;
            const i = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
            if (!i) return !1;
            const o = ye(e, n);
            if (!s) {
                const t = r && i.matches(r);
                return o(i) && !t
            }
            const a = ge(i, o);
            let c = -1;
            return !(a < 0) && (r && (c = ge(i, ye(null, r))), a > -1 && c < 0 || a < c)
        }

        function Le(t, e) {
            return -2 === e.getId(t)
        }

        function Pe(t, e) {
            if (Bt(t)) return !1;
            const n = e.getId(t);
            return !e.has(n) || (!t.parentNode || t.parentNode.nodeType !== t.DOCUMENT_NODE) && (!t.parentNode || Pe(t.parentNode, e))
        }

        function $e(t) {
            return Boolean(t.changedTouches)
        }

        function Fe(t, e) {
            return Boolean("IFRAME" === t.nodeName && e.getMeta(t))
        }

        function je(t, e) {
            return Boolean("LINK" === t.nodeName && t.nodeType === t.ELEMENT_NODE && t.getAttribute && "stylesheet" === t.getAttribute("rel") && e.getMeta(t))
        }

        function Ue(t) {
            return Boolean(ke([t, "optionalAccess", t => t.shadowRoot]))
        }

        /[1-9][0-9]{12}/.test(Date.now().toString()) || (Me = () => (new Date).getTime());

        class Be {
            constructor() {
                this.id = 1, this.styleIDMap = new WeakMap, this.idStyleMap = new Map
            }

            getId(t) {
                return e = this.styleIDMap.get(t), n = () => -1, null != e ? e : n();
                var e, n
            }

            has(t) {
                return this.styleIDMap.has(t)
            }

            add(t, e) {
                if (this.has(t)) return this.getId(t);
                let n;
                return n = void 0 === e ? this.id++ : e, this.styleIDMap.set(t, n), this.idStyleMap.set(n, t), n
            }

            getStyle(t) {
                return this.idStyleMap.get(t) || null
            }

            reset() {
                this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
            }

            generateId() {
                return this.id++
            }
        }

        function He(t) {
            let e = null;
            return ke([t, "access", t => t.getRootNode, "optionalCall", t => t(), "optionalAccess", t => t.nodeType]) === Node.DOCUMENT_FRAGMENT_NODE && t.getRootNode().host && (e = t.getRootNode().host), e
        }

        function Xe(t) {
            const e = t.ownerDocument;
            if (!e) return !1;
            const n = function (t) {
                let e, n = t;
                for (; e = He(n);) n = e;
                return n
            }(t);
            return e.contains(n)
        }

        function ze(t) {
            const e = t.ownerDocument;
            return !!e && (e.contains(t) || Xe(t))
        }

        function We(...t) {
            return function () {
                if (Re) return Re;
                const t = window.document;
                let e = window.requestAnimationFrame;
                if (t && "function" === typeof t.createElement) try {
                    const n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    const r = n.contentWindow;
                    r && r.requestAnimationFrame && (e = r.requestAnimationFrame), t.head.removeChild(n)
                } catch (n) {
                }
                return Re = e.bind(window)
            }()(...t)
        }

        var qe = (t => (t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t))(qe || {}),
            Ge = (t => (t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t[t.CustomElement = 16] = "CustomElement", t))(Ge || {}),
            Je = (t => (t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t))(Je || {}),
            Ve = (t => (t[t.Mouse = 0] = "Mouse", t[t.Pen = 1] = "Pen", t[t.Touch = 2] = "Touch", t))(Ve || {});

        function Ye(t) {
            let e, n = t[0], r = 1;
            for (; r < t.length;) {
                const s = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...t) => n.call(e, ...t))), e = void 0)
            }
            return n
        }

        function Ke(t) {
            return "__ln" in t
        }

        class Ze {
            constructor() {
                this.length = 0, this.head = null, this.tail = null
            }

            get(t) {
                if (t >= this.length) throw new Error("Position outside of list range");
                let e = this.head;
                for (let n = 0; n < t; n++) e = Ye([e, "optionalAccess", t => t.next]) || null;
                return e
            }

            addNode(t) {
                const e = {value: t, previous: null, next: null};
                if (t.__ln = e, t.previousSibling && Ke(t.previousSibling)) {
                    const n = t.previousSibling.__ln.next;
                    e.next = n, e.previous = t.previousSibling.__ln, t.previousSibling.__ln.next = e, n && (n.previous = e)
                } else if (t.nextSibling && Ke(t.nextSibling) && t.nextSibling.__ln.previous) {
                    const n = t.nextSibling.__ln.previous;
                    e.previous = n, e.next = t.nextSibling.__ln, t.nextSibling.__ln.previous = e, n && (n.next = e)
                } else this.head && (this.head.previous = e), e.next = this.head, this.head = e;
                null === e.next && (this.tail = e), this.length++
            }

            removeNode(t) {
                const e = t.__ln;
                this.head && (e.previous ? (e.previous.next = e.next, e.next ? e.next.previous = e.previous : this.tail = e.previous) : (this.head = e.next, this.head ? this.head.previous = null : this.tail = null), t.__ln && delete t.__ln, this.length--)
            }
        }

        const Qe = (t, e) => `${t}@${e}`;

        class tn {
            constructor() {
                this.frozen = !1, this.locked = !1, this.texts = [], this.attributes = [], this.removes = [], this.mapRemoves = [], this.movedMap = {}, this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.processMutations = t => {
                    t.forEach(this.processMutation), this.emit()
                }, this.emit = () => {
                    if (this.frozen || this.locked) return;
                    const t = [], e = new Set, n = new Ze, r = t => {
                        let e = t, n = -2;
                        for (; -2 === n;) e = e && e.nextSibling, n = e && this.mirror.getId(e);
                        return n
                    }, s = s => {
                        if (!s.parentNode || !ze(s)) return;
                        const i = Bt(s.parentNode) ? this.mirror.getId(He(s)) : this.mirror.getId(s.parentNode),
                            o = r(s);
                        if (-1 === i || -1 === o) return n.addNode(s);
                        const a = Se(s, {
                            doc: this.doc,
                            mirror: this.mirror,
                            blockClass: this.blockClass,
                            blockSelector: this.blockSelector,
                            maskAllText: this.maskAllText,
                            unblockSelector: this.unblockSelector,
                            maskTextClass: this.maskTextClass,
                            unmaskTextClass: this.unmaskTextClass,
                            maskTextSelector: this.maskTextSelector,
                            unmaskTextSelector: this.unmaskTextSelector,
                            skipChild: !0,
                            newlyAddedElement: !0,
                            inlineStylesheet: this.inlineStylesheet,
                            maskInputOptions: this.maskInputOptions,
                            maskAttributeFn: this.maskAttributeFn,
                            maskTextFn: this.maskTextFn,
                            maskInputFn: this.maskInputFn,
                            slimDOMOptions: this.slimDOMOptions,
                            dataURLOptions: this.dataURLOptions,
                            recordCanvas: this.recordCanvas,
                            inlineImages: this.inlineImages,
                            onSerialize: t => {
                                Fe(t, this.mirror) && this.iframeManager.addIframe(t), je(t, this.mirror) && this.stylesheetManager.trackLinkElement(t), Ue(s) && this.shadowDomManager.addShadowRoot(s.shadowRoot, this.doc)
                            },
                            onIframeLoad: (t, e) => {
                                this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
                            },
                            onStylesheetLoad: (t, e) => {
                                this.stylesheetManager.attachLinkElement(t, e)
                            }
                        });
                        a && (t.push({parentId: i, nextId: o, node: a}), e.add(a.id))
                    };
                    for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                    for (const a of this.movedSet) nn(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || s(a);
                    for (const a of this.addedSet) sn(this.droppedSet, a) || nn(this.removes, a, this.mirror) ? sn(this.movedSet, a) ? s(a) : this.droppedSet.add(a) : s(a);
                    let i = null;
                    for (; n.length;) {
                        let t = null;
                        if (i) {
                            const e = this.mirror.getId(i.value.parentNode), n = r(i.value);
                            -1 !== e && -1 !== n && (t = i)
                        }
                        if (!t) {
                            let e = n.tail;
                            for (; e;) {
                                const n = e;
                                if (e = e.previous, n) {
                                    const e = this.mirror.getId(n.value.parentNode);
                                    if (-1 === r(n.value)) continue;
                                    if (-1 !== e) {
                                        t = n;
                                        break
                                    }
                                    {
                                        const e = n.value;
                                        if (e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                                            const r = e.parentNode.host;
                                            if (-1 !== this.mirror.getId(r)) {
                                                t = n;
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (!t) {
                            for (; n.head;) n.removeNode(n.head.value);
                            break
                        }
                        i = t.previous, n.removeNode(t.value), s(t.value)
                    }
                    const o = {
                        texts: this.texts.map((t => ({
                            id: this.mirror.getId(t.node),
                            value: t.value
                        }))).filter((t => !e.has(t.id))).filter((t => this.mirror.has(t.id))),
                        attributes: this.attributes.map((t => {
                            const {attributes: e} = t;
                            if ("string" === typeof e.style) {
                                const n = JSON.stringify(t.styleDiff), r = JSON.stringify(t._unchangedStyles);
                                n.length < e.style.length && (n + r).split("var(").length === e.style.split("var(").length && (e.style = t.styleDiff)
                            }
                            return {id: this.mirror.getId(t.node), attributes: e}
                        })).filter((t => !e.has(t.id))).filter((t => this.mirror.has(t.id))),
                        removes: this.removes,
                        adds: t
                    };
                    (o.texts.length || o.attributes.length || o.removes.length || o.adds.length) && (this.texts = [], this.attributes = [], this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.movedMap = {}, this.mutationCb(o))
                }, this.processMutation = t => {
                    if (Le(t.target, this.mirror)) return;
                    let e;
                    try {
                        e = document.implementation.createHTMLDocument()
                    } catch (n) {
                        e = this.doc
                    }
                    switch (t.type) {
                        case"characterData": {
                            const e = t.target.textContent;
                            Ne(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || e === t.oldValue || this.texts.push({
                                value: _e(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, this.maskAllText) && e ? this.maskTextFn ? this.maskTextFn(e) : e.replace(/[\S]/g, "*") : e,
                                node: t.target
                            });
                            break
                        }
                        case"attributes": {
                            const n = t.target;
                            let r = t.attributeName, s = t.target.getAttribute(r);
                            if ("value" === r) {
                                const e = Kt(n), r = n.tagName;
                                s = Zt(n, r, e);
                                const i = qt({maskInputOptions: this.maskInputOptions, tagName: r, type: e});
                                s = Gt({
                                    isMasked: _e(t.target, this.maskTextClass, this.maskTextSelector, this.unmaskTextClass, this.unmaskTextSelector, i),
                                    element: n,
                                    value: s,
                                    maskInputFn: this.maskInputFn
                                })
                            }
                            if (Ne(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || s === t.oldValue) return;
                            let i = this.attributes.find((e => e.node === t.target));
                            if ("IFRAME" === n.tagName && "src" === r && !this.keepIframeSrcFn(s)) {
                                if (n.contentDocument) return;
                                r = "rr_src"
                            }
                            if (i || (i = {
                                node: t.target,
                                attributes: {},
                                styleDiff: {},
                                _unchangedStyles: {}
                            }, this.attributes.push(i)), "type" === r && "INPUT" === n.tagName && "password" === (t.oldValue || "").toLowerCase() && n.setAttribute("data-rr-is-password", "true"), !me(n.tagName, r) && (i.attributes[r] = fe(this.doc, Jt(n.tagName), Jt(r), s, n, this.maskAttributeFn), "style" === r)) {
                                const r = e.createElement("span");
                                t.oldValue && r.setAttribute("style", t.oldValue);
                                for (const t of Array.from(n.style)) {
                                    const e = n.style.getPropertyValue(t), s = n.style.getPropertyPriority(t);
                                    e !== r.style.getPropertyValue(t) || s !== r.style.getPropertyPriority(t) ? i.styleDiff[t] = "" === s ? e : [e, s] : i._unchangedStyles[t] = [e, s]
                                }
                                for (const t of Array.from(r.style)) "" === n.style.getPropertyValue(t) && (i.styleDiff[t] = !1)
                            }
                            break
                        }
                        case"childList":
                            if (Ne(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !0)) return;
                            t.addedNodes.forEach((e => this.genAdds(e, t.target))), t.removedNodes.forEach((e => {
                                const n = this.mirror.getId(e),
                                    r = Bt(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                Ne(t.target, this.blockClass, this.blockSelector, this.unblockSelector, !1) || Le(e, this.mirror) || !function (t, e) {
                                    return -1 !== e.getId(t)
                                }(e, this.mirror) || (this.addedSet.has(e) ? (en(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || Pe(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[Qe(n, r)] ? en(this.movedSet, e) : this.removes.push({
                                    parentId: r,
                                    id: n,
                                    isShadow: !(!Bt(t.target) || !Ht(t.target)) || void 0
                                })), this.mapRemoves.push(e))
                            }))
                    }
                }, this.genAdds = (t, e) => {
                    if (!this.processedNodeManager.inOtherBuffer(t, this) && !this.addedSet.has(t) && !this.movedSet.has(t)) {
                        if (this.mirror.hasNode(t)) {
                            if (Le(t, this.mirror)) return;
                            this.movedSet.add(t);
                            let n = null;
                            e && this.mirror.hasNode(e) && (n = this.mirror.getId(e)), n && -1 !== n && (this.movedMap[Qe(this.mirror.getId(t), n)] = !0)
                        } else this.addedSet.add(t), this.droppedSet.delete(t);
                        Ne(t, this.blockClass, this.blockSelector, this.unblockSelector, !1) || (t.childNodes.forEach((t => this.genAdds(t))), Ue(t) && t.shadowRoot.childNodes.forEach((e => {
                            this.processedNodeManager.add(e, this), this.genAdds(e, t)
                        })))
                    }
                }
            }

            init(t) {
                ["mutationCb", "blockClass", "blockSelector", "unblockSelector", "maskAllText", "maskTextClass", "unmaskTextClass", "maskTextSelector", "unmaskTextSelector", "inlineStylesheet", "maskInputOptions", "maskAttributeFn", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((e => {
                    this[e] = t[e]
                }))
            }

            freeze() {
                this.frozen = !0, this.canvasManager.freeze()
            }

            unfreeze() {
                this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
            }

            isFrozen() {
                return this.frozen
            }

            lock() {
                this.locked = !0, this.canvasManager.lock()
            }

            unlock() {
                this.locked = !1, this.canvasManager.unlock(), this.emit()
            }

            reset() {
                this.shadowDomManager.reset(), this.canvasManager.reset()
            }
        }

        function en(t, e) {
            t.delete(e), e.childNodes.forEach((e => en(t, e)))
        }

        function nn(t, e, n) {
            return 0 !== t.length && rn(t, e, n)
        }

        function rn(t, e, n) {
            const {parentNode: r} = e;
            if (!r) return !1;
            const s = n.getId(r);
            return !!t.some((t => t.id === s)) || rn(t, r, n)
        }

        function sn(t, e) {
            return 0 !== t.size && on(t, e)
        }

        function on(t, e) {
            const {parentNode: n} = e;
            return !!n && (!!t.has(n) || on(t, n))
        }

        let an;

        function cn(t) {
            an = t
        }

        function un() {
            an = void 0
        }

        const ln = t => {
            if (!an) return t;
            return (...e) => {
                try {
                    return t(...e)
                } catch (n) {
                    if (an && !0 === an(n)) return () => {
                    };
                    throw n
                }
            }
        };

        function dn(t) {
            let e, n = t[0], r = 1;
            for (; r < t.length;) {
                const s = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...t) => n.call(e, ...t))), e = void 0)
            }
            return n
        }

        const pn = [];

        function hn(t) {
            try {
                if ("composedPath" in t) {
                    const e = t.composedPath();
                    if (e.length) return e[0]
                } else if ("path" in t && t.path.length) return t.path[0]
            } catch (e) {
            }
            return t && t.target
        }

        function fn(t, e) {
            const n = new tn;
            pn.push(n), n.init(t);
            let r = window.MutationObserver || window.__rrMutationObserver;
            const s = dn([window, "optionalAccess", t => t.Zone, "optionalAccess", t => t.__symbol__, "optionalCall", t => t("MutationObserver")]);
            s && window[s] && (r = window[s]);
            const i = new r(ln((e => {
                t.onMutation && !1 === t.onMutation(e) || n.processMutations.bind(n)(e)
            })));
            return i.observe(e, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }), i
        }

        function mn({
                        mouseInteractionCb: t,
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: s,
                        unblockSelector: i,
                        sampling: o
                    }) {
            if (!1 === o.mouseInteraction) return () => {
            };
            const a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction, c = [];
            let u = null;
            return Object.keys(Je).filter((t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== a[t])).forEach((o => {
                let a = Jt(o);
                const l = (e => o => {
                    const a = hn(o);
                    if (Ne(a, r, s, i, !0)) return;
                    let c = null, l = e;
                    if ("pointerType" in o) {
                        switch (o.pointerType) {
                            case"mouse":
                                c = Ve.Mouse;
                                break;
                            case"touch":
                                c = Ve.Touch;
                                break;
                            case"pen":
                                c = Ve.Pen
                        }
                        c === Ve.Touch ? Je[e] === Je.MouseDown ? l = "TouchStart" : Je[e] === Je.MouseUp && (l = "TouchEnd") : Ve.Pen
                    } else $e(o) && (c = Ve.Touch);
                    null !== c ? (u = c, (l.startsWith("Touch") && c === Ve.Touch || l.startsWith("Mouse") && c === Ve.Mouse) && (c = null)) : Je[e] === Je.Click && (c = u, u = null);
                    const d = $e(o) ? o.changedTouches[0] : o;
                    if (!d) return;
                    const p = n.getId(a), {clientX: h, clientY: f} = d;
                    ln(t)({type: Je[l], id: p, x: h, y: f, ...null !== c && {pointerType: c}})
                })(o);
                if (window.PointerEvent) switch (Je[o]) {
                    case Je.MouseDown:
                    case Je.MouseUp:
                        a = a.replace("mouse", "pointer");
                        break;
                    case Je.TouchStart:
                    case Je.TouchEnd:
                        return
                }
                c.push(we(a, l, e))
            })), ln((() => {
                c.forEach((t => t()))
            }))
        }

        function gn({
                        scrollCb: t,
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: s,
                        unblockSelector: i,
                        sampling: o
                    }) {
            return we("scroll", ln(Ee(ln((o => {
                const a = hn(o);
                if (!a || Ne(a, r, s, i, !0)) return;
                const c = n.getId(a);
                if (a === e && e.defaultView) {
                    const n = Oe(e.defaultView);
                    t({id: c, x: n.left, y: n.top})
                } else t({id: c, x: a.scrollLeft, y: a.scrollTop})
            })), o.scroll || 100)), e)
        }

        const yn = ["INPUT", "TEXTAREA", "SELECT"], _n = new WeakMap;

        function vn({
                        inputCb: t,
                        doc: e,
                        mirror: n,
                        blockClass: r,
                        blockSelector: s,
                        unblockSelector: i,
                        ignoreClass: o,
                        ignoreSelector: a,
                        maskInputOptions: c,
                        maskInputFn: u,
                        sampling: l,
                        userTriggeredOnInput: d,
                        maskTextClass: p,
                        unmaskTextClass: h,
                        maskTextSelector: f,
                        unmaskTextSelector: m
                    }) {
            function g(t) {
                let n = hn(t);
                const l = t.isTrusted, g = n && Vt(n.tagName);
                if ("OPTION" === g && (n = n.parentElement), !n || !g || yn.indexOf(g) < 0 || Ne(n, r, s, i, !0)) return;
                const _ = n;
                if (_.classList.contains(o) || a && _.matches(a)) return;
                const v = Kt(n);
                let b = Zt(_, g, v), S = !1;
                const k = qt({maskInputOptions: c, tagName: g, type: v}), w = _e(n, p, f, h, m, k);
                "radio" !== v && "checkbox" !== v || (S = n.checked), b = Gt({
                    isMasked: w,
                    element: n,
                    value: b,
                    maskInputFn: u
                }), y(n, d ? {text: b, isChecked: S, userTriggered: l} : {text: b, isChecked: S});
                const T = n.name;
                "radio" === v && T && S && e.querySelectorAll(`input[type="radio"][name="${T}"]`).forEach((t => {
                    if (t !== n) {
                        const e = Gt({isMasked: w, element: t, value: Zt(t, g, v), maskInputFn: u});
                        y(t, d ? {text: e, isChecked: !S, userTriggered: !1} : {text: e, isChecked: !S})
                    }
                }))
            }

            function y(e, r) {
                const s = _n.get(e);
                if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
                    _n.set(e, r);
                    const s = n.getId(e);
                    ln(t)({...r, id: s})
                }
            }

            const _ = ("last" === l.input ? ["change"] : ["input", "change"]).map((t => we(t, ln(g), e))),
                v = e.defaultView;
            if (!v) return () => {
                _.forEach((t => t()))
            };
            const b = v.Object.getOwnPropertyDescriptor(v.HTMLInputElement.prototype, "value"),
                S = [[v.HTMLInputElement.prototype, "value"], [v.HTMLInputElement.prototype, "checked"], [v.HTMLSelectElement.prototype, "value"], [v.HTMLTextAreaElement.prototype, "value"], [v.HTMLSelectElement.prototype, "selectedIndex"], [v.HTMLOptionElement.prototype, "selected"]];
            return b && b.set && _.push(...S.map((t => Ce(t[0], t[1], {
                set() {
                    ln(g)({target: this, isTrusted: !1})
                }
            }, !1, v)))), ln((() => {
                _.forEach((t => t()))
            }))
        }

        function bn(t) {
            return function (t, e) {
                if (Tn("CSSGroupingRule") && t.parentRule instanceof CSSGroupingRule || Tn("CSSMediaRule") && t.parentRule instanceof CSSMediaRule || Tn("CSSSupportsRule") && t.parentRule instanceof CSSSupportsRule || Tn("CSSConditionRule") && t.parentRule instanceof CSSConditionRule) {
                    const n = Array.from(t.parentRule.cssRules).indexOf(t);
                    e.unshift(n)
                } else if (t.parentStyleSheet) {
                    const n = Array.from(t.parentStyleSheet.cssRules).indexOf(t);
                    e.unshift(n)
                }
                return e
            }(t, [])
        }

        function Sn(t, e, n) {
            let r, s;
            return t ? (t.ownerNode ? r = e.getId(t.ownerNode) : s = n.getId(t), {styleId: s, id: r}) : {}
        }

        function kn({mirror: t, stylesheetManager: e}, n) {
            let r = null;
            r = "#document" === n.nodeName ? t.getId(n) : t.getId(n.host);
            const s = "#document" === n.nodeName ? dn([n, "access", t => t.defaultView, "optionalAccess", t => t.Document]) : dn([n, "access", t => t.ownerDocument, "optionalAccess", t => t.defaultView, "optionalAccess", t => t.ShadowRoot]),
                i = dn([s, "optionalAccess", t => t.prototype]) ? Object.getOwnPropertyDescriptor(dn([s, "optionalAccess", t => t.prototype]), "adoptedStyleSheets") : void 0;
            return null !== r && -1 !== r && s && i ? (Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: i.configurable,
                enumerable: i.enumerable,
                get() {
                    return dn([i, "access", t => t.get, "optionalAccess", t => t.call, "call", t => t(this)])
                },
                set(t) {
                    const n = dn([i, "access", t => t.set, "optionalAccess", t => t.call, "call", e => e(this, t)]);
                    if (null !== r && -1 !== r) try {
                        e.adoptStyleSheets(t, r)
                    } catch (s) {
                    }
                    return n
                }
            }), ln((() => {
                Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: i.configurable,
                    enumerable: i.enumerable,
                    get: i.get,
                    set: i.set
                })
            }))) : () => {
            }
        }

        function wn(t, e = {}) {
            const n = t.doc.defaultView;
            if (!n) return () => {
            };
            const r = fn(t, t.doc), s = function ({mousemoveCb: t, sampling: e, doc: n, mirror: r}) {
                if (!1 === e.mousemove) return () => {
                };
                const s = "number" === typeof e.mousemove ? e.mousemove : 50,
                    i = "number" === typeof e.mousemoveCallback ? e.mousemoveCallback : 500;
                let o, a = [];
                const c = Ee(ln((e => {
                    const n = Date.now() - o;
                    t(a.map((t => (t.timeOffset -= n, t))), e), a = [], o = null
                })), i), u = ln(Ee(ln((t => {
                    const e = hn(t), {clientX: n, clientY: s} = $e(t) ? t.changedTouches[0] : t;
                    o || (o = Me()), a.push({
                        x: n,
                        y: s,
                        id: r.getId(e),
                        timeOffset: Me() - o
                    }), c("undefined" !== typeof DragEvent && t instanceof DragEvent ? Ge.Drag : t instanceof MouseEvent ? Ge.MouseMove : Ge.TouchMove)
                })), s, {trailing: !1})), l = [we("mousemove", u, n), we("touchmove", u, n), we("drag", u, n)];
                return ln((() => {
                    l.forEach((t => t()))
                }))
            }(t), i = mn(t), o = gn(t), a = function ({viewportResizeCb: t}, {win: e}) {
                let n = -1, r = -1;
                return we("resize", ln(Ee(ln((() => {
                    const e = Ae(), s = De();
                    n === e && r === s || (t({width: Number(s), height: Number(e)}), n = e, r = s)
                })), 200)), e)
            }(t, {win: n}), c = vn(t), u = function ({
                                                         mediaInteractionCb: t,
                                                         blockClass: e,
                                                         blockSelector: n,
                                                         unblockSelector: r,
                                                         mirror: s,
                                                         sampling: i,
                                                         doc: o
                                                     }) {
                const a = ln((o => Ee(ln((i => {
                        const a = hn(i);
                        if (!a || Ne(a, e, n, r, !0)) return;
                        const {currentTime: c, volume: u, muted: l, playbackRate: d} = a;
                        t({type: o, id: s.getId(a), currentTime: c, volume: u, muted: l, playbackRate: d})
                    })), i.media || 500))),
                    c = [we("play", a(0), o), we("pause", a(1), o), we("seeked", a(2), o), we("volumechange", a(3), o), we("ratechange", a(4), o)];
                return ln((() => {
                    c.forEach((t => t()))
                }))
            }(t), l = function ({styleSheetRuleCb: t, mirror: e, stylesheetManager: n}, {win: r}) {
                if (!r.CSSStyleSheet || !r.CSSStyleSheet.prototype) return () => {
                };
                const s = r.CSSStyleSheet.prototype.insertRule;
                r.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
                    apply: ln(((r, s, i) => {
                        const [o, a] = i, {id: c, styleId: u} = Sn(s, e, n.styleMirror);
                        return (c && -1 !== c || u && -1 !== u) && t({
                            id: c,
                            styleId: u,
                            adds: [{rule: o, index: a}]
                        }), r.apply(s, i)
                    }))
                });
                const i = r.CSSStyleSheet.prototype.deleteRule;
                let o, a;
                r.CSSStyleSheet.prototype.deleteRule = new Proxy(i, {
                    apply: ln(((r, s, i) => {
                        const [o] = i, {id: a, styleId: c} = Sn(s, e, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && t({
                            id: a,
                            styleId: c,
                            removes: [{index: o}]
                        }), r.apply(s, i)
                    }))
                }), r.CSSStyleSheet.prototype.replace && (o = r.CSSStyleSheet.prototype.replace, r.CSSStyleSheet.prototype.replace = new Proxy(o, {
                    apply: ln(((r, s, i) => {
                        const [o] = i, {id: a, styleId: c} = Sn(s, e, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && t({id: a, styleId: c, replace: o}), r.apply(s, i)
                    }))
                })), r.CSSStyleSheet.prototype.replaceSync && (a = r.CSSStyleSheet.prototype.replaceSync, r.CSSStyleSheet.prototype.replaceSync = new Proxy(a, {
                    apply: ln(((r, s, i) => {
                        const [o] = i, {id: a, styleId: c} = Sn(s, e, n.styleMirror);
                        return (a && -1 !== a || c && -1 !== c) && t({id: a, styleId: c, replaceSync: o}), r.apply(s, i)
                    }))
                }));
                const c = {};
                xn("CSSGroupingRule") ? c.CSSGroupingRule = r.CSSGroupingRule : (xn("CSSMediaRule") && (c.CSSMediaRule = r.CSSMediaRule), xn("CSSConditionRule") && (c.CSSConditionRule = r.CSSConditionRule), xn("CSSSupportsRule") && (c.CSSSupportsRule = r.CSSSupportsRule));
                const u = {};
                return Object.entries(c).forEach((([r, s]) => {
                    u[r] = {
                        insertRule: s.prototype.insertRule,
                        deleteRule: s.prototype.deleteRule
                    }, s.prototype.insertRule = new Proxy(u[r].insertRule, {
                        apply: ln(((r, s, i) => {
                            const [o, a] = i, {id: c, styleId: u} = Sn(s.parentStyleSheet, e, n.styleMirror);
                            return (c && -1 !== c || u && -1 !== u) && t({
                                id: c,
                                styleId: u,
                                adds: [{rule: o, index: [...bn(s), a || 0]}]
                            }), r.apply(s, i)
                        }))
                    }), s.prototype.deleteRule = new Proxy(u[r].deleteRule, {
                        apply: ln(((r, s, i) => {
                            const [o] = i, {id: a, styleId: c} = Sn(s.parentStyleSheet, e, n.styleMirror);
                            return (a && -1 !== a || c && -1 !== c) && t({
                                id: a,
                                styleId: c,
                                removes: [{index: [...bn(s), o]}]
                            }), r.apply(s, i)
                        }))
                    })
                })), ln((() => {
                    r.CSSStyleSheet.prototype.insertRule = s, r.CSSStyleSheet.prototype.deleteRule = i, o && (r.CSSStyleSheet.prototype.replace = o), a && (r.CSSStyleSheet.prototype.replaceSync = a), Object.entries(c).forEach((([t, e]) => {
                        e.prototype.insertRule = u[t].insertRule, e.prototype.deleteRule = u[t].deleteRule
                    }))
                }))
            }(t, {win: n}), d = kn(t, t.doc), p = function ({
                                                                styleDeclarationCb: t,
                                                                mirror: e,
                                                                ignoreCSSAttributes: n,
                                                                stylesheetManager: r
                                                            }, {win: s}) {
                const i = s.CSSStyleDeclaration.prototype.setProperty;
                s.CSSStyleDeclaration.prototype.setProperty = new Proxy(i, {
                    apply: ln(((s, o, a) => {
                        const [c, u, l] = a;
                        if (n.has(c)) return i.apply(o, [c, u, l]);
                        const {
                            id: d,
                            styleId: p
                        } = Sn(dn([o, "access", t => t.parentRule, "optionalAccess", t => t.parentStyleSheet]), e, r.styleMirror);
                        return (d && -1 !== d || p && -1 !== p) && t({
                            id: d,
                            styleId: p,
                            set: {property: c, value: u, priority: l},
                            index: bn(o.parentRule)
                        }), s.apply(o, a)
                    }))
                });
                const o = s.CSSStyleDeclaration.prototype.removeProperty;
                return s.CSSStyleDeclaration.prototype.removeProperty = new Proxy(o, {
                    apply: ln(((s, i, a) => {
                        const [c] = a;
                        if (n.has(c)) return o.apply(i, [c]);
                        const {
                            id: u,
                            styleId: l
                        } = Sn(dn([i, "access", t => t.parentRule, "optionalAccess", t => t.parentStyleSheet]), e, r.styleMirror);
                        return (u && -1 !== u || l && -1 !== l) && t({
                            id: u,
                            styleId: l,
                            remove: {property: c},
                            index: bn(i.parentRule)
                        }), s.apply(i, a)
                    }))
                }), ln((() => {
                    s.CSSStyleDeclaration.prototype.setProperty = i, s.CSSStyleDeclaration.prototype.removeProperty = o
                }))
            }(t, {win: n}), h = t.collectFonts ? function ({fontCb: t, doc: e}) {
                const n = e.defaultView;
                if (!n) return () => {
                };
                const r = [], s = new WeakMap, i = n.FontFace;
                n.FontFace = function (t, e, n) {
                    const r = new i(t, e, n);
                    return s.set(r, {
                        family: t,
                        buffer: "string" !== typeof e,
                        descriptors: n,
                        fontSource: "string" === typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                    }), r
                };
                const o = Ie(e.fonts, "add", (function (e) {
                    return function (n) {
                        return setTimeout(ln((() => {
                            const e = s.get(n);
                            e && (t(e), s.delete(n))
                        })), 0), e.apply(this, [n])
                    }
                }));
                return r.push((() => {
                    n.FontFace = i
                })), r.push(o), ln((() => {
                    r.forEach((t => t()))
                }))
            }(t) : () => {
            }, f = function (t) {
                const {doc: e, mirror: n, blockClass: r, blockSelector: s, unblockSelector: i, selectionCb: o} = t;
                let a = !0;
                const c = ln((() => {
                    const t = e.getSelection();
                    if (!t || a && dn([t, "optionalAccess", t => t.isCollapsed])) return;
                    a = t.isCollapsed || !1;
                    const c = [], u = t.rangeCount || 0;
                    for (let e = 0; e < u; e++) {
                        const o = t.getRangeAt(e), {
                            startContainer: a,
                            startOffset: u,
                            endContainer: l,
                            endOffset: d
                        } = o;
                        Ne(a, r, s, i, !0) || Ne(l, r, s, i, !0) || c.push({
                            start: n.getId(a),
                            startOffset: u,
                            end: n.getId(l),
                            endOffset: d
                        })
                    }
                    o({ranges: c})
                }));
                return c(), we("selectionchange", c)
            }(t), m = function ({doc: t, customElementCb: e}) {
                const n = t.defaultView;
                return n && n.customElements ? Ie(n.customElements, "define", (function (t) {
                    return function (n, r, s) {
                        try {
                            e({define: {name: n}})
                        } catch (i) {
                        }
                        return t.apply(this, [n, r, s])
                    }
                })) : () => {
                }
            }(t), g = [];
            for (const y of t.plugins) g.push(y.observer(y.callback, n, y.options));
            return ln((() => {
                pn.forEach((t => t.reset())), r.disconnect(), s(), i(), o(), a(), c(), u(), l(), d(), p(), h(), f(), m(), g.forEach((t => t()))
            }))
        }

        function Tn(t) {
            return "undefined" !== typeof window[t]
        }

        function xn(t) {
            return Boolean("undefined" !== typeof window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
        }

        class En {
            constructor(t) {
                this.generateIdFn = t, this.iframeIdToRemoteIdMap = new WeakMap, this.iframeRemoteIdToIdMap = new WeakMap
            }

            getId(t, e, n, r) {
                const s = n || this.getIdToRemoteIdMap(t), i = r || this.getRemoteIdToIdMap(t);
                let o = s.get(e);
                return o || (o = this.generateIdFn(), s.set(e, o), i.set(o, e)), o
            }

            getIds(t, e) {
                const n = this.getIdToRemoteIdMap(t), r = this.getRemoteIdToIdMap(t);
                return e.map((e => this.getId(t, e, n, r)))
            }

            getRemoteId(t, e, n) {
                const r = n || this.getRemoteIdToIdMap(t);
                if ("number" !== typeof e) return e;
                const s = r.get(e);
                return s || -1
            }

            getRemoteIds(t, e) {
                const n = this.getRemoteIdToIdMap(t);
                return e.map((e => this.getRemoteId(t, e, n)))
            }

            reset(t) {
                if (!t) return this.iframeIdToRemoteIdMap = new WeakMap, void (this.iframeRemoteIdToIdMap = new WeakMap);
                this.iframeIdToRemoteIdMap.delete(t), this.iframeRemoteIdToIdMap.delete(t)
            }

            getIdToRemoteIdMap(t) {
                let e = this.iframeIdToRemoteIdMap.get(t);
                return e || (e = new Map, this.iframeIdToRemoteIdMap.set(t, e)), e
            }

            getRemoteIdToIdMap(t) {
                let e = this.iframeRemoteIdToIdMap.get(t);
                return e || (e = new Map, this.iframeRemoteIdToIdMap.set(t, e)), e
            }
        }

        function Cn(t) {
            let e, n = t[0], r = 1;
            for (; r < t.length;) {
                const s = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...t) => n.call(e, ...t))), e = void 0)
            }
            return n
        }

        class In {
            constructor() {
                this.crossOriginIframeMirror = new En(ee), this.crossOriginIframeRootIdMap = new WeakMap
            }

            addIframe() {
            }

            addLoadListener() {
            }

            attachIframe() {
            }
        }

        class Rn {
            constructor(t) {
                this.iframes = new WeakMap, this.crossOriginIframeMap = new WeakMap, this.crossOriginIframeMirror = new En(ee), this.crossOriginIframeRootIdMap = new WeakMap, this.mutationCb = t.mutationCb, this.wrappedEmit = t.wrappedEmit, this.stylesheetManager = t.stylesheetManager, this.recordCrossOriginIframes = t.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new En(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = t.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
            }

            addIframe(t) {
                this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t)
            }

            addLoadListener(t) {
                this.loadListener = t
            }

            attachIframe(t, e) {
                this.mutationCb({
                    adds: [{parentId: this.mirror.getId(t), nextId: null, node: e}],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }), Cn([this, "access", t => t.loadListener, "optionalCall", e => e(t)]), t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument))
            }

            handleMessage(t) {
                const e = t;
                if ("rrweb" !== e.data.type || e.origin !== e.data.origin) return;
                if (!t.source) return;
                const n = this.crossOriginIframeMap.get(t.source);
                if (!n) return;
                const r = this.transformCrossOriginEvent(n, e.data.event);
                r && this.wrappedEmit(r, e.data.isCheckout)
            }

            transformCrossOriginEvent(t, e) {
                switch (e.type) {
                    case qe.FullSnapshot: {
                        this.crossOriginIframeMirror.reset(t), this.crossOriginIframeStyleMirror.reset(t), this.replaceIdOnNode(e.data.node, t);
                        const n = e.data.node.id;
                        return this.crossOriginIframeRootIdMap.set(t, n), this.patchRootIdOnNode(e.data.node, n), {
                            timestamp: e.timestamp,
                            type: qe.IncrementalSnapshot,
                            data: {
                                source: Ge.Mutation,
                                adds: [{parentId: this.mirror.getId(t), nextId: null, node: e.data.node}],
                                removes: [],
                                texts: [],
                                attributes: [],
                                isAttachIframe: !0
                            }
                        }
                    }
                    case qe.Meta:
                    case qe.Load:
                    case qe.DomContentLoaded:
                        return !1;
                    case qe.Plugin:
                        return e;
                    case qe.Custom:
                        return this.replaceIds(e.data.payload, t, ["id", "parentId", "previousId", "nextId"]), e;
                    case qe.IncrementalSnapshot:
                        switch (e.data.source) {
                            case Ge.Mutation:
                                return e.data.adds.forEach((e => {
                                    this.replaceIds(e, t, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(e.node, t);
                                    const n = this.crossOriginIframeRootIdMap.get(t);
                                    n && this.patchRootIdOnNode(e.node, n)
                                })), e.data.removes.forEach((e => {
                                    this.replaceIds(e, t, ["parentId", "id"])
                                })), e.data.attributes.forEach((e => {
                                    this.replaceIds(e, t, ["id"])
                                })), e.data.texts.forEach((e => {
                                    this.replaceIds(e, t, ["id"])
                                })), e;
                            case Ge.Drag:
                            case Ge.TouchMove:
                            case Ge.MouseMove:
                                return e.data.positions.forEach((e => {
                                    this.replaceIds(e, t, ["id"])
                                })), e;
                            case Ge.ViewportResize:
                                return !1;
                            case Ge.MediaInteraction:
                            case Ge.MouseInteraction:
                            case Ge.Scroll:
                            case Ge.CanvasMutation:
                            case Ge.Input:
                                return this.replaceIds(e.data, t, ["id"]), e;
                            case Ge.StyleSheetRule:
                            case Ge.StyleDeclaration:
                                return this.replaceIds(e.data, t, ["id"]), this.replaceStyleIds(e.data, t, ["styleId"]), e;
                            case Ge.Font:
                                return e;
                            case Ge.Selection:
                                return e.data.ranges.forEach((e => {
                                    this.replaceIds(e, t, ["start", "end"])
                                })), e;
                            case Ge.AdoptedStyleSheet:
                                return this.replaceIds(e.data, t, ["id"]), this.replaceStyleIds(e.data, t, ["styleIds"]), Cn([e, "access", t => t.data, "access", t => t.styles, "optionalAccess", t => t.forEach, "call", e => e((e => {
                                    this.replaceStyleIds(e, t, ["styleId"])
                                }))]), e
                        }
                }
                return !1
            }

            replace(t, e, n, r) {
                for (const s of r) (Array.isArray(e[s]) || "number" === typeof e[s]) && (Array.isArray(e[s]) ? e[s] = t.getIds(n, e[s]) : e[s] = t.getId(n, e[s]));
                return e
            }

            replaceIds(t, e, n) {
                return this.replace(this.crossOriginIframeMirror, t, e, n)
            }

            replaceStyleIds(t, e, n) {
                return this.replace(this.crossOriginIframeStyleMirror, t, e, n)
            }

            replaceIdOnNode(t, e) {
                this.replaceIds(t, e, ["id", "rootId"]), "childNodes" in t && t.childNodes.forEach((t => {
                    this.replaceIdOnNode(t, e)
                }))
            }

            patchRootIdOnNode(t, e) {
                t.type === Ut.Document || t.rootId || (t.rootId = e), "childNodes" in t && t.childNodes.forEach((t => {
                    this.patchRootIdOnNode(t, e)
                }))
            }
        }

        class Mn {
            init() {
            }

            addShadowRoot() {
            }

            observeAttachShadow() {
            }

            reset() {
            }
        }

        class On {
            constructor(t) {
                this.shadowDoms = new WeakSet, this.restoreHandlers = [], this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror, this.init()
            }

            init() {
                this.reset(), this.patchAttachShadow(Element, document)
            }

            addShadowRoot(t, e) {
                if (!Ht(t)) return;
                if (this.shadowDoms.has(t)) return;
                this.shadowDoms.add(t);
                const n = fn({
                    ...this.bypassOptions,
                    doc: e,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }, t);
                this.restoreHandlers.push((() => n.disconnect())), this.restoreHandlers.push(gn({
                    ...this.bypassOptions,
                    scrollCb: this.scrollCb,
                    doc: t,
                    mirror: this.mirror
                })), setTimeout((() => {
                    t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)), this.restoreHandlers.push(kn({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, t))
                }), 0)
            }

            observeAttachShadow(t) {
                t.contentWindow && t.contentDocument && this.patchAttachShadow(t.contentWindow.Element, t.contentDocument)
            }

            patchAttachShadow(t, e) {
                const n = this;
                this.restoreHandlers.push(Ie(t.prototype, "attachShadow", (function (t) {
                    return function (r) {
                        const s = t.call(this, r);
                        return this.shadowRoot && ze(this) && n.addShadowRoot(this.shadowRoot, e), s
                    }
                })))
            }

            reset() {
                this.restoreHandlers.forEach((t => {
                    try {
                        t()
                    } catch (e) {
                    }
                })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
            }
        }

        class An {
            reset() {
            }

            freeze() {
            }

            unfreeze() {
            }

            lock() {
            }

            unlock() {
            }

            snapshot() {
            }
        }

        class Dn {
            constructor(t) {
                this.trackedLinkElements = new WeakSet, this.styleMirror = new Be, this.mutationCb = t.mutationCb, this.adoptedStyleSheetCb = t.adoptedStyleSheetCb
            }

            attachLinkElement(t, e) {
                "_cssText" in e.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{id: e.id, attributes: e.attributes}]
                }), this.trackLinkElement(t)
            }

            trackLinkElement(t) {
                this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t))
            }

            adoptStyleSheets(t, e) {
                if (0 === t.length) return;
                const n = {id: e, styleIds: []}, r = [];
                for (const s of t) {
                    let t;
                    this.styleMirror.has(s) ? t = this.styleMirror.getId(s) : (t = this.styleMirror.add(s), r.push({
                        styleId: t,
                        rules: Array.from(s.rules || CSSRule, ((t, e) => ({rule: zt(t), index: e})))
                    })), n.styleIds.push(t)
                }
                r.length > 0 && (n.styles = r), this.adoptedStyleSheetCb(n)
            }

            reset() {
                this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
            }

            trackStylesheetInLinkElement(t) {
            }
        }

        class Nn {
            constructor() {
                this.nodeMap = new WeakMap, this.loop = !0, this.periodicallyClear()
            }

            periodicallyClear() {
                We((() => {
                    this.clear(), this.loop && this.periodicallyClear()
                }))
            }

            inOtherBuffer(t, e) {
                const n = this.nodeMap.get(t);
                return n && Array.from(n).some((t => t !== e))
            }

            add(t, e) {
                this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(e))
            }

            clear() {
                this.nodeMap = new WeakMap
            }

            destroy() {
                this.loop = !1
            }
        }

        function Ln(t) {
            const e = t;
            return e.timestamp = Me(), e
        }

        let Pn;
        const $n = new Wt;

        function Fn(t = {}) {
            const {
                emit: e,
                checkoutEveryNms: n,
                checkoutEveryNth: r,
                blockClass: s = "rr-block",
                blockSelector: i = null,
                unblockSelector: o = null,
                ignoreClass: a = "rr-ignore",
                ignoreSelector: c = null,
                maskAllText: u = !1,
                maskTextClass: l = "rr-mask",
                unmaskTextClass: d = null,
                maskTextSelector: p = null,
                unmaskTextSelector: h = null,
                inlineStylesheet: f = !0,
                maskAllInputs: m,
                maskInputOptions: g,
                slimDOMOptions: y,
                maskAttributeFn: _,
                maskInputFn: v,
                maskTextFn: b,
                packFn: S,
                sampling: k = {},
                dataURLOptions: w = {},
                mousemoveWait: T,
                recordCanvas: x = !1,
                recordCrossOriginIframes: E = !1,
                recordAfter: C = ("DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load"),
                userTriggeredOnInput: I = !1,
                collectFonts: R = !1,
                inlineImages: M = !1,
                plugins: O,
                keepIframeSrcFn: A = (() => !1),
                ignoreCSSAttributes: D = new Set([]),
                errorHandler: N,
                onMutation: L,
                getCanvasManager: P
            } = t;
            cn(N);
            const $ = !E || window.parent === window;
            let F = !1;
            if (!$) try {
                window.parent.document && (F = !1)
            } catch (tt) {
                F = !0
            }
            if ($ && !e) throw new Error("emit function is required");
            void 0 !== T && void 0 === k.mousemove && (k.mousemove = T), $n.reset();
            const j = !0 === m ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                radio: !0,
                checkbox: !0
            } : void 0 !== g ? g : {}, U = !0 === y || "all" === y ? {
                script: !0,
                comment: !0,
                headFavicon: !0,
                headWhitespace: !0,
                headMetaSocial: !0,
                headMetaRobots: !0,
                headMetaHttpEquiv: !0,
                headMetaVerification: !0,
                headMetaAuthorship: "all" === y,
                headMetaDescKeywords: "all" === y
            } : y || {};
            let B;
            !function (t = window) {
                "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = Array.prototype.forEach), Node.prototype.contains || (Node.prototype.contains = (...t) => {
                    let e = t[0];
                    if (!(0 in t)) throw new TypeError("1 argument is required");
                    do {
                        if (this === e) return !0
                    } while (e = e && e.parentNode);
                    return !1
                })
            }();
            let H = 0;
            const X = t => {
                    for (const e of O || []) e.eventProcessor && (t = e.eventProcessor(t));
                    return S && !F && (t = S(t)), t
                }, z = (t, s) => {
                    if (!(0, mt.x)([pn, "access", t => t[0], "optionalAccess", t => t.isFrozen, "call", t => t()]) || t.type === qe.FullSnapshot || t.type === qe.IncrementalSnapshot && t.data.source === Ge.Mutation || pn.forEach((t => t.unfreeze())), $) (0, mt.x)([e, "optionalCall", e => e(X(t), s)]); else if (F) {
                        const e = {type: "rrweb", event: X(t), origin: window.location.origin, isCheckout: s};
                        window.parent.postMessage(e, "*")
                    }
                    if (t.type === qe.FullSnapshot) B = t, H = 0; else if (t.type === qe.IncrementalSnapshot) {
                        if (t.data.source === Ge.Mutation && t.data.isAttachIframe) return;
                        H++;
                        const e = r && H >= r, s = n && t.timestamp - B.timestamp > n;
                        (e || s) && Q(!0)
                    }
                }, W = t => {
                    z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.Mutation, ...t}}))
                }, q = t => z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.Scroll, ...t}})),
                G = t => z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.CanvasMutation, ...t}})), J = new Dn({
                    mutationCb: W,
                    adoptedStyleSheetCb: t => z(Ln({
                        type: qe.IncrementalSnapshot,
                        data: {source: Ge.AdoptedStyleSheet, ...t}
                    }))
                }), V = "boolean" === typeof __RRWEB_EXCLUDE_IFRAME__ && __RRWEB_EXCLUDE_IFRAME__ ? new In : new Rn({
                    mirror: $n,
                    mutationCb: W,
                    stylesheetManager: J,
                    recordCrossOriginIframes: E,
                    wrappedEmit: z
                });
            for (const nt of O || []) nt.getMirror && nt.getMirror({
                nodeMirror: $n,
                crossOriginIframeMirror: V.crossOriginIframeMirror,
                crossOriginIframeStyleMirror: V.crossOriginIframeStyleMirror
            });
            const Y = new Nn, K = function (t, e) {
                    try {
                        return t ? t(e) : new An
                    } catch (n) {
                        return console.warn("Unable to initialize CanvasManager"), new An
                    }
                }(P, {
                    mirror: $n,
                    win: window,
                    mutationCb: t => z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.CanvasMutation, ...t}})),
                    recordCanvas: x,
                    blockClass: s,
                    blockSelector: i,
                    unblockSelector: o,
                    sampling: k.canvas,
                    dataURLOptions: w,
                    errorHandler: N
                }),
                Z = "boolean" === typeof __RRWEB_EXCLUDE_SHADOW_DOM__ && __RRWEB_EXCLUDE_SHADOW_DOM__ ? new Mn : new On({
                    mutationCb: W,
                    scrollCb: q,
                    bypassOptions: {
                        onMutation: L,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskAllText: u,
                        maskTextClass: l,
                        unmaskTextClass: d,
                        maskTextSelector: p,
                        unmaskTextSelector: h,
                        inlineStylesheet: f,
                        maskInputOptions: j,
                        dataURLOptions: w,
                        maskAttributeFn: _,
                        maskTextFn: b,
                        maskInputFn: v,
                        recordCanvas: x,
                        inlineImages: M,
                        sampling: k,
                        slimDOMOptions: U,
                        iframeManager: V,
                        stylesheetManager: J,
                        canvasManager: K,
                        keepIframeSrcFn: A,
                        processedNodeManager: Y
                    },
                    mirror: $n
                }), Q = (t = !1) => {
                    z(Ln({
                        type: qe.Meta,
                        data: {href: window.location.href, width: De(), height: Ae()}
                    }), t), J.reset(), Z.init(), pn.forEach((t => t.lock()));
                    const e = function (t, e) {
                        const {
                            mirror: n = new Wt,
                            blockClass: r = "rr-block",
                            blockSelector: s = null,
                            unblockSelector: i = null,
                            maskAllText: o = !1,
                            maskTextClass: a = "rr-mask",
                            unmaskTextClass: c = null,
                            maskTextSelector: u = null,
                            unmaskTextSelector: l = null,
                            inlineStylesheet: d = !0,
                            inlineImages: p = !1,
                            recordCanvas: h = !1,
                            maskAllInputs: f = !1,
                            maskAttributeFn: m,
                            maskTextFn: g,
                            maskInputFn: y,
                            slimDOM: _ = !1,
                            dataURLOptions: v,
                            preserveWhiteSpace: b,
                            onSerialize: S,
                            onIframeLoad: k,
                            iframeLoadTimeout: w,
                            onStylesheetLoad: T,
                            stylesheetLoadTimeout: x,
                            keepIframeSrcFn: E = (() => !1)
                        } = e || {};
                        return Se(t, {
                            doc: t,
                            mirror: n,
                            blockClass: r,
                            blockSelector: s,
                            unblockSelector: i,
                            maskAllText: o,
                            maskTextClass: a,
                            unmaskTextClass: c,
                            maskTextSelector: u,
                            unmaskTextSelector: l,
                            skipChild: !1,
                            inlineStylesheet: d,
                            maskInputOptions: !0 === f ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0
                            } : !1 === f ? {} : f,
                            maskAttributeFn: m,
                            maskTextFn: g,
                            maskInputFn: y,
                            slimDOMOptions: !0 === _ || "all" === _ ? {
                                script: !0,
                                comment: !0,
                                headFavicon: !0,
                                headWhitespace: !0,
                                headMetaDescKeywords: "all" === _,
                                headMetaSocial: !0,
                                headMetaRobots: !0,
                                headMetaHttpEquiv: !0,
                                headMetaAuthorship: !0,
                                headMetaVerification: !0
                            } : !1 === _ ? {} : _,
                            dataURLOptions: v,
                            inlineImages: p,
                            recordCanvas: h,
                            preserveWhiteSpace: b,
                            onSerialize: S,
                            onIframeLoad: k,
                            iframeLoadTimeout: w,
                            onStylesheetLoad: T,
                            stylesheetLoadTimeout: x,
                            keepIframeSrcFn: E,
                            newlyAddedElement: !1
                        })
                    }(document, {
                        mirror: $n,
                        blockClass: s,
                        blockSelector: i,
                        unblockSelector: o,
                        maskAllText: u,
                        maskTextClass: l,
                        unmaskTextClass: d,
                        maskTextSelector: p,
                        unmaskTextSelector: h,
                        inlineStylesheet: f,
                        maskAllInputs: j,
                        maskAttributeFn: _,
                        maskInputFn: v,
                        maskTextFn: b,
                        slimDOM: U,
                        dataURLOptions: w,
                        recordCanvas: x,
                        inlineImages: M,
                        onSerialize: t => {
                            Fe(t, $n) && V.addIframe(t), je(t, $n) && J.trackLinkElement(t), Ue(t) && Z.addShadowRoot(t.shadowRoot, document)
                        },
                        onIframeLoad: (t, e) => {
                            V.attachIframe(t, e), Z.observeAttachShadow(t)
                        },
                        onStylesheetLoad: (t, e) => {
                            J.attachLinkElement(t, e)
                        },
                        keepIframeSrcFn: A
                    });
                    if (!e) return console.warn("Failed to snapshot the document");
                    z(Ln({
                        type: qe.FullSnapshot,
                        data: {node: e, initialOffset: Oe(window)}
                    })), pn.forEach((t => t.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && J.adoptStyleSheets(document.adoptedStyleSheets, $n.getId(document))
                };
            Pn = Q;
            try {
                const t = [], e = t => ln(wn)({
                    onMutation: L,
                    mutationCb: W,
                    mousemoveCb: (t, e) => z(Ln({type: qe.IncrementalSnapshot, data: {source: e, positions: t}})),
                    mouseInteractionCb: t => z(Ln({
                        type: qe.IncrementalSnapshot,
                        data: {source: Ge.MouseInteraction, ...t}
                    })),
                    scrollCb: q,
                    viewportResizeCb: t => z(Ln({
                        type: qe.IncrementalSnapshot,
                        data: {source: Ge.ViewportResize, ...t}
                    })),
                    inputCb: t => z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.Input, ...t}})),
                    mediaInteractionCb: t => z(Ln({
                        type: qe.IncrementalSnapshot,
                        data: {source: Ge.MediaInteraction, ...t}
                    })),
                    styleSheetRuleCb: t => z(Ln({
                        type: qe.IncrementalSnapshot,
                        data: {source: Ge.StyleSheetRule, ...t}
                    })),
                    styleDeclarationCb: t => z(Ln({
                        type: qe.IncrementalSnapshot,
                        data: {source: Ge.StyleDeclaration, ...t}
                    })),
                    canvasMutationCb: G,
                    fontCb: t => z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.Font, ...t}})),
                    selectionCb: t => {
                        z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.Selection, ...t}}))
                    },
                    customElementCb: t => {
                        z(Ln({type: qe.IncrementalSnapshot, data: {source: Ge.CustomElement, ...t}}))
                    },
                    blockClass: s,
                    ignoreClass: a,
                    ignoreSelector: c,
                    maskAllText: u,
                    maskTextClass: l,
                    unmaskTextClass: d,
                    maskTextSelector: p,
                    unmaskTextSelector: h,
                    maskInputOptions: j,
                    inlineStylesheet: f,
                    sampling: k,
                    recordCanvas: x,
                    inlineImages: M,
                    userTriggeredOnInput: I,
                    collectFonts: R,
                    doc: t,
                    maskAttributeFn: _,
                    maskInputFn: v,
                    maskTextFn: b,
                    keepIframeSrcFn: A,
                    blockSelector: i,
                    unblockSelector: o,
                    slimDOMOptions: U,
                    dataURLOptions: w,
                    mirror: $n,
                    iframeManager: V,
                    stylesheetManager: J,
                    shadowDomManager: Z,
                    processedNodeManager: Y,
                    canvasManager: K,
                    ignoreCSSAttributes: D,
                    plugins: (0, mt.x)([O, "optionalAccess", t => t.filter, "call", t => t((t => t.observer)), "optionalAccess", t => t.map, "call", t => t((t => ({
                        observer: t.observer,
                        options: t.options,
                        callback: e => z(Ln({type: qe.Plugin, data: {plugin: t.name, payload: e}}))
                    })))]) || []
                }, {});
                V.addLoadListener((n => {
                    try {
                        t.push(e(n.contentDocument))
                    } catch (r) {
                        console.warn(r)
                    }
                }));
                const n = () => {
                    Q(), t.push(e(document))
                };
                return "interactive" === document.readyState || "complete" === document.readyState ? n() : (t.push(we("DOMContentLoaded", (() => {
                    z(Ln({type: qe.DomContentLoaded, data: {}})), "DOMContentLoaded" === C && n()
                }))), t.push(we("load", (() => {
                    z(Ln({type: qe.Load, data: {}})), "load" === C && n()
                }), window))), () => {
                    t.forEach((t => t())), Y.destroy(), Pn = void 0, un()
                }
            } catch (et) {
                console.warn(et)
            }
        }

        Fn.mirror = $n, Fn.takeFullSnapshot = function (t) {
            if (!Pn) throw new Error("please take full snapshot after start recording");
            Pn(t)
        };

        function jn(t) {
            return t > 9999999999 ? t : 1e3 * t
        }

        function Un(t) {
            return t > 9999999999 ? t / 1e3 : t
        }

        function Bn(t, e) {
            "sentry.transaction" !== e.category && (["ui.click", "ui.input"].includes(e.category) ? t.triggerUserActivity() : t.checkAndHandleExpiredSession(), t.addUpdate((() => (t.throttledAddEvent({
                type: qe.Custom,
                timestamp: 1e3 * (e.timestamp || 0),
                data: {tag: "breadcrumb", payload: (0, vt.Fv)(e, 10, 1e3)}
            }), "console" === e.category))))
        }

        function Hn(t) {
            return t.closest("button,a") || t
        }

        function Xn(t) {
            const e = zn(t);
            return e && e instanceof Element ? Hn(e) : e
        }

        function zn(t) {
            return function (t) {
                return "object" === typeof t && !!t && "target" in t
            }(t) ? t.target : t
        }

        let Wn;

        function qn(t) {
            return Wn || (Wn = [], (0, bt.hl)(At, "open", (function (t) {
                return function (...e) {
                    if (Wn) try {
                        Wn.forEach((t => t()))
                    } catch (n) {
                    }
                    return t.apply(At, e)
                }
            }))), Wn.push(t), () => {
                const e = Wn ? Wn.indexOf(t) : -1;
                e > -1 && Wn.splice(e, 1)
            }
        }

        class Gn {
            constructor(t, e, n = Bn) {
                this._lastMutation = 0, this._lastScroll = 0, this._clicks = [], this._timeout = e.timeout / 1e3, this._threshold = e.threshold / 1e3, this._scollTimeout = e.scrollTimeout / 1e3, this._replay = t, this._ignoreSelector = e.ignoreSelector, this._addBreadcrumbEvent = n
            }

            addListeners() {
                const t = qn((() => {
                    this._lastMutation = Vn()
                }));
                this._teardown = () => {
                    t(), this._clicks = [], this._lastMutation = 0, this._lastScroll = 0
                }
            }

            removeListeners() {
                this._teardown && this._teardown(), this._checkClickTimeout && clearTimeout(this._checkClickTimeout)
            }

            handleClick(t, e) {
                if (function (t, e) {
                    if (!Jn.includes(t.tagName)) return !0;
                    if ("INPUT" === t.tagName && !["submit", "button"].includes(t.getAttribute("type") || "")) return !0;
                    if ("A" === t.tagName && (t.hasAttribute("download") || t.hasAttribute("target") && "_self" !== t.getAttribute("target"))) return !0;
                    if (e && t.matches(e)) return !0;
                    return !1
                }(e, this._ignoreSelector) || !function (t) {
                    return !(!t.data || "number" !== typeof t.data.nodeId || !t.timestamp)
                }(t)) return;
                const n = {timestamp: Un(t.timestamp), clickBreadcrumb: t, clickCount: 0, node: e};
                this._clicks.some((t => t.node === n.node && Math.abs(t.timestamp - n.timestamp) < 1)) || (this._clicks.push(n), 1 === this._clicks.length && this._scheduleCheckClicks())
            }

            registerMutation(t = Date.now()) {
                this._lastMutation = Un(t)
            }

            registerScroll(t = Date.now()) {
                this._lastScroll = Un(t)
            }

            registerClick(t) {
                const e = Hn(t);
                this._handleMultiClick(e)
            }

            _handleMultiClick(t) {
                this._getClicks(t).forEach((t => {
                    t.clickCount++
                }))
            }

            _getClicks(t) {
                return this._clicks.filter((e => e.node === t))
            }

            _checkClicks() {
                const t = [], e = Vn();
                this._clicks.forEach((n => {
                    !n.mutationAfter && this._lastMutation && (n.mutationAfter = n.timestamp <= this._lastMutation ? this._lastMutation - n.timestamp : void 0), !n.scrollAfter && this._lastScroll && (n.scrollAfter = n.timestamp <= this._lastScroll ? this._lastScroll - n.timestamp : void 0), n.timestamp + this._timeout <= e && t.push(n)
                }));
                for (const n of t) {
                    const t = this._clicks.indexOf(n);
                    t > -1 && (this._generateBreadcrumbs(n), this._clicks.splice(t, 1))
                }
                this._clicks.length && this._scheduleCheckClicks()
            }

            _generateBreadcrumbs(t) {
                const e = this._replay, n = t.scrollAfter && t.scrollAfter <= this._scollTimeout,
                    r = t.mutationAfter && t.mutationAfter <= this._threshold, s = !n && !r, {
                        clickCount: i,
                        clickBreadcrumb: o
                    } = t;
                if (s) {
                    const n = 1e3 * Math.min(t.mutationAfter || this._timeout, this._timeout),
                        r = n < 1e3 * this._timeout ? "mutation" : "timeout", s = {
                            type: "default",
                            message: o.message,
                            timestamp: o.timestamp,
                            category: "ui.slowClickDetected",
                            data: {
                                ...o.data,
                                url: At.location.href,
                                route: e.getCurrentRoute(),
                                timeAfterClickMs: n,
                                endReason: r,
                                clickCount: i || 1
                            }
                        };
                    this._addBreadcrumbEvent(e, s)
                } else if (i > 1) {
                    const t = {
                        type: "default",
                        message: o.message,
                        timestamp: o.timestamp,
                        category: "ui.multiClick",
                        data: {...o.data, url: At.location.href, route: e.getCurrentRoute(), clickCount: i, metric: !0}
                    };
                    this._addBreadcrumbEvent(e, t)
                }
            }

            _scheduleCheckClicks() {
                this._checkClickTimeout && clearTimeout(this._checkClickTimeout), this._checkClickTimeout = setTimeout((() => this._checkClicks()), 1e3)
            }
        }

        const Jn = ["A", "BUTTON", "INPUT"];

        function Vn() {
            return Date.now() / 1e3
        }

        function Yn(t, e) {
            try {
                if (!function (t) {
                    return 3 === t.type
                }(e)) return;
                const {source: n} = e.data;
                if (n === Ge.Mutation && t.registerMutation(e.timestamp), n === Ge.Scroll && t.registerScroll(e.timestamp), function (t) {
                    return t.data.source === Ge.MouseInteraction
                }(e)) {
                    const {type: n, id: r} = e.data, s = Fn.mirror.getNode(r);
                    s instanceof HTMLElement && n === Je.Click && t.registerClick(s)
                }
            } catch (n) {
            }
        }

        function Kn(t) {
            return {timestamp: Date.now() / 1e3, type: "default", ...t}
        }

        var Zn;
        !function (t) {
            t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
        }(Zn || (Zn = {}));
        const Qn = new Set(["id", "class", "aria-label", "role", "name", "alt", "title", "data-test-id", "data-testid", "disabled", "aria-disabled", "data-sentry-component"]);

        function tr(t) {
            const e = {};
            for (const n in t) if (Qn.has(n)) {
                let r = n;
                "data-testid" !== n && "data-test-id" !== n || (r = "testId"), e[r] = t[n]
            }
            return e
        }

        const er = t => e => {
            if (!t.isEnabled()) return;
            const n = function (t) {
                const {target: e, message: n} = function (t) {
                    const e = "click" === t.name;
                    let n, r = null;
                    try {
                        r = e ? Xn(t.event) : zn(t.event), n = (0, St.Rt)(r, {maxStringLength: 200}) || "<unknown>"
                    } catch (s) {
                        n = "<unknown>"
                    }
                    return {target: r, message: n}
                }(t);
                return Kn({category: `ui.${t.name}`, ...nr(e, n)})
            }(e);
            if (!n) return;
            const r = "click" === e.name, s = r ? e.event : void 0;
            !(r && t.clickDetector && s && s.target) || s.altKey || s.metaKey || s.ctrlKey || s.shiftKey || function (t, e, n) {
                t.handleClick(e, n)
            }(t.clickDetector, n, Xn(e.event)), Bn(t, n)
        };

        function nr(t, e) {
            const n = Fn.mirror.getId(t), r = n && Fn.mirror.getNode(n), s = r && Fn.mirror.getMeta(r),
                i = s && function (t) {
                    return t.type === Zn.Element
                }(s) ? s : null;
            return {
                message: e,
                data: i ? {
                    nodeId: n,
                    node: {
                        id: n,
                        tagName: i.tagName,
                        textContent: Array.from(i.childNodes).map((t => t.type === Zn.Text && t.textContent)).filter(Boolean).map((t => t.trim())).join(""),
                        attributes: tr(i.attributes)
                    }
                } : {}
            }
        }

        function rr(t, e) {
            if (!t.isEnabled()) return;
            t.updateUserActivity();
            const n = function (t) {
                const {metaKey: e, shiftKey: n, ctrlKey: r, altKey: s, key: i, target: o} = t;
                if (!o || function (t) {
                    return "INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable
                }(o) || !i) return null;
                const a = e || r || s, c = 1 === i.length;
                if (!a && c) return null;
                const u = (0, St.Rt)(o, {maxStringLength: 200}) || "<unknown>", l = nr(o, u);
                return Kn({
                    category: "ui.keyDown",
                    message: u,
                    data: {...l.data, metaKey: e, shiftKey: n, ctrlKey: r, altKey: s, key: i}
                })
            }(e);
            n && Bn(t, n)
        }

        const sr = {
            resource: function (t) {
                const {
                    entryType: e,
                    initiatorType: n,
                    name: r,
                    responseEnd: s,
                    startTime: i,
                    decodedBodySize: o,
                    encodedBodySize: a,
                    responseStatus: c,
                    transferSize: u
                } = t;
                if (["fetch", "xmlhttprequest"].includes(n)) return null;
                return {
                    type: `${e}.${n}`,
                    start: or(i),
                    end: or(s),
                    name: r,
                    data: {size: u, statusCode: c, decodedBodySize: o, encodedBodySize: a}
                }
            }, paint: function (t) {
                const {duration: e, entryType: n, name: r, startTime: s} = t, i = or(s);
                return {type: n, name: r, start: i, end: i + e, data: void 0}
            }, navigation: function (t) {
                const {
                    entryType: e,
                    name: n,
                    decodedBodySize: r,
                    duration: s,
                    domComplete: i,
                    encodedBodySize: o,
                    domContentLoadedEventStart: a,
                    domContentLoadedEventEnd: c,
                    domInteractive: u,
                    loadEventStart: l,
                    loadEventEnd: d,
                    redirectCount: p,
                    startTime: h,
                    transferSize: f,
                    type: m
                } = t;
                if (0 === s) return null;
                return {
                    type: `${e}.${m}`,
                    start: or(h),
                    end: or(i),
                    name: n,
                    data: {
                        size: f,
                        decodedBodySize: r,
                        encodedBodySize: o,
                        duration: s,
                        domInteractive: u,
                        domContentLoadedEventStart: a,
                        domContentLoadedEventEnd: c,
                        loadEventStart: l,
                        loadEventEnd: d,
                        domComplete: i,
                        redirectCount: p
                    }
                }
            }
        };

        function ir(t) {
            return sr[t.entryType] ? sr[t.entryType](t) : null
        }

        function or(t) {
            return ((A.Z1 || At.performance.timeOrigin) + t) / 1e3
        }

        function ar(t) {
            function e(e) {
                t.performanceEntries.includes(e) || t.performanceEntries.push(e)
            }

            function n({entries: t}) {
                t.forEach(e)
            }

            const r = [];
            return ["navigation", "paint", "resource"].forEach((t => {
                r.push((0, Ot._j)(t, n))
            })), r.push((0, Ot.$A)((({metric: e}) => {
                t.replayPerformanceEntries.push(function (t) {
                    const e = t.entries, n = e[e.length - 1], r = n ? n.element : void 0, s = t.value, i = or(s);
                    return {
                        type: "largest-contentful-paint",
                        name: "largest-contentful-paint",
                        start: i,
                        end: i,
                        data: {value: s, size: s, nodeId: r ? Fn.mirror.getId(r) : void 0}
                    }
                }(e))
            }))), () => {
                r.forEach((t => t()))
            }
        }

        const cr = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

        function ur(t, e) {
            cr && (C.kg.info(t), e && dr(t))
        }

        function lr(t, e) {
            cr && (C.kg.info(t), e && setTimeout((() => {
                dr(t)
            }), 0))
        }

        function dr(t) {
            (0, R.n_)({category: "console", data: {logger: "replay"}, level: "info", message: t}, {level: "info"})
        }

        class pr extends Error {
            constructor() {
                super("Event buffer exceeded maximum size of 20000000.")
            }
        }

        class hr {
            constructor() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1
            }

            get hasEvents() {
                return this.events.length > 0
            }

            get type() {
                return "sync"
            }

            destroy() {
                this.events = []
            }

            async addEvent(t) {
                const e = JSON.stringify(t).length;
                if (this._totalSize += e, this._totalSize > $t) throw new pr;
                this.events.push(t)
            }

            finish() {
                return new Promise((t => {
                    const e = this.events;
                    this.clear(), t(JSON.stringify(e))
                }))
            }

            clear() {
                this.events = [], this._totalSize = 0, this.hasCheckout = !1
            }

            getEarliestTimestamp() {
                const t = this.events.map((t => t.timestamp)).sort()[0];
                return t ? jn(t) : null
            }
        }

        class fr {
            constructor(t) {
                this._worker = t, this._id = 0
            }

            ensureReady() {
                return this._ensureReadyPromise || (this._ensureReadyPromise = new Promise(((t, e) => {
                    this._worker.addEventListener("message", (({data: n}) => {
                        n.success ? t() : e()
                    }), {once: !0}), this._worker.addEventListener("error", (t => {
                        e(t)
                    }), {once: !0})
                }))), this._ensureReadyPromise
            }

            destroy() {
                ur("[Replay] Destroying compression worker"), this._worker.terminate()
            }

            postMessage(t, e) {
                const n = this._getAndIncrementId();
                return new Promise(((r, s) => {
                    const i = ({data: e}) => {
                        const o = e;
                        if (o.method === t && o.id === n) {
                            if (this._worker.removeEventListener("message", i), !o.success) return cr && C.kg.error("[Replay]", o.response), void s(new Error("Error in compression worker"));
                            r(o.response)
                        }
                    };
                    this._worker.addEventListener("message", i), this._worker.postMessage({id: n, method: t, arg: e})
                }))
            }

            _getAndIncrementId() {
                return this._id++
            }
        }

        class mr {
            constructor(t) {
                this._worker = new fr(t), this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1
            }

            get hasEvents() {
                return !!this._earliestTimestamp
            }

            get type() {
                return "worker"
            }

            ensureReady() {
                return this._worker.ensureReady()
            }

            destroy() {
                this._worker.destroy()
            }

            addEvent(t) {
                const e = jn(t.timestamp);
                (!this._earliestTimestamp || e < this._earliestTimestamp) && (this._earliestTimestamp = e);
                const n = JSON.stringify(t);
                return this._totalSize += n.length, this._totalSize > $t ? Promise.reject(new pr) : this._sendEventToWorker(n)
            }

            finish() {
                return this._finishRequest()
            }

            clear() {
                this._earliestTimestamp = null, this._totalSize = 0, this.hasCheckout = !1, this._worker.postMessage("clear").then(null, (t => {
                    cr && C.kg.warn('[Replay] Sending "clear" message to worker failed', t)
                }))
            }

            getEarliestTimestamp() {
                return this._earliestTimestamp
            }

            _sendEventToWorker(t) {
                return this._worker.postMessage("addEvent", t)
            }

            async _finishRequest() {
                const t = await this._worker.postMessage("finish");
                return this._earliestTimestamp = null, this._totalSize = 0, t
            }
        }

        class gr {
            constructor(t) {
                this._fallback = new hr, this._compression = new mr(t), this._used = this._fallback, this._ensureWorkerIsLoadedPromise = this._ensureWorkerIsLoaded()
            }

            get type() {
                return this._used.type
            }

            get hasEvents() {
                return this._used.hasEvents
            }

            get hasCheckout() {
                return this._used.hasCheckout
            }

            set hasCheckout(t) {
                this._used.hasCheckout = t
            }

            destroy() {
                this._fallback.destroy(), this._compression.destroy()
            }

            clear() {
                return this._used.clear()
            }

            getEarliestTimestamp() {
                return this._used.getEarliestTimestamp()
            }

            addEvent(t) {
                return this._used.addEvent(t)
            }

            async finish() {
                return await this.ensureWorkerIsLoaded(), this._used.finish()
            }

            ensureWorkerIsLoaded() {
                return this._ensureWorkerIsLoadedPromise
            }

            async _ensureWorkerIsLoaded() {
                try {
                    await this._compression.ensureReady()
                } catch (t) {
                    return void ur("[Replay] Failed to load the compression worker, falling back to simple buffer")
                }
                await this._switchToCompressionWorker()
            }

            async _switchToCompressionWorker() {
                const {events: t, hasCheckout: e} = this._fallback, n = [];
                for (const s of t) n.push(this._compression.addEvent(s));
                this._compression.hasCheckout = e, this._used = this._compression;
                try {
                    await Promise.all(n)
                } catch (r) {
                    cr && C.kg.warn("[Replay] Failed to add events when switching buffers.", r)
                }
            }
        }

        function yr({useCompression: t, workerUrl: e}) {
            if (t && window.Worker) {
                const t = function (t) {
                    try {
                        const e = t || function () {
                            if ("undefined" === typeof __SENTRY_EXCLUDE_REPLAY_WORKER__ || !__SENTRY_EXCLUDE_REPLAY_WORKER__) return function () {
                                const t = new Blob(['var t=Uint8Array,n=Uint16Array,r=Int32Array,e=new t([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new t([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new t([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),s=function(t,e){for(var i=new n(31),a=0;a<31;++a)i[a]=e+=1<<t[a-1];var s=new r(i[30]);for(a=1;a<30;++a)for(var o=i[a];o<i[a+1];++o)s[o]=o-i[a]<<5|a;return{b:i,r:s}},o=s(e,2),f=o.b,h=o.r;f[28]=258,h[258]=28;for(var l=s(i,0).r,u=new n(32768),c=0;c<32768;++c){var v=(43690&c)>>1|(21845&c)<<1;v=(61680&(v=(52428&v)>>2|(13107&v)<<2))>>4|(3855&v)<<4,u[c]=((65280&v)>>8|(255&v)<<8)>>1}var d=function(t,r,e){for(var i=t.length,a=0,s=new n(r);a<i;++a)t[a]&&++s[t[a]-1];var o,f=new n(r);for(a=1;a<r;++a)f[a]=f[a-1]+s[a-1]<<1;if(e){o=new n(1<<r);var h=15-r;for(a=0;a<i;++a)if(t[a])for(var l=a<<4|t[a],c=r-t[a],v=f[t[a]-1]++<<c,d=v|(1<<c)-1;v<=d;++v)o[u[v]>>h]=l}else for(o=new n(i),a=0;a<i;++a)t[a]&&(o[a]=u[f[t[a]-1]++]>>15-t[a]);return o},g=new t(288);for(c=0;c<144;++c)g[c]=8;for(c=144;c<256;++c)g[c]=9;for(c=256;c<280;++c)g[c]=7;for(c=280;c<288;++c)g[c]=8;var w=new t(32);for(c=0;c<32;++c)w[c]=5;var p=d(g,9,0),y=d(w,5,0),m=function(t){return(t+7)/8|0},b=function(n,r,e){return(null==r||r<0)&&(r=0),(null==e||e>n.length)&&(e=n.length),new t(n.subarray(r,e))},M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(t,n,r){var e=new Error(n||M[t]);if(e.code=t,Error.captureStackTrace&&Error.captureStackTrace(e,E),!r)throw e;return e},z=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8},A=function(t,n,r){r<<=7&n;var e=n/8|0;t[e]|=r,t[e+1]|=r>>8,t[e+2]|=r>>16},_=function(r,e){for(var i=[],a=0;a<r.length;++a)r[a]&&i.push({s:a,f:r[a]});var s=i.length,o=i.slice();if(!s)return{t:F,l:0};if(1==s){var f=new t(i[0].s+1);return f[i[0].s]=1,{t:f,l:1}}i.sort((function(t,n){return t.f-n.f})),i.push({s:-1,f:25001});var h=i[0],l=i[1],u=0,c=1,v=2;for(i[0]={s:-1,f:h.f+l.f,l:h,r:l};c!=s-1;)h=i[i[u].f<i[v].f?u++:v++],l=i[u!=c&&i[u].f<i[v].f?u++:v++],i[c++]={s:-1,f:h.f+l.f,l:h,r:l};var d=o[0].s;for(a=1;a<s;++a)o[a].s>d&&(d=o[a].s);var g=new n(d+1),w=x(i[c-1],g,0);if(w>e){a=0;var p=0,y=w-e,m=1<<y;for(o.sort((function(t,n){return g[n.s]-g[t.s]||t.f-n.f}));a<s;++a){var b=o[a].s;if(!(g[b]>e))break;p+=m-(1<<w-g[b]),g[b]=e}for(p>>=y;p>0;){var M=o[a].s;g[M]<e?p-=1<<e-g[M]++-1:++a}for(;a>=0&&p;--a){var E=o[a].s;g[E]==e&&(--g[E],++p)}w=e}return{t:new t(g),l:w}},x=function(t,n,r){return-1==t.s?Math.max(x(t.l,n,r+1),x(t.r,n,r+1)):n[t.s]=r},D=function(t){for(var r=t.length;r&&!t[--r];);for(var e=new n(++r),i=0,a=t[0],s=1,o=function(t){e[i++]=t},f=1;f<=r;++f)if(t[f]==a&&f!=r)++s;else{if(!a&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(a),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(a);s=1,a=t[f]}return{c:e.subarray(0,i),n:r}},T=function(t,n){for(var r=0,e=0;e<n.length;++e)r+=t[e]*n[e];return r},k=function(t,n,r){var e=r.length,i=m(n+2);t[i]=255&e,t[i+1]=e>>8,t[i+2]=255^t[i],t[i+3]=255^t[i+1];for(var a=0;a<e;++a)t[i+a+4]=r[a];return 8*(i+4+e)},C=function(t,r,s,o,f,h,l,u,c,v,m){z(r,m++,s),++f[256];for(var b=_(f,15),M=b.t,E=b.l,x=_(h,15),C=x.t,U=x.l,F=D(M),I=F.c,S=F.n,L=D(C),O=L.c,j=L.n,q=new n(19),B=0;B<I.length;++B)++q[31&I[B]];for(B=0;B<O.length;++B)++q[31&O[B]];for(var G=_(q,7),H=G.t,J=G.l,K=19;K>4&&!H[a[K-1]];--K);var N,P,Q,R,V=v+5<<3,W=T(f,g)+T(h,w)+l,X=T(f,M)+T(h,C)+l+14+3*K+T(q,H)+2*q[16]+3*q[17]+7*q[18];if(c>=0&&V<=W&&V<=X)return k(r,m,t.subarray(c,c+v));if(z(r,m,1+(X<W)),m+=2,X<W){N=d(M,E,0),P=M,Q=d(C,U,0),R=C;var Y=d(H,J,0);z(r,m,S-257),z(r,m+5,j-1),z(r,m+10,K-4),m+=14;for(B=0;B<K;++B)z(r,m+3*B,H[a[B]]);m+=3*K;for(var Z=[I,O],$=0;$<2;++$){var tt=Z[$];for(B=0;B<tt.length;++B){var nt=31&tt[B];z(r,m,Y[nt]),m+=H[nt],nt>15&&(z(r,m,tt[B]>>5&127),m+=tt[B]>>12)}}}else N=p,P=g,Q=y,R=w;for(B=0;B<u;++B){var rt=o[B];if(rt>255){A(r,m,N[(nt=rt>>18&31)+257]),m+=P[nt+257],nt>7&&(z(r,m,rt>>23&31),m+=e[nt]);var et=31&rt;A(r,m,Q[et]),m+=R[et],et>3&&(A(r,m,rt>>5&8191),m+=i[et])}else A(r,m,N[rt]),m+=P[rt]}return A(r,m,N[256]),m+P[256]},U=new r([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),F=new t(0),I=function(){for(var t=new Int32Array(256),n=0;n<256;++n){for(var r=n,e=9;--e;)r=(1&r&&-306674912)^r>>>1;t[n]=r}return t}(),S=function(){var t=1,n=0;return{p:function(r){for(var e=t,i=n,a=0|r.length,s=0;s!=a;){for(var o=Math.min(s+2655,a);s<o;++s)i+=e+=r[s];e=(65535&e)+15*(e>>16),i=(65535&i)+15*(i>>16)}t=e,n=i},d:function(){return(255&(t%=65521))<<24|(65280&t)<<8|(255&(n%=65521))<<8|n>>8}}},L=function(a,s,o,f,u){if(!u&&(u={l:1},s.dictionary)){var c=s.dictionary.subarray(-32768),v=new t(c.length+a.length);v.set(c),v.set(a,c.length),a=v,u.w=c.length}return function(a,s,o,f,u,c){var v=c.z||a.length,d=new t(f+v+5*(1+Math.ceil(v/7e3))+u),g=d.subarray(f,d.length-u),w=c.l,p=7&(c.r||0);if(s){p&&(g[0]=c.r>>3);for(var y=U[s-1],M=y>>13,E=8191&y,z=(1<<o)-1,A=c.p||new n(32768),_=c.h||new n(z+1),x=Math.ceil(o/3),D=2*x,T=function(t){return(a[t]^a[t+1]<<x^a[t+2]<<D)&z},F=new r(25e3),I=new n(288),S=new n(32),L=0,O=0,j=c.i||0,q=0,B=c.w||0,G=0;j+2<v;++j){var H=T(j),J=32767&j,K=_[H];if(A[J]=K,_[H]=J,B<=j){var N=v-j;if((L>7e3||q>24576)&&(N>423||!w)){p=C(a,g,0,F,I,S,O,q,G,j-G,p),q=L=O=0,G=j;for(var P=0;P<286;++P)I[P]=0;for(P=0;P<30;++P)S[P]=0}var Q=2,R=0,V=E,W=J-K&32767;if(N>2&&H==T(j-W))for(var X=Math.min(M,N)-1,Y=Math.min(32767,j),Z=Math.min(258,N);W<=Y&&--V&&J!=K;){if(a[j+Q]==a[j+Q-W]){for(var $=0;$<Z&&a[j+$]==a[j+$-W];++$);if($>Q){if(Q=$,R=W,$>X)break;var tt=Math.min(W,$-2),nt=0;for(P=0;P<tt;++P){var rt=j-W+P&32767,et=rt-A[rt]&32767;et>nt&&(nt=et,K=rt)}}}W+=(J=K)-(K=A[J])&32767}if(R){F[q++]=268435456|h[Q]<<18|l[R];var it=31&h[Q],at=31&l[R];O+=e[it]+i[at],++I[257+it],++S[at],B=j+Q,++L}else F[q++]=a[j],++I[a[j]]}}for(j=Math.max(j,B);j<v;++j)F[q++]=a[j],++I[a[j]];p=C(a,g,w,F,I,S,O,q,G,j-G,p),w||(c.r=7&p|g[p/8|0]<<3,p-=7,c.h=_,c.p=A,c.i=j,c.w=B)}else{for(j=c.w||0;j<v+w;j+=65535){var st=j+65535;st>=v&&(g[p/8|0]=w,st=v),p=k(g,p+1,a.subarray(j,st))}c.i=v}return b(d,0,f+m(p)+u)}(a,null==s.level?6:s.level,null==s.mem?Math.ceil(1.5*Math.max(8,Math.min(13,Math.log(a.length)))):12+s.mem,o,f,u)},O=function(t,n,r){for(;r;++n)t[n]=r,r>>>=8},j=function(){function n(n,r){if("function"==typeof n&&(r=n,n={}),this.ondata=r,this.o=n||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new t(98304),this.o.dictionary){var e=this.o.dictionary.subarray(-32768);this.b.set(e,32768-e.length),this.s.i=32768-e.length}}return n.prototype.p=function(t,n){this.ondata(L(t,this.o,0,0,this.s),n)},n.prototype.push=function(n,r){this.ondata||E(5),this.s.l&&E(4);var e=n.length+this.s.z;if(e>this.b.length){if(e>2*this.b.length-32768){var i=new t(-32768&e);i.set(this.b.subarray(0,this.s.z)),this.b=i}var a=this.b.length-this.s.z;a&&(this.b.set(n.subarray(0,a),this.s.z),this.s.z=this.b.length,this.p(this.b,!1)),this.b.set(this.b.subarray(-32768)),this.b.set(n.subarray(a),32768),this.s.z=n.length-a+32768,this.s.i=32766,this.s.w=32768}else this.b.set(n,this.s.z),this.s.z+=n.length;this.s.l=1&r,(this.s.z>this.s.w+8191||r)&&(this.p(this.b,r||!1),this.s.w=this.s.i,this.s.i-=2)},n}();function q(t,n){n||(n={});var r=function(){var t=-1;return{p:function(n){for(var r=t,e=0;e<n.length;++e)r=I[255&r^n[e]]^r>>>8;t=r},d:function(){return~t}}}(),e=t.length;r.p(t);var i,a=L(t,n,10+((i=n).filename?i.filename.length+1:0),8),s=a.length;return function(t,n){var r=n.filename;if(t[0]=31,t[1]=139,t[2]=8,t[8]=n.level<2?4:9==n.level?2:0,t[9]=3,0!=n.mtime&&O(t,4,Math.floor(new Date(n.mtime||Date.now())/1e3)),r){t[3]=8;for(var e=0;e<=r.length;++e)t[e+10]=r.charCodeAt(e)}}(a,n),O(a,s-8,r.d()),O(a,s-4,e),a}var B=function(){function t(t,n){this.c=S(),this.v=1,j.call(this,t,n)}return t.prototype.push=function(t,n){this.c.p(t),j.prototype.push.call(this,t,n)},t.prototype.p=function(t,n){var r=L(t,this.o,this.v&&(this.o.dictionary?6:2),n&&4,this.s);this.v&&(function(t,n){var r=n.level,e=0==r?0:r<6?1:9==r?3:2;if(t[0]=120,t[1]=e<<6|(n.dictionary&&32),t[1]|=31-(t[0]<<8|t[1])%31,n.dictionary){var i=S();i.p(n.dictionary),O(t,2,i.d())}}(r,this.o),this.v=0),n&&O(r,r.length-4,this.c.d()),this.ondata(r,n)},t}(),G="undefined"!=typeof TextEncoder&&new TextEncoder,H="undefined"!=typeof TextDecoder&&new TextDecoder;try{H.decode(F,{stream:!0})}catch(t){}var J=function(){function t(t){this.ondata=t}return t.prototype.push=function(t,n){this.ondata||E(5),this.d&&E(4),this.ondata(K(t),this.d=n||!1)},t}();function K(n,r){if(r){for(var e=new t(n.length),i=0;i<n.length;++i)e[i]=n.charCodeAt(i);return e}if(G)return G.encode(n);var a=n.length,s=new t(n.length+(n.length>>1)),o=0,f=function(t){s[o++]=t};for(i=0;i<a;++i){if(o+5>s.length){var h=new t(o+8+(a-i<<1));h.set(s),s=h}var l=n.charCodeAt(i);l<128||r?f(l):l<2048?(f(192|l>>6),f(128|63&l)):l>55295&&l<57344?(f(240|(l=65536+(1047552&l)|1023&n.charCodeAt(++i))>>18),f(128|l>>12&63),f(128|l>>6&63),f(128|63&l)):(f(224|l>>12),f(128|l>>6&63),f(128|63&l))}return b(s,0,o)}const N=new class{constructor(){this._init()}clear(){this._init()}addEvent(t){if(!t)throw new Error("Adding invalid event");const n=this._hasEvents?",":"";this.stream.push(n+t),this._hasEvents=!0}finish(){this.stream.push("]",!0);const t=function(t){let n=0;for(let r=0,e=t.length;r<e;r++)n+=t[r].length;const r=new Uint8Array(n);for(let n=0,e=0,i=t.length;n<i;n++){const i=t[n];r.set(i,e),e+=i.length}return r}(this._deflatedData);return this._init(),t}_init(){this._hasEvents=!1,this._deflatedData=[],this.deflate=new B,this.deflate.ondata=(t,n)=>{this._deflatedData.push(t)},this.stream=new J(((t,n)=>{this.deflate.push(t,n)})),this.stream.push("[")}},P={clear:()=>{N.clear()},addEvent:t=>N.addEvent(t),finish:()=>N.finish(),compress:t=>function(t){return q(K(t))}(t)};addEventListener("message",(function(t){const n=t.data.method,r=t.data.id,e=t.data.arg;if(n in P&&"function"==typeof P[n])try{const t=P[n](e);postMessage({id:r,method:n,success:!0,response:t})}catch(t){postMessage({id:r,method:n,success:!1,response:t.message}),console.error(t)}})),postMessage({id:void 0,method:"init",success:!0,response:void 0});']);
                                return URL.createObjectURL(t)
                            }();
                            return ""
                        }();
                        if (!e) return;
                        ur("[Replay] Using compression worker" + (t ? ` from ${t}` : ""));
                        const n = new Worker(e);
                        return new gr(n)
                    } catch (e) {
                        ur("[Replay] Failed to create compression worker")
                    }
                }(e);
                if (t) return t
            }
            return ur("[Replay] Using simple buffer"), new hr
        }

        function _r() {
            try {
                return "sessionStorage" in At && !!At.sessionStorage
            } catch (t) {
                return !1
            }
        }

        function vr(t) {
            !function () {
                if (!_r()) return;
                try {
                    At.sessionStorage.removeItem(Dt)
                } catch (t) {
                }
            }(), t.session = void 0
        }

        function br(t) {
            return void 0 !== t && Math.random() < t
        }

        function Sr(t) {
            const e = Date.now();
            return {
                id: t.id || (0, kt.DM)(),
                started: t.started || e,
                lastActivity: t.lastActivity || e,
                segmentId: t.segmentId || 0,
                sampled: t.sampled,
                previousSessionId: t.previousSessionId
            }
        }

        function kr(t) {
            if (_r()) try {
                At.sessionStorage.setItem(Dt, JSON.stringify(t))
            } catch (e) {
            }
        }

        function wr({sessionSampleRate: t, allowBuffering: e, stickySession: n = !1}, {previousSessionId: r} = {}) {
            const s = function (t, e) {
                return br(t) ? "session" : !!e && "buffer"
            }(t, e), i = Sr({sampled: s, previousSessionId: r});
            return n && kr(i), i
        }

        function Tr(t, e, n = +new Date) {
            return null === t || void 0 === e || e < 0 || 0 !== e && t + e <= n
        }

        function xr(t, {maxReplayDuration: e, sessionIdleExpire: n, targetTime: r = Date.now()}) {
            return Tr(t.started, e, r) || Tr(t.lastActivity, n, r)
        }

        function Er(t, {sessionIdleExpire: e, maxReplayDuration: n}) {
            return !!xr(t, {
                sessionIdleExpire: e,
                maxReplayDuration: n
            }) && ("buffer" !== t.sampled || 0 !== t.segmentId)
        }

        function Cr({traceInternals: t, sessionIdleExpire: e, maxReplayDuration: n, previousSessionId: r}, s) {
            const i = s.stickySession && function (t) {
                if (!_r()) return null;
                try {
                    const e = At.sessionStorage.getItem(Dt);
                    if (!e) return null;
                    const n = JSON.parse(e);
                    return lr("[Replay] Loading existing session", t), Sr(n)
                } catch (e) {
                    return null
                }
            }(t);
            return i ? Er(i, {
                sessionIdleExpire: e,
                maxReplayDuration: n
            }) ? (lr("[Replay] Session in sessionStorage is expired, creating new one..."), wr(s, {previousSessionId: i.id})) : i : (lr("[Replay] Creating new session", t), wr(s, {previousSessionId: r}))
        }

        function Ir(t, e, n) {
            return !!Mr(t, e) && (Rr(t, e, n), !0)
        }

        async function Rr(t, e, n) {
            if (!t.eventBuffer) return null;
            try {
                n && "buffer" === t.recordingMode && t.eventBuffer.clear(), n && (t.eventBuffer.hasCheckout = !0);
                const r = function (t, e) {
                    try {
                        if ("function" === typeof e && function (t) {
                            return t.type === qe.Custom
                        }(t)) return e(t)
                    } catch (n) {
                        return cr && C.kg.error("[Replay] An error occured in the `beforeAddRecordingEvent` callback, skipping the event...", n), null
                    }
                    return t
                }(e, t.getOptions().beforeAddRecordingEvent);
                if (!r) return;
                return await t.eventBuffer.addEvent(r)
            } catch (r) {
                const e = r && r instanceof pr ? "addEventSizeExceeded" : "addEvent";
                cr && C.kg.error(r), await t.stop({reason: e});
                const n = (0, R.s3)();
                n && n.recordDroppedEvent("internal_sdk_error", "replay")
            }
        }

        function Mr(t, e) {
            if (!t.eventBuffer || t.isPaused() || !t.isEnabled()) return !1;
            const n = jn(e.timestamp);
            return !(n + t.timeouts.sessionIdlePause < Date.now()) && (!(n > t.getContext().initialTimestamp + t.getOptions().maxReplayDuration) || (ur(`[Replay] Skipping event with timestamp ${n} because it is after maxReplayDuration`, t.getOptions()._experiments.traceInternals), !1))
        }

        function Or(t) {
            return !t.type
        }

        function Ar(t) {
            return "transaction" === t.type
        }

        function Dr(t) {
            return "feedback" === t.type
        }

        function Nr(t) {
            const e = function () {
                const t = (0, R.s3)();
                if (!t) return !1;
                const e = t.getTransport();
                if (!e) return !1;
                return e.send.__sentry__baseTransport__ || !1
            }();
            return (n, r) => {
                if (!t.isEnabled() || !Or(n) && !Ar(n)) return;
                const s = r && r.statusCode;
                e && (!s || s < 200 || s >= 300) || (Ar(n) ? function (t, e) {
                    const n = t.getContext();
                    e.contexts && e.contexts.trace && e.contexts.trace.trace_id && n.traceIds.size < 100 && n.traceIds.add(e.contexts.trace.trace_id)
                }(t, n) : function (t, e) {
                    const n = t.getContext();
                    e.event_id && n.errorIds.size < 100 && n.errorIds.add(e.event_id);
                    if ("buffer" !== t.recordingMode || !e.tags || !e.tags.replayId) return;
                    const {beforeErrorSampling: r} = t.getOptions();
                    if ("function" === typeof r && !r(e)) return;
                    setTimeout((() => {
                        t.sendBufferedReplayOrFlush()
                    }))
                }(t, n))
            }
        }

        function Lr(t) {
            return e => {
                t.isEnabled() && Or(e) && function (t, e) {
                    const n = e.exception && e.exception.values && e.exception.values[0].value;
                    if ("string" !== typeof n) return;
                    if (n.match(/reactjs\.org\/docs\/error-decoder\.html\?invariant=(418|419|422|423|425)/) || n.match(/(does not match server-rendered HTML|Hydration failed because)/i)) {
                        Bn(t, Kn({category: "replay.hydrate-error"}))
                    }
                }(t, e)
            }
        }

        function Pr(t, e = !1) {
            const n = e ? Nr(t) : void 0;
            return Object.assign(((e, r) => {
                if (!t.isEnabled()) return e;
                if (function (t) {
                    return "replay_event" === t.type
                }(e)) return delete e.breadcrumbs, e;
                if (!Or(e) && !Ar(e) && !Dr(e)) return e;
                if (!t.checkAndHandleExpiredSession()) return e;
                if (Dr(e)) return t.flush(), e.contexts.feedback.replay_id = t.getSessionId(), function (t, e) {
                    t.triggerUserActivity(), t.addUpdate((() => !e.timestamp || (t.throttledAddEvent({
                        type: qe.Custom,
                        timestamp: 1e3 * e.timestamp,
                        data: {
                            tag: "breadcrumb",
                            payload: {
                                timestamp: e.timestamp,
                                type: "default",
                                category: "sentry.feedback",
                                data: {feedbackId: e.event_id}
                            }
                        }
                    }), !1)))
                }(t, e), e;
                if (function (t, e) {
                    return !(t.type || !t.exception || !t.exception.values || !t.exception.values.length) && !(!e.originalException || !e.originalException.__rrweb__)
                }(e, r) && !t.getOptions()._experiments.captureExceptions) return cr && C.kg.log("[Replay] Ignoring error from rrweb internals", e), null;
                const s = function (t, e) {
                    return "buffer" === t.recordingMode && e.message !== Nt && !(!e.exception || e.type) && br(t.getOptions().errorSampleRate)
                }(t, e);
                return (s || "session" === t.recordingMode) && (e.tags = {
                    ...e.tags,
                    replayId: t.getSessionId()
                }), n && n(e, {statusCode: 200}), e
            }), {id: "Replay"})
        }

        function $r(t, e) {
            return e.map((({type: e, start: n, end: r, name: s, data: i}) => {
                const o = t.throttledAddEvent({
                    type: qe.Custom,
                    timestamp: n,
                    data: {
                        tag: "performanceSpan",
                        payload: {op: e, description: s, startTimestamp: n, endTimestamp: r, data: i}
                    }
                });
                return "string" === typeof o ? Promise.resolve(null) : o
            }))
        }

        function Fr(t) {
            return e => {
                if (!t.isEnabled()) return;
                const n = function (t) {
                    const {from: e, to: n} = t, r = Date.now() / 1e3;
                    return {type: "navigation.push", start: r, end: r, name: n, data: {previous: e}}
                }(e);
                null !== n && (t.getContext().urls.push(n.name), t.triggerUserActivity(), t.addUpdate((() => ($r(t, [n]), !1))))
            }
        }

        function jr(t, e) {
            t.isEnabled() && null !== e && (function (t, e) {
                return (!cr || !t.getOptions()._experiments.traceInternals) && gt(e, (0, R.s3)())
            }(t, e.name) || t.addUpdate((() => ($r(t, [e]), !0))))
        }

        function Ur(t) {
            return e => {
                if (!t.isEnabled()) return;
                const n = function (t) {
                    const {startTimestamp: e, endTimestamp: n, xhr: r} = t, s = r[wt.xU];
                    if (!e || !n || !s) return null;
                    const {method: i, url: o, status_code: a} = s;
                    return void 0 === o ? null : {
                        type: "resource.xhr",
                        name: o,
                        start: e / 1e3,
                        end: n / 1e3,
                        data: {method: i, statusCode: a}
                    }
                }(e);
                jr(t, n)
            }
        }

        function Br(t, e) {
            if (t) try {
                if ("string" === typeof t) return e.encode(t).length;
                if (t instanceof URLSearchParams) return e.encode(t.toString()).length;
                if (t instanceof FormData) {
                    const n = Vr(t);
                    return e.encode(n).length
                }
                if (t instanceof Blob) return t.size;
                if (t instanceof ArrayBuffer) return t.byteLength
            } catch (n) {
            }
        }

        function Hr(t) {
            if (!t) return;
            const e = parseInt(t, 10);
            return isNaN(e) ? void 0 : e
        }

        function Xr(t) {
            try {
                if ("string" === typeof t) return [t];
                if (t instanceof URLSearchParams) return [t.toString()];
                if (t instanceof FormData) return [Vr(t)];
                if (!t) return [void 0]
            } catch (e) {
                return cr && C.kg.warn("[Replay] Failed to serialize body", t), [void 0, "BODY_PARSE_ERROR"]
            }
            return cr && C.kg.info("[Replay] Skipping network body because of body type", t), [void 0, "UNPARSEABLE_BODY_TYPE"]
        }

        function zr(t, e) {
            if (!t) return {headers: {}, size: void 0, _meta: {warnings: [e]}};
            const n = {...t._meta}, r = n.warnings || [];
            return n.warnings = [...r, e], t._meta = n, t
        }

        function Wr(t, e) {
            if (!e) return null;
            const {startTimestamp: n, endTimestamp: r, url: s, method: i, statusCode: o, request: a, response: c} = e;
            return {
                type: t,
                start: n / 1e3,
                end: r / 1e3,
                name: s,
                data: (0, bt.Jr)({method: i, statusCode: o, request: a, response: c})
            }
        }

        function qr(t) {
            return {headers: {}, size: t, _meta: {warnings: ["URL_SKIPPED"]}}
        }

        function Gr(t, e, n) {
            if (!e && 0 === Object.keys(t).length) return;
            if (!e) return {headers: t};
            if (!n) return {headers: t, size: e};
            const r = {headers: t, size: e}, {body: s, warnings: i} = function (t) {
                if (!t || "string" !== typeof t) return {body: t};
                const e = t.length > Lt, n = function (t) {
                    const e = t[0], n = t[t.length - 1];
                    return "[" === e && "]" === n || "{" === e && "}" === n
                }(t);
                if (e) {
                    const e = t.slice(0, Lt);
                    return n ? {body: e, warnings: ["MAYBE_JSON_TRUNCATED"]} : {
                        body: `${e}\u2026`,
                        warnings: ["TEXT_TRUNCATED"]
                    }
                }
                if (n) try {
                    return {body: JSON.parse(t)}
                } catch (r) {
                }
                return {body: t}
            }(n);
            return r.body = s, i && i.length > 0 && (r._meta = {warnings: i}), r
        }

        function Jr(t, e) {
            return Object.keys(t).reduce(((n, r) => {
                const s = r.toLowerCase();
                return e.includes(s) && t[r] && (n[s] = t[r]), n
            }), {})
        }

        function Vr(t) {
            return new URLSearchParams(t).toString()
        }

        function Yr(t, e) {
            const n = function (t, e = At.document.baseURI) {
                if (t.startsWith("http://") || t.startsWith("https://") || t.startsWith(At.location.origin)) return t;
                const n = new URL(t, e);
                if (n.origin !== new URL(e).origin) return t;
                const r = n.href;
                if (!t.endsWith("/") && r.endsWith("/")) return r.slice(0, -1);
                return r
            }(t);
            return (0, Tt.U0)(n, e)
        }

        async function Kr(t, e, n) {
            try {
                const r = await async function (t, e, n) {
                    const r = Date.now(), {startTimestamp: s = r, endTimestamp: i = r} = e, {
                            url: o,
                            method: a,
                            status_code: c = 0,
                            request_body_size: u,
                            response_body_size: l
                        } = t.data, d = Yr(o, n.networkDetailAllowUrls) && !Yr(o, n.networkDetailDenyUrls),
                        p = d ? function ({networkCaptureBodies: t, networkRequestHeaders: e}, n, r) {
                            const s = n ? function (t, e) {
                                if (1 === t.length && "string" !== typeof t[0]) return ts(t[0], e);
                                if (2 === t.length) return ts(t[1], e);
                                return {}
                            }(n, e) : {};
                            if (!t) return Gr(s, r, void 0);
                            const i = Zr(n), [o, a] = Xr(i), c = Gr(s, r, o);
                            if (a) return zr(c, a);
                            return c
                        }(n, e.input, u) : qr(u), h = await async function (t, {
                            networkCaptureBodies: e,
                            textEncoder: n,
                            networkResponseHeaders: r
                        }, s, i) {
                            if (!t && void 0 !== i) return qr(i);
                            const o = s ? Qr(s.headers, r) : {};
                            if (!s || !e && void 0 !== i) return Gr(o, i, void 0);
                            const [a, c] = await async function (t) {
                                const e = function (t) {
                                    try {
                                        return t.clone()
                                    } catch (e) {
                                        cr && C.kg.warn("[Replay] Failed to clone response body", e)
                                    }
                                }(t);
                                if (!e) return [void 0, "BODY_PARSE_ERROR"];
                                try {
                                    const t = await function (t) {
                                        return new Promise(((e, n) => {
                                            const r = setTimeout((() => n(new Error("Timeout while trying to read response body"))), 500);
                                            (async function (t) {
                                                return await t.text()
                                            })(t).then((t => e(t)), (t => n(t))).finally((() => clearTimeout(r)))
                                        }))
                                    }(e);
                                    return [t]
                                } catch (n) {
                                    return cr && C.kg.warn("[Replay] Failed to get text body from response", n), [void 0, "BODY_PARSE_ERROR"]
                                }
                            }(s), u = function (t, {
                                networkCaptureBodies: e,
                                textEncoder: n,
                                responseBodySize: r,
                                captureDetails: s,
                                headers: i
                            }) {
                                try {
                                    const o = t && t.length && void 0 === r ? Br(t, n) : r;
                                    return s ? Gr(i, o, e ? t : void 0) : qr(o)
                                } catch (o) {
                                    return cr && C.kg.warn("[Replay] Failed to serialize response body", o), Gr(i, r, void 0)
                                }
                            }(a, {
                                networkCaptureBodies: e,
                                textEncoder: n,
                                responseBodySize: i,
                                captureDetails: t,
                                headers: o
                            });
                            if (c) return zr(u, c);
                            return u
                        }(d, n, e.response, l);
                    return {
                        startTimestamp: s,
                        endTimestamp: i,
                        url: o,
                        method: a,
                        statusCode: c,
                        request: p,
                        response: h
                    }
                }(t, e, n), s = Wr("resource.fetch", r);
                jr(n.replay, s)
            } catch (r) {
                cr && C.kg.error("[Replay] Failed to capture fetch breadcrumb", r)
            }
        }

        function Zr(t = []) {
            if (2 === t.length && "object" === typeof t[1]) return t[1].body
        }

        function Qr(t, e) {
            const n = {};
            return e.forEach((e => {
                t.get(e) && (n[e] = t.get(e))
            })), n
        }

        function ts(t, e) {
            if (!t) return {};
            const n = t.headers;
            return n ? n instanceof Headers ? Qr(n, e) : Array.isArray(n) ? {} : Jr(n, e) : {}
        }

        async function es(t, e, n) {
            try {
                const r = function (t, e, n) {
                    const r = Date.now(), {startTimestamp: s = r, endTimestamp: i = r, input: o, xhr: a} = e, {
                        url: c,
                        method: u,
                        status_code: l = 0,
                        request_body_size: d,
                        response_body_size: p
                    } = t.data;
                    if (!c) return null;
                    if (!a || !Yr(c, n.networkDetailAllowUrls) || Yr(c, n.networkDetailDenyUrls)) {
                        return {
                            startTimestamp: s,
                            endTimestamp: i,
                            url: c,
                            method: u,
                            statusCode: l,
                            request: qr(d),
                            response: qr(p)
                        }
                    }
                    const h = a[wt.xU], f = h ? Jr(h.request_headers, n.networkRequestHeaders) : {},
                        m = Jr(function (t) {
                            const e = t.getAllResponseHeaders();
                            if (!e) return {};
                            return e.split("\r\n").reduce(((t, e) => {
                                const [n, r] = e.split(": ");
                                return t[n.toLowerCase()] = r, t
                            }), {})
                        }(a), n.networkResponseHeaders), [g, y] = n.networkCaptureBodies ? Xr(o) : [void 0], [_, v] = n.networkCaptureBodies ? function (t) {
                            const e = [];
                            try {
                                return [t.responseText]
                            } catch (n) {
                                e.push(n)
                            }
                            try {
                                return function (t, e) {
                                    try {
                                        if ("string" === typeof t) return [t];
                                        if (t instanceof Document) return [t.body.outerHTML];
                                        if ("json" === e && t && "object" === typeof t) return [JSON.stringify(t)];
                                        if (!t) return [void 0]
                                    } catch (n) {
                                        return cr && C.kg.warn("[Replay] Failed to serialize body", t), [void 0, "BODY_PARSE_ERROR"]
                                    }
                                    return cr && C.kg.info("[Replay] Skipping network body because of body type", t), [void 0, "UNPARSEABLE_BODY_TYPE"]
                                }(t.response, t.responseType)
                            } catch (n) {
                                e.push(n)
                            }
                            return cr && C.kg.warn("[Replay] Failed to get xhr response body", ...e), [void 0]
                        }(a) : [void 0], b = Gr(f, d, g), S = Gr(m, p, _);
                    return {
                        startTimestamp: s,
                        endTimestamp: i,
                        url: c,
                        method: u,
                        statusCode: l,
                        request: y ? zr(b, y) : b,
                        response: v ? zr(S, v) : S
                    }
                }(t, e, n), s = Wr("resource.xhr", r);
                jr(n.replay, s)
            } catch (r) {
                cr && C.kg.error("[Replay] Failed to capture xhr breadcrumb", r)
            }
        }

        function ns(t, e, n) {
            const {xhr: r, input: s} = e;
            if (!r) return;
            const i = Br(s, n.textEncoder),
                o = r.getResponseHeader("content-length") ? Hr(r.getResponseHeader("content-length")) : function (t, e, n) {
                    try {
                        return Br("json" === e && t && "object" === typeof t ? JSON.stringify(t) : t, n)
                    } catch (r) {
                        return
                    }
                }(r.response, r.responseType, n.textEncoder);
            void 0 !== i && (t.data.request_body_size = i), void 0 !== o && (t.data.response_body_size = o)
        }

        function rs(t) {
            const e = (0, R.s3)();
            try {
                const n = new TextEncoder, {
                    networkDetailAllowUrls: r,
                    networkDetailDenyUrls: s,
                    networkCaptureBodies: i,
                    networkRequestHeaders: o,
                    networkResponseHeaders: a
                } = t.getOptions(), c = {
                    replay: t,
                    textEncoder: n,
                    networkDetailAllowUrls: r,
                    networkDetailDenyUrls: s,
                    networkCaptureBodies: i,
                    networkRequestHeaders: o,
                    networkResponseHeaders: a
                };
                e && e.on ? e.on("beforeAddBreadcrumb", ((t, e) => function (t, e, n) {
                    if (!e.data) return;
                    try {
                        (function (t) {
                            return "xhr" === t.category
                        })(e) && function (t) {
                            return t && t.xhr
                        }(n) && (ns(e, n, t), es(e, n, t)), function (t) {
                            return "fetch" === t.category
                        }(e) && function (t) {
                            return t && t.response
                        }(n) && (!function (t, e, n) {
                            const {input: r, response: s} = e, i = Br(r ? Zr(r) : void 0, n.textEncoder),
                                o = s ? Hr(s.headers.get("content-length")) : void 0;
                            void 0 !== i && (t.data.request_body_size = i), void 0 !== o && (t.data.response_body_size = o)
                        }(e, n, t), Kr(e, n, t))
                    } catch (r) {
                        cr && C.kg.warn("Error when enriching network breadcrumb")
                    }
                }(c, t, e))) : ((0, xt.U)(function (t) {
                    return e => {
                        if (!t.isEnabled()) return;
                        const n = function (t) {
                            const {startTimestamp: e, endTimestamp: n, fetchData: r, response: s} = t;
                            if (!n) return null;
                            const {method: i, url: o} = r;
                            return {
                                type: "resource.fetch",
                                start: e / 1e3,
                                end: n / 1e3,
                                name: o,
                                data: {method: i, statusCode: s ? s.status : void 0}
                            }
                        }(e);
                        jr(t, n)
                    }
                }(t)), (0, wt.UK)(Ur(t)))
            } catch (n) {
            }
        }

        let ss = null;
        const is = t => e => {
            if (!t.isEnabled()) return;
            const n = function (t) {
                const e = t.getLastBreadcrumb && t.getLastBreadcrumb();
                if (ss === e || !e) return null;
                if (ss = e, !function (t) {
                    return !!t.category
                }(e) || ["fetch", "xhr", "sentry.event", "sentry.transaction"].includes(e.category) || e.category.startsWith("ui.")) return null;
                if ("console" === e.category) return function (t) {
                    const e = t.data && t.data.arguments;
                    if (!Array.isArray(e) || 0 === e.length) return Kn(t);
                    let n = !1;
                    const r = e.map((t => {
                        if (!t) return t;
                        if ("string" === typeof t) return t.length > Pt ? (n = !0, `${t.slice(0, Pt)}\u2026`) : t;
                        if ("object" === typeof t) try {
                            const e = (0, vt.Fv)(t, 7);
                            return JSON.stringify(e).length > Pt ? (n = !0, `${JSON.stringify(e, null, 2).slice(0, Pt)}\u2026`) : e
                        } catch (e) {
                        }
                        return t
                    }));
                    return Kn({
                        ...t,
                        data: {...t.data, arguments: r, ...n ? {_meta: {warnings: ["CONSOLE_ARG_TRUNCATED"]}} : {}}
                    })
                }(e);
                return Kn(e)
            }(e);
            n && Bn(t, n)
        };

        function os(t) {
            return !(!t || !t.on)
        }

        function as(t) {
            const {jsHeapSizeLimit: e, totalJSHeapSize: n, usedJSHeapSize: r} = t, s = Date.now() / 1e3;
            return {
                type: "memory",
                name: "memory",
                start: s,
                end: s,
                data: {memory: {jsHeapSizeLimit: e, totalJSHeapSize: n, usedJSHeapSize: r}}
            }
        }

        function cs(t) {
            let e = !1;
            return (n, r) => {
                if (!t.checkAndHandleExpiredSession()) return void (cr && C.kg.warn("[Replay] Received replay event after session expired."));
                const s = r || !e;
                e = !0, t.clickDetector && Yn(t.clickDetector, n), t.addUpdate((() => {
                    if ("buffer" === t.recordingMode && s && t.setInitialState(), !Ir(t, n, s)) return !0;
                    if (!s) return !1;
                    if (function (t, e) {
                        if (!e || !t.session || 0 !== t.session.segmentId) return;
                        Ir(t, function (t) {
                            const e = t.getOptions();
                            return {
                                type: qe.Custom,
                                timestamp: Date.now(),
                                data: {
                                    tag: "options",
                                    payload: {
                                        shouldRecordCanvas: t.isRecordingCanvas(),
                                        sessionSampleRate: e.sessionSampleRate,
                                        errorSampleRate: e.errorSampleRate,
                                        useCompressionOption: e.useCompression,
                                        blockAllMedia: e.blockAllMedia,
                                        maskAllText: e.maskAllText,
                                        maskAllInputs: e.maskAllInputs,
                                        useCompression: !!t.eventBuffer && "worker" === t.eventBuffer.type,
                                        networkDetailHasUrls: e.networkDetailAllowUrls.length > 0,
                                        networkCaptureBodies: e.networkCaptureBodies,
                                        networkRequestHasHeaders: e.networkRequestHeaders.length > 0,
                                        networkResponseHasHeaders: e.networkResponseHeaders.length > 0
                                    }
                                }
                            }
                        }(t), !1)
                    }(t, s), t.session && t.session.previousSessionId) return !0;
                    if ("buffer" === t.recordingMode && t.session && t.eventBuffer) {
                        const e = t.eventBuffer.getEarliestTimestamp();
                        e && (ur(`[Replay] Updating session start time to earliest event in buffer to ${new Date(e)}`, t.getOptions()._experiments.traceInternals), t.session.started = e, t.getOptions().stickySession && kr(t.session))
                    }
                    return "session" === t.recordingMode && t.flush(), !0
                }))
            }
        }

        async function us({recordingData: t, replayId: e, segmentId: n, eventContext: r, timestamp: s, session: i}) {
            const o = function ({recordingData: t, headers: e}) {
                let n;
                const r = `${JSON.stringify(e)}\n`;
                if ("string" === typeof t) n = `${r}${t}`; else {
                    const e = (new TextEncoder).encode(r);
                    n = new Uint8Array(e.length + t.length), n.set(e), n.set(t, e.length)
                }
                return n
            }({recordingData: t, headers: {segment_id: n}}), {
                urls: a,
                errorIds: c,
                traceIds: u,
                initialTimestamp: l
            } = r, d = (0, R.s3)(), p = (0, R.nZ)(), h = d && d.getTransport(), f = d && d.getDsn();
            if (!d || !h || !f || !i.sampled) return;
            const g = {
                type: "replay_event",
                replay_start_timestamp: l / 1e3,
                timestamp: s / 1e3,
                error_ids: c,
                trace_ids: u,
                urls: a,
                replay_id: e,
                segment_id: n,
                replay_type: i.sampled
            }, y = await async function ({client: t, scope: e, replayId: n, event: r}) {
                const s = {
                    event_id: n,
                    integrations: "object" !== typeof t._integrations || null === t._integrations || Array.isArray(t._integrations) ? void 0 : Object.keys(t._integrations)
                };
                t.emit && t.emit("preprocessEvent", r, s);
                const i = await (0, _t.R)(t.getOptions(), r, s, e, t, (0, H.aF)());
                if (!i) return null;
                i.platform = i.platform || "javascript";
                const o = t.getSdkMetadata && t.getSdkMetadata(), {name: a, version: c} = o && o.sdk || {};
                return i.sdk = {...i.sdk, name: a || "sentry.javascript.unknown", version: c || "0.0.0"}, i
            }({scope: p, client: d, replayId: e, event: g});
            if (!y) return d.recordDroppedEvent("event_processor", "replay", g), void ur("An event processor returned `null`, will not send event.");
            delete y.sdkProcessingMetadata;
            const _ = function (t, e, n, r) {
                return (0, m.Jd)((0, m.Cd)(t, (0, m.HY)(t), r, n), [[{type: "replay_event"}, t], [{
                    type: "replay_recording",
                    length: "string" === typeof e ? (new TextEncoder).encode(e).length : e.length
                }, e]])
            }(y, o, f, d.getOptions().tunnel);
            let v;
            try {
                v = await h.send(_)
            } catch (S) {
                const t = new Error(Nt);
                try {
                    t.cause = S
                } catch (k) {
                }
                throw t
            }
            if (!v) return v;
            if ("number" === typeof v.statusCode && (v.statusCode < 200 || v.statusCode >= 300)) throw new ls(v.statusCode);
            const b = (0, It.WG)({}, v);
            if ((0, It.Q)(b, "replay")) throw new ds(b);
            return v
        }

        class ls extends Error {
            constructor(t) {
                super(`Transport returned status code ${t}`)
            }
        }

        class ds extends Error {
            constructor(t) {
                super("Rate limit hit"), this.rateLimits = t
            }
        }

        async function ps(t, e = {count: 0, interval: 5e3}) {
            const {recordingData: n, options: r} = t;
            if (n.length) try {
                return await us(t), !0
            } catch (s) {
                if (s instanceof ls || s instanceof ds) throw s;
                if ((0, R.v)("Replays", {_retryCount: e.count}), cr && r._experiments && r._experiments.captureExceptions && (0, R.Tb)(s), e.count >= 3) {
                    const t = new Error("Unable to send Replay - max retries exceeded");
                    try {
                        t.cause = s
                    } catch (i) {
                    }
                    throw t
                }
                return e.interval *= ++e.count, new Promise(((n, r) => {
                    setTimeout((async () => {
                        try {
                            await ps(t, e), n(!0)
                        } catch (s) {
                            r(s)
                        }
                    }), e.interval)
                }))
            }
        }

        const hs = "__THROTTLED";

        function fs(t, e, n) {
            const r = new Map;
            let s = !1;
            return (...i) => {
                const o = Math.floor(Date.now() / 1e3);
                if ((t => {
                    const e = t - n;
                    r.forEach(((t, n) => {
                        n < e && r.delete(n)
                    }))
                })(o), [...r.values()].reduce(((t, e) => t + e), 0) >= e) {
                    const t = s;
                    return s = !0, t ? "__SKIPPED" : hs
                }
                s = !1;
                const a = r.get(o) || 0;
                return r.set(o, a + 1), t(...i)
            }
        }

        class ms {
            constructor({options: t, recordingOptions: e}) {
                ms.prototype.__init.call(this), ms.prototype.__init2.call(this), ms.prototype.__init3.call(this), ms.prototype.__init4.call(this), ms.prototype.__init5.call(this), ms.prototype.__init6.call(this), this.eventBuffer = null, this.performanceEntries = [], this.replayPerformanceEntries = [], this.recordingMode = "session", this.timeouts = {
                    sessionIdlePause: 3e5,
                    sessionIdleExpire: 9e5
                }, this._lastActivity = Date.now(), this._isEnabled = !1, this._isPaused = !1, this._hasInitializedCoreListeners = !1, this._context = {
                    errorIds: new Set,
                    traceIds: new Set,
                    urls: [],
                    initialTimestamp: Date.now(),
                    initialUrl: ""
                }, this._recordingOptions = e, this._options = t, this._debouncedFlush = function (t, e, n) {
                    let r, s, i;
                    const o = n && n.maxWait ? Math.max(n.maxWait, e) : 0;

                    function a() {
                        return c(), r = t(), r
                    }

                    function c() {
                        void 0 !== s && clearTimeout(s), void 0 !== i && clearTimeout(i), s = i = void 0
                    }

                    function u() {
                        return s && clearTimeout(s), s = setTimeout(a, e), o && void 0 === i && (i = setTimeout(a, o)), r
                    }

                    return u.cancel = c, u.flush = function () {
                        return void 0 !== s || void 0 !== i ? a() : r
                    }, u
                }((() => this._flush()), this._options.flushMinDelay, {maxWait: this._options.flushMaxDelay}), this._throttledAddEvent = fs(((t, e) => function (t, e, n) {
                    return Mr(t, e) ? Rr(t, e, n) : Promise.resolve(null)
                }(this, t, e)), 300, 5);
                const {slowClickTimeout: n, slowClickIgnoreSelectors: r} = this.getOptions(), s = n ? {
                    threshold: Math.min(3e3, n),
                    timeout: n,
                    scrollTimeout: 300,
                    ignoreSelector: r ? r.join(",") : ""
                } : void 0;
                s && (this.clickDetector = new Gn(this, s))
            }

            getContext() {
                return this._context
            }

            isEnabled() {
                return this._isEnabled
            }

            isPaused() {
                return this._isPaused
            }

            isRecordingCanvas() {
                return Boolean(this._canvas)
            }

            getOptions() {
                return this._options
            }

            initializeSampling(t) {
                const {errorSampleRate: e, sessionSampleRate: n} = this._options;
                e <= 0 && n <= 0 || (this._initializeSessionForSampling(t), this.session ? !1 !== this.session.sampled && (this.recordingMode = "buffer" === this.session.sampled && 0 === this.session.segmentId ? "buffer" : "session", lr(`[Replay] Starting replay in ${this.recordingMode} mode`, this._options._experiments.traceInternals), this._initializeRecording()) : this._handleException(new Error("Unable to initialize and create session")))
            }

            start() {
                if (this._isEnabled && "session" === this.recordingMode) throw new Error("Replay recording is already in progress");
                if (this._isEnabled && "buffer" === this.recordingMode) throw new Error("Replay buffering is in progress, call `flush()` to save the replay");
                lr("[Replay] Starting replay in session mode", this._options._experiments.traceInternals);
                const t = Cr({
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    traceInternals: this._options._experiments.traceInternals
                }, {stickySession: this._options.stickySession, sessionSampleRate: 1, allowBuffering: !1});
                this.session = t, this._initializeRecording()
            }

            startBuffering() {
                if (this._isEnabled) throw new Error("Replay recording is already in progress");
                lr("[Replay] Starting replay in buffer mode", this._options._experiments.traceInternals);
                const t = Cr({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals
                }, {stickySession: this._options.stickySession, sessionSampleRate: 0, allowBuffering: !0});
                this.session = t, this.recordingMode = "buffer", this._initializeRecording()
            }

            startRecording() {
                try {
                    const t = this._canvas;
                    this._stopRecording = Fn({
                        ...this._recordingOptions, ..."buffer" === this.recordingMode && {checkoutEveryNms: 6e4},
                        emit: cs(this),
                        onMutation: this._onMutationHandler, ...t ? {
                            recordCanvas: t.recordCanvas,
                            getCanvasManager: t.getCanvasManager,
                            sampling: t.sampling,
                            dataURLOptions: t.dataURLOptions
                        } : {}
                    })
                } catch (t) {
                    this._handleException(t)
                }
            }

            stopRecording() {
                try {
                    return this._stopRecording && (this._stopRecording(), this._stopRecording = void 0), !0
                } catch (t) {
                    return this._handleException(t), !1
                }
            }

            async stop({forceFlush: t = !1, reason: e} = {}) {
                if (this._isEnabled) {
                    this._isEnabled = !1;
                    try {
                        ur("[Replay] Stopping Replay" + (e ? ` triggered by ${e}` : ""), this._options._experiments.traceInternals), this._removeListeners(), this.stopRecording(), this._debouncedFlush.cancel(), t && await this._flush({force: !0}), this.eventBuffer && this.eventBuffer.destroy(), this.eventBuffer = null, vr(this)
                    } catch (n) {
                        this._handleException(n)
                    }
                }
            }

            pause() {
                this._isPaused || (this._isPaused = !0, this.stopRecording(), ur("[Replay] Pausing replay", this._options._experiments.traceInternals))
            }

            resume() {
                this._isPaused && this._checkSession() && (this._isPaused = !1, this.startRecording(), ur("[Replay] Resuming replay", this._options._experiments.traceInternals))
            }

            async sendBufferedReplayOrFlush({continueRecording: t = !0} = {}) {
                if ("session" === this.recordingMode) return this.flushImmediate();
                const e = Date.now();
                ur("[Replay] Converting buffer to session", this._options._experiments.traceInternals), await this.flushImmediate();
                const n = this.stopRecording();
                t && n && "session" !== this.recordingMode && (this.recordingMode = "session", this.session && (this._updateUserActivity(e), this._updateSessionActivity(e), this._maybeSaveSession()), this.startRecording())
            }

            addUpdate(t) {
                const e = t();
                "buffer" !== this.recordingMode && !0 !== e && this._debouncedFlush()
            }

            triggerUserActivity() {
                if (this._updateUserActivity(), this._stopRecording) this.checkAndHandleExpiredSession(), this._updateSessionActivity(); else {
                    if (!this._checkSession()) return;
                    this.resume()
                }
            }

            updateUserActivity() {
                this._updateUserActivity(), this._updateSessionActivity()
            }

            conditionalFlush() {
                return "buffer" === this.recordingMode ? Promise.resolve() : this.flushImmediate()
            }

            flush() {
                return this._debouncedFlush()
            }

            flushImmediate() {
                return this._debouncedFlush(), this._debouncedFlush.flush()
            }

            cancelFlush() {
                this._debouncedFlush.cancel()
            }

            getSessionId() {
                return this.session && this.session.id
            }

            checkAndHandleExpiredSession() {
                if (!(this._lastActivity && Tr(this._lastActivity, this.timeouts.sessionIdlePause) && this.session && "session" === this.session.sampled)) return !!this._checkSession();
                this.pause()
            }

            setInitialState() {
                const t = `${At.location.pathname}${At.location.hash}${At.location.search}`,
                    e = `${At.location.origin}${t}`;
                this.performanceEntries = [], this.replayPerformanceEntries = [], this._clearContext(), this._context.initialUrl = e, this._context.initialTimestamp = Date.now(), this._context.urls.push(e)
            }

            throttledAddEvent(t, e) {
                const n = this._throttledAddEvent(t, e);
                if (n === hs) {
                    const t = Kn({category: "replay.throttled"});
                    this.addUpdate((() => !Ir(this, {
                        type: 5,
                        timestamp: t.timestamp || 0,
                        data: {tag: "breadcrumb", payload: t, metric: !0}
                    })))
                }
                return n
            }

            getCurrentRoute() {
                const t = this.lastTransaction || (0, R.nZ)().getTransaction(),
                    e = (t && (0, M.XU)(t).data || {})[z.Zj];
                if (t && e && ["route", "custom"].includes(e)) return (0, M.XU)(t).description
            }

            _initializeRecording() {
                this.setInitialState(), this._updateSessionActivity(), this.eventBuffer = yr({
                    useCompression: this._options.useCompression,
                    workerUrl: this._options.workerUrl
                }), this._removeListeners(), this._addListeners(), this._isEnabled = !0, this._isPaused = !1, this.startRecording()
            }

            _handleException(t) {
                cr && C.kg.error("[Replay]", t), cr && this._options._experiments && this._options._experiments.captureExceptions && (0, R.Tb)(t)
            }

            _initializeSessionForSampling(t) {
                const e = this._options.errorSampleRate > 0, n = Cr({
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration,
                    traceInternals: this._options._experiments.traceInternals,
                    previousSessionId: t
                }, {
                    stickySession: this._options.stickySession,
                    sessionSampleRate: this._options.sessionSampleRate,
                    allowBuffering: e
                });
                this.session = n
            }

            _checkSession() {
                if (!this.session) return !1;
                const t = this.session;
                return !Er(t, {
                    sessionIdleExpire: this.timeouts.sessionIdleExpire,
                    maxReplayDuration: this._options.maxReplayDuration
                }) || (this._refreshSession(t), !1)
            }

            async _refreshSession(t) {
                this._isEnabled && (await this.stop({reason: "refresh session"}), this.initializeSampling(t.id))
            }

            _addListeners() {
                try {
                    At.document.addEventListener("visibilitychange", this._handleVisibilityChange), At.addEventListener("blur", this._handleWindowBlur), At.addEventListener("focus", this._handleWindowFocus), At.addEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.addListeners(), this._hasInitializedCoreListeners || (!function (t) {
                        const e = (0, R.nZ)(), n = (0, R.s3)();
                        e.addScopeListener(is(t)), (0, Et.O)(er(t)), (0, Ct.a)(Fr(t)), rs(t);
                        const r = Pr(t, !os(n));
                        n && n.addEventProcessor ? n.addEventProcessor(r) : (0, q.Q)(r), os(n) && (n.on("beforeSendEvent", Lr(t)), n.on("afterSendEvent", Nr(t)), n.on("createDsc", (e => {
                            const n = t.getSessionId();
                            n && t.isEnabled() && "session" === t.recordingMode && t.checkAndHandleExpiredSession() && (e.replay_id = n)
                        })), n.on("startTransaction", (e => {
                            t.lastTransaction = e
                        })), n.on("finishTransaction", (e => {
                            t.lastTransaction = e
                        })), n.on("beforeSendFeedback", ((e, n) => {
                            const r = t.getSessionId();
                            n && n.includeReplay && t.isEnabled() && r && e.contexts && e.contexts.feedback && (e.contexts.feedback.replay_id = r)
                        })))
                    }(this), this._hasInitializedCoreListeners = !0)
                } catch (t) {
                    this._handleException(t)
                }
                this._performanceCleanupCallback = ar(this)
            }

            _removeListeners() {
                try {
                    At.document.removeEventListener("visibilitychange", this._handleVisibilityChange), At.removeEventListener("blur", this._handleWindowBlur), At.removeEventListener("focus", this._handleWindowFocus), At.removeEventListener("keydown", this._handleKeyboardEvent), this.clickDetector && this.clickDetector.removeListeners(), this._performanceCleanupCallback && this._performanceCleanupCallback()
                } catch (t) {
                    this._handleException(t)
                }
            }

            __init() {
                this._handleVisibilityChange = () => {
                    "visible" === At.document.visibilityState ? this._doChangeToForegroundTasks() : this._doChangeToBackgroundTasks()
                }
            }

            __init2() {
                this._handleWindowBlur = () => {
                    const t = Kn({category: "ui.blur"});
                    this._doChangeToBackgroundTasks(t)
                }
            }

            __init3() {
                this._handleWindowFocus = () => {
                    const t = Kn({category: "ui.focus"});
                    this._doChangeToForegroundTasks(t)
                }
            }

            __init4() {
                this._handleKeyboardEvent = t => {
                    rr(this, t)
                }
            }

            _doChangeToBackgroundTasks(t) {
                if (!this.session) return;
                xr(this.session, {
                    maxReplayDuration: this._options.maxReplayDuration,
                    sessionIdleExpire: this.timeouts.sessionIdleExpire
                }) || (t && this._createCustomBreadcrumb(t), this.conditionalFlush())
            }

            _doChangeToForegroundTasks(t) {
                if (!this.session) return;
                this.checkAndHandleExpiredSession() ? t && this._createCustomBreadcrumb(t) : ur("[Replay] Document has become active, but session has expired")
            }

            _updateUserActivity(t = Date.now()) {
                this._lastActivity = t
            }

            _updateSessionActivity(t = Date.now()) {
                this.session && (this.session.lastActivity = t, this._maybeSaveSession())
            }

            _createCustomBreadcrumb(t) {
                this.addUpdate((() => {
                    this.throttledAddEvent({
                        type: qe.Custom,
                        timestamp: t.timestamp || 0,
                        data: {tag: "breadcrumb", payload: t}
                    })
                }))
            }

            _addPerformanceEntries() {
                const t = (e = this.performanceEntries, e.map(ir).filter(Boolean)).concat(this.replayPerformanceEntries);
                var e;
                return this.performanceEntries = [], this.replayPerformanceEntries = [], Promise.all($r(this, t))
            }

            _clearContext() {
                this._context.errorIds.clear(), this._context.traceIds.clear(), this._context.urls = []
            }

            _updateInitialTimestampFromEventBuffer() {
                const {session: t, eventBuffer: e} = this;
                if (!t || !e) return;
                if (t.segmentId) return;
                const n = e.getEarliestTimestamp();
                n && n < this._context.initialTimestamp && (this._context.initialTimestamp = n)
            }

            _popEventContext() {
                const t = {
                    initialTimestamp: this._context.initialTimestamp,
                    initialUrl: this._context.initialUrl,
                    errorIds: Array.from(this._context.errorIds),
                    traceIds: Array.from(this._context.traceIds),
                    urls: this._context.urls
                };
                return this._clearContext(), t
            }

            async _runFlush() {
                const t = this.getSessionId();
                if (this.session && this.eventBuffer && t) {
                    if (await this._addPerformanceEntries(), this.eventBuffer && this.eventBuffer.hasEvents && (await async function (t) {
                        try {
                            return Promise.all($r(t, [as(At.performance.memory)]))
                        } catch (e) {
                            return []
                        }
                    }(this), this.eventBuffer && t === this.getSessionId())) try {
                        this._updateInitialTimestampFromEventBuffer();
                        const e = Date.now();
                        if (e - this._context.initialTimestamp > this._options.maxReplayDuration + 3e4) throw new Error("Session is too long, not sending replay");
                        const n = this._popEventContext(), r = this.session.segmentId++;
                        this._maybeSaveSession();
                        const s = await this.eventBuffer.finish();
                        await ps({
                            replayId: t,
                            recordingData: s,
                            segmentId: r,
                            eventContext: n,
                            session: this.session,
                            options: this.getOptions(),
                            timestamp: e
                        })
                    } catch (e) {
                        this._handleException(e), this.stop({reason: "sendReplay"});
                        const t = (0, R.s3)();
                        t && t.recordDroppedEvent("send_error", "replay")
                    }
                } else cr && C.kg.error("[Replay] No session or eventBuffer found to flush.")
            }

            __init5() {
                this._flush = async ({force: t = !1} = {}) => {
                    if (!this._isEnabled && !t) return;
                    if (!this.checkAndHandleExpiredSession()) return void (cr && C.kg.error("[Replay] Attempting to finish replay event after session expired."));
                    if (!this.session) return;
                    const e = this.session.started, n = Date.now() - e;
                    this._debouncedFlush.cancel();
                    const r = n < this._options.minReplayDuration, s = n > this._options.maxReplayDuration + 5e3;
                    if (r || s) return ur(`[Replay] Session duration (${Math.floor(n / 1e3)}s) is too ${r ? "short" : "long"}, not sending replay.`, this._options._experiments.traceInternals), void (r && this._debouncedFlush());
                    const i = this.eventBuffer;
                    if (i && 0 === this.session.segmentId && !i.hasCheckout && ur("[Replay] Flushing initial segment without checkout.", this._options._experiments.traceInternals), !this._flushLock) return this._flushLock = this._runFlush(), await this._flushLock, void (this._flushLock = void 0);
                    try {
                        await this._flushLock
                    } catch (o) {
                        cr && C.kg.error(o)
                    } finally {
                        this._debouncedFlush()
                    }
                }
            }

            _maybeSaveSession() {
                this.session && this._options.stickySession && kr(this.session)
            }

            __init6() {
                this._onMutationHandler = t => {
                    const e = t.length, n = this._options.mutationLimit, r = n && e > n;
                    if (e > this._options.mutationBreadcrumbLimit || r) {
                        const t = Kn({category: "replay.mutations", data: {count: e, limit: r}});
                        this._createCustomBreadcrumb(t)
                    }
                    return !r || (this.stop({
                        reason: "mutationLimit",
                        forceFlush: "session" === this.recordingMode
                    }), !1)
                }
            }
        }

        function gs(t, e, n, r) {
            const s = [...t, ..."string" === typeof r ? r.split(",") : [], ...e];
            return "undefined" !== typeof n && ("string" === typeof n && s.push(`.${n}`), (0, C.Cf)((() => {
                console.warn("[Replay] You are using a deprecated configuration item for privacy. Read the documentation on how to use the new privacy configuration.")
            }))), s.join(",")
        }

        const ys = 'img,image,svg,video,object,picture,embed,map,audio,link[rel="icon"],link[rel="apple-touch-icon"]',
            _s = ["content-length", "content-type", "accept"];
        let vs = !1;
        const bs = t => new Ss(t);

        class Ss {
            static __initStatic() {
                this.id = "Replay"
            }

            constructor({
                            flushMinDelay: t = 5e3,
                            flushMaxDelay: e = 5500,
                            minReplayDuration: n = 4999,
                            maxReplayDuration: r = 36e5,
                            stickySession: s = !0,
                            useCompression: i = !0,
                            workerUrl: o,
                            _experiments: a = {},
                            sessionSampleRate: c,
                            errorSampleRate: u,
                            maskAllText: l = !0,
                            maskAllInputs: d = !0,
                            blockAllMedia: p = !0,
                            mutationBreadcrumbLimit: h = 750,
                            mutationLimit: f = 1e4,
                            slowClickTimeout: m = 7e3,
                            slowClickIgnoreSelectors: g = [],
                            networkDetailAllowUrls: y = [],
                            networkDetailDenyUrls: _ = [],
                            networkCaptureBodies: v = !0,
                            networkRequestHeaders: b = [],
                            networkResponseHeaders: S = [],
                            mask: k = [],
                            maskAttributes: w = ["title", "placeholder"],
                            unmask: T = [],
                            block: x = [],
                            unblock: E = [],
                            ignore: C = [],
                            maskFn: I,
                            beforeAddRecordingEvent: R,
                            beforeErrorSampling: M,
                            blockClass: O,
                            blockSelector: A,
                            maskInputOptions: D,
                            maskTextClass: N,
                            maskTextSelector: L,
                            ignoreClass: P
                        } = {}) {
                this.name = Ss.id;
                const $ = function ({
                                        mask: t,
                                        unmask: e,
                                        block: n,
                                        unblock: r,
                                        ignore: s,
                                        blockClass: i,
                                        blockSelector: o,
                                        maskTextClass: a,
                                        maskTextSelector: c,
                                        ignoreClass: u
                                    }) {
                    const l = {
                        maskTextSelector: gs(t, [".sentry-mask", "[data-sentry-mask]"], a, c),
                        unmaskTextSelector: gs(e, [".sentry-unmask", "[data-sentry-unmask]"]),
                        blockSelector: gs(n, [".sentry-block", "[data-sentry-block]", 'base[href="/"]'], i, o),
                        unblockSelector: gs(r, [".sentry-unblock", "[data-sentry-unblock]"]),
                        ignoreSelector: gs(s, [".sentry-ignore", "[data-sentry-ignore]", 'input[type="file"]'], u)
                    };
                    return i instanceof RegExp && (l.blockClass = i), a instanceof RegExp && (l.maskTextClass = a), l
                }({
                    mask: k,
                    unmask: T,
                    block: x,
                    unblock: E,
                    ignore: C,
                    blockClass: O,
                    blockSelector: A,
                    maskTextClass: N,
                    maskTextSelector: L,
                    ignoreClass: P
                });
                if (this._recordingOptions = {
                    maskAllInputs: d,
                    maskAllText: l,
                    maskInputOptions: {...D || {}, password: !0},
                    maskTextFn: I,
                    maskInputFn: I,
                    maskAttributeFn: (t, e, n) => function ({
                                                                el: t,
                                                                key: e,
                                                                maskAttributes: n,
                                                                maskAllText: r,
                                                                privacyOptions: s,
                                                                value: i
                                                            }) {
                        return r ? s.unmaskTextSelector && t.matches(s.unmaskTextSelector) ? i : n.includes(e) || "value" === e && "INPUT" === t.tagName && ["submit", "button"].includes(t.getAttribute("type") || "") ? i.replace(/[\S]/g, "*") : i : i
                    }({maskAttributes: w, maskAllText: l, privacyOptions: $, key: t, value: e, el: n}), ...$,
                    slimDOMOptions: "all",
                    inlineStylesheet: !0,
                    inlineImages: !1,
                    collectFonts: !0,
                    errorHandler: t => {
                        try {
                            t.__rrweb__ = !0
                        } catch (e) {
                        }
                    }
                }, this._initialOptions = {
                    flushMinDelay: t,
                    flushMaxDelay: e,
                    minReplayDuration: Math.min(n, 15e3),
                    maxReplayDuration: Math.min(r, Ft),
                    stickySession: s,
                    sessionSampleRate: c,
                    errorSampleRate: u,
                    useCompression: i,
                    workerUrl: o,
                    blockAllMedia: p,
                    maskAllInputs: d,
                    maskAllText: l,
                    mutationBreadcrumbLimit: h,
                    mutationLimit: f,
                    slowClickTimeout: m,
                    slowClickIgnoreSelectors: g,
                    networkDetailAllowUrls: y,
                    networkDetailDenyUrls: _,
                    networkCaptureBodies: v,
                    networkRequestHeaders: ks(b),
                    networkResponseHeaders: ks(S),
                    beforeAddRecordingEvent: R,
                    beforeErrorSampling: M,
                    _experiments: a
                }, "number" === typeof c && (console.warn(`[Replay] You are passing \`sessionSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysSessionSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysSessionSampleRate: ${c} })`), this._initialOptions.sessionSampleRate = c), "number" === typeof u && (console.warn(`[Replay] You are passing \`errorSampleRate\` to the Replay integration.\nThis option is deprecated and will be removed soon.\nInstead, configure \`replaysOnErrorSampleRate\` directly in the SDK init options, e.g.:\nSentry.init({ replaysOnErrorSampleRate: ${u} })`), this._initialOptions.errorSampleRate = u), this._initialOptions.blockAllMedia && (this._recordingOptions.blockSelector = this._recordingOptions.blockSelector ? `${this._recordingOptions.blockSelector},${ys}` : ys), this._isInitialized && Mt()) throw new Error("Multiple Sentry Session Replay instances are not supported");
                this._isInitialized = !0
            }

            get _isInitialized() {
                return vs
            }

            set _isInitialized(t) {
                vs = t
            }

            setupOnce() {
                Mt() && (this._setup(), setTimeout((() => this._initialize())))
            }

            start() {
                this._replay && this._replay.start()
            }

            startBuffering() {
                this._replay && this._replay.startBuffering()
            }

            stop() {
                return this._replay ? this._replay.stop({forceFlush: "session" === this._replay.recordingMode}) : Promise.resolve()
            }

            flush(t) {
                return this._replay && this._replay.isEnabled() ? this._replay.sendBufferedReplayOrFlush(t) : Promise.resolve()
            }

            getReplayId() {
                if (this._replay && this._replay.isEnabled()) return this._replay.getSessionId()
            }

            _initialize() {
                this._replay && (this._maybeLoadFromReplayCanvasIntegration(), this._replay.initializeSampling())
            }

            _setup() {
                const t = function (t) {
                    const e = (0, R.s3)(), n = e && e.getOptions(),
                        r = {sessionSampleRate: 0, errorSampleRate: 0, ...(0, bt.Jr)(t)};
                    if (!n) return (0, C.Cf)((() => {
                        console.warn("SDK client is not available.")
                    })), r;
                    null == t.sessionSampleRate && null == t.errorSampleRate && null == n.replaysSessionSampleRate && null == n.replaysOnErrorSampleRate && (0, C.Cf)((() => {
                        console.warn("Replay is disabled because neither `replaysSessionSampleRate` nor `replaysOnErrorSampleRate` are set.")
                    }));
                    "number" === typeof n.replaysSessionSampleRate && (r.sessionSampleRate = n.replaysSessionSampleRate);
                    "number" === typeof n.replaysOnErrorSampleRate && (r.errorSampleRate = n.replaysOnErrorSampleRate);
                    return r
                }(this._initialOptions);
                this._replay = new ms({options: t, recordingOptions: this._recordingOptions})
            }

            _maybeLoadFromReplayCanvasIntegration() {
                try {
                    const t = (0, R.s3)().getIntegrationByName("ReplayCanvas");
                    if (!t) return;
                    this._replay._canvas = t.getOptions()
                } catch (t) {
                }
            }
        }

        function ks(t) {
            return [..._s, ...t.map((t => t.toLowerCase()))]
        }

        function ws() {
            const t = (0, R.s3)();
            return t && t.getIntegrationByName && t.getIntegrationByName("Replay")
        }

        var Ts;

        function xs(t, e, n = 1 / 0, r = 0) {
            return t ? t.nodeType !== t.ELEMENT_NODE || r > n ? -1 : e(t) ? r : xs(t.parentNode, e, n, r + 1) : -1
        }

        function Es(t, e) {
            return n => {
                const r = n;
                if (null === r) return !1;
                try {
                    if (t) if ("string" === typeof t) {
                        if (r.matches(`.${t}`)) return !0
                    } else if (function (t, e) {
                        for (let n = t.classList.length; n--;) {
                            const r = t.classList[n];
                            if (e.test(r)) return !0
                        }
                        return !1
                    }(r, t)) return !0;
                    return !(!e || !r.matches(e))
                } catch (s) {
                    return !1
                }
            }
        }

        Ss.__initStatic(), function (t) {
            t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment"
        }(Ts || (Ts = {}));
        const Cs = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
        let Is, Rs = {
            map: {},
            getId: () => (console.error(Cs), -1),
            getNode: () => (console.error(Cs), null),
            removeNodeFromMap() {
                console.error(Cs)
            },
            has: () => (console.error(Cs), !1),
            reset() {
                console.error(Cs)
            }
        };

        function Ms(t, e, n, r, s = window) {
            const i = s.Object.getOwnPropertyDescriptor(t, e);
            return s.Object.defineProperty(t, e, r ? n : {
                set(t) {
                    setTimeout((() => {
                        n.set.call(this, t)
                    }), 0), i && i.set && i.set.call(this, t)
                }
            }), () => Ms(t, e, i || {}, !0)
        }

        function Os(t, e, n) {
            try {
                if (!(e in t)) return () => {
                };
                const r = t[e], s = n(r);
                return "function" === typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
                    __rrweb_original__: {
                        enumerable: !1,
                        value: r
                    }
                })), t[e] = s, () => {
                    t[e] = r
                }
            } catch (r) {
                return () => {
                }
            }
        }

        function As(t, e, n, r, s) {
            if (!t) return !1;
            const i = t.nodeType === t.ELEMENT_NODE ? t : t.parentElement;
            if (!i) return !1;
            const o = Es(e, n);
            if (!s) {
                const t = r && i.matches(r);
                return o(i) && !t
            }
            const a = xs(i, o);
            let c = -1;
            return !(a < 0) && (r && (c = xs(i, Es(null, r))), a > -1 && c < 0 || a < c)
        }

        function Ds(...t) {
            return function () {
                if (Is) return Is;
                const t = window.document;
                let e = window.requestAnimationFrame;
                if (t && "function" === typeof t.createElement) try {
                    const n = t.createElement("iframe");
                    n.hidden = !0, t.head.appendChild(n);
                    const r = n.contentWindow;
                    r && r.requestAnimationFrame && (e = r.requestAnimationFrame), t.head.removeChild(n)
                } catch (n) {
                }
                return Is = e.bind(window)
            }()(...t)
        }

        "undefined" !== typeof window && window.Proxy && window.Reflect && (Rs = new Proxy(Rs, {get: (t, e, n) => ("map" === e && console.error(Cs), Reflect.get(t, e, n))})), /[1-9][0-9]{12}/.test(Date.now().toString());
        var Ns = (t => (t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", t))(Ns || {});
        let Ls;
        const Ps = t => {
            if (!Ls) return t;
            return (...e) => {
                try {
                    return t(...e)
                } catch (n) {
                    if (Ls && !0 === Ls(n)) return () => {
                    };
                    throw n
                }
            }
        };
        for (var $s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fs = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), js = 0; js < $s.length; js++) Fs[$s.charCodeAt(js)] = js;
        const Us = new Map;
        const Bs = (t, e, n) => {
            if (!t || !zs(t, e) && "object" !== typeof t) return;
            const r = function (t, e) {
                let n = Us.get(t);
                return n || (n = new Map, Us.set(t, n)), n.has(e) || n.set(e, []), n.get(e)
            }(n, t.constructor.name);
            let s = r.indexOf(t);
            return -1 === s && (s = r.length, r.push(t)), s
        };

        function Hs(t, e, n) {
            if (t instanceof Array) return t.map((t => Hs(t, e, n)));
            if (null === t) return t;
            if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) {
                return {rr_type: t.constructor.name, args: [Object.values(t)]}
            }
            if (t instanceof ArrayBuffer) {
                const e = t.constructor.name, n = function (t) {
                    var e, n = new Uint8Array(t), r = n.length, s = "";
                    for (e = 0; e < r; e += 3) s += $s[n[e] >> 2], s += $s[(3 & n[e]) << 4 | n[e + 1] >> 4], s += $s[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], s += $s[63 & n[e + 2]];
                    return r % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : r % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="), s
                }(t);
                return {rr_type: e, base64: n}
            }
            if (t instanceof DataView) {
                return {rr_type: t.constructor.name, args: [Hs(t.buffer, e, n), t.byteOffset, t.byteLength]}
            }
            if (t instanceof HTMLImageElement) {
                const e = t.constructor.name, {src: n} = t;
                return {rr_type: e, src: n}
            }
            if (t instanceof HTMLCanvasElement) {
                return {rr_type: "HTMLImageElement", src: t.toDataURL()}
            }
            if (t instanceof ImageData) {
                return {rr_type: t.constructor.name, args: [Hs(t.data, e, n), t.width, t.height]}
            }
            if (zs(t, e) || "object" === typeof t) {
                return {rr_type: t.constructor.name, index: Bs(t, e, n)}
            }
            return t
        }

        const Xs = (t, e, n) => t.map((t => Hs(t, e, n))), zs = (t, e) => {
            const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((t => "function" === typeof e[t]));
            return Boolean(n.find((n => t instanceof e[n])))
        };

        function Ws(t, e, n, r, s) {
            const i = [];
            try {
                const o = Os(t.HTMLCanvasElement.prototype, "getContext", (function (t) {
                    return function (i, ...o) {
                        if (!As(this, e, n, r, !0)) {
                            const t = function (t) {
                                return "experimental-webgl" === t ? "webgl" : t
                            }(i);
                            if ("__context" in this || (this.__context = t), s && ["webgl", "webgl2"].includes(t)) if (o[0] && "object" === typeof o[0]) {
                                const t = o[0];
                                t.preserveDrawingBuffer || (t.preserveDrawingBuffer = !0)
                            } else o.splice(0, 1, {preserveDrawingBuffer: !0})
                        }
                        return t.apply(this, [i, ...o])
                    }
                }));
                i.push(o)
            } catch (o) {
                console.error("failed to patch HTMLCanvasElement.prototype.getContext")
            }
            return () => {
                i.forEach((t => t()))
            }
        }

        function qs(t, e, n, r, s, i, o, a) {
            const c = [], u = Object.getOwnPropertyNames(t);
            for (const d of u) if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(d)) try {
                if ("function" !== typeof t[d]) continue;
                const o = Os(t, d, (function (t) {
                    return function (...o) {
                        const c = t.apply(this, o);
                        if (Bs(c, a, this), "tagName" in this.canvas && !As(this.canvas, r, s, i, !0)) {
                            const t = Xs(o, a, this), r = {type: e, property: d, args: t};
                            n(this.canvas, r)
                        }
                        return c
                    }
                }));
                c.push(o)
            } catch (l) {
                const r = Ms(t, d, {
                    set(t) {
                        n(this.canvas, {type: e, property: d, args: [t], setter: !0})
                    }
                });
                c.push(r)
            }
            return c
        }

        class Gs {
            reset() {
                this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers()
            }

            freeze() {
                this.frozen = !0
            }

            unfreeze() {
                this.frozen = !1
            }

            lock() {
                this.locked = !0
            }

            unlock() {
                this.locked = !1
            }

            constructor(t) {
                this.pendingCanvasMutations = new Map, this.rafStamps = {
                    latestId: 0,
                    invokeId: null
                }, this.frozen = !1, this.locked = !1, this.processMutation = (t, e) => {
                    !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(t) || this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
                };
                const {
                    sampling: e = "all",
                    win: n,
                    blockClass: r,
                    blockSelector: s,
                    unblockSelector: i,
                    recordCanvas: o,
                    dataURLOptions: a,
                    errorHandler: c
                } = t;
                this.mutationCb = t.mutationCb, this.mirror = t.mirror, this.options = t, c && (Ls = c), t.enableManualSnapshot || Ps((() => {
                    o && "all" === e && this.initCanvasMutationObserver(n, r, s, i), o && "number" === typeof e && this.initCanvasFPSObserver(e, n, r, s, i, {dataURLOptions: a})
                }))()
            }

            initCanvasFPSObserver(t, e, n, r, s, i) {
                const o = Ws(e, n, r, s, !0), a = this.takeSnapshot(!1, t, e, n, r, s, i.dataURLOptions);
                this.resetObservers = () => {
                    o(), cancelAnimationFrame(a)
                }
            }

            initCanvasMutationObserver(t, e, n, r) {
                this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
                const s = Ws(t, e, n, r, !1), i = function (t, e, n, r, s) {
                    const i = [], o = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
                    for (const c of o) try {
                        if ("function" !== typeof e.CanvasRenderingContext2D.prototype[c]) continue;
                        const o = Os(e.CanvasRenderingContext2D.prototype, c, (function (i) {
                            return function (...o) {
                                return As(this.canvas, n, r, s, !0) || setTimeout((() => {
                                    const n = Xs(o, e, this);
                                    t(this.canvas, {type: Ns["2D"], property: c, args: n})
                                }), 0), i.apply(this, o)
                            }
                        }));
                        i.push(o)
                    } catch (a) {
                        const n = Ms(e.CanvasRenderingContext2D.prototype, c, {
                            set(e) {
                                t(this.canvas, {type: Ns["2D"], property: c, args: [e], setter: !0})
                            }
                        });
                        i.push(n)
                    }
                    return () => {
                        i.forEach((t => t()))
                    }
                }(this.processMutation.bind(this), t, e, n, r), o = function (t, e, n, r, s, i) {
                    const o = [];
                    return o.push(...qs(e.WebGLRenderingContext.prototype, Ns.WebGL, t, n, r, s, 0, e)), "undefined" !== typeof e.WebGL2RenderingContext && o.push(...qs(e.WebGL2RenderingContext.prototype, Ns.WebGL2, t, n, r, s, 0, e)), () => {
                        o.forEach((t => t()))
                    }
                }(this.processMutation.bind(this), t, e, n, r, this.mirror);
                this.resetObservers = () => {
                    s(), i(), o()
                }
            }

            snapshot(t) {
                const {options: e} = this,
                    n = this.takeSnapshot(!0, "all" === e.sampling ? 2 : e.sampling || 2, e.win, e.blockClass, e.blockSelector, e.unblockSelector, e.dataURLOptions, t);
                this.resetObservers = () => {
                    cancelAnimationFrame(n)
                }
            }

            takeSnapshot(t, e, n, r, s, i, o, a) {
                const c = new Map, u = new Worker(function () {
                    const t = new Blob(['for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e="undefined"==typeof Uint8Array?[]:new Uint8Array(256),n=0;n<64;n++)e[t.charCodeAt(n)]=n;var a=function(e){var n,a=new Uint8Array(e),s=a.length,r="";for(n=0;n<s;n+=3)r+=t[a[n]>>2],r+=t[(3&a[n])<<4|a[n+1]>>4],r+=t[(15&a[n+1])<<2|a[n+2]>>6],r+=t[63&a[n+2]];return s%3==2?r=r.substring(0,r.length-1)+"=":s%3==1&&(r=r.substring(0,r.length-2)+"=="),r};const s=new Map,r=new Map;const i=self;i.onmessage=async function(t){if(!("OffscreenCanvas"in globalThis))return i.postMessage({id:t.data.id});{const{id:e,bitmap:n,width:o,height:f,dataURLOptions:c}=t.data,g=async function(t,e,n){const s=t+"-"+e;if("OffscreenCanvas"in globalThis){if(r.has(s))return r.get(s);const i=new OffscreenCanvas(t,e);i.getContext("2d");const o=await i.convertToBlob(n),f=await o.arrayBuffer(),c=a(f);return r.set(s,c),c}return""}(o,f,c),d=new OffscreenCanvas(o,f);d.getContext("2d").drawImage(n,0,0),n.close();const u=await d.convertToBlob(c),h=u.type,w=await u.arrayBuffer(),l=a(w);if(!s.has(e)&&await g===l)return s.set(e,l),i.postMessage({id:e});if(s.get(e)===l)return i.postMessage({id:e});i.postMessage({id:e,type:h,base64:l,width:o,height:f}),s.set(e,l)}};']);
                    return URL.createObjectURL(t)
                }());
                u.onmessage = t => {
                    const e = t.data, {id: n} = e;
                    if (c.set(n, !1), !("base64" in e)) return;
                    const {base64: r, type: s, width: i, height: o} = e;
                    this.mutationCb({
                        id: n,
                        type: Ns["2D"],
                        commands: [{property: "clearRect", args: [0, 0, i, o]}, {
                            property: "drawImage",
                            args: [{
                                rr_type: "ImageBitmap",
                                args: [{rr_type: "Blob", data: [{rr_type: "ArrayBuffer", base64: r}], type: s}]
                            }, 0, 0]
                        }]
                    })
                };
                const l = 1e3 / e;
                let d, p = 0;
                const h = e => {
                    p && e - p < l || (p = e, (t => {
                        if (t) return [t];
                        const e = [];
                        return n.document.querySelectorAll("canvas").forEach((t => {
                            As(t, r, s, i, !0) || e.push(t)
                        })), e
                    })(a).forEach((e => {
                        const n = this.mirror.getId(e);
                        if (!c.get(n)) {
                            if (c.set(n, !0), !t && ["webgl", "webgl2"].includes(e.__context)) {
                                const t = e.getContext(e.__context);
                                !1 === (0, mt.x)([t, "optionalAccess", t => t.getContextAttributes, "call", t => t(), "optionalAccess", t => t.preserveDrawingBuffer]) && t.clear(t.COLOR_BUFFER_BIT)
                            }
                            createImageBitmap(e).then((t => {
                                u.postMessage({
                                    id: n,
                                    bitmap: t,
                                    width: e.width,
                                    height: e.height,
                                    dataURLOptions: o
                                }, [t])
                            })).catch((t => {
                                Ps((() => {
                                    throw t
                                }))()
                            }))
                        }
                    }))), d = Ds(h)
                };
                return d = Ds(h), d
            }

            startPendingCanvasMutationFlusher() {
                Ds((() => this.flushPendingCanvasMutations()))
            }

            startRAFTimestamping() {
                const t = e => {
                    this.rafStamps.latestId = e, Ds(t)
                };
                Ds(t)
            }

            flushPendingCanvasMutations() {
                this.pendingCanvasMutations.forEach(((t, e) => {
                    const n = this.mirror.getId(e);
                    this.flushPendingCanvasMutationFor(e, n)
                })), Ds((() => this.flushPendingCanvasMutations()))
            }

            flushPendingCanvasMutationFor(t, e) {
                if (this.frozen || this.locked) return;
                const n = this.pendingCanvasMutations.get(t);
                if (!n || -1 === e) return;
                const r = n.map((t => {
                    const {type: e, ...n} = t;
                    return n
                })), {type: s} = n[0];
                this.mutationCb({id: e, type: s, commands: r}), this.pendingCanvasMutations.delete(t)
            }
        }

        const Js = {
            low: {sampling: {canvas: 1}, dataURLOptions: {type: "image/webp", quality: .25}},
            medium: {sampling: {canvas: 2}, dataURLOptions: {type: "image/webp", quality: .4}},
            high: {sampling: {canvas: 4}, dataURLOptions: {type: "image/webp", quality: .5}}
        }, Vs = "ReplayCanvas", Ys = (0, l._I)(((t = {}) => {
            const e = {quality: t.quality || "medium", enableManualSnapshot: t.enableManualSnapshot};
            let n;
            const r = new Promise((t => n = t));
            return {
                name: Vs, setupOnce() {
                }, getOptions() {
                    const {quality: t, enableManualSnapshot: r} = e;
                    return {
                        enableManualSnapshot: r, recordCanvas: !0, getCanvasManager: t => {
                            const e = new Gs({
                                ...t, enableManualSnapshot: r, errorHandler: t => {
                                    try {
                                        "object" === typeof t && (t.__rrweb__ = !0)
                                    } catch (e) {
                                    }
                                }
                            });
                            return n(e), e
                        }, ...Js[t || "medium"] || Js.medium
                    }
                }, async snapshot(t) {
                    (await r).snapshot(t)
                }
            }
        })), Ks = (0, l.RN)(Vs, Ys);
        var Zs = n(28656);
        const Qs = g.n2, ti = "#ffffff", ei = "inherit", ni = "rgba(108, 95, 199, 1)", ri = {
            fontFamily: "system-ui, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "14px",
            background: ti,
            backgroundHover: "#f6f6f7",
            foreground: "#2b2233",
            border: "1.5px solid rgba(41, 35, 47, 0.13)",
            borderRadius: "12px",
            boxShadow: "0px 4px 24px 0px rgba(43, 34, 51, 0.12)",
            success: "#268d75",
            error: "#df3338",
            submitBackground: "rgba(88, 74, 192, 1)",
            submitBackgroundHover: ni,
            submitBorder: ni,
            submitOutlineFocus: "#29232f",
            submitForeground: ti,
            submitForegroundHover: ti,
            cancelBackground: "transparent",
            cancelBackgroundHover: "var(--background-hover)",
            cancelBorder: "var(--border)",
            cancelOutlineFocus: "var(--input-outline-focus)",
            cancelForeground: "var(--foreground)",
            cancelForegroundHover: "var(--foreground)",
            inputBackground: ei,
            inputForeground: ei,
            inputBorder: "var(--border)",
            inputOutlineFocus: ni,
            formBorderRadius: "20px",
            formContentBorderRadius: "6px"
        }, si = ri, ii = {
            ...ri,
            background: "#29232f",
            backgroundHover: "#352f3b",
            foreground: "#ebe6ef",
            border: "1.5px solid rgba(235, 230, 239, 0.15)",
            success: "#2da98c",
            error: "#f55459"
        }, oi = "widget", ai = "api";

        async function ci({
                              feedback: {
                                  message: t,
                                  email: e,
                                  name: n,
                                  source: r,
                                  url: s
                              }
                          }, {includeReplay: i = !0} = {}) {
            const o = (0, R.s3)(), a = o && o.getTransport(), c = o && o.getDsn();
            if (!o || !a || !c) return;
            const u = {
                contexts: {feedback: {contact_email: e, name: n, message: t, url: s, source: r}},
                type: "feedback"
            };
            return (0, R.$e)((async t => {
                t.clearBreadcrumbs(), [ai, oi].includes(String(r)) && t.setLevel("info");
                const e = await async function ({client: t, scope: e, event: n}) {
                    const r = {};
                    t.emit && t.emit("preprocessEvent", n, r);
                    const s = await (0, _t.R)(t.getOptions(), n, r, e, t, (0, H.aF)());
                    return null === s ? (t.recordDroppedEvent("event_processor", "feedback", n), null) : (s.platform = s.platform || "javascript", s)
                }({scope: t, client: o, event: u});
                if (!e) return;
                o.emit && o.emit("beforeSendFeedback", e, {includeReplay: Boolean(i)});
                const n = (0, Zs.M)(e, c, o.getOptions()._metadata, o.getOptions().tunnel);
                let s;
                try {
                    s = await a.send(n)
                } catch (l) {
                    const t = new Error("Unable to send Feedback");
                    try {
                        t.cause = l
                    } catch (d) {
                    }
                    throw t
                }
                if (s) {
                    if ("number" === typeof s.statusCode && (s.statusCode < 200 || s.statusCode >= 300)) throw new Error("Unable to send Feedback");
                    return s
                }
            }))
        }

        function ui({name: t, email: e, message: n, source: r = ai, url: s = (0, St.l4)()}, i = {}) {
            if (!n) throw new Error("Unable to submit feedback with empty message");
            return ci({feedback: {name: t, email: e, message: n, url: s, source: r}}, i)
        }

        const li = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;

        function di(t, e) {
            return {
                ...t, ...e,
                themeDark: {...t.themeDark, ...e.themeDark},
                themeLight: {...t.themeLight, ...e.themeLight}
            }
        }

        function pi(t) {
            return `\n  --background: ${t.background};\n  --background-hover: ${t.backgroundHover};\n  --foreground: ${t.foreground};\n  --error: ${t.error};\n  --success: ${t.success};\n  --border: ${t.border};\n  --border-radius: ${t.borderRadius};\n  --box-shadow: ${t.boxShadow};\n\n  --submit-background: ${t.submitBackground};\n  --submit-background-hover: ${t.submitBackgroundHover};\n  --submit-border: ${t.submitBorder};\n  --submit-outline-focus: ${t.submitOutlineFocus};\n  --submit-foreground: ${t.submitForeground};\n  --submit-foreground-hover: ${t.submitForegroundHover};\n\n  --cancel-background: ${t.cancelBackground};\n  --cancel-background-hover: ${t.cancelBackgroundHover};\n  --cancel-border: ${t.cancelBorder};\n  --cancel-outline-focus: ${t.cancelOutlineFocus};\n  --cancel-foreground: ${t.cancelForeground};\n  --cancel-foreground-hover: ${t.cancelForegroundHover};\n\n  --input-background: ${t.inputBackground};\n  --input-foreground: ${t.inputForeground};\n  --input-border: ${t.inputBorder};\n  --input-outline-focus: ${t.inputOutlineFocus};\n\n  --form-border-radius: ${t.formBorderRadius};\n  --form-content-border-radius: ${t.formContentBorderRadius};\n  `
        }

        function hi({id: t, colorScheme: e, themeDark: n, themeLight: r}) {
            try {
                const s = Qs.document, i = s.createElement("div");
                i.id = t;
                const o = i.attachShadow({mode: "open"});
                return o.appendChild(function (t, e, n) {
                    const r = t.createElement("style");
                    return r.textContent = `\n:host {\n  --bottom: 1rem;\n  --right: 1rem;\n  --top: auto;\n  --left: auto;\n  --z-index: 100000;\n  --font-family: ${n.light.fontFamily};\n  --font-size: ${n.light.fontSize};\n\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n  z-index: var(--z-index);\n\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n\n  ${pi("dark" === e ? n.dark : n.light)}\n}\n\n${"system" === e ? `\n@media (prefers-color-scheme: dark) {\n  :host {\n    ${pi(n.dark)}\n  }\n}` : ""}\n}`, r
                }(s, e, {dark: n, light: r})), o.appendChild(function (t) {
                    const e = t.createElement("style");
                    return e.textContent = "\n.dialog {\n  line-height: 25px;\n  background-color: rgba(0, 0, 0, 0.05);\n  border: none;\n  position: fixed;\n  inset: 0;\n  z-index: 10000;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 1;\n  transition: opacity 0.2s ease-in-out;\n}\n\n.dialog:not([open]) {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n.dialog:not([open]) .dialog__content {\n  transform: translate(0, -16px) scale(0.98);\n}\n\n.dialog__content {\n  position: fixed;\n  left: var(--left);\n  right: var(--right);\n  bottom: var(--bottom);\n  top: var(--top);\n\n  border: var(--border);\n  border-radius: var(--form-border-radius);\n  background-color: var(--background);\n  color: var(--foreground);\n\n  width: 320px;\n  max-width: 100%;\n  max-height: calc(100% - 2rem);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--box-shadow);\n  transition: transform 0.2s ease-in-out;\n  transform: translate(0, 0) scale(1);\n}\n\n.dialog__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n  font-weight: 600;\n  padding: 24px 24px 0 24px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.brand-link {\n  display: inline-flex;\n}\n\n.error {\n  color: var(--error);\n  margin-bottom: 16px;\n}\n\n.form {\n  display: grid;\n  overflow: auto;\n  flex-direction: column;\n  gap: 16px;\n  padding: 0 24px 24px;\n}\n\n.form__error-container {\n  color: var(--error);\n}\n\n.form__error-container--hidden {\n  display: none;\n}\n\n.form__label {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin: 0px;\n}\n\n.form__label__text {\n  display: grid;\n  gap: 4px;\n  align-items: center;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n}\n\n.form__label__text--required {\n  font-size: 0.85em;\n}\n\n.form__input {\n  font-family: inherit;\n  line-height: inherit;\n  background-color: var(--input-background);\n  box-sizing: border-box;\n  border: var(--input-border);\n  border-radius: var(--form-content-border-radius);\n  color: var(--input-foreground);\n  font-size: 14px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n.form__input:focus-visible {\n  outline: 1px auto var(--input-outline-focus);\n}\n\n.form__input--textarea {\n  font-family: inherit;\n  resize: vertical;\n}\n\n.btn-group {\n  display: grid;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.btn {\n  line-height: inherit;\n  border: var(--cancel-border);\n  border-radius: var(--form-content-border-radius);\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 6px 16px;\n}\n.btn[disabled] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.btn--primary {\n  background-color: var(--submit-background);\n  border-color: var(--submit-border);\n  color: var(--submit-foreground);\n}\n.btn--primary:hover {\n  background-color: var(--submit-background-hover);\n  color: var(--submit-foreground-hover);\n}\n.btn--primary:focus-visible {\n  outline: 1px auto var(--submit-outline-focus);\n}\n\n.btn--default {\n  background-color: var(--cancel-background);\n  color: var(--cancel-foreground);\n  font-weight: 500;\n}\n.btn--default:hover {\n  background-color: var(--cancel-background-hover);\n  color: var(--cancel-foreground-hover);\n}\n.btn--default:focus-visible {\n  outline: 1px auto var(--cancel-outline-focus);\n}\n\n.success-message {\n  background-color: var(--background);\n  border: var(--border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--box-shadow);\n  font-weight: 600;\n  color: var(--success);\n  padding: 12px 24px;\n  line-height: 25px;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 6px;\n  cursor: default;\n}\n\n.success-icon path {\n  fill: var(--success);\n}\n", e
                }(s)), {shadow: o, host: i}
            } catch (s) {
                throw C.kg.warn("[Feedback] Browser does not support shadow DOM API"), new Error("Browser does not support shadow DOM API.")
            }
        }

        async function fi(t, e, n) {
            if (!t) return;
            t.hideError();
            try {
                return await ui({...e, source: oi}, n)
            } catch (r) {
                li && C.kg.error(r), t && t.showError("There was a problem submitting feedback, please wait and try again.")
            }
        }

        function mi(t, e) {
            return Object.entries(e).forEach((([e, n]) => {
                t.setAttributeNS(null, e, n)
            })), t
        }

        function gi(t, e, ...n) {
            const r = Qs.document.createElement(t);
            e && Object.entries(e).forEach((([t, e]) => {
                "className" === t && "string" === typeof e ? r.setAttribute("class", e) : "boolean" === typeof e && e ? r.setAttribute(t, "") : "string" === typeof e ? r.setAttribute(t, e) : t.startsWith("on") && "function" === typeof e && r.addEventListener(t.substring(2).toLowerCase(), e)
            }));
            for (const s of n) yi(r, s);
            return r
        }

        function yi(t, e) {
            const n = Qs.document;
            if ("undefined" !== typeof e && null !== e) if (Array.isArray(e)) for (const r of e) yi(t, r); else !1 === e || ("string" === typeof e ? t.appendChild(n.createTextNode(e)) : e instanceof Node ? t.appendChild(e) : t.appendChild(n.createTextNode(String(e))))
        }

        function _i({buttonLabel: t, onClick: e}) {
            const n = gi("button", {
                type: "button",
                className: "widget__actor",
                "aria-label": t,
                "aria-hidden": "false"
            }, function () {
                const t = t => Qs.document.createElementNS("http://www.w3.org/2000/svg", t), e = mi(t("svg"), {
                    class: "feedback-icon",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none"
                }), n = mi(t("g"), {clipPath: "url(#clip0_57_80)"}), r = mi(t("path"), {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z"
                });
                e.appendChild(n).appendChild(r);
                const s = t("defs"), i = mi(t("clipPath"), {id: "clip0_57_80"}),
                    o = mi(t("rect"), {width: "20", height: "20", fill: "white"});
                return i.appendChild(o), s.appendChild(i), e.appendChild(s).appendChild(i).appendChild(o), {
                    get el() {
                        return e
                    }
                }
            }().el, t ? gi("span", {className: "widget__actor__text"}, t) : null);
            return n.addEventListener("click", (function (t) {
                e && e(t)
            })), {
                get el() {
                    return n
                }, show: () => {
                    n.classList.remove("widget__actor--hidden"), n.setAttribute("aria-hidden", "false")
                }, hide: () => {
                    n.classList.add("widget__actor--hidden"), n.setAttribute("aria-hidden", "true")
                }
            }
        }

        function vi(t, e) {
            const n = t.get(e);
            return "string" === typeof n ? n.trim() : ""
        }

        function bi({
                        nameLabel: t,
                        namePlaceholder: e,
                        emailLabel: n,
                        emailPlaceholder: r,
                        messageLabel: s,
                        messagePlaceholder: i,
                        cancelButtonLabel: o,
                        submitButtonLabel: a,
                        showName: c,
                        showEmail: u,
                        isNameRequired: l,
                        isEmailRequired: d,
                        defaultName: p,
                        defaultEmail: h,
                        onCancel: f,
                        onSubmit: m
                    }) {
            const {el: g} = function ({label: t}) {
                return {el: gi("button", {type: "submit", className: "btn btn--primary", "aria-label": t}, t)}
            }({label: a});
            const y = gi("div", {
                className: "form__error-container form__error-container--hidden",
                "aria-hidden": "true"
            });
            const _ = gi("input", {
                id: "name",
                type: c ? "text" : "hidden",
                "aria-hidden": c ? "false" : "true",
                name: "name",
                required: l,
                className: "form__input",
                placeholder: e,
                value: p
            }), v = gi("input", {
                id: "email",
                type: u ? "text" : "hidden",
                "aria-hidden": u ? "false" : "true",
                name: "email",
                required: d,
                className: "form__input",
                placeholder: r,
                value: h
            }), b = gi("textarea", {
                id: "message",
                autoFocus: "true",
                rows: "5",
                name: "message",
                required: !0,
                className: "form__input form__input--textarea",
                placeholder: i
            }), S = gi("button", {
                type: "button", className: "btn btn--default", "aria-label": o, onClick: t => {
                    f && f(t)
                }
            }, o), k = gi("form", {
                className: "form", onSubmit: function (t) {
                    if (t.preventDefault(), t.target instanceof HTMLFormElement) try {
                        if (m) {
                            const e = new FormData(t.target),
                                n = {name: vi(e, "name"), email: vi(e, "email"), message: vi(e, "message")};
                            m(n)
                        }
                    } catch (e) {
                    }
                }
            }, [y, c && gi("label", {
                htmlFor: "name",
                className: "form__label"
            }, [gi("span", {className: "form__label__text"}, t, l && gi("span", {className: "form__label__text--required"}, " (required)")), _]), !c && _, u && gi("label", {
                htmlFor: "email",
                className: "form__label"
            }, [gi("span", {className: "form__label__text"}, n, d && gi("span", {className: "form__label__text--required"}, " (required)")), v]), !u && v, gi("label", {
                htmlFor: "message",
                className: "form__label"
            }, [gi("span", {className: "form__label__text"}, s, gi("span", {className: "form__label__text--required"}, " (required)")), b]), gi("div", {className: "btn-group"}, [g, S])]);
            return {
                get el() {
                    return k
                }, showError: function (t) {
                    y.textContent = t, y.classList.remove("form__error-container--hidden"), y.setAttribute("aria-hidden", "false")
                }, hideError: function () {
                    y.textContent = "", y.classList.add("form__error-container--hidden"), y.setAttribute("aria-hidden", "true")
                }
            }
        }

        function Si({
                        formTitle: t,
                        showBranding: e,
                        showName: n,
                        showEmail: r,
                        isNameRequired: s,
                        isEmailRequired: i,
                        colorScheme: o,
                        defaultName: a,
                        defaultEmail: c,
                        onClosed: u,
                        onCancel: l,
                        onSubmit: d,
                        ...p
                    }) {
            let h = null;

            function f() {
                h && (h.open = !1)
            }

            const {el: m, showError: g, hideError: y} = bi({
                showEmail: r,
                showName: n,
                isEmailRequired: i,
                isNameRequired: s,
                defaultName: a,
                defaultEmail: c,
                onSubmit: d,
                onCancel: l, ...p
            });
            return h = gi("dialog", {
                className: "dialog", open: !0, onClick: function () {
                    f(), u && u()
                }
            }, gi("div", {
                className: "dialog__content", onClick: t => {
                    t.stopPropagation()
                }
            }, gi("h2", {className: "dialog__header"}, t, e && gi("a", {
                className: "brand-link",
                target: "_blank",
                href: "https://sentry.io/welcome/",
                title: "Powered by Sentry",
                rel: "noopener noreferrer"
            }, function ({colorScheme: t}) {
                const e = t => Qs.document.createElementNS("http://www.w3.org/2000/svg", t), n = mi(e("svg"), {
                    class: "sentry-logo",
                    width: "32",
                    height: "30",
                    viewBox: "0 0 72 66",
                    fill: "none"
                }), r = mi(e("path"), {
                    transform: "translate(11, 11)",
                    d: "M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z"
                });
                n.append(r);
                const s = e("defs"), i = e("style");
                return i.textContent = `\n    path {\n      fill: ${"dark" === t ? "#fff" : "#362d59"};\n    }`, "system" === t && (i.textContent += "\n    @media (prefers-color-scheme: dark) {\n      path: {\n        fill: '#fff';\n      }\n    }\n    "), s.append(i), n.append(s), {
                    get el() {
                        return n
                    }
                }
            }({colorScheme: o}).el)), m)), {
                get el() {
                    return h
                }, showError: g, hideError: y, open: function () {
                    h && (h.open = !0)
                }, close: f, checkIsOpen: function () {
                    return h && !0 === h.open || !1
                }
            }
        }

        function ki({message: t, onRemove: e}) {
            function n() {
                r && (r.remove(), e && e())
            }

            const r = gi("div", {className: "success-message", onClick: n}, function () {
                const t = t => Qs.document.createElementNS("http://www.w3.org/2000/svg", t), e = mi(t("svg"), {
                        class: "success-icon",
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "none"
                    }), n = mi(t("g"), {clipPath: "url(#clip0_57_156)"}), r = mi(t("path"), {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z"
                    }),
                    s = mi(t("path"), {d: "M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z"});
                e.appendChild(n).append(s, r);
                const i = t("defs"), o = mi(t("clipPath"), {id: "clip0_57_156"}),
                    a = mi(t("rect"), {width: "16", height: "16", fill: "white", transform: "translate(0 0.5)"});
                return o.appendChild(a), i.appendChild(o), e.appendChild(i).appendChild(o).appendChild(a), {
                    get el() {
                        return e
                    }
                }
            }().el, t);
            return {el: r, remove: n}
        }

        function wi({shadow: t, options: {shouldCreateActor: e = !0, ...n}, attachTo: r}) {
            let s, i, o = !1;

            async function a(e) {
                if (!i) return;
                const r = [];
                if (n.isNameRequired && !e.name && r.push(n.nameLabel), n.isEmailRequired && !e.email && r.push(n.emailLabel), e.message || r.push(n.messageLabel), r.length > 0) return void i.showError(`Please enter in the following required fields: ${r.join(", ")}`);
                await fi(i, e) ? (h(), function () {
                    if (t) try {
                        const e = ki({
                            message: n.successMessageText, onRemove: () => {
                                r && clearTimeout(r), u()
                            }
                        });
                        if (!e.el) throw new Error("Unable to show success message");
                        t.appendChild(e.el);
                        const r = setTimeout((() => {
                            e && e.remove()
                        }), 5e3)
                    } catch (e) {
                        C.kg.error(e)
                    }
                }(), n.onSubmitSuccess && n.onSubmitSuccess()) : n.onSubmitError && n.onSubmitError()
            }

            function c() {
                const t = (0, R.s3)(), e = t && t.getIntegrationByName && t.getIntegrationByName("Replay");
                e && e.flush().catch((t => {
                    li && C.kg.error(t)
                }))
            }

            function u() {
                s && s.show()
            }

            function l() {
                s && s.hide()
            }

            function d() {
                try {
                    if (i) return i.open(), o = !0, n.onFormOpen && n.onFormOpen(), void c();
                    const e = n.useSentryUser, r = (0, R.nZ)(), s = r && r.getUser();
                    if (i = Si({
                        colorScheme: n.colorScheme,
                        showBranding: n.showBranding,
                        showName: n.showName || n.isNameRequired,
                        showEmail: n.showEmail || n.isEmailRequired,
                        isNameRequired: n.isNameRequired,
                        isEmailRequired: n.isEmailRequired,
                        formTitle: n.formTitle,
                        cancelButtonLabel: n.cancelButtonLabel,
                        submitButtonLabel: n.submitButtonLabel,
                        emailLabel: n.emailLabel,
                        emailPlaceholder: n.emailPlaceholder,
                        messageLabel: n.messageLabel,
                        messagePlaceholder: n.messagePlaceholder,
                        nameLabel: n.nameLabel,
                        namePlaceholder: n.namePlaceholder,
                        defaultName: e && s && s[e.name] || "",
                        defaultEmail: e && s && s[e.email] || "",
                        onClosed: () => {
                            u(), o = !1, n.onFormClose && n.onFormClose()
                        },
                        onCancel: () => {
                            p(), u()
                        },
                        onSubmit: a
                    }), !i.el) throw new Error("Unable to open Feedback dialog");
                    t.appendChild(i.el), l(), n.onFormOpen && n.onFormOpen(), c()
                } catch (e) {
                    C.kg.error(e)
                }
            }

            function p() {
                i && (i.close(), o = !1, n.onFormClose && n.onFormClose())
            }

            function h() {
                if (i) {
                    p();
                    const t = i.el;
                    t && t.remove(), i = void 0
                }
            }

            function f() {
                o || d(), l()
            }

            return r ? r.addEventListener("click", f) : e && (s = _i({
                buttonLabel: n.buttonLabel,
                onClick: f
            }), s.el && t.appendChild(s.el)), {
                get actor() {
                    return s
                }, get dialog() {
                    return i
                }, showActor: u, hideActor: l, removeActor: function () {
                    s && s.el && s.el.remove()
                }, openDialog: d, closeDialog: p, removeDialog: h
            }
        }

        const Ti = Qs.document, xi = t => new Ei(t);

        class Ei {
            static __initStatic() {
                this.id = "Feedback"
            }

            constructor({
                            autoInject: t = !0,
                            id: e = "sentry-feedback",
                            isEmailRequired: n = !1,
                            isNameRequired: r = !1,
                            showBranding: s = !0,
                            showEmail: i = !0,
                            showName: o = !0,
                            useSentryUser: a = {email: "email", name: "username"},
                            themeDark: c,
                            themeLight: u,
                            colorScheme: l = "system",
                            buttonLabel: d = "Report a Bug",
                            cancelButtonLabel: p = "Cancel",
                            submitButtonLabel: h = "Send Bug Report",
                            formTitle: f = "Report a Bug",
                            emailPlaceholder: m = "your.email@example.org",
                            emailLabel: g = "Email",
                            messagePlaceholder: y = "What's the bug? What did you expect?",
                            messageLabel: _ = "Description",
                            namePlaceholder: v = "Your Name",
                            nameLabel: b = "Name",
                            successMessageText: S = "Thank you for your report!",
                            onFormClose: k,
                            onFormOpen: w,
                            onSubmitError: T,
                            onSubmitSuccess: x
                        } = {}) {
                this.name = Ei.id, this._host = null, this._shadow = null, this._widget = null, this._widgets = new Set, this._hasInsertedActorStyles = !1, this.options = {
                    autoInject: t,
                    showBranding: s,
                    id: e,
                    isEmailRequired: n,
                    isNameRequired: r,
                    showEmail: i,
                    showName: o,
                    useSentryUser: a,
                    colorScheme: l,
                    themeDark: {...ii, ...c},
                    themeLight: {...si, ...u},
                    buttonLabel: d,
                    cancelButtonLabel: p,
                    submitButtonLabel: h,
                    formTitle: f,
                    emailLabel: g,
                    emailPlaceholder: m,
                    messageLabel: _,
                    messagePlaceholder: y,
                    nameLabel: b,
                    namePlaceholder: v,
                    successMessageText: S,
                    onFormClose: k,
                    onFormOpen: w,
                    onSubmitError: T,
                    onSubmitSuccess: x
                }
            }

            setupOnce() {
                if (Mt()) try {
                    this._cleanupWidgetIfExists();
                    const {autoInject: t} = this.options;
                    if (!t) return;
                    this._createWidget(this.options)
                } catch (t) {
                    li && C.kg.error(t)
                }
            }

            openDialog() {
                this._widget || this._createWidget({
                    ...this.options,
                    shouldCreateActor: !1
                }), this._widget && this._widget.openDialog()
            }

            closeDialog() {
                this._widget && this._widget.closeDialog()
            }

            attachTo(t, e) {
                try {
                    const n = di(this.options, e || {});
                    return this._ensureShadowHost(n, (({shadow: e}) => {
                        const r = "string" === typeof t ? Ti.querySelector(t) : "function" === typeof t.addEventListener ? t : null;
                        if (!r) return li && C.kg.error("[Feedback] Unable to attach to target element"), null;
                        const s = wi({shadow: e, options: n, attachTo: r});
                        return this._widgets.add(s), this._widget || (this._widget = s), s
                    }))
                } catch (n) {
                    return li && C.kg.error(n), null
                }
            }

            createWidget(t) {
                try {
                    return this._createWidget(di(this.options, t || {}))
                } catch (e) {
                    return li && C.kg.error(e), null
                }
            }

            removeWidget(t) {
                if (!t) return !1;
                try {
                    if (this._widgets.has(t)) return t.removeActor(), t.removeDialog(), this._widgets.delete(t), this._widget === t && (this._widget = null), !0
                } catch (e) {
                    li && C.kg.error(e)
                }
                return !1
            }

            getWidget() {
                return this._widget
            }

            remove() {
                this._host && this._host.remove(), this._initialize()
            }

            _initialize() {
                this._host = null, this._shadow = null, this._widget = null, this._widgets = new Set, this._hasInsertedActorStyles = !1
            }

            _cleanupWidgetIfExists() {
                this._host && this.remove();
                const t = Ti.querySelector(`#${this.options.id}`);
                t && t.remove()
            }

            _createWidget(t) {
                return this._ensureShadowHost(t, (({shadow: e}) => {
                    const n = wi({shadow: e, options: t});
                    return !this._hasInsertedActorStyles && n.actor && (e.appendChild(function (t) {
                        const e = t.createElement("style");
                        return e.textContent = "\n.widget__actor {\n  line-height: 25px;\n\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  padding: 12px 16px;\n  text-decoration: none;\n  z-index: 9000;\n\n  color: var(--foreground);\n  background-color: var(--background);\n  border: var(--border);\n  box-shadow: var(--box-shadow);\n  opacity: 1;\n  transition: opacity 0.1s ease-in-out;\n}\n\n.widget__actor:hover {\n  background-color: var(--background-hover);\n}\n\n.widget__actor svg {\n  width: 16px;\n  height: 16px;\n}\n\n.widget__actor--hidden {\n  opacity: 0;\n  pointer-events: none;\n  visibility: hidden;\n}\n\n.widget__actor__text {\n}\n\n.feedback-icon path {\n  fill: var(--foreground);\n}\n", e
                    }(Ti)), this._hasInsertedActorStyles = !0), this._widgets.add(n), this._widget || (this._widget = n), n
                }))
            }

            _ensureShadowHost(t, e) {
                let n = !1;
                if (!this._shadow || !this._host) {
                    const {id: e, colorScheme: r, themeLight: s, themeDark: i} = t, {shadow: o, host: a} = hi({
                        id: e,
                        colorScheme: r,
                        themeLight: s,
                        themeDark: i
                    });
                    this._shadow = o, this._host = a, n = !0
                }
                this._host.dataset.sentryFeedbackColorscheme = t.colorScheme;
                const r = e({shadow: this._shadow, host: this._host});
                return n && Ti.body.appendChild(this._host), r
            }
        }

        Ei.__initStatic();
        var Ci = n(36752), Ii = n(16174), Ri = n(27579);

        function Mi(t, e) {
            I.X && C.kg.info(`[Offline]: ${t}`, e)
        }

        function Oi(t) {
            return e => {
                const n = t(e), r = e.createStore ? e.createStore(e) : void 0;
                let s, i = 5e3;

                function o(t) {
                    r && (s && clearTimeout(s), s = setTimeout((async () => {
                        s = void 0;
                        const t = await r.pop();
                        t && (Mi("Attempting to send previously queued event"), c(t).catch((t => {
                            Mi("Failed to retry sending", t)
                        })))
                    }), t), "number" !== typeof s && s.unref && s.unref())
                }

                function a() {
                    s || (o(i), i = Math.min(2 * i, 36e5))
                }

                async function c(t) {
                    try {
                        const e = await n.send(t);
                        let r = 100;
                        if (e) if (e.headers && e.headers["retry-after"]) r = (0, It.JY)(e.headers["retry-after"]); else if ((e.statusCode || 0) >= 400) return e;
                        return o(r), i = 5e3, e
                    } catch (s) {
                        if (r && await function (t, n, r) {
                            return !(0, m.R)(t, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(t, n, r))
                        }(t, s, i)) return await r.insert(t), a(), Mi("Error sending. Event queued", s), {};
                        throw s
                    }
                }

                return e.flushAtStartup && a(), {send: c, flush: t => n.flush(t)}
            }
        }

        function Ai(t) {
            return new Promise(((e, n) => {
                t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => n(t.error)
            }))
        }

        function Di(t) {
            return Ai(t.getAllKeys())
        }

        function Ni(t) {
            let e;

            function n() {
                return void 0 == e && (e = function (t, e) {
                    const n = indexedDB.open(t);
                    n.onupgradeneeded = () => n.result.createObjectStore(e);
                    const r = Ai(n);
                    return t => r.then((n => t(n.transaction(e, "readwrite").objectStore(e))))
                }(t.dbName || "sentry-offline", t.storeName || "queue")), e
            }

            return {
                insert: async e => {
                    try {
                        const r = await (0, m.V$)(e, t.textEncoder);
                        await function (t, e, n) {
                            return t((t => Di(t).then((r => {
                                if (!(r.length >= n)) return t.put(e, Math.max(...r, 0) + 1), Ai(t.transaction)
                            }))))
                        }(n(), r, t.maxQueueSize || 30)
                    } catch (r) {
                    }
                }, pop: async () => {
                    try {
                        const e = await function (t) {
                            return t((t => Di(t).then((e => {
                                if (0 !== e.length) return Ai(t.get(e[0])).then((n => (t.delete(e[0]), Ai(t.transaction).then((() => n)))))
                            }))))
                        }(n());
                        if (e) return (0, m.f4)(e, t.textEncoder || new TextEncoder, t.textDecoder || new TextDecoder)
                    } catch (e) {
                    }
                }
            }
        }

        function Li(t) {
            return function (t) {
                return e => t({...e, createStore: Ni})
            }(Oi(t))
        }

        var Pi = n(23562), $i = n(51131);
        const Fi = 1e6, ji = String(0), Ui = "main";
        let Bi = "", Hi = "", Xi = "", zi = et.m9.navigator && et.m9.navigator.userAgent || "", Wi = "";
        const qi = et.m9.navigator && et.m9.navigator.language || et.m9.navigator && et.m9.navigator.languages && et.m9.navigator.languages[0] || "";
        const Gi = et.m9.navigator && et.m9.navigator.userAgentData;
        var Ji;

        function Vi(t) {
            return function (t) {
                return !("thread_metadata" in t)
            }(t) ? function (t) {
                let e, n = 0;
                const r = {samples: [], stacks: [], frames: [], thread_metadata: {[ji]: {name: Ui}}};
                if (!t.samples.length) return r;
                const s = t.samples[0].timestamp,
                    i = "number" === typeof performance.timeOrigin ? performance.timeOrigin : A.Z1 || 0,
                    o = i - (A.Z1 || i);
                for (let a = 0; a < t.samples.length; a++) {
                    const i = t.samples[a];
                    if (void 0 === i.stackId) {
                        void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[a] = {
                            elapsed_since_start_ns: ((i.timestamp + o - s) * Fi).toFixed(0),
                            stack_id: e,
                            thread_id: ji
                        };
                        continue
                    }
                    let c = t.stacks[i.stackId];
                    const u = [];
                    for (; c;) {
                        u.push(c.frameId);
                        const e = t.frames[c.frameId];
                        void 0 === r.frames[c.frameId] && (r.frames[c.frameId] = {
                            function: e.name,
                            abs_path: "number" === typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                            lineno: e.line,
                            colno: e.column
                        }), c = void 0 === c.parentId ? void 0 : t.stacks[c.parentId]
                    }
                    const l = {
                        elapsed_since_start_ns: ((i.timestamp + o - s) * Fi).toFixed(0),
                        stack_id: n,
                        thread_id: ji
                    };
                    r.stacks[n] = u, r.samples[a] = l, n++
                }
                return r
            }(t) : t
        }

        function Yi(t, e, n, r) {
            if ("transaction" !== r.type) throw new TypeError("Profiling events may only be attached to transactions, this should never occur.");
            if (void 0 === n || null === n) throw new TypeError(`Cannot construct profiling event envelope without a valid profile. Got ${n} instead.`);
            const s = function (t) {
                    const e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
                    return "string" === typeof e && 32 !== e.length && Pi.X && C.kg.log(`[Profiling] Invalid traceId: ${e} on profiled event`), "string" !== typeof e ? "" : e
                }(r), i = Vi(n), o = e || ("number" === typeof r.start_timestamp ? 1e3 * r.start_timestamp : Date.now()),
                a = "number" === typeof r.timestamp ? 1e3 * r.timestamp : Date.now();
            return {
                event_id: t,
                timestamp: new Date(o).toISOString(),
                platform: "javascript",
                version: "1",
                release: r.release || "",
                environment: r.environment || $i.J,
                runtime: {name: "javascript", version: et.m9.navigator.userAgent},
                os: {name: Bi, version: Hi, build_number: zi},
                device: {locale: qi, model: Wi, manufacturer: zi, architecture: Xi, is_emulator: !1},
                debug_meta: {images: Qi(n.resources)},
                profile: i,
                transactions: [{
                    name: r.transaction || "",
                    id: r.event_id || (0, kt.DM)(),
                    trace_id: s,
                    active_thread_id: ji,
                    relative_start_ns: "0",
                    relative_end_ns: (1e6 * (a - o)).toFixed(0)
                }]
            }
        }

        function Ki(t) {
            return "pageload" === t.op
        }

        "object" === typeof (Ji = Gi) && null !== Ji && "getHighEntropyValues" in Ji && Gi.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then((t => {
            if (Bi = t.platform || "", Xi = t.architecture || "", Wi = t.model || "", Hi = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
                const e = t.fullVersionList[t.fullVersionList.length - 1];
                zi = `${e.brand} ${e.version}`
            }
        })).catch((t => {
        }));
        const Zi = new WeakMap;

        function Qi(t) {
            const e = g.n2._sentryDebugIds;
            if (!e) return [];
            const n = (0, R.s3)(), r = n && n.getOptions(), s = r && r.stackParser;
            if (!s) return [];
            let i;
            const o = Zi.get(s);
            o ? i = o : (i = new Map, Zi.set(s, i));
            const a = Object.keys(e).reduce(((t, n) => {
                let r;
                const o = i.get(n);
                o ? r = o : (r = s(n), i.set(n, r));
                for (let s = r.length - 1; s >= 0; s--) {
                    const i = r[s], o = i && i.filename;
                    if (i && o) {
                        t[o] = e[n];
                        break
                    }
                }
                return t
            }), {}), c = [];
            for (const u of t) u && a[u] && c.push({type: "sourcemap", code_file: u, debug_id: a[u]});
            return c
        }

        let to = !1;

        function eo(t) {
            if (to) return Pi.X && C.kg.log("[Profiling] Profiling has been disabled for the duration of the current user session."), !1;
            if (!t.isRecording()) return Pi.X && C.kg.log("[Profiling] Discarding profile because transaction was not sampled."), !1;
            const e = (0, R.s3)(), n = e && e.getOptions();
            if (!n) return Pi.X && C.kg.log("[Profiling] Profiling disabled, no options found."), !1;
            const r = n.profilesSampleRate;
            if (!("number" !== typeof (s = r) && "boolean" !== typeof s || "number" === typeof s && isNaN(s) ? (Pi.X && C.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(s)} of type ${JSON.stringify(typeof s)}.`), 0) : !0 === s || !1 === s || !(s < 0 || s > 1) || (Pi.X && C.kg.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${s}.`), 0))) return Pi.X && C.kg.warn("[Profiling] Discarding profile because of invalid sample rate."), !1;
            var s;
            if (!r) return Pi.X && C.kg.log("[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0"), !1;
            return !!(!0 === r || Math.random() < r) || (Pi.X && C.kg.log(`[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(r)})`), !1)
        }

        function no(t, e, n, r) {
            return function (t) {
                return t.samples.length < 2 ? (Pi.X && C.kg.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!t.frames.length || (Pi.X && C.kg.log("[Profiling] Discarding profile because it contains no frames"), !1)
            }(n) ? Yi(t, e, n, r) : null
        }

        const ro = new Map;

        function so(t) {
            const e = ro.get(t);
            return e && ro.delete(t), e
        }

        function io(t) {
            return t ? eo(t) ? oo(t) : t : (Pi.X && C.kg.log("[Profiling] Transaction is undefined, skipping profiling"), t)
        }

        function oo(t) {
            let e;
            Ki(t) && (e = 1e3 * (0, A.ph)());
            const n = function () {
                const t = et.m9.Profiler;
                if ("function" !== typeof t) return void (Pi.X && C.kg.log("[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object."));
                const e = Math.floor(3e3);
                try {
                    return new t({sampleInterval: 10, maxBufferSize: e})
                } catch (n) {
                    Pi.X && (C.kg.log("[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header."), C.kg.log("[Profiling] Disabling profiling for current user session.")), to = !0
                }
            }();
            if (!n) return t;
            Pi.X && C.kg.log(`[Profiling] started profiling transaction: ${(0, M.XU)(t).description}`);
            const r = (0, kt.DM)();

            async function s() {
                return t && n ? n.stop().then((e => (i && (et.m9.clearTimeout(i), i = void 0), Pi.X && C.kg.log(`[Profiling] stopped profiling of transaction: ${(0, M.XU)(t).description}`), e ? (function (t, e) {
                    if (ro.set(t, e), ro.size > 30) {
                        const t = ro.keys().next().value;
                        ro.delete(t)
                    }
                }(r, e), null) : (Pi.X && C.kg.log(`[Profiling] profiler returned null profile for: ${(0, M.XU)(t).description}`, "this may indicate an overlapping transaction or a call to stopProfiling with a profile title that was never started"), null)))).catch((t => (Pi.X && C.kg.log("[Profiling] error while stopping profiler:", t), null))) : null
            }

            let i = et.m9.setTimeout((() => {
                Pi.X && C.kg.log("[Profiling] max profile duration elapsed, stopping profiling for:", (0, M.XU)(t).description), s()
            }), 3e4);
            const o = t.end.bind(t);
            return t.end = function () {
                return t ? (s().then((() => {
                    t.setContext("profile", {profile_id: r, start_timestamp: e}), o()
                }), (() => {
                    o()
                })), t) : o()
            }, t
        }

        const ao = "BrowserProfiling", co = (0, l._I)((() => ({
            name: ao, setupOnce() {
            }, setup(t) {
                const e = (0, R.nZ)().getTransaction();
                e && Ki(e) && eo(e) && oo(e), "function" === typeof t.on ? (t.on("startTransaction", (t => {
                    eo(t) && oo(t)
                })), t.on("beforeEnvelope", (t => {
                    if (!ro.size) return;
                    const e = function (t) {
                        const e = [];
                        return (0, m.gv)(t, ((t, n) => {
                            if ("transaction" === n) for (let r = 1; r < t.length; r++) {
                                const n = t[r];
                                n && n.contexts && n.contexts.profile && n.contexts.profile.profile_id && e.push(t[r])
                            }
                        })), e
                    }(t);
                    if (!e.length) return;
                    const n = [];
                    for (const r of e) {
                        const t = r && r.contexts, e = t && t.profile && t.profile.profile_id,
                            s = t && t.profile && t.profile.start_timestamp;
                        if ("string" !== typeof e) {
                            Pi.X && C.kg.log("[Profiling] cannot find profile for a transaction without a profile context");
                            continue
                        }
                        if (!e) {
                            Pi.X && C.kg.log("[Profiling] cannot find profile for a transaction without a profile context");
                            continue
                        }
                        t && t.profile && delete t.profile;
                        const i = so(e);
                        if (!i) {
                            Pi.X && C.kg.log(`[Profiling] Could not retrieve profile for transaction: ${e}`);
                            continue
                        }
                        const o = no(e, s, i, r);
                        o && n.push(o)
                    }
                    !function (t, e) {
                        if (!e.length) return t;
                        for (const n of e) t[1].push([{type: "profile"}, n])
                    }(t, n)
                }))) : C.kg.warn("[Profiling] Client does not support hooks, profiling will be disabled")
            }
        }))), uo = (0, l.RN)(ao, co);
        let lo = {};
        et.m9.Sentry && et.m9.Sentry.Integrations && (lo = et.m9.Sentry.Integrations);
        const po = {...lo, ...f, ...s}
    }, 42741: function (t, e, n) {
        "use strict";
        n.d(e, {
            O: function () {
                return x
            }, f: function () {
                return T
            }
        });
        var r = n(22967), s = n(64487), i = n(12343), o = n(20535), a = n(71235), c = n(9729);

        function u() {
            "console" in a.n2 && i.RU.forEach((function (t) {
                t in a.n2.console && (0, o.hl)(a.n2.console, t, (function (e) {
                    return i.LD[t] = e, function (...e) {
                        const n = {args: e, level: t};
                        (0, c.rK)("console", n);
                        const r = i.LD[t];
                        r && r.apply(a.n2.console, e)
                    }
                }))
            }))
        }

        var l = n(85316), d = n(55322), p = n(21394), h = n(28425), f = n(62844), m = n(58464);
        const g = ["fatal", "error", "warning", "log", "info", "debug"];

        function y(t) {
            return "warn" === t ? "warning" : g.includes(t) ? t : "log"
        }

        var _ = n(57321), v = n(26956), b = n(23562), S = n(86891);
        const k = 1024, w = "Breadcrumbs", T = (0, r._I)(((t = {}) => {
            const e = {console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0, ...t};
            return {
                name: w, setupOnce() {
                }, setup(t) {
                    e.console && function (t) {
                        const e = "console";
                        (0, c.Hj)(e, t), (0, c.D2)(e, u)
                    }(function (t) {
                        return function (e) {
                            if ((0, s.s3)() !== t) return;
                            const n = {
                                category: "console",
                                data: {arguments: e.args, logger: "console"},
                                level: y(e.level),
                                message: (0, _.nK)(e.args, " ")
                            };
                            if ("assert" === e.level) {
                                if (!1 !== e.args[0]) return;
                                n.message = `Assertion failed: ${(0, _.nK)(e.args.slice(1), " ") || "console.assert"}`, n.data.arguments = e.args.slice(1)
                            }
                            (0, s.n_)(n, {input: e.args, level: e.level})
                        }
                    }(t)), e.dom && (0, l.O)(function (t, e) {
                        return function (n) {
                            if ((0, s.s3)() !== t) return;
                            let r, o, a = "object" === typeof e ? e.serializeAttribute : void 0,
                                c = "object" === typeof e && "number" === typeof e.maxStringLength ? e.maxStringLength : void 0;
                            c && c > k && (b.X && i.kg.warn(`\`dom.maxStringLength\` cannot exceed 1024, but a value of ${c} was configured. Sentry will use 1024 instead.`), c = k), "string" === typeof a && (a = [a]);
                            try {
                                const t = n.event, e = function (t) {
                                    return !!t && !!t.target
                                }(t) ? t.target : t;
                                r = (0, m.Rt)(e, {keyAttrs: a, maxStringLength: c}), o = (0, m.iY)(e)
                            } catch (l) {
                                r = "<unknown>"
                            }
                            if (0 === r.length) return;
                            const u = {category: `ui.${n.name}`, message: r};
                            o && (u.data = {"ui.component_name": o}), (0, s.n_)(u, {
                                event: n.event,
                                name: n.name,
                                global: n.global
                            })
                        }
                    }(t, e.dom)), e.xhr && (0, d.UK)(function (t) {
                        return function (e) {
                            if ((0, s.s3)() !== t) return;
                            const {startTimestamp: n, endTimestamp: r} = e, i = e.xhr[d.xU];
                            if (!n || !r || !i) return;
                            const {method: o, url: a, status_code: c, body: u} = i,
                                l = {method: o, url: a, status_code: c},
                                p = {xhr: e.xhr, input: u, startTimestamp: n, endTimestamp: r};
                            (0, s.n_)({category: "xhr", data: l, type: "http"}, p)
                        }
                    }(t)), e.fetch && (0, p.U)(function (t) {
                        return function (e) {
                            if ((0, s.s3)() !== t) return;
                            const {startTimestamp: n, endTimestamp: r} = e;
                            if (r && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method)) if (e.error) {
                                const t = e.fetchData,
                                    i = {data: e.error, input: e.args, startTimestamp: n, endTimestamp: r};
                                (0, s.n_)({category: "fetch", data: t, level: "error", type: "http"}, i)
                            } else {
                                const t = e.response, i = {...e.fetchData, status_code: t && t.status},
                                    o = {input: e.args, response: t, startTimestamp: n, endTimestamp: r};
                                (0, s.n_)({category: "fetch", data: i, type: "http"}, o)
                            }
                        }
                    }(t)), e.history && (0, h.a)(function (t) {
                        return function (e) {
                            if ((0, s.s3)() !== t) return;
                            let n = e.from, r = e.to;
                            const i = (0, v.en)(S.m9.location.href);
                            let o = n ? (0, v.en)(n) : void 0;
                            const a = (0, v.en)(r);
                            o && o.path || (o = i), i.protocol === a.protocol && i.host === a.host && (r = a.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), (0, s.n_)({
                                category: "navigation",
                                data: {from: n, to: r}
                            })
                        }
                    }(t)), e.sentry && t.on && t.on("beforeSendEvent", function (t) {
                        return function (e) {
                            (0, s.s3)() === t && (0, s.n_)({
                                category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                                event_id: e.event_id,
                                level: e.level,
                                message: (0, f.jH)(e)
                            }, {event: e})
                        }
                    }(t))
                }
            }
        })), x = (0, r.RN)(w, T)
    }, 69730: function (t, e, n) {
        "use strict";
        n.d(e, {
            I: function () {
                return c
            }, R: function () {
                return a
            }
        });
        var r = n(22967), s = n(12343), i = n(23562);
        const o = "Dedupe", a = (0, r._I)((() => {
            let t;
            return {
                name: o, setupOnce() {
                }, processEvent(e) {
                    if (e.type) return e;
                    try {
                        if (function (t, e) {
                            if (!e) return !1;
                            if (function (t, e) {
                                const n = t.message, r = e.message;
                                if (!n && !r) return !1;
                                if (n && !r || !n && r) return !1;
                                if (n !== r) return !1;
                                if (!l(t, e)) return !1;
                                if (!u(t, e)) return !1;
                                return !0
                            }(t, e)) return !0;
                            if (function (t, e) {
                                const n = d(e), r = d(t);
                                if (!n || !r) return !1;
                                if (n.type !== r.type || n.value !== r.value) return !1;
                                if (!l(t, e)) return !1;
                                if (!u(t, e)) return !1;
                                return !0
                            }(t, e)) return !0;
                            return !1
                        }(e, t)) return i.X && s.kg.warn("Event dropped due to being a duplicate of previously captured event."), null
                    } catch (n) {
                    }
                    return t = e
                }
            }
        })), c = (0, r.RN)(o, a);

        function u(t, e) {
            let n = p(t), r = p(e);
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            if (r.length !== n.length) return !1;
            for (let s = 0; s < r.length; s++) {
                const t = r[s], e = n[s];
                if (t.filename !== e.filename || t.lineno !== e.lineno || t.colno !== e.colno || t.function !== e.function) return !1
            }
            return !0
        }

        function l(t, e) {
            let n = t.fingerprint, r = e.fingerprint;
            if (!n && !r) return !0;
            if (n && !r || !n && r) return !1;
            try {
                return !(n.join("") !== r.join(""))
            } catch (s) {
                return !1
            }
        }

        function d(t) {
            return t.exception && t.exception.values && t.exception.values[0]
        }

        function p(t) {
            const e = t.exception;
            if (e) try {
                return e.values[0].stacktrace.frames
            } catch (n) {
                return
            }
        }
    }, 52136: function (t, e, n) {
        "use strict";
        n.d(e, {
            d: function () {
                return m
            }, k: function () {
                return f
            }
        });
        var r = n(22967), s = n(64487), i = n(51674), o = n(67597), a = n(57373), c = n(58464), u = n(12343),
            l = n(23562), d = n(84773), p = n(86891);
        const h = "GlobalHandlers", f = (0, r._I)(((t = {}) => {
            const e = {onerror: !0, onunhandledrejection: !0, ...t};
            return {
                name: h, setupOnce() {
                    Error.stackTraceLimit = 50
                }, setup(t) {
                    e.onerror && (!function (t) {
                        (0, i.V)((e => {
                            const {stackParser: n, attachStacktrace: r} = _();
                            if ((0, s.s3)() !== t || (0, p.Wz)()) return;
                            const {msg: i, url: a, line: c, column: u, error: l} = e,
                                h = void 0 === l && (0, o.HD)(i) ? function (t, e, n, r) {
                                    const s = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
                                    let i = (0, o.VW)(t) ? t.message : t, a = "Error";
                                    const c = i.match(s);
                                    c && (a = c[1], i = c[2]);
                                    return g({exception: {values: [{type: a, value: i}]}}, e, n, r)
                                }(i, a, c, u) : g((0, d.ME)(n, l || i, void 0, r, !1), a, c, u);
                            h.level = "error", (0, s.eN)(h, {
                                originalException: l,
                                mechanism: {handled: !1, type: "onerror"}
                            })
                        }))
                    }(t), y("onerror")), e.onunhandledrejection && (!function (t) {
                        (0, a.h)((e => {
                            const {stackParser: n, attachStacktrace: r} = _();
                            if ((0, s.s3)() !== t || (0, p.Wz)()) return;
                            const i = function (t) {
                                if ((0, o.pt)(t)) return t;
                                const e = t;
                                try {
                                    if ("reason" in e) return e.reason;
                                    if ("detail" in e && "reason" in e.detail) return e.detail.reason
                                } catch (n) {
                                }
                                return t
                            }(e), a = (0, o.pt)(i) ? {
                                exception: {
                                    values: [{
                                        type: "UnhandledRejection",
                                        value: `Non-Error promise rejection captured with value: ${String(i)}`
                                    }]
                                }
                            } : (0, d.ME)(n, i, void 0, r, !0);
                            a.level = "error", (0, s.eN)(a, {
                                originalException: i,
                                mechanism: {handled: !1, type: "onunhandledrejection"}
                            })
                        }))
                    }(t), y("onunhandledrejection"))
                }
            }
        })), m = (0, r.RN)(h, f);

        function g(t, e, n, r) {
            const s = t.exception = t.exception || {}, i = s.values = s.values || [], a = i[0] = i[0] || {},
                u = a.stacktrace = a.stacktrace || {}, l = u.frames = u.frames || [],
                d = isNaN(parseInt(r, 10)) ? void 0 : r, p = isNaN(parseInt(n, 10)) ? void 0 : n,
                h = (0, o.HD)(e) && e.length > 0 ? e : (0, c.l4)();
            return 0 === l.length && l.push({colno: d, filename: h, function: "?", in_app: !0, lineno: p}), t
        }

        function y(t) {
            l.X && u.kg.log(`Global Handler attached: ${t}`)
        }

        function _() {
            const t = (0, s.s3)();
            return t && t.getOptions() || {stackParser: () => [], attachStacktrace: !1}
        }
    }, 61945: function (t, e, n) {
        "use strict";
        n.d(e, {
            q: function () {
                return a
            }, s: function () {
                return o
            }
        });
        var r = n(22967), s = n(86891);
        const i = "HttpContext", o = (0, r._I)((() => ({
            name: i, setupOnce() {
            }, preprocessEvent(t) {
                if (!s.m9.navigator && !s.m9.location && !s.m9.document) return;
                const e = t.request && t.request.url || s.m9.location && s.m9.location.href, {referrer: n} = s.m9.document || {}, {userAgent: r} = s.m9.navigator || {},
                    i = {...t.request && t.request.headers, ...n && {Referer: n}, ...r && {"User-Agent": r}},
                    o = {...t.request, ...e && {url: e}, headers: i};
                t.request = o
            }
        }))), a = (0, r.RN)(i, o)
    }, 61634: function (t, e, n) {
        "use strict";
        n.d(e, {
            O: function () {
                return a
            }, i: function () {
                return c
            }
        });
        var r = n(22967), s = n(86045), i = n(84773);
        const o = "LinkedErrors", a = (0, r._I)(((t = {}) => {
            const e = t.limit || 5, n = t.key || "cause";
            return {
                name: o, setupOnce() {
                }, preprocessEvent(t, r, o) {
                    const a = o.getOptions();
                    (0, s.Z)(i.GJ, a.stackParser, a.maxValueLength, n, e, t, r)
                }
            }
        })), c = (0, r.RN)(o, a)
    }, 53692: function (t, e, n) {
        "use strict";
        n.d(e, {
            p: function () {
                return l
            }, t: function () {
                return u
            }
        });
        var r = n(22967), s = n(20535), i = n(30360), o = n(86891);
        const a = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "BroadcastChannel", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "SharedWorker", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
            c = "TryCatch", u = (0, r._I)(((t = {}) => {
                const e = {
                    XMLHttpRequest: !0,
                    eventTarget: !0,
                    requestAnimationFrame: !0,
                    setInterval: !0,
                    setTimeout: !0, ...t
                };
                return {
                    name: c, setupOnce() {
                        e.setTimeout && (0, s.hl)(o.m9, "setTimeout", d), e.setInterval && (0, s.hl)(o.m9, "setInterval", d), e.requestAnimationFrame && (0, s.hl)(o.m9, "requestAnimationFrame", p), e.XMLHttpRequest && "XMLHttpRequest" in o.m9 && (0, s.hl)(XMLHttpRequest.prototype, "send", h);
                        const t = e.eventTarget;
                        if (t) {
                            (Array.isArray(t) ? t : a).forEach(f)
                        }
                    }
                }
            })), l = (0, r.RN)(c, u);

        function d(t) {
            return function (...e) {
                const n = e[0];
                return e[0] = (0, o.re)(n, {
                    mechanism: {
                        data: {function: (0, i.$P)(t)},
                        handled: !1,
                        type: "instrument"
                    }
                }), t.apply(this, e)
            }
        }

        function p(t) {
            return function (e) {
                return t.apply(this, [(0, o.re)(e, {
                    mechanism: {
                        data: {
                            function: "requestAnimationFrame",
                            handler: (0, i.$P)(t)
                        }, handled: !1, type: "instrument"
                    }
                })])
            }
        }

        function h(t) {
            return function (...e) {
                const n = this;
                return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach((t => {
                    t in n && "function" === typeof n[t] && (0, s.hl)(n, t, (function (e) {
                        const n = {
                            mechanism: {
                                data: {function: t, handler: (0, i.$P)(e)},
                                handled: !1,
                                type: "instrument"
                            }
                        }, r = (0, s.HK)(e);
                        return r && (n.mechanism.data.handler = (0, i.$P)(r)), (0, o.re)(e, n)
                    }))
                })), t.apply(this, e)
            }
        }

        function f(t) {
            const e = o.m9, n = e[t] && e[t].prototype;
            n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, s.hl)(n, "addEventListener", (function (e) {
                return function (n, r, s) {
                    try {
                        "function" === typeof r.handleEvent && (r.handleEvent = (0, o.re)(r.handleEvent, {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: (0, i.$P)(r),
                                    target: t
                                }, handled: !1, type: "instrument"
                            }
                        }))
                    } catch (a) {
                    }
                    return e.apply(this, [n, (0, o.re)(r, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: (0, i.$P)(r),
                                target: t
                            }, handled: !1, type: "instrument"
                        }
                    }), s])
                }
            })), (0, s.hl)(n, "removeEventListener", (function (t) {
                return function (e, n, r) {
                    const s = n;
                    try {
                        const n = s && s.__sentry_wrapped__;
                        n && t.call(this, e, n, r)
                    } catch (i) {
                    }
                    return t.call(this, e, s, r)
                }
            })))
        }
    }, 19011: function (t, e, n) {
        "use strict";
        n.d(e, {
            Eg: function () {
                return M
            }, Jd: function () {
                return D
            }, S1: function () {
                return I
            }, SS: function () {
                return E
            }, jp: function () {
                return R
            }, lA: function () {
                return O
            }, nV: function () {
                return C
            }, re: function () {
                return A
            }
        });
        var r = n(42422), s = n(19116), i = n(22967), o = n(67966), a = n(95659), c = n(1984), u = n(64487),
            l = n(30360), d = n(8823), p = n(12343), h = n(28425), f = n(7935), m = n(23562), g = n(86891),
            y = n(42741), _ = n(69730), v = n(52136), b = n(61945), S = n(61634), k = n(53692), w = n(34469),
            T = n(54025), x = n(68131);
        const E = [(0, r.S)(), (0, s.C)(), (0, k.t)(), (0, y.f)(), (0, v.k)(), (0, S.O)(), (0, _.R)(), (0, b.s)()];

        function C(t) {
            return [...E]
        }

        function I(t = {}) {
            void 0 === t.defaultIntegrations && (t.defaultIntegrations = C()), void 0 === t.release && ("string" === typeof __SENTRY_RELEASE__ && (t.release = __SENTRY_RELEASE__), g.m9.SENTRY_RELEASE && g.m9.SENTRY_RELEASE.id && (t.release = g.m9.SENTRY_RELEASE.id)), void 0 === t.autoSessionTracking && (t.autoSessionTracking = !0), void 0 === t.sendClientReports && (t.sendClientReports = !0);
            const e = {
                ...t,
                stackParser: (0, l.Sq)(t.stackParser || w.Dt),
                integrations: (0, i.m8)(t),
                transport: t.transport || ((0, d.Ak)() ? T.f : x.K)
            };
            (0, o.M)(f.R, e), t.autoSessionTracking && function () {
                if ("undefined" === typeof g.m9.document) return void (m.X && p.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
                (0, u.yj)({ignoreDuration: !0}), (0, u.cg)(), (0, h.a)((({from: t, to: e}) => {
                    void 0 !== t && t !== e && ((0, u.yj)({ignoreDuration: !0}), (0, u.cg)())
                }))
            }()
        }

        const R = (t = {}, e = (0, a.Gd)()) => {
            if (!g.m9.document) return void (m.X && p.kg.error("Global document not defined in showReportDialog call"));
            const {client: n, scope: r} = e.getStackTop(), s = t.dsn || n && n.getDsn();
            if (!s) return void (m.X && p.kg.error("DSN not configured for showReportDialog call"));
            r && (t.user = {...r.getUser(), ...t.user}), t.eventId || (t.eventId = e.lastEventId());
            const i = g.m9.document.createElement("script");
            i.async = !0, i.crossOrigin = "anonymous", i.src = (0, c.h)(s, t), t.onLoad && (i.onload = t.onLoad);
            const {onClose: o} = t;
            if (o) {
                const t = e => {
                    if ("__sentry_reportdialog_closed__" === e.data) try {
                        o()
                    } finally {
                        g.m9.removeEventListener("message", t)
                    }
                };
                g.m9.addEventListener("message", t)
            }
            const u = g.m9.document.head || g.m9.document.body;
            u ? u.appendChild(i) : m.X && p.kg.error("Not injecting report dialog. No injection point found in HTML")
        };

        function M() {
        }

        function O(t) {
            t()
        }

        function A(t) {
            return (0, g.re)(t)()
        }

        function D(t) {
            const e = (0, u.s3)();
            e && e.captureUserFeedback(t)
        }
    }, 34469: function (t, e, n) {
        "use strict";
        n.d(e, {
            $3: function () {
                return c
            }, $Q: function () {
                return d
            }, Dt: function () {
                return v
            }, HH: function () {
                return y
            }, NP: function () {
                return m
            }, R2: function () {
                return h
            }, d8: function () {
                return _
            }
        });
        var r = n(30360);
        const s = "?";

        function i(t, e, n, r) {
            const s = {filename: t, function: e, in_app: !0};
            return void 0 !== n && (s.lineno = n), void 0 !== r && (s.colno = r), s
        }

        const o = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            a = /\((\S*)(?::(\d+))(?::(\d+))\)/, c = [30, t => {
                const e = o.exec(t);
                if (e) {
                    if (e[2] && 0 === e[2].indexOf("eval")) {
                        const t = a.exec(e[2]);
                        t && (e[2] = t[1], e[3] = t[2], e[4] = t[3])
                    }
                    const [t, n] = b(e[1] || s, e[2]);
                    return i(n, t, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                }
            }],
            u = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
            l = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, d = [50, t => {
                const e = u.exec(t);
                if (e) {
                    if (e[3] && e[3].indexOf(" > eval") > -1) {
                        const t = l.exec(e[3]);
                        t && (e[1] = e[1] || "eval", e[3] = t[1], e[4] = t[2], e[5] = "")
                    }
                    let t = e[3], n = e[1] || s;
                    return [n, t] = b(n, t), i(t, n, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                }
            }], p = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i, h = [40, t => {
                const e = p.exec(t);
                return e ? i(e[2], e[1] || s, +e[3], e[4] ? +e[4] : void 0) : void 0
            }], f = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, m = [10, t => {
                const e = f.exec(t);
                return e ? i(e[2], e[3] || s, +e[1]) : void 0
            }], g = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
            y = [20, t => {
                const e = g.exec(t);
                return e ? i(e[5], e[3] || e[4] || s, +e[1], +e[2]) : void 0
            }], _ = [c, d, h], v = (0, r.pE)(..._), b = (t, e) => {
                const n = -1 !== t.indexOf("safari-extension"), r = -1 !== t.indexOf("safari-web-extension");
                return n || r ? [-1 !== t.indexOf("@") ? t.split("@")[0] : s, n ? `safari-extension:${e}` : `safari-web-extension:${e}`] : [t, e]
            }
    }, 54025: function (t, e, n) {
        "use strict";
        n.d(e, {
            f: function () {
                return l
            }
        });
        var r = n(32570), s = n(96893), i = n(8823), o = n(12343), a = n(23562), c = n(86891);
        let u;

        function l(t, e = function () {
            if (u) return u;
            if ((0, i.Du)(c.m9.fetch)) return u = c.m9.fetch.bind(c.m9);
            const t = c.m9.document;
            let e = c.m9.fetch;
            if (t && "function" === typeof t.createElement) try {
                const n = t.createElement("iframe");
                n.hidden = !0, t.head.appendChild(n);
                const r = n.contentWindow;
                r && r.fetch && (e = r.fetch), t.head.removeChild(n)
            } catch (n) {
                a.X && o.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
            }
            return u = e.bind(c.m9)
        }()) {
            let n = 0, l = 0;
            return (0, r.q)(t, (function (r) {
                const i = r.body.length;
                n += i, l++;
                const o = {
                    body: r.body,
                    method: "POST",
                    referrerPolicy: "origin",
                    headers: t.headers,
                    keepalive: n <= 6e4 && l < 15, ...t.fetchOptions
                };
                try {
                    return e(t.url, o).then((t => (n -= i, l--, {
                        statusCode: t.status,
                        headers: {
                            "x-sentry-rate-limits": t.headers.get("X-Sentry-Rate-Limits"),
                            "retry-after": t.headers.get("Retry-After")
                        }
                    })))
                } catch (a) {
                    return u = void 0, n -= i, l--, (0, s.$2)(a)
                }
            }))
        }
    }, 68131: function (t, e, n) {
        "use strict";
        n.d(e, {
            K: function () {
                return i
            }
        });
        var r = n(32570), s = n(96893);

        function i(t) {
            return (0, r.q)(t, (function (e) {
                return new s.cW(((n, r) => {
                    const s = new XMLHttpRequest;
                    s.onerror = r, s.onreadystatechange = () => {
                        4 === s.readyState && n({
                            statusCode: s.status,
                            headers: {
                                "x-sentry-rate-limits": s.getResponseHeader("X-Sentry-Rate-Limits"),
                                "retry-after": s.getResponseHeader("Retry-After")
                            }
                        })
                    }, s.open("POST", t.url);
                    for (const e in t.headers) Object.prototype.hasOwnProperty.call(t.headers, e) && s.setRequestHeader(e, t.headers[e]);
                    s.send(e.body)
                }))
            }))
        }
    }, 70911: function (t, e, n) {
        "use strict";
        n.d(e, {
            r: function () {
                return i
            }
        });
        var r = n(30292), s = n(58725);

        function i(t, {metadata: e, tunnel: n, dsn: i}) {
            const o = {
                event_id: t.event_id,
                sent_at: (new Date).toISOString(), ...e && e.sdk && {
                    sdk: {
                        name: e.sdk.name,
                        version: e.sdk.version
                    }
                }, ...!!n && !!i && {dsn: (0, r.RA)(i)}
            }, a = function (t) {
                return [{type: "user_report"}, t]
            }(t);
            return (0, s.Jd)(o, [a])
        }
    }, 1984: function (t, e, n) {
        "use strict";
        n.d(e, {
            U: function () {
                return o
            }, h: function () {
                return a
            }
        });
        var r = n(20535), s = n(30292);

        function i(t) {
            const e = t.protocol ? `${t.protocol}:` : "", n = t.port ? `:${t.port}` : "";
            return `${e}//${t.host}${n}${t.path ? `/${t.path}` : ""}/api/`
        }

        function o(t, e = {}) {
            const n = "string" === typeof e ? e : e.tunnel,
                s = "string" !== typeof e && e._metadata ? e._metadata.sdk : void 0;
            return n || `${function (t) {
                return `${i(t)}${t.projectId}/envelope/`
            }(t)}?${function (t, e) {
                return (0, r._j)({
                    sentry_key: t.publicKey,
                    sentry_version: "7", ...e && {sentry_client: `${e.name}/${e.version}`}
                })
            }(t, s)}`
        }

        function a(t, e) {
            const n = (0, s.vK)(t);
            if (!n) return "";
            const r = `${i(n)}embed/error-page/`;
            let o = `dsn=${(0, s.RA)(n)}`;
            for (const s in e) if ("dsn" !== s && "onClose" !== s) if ("user" === s) {
                const t = e.user;
                if (!t) continue;
                t.name && (o += `&name=${encodeURIComponent(t.name)}`), t.email && (o += `&email=${encodeURIComponent(t.email)}`)
            } else o += `&${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`;
            return `${r}?${o}`
        }
    }, 32825: function (t, e, n) {
        "use strict";
        n.d(e, {
            W: function () {
                return k
            }, Q: function () {
                return x
            }
        });
        var r = n(30292), s = n(12343), i = n(62844), o = n(67597), a = n(96893), c = n(58725), u = n(80409),
            l = n(1984), d = n(81703), p = n(28656), h = n(64487), f = n(95659), m = n(22967), g = n(6189);

        function y(t, e, n, s) {
            const i = {sent_at: (new Date).toISOString()};
            n && n.sdk && (i.sdk = {name: n.sdk.name, version: n.sdk.version}), s && e && (i.dsn = (0, r.RA)(e));
            const o = function (t) {
                const e = (0, g.uv)(t);
                return [{type: "statsd", length: e.length}, e]
            }(t);
            return (0, c.Jd)(i, [o])
        }

        var _ = n(9015), v = n(90454), b = n(88942);
        const S = "Not capturing exception because it's already been captured.";

        class k {
            constructor(t) {
                if (this._options = t, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t.dsn ? this._dsn = (0, r.vK)(t.dsn) : d.X && s.kg.warn("No DSN provided, client will not send events."), this._dsn) {
                    const e = (0, l.U)(this._dsn, t);
                    this._transport = t.transport({
                        recordDroppedEvent: this.recordDroppedEvent.bind(this), ...t.transportOptions,
                        url: e
                    })
                }
            }

            captureException(t, e, n) {
                if ((0, i.YO)(t)) return void (d.X && s.kg.log(S));
                let r = e && e.event_id;
                return this._process(this.eventFromException(t, e).then((t => this._captureEvent(t, e, n))).then((t => {
                    r = t
                }))), r
            }

            captureMessage(t, e, n, r) {
                let s = n && n.event_id;
                const i = (0, o.Le)(t) ? t : String(t),
                    a = (0, o.pt)(t) ? this.eventFromMessage(i, e, n) : this.eventFromException(t, n);
                return this._process(a.then((t => this._captureEvent(t, n, r))).then((t => {
                    s = t
                }))), s
            }

            captureEvent(t, e, n) {
                if (e && e.originalException && (0, i.YO)(e.originalException)) return void (d.X && s.kg.log(S));
                let r = e && e.event_id;
                const o = (t.sdkProcessingMetadata || {}).capturedSpanScope;
                return this._process(this._captureEvent(t, e, o || n).then((t => {
                    r = t
                }))), r
            }

            captureSession(t) {
                "string" !== typeof t.release ? d.X && s.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, _.CT)(t, {init: !1}))
            }

            getDsn() {
                return this._dsn
            }

            getOptions() {
                return this._options
            }

            getSdkMetadata() {
                return this._options._metadata
            }

            getTransport() {
                return this._transport
            }

            flush(t) {
                const e = this._transport;
                return e ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(t).then((n => e.flush(t).then((t => n && t))))) : (0, a.WD)(!0)
            }

            close(t) {
                return this.flush(t).then((t => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), t)))
            }

            getEventProcessors() {
                return this._eventProcessors
            }

            addEventProcessor(t) {
                this._eventProcessors.push(t)
            }

            setupIntegrations(t) {
                (t && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations()
            }

            init() {
                this._isEnabled() && this._setupIntegrations()
            }

            getIntegrationById(t) {
                return this.getIntegrationByName(t)
            }

            getIntegrationByName(t) {
                return this._integrations[t]
            }

            getIntegration(t) {
                try {
                    return this._integrations[t.id] || null
                } catch (e) {
                    return d.X && s.kg.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
                }
            }

            addIntegration(t) {
                const e = this._integrations[t.name];
                (0, m.m7)(this, t, this._integrations), e || (0, m.uf)(this, [t])
            }

            sendEvent(t, e = {}) {
                this.emit("beforeSendEvent", t, e);
                let n = (0, p.M)(t, this._dsn, this._options._metadata, this._options.tunnel);
                for (const s of e.attachments || []) n = (0, c.BO)(n, (0, c.zQ)(s, this._options.transportOptions && this._options.transportOptions.textEncoder));
                const r = this._sendEnvelope(n);
                r && r.then((e => this.emit("afterSendEvent", t, e)), null)
            }

            sendSession(t) {
                const e = (0, p.Q)(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(e)
            }

            recordDroppedEvent(t, e, n) {
                if (this._options.sendClientReports) {
                    const n = `${t}:${e}`;
                    d.X && s.kg.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
                }
            }

            captureAggregateMetrics(t) {
                d.X && s.kg.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
                const e = y(t, this._dsn, this._options._metadata, this._options.tunnel);
                this._sendEnvelope(e)
            }

            on(t, e) {
                this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e)
            }

            emit(t, ...e) {
                this._hooks[t] && this._hooks[t].forEach((t => t(...e)))
            }

            _setupIntegrations() {
                const {integrations: t} = this._options;
                this._integrations = (0, m.q4)(this, t), (0, m.uf)(this, t), this._integrationsInitialized = !0
            }

            _updateSessionFromEvent(t, e) {
                let n = !1, r = !1;
                const s = e.exception && e.exception.values;
                if (s) {
                    r = !0;
                    for (const t of s) {
                        const e = t.mechanism;
                        if (e && !1 === e.handled) {
                            n = !0;
                            break
                        }
                    }
                }
                const i = "ok" === t.status;
                (i && 0 === t.errors || i && n) && ((0, _.CT)(t, {
                    ...n && {status: "crashed"},
                    errors: t.errors || Number(r || n)
                }), this.captureSession(t))
            }

            _isClientDoneProcessing(t) {
                return new a.cW((e => {
                    let n = 0;
                    const r = setInterval((() => {
                        0 == this._numProcessing ? (clearInterval(r), e(!0)) : (n += 1, t && n >= t && (clearInterval(r), e(!1)))
                    }), 1)
                }))
            }

            _isEnabled() {
                return !1 !== this.getOptions().enabled && void 0 !== this._transport
            }

            _prepareEvent(t, e, n, r = (0, f.aF)()) {
                const s = this.getOptions(), i = Object.keys(this._integrations);
                return !e.integrations && i.length > 0 && (e.integrations = i), this.emit("preprocessEvent", t, e), (0, b.R)(s, t, e, n, this, r).then((t => {
                    if (null === t) return t;
                    const e = {...r.getPropagationContext(), ...n ? n.getPropagationContext() : void 0};
                    if (!(t.contexts && t.contexts.trace) && e) {
                        const {traceId: r, spanId: s, parentSpanId: i, dsc: o} = e;
                        t.contexts = {trace: {trace_id: r, span_id: s, parent_span_id: i}, ...t.contexts};
                        const a = o || (0, v._)(r, this, n);
                        t.sdkProcessingMetadata = {dynamicSamplingContext: a, ...t.sdkProcessingMetadata}
                    }
                    return t
                }))
            }

            _captureEvent(t, e = {}, n) {
                return this._processEvent(t, e, n).then((t => t.event_id), (t => {
                    if (d.X) {
                        const e = t;
                        "log" === e.logLevel ? s.kg.log(e.message) : s.kg.warn(e)
                    }
                }))
            }

            _processEvent(t, e, n) {
                const r = this.getOptions(), {sampleRate: s} = r, i = T(t), c = w(t), l = t.type || "error",
                    d = `before send for type \`${l}\``;
                if (c && "number" === typeof s && Math.random() > s) return this.recordDroppedEvent("sample_rate", "error", t), (0, a.$2)(new u.b(`Discarding event because it's not included in the random sample (sampling rate = ${s})`, "log"));
                const p = "replay_event" === l ? "replay" : l,
                    h = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                return this._prepareEvent(t, e, n, h).then((n => {
                    if (null === n) throw this.recordDroppedEvent("event_processor", p, t), new u.b("An event processor returned `null`, will not send event.", "log");
                    if (e.data && !0 === e.data.__sentry__) return n;
                    const s = function (t, e, n) {
                        const {beforeSend: r, beforeSendTransaction: s} = t;
                        if (w(e) && r) return r(e, n);
                        if (T(e) && s) return s(e, n);
                        return e
                    }(r, n, e);
                    return function (t, e) {
                        const n = `${e} must return \`null\` or a valid event.`;
                        if ((0, o.J8)(t)) return t.then((t => {
                            if (!(0, o.PO)(t) && null !== t) throw new u.b(n);
                            return t
                        }), (t => {
                            throw new u.b(`${e} rejected with ${t}`)
                        }));
                        if (!(0, o.PO)(t) && null !== t) throw new u.b(n);
                        return t
                    }(s, d)
                })).then((r => {
                    if (null === r) throw this.recordDroppedEvent("before_send", p, t), new u.b(`${d} returned \`null\`, will not send event.`, "log");
                    const s = n && n.getSession();
                    !i && s && this._updateSessionFromEvent(s, r);
                    const o = r.transaction_info;
                    if (i && o && r.transaction !== t.transaction) {
                        const t = "custom";
                        r.transaction_info = {...o, source: t}
                    }
                    return this.sendEvent(r, e), r
                })).then(null, (t => {
                    if (t instanceof u.b) throw t;
                    throw this.captureException(t, {
                        data: {__sentry__: !0},
                        originalException: t
                    }), new u.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
                }))
            }

            _process(t) {
                this._numProcessing++, t.then((t => (this._numProcessing--, t)), (t => (this._numProcessing--, t)))
            }

            _sendEnvelope(t) {
                if (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport) return this._transport.send(t).then(null, (t => {
                    d.X && s.kg.error("Error while sending event:", t)
                }));
                d.X && s.kg.error("Transport disabled")
            }

            _clearOutcomes() {
                const t = this._outcomes;
                return this._outcomes = {}, Object.keys(t).map((e => {
                    const [n, r] = e.split(":");
                    return {reason: n, category: r, quantity: t[e]}
                }))
            }
        }

        function w(t) {
            return void 0 === t.type
        }

        function T(t) {
            return "transaction" === t.type
        }

        function x(t) {
            const e = (0, h.s3)();
            e && e.addEventProcessor && e.addEventProcessor(t)
        }
    }, 51131: function (t, e, n) {
        "use strict";
        n.d(e, {
            J: function () {
                return r
            }
        });
        const r = "production"
    }, 81703: function (t, e, n) {
        "use strict";
        n.d(e, {
            X: function () {
                return r
            }
        });
        const r = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    }, 28656: function (t, e, n) {
        "use strict";
        n.d(e, {
            M: function () {
                return o
            }, Q: function () {
                return i
            }
        });
        var r = n(58725), s = n(30292);

        function i(t, e, n, i) {
            const o = (0, r.HY)(n),
                a = {sent_at: (new Date).toISOString(), ...o && {sdk: o}, ...!!i && e && {dsn: (0, s.RA)(e)}},
                c = "aggregates" in t ? [{type: "sessions"}, t] : [{type: "session"}, t.toJSON()];
            return (0, r.Jd)(a, [c])
        }

        function o(t, e, n, s) {
            const i = (0, r.HY)(n), o = t.type && "replay_event" !== t.type ? t.type : "event";
            !function (t, e) {
                e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
            }(t, n && n.sdk);
            const a = (0, r.Cd)(t, i, s, e);
            delete t.sdkProcessingMetadata;
            const c = [{type: o}, t];
            return (0, r.Jd)(a, [c])
        }
    }, 71195: function (t, e, n) {
        "use strict";
        n.d(e, {
            RP: function () {
                return l
            }, cc: function () {
                return u
            }, fH: function () {
                return c
            }
        });
        var r = n(71235), s = n(96893), i = n(12343), o = n(67597), a = n(81703);

        function c() {
            return (0, r.YO)("globalEventProcessors", (() => []))
        }

        function u(t) {
            c().push(t)
        }

        function l(t, e, n, r = 0) {
            return new s.cW(((s, c) => {
                const u = t[r];
                if (null === e || "function" !== typeof u) s(e); else {
                    const d = u({...e}, n);
                    a.X && u.id && null === d && i.kg.log(`Event processor "${u.id}" dropped event`), (0, o.J8)(d) ? d.then((e => l(t, e, n, r + 1).then(s))).then(null, c) : l(t, d, n, r + 1).then(s).then(null, c)
                }
            }))
        }
    }, 64487: function (t, e, n) {
        "use strict";
        n.d(e, {
            $e: function () {
                return S
            }, TM: function () {
                return A
            }, Tb: function () {
                return l
            }, YA: function () {
                return v
            }, Yr: function () {
                return T
            }, _d: function () {
                return w
            }, av: function () {
                return b
            }, cg: function () {
                return N
            }, dk: function () {
                return R
            }, e: function () {
                return h
            }, eN: function () {
                return p
            }, eW: function () {
                return C
            }, mG: function () {
                return _
            }, nZ: function () {
                return M
            }, n_: function () {
                return f
            }, rJ: function () {
                return g
            }, s3: function () {
                return I
            }, sU: function () {
                return y
            }, uT: function () {
                return d
            }, v: function () {
                return m
            }, wi: function () {
                return k
            }, xv: function () {
                return E
            }, yj: function () {
                return O
            }, yl: function () {
                return x
            }
        });
        var r = n(12343), s = n(71235), i = n(51131), o = n(81703), a = n(95659), c = n(9015), u = n(88942);

        function l(t, e) {
            return (0, a.Gd)().captureException(t, (0, u.U0)(e))
        }

        function d(t, e) {
            const n = "string" === typeof e ? e : void 0, r = "string" !== typeof e ? {captureContext: e} : void 0;
            return (0, a.Gd)().captureMessage(t, n, r)
        }

        function p(t, e) {
            return (0, a.Gd)().captureEvent(t, e)
        }

        function h(t) {
            (0, a.Gd)().configureScope(t)
        }

        function f(t, e) {
            (0, a.Gd)().addBreadcrumb(t, e)
        }

        function m(t, e) {
            (0, a.Gd)().setContext(t, e)
        }

        function g(t) {
            (0, a.Gd)().setExtras(t)
        }

        function y(t, e) {
            (0, a.Gd)().setExtra(t, e)
        }

        function _(t) {
            (0, a.Gd)().setTags(t)
        }

        function v(t, e) {
            (0, a.Gd)().setTag(t, e)
        }

        function b(t) {
            (0, a.Gd)().setUser(t)
        }

        function S(...t) {
            const e = (0, a.Gd)();
            if (2 === t.length) {
                const [n, r] = t;
                return n ? e.withScope((() => (e.getStackTop().scope = n, r(n)))) : e.withScope(r)
            }
            return e.withScope(t[0])
        }

        function k(t) {
            return (0, a.Ok)((() => t((0, a.aF)())))
        }

        function w(t, e) {
            return S((n => (n.setSpan(t), e(n))))
        }

        function T(t, e) {
            return (0, a.Gd)().startTransaction({...t}, e)
        }

        async function x(t) {
            const e = I();
            return e ? e.flush(t) : (o.X && r.kg.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
        }

        async function E(t) {
            const e = I();
            return e ? e.close(t) : (o.X && r.kg.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
        }

        function C() {
            return (0, a.Gd)().lastEventId()
        }

        function I() {
            return (0, a.Gd)().getClient()
        }

        function R() {
            return !!I()
        }

        function M() {
            return (0, a.Gd)().getScope()
        }

        function O(t) {
            const e = I(), n = (0, a.aF)(), r = M(), {
                release: o,
                environment: u = i.J
            } = e && e.getOptions() || {}, {userAgent: l} = s.n2.navigator || {}, d = (0, c.Hv)({
                release: o,
                environment: u,
                user: r.getUser() || n.getUser(), ...l && {userAgent: l}, ...t
            }), p = n.getSession();
            return p && "ok" === p.status && (0, c.CT)(p, {status: "exited"}), A(), n.setSession(d), r.setSession(d), d
        }

        function A() {
            const t = (0, a.aF)(), e = M(), n = e.getSession() || t.getSession();
            n && (0, c.RJ)(n), D(), t.setSession(), e.setSession()
        }

        function D() {
            const t = (0, a.aF)(), e = M(), n = I(), r = e.getSession() || t.getSession();
            r && n && n.captureSession && n.captureSession(r)
        }

        function N(t = !1) {
            t ? A() : D()
        }
    }, 95659: function (t, e, n) {
        "use strict";
        n.d(e, {
            Gd: function () {
                return _
            }, Ok: function () {
                return S
            }, Xb: function () {
                return m
            }, aF: function () {
                return v
            }, cu: function () {
                return g
            }, pj: function () {
                return y
            }, vi: function () {
                return w
            }
        });
        var r = n(67597), s = n(62844), i = n(21170), o = n(12343), a = n(71235), c = n(51131), u = n(81703),
            l = n(10350), d = n(9015), p = n(40105);
        const h = parseFloat(p.J), f = 100;

        class m {
            constructor(t, e, n, r = h) {
                let s, i;
                this._version = r, e ? s = e : (s = new l.sX, s.setClient(t)), n ? i = n : (i = new l.sX, i.setClient(t)), this._stack = [{scope: s}], t && this.bindClient(t), this._isolationScope = i
            }

            isOlderThan(t) {
                return this._version < t
            }

            bindClient(t) {
                const e = this.getStackTop();
                e.client = t, e.scope.setClient(t), t && t.setupIntegrations && t.setupIntegrations()
            }

            pushScope() {
                const t = this.getScope().clone();
                return this.getStack().push({client: this.getClient(), scope: t}), t
            }

            popScope() {
                return !(this.getStack().length <= 1) && !!this.getStack().pop()
            }

            withScope(t) {
                const e = this.pushScope();
                let n;
                try {
                    n = t(e)
                } catch (s) {
                    throw this.popScope(), s
                }
                return (0, r.J8)(n) ? n.then((t => (this.popScope(), t)), (t => {
                    throw this.popScope(), t
                })) : (this.popScope(), n)
            }

            getClient() {
                return this.getStackTop().client
            }

            getScope() {
                return this.getStackTop().scope
            }

            getIsolationScope() {
                return this._isolationScope
            }

            getStack() {
                return this._stack
            }

            getStackTop() {
                return this._stack[this._stack.length - 1]
            }

            captureException(t, e) {
                const n = this._lastEventId = e && e.event_id ? e.event_id : (0, s.DM)(),
                    r = new Error("Sentry syntheticException");
                return this.getScope().captureException(t, {
                    originalException: t,
                    syntheticException: r, ...e,
                    event_id: n
                }), n
            }

            captureMessage(t, e, n) {
                const r = this._lastEventId = n && n.event_id ? n.event_id : (0, s.DM)(), i = new Error(t);
                return this.getScope().captureMessage(t, e, {
                    originalException: t,
                    syntheticException: i, ...n,
                    event_id: r
                }), r
            }

            captureEvent(t, e) {
                const n = e && e.event_id ? e.event_id : (0, s.DM)();
                return t.type || (this._lastEventId = n), this.getScope().captureEvent(t, {...e, event_id: n}), n
            }

            lastEventId() {
                return this._lastEventId
            }

            addBreadcrumb(t, e) {
                const {scope: n, client: r} = this.getStackTop();
                if (!r) return;
                const {beforeBreadcrumb: s = null, maxBreadcrumbs: a = f} = r.getOptions && r.getOptions() || {};
                if (a <= 0) return;
                const c = {timestamp: (0, i.yW)(), ...t}, u = s ? (0, o.Cf)((() => s(c, e))) : c;
                null !== u && (r.emit && r.emit("beforeAddBreadcrumb", u, e), n.addBreadcrumb(u, a))
            }

            setUser(t) {
                this.getScope().setUser(t), this.getIsolationScope().setUser(t)
            }

            setTags(t) {
                this.getScope().setTags(t), this.getIsolationScope().setTags(t)
            }

            setExtras(t) {
                this.getScope().setExtras(t), this.getIsolationScope().setExtras(t)
            }

            setTag(t, e) {
                this.getScope().setTag(t, e), this.getIsolationScope().setTag(t, e)
            }

            setExtra(t, e) {
                this.getScope().setExtra(t, e), this.getIsolationScope().setExtra(t, e)
            }

            setContext(t, e) {
                this.getScope().setContext(t, e), this.getIsolationScope().setContext(t, e)
            }

            configureScope(t) {
                const {scope: e, client: n} = this.getStackTop();
                n && t(e)
            }

            run(t) {
                const e = y(this);
                try {
                    t(this)
                } finally {
                    y(e)
                }
            }

            getIntegration(t) {
                const e = this.getClient();
                if (!e) return null;
                try {
                    return e.getIntegration(t)
                } catch (n) {
                    return u.X && o.kg.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
                }
            }

            startTransaction(t, e) {
                const n = this._callExtensionMethod("startTransaction", t, e);
                if (u.X && !n) {
                    this.getClient() ? o.kg.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : o.kg.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")
                }
                return n
            }

            traceHeaders() {
                return this._callExtensionMethod("traceHeaders")
            }

            captureSession(t = !1) {
                if (t) return this.endSession();
                this._sendSessionUpdate()
            }

            endSession() {
                const t = this.getStackTop().scope, e = t.getSession();
                e && (0, d.RJ)(e), this._sendSessionUpdate(), t.setSession()
            }

            startSession(t) {
                const {scope: e, client: n} = this.getStackTop(), {
                        release: r,
                        environment: s = c.J
                    } = n && n.getOptions() || {}, {userAgent: i} = a.n2.navigator || {},
                    o = (0, d.Hv)({release: r, environment: s, user: e.getUser(), ...i && {userAgent: i}, ...t}),
                    u = e.getSession && e.getSession();
                return u && "ok" === u.status && (0, d.CT)(u, {status: "exited"}), this.endSession(), e.setSession(o), o
            }

            shouldSendDefaultPii() {
                const t = this.getClient(), e = t && t.getOptions();
                return Boolean(e && e.sendDefaultPii)
            }

            _sendSessionUpdate() {
                const {scope: t, client: e} = this.getStackTop(), n = t.getSession();
                n && e && e.captureSession && e.captureSession(n)
            }

            _callExtensionMethod(t, ...e) {
                const n = g().__SENTRY__;
                if (n && n.extensions && "function" === typeof n.extensions[t]) return n.extensions[t].apply(this, e);
                u.X && o.kg.warn(`Extension method ${t} couldn't be found, doing nothing.`)
            }
        }

        function g() {
            return a.n2.__SENTRY__ = a.n2.__SENTRY__ || {extensions: {}, hub: void 0}, a.n2
        }

        function y(t) {
            const e = g(), n = w(e);
            return T(e, t), n
        }

        function _() {
            const t = g();
            if (t.__SENTRY__ && t.__SENTRY__.acs) {
                const e = t.__SENTRY__.acs.getCurrentHub();
                if (e) return e
            }
            return b(t)
        }

        function v() {
            return _().getIsolationScope()
        }

        function b(t = g()) {
            return k(t) && !w(t).isOlderThan(h) || T(t, new m), w(t)
        }

        function S(t, e = {}) {
            const n = g();
            return n.__SENTRY__ && n.__SENTRY__.acs ? n.__SENTRY__.acs.runWithAsyncContext(t, e) : t()
        }

        function k(t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
        }

        function w(t) {
            return (0, a.YO)("hub", (() => new m), t)
        }

        function T(t, e) {
            if (!t) return !1;
            return (t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0
        }
    }, 22967: function (t, e, n) {
        "use strict";
        n.d(e, {
            M5: function () {
                return f
            }, RN: function () {
                return m
            }, _I: function () {
                return g
            }, m7: function () {
                return h
            }, m8: function () {
                return l
            }, q4: function () {
                return d
            }, uf: function () {
                return p
            }
        });
        var r = n(62844), s = n(12343), i = n(81703), o = n(71195), a = n(64487), c = n(95659);
        const u = [];

        function l(t) {
            const e = t.defaultIntegrations || [], n = t.integrations;
            let s;
            e.forEach((t => {
                t.isDefaultInstance = !0
            })), s = Array.isArray(n) ? [...e, ...n] : "function" === typeof n ? (0, r.lE)(n(e)) : e;
            const i = function (t) {
                const e = {};
                return t.forEach((t => {
                    const {name: n} = t, r = e[n];
                    r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
                })), Object.keys(e).map((t => e[t]))
            }(s), o = function (t, e) {
                for (let n = 0; n < t.length; n++) if (!0 === e(t[n])) return n;
                return -1
            }(i, (t => "Debug" === t.name));
            if (-1 !== o) {
                const [t] = i.splice(o, 1);
                i.push(t)
            }
            return i
        }

        function d(t, e) {
            const n = {};
            return e.forEach((e => {
                e && h(t, e, n)
            })), n
        }

        function p(t, e) {
            for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t)
        }

        function h(t, e, n) {
            if (n[e.name]) i.X && s.kg.log(`Integration skipped because it was already installed: ${e.name}`); else {
                if (n[e.name] = e, -1 === u.indexOf(e.name) && (e.setupOnce(o.cc, c.Gd), u.push(e.name)), e.setup && "function" === typeof e.setup && e.setup(t), t.on && "function" === typeof e.preprocessEvent) {
                    const n = e.preprocessEvent.bind(e);
                    t.on("preprocessEvent", ((e, r) => n(e, r, t)))
                }
                if (t.addEventProcessor && "function" === typeof e.processEvent) {
                    const n = e.processEvent.bind(e), r = Object.assign(((e, r) => n(e, r, t)), {id: e.name});
                    t.addEventProcessor(r)
                }
                i.X && s.kg.log(`Integration installed: ${e.name}`)
            }
        }

        function f(t) {
            const e = (0, a.s3)();
            e && e.addIntegration ? e.addIntegration(t) : i.X && s.kg.warn(`Cannot add integration "${t.name}" because no SDK Client is available.`)
        }

        function m(t, e) {
            return Object.assign((function (...t) {
                return e(...t)
            }), {id: t})
        }

        function g(t) {
            return t
        }
    }, 19116: function (t, e, n) {
        "use strict";
        n.d(e, {
            C: function () {
                return u
            }, c: function () {
                return l
            }
        });
        var r = n(20535), s = n(64487), i = n(22967);
        let o;
        const a = "FunctionToString", c = new WeakMap, u = (0, i._I)((() => ({
            name: a, setupOnce() {
                o = Function.prototype.toString;
                try {
                    Function.prototype.toString = function (...t) {
                        const e = (0, r.HK)(this), n = c.has((0, s.s3)()) && void 0 !== e ? e : this;
                        return o.apply(n, t)
                    }
                } catch (t) {
                }
            }, setup(t) {
                c.set(t, !0)
            }
        }))), l = (0, i.RN)(a, u)
    }, 42422: function (t, e, n) {
        "use strict";
        n.d(e, {
            Q: function () {
                return p
            }, S: function () {
                return d
            }
        });
        var r = n(12343), s = n(62844), i = n(57321), o = n(81703), a = n(22967);
        const c = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            u = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
            l = "InboundFilters", d = (0, a._I)(((t = {}) => ({
                name: l, setupOnce() {
                }, processEvent(e, n, a) {
                    const l = a.getOptions(), d = function (t = {}, e = {}) {
                        return {
                            allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                            denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                            ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : c],
                            ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : u],
                            ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                        }
                    }(t, l);
                    return function (t, e) {
                        if (e.ignoreInternal && function (t) {
                            try {
                                return "SentryError" === t.exception.values[0].type
                            } catch (e) {
                            }
                            return !1
                        }(t)) return o.X && r.kg.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${(0, s.jH)(t)}`), !0;
                        if (function (t, e) {
                            if (t.type || !e || !e.length) return !1;
                            return function (t) {
                                const e = [];
                                t.message && e.push(t.message);
                                let n;
                                try {
                                    n = t.exception.values[t.exception.values.length - 1]
                                } catch (i) {
                                }
                                n && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`));
                                o.X && 0 === e.length && r.kg.error(`Could not extract message for event ${(0, s.jH)(t)}`);
                                return e
                            }(t).some((t => (0, i.U0)(t, e)))
                        }(t, e.ignoreErrors)) return o.X && r.kg.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${(0, s.jH)(t)}`), !0;
                        if (function (t, e) {
                            if ("transaction" !== t.type || !e || !e.length) return !1;
                            const n = t.transaction;
                            return !!n && (0, i.U0)(n, e)
                        }(t, e.ignoreTransactions)) return o.X && r.kg.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${(0, s.jH)(t)}`), !0;
                        if (function (t, e) {
                            if (!e || !e.length) return !1;
                            const n = h(t);
                            return !!n && (0, i.U0)(n, e)
                        }(t, e.denyUrls)) return o.X && r.kg.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${(0, s.jH)(t)}.\nUrl: ${h(t)}`), !0;
                        if (!function (t, e) {
                            if (!e || !e.length) return !0;
                            const n = h(t);
                            return !n || (0, i.U0)(n, e)
                        }(t, e.allowUrls)) return o.X && r.kg.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${(0, s.jH)(t)}.\nUrl: ${h(t)}`), !0;
                        return !1
                    }(e, d) ? null : e
                }
            }))), p = (0, a.RN)(l, d);

        function h(t) {
            try {
                let n;
                try {
                    n = t.exception.values[0].stacktrace.frames
                } catch (e) {
                }
                return n ? function (t = []) {
                    for (let e = t.length - 1; e >= 0; e--) {
                        const n = t[e];
                        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null
                    }
                    return null
                }(n) : null
            } catch (n) {
                return o.X && r.kg.error(`Cannot extract url for event ${(0, s.jH)(t)}`), null
            }
        }
    }, 56631: function (t, e, n) {
        "use strict";
        n.d(e, {
            JM: function () {
                return r
            }, RF: function () {
                return u
            }, X7: function () {
                return a
            }, gK: function () {
                return c
            }, g_: function () {
                return o
            }, is: function () {
                return i
            }, uG: function () {
                return s
            }
        });
        const r = "c", s = "g", i = "s", o = "d", a = /[^a-zA-Z0-9_/.-]+/g, c = /[^\w\d\s_:/@.{}[\]$-]+/g, u = 5e3
    }, 55986: function (t, e, n) {
        "use strict";
        n.d(e, {
            v: function () {
                return c
            }, y: function () {
                return a
            }
        });
        var r = n(20535), s = n(32336);
        let i;

        function o(t) {
            return i ? i.get(t) : void 0
        }

        function a(t) {
            const e = o(t);
            if (!e) return;
            const n = {};
            for (const [, [s, i]] of e) n[s] || (n[s] = []), n[s].push((0, r.Jr)(i));
            return n
        }

        function c(t, e, n, r, a, c) {
            const u = (0, s.HN)();
            if (u) {
                const s = o(u) || new Map, l = `${t}:${e}@${r}`, d = s.get(c);
                if (d) {
                    const [, t] = d;
                    s.set(c, [l, {
                        min: Math.min(t.min, n),
                        max: Math.max(t.max, n),
                        count: t.count += 1,
                        sum: t.sum += n,
                        tags: t.tags
                    }])
                } else s.set(c, [l, {min: n, max: n, count: 1, sum: n, tags: a}]);
                i || (i = new WeakMap), i.set(u, s)
            }
        }
    }, 6189: function (t, e, n) {
        "use strict";
        n.d(e, {
            Bg: function () {
                return c
            }, Ic: function () {
                return i
            }, M: function () {
                return o
            }, uv: function () {
                return a
            }
        });
        var r = n(20535), s = n(56631);

        function i(t, e, n, s) {
            return `${t}${e}${n}${Object.entries((0, r.Jr)(s)).sort(((t, e) => t[0].localeCompare(e[0])))}`
        }

        function o(t) {
            let e = 0;
            for (let n = 0; n < t.length; n++) {
                e = (e << 5) - e + t.charCodeAt(n), e &= e
            }
            return e >>> 0
        }

        function a(t) {
            let e = "";
            for (const n of t) {
                const t = Object.entries(n.tags),
                    r = t.length > 0 ? `|#${t.map((([t, e]) => `${t}:${e}`)).join(",")}` : "";
                e += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`
            }
            return e
        }

        function c(t) {
            const e = {};
            for (const n in t) if (Object.prototype.hasOwnProperty.call(t, n)) {
                e[n.replace(s.X7, "_")] = String(t[n]).replace(s.gK, "")
            }
            return e
        }
    }, 10350: function (t, e, n) {
        "use strict";
        n.d(e, {
            lW: function () {
                return p
            }, sX: function () {
                return d
            }
        });
        var r = n(67597), s = n(21170), i = n(62844), o = n(12343), a = n(71195), c = n(9015), u = n(73379);
        let l;

        class d {
            constructor() {
                this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = h()
            }

            static clone(t) {
                return t ? t.clone() : new d
            }

            clone() {
                const t = new d;
                return t._breadcrumbs = [...this._breadcrumbs], t._tags = {...this._tags}, t._extra = {...this._extra}, t._contexts = {...this._contexts}, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = {...this._sdkProcessingMetadata}, t._propagationContext = {...this._propagationContext}, t._client = this._client, t
            }

            setClient(t) {
                this._client = t
            }

            getClient() {
                return this._client
            }

            addScopeListener(t) {
                this._scopeListeners.push(t)
            }

            addEventProcessor(t) {
                return this._eventProcessors.push(t), this
            }

            setUser(t) {
                return this._user = t || {
                    email: void 0,
                    id: void 0,
                    ip_address: void 0,
                    segment: void 0,
                    username: void 0
                }, this._session && (0, c.CT)(this._session, {user: t}), this._notifyScopeListeners(), this
            }

            getUser() {
                return this._user
            }

            getRequestSession() {
                return this._requestSession
            }

            setRequestSession(t) {
                return this._requestSession = t, this
            }

            setTags(t) {
                return this._tags = {...this._tags, ...t}, this._notifyScopeListeners(), this
            }

            setTag(t, e) {
                return this._tags = {...this._tags, [t]: e}, this._notifyScopeListeners(), this
            }

            setExtras(t) {
                return this._extra = {...this._extra, ...t}, this._notifyScopeListeners(), this
            }

            setExtra(t, e) {
                return this._extra = {...this._extra, [t]: e}, this._notifyScopeListeners(), this
            }

            setFingerprint(t) {
                return this._fingerprint = t, this._notifyScopeListeners(), this
            }

            setLevel(t) {
                return this._level = t, this._notifyScopeListeners(), this
            }

            setTransactionName(t) {
                return this._transactionName = t, this._notifyScopeListeners(), this
            }

            setContext(t, e) {
                return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
            }

            setSpan(t) {
                return this._span = t, this._notifyScopeListeners(), this
            }

            getSpan() {
                return this._span
            }

            getTransaction() {
                const t = this._span;
                return t && t.transaction
            }

            setSession(t) {
                return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
            }

            getSession() {
                return this._session
            }

            update(t) {
                if (!t) return this;
                const e = "function" === typeof t ? t(this) : t;
                if (e instanceof d) {
                    const t = e.getScopeData();
                    this._tags = {...this._tags, ...t.tags}, this._extra = {...this._extra, ...t.extra}, this._contexts = {...this._contexts, ...t.contexts}, t.user && Object.keys(t.user).length && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint.length && (this._fingerprint = t.fingerprint), e.getRequestSession() && (this._requestSession = e.getRequestSession()), t.propagationContext && (this._propagationContext = t.propagationContext)
                } else if ((0, r.PO)(e)) {
                    const e = t;
                    this._tags = {...this._tags, ...e.tags}, this._extra = {...this._extra, ...e.extra}, this._contexts = {...this._contexts, ...e.contexts}, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)
                }
                return this
            }

            clear() {
                return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = h(), this
            }

            addBreadcrumb(t, e) {
                const n = "number" === typeof e ? e : 100;
                if (n <= 0) return this;
                const r = {timestamp: (0, s.yW)(), ...t}, i = this._breadcrumbs;
                return i.push(r), this._breadcrumbs = i.length > n ? i.slice(-n) : i, this._notifyScopeListeners(), this
            }

            getLastBreadcrumb() {
                return this._breadcrumbs[this._breadcrumbs.length - 1]
            }

            clearBreadcrumbs() {
                return this._breadcrumbs = [], this._notifyScopeListeners(), this
            }

            addAttachment(t) {
                return this._attachments.push(t), this
            }

            getAttachments() {
                return this.getScopeData().attachments
            }

            clearAttachments() {
                return this._attachments = [], this
            }

            getScopeData() {
                const {
                    _breadcrumbs: t,
                    _attachments: e,
                    _contexts: n,
                    _tags: r,
                    _extra: s,
                    _user: i,
                    _level: o,
                    _fingerprint: a,
                    _eventProcessors: c,
                    _propagationContext: u,
                    _sdkProcessingMetadata: l,
                    _transactionName: d,
                    _span: p
                } = this;
                return {
                    breadcrumbs: t,
                    attachments: e,
                    contexts: n,
                    tags: r,
                    extra: s,
                    user: i,
                    level: o,
                    fingerprint: a || [],
                    eventProcessors: c,
                    propagationContext: u,
                    sdkProcessingMetadata: l,
                    transactionName: d,
                    span: p
                }
            }

            applyToEvent(t, e = {}, n = []) {
                (0, u.gi)(t, this.getScopeData());
                const r = [...n, ...(0, a.fH)(), ...this._eventProcessors];
                return (0, a.RP)(r, t, e)
            }

            setSDKProcessingMetadata(t) {
                return this._sdkProcessingMetadata = {...this._sdkProcessingMetadata, ...t}, this
            }

            setPropagationContext(t) {
                return this._propagationContext = t, this
            }

            getPropagationContext() {
                return this._propagationContext
            }

            captureException(t, e) {
                const n = e && e.event_id ? e.event_id : (0, i.DM)();
                if (!this._client) return o.kg.warn("No client configured on scope - will not capture exception!"), n;
                const r = new Error("Sentry syntheticException");
                return this._client.captureException(t, {
                    originalException: t,
                    syntheticException: r, ...e,
                    event_id: n
                }, this), n
            }

            captureMessage(t, e, n) {
                const r = n && n.event_id ? n.event_id : (0, i.DM)();
                if (!this._client) return o.kg.warn("No client configured on scope - will not capture message!"), r;
                const s = new Error(t);
                return this._client.captureMessage(t, e, {
                    originalException: t,
                    syntheticException: s, ...n,
                    event_id: r
                }, this), r
            }

            captureEvent(t, e) {
                const n = e && e.event_id ? e.event_id : (0, i.DM)();
                return this._client ? (this._client.captureEvent(t, {
                    ...e,
                    event_id: n
                }, this), n) : (o.kg.warn("No client configured on scope - will not capture event!"), n)
            }

            _notifyScopeListeners() {
                this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t => {
                    t(this)
                })), this._notifyingListeners = !1)
            }
        }

        function p() {
            return l || (l = new d), l
        }

        function h() {
            return {traceId: (0, i.DM)(), spanId: (0, i.DM)().substring(16)}
        }
    }, 67966: function (t, e, n) {
        "use strict";
        n.d(e, {
            K: function () {
                return c
            }, M: function () {
                return a
            }
        });
        var r = n(12343), s = n(81703), i = n(64487), o = n(95659);

        function a(t, e) {
            !0 === e.debug && (s.X ? r.kg.enable() : (0, r.Cf)((() => {
                console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
            })));
            (0, i.nZ)().update(e.initialScope);
            const n = new t(e);
            c(n), function (t) {
                t.init ? t.init() : t.setupIntegrations && t.setupIntegrations()
            }(n)
        }

        function c(t) {
            const e = (0, o.Gd)().getStackTop();
            e.client = t, e.scope.setClient(t)
        }
    }, 76754: function (t, e, n) {
        "use strict";
        n.d(e, {
            $J: function () {
                return i
            }, S3: function () {
                return o
            }, TE: function () {
                return s
            }, Zj: function () {
                return r
            }, p6: function () {
                return a
            }
        });
        const r = "sentry.source", s = "sentry.sample_rate", i = "sentry.op", o = "sentry.origin", a = "profile_id"
    }, 9015: function (t, e, n) {
        "use strict";
        n.d(e, {
            CT: function () {
                return a
            }, Hv: function () {
                return o
            }, RJ: function () {
                return c
            }
        });
        var r = n(21170), s = n(62844), i = n(20535);

        function o(t) {
            const e = (0, r.ph)(), n = {
                sid: (0, s.DM)(),
                init: !0,
                timestamp: e,
                started: e,
                duration: 0,
                status: "ok",
                errors: 0,
                ignoreDuration: !1,
                toJSON: () => function (t) {
                    return (0, i.Jr)({
                        sid: `${t.sid}`,
                        init: t.init,
                        started: new Date(1e3 * t.started).toISOString(),
                        timestamp: new Date(1e3 * t.timestamp).toISOString(),
                        status: t.status,
                        errors: t.errors,
                        did: "number" === typeof t.did || "string" === typeof t.did ? `${t.did}` : void 0,
                        duration: t.duration,
                        abnormal_mechanism: t.abnormal_mechanism,
                        attrs: {
                            release: t.release,
                            environment: t.environment,
                            ip_address: t.ipAddress,
                            user_agent: t.userAgent
                        }
                    })
                }(n)
            };
            return t && a(n, t), n
        }

        function a(t, e = {}) {
            if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || (0, r.ph)(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, s.DM)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" === typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0; else if ("number" === typeof e.duration) t.duration = e.duration; else {
                const e = t.timestamp - t.started;
                t.duration = e >= 0 ? e : 0
            }
            e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" === typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
        }

        function c(t, e) {
            let n = {};
            e ? n = {status: e} : "ok" === t.status && (n = {status: "exited"}), a(t, n)
        }
    }, 90454: function (t, e, n) {
        "use strict";
        n.d(e, {
            _: function () {
                return c
            }, j: function () {
                return u
            }
        });
        var r = n(20535), s = n(51131), i = n(64487), o = n(55102), a = n(93371);

        function c(t, e, n) {
            const i = e.getOptions(), {publicKey: o} = e.getDsn() || {}, {segment: a} = n && n.getUser() || {},
                c = (0, r.Jr)({
                    environment: i.environment || s.J,
                    release: i.release,
                    user_segment: a,
                    public_key: o,
                    trace_id: t
                });
            return e.emit && e.emit("createDsc", c), c
        }

        function u(t) {
            const e = (0, i.s3)();
            if (!e) return {};
            const n = c((0, a.XU)(t).trace_id || "", e, (0, i.nZ)()), r = (0, o.G)(t);
            if (!r) return n;
            const s = r && r._frozenDynamicSamplingContext;
            if (s) return s;
            const {sampleRate: u, source: l} = r.metadata;
            null != u && (n.sample_rate = `${u}`);
            const d = (0, a.XU)(r);
            return l && "url" !== l && (n.transaction = d.description), n.sampled = String((0, a.Tt)(r)), e.emit && e.emit("createDsc", n), n
        }
    }, 77850: function (t, e, n) {
        "use strict";
        n.d(e, {
            T: function () {
                return _
            }, l: function () {
                return y
            }
        });
        var r = n(12343), s = n(81703), i = n(95659), o = n(93371), a = n(51674), c = n(57373), u = n(9791);
        let l = !1;

        function d() {
            const t = (0, u.x1)();
            if (t) {
                const e = "internal_error";
                s.X && r.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
            }
        }

        d.tag = "sentry_tracingErrorCallback";
        var p = n(65544), h = n(71221), f = n(78069);

        function m() {
            const t = this.getScope().getSpan();
            return t ? {"sentry-trace": (0, o.Hb)(t)} : {}
        }

        function g(t, e) {
            const n = this.getClient(), i = n && n.getOptions() || {}, o = i.instrumenter || "sentry",
                a = t.instrumenter || "sentry";
            o !== a && (s.X && r.kg.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${o}\` instrumenter.\nThe transaction will not be sampled. Please use the ${o} instrumentation to start transactions.`), t.sampled = !1);
            let c = new f.Y(t, this);
            return c = (0, h.f)(c, i, {
                name: t.name,
                parentSampled: t.parentSampled,
                transactionContext: t,
                attributes: {...t.data, ...t.attributes}, ...e
            }), c.isRecording() && c.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", c), c
        }

        function y(t, e, n, r, s, i, o, a = !1) {
            const c = t.getClient(), u = c && c.getOptions() || {};
            let l = new p.io(e, t, n, r, o, s, a);
            return l = (0, h.f)(l, u, {
                name: e.name,
                parentSampled: e.parentSampled,
                transactionContext: e,
                attributes: {...e.data, ...e.attributes}, ...i
            }), l.isRecording() && l.initSpanRecorder(u._experiments && u._experiments.maxSpans), c && c.emit && c.emit("startTransaction", l), l
        }

        function _() {
            const t = (0, i.cu)();
            t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = g), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = m), l || (l = !0, (0, a.V)(d), (0, c.h)(d)))
        }
    }, 65544: function (t, e, n) {
        "use strict";
        n.d(e, {
            AT: function () {
                return u
            }, io: function () {
                return p
            }
        });
        var r = n(12343), s = n(21170), i = n(81703), o = n(93371), a = n(38903), c = n(78069);
        const u = {idleTimeout: 1e3, finalTimeout: 3e4, heartbeatInterval: 5e3},
            l = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];

        class d extends a.g {
            constructor(t, e, n, r) {
                super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
            }

            add(t) {
                if (t.spanContext().spanId !== this.transactionSpanId) {
                    const e = t.end;
                    t.end = (...n) => (this._popActivity(t.spanContext().spanId), e.apply(t, n)), void 0 === (0, o.XU)(t).timestamp && this._pushActivity(t.spanContext().spanId)
                }
                super.add(t)
            }
        }

        class p extends c.Y {
            constructor(t, e, n = u.idleTimeout, s = u.finalTimeout, o = u.heartbeatInterval, a = !1, c = !1) {
                super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = s, this._heartbeatInterval = o, this._onScope = a, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = l[4], this._autoFinishAllowed = !c, a && (i.X && r.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), e.getScope().setSpan(this)), c || this._restartIdleTimeout(), setTimeout((() => {
                    this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = l[3], this.end())
                }), this._finalTimeout)
            }

            end(t) {
                const e = (0, o.$k)(t);
                if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), this.spanRecorder) {
                    i.X && r.kg.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                    for (const t of this._beforeFinishCallbacks) t(this, e);
                    this.spanRecorder.spans = this.spanRecorder.spans.filter((t => {
                        if (t.spanContext().spanId === this.spanContext().spanId) return !0;
                        (0, o.XU)(t).timestamp || (t.setStatus("cancelled"), t.end(e), i.X && r.kg.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(t, void 0, 2)));
                        const {start_timestamp: n, timestamp: s} = (0, o.XU)(t), a = n && n < e,
                            c = (this._finalTimeout + this._idleTimeout) / 1e3, u = s && n && s - n < c;
                        if (i.X) {
                            const e = JSON.stringify(t, void 0, 2);
                            a ? u || r.kg.log("[Tracing] discarding Span since it finished after Transaction final timeout", e) : r.kg.log("[Tracing] discarding Span since it happened after Transaction was finished", e)
                        }
                        return a && u
                    })), i.X && r.kg.log("[Tracing] flushing IdleTransaction")
                } else i.X && r.kg.log("[Tracing] No active IdleTransaction");
                if (this._onScope) {
                    const t = this._idleHub.getScope();
                    t.getTransaction() === this && t.setSpan(void 0)
                }
                return super.end(t)
            }

            registerBeforeFinishCallback(t) {
                this._beforeFinishCallbacks.push(t)
            }

            initSpanRecorder(t) {
                if (!this.spanRecorder) {
                    const e = t => {
                        this._finished || this._pushActivity(t)
                    }, n = t => {
                        this._finished || this._popActivity(t)
                    };
                    this.spanRecorder = new d(e, n, this.spanContext().spanId, t), i.X && r.kg.log("Starting heartbeat"), this._pingHeartbeat()
                }
                this.spanRecorder.add(this)
            }

            cancelIdleTimeout(t, {restartOnChildSpanChange: e} = {restartOnChildSpanChange: !0}) {
                this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = l[5], this.end(t)))
            }

            setFinishReason(t) {
                this._finishReason = t
            }

            sendAutoFinishSignal() {
                this._autoFinishAllowed || (i.X && r.kg.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0)
            }

            _restartIdleTimeout(t) {
                this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
                    this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = l[1], this.end(t))
                }), this._idleTimeout)
            }

            _pushActivity(t) {
                this.cancelIdleTimeout(void 0, {restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently}), i.X && r.kg.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, i.X && r.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)
            }

            _popActivity(t) {
                if (this.activities[t] && (i.X && r.kg.log(`[Tracing] popActivity ${t}`), delete this.activities[t], i.X && r.kg.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                    const t = (0, s.ph)();
                    this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = l[5], this.end(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
                }
            }

            _beat() {
                if (this._finished) return;
                const t = Object.keys(this.activities).join("");
                t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (i.X && r.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = l[0], this.end()) : this._pingHeartbeat()
            }

            _pingHeartbeat() {
                i.X && r.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout((() => {
                    this._beat()
                }), this._heartbeatInterval)
            }
        }
    }, 39080: function (t, e, n) {
        "use strict";
        n.d(e, {
            o: function () {
                return s
            }
        });
        var r = n(9791);

        function s(t, e, n) {
            const s = (0, r.x1)();
            s && s.setMeasurement(t, e, n)
        }
    }, 71221: function (t, e, n) {
        "use strict";
        n.d(e, {
            X: function () {
                return l
            }, f: function () {
                return u
            }
        });
        var r = n(12343), s = n(67597), i = n(81703), o = n(76754), a = n(47522), c = n(93371);

        function u(t, e, n) {
            if (!(0, a.z)(e)) return t.sampled = !1, t;
            if (void 0 !== t.sampled) return t.setAttribute(o.TE, Number(t.sampled)), t;
            let s;
            return "function" === typeof e.tracesSampler ? (s = e.tracesSampler(n), t.setAttribute(o.TE, Number(s))) : void 0 !== n.parentSampled ? s = n.parentSampled : "undefined" !== typeof e.tracesSampleRate ? (s = e.tracesSampleRate, t.setAttribute(o.TE, Number(s))) : (s = 1, t.setAttribute(o.TE, s)), l(s) ? s ? (t.sampled = Math.random() < s, t.sampled ? (i.X && r.kg.log(`[Tracing] starting ${t.op} transaction - ${(0, c.XU)(t).description}`), t) : (i.X && r.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), t)) : (i.X && r.kg.log("[Tracing] Discarding transaction because " + ("function" === typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (i.X && r.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t)
        }

        function l(t) {
            return (0, s.i2)(t) || "number" !== typeof t && "boolean" !== typeof t ? (i.X && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0 || t > 1) || (i.X && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
        }
    }, 38903: function (t, e, n) {
        "use strict";
        n.d(e, {
            D: function () {
                return f
            }, g: function () {
                return h
            }
        });
        var r = n(62844), s = n(21170), i = n(12343), o = n(20535), a = n(81703), c = n(55986), u = n(76754),
            l = n(55102), d = n(93371), p = n(27387);

        class h {
            constructor(t = 1e3) {
                this._maxlen = t, this.spans = []
            }

            add(t) {
                this.spans.length > this._maxlen ? t.spanRecorder = void 0 : this.spans.push(t)
            }
        }

        class f {
            constructor(t = {}) {
                this._traceId = t.traceId || (0, r.DM)(), this._spanId = t.spanId || (0, r.DM)().substring(16), this._startTime = t.startTimestamp || (0, s.ph)(), this.tags = t.tags ? {...t.tags} : {}, this.data = t.data ? {...t.data} : {}, this.instrumenter = t.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
                    [u.S3]: t.origin || "manual",
                    [u.$J]: t.op, ...t.attributes
                }), this._name = t.name || t.description, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.status && (this._status = t.status), t.endTimestamp && (this._endTime = t.endTimestamp), t.exclusiveTime && (this._exclusiveTime = t.exclusiveTime), this._measurements = t.measurements ? {...t.measurements} : {}
            }

            get name() {
                return this._name || ""
            }

            set name(t) {
                this.updateName(t)
            }

            get description() {
                return this._name
            }

            set description(t) {
                this._name = t
            }

            get traceId() {
                return this._traceId
            }

            set traceId(t) {
                this._traceId = t
            }

            get spanId() {
                return this._spanId
            }

            set spanId(t) {
                this._spanId = t
            }

            set parentSpanId(t) {
                this._parentSpanId = t
            }

            get parentSpanId() {
                return this._parentSpanId
            }

            get sampled() {
                return this._sampled
            }

            set sampled(t) {
                this._sampled = t
            }

            get attributes() {
                return this._attributes
            }

            set attributes(t) {
                this._attributes = t
            }

            get startTimestamp() {
                return this._startTime
            }

            set startTimestamp(t) {
                this._startTime = t
            }

            get endTimestamp() {
                return this._endTime
            }

            set endTimestamp(t) {
                this._endTime = t
            }

            get status() {
                return this._status
            }

            set status(t) {
                this._status = t
            }

            get op() {
                return this._attributes[u.$J]
            }

            set op(t) {
                this.setAttribute(u.$J, t)
            }

            get origin() {
                return this._attributes[u.S3]
            }

            set origin(t) {
                this.setAttribute(u.S3, t)
            }

            spanContext() {
                const {_spanId: t, _traceId: e, _sampled: n} = this;
                return {spanId: t, traceId: e, traceFlags: n ? d.i0 : d.ve}
            }

            startChild(t) {
                const e = new f({...t, parentSpanId: this._spanId, sampled: this._sampled, traceId: this._traceId});
                e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e);
                const n = (0, l.G)(this);
                if (e.transaction = n, a.X && n) {
                    const r = `[Tracing] Starting '${t && t.op || "< unknown op >"}' span on transaction '${(0, d.XU)(e).description || "< unknown name >"}' (${n.spanContext().spanId}).`;
                    i.kg.log(r), this._logMessage = r
                }
                return e
            }

            setTag(t, e) {
                return this.tags = {...this.tags, [t]: e}, this
            }

            setData(t, e) {
                return this.data = {...this.data, [t]: e}, this
            }

            setAttribute(t, e) {
                void 0 === e ? delete this._attributes[t] : this._attributes[t] = e
            }

            setAttributes(t) {
                Object.keys(t).forEach((e => this.setAttribute(e, t[e])))
            }

            setStatus(t) {
                return this._status = t, this
            }

            setHttpStatus(t) {
                return (0, p.Q0)(this, t), this
            }

            setName(t) {
                this.updateName(t)
            }

            updateName(t) {
                return this._name = t, this
            }

            isSuccess() {
                return "ok" === this._status
            }

            finish(t) {
                return this.end(t)
            }

            end(t) {
                if (this._endTime) return;
                const e = (0, l.G)(this);
                if (a.X && e && e.spanContext().spanId !== this._spanId) {
                    const t = this._logMessage;
                    t && i.kg.log(t.replace("Starting", "Finishing"))
                }
                this._endTime = (0, d.$k)(t)
            }

            toTraceparent() {
                return (0, d.Hb)(this)
            }

            toContext() {
                return (0, o.Jr)({
                    data: this._getData(),
                    description: this._name,
                    endTimestamp: this._endTime,
                    op: this.op,
                    parentSpanId: this._parentSpanId,
                    sampled: this._sampled,
                    spanId: this._spanId,
                    startTimestamp: this._startTime,
                    status: this._status,
                    tags: this.tags,
                    traceId: this._traceId
                })
            }

            updateWithContext(t) {
                return this.data = t.data || {}, this._name = t.name || t.description, this._endTime = t.endTimestamp, this.op = t.op, this._parentSpanId = t.parentSpanId, this._sampled = t.sampled, this._spanId = t.spanId || this._spanId, this._startTime = t.startTimestamp || this._startTime, this._status = t.status, this.tags = t.tags || {}, this._traceId = t.traceId || this._traceId, this
            }

            getTraceContext() {
                return (0, d.wy)(this)
            }

            getSpanJSON() {
                return (0, o.Jr)({
                    data: this._getData(),
                    description: this._name,
                    op: this._attributes[u.$J],
                    parent_span_id: this._parentSpanId,
                    span_id: this._spanId,
                    start_timestamp: this._startTime,
                    status: this._status,
                    tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                    timestamp: this._endTime,
                    trace_id: this._traceId,
                    origin: this._attributes[u.S3],
                    _metrics_summary: (0, c.y)(this),
                    profile_id: this._attributes[u.p6],
                    exclusive_time: this._exclusiveTime,
                    measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
                })
            }

            isRecording() {
                return !this._endTime && !!this._sampled
            }

            toJSON() {
                return this.getSpanJSON()
            }

            _getData() {
                const {data: t, _attributes: e} = this, n = Object.keys(t).length > 0, r = Object.keys(e).length > 0;
                if (n || r) return n && r ? {...t, ...e} : n ? t : e
            }
        }
    }, 27387: function (t, e, n) {
        "use strict";
        var r;

        function s(t) {
            if (t < 400 && t >= 100) return "ok";
            if (t >= 400 && t < 500) switch (t) {
                case 401:
                    return "unauthenticated";
                case 403:
                    return "permission_denied";
                case 404:
                    return "not_found";
                case 409:
                    return "already_exists";
                case 413:
                    return "failed_precondition";
                case 429:
                    return "resource_exhausted";
                default:
                    return "invalid_argument"
            }
            if (t >= 500 && t < 600) switch (t) {
                case 501:
                    return "unimplemented";
                case 503:
                    return "unavailable";
                case 504:
                    return "deadline_exceeded";
                default:
                    return "internal_error"
            }
            return "unknown_error"
        }

        n.d(e, {
            Q0: function () {
                return o
            }, Zd: function () {
                return i
            }, ix: function () {
                return s
            }
        }), function (t) {
            t.Ok = "ok";
            t.DeadlineExceeded = "deadline_exceeded";
            t.Unauthenticated = "unauthenticated";
            t.PermissionDenied = "permission_denied";
            t.NotFound = "not_found";
            t.ResourceExhausted = "resource_exhausted";
            t.InvalidArgument = "invalid_argument";
            t.Unimplemented = "unimplemented";
            t.Unavailable = "unavailable";
            t.InternalError = "internal_error";
            t.UnknownError = "unknown_error";
            t.Cancelled = "cancelled";
            t.AlreadyExists = "already_exists";
            t.FailedPrecondition = "failed_precondition";
            t.Aborted = "aborted";
            t.OutOfRange = "out_of_range";
            t.DataLoss = "data_loss"
        }(r || (r = {}));
        const i = s;

        function o(t, e) {
            t.setTag("http.status_code", String(e)), t.setData("http.response.status_code", e);
            const n = s(e);
            "unknown_error" !== n && t.setStatus(n)
        }
    }, 32336: function (t, e, n) {
        "use strict";
        n.d(e, {
            yn: function () {
                return v
            }, HN: function () {
                return _
            }, I1: function () {
                return T
            }, qp: function () {
                return y
            }, GK: function () {
                return m
            }, V0: function () {
                return g
            }, g4: function () {
                return f
            }
        });
        var r = n(77638), s = n(12343), i = n(20535), o = n(81703), a = n(95659), c = n(93371), u = n(90454),
            l = n(64487), d = n(67597);

        function p(t, e, n = (() => {
        })) {
            let r;
            try {
                r = t()
            } catch (s) {
                throw e(s), n(), s
            }
            return function (t, e, n) {
                if ((0, d.J8)(t)) return t.then((t => (n(), t)), (t => {
                    throw e(t), n(), t
                }));
                return n(), t
            }(r, e, n)
        }

        var h = n(47522);

        function f(t, e, n = (() => {
        }), r = (() => {
        })) {
            const s = (0, a.Gd)(), i = (0, l.nZ)(), o = i.getSpan(), c = S(t),
                u = b(s, {parentSpan: o, spanContext: c, forceTransaction: !1, scope: i});
            return i.setSpan(u), p((() => e(u)), (t => {
                u && u.setStatus("internal_error"), n(t, u)
            }), (() => {
                u && u.end(), i.setSpan(o), r()
            }))
        }

        function m(t, e) {
            const n = S(t);
            return (0, a.Ok)((() => (0, l.$e)(t.scope, (r => {
                const s = (0, a.Gd)(), i = r.getSpan(), o = t.onlyIfParent && !i ? void 0 : b(s, {
                    parentSpan: i,
                    spanContext: n,
                    forceTransaction: t.forceTransaction,
                    scope: r
                });
                return p((() => e(o)), (() => {
                    if (o) {
                        const {status: t} = (0, c.XU)(o);
                        t && "ok" !== t || o.setStatus("internal_error")
                    }
                }), (() => o && o.end()))
            }))))
        }

        function g(t, e) {
            const n = S(t);
            return (0, a.Ok)((() => (0, l.$e)(t.scope, (r => {
                const s = (0, a.Gd)(), i = r.getSpan(), o = t.onlyIfParent && !i ? void 0 : b(s, {
                    parentSpan: i,
                    spanContext: n,
                    forceTransaction: t.forceTransaction,
                    scope: r
                });

                function u() {
                    o && o.end()
                }

                return p((() => e(o, u)), (() => {
                    if (o && o.isRecording()) {
                        const {status: t} = (0, c.XU)(o);
                        t && "ok" !== t || o.setStatus("internal_error")
                    }
                }))
            }))))
        }

        function y(t) {
            if (!(0, h.z)()) return;
            const e = S(t), n = (0, a.Gd)(), r = t.scope ? t.scope.getSpan() : _();
            if (t.onlyIfParent && !r) return;
            const s = (t.scope || (0, l.nZ)()).clone();
            return b(n, {parentSpan: r, spanContext: e, forceTransaction: t.forceTransaction, scope: s})
        }

        function _() {
            return (0, l.nZ)().getSpan()
        }

        const v = ({sentryTrace: t, baggage: e}, n) => {
            const c = (0, l.nZ)(), {
                traceparentData: u,
                dynamicSamplingContext: d,
                propagationContext: p
            } = (0, r.KA)(t, e);
            c.setPropagationContext(p), o.X && u && s.kg.log(`[Tracing] Continuing trace ${u.traceId}.`);
            const h = {...u, metadata: (0, i.Jr)({dynamicSamplingContext: d})};
            return n ? (0, a.Ok)((() => n(h))) : h
        };

        function b(t, {parentSpan: e, spanContext: n, forceTransaction: r, scope: s}) {
            if (!(0, h.z)()) return;
            const o = (0, a.aF)();
            let l;
            if (e && !r) l = e.startChild(n); else if (e) {
                const r = (0, u.j)(e), {traceId: s, spanId: i} = e.spanContext(), o = (0, c.Tt)(e);
                l = t.startTransaction({
                    traceId: s,
                    parentSpanId: i,
                    parentSampled: o, ...n,
                    metadata: {dynamicSamplingContext: r, ...n.metadata}
                })
            } else {
                const {
                    traceId: e,
                    dsc: r,
                    parentSpanId: i,
                    sampled: a
                } = {...o.getPropagationContext(), ...s.getPropagationContext()};
                l = t.startTransaction({
                    traceId: e,
                    parentSpanId: i,
                    parentSampled: a, ...n,
                    metadata: {dynamicSamplingContext: r, ...n.metadata}
                })
            }
            return s.setSpan(l), function (t, e, n) {
                t && ((0, i.xp)(t, w, n), (0, i.xp)(t, k, e))
            }(l, s, o), l
        }

        function S(t) {
            if (t.startTime) {
                const e = {...t};
                return e.startTimestamp = (0, c.$k)(t.startTime), delete e.startTime, e
            }
            return t
        }

        const k = "_sentryScope", w = "_sentryIsolationScope";

        function T(t) {
            return {scope: t._sentryScope, isolationScope: t._sentryIsolationScope}
        }
    }, 78069: function (t, e, n) {
        "use strict";
        n.d(e, {
            Y: function () {
                return h
            }
        });
        var r = n(20535), s = n(12343), i = n(81703), o = n(95659), a = n(55986), c = n(76754), u = n(93371),
            l = n(90454), d = n(38903), p = n(32336);

        class h extends d.D {
            constructor(t, e) {
                super(t), this._contexts = {}, this._hub = e || (0, o.Gd)(), this._name = t.name || "", this._metadata = {...t.metadata}, this._trimEnd = t.trimEnd, this.transaction = this;
                const n = this._metadata.dynamicSamplingContext;
                n && (this._frozenDynamicSamplingContext = {...n})
            }

            get name() {
                return this._name
            }

            set name(t) {
                this.setName(t)
            }

            get metadata() {
                return {
                    source: "custom",
                    spanMetadata: {}, ...this._metadata, ...this._attributes[c.Zj] && {source: this._attributes[c.Zj]}, ...this._attributes[c.TE] && {sampleRate: this._attributes[c.TE]}
                }
            }

            set metadata(t) {
                this._metadata = t
            }

            setName(t, e = "custom") {
                this._name = t, this.setAttribute(c.Zj, e)
            }

            updateName(t) {
                return this._name = t, this
            }

            initSpanRecorder(t = 1e3) {
                this.spanRecorder || (this.spanRecorder = new d.g(t)), this.spanRecorder.add(this)
            }

            setContext(t, e) {
                null === e ? delete this._contexts[t] : this._contexts[t] = e
            }

            setMeasurement(t, e, n = "") {
                this._measurements[t] = {value: e, unit: n}
            }

            setMetadata(t) {
                this._metadata = {...this._metadata, ...t}
            }

            end(t) {
                const e = (0, u.$k)(t), n = this._finishTransaction(e);
                if (n) return this._hub.captureEvent(n)
            }

            toContext() {
                const t = super.toContext();
                return (0, r.Jr)({...t, name: this._name, trimEnd: this._trimEnd})
            }

            updateWithContext(t) {
                return super.updateWithContext(t), this._name = t.name || "", this._trimEnd = t.trimEnd, this
            }

            getDynamicSamplingContext() {
                return (0, l.j)(this)
            }

            setHub(t) {
                this._hub = t
            }

            getProfileId() {
                if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id
            }

            _finishTransaction(t) {
                if (void 0 !== this._endTime) return;
                this._name || (i.X && s.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>"), super.end(t);
                const e = this._hub.getClient();
                if (e && e.emit && e.emit("finishTransaction", this), !0 !== this._sampled) return i.X && s.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void (e && e.recordDroppedEvent("sample_rate", "transaction"));
                const n = this.spanRecorder ? this.spanRecorder.spans.filter((t => t !== this && (0, u.XU)(t).timestamp)) : [];
                if (this._trimEnd && n.length > 0) {
                    const t = n.map((t => (0, u.XU)(t).timestamp)).filter(Boolean);
                    this._endTime = t.reduce(((t, e) => t > e ? t : e))
                }
                const {scope: o, isolationScope: c} = (0, p.I1)(this), {metadata: d} = this, {source: h} = d, f = {
                    contexts: {...this._contexts, trace: (0, u.wy)(this)},
                    spans: n,
                    start_timestamp: this._startTime,
                    tags: this.tags,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: "transaction",
                    sdkProcessingMetadata: {
                        ...d,
                        capturedSpanScope: o,
                        capturedSpanIsolationScope: c, ...(0, r.Jr)({dynamicSamplingContext: (0, l.j)(this)})
                    },
                    _metrics_summary: (0, a.y)(this), ...h && {transaction_info: {source: h}}
                };
                return Object.keys(this._measurements).length > 0 && (i.X && s.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), f.measurements = this._measurements), i.X && s.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), f
            }
        }
    }, 9791: function (t, e, n) {
        "use strict";
        n.d(e, {
            qG: function () {
                return o
            }, x1: function () {
                return i
            }
        });
        var r = n(77638), s = n(95659);

        function i(t) {
            return (t || (0, s.Gd)()).getScope().getTransaction()
        }

        const o = r.qG
    }, 32570: function (t, e, n) {
        "use strict";
        n.d(e, {
            q: function () {
                return l
            }
        });
        var r = n(80409), s = n(96893);

        function i(t) {
            const e = [];

            function n(t) {
                return e.splice(e.indexOf(t), 1)[0]
            }

            return {
                $: e, add: function (i) {
                    if (!(void 0 === t || e.length < t)) return (0, s.$2)(new r.b("Not adding Promise because buffer limit was reached."));
                    const o = i();
                    return -1 === e.indexOf(o) && e.push(o), o.then((() => n(o))).then(null, (() => n(o).then(null, (() => {
                    })))), o
                }, drain: function (t) {
                    return new s.cW(((n, r) => {
                        let i = e.length;
                        if (!i) return n(!0);
                        const o = setTimeout((() => {
                            t && t > 0 && n(!1)
                        }), t);
                        e.forEach((t => {
                            (0, s.WD)(t).then((() => {
                                --i || (clearTimeout(o), n(!0))
                            }), r)
                        }))
                    }))
                }
            }
        }

        var o = n(58725), a = n(80228), c = n(12343), u = n(81703);

        function l(t, e, n = i(t.bufferSize || 30)) {
            let l = {};

            function p(i) {
                const p = [];
                if ((0, o.gv)(i, ((e, n) => {
                    const r = (0, o.mL)(n);
                    if ((0, a.Q)(l, r)) {
                        const s = d(e, n);
                        t.recordDroppedEvent("ratelimit_backoff", r, s)
                    } else p.push(e)
                })), 0 === p.length) return (0, s.WD)();
                const h = (0, o.Jd)(i[0], p), f = e => {
                    (0, o.gv)(h, ((n, r) => {
                        const s = d(n, r);
                        t.recordDroppedEvent(e, (0, o.mL)(r), s)
                    }))
                };
                return n.add((() => e({body: (0, o.V$)(h, t.textEncoder)}).then((t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && u.X && c.kg.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), l = (0, a.WG)(l, t), t)), (t => {
                    throw f("network_error"), t
                })))).then((t => t), (t => {
                    if (t instanceof r.b) return u.X && c.kg.error("Skipped sending event because buffer is full."), f("queue_overflow"), (0, s.WD)();
                    throw t
                }))
            }

            return p.__sentry__baseTransport__ = !0, {send: p, flush: t => n.drain(t)}
        }

        function d(t, e) {
            if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
        }
    }, 73379: function (t, e, n) {
        "use strict";
        n.d(e, {
            gi: function () {
                return c
            }, yo: function () {
                return u
            }
        });
        var r = n(20535), s = n(62844), i = n(90454), o = n(55102), a = n(93371);

        function c(t, e) {
            const {fingerprint: n, span: c, breadcrumbs: u, sdkProcessingMetadata: l} = e;
            !function (t, e) {
                const {extra: n, tags: s, user: i, contexts: o, level: a, transactionName: c} = e, u = (0, r.Jr)(n);
                u && Object.keys(u).length && (t.extra = {...u, ...t.extra});
                const l = (0, r.Jr)(s);
                l && Object.keys(l).length && (t.tags = {...l, ...t.tags});
                const d = (0, r.Jr)(i);
                d && Object.keys(d).length && (t.user = {...d, ...t.user});
                const p = (0, r.Jr)(o);
                p && Object.keys(p).length && (t.contexts = {...p, ...t.contexts});
                a && (t.level = a);
                c && (t.transaction = c)
            }(t, e), c && function (t, e) {
                t.contexts = {trace: (0, a.wy)(e), ...t.contexts};
                const n = (0, o.G)(e);
                if (n) {
                    t.sdkProcessingMetadata = {dynamicSamplingContext: (0, i.j)(e), ...t.sdkProcessingMetadata};
                    const r = (0, a.XU)(n).description;
                    r && (t.tags = {transaction: r, ...t.tags})
                }
            }(t, c), function (t, e) {
                t.fingerprint = t.fingerprint ? (0, s.lE)(t.fingerprint) : [], e && (t.fingerprint = t.fingerprint.concat(e));
                t.fingerprint && !t.fingerprint.length && delete t.fingerprint
            }(t, n), function (t, e) {
                const n = [...t.breadcrumbs || [], ...e];
                t.breadcrumbs = n.length ? n : void 0
            }(t, u), function (t, e) {
                t.sdkProcessingMetadata = {...t.sdkProcessingMetadata, ...e}
            }(t, l)
        }

        function u(t, e) {
            const {
                extra: n,
                tags: r,
                user: s,
                contexts: i,
                level: o,
                sdkProcessingMetadata: a,
                breadcrumbs: c,
                fingerprint: u,
                eventProcessors: d,
                attachments: p,
                propagationContext: h,
                transactionName: f,
                span: m
            } = e;
            l(t, "extra", n), l(t, "tags", r), l(t, "user", s), l(t, "contexts", i), l(t, "sdkProcessingMetadata", a), o && (t.level = o), f && (t.transactionName = f), m && (t.span = m), c.length && (t.breadcrumbs = [...t.breadcrumbs, ...c]), u.length && (t.fingerprint = [...t.fingerprint, ...u]), d.length && (t.eventProcessors = [...t.eventProcessors, ...d]), p.length && (t.attachments = [...t.attachments, ...p]), t.propagationContext = {...t.propagationContext, ...h}
        }

        function l(t, e, n) {
            if (n && Object.keys(n).length) {
                t[e] = {...t[e]};
                for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[e][r] = n[r])
            }
        }
    }, 55102: function (t, e, n) {
        "use strict";

        function r(t) {
            return t.transaction
        }

        n.d(e, {
            G: function () {
                return r
            }
        })
    }, 47522: function (t, e, n) {
        "use strict";
        n.d(e, {
            z: function () {
                return s
            }
        });
        var r = n(64487);

        function s(t) {
            if ("boolean" === typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
            const e = (0, r.s3)(), n = t || e && e.getOptions();
            return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
        }
    }, 88942: function (t, e, n) {
        "use strict";
        n.d(e, {
            R: function () {
                return h
            }, U0: function () {
                return m
            }
        });
        var r = n(62844), s = n(21170), i = n(57321), o = n(71235), a = n(34754), c = n(51131), u = n(71195),
            l = n(10350), d = n(73379), p = n(93371);

        function h(t, e, n, h, m, g) {
            const {normalizeDepth: y = 3, normalizeMaxBreadth: _ = 1e3} = t,
                v = {...e, event_id: e.event_id || n.event_id || (0, r.DM)(), timestamp: e.timestamp || (0, s.yW)()},
                b = n.integrations || t.integrations.map((t => t.name));
            !function (t, e) {
                const {environment: n, release: r, dist: s, maxValueLength: o = 250} = e;
                "environment" in t || (t.environment = "environment" in e ? n : c.J);
                void 0 === t.release && void 0 !== r && (t.release = r);
                void 0 === t.dist && void 0 !== s && (t.dist = s);
                t.message && (t.message = (0, i.$G)(t.message, o));
                const a = t.exception && t.exception.values && t.exception.values[0];
                a && a.value && (a.value = (0, i.$G)(a.value, o));
                const u = t.request;
                u && u.url && (u.url = (0, i.$G)(u.url, o))
            }(v, t), function (t, e) {
                e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
            }(v, b), void 0 === e.type && function (t, e) {
                const n = o.n2._sentryDebugIds;
                if (!n) return;
                let r;
                const s = f.get(e);
                s ? r = s : (r = new Map, f.set(e, r));
                const i = Object.keys(n).reduce(((t, s) => {
                    let i;
                    const o = r.get(s);
                    o ? i = o : (i = e(s), r.set(s, i));
                    for (let e = i.length - 1; e >= 0; e--) {
                        const r = i[e];
                        if (r.filename) {
                            t[r.filename] = n[s];
                            break
                        }
                    }
                    return t
                }), {});
                try {
                    t.exception.values.forEach((t => {
                        t.stacktrace.frames.forEach((t => {
                            t.filename && (t.debug_id = i[t.filename])
                        }))
                    }))
                } catch (a) {
                }
            }(v, t.stackParser);
            const S = function (t, e) {
                if (!e) return t;
                const n = t ? t.clone() : new l.sX;
                return n.update(e), n
            }(h, n.captureContext);
            n.mechanism && (0, r.EG)(v, n.mechanism);
            const k = m && m.getEventProcessors ? m.getEventProcessors() : [], w = (0, l.lW)().getScopeData();
            if (g) {
                const t = g.getScopeData();
                (0, d.yo)(w, t)
            }
            if (S) {
                const t = S.getScopeData();
                (0, d.yo)(w, t)
            }
            const T = [...n.attachments || [], ...w.attachments];
            T.length && (n.attachments = T), (0, d.gi)(v, w);
            const x = [...k, ...(0, u.fH)(), ...w.eventProcessors];
            return (0, u.RP)(x, v, n).then((t => (t && function (t) {
                const e = {};
                try {
                    t.exception.values.forEach((t => {
                        t.stacktrace.frames.forEach((t => {
                            t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                        }))
                    }))
                } catch (r) {
                }
                if (0 === Object.keys(e).length) return;
                t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                const n = t.debug_meta.images;
                Object.keys(e).forEach((t => {
                    n.push({type: "sourcemap", code_file: t, debug_id: e[t]})
                }))
            }(t), "number" === typeof y && y > 0 ? function (t, e, n) {
                if (!t) return null;
                const r = {...t, ...t.breadcrumbs && {breadcrumbs: t.breadcrumbs.map((t => ({...t, ...t.data && {data: (0, a.Fv)(t.data, e, n)}})))}, ...t.user && {user: (0, a.Fv)(t.user, e, n)}, ...t.contexts && {contexts: (0, a.Fv)(t.contexts, e, n)}, ...t.extra && {extra: (0, a.Fv)(t.extra, e, n)}};
                t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = (0, a.Fv)(t.contexts.trace.data, e, n)));
                t.spans && (r.spans = t.spans.map((t => {
                    const r = (0, p.XU)(t).data;
                    return r && (t.data = (0, a.Fv)(r, e, n)), t
                })));
                return r
            }(t, y, _) : t)))
        }

        const f = new WeakMap;

        function m(t) {
            if (t) return function (t) {
                return t instanceof l.sX || "function" === typeof t
            }(t) || function (t) {
                return Object.keys(t).some((t => g.includes(t)))
            }(t) ? {captureContext: t} : t
        }

        const g = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"]
    }, 82799: function (t, e, n) {
        "use strict";
        n.d(e, {
            V: function () {
                return s
            }
        });
        var r = n(40105);

        function s(t, e, n = [e], s = "npm") {
            const i = t._metadata || {};
            i.sdk || (i.sdk = {
                name: `sentry.javascript.${e}`,
                packages: n.map((t => ({name: `${s}:@sentry/${t}`, version: r.J}))),
                version: r.J
            }), t._metadata = i
        }
    }, 93371: function (t, e, n) {
        "use strict";
        n.d(e, {
            $k: function () {
                return l
            }, Hb: function () {
                return u
            }, Tt: function () {
                return h
            }, XU: function () {
                return p
            }, i0: function () {
                return a
            }, ve: function () {
                return o
            }, wy: function () {
                return c
            }
        });
        var r = n(20535), s = n(77638), i = n(21170);
        const o = 0, a = 1;

        function c(t) {
            const {spanId: e, traceId: n} = t.spanContext(), {
                data: s,
                op: i,
                parent_span_id: o,
                status: a,
                tags: c,
                origin: u
            } = p(t);
            return (0, r.Jr)({
                data: s,
                op: i,
                parent_span_id: o,
                span_id: e,
                status: a,
                tags: c,
                trace_id: n,
                origin: u
            })
        }

        function u(t) {
            const {traceId: e, spanId: n} = t.spanContext(), r = h(t);
            return (0, s.$p)(e, n, r)
        }

        function l(t) {
            return "number" === typeof t ? d(t) : Array.isArray(t) ? t[0] + t[1] / 1e9 : t instanceof Date ? d(t.getTime()) : (0, i.ph)()
        }

        function d(t) {
            return t > 9999999999 ? t / 1e3 : t
        }

        function p(t) {
            return function (t) {
                return "function" === typeof t.getSpanJSON
            }(t) ? t.getSpanJSON() : "function" === typeof t.toJSON ? t.toJSON() : {}
        }

        function h(t) {
            const {traceFlags: e} = t.spanContext();
            return Boolean(e & a)
        }
    }, 40105: function (t, e, n) {
        "use strict";
        n.d(e, {
            J: function () {
                return r
            }
        });
        const r = "7.104.0"
    }, 88425: function (t, e, n) {
        "use strict";
        n.d(e, {
            X: function () {
                return r
            }
        });
        const r = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    }, 27923: function (t, e, n) {
        "use strict";
        n.d(e, {
            S: function () {
                return i
            }
        });
        var r = n(19011), s = n(82799);

        function i(t) {
            const e = {...t};
            (0, s.V)(e, "react"), (0, r.S1)(e)
        }
    }, 86045: function (t, e, n) {
        "use strict";
        n.d(e, {
            Z: function () {
                return i
            }
        });
        var r = n(67597), s = n(57321);

        function i(t, e, n = 250, i, a, c, u) {
            if (!c.exception || !c.exception.values || !u || !(0, r.V9)(u.originalException, Error)) return;
            const l = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
            var d, p;
            l && (c.exception.values = (d = o(t, e, a, u.originalException, i, c.exception.values, l, 0), p = n, d.map((t => (t.value && (t.value = (0, s.$G)(t.value, p)), t)))))
        }

        function o(t, e, n, s, i, u, l, d) {
            if (u.length >= n + 1) return u;
            let p = [...u];
            if ((0, r.V9)(s[i], Error)) {
                a(l, d);
                const r = t(e, s[i]), u = p.length;
                c(r, i, u, d), p = o(t, e, n, s[i], i, [r, ...p], r, u)
            }
            return Array.isArray(s.errors) && s.errors.forEach(((s, u) => {
                if ((0, r.V9)(s, Error)) {
                    a(l, d);
                    const r = t(e, s), h = p.length;
                    c(r, `errors[${u}]`, h, d), p = o(t, e, n, s, i, [r, ...p], r, h)
                }
            })), p
        }

        function a(t, e) {
            t.mechanism = t.mechanism || {
                type: "generic",
                handled: !0
            }, t.mechanism = {
                ...t.mechanism, ..."AggregateError" === t.type && {is_exception_group: !0},
                exception_id: e
            }
        }

        function c(t, e, n, r) {
            t.mechanism = t.mechanism || {type: "generic", handled: !0}, t.mechanism = {
                ...t.mechanism,
                type: "chained",
                source: e,
                exception_id: n,
                parent_id: r
            }
        }
    }, 99181: function (t, e, n) {
        "use strict";
        n.d(e, {
            EN: function () {
                return u
            }, IQ: function () {
                return l
            }, bU: function () {
                return o
            }
        });
        var r = n(53897), s = n(67597), i = n(12343);
        const o = "baggage", a = "sentry-", c = /^sentry-/;

        function u(t) {
            if (!(0, s.HD)(t) && !Array.isArray(t)) return;
            let e = {};
            if (Array.isArray(t)) e = t.reduce(((t, e) => {
                const n = d(e);
                for (const r of Object.keys(n)) t[r] = n[r];
                return t
            }), {}); else {
                if (!t) return;
                e = d(t)
            }
            const n = Object.entries(e).reduce(((t, [e, n]) => {
                if (e.match(c)) {
                    t[e.slice(a.length)] = n
                }
                return t
            }), {});
            return Object.keys(n).length > 0 ? n : void 0
        }

        function l(t) {
            if (!t) return;
            return function (t) {
                if (0 === Object.keys(t).length) return;
                return Object.entries(t).reduce(((t, [e, n], s) => {
                    const o = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`, a = 0 === s ? o : `${t},${o}`;
                    return a.length > 8192 ? (r.X && i.kg.warn(`Not adding key: ${e} with val: ${n} to baggage header due to exceeding baggage size limits.`), t) : a
                }), "")
            }(Object.entries(t).reduce(((t, [e, n]) => (n && (t[`sentry-${e}`] = n), t)), {}))
        }

        function d(t) {
            return t.split(",").map((t => t.split("=").map((t => decodeURIComponent(t.trim()))))).reduce(((t, [e, n]) => (t[e] = n, t)), {})
        }
    }, 58464: function (t, e, n) {
        "use strict";
        n.d(e, {
            Rt: function () {
                return i
            }, iY: function () {
                return u
            }, l4: function () {
                return a
            }, qT: function () {
                return c
            }
        });
        var r = n(67597);
        const s = (0, n(71235).Rf)();

        function i(t, e = {}) {
            if (!t) return "<unknown>";
            try {
                let n = t;
                const r = 5, s = [];
                let i = 0, a = 0;
                const c = " > ", u = c.length;
                let l;
                const d = Array.isArray(e) ? e : e.keyAttrs, p = !Array.isArray(e) && e.maxStringLength || 80;
                for (; n && i++ < r && (l = o(n, d), !("html" === l || i > 1 && a + s.length * u + l.length >= p));) s.push(l), a += l.length, n = n.parentNode;
                return s.reverse().join(c)
            } catch (n) {
                return "<unknown>"
            }
        }

        function o(t, e) {
            const n = t, i = [];
            let o, a, c, u, l;
            if (!n || !n.tagName) return "";
            if (s.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
            i.push(n.tagName.toLowerCase());
            const d = e && e.length ? e.filter((t => n.getAttribute(t))).map((t => [t, n.getAttribute(t)])) : null;
            if (d && d.length) d.forEach((t => {
                i.push(`[${t[0]}="${t[1]}"]`)
            })); else if (n.id && i.push(`#${n.id}`), o = n.className, o && (0, r.HD)(o)) for (a = o.split(/\s+/), l = 0; l < a.length; l++) i.push(`.${a[l]}`);
            const p = ["aria-label", "type", "name", "title", "alt"];
            for (l = 0; l < p.length; l++) c = p[l], u = n.getAttribute(c), u && i.push(`[${c}="${u}"]`);
            return i.join("")
        }

        function a() {
            try {
                return s.document.location.href
            } catch (t) {
                return ""
            }
        }

        function c(t) {
            return s.document && s.document.querySelector ? s.document.querySelector(t) : null
        }

        function u(t) {
            if (!s.HTMLElement) return null;
            let e = t;
            for (let n = 0; n < 5; n++) {
                if (!e) return null;
                if (e instanceof HTMLElement && e.dataset.sentryComponent) return e.dataset.sentryComponent;
                e = e.parentNode
            }
            return null
        }
    }, 64307: function (t, e, n) {
        "use strict";

        function r(t) {
            let e, n = t[0], r = 1;
            for (; r < t.length;) {
                const s = t[r], i = t[r + 1];
                if (r += 2, ("optionalAccess" === s || "optionalCall" === s) && null == n) return;
                "access" === s || "optionalAccess" === s ? (e = n, n = i(n)) : "call" !== s && "optionalCall" !== s || (n = i(((...t) => n.call(e, ...t))), e = void 0)
            }
            return n
        }

        n.d(e, {
            x: function () {
                return r
            }
        })
    }, 53897: function (t, e, n) {
        "use strict";
        n.d(e, {
            X: function () {
                return r
            }
        });
        const r = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__
    }, 30292: function (t, e, n) {
        "use strict";
        n.d(e, {
            RA: function () {
                return o
            }, U4: function () {
                return a
            }, vK: function () {
                return u
            }
        });
        var r = n(53897), s = n(12343);
        const i = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

        function o(t, e = !1) {
            const {host: n, path: r, pass: s, port: i, projectId: o, protocol: a, publicKey: c} = t;
            return `${a}://${c}${e && s ? `:${s}` : ""}@${n}${i ? `:${i}` : ""}/${r ? `${r}/` : r}${o}`
        }

        function a(t) {
            const e = i.exec(t);
            if (!e) return void (0, s.Cf)((() => {
                console.error(`Invalid Sentry Dsn: ${t}`)
            }));
            const [n, r, o = "", a, u = "", l] = e.slice(1);
            let d = "", p = l;
            const h = p.split("/");
            if (h.length > 1 && (d = h.slice(0, -1).join("/"), p = h.pop()), p) {
                const t = p.match(/^\d+/);
                t && (p = t[0])
            }
            return c({host: a, pass: o, path: d, projectId: p, port: u, protocol: n, publicKey: r})
        }

        function c(t) {
            return {
                protocol: t.protocol,
                publicKey: t.publicKey || "",
                pass: t.pass || "",
                host: t.host,
                port: t.port || "",
                path: t.path || "",
                projectId: t.projectId
            }
        }

        function u(t) {
            const e = "string" === typeof t ? a(t) : c(t);
            if (e && function (t) {
                if (!r.X) return !0;
                const {port: e, projectId: n, protocol: i} = t;
                return !["protocol", "publicKey", "host", "projectId"].find((e => !t[e] && (s.kg.error(`Invalid Sentry Dsn: ${e} missing`), !0))) && (n.match(/^\d+$/) ? function (t) {
                    return "http" === t || "https" === t
                }(i) ? !e || !isNaN(parseInt(e, 10)) || (s.kg.error(`Invalid Sentry Dsn: Invalid port ${e}`), !1) : (s.kg.error(`Invalid Sentry Dsn: Invalid protocol ${i}`), !1) : (s.kg.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1))
            }(e)) return e
        }
    }, 68518: function (t, e, n) {
        "use strict";

        function r() {
            return "undefined" !== typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__
        }

        function s() {
            return "npm"
        }

        n.d(e, {
            S: function () {
                return s
            }, n: function () {
                return r
            }
        })
    }, 58725: function (t, e, n) {
        "use strict";
        n.d(e, {
            BO: function () {
                return a
            }, Cd: function () {
                return y
            }, HY: function () {
                return g
            }, Jd: function () {
                return o
            }, R: function () {
                return u
            }, V$: function () {
                return d
            }, f4: function () {
                return p
            }, gv: function () {
                return c
            }, mL: function () {
                return m
            }, zQ: function () {
                return h
            }
        });
        var r = n(30292), s = n(34754), i = n(20535);

        function o(t, e = []) {
            return [t, e]
        }

        function a(t, e) {
            const [n, r] = t;
            return [n, [...r, e]]
        }

        function c(t, e) {
            const n = t[1];
            for (const r of n) {
                if (e(r, r[0].type)) return !0
            }
            return !1
        }

        function u(t, e) {
            return c(t, ((t, n) => e.includes(n)))
        }

        function l(t, e) {
            return (e || new TextEncoder).encode(t)
        }

        function d(t, e) {
            const [n, r] = t;
            let i = JSON.stringify(n);

            function o(t) {
                "string" === typeof i ? i = "string" === typeof t ? i + t : [l(i, e), t] : i.push("string" === typeof t ? l(t, e) : t)
            }

            for (const c of r) {
                const [t, e] = c;
                if (o(`\n${JSON.stringify(t)}\n`), "string" === typeof e || e instanceof Uint8Array) o(e); else {
                    let t;
                    try {
                        t = JSON.stringify(e)
                    } catch (a) {
                        t = JSON.stringify((0, s.Fv)(e))
                    }
                    o(t)
                }
            }
            return "string" === typeof i ? i : function (t) {
                const e = t.reduce(((t, e) => t + e.length), 0), n = new Uint8Array(e);
                let r = 0;
                for (const s of t) n.set(s, r), r += s.length;
                return n
            }(i)
        }

        function p(t, e, n) {
            let r = "string" === typeof t ? e.encode(t) : t;

            function s(t) {
                const e = r.subarray(0, t);
                return r = r.subarray(t + 1), e
            }

            function i() {
                let t = r.indexOf(10);
                return t < 0 && (t = r.length), JSON.parse(n.decode(s(t)))
            }

            const o = i(), a = [];
            for (; r.length;) {
                const t = i(), e = "number" === typeof t.length ? t.length : void 0;
                a.push([t, e ? s(e) : i()])
            }
            return [o, a]
        }

        function h(t, e) {
            const n = "string" === typeof t.data ? l(t.data, e) : t.data;
            return [(0, i.Jr)({
                type: "attachment",
                length: n.length,
                filename: t.filename,
                content_type: t.contentType,
                attachment_type: t.attachmentType
            }), n]
        }

        const f = {
            session: "session",
            sessions: "session",
            attachment: "attachment",
            transaction: "transaction",
            event: "error",
            client_report: "internal",
            user_report: "default",
            profile: "profile",
            replay_event: "replay",
            replay_recording: "replay",
            check_in: "monitor",
            feedback: "feedback",
            span: "span",
            statsd: "unknown"
        };

        function m(t) {
            return f[t]
        }

        function g(t) {
            if (!t || !t.sdk) return;
            const {name: e, version: n} = t.sdk;
            return {name: e, version: n}
        }

        function y(t, e, n, s) {
            const o = t.sdkProcessingMetadata && t.sdkProcessingMetadata.dynamicSamplingContext;
            return {
                event_id: t.event_id,
                sent_at: (new Date).toISOString(), ...e && {sdk: e}, ...!!n && s && {dsn: (0, r.RA)(s)}, ...o && {trace: (0, i.Jr)({...o})}
            }
        }
    }, 80409: function (t, e, n) {
        "use strict";
        n.d(e, {
            b: function () {
                return r
            }
        });

        class r extends Error {
            constructor(t, e = "warn") {
                super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e
            }
        }
    }, 9729: function (t, e, n) {
        "use strict";
        n.d(e, {
            D2: function () {
                return u
            }, Hj: function () {
                return c
            }, rK: function () {
                return l
            }
        });
        var r = n(53897), s = n(12343), i = n(30360);
        const o = {}, a = {};

        function c(t, e) {
            o[t] = o[t] || [], o[t].push(e)
        }

        function u(t, e) {
            a[t] || (e(), a[t] = !0)
        }

        function l(t, e) {
            const n = t && o[t];
            if (n) for (const o of n) try {
                o(e)
            } catch (a) {
                r.X && s.kg.error(`Error while triggering instrumentation handler.\nType: ${t}\nName: ${(0, i.$P)(o)}\nError:`, a)
            }
        }
    }, 85316: function (t, e, n) {
        "use strict";
        n.d(e, {
            O: function () {
                return d
            }
        });
        var r = n(62844), s = n(20535), i = n(71235), o = n(9729);
        const a = i.n2;
        let c, u, l;

        function d(t) {
            (0, o.Hj)("dom", t), (0, o.D2)("dom", p)
        }

        function p() {
            if (!a.document) return;
            const t = o.rK.bind(null, "dom"), e = h(t, !0);
            a.document.addEventListener("click", e, !1), a.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach((e => {
                const n = a[e] && a[e].prototype;
                n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && ((0, s.hl)(n, "addEventListener", (function (e) {
                    return function (n, r, s) {
                        if ("click" === n || "keypress" == n) try {
                            const r = this,
                                i = r.__sentry_instrumentation_handlers__ = r.__sentry_instrumentation_handlers__ || {},
                                o = i[n] = i[n] || {refCount: 0};
                            if (!o.handler) {
                                const r = h(t);
                                o.handler = r, e.call(this, n, r, s)
                            }
                            o.refCount++
                        } catch (i) {
                        }
                        return e.call(this, n, r, s)
                    }
                })), (0, s.hl)(n, "removeEventListener", (function (t) {
                    return function (e, n, r) {
                        if ("click" === e || "keypress" == e) try {
                            const n = this, s = n.__sentry_instrumentation_handlers__ || {}, i = s[e];
                            i && (i.refCount--, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, delete s[e]), 0 === Object.keys(s).length && delete n.__sentry_instrumentation_handlers__)
                        } catch (s) {
                        }
                        return t.call(this, e, n, r)
                    }
                })))
            }))
        }

        function h(t, e = !1) {
            return n => {
                if (!n || n._sentryCaptured) return;
                const i = function (t) {
                    try {
                        return t.target
                    } catch (e) {
                        return null
                    }
                }(n);
                if (function (t, e) {
                    return "keypress" === t && (!e || !e.tagName || "INPUT" !== e.tagName && "TEXTAREA" !== e.tagName && !e.isContentEditable)
                }(n.type, i)) return;
                (0, s.xp)(n, "_sentryCaptured", !0), i && !i._sentryId && (0, s.xp)(i, "_sentryId", (0, r.DM)());
                const o = "keypress" === n.type ? "input" : n.type;
                if (!function (t) {
                    if (t.type !== u) return !1;
                    try {
                        if (!t.target || t.target._sentryId !== l) return !1
                    } catch (e) {
                    }
                    return !0
                }(n)) {
                    t({event: n, name: o, global: e}), u = n.type, l = i ? i._sentryId : void 0
                }
                clearTimeout(c), c = a.setTimeout((() => {
                    l = void 0, u = void 0
                }), 1e3)
            }
        }
    }, 21394: function (t, e, n) {
        "use strict";
        n.d(e, {
            U: function () {
                return a
            }
        });
        var r = n(20535), s = n(8823), i = n(71235), o = n(9729);

        function a(t) {
            const e = "fetch";
            (0, o.Hj)(e, t), (0, o.D2)(e, c)
        }

        function c() {
            (0, s.t$)() && (0, r.hl)(i.n2, "fetch", (function (t) {
                return function (...e) {
                    const {method: n, url: r} = function (t) {
                        if (0 === t.length) return {method: "GET", url: ""};
                        if (2 === t.length) {
                            const [e, n] = t;
                            return {url: l(e), method: u(n, "method") ? String(n.method).toUpperCase() : "GET"}
                        }
                        const e = t[0];
                        return {url: l(e), method: u(e, "method") ? String(e.method).toUpperCase() : "GET"}
                    }(e), s = {args: e, fetchData: {method: n, url: r}, startTimestamp: Date.now()};
                    return (0, o.rK)("fetch", {...s}), t.apply(i.n2, e).then((t => {
                        const e = {...s, endTimestamp: Date.now(), response: t};
                        return (0, o.rK)("fetch", e), t
                    }), (t => {
                        const e = {...s, endTimestamp: Date.now(), error: t};
                        throw (0, o.rK)("fetch", e), t
                    }))
                }
            }))
        }

        function u(t, e) {
            return !!t && "object" === typeof t && !!t[e]
        }

        function l(t) {
            return "string" === typeof t ? t : t ? u(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
        }
    }, 51674: function (t, e, n) {
        "use strict";
        n.d(e, {
            V: function () {
                return o
            }
        });
        var r = n(71235), s = n(9729);
        let i = null;

        function o(t) {
            const e = "error";
            (0, s.Hj)(e, t), (0, s.D2)(e, a)
        }

        function a() {
            i = r.n2.onerror, r.n2.onerror = function (t, e, n, r, o) {
                const a = {column: r, error: o, line: n, msg: t, url: e};
                return (0, s.rK)("error", a), !(!i || i.__SENTRY_LOADER__) && i.apply(this, arguments)
            }, r.n2.onerror.__SENTRY_INSTRUMENTED__ = !0
        }
    }, 57373: function (t, e, n) {
        "use strict";
        n.d(e, {
            h: function () {
                return o
            }
        });
        var r = n(71235), s = n(9729);
        let i = null;

        function o(t) {
            const e = "unhandledrejection";
            (0, s.Hj)(e, t), (0, s.D2)(e, a)
        }

        function a() {
            i = r.n2.onunhandledrejection, r.n2.onunhandledrejection = function (t) {
                const e = t;
                return (0, s.rK)("unhandledrejection", e), !(i && !i.__SENTRY_LOADER__) || i.apply(this, arguments)
            }, r.n2.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        }
    }, 28425: function (t, e, n) {
        "use strict";
        n.d(e, {
            a: function () {
                return u
            }
        });
        var r = n(20535), s = n(71235);
        const i = (0, s.Rf)();
        var o = n(9729);
        const a = s.n2;
        let c;

        function u(t) {
            const e = "history";
            (0, o.Hj)(e, t), (0, o.D2)(e, l)
        }

        function l() {
            if (!function () {
                const t = i.chrome, e = t && t.app && t.app.runtime,
                    n = "history" in i && !!i.history.pushState && !!i.history.replaceState;
                return !e && n
            }()) return;
            const t = a.onpopstate;

            function e(t) {
                return function (...e) {
                    const n = e.length > 2 ? e[2] : void 0;
                    if (n) {
                        const t = c, e = String(n);
                        c = e;
                        const r = {from: t, to: e};
                        (0, o.rK)("history", r)
                    }
                    return t.apply(this, e)
                }
            }

            a.onpopstate = function (...e) {
                const n = a.location.href, r = c;
                c = n;
                const s = {from: r, to: n};
                if ((0, o.rK)("history", s), t) try {
                    return t.apply(this, e)
                } catch (i) {
                }
            }, (0, r.hl)(a.history, "pushState", e), (0, r.hl)(a.history, "replaceState", e)
        }
    }, 55322: function (t, e, n) {
        "use strict";
        n.d(e, {
            UK: function () {
                return u
            }, xU: function () {
                return c
            }
        });
        var r = n(67597), s = n(20535), i = n(71235), o = n(9729);
        const a = i.n2, c = "__sentry_xhr_v3__";

        function u(t) {
            (0, o.Hj)("xhr", t), (0, o.D2)("xhr", l)
        }

        function l() {
            if (!a.XMLHttpRequest) return;
            const t = XMLHttpRequest.prototype;
            (0, s.hl)(t, "open", (function (t) {
                return function (...e) {
                    const n = Date.now(), i = (0, r.HD)(e[0]) ? e[0].toUpperCase() : void 0, a = function (t) {
                        if ((0, r.HD)(t)) return t;
                        try {
                            return t.toString()
                        } catch (e) {
                        }
                        return
                    }(e[1]);
                    if (!i || !a) return t.apply(this, e);
                    this[c] = {
                        method: i,
                        url: a,
                        request_headers: {}
                    }, "POST" === i && a.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                    const u = () => {
                        const t = this[c];
                        if (t && 4 === this.readyState) {
                            try {
                                t.status_code = this.status
                            } catch (e) {
                            }
                            const r = {args: [i, a], endTimestamp: Date.now(), startTimestamp: n, xhr: this};
                            (0, o.rK)("xhr", r)
                        }
                    };
                    return "onreadystatechange" in this && "function" === typeof this.onreadystatechange ? (0, s.hl)(this, "onreadystatechange", (function (t) {
                        return function (...e) {
                            return u(), t.apply(this, e)
                        }
                    })) : this.addEventListener("readystatechange", u), (0, s.hl)(this, "setRequestHeader", (function (t) {
                        return function (...e) {
                            const [n, s] = e, i = this[c];
                            return i && (0, r.HD)(n) && (0, r.HD)(s) && (i.request_headers[n.toLowerCase()] = s), t.apply(this, e)
                        }
                    })), t.apply(this, e)
                }
            })), (0, s.hl)(t, "send", (function (t) {
                return function (...e) {
                    const n = this[c];
                    if (!n) return t.apply(this, e);
                    void 0 !== e[0] && (n.body = e[0]);
                    const r = {args: [n.method, n.url], startTimestamp: Date.now(), xhr: this};
                    return (0, o.rK)("xhr", r), t.apply(this, e)
                }
            }))
        }
    }, 67597: function (t, e, n) {
        "use strict";
        n.d(e, {
            Cy: function () {
                return y
            }, HD: function () {
                return u
            }, J8: function () {
                return g
            }, Kj: function () {
                return m
            }, Le: function () {
                return l
            }, PO: function () {
                return p
            }, TX: function () {
                return a
            }, V9: function () {
                return v
            }, VW: function () {
                return o
            }, VZ: function () {
                return s
            }, cO: function () {
                return h
            }, fm: function () {
                return c
            }, i2: function () {
                return _
            }, kK: function () {
                return f
            }, pt: function () {
                return d
            }, y1: function () {
                return b
            }
        });
        const r = Object.prototype.toString;

        function s(t) {
            switch (r.call(t)) {
                case"[object Error]":
                case"[object Exception]":
                case"[object DOMException]":
                    return !0;
                default:
                    return v(t, Error)
            }
        }

        function i(t, e) {
            return r.call(t) === `[object ${e}]`
        }

        function o(t) {
            return i(t, "ErrorEvent")
        }

        function a(t) {
            return i(t, "DOMError")
        }

        function c(t) {
            return i(t, "DOMException")
        }

        function u(t) {
            return i(t, "String")
        }

        function l(t) {
            return "object" === typeof t && null !== t && "__sentry_template_string__" in t && "__sentry_template_values__" in t
        }

        function d(t) {
            return null === t || l(t) || "object" !== typeof t && "function" !== typeof t
        }

        function p(t) {
            return i(t, "Object")
        }

        function h(t) {
            return "undefined" !== typeof Event && v(t, Event)
        }

        function f(t) {
            return "undefined" !== typeof Element && v(t, Element)
        }

        function m(t) {
            return i(t, "RegExp")
        }

        function g(t) {
            return Boolean(t && t.then && "function" === typeof t.then)
        }

        function y(t) {
            return p(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t
        }

        function _(t) {
            return "number" === typeof t && t !== t
        }

        function v(t, e) {
            try {
                return t instanceof e
            } catch (n) {
                return !1
            }
        }

        function b(t) {
            return !("object" !== typeof t || null === t || !t.__isVue && !t._isVue)
        }
    }, 12343: function (t, e, n) {
        "use strict";
        n.d(e, {
            Cf: function () {
                return a
            }, LD: function () {
                return o
            }, RU: function () {
                return i
            }, kg: function () {
                return c
            }
        });
        var r = n(53897), s = n(71235);
        const i = ["debug", "info", "warn", "error", "log", "assert", "trace"], o = {};

        function a(t) {
            if (!("console" in s.n2)) return t();
            const e = s.n2.console, n = {}, r = Object.keys(o);
            r.forEach((t => {
                const r = o[t];
                n[t] = e[t], e[t] = r
            }));
            try {
                return t()
            } finally {
                r.forEach((t => {
                    e[t] = n[t]
                }))
            }
        }

        const c = function () {
            let t = !1;
            const e = {
                enable: () => {
                    t = !0
                }, disable: () => {
                    t = !1
                }, isEnabled: () => t
            };
            return r.X ? i.forEach((n => {
                e[n] = (...e) => {
                    t && a((() => {
                        s.n2.console[n](`Sentry Logger [${n}]:`, ...e)
                    }))
                }
            })) : i.forEach((t => {
                e[t] = () => {
                }
            })), e
        }()
    }, 62844: function (t, e, n) {
        "use strict";
        n.d(e, {
            DM: function () {
                return i
            }, Db: function () {
                return c
            }, EG: function () {
                return u
            }, YO: function () {
                return l
            }, jH: function () {
                return a
            }, lE: function () {
                return d
            }
        });
        var r = n(20535), s = n(71235);

        function i() {
            const t = s.n2, e = t.crypto || t.msCrypto;
            let n = () => 16 * Math.random();
            try {
                if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                e && e.getRandomValues && (n = () => {
                    const t = new Uint8Array(1);
                    return e.getRandomValues(t), t[0]
                })
            } catch (r) {
            }
            return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t => (t ^ (15 & n()) >> t / 4).toString(16)))
        }

        function o(t) {
            return t.exception && t.exception.values ? t.exception.values[0] : void 0
        }

        function a(t) {
            const {message: e, event_id: n} = t;
            if (e) return e;
            const r = o(t);
            return r ? r.type && r.value ? `${r.type}: ${r.value}` : r.type || r.value || n || "<unknown>" : n || "<unknown>"
        }

        function c(t, e, n) {
            const r = t.exception = t.exception || {}, s = r.values = r.values || [], i = s[0] = s[0] || {};
            i.value || (i.value = e || ""), i.type || (i.type = n || "Error")
        }

        function u(t, e) {
            const n = o(t);
            if (!n) return;
            const r = n.mechanism;
            if (n.mechanism = {type: "generic", handled: !0, ...r, ...e}, e && "data" in e) {
                const t = {...r && r.data, ...e.data};
                n.mechanism.data = t
            }
        }

        function l(t) {
            if (t && t.__sentry_captured__) return !0;
            try {
                (0, r.xp)(t, "__sentry_captured__", !0)
            } catch (e) {
            }
            return !1
        }

        function d(t) {
            return Array.isArray(t) ? t : [t]
        }
    }, 61422: function (t, e, n) {
        "use strict";
        n.d(e, {
            KV: function () {
                return i
            }
        });
        var r = n(68518);
        t = n.hmd(t);
        var s = n(34155);

        function i() {
            return !(0, r.n)() && "[object process]" === Object.prototype.toString.call("undefined" !== typeof s ? s : 0)
        }
    }, 34754: function (t, e, n) {
        "use strict";
        n.d(e, {
            Fv: function () {
                return o
            }, Qy: function () {
                return a
            }
        });
        var r = n(67597);
        var s = n(20535), i = n(30360);

        function o(t, e = 100, n = 1 / 0) {
            try {
                return c("", t, e, n)
            } catch (r) {
                return {ERROR: `**non-serializable** (${r})`}
            }
        }

        function a(t, e = 3, n = 102400) {
            const r = o(t, e);
            return s = r, function (t) {
                return ~-encodeURI(t).split(/%..|./).length
            }(JSON.stringify(s)) > n ? a(t, e - 1, n) : r;
            var s
        }

        function c(t, e, o = 1 / 0, a = 1 / 0, u = function () {
            const t = "function" === typeof WeakSet, e = t ? new WeakSet : [];
            return [function (n) {
                if (t) return !!e.has(n) || (e.add(n), !1);
                for (let t = 0; t < e.length; t++) if (e[t] === n) return !0;
                return e.push(n), !1
            }, function (n) {
                if (t) e.delete(n); else for (let t = 0; t < e.length; t++) if (e[t] === n) {
                    e.splice(t, 1);
                    break
                }
            }]
        }()) {
            const [l, d] = u;
            if (null == e || ["number", "boolean", "string"].includes(typeof e) && !(0, r.i2)(e)) return e;
            const p = function (t, e) {
                try {
                    if ("domain" === t && e && "object" === typeof e && e._events) return "[Domain]";
                    if ("domainEmitter" === t) return "[DomainEmitter]";
                    if ("undefined" !== typeof n.g && e === n.g) return "[Global]";
                    if ("undefined" !== typeof window && e === window) return "[Window]";
                    if ("undefined" !== typeof document && e === document) return "[Document]";
                    if ((0, r.y1)(e)) return "[VueViewModel]";
                    if ((0, r.Cy)(e)) return "[SyntheticEvent]";
                    if ("number" === typeof e && e !== e) return "[NaN]";
                    if ("function" === typeof e) return `[Function: ${(0, i.$P)(e)}]`;
                    if ("symbol" === typeof e) return `[${String(e)}]`;
                    if ("bigint" === typeof e) return `[BigInt: ${String(e)}]`;
                    const s = function (t) {
                        const e = Object.getPrototypeOf(t);
                        return e ? e.constructor.name : "null prototype"
                    }(e);
                    return /^HTML(\w*)Element$/.test(s) ? `[HTMLElement: ${s}]` : `[object ${s}]`
                } catch (s) {
                    return `**non-serializable** (${s})`
                }
            }(t, e);
            if (!p.startsWith("[object ")) return p;
            if (e.__sentry_skip_normalization__) return e;
            const h = "number" === typeof e.__sentry_override_normalization_depth__ ? e.__sentry_override_normalization_depth__ : o;
            if (0 === h) return p.replace("object ", "");
            if (l(e)) return "[Circular ~]";
            const f = e;
            if (f && "function" === typeof f.toJSON) try {
                return c("", f.toJSON(), h - 1, a, u)
            } catch (_) {
            }
            const m = Array.isArray(e) ? [] : {};
            let g = 0;
            const y = (0, s.Sh)(e);
            for (const n in y) {
                if (!Object.prototype.hasOwnProperty.call(y, n)) continue;
                if (g >= a) {
                    m[n] = "[MaxProperties ~]";
                    break
                }
                const t = y[n];
                m[n] = c(n, t, h - 1, a, u), g++
            }
            return d(e), m
        }
    }, 20535: function (t, e, n) {
        "use strict";
        n.d(e, {
            $Q: function () {
                return l
            }, HK: function () {
                return d
            }, Jr: function () {
                return y
            }, Sh: function () {
                return h
            }, _j: function () {
                return p
            }, hl: function () {
                return c
            }, xp: function () {
                return u
            }, zf: function () {
                return g
            }
        });
        var r = n(58464), s = n(53897), i = n(67597), o = n(12343), a = n(57321);

        function c(t, e, n) {
            if (!(e in t)) return;
            const r = t[e], s = n(r);
            "function" === typeof s && l(s, r), t[e] = s
        }

        function u(t, e, n) {
            try {
                Object.defineProperty(t, e, {value: n, writable: !0, configurable: !0})
            } catch (r) {
                s.X && o.kg.log(`Failed to add non-enumerable property "${e}" to object`, t)
            }
        }

        function l(t, e) {
            try {
                const n = e.prototype || {};
                t.prototype = e.prototype = n, u(t, "__sentry_original__", e)
            } catch (n) {
            }
        }

        function d(t) {
            return t.__sentry_original__
        }

        function p(t) {
            return Object.keys(t).map((e => `${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&")
        }

        function h(t) {
            if ((0, i.VZ)(t)) return {message: t.message, name: t.name, stack: t.stack, ...m(t)};
            if ((0, i.cO)(t)) {
                const e = {type: t.type, target: f(t.target), currentTarget: f(t.currentTarget), ...m(t)};
                return "undefined" !== typeof CustomEvent && (0, i.V9)(t, CustomEvent) && (e.detail = t.detail), e
            }
            return t
        }

        function f(t) {
            try {
                return (0, i.kK)(t) ? (0, r.Rt)(t) : Object.prototype.toString.call(t)
            } catch (e) {
                return "<unknown>"
            }
        }

        function m(t) {
            if ("object" === typeof t && null !== t) {
                const e = {};
                for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }
            return {}
        }

        function g(t, e = 40) {
            const n = Object.keys(h(t));
            if (n.sort(), !n.length) return "[object has no keys]";
            if (n[0].length >= e) return (0, a.$G)(n[0], e);
            for (let r = n.length; r > 0; r--) {
                const t = n.slice(0, r).join(", ");
                if (!(t.length > e)) return r === n.length ? t : (0, a.$G)(t, e)
            }
            return ""
        }

        function y(t) {
            return _(t, new Map)
        }

        function _(t, e) {
            if (function (t) {
                if (!(0, i.PO)(t)) return !1;
                try {
                    const e = Object.getPrototypeOf(t).constructor.name;
                    return !e || "Object" === e
                } catch (e) {
                    return !0
                }
            }(t)) {
                const n = e.get(t);
                if (void 0 !== n) return n;
                const r = {};
                e.set(t, r);
                for (const s of Object.keys(t)) "undefined" !== typeof t[s] && (r[s] = _(t[s], e));
                return r
            }
            if (Array.isArray(t)) {
                const n = e.get(t);
                if (void 0 !== n) return n;
                const r = [];
                return e.set(t, r), t.forEach((t => {
                    r.push(_(t, e))
                })), r
            }
            return t
        }
    }, 80228: function (t, e, n) {
        "use strict";
        n.d(e, {
            JY: function () {
                return r
            }, Q: function () {
                return s
            }, WG: function () {
                return i
            }
        });

        function r(t, e = Date.now()) {
            const n = parseInt(`${t}`, 10);
            if (!isNaN(n)) return 1e3 * n;
            const r = Date.parse(`${t}`);
            return isNaN(r) ? 6e4 : r - e
        }

        function s(t, e, n = Date.now()) {
            return function (t, e) {
                return t[e] || t.all || 0
            }(t, e) > n
        }

        function i(t, {statusCode: e, headers: n}, s = Date.now()) {
            const i = {...t}, o = n && n["x-sentry-rate-limits"], a = n && n["retry-after"];
            if (o) for (const r of o.trim().split(",")) {
                const [t, e] = r.split(":", 2), n = parseInt(t, 10), o = 1e3 * (isNaN(n) ? 60 : n);
                if (e) for (const r of e.split(";")) i[r] = s + o; else i.all = s + o
            } else a ? i.all = s + r(a, s) : 429 === e && (i.all = s + 6e4);
            return i
        }
    }, 30360: function (t, e, n) {
        "use strict";
        n.d(e, {
            $P: function () {
                return c
            }, Sq: function () {
                return o
            }, pE: function () {
                return i
            }
        });
        const r = /\(error: (.*)\)/, s = /captureMessage|captureException/;

        function i(...t) {
            const e = t.sort(((t, e) => t[0] - e[0])).map((t => t[1]));
            return (t, n = 0) => {
                const i = [], o = t.split("\n");
                for (let s = n; s < o.length; s++) {
                    const t = o[s];
                    if (t.length > 1024) continue;
                    const n = r.test(t) ? t.replace(r, "$1") : t;
                    if (!n.match(/\S*Error: /)) {
                        for (const t of e) {
                            const e = t(n);
                            if (e) {
                                i.push(e);
                                break
                            }
                        }
                        if (i.length >= 50) break
                    }
                }
                return function (t) {
                    if (!t.length) return [];
                    const e = Array.from(t);
                    /sentryWrapped/.test(e[e.length - 1].function || "") && e.pop();
                    e.reverse(), s.test(e[e.length - 1].function || "") && (e.pop(), s.test(e[e.length - 1].function || "") && e.pop());
                    return e.slice(0, 50).map((t => ({
                        ...t,
                        filename: t.filename || e[e.length - 1].filename,
                        function: t.function || "?"
                    })))
                }(i)
            }
        }

        function o(t) {
            return Array.isArray(t) ? i(...t) : t
        }

        const a = "<anonymous>";

        function c(t) {
            try {
                return t && "function" === typeof t && t.name || a
            } catch (e) {
                return a
            }
        }
    }, 57321: function (t, e, n) {
        "use strict";
        n.d(e, {
            $G: function () {
                return s
            }, U0: function () {
                return o
            }, nK: function () {
                return i
            }
        });
        var r = n(67597);

        function s(t, e = 0) {
            return "string" !== typeof t || 0 === e || t.length <= e ? t : `${t.slice(0, e)}...`
        }

        function i(t, e) {
            if (!Array.isArray(t)) return "";
            const n = [];
            for (let i = 0; i < t.length; i++) {
                const e = t[i];
                try {
                    (0, r.y1)(e) ? n.push("[VueViewModel]") : n.push(String(e))
                } catch (s) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(e)
        }

        function o(t, e = [], n = !1) {
            return e.some((e => function (t, e, n = !1) {
                return !!(0, r.HD)(t) && ((0, r.Kj)(e) ? e.test(t) : !!(0, r.HD)(e) && (n ? t === e : t.includes(e)))
            }(t, e, n)))
        }
    }, 8823: function (t, e, n) {
        "use strict";
        n.d(e, {
            Ak: function () {
                return o
            }, Du: function () {
                return a
            }, t$: function () {
                return c
            }
        });
        var r = n(53897), s = n(12343);
        const i = (0, n(71235).Rf)();

        function o() {
            if (!("fetch" in i)) return !1;
            try {
                return new Headers, new Request("http://www.example.com"), new Response, !0
            } catch (t) {
                return !1
            }
        }

        function a(t) {
            return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
        }

        function c() {
            if ("string" === typeof EdgeRuntime) return !0;
            if (!o()) return !1;
            if (a(i.fetch)) return !0;
            let t = !1;
            const e = i.document;
            if (e && "function" === typeof e.createElement) try {
                const n = e.createElement("iframe");
                n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = a(n.contentWindow.fetch)), e.head.removeChild(n)
            } catch (n) {
                r.X && s.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", n)
            }
            return t
        }
    }, 96893: function (t, e, n) {
        "use strict";
        n.d(e, {
            $2: function () {
                return o
            }, WD: function () {
                return i
            }, cW: function () {
                return a
            }
        });
        var r, s = n(67597);

        function i(t) {
            return new a((e => {
                e(t)
            }))
        }

        function o(t) {
            return new a(((e, n) => {
                n(t)
            }))
        }

        !function (t) {
            t[t.PENDING = 0] = "PENDING";
            t[t.RESOLVED = 1] = "RESOLVED";
            t[t.REJECTED = 2] = "REJECTED"
        }(r || (r = {}));

        class a {
            constructor(t) {
                a.prototype.__init.call(this), a.prototype.__init2.call(this), a.prototype.__init3.call(this), a.prototype.__init4.call(this), this._state = r.PENDING, this._handlers = [];
                try {
                    t(this._resolve, this._reject)
                } catch (e) {
                    this._reject(e)
                }
            }

            then(t, e) {
                return new a(((n, r) => {
                    this._handlers.push([!1, e => {
                        if (t) try {
                            n(t(e))
                        } catch (s) {
                            r(s)
                        } else n(e)
                    }, t => {
                        if (e) try {
                            n(e(t))
                        } catch (s) {
                            r(s)
                        } else r(t)
                    }]), this._executeHandlers()
                }))
            }

            catch(t) {
                return this.then((t => t), t)
            }

            finally(t) {
                return new a(((e, n) => {
                    let r, s;
                    return this.then((e => {
                        s = !1, r = e, t && t()
                    }), (e => {
                        s = !0, r = e, t && t()
                    })).then((() => {
                        s ? n(r) : e(r)
                    }))
                }))
            }

            __init() {
                this._resolve = t => {
                    this._setResult(r.RESOLVED, t)
                }
            }

            __init2() {
                this._reject = t => {
                    this._setResult(r.REJECTED, t)
                }
            }

            __init3() {
                this._setResult = (t, e) => {
                    this._state === r.PENDING && ((0, s.J8)(e) ? e.then(this._resolve, this._reject) : (this._state = t, this._value = e, this._executeHandlers()))
                }
            }

            __init4() {
                this._executeHandlers = () => {
                    if (this._state === r.PENDING) return;
                    const t = this._handlers.slice();
                    this._handlers = [], t.forEach((t => {
                        t[0] || (this._state === r.RESOLVED && t[1](this._value), this._state === r.REJECTED && t[2](this._value), t[0] = !0)
                    }))
                }
            }
        }
    }, 21170: function (t, e, n) {
        "use strict";
        n.d(e, {
            Z1: function () {
                return a
            }, ph: function () {
                return i
            }, yW: function () {
                return s
            }
        });
        var r = n(71235);

        function s() {
            return Date.now() / 1e3
        }

        const i = function () {
            const {performance: t} = r.n2;
            if (!t || !t.now) return s;
            const e = Date.now() - t.now(), n = void 0 == t.timeOrigin ? e : t.timeOrigin;
            return () => (n + t.now()) / 1e3
        }();
        let o;
        const a = (() => {
            const {performance: t} = r.n2;
            if (!t || !t.now) return void (o = "none");
            const e = 36e5, n = t.now(), s = Date.now(), i = t.timeOrigin ? Math.abs(t.timeOrigin + n - s) : e,
                a = i < e, c = t.timing && t.timing.navigationStart,
                u = "number" === typeof c ? Math.abs(c + n - s) : e;
            return a || u < e ? i <= u ? (o = "timeOrigin", t.timeOrigin) : (o = "navigationStart", c) : (o = "dateNow", s)
        })()
    }, 77638: function (t, e, n) {
        "use strict";
        n.d(e, {
            $p: function () {
                return u
            }, KA: function () {
                return a
            }, pT: function () {
                return c
            }, qG: function () {
                return o
            }
        });
        var r = n(99181), s = n(62844);
        const i = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

        function o(t) {
            if (!t) return;
            const e = t.match(i);
            if (!e) return;
            let n;
            return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
                traceId: e[1],
                parentSampled: n,
                parentSpanId: e[2]
            }
        }

        function a(t, e) {
            const n = o(t), i = (0, r.EN)(e), {traceId: a, parentSpanId: c, parentSampled: u} = n || {};
            return n ? {
                traceparentData: n,
                dynamicSamplingContext: i || {},
                propagationContext: {
                    traceId: a || (0, s.DM)(),
                    parentSpanId: c || (0, s.DM)().substring(16),
                    spanId: (0, s.DM)().substring(16),
                    sampled: u,
                    dsc: i || {}
                }
            } : {
                traceparentData: n,
                dynamicSamplingContext: void 0,
                propagationContext: {traceId: a || (0, s.DM)(), spanId: (0, s.DM)().substring(16)}
            }
        }

        function c(t, e) {
            const n = o(t), i = (0, r.EN)(e), {traceId: a, parentSpanId: c, parentSampled: u} = n || {};
            return n ? {
                traceId: a || (0, s.DM)(),
                parentSpanId: c || (0, s.DM)().substring(16),
                spanId: (0, s.DM)().substring(16),
                sampled: u,
                dsc: i || {}
            } : {traceId: a || (0, s.DM)(), spanId: (0, s.DM)().substring(16)}
        }

        function u(t = (0, s.DM)(), e = (0, s.DM)().substring(16), n) {
            let r = "";
            return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
        }
    }, 26956: function (t, e, n) {
        "use strict";

        function r(t) {
            if (!t) return {};
            const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!e) return {};
            const n = e[6] || "", r = e[8] || "";
            return {host: e[4], path: e[5], protocol: e[2], search: n, hash: r, relative: e[5] + n + r}
        }

        function s(t) {
            return t.split(/[\?#]/, 1)[0]
        }

        function i(t) {
            return t.split(/\\?\//).filter((t => t.length > 0 && "," !== t)).length
        }

        n.d(e, {
            $A: function () {
                return i
            }, en: function () {
                return r
            }, rt: function () {
                return s
            }
        })
    }, 71235: function (t, e, n) {
        "use strict";

        function r(t) {
            return t && t.Math == Math ? t : void 0
        }

        n.d(e, {
            Rf: function () {
                return i
            }, YO: function () {
                return o
            }, n2: function () {
                return s
            }
        });
        const s = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof n.g && r(n.g) || function () {
            return this
        }() || {};

        function i() {
            return s
        }

        function o(t, e, n) {
            const r = n || s, i = r.__SENTRY__ = r.__SENTRY__ || {};
            return i[t] || (i[t] = e())
        }
    }, 6840: function (t, e, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
            return n(35656)
        }])
    }, 30562: function (t, e, n) {
        "use strict";
        var r = n(41799), s = n(69396), i = n(64487), o = n(82799), a = n(47522), c = n(26104), u = n(27923),
            l = n(19011), d = n(34155);

        function p(t) {
            const e = t ? d.env.NEXT_PUBLIC_VERCEL_ENV : d.env.VERCEL_ENV;
            return e ? `vercel-${e}` : void 0
        }

        var h = n(64307), f = n(36752), m = n(27579), g = n(16174), y = n(86891), _ = n(21170), v = n(21394);
        const b = {"routing.instrumentation": "next-app-router"};

        function S(t, e = !0, n = !0, r, s) {
            let i, o = y.m9.location.pathname;
            if (e) {
                const e = {
                    name: o,
                    op: "pageload",
                    origin: "auto.pageload.nextjs.app_router_instrumentation",
                    tags: b,
                    startTimestamp: _.Z1 ? _.Z1 / 1e3 : void 0,
                    metadata: {source: "url"}
                };
                i = t(e), r(e)
            }
            n && (0, v.U)((e => {
                if (void 0 !== e.endTimestamp) return;
                if ("GET" !== e.fetchData.method) return;
                const n = function (t) {
                    if (!t[0] || "object" !== typeof t[0] || void 0 === t[0].searchParams) return null;
                    if (!t[1] || "object" !== typeof t[1] || !("headers" in t[1])) return null;
                    try {
                        const e = t[0], n = t[1].headers;
                        return "1" !== n.RSC || "1" === n["Next-Router-Prefetch"] ? null : {targetPathname: e.pathname}
                    } catch (e) {
                        return null
                    }
                }(e.args);
                if (null === n) return;
                const r = n.targetPathname, a = {...b, from: o};
                o = r, i && i.end();
                const c = {
                    name: r,
                    op: "navigation",
                    origin: "auto.navigation.nextjs.app_router_instrumentation",
                    tags: a,
                    metadata: {source: "url"}
                };
                t(c), s(c)
            }))
        }

        var k = n(12343), w = n(77638), T = n(26956), x = n(11163), E = n.n(x), C = n(88425);
        const I = y.m9;
        const R = {"routing.instrumentation": "next-pages-router"};
        let M, O;
        const A = (0, i.s3)();

        function D(t, e = !0, n = !0, r, s) {
            const {route: o, params: a, sentryTrace: c, baggage: u} = function () {
                let t;
                const e = I.document.getElementById("__NEXT_DATA__");
                if (e && e.innerHTML) try {
                    t = JSON.parse(e.innerHTML)
                } catch (o) {
                    C.X && k.kg.warn("Could not extract __NEXT_DATA__")
                }
                if (!t) return {};
                const n = {}, {page: r, query: s, props: i} = t;
                return n.route = r, n.params = s, i && i.pageProps && (n.sentryTrace = i.pageProps._sentryTraceData, n.baggage = i.pageProps._sentryBaggage), n
            }(), {traceparentData: l, dynamicSamplingContext: d, propagationContext: p} = (0, w.KA)(c, u);
            if ((0, i.nZ)().setPropagationContext(p), O = o || I.location.pathname, e) {
                const e = o ? "route" : "url", n = {
                    name: O,
                    op: "pageload",
                    origin: "auto.pageload.nextjs.pages_router_instrumentation",
                    tags: R,
                    startTimestamp: _.Z1 ? _.Z1 / 1e3 : void 0, ...a && A && A.getOptions().sendDefaultPii && {data: a}, ...l,
                    metadata: {source: e, dynamicSamplingContext: l && !d ? {} : d}
                };
                M = t(n), r(n)
            }
            n && E().events.on("routeChangeStart", (e => {
                const n = (0, T.rt)(e), r = function (t) {
                    const e = (I.__BUILD_MANIFEST || {}).sortedPages;
                    if (!e) return;
                    return e.find((e => {
                        const n = function (t) {
                            const e = t.split("/");
                            let n = "";
                            e[e.length - 1].match(/^\[\[\.\.\..+\]\]$/) && (e.pop(), n = "(?:/(.+?))?");
                            const r = e.map((t => t.replace(/^\[\.\.\..+\]$/, "(.+?)").replace(/^\[.*\]$/, "([^/]+?)"))).join("/");
                            return new RegExp(`^${r}${n}(?:/)?$`)
                        }(e);
                        return t.match(n)
                    }))
                }(n);
                let i, o;
                r ? (i = r, o = "route") : (i = n, o = "url");
                const a = {...R, from: O};
                O = i, M && M.end();
                const c = {
                    name: i,
                    op: "navigation",
                    origin: "auto.navigation.nextjs.pages_router_instrumentation",
                    tags: a,
                    metadata: {source: o}
                }, u = t(c);
                if (s(c), u) {
                    const t = u.startChild({
                        op: "ui.nextjs.route-change",
                        origin: "auto.ui.nextjs.pages_router_instrumentation",
                        description: "Next.js Route Change"
                    }), e = () => {
                        t.end(), E().events.off("routeChangeComplete", e)
                    };
                    E().events.on("routeChangeComplete", e)
                }
            }))
        }

        function N(t, e = !0, n = !0, r, s) {
            !y.m9.document.getElementById("__NEXT_DATA__") ? S(t, e, n, r || (() => {
            }), s || (() => {
            })) : D(t, e, n, r || (() => {
            }), s || (() => {
            }))
        }

        class L extends f.gE {
            constructor(t) {
                super({tracingOrigins: [...m.k3.tracingOrigins, /^(api\/)/], routingInstrumentation: N, ...t})
            }
        }

        var P = n(22967);

        function $(t, e) {
            let n = 0;
            for (let r = t.length - 1; r >= 0; r--) {
                const e = t[r];
                "." === e ? t.splice(r, 1) : ".." === e ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
            }
            if (e) for (; n--; n) t.unshift("..");
            return t
        }

        const F = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;

        function j(t) {
            const e = t.length > 1024 ? `<truncated>${t.slice(-1024)}` : t, n = F.exec(e);
            return n ? n.slice(1) : []
        }

        function U(...t) {
            let e = "", n = !1;
            for (let r = t.length - 1; r >= -1 && !n; r--) {
                const s = r >= 0 ? t[r] : "/";
                s && (e = `${s}/${e}`, n = "/" === s.charAt(0))
            }
            return e = $(e.split("/").filter((t => !!t)), !n).join("/"), (n ? "/" : "") + e || "."
        }

        function B(t) {
            let e = 0;
            for (; e < t.length && "" === t[e]; e++) ;
            let n = t.length - 1;
            for (; n >= 0 && "" === t[n]; n--) ;
            return e > n ? [] : t.slice(e, n - e + 1)
        }

        const H = "RewriteFrames", X = (0, P._I)(((t = {}) => {
            const e = t.root, n = t.prefix || "app:///", r = t.iteratee || (t => {
                if (!t.filename) return t;
                const r = /^[a-zA-Z]:\\/.test(t.filename) || t.filename.includes("\\") && !t.filename.includes("/"),
                    s = /^\//.test(t.filename);
                if (r || s) {
                    const s = r ? t.filename.replace(/^[a-zA-Z]:/, "").replace(/\\/g, "/") : t.filename,
                        i = e ? function (t, e) {
                            t = U(t).slice(1), e = U(e).slice(1);
                            const n = B(t.split("/")), r = B(e.split("/")), s = Math.min(n.length, r.length);
                            let i = s;
                            for (let a = 0; a < s; a++) if (n[a] !== r[a]) {
                                i = a;
                                break
                            }
                            let o = [];
                            for (let a = i; a < n.length; a++) o.push("..");
                            return o = o.concat(r.slice(i)), o.join("/")
                        }(e, s) : function (t, e) {
                            let n = j(t)[2];
                            return e && n.slice(-1 * e.length) === e && (n = n.slice(0, n.length - e.length)), n
                        }(s);
                    t.filename = `${n}${i}`
                }
                return t
            });
            return {
                name: H, setupOnce() {
                }, processEvent(t) {
                    let e = t;
                    return t.exception && Array.isArray(t.exception.values) && (e = function (t) {
                        try {
                            return {
                                ...t, exception: {
                                    ...t.exception, values: t.exception.values.map((t => {
                                        return {
                                            ...t, ...t.stacktrace && {
                                                stacktrace: (e = t.stacktrace, {
                                                    ...e,
                                                    frames: e && e.frames && e.frames.map((t => r(t)))
                                                })
                                            }
                                        };
                                        var e
                                    }))
                                }
                            }
                        } catch (e) {
                            return t
                        }
                    }(e)), e
                }
            }
        })), z = ((0, P.RN)(H, X), n.g), W = (0, P._I)((t => {
            const e = z.__rewriteFramesAssetPrefixPath__ || "";
            return X({
                iteratee: t => {
                    try {
                        const {origin: n} = new URL(t.filename);
                        t.filename = (0, h.x)([t, "access", t => t.filename, "optionalAccess", t => t.replace, "call", t => t(n, "app://"), "access", t => t.replace, "call", t => t(e, "")])
                    } catch (n) {
                    }
                    return t.filename && t.filename.startsWith("app:///_next") && (t.filename = decodeURI(t.filename)), t.filename && t.filename.match(/^app:\/\/\/_next\/static\/chunks\/(main-|main-app-|polyfills-|webpack-|framework-|framework\.)[0-9a-f]+\.js$/) && (t.in_app = !1), t
                }, ...t
            })
        }));
        var q = n(30292);
        const G = n.g;
        c.Integrations;

        function J(t) {
            const e = {environment: p(!0) || "production", defaultIntegrations: Y(t), ...t};
            !function (t) {
                const {integrations: e} = t;
                if (!e) return;
                Array.isArray(e) ? t.integrations = V(e) : t.integrations = t => V(e(t))
            }(e), function (t) {
                const e = G.__sentryRewritesTunnelPath__;
                if (e && t.dsn) {
                    const n = (0, q.U4)(t.dsn);
                    if (!n) return;
                    const r = n.host.match(/^o(\d+)\.ingest\.sentry\.io$/);
                    if (r) {
                        const s = `${e}?o=${r[1]}&p=${n.projectId}`;
                        t.tunnel = s, C.X && k.kg.info(`Tunneling events to "${s}"`)
                    } else C.X && k.kg.warn("Provided DSN is not a Sentry SaaS DSN. Will not tunnel events.")
                }
            }(e), (0, o.V)(e, "nextjs", ["nextjs", "react"]), (0, u.S)(e);
            const n = (0, i.nZ)();
            n.setTag("runtime", "browser");
            const r = t => "transaction" === t.type && "/404" === t.transaction ? null : t;
            r.id = "NextClient404Filter", n.addEventProcessor(r)
        }

        function V(t) {
            const e = t.find((t => "BrowserTracing" === t.name));
            if (!e) return t;
            if (function (t) {
                return !!t.afterAllSetup && !!t.options
            }(e)) {
                const {options: n} = e;
                t[t.indexOf(e)] = new L(n)
            }
            if (!(e instanceof L)) {
                const n = e.options;
                delete n.routingInstrumentation, delete n.tracingOrigins, t[t.indexOf(e)] = new L(n)
            }
            return t
        }

        function Y(t) {
            const e = [...(0, l.nV)(t), W()];
            return ("undefined" === typeof __SENTRY_TRACING__ || __SENTRY_TRACING__) && (0, a.z)(t) && e.push(function (t) {
                const e = (0, g.E8)({
                    tracingOrigins: [...m.k3.tracingOrigins, /^(api\/)/], ...t,
                    instrumentNavigation: !1,
                    instrumentPageLoad: !1
                });
                return {
                    ...e, afterAllSetup(n) {
                        const r = t => {
                            (0, g.Wo)(n, t)
                        }, s = t => {
                            (0, g.og)(n, t)
                        };
                        N((() => {
                        }), !1, (0, h.x)([t, "optionalAccess", t => t.instrumentNavigation]), r, s), e.afterAllSetup(n), N((() => {
                        }), (0, h.x)([t, "optionalAccess", t => t.instrumentPageLoad]), !1, r, s)
                    }
                }
            }()), e
        }

        var K = n(67597), Z = n(34754), Q = n(20535);
        const tt = "undefined" === typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__, et = "ExtraErrorData",
            nt = (0, P._I)(((t = {}) => {
                const e = t.depth || 3, n = t.captureErrorCause || !1;
                return {
                    name: et, setupOnce() {
                    }, processEvent: (t, r) => function (t, e = {}, n, r) {
                        if (!e.originalException || !(0, K.VZ)(e.originalException)) return t;
                        const s = e.originalException.name || e.originalException.constructor.name,
                            i = function (t, e) {
                                try {
                                    const n = ["name", "message", "stack", "line", "column", "fileName", "lineNumber", "columnNumber", "toJSON"],
                                        r = {};
                                    for (const e of Object.keys(t)) {
                                        if (-1 !== n.indexOf(e)) continue;
                                        const s = t[e];
                                        r[e] = (0, K.VZ)(s) ? s.toString() : s
                                    }
                                    if (e && void 0 !== t.cause && (r.cause = (0, K.VZ)(t.cause) ? t.cause.toString() : t.cause), "function" === typeof t.toJSON) {
                                        const e = t.toJSON();
                                        for (const t of Object.keys(e)) {
                                            const n = e[t];
                                            r[t] = (0, K.VZ)(n) ? n.toString() : n
                                        }
                                    }
                                    return r
                                } catch (n) {
                                    tt && k.kg.error("Unable to extract extra data from the Error object:", n)
                                }
                                return null
                            }(e.originalException, r);
                        if (i) {
                            const e = {...t.contexts}, r = (0, Z.Fv)(i, n);
                            return (0, K.PO)(r) && ((0, Q.xp)(r, "__sentry_skip_normalization__", !0), e[s] = r), {
                                ...t,
                                contexts: e
                            }
                        }
                        return t
                    }(t, r, e, n)
                }
            })), rt = (0, P.RN)(et, nt);
        var st = ["chrome-extension://", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "Non-Error promise rejection captured with value", /unrecognized character after \(\?|invalid regexp group|Invalid regular expression:.*domain.*/i, "Invalid character in header content", "Unexpected quantifier", "TypeError: cancelled", "\u30ad\u30e3\u30f3\u30bb\u30eb\u3057\u307e\u3057\u305f", "TypeError: Load failed", "TypeError: undefined is not an object (evaluating 'ceCurrentVideo.currentTime')", "TypeError: window.instantSearchSDKJSBridge.onTextSelected is not a function", /attempted to hard navigate/, /matchMedia not present, legacy browsers require a polyfill/, "network timeout at: http://apollo-router-configs.saas-prod.internal.eks-saas.production.houzz.net:6001/"],
            it = /^[a-zA-Z0-9_]+ is not defined$/, ot = 0;
        var at = window;
        at.__sentryRewritesTunnelPath__ = void 0, at.SENTRY_RELEASE = {id: "sA9zmUWMoG0ypvh8LsoXu"}, at.__sentryBasePath = void 0, at.__rewriteFramesAssetPrefixPath__ = "/fe/next-pro-site/07c10ca", function (t) {
            var e = t.isServer;
            var n = {
                beforeNavigate: function (t) {
                    return (0, s.Z)((0, r.Z)({}, t), {name: "pro-site"})
                }
            }, o = e ? [new rt] : [new f.gE(n)];
            i.YA("server_platform", "next.js"), J({
                beforeSend: function (t, n) {
                    t.tags || (t.tags = {}), t.tags.source = e ? "serverside" : "clientside";
                    var r, s,
                        i = (r = n.originalException, (null != (s = Error) && "undefined" !== typeof Symbol && s[Symbol.hasInstance] ? s[Symbol.hasInstance](r) : r instanceof s) ? n.originalException : null);
                    if (!i) return t;
                    "string" === typeof t.tags.url && t.tags.url;
                    return e || function (t, e) {
                        var n, r;
                        return !(null === (n = e.stack) || void 0 === n ? void 0 : n.includes("chrome-extension://")) && !(null === (r = e.stack) || void 0 === r ? void 0 : r.includes("gtm.js")) && !((e.stack || "").split("\n").map((function (t) {
                            return t.trim()
                        })).slice(1).every((function (t) {
                            return t.indexOf("at <anonymous>") > -1
                        })) && !e.cause) && ("ReferenceError" !== e.name || !e.message.match(it) || ++ot < 2)
                    }(0, i) ? t : null
                },
                dsn: "https://cf29238ac70f483c9826945b575ad3c8@o459011.ingest.sentry.io/5200756",
                environment: "production",
                ignoreErrors: st,
                integrations: o,
                maxBreadcrumbs: 50,
                release: "07c10cacce79315d443f579c45bdd99e285638d6",
                sampleRate: 1,
                tracesSampler: function (t) {
                    if ("GET /api/health-check" == t.transactionContext.name) return 0;
                    return ["GET /api/site/csrfToken", "GET /api/site/robots.txt", "GET /api/site/sitemap.xml", "POST /api/site/ajax/pageImpression"].includes(t.transactionContext.name) ? .001 : .025
                }
            })
        }({isServer: !1})
    }, 35656: function (t, e, n) {
        "use strict";
        n.r(e), n.d(e, {
            default: function () {
                return i
            }
        });
        var r = n(41799), s = n(85893);
        n(33817);

        function i(t) {
            var e = t.Component, n = t.pageProps;
            return (0, s.jsx)(e, (0, r.Z)({}, n))
        }
    }, 33817: function () {
    }, 11163: function (t, e, n) {
        t.exports = n(90387)
    }, 34155: function (t) {
        var e, n, r = t.exports = {};

        function s() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(t) {
            if (e === setTimeout) return setTimeout(t, 0);
            if ((e === s || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
            try {
                return e(t, 0)
            } catch (n) {
                try {
                    return e.call(null, t, 0)
                } catch (n) {
                    return e.call(this, t, 0)
                }
            }
        }

        !function () {
            try {
                e = "function" === typeof setTimeout ? setTimeout : s
            } catch (t) {
                e = s
            }
            try {
                n = "function" === typeof clearTimeout ? clearTimeout : i
            } catch (t) {
                n = i
            }
        }();
        var a, c = [], u = !1, l = -1;

        function d() {
            u && a && (u = !1, a.length ? c = a.concat(c) : l = -1, c.length && p())
        }

        function p() {
            if (!u) {
                var t = o(d);
                u = !0;
                for (var e = c.length; e;) {
                    for (a = c, c = []; ++l < e;) a && a[l].run();
                    l = -1, e = c.length
                }
                a = null, u = !1, function (t) {
                    if (n === clearTimeout) return clearTimeout(t);
                    if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
            }
        }

        function h(t, e) {
            this.fun = t, this.array = e
        }

        function f() {
        }

        r.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new h(t, e)), 1 !== c.length || u || o(p)
        }, h.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.prependListener = f, r.prependOnceListener = f, r.listeners = function (t) {
            return []
        }, r.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, r.cwd = function () {
            return "/"
        }, r.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, r.umask = function () {
            return 0
        }
    }, 41799: function (t, e, n) {
        "use strict";

        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, s = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter((function (t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                })))), s.forEach((function (e) {
                    r(t, e, n[e])
                }))
            }
            return t
        }

        n.d(e, {
            Z: function () {
                return s
            }
        })
    }, 69396: function (t, e, n) {
        "use strict";

        function r(t, e) {
            return e = null != e ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : function (t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }(Object(e)).forEach((function (n) {
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
            })), t
        }

        n.d(e, {
            Z: function () {
                return r
            }
        })
    }
}, function (t) {
    var e = function (e) {
        return t(t.s = e)
    };
    t.O(0, [774, 179], (function () {
        return e(30562), e(6840), e(90387)
    }));
    var n = t.O();
    _N_E = n
}]);