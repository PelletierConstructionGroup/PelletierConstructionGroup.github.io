self.__BUILD_MANIFEST = function (s, t, e, i, a, o, n, c, d) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: "/site/:siteId/file/:userIdHash/:fileName",
                destination: s
            }, {
                source: "/site/:siteId/ajax/action/:action",
                destination: t
            }, {
                source: "/site/by-host/:domain/file/:userIdHash/:fileName",
                destination: s
            }, {
                source: "/site/by-host/:domain/ajax/action/:action",
                destination: t
            }, {
                source: "/site/by-host/:domain/ajax/pageImpression",
                destination: "/api/site/ajax/pageImpression"
            }, {source: "/site/:siteId/csrfToken", destination: e}, {
                source: "/site/by-host/:domain/csrfToken",
                destination: e
            }, {source: "/site/:siteId/robots.txt", destination: i}, {
                source: "/site/by-host/:domain/robots.txt",
                destination: i
            }, {source: "/site/:siteId/sitemap.xml", destination: a}, {
                source: "/site/by-host/:domain/sitemap.xml",
                destination: a
            }],
            fallback: [{
                source: "/:path*{/}?",
                has: [{type: "host", value: "(?<domain>.*)"}],
                destination: "/site/by-host/:domain/:path*"
            }]
        },
        "/404": ["static/chunks/pages/404-60ffb424ac1a424b.js"],
        "/_error": ["static/chunks/pages/_error-848849c7f971c7b1.js"],
        "/site/by-host/[domain]/[[...path]]": [o, n, c, d, "static/chunks/pages/site/by-host/[domain]/[[...path]]-38211fb66482d1b7.js"],
        "/site/[siteId]/[[...path]]": [o, n, c, d, "static/chunks/pages/site/[siteId]/[[...path]]-4fb65dc579514d4d.js"],
        sortedPages: ["/404", "/_app", "/_error", "/site/by-host/[domain]/[[...path]]", "/site/[siteId]/[[...path]]"]
    }
}("/api/site/file/:userIdHash/:fileName", "/api/site/ajax/action", "/api/site/csrfToken", "/api/site/robots.txt", "/api/site/sitemap.xml", "static/chunks/ddc9e94f-34c95ee577d886b0.js", "static/chunks/29107295-1494f237b9e407ad.js", "static/css/f26fa5c7c81404ca.css", "static/chunks/472-5a57120cfa9df2f1.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();