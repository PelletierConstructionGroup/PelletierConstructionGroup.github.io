(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[537], {
    72393: function (n, t, e) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/site/by-host/[domain]/[[...path]]", function () {
            return e(97525)
        }])
    }, 97806: function (n, t, e) {
        "use strict";
        e.d(t, {
            C: function () {
                return Z
            }
        });
        var r = e(41799), i = e(85893), a = e(67294), o = e(9008), s = e.n(o), c = e(95171), u = e(29853), l = e(7386),
            f = e(40962), d = e(12750), h = e(27259), p = e(61580), m = e(55861), g = function () {
                return (0, a.useEffect)((function () {
                    m.jukwaaAjax.get("csrfToken").then((function (n) {
                        var t = n.csrfToken;
                        window.HZ.ctx.csrfToken = t
                    }))
                })), null
            }, x = e(47568), w = e(10092), _ = e(31955), j = e(71510), v = "/site/by-host/", S = function (n, t) {
                var e = n.replace(v, "").split("/")[0];
                return "".concat(v).concat(e).concat((0, j.addLeadingSlash)(t))
            }, y = "/ajax/pageImpression", b = function () {
                var n = (0, x.Z)((function () {
                    var n, t, e, r, i;
                    return (0, w.__generator)(this, (function (a) {
                        if (n = window.location.pathname, t = n.startsWith(v) ? S(n, y) : y, !(e = _.Z.get("v"))) return [2];
                        r = {
                            rrid: window._nextRequestId,
                            v: e
                        }, i = navigator.sendBeacon && navigator.sendBeacon.bind(navigator);
                        try {
                            return i(t, JSON.stringify(r)), [2]
                        } catch (o) {
                            return [2, fetch(t, {method: "POST", body: JSON.stringify(r)})]
                        }
                        return [2]
                    }))
                }));
                return function () {
                    return n.apply(this, arguments)
                }
            }(), T = !1, k = "\nwindow.HZ = window.HZ || {};\nwindow.HZ.ctx = window.HZ.ctx || {};\n".trim(),
            H = "\nwindow._nextRequestId = (document.cookie.split('; ').filter(function (c) { return c.indexOf('rid=') === 0 })[0] || '').split('=')[1];\n".trim(),
            N = !1, Z = function (n) {
                var t = n.baseHref, e = n.headContent, o = n.siteDataJson, m = n.disabledSince, x = n.theme,
                    w = n.translationFile, _ = n.locale, j = x || {}, v = j.properties, S = j.themeVersion,
                    y = JSON.parse(e), Z = y.title, C = y.favicon, O = y.metaDescription, E = y.metaRobots,
                    J = y.canonicalUrl, L = y.links, P = y.meta, D = y.inlineScripts, I = y.structuredData;
                if ((0, a.useEffect)((function () {
                    T || (b(), T = !0)
                }), []), N || (c.l10nSDK.init({
                    ctx: {
                        getLocale: function () {
                            return n.locale
                        }
                    }
                }), N = !0), !n.siteDataJson) return null;
                var M = (0, u.isThemeV2)(v, S) ? (0, h.getCssStyleStr)(v.user, _) : ":root{".concat((0, d.getCustomPropertiesFromTheme)(v, _), "}");
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(s(), {
                        children: [(0, i.jsx)("title", {children: Z}), t && (0, i.jsx)("base", {href: t}), (0, i.jsx)("link", {
                            rel: "shortcut icon",
                            href: C
                        }), O && (0, i.jsx)("meta", {name: "description", content: O}), (0, i.jsx)("meta", {
                            name: "robots",
                            content: E
                        }), L.map((function (n) {
                            return (0, i.jsx)("link", (0, r.Z)({}, n), n.rel + n.href)
                        })), J && (0, i.jsx)("link", {rel: "canonical", href: J}), P.map((function (n) {
                            return (0, i.jsx)("meta", (0, r.Z)({}, n), n.property + n.content)
                        })), (0, i.jsx)("style", {
                            className: "sd-theme-properties",
                            dangerouslySetInnerHTML: {__html: M}
                        }), (0, i.jsx)("script", {dangerouslySetInnerHTML: {__html: "".concat(k, "\n").concat(H)}}), I && (0, i.jsx)("script", {
                            type: "application/ld+json",
                            dangerouslySetInnerHTML: {__html: JSON.stringify(I)}
                        })]
                    }), (0, i.jsx)(g, {}), (0, i.jsx)(f.ProSiteTranslationContext.Provider, {
                        value: {
                            hgt: function (n) {
                                var t = {}, e = c.l10nManager.getL10NClient(w[n]);
                                return (0, p.mapProperty)(w[n], t, e), t
                            }, HgtTag: function (n) {
                                return c.l10nManager.getL10NClient(w[n.lang]).getReactComponent(n.handle, n)
                            }
                        }, children: (0, i.jsx)(l.Z, {siteDataJson: o, disabledSince: m, inlineScripts: D})
                    })]
                })
            }
    }, 97525: function (n, t, e) {
        "use strict";
        e.r(t), e.d(t, {
            __N_SSG: function () {
                return c
            }, default: function () {
                return u
            }
        });
        var r = e(41799), i = e(69396), a = e(85893), o = e(97806), s = e(71510), c = !0;

        function u(n) {
            var t = (0, s.addTrailingSlash)(window.location.pathname).startsWith(n.baseHref) ? n.baseHref : "/";
            return (0, a.jsx)(o.C, (0, i.Z)((0, r.Z)({}, n), {baseHref: t}))
        }
    }, 6912: function () {
    }
}, function (n) {
    n.O(0, [27, 662, 472, 774, 888, 179], (function () {
        return t = 72393, n(n.s = t);
        var t
    }));
    var t = n.O();
    _N_E = t
}]);