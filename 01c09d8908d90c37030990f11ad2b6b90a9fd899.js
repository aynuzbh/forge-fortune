"use strict";
var content = document.querySelector("#content");
var preloaderContent = document.querySelector("#preloader");
var preloaderMessage = document.querySelector("#preload-message");
var preloaderExtended = document.querySelector("#preload-extended-container");
var preloader = {
    loaded: false,
    contentLoading: function contentLoading() {
        var _this = this;
        this.loaded = false;
        content.style.display = "none";
        preloaderContent.style.display = "";
        setTimeout(function () {
            if (!_this.loaded) preloaderExtended.classList.remove("loaded")
        }, 25e3)
    },
    contentLoaded: function contentLoaded() {
        this.loaded = true;
        preloaderContent.classList.add("contentLoaded");
        setTimeout(function () {
            content.style.display = "";
            preloaderContent.style.display = "none"
        }, 300)
    },
    setMessage: function setMessage(message) {
        preloaderMessage.textContent = message
    }
};
preloader.contentLoading();
! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        x = function (e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.5.1",
        S = function (e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return S.each(this, e)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            D = function (e, t) {
                return e === t && (l = !0), 0
            },
            j = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                T()
            },
            ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function (e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function (e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, D = t ? function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function (e) {
                return (e + "").replace(re, ie)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
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
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function () {
                        return [0]
                    }),
                    last: ve(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                    return e === i
                }, a, !0), l = be(function (e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function (e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(D).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                } return r
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(D(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(D(this, e || [], !0))
        },
        is: function (e) {
            return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var j, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || j, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, j = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return h(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function (e) {
            return O(e, "nextSibling")
        },
        prev: function (e) {
            return O(e, "previousSibling")
        },
        nextAll: function (e) {
            return h(e, "nextSibling")
        },
        prevAll: function (e) {
            return h(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function () {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function () {
                    return S.each(arguments, function (e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = u = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function (e) {
                        return a.then(null, e)
                    },
                    pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Te = /^([^.]*)(?:\.(.+)|)/;

    function Ce() {
        return !0
    }

    function Ee() {
        return !1
    }

    function Se(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function ke(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) ke(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ee;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Ae(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, Ce)
    }
    S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = Te.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = Te.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ce : Ee, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Ee,
        isPropagationStopped: Ee,
        isImmediatePropagationStopped: Ee,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ce, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ce, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ce, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && we.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Ae(this, e, Se), !1
            },
            trigger: function () {
                return Ae(this, e), !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return ke(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return ke(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ee), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<script|<style|<link/i,
        De = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function qe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function Le(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function He(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Oe(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function Pe(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && De.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(je, ""), u, l))
        }
        return n
    }

    function Re(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
                else Oe(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Re(this, e, !0)
        },
        remove: function (e) {
            return Re(this, e)
        },
        text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return Pe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qe(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return Pe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = qe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return Pe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        },
        html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ne.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return Pe(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ie = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        We = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Fe = new RegExp(ne.join("|"), "i");

    function Be(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Ie(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Me.test(a) && Fe.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function $e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), o
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), i
            },
            reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px", t.style.height = "1px", n.style.height = "9px", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = 3 < parseInt(r.height), re.removeChild(e)), a
            }
        }))
    }();
    var _e = ["Webkit", "Moz", "ms"],
        ze = E.createElement("div").style,
        Ue = {};

    function Xe(e) {
        var t = S.cssProps[e] || Ue[e];
        return t || (e in ze ? e : Ue[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
            while (n--)
                if ((e = _e[n] + t) in ze) return e
        }(e) || e)
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Ie(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Me.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Ge.test(t),
                    l = e.style;
                if (u || (t = Xe(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Ge.test(t) || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ve.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : We(e, Ye, function () {
                    return Ze(e, u, n)
                })
            },
            set: function (e, t, n) {
                var r, i = Ie(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function () {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for ((! function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing)); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function () {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        nt || (nt = !0, st())
    }, S.fx.stop = function () {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", y.checkOn = "" !== rt.value, y.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", y.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function vt(e) {
        return (e.match(P) || []).join(" ")
    }

    function yt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, yt(this)))
            });
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, yt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = mt(t)).length)
                while (n = this[u++])
                    if (i = yt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, yt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = mt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : vt(S.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function Dt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || St.test(n) ? i(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) Dt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) Dt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var jt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Bt(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function $t(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Bt(Rt, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Ot.test(v.type), f = v.url.replace(qt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(jt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Et.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Bt(Mt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
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
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    y.cors = !!zt && "withCredentials" in zt, y.ajax = zt = !!zt, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || zt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f))
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
            if (t) return t = Be(e, n), Me.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Gt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
"use strict";

function loadMisc() {
    $.ajax({
        url: "json/misc.json"
    }).done(function (data) {
        $.each(data, function (i, prop) {
            $.each(prop, function (name, val) {
                miscLoadedValues[name] = val
            })
        });
        loadGlobalTexts()
    })
}
var globalTexts = null;

function loadGlobalTexts() {
    $.ajax({
        url: "json/texts.json"
    }).done(function (data) {
        globalTexts = Object.values(data);
        loadHotKeys()
    })
}

function loadHotKeys() {
    $.ajax({
        url: "json/hotkeys.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var key = new Hotkey(props);
            HotKeys.addKey(key)
        });
        loadPatchnotes()
    })
}

function loadPatchnotes() {
    $.ajax({
        url: "json/patchNotes.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var patch = new PatchNote(props);
            PatchManager.addPatch(patch)
        });
        loadMaterials()
    })
}

function loadMaterials() {
    $.ajax({
        url: "json/materials.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var material = new Material(props);
            ResourceManager.addNewMaterial(material)
        });
        preloader.setMessage("Gathering materials...");
        loadRecipes()
    })
}

function loadRecipes() {
    $.ajax({
        url: "json/recipes.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var item = new Item(props);
            recipeList.addItem(item)
        });
        preloader.setMessage("Populating recipes...");
        loadOrders()
    })
}

function loadOrders() {
    $.ajax({
        url: "json/orders.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var order = new Order(props);
            Merchant.addOrderConfig(order)
        });
        preloader.setMessage("Adding Orders...");
        loadSkills()
    })
}

function loadSkills() {
    $.ajax({
        url: "json/skills.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var skill = new Skill(props);
            SkillManager.addSkill(skill)
        });
        preloader.setMessage("Scrapbooking...");
        loadPlaybooks()
    })
}

function loadPlaybooks() {
    $.ajax({
        url: "json/playbook.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var playbook = new playBookTemplate(props);
            PlaybookManager.addPlaybookTemplate(playbook)
        });
        loadBuffs()
    })
}

function loadBuffs() {
    $.ajax({
        url: "json/buffs.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var buff = new buffTemplate(props);
            BuffManager.addBuffTemplate(buff)
        });
        loadHeroes()
    })
}

function loadHeroes() {
    $.ajax({
        url: "json/heroes.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var hero = new Hero(props);
            HeroManager.addHero(hero)
        });
        preloader.setMessage("Gathering your heroes...");
        loadPerks()
    })
}

function loadPerks() {
    $.ajax({
        url: "json/perks.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var perk = new Perk(props);
            Shop.addPerk(perk)
        });
        loadMobs()
    })
}

function loadMobs() {
    $.ajax({
        url: "json/mobs.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var mob = new MobTemplate(props);
            MobManager.addMob(mob)
        });
        loadAreas()
    })
}

function loadAreas() {
    $.ajax({
        url: "json/areas.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var area = new Area(props);
            AreaManager.addArea(area)
        });
        loadDungeons()
    })
}

function loadDungeons() {
    $.ajax({
        url: "json/dungeons.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var event = new Dungeon(props);
            DungeonManager.addDungeon(event)
        });
        preloader.setMessage("Crawling the dungeons...");
        loadTinker()
    })
}

function loadTinker() {
    $.ajax({
        url: "json/tinker.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var command = new tinkerCommand(props);
            TinkerManager.addCommand(command)
        });
        loadTown()
    })
}

function loadTown() {
    $.ajax({
        url: "json/town.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var building = new Building(props);
            TownManager.addBuilding(building)
        });
        preloader.setMessage("Constructing buildings...");
        loadDialogs()
    })
}

function loadDialogs() {
    $.ajax({
        url: "json/dialogs.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var dialog = new Dialog(props);
            DialogManager.addDialog(dialog)
        });
        loadQuests()
    })
}

function loadQuests() {
    $.ajax({
        url: "json/quest.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var quest = new Quest(props);
            ExpeditionManager.addQuest(quest)
        });
        loadTrophies()
    })
}

function loadTrophies() {
    $.ajax({
        url: "json/trophies.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var trophy = new Trophy(props);
            DungeonManager.addTrophy(trophy)
        });
        loadTooltips()
    })
}

function loadTooltips() {
    $.ajax({
        url: "json/tooltips.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var tooltip = new Tooltip(props);
            TooltipManager.addTooltip(tooltip)
        });
        preloader.setMessage("Informing the uninformed...");
        loadAchievements()
    })
}

function loadAchievements() {
    $.ajax({
        url: "json/achievements.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var achievement = new AchievementLookup[props.id](props);
            AchievementManager.addAchievement(achievement)
        });
        loadAscendants()
    })
}

function loadAscendants() {
    $.ajax({
        url: "json/ascendants.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var ascendant = new Ascendant(props);
            AscensionManager.addAscendant(ascendant)
        });
        loadToasts()
    })
}

function loadToasts() {
    $.ajax({
        url: "json/toasts.json"
    }).done(function (data) {
        $.each(data, function (i, props) {
            var toast = new Toast(props);
            ToastManager.addToast(toast)
        });
        preloader.setMessage("Finalizing your progress...");
        afterLoad()
    })
}
"use strict";
var settings = {
    lang: "en",
    toasts: 1,
    toastPosition: "top-right",
    toastDuration: 5e3,
    toastSize: 1,
    dialogStatus: 0,
    db: 0,
    tpref: 1,
    opnotif: 0,
    leavesite: 0,
    animations: 1,
    gpuEffects: 1
};

function saveSettings() {
    localStorage.setItem("settings", JSON.stringify(settings))
}

function loadSettings() {
    var obj = JSON.parse(localStorage.getItem("settings"));
    for (var setting in obj) {
        settings[setting] = obj[setting]
    }
    portSettings();
    localStorage.setItem("settings", JSON.stringify(settings));
    if (settings.leavesite) {
        $(window).bind("beforeunload", function () {
            return "Are you sure you want to leave?"
        })
    }
}

function clearSettings() {
    localStorage.removeItem("settings");
    location.reload()
}
loadSettings();

function portSettings() {
    delete settings.expandedLogistics;
    delete settings.toggleTurnOrderBars;
    delete settings.battleLogLength;
    delete settings.expandedMaterials
}
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var HotKeys = {
    keys: [],
    assigning: null,
    enabled: 1,
    createSave: function createSave() {
        var save = {};
        save.keys = [];
        this.keys.forEach(function (key) {
            save.keys.push(key.createSave())
        });
        save.enabled = this.enabled;
        save.inventoryAutoSort = Inventory.autosort;
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.keys.forEach(function (key) {
            var keyid = _this.keys.find(function (k) {
                return k.id === key.id
            });
            if (!keyid) return;
            keyid.loadSave(key)
        });
        this.enabled = save.enabled;
        if (save.inventoryAutoSort !== undefined) Inventory.autosort = save.inventoryAutoSort
    },
    addKey: function addKey(key) {
        this.keys.push(key)
    },
    setEnabled: function setEnabled() {
        this.enabled = 1
    },
    setDisabled: function setDisabled() {
        this.enabled = 0
    },
    allDefault: function allDefault() {
        this.keys.forEach(function (key) {
            return key.reset()
        })
    },
    unassignKey: function unassignKey(kid) {
        var akey = this.keys.find(function (k) {
            return k.id === kid
        });
        akey.unassign()
    },
    defaultKey: function defaultKey(kid) {
        var akey = this.keys.find(function (k) {
            return k.id === kid
        });
        akey.reset()
    },
    assignKey: function assignKey(code) {
        var _this2 = this;
        this.keys.forEach(function (k) {
            return k.unassignIf(code)
        });
        var akey = this.keys.find(function (k) {
            return k.id === _this2.assigning
        });
        akey.assign(code);
        this.assigning = null
    },
    startAssign: function startAssign(kid) {
        this.assigning = kid
    },
    testKey: function testKey(keyCode) {
        if (HotKeys.assigning !== null) {
            this.assignKey(keyCode);
            showHotkey();
            return
        }
        if (settings.dialogStatus === 1) return;
        var key = this.keys.find(function (k) {
            return k.key.toString() === keyCode
        });
        if (key === undefined || !key.canSee()) return;
        if (key.type === "tabs") return nextSidebarTab();
        if (key.type === "inventory_sort") return Inventory.sortInventory();
        if (key.type === "previous_screen") return previousTab();
        openTab(key.type)
    }
};
var Hotkey = function () {
    function Hotkey(props) {
        _classCallCheck(this, Hotkey);
        Object.assign(this, props);
        this.ogkey = this.key
    }
    _createClass(Hotkey, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.key = this.key;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.key = save.key
        }
    }, {
        key: "reset",
        value: function reset() {
            this.key = this.ogkey
        }
    }, {
        key: "unassign",
        value: function unassign() {
            this.key = "Not Assigned"
        }
    }, {
        key: "assign",
        value: function assign(code) {
            this.key = code
        }
    }, {
        key: "unassignIf",
        value: function unassignIf(code) {
            if (this.key === code) this.unassign()
        }
    }, {
        key: "canSee",
        value: function canSee() {
            if (this.openedBy === null) return true;
            return Shop.alreadyPurchased(this.openedBy)
        }
    }]);
    return Hotkey
}();
$(document).on("keyup", function (e) {
    e.preventDefault();
    HotKeys.testKey(e.key)
});

function showHotkey(skipAnimation) {
    $("#hotkeyAllDefault").empty().html(displayText("hotkey_all_default"));
    $("#hotkeyList").empty();
    HotKeys.keys.forEach(function (key) {
        if (!key.canSee()) return;
        var d = $("<div/>").addClass("hotkeyRow").appendTo($("#hotkeyList"));
        $("<div/>").addClass("hotkeyDesc").html(key.desc).appendTo(d);
        var keyText = typeof key.key === "string" ? key.key.toUpperCase() : key.key;
        var d1 = $("<div/>").addClass("hotkeyKey").data("kid", key.id).html(keyText).appendTo(d);
        if (HotKeys.assigning === key.id) d1.addClass("hotkeyKeyAssigning");
        var buttonsContianer = $("<div/>").addClass("hotkeyButtonsContainer").appendTo(d);
        var unassignBtn = $("<div/>").addClass("actionButton hotkeyUnassign").data("kid", key.id).html(displayText("hotkey_unassign")).appendTo(buttonsContianer);
        var resetBtn = $("<div/>").addClass("actionButton hotkeyDefault").data("kid", key.id).html(displayText("hotkey_default")).appendTo(buttonsContianer);
        if (skipAnimation) {
            unassignBtn.addClass("actionButtonAnimDisabled");
            resetBtn.addClass("actionButtonAnimDisabled")
        }
    })
}
$(document).on("change", ".hotkeyPrefSelection", function (e) {
    $(e.target).attr("checked", "checked");
    HotKeys.enabled = parseInt($(e.target).val())
});
$(document).on("click", "#hotkeyAllDefault", function (e) {
    e.preventDefault();
    HotKeys.allDefault();
    showHotkey(true)
});
$(document).on("click", ".hotkeyUnassign", function (e) {
    e.preventDefault();
    var kid = $(e.currentTarget).data("kid");
    HotKeys.unassignKey(kid);
    showHotkey(true)
});
$(document).on("click", ".hotkeyDefault", function (e) {
    e.preventDefault();
    var kid = $(e.currentTarget).data("kid");
    HotKeys.defaultKey(kid);
    showHotkey(true)
});
$(document).on("click", ".hotkeyKey", function (e) {
    e.preventDefault();
    var kid = $(e.currentTarget).data("kid");
    HotKeys.startAssign(kid);
    showHotkey(true)
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}
var PatchManager = {
    patchList: [],
    current: 0,
    time: 0,
    addPatch: function addPatch(patchNote) {
        this.patchList.push(patchNote);
        this.current = patchNote.version
    },
    lastVersion: function lastVersion() {
        return this.current
    },
    updateNeeded: function updateNeeded(data) {
        if (data === undefined) return false;
        return this.current.toLowerCase() !== data.toLowerCase()
    },
    patchTimer: function patchTimer(elapsed) {
        this.time += elapsed;
        if (this.time > 3e5) {
            $.ajax({
                url: "json/patchNum.txt",
                dataType: "text"
            }).done(function (data) {
                refreshPatchNotes(data)
            });
            this.time = 0
        }
    }
};
var PatchNote = function PatchNote(props) {
    _classCallCheck(this, PatchNote);
    Object.assign(this, props)
};

function refreshPatchNotes(data) {
    if (PatchManager.updateNeeded(data)) $("#versionNum").addClass("hasEvent");
    else $("#versionNum").removeClass("hasEvent")
}

function showPatchNotes() {
    $("#patchList").empty();
    PatchManager.patchList.forEach(function (patch) {
        var d = $("<div/>").addClass("patchNote");
        var patchDate = new Date(patch.date).toLocaleString(navigator.language, {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        $("<div/>").addClass("patchNoteVersion").html(patch.version).appendTo(d);
        $("<div/>").addClass("patchNoteDate").html("Updated ".concat(patchDate)).appendTo(d);
        $("<div/>").addClass("patchNoteBody").html(patch.body).appendTo(d);
        $("#patchList").prepend(d)
    });
    if (PatchManager.updateNeeded()) $("#updateTrigger").show();
    else $("#updateTrigger").hide()
}
$(document).on("click", "#updateRefresh", function (e) {
    location.reload()
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var idAmt = function () {
    function idAmt(id, amt) {
        _classCallCheck(this, idAmt);
        this.id = id;
        this.amt = amt
    }
    _createClass(idAmt, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.amt = this.amt;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave() {
            return
        }
    }]);
    return idAmt
}();

function formatToUnits(number, precision) {
    var abbrev = ["", "k", "M", "B", "T", "Q"];
    var unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3);
    var order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length - 1));
    var suffix = abbrev[order];
    return parseFloat((number / Math.pow(10, order * 3)).toFixedDown(precision)) + suffix
}
Number.prototype.toFixedDown = function (digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf()
};

function formatWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function msToTime(ms) {
    var secs = Math.floor(ms / 1e3 % 60);
    var mins = Math.floor(ms / 1e3 / 60 % 60);
    var hours = Math.floor(ms / 1e3 / 60 / 60 % 24);
    var days = Math.floor(ms / 1e3 / 60 / 60 / 24);
    if (days > 1) return "".concat(days, "d ").concat(hours, "h ").concat(mins, "m ").concat(secs, "s");
    if (days === 1) return "".concat(days, "d ").concat(hours, "h ").concat(mins, "m ").concat(secs, "s");
    if (hours > 0) return "".concat(hours, "h ").concat(mins, "m ").concat(secs, "s");
    if (mins > 0) return "".concat(mins, "m ").concat(secs, "s");
    return "".concat(secs, "s")
}

function round(number, precision) {
    var shift = function shift(number, precision) {
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? +numArray[1] + precision : precision))
    };
    return shift(Math.round(shift(number, +precision)), -precision).toFixed(precision)
}

function timeSince(startTime, endTime) {
    endTime = endTime || Date.now();
    var s = "";
    var diff = Math.round((endTime - startTime) / 1e3);
    var d = Math.floor(diff / (24 * 60 * 60));
    diff = diff - d * 24 * 60 * 60;
    if (d === 1) s += d + " day, ";
    else s += d + " days, ";
    var h = Math.floor(diff / (60 * 60));
    diff = diff - h * 60 * 60;
    if (h === 1) s += h + " hour, ";
    else s += h + " hours, ";
    var m = Math.floor(diff / 60);
    diff = diff - m * 60;
    if (m === 1) s += m + " minute, ";
    else s += m + " minutes, ";
    if (diff === 1) s += diff + " second, ";
    else s += diff + " seconds, ";
    return s.slice(0, -2)
}
var miscIcons = Object.freeze({
    hp: '<i class="fas fa-heart statHP"></i>',
    pow: '<i class="fad fa-sword statPOW"></i>',
    adventure: '<i class="fas fa-swords"></i>',
    alert: '<i class="fas fa-exclamation-circle"></i>',
    ap: '<img src="assets/images/DungeonIcons/ap.png">',
    arrow: '<i class="fas fa-arrow-right"></i>',
    ascend: '<img src="assets/svg/blackball.svg">',
    autoSell: '<i class="fas fa-dollar-sign"></i>',
    back: '<i class="fas fa-arrow-left"></i>',
    cancelSlot: '<i class="fas fa-times"></i>',
    checkmark: '<i class="fas fa-check"></i>',
    commandProgress: '<i class="fas fa-spinner"></i>',
    commandTime: '<i class="fas fa-stopwatch"></i>',
    dead: '<i class="fas fa-skull-crossbones"></i>',
    emptySlot: '<i class="fas fa-question-circle"></i>',
    enhancement: '<i class="fas fa-plus-circle"></i>',
    essence: '<img src="assets/svg/blackball.svg">',
    gold: '<img src="assets/images/resources/M001.png">',
    guildRep: '<i class="fas fa-grin-alt"></i>',
    info: '<i class="fas fa-info-circle"></i>',
    keyboard: '<i class="fas fa-keyboard"></i>',
    landmark: '<img src="assets/svg/tread.svg">',
    locked: '<i class="fas fa-lock-alt"></i>',
    manualSubmit: '<i class="fas fa-box"></i>',
    mastery: '<img src="assets/svg/stars-stack.svg">',
    merchantOrder: '<i class="fas fa-scroll"></i>',
    museum: '<img src="assets/svg/bookmarklet.svg">',
    quest: '<i class="fas fa-map-signs"></i>',
    question: '<i class="fas fa-question-circle"></i>',
    rarity: '<i class="fad fa-diamond"></i>',
    skull: '<i class="fas fa-skull"></i>',
    smithActionEnhance: '<i class="fas fa-toggle-on"></i>',
    star: '<i class="fas fa-star statSTAR"></i>',
    takeDamage: '<i class="fas fa-shield-cross"></i>',
    time: '<i class="fas fa-clock"></i>',
    toggleOff: '<i class="fas fa-toggle-off"></i>',
    toggleOn: '<i class="fas fa-toggle-on"></i>',
    town: '<i class="fas fa-city"></i>',
    trophy: "<img src='assets/images/resources/M002.png' alt='Monster Trophy'>",
    COG: '<i class="fas fa-cog"></i>',
    JEWEL: '<i class="fas fa-gem"></i>',
    ARMOR: '<img src="assets/svg/brutal-helm.svg">',
    WEAPON: '<img src="assets/svg/broadsword.svg">',
    fireRune: '<i class="fas fa-info-circle"></i>',
    waterRune: '<i class="fas fa-spinner"></i>',
    thunderRune: '<i class="fas fa-clock"></i>'
});
var heroStat = Object.freeze({
    hp: "hp",
    pow: "pow"
});

function msToSec(ms) {
    return round(ms / 1e3, 1) + "s"
}
var miscLoadedValues = {};

function inventorySort(a, b) {
    var ai = a.item;
    var bi = b.item;
    var aj = ItemType.indexOf(ai.type);
    var bj = ItemType.indexOf(bi.type);
    if (ai.recipeType === "normal" && bi.recipeType !== "normal") return -1;
    if (ai.recipeType !== "normal" && bi.recipeType === "normal") return 1;
    if (ai.recipeType !== "normal" && bi.recipeType !== "normal") {
        if (ai.name !== bi.name) {
            if (ai.id > bi.id) return -1;
            return 1
        }
        if (a.scale > b.scale) return -1;
        return 1
    }
    if (ai.lvl > bi.lvl) return -1;
    if (ai.lvl < bi.lvl) return 1;
    if (aj > bj) return -1;
    if (aj < bj) return 1;
    if (a.rarity > b.rarity) return -1;
    if (a.rarity < b.rarity) return 1;
    if (a.sharp > b.sharp) return -1;
    if (a.sharp < b.sharp) return 1;
    return 0
}

function interlace(a1, a2) {
    var length = Math.max(a1.length, a2.length);
    var result = [];
    for (var i = 0; i < length; i++) {
        if (a1.length > i) result.push(a1[i]);
        if (a2.length > i) result.push(a2[i])
    }
    return result
}

function flattenArray(a) {
    return [].concat.apply([], a)
}

function groupArray(i) {
    return i.reduce(function (a, c) {
        return a[c] = (a[c] || 0) + 1, a
    }, Object.create(null))
}
var a = ["", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine ", "Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "];
var b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

function inWords(num) {
    if (num === 0) return "Zero";
    if ((num = num.toString()).length > 9) return "overflow";
    n = ("000000000" + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = "";
    str += n[1] != 0 ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "billion " : "";
    str += n[2] != 0 ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "million " : "";
    str += n[3] != 0 ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand " : "";
    str += n[4] != 0 ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred " : "";
    str += n[5] != 0 ? (str != "" ? "and " : "") + (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) : "";
    return str
}

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;
    arr.fill(false);
    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) {
            arr[length - 1 - i] = createArray.apply(this, args)
        }
    }
    return arr
}

function displayText(id) {
    var lang = settings.lang || "en";
    var sanitizedID = id.toLowerCase().toString();
    var string = globalTexts.find(function (text) {
        return text.tid === sanitizedID
    });
    if (!string || !string[lang]) return "[".concat(id, "]");
    return string[lang]
}

function generateProgressBar(options) {
    var prefix = options.prefix,
        tooltip = options.tooltip,
        text = options.text,
        textID = options.textID,
        icon = options.icon,
        width = options.width,
        fill = options.fill,
        tooltipData = options.tooltipData;
    var progressBarContainer = $("<div/>").addClass("progressBarContainer ".concat(prefix, "BarContainer"));
    if (tooltip) progressBarContainer.addClass("tooltip").attr({
        "data-tooltip": tooltip
    });
    if (tooltipData) progressBarContainer.attr({
        "data-tooltip-value": tooltipData
    });
    var progressBarText = $("<div/>").addClass("progressBarText");
    if (text) progressBarText.html(text).appendTo(progressBarContainer);
    if (textID) progressBarText.attr({
        id: textID
    });
    var progressBarContent = $("<div/>").addClass("progressBarContent");
    if (icon) $("<div/>").addClass("progressBarIcon").html(icon).appendTo(progressBarContent);
    if (icon && text) progressBarText.addClass("containsIcon");
    var progressBar = $("<div/>").addClass("progressBar").appendTo(progressBarContent);
    var progressBarFill = $("<div/>").addClass("progressBarFill").css("width", width).appendTo(progressBar);
    if (fill) progressBarFill.attr({
        id: fill
    });
    progressBarContainer.append(progressBarContent);
    return progressBarContainer
}

function shortenName(name, characters) {
    return name.substring(0, characters - 3) + "..."
}
"use strict";
var heroOverviewLast = true;
var lastTown = "synth";
var $comptitle1 = $("#comptitle1");
var $comptitle2 = $("#comptitle2");
var $comptitle3 = $("#comptitle3");
var $comptitle4 = $("#comptitle4");
var $comptitle5 = $("#comptitle5");
var $comptitle6 = $("#comptitle6");
var $comptitle7 = $("#comptitle7");
var $comptitle8 = $("#comptitle8");
var $comptitle9 = $("#comptitle9");
$comptitle2.click(function (e) {
    e.preventDefault();
    openTab("recipes")
});
$comptitle3.click(function (e) {
    e.preventDefault();
    if (!Shop.alreadyPurchased("AL1000")) return;
    openTab("merchant_order")
});
$comptitle4.click(function (e) {
    e.preventDefault();
    if (!AreaManager.idToArea("A01").unlocked()) return;
    openTab("dungeons_overview")
});
var $DungeonSideBarTeam = $("#DungeonSideBarTeam");
$DungeonSideBarTeam.on("click", ".DungeonSideBarStatus", function (e) {
    e.preventDefault();
    var areaID = $(e.currentTarget).data("areaID");
    openTab("dungeons_" + areaID)
});
$comptitle5.click(function (e) {
    e.preventDefault();
    openTab("town_expedition")
});
$comptitle6.click(function (e) {
    e.preventDefault();
    openTab("town_fusion")
});
$comptitle7.click(function (e) {
    e.preventDefault();
    openTab("town_fortune")
});
$comptitle8.click(function (e) {
    e.preventDefault();
    openTab("town_tinker")
});
$comptitle9.click(function (e) {
    e.preventDefault();
    openTab("town_museum")
});

function tabHide() {
    if (Shop.alreadyPurchased("AL1000") || AscensionManager.ascendedAlready()) $merchantTabLink.show();
    else $merchantTabLink.hide();
    if (recipeList.idToItem("R13001").craftCount > 0 || AscensionManager.ascendedAlready()) $inventoryTabLink.show();
    else $inventoryTabLink.hide();
    if (HeroManager.heroOwned("H203") || AscensionManager.ascendedAlready()) $heroesTabLink.show();
    else $heroesTabLink.hide();
    if (AreaManager.idToArea("A01").unlocked() || AscensionManager.ascendedAlready()) $dungeonsTabLink.show();
    else $dungeonsTabLink.hide();
    if (TownManager.buildingsOwned() || AscensionManager.ascendedAlready()) $townTabLink.show();
    else $townTabLink.hide();
    if (achievementStats.totalGoldEarned > 0 || AscensionManager.ascendedAlready()) $marketTabLink.show();
    else $marketTabLink.hide()
}
var tabHistory = [];
var $tabcontent = $(".tabcontent");
var $tablinks = $(".tablinks");
var $inventoryTabLink = $("#inventoryTabLink");
var $inventoryTabSpan = $("#inventoryTabSpan");
var $inventoryTab = $("#inventoryTab");
var $merchantTabLink = $("#merchantTabLink");
var $merchantTab = $("#merchantTab");
var $merchantTabContent = $(".merchantTabContent");
var $merchantTabOrder = $("#merchantTabOrder");
var $merchantTabMastery = $("#merchantTabMastery");
var $recipesTabLink = $("#recipesTabLink");
var $recipesTab = $("#recipesTab");
var $heroesTabLink = $("#heroesTabLink");
var $heroesTab = $("#heroesTab");
var heroTabList = ["heroes_H001", "heroes_H002", "heroes_H003", "heroes_H004", "heroes_H101", "heroes_H102", "heroes_H103", "heroes_H104", "heroes_H201", "heroes_H202", "heroes_H203", "heroes_H204", "heroes_overview", "heroes_compare"];
var $dungeonsTabLink = $("#dungeonsTabLink");
var $dungeonsTab = $("#dungeonsTab");
var $townTabLink = $("#townTabLink");
var $townsTab = $("#townsTab");
var $marketTabLink = $("#marketTabLink");
var $marketTab = $("#marketTab");
var $marketTabSpan = $("#marketTabSpan");

function openedTabEquals(tabName) {
    return tabHistory[tabHistory.length - 1] === tabName
}

function isDungeonScreen() {
    return openedTabEquals("dungeons_overview") || openedTabEquals("dungeons_A01") || openedTabEquals("dungeons_A02") || openedTabEquals("dungeons_A03") || openedTabEquals("dungeons_A04")
}

function isHeroScreen() {
    var tab = tabHistory[tabHistory.length - 1];
    if (tab === "heroes_overview" || tab === "heroes_compare") return false;
    return heroTabList.includes(tab)
}

function previousTab() {
    if (tabHistory.length < 2) return;
    tabHistory.pop();
    openTab(tabHistory.pop())
}

function openTab(tabName) {
    if (tabName === "town") tabName += "_" + lastTown;
    var lastTab = tabHistory[tabHistory.length - 1];
    if (lastTab === tabName) return;
    tabHistory.push(tabName);
    if (tabHistory.length > 20) tabHistory.unshift();
    var tabParts = tabName.split("_");
    $tabcontent.hide();
    $tablinks.removeClass("tab-selected");
    if (tabParts[0] === "inventory") {
        $inventoryTabLink.addClass("tab-selected");
        $inventoryTab.show();
        $inventoryTabSpan.removeClass("hasEvent");
        refreshInventory();
        if (Inventory.sideInspect) inspectItemSideDetail()
    } else if (tabParts[0] === "merchant") {
        $merchantTabLink.addClass("tab-selected");
        $merchantTab.show();
        $merchantTabContent.hide();
        $(".merchantSideTab").removeClass("selected");
        if (tabParts[1] === "order") {
            $("#merchantOrderTab").addClass("selected");
            $merchantTabOrder.show();
            refreshShopOrder()
        }
        if (tabParts[1] === "mastery") {
            $("#merchantMasteryTab").addClass("selected");
            $merchantTabMastery.show();
            refreshRecipeMastery()
        }
    } else if (tabParts[0] === "recipes") {
        $recipesTabLink.addClass("tab-selected");
        $recipesTab.show()
    } else if (tabParts[0] === "heroes") {
        $heroesTabLink.addClass("tab-selected");
        $heroesTab.show();
        if (tabParts[1] === "overview" || tabParts[1] === "compare") {
            if (heroTabList.includes(lastTab)) {
                $heroInspectBox.addClass("heroInspectClosed");
                setTimeout(function () {
                    updateHeroStats();
                    $heroInspectBox.removeClass("heroInspectClosed isOpened")
                }, 200)
            } else {
                $heroInspectBox.removeClass("isOpened")
            }
        }
        if (tabParts[1] === "overview") {
            heroOverviewLast = true;
            refreshHeroOverview()
        } else if (tabParts[1] === "compare") {
            heroOverviewLast = false;
            refreshHeroOverviewScreen()
        } else {
            showHero(tabParts[1])
        }
    } else if (tabParts[0] === "dungeons") {
        $dungeonsTabLink.addClass("tab-selected");
        $dungeonsTab.show();
        if (tabParts[1] === "overview") dungeonsTabClicked();
        else screenDirectDungeon(tabParts[1])
    } else if (tabParts[0] === "town") {
        $townTabLink.addClass("tab-selected");
        $townsTab.show();
        refreshSideTown();
        if (tabParts[1] !== undefined) lastTown = tabParts[1];
        var building = TownManager.typeToBuilding(lastTown);
        if (building.getStatus() === BuildingState.unseen) building.setStatus(BuildingState.seen);
        $("#" + lastTown + "Bldg").addClass("selected");
        if (lastTown !== undefined) showBldg(lastTown);
        refreshTownHasEvents()
    } else if (tabParts[0] === "market") {
        $marketTabLink.addClass("tab-selected");
        $marketTab.show();
        $marketTabSpan.removeClass("hasEvent");
        refreshShop()
    }
}
var $rightSidebarButtons = $("#rightSidebarButtons");
var $sidebarContents = $(".sidebarContents");
var $inventorySidebarToggle = $("#inventorySidebarToggle");
var $adventureSidebarToggle = $("#adventureSidebarToggle");
var $townSidebarToggle = $("#townSidebarToggle");
var $museumSidebarToggle = $("#museumSidebarToggle");
var $inventorySidebarContents = $("#inventorySidebarContents");
var $adventureSidebarContents = $("#adventureSidebarContents");
var $townSidebarContents = $("#townSidebarContents");
var $museumSidebarContents = $("#museumSidebarContents");
var sidebarToggleTracker = -1;
$rightSidebarButtons.on("click", ".sidebarToggle", function (e) {
    e.preventDefault();
    var location = $(e.currentTarget).attr("id");
    if (location === "adventureSidebarToggle" && !adventureUnlocked()) return;
    if (location === "townSidebarToggle" && !townUnlocked()) return;
    if (location === "museumSidebarToggle" && !museumUnlocked()) return;
    $(".sidebarToggle").removeClass("highlight");
    $(e.currentTarget).addClass("highlight");
    $sidebarContents.hide();
    if (location === "inventorySidebarToggle") {
        $inventorySidebarContents.show();
        sidebarToggleTracker = 0
    } else if (location === "adventureSidebarToggle") {
        $adventureSidebarContents.show();
        sidebarToggleTracker = 1
    } else if (location === "townSidebarToggle") {
        $townSidebarContents.show();
        sidebarToggleTracker = 2
    } else if (location === "museumSidebarToggle") {
        $museumSidebarContents.show();
        sidebarToggleTracker = 3
    }
});

function nextSidebarTab() {
    sidebarToggleTracker += 1;
    if (sidebarToggleTracker === 4) sidebarToggleTracker = 0;
    if (sidebarToggleTracker === 1 && !adventureUnlocked()) return nextSidebarTab();
    if (sidebarToggleTracker === 2 && !townUnlocked()) return nextSidebarTab();
    if (sidebarToggleTracker === 3 && !museumUnlocked()) return nextSidebarTab();
    $sidebarContents.hide();
    $(".sidebarToggle").removeClass("highlight");
    if (sidebarToggleTracker === 0) {
        $inventorySidebarContents.show();
        $inventorySidebarToggle.addClass("highlight")
    } else if (sidebarToggleTracker === 1) {
        $adventureSidebarContents.show();
        $adventureSidebarToggle.addClass("highlight")
    } else if (sidebarToggleTracker === 2) {
        $townSidebarContents.show();
        $townSidebarToggle.addClass("highlight")
    } else if (sidebarToggleTracker === 3) {
        $museumSidebarContents.show();
        $museumSidebarToggle.addClass("highlight")
    }
}
var $expeditionSidebar = $("#expeditionSidebar");

function refreshExpeditionSidebar() {
    $expeditionSidebar.empty();
    ExpeditionManager.expeditions.forEach(function (expedition) {
        var d = $("<div/>").addClass("expeditionSidebarList").appendTo($expeditionSidebar);
        $("<div/>").addClass("expeditionLandmarkSubtext").attr("id", "expeditionSidebarName" + expedition.id).html("Landmark ".concat(expedition.goalText)).appendTo(d);
        var heroes = $("<div/>").addClass("expeditionHeroes").appendTo(d);
        expedition.heroes().forEach(function (hero) {
            $("<div/>").addClass("expeditionHeroPortrait").html(hero.head).appendTo(heroes)
        });
        createAdventureSidebar(expedition).appendTo(d)
    });
    ExpeditionManager.quests.filter(function (q) {
        return q.active()
    }).forEach(function (quest) {
        var d = $("<div/>").addClass("expeditionSidebarList").appendTo($expeditionSidebar);
        $("<div/>").addClass("expeditionLandmarkSubtext").html(quest.name).appendTo(d);
        var heroes = $("<div/>").addClass("expeditionHeroes").appendTo(d);
        quest.heroes().forEach(function (hero) {
            $("<div/>").addClass("expeditionHeroPortrait").html(hero.head).appendTo(heroes)
        });
        createAdventureSidebar(quest).appendTo(d)
    })
}

function createAdventureSidebar(expedition) {
    var percent = expedition.distance / expedition.nextGoal;
    var width = (percent * 100).toFixed(1) + "%";
    var barText = expedition.timeRemaining();
    var options = {
        prefix: "expSidebar",
        icon: miscIcons.quest,
        text: barText,
        textID: "esb" + expedition.id,
        width: width,
        fill: "esbf" + expedition.id
    };
    return generateProgressBar(options)
}

function updateLandmarkSidebar(id) {
    var expedition = ExpeditionManager.idToExpedition(id);
    if (expedition === undefined) return;
    $("#expeditionSidebarName" + id).html("Landmark ".concat(expedition.goal + 1))
}

function refreshExpeditionSpecificSidebar(expedition) {
    var percent = expedition.displayDistance / 1e3 * expedition.rate / expedition.nextGoal;
    if (expedition.type === "quest") {
        percent = (expedition.distance * 1e3 + expedition.time) / (expedition.nextGoal * 1e3)
    }
    var width = (percent * 100).toFixed(1) + "%";
    var barText = expedition.timeRemaining();
    $("#esb" + expedition.id).html(barText);
    $("#esbf" + expedition.id).css("width", width)
}
var $fuseSidebar = $("#fuseSidebar");

function refreshFuseSidebar() {
    $fuseSidebar.empty();
    FusionManager.slots.forEach(function (fuse) {
        var fsbPercent = fuse.fuseTime / fuse.getMaxFuse();
        var fsbText = fuse.fuseComplete() ? displayText("fuse_complete") : msToTime(fuse.getMaxFuse() - fuse.fuseTime);
        var fsbWidth = (fsbPercent * 100).toFixed(1) + "%";
        var options = {
            prefix: "fsb",
            icon: '<div class="RT'.concat(fuse.container.rarity, '"><i class="fad fa-diamond"></div>'),
            text: fsbText,
            textID: "fsb" + fuse.fuseID,
            width: fsbWidth,
            fill: "fsbFill" + fuse.fuseID
        };
        var d = $("<div/>").addClass("fusionSidebarContainer tooltip").attr({
            "data-tooltip": "fuse_slot_container",
            "data-tooltip-value": fuse.container.uniqueID()
        }).appendTo($fuseSidebar);
        $("<div/>").addClass("fusionSidebarItemPic").html(fuse.container.picName()).appendTo(d);
        var d1 = $("<div/>").addClass("fusionSidebarAction").data("fid", fuse.fuseID).appendTo(d);
        generateProgressBar(options).appendTo(d1)
    });
    for (var i = 0; i < FusionManager.maxSlots() - FusionManager.slots.length; i++) {
        var d = $("<div/>").addClass("fusionSidebarContainer fusionSidebarEmpty").appendTo($fuseSidebar);
        $("<div/>").addClass("fusionSidebarItemPic").html(displayText("empty_slot")).appendTo(d);
        var options = {
            prefix: "fsb",
            icon: '<i class="fad fa-diamond">',
            text: "&nbsp;",
            textID: "fsb",
            width: 0,
            fill: "fsbFill"
        };
        var d1 = $("<div/>").addClass("fusionSidebarAction").data("fid", "empty").appendTo(d);
        generateProgressBar(options).appendTo(d1)
    }
}

function refreshFuseSidebarText() {
    FusionManager.slots.forEach(function (fuse) {
        var fsbPercent = fuse.fuseTime / fuse.getMaxFuse();
        var fsbText = fuse.fuseComplete() ? displayText("fuse_complete") : msToTime(fuse.getMaxFuse() - fuse.fuseTime);
        var fsbWidth = (fsbPercent * 100).toFixed(1) + "%";
        $("#fsbFill" + fuse.fuseID).css("width", fsbWidth);
        $("#fsb" + fuse.fuseID).html(fsbText)
    })
}
$fuseSidebar.on("click", ".fusionSidebarAction", function (e) {
    e.preventDefault();
    var fid = $(e.currentTarget).data("fid");
    if (fid === "empty") return openTab("town_fusion");
    var fuse = FusionManager.fuseByID(fid);
    if (!fuse.fuseComplete()) return;
    FusionManager.collectFuse(fid);
    refreshFuseSidebar()
});
var $fortuneSidebar = $("#fortuneSidebar");

function refreshFortuneSidebar() {
    $fortuneSidebar.empty();
    FortuneManager.slots.forEach(function (fortune) {
        var d = $("<div/>").addClass("fortuneSidebarItem").addClass("R" + fortune.rarity).appendTo($fortuneSidebar);
        $("<div/>").addClass("itemName").html(fortune.picName()).appendTo(d);
        $("<div/>").addClass("itemRarity RT".concat(fortune.rarity, " tooltip")).attr({
            "data-tooltip": "rarity_".concat(rarities[fortune.rarity].toLowerCase())
        }).html(miscIcons.rarity).appendTo(d)
    });
    if (FortuneManager.emptySlotCount() > 0 || FortuneManager.stage !== null) {
        var d = $("<div/>").addClass("fortuneSidebarItem").appendTo($fortuneSidebar);
        $("<div/>").addClass("fortuneEmpty").html(displayText("add_fortune")).appendTo(d)
    }
}
$fortuneSidebar.on("click", ".fortuneSidebarItem", function (e) {
    e.preventDefault();
    openTab("town_fortune")
});
var $tinkerSidebar = $("#tinkerSidebar");

function refreshTinkerSidebar() {
    $tinkerSidebar.empty();
    TinkerManager.commands.forEach(function (command) {
        createTinkerSidebar(command).appendTo($tinkerSidebar)
    })
}

function createTinkerSidebar(command) {
    var d = $("<div/>").addClass("tinkerSidebarCommand").data("tid", command.id).appendTo($tinkerSidebar);
    var d1 = $("<div/>").addClass("tinkerSidebarName").appendTo(d);
    var s1 = $("<span/>").addClass("tinkerSidebarToggle").attr("id", "tsbToggle" + command.id).html(miscIcons.toggleOff).appendTo(d1);
    if (command.enabled) s1.addClass("tinkerSidebarEnabled").html(miscIcons.toggleOn);
    $("<span/>").addClass("tinkerSidebarName").html(command.name).appendTo(d1);
    var commandBarPercent = command.progress / 1e3;
    var commandBarWidth = (commandBarPercent * 100).toFixed(1) + "%";
    var commandBarText = "Level ".concat(command.lvl, " (").concat(commandBarWidth, ")");
    var options = {
        prefix: "csbProgress",
        icon: miscIcons.commandProgress,
        text: commandBarText,
        textID: "csbp" + command.id,
        width: commandBarWidth,
        fill: "csbf" + command.id
    };
    generateProgressBar(options).appendTo(d);
    return d
}
$tinkerSidebar.on("click", ".tinkerSidebarCommand", function (e) {
    e.preventDefault();
    var tid = $(e.currentTarget).data("tid");
    var command = TinkerManager.idToCommand(tid);
    command.toggle();
    refreshCommandToggle(command)
});
var $museumSidebar = $("#museumSidebar");
var lastMuseum = null;

function museumInspect() {
    var recipeID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : lastMuseum;
    if (recipeID === null) return;
    var recipe = recipeList.idToItem(recipeID);
    lastMuseum = recipeID;
    $museumSidebar.empty().append(generateMuseumSpecificDonation(recipe, false))
}
var $DungeonSideBar = $("#DungeonSideBar");

function showSidebarHeadings() {
    if (Shop.alreadyPurchased("AL2001")) {
        $comptitle4.show();
        $DungeonSideBar.show();
        $adventureSidebarToggle.removeClass("disabled").html(miscIcons.adventure)
    }
    if (TownManager.idToBuilding("TB010").status >= 2) {
        $comptitle5.show();
        $expeditionSidebar.show();
        $adventureSidebarToggle.removeClass("disabled").html(miscIcons.adventure)
    }
    if (TownManager.idToBuilding("TB003").status >= 2) {
        $comptitle6.show();
        $fuseSidebar.show();
        $townSidebarToggle.removeClass("disabled").html(miscIcons.town)
    }
    if (TownManager.idToBuilding("TB004").status >= 2) {
        $comptitle7.show();
        $fortuneSidebar.show();
        $townSidebarToggle.removeClass("disabled").html(miscIcons.town)
    }
    if (TownManager.idToBuilding("TB006").status >= 2) {
        $comptitle8.show();
        $tinkerSidebar.show();
        $townSidebarToggle.removeClass("disabled").html(miscIcons.town)
    }
    if (TownManager.idToBuilding("TB008").status >= 2) {
        $comptitle9.show();
        $museumSidebar.show();
        $museumSidebarToggle.removeClass("disabled").html(miscIcons.museum)
    }
}

function adventureUnlocked() {
    return Shop.alreadyPurchased("AL2001") || TownManager.idToBuilding("TB010").status >= 2
}

function townUnlocked() {
    return TownManager.idToBuilding("TB003").status >= 2 || TownManager.idToBuilding("TB004").status >= 2 || TownManager.idToBuilding("TB006").status >= 2
}

function museumUnlocked() {
    return TownManager.idToBuilding("TB008").status >= 2
}
"use strict";
Math.seededRandom = function () {
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    return Math.seed / 233280
};
"use strict";

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj
        }
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var AchievementStatus = Object.freeze({
    ACTIVE: 0,
    FAILED: 1,
    COMPLETE: 2
});
var AchievementManager = {
    achievements: [],
    achievementRewards: [],
    achievementStatus: [],
    addAchievement: function addAchievement(achievement) {
        this.achievements.push(achievement)
    },
    idToAchievement: function idToAchievement(id) {
        return this.achievements.find(function (a) {
            return a.id === id
        })
    }
};
var Achievement = function () {
    function Achievement(props) {
        _classCallCheck(this, Achievement);
        Object.assign(this, props);
        this.complete = false;
        this.description = "<p><b>Requirement:</b> ".concat(this.restrictions, "</p><p><b>Reward: </b>").concat(this.reward, "</p>")
    }
    _createClass(Achievement, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.complete = this.complete;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.complete = save.complete
        }
    }, {
        key: "getStatus",
        value: function getStatus() {
            return AchievementStatus.FAILED
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            return
        }
    }]);
    return Achievement
}();
var AC000 = function (_Achievement) {
    _inherits(AC000, _Achievement);

    function AC000(props) {
        _classCallCheck(this, AC000);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC000).call(this, props))
    }
    _createClass(AC000, [{
        key: "getStatus",
        value: function getStatus() {
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            bloopSmith.runeUnlock = true
        }
    }]);
    return AC000
}(Achievement);
var AC001 = function (_Achievement2) {
    _inherits(AC001, _Achievement2);

    function AC001(props) {
        _classCallCheck(this, AC001);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC001).call(this, props))
    }
    _createClass(AC001, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.totalPoints() < 10) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }]);
    return AC001
}(Achievement);
var AC002 = function (_Achievement3) {
    _inherits(AC002, _Achievement3);

    function AC002(props) {
        _classCallCheck(this, AC002);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC002).call(this, props))
    }
    _createClass(AC002, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.totalPoints() < 30) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }]);
    return AC002
}(Achievement);
var AC100 = function (_Achievement4) {
    _inherits(AC100, _Achievement4);

    function AC100(props) {
        _classCallCheck(this, AC100);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC100).call(this, props))
    }
    _createClass(AC100, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H001")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2026").purchase();
            PlaybookManager.unlockPlaybook("PB0011")
        }
    }]);
    return AC100
}(Achievement);
var AC101 = function (_Achievement5) {
    _inherits(AC101, _Achievement5);

    function AC101(props) {
        _classCallCheck(this, AC101);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC101).call(this, props))
    }
    _createClass(AC101, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H002")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2029").purchase();
            PlaybookManager.unlockPlaybook("PB0021")
        }
    }]);
    return AC101
}(Achievement);
var AC102 = function (_Achievement6) {
    _inherits(AC102, _Achievement6);

    function AC102(props) {
        _classCallCheck(this, AC102);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC102).call(this, props))
    }
    _createClass(AC102, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H003")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2033").purchase();
            PlaybookManager.unlockPlaybook("PB0031")
        }
    }]);
    return AC102
}(Achievement);
var AC103 = function (_Achievement7) {
    _inherits(AC103, _Achievement7);

    function AC103(props) {
        _classCallCheck(this, AC103);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC103).call(this, props))
    }
    _createClass(AC103, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H004")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2037").purchase();
            PlaybookManager.unlockPlaybook("PB0041")
        }
    }]);
    return AC103
}(Achievement);
var AC104 = function (_Achievement8) {
    _inherits(AC104, _Achievement8);

    function AC104(props) {
        _classCallCheck(this, AC104);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC104).call(this, props))
    }
    _createClass(AC104, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H101")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2030").purchase();
            PlaybookManager.unlockPlaybook("PB0051")
        }
    }]);
    return AC104
}(Achievement);
var AC105 = function (_Achievement9) {
    _inherits(AC105, _Achievement9);

    function AC105(props) {
        _classCallCheck(this, AC105);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC105).call(this, props))
    }
    _createClass(AC105, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H102")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2027").purchase();
            PlaybookManager.unlockPlaybook("PB0061")
        }
    }]);
    return AC105
}(Achievement);
var AC106 = function (_Achievement10) {
    _inherits(AC106, _Achievement10);

    function AC106(props) {
        _classCallCheck(this, AC106);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC106).call(this, props))
    }
    _createClass(AC106, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H103")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2031").purchase();
            PlaybookManager.unlockPlaybook("PB0071")
        }
    }]);
    return AC106
}(Achievement);
var AC107 = function (_Achievement11) {
    _inherits(AC107, _Achievement11);

    function AC107(props) {
        _classCallCheck(this, AC107);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC107).call(this, props))
    }
    _createClass(AC107, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H104")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2025").purchase();
            PlaybookManager.unlockPlaybook("PB0081")
        }
    }]);
    return AC107
}(Achievement);
var AC108 = function (_Achievement12) {
    _inherits(AC108, _Achievement12);

    function AC108(props) {
        _classCallCheck(this, AC108);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC108).call(this, props))
    }
    _createClass(AC108, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H201")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2032").purchase();
            PlaybookManager.unlockPlaybook("PB0091")
        }
    }]);
    return AC108
}(Achievement);
var AC109 = function (_Achievement13) {
    _inherits(AC109, _Achievement13);

    function AC109(props) {
        _classCallCheck(this, AC109);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC109).call(this, props))
    }
    _createClass(AC109, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H202")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2035").purchase();
            PlaybookManager.unlockPlaybook("PB0101")
        }
    }]);
    return AC109
}(Achievement);
var AC110 = function (_Achievement14) {
    _inherits(AC110, _Achievement14);

    function AC110(props) {
        _classCallCheck(this, AC110);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC110).call(this, props))
    }
    _createClass(AC110, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H203")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2034").purchase();
            PlaybookManager.unlockPlaybook("PB0111")
        }
    }]);
    return AC110
}(Achievement);
var AC111 = function (_Achievement15) {
    _inherits(AC111, _Achievement15);

    function AC111(props) {
        _classCallCheck(this, AC111);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC111).call(this, props))
    }
    _createClass(AC111, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H204")
                })) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2024").purchase();
            PlaybookManager.unlockPlaybook("PB0121")
        }
    }]);
    return AC111
}(Achievement);
var AC112 = function (_Achievement16) {
    _inherits(AC112, _Achievement16);

    function AC112(props) {
        _classCallCheck(this, AC112);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC112).call(this, props))
    }
    _createClass(AC112, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H001")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2041").purchase();
            PlaybookManager.unlockPlaybook("PB0012")
        }
    }]);
    return AC112
}(Achievement);
var AC113 = function (_Achievement17) {
    _inherits(AC113, _Achievement17);

    function AC113(props) {
        _classCallCheck(this, AC113);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC113).call(this, props))
    }
    _createClass(AC113, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H002")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2038").purchase();
            PlaybookManager.unlockPlaybook("PB0022")
        }
    }]);
    return AC113
}(Achievement);
var AC114 = function (_Achievement18) {
    _inherits(AC114, _Achievement18);

    function AC114(props) {
        _classCallCheck(this, AC114);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC114).call(this, props))
    }
    _createClass(AC114, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H003")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2042").purchase();
            PlaybookManager.unlockPlaybook("PB0032")
        }
    }]);
    return AC114
}(Achievement);
var AC115 = function (_Achievement19) {
    _inherits(AC115, _Achievement19);

    function AC115(props) {
        _classCallCheck(this, AC115);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC115).call(this, props))
    }
    _createClass(AC115, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H004")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2044").purchase();
            PlaybookManager.unlockPlaybook("PB0042")
        }
    }]);
    return AC115
}(Achievement);
var AC116 = function (_Achievement20) {
    _inherits(AC116, _Achievement20);

    function AC116(props) {
        _classCallCheck(this, AC116);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC116).call(this, props))
    }
    _createClass(AC116, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H101")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2047").purchase();
            PlaybookManager.unlockPlaybook("PB0052")
        }
    }]);
    return AC116
}(Achievement);
var AC117 = function (_Achievement21) {
    _inherits(AC117, _Achievement21);

    function AC117(props) {
        _classCallCheck(this, AC117);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC117).call(this, props))
    }
    _createClass(AC117, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H102")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2039").purchase();
            PlaybookManager.unlockPlaybook("PB0062")
        }
    }]);
    return AC117
}(Achievement);
var AC118 = function (_Achievement22) {
    _inherits(AC118, _Achievement22);

    function AC118(props) {
        _classCallCheck(this, AC118);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC118).call(this, props))
    }
    _createClass(AC118, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H103")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2031").purchase();
            PlaybookManager.unlockPlaybook("PB0072")
        }
    }]);
    return AC118
}(Achievement);
var AC119 = function (_Achievement23) {
    _inherits(AC119, _Achievement23);

    function AC119(props) {
        _classCallCheck(this, AC119);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC119).call(this, props))
    }
    _createClass(AC119, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H104")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2040").purchase();
            PlaybookManager.unlockPlaybook("PB0082")
        }
    }]);
    return AC119
}(Achievement);
var AC120 = function (_Achievement24) {
    _inherits(AC120, _Achievement24);

    function AC120(props) {
        _classCallCheck(this, AC120);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC120).call(this, props))
    }
    _createClass(AC120, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H201")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2036").purchase();
            PlaybookManager.unlockPlaybook("PB0092")
        }
    }]);
    return AC120
}(Achievement);
var AC121 = function (_Achievement25) {
    _inherits(AC121, _Achievement25);

    function AC121(props) {
        _classCallCheck(this, AC121);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC121).call(this, props))
    }
    _createClass(AC121, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H202")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2046").purchase();
            PlaybookManager.unlockPlaybook("PB0102")
        }
    }]);
    return AC121
}(Achievement);
var AC122 = function (_Achievement26) {
    _inherits(AC122, _Achievement26);

    function AC122(props) {
        _classCallCheck(this, AC122);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC122).call(this, props))
    }
    _createClass(AC122, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H203")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2045").purchase();
            PlaybookManager.unlockPlaybook("PB0112")
        }
    }]);
    return AC122
}(Achievement);
var AC123 = function (_Achievement27) {
    _inherits(AC123, _Achievement27);

    function AC123(props) {
        _classCallCheck(this, AC123);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC123).call(this, props))
    }
    _createClass(AC123, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H204")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARD) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            Shop.idToPerk("AL2028").purchase();
            PlaybookManager.unlockPlaybook("PB0122")
        }
    }]);
    return AC123
}(Achievement);
var AC124 = function (_Achievement28) {
    _inherits(AC124, _Achievement28);

    function AC124(props) {
        _classCallCheck(this, AC124);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC124).call(this, props))
    }
    _createClass(AC124, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H001")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H001").passiveUnlocked = true
        }
    }]);
    return AC124
}(Achievement);
var AC125 = function (_Achievement29) {
    _inherits(AC125, _Achievement29);

    function AC125(props) {
        _classCallCheck(this, AC125);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC125).call(this, props))
    }
    _createClass(AC125, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H002")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H002").passiveUnlocked = true
        }
    }]);
    return AC125
}(Achievement);
var AC126 = function (_Achievement30) {
    _inherits(AC126, _Achievement30);

    function AC126(props) {
        _classCallCheck(this, AC126);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC126).call(this, props))
    }
    _createClass(AC126, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H003")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H003").passiveUnlocked = true
        }
    }]);
    return AC126
}(Achievement);
var AC127 = function (_Achievement31) {
    _inherits(AC127, _Achievement31);

    function AC127(props) {
        _classCallCheck(this, AC127);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC127).call(this, props))
    }
    _createClass(AC127, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H004")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H004").passiveUnlocked = true
        }
    }]);
    return AC127
}(Achievement);
var AC128 = function (_Achievement32) {
    _inherits(AC128, _Achievement32);

    function AC128(props) {
        _classCallCheck(this, AC128);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC128).call(this, props))
    }
    _createClass(AC128, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H101")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H101").passiveUnlocked = true
        }
    }]);
    return AC128
}(Achievement);
var AC129 = function (_Achievement33) {
    _inherits(AC129, _Achievement33);

    function AC129(props) {
        _classCallCheck(this, AC129);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC129).call(this, props))
    }
    _createClass(AC129, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H102")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H102").passiveUnlocked = true
        }
    }]);
    return AC129
}(Achievement);
var AC130 = function (_Achievement34) {
    _inherits(AC130, _Achievement34);

    function AC130(props) {
        _classCallCheck(this, AC130);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC130).call(this, props))
    }
    _createClass(AC130, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H103")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H103").passiveUnlocked = true
        }
    }]);
    return AC130
}(Achievement);
var AC131 = function (_Achievement35) {
    _inherits(AC131, _Achievement35);

    function AC131(props) {
        _classCallCheck(this, AC131);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC131).call(this, props))
    }
    _createClass(AC131, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H104")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H104").passiveUnlocked = true
        }
    }]);
    return AC131
}(Achievement);
var AC132 = function (_Achievement36) {
    _inherits(AC132, _Achievement36);

    function AC132(props) {
        _classCallCheck(this, AC132);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC132).call(this, props))
    }
    _createClass(AC132, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H201")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H201").passiveUnlocked = true
        }
    }]);
    return AC132
}(Achievement);
var AC133 = function (_Achievement37) {
    _inherits(AC133, _Achievement37);

    function AC133(props) {
        _classCallCheck(this, AC133);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC133).call(this, props))
    }
    _createClass(AC133, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H202")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H202").passiveUnlocked = true
        }
    }]);
    return AC133
}(Achievement);
var AC134 = function (_Achievement38) {
    _inherits(AC134, _Achievement38);

    function AC134(props) {
        _classCallCheck(this, AC134);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC134).call(this, props))
    }
    _createClass(AC134, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H203")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H203").passiveUnlocked = true
        }
    }]);
    return AC134
}(Achievement);
var AC135 = function (_Achievement39) {
    _inherits(AC135, _Achievement39);

    function AC135(props) {
        _classCallCheck(this, AC135);
        return _possibleConstructorReturn(this, _getPrototypeOf(AC135).call(this, props))
    }
    _createClass(AC135, [{
        key: "getStatus",
        value: function getStatus() {
            if (!AscensionManager.ascendedAlready()) return AchievementStatus.FAILED;
            if (!AscensionManager.bossTeams.every(function (t) {
                    return t.includes("H204")
                })) return AchievementStatus.FAILED;
            if (AscensionManager.difficulty < RunDifficulty.HARDER) return AchievementStatus.FAILED;
            return AchievementStatus.ACTIVE
        }
    }, {
        key: "initializeRun",
        value: function initializeRun() {
            if (!this.complete) return;
            HeroManager.idToHero("H204").passiveUnlocked = true
        }
    }]);
    return AC135
}(Achievement);
var AchievementLookup = {
    AC000: AC000,
    AC001: AC001,
    AC002: AC002,
    AC100: AC100,
    AC101: AC101,
    AC102: AC102,
    AC103: AC103,
    AC104: AC104,
    AC105: AC105,
    AC106: AC106,
    AC107: AC107,
    AC108: AC108,
    AC109: AC109,
    AC110: AC110,
    AC111: AC111,
    AC112: AC112,
    AC113: AC113,
    AC114: AC114,
    AC115: AC115,
    AC116: AC116,
    AC117: AC117,
    AC118: AC118,
    AC119: AC119,
    AC120: AC120,
    AC121: AC121,
    AC122: AC122,
    AC123: AC123,
    AC124: AC124,
    AC125: AC125,
    AC126: AC126,
    AC127: AC127,
    AC128: AC128,
    AC129: AC129,
    AC130: AC130,
    AC131: AC131,
    AC132: AC132,
    AC133: AC133,
    AC134: AC134,
    AC135: AC135
};
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var RunDifficulty = Object.freeze({
    NORMAL: 0,
    HARD: 1,
    HARDER: 2
});
var AscensionManager = {
    difficulty: RunDifficulty.NORMAL,
    selectedDifficulty: RunDifficulty.NORMAL,
    ascendants: [],
    clears: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    bossTeams: [],
    ascensionVisible: function ascensionVisible() {
        return DungeonManager.bossCount() >= 10 || AscensionManager.clears[0] > 0
    },
    createSave: function createSave() {
        var save = {};
        save.difficulty = this.difficulty;
        save.ascendants = [];
        save.clears = this.clears;
        this.ascendants.forEach(function (t) {
            save.ascendants.push(t.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        if (this.difficulty !== undefined) this.difficulty = save.difficulty;
        if (save.clears !== undefined) this.clears = save.clears;
        if (save.ascendants === undefined) return;
        save.ascendants.forEach(function (t) {
            var ascendant = _this.idToAscendant(t.id);
            ascendant.loadSave(t)
        })
    },
    clearProgress: function clearProgress() {
        this.bossTeams = []
    },
    addAscendant: function addAscendant(ascendant) {
        this.ascendants.push(ascendant)
    },
    idToAscendant: function idToAscendant(id) {
        return this.ascendants.find(function (t) {
            return t.id === id
        })
    },
    restart: function restart() {
        if (DungeonManager.bossCount() < 10) {
            ToastManager.renderToast("cant_ascend");
            return
        }
        this.clears[this.difficulty] += 1;
        AchievementManager.achievements.forEach(function (a) {
            if (a.getStatus() === AchievementStatus.ACTIVE) a.complete = true
        });
        actionSlotManager.clearProgress();
        AreaManager.clearProgress();
        DungeonManager.clearProgress();
        HeroManager.clearProgress();
        Inventory.clearProgress();
        recipeList.clearProgress();
        ResourceManager.clearProgress();
        SynthManager.clearProgress();
        FusionManager.clearProgress();
        bloopSmith.clearProgress();
        FortuneManager.clearProgress();
        TownManager.clearProgress();
        Shop.clearProgress();
        TinkerManager.clearProgress();
        Merchant.clearProgress();
        ExpeditionManager.clearProgress();
        PlaybookManager.clearProgress();
        AscensionManager.clearProgress();
        setInitialSetup();
        forceSave();
        location.reload()
    },
    ascendedAlready: function ascendedAlready() {
        return this.clears.reduce(function (a, b) {
            return a + b
        }, 0) > 0
    },
    decreaseDifficulty: function decreaseDifficulty() {
        if (this.selectedDifficulty === RunDifficulty.NORMAL) return;
        else if (this.selectedDifficulty === RunDifficulty.HARD) this.selectedDifficulty = RunDifficulty.NORMAL;
        else if (this.selectedDifficulty === RunDifficulty.HARDER) this.selectedDifficulty = RunDifficulty.HARD
    },
    increaseDifficulty: function increaseDifficulty() {
        if (this.selectedDifficulty === RunDifficulty.HARDER) return;
        else if (this.selectedDifficulty === RunDifficulty.HARD) this.selectedDifficulty = RunDifficulty.HARDER;
        else if (this.selectedDifficulty === RunDifficulty.NORMAL) this.selectedDifficulty = RunDifficulty.HARD
    },
    totalPoints: function totalPoints() {
        return this.clears[0] + this.clears[1] * 2 + this.clears[2] * 3
    },
    spentPoints: function spentPoints() {
        return this.ascendants.reduce(function (a, b) {
            return a + b.spent()
        }, 0)
    },
    availablePoints: function availablePoints() {
        return this.totalPoints() - this.spentPoints()
    },
    clearAscendants: function clearAscendants() {
        if (DungeonManager.bossCount() < 10) {
            ToastManager.renderToast("cant_ascend_respec");
            return
        }
        this.ascendants.forEach(function (t) {
            return t.reset()
        })
    },
    upgradeAscendant: function upgradeAscendant(tid) {
        var ascendant = this.idToAscendant(tid);
        if (this.availablePoints() >= ascendant.cost()) {
            ascendant.upgrade()
        } else ToastManager.renderToast("cant_ascend_upgrade")
    }
};
var Ascendant = function () {
    function Ascendant(props) {
        _classCallCheck(this, Ascendant);
        Object.assign(this, props);
        this.lvl = 0;
        this.maxlvl = 3
    }
    _createClass(Ascendant, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.lvl = this.lvl;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.lvl = save.lvl
        }
    }, {
        key: "spent",
        value: function spent() {
            if (this.lvl === 0) return 0;
            if (this.lvl === 1) return 1;
            if (this.lvl === 2) return 3;
            if (this.lvl === 3) return 6
        }
    }, {
        key: "cost",
        value: function cost() {
            return this.lvl + 1
        }
    }, {
        key: "upgrade",
        value: function upgrade() {
            if (this.lvl === this.maxlvl) return;
            this.lvl += 1
        }
    }, {
        key: "rest",
        value: function rest() {
            this.lvl = 0
        }
    }]);
    return Ascendant
}();
var $merchantAscendButtons = $("#merchantAscendButtons");
var $merchantAchievements = $("#merchantAchievements");
var $merchantAscendants = $("#merchantAscendants");

function refreshAscension() {
    $merchantAscendButtons.empty();
    var d = $("<div/>").addClass("ascendDifficulty").appendTo($merchantAscendButtons);
    $("<div/>").addClass("ascendDifficultyHeading").html(displayText("difficulty")).appendTo(d);
    var d1 = $("<div/>").addClass("ascendDifficultyLeft").attr("id", "ascendDifficultyLeft").html(miscIcons.left).appendTo(d);
    if (AscensionManager.selectedDifficulty === RunDifficulty.NORMAL) d1.addClass("difficultyDisable");
    $("<div/>").addClass("ascendDifficultyButton").attr("id", "ascendDifficultyButton").html(displayText("difficulty_button_".concat(AscensionManager.selectedDifficulty))).appendTo(d);
    var d2 = $("<div/>").addClass("ascendDifficultyRight").attr("id", "ascendDifficultyRight").html(miscIcons.right).appendTo(d);
    if (AscensionManager.selectedDifficulty === RunDifficulty.HARDER) d2.addClass("difficultyDisable");
    $("<div/>").addClass("ascendDifficultyStart").attr("id", "ascendStart").html(displayText("ascend_start")).appendTo(d);
    populateAchievements()
}

function populateAchievements() {
    $merchantAchievements.empty().show();
    $merchantAscendants.hide();
    $("<div/>").addClass("ascensionButton").attr("id", "showAscendants").html(displayText("show_ascendants")).appendTo($merchantAchievements);
    var headings = {};
    AchievementManager.achievements.forEach(function (achievement) {
        if (!(achievement.heading in headings)) {
            var d = $("<div/>").addClass("achievementListing").appendTo($merchantAchievements);
            $("<div/>").addClass("achievementHeading").html(achievement.heading).appendTo(d);
            var d1 = $("<div/>").addClass("achievementList").appendTo(d);
            headings[achievement.heading] = d1
        }
        var d2 = $("<div/>").addClass("achievementBlock tooltip").attr({
            "data-tooltip": "achievement_desc",
            "data-tooltip-value": achievement.id
        }).appendTo(headings[achievement.heading]);
        $("<span/>").addClass("achievementName").html(achievement.icon).appendTo(d2);
        if (achievement.complete) {
            d2.addClass("achievementComplete")
        } else if (achievement.getStatus() === AchievementStatus.FAILED) {
            d2.addClass("achievementFailed")
        }
    })
}
$merchantAscendButtons.on("click", "#ascendDifficultyLeft", function (e) {
    e.preventDefault();
    if (AscensionManager.selectedDifficulty === RunDifficulty.NORMAL) return;
    AscensionManager.decreaseDifficulty();
    refreshAscendDifficulty()
});
$merchantAscendButtons.on("click", "#ascendDifficultyRight", function (e) {
    e.preventDefault();
    if (AscensionManager.selectedDifficulty === RunDifficulty.HARDER) return;
    AscensionManager.increaseDifficulty();
    refreshAscendDifficulty()
});
$merchantAscendButtons.on("click", "#ascendStart", function (e) {
    e.preventDefault();
    AscensionManager.restart()
});
$merchantAchievements.on("click", "#showAscendants", function (e) {
    e.preventDefault();
    showAscendants()
});
$merchantAscendants.on("click", "#showAchievements", function (e) {
    e.preventDefault();
    populateAchievements()
});

function refreshAscendDifficulty() {
    var $ascendDifficultyLeft = $("#ascendDifficultyLeft");
    var $ascendDifficultyRight = $("#ascendDifficultyRight");
    if (AscensionManager.selectedDifficulty === RunDifficulty.NORMAL) $ascendDifficultyLeft.addClass("difficultyDisable");
    else $ascendDifficultyLeft.removeClass("difficultyDisable");
    if (AscensionManager.selectedDifficulty === RunDifficulty.HARDER) $ascendDifficultyRight.addClass("difficultyDisable");
    else $ascendDifficultyRight.removeClass("difficultyDisable");
    $("#ascendDifficultyButton").html(displayText("difficulty_button_".concat(AscensionManager.selectedDifficulty)))
}

function showAscendants() {
    $merchantAscendants.empty().show();
    $merchantAchievements.hide();
    $("<div/>").addClass("ascensionButton").attr("id", "showAchievements").html(displayText("show_achievements")).appendTo($merchantAscendants);
    var d = $("<div/>").addClass("ascendantsTop").appendTo($merchantAscendants);
    $("<div/>").attr("id", "ascendantPts").html("You have ".concat(AscensionManager.availablePoints(), " points to spend.")).appendTo(d);
    $("<div/>").addClass("ascendantRespec").attr("id", "ascendantRespec").html(displayText("ascend_respec")).appendTo(d);
    var e = $("<div/>").addClass("ascendantsBottom").appendTo($merchantAscendants);
    $("<div/>").addClass("ascendantHeading").html(displayText("ascendant_heading")).appendTo(e);
    var e1 = $("<div/>").addClass("ascendantsList").appendTo(e);
    AscensionManager.ascendants.forEach(function (t) {
        var e1a = $("<div/>").addClass("ascendantBlock").appendTo(e1);
        var e1a1 = $("<div/>").addClass("ascendantHeadeer").appendTo(e1a);
        $("<span/>").addClass("ascendantIcon").html(t.icon).appendTo(e1a1);
        $("<span/>").addClass("ascendantName").html(t.name).appendTo(e1a1);
        $("<div/>").addClass("ascendantUpgrade").data("tid", t.id).html("Upgrade").appendTo(e1a1)
    })
}
$merchantAscendants.on("click", "#ascendantRespec", function (e) {
    e.preventDefault();
    AscensionManager.clearAscendants();
    showAscendants()
});
$merchantAscendants.on("click", ".ascendantUpgrade", function (e) {
    e.preventDefault();
    var tid = $(e.currentTarget).data("tid");
    AscensionManager.upgradeAscendant(tid);
    $("#ascendantPts").html("You have ".concat(AscensionManager.availablePoints(), " points to spend."))
});
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var ItemType = ["Armor", "Belts", "Cloaks", "Gauntlets", "Gloves", "Hats", "Helmets", "Knives", "Masks", "Pendants", "Rings", "Shields", "Shoes", "Staves", "Swords", "Thrown", "Tomes", "Trinkets", "Vests"];
var $RecipeResults = $("#RecipeResults");
var MasteryFilter = Object.freeze({
    BOTH: 0,
    MASTERED: 1,
    UNMASTERED: 2
});
var Item = function () {
    function Item(props) {
        _classCallCheck(this, Item);
        Object.assign(this, props);
        this.craftCount = 0;
        this.mastered = false;
        this.autoSell = "None";
        this.owned = false;
        this.goldComma = this.itemValueCommas(this.value);
        this.museum = createArray(4, 11)
    }
    _createClass(Item, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.craftCount = this.craftCount;
            save.autoSell = this.autoSell;
            save.owned = this.owned;
            save.mastered = this.mastered;
            save.museum = this.museum;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.craftCount = save.craftCount;
            this.autoSell = save.autoSell;
            this.owned = save.owned;
            if (save.mastered !== undefined) this.mastered = save.mastered;
            if (save.museum !== undefined) this.museum = save.museum
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.craftCount = 0;
            this.mastered = false;
            this.autoSell = "None";
            this.owned = false
        }
    }, {
        key: "itemDescription",
        value: function itemDescription() {
            return this.description
        }
    }, {
        key: "itemPicName",
        value: function itemPicName() {
            return "<img src='assets/images/recipes/" + this.type + "/" + this.id + ".png'>" + "<div class='item-name'>" + this.name + "</div>"
        }
    }, {
        key: "itemName",
        value: function itemName() {
            return "<div class='item-name'>" + this.name + "</div>"
        }
    }, {
        key: "itemPic",
        value: function itemPic() {
            return "<img src='assets/images/recipes/" + this.type + "/" + this.id + ".png'>"
        }
    }, {
        key: "itemLevel",
        value: function itemLevel() {
            return '<div class="level_text">LVL</div><div class="level_integer">'.concat(this.lvl, "</div>")
        }
    }, {
        key: "itemValueCommas",
        value: function itemValueCommas() {
            return formatWithCommas(this.value)
        }
    }, {
        key: "itemValueFormatted",
        value: function itemValueFormatted() {
            return formatToUnits(this.value, 2)
        }
    }, {
        key: "itemValue",
        value: function itemValue() {
            return this.value
        }
    }, {
        key: "visualizeResAndMat",
        value: function visualizeResAndMat() {
            var d = $("<div/>").addClass("itemCost");
            this.gcost.forEach(function (type) {
                d.append($("<div/>").addClass("indvCost resCost tooltip").attr({
                    "data-tooltip": "".concat(type, "_worker")
                }).html(miscIcons[type]))
            });
            if (this.mcost === null) return d;
            for (var _i = 0, _Object$entries = Object.entries(this.mcost); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    material = _Object$entries$_i[0],
                    amt = _Object$entries$_i[1];
                var mat = ResourceManager.idToMaterial(material);
                var d1 = $("<div/>").addClass("indvCost matCost tooltip").attr("id", "vr" + this.id).attr({
                    "data-tooltip": "material_desc",
                    "data-tooltip-value": mat.id
                }).html(ResourceManager.formatCost(material, amt));
                if (mat.id === "M001") d1.addClass("matGold").attr({
                    "data-tooltip": "gold_value",
                    "data-tooltip-value": formatWithCommas(amt)
                });
                d.append(d1)
            }
            return d
        }
    }, {
        key: "recipeListStats",
        value: function recipeListStats(isEpic) {
            var d = $("<div/>").addClass("recipeStatList");
            var pow = isEpic ? this.pow * this.pts * miscLoadedValues.rarityMod[3] : this.pow * this.pts;
            var hp = isEpic ? 9 * this.hp * this.pts * miscLoadedValues.rarityMod[3] : 9 * this.hp * this.pts;
            if (pow > 0) $("<div/>").addClass("recipeStat tooltip").attr("data-tooltip", "pow").html("".concat(miscIcons.pow, '<span class="statValue">').concat(pow, "</span>")).appendTo(d);
            if (hp > 0) $("<div/>").addClass("recipeStat tooltip").attr("data-tooltip", "hp").html("".concat(miscIcons.hp, '<span class="statValue">').concat(hp, "</span>")).appendTo(d);
            return d
        }
    }, {
        key: "count",
        value: function count() {
            return Math.min(this.craftCount, 100)
        }
    }, {
        key: "addCount",
        value: function addCount() {
            this.craftCount += 1
        }
    }, {
        key: "attemptMastery",
        value: function attemptMastery() {
            if (this.isMastered()) return;
            if (this.canMaster() > 0) return ToastManager.renderToast("recipe_master_craft_more", this.canMaster());
            var masteryCost = this.masteryCost();
            if (ResourceManager.materialAvailable(masteryCost.id) < masteryCost.amt) {
                ToastManager.renderToast("recipe_master_need_more");
                return
            }
            ResourceManager.addMaterial(masteryCost.id, -masteryCost.amt);
            this.mastered = true;
            ToastManager.renderToast("master_recipe", this.name);
            refreshCraftedCount(this);
            destroyTooltip();
            refreshProgress();
            refreshRecipeMastery()
        }
    }, {
        key: "isMastered",
        value: function isMastered() {
            if (this.recipeType === "building" || this.recipeType === "Trinket") return false;
            return this.mastered
        }
    }, {
        key: "autoSellToggle",
        value: function autoSellToggle() {
            if (this.autoSell === "None") this.autoSell = "Common";
            else if (this.autoSell === "Common") this.autoSell = "Good";
            else if (this.autoSell === "Good") this.autoSell = "Great";
            else if (this.autoSell === "Great") this.autoSell = "Epic";
            else this.autoSell = "None";
            return this.autoSell
        }
    }, {
        key: "setCanCraft",
        value: function setCanCraft(canProduceBucket) {
            var needBucket = groupArray(this.gcost);
            this.canProduce = true;
            for (var _i2 = 0, _Object$entries2 = Object.entries(needBucket); _i2 < _Object$entries2.length; _i2++) {
                var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                    type = _Object$entries2$_i[0],
                    amt = _Object$entries2$_i[1];
                if (canProduceBucket[type] < amt) {
                    this.canProduce = false
                }
            }
        }
    }, {
        key: "material",
        value: function material() {
            if (!this.mcost) return "M201";
            return Object.keys(this.mcost)[0]
        }
    }, {
        key: "reducedCraft",
        value: function reducedCraft() {
            return Math.floor(this.craftTime * Museum.craftTime(this.id))
        }
    }, {
        key: "canMaster",
        value: function canMaster() {
            return Math.max(0, this.minCraft - this.craftCount)
        }
    }, {
        key: "masteryCost",
        value: function masteryCost() {
            var amt = Math.max(0, this.masteryTotal - this.masteryAmt * (this.craftCount - this.minCraft));
            var material = this.mcost ? Object.keys(this.mcost)[0] : "M201";
            return new idAmt(material, amt)
        }
    }]);
    return Item
}();
var recipeList = {
    recipes: [],
    recipeFilterScope: "itemType",
    recipeFilterType: "Knives",
    recipeFilterString: "",
    recipeSortType: "default",
    masteryFilter: MasteryFilter.BOTH,
    addItem: function addItem(item) {
        this.recipes.push(item)
    },
    createSave: function createSave() {
        var save = [];
        this.recipes.forEach(function (r) {
            save.push(r.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.forEach(function (i) {
            var rec = _this.idToItem(i.id);
            if (rec !== undefined) rec.loadSave(i)
        })
    },
    clearProgress: function clearProgress() {
        this.recipeFilterScope = "itemType";
        this.recipeFilterType = "Knives";
        this.recipeFilterString = "";
        this.recipeSortType = "default";
        this.masteryFilter = MasteryFilter.BOTH;
        this.recipes.forEach(function (r) {
            return r.clearProgress()
        })
    },
    filteredRecipeList: function filteredRecipeList() {
        var _this2 = this;
        var cleanString = this.recipeFilterString.toLowerCase();
        if (this.recipeFilterType === "default") return this.recipes.filter(function (r) {
            return r.owned && r.name.toLowerCase().includes(cleanString) && r.type !== "Trinkets"
        });
        if (this.masteryFilter === MasteryFilter.BOTH && this.recipeFilterScope === "level") return this.recipes.filter(function (r) {
            return r.owned && r.recipeType === "normal" && r.lvl === _this2.recipeFilterType && r.type !== "Trinkets"
        });
        if (this.masteryFilter === MasteryFilter.UNMASTERED && this.recipeFilterScope === "level") return this.recipes.filter(function (r) {
            return r.owned && !r.mastered && r.recipeType === "normal" && r.lvl === _this2.recipeFilterType && r.type !== "Trinkets"
        });
        if (this.masteryFilter === MasteryFilter.MASTERED && this.recipeFilterScope === "level") return this.recipes.filter(function (r) {
            return r.owned && r.mastered && r.recipeType === "normal" && r.lvl === _this2.recipeFilterType && r.type !== "Trinkets"
        });
        if (this.masteryFilter === MasteryFilter.BOTH && this.recipeFilterScope === "itemType") return this.recipes.filter(function (r) {
            return r.owned && r.type === _this2.recipeFilterType && r.type !== "Trinkets"
        });
        if (this.masteryFilter === MasteryFilter.UNMASTERED && this.recipeFilterScope === "itemType") return this.recipes.filter(function (r) {
            return r.owned && !r.mastered && r.type === _this2.recipeFilterType && r.type !== "Trinkets"
        });
        if (this.masteryFilter === MasteryFilter.MASTERED && this.recipeFilterScope === "itemType") return this.recipes.filter(function (r) {
            return r.owned && r.mastered && r.type === _this2.recipeFilterType && r.type !== "Trinkets"
        })
    },
    unlockTrinketRecipe: function unlockTrinketRecipe(recipeID) {
        var recipe = this.idToItem(recipeID);
        recipeList.recipes.filter(function (r) {
            return r.name === recipe.name
        }).forEach(function (r) {
            r.owned = false
        });
        recipe.owned = true;
        recipeFilterList();
        refreshRecipeFilters();
        checkCraftableStatus()
    },
    idToItem: function idToItem(id) {
        return this.recipes.find(function (recipe) {
            return recipe.id === id
        })
    },
    ownAtLeastOne: function ownAtLeastOne(type) {
        return this.recipes.some(function (r) {
            return r.type === type && r.owned
        })
    },
    masteryCount: function masteryCount() {
        return this.recipes.filter(function (r) {
            return r.isMastered() && r.recipeType === "normal"
        }).length
    },
    recipeCount: function recipeCount() {
        return this.recipes.filter(function (r) {
            return r.recipeType === "normal" && r.type !== "Trinkets"
        }).length
    },
    filterByType: function filterByType(type) {
        return this.recipes.filter(function (r) {
            return r.type === type
        })
    },
    canCraft: function canCraft() {
        var canProduce = WorkerManager.freeWorkers();
        this.recipes.forEach(function (recipe) {
            recipe.setCanCraft(canProduce)
        });
        recipeCanCraft()
    },
    attemptMastery: function attemptMastery(recipeID) {
        this.idToItem(recipeID).attemptMastery()
    },
    needMastery: function needMastery() {
        return this.recipes.filter(function (r) {
            return r.owned && !r.mastered
        })
    },
    availablePurchase: function availablePurchase() {
        var maxTier = DungeonManager.bossCount() + 1;
        return this.recipes.filter(function (r) {
            return !r.owned && r.lvl <= maxTier && r.canBuy
        })
    },
    ownedByLvl: function ownedByLvl(lvl) {
        return this.recipes.filter(function (r) {
            return r.owned && r.canBuy && r.lvl === lvl
        }).length
    },
    highestByType: function highestByType(type) {
        var choices = this.recipes.filter(function (r) {
            return r.owned && r.type === type
        });
        if (choices.length === 0) return null;
        return choices.sort(function (a, b) {
            return b.lvl - a.lvl
        })[0]
    }
};
var $recipeActionButton = $(".recipeActionButton");

function refreshRecipeFilters() {
    $recipeFilter.empty();
    if (recipeList.recipeFilterScope === "itemType") {
        ItemType.forEach(function (itemtype) {
            if (itemtype !== "Trinkets" && recipeList.ownAtLeastOne(itemtype)) {
                var recipeSelect = $("<div/>").addClass("recipeSelect").attr({
                    id: "rf".concat(itemtype)
                }).data("itemType", itemtype).appendTo($recipeFilter);
                if (itemtype === recipeList.recipeFilterType) recipeSelect.addClass("selectedRecipeFilter");
                $("<div/>").addClass("recipeSelectIcon").html('<img src="assets/images/recipeFilter/'.concat(itemtype, '32.png" />')).appendTo(recipeSelect);
                $("<div/>").addClass("recipeSelectName").html(itemtype).appendTo(recipeSelect)
            }
        })
    }
    if (recipeList.recipeFilterScope === "level") {
        var lvls = [];
        recipeList.recipes.filter(function (r) {
            return r.type !== "Trinkets"
        }).forEach(function (recipe) {
            if (!lvls.includes(recipe.lvl) && recipe.owned) lvls.push(recipe.lvl)
        });
        for (var i = 1; i <= lvls.length; i++) {
            var recipeSelect = $("<div/>").addClass("recipeSelect").data("level", i).appendTo($recipeFilter);
            if (i === recipeList.recipeFilterType) recipeSelect.addClass("selectedRecipeFilter");
            $("<div/>").addClass("recipeSelectIcon").html('<i class="fas fa-sort-numeric-up-alt"></i>').appendTo(recipeSelect);
            $("<div/>").addClass("recipeSelectName").html("Level " + i).appendTo(recipeSelect)
        }
    }
}
var $recipeContents = $("#recipeContents");
var $recipeFilter = $("#recipeFilter");
var $recipeFilterScope = $("#recipeFilterScope");
var sortOrder = {
    defaultAsc: [],
    recipeDivDict: {},
    recipeDivs: null
};

function initializeRecipes() {
    $("#recipeFilterScope").empty();
    $("<div/>").addClass("recipeScopeName selectedRecipeScope").attr("id", "rs-itemType").html("Type").data("recipeScope", "itemType").appendTo($recipeFilterScope);
    $("<div/>").addClass("recipeScopeName").attr("id", "rs-Level").html("Level").data("recipeScope", "level").appendTo($recipeFilterScope);
    recipeList.recipes.filter(function (r) {
        return r.recipeType === "normal" && r.type !== "Trinkets"
    }).forEach(function (recipe) {
        var recipeCardInfo = $("<div/>").addClass("recipeCardInfo").append(recipeCardFront(recipe));
        var recipeCardContainer = $("<div/>").addClass("recipeCardContainer").data("recipeID", recipe.id).attr("id", "rr" + recipe.id).append(recipeCardInfo).hide();
        $recipeContents.prepend(recipeCardContainer);
        sortOrder.recipeDivDict[recipe.id] = recipeCardContainer
    });
    var tempList = recipeList.recipes.filter(function (r) {
        return r.recipeType === "normal"
    });
    sortOrder.defaultAsc = tempList.sort(function (a, b) {
        return b.id.localeCompare(a.id)
    }).map(function (r) {
        return r.id
    });
    sortOrder.recipeDivs = $(".recipeCardContainer")
}

function recipeFilterList() {
    Object.values(sortOrder.recipeDivDict).forEach(function (div) {
        return div.hide()
    });
    recipeList.filteredRecipeList().map(function (r) {
        return r.id
    }).forEach(function (recipe) {
        sortOrder.recipeDivDict[recipe].show()
    })
}

function recipeCardFront(recipe, isTrinket) {
    var td1 = $("<div/>").addClass("recipeName").append(recipe.itemPicName());
    var td2 = $("<div/>").addClass("recipeDescription tooltip").attr({
        "data-tooltip": "recipe_desc",
        "data-tooltip-value": recipe.id
    }).html("<i class='fas fa-info-circle'></i>");
    var td3 = $("<div/>").addClass("itemLevel").html(recipe.itemLevel());
    if (recipe.recipeType !== "normal") td3.hide();
    var td4 = $("<div/>").addClass("recipecostdiv").attr("id", "rcd" + recipe.id);
    if (recipe.isMastered()) td4.addClass("isMastered");
    var td4a = $("<div/>").addClass("reciperesdiv").html(recipe.visualizeResAndMat());
    if (recipe.isMastered()) td4a.addClass("isMastered");
    td4.append(td4a);
    var recipeStats = $("<div/>").addClass("recipeStatsContainer");
    var gearStat = $("<div/>").addClass("recipeStats").html(recipe.recipeListStats(isTrinket));
    var goldStat = $("<div/>").addClass("recipeStat tooltip").attr({
        "data-tooltip": "recipe_gold",
        "data-tooltip-value": recipe.id
    }).html(miscIcons.gold);
    $("<div/>").addClass("statValue").html(recipe.itemValueFormatted()).appendTo(goldStat);
    var timeStat = $("<div/>").addClass("recipeStat recipeTime tooltip").attr("data-tooltip", "crafting_time").html('<i class="fas fa-clock"></i>');
    $("<div/>").addClass("statValue").attr("id", "rt".concat(recipe.id)).html(msToTime(recipe.reducedCraft())).appendTo(timeStat);
    if (recipe.recipeType !== "normal") recipeStats.append(timeStat);
    else recipeStats.append(gearStat, goldStat, timeStat);
    var td6 = $("<div/>").addClass("recipeCountAndCraft");
    var td6a = $("<div/>").addClass("recipeMasteredStatus tooltip").attr({
        "data-tooltip": "recipe_unmastered"
    }).attr("id", "rms" + recipe.id).data("rid", recipe.id).html('<i class="fas fa-star-christmas"></i>');
    if (recipe.isMastered()) td6a.addClass("isMastered").attr({
        "data-tooltip": "recipe_mastered"
    }).html('<i class="fas fa-star-christmas"></i>');
    var total = flattenArray(recipe.museum).length;
    var current = flattenArray(recipe.museum).filter(function (r) {
        return r
    }).length;
    var progress = $("<div/>").addClass("recipeMuseumProgress tooltip").data("recipeID", recipe.id).attr({
        id: "rmm" + recipe.id,
        "data-tooltip": "recipe_museum_progress"
    });
    if (TownManager.idToBuilding("TB008").status < 2) progress.addClass("disabled");
    if (current !== total) $("<div/>").addClass("museumRecipeProgressText").html("".concat(current, " / ").concat(total)).appendTo(progress);
    else {
        progress.addClass("museumRecipeCompleted");
        $("<div/>").addClass("museumRecipeProgressIcon").html(miscIcons.checkmark).appendTo(progress)
    }
    if (recipe.recipeType !== "normal" || recipe.type === "Trinkets") {
        progress.hide();
        td6a.hide()
    }
    var td6b = $("<div/>").addClass("recipeCraft rr".concat(recipe.id)).attr("id", recipe.id).html('<i class="fas fa-hammer"></i><span>Craft</span>');
    recipe.recipeDiv = td6b;
    td6.append(td6a, progress, td6b);
    var e = $("<div/>").addClass("recipeCardFront").append(td1, td2, td3, td4, recipeStats, td6);
    if (isTrinket) {
        e.addClass("recipeCardTrinket");
        var rarityStat = $("<div/>").addClass("recipeStat rarityStat RT3 tooltip").attr("data-tooltip", "recipe_rarity").html(miscIcons.rarity).appendTo(recipeStats);
        $("<div/>").addClass("statValue").html("Epic").appendTo(rarityStat)
    }
    return e
}

function refreshCraftTimes() {
    recipeList.recipes.forEach(function (recipe) {
        $("#rt".concat(recipe.id)).html(msToTime(recipe.reducedCraft()))
    })
}

function refreshMuseumRecipeCard(recipe) {
    if (!recipe.rmm) recipe.rmm = $("#rmm" + recipe.id);
    if (TownManager.idToBuilding("TB008").status >= 2) recipe.rmm.removeClass("disabled");
    var total = flattenArray(recipe.museum).length;
    var current = flattenArray(recipe.museum).filter(function (r) {
        return r
    }).length;
    if (current !== total) recipe.rmm.find(".museumRecipeProgressText").html("".concat(current, " / ").concat(total));
    else {
        recipe.rmm.empty();
        recipe.rmm.addClass("museumRecipeCompleted");
        $("<div/>").addClass("museumRecipeProgressIcon").html(miscIcons.checkmark).appendTo(recipe.rmm)
    }
}

function refreshCraftedCount(recipe) {
    if (!recipe.rbd) recipe.rbd = $("#rbd" + recipe.id);
    if (!recipe.rms) recipe.rms = $("#rms" + recipe.id);
    if (!recipe.rcd) recipe.rcd = $("#rcd" + recipe.id);
    var material = recipe.mcost ? Object.keys(recipe.mcost)[0] : "M201";
    var masteryCost = recipe.masteryCost();
    $("<div/>").addClass("actionButtonCardText").html(displayText("recipes_card_mastery_master_button")).appendTo(recipe.rcc);
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        "data-tooltip": "material_desc",
        "data-tooltip-value": masteryCost.id
    }).html("".concat(ResourceManager.idToMaterial(masteryCost.id).img, " ").concat(masteryCost.amt)).appendTo(recipe.rcc);
    if (recipe.isMastered()) {
        recipe.rbd.addClass("isMastered").html(displayText("recipes_card_mastery_attained_notice"));
        recipe.rms.addClass("isMastered").attr({
            "data-tooltip": "recipe_mastered"
        }).html('<i class="fas fa-star-christmas"></i>');
        recipe.rcd.find(".matCost").attr({
            "data-tooltip": "material_desc_mastered",
            "data-tooltip-value": material.id
        }).addClass("isMastered")
    }
    if (openedTabEquals("merchant_mastery")) refreshRecipeMasteryAmt(recipe)
}

function recipeCanCraft() {
    recipeList.recipes.forEach(function (recipe) {
        if (recipe.recipeDiv === undefined) return;
        if (recipe.canProduce && actionSlotManager.slots.length < actionSlotManager.maxSlots) recipe.recipeDiv.removeClass("recipeCraftDisable");
        else recipe.recipeDiv.addClass("recipeCraftDisable")
    })
}
var $blueprintUnlock = $("#BlueprintUnlock");
var cacheBlueprintType = null;
$recipeContents.on("click", ".recipeCraft", function (e) {
    e.preventDefault();
    var itemID = $(e.currentTarget).attr("id");
    actionSlotManager.addSlot(itemID)
});
var $buildingRecipes2 = $("#buildingRecipes");
$buildingRecipes2.on("click", ".recipeCraft", function (e) {
    e.preventDefault();
    var itemID = $(e.currentTarget).attr("id");
    actionSlotManager.addSlot(itemID)
});
var $recipeSortInput = $("#recipeSortInput");

function invokeSearch(string) {
    recipeList.recipeFilterString = string;
    recipeList.recipeFilterType = "default";
    $(".recipeSelect").removeClass("selectedRecipeFilter");
    recipeFilterList()
}
var $recipeSortButton = $(".recipeSortButton");
$recipeSortButton.on("click", function (e) {
    e.preventDefault();
    var searchString = $recipeSortInput.val();
    if (searchString.length < 2) return ToastManager.renderToast("search_length_invalid");
    invokeSearch(searchString)
});
$recipeSortInput.on("keydown", function (e) {
    if (e.keyCode !== 13) return;
    e.preventDefault();
    var searchString = $recipeSortInput.val();
    if (searchString.length < 2) return ToastManager.renderToast("search_length_invalid");
    invokeSearch(searchString)
});
$recipeSortInput.on("focus", function (e) {
    settings.dialogStatus = 1;
    saveSettings()
});
$recipeSortInput.on("blur", function (e) {
    settings.dialogStatus = 0;
    saveSettings()
});
$recipeFilter.on("click", ".recipeSelect", function (e) {
    e.preventDefault();
    if (recipeList.recipeFilterType === $(e.currentTarget).data("itemType") || recipeList.recipeFilterType === $(e.currentTarget).data("level")) return;
    recipeList.recipeFilterType = $(e.currentTarget).data(recipeList.recipeFilterScope);
    $(".recipeSelect").removeClass("selectedRecipeFilter");
    $(e.currentTarget).addClass("selectedRecipeFilter");
    recipeFilterList()
});
$recipeFilterScope.on("click", ".recipeScopeName", function (e) {
    e.preventDefault();
    if (recipeList.recipeFilterScope === $(e.currentTarget).data("recipeScope")) return;
    recipeList.recipeFilterScope = $(e.currentTarget).data("recipeScope");
    if (recipeList.recipeFilterScope === "level") recipeList.recipeFilterType = 1;
    else if (recipeList.recipeFilterScope === "itemType") recipeList.recipeFilterType = "Knives";
    $(".recipeScopeName").removeClass("selectedRecipeScope");
    $(e.currentTarget).addClass("selectedRecipeScope");
    refreshRecipeFilters();
    recipeFilterList()
});
var $recipeMasterySort = $("#recipeMasterySort");
$recipeMasterySort.on("click", function (e) {
    e.preventDefault();
    var currentType = $(e.currentTarget).attr("data-sorttype");
    if (currentType === "All Recipes") {
        $(e.currentTarget).html("Unmastered Only");
        $(e.currentTarget).attr("data-sorttype","Unmastered Only");
        recipeList.masteryFilter = MasteryFilter.UNMASTERED
    }
    if (currentType === "Unmastered Only") {
        $(e.currentTarget).html("Mastered Only");
        $(e.currentTarget).attr("data-sorttype","Mastered Only");
        recipeList.masteryFilter = MasteryFilter.MASTERED
    }
    if (currentType === "Mastered Only") {
        $(e.currentTarget).html("All Recipes");
        $(e.currentTarget).attr("data-sorttype","All Recipes");
        recipeList.masteryFilter = MasteryFilter.BOTH
    }
    recipeFilterList()
});
$recipeContents.on("click", ".recipeMasteredStatus", function (e) {
    e.preventDefault();
    var rid = $(e.currentTarget).data("rid");
    recipeList.attemptMastery(rid)
});
$recipeContents.on("click", ".recipeMuseumProgress", function (e) {
    e.preventDefault();
    openTab("town_museum");
    var id = $(e.currentTarget).data("recipeID");
    var recipe = recipeList.idToItem(id);
    showMuseumType(recipe.type);
    generateContributionsList(recipe)
});
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var Material = function () {
    function Material(props) {
        _classCallCheck(this, Material);
        Object.assign(this, props);
        this.amt = 0;
        this.img = "<img src='assets/images/resources/".concat(this.id, ".png' alt='").concat(this.name, "'>");
        this.seen = false
    }
    _createClass(Material, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.amt = this.amt;
            save.seen = this.seen;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.amt = save.amt;
            this.seen = save.seen
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.amt = 0;
            this.seen = 0
        }
    }]);
    return Material
}();
var $goldSidebar = $("#goldSidebar");
var $goldSidebarAmt = $("#goldSidebarAmt");
var ResourceManager = {
    materials: [],
    uncapMats: false,
    createSave: function createSave() {
        var save = [];
        this.materials.forEach(function (m) {
            save.push(m.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.forEach(function (m) {
            var mat = _this.idToMaterial(m.id);
            if (mat === undefined) return;
            mat.loadSave(m)
        })
    },
    clearProgress: function clearProgress() {
        this.materials.forEach(function (m) {
            return m.clearProgress()
        })
    },
    addNewMaterial: function addNewMaterial(material) {
        this.materials.push(material)
    },
    addMaterial: function addMaterial(res, amt, skipAnimation) {
        var mat = this.materials.find(function (mat) {
            return mat.id === res
        });
        mat.amt += amt;
        if (mat.id !== "M001" && !this.uncapMats) mat.amt = Math.min(mat.amt, this.materialCap());
        mat.seen = true;
        if (skipAnimation) return;
        refreshMaterial(res)
    },
    capMats: function capMats() {
        var _this2 = this;
        this.materials.forEach(function (mat) {
            if (mat.id === "M001") return;
            mat.amt = Math.min(mat.amt, _this2.materialCap())
        })
    },
    materialCap: function materialCap() {
        var total = 1e3;
        if (Shop.alreadyPurchased("AL1030")) total += 500;
        if (Shop.alreadyPurchased("AL1031")) total += 500;
        if (Shop.alreadyPurchased("AL1032")) total += 1e3;
        if (Shop.alreadyPurchased("AL1033")) total += 1e3;
        return total
    },
    canAffordMaterial: function canAffordMaterial(item) {
        if (item.mcost === null) return true;
        for (var _i = 0, _Object$entries = Object.entries(item.mcost); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                material = _Object$entries$_i[0],
                amt = _Object$entries$_i[1];
            if (amt > this.materialAvailable(material)) return false
        }
        return true
    },
    deductMoney: function deductMoney(amt) {
        this.addMaterial("M001", -amt)
    },
    addGold: function addGold(amt) {
        this.addMaterial("M001", amt)
    },
    deductMaterial: function deductMaterial(item, skipAnimation) {
        if (item.mcost === null) return;
        for (var _i2 = 0, _Object$entries2 = Object.entries(item.mcost); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                resource = _Object$entries2$_i[0],
                amt = _Object$entries2$_i[1];
            this.addMaterial(resource, -amt, skipAnimation)
        }
    },
    refundMaterial: function refundMaterial(item) {
        if (item.mcost === null) return;
        for (var _i3 = 0, _Object$entries3 = Object.entries(item.mcost); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
                resource = _Object$entries3$_i[0],
                amt = _Object$entries3$_i[1];
            this.addMaterial(resource, amt)
        }
    },
    materialIcon: function materialIcon(type) {
        if (type[0] === "R") return recipeList.idToItem(type).itemPic();
        if (type[0] === "G") return GuildManager.idToGuild(type).icon;
        return '<img src="assets/images/resources/'.concat(type, '.png" alt="').concat(type, '">')
    },
    formatCost: function formatCost(res, amt) {
        return '<div class="matIcon">'.concat(this.materialIcon(res), '</div> <span class="matAmt">').concat(formatToUnits(amt, 2), "</span>")
    },
    sidebarMaterial: function sidebarMaterial(resID) {
        var res = this.materials.find(function (resource) {
            return resource.id == resID
        });
        return "".concat(this.materialIcon(resID), "&nbsp;&nbsp").concat(res.amt)
    },
    available: function available(res, amt) {
        var item = recipeList.idToItem(res);
        if (item === undefined) {
            return this.idToMaterial(res).amt >= amt
        }
        return Inventory.itemCount(res, 0) >= amt
    },
    materialAvailable: function materialAvailable(matID) {
        if (matID.charAt(0) === "R") {
            return Inventory.itemCount(matID, 0)
        }
        return this.materials.find(function (mat) {
            return mat.id === matID
        }).amt
    },
    materialsSeen: function materialsSeen() {
        return ResourceManager.materials.filter(function (mat) {
            return mat.id !== "M001"
        }).some(function (mat) {
            return mat.seen
        })
    },
    nameForWorkerSac: function nameForWorkerSac(mat) {
        var item = recipeList.idToItem(mat);
        if (item === undefined) return this.idToMaterial(mat).name;
        return item.name
    },
    idToMaterial: function idToMaterial(matID) {
        return this.materials.find(function (m) {
            return m.id === matID
        })
    },
    isAMaterial: function isAMaterial(matID) {
        return this.materials.some(function (m) {
            return m.id === matID
        })
    },
    reOrderMats: function reOrderMats() {
        this.materials.sort(function (a, b) {
            return a.tier - b.tier
        })
    },
    fortuneResource: function fortuneResource(lvl) {
        var resources = this.materials.filter(function (r) {
            return r.fortuneLvl === lvl
        });
        var week = currentWeek();
        var good = resources[week % resources.length].id;
        var great = resources[(week + 1) % resources.length].id;
        var epic = resources[(week + 2) % resources.length].id;
        return [good, great, epic]
    },
    materialSeenDungeon: function materialSeenDungeon(dungeonID) {
        var _this3 = this;
        if (dungeonID === "D004") return [];
        var matids = MobManager.allMobDropsByDungeon(dungeonID);
        var materials = matids.map(function (m) {
            return _this3.idToMaterial(m)
        });
        return materials.filter(function (m) {
            return m.seen
        })
    }
};
var $materials = $("#materials");

function initializeMats() {
    ResourceManager.reOrderMats();
    ResourceManager.materials.forEach(function (mat) {
        if (mat.id != "M001") {
            var d = $("<div/>").addClass("material tooltip").attr({
                "data-tooltip": "material_desc",
                "data-tooltip-value": mat.id
            }).attr("id", mat.id);
            var d1 = $("<div/>").addClass("materialName").html(mat.img);
            var d2 = $("<div/>").addClass("materialAmt").attr("id", "amt" + mat.id).html(formatToUnits(mat.amt, 1));
            d.append(d1, d2);
            d.hide();
            $materials.append(d)
        }
    })
}
var $noMaterialDiv = $("#noMaterialDiv");

function hardMatRefresh() {
    if (!ResourceManager.materialsSeen()) $noMaterialDiv.show();
    else $noMaterialDiv.hide();
    ResourceManager.materials.forEach(function (mat) {
        if (!mat.seen) $("#" + mat.id).hide();
        else $("#" + mat.id).show();
        $("#amt" + mat.id).html(formatToUnits(mat.amt, 1));
        if (mat.id === "M001") {
            if (mat.amt === null) mat.amt = 0;
            $goldSidebarAmt.html(formatToUnits(mat.amt, 2));
            $goldSidebar.addClass("tooltip").attr({
                "data-tooltip": "gold_value",
                "data-tooltip-value": formatWithCommas(mat.amt)
            })
        }
    })
}

function refreshMaterial(matID) {
    var mat = ResourceManager.idToMaterial(matID);
    if (!ResourceManager.materialsSeen()) $noMaterialDiv.show();
    else $noMaterialDiv.hide();
    if (!mat.seen) $("#" + matID).hide();
    else $("#" + matID).show();
    $("#amt" + matID).html(formatToUnits(mat.amt, 2));
    if (mat.type === "dungeon") {
        var dungeonid = DungeonManager.dungeonByMat(matID).id;
        $("#dsbr" + dungeonid).html(mat.amt);
        return
    }
    if (mat.type !== "gold") return;
    $goldSidebarAmt.html(formatToUnits(mat.amt, 1));
    $goldSidebar.addClass("tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": formatWithCommas(mat.amt)
    })
}
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var TargetType = Object.freeze({
    FIRST: 0,
    SECOND: 1,
    THIRD: 2,
    FOURTH: 3,
    SELF: 5,
    ALL: 6,
    MISSINGHP: 7,
    LOWESTHP: 8,
    BEHIND: 9,
    CLEAVE: 10,
    BEFORE: 11,
    AFTER: 12,
    ADJACENT: 13,
    MIRROR: 14,
    RANDOM: 15,
    ENEMIES: 16,
    TWOLEASTMAX: 17,
    SWIPE: 18,
    FIRSTMOXIE: 19,
    HIGHESTPOW: 20
});
var SideType = Object.freeze({
    ALLIES: 0,
    ENEMIES: 1
});
var CombatManager = {
    refreshLater: false,
    executeTurn: function executeTurn(dungeon) {
        var attacker = dungeon.order.currentTurn();
        var allies = attacker.unitType === "hero" ? dungeon.party.heroes : dungeon.mobs;
        var enemies = attacker.unitType === "hero" ? dungeon.mobs : dungeon.party.heroes;
        var attack = attacker.getSkill();
        var combatParams = new combatRoundParams(attacker, allies, enemies, attack, dungeon.id);
        this.execute(combatParams)
    },
    execute: function execute(combatRound) {
        SkillManager.skillEffects[combatRound.attack.id](combatRound);
        combatRound.attacker.buffTick("onHitting");
        if (combatRound.attack.id !== "S0000") combatRound.attacker.buffTick("onSpecial");
        if (combatRound.attacker.getRuneCount(RuneType.WATER) >= 6 && combatRound.attack.id !== "S0000") {
            combatRound.allies.forEach(function (ally) {
                ally.heal(Math.floor(combatRound.attacker.getPow() * .1))
            })
        }
        if (combatRound.attacker.getRuneCount(RuneType.THUNDER) >= 6 && combatRound.attack.id !== "S0000") {
            BuffManager.generateBuff("B3001", combatRound.attacker, Math.floor(combatRound.power * .2))
        }
    }
};
var combatRoundParams = function () {
    function combatRoundParams(attacker, allies, enemies, attack, dungeonid) {
        _classCallCheck(this, combatRoundParams);
        this.attacker = attacker;
        this.allies = allies;
        this.enemies = enemies;
        this.attack = attack;
        this.power = Math.floor(this.attacker.getPow(false, this.attack.id) * this.attack.powMod);
        this.dungeonid = dungeonid
    }
    _createClass(combatRoundParams, [{
        key: "getTarget",
        value: function getTarget(target, side) {
            var _this = this;
            var isNormal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var aliveEnemys = this.enemies.filter(function (h) {
                return h.alive() && !h.phase(_this.attacker.type)
            });
            var enemies = aliveEnemys.some(function (h) {
                return h.mark(_this.attacker.type)
            }) ? aliveEnemys.filter(function (h) {
                return h.mark(_this.attacker.type)
            }) : aliveEnemys;
            var aliveAllies = this.allies.filter(function (h) {
                return h.alive()
            });
            var living = aliveAllies;
            var myself = [this.attacker];
            if (this.attacker.confusion(isNormal) && side === SideType.ALLIES) {
                living = enemies;
                myself = [enemies[0]]
            }
            if (!this.attacker.confusion(isNormal) && side === SideType.ENEMIES) living = enemies;
            if (target === TargetType.FIRST) return [living[0]];
            if (target === TargetType.SECOND) {
                if (living.length === 1) return [living[0]];
                return [living[1]]
            }
            if (target === TargetType.THIRD) {
                if (living.length === 1) return [living[0]];
                if (living.length === 2) return [living[1]];
                return [living[2]]
            }
            if (target === TargetType.FOURTH) return [living[living.length - 1]];
            if (target === TargetType.SELF) return myself;
            if (target === TargetType.ALL) return living;
            if (target === TargetType.MISSINGHP) return [living.reduce(function (a, b) {
                return a.missingHP() >= b.missingHP() ? a : b
            })];
            if (target === TargetType.LOWESTHP) return [living.reduce(function (a, b) {
                return a.hp < b.hp ? a : b
            })];
            if (target === TargetType.BEFORE) {
                var uid = this.attacker.uniqueid;
                var indx = living.findIndex(function (h) {
                    return h.uniqueid === uid
                });
                if (indx === 0) return null;
                return [living[indx - 1]]
            }
            if (target === TargetType.AFTER) {
                var _uid = this.attacker.uniqueid;
                var _indx = living.findIndex(function (h) {
                    return h.uniqueid === _uid
                });
                if (_indx === living.length - 1) return null;
                return [living[_indx + 1]]
            }
            if (target === TargetType.BEFORE) {
                var _uid2 = this.attacker.uniqueid;
                var _indx2 = living.findIndex(function (h) {
                    return h.uniqueid === _uid2
                });
                if (_indx2 === 0) return null;
                return [living[_indx2 - 1]]
            }
            if (target === TargetType.BEHIND) {
                var _uid3 = this.attacker.uniqueid;
                var _indx3 = living.findIndex(function (h) {
                    return h.uniqueid === _uid3
                });
                if (_indx3 === living.length - 1) return null;
                return living.slice(_indx3 + 1, living.length)
            }
            if (target === TargetType.CLEAVE) {
                if (living.length === 1) return [living[0]];
                return living.slice(0, 2)
            }
            if (target === TargetType.SWIPE) {
                if (living.length === 1) return [living[0]];
                if (living.length === 2) return living.slice(0, 2);
                return living.slice(0, 3)
            }
            if (target === TargetType.ADJACENT) {
                var _uid4 = this.attacker.uniqueid;
                var _indx4 = living.findIndex(function (h) {
                    return h.uniqueid === _uid4
                });
                var targets = [];
                if (_indx4 !== living.length - 1) targets.push(living[_indx4 + 1]);
                if (_indx4 !== 0) targets.push(living[_indx4 - 1]);
                return targets
            }
            if (target === TargetType.MIRROR) {
                var _uid5 = this.attacker.uniqueid;
                var _indx5 = this.allies.findIndex(function (h) {
                    return h.uniqueid === _uid5
                });
                if (this.enemies.some(function (h) {
                        return h.mark(_this.attacker.type)
                    })) return [this.enemies.find(function (h) {
                    return h.mark(_this.attacker.type)
                })];
                if (this.attacker.confusion()) return [this.attacker];
                if (this.enemies.length <= _indx5) _indx5 = enemies.length - 1;
                if (this.enemies[_indx5].alive() && !this.enemies[_indx5].phase(this.attacker.type)) return [this.enemies[_indx5]];
                if (_indx5 > 0 && this.enemies[_indx5 - 1].alive() && !this.enemies[_indx5].phase(this.attacker.type)) return [this.enemies[_indx5 - 1]];
                if (_indx5 < this.enemies.length - 1 && this.enemies[_indx5 + 1].alive() && !this.enemies[_indx5].phase(this.attacker.type)) return [this.enemies[_indx5 + 1]];
                if (_indx5 - 1 > 0 && this.enemies[_indx5 - 2].alive() && !this.enemies[_indx5].phase(this.attacker.type)) return [this.enemies[_indx5 - 2]];
                if (_indx5 < this.enemies.length - 2 && this.enemies[_indx5 + 2].alive() && !this.enemies[_indx5].phase(this.attacker.type)) return [this.enemies[_indx5 + 2]];
                if (_indx5 - 2 > 0 && this.enemies[_indx5 - 3].alive() && !this.enemies[_indx5].phase(this.attacker.type)) return [this.enemies[_indx5 - 3]];
                if (_indx5 < this.enemies.length - 3 && this.enemies[_indx5 + 3].alive() && !this.enemies[_indx5].phase(this.attacker.type)) return [this.enemies[_indx5 + 3]]
            }
            if (target === TargetType.RANDOM) {
                var seed = aliveEnemys.map(function (e) {
                    return e.hp
                }).reduce(function (a, b) {
                    return a + b
                }) + aliveAllies.map(function (e) {
                    return e.hp
                }).reduce(function (a, b) {
                    return a + b
                });
                return [living[seed % living.length]]
            }
            if (target === TargetType.ENEMIES) {
                return this.enemies
            }
            if (target === TargetType.TWOLEASTMAX) {
                return living.sort(function (a, b) {
                    return a.maxHP() - b.maxHP()
                }).slice(0, 2)
            }
            if (target === TargetType.FIRSTMOXIE) {
                var firstMox = living.find(function (h) {
                    return h.type === "Moxie"
                });
                if (firstMox === undefined) return undefined;
                return [firstMox]
            }
            if (target === TargetType.HIGHESTPOW) {
                return [living.sort(function (a, b) {
                    return b.getPow() - a.getPow()
                })[0]]
            }
        }
    }]);
    return combatRoundParams
}();
var Combatant = function () {
    function Combatant(props) {
        _classCallCheck(this, Combatant);
        Object.assign(this, props);
        this.hp = 1;
        this.buffs = []
    }
    _createClass(Combatant, [{
        key: "buffTick",
        value: function buffTick(type, attack, refreshLater) {
            this.buffs.forEach(function (buff) {
                buff.buffTick(type, attack, refreshLater)
            });
            this.buffs = this.buffs.filter(function (buff) {
                return !buff.expired()
            })
        }
    }, {
        key: "passiveCheck",
        value: function passiveCheck(type, attack, refreshLater) {
            if (type === "onSpecial") {
                if (this.getRuneCount(RuneType.FIRE) >= 3) BuffManager.generateBuff("B0043", attack.target)
            }
            if (type === "initial" && this.id === "H004" && this.passive) BuffManager.generateBuff("B0043", this);
            if (this.passiveSkill === null) return;
            SkillManager.idToSkill(this.passiveSkill).passiveCheck(type, this, attack, refreshLater)
        }
    }, {
        key: "takeAttack",
        value: function takeAttack(attack) {
            var reducedDmg = Math.floor(attack.power * this.getProtection() * this.getVulnerability(attack.attacker));
            this.hp = Math.max(this.hp - reducedDmg, 0);
            if (this.hp === 0) {
                BuffManager.clearBuffs(this);
                this.passiveCheck("dead", attack);
                if (this.hp === 0) refreshDungeonDead(this.uniqueid)
            }
            refreshHPBar(this);
            if (this.thorns() > 0) attack.attacker.takeDamage(this.thorns());
            if (this.parry() > 0) attack.attacker.takeDamage(this.parry());
            if (this.beornTank() > 0) {
                HeroManager.idToHero("H001").takeDamage(this.beornTank())
            }
            this.buffTick("onHit", attack);
            this.passiveCheck("onHit", attack);
            if (attack.attack.id !== "S0000") {
                attack.attacker.buffTick("onSpecialHit");
                if (attack.attacker.getRuneCount(RuneType.FIRE) >= 4) {
                    if (attack.attacker.id === "H101" && attack.attacker.passive) BuffManager.generateBuff("B1011", this, Math.floor(attack.power * .1 * 1.25));
                    else BuffManager.generateBuff("B1010", this, Math.floor(attack.power * .1))
                }
                if (attack.attacker.getRuneCount(RuneType.WATER) >= 4) {
                    if (attack.attacker.id === "H102" && attack.attacker.passive) BuffManager.generateBuff("B1021", this, Math.floor(attack.power * .1));
                    else BuffManager.generateBuff("B1020", this, Math.floor(attack.power * .1))
                }
                if (attack.attacker.getRuneCount(RuneType.THUNDER) >= 4) BuffManager.generateBuff("B3000", this, Math.floor(attack.power * .1))
            }
        }
    }, {
        key: "destroy",
        value: function destroy() {
            this.hp = 0;
            BuffManager.clearBuffs(this);
            this.passiveCheck("dead");
            refreshDungeonDead(this.uniqueid);
            refreshHPBar(this)
        }
    }, {
        key: "takeDamage",
        value: function takeDamage(dmg, ignoreProtection) {
            var mod = ignoreProtection ? 1 : this.getProtection();
            var reducedDmg = Math.floor(dmg * mod);
            this.hp = Math.max(this.hp - reducedDmg, 0);
            if (this.hp === 0) {
                BuffManager.clearBuffs(this);
                this.passiveCheck("dead");
                refreshDungeonDead(this.uniqueid)
            }
            if (!CombatManager.refreshLater) refreshHPBar(this)
        }
    }, {
        key: "takeDamagePercent",
        value: function takeDamagePercent(hpPercent) {
            this.hp -= Math.floor(this.maxHP() * hpPercent / 100);
            this.hp = Math.max(0, this.hp);
            if (this.hp === 0) {
                BuffManager.clearBuffs(this);
                this.passiveCheck("dead");
                refreshDungeonDead(this.uniqueid)
            }
            if (!CombatManager.refreshLater) refreshHPBar(this)
        }
    }, {
        key: "hasBuff",
        value: function hasBuff(buffID) {
            return this.buffs.some(function (b) {
                return b.id === buffID
            })
        }
    }, {
        key: "getBuff",
        value: function getBuff(buffID) {
            return this.buffs.find(function (b) {
                return b.id === buffID
            })
        }
    }, {
        key: "getBuffStacks",
        value: function getBuffStacks(buffID) {
            if (!this.hasBuff(buffID)) return 0;
            return this.getBuff(buffID).stacks
        }
    }, {
        key: "addBuff",
        value: function addBuff(buff) {
            this.buffs.push(buff);
            this.hp = Math.min(this.hp, this.maxHP())
        }
    }, {
        key: "removeBuff",
        value: function removeBuff(buffID) {
            this.buffs = this.buffs.filter(function (b) {
                return b.id !== buffID
            });
            this.hp = Math.min(this.hp, this.maxHP())
        }
    }, {
        key: "getPow",
        value: function getPow() {
            var pow = Math.floor(this.pow + this.getBuffPower() + this.getPassivePow());
            return Math.floor(pow * (1 + this.getBuffPowerPercent()))
        }
    }, {
        key: "getProtection",
        value: function getProtection() {
            return 1 - (this.protection + this.getBuffProtection() + this.getPassiveProtection())
        }
    }, {
        key: "getVulnerability",
        value: function getVulnerability(attacker) {
            return 1 + this.getBuffVulnerability(attacker)
        }
    }, {
        key: "getPassiveProtection",
        value: function getPassiveProtection() {
            return 0
        }
    }, {
        key: "getPassivePow",
        value: function getPassivePow() {
            return 0
        }
    }, {
        key: "getAdjPow",
        value: function getAdjPow() {
            return this.getPow()
        }
    }, {
        key: "dead",
        value: function dead() {
            return this.hp <= 0
        }
    }, {
        key: "alive",
        value: function alive() {
            return this.hp > 0
        }
    }, {
        key: "maxHP",
        value: function maxHP() {
            var hp = Math.floor(this.hpmax + this.getBuffMaxHP());
            return Math.floor(hp * (1 + this.getBuffMaxHPPercent()))
        }
    }, {
        key: "missingHP",
        value: function missingHP() {
            return this.maxHP() - this.hp
        }
    }, {
        key: "hpLessThan",
        value: function hpLessThan(percent) {
            return this.maxHP() * percent >= this.hp
        }
    }, {
        key: "hpGreaterThan",
        value: function hpGreaterThan(percent) {
            return this.maxHP() * percent <= this.hp
        }
    }, {
        key: "heal",
        value: function heal(hp) {
            if (this.hp === 0) return;
            if (this.isWilt()) hp = Math.floor(hp / 2);
            this.hp = Math.min(this.hp + hp, this.maxHP());
            if (!CombatManager.refreshLater) refreshHPBar(this)
        }
    }, {
        key: "healPercent",
        value: function healPercent(hpPercent) {
            if (this.hp === 0) return;
            if (this.isWilt()) hpPercent = hpPercent / 2;
            this.hp += Math.floor(this.maxHP() * hpPercent / 100);
            this.hp = Math.min(this.maxHP(), this.hp);
            if (!CombatManager.refreshLater) refreshHPBar(this)
        }
    }, {
        key: "setHP",
        value: function setHP(hp) {
            if (this.hp === 0) return;
            this.hp = Math.min(hp, this.maxHP());
            if (!CombatManager.refreshLater) refreshHPBar(this)
        }
    }, {
        key: "resetPlaybookPosition",
        value: function resetPlaybookPosition() {
            this.playbook.reset()
        }
    }, {
        key: "getSkill",
        value: function getSkill() {
            return this.playbook.nextSkill(this.reverse())
        }
    }, {
        key: "previousSkill",
        value: function previousSkill() {
            return this.playbook.previousSkill(this.reverse())
        }
    }, {
        key: "getActiveSkill",
        value: function getActiveSkill() {
            return this.playbook.skillCount()
        }
    }, {
        key: "untilNextSpecial",
        value: function untilNextSpecial() {
            return this.playbook.untilNextSpecial(this.reverse())
        }
    }, {
        key: "getSkillIcons",
        value: function getSkillIcons() {
            return this.playbook.getSkillIcons()
        }
    }, {
        key: "getSkillIDs",
        value: function getSkillIDs() {
            return this.playbook.getSkillIDs()
        }
    }, {
        key: "mark",
        value: function mark(type) {
            return this.buffs.some(function (b) {
                return b.mark(type)
            })
        }
    }, {
        key: "phase",
        value: function phase(type) {
            return this.buffs.some(function (b) {
                return b.phase(type)
            })
        }
    }, {
        key: "parry",
        value: function parry() {
            return this.buffs.map(function (b) {
                return b.parry()
            }).reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "confusion",
        value: function confusion(isNormal) {
            if (isNormal) return false;
            return this.buffs.some(function (b) {
                return b.confusion()
            })
        }
    }, {
        key: "getBuffProtection",
        value: function getBuffProtection() {
            var buffs = this.buffs.map(function (b) {
                return b.getProtection()
            });
            return buffs.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "getBuffVulnerability",
        value: function getBuffVulnerability(attacker) {
            var buffs = this.buffs.map(function (b) {
                return b.getVulnerability(attacker)
            });
            return buffs.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "getBuffPower",
        value: function getBuffPower() {
            var buffs = this.buffs.map(function (b) {
                return b.getPow()
            });
            return buffs.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "getBuffPowerPercent",
        value: function getBuffPowerPercent() {
            var buffs = this.buffs.map(function (b) {
                return b.getPowPercent()
            });
            return buffs.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "getBuffMaxHP",
        value: function getBuffMaxHP() {
            var buffs = this.buffs.map(function (b) {
                return b.maxHP()
            });
            return buffs.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "getBuffMaxHPPercent",
        value: function getBuffMaxHPPercent() {
            var buffs = this.buffs.map(function (b) {
                return b.maxHPPercent()
            });
            return buffs.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "debuffImmune",
        value: function debuffImmune() {
            return this.buffs.some(function (b) {
                return b.debuffImmune()
            })
        }
    }, {
        key: "buffCount",
        value: function buffCount() {
            return this.buffs.filter(function (b) {
                return b.type === "buff"
            }).length
        }
    }, {
        key: "debuffCount",
        value: function debuffCount() {
            return this.buffs.filter(function (b) {
                return b.type === "debuff"
            }).length
        }
    }, {
        key: "removeBuffs",
        value: function removeBuffs() {
            var _this2 = this;
            this.buffs.forEach(function (buff) {
                BuffRefreshManager.removeBuff(buff, _this2)
            });
            this.buffs = [];
            this.hp = Math.min(this.hp, this.maxHP())
        }
    }, {
        key: "removeDebuffs",
        value: function removeDebuffs() {
            var _this3 = this;
            this.buffs.forEach(function (buff) {
                if (buff.type === "debuff") BuffRefreshManager.removeBuff(buff, _this3)
            });
            this.buffs = this.buffs.filter(function (b) {
                return b.type !== "debuff"
            });
            this.hp = Math.min(this.hp, this.maxHP())
        }
    }, {
        key: "isChilled",
        value: function isChilled() {
            return this.buffs.some(function (b) {
                return b.isChilled()
            })
        }
    }, {
        key: "isLifeTapped",
        value: function isLifeTapped() {
            return this.buffs.some(function (b) {
                return b.isLifeTapped()
            })
        }
    }, {
        key: "isWilt",
        value: function isWilt() {
            return this.buffs.some(function (b) {
                return b.isWilt()
            })
        }
    }, {
        key: "underHalfHP",
        value: function underHalfHP() {
            return 2 * this.hp <= this.maxHP()
        }
    }, {
        key: "thorns",
        value: function thorns() {
            var thorns = this.buffs.map(function (b) {
                return b.thorns()
            });
            return thorns.reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "beornTank",
        value: function beornTank() {
            return this.buffs.map(function (b) {
                return b.beornTank()
            }).reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "reverse",
        value: function reverse() {
            return this.buffs.some(function (b) {
                return b.reverse()
            })
        }
    }, {
        key: "usedSpecial",
        value: function usedSpecial() {
            return
        }
    }, {
        key: "usedNormal",
        value: function usedNormal() {
            return
        }
    }, {
        key: "getRuneCount",
        value: function getRuneCount() {
            return 0
        }
    }]);
    return Combatant
}();
"use strict";

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj
        }
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}
var buffTemplate = function buffTemplate(props) {
    _classCallCheck(this, buffTemplate);
    Object.assign(this, props)
};
var Buff = function () {
    function Buff(buffTemplate, target, power, power2) {
        _classCallCheck(this, Buff);
        Object.assign(this, buffTemplate);
        this.stacks = this.stackCast;
        this.target = target;
        this.power = power;
        this.power2 = power2
    }
    _createClass(Buff, [{
        key: "addCast",
        value: function addCast() {
            if (this.onCast === "refresh") {
                this.stacks = this.stackCast
            } else if (this.onCast === "stack") {
                this.stacks = Math.min(this.stacks + this.stackCast, this.maxStack)
            }
        }
    }, {
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.stacks = this.stacks;
            save.power = this.power;
            save.power2 = this.power2;
            save.id = this.id;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.stacks = save.stacks
        }
    }, {
        key: "buffTick",
        value: function buffTick(type, attack, refreshLater) {
            if (type === "onMyTurn") this.onTick();
            if (type === "onHit") this.onHit(attack);
            if (type === "onHitting") this.onHitting();
            if (type !== this.decrease) return;
            this.stacks -= 1;
            if (this.stacks <= 0) {
                this.expire();
                if (!refreshLater) BuffRefreshManager.removeBuff(this, this.target)
            } else if (!refreshLater) BuffRefreshManager.updateBuffCount(this, this.target)
        }
    }, {
        key: "expired",
        value: function expired() {
            return this.stacks <= 0
        }
    }, {
        key: "onTick",
        value: function onTick() {
            return
        }
    }, {
        key: "onHit",
        value: function onHit() {
            return
        }
    }, {
        key: "onHitting",
        value: function onHitting() {
            return
        }
    }, {
        key: "getPow",
        value: function getPow() {
            return 0
        }
    }, {
        key: "getPowPercent",
        value: function getPowPercent() {
            return 0
        }
    }, {
        key: "isChilled",
        value: function isChilled() {
            return false
        }
    }, {
        key: "isWilt",
        value: function isWilt() {
            return false
        }
    }, {
        key: "isLifeTapped",
        value: function isLifeTapped() {
            return false
        }
    }, {
        key: "getProtection",
        value: function getProtection() {
            return 0
        }
    }, {
        key: "getVulnerability",
        value: function getVulnerability() {
            return 0
        }
    }, {
        key: "maxHP",
        value: function maxHP() {
            return 0
        }
    }, {
        key: "maxHPPercent",
        value: function maxHPPercent() {
            return 0
        }
    }, {
        key: "mark",
        value: function mark() {
            return false
        }
    }, {
        key: "phase",
        value: function phase() {
            return false
        }
    }, {
        key: "debuffImmune",
        value: function debuffImmune() {
            return false
        }
    }, {
        key: "thorns",
        value: function thorns() {
            return 0
        }
    }, {
        key: "parry",
        value: function parry() {
            return 0
        }
    }, {
        key: "beornTank",
        value: function beornTank() {
            return 0
        }
    }, {
        key: "expire",
        value: function expire() {
            return
        }
    }, {
        key: "confusion",
        value: function confusion() {
            return false
        }
    }, {
        key: "reverse",
        value: function reverse() {
            return false
        }
    }]);
    return Buff
}();
var BuffManager = {
    buffDB: [],
    uniqueid: 0,
    addBuffTemplate: function addBuffTemplate(buff) {
        this.buffDB.push(buff)
    },
    idToBuff: function idToBuff(buffID) {
        return this.buffDB.find(function (b) {
            return b.id === buffID
        })
    },
    generateBuff: function generateBuff(buffID, target) {
        var power = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var power2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        if (target === undefined) return;
        if (target.debuffImmune()) return;
        if (target.hasBuff(buffID)) {
            var _buff = target.getBuff(buffID);
            _buff.addCast();
            BuffRefreshManager.updateBuffCount(_buff, target);
            return
        }
        var buffTemplate = this.idToBuff(buffID);
        var buff = new BuffLookup[buffID](buffTemplate, target, power, power2);
        buff.uniqueid = "BI" + this.uniqueid;
        this.uniqueid += 1;
        target.addBuff(buff);
        BuffRefreshManager.addBuff(buff, target)
    },
    removeBuff: function removeBuff(buffID, target) {
        if (!target.hasBuff(buffID)) return;
        var buff = target.getBuff(buffID);
        target.removeBuff(buffID);
        BuffRefreshManager.removeBuff(buff, target)
    },
    clearBuffs: function clearBuffs(target) {
        var _this = this;
        target.buffs.forEach(function (buff) {
            _this.removeBuff(buff.id, target)
        })
    },
    clearDebuffs: function clearDebuffs(target) {
        var _this2 = this;
        target.buffs.forEach(function (buff) {
            if (buff.type !== "debuff") return;
            _this2.removeBuff(buff.id, target)
        })
    },
    generateSaveBuff: function generateSaveBuff(buffID, target, power) {
        var power2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var buffTemplate = this.idToBuff(buffID);
        var buff = new BuffLookup[buffID](buffTemplate, target, power, power2);
        buff.uniqueid = "BI" + this.uniqueid;
        this.uniqueid += 1;
        return buff
    },
    maxStack: function maxStack(buffID) {
        var buff = this.idToBuff(buffID);
        return buff.maxStack
    },
    findBuff: function findBuff(uniqueid) {
        return AreaManager.allBuffs().find(function (b) {
            return b.uniqueid === uniqueid
        })
    }
};
var BuffRefreshManager = {
    hardRefreshBuff: function hardRefreshBuff() {
        var _this3 = this;
        var dungeon = DungeonManager.dungeonByID(DungeonManager.dungeonView);
        dungeon.party.heroes.forEach(function (ally) {
            var $heroDiv = $("#buffList" + ally.uniqueid);
            $heroDiv.empty();
            ally.buffs.forEach(function (buff) {
                _this3.makeBuffContainer(buff, ally.uniqueid).appendTo($heroDiv)
            })
        });
        dungeon.mobs.forEach(function (enemy) {
            var $enemyDiv = $("#buffList" + enemy.uniqueid);
            $enemyDiv.empty();
            enemy.buffs.forEach(function (buff) {
                _this3.makeBuffContainer(buff, enemy.uniqueid).appendTo($enemyDiv)
            })
        })
    },
    makeBuffContainer: function makeBuffContainer(buff, uniqueid) {
        var d1 = $("<div/>").addClass("buffContainer tooltip").attr("id", "bc" + uniqueid + buff.id).attr({
            "data-tooltip": "buff_desc",
            "data-tooltip-value": buff.uniqueid
        });
        $("<div/>").addClass("buffContainerIcon").html(buff.icon).appendTo(d1);
        $("<div/>").addClass("buffContainerCount").attr("id", "bcount" + uniqueid + buff.id).html(buff.stacks).appendTo(d1);
        return d1
    },
    addBuff: function addBuff(buff, combatant) {
        var buffList = $("#buffList" + combatant.uniqueid);
        buffList.append(this.makeBuffContainer(buff, combatant.uniqueid))
    },
    updateBuffCount: function updateBuffCount(buff, combatant) {
        $("#bcount" + combatant.uniqueid + buff.id).html(buff.stacks)
    },
    removeBuff: function removeBuff(buff, combatant) {
        $("#bc" + combatant.uniqueid + buff.id).remove()
    }
};
var B0010 = function (_Buff) {
    _inherits(B0010, _Buff);

    function B0010(buffTemplate, target, power) {
        _classCallCheck(this, B0010);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0010).call(this, buffTemplate, target, power))
    }
    _createClass(B0010, [{
        key: "getProtection",
        value: function getProtection() {
            return this.power
        }
    }]);
    return B0010
}(Buff);
var B0011 = function (_Buff2) {
    _inherits(B0011, _Buff2);

    function B0011(buffTemplate, target, power) {
        _classCallCheck(this, B0011);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0011).call(this, buffTemplate, target, power))
    }
    _createClass(B0011, [{
        key: "parry",
        value: function parry() {
            return this.power
        }
    }, {
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }]);
    return B0011
}(Buff);
var B0012 = function (_Buff3) {
    _inherits(B0012, _Buff3);

    function B0012(buffTemplate, target, power) {
        _classCallCheck(this, B0012);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0012).call(this, buffTemplate, target, power))
    }
    _createClass(B0012, [{
        key: "getProtection",
        value: function getProtection() {
            return this.power
        }
    }, {
        key: "beornTank",
        value: function beornTank() {
            return 1 - this.power
        }
    }]);
    return B0012
}(Buff);
var B0020 = function (_Buff4) {
    _inherits(B0020, _Buff4);

    function B0020(buffTemplate, target, power) {
        _classCallCheck(this, B0020);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0020).call(this, buffTemplate, target, power))
    }
    _createClass(B0020, [{
        key: "maxHP",
        value: function maxHP() {
            return this.power * this.stacks
        }
    }]);
    return B0020
}(Buff);
var B0021 = function (_Buff5) {
    _inherits(B0021, _Buff5);

    function B0021(buffTemplate, target, power) {
        _classCallCheck(this, B0021);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0021).call(this, buffTemplate, target, power))
    }
    _createClass(B0021, [{
        key: "mark",
        value: function mark() {
            return true
        }
    }]);
    return B0021
}(Buff);
var B0022 = function (_Buff6) {
    _inherits(B0022, _Buff6);

    function B0022(buffTemplate, target, power, power2) {
        var _this4;
        _classCallCheck(this, B0022);
        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(B0022).call(this, buffTemplate, target, power));
        _this4.power2 = power2;
        return _this4
    }
    _createClass(B0022, [{
        key: "maxHPPercent",
        value: function maxHPPercent() {
            return -this.power * this.stacks
        }
    }, {
        key: "getPowPercent",
        value: function getPowPercent() {
            return this.power2 * this.stacks
        }
    }]);
    return B0022
}(Buff);
var B0041 = function (_Buff7) {
    _inherits(B0041, _Buff7);

    function B0041(buffTemplate, target, power) {
        _classCallCheck(this, B0041);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0041).call(this, buffTemplate, target, power))
    }
    return B0041
}(Buff);
var B0042 = function (_Buff8) {
    _inherits(B0042, _Buff8);

    function B0042(buffTemplate, target, power) {
        _classCallCheck(this, B0042);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0042).call(this, buffTemplate, target, power))
    }
    _createClass(B0042, [{
        key: "getPow",
        value: function getPow() {
            return this.power * this.stacks
        }
    }]);
    return B0042
}(Buff);
var B0043 = function (_Buff9) {
    _inherits(B0043, _Buff9);

    function B0043(buffTemplate, target, power) {
        _classCallCheck(this, B0043);
        return _possibleConstructorReturn(this, _getPrototypeOf(B0043).call(this, buffTemplate, target, power))
    }
    return B0043
}(Buff);
var B1010 = function (_Buff10) {
    _inherits(B1010, _Buff10);

    function B1010(buffTemplate, target, power) {
        _classCallCheck(this, B1010);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1010).call(this, buffTemplate, target, power))
    }
    _createClass(B1010, [{
        key: "onHitting",
        value: function onHitting() {
            this.target.takeDamage(this.power)
        }
    }]);
    return B1010
}(Buff);
var B1011 = function (_Buff11) {
    _inherits(B1011, _Buff11);

    function B1011(buffTemplate, target, power) {
        _classCallCheck(this, B1011);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1011).call(this, buffTemplate, target, power))
    }
    _createClass(B1011, [{
        key: "onHitting",
        value: function onHitting() {
            this.target.takeDamage(this.power)
        }
    }]);
    return B1011
}(Buff);
var B1012 = function (_Buff12) {
    _inherits(B1012, _Buff12);

    function B1012(buffTemplate, target, power) {
        _classCallCheck(this, B1012);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1012).call(this, buffTemplate, target, power))
    }
    return B1012
}(Buff);
var B1020 = function (_Buff13) {
    _inherits(B1020, _Buff13);

    function B1020(buffTemplate, target, power) {
        _classCallCheck(this, B1020);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1020).call(this, buffTemplate, target, power))
    }
    _createClass(B1020, [{
        key: "isChilled",
        value: function isChilled() {
            return true
        }
    }]);
    return B1020
}(Buff);
var B1021 = function (_Buff14) {
    _inherits(B1021, _Buff14);

    function B1021(buffTemplate, target, power) {
        _classCallCheck(this, B1021);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1021).call(this, buffTemplate, target, power))
    }
    _createClass(B1021, [{
        key: "isChilled",
        value: function isChilled() {
            return true
        }
    }]);
    return B1021
}(Buff);
var B1022 = function (_Buff15) {
    _inherits(B1022, _Buff15);

    function B1022(buffTemplate, target, power) {
        _classCallCheck(this, B1022);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1022).call(this, buffTemplate, target, power))
    }
    _createClass(B1022, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }]);
    return B1022
}(Buff);
var B1030 = function (_Buff16) {
    _inherits(B1030, _Buff16);

    function B1030(buffTemplate, target, power) {
        _classCallCheck(this, B1030);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1030).call(this, buffTemplate, target, power))
    }
    _createClass(B1030, [{
        key: "onTick",
        value: function onTick() {
            this.target.takeDamage(this.power * this.stacks)
        }
    }, {
        key: "isLifeTapped",
        value: function isLifeTapped() {
            return true
        }
    }]);
    return B1030
}(Buff);
var B1042 = function (_Buff17) {
    _inherits(B1042, _Buff17);

    function B1042(buffTemplate, target, power) {
        _classCallCheck(this, B1042);
        return _possibleConstructorReturn(this, _getPrototypeOf(B1042).call(this, buffTemplate, target, power))
    }
    _createClass(B1042, [{
        key: "onTick",
        value: function onTick() {
            this.target.heal(this.power)
        }
    }]);
    return B1042
}(Buff);
var B2010 = function (_Buff18) {
    _inherits(B2010, _Buff18);

    function B2010(buffTemplate, target, power) {
        _classCallCheck(this, B2010);
        return _possibleConstructorReturn(this, _getPrototypeOf(B2010).call(this, buffTemplate, target, power))
    }
    _createClass(B2010, [{
        key: "maxHP",
        value: function maxHP() {
            return this.power * this.stacks
        }
    }]);
    return B2010
}(Buff);
var B2010A = function (_Buff19) {
    _inherits(B2010A, _Buff19);

    function B2010A(buffTemplate, target, power) {
        _classCallCheck(this, B2010A);
        return _possibleConstructorReturn(this, _getPrototypeOf(B2010A).call(this, buffTemplate, target, power))
    }
    _createClass(B2010A, [{
        key: "maxHP",
        value: function maxHP() {
            return this.power * this.stacks
        }
    }]);
    return B2010A
}(Buff);
var B2011 = function (_Buff20) {
    _inherits(B2011, _Buff20);

    function B2011(buffTemplate, target, power) {
        _classCallCheck(this, B2011);
        return _possibleConstructorReturn(this, _getPrototypeOf(B2011).call(this, buffTemplate, target, power))
    }
    _createClass(B2011, [{
        key: "getPow",
        value: function getPow() {
            return this.power * this.stacks
        }
    }]);
    return B2011
}(Buff);
var B2011A = function (_Buff21) {
    _inherits(B2011A, _Buff21);

    function B2011A(buffTemplate, target, power) {
        _classCallCheck(this, B2011A);
        return _possibleConstructorReturn(this, _getPrototypeOf(B2011A).call(this, buffTemplate, target, power))
    }
    _createClass(B2011A, [{
        key: "getPow",
        value: function getPow() {
            return this.power * this.stacks
        }
    }]);
    return B2011A
}(Buff);
var B2012 = function (_Buff22) {
    _inherits(B2012, _Buff22);

    function B2012(buffTemplate, target, power) {
        _classCallCheck(this, B2012);
        return _possibleConstructorReturn(this, _getPrototypeOf(B2012).call(this, buffTemplate, target, power))
    }
    _createClass(B2012, [{
        key: "getVulnerability",
        value: function getVulnerability() {
            return 1
        }
    }]);
    return B2012
}(Buff);
var B2012A = function (_Buff23) {
    _inherits(B2012A, _Buff23);

    function B2012A(buffTemplate, target, power) {
        _classCallCheck(this, B2012A);
        return _possibleConstructorReturn(this, _getPrototypeOf(B2012A).call(this, buffTemplate, target, power))
    }
    _createClass(B2012A, [{
        key: "getVulnerability",
        value: function getVulnerability() {
            return 1
        }
    }]);
    return B2012A
}(Buff);
var B2040 = function (_Buff24) {
    _inherits(B2040, _Buff24);

    function B2040(buffTemplate, target, power) {
        _classCallCheck(this, B2040);
        return _possibleConstructorReturn(this, _getPrototypeOf(B2040).call(this, buffTemplate, target, power))
    }
    _createClass(B2040, [{
        key: "mark",
        value: function mark() {
            return true
        }
    }]);
    return B2040
}(Buff);
var BM102 = function (_Buff25) {
    _inherits(BM102, _Buff25);

    function BM102(buffTemplate, target, power) {
        _classCallCheck(this, BM102);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM102).call(this, buffTemplate, target, power))
    }
    _createClass(BM102, [{
        key: "isWilt",
        value: function isWilt() {
            return true
        }
    }]);
    return BM102
}(Buff);
var BM200 = function (_Buff26) {
    _inherits(BM200, _Buff26);

    function BM200(buffTemplate, target, power) {
        _classCallCheck(this, BM200);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM200).call(this, buffTemplate, target, power))
    }
    _createClass(BM200, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }]);
    return BM200
}(Buff);
var BM205 = function (_Buff27) {
    _inherits(BM205, _Buff27);

    function BM205(buffTemplate, target, power) {
        _classCallCheck(this, BM205);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM205).call(this, buffTemplate, target, power))
    }
    _createClass(BM205, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }]);
    return BM205
}(Buff);
var BM208 = function (_Buff28) {
    _inherits(BM208, _Buff28);

    function BM208(buffTemplate, target, power) {
        _classCallCheck(this, BM208);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM208).call(this, buffTemplate, target, power))
    }
    _createClass(BM208, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }]);
    return BM208
}(Buff);
var BM304 = function (_Buff29) {
    _inherits(BM304, _Buff29);

    function BM304(buffTemplate, target, power) {
        _classCallCheck(this, BM304);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM304).call(this, buffTemplate, target, power))
    }
    _createClass(BM304, [{
        key: "getPow",
        value: function getPow() {
            return this.power * this.stacks
        }
    }]);
    return BM304
}(Buff);
var BM305 = function (_Buff30) {
    _inherits(BM305, _Buff30);

    function BM305(buffTemplate, target, power) {
        _classCallCheck(this, BM305);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM305).call(this, buffTemplate, target, power))
    }
    _createClass(BM305, [{
        key: "getProtection",
        value: function getProtection() {
            return .25
        }
    }]);
    return BM305
}(Buff);
var BM902 = function (_Buff31) {
    _inherits(BM902, _Buff31);

    function BM902(buffTemplate, target, power) {
        _classCallCheck(this, BM902);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM902).call(this, buffTemplate, target, power))
    }
    _createClass(BM902, [{
        key: "thorns",
        value: function thorns() {
            return this.power
        }
    }]);
    return BM902
}(Buff);
var BM904A = function (_Buff32) {
    _inherits(BM904A, _Buff32);

    function BM904A(buffTemplate, target, power) {
        _classCallCheck(this, BM904A);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM904A).call(this, buffTemplate, target, power))
    }
    _createClass(BM904A, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }, {
        key: "debuffImmune",
        value: function debuffImmune() {
            return true
        }
    }]);
    return BM904A
}(Buff);
var BM905A = function (_Buff33) {
    _inherits(BM905A, _Buff33);

    function BM905A(buffTemplate, target, power) {
        _classCallCheck(this, BM905A);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM905A).call(this, buffTemplate, target, power))
    }
    _createClass(BM905A, [{
        key: "getVulnerability",
        value: function getVulnerability(attacker) {
            if (attacker.type === "Might") return 1;
            return 0
        }
    }]);
    return BM905A
}(Buff);
var BM905B = function (_Buff34) {
    _inherits(BM905B, _Buff34);

    function BM905B(buffTemplate, target, power) {
        _classCallCheck(this, BM905B);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM905B).call(this, buffTemplate, target, power))
    }
    _createClass(BM905B, [{
        key: "getVulnerability",
        value: function getVulnerability(attacker) {
            if (attacker.type === "Mind") return 1;
            return 0
        }
    }]);
    return BM905B
}(Buff);
var BM905C = function (_Buff35) {
    _inherits(BM905C, _Buff35);

    function BM905C(buffTemplate, target, power) {
        _classCallCheck(this, BM905C);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM905C).call(this, buffTemplate, target, power))
    }
    _createClass(BM905C, [{
        key: "getVulnerability",
        value: function getVulnerability(attacker) {
            if (attacker.type === "Moxie") return 1;
            return 0
        }
    }]);
    return BM905C
}(Buff);
var BM905D = function (_Buff36) {
    _inherits(BM905D, _Buff36);

    function BM905D(buffTemplate, target, power) {
        _classCallCheck(this, BM905D);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM905D).call(this, buffTemplate, target, power))
    }
    _createClass(BM905D, [{
        key: "getProtection",
        value: function getProtection() {
            return this.stacks * .1
        }
    }]);
    return BM905D
}(Buff);
var BM905E = function (_Buff37) {
    _inherits(BM905E, _Buff37);

    function BM905E(buffTemplate, target, power) {
        _classCallCheck(this, BM905E);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM905E).call(this, buffTemplate, target, power))
    }
    return BM905E
}(Buff);
var BM905F = function (_Buff38) {
    _inherits(BM905F, _Buff38);

    function BM905F(buffTemplate, target, power) {
        _classCallCheck(this, BM905F);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM905F).call(this, buffTemplate, target, power))
    }
    _createClass(BM905F, [{
        key: "getVulnerability",
        value: function getVulnerability() {
            return this.stacks * .2
        }
    }]);
    return BM905F
}(Buff);
var BM906 = function (_Buff39) {
    _inherits(BM906, _Buff39);

    function BM906(buffTemplate, target, power) {
        _classCallCheck(this, BM906);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM906).call(this, buffTemplate, target, power))
    }
    _createClass(BM906, [{
        key: "onHitting",
        value: function onHitting() {
            this.target.takeDamage(this.power * this.stacks)
        }
    }]);
    return BM906
}(Buff);
var BM906A = function (_Buff40) {
    _inherits(BM906A, _Buff40);

    function BM906A(buffTemplate, target, power) {
        _classCallCheck(this, BM906A);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM906A).call(this, buffTemplate, target, power))
    }
    _createClass(BM906A, [{
        key: "getProtection",
        value: function getProtection() {
            return .75
        }
    }]);
    return BM906A
}(Buff);
var BM906B = function (_Buff41) {
    _inherits(BM906B, _Buff41);

    function BM906B(buffTemplate, target, power) {
        _classCallCheck(this, BM906B);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM906B).call(this, buffTemplate, target, power))
    }
    _createClass(BM906B, [{
        key: "maxHP",
        value: function maxHP() {
            return -Math.floor(this.target.hpmax / 10) * this.stacks
        }
    }]);
    return BM906B
}(Buff);
var BM907 = function (_Buff42) {
    _inherits(BM907, _Buff42);

    function BM907(buffTemplate, target, power) {
        _classCallCheck(this, BM907);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM907).call(this, buffTemplate, target, power))
    }
    return BM907
}(Buff);
var BM907A = function (_Buff43) {
    _inherits(BM907A, _Buff43);

    function BM907A(buffTemplate, target, power) {
        _classCallCheck(this, BM907A);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM907A).call(this, buffTemplate, target, power))
    }
    _createClass(BM907A, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }, {
        key: "onHit",
        value: function onHit() {
            this.target.takeDamage(1, true)
        }
    }]);
    return BM907A
}(Buff);
var BM907B = function (_Buff44) {
    _inherits(BM907B, _Buff44);

    function BM907B(buffTemplate, target, power) {
        _classCallCheck(this, BM907B);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM907B).call(this, buffTemplate, target, power))
    }
    return BM907B
}(Buff);
var BM907C = function (_Buff45) {
    _inherits(BM907C, _Buff45);

    function BM907C(buffTemplate, target, power) {
        _classCallCheck(this, BM907C);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM907C).call(this, buffTemplate, target, power))
    }
    _createClass(BM907C, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }, {
        key: "expire",
        value: function expire() {
            this.target.passiveCheck("treeBuffGone")
        }
    }]);
    return BM907C
}(Buff);
var BM908A = function (_Buff46) {
    _inherits(BM908A, _Buff46);

    function BM908A(buffTemplate, target, power) {
        _classCallCheck(this, BM908A);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM908A).call(this, buffTemplate, target, power))
    }
    _createClass(BM908A, [{
        key: "confusion",
        value: function confusion() {
            return true
        }
    }]);
    return BM908A
}(Buff);
var BM908B = function (_Buff47) {
    _inherits(BM908B, _Buff47);

    function BM908B(buffTemplate, target, power) {
        _classCallCheck(this, BM908B);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM908B).call(this, buffTemplate, target, power))
    }
    _createClass(BM908B, [{
        key: "getProtection",
        value: function getProtection() {
            return 1
        }
    }, {
        key: "onHit",
        value: function onHit(attack) {
            this.target.heal(Math.floor(attack.power * this.power))
        }
    }]);
    return BM908B
}(Buff);
var BM909 = function (_Buff48) {
    _inherits(BM909, _Buff48);

    function BM909(buffTemplate, target, power) {
        _classCallCheck(this, BM909);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909).call(this, buffTemplate, target, power))
    }
    return BM909
}(Buff);
var BM909A1 = function (_Buff49) {
    _inherits(BM909A1, _Buff49);

    function BM909A1(buffTemplate, target, power) {
        _classCallCheck(this, BM909A1);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909A1).call(this, buffTemplate, target, power))
    }
    _createClass(BM909A1, [{
        key: "parry",
        value: function parry() {
            if (this.stacks === 1) {
                return this.power
            }
            return 0
        }
    }, {
        key: "getProtection",
        value: function getProtection() {
            if (this.stacks === 1) {
                return 1
            }
            return 0
        }
    }, {
        key: "onHit",
        value: function onHit() {
            if (this.stacks === 1) {
                BuffManager.generateBuff("BM909A1", this.target, 1)
            }
        }
    }]);
    return BM909A1
}(Buff);
var BM909B1 = function (_Buff50) {
    _inherits(BM909B1, _Buff50);

    function BM909B1(buffTemplate, target, power, power2) {
        _classCallCheck(this, BM909B1);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909B1).call(this, buffTemplate, target, power, power2))
    }
    _createClass(BM909B1, [{
        key: "onTick",
        value: function onTick() {
            this.target.healPercent(this.power2)
        }
    }]);
    return BM909B1
}(Buff);
var BM909C1 = function (_Buff51) {
    _inherits(BM909C1, _Buff51);

    function BM909C1(buffTemplate, target, power) {
        _classCallCheck(this, BM909C1);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909C1).call(this, buffTemplate, target, power))
    }
    return BM909C1
}(Buff);
var BM909A2 = function (_Buff52) {
    _inherits(BM909A2, _Buff52);

    function BM909A2(buffTemplate, target, power) {
        _classCallCheck(this, BM909A2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909A2).call(this, buffTemplate, target, power))
    }
    _createClass(BM909A2, [{
        key: "mark",
        value: function mark(type) {
            return type === "Might"
        }
    }, {
        key: "phase",
        value: function phase(type) {
            return type !== "Might"
        }
    }]);
    return BM909A2
}(Buff);
var BM909B2 = function (_Buff53) {
    _inherits(BM909B2, _Buff53);

    function BM909B2(buffTemplate, target, power) {
        _classCallCheck(this, BM909B2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909B2).call(this, buffTemplate, target, power))
    }
    _createClass(BM909B2, [{
        key: "mark",
        value: function mark(type) {
            return type === "Mind"
        }
    }, {
        key: "phase",
        value: function phase(type) {
            return type !== "Mind"
        }
    }]);
    return BM909B2
}(Buff);
var BM909C2 = function (_Buff54) {
    _inherits(BM909C2, _Buff54);

    function BM909C2(buffTemplate, target, power) {
        _classCallCheck(this, BM909C2);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909C2).call(this, buffTemplate, target, power))
    }
    _createClass(BM909C2, [{
        key: "mark",
        value: function mark(type) {
            return type === "Moxie"
        }
    }, {
        key: "phase",
        value: function phase(type) {
            return type !== "Moxie"
        }
    }]);
    return BM909C2
}(Buff);
var BM909C3 = function (_Buff55) {
    _inherits(BM909C3, _Buff55);

    function BM909C3(buffTemplate, target, power) {
        _classCallCheck(this, BM909C3);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM909C3).call(this, buffTemplate, target, power))
    }
    _createClass(BM909C3, [{
        key: "getVulnerability",
        value: function getVulnerability() {
            return 1
        }
    }]);
    return BM909C3
}(Buff);
var BM910 = function (_Buff56) {
    _inherits(BM910, _Buff56);

    function BM910(buffTemplate, target, power) {
        _classCallCheck(this, BM910);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM910).call(this, buffTemplate, target, power))
    }
    return BM910
}(Buff);
var BM910A = function (_Buff57) {
    _inherits(BM910A, _Buff57);

    function BM910A(buffTemplate, target, power) {
        _classCallCheck(this, BM910A);
        return _possibleConstructorReturn(this, _getPrototypeOf(BM910A).call(this, buffTemplate, target, power))
    }
    _createClass(BM910A, [{
        key: "reverse",
        value: function reverse() {
            return true
        }
    }]);
    return BM910A
}(Buff);
var BuffLookup = {
    B0010: B0010,
    B0011: B0011,
    B0012: B0012,
    B0020: B0020,
    B0021: B0021,
    B0022: B0022,
    B0041: B0041,
    B0042: B0042,
    B0043: B0043,
    B1010: B1010,
    B1011: B1011,
    B1012: B1012,
    B1020: B1020,
    B1021: B1021,
    B1022: B1022,
    B1030: B1030,
    B1042: B1042,
    B2010: B2010,
    B2010A: B2010A,
    B2011: B2011,
    B2011A: B2011A,
    B2012: B2012,
    B2012A: B2012A,
    B2040: B2040,
    BM102: BM102,
    BM200: BM200,
    BM205: BM205,
    BM208: BM208,
    BM304: BM304,
    BM305: BM305,
    BM902: BM902,
    BM904A: BM904A,
    BM905A: BM905A,
    BM905B: BM905B,
    BM905C: BM905C,
    BM905D: BM905D,
    BM905E: BM905E,
    BM905F: BM905F,
    BM906: BM906,
    BM906A: BM906A,
    BM906B: BM906B,
    BM907: BM907,
    BM907A: BM907A,
    BM907B: BM907B,
    BM907C: BM907C,
    BM908A: BM908A,
    BM908B: BM908B,
    BM909: BM909,
    BM909A1: BM909A1,
    BM909B1: BM909B1,
    BM909C1: BM909C1,
    BM909A2: BM909A2,
    BM909B2: BM909B2,
    BM909C2: BM909C2,
    BM909C3: BM909C3,
    BM910: BM910,
    BM910A: BM910A
};
"use strict";

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj
        }
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}
var HeroState = Object.freeze({
    IDLE: "Idle",
    DUNGEON: "In Dungeon",
    QUEST: "In Quest"
});
var Hero = function (_Combatant) {
    _inherits(Hero, _Combatant);

    function Hero(props) {
        var _this;
        _classCallCheck(this, Hero);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Hero).call(this, props));
        _this.uniqueid = _this.id;
        _this.hp = _this.initialHP;
        _this.pow = _this.initialPow;
        _this.unitType = "hero";
        _this.gearSlots = _this.populateGearSlots();
        _this.image = '<img src="assets/images/heroes/' + _this.id + '.gif">';
        _this.staticImage = '<img src="assets/images/heroes/' + _this.id + '.png">';
        _this.head = '<img src="assets/images/heroes/portraits/' + _this.id + '.png">';
        _this.portrait = '<img src="assets/images/heroes/portraits/' + _this.id + '.png">';
        _this.owned = false;
        _this.protection = 0;
        _this.playbook = PlaybookManager.generatePlayBook(_this.startingPlaybook);
        _this.passiveSkill = null;
        _this.trophySlot = null;
        return _this
    }
    _createClass(Hero, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.hp = this.hp;
            save.gearSlots = [];
            this.gearSlots.forEach(function (gearSlot) {
                save.gearSlots.push(gearSlot.createSave())
            });
            save.owned = this.owned;
            save.buffs = [];
            this.buffs.forEach(function (buff) {
                save.buffs.push(buff.createSave())
            });
            save.playbook = this.playbook.id;
            save.trophySlot = this.trophySlot;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            var _this2 = this;
            this.hp = save.hp;
            save.gearSlots.forEach(function (gearSlot, i) {
                _this2.gearSlots[i].loadSave(gearSlot)
            });
            if (save.playbook !== undefined) {
                this.playbook = PlaybookManager.generatePlayBook(save.playbook)
            }
            this.owned = save.owned;
            if (save.buffs !== undefined) {
                save.buffs.forEach(function (buff) {
                    var newBuff = BuffManager.generateSaveBuff(buff.id, _this2, buff.power, buff.power2);
                    newBuff.loadSave(buff);
                    _this2.buffs.push(newBuff)
                })
            }
            if (save.trophySlot !== undefined) this.trophySlot = save.trophySlot
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.buffs = [];
            this.hp = this.initialHP;
            this.pow = this.initialPow;
            this.gearSlots = this.populateGearSlots();
            this.owned = false;
            this.playbook = PlaybookManager.generatePlayBook(this.startingPlaybook);
            this.passiveSkill = null;
            this.trophySlot = null
        }
    }, {
        key: "populateGearSlots",
        value: function populateGearSlots() {
            var gearslots = [];
            for (var i = 1; i < 8; i++) {
                var agearSlot = new gearSlot(this["slot".concat(i, "Type")]);
                agearSlot.heroid = this.id;
                gearslots.push(agearSlot)
            }
            return gearslots
        }
    }, {
        key: "getPow",
        value: function getPow(noBuff, skillID) {
            var trophyBuff = this.trophySlot !== null ? DungeonManager.idToTrophy(this.trophySlot).powSkill(skillID) : 0;
            var firePow = this.getRuneCount(RuneType.FIRE) >= 2 ? 1.1 : 1;
            if (skillID !== undefined && skillID !== "S0000" && this.getRuneCount(RuneType.THUNDER) >= 2) firePow * 1.1;
            if (noBuff) return Math.floor(Math.max(1, this.initialPow + trophyBuff + this.gearSlots.map(function (g) {
                return g.pow()
            }).reduce(function (a, b) {
                return a + b
            })) * firePow);
            var pow = Math.floor((this.initialPow + trophyBuff + this.gearSlots.map(function (g) {
                return g.pow()
            }).reduce(function (a, b) {
                return a + b
            }) + this.getBuffPower()) * firePow);
            return Math.max(1, Math.floor(pow * (1 + this.getBuffPowerPercent())))
        }
    }, {
        key: "maxHP",
        value: function maxHP(noBuff) {
            var trophyBuff = this.trophySlot !== null ? DungeonManager.idToTrophy(this.trophySlot).hp() : 0;
            var waterHP = this.getRuneCount(RuneType.WATER) >= 2 ? 1.1 : 1;
            if (noBuff) return Math.floor(Math.max(1, this.initialHP + trophyBuff + this.gearSlots.map(function (g) {
                return g.hp()
            }).reduce(function (a, b) {
                return a + b
            })) * waterHP);
            var hp = Math.floor((this.initialHP + trophyBuff + this.gearSlots.map(function (g) {
                return g.hp()
            }).reduce(function (a, b) {
                return a + b
            }) + this.getBuffMaxHP()) * waterHP);
            return Math.max(1, Math.floor(hp * (1 + this.getBuffMaxHPPercent())))
        }
    }, {
        key: "getAdjPow",
        value: function getAdjPow() {
            return Math.floor(this.getPow())
        }
    }, {
        key: "getEquipSlots",
        value: function getEquipSlots(nonblank) {
            if (nonblank) return this.gearSlots.map(function (g) {
                return g.gear
            }).filter(function (s) {
                return s !== null
            });
            else return this.gearSlots.map(function (g) {
                return g.gear
            })
        }
    }, {
        key: "equip",
        value: function equip(container) {
            var gearSlot = this.getSlot(container.type);
            if (gearSlot === undefined) return;
            if (gearSlot.gear !== null) {
                Inventory.addToInventory(gearSlot.gear.uniqueID(), 1, true);
                gearSlot.removeGear()
            }
            gearSlot.setGear(container)
        }
    }, {
        key: "remove",
        value: function remove(type) {
            var gearSlot = this.getSlot(type);
            if (gearSlot !== undefined) gearSlot.removeGear()
        }
    }, {
        key: "slotEmpty",
        value: function slotEmpty(type) {
            var gearSlot = this.getSlot(type);
            if (gearSlot === undefined) return true;
            return gearSlot.empty()
        }
    }, {
        key: "getSlot",
        value: function getSlot(type) {
            return this.gearSlots.find(function (g) {
                return g.type === type
            })
        }
    }, {
        key: "unequip",
        value: function unequip(type) {
            var item = this.getSlot(type);
            if (item === undefined) return;
            Inventory.addToInventory(item.gear.uniqueID(), 1, true);
            this.remove(type)
        }
    }, {
        key: "hasEquip",
        value: function hasEquip(type) {
            var gearSlot = this.getSlot(type);
            if (gearSlot === undefined) return false;
            return !gearSlot.empty()
        }
    }, {
        key: "canEquipType",
        value: function canEquipType(type) {
            return this.getSlot(type) !== undefined
        }
    }, {
        key: "trinket",
        value: function trinket() {
            return this.gearSlots[6]
        }
    }, {
        key: "trophy",
        value: function trophy() {
            return this.trophySlot
        }
    }, {
        key: "totalUpgrades",
        value: function totalUpgrades() {
            var upgrades = this.gearSlots.map(function (g) {
                return g.lvl
            });
            return upgrades.reduce(function (a, b) {
                return a + b
            })
        }
    }, {
        key: "changePlaybook",
        value: function changePlaybook(playbookID) {
            this.playbook = PlaybookManager.generatePlayBook(playbookID)
        }
    }, {
        key: "swapPlaybook",
        value: function swapPlaybook(pbid) {
            this.playbook = PlaybookManager.generatePlayBook(pbid)
        }
    }, {
        key: "fullyEquipped",
        value: function fullyEquipped() {
            return this.gearSlots.filter(function (g) {
                return g.type !== "Trinkets"
            }).every(function (gs) {
                return !gs.empty()
            })
        }
    }, {
        key: "state",
        value: function state() {
            if (DungeonManager.heroLocked(this.id)) return HeroState.DUNGEON;
            if (ExpeditionManager.heroLocked(this.id)) return HeroState.QUEST;
            return HeroState.IDLE
        }
    }, {
        key: "getRuneCount",
        value: function getRuneCount(runeType) {
            return this.gearSlots.map(function (f) {
                return f.hasRuneType(runeType)
            }).reduce(function (a, b) {
                return a + b
            }, 0)
        }
    }, {
        key: "getPassiveProtection",
        value: function getPassiveProtection() {
            if (this.id === "H001" && this.passive) return .25;
            return 0
        }
    }, {
        key: "getPassivePow",
        value: function getPassivePow() {
            if (this.id === "H0002" && this.passive) return Math.floor(this.pow * .1);
            return 0
        }
    }, {
        key: "gearTypes",
        value: function gearTypes() {
            return [this.slot1Type, this.slot2Type, this.slot3Type, this.slot4Type, this.slot5Type, this.slot6Type]
        }
    }, {
        key: "isUpgrade",
        value: function isUpgrade(container) {
            var equippedItem = this.getSlot(container.type).gear;
            if (!equippedItem) return true;
            return container.pow() > equippedItem.pow() || container.hp() > equippedItem.hp()
        }
    }, {
        key: "getGear",
        value: function getGear() {
            return this.gearSlots.slice(0, 6).map(function (g) {
                return g.gear
            })
        }
    }]);
    return Hero
}(Combatant);
var gearSlot = function () {
    function gearSlot(type) {
        _classCallCheck(this, gearSlot);
        this.gear = null;
        this.type = type
    }
    _createClass(gearSlot, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            if (this.gear !== null) save.gear = this.gear.createSave();
            else save.gear = null;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            if (save.gear !== null) {
                var newGear = new itemContainer(save.gear.id, save.gear.rarity);
                newGear.loadSave(save.gear);
                this.gear = newGear
            }
        }
    }, {
        key: "setGear",
        value: function setGear(container) {
            this.gear = container
        }
    }, {
        key: "removeGear",
        value: function removeGear() {
            this.gear = null
        }
    }, {
        key: "pow",
        value: function pow() {
            if (this.gear === null) return 0;
            return this.gear.pow()
        }
    }, {
        key: "hp",
        value: function hp() {
            if (this.gear === null) return 0;
            return this.gear.hp()
        }
    }, {
        key: "empty",
        value: function empty() {
            return this.gear === null
        }
    }, {
        key: "hasRuneType",
        value: function hasRuneType(runeType) {
            if (this.gear === null) return 0;
            if (this.gear.rune === runeType) return 1;
            return 0
        }
    }]);
    return gearSlot
}();
var HeroManager = {
    heroes: [],
    heroView: null,
    tabSelected: "Details",
    onlyImprove: false,
    overview: "Might",
    addHero: function addHero(hero) {
        this.heroes.push(hero)
    },
    createSave: function createSave() {
        var save = {};
        save.onlyImprove = this.onlyImprove;
        save.heroes = [];
        this.heroes.forEach(function (h) {
            save.heroes.push(h.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this3 = this;
        save.heroes.forEach(function (h) {
            var hero = _this3.idToHero(h.id);
            hero.loadSave(h)
        });
        if (save.onlyImprove !== undefined) this.onlyImprove = save.onlyImprove
    },
    clearProgress: function clearProgress() {
        this.heroView = null;
        this.tabSelected = "Details";
        this.heroes.forEach(function (h) {
            return h.clearProgress()
        })
    },
    heroOwned: function heroOwned(ID) {
        return this.idToHero(ID).owned
    },
    idToHero: function idToHero(ID) {
        return this.heroes.find(function (hero) {
            return hero.id === ID
        })
    },
    isHeroID: function isHeroID(ID) {
        return this.heroes.some(function (hero) {
            return hero.id === ID
        })
    },
    equipItem: function equipItem(heroID, container) {
        this.idToHero(heroID).equip(container)
    },
    ownedHeroes: function ownedHeroes() {
        return this.heroes.filter(function (hero) {
            return hero.owned
        })
    },
    gainHero: function gainHero(heroID) {
        this.idToHero(heroID).owned = true
    },
    heroesThatCanEquip: function heroesThatCanEquip(item) {
        return this.heroes.filter(function (h) {
            return h.owned && h.canEquipType(item.type)
        })
    },
    slotsByItem: function slotsByItem(item) {
        var type = item.type;
        var results = [];
        this.heroes.filter(function (h) {
            return h.owned && h.canEquipType(type)
        }).forEach(function (hero) {
            var hres = {};
            hres.id = hero.id;
            hres.canEquip = [];
            hero.gearSlots.forEach(function (slot) {
                hres.canEquip.push(slot.type === type)
            });
            results.push(hres)
        });
        return results
    },
    findContainer: function findContainer(uniqueid, location) {
        return this.heroes.find(function (h) {
            return h.id === location
        }).getEquipSlots(true).find(function (i) {
            return i.uniqueID() === uniqueid
        })
    },
    hasContainer: function hasContainer(containerID) {
        return this.heroes.map(function (h) {
            return h.getEquipSlots(true)
        }).flat().map(function (i) {
            return i.containerID
        }).includes(containerID)
    },
    totalUpgrades: function totalUpgrades() {
        var upgrades = this.heroes.map(function (h) {
            return h.totalUpgrades()
        });
        return upgrades.reduce(function (a, b) {
            return a + b
        })
    },
    swapPlaybook: function swapPlaybook(hid, pbid) {
        var hero = this.idToHero(hid);
        hero.swapPlaybook(pbid)
    },
    isGearUpgrade: function isGearUpgrade(item) {
        return this.heroesThatCanEquip(item.item).map(function (h) {
            return h.getSlot(item.item.type)
        }).some(function (slot) {
            return !slot.gear || item.pow() > slot.gear.pow() || item.hp() > slot.gear.hp()
        })
    },
    whoHasTrophy: function whoHasTrophy(trophyID) {
        return this.heroes.find(function (hero) {
            return hero.trophySlot === trophyID
        })
    },
    equipTrophy: function equipTrophy(trophyID) {
        if (this.whoHasTrophy(trophyID) !== undefined && this.whoHasTrophy(trophyID).id === this.heroView) {
            this.idToHero(this.heroView).trophySlot = null;
            return
        }
        this.heroes.forEach(function (hero) {
            if (hero.trophySlot === trophyID) hero.trophySlot = null
        });
        this.idToHero(this.heroView).trophySlot = trophyID
    },
    runesUnlocked: function runesUnlocked() {
        return false;
        return AscensionManager.currentRun().type === PathType.RUNE
    },
    containerIDtoContainer: function containerIDtoContainer(cid) {
        if (cid === "EMPTY") return null;
        return flattenArray(this.heroes.map(function (h) {
            return h.getGear()
        })).filter(function (a) {
            return a !== null
        }).find(function (g) {
            return g.containerID === parseInt(cid)
        })
    },
    aTrophyEquipped: function aTrophyEquipped() {
        return this.heroes.some(function (h) {
            return h.trophySlot !== null
        })
    },
    aTrinketEquipped: function aTrinketEquipped() {
        return this.heroes.map(function (h) {
            return h.trinket() !== null
        })
    },
    heroIDbyPlaybook: function heroIDbyPlaybook(pbid) {
        return this.heroes.find(function (h) {
            return h.playbooks.includes(pbid)
        }).uniqueid
    }
};
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var $heroInspectBox = $(".heroInspectBox");
var $heroList = $("#heroList");
var $overviewContainer = $("#overviewContainer");
var $heroContentContainer = $(".heroContentContainer");
var $heroTab = $("#heroTab");
var $previewCardHero = $(".previewCardHero");
var $heroEquipmentList = $("#heroEquipmentList");
var $heroExtra = $("#heroExtra");
var $heroOverview = $("#heroOverview");
var $heroGear = $("#heroGear");
var $heroDetails = $("#heroDetails");
var $heroExamineName = $("#heroExamineName");
var $heroExamineImage = $("#heroExamineImage");
var $heroExamineDescription = $("#heroExamineDescription");
var $heroClassText = $("#heroClassText");
var $heroExaminePlaybooks = $("#heroExaminePlaybooks");
var $heroGearSlotList = $("#heroGearSlotList");
var $heroEquipTrinket = $("#heroEquipTrinket");
var $heroEquipTrinketAll = $("#heroEquipTrinketAll");
var $heroEquipTrophy = $("#heroEquipTrophy");
var $heroExamineRunes = $("#heroExamineRunes");
var $heroRuneSection = $("#heroRuneSection");
var $heroTabTrinket = $("#heroTabTrinket");
var $heroOverall = $("#heroOverall");
var statName = ["".concat(miscIcons.hp, " <span>HP</span>"), "".concat(miscIcons.pow, " <span>Power</span>")];
var statDesc = ["hp", "pow"];

function refreshHeroOverview() {
    initializeHeroList();
    HeroManager.heroes.filter(function (h) {
        return h.owned
    }).forEach(function (hero) {
        createHeroOverlayCard(hero).appendTo($overviewContainer)
    });
    $heroTabTrinket.html(displayText("hero_tab_trinket"))
}

function initializeHeroList() {
    $heroList.empty().show();
    $heroOverview.hide();
    $heroOverall.html("Hero Compare");
    HeroManager.heroes.forEach(function (hero) {
        var d = generateHeroCard(hero, true).appendTo($heroList);
        if (!hero.owned) d.hide()
    });
    if (HeroManager.heroes.filter(function (h) {
            return !h.owned
        }).length > 0) {
        var d = $("<div/>").addClass("heroOwnedCard emptyHeroSlot").appendTo($heroList);
        $("<div/>").addClass("heroOwnedImage").html(miscIcons.emptySlot).appendTo(d);
        $("<div/>").addClass("heroOwnedName").html("More Heroes?").appendTo(d);
        $("<div/>").addClass("emptyHeroSlotDescription").html("You can find more heroes by purchasing perks in the Market.").appendTo(d);
        var marketButton = $("<div/>").addClass("emptyHeroSlotMarket actionButton").html('<i class="fas fa-store"></i>').appendTo(d);
        $("<div/>").addClass("actionButtonTextRight").html("View Market").appendTo(marketButton)
    }
}
var overviewType = "Might";

function refreshHeroOverviewScreen() {
    $heroOverview.empty().show();
    $heroList.hide();
    $heroOverall.html("Overview");
    var heroOptions = $("<div/>").addClass("heroOverviewOptionsContainer").appendTo($heroOverview);
    var b1 = $("<div/>").addClass("heroOverviewOption").html(displayText("might_heroes")).data("data-type", "Might").appendTo(heroOptions);
    if (overviewType === "Might") b1.addClass("highlight");
    var b2 = $("<div/>").addClass("heroOverviewOption").html(displayText("mind_heroes")).data("data-type", "Mind").appendTo(heroOptions);
    if (overviewType === "Mind") b2.addClass("highlight");
    var b3 = $("<div/>").addClass("heroOverviewOption").html(displayText("moxie_heroes")).data("data-type", "Moxie").appendTo(heroOptions);
    if (overviewType === "Moxie") b3.addClass("highlight");
    var d = $("<div/>").addClass("heroOverviewDiv").appendTo($heroOverview);
    var heroids = ["H001", "H002", "H003", "H004"];
    if (overviewType === "Mind") heroids = ["H101", "H102", "H103", "H104"];
    if (overviewType === "Moxie") heroids = ["H201", "H202", "H203", "H204"];
    var heroes = heroids.map(function (h) {
        return HeroManager.idToHero(h)
    }).filter(function (h) {
        return h.owned
    });
    if (heroes < 1) {
        $("<div/>").addClass("emptyContentMessage").html("You have no heroes of this type.").appendTo(d);
        return
    }
    var heroHeadings = $("<div/>").addClass("heroHeadingsOverall").appendTo(d);
    heroes.forEach(function (hero) {
        generateHeroCard(hero, false).appendTo(heroHeadings)
    });
    var _loop = function _loop(i) {
        var d1 = $("<div/>").addClass("heroGear".concat(i.toString(), " heroGearItemContainer")).attr("id", "heroGear".concat(i.toString())).appendTo(d);
        var gear = heroes.map(function (hero) {
            return hero.gearSlots[i].gear
        });
        gear.forEach(function (container) {
            generateGearOverview(container, gear.heroid).appendTo(d1)
        });
        d1.sortable({
            group: "heroGearList".concat(i.toString()),
            swap: true,
            swapClass: "highlight",
            animation: 200,
            ghostClass: "ghost",
            onUpdate: commitHeroGearSort
        })
    };
    for (var i = 0; i < 6; i++) {
        _loop(i)
    }
}

function commitHeroGearSort() {
    var heroes = [];
    if (overviewType === "Might") heroes = ["H001", "H002", "H003", "H004"].map(function (h) {
        return HeroManager.idToHero(h)
    }).filter(function (h) {
        return h.owned
    });
    if (overviewType === "Mind") heroes = ["H101", "H102", "H103", "H104"].map(function (h) {
        return HeroManager.idToHero(h)
    }).filter(function (h) {
        return h.owned
    });
    if (overviewType === "Moxie") heroes = ["H201", "H202", "H203", "H204"].map(function (h) {
        return HeroManager.idToHero(h)
    }).filter(function (h) {
        return h.owned
    });
    var gear0 = $("#heroGear0").sortable("toArray").map(function (cid) {
        return HeroManager.containerIDtoContainer(cid)
    });
    var gear1 = $("#heroGear1").sortable("toArray").map(function (cid) {
        return HeroManager.containerIDtoContainer(cid)
    });
    var gear2 = $("#heroGear2").sortable("toArray").map(function (cid) {
        return HeroManager.containerIDtoContainer(cid)
    });
    var gear3 = $("#heroGear3").sortable("toArray").map(function (cid) {
        return HeroManager.containerIDtoContainer(cid)
    });
    var gear4 = $("#heroGear4").sortable("toArray").map(function (cid) {
        return HeroManager.containerIDtoContainer(cid)
    });
    var gear5 = $("#heroGear5").sortable("toArray").map(function (cid) {
        return HeroManager.containerIDtoContainer(cid)
    });
    heroes.forEach(function (hero, i) {
        hero.gearSlots[0].gear = gear0[i];
        hero.gearSlots[1].gear = gear1[i];
        hero.gearSlots[2].gear = gear2[i];
        hero.gearSlots[3].gear = gear3[i];
        hero.gearSlots[4].gear = gear4[i];
        hero.gearSlots[5].gear = gear5[i]
    });
    heroes.forEach(function (hero) {
        $(".butthp" + hero.id).html(hero.maxHP(true)).hide().show(0);
        $(".buttpow" + hero.id).html(hero.getPow()).hide().show(0)
    })
}
$heroOverview.on("click", ".heroOverviewOption", function (e) {
    e.preventDefault();
    $(".heroOverviewOption").removeClass("highlighted");
    $(e.currentTarget).addClass("highlighted");
    overviewType = $(e.currentTarget).data("data-type");
    refreshHeroOverviewScreen()
});

function generateGearOverview(container, heroid) {
    if (container === null) {
        var a = $("<div/>").addClass("itemContainer").attr({
            "data-id": "EMPTY"
        });
        $("<div/>").addClass("itemName").html("No Gear Equipped").appendTo(a);
        return a
    }
    var itemdiv = $("<div/>").addClass("itemContainer tooltip").attr({
        "data-tooltip": "herogear_container",
        "data-tooltip-value": container.uniqueID(),
        "data-id": container.containerID
    });
    $("<div/>").addClass("itemName").html(container.picName(false)).appendTo(itemdiv);
    $("<div/>").addClass("itemLevel").html(container.item.itemLevel()).appendTo(itemdiv);
    $("<div/>").addClass("itemRarity RT".concat(container.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[container.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(itemdiv);
    var equipStats = $("<div/>").addClass("equipStats").appendTo(itemdiv);
    for (var _i = 0, _Object$entries = Object.entries(container.itemStat(false)); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            stat = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
        if (val === 0) continue;
        var ed = $("<div/>").addClass("gearStat").appendTo(equipStats);
        $("<div/>").addClass("".concat(stat, "_img")).html(miscIcons[stat]).appendTo(ed);
        $("<div/>").addClass("".concat(stat, "_integer statValue")).html(val).appendTo(ed)
    }
    itemdiv.addClass("R" + container.rarity).addClass("ctrlClickItem").data("rid", container.id);
    return itemdiv
}
$heroOverview.on("click", ".itemContainer", function (e) {
    e.preventDefault();
    if (!e.shiftKey) return;
    var cid = $(e.currentTarget).attr("data-id");
    var container = HeroManager.containerIDtoContainer(cid);
    bloopSmith.forgeItem(container, SmithType.ENHANCE, true);
    refreshHeroOverviewScreen()
});

function generateHeroCard(hero, inspect) {
    var d = $("<div/>").addClass("heroOwnedCard heroInspect").attr("data-value", hero.id);
    if (inspect) {
        hero.playbooks.forEach(function (playbookID) {
            var playbook = PlaybookManager.idToPlaybook(playbookID);
            if (!playbook.seen) d.addClass("hasEvent")
        })
    }
    $("<div/>").addClass("heroOwnedImage").html(hero.portrait).appendTo(d);
    $("<div/>").addClass("heroOwnedName").html(hero.name).appendTo(d);
    var d3 = $("<div/>").addClass("heroHP heroStat tooltip").attr("data-tooltip", "hp").appendTo(d);
    $("<div/>").addClass("hp_img").html(miscIcons.hp).appendTo(d3);
    $("<div/>").addClass("hp_integer statValue butthp".concat(hero.id)).html(hero.maxHP(true)).appendTo(d3);
    var d4 = $("<div/>").addClass("heroPower heroStat tooltip").attr("data-tooltip", "pow").appendTo(d);
    $("<div/>").addClass("pow_img").html(miscIcons.pow).appendTo(d4);
    $("<div/>").addClass("pow_integer statValue buttpow".concat(hero.id)).html(hero.getPow(true)).appendTo(d4);
    return d
}

function createHeroOverlayCard(hero) {
    var d = $("<div/>").addClass("heroOverviewCard heroInspect").attr("data-value", hero.id);
    var heroInfo = $("<div/>").addClass("heroOverviewInfo").appendTo(d);
    $("<div/>").addClass("heroOverviewImage").html(hero.image).appendTo(heroInfo);
    $("<div/>").addClass("heroOverviewName").html(hero.name).appendTo(heroInfo);
    $("<div/>").addClass("heroOverviewClass").html(hero["class"]).appendTo(heroInfo);
    var heroStats = $("<div/>").addClass("heroOverviewStats").appendTo(d);
    $("<div/>").addClass("heroOverviewHP overviewStat tooltip").attr("data-tooltip", "hp").html("".concat(miscIcons.hp, " ").concat(hero.maxHP())).appendTo(heroStats);
    $("<div/>").addClass("heroOverviewPow overviewStat tooltip").attr("data-tooltip", "pow").html("".concat(miscIcons.pow, " ").concat(hero.getPow())).appendTo(heroStats);
    return d
}

function inspectHeroPreview(hero) {
    $previewCardHero.empty();
    $previewCardHero.append(generateHeroCard(hero, false))
}

function cyclePreviewHeroPrevious() {
    var ID = $(".previewCardHero .heroOwnedCard").attr("data-value");
    var heroesList = HeroManager.heroes.filter(function (hero) {
        return hero.owned
    });
    var heroIndex = heroesList.findIndex(function (hero) {
        return hero.id === ID
    });
    var newHeroIndex = 0;
    if (heroIndex > 0) newHeroIndex = heroIndex - 1;
    else newHeroIndex = heroesList.length - 1;
    HeroManager.heroView = heroesList[newHeroIndex].id
}

function cyclePreviewHeroNext() {
    var ID = $(".previewCardHero .heroOwnedCard").attr("data-value");
    var heroesList = HeroManager.heroes.filter(function (hero) {
        return hero.owned
    });
    var heroIndex = heroesList.findIndex(function (hero) {
        return hero.id === ID
    });
    var newHeroIndex = 0;
    if (heroIndex < heroesList.length - 1) newHeroIndex = heroIndex + 1;
    HeroManager.heroView = heroesList[newHeroIndex].id
}
var $previewCardPrevious = $(".previewCardPrevious");
var $previewCardNext = $(".previewCardNext");
$previewCardPrevious.on("click", function (e) {
    cyclePreviewHeroPrevious();
    openTab("heroes_" + HeroManager.heroView)
});
$previewCardNext.on("click", function (e) {
    cyclePreviewHeroNext();
    openTab("heroes_" + HeroManager.heroView)
});

function showHeroDetails() {
    $heroContentContainer.hide();
    $heroDetails.show();
    var hero = HeroManager.idToHero(HeroManager.heroView);
    $heroExamineName.html(hero.name);
    $heroExamineImage.html(hero.image);
    $heroExamineDescription.html(hero.description);
    $heroClassText.removeClass().addClass("class".concat(hero.type)).html(hero.type);
    $heroExaminePlaybooks.empty();
    generateHeroPlaybooks(hero).appendTo($heroExaminePlaybooks);
    if (hero.passive) {
        $("<div/>").addClass("heroPassiveUnlocked tooltip").attr({
            "data-tooltip": "passive_desc_" + hero.id
        }).html(displayText("passive_activated")).appendTo($heroExaminePlaybooks)
    }
    if (!HeroManager.runesUnlocked()) $heroRuneSection.hide();
    else {
        $heroRuneSection.show();
        $heroExamineRunes.empty();
        var d = $("<div/>").addClass("heroRunesContainer").appendTo($heroExamineRunes);
        var runeCountContainer = $("<div/>").addClass("runeCountContainer").appendTo(d);
        $("<div/>").addClass("runeCountBox").html("".concat(miscIcons.fireRune, " ").concat(hero.getRuneCount(RuneType.FIRE))).appendTo(runeCountContainer);
        $("<div/>").addClass("runeCountBox").html("".concat(miscIcons.waterRune, " ").concat(hero.getRuneCount(RuneType.WATER))).appendTo(runeCountContainer);
        $("<div/>").addClass("runeCountBox").html("".concat(miscIcons.thunderRune, " ").concat(hero.getRuneCount(RuneType.THUNDER))).appendTo(runeCountContainer);
        var runeTypeContainer = $("<div/>").addClass("runeTypeContainer").appendTo(d);
        var a = $("<div/>").addClass("runeTypeContent runeFire").appendTo(runeTypeContainer);
        var a1 = $("<div/>").addClass("runeContentBox").html("1 ".concat(miscIcons.fireRune, ": ").concat(displayText("fire_bonus_1"))).appendTo(a);
        var a3 = $("<div/>").addClass("runeContentBox").html("3 ".concat(miscIcons.fireRune, ": ").concat(displayText("fire_bonus_3"))).appendTo(a);
        var a6 = $("<div/>").addClass("runeContentBox").html("6 ".concat(miscIcons.fireRune, ": ").concat(displayText("fire_bonus_6"))).appendTo(a);
        if (hero.getRuneCount(RuneType.FIRE) >= 1) a1.addClass("fireRuneEnabled");
        if (hero.getRuneCount(RuneType.FIRE) >= 3) a3.addClass("fireRuneEnabled");
        if (hero.getRuneCount(RuneType.FIRE) >= 6) a6.addClass("fireRuneEnabled");
        var b = $("<div/>").addClass("runeTypeContent runeWater").appendTo(runeTypeContainer);
        var b1 = $("<div/>").addClass("runeContentBox").html("1 ".concat(miscIcons.waterRune, ": ").concat(displayText("water_bonus_1"))).appendTo(b);
        var b3 = $("<div/>").addClass("runeContentBox").html("3 ".concat(miscIcons.waterRune, ": ").concat(displayText("water_bonus_3"))).appendTo(b);
        var b6 = $("<div/>").addClass("runeContentBox").html("6 ".concat(miscIcons.waterRune, ": ").concat(displayText("water_bonus_6"))).appendTo(b);
        if (hero.getRuneCount(RuneType.WATER) >= 1) b1.addClass("runeEnabled");
        if (hero.getRuneCount(RuneType.WATER) >= 3) b3.addClass("runeEnabled");
        if (hero.getRuneCount(RuneType.WATER) >= 6) b6.addClass("runeEnabled");
        var c = $("<div/>").addClass("runeTypeContent runeThunder").appendTo(runeTypeContainer);
        var c1 = $("<div/>").addClass("runeContentBox").html("1 ".concat(miscIcons.thunderRune, ": ").concat(displayText("thunder_bonus_1"))).appendTo(c);
        var c3 = $("<div/>").addClass("runeContentBox").html("3 ".concat(miscIcons.thunderRune, ": ").concat(displayText("thunder_bonus_3"))).appendTo(c);
        var c6 = $("<div/>").addClass("runeContentBox").html("6 ".concat(miscIcons.thunderRune, ": ").concat(displayText("thunder_bonus_6"))).appendTo(c);
        if (hero.getRuneCount(RuneType.WATER) >= 1) c1.addClass("runeEnabled");
        if (hero.getRuneCount(RuneType.WATER) >= 3) c3.addClass("runeEnabled");
        if (hero.getRuneCount(RuneType.WATER) >= 6) c6.addClass("runeEnabled")
    }
}

function generateHeroPlaybooks(hero, pbSelected) {
    pbSelected = pbSelected || hero.playbook.id;
    var dd = $("<div/>").addClass("playbooksHeroContainerAll");
    hero.playbooks.forEach(function (playbookID) {
        var d = $("<div/>").addClass("playbooksHeroContainer").appendTo(dd);
        var playbook = PlaybookManager.idToPlaybook(playbookID);
        if (!playbook.seen) {
            d.addClass("hasEvent");
            playbook.toggleSeen()
        }
        if (!playbook.unlocked) {
            d.addClass("playbookLocked tooltip").attr({
                "data-tooltip": "feature_locked"
            });
            $("<div/>").addClass("playbookName").html(displayText("playbook_locked")).appendTo(d);
            var pbSkillsContainer = $("<div/>").addClass("playbookSkillsContainer").appendTo(d);
            for (var i = 0; i < 4; i++) {
                $("<div/>").addClass("heroSelectSkill").html('<i class="fas fa-lock-alt"></i>').appendTo(pbSkillsContainer)
            }
            return
        }
        d.addClass("playbookSelectable").data({
            pbid: playbookID,
            hid: hero.id
        });
        $("<div/>").addClass("playbookName").html(playbook.name).appendTo(d);
        var d1 = $("<div/>").addClass("playbookSkillsContainer").appendTo(d);
        if (playbookID === pbSelected) d.addClass("playbookSelected");
        playbook.skillIDs().forEach(function (skillID) {
            var skill = SkillManager.idToSkill(skillID);
            $("<div/>").addClass("heroSelectSkill tooltip").attr({
                "data-tooltip": "skill_desc",
                "data-tooltip-value": skill.id
            }).html(skill.icon).appendTo(d1)
        })
    });
    return dd
}
$(document).on("click", ".playbookSelectable", function (e) {
    e.preventDefault();
    var hid = $(e.currentTarget).data("hid");
    var hero = HeroManager.idToHero(hid);
    if (hero.state() !== HeroState.IDLE) {
        ToastManager.renderToast("hero_dungeon_playbook_swap");
        return
    }
    $(".playbookSelectable").removeClass("playbookSelected hasEvent");
    $("#heroTab").removeClass("hasEvent");
    $(e.currentTarget).addClass("playbookSelected");
    var pbid = $(e.currentTarget).data("pbid");
    if (isDungeonScreen()) {
        PartyCreator.playbooks[hid] = pbid
    } else HeroManager.swapPlaybook(hid, pbid);
    var playbook = PlaybookManager.idToPlaybook(pbid);
    $(".heroPlaybook").each(function (i, h) {
        if ($(h).data("heroID") === hid) {
            $(h).attr({
                "data-tooltip": "playbooks_view",
                "data-tooltip-value": pbid,
                "data-dialog-id": "playbook"
            }).html(playbook.icon())
        }
    })
});

function showHeroGear() {
    $heroContentContainer.hide();
    $heroGear.show();
    var hero = HeroManager.idToHero(HeroManager.heroView);
    $heroGearSlotList.empty();
    hero.gearSlots.forEach(function (slot) {
        if (slot.type !== "Trinkets") heroCurrentGearEquip(hero, slot).appendTo($heroGearSlotList)
    });
    examineHeroPossibleEquip(hero.id)
}
$heroGearSlotList.on("click", ".heroExamineEquipmentEquip", function (e) {
    e.preventDefault();
    if (!e.shiftKey) return;
    var cid = $(e.currentTarget).data("cid");
    if (cid === undefined) return;
    var container = HeroManager.containerIDtoContainer(cid);
    bloopSmith.forgeItem(container, SmithType.ENHANCE, true);
    showHeroGear()
});

function showHeroExtra() {
    $heroContentContainer.hide();
    $heroExtra.show();
    var hero = HeroManager.idToHero(HeroManager.heroView);
    generateHeroTrinket(hero);
    if (TownManager.idToBuilding("TB006").status >= 2) {
        examineHeroPossibleEquip(hero.id, "Trinkets");
        refreshTrinketInventory()
    } else $heroEquipmentList.empty();
    generateHeroTrophy(hero)
}

function refreshTrinketInventory() {
    if (HeroManager.heroView === null) return;
    $heroEquipTrinketAll.empty();
    var hero = HeroManager.idToHero(HeroManager.heroView);
    var trinketsCardsHeadingContainer = $("<div/>").addClass("equipCardsTrinketsHeadingContainer").appendTo($heroEquipTrinketAll);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(trinketsCardsHeadingContainer);
    $("<div/>").addClass("headingTitle").html(displayText("trinket_select_title")).appendTo(headingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("trinket_select_desc")).appendTo(headingDetails);
    var trinketsGearContainer = $("<div/>").addClass("trinketsGearContainer").appendTo($heroEquipTrinketAll);
    if (Inventory.listbyType("Trinkets").length === 0) $("<div/>").addClass("heroUpgradeTrinketsText").html(displayText("no_trinkets_desc")).appendTo($heroEquipTrinketAll);
    Inventory.listbyType("Trinkets").forEach(function (trinket) {
        trinketsGearContainer.append(heroEquipCard(hero, trinket))
    })
}

function generateHeroTrinket(hero) {
    $heroEquipTrinket.empty();
    var gear = hero.trinket().gear;
    var d = $("<div/>").addClass("heroExamineEquipment selected").data({
        heroID: hero.id,
        gearType: "Trinkets"
    }).appendTo($heroEquipTrinket);
    var head = $("<div/>").addClass("heroExamineEquipmentSlot").html(displayText("type_Trinkets")).appendTo(d);
    if (TownManager.idToBuilding("TB006").status < 2) {
        head.addClass("tooltip").attr({
            "data-tooltip": "trinket_locked"
        }).html("".concat(miscIcons.locked, " ").concat(displayText("type_locked")))
    }
    if (gear === null) {
        var _d2 = $("<div/>").addClass("heroExamineEquipmentEquip emptyGearSlot").appendTo(d);
        $("<div/>").addClass("emptyGearSlotIcon").html(miscIcons.emptySlot).appendTo(_d2);
        $("<div/>").addClass("emptyGearSlotTitle").html("Empty Slot").appendTo(_d2);
        $("<div/>").addClass("emptyGearSlotLevel itemLevel").appendTo(_d2);
        $("<div/>").addClass("emptyGearSlotRarity itemRarity").appendTo(_d2);
        var _equipStats = $("<div/>").addClass("emptyEquipStats").appendTo(_d2);
        var ed = $("<div/>").addClass("gearStat").appendTo(_equipStats);
        $("<div/>").addClass("empty_img").appendTo(ed);
        $("<div/>").addClass("empty_integer statValue").appendTo(ed);
        return d
    }
    var d1 = $("<div/>").addClass("heroExamineEquipmentEquip").addClass("R" + gear.rarity).addClass("ctrlClickItem").data("rid", gear.id).appendTo(d);
    $("<div/>").addClass("itemName").html(gear.picName()).appendTo(d1);
    var d2 = $("<div/>").addClass("itemLevel").appendTo(d1);
    $("<div/>").addClass("level_text").html("LVL").appendTo(d2);
    $("<div/>").addClass("level_integer").html("".concat(gear.lvl)).appendTo(d2);
    $("<div/>").addClass("itemRarity").addClass("RT".concat(gear.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[gear.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(d1);
    var equipStats = $("<div/>").addClass("equipStats").appendTo(d1);
    for (var _i2 = 0, _Object$entries2 = Object.entries(gear.itemStat()); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            stat = _Object$entries2$_i[0],
            val = _Object$entries2$_i[1];
        if (val === 0) continue;
        var _ed = $("<div/>").addClass("gearStat tooltip").attr({
            "data-tooltip": stat
        }).appendTo(equipStats);
        $("<div/>").addClass("".concat(stat, "_img")).html(miscIcons[stat]).appendTo(_ed);
        $("<div/>").addClass("".concat(stat, "_integer statValue")).html(val).appendTo(_ed)
    }
    $("<div/>").attr({
        "data-tooltip": "equipment_remove"
    }).addClass("heroUnequipSlot tooltip").data({
        heroID: hero.id,
        gearType: "Trinkets"
    }).html('<i class="fas fa-times"></i>').appendTo(d);
    return d
}

function generateHeroTrophy(hero) {
    $heroEquipTrophy.empty();
    var d = $("<div/>").addClass("heroExamineEquipment equipTrophy").data({
        heroID: hero.id,
        gearType: null
    }).appendTo($heroEquipTrophy);
    $("<div/>").addClass("heroExamineEquipmentSlot").html(displayText("type_trophy")).appendTo(d);
    if (hero.trophySlot === null) {
        var d1 = $("<div/>").addClass("heroExamineEquipmentEquip emptyGearSlot").appendTo(d);
        $("<div/>").addClass("emptyGearSlotIcon").html(miscIcons.emptySlot).appendTo(d1);
        $("<div/>").addClass("emptyGearSlotTitle").html("Empty Slot").appendTo(d1)
    } else {
        var trophy = DungeonManager.idToTrophy(hero.trophySlot);
        trophy.updateTooltipValues();
        var d2 = $("<div/>").addClass("heroExamineEquipmentEquip slotTrophy").appendTo(d);
        $("<div/>").addClass("trophyImage").html(trophy.image).appendTo(d2);
        $("<div/>").addClass("trophyName").html(trophy.name).appendTo(d2);
        $("<div/>").addClass("trophyQuestion tooltip").attr({
            "data-tooltip": "trophy_desc",
            "data-tooltip-value": trophy.id
        }).html(miscIcons.info).appendTo(d2)
    }
}
var $trophyEquip = $("#trophyEquip");

function equipTrophies() {
    $trophyEquip.empty();
    var trophyActionsContainer = $("<div/>").addClass("trophyActionsContainer").appendTo($trophyEquip);
    var backButton = $("<div/>").addClass("trophyBackButton actionButton").html('<i class="fas fa-arrow-left"></i>').appendTo(trophyActionsContainer);
    $("<div/>").addClass("trophyBackButtonText").html(displayText("trophy_back_button")).appendTo(backButton);
    var contentHeader = $("<div/>").addClass("contentHeader").appendTo($trophyEquip);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(contentHeader);
    $("<div/>").addClass("headingTitle").html(displayText("trophy_equip_heading")).appendTo(headingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("trophy_equip_desc")).appendTo(headingDetails);
    var d = $("<div/>").addClass("trophyEquipContent").appendTo($trophyEquip);
    DungeonManager.trophies.forEach(function (trophy) {
        trophy.updateTooltipValues();
        var d1 = $("<div/>").addClass("trophyDiv equipTrophyDiv").appendTo(d);
        if (trophy.locked()) {
            trophy.updateTooltipValues();
            $("<div/>").addClass("trophyName tooltip").attr({
                "data-tooltip": trophy.id
            }).html("".concat(displayText("universal_locked"))).appendTo(d1);
            $("<div/>").addClass("trophyImage").html("".concat(miscIcons.locked)).appendTo(d1);
            $("<div/>").addClass("trophyDesc").html("".concat(displayText("trophy_locked_desc"))).appendTo(d1)
        } else {
            $("<div/>").addClass("trophyName").html(trophy.name).appendTo(d1);
            $("<div/>").addClass("trophyImage").html(trophy.image).appendTo(d1);
            $("<div/>").addClass("trophyQuestion tooltip").attr({
                "data-tooltip": "trophy_desc",
                "data-tooltip-value": trophy.id
            }).html(miscIcons.info).appendTo(d1);
            var d2 = $("<div/>").addClass("trophyEquipHero").appendTo(d1);
            var hero = HeroManager.whoHasTrophy(trophy.id);
            if (hero === undefined) $("<div/>").addClass("trophyEquipNone").html(displayText("trophy_equip_none")).appendTo(d2);
            else {
                $("<div/>").addClass("trophyEquipHeroHead").html(hero.head).appendTo(d2);
                $("<div/>").addClass("trophyEquipHeroName").html(hero.name).appendTo(d2)
            }
            var trophyHero = HeroManager.whoHasTrophy(trophy.id);
            if (trophyHero !== undefined && trophyHero.id === HeroManager.heroView) $("<div/>").addClass("trophyEquipButton actionButton").data("tid", trophy.id).html(displayText("trophy_unequip_button")).appendTo(d1);
            else $("<div/>").addClass("trophyEquipButton actionButton").data("tid", trophy.id).html(displayText("trophy_equip_button")).appendTo(d1)
        }
    });
    $(".tabcontent").hide();
    $trophyEquip.show()
}
$trophyEquip.on("click", ".trophyEquipButton", function (e) {
    e.preventDefault();
    var tid = $(e.currentTarget).data("tid");
    HeroManager.equipTrophy(tid);
    updateHeroStats();
    showHeroExtra();
    $(".tabcontent").hide();
    $("#heroesTab").show()
});
$trophyEquip.on("click", ".trophyBackButton", function (e) {
    e.preventDefault();
    $(".tabcontent").hide();
    $("#heroesTab").show()
});

function heroCurrentGearEquip(hero, gearSlot) {
    var type = gearSlot.type;
    var gear = gearSlot.gear;
    var d = $("<div/>").addClass("heroExamineEquipment");
    if (gear !== null) d.data({
        uid: gear.uniqueID()
    });
    var slotTypeName = $("<div/>").addClass("heroExamineEquipmentSlot").html(displayText("type_".concat(type))).appendTo(d);
    $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_blacksmith").html(miscIcons.keyboard).appendTo(slotTypeName);
    if (gear === null) {
        var _d3 = $("<div/>").addClass("heroExamineEquipmentEquip emptyGearSlot").appendTo(d);
        $("<div/>").addClass("emptyGearSlotIcon").html(miscIcons.emptySlot).appendTo(_d3);
        $("<div/>").addClass("emptyGearSlotTitle").html("Empty Slot").appendTo(_d3);
        $("<div/>").addClass("emptyGearSlotLevel itemLevel").appendTo(_d3);
        $("<div/>").addClass("emptyGearSlotRarity itemRarity").appendTo(_d3);
        var _equipStats2 = $("<div/>").addClass("emptyEquipStats").appendTo(_d3);
        var ed = $("<div/>").addClass("gearStat").appendTo(_equipStats2);
        $("<div/>").addClass("empty_img").appendTo(ed);
        $("<div/>").addClass("empty_integer statValue").appendTo(ed);
        return d
    }
    var d1 = $("<div/>").addClass("heroExamineEquipmentEquip").addClass("R" + gear.rarity).addClass("ctrlClickItem").data({
        rid: gear.id,
        cid: gear.containerID
    }).appendTo(d);
    $("<div/>").addClass("itemName").html(gear.picName()).appendTo(d1);
    var d2 = $("<div/>").addClass("itemLevel").appendTo(d1);
    $("<div/>").addClass("level_text").html("LVL").appendTo(d2);
    $("<div/>").addClass("level_integer").html("".concat(gear.lvl)).appendTo(d2);
    $("<div/>").addClass("itemRarity").addClass("RT".concat(gear.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[gear.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(d1);
    var equipStats = $("<div/>").addClass("equipStats").appendTo(d1);
    for (var _i3 = 0, _Object$entries3 = Object.entries(gear.itemStat()); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            stat = _Object$entries3$_i[0],
            val = _Object$entries3$_i[1];
        if (val === 0) continue;
        var _ed2 = $("<div/>").addClass("gearStat tooltip").attr({
            "data-tooltip": stat
        }).appendTo(equipStats);
        $("<div/>").addClass("".concat(stat, "_img")).html(miscIcons[stat]).appendTo(_ed2);
        $("<div/>").addClass("".concat(stat, "_integer statValue")).html(val).appendTo(_ed2)
    }
    $("<div/>").attr({
        "data-tooltip": "equipment_remove"
    }).addClass("heroUnequipSlot tooltip").data({
        heroID: hero.id,
        gearType: type
    }).html('<i class="fas fa-times"></i>').appendTo(d);
    return d
}

function statRow(name, value, description) {
    var d1 = $("<div/>").addClass("heroExamineStatRow tooltip").attr("data-tooltip", description);
    var d2 = $("<div/>").addClass("heroExamineStatRowName").html(name);
    var d3 = $("<div/>").addClass("heroExamineStatRowValue").html(value);
    return d1.append(d2, d3)
}

function examineHeroPossibleEquip(heroID, skipAnimation) {
    var hero = HeroManager.idToHero(heroID);
    $heroEquipmentList.empty();
    var d = $("<div/>").addClass("equipCardsHeadingContainer").appendTo($heroEquipmentList);
    var d1 = $("<div/>").addClass("headingDetails").appendTo(d);
    $("<div/>").addClass("headingTitle").html(displayText("equipment_select_title")).appendTo(d1);
    $("<div/>").addClass("headingDescription").html(displayText("equipment_select_desc")).appendTo(d1);
    var headerActions = $("<div/>").addClass("headerActions").appendTo(d);
    if (HeroManager.onlyImprove) $("<div/>").addClass("onlyImprovement enabled").attr("id", "onlyImprovToggle").html("".concat(miscIcons.toggleOn, " ").concat(displayText("show_only_improve"))).appendTo(headerActions);
    else $("<div/>").addClass("onlyImprovement").attr("id", "onlyImprovToggle").html("".concat(miscIcons.toggleOff, " ").concat(displayText("show_only_improve"))).appendTo(headerActions);
    $("<div/>").addClass("heroEquipRecipes actionButton").attr("id", "heroEquipRecipes").data("hid", heroID).html(displayText("hero_equip_recipes")).appendTo(headerActions);
    var equipCardsContainer = $("<div/>").addClass("equipCardsContainer").appendTo($heroEquipmentList);
    var gearFromInventory = [];
    hero.gearTypes().forEach(function (type) {
        Inventory.listbyType(type).forEach(function (container) {
            if (hero.isUpgrade(container) || !HeroManager.onlyImprove) gearFromInventory.push(container)
        })
    });
    if (gearFromInventory.length === 0) {
        $("<div/>").addClass("noGearMessage").html(displayText("no_equipment_desc")).appendTo($heroEquipmentList);
        return
    }
    gearFromInventory.forEach(function (itemContainer) {
        equipCardsContainer.append(heroEquipCard(hero, itemContainer, skipAnimation))
    })
}

function viewEquippableRecipes(heroID) {
    var hero = HeroManager.idToHero(heroID);
    $heroEquipmentList.empty();
    var d = $("<div/>").addClass("equipCardsHeadingContainer").appendTo($heroEquipmentList);
    var d1 = $("<div/>").addClass("headingDetails").appendTo(d);
    $("<div/>").addClass("headingTitle").html(displayText("recipe_select_title_equip")).appendTo(d1);
    $("<div/>").addClass("headingDescription").html(displayText("recipe_select_desc_equip")).appendTo(d1);
    var headerActions = $("<div/>").addClass("headerActions").appendTo(d);
    $("<div/>").addClass("heroEquipRecipes actionButton").attr("id", "heroEquipRecipesBack").data("hid", heroID).html("".concat(miscIcons.back, "&nbsp;&nbsp;").concat(displayText("hero_equip_recipes_back"))).appendTo(headerActions);
    var d2 = $("<div/>").addClass("equipCardsContainer").appendTo($heroEquipmentList);
    hero.gearTypes().forEach(function (type) {
        var recipe = recipeList.highestByType(type);
        if (recipe === null) return;
        equipRecipeCard(recipe).appendTo(d2)
    })
}

function equipRecipeCard(recipe) {
    var d = $("<div/>").addClass("recipeCardInfo");
    var d1 = $("<div/>").addClass("recipeCardFront").appendTo(d);
    $("<div/>").addClass("recipeName").html(recipe.itemPicName()).appendTo(d1);
    $("<div/>").addClass("recipeDescription tooltip").attr({
        "data-tooltip": "recipe_desc",
        "data-tooltip-value": recipe.id
    }).html("<i class='fas fa-info-circle'></i>").appendTo(d1);
    $("<div/>").addClass("itemLevel").html(recipe.itemLevel()).appendTo(d1);
    $("<div/>").addClass("recipeCraft").data("rid", recipe.id).html('<i class="fas fa-hammer"></i><span>Craft</span>').appendTo(d1);
    return d
}
$heroEquipmentList.on("click", ".recipeCraft", function (e) {
    e.preventDefault();
    var rid = $(e.currentTarget).data("rid");
    actionSlotManager.addSlot(rid)
});

function heroEquipCard(hero, itemContainer, skipAnimation) {
    var equippedItem = hero.getSlot(itemContainer.type).gear;
    var card = $("<div/>").addClass("gearItem").addClass("R" + itemContainer.rarity).data({
        heroID: hero.id,
        uniqueID: itemContainer.uniqueID()
    });
    $("<div/>").addClass("itemName").html(itemContainer.picName()).appendTo(card);
    $("<div/>").addClass("itemLevel").html(itemContainer.itemLevel()).appendTo(card);
    if (skipAnimation) card.css({
        animation: "none"
    });
    $("<div/>").addClass("itemRarity").addClass("RT".concat(itemContainer.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[itemContainer.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(card);
    var equippedStats = equippedItem ? equippedItem.itemStat() : blankItemStat;
    var d3 = $("<div/>").addClass("equipStats").appendTo(card);
    for (var _i4 = 0, _Object$entries4 = Object.entries(itemContainer.itemStat()); _i4 < _Object$entries4.length; _i4++) {
        var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i4], 2),
            stat = _Object$entries4$_i[0],
            val = _Object$entries4$_i[1];
        var deltaStat = val - equippedStats[stat];
        if (deltaStat === 0 && val === 0) continue;
        var d3a = $("<div/>").addClass("gearStat tooltip").attr("data-tooltip", stat).appendTo(d3);
        var d3a1 = $("<div/>").addClass("".concat(stat, "_img")).appendTo(d3a);
        var d3a2 = $("<div/>").addClass("".concat(stat, "_integer statValue")).appendTo(d3a);
        if (deltaStat > 0) {
            d3a.addClass("gearStatPositive");
            d3a1.html(miscIcons[stat]);
            d3a2.html("".concat(val, " (+").concat(deltaStat, ")"))
        } else if (deltaStat < 0) {
            d3a.addClass("gearStatNegative");
            d3a1.html(miscIcons[stat]);
            d3a2.html("".concat(val, " (").concat(deltaStat, ")"))
        } else {
            d3a1.html(miscIcons[stat]);
            d3a2.html("".concat(val))
        }
    }
    return card
}

function unequipSlot(heroID, type) {
    var hero = HeroManager.idToHero(heroID);
    hero.unequip(type);
    if (type === "Trinkets") showHeroExtra();
    else showHeroGear()
}

function updateHeroStats() {
    HeroManager.heroes.forEach(function (hero) {
        var heroCard = $(".heroOwnedCard[data-value=".concat(hero.id, "]"));
        $(heroCard).find(".pow_integer").html(hero.getPow());
        $(heroCard).find(".hp_integer").html(hero.maxHP())
    })
}

function equipHeroRecipesButton(e) {
    openTab("recipes");
    var type = $(e.target).data("recipeType");
    recipeList.recipeFilterScope = "itemType";
    recipeList.recipeFilterType = type;
    recipeList.recipeFilterString = "";
    refreshRecipeFilters();
    recipeFilterList();
    $(".recipeScopeName").removeClass("selectedRecipeScope");
    $("#rs-".concat(recipeList.recipeFilterScope)).addClass("selectedRecipeScope");
    $(".recipeSelect").removeClass("selectedRecipeFilter");
    $("#rf".concat(type)).addClass("selectedRecipeFilter")
}
$heroEquipmentList.on("click", ".equipRecipeButton", function (e) {
    e.preventDefault();
    equipHeroRecipesButton(e)
});
var $heroBackButton = $(".heroBackButton");
$heroBackButton.on("click", function (e) {
    e.preventDefault();
    if (heroOverviewLast) openTab("heroes_overview");
    else openTab("heroes_compare")
});
$heroList.on("click", ".emptyHeroSlotMarket", function (e) {
    e.preventDefault();
    openTab("market")
});
var $heroContainer = $("#heroContainer");
$heroContainer.on("click", ".heroInspect", function (e) {
    e.preventDefault();
    var ID = $(e.currentTarget).attr("data-value");
    openTab("heroes_" + ID)
});

function showHero(ID) {
    HeroManager.heroView = ID;
    $(".heroOwnedCard[data-value=".concat(ID)).removeClass("hasEvent");
    $heroInspectBox.addClass("isOpened");
    inspectHeroPreview(HeroManager.idToHero(ID));
    showTab(HeroManager.tabSelected)
}
var $heroTabClass = $(".heroTab");
$heroTabClass.on("click", function (e) {
    e.preventDefault();
    if ($(e.currentTarget).hasClass("heroTabLocked")) return;
    $(".heroTab").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    var tabType = $(e.currentTarget).attr("data-herotabid");
    if (HeroManager.tabSelected === tabType) return;
    showTab(tabType)
});

function showTab(tabName) {
    HeroManager.tabSelected = tabName;
    if (tabName === "Details") showHeroDetails();
    if (tabName === "Equipment") showHeroGear();
    if (tabName === "Extra") showHeroExtra()
}
var $heroTabContent = $(".heroTabContent");
$heroTabContent.on("click", "div.gearItem", function (e) {
    e.preventDefault();
    var heroID = $(e.currentTarget).data("heroID");
    var uniqueID = $(e.currentTarget).data("uniqueID");
    Inventory.equipHero(heroID, uniqueID);
    showTab(HeroManager.tabSelected);
    updateHeroStats();
    destroyTooltip()
});
$heroTabContent.on("click", ".heroUnequipSlot", function (e) {
    e.stopPropagation();
    e.preventDefault();
    var heroID = $(e.currentTarget).data("heroID");
    var gearType = $(e.currentTarget).data("gearType");
    unequipSlot(heroID, gearType);
    examineHeroPossibleEquip(heroID, gearType);
    updateHeroStats();
    destroyTooltip()
});
$heroEquipTrophy.on("click", ".equipTrophy", function (e) {
    e.preventDefault();
    equipTrophies()
});
$heroOverall.on("click", function (e) {
    e.preventDefault();
    if (heroOverviewLast) openTab("heroes_compare");
    else openTab("heroes_overview")
});
$heroEquipmentList.on("click", "#onlyImprovToggle", function (e) {
    e.preventDefault();
    HeroManager.onlyImprove = !HeroManager.onlyImprove;
    examineHeroPossibleEquip(HeroManager.heroView)
});
$heroEquipmentList.on("click", "#heroEquipRecipes", function (e) {
    e.preventDefault();
    var heroID = $(e.currentTarget).data("hid");
    viewEquippableRecipes(heroID)
});
$heroEquipmentList.on("click", "#heroEquipRecipesBack", function (e) {
    e.preventDefault();
    var heroID = $(e.currentTarget).data("hid");
    examineHeroPossibleEquip(heroID)
});
"use strict";

function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj
        }
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj
        }
    }
    return _typeof(obj)
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call
    }
    return _assertThisInitialized(self)
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
    }
    return self
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o)
    };
    return _getPrototypeOf(o)
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function")
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass)
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o
    };
    return _setPrototypeOf(o, p)
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var MobManager = {
    monsterDB: [],
    idCount: 0,
    addMob: function addMob(mob) {
        this.monsterDB.push(mob)
    },
    idToMob: function idToMob(id) {
        return this.monsterDB.find(function (mob) {
            return mob.id === id
        })
    },
    getUniqueID: function getUniqueID() {
        this.idCount += 1;
        return this.idCount
    },
    generateMob: function generateMob(mobID, dungeon) {
        disableEventLayers();
        var mobTemplate = this.monsterDB.find(function (m) {
            return m.id === mobID
        });
        if (dungeon.type === "boss") {
            var boss = new Mob(mobTemplate, 0, 0, dungeon.difficulty());
            boss.difficulty = dungeon.difficulty()
        }
        var atk = dungeon.pow + 10 * (dungeon.floor - 1) * dungeon.powGain;
        var hp = dungeon.hp + 10 * (dungeon.floor - 1) * dungeon.hpGain;
        var mob = new Mob(mobTemplate, atk, hp, dungeon.difficulty());
        return mob
    }
};
var MobTemplate = function () {
    function MobTemplate(props) {
        _classCallCheck(this, MobTemplate);
        Object.assign(this, props);
        this.image = '<img src="assets/images/enemies/' + this.id + '.gif">';
        this.head = '<img src="assets/images/enemies/heads/' + this.id + '.png">'
    }
    _createClass(MobTemplate, [{
        key: "getSkillIDs",
        value: function getSkillIDs() {
            return [this.skill1, this.skill2, this.skill3, this.skill4]
        }
    }, {
        key: "getSkillIcons",
        value: function getSkillIcons() {
            return [SkillManager.idToSkill(this.skill1).icon, SkillManager.idToSkill(this.skill2).icon, SkillManager.idToSkill(this.skill3).icon, SkillManager.idToSkill(this.skill4).icon]
        }
    }]);
    return MobTemplate
}();
var Mob = function (_Combatant) {
    _inherits(Mob, _Combatant);

    function Mob(mobTemplate, atk, hp, difficulty) {
        var _this;
        _classCallCheck(this, Mob);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Mob).call(this, mobTemplate));
        if (_this.event === "boss") {
            _this.pow = Math.floor(_this.powMod * Math.pow(1.3, difficulty));
            _this.hpmax = Math.floor(_this.hpMod * Math.pow(1.3, difficulty));
            _this.hp = Math.floor(_this.hpMod * Math.pow(1.3, difficulty))
        } else {
            _this.pow = Math.floor(atk * _this.powMod);
            _this.hpmax = Math.floor(hp * _this.hpMod);
            _this.hp = _this.hpmax
        }
        _this.state = null;
        _this.uniqueid = MobManager.getUniqueID();
        _this.playbook = PlaybookManager.generatePlayBookFromSkills(_this.skill1, _this.skill2, _this.skill3, _this.skill4);
        _this.passive = SkillManager.idToSkill(_this.passiveSkill);
        return _this
    }
    _createClass(Mob, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.uniqueid = this.uniqueid;
            save.pow = this.pow;
            save.atk = this.atk;
            save.hp = this.hp;
            save.hpmax = this.hpmax;
            save.buffs = [];
            this.buffs.forEach(function (buff) {
                save.buffs.push(buff.createSave())
            });
            save.state = this.state;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            var _this2 = this;
            this.uniqueid = save.uniqueid;
            this.pow = save.pow;
            this.hp = save.hp;
            this.hpmax = save.hpmax;
            if (save.buffs !== undefined) {
                save.buffs.forEach(function (buff) {
                    var newBuff = BuffManager.generateSaveBuff(buff.id, _this2, buff.power, buff.power2);
                    newBuff.loadSave(buff);
                    _this2.buffs.push(newBuff)
                })
            }
            this.state = save.state;
            adjustState(this)
        }
    }]);
    return Mob
}(Combatant);

function adjustState(mob) {
    if (mob.state === "egg") {
        mob.image = '<img src="assets/images/enemies/B902A.gif">';
        $("#mobImage" + mob.uniqueid).html(mob.image);
        mob.playbook = PlaybookManager.generatePlayBookFromSkills("SM902A", "SM902A", "SM902A", "SM902B")
    }
}
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var DungeonStatus = Object.freeze({
    EMPTY: 0,
    ADVENTURING: 1,
    SUCCESS: 2,
    FAILURE: 3
});
var TurnOrder = function () {
    function TurnOrder(heroes, mobs) {
        _classCallCheck(this, TurnOrder);
        this.heroes = heroes;
        this.mobs = mobs;
        this.order = interlace(heroes, mobs);
        this.position = 0;
        this.nextNotDead()
    }
    _createClass(TurnOrder, [{
        key: "nextNotDead",
        value: function nextNotDead() {
            while (this.order[this.position].dead()) {
                this.position += 1
            }
        }
    }, {
        key: "getOrder",
        value: function getOrder() {
            return this.order
        }
    }, {
        key: "nextTurn",
        value: function nextTurn() {
            return this.order[this.position]
        }
    }, {
        key: "nextPosition",
        value: function nextPosition() {
            this.position += 1;
            if (this.position === this.order.length) this.position = 0;
            if (this.order[this.position].dead()) this.nextPosition()
        }
    }, {
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.position = this.position;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.position = save.position
        }
    }, {
        key: "getCurrentID",
        value: function getCurrentID() {
            return this.currentTurn().uniqueid
        }
    }, {
        key: "currentTurn",
        value: function currentTurn() {
            return this.order[this.position]
        }
    }, {
        key: "adjustOrder",
        value: function adjustOrder(heroes, mobs) {
            var uniqueid = this.getCurrentID();
            this.heroes = heroes;
            this.mobs = mobs;
            this.order = interlace(heroes, mobs);
            this.position = this.order.findIndex(function (m) {
                return m.uniqueid === uniqueid
            })
        }
    }, {
        key: "positionInParty",
        value: function positionInParty() {
            var uniqueid = this.order[this.position].uniqueid;
            var huid = this.heroes.map(function (h) {
                return h.uniqueid
            });
            var muid = this.mobs.map(function (m) {
                return m.uniqueid
            });
            if (huid.includes(uniqueid)) return huid.findIndex(function (h) {
                return h === uniqueid
            });
            return muid.findIndex(function (m) {
                return m === uniqueid
            })
        }
    }]);
    return TurnOrder
}();
var Area = function () {
    function Area(props) {
        _classCallCheck(this, Area);
        Object.assign(this, props);
        this.dungeons = [];
        this.lastVisitedDungeon = null
    }
    _createClass(Area, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.lastVisitedDungeon = this.lastVisitedDungeon;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            if (save.lastVisitedDungeon !== undefined) this.lastVisitedDungeon = save.lastVisitedDungeon;
            return
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.lastVisitedDungeon = null
        }
    }, {
        key: "unlocked",
        value: function unlocked() {
            return this.dungeons.some(function (d) {
                return d.unlocked()
            })
        }
    }, {
        key: "addDungeon",
        value: function addDungeon(dungeon) {
            dungeon.area = this.id;
            this.dungeons.push(dungeon)
        }
    }, {
        key: "status",
        value: function status() {
            if (this.dungeons.some(function (d) {
                    return d.status === DungeonStatus.ADVENTURING
                })) return DungeonStatus.ADVENTURING;
            if (this.dungeons.some(function (d) {
                    return d.status === DungeonStatus.SUCCESS
                })) return DungeonStatus.SUCCESS;
            if (this.dungeons.some(function (d) {
                    return d.status === DungeonStatus.FAILURE
                })) return DungeonStatus.FAILURE;
            return DungeonStatus.EMPTY
        }
    }, {
        key: "activeParty",
        value: function activeParty() {
            var dungeon = this.dungeons.find(function (d) {
                return d.status === DungeonStatus.ADVENTURING || d.status === DungeonStatus.SUCCESS || d.status === DungeonStatus.FAILURE
            });
            return dungeon.party
        }
    }, {
        key: "activeDungeonID",
        value: function activeDungeonID() {
            var dungeon = this.activeDungeon();
            return dungeon ? dungeon.id : dungeon
        }
    }, {
        key: "activeDungeon",
        value: function activeDungeon() {
            var dungeon = this.dungeons.find(function (d) {
                return d.status === DungeonStatus.ADVENTURING || d.status === DungeonStatus.SUCCESS || d.status === DungeonStatus.FAILURE
            });
            return dungeon ? dungeon : null
        }
    }, {
        key: "activeDungeonName",
        value: function activeDungeonName() {
            return this.activeDungeon().name
        }
    }, {
        key: "lastOpen",
        value: function lastOpen() {
            var dungeons = this.dungeons.filter(function (d) {
                return d.unlocked()
            });
            return dungeons[dungeons.length - 1]
        }
    }, {
        key: "setLastDungeon",
        value: function setLastDungeon(dungeonID) {
            this.lastVisitedDungeon = dungeonID
        }
    }, {
        key: "allBuffs",
        value: function allBuffs() {
            return this.dungeons.map(function (a) {
                return a.allBuffs()
            })
        }
    }]);
    return Area
}();
var AreaManager = {
    areas: [],
    areaView: null,
    addArea: function addArea(area) {
        this.areas.push(area)
    },
    createSave: function createSave() {
        var save = {};
        save.areas = [];
        this.areas.forEach(function (area) {
            return save.areas.push(area.createSave())
        })
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.areas.forEach(function (areaSave) {
            var area = _this.idToArea(areaSave.id);
            area.loadSave(areaSave)
        })
    },
    clearProgress: function clearProgress() {
        this.areaView = null;
        this.areas.forEach(function (a) {
            return a.clearProgress()
        })
    },
    idToArea: function idToArea(areaID) {
        return this.areas.find(function (a) {
            return a.id === areaID
        })
    },
    addDungeon: function addDungeon(dungeon) {
        var area = this.idToArea(dungeon.area);
        area.addDungeon(dungeon)
    },
    allBuffs: function allBuffs() {
        return this.areas.map(function (a) {
            return a.allBuffs()
        }).flat().flat().flat()
    }
};
var Dungeon = function () {
    function Dungeon(props) {
        _classCallCheck(this, Dungeon);
        Object.assign(this, props);
        this.party = null;
        this.mobs = [];
        this.setMobIDs();
        this.maxFloor = 0;
        this.floor = 1;
        this.floorClear = 0;
        this.order = null;
        this.status = DungeonStatus.EMPTY;
        this.lastParty = null;
        this.lastPlaybook = [];
        this.dungeonTime = 0;
        this.rewardTime = 0;
        this.rewardAmt = 0;
        this.rewardTimeRate = 0;
        this.rewardTimeRateRound = 0
    }
    _createClass(Dungeon, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            if (this.party !== null) save.party = this.party.createSave();
            else save.party = null;
            save.mobs = [];
            this.mobs.forEach(function (mob) {
                save.mobs.push(mob.createSave())
            });
            save.maxFloor = this.maxFloor;
            save.floor = this.floor;
            save.floorClear = this.floorClear;
            if (this.order !== null) save.order = this.order.createSave();
            else save.order = null;
            save.status = this.status;
            save.lastParty = this.lastParty;
            save.lastPlaybook = this.lastPlaybook;
            save.rewardAmt = this.rewardAmt;
            save.rewardTimeRate = this.rewardTimeRate;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            var _this2 = this;
            if (save.party) this.party = new Party(save.party.heroID);
            if (save.mobs) save.mobs.forEach(function (mobSave) {
                var mobTemplate = MobManager.idToMob(mobSave.id);
                var mob = new Mob(mobTemplate, 0, 0);
                mob.loadSave(mobSave);
                _this2.mobs.push(mob)
            });
            if (save.maxFloor !== undefined) this.maxFloor = save.maxFloor;
            if (save.floor !== undefined) this.floor = save.floor;
            if (save.floorClear !== undefined) this.floorClear = save.floorClear;
            if (save.order) {
                this.order = new TurnOrder(this.party.heroes, this.mobs);
                this.order.loadSave(save.order)
            }
            if (save.status) this.status = save.status;
            if (save.lastParty) this.lastParty = save.lastParty;
            if (save.lastPlaybook) this.lastPlaybook = save.lastPlaybook;
            if (save.rewardAmt) this.rewardAmt = save.rewardAmt;
            if (save.rewardTimeRate) this.rewardTimeRate = save.rewardTimeRate
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.party = null;
            this.mobs = [];
            this.setMobIDs();
            this.maxFloor = 0;
            this.floor = 1;
            this.floorClear = 0;
            this.order = null;
            this.status = DungeonStatus.EMPTY;
            this.lastParty = null;
            this.dungeonTime = 0;
            this.rewardTime = 0;
            this.rewardAmt = 0;
            this.rewardTimeRate = 0;
            this.rewardTimeRateRound = 0
        }
    }, {
        key: "addTime",
        value: function addTime(t) {
            if (this.status !== DungeonStatus.ADVENTURING) return;
            this.dungeonTime += Math.min(t, 36e5);
            var dungeonWaitTime = DungeonManager.speed;
            var refreshLater = this.dungeonTime >= DungeonManager.speed * 2;
            CombatManager.refreshLater = refreshLater;
            this.addDungeonReward(t, refreshLater);
            while (this.dungeonTime >= dungeonWaitTime) {
                this.dungeonTime -= dungeonWaitTime;
                var attacker = this.order.nextTurn();
                attacker.buffTick("onMyTurn");
                this.buffTick("onTurn", refreshLater);
                this.passiveCheck("onTurn", refreshLater);
                if (this.mobs.every(function (m) {
                        return m.dead()
                    })) {
                    this.nextFloor(refreshLater);
                    return
                } else if (this.party.isDead()) {
                    this.previousFloor(refreshLater, true);
                    return
                }
                if (!refreshLater && DungeonManager.dungeonView === this.id) $("#beatbarFill".concat(this.order.getCurrentID())).css("width", "0%");
                if (attacker.alive()) CombatManager.executeTurn(this);
                if (!refreshLater && DungeonManager.dungeonView === this.id) refreshTurnOrder(this.id);
                if (this.mobs.every(function (m) {
                        return m.dead()
                    })) {
                    this.nextFloor(refreshLater)
                } else if (this.party.isDead()) {
                    this.previousFloor(refreshLater, true)
                } else {
                    this.order.nextPosition()
                }
            }
            if (refreshLater) {
                initiateDungeonFloor(this.id)
            }
            if (DungeonManager.dungeonView === this.id) refreshBeatBar(this.order.getCurrentID(), this.dungeonTime)
        }
    }, {
        key: "setMobIDs",
        value: function setMobIDs() {
            this.mobIDs = [];
            this.mobIDs.push(this.mob1);
            if (this.mob2 !== null) this.mobIDs.push(this.mob2);
            if (this.mob3 !== null) this.mobIDs.push(this.mob3);
            if (this.mob4 !== null) this.mobIDs.push(this.mob4)
        }
    }, {
        key: "addDungeonReward",
        value: function addDungeonReward(time, skipAnimation) {
            if (this.type === "boss" || this.floorClear === 0) return;
            this.rewardTime += time;
            while (this.rewardTime > this.rewardTimeRate) {
                this.rewardTime -= this.rewardTimeRate;
                ResourceManager.addMaterial(this.mat, this.rewardAmt, skipAnimation)
            }
            if (!skipAnimation) refreshDungeonMatBar(this.id)
        }
    }, {
        key: "setRewardRate",
        value: function setRewardRate(floor) {
            this.floorClear = Math.max(floor, this.floorClear);
            this.rewardAmt = Math.ceil(floor / 4);
            var rewardRate = Math.floor(floor - 1) * .25 + 1;
            this.rewardTimeRate = this.rewardAmt * 1e4 / rewardRate;
            this.rewardTimeRateRound = (this.rewardTimeRate / 1e3).toFixed(1)
        }
    }, {
        key: "initializeParty",
        value: function initializeParty(party) {
            this.party = party;
            this.lastParty = party.heroID;
            this.lastPlaybook = party.playbooks
        }
    }, {
        key: "resetDungeon",
        value: function resetDungeon(noScreen) {
            if (this.status !== DungeonStatus.ADVENTURING && this.status !== DungeonStatus.SUCCESS && this.status !== DungeonStatus.FAILURE) return;
            this.party.heroes.forEach(function (h) {
                h.hp = h.maxHP();
                h.buffs = []
            });
            this.status = DungeonStatus.EMPTY;
            this.party = null;
            this.order = null;
            this.mobs = [];
            this.setMobIDs();
            this.floor = 1;
            this.floorClear = 0;
            this.dungeonTime = 0;
            this.rewardAmt = 0;
            this.rewardTimeRate = 0;
            this.rewardTime = 0;
            if (!noScreen) {
                if (DungeonManager.dungeonView === this.id) openTab("dungeons_overview");
                dungeonsTabClicked()
            }
            initializeSideBarDungeon();
            return
        }
    }, {
        key: "previousFloor",
        value: function previousFloor(refreshLater) {
            if (this.type === "boss") return this.status = DungeonStatus.FAILURE;
            this.floor = Math.max(1, this.floor - 1);
            this.resetFloor(refreshLater)
        }
    }, {
        key: "nextFloor",
        value: function nextFloor(refreshLater) {
            if (this.type === "boss") {
                this.maxFloor += 1;
                if (this.id === "D410" && this.maxFloor === 1) setDialogOpen(DialogManager.findDialog("end_commendation"));
                if (!refreshLater) {
                    if (openedTabEquals("merchantOrder")) refreshShopOrder()
                }
                this.status = DungeonStatus.SUCCESS;
                if (DungeonManager.dungeonView === this.id) initiateDungeonFloor(this.id, refreshLater);
                achievementStats.bossBeat(this.id);
                return
            }
            this.setRewardRate(this.floor);
            this.maxFloor = Math.max(this.maxFloor, this.floor);
            this.floor += 1;
            achievementStats.floorRecord(this.id, this.maxFloor);
            this.resetFloor(refreshLater)
        }
    }, {
        key: "resetFloor",
        value: function resetFloor(refreshLater) {
            var _this3 = this;
            this.mobs = [];
            this.setMobIDs();
            this.mobIDs.forEach(function (mobID) {
                var mob = MobManager.generateMob(mobID, _this3);
                mob.dungeonid = _this3.id;
                _this3.mobs.push(mob)
            });
            this.party.reset();
            this.order = new TurnOrder(this.party.heroes, this.mobs);
            this.mobs.forEach(function (mob) {
                return mob.passiveCheck("initial", null, refreshLater)
            });
            this.party.heroes.forEach(function (hero) {
                return hero.passiveCheck("initial", null, refreshLater)
            });
            if (refreshLater) return;
            var text = this.floorClear === 0 ? "".concat(this.name) : "".concat(this.name, " - ").concat(this.floorClear);
            $("#dsb" + this.id).html(text);
            refreshSidebarDungeonMats(this.id);
            if (DungeonManager.dungeonView === this.id) initiateDungeonFloor(this.id)
        }
    }, {
        key: "bossHPStyling",
        value: function bossHPStyling() {
            if (this.type !== "boss") return "0 (0%)";
            var boss = this.mobs.find(function (m) {
                return m.event === "boss"
            });
            return "".concat(formatToUnits(boss.hp, 2), " (").concat(Math.round(100 * boss.hp / boss.maxHP()) + "%", ")")
        }
    }, {
        key: "difficulty",
        value: function difficulty() {
            if (this.type === "regular") return 0;
            return this.maxFloor
        }
    }, {
        key: "buffTick",
        value: function buffTick(type, refreshLater) {
            this.party.heroes.forEach(function (hero) {
                hero.buffTick(type, null, refreshLater)
            });
            this.mobs.forEach(function (enemy) {
                enemy.buffTick(type, null, refreshLater)
            })
        }
    }, {
        key: "passiveCheck",
        value: function passiveCheck(type, refreshLater) {
            this.party.heroes.forEach(function (hero) {
                hero.passiveCheck(type, null, refreshLater)
            });
            this.mobs.forEach(function (enemy) {
                enemy.passiveCheck(type, null, refreshLater)
            })
        }
    }, {
        key: "getRewards",
        value: function getRewards() {
            return new idAmt(this.mat, this.rewardAmt)
        }
    }, {
        key: "unlocked",
        value: function unlocked() {
            if (this.unlockedBy === null) return true;
            if (this.unlockedBy === "locked") return false;
            if (this.unlockedBy.charAt(0) === "A") return Shop.alreadyPurchased(this.unlockedBy);
            if (!Shop.alreadyPurchased("AL20081")) return false;
            var bossDungeon = DungeonManager.dungeonByID(this.unlockedBy);
            return bossDungeon.beaten()
        }
    }, {
        key: "beaten",
        value: function beaten() {
            return this.maxFloor > 0
        }
    }, {
        key: "addMob",
        value: function addMob(mobID, first) {
            var refreshLater = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
            var mob = MobManager.generateMob(mobID, this);
            mob.dungeonid = this.id;
            if (first) {
                this.mobs.unshift(mob);
                this.mobIDs.unshift(mobID)
            } else {
                this.mobs.push(mob);
                this.mobIDs.push(mobID)
            }
            this.order.adjustOrder(this.party.heroes, this.mobs);
            mob.passiveCheck("initial", null);
            if (!refreshLater && DungeonManager.dungeonView === this.id) initiateDungeonFloor(this.id)
        }
    }, {
        key: "removeMob",
        value: function removeMob(uniqueid) {
            var refreshLater = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.mobs = this.mobs.filter(function (m) {
                return m.uniqueid !== uniqueid
            });
            this.mobIDs = this.mobs.map(function (m) {
                return m.id
            });
            this.order.adjustOrder(this.party.heroes, this.mobs);
            if (!refreshLater && DungeonManager.dungeonView === this.id) initiateDungeonFloor(this.id)
        }
    }, {
        key: "refreshDungeon",
        value: function refreshDungeon() {
            if (DungeonManager.dungeonView === this.id) initiateDungeonFloor(this.id)
        }
    }, {
        key: "allBuffs",
        value: function allBuffs() {
            if (!this.party) return [];
            return this.party.heroes.map(function (h) {
                return h.buffs
            }).concat(this.mobs.map(function (m) {
                return m.buffs
            }))
        }
    }, {
        key: "hasMember",
        value: function hasMember(heroID) {
            if (this.party === null) return false;
            return this.party.hasMember(heroID)
        }
    }]);
    return Dungeon
}();
var DungeonManager = {
    dungeons: [],
    trophies: [],
    dungeonView: null,
    speed: 1500,
    speedText: 1,
    createSave: function createSave() {
        var save = {};
        save.dungeons = [];
        this.dungeons.forEach(function (d) {
            save.dungeons.push(d.createSave())
        });
        save.speed = this.speed;
        save.speedText = this.speedText;
        return save
    },
    loadSave: function loadSave(save) {
        save.dungeons.forEach(function (d) {
            var dungeon = DungeonManager.dungeonByID(d.id);
            dungeon.loadSave(d)
        });
        if (save.speed !== undefined) this.speed = save.speed;
        if (save.speedText !== undefined) this.speedText = save.speedText
    },
    clearProgress: function clearProgress() {
        this.dungeonView = null;
        this.dungeons.forEach(function (d) {
            return d.clearProgress()
        })
    },
    addDungeon: function addDungeon(dungeon) {
        this.dungeons.push(dungeon);
        AreaManager.addDungeon(dungeon)
    },
    addTrophy: function addTrophy(trophy) {
        this.trophies.push(trophy)
    },
    idToTrophy: function idToTrophy(trophyID) {
        return this.trophies.find(function (t) {
            return t.id === trophyID
        })
    },
    addTime: function addTime(t) {
        this.dungeons.forEach(function (dungeon) {
            dungeon.addTime(t)
        })
    },
    dungeonStatus: function dungeonStatus(dungeonID) {
        return this.dungeons.find(function (d) {
            return d.id === dungeonID
        }).status
    },
    createDungeon: function createDungeon(dungeonID, floorSkip) {
        var party = PartyCreator.lockParty();
        var dungeon = this.dungeonByID(dungeonID);
        dungeon.floor = floorSkip ? Math.max(1, dungeon.maxFloor) : 1;
        dungeon.status = DungeonStatus.ADVENTURING;
        this.dungeonView = dungeonID;
        var area = AreaManager.idToArea(dungeon.area);
        area.setLastDungeon(dungeonID);
        dungeon.initializeParty(party);
        dungeon.resetFloor();
        initializeSideBarDungeon()
    },
    dungeonByID: function dungeonByID(dungeonID) {
        return this.dungeons.find(function (d) {
            return d.id === dungeonID
        })
    },
    dungeonByMat: function dungeonByMat(matID) {
        return this.dungeons.find(function (d) {
            return d.mat === matID
        })
    },
    abandonCurrentDungeon: function abandonCurrentDungeon() {
        var dungeon = this.dungeonByID(this.dungeonView);
        dungeon.resetDungeon()
    },
    abandonAllDungeons: function abandonAllDungeons() {
        this.dungeons.forEach(function (dungeon) {
            dungeon.resetDungeon()
        })
    },
    abandonDungeon: function abandonDungeon(areaID) {
        var dungeon = this.dungeons.find(function (d) {
            return d.status === DungeonStatus.ADVENTURING && d.area === areaID
        });
        if (dungeon) {
            dungeon.resetDungeon();
            return true
        }
        return false
    },
    bossCount: function bossCount() {
        var bossDung = this.dungeons.filter(function (d) {
            return d.type === "boss"
        });
        return bossDung.filter(function (d) {
            return d.maxFloor > 0
        }).length
    },
    bossRefightPerformed: function bossRefightPerformed() {
        var bossDung = this.dungeons.filter(function (d) {
            return d.type === "boss"
        });
        return bossDung.some(function (d) {
            return d.maxFloor >= 2
        })
    },
    availableUpgrades: function availableUpgrades() {
        var bossDung = this.dungeons.filter(function (d) {
            return d.type === "boss"
        }).map(function (d) {
            return d.maxFloor
        });
        return bossDung.reduce(function (a, b) {
            return a + b
        })
    },
    beaten: function beaten(dungeonID) {
        var dungeon = this.dungeonByID(dungeonID);
        return dungeon.beaten()
    },
    bossRefightUnlocked: function bossRefightUnlocked() {
        return Shop.alreadyPurchased("AL3007")
    },
    heroLocked: function heroLocked(heroID) {
        return this.dungeons.some(function (d) {
            return d.hasMember(heroID)
        })
    },
    availableSpeeds: function availableSpeeds() {
        var speeds = [1];
        if (Shop.alreadyPurchased("AL2048")) speeds.push(2);
        if (Shop.alreadyPurchased("AL2049")) speeds.push(4);
        if (Shop.alreadyPurchased("AL2050")) speeds.push(8);
        return speeds
    },
    setSpeed: function setSpeed(spd) {
        var dungeon = this.dungeonByID(this.dungeonView);
        dungeon.dungeonTime = Math.floor(dungeon.dungeonTime / this.speed * Math.floor(1500 / spd));
        this.speedText = spd;
        this.speed = Math.floor(1500 / spd)
    },
    releaseHero: function releaseHero(heroid) {
        var dungeon = this.dungeons.find(function (d) {
            return d.hasMember(heroid)
        });
        if (dungeon) dungeon.resetDungeon(true)
    }
};

function refreshDungeonDead(uniqueid) {
    if (!DungeonManager.dungeonView) return;
    var dungeon = DungeonManager.dungeonByID(DungeonManager.dungeonView);
    if (dungeon.mobs.map(function (m) {
            return m.uniqueid
        }).includes(uniqueid)) $("#dfm" + uniqueid).addClass("mobDead");
    if (dungeon.party.heroes.map(function (h) {
            return h.uniqueid
        }).includes(uniqueid)) $("#dfc" + uniqueid).addClass("heroDead")
}
var Trophy = function () {
    function Trophy(props) {
        _classCallCheck(this, Trophy);
        Object.assign(this, props);
        this.image = "<img src='assets/images/recipes/Trophies/" + this.id + ".png'>";
        this.dungeonRef = DungeonManager.dungeonByID(this.dungeon)
    }
    _createClass(Trophy, [{
        key: "lvl",
        value: function lvl() {
            return this.dungeonRef.maxFloor
        }
    }, {
        key: "locked",
        value: function locked() {
            return this.dungeonRef.maxFloor === 0
        }
    }, {
        key: "updateTooltipValues",
        value: function updateTooltipValues() {
            this.levelText = this.lvl().toString();
            this.trophyTooltip = displayText("trophy_desc_" + this.id);
            this.trophyTooltip = this.trophyTooltip.replace("{pow}", this.pow());
            this.trophyTooltip = this.trophyTooltip.replace("{hp}", this.hp());
            this.trophyTooltip = this.trophyTooltip.replace("{n}", this.normal());
            this.trophyTooltip = this.trophyTooltip.replace("{s}", this.special());
            this.trophyTooltip = this.trophyTooltip.replace("{powIcon}", miscIcons.pow).replace("{powIcon}", miscIcons.pow);
            this.trophyTooltip = this.trophyTooltip.replace("{hpIcon}", miscIcons.hp)
        }
    }, {
        key: "pow",
        value: function pow() {
            if (this.powScale === null) return 0;
            return Math.floor(this.powScale * this.powMod * Math.pow(1.3, this.lvl()))
        }
    }, {
        key: "powSkill",
        value: function powSkill(skillID) {
            if (skillID === undefined) return this.pow();
            if (skillID === "S0000") return this.pow() + this.normal();
            return this.pow() + this.special()
        }
    }, {
        key: "hp",
        value: function hp() {
            if (this.hpScale === null) return 0;
            return Math.floor(this.hpScale * this.hpMod * Math.pow(1.3, this.lvl()))
        }
    }, {
        key: "normal",
        value: function normal() {
            if (this.norScale === null) return 0;
            return Math.floor(this.norScale * this.norMod * Math.pow(1.3, this.lvl()))
        }
    }, {
        key: "special",
        value: function special() {
            if (this.speScale === null) return 0;
            return Math.floor(this.speScale * this.speMod * Math.pow(1.3, this.lvl()))
        }
    }]);
    return Trophy
}();
"use strict";
var $dungeonSelect = $("#dungeonSelect");
var $trophyAssign = $("#trophyAssign");
var $areaSelect = $("#areaSelect");
var $areaTeamSelect = $("#areaTeamSelect");
var $dungeonRun = $("#dungeonRun");
var $dungeonAbandon = $(".dungeonAbandon");
var $dungeonBackButton = $(".dungeonBackButton");

function dungeonsTabClicked() {
    DungeonManager.dungeonView = null;
    $dungeonSelect.show();
    $areaSelect.show();
    $areaTeamSelect.hide();
    $dungeonRun.hide();
    refreshAreaSelect()
}

function initializeAreaSelect() {
    $areaSelect.empty();
    var adventureAreaHeaderContainer = $("<div/>").addClass("adventureAreaHeader contentHeader").prependTo($areaSelect);
    var adventureAreaHeader = $("<div/>").addClass("contentHeading").appendTo(adventureAreaHeaderContainer);
    $("<div/>").addClass("headingIcon").html('<i class="fas fa-swords"></i>').appendTo(adventureAreaHeader);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(adventureAreaHeader);
    var d = $("<div/>").addClass("headingTitle").html(displayText("header_adventure_areas_title")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_other_dungeon_overview").html(miscIcons.keyboard).appendTo(d);
    $("<div/>").addClass("headingDescription").html(displayText("header_adventure_areas_desc")).appendTo(headingDetails);
    $("<div/>").addClass("dungeonAbandonAll actionButton").attr({
        id: "dAbandonAll"
    }).html(displayText("adventure_dungeon_abandon_all")).appendTo(adventureAreaHeaderContainer);
    $("<div/>").addClass("areaListings").attr({
        id: "areaListings"
    }).appendTo($areaSelect)
}

function refreshAreaSelect() {
    $("#areaListings").empty();
    AreaManager.areas.forEach(function (area) {
        if (!area.unlocked()) return;
        createAreaBlock(area).appendTo($("#areaListings"))
    })
}

function createAreaBlock(area) {
    var statuses = ["adventure_area_status_idle", "adventure_area_status_in_progress", "adventure_area_status_success", "adventure_area_status_failure"];
    var d = $("<div/>").addClass("areaContainer").data("areaID", area.id);
    if (Tutorial.lvl === 30 && area.id === "A01") d.addClass("hasEvent");
    var e = $("<div/>").addClass("areaHeader").html(area.name).appendTo(d);
    $("<div/>").addClass("dungeonBackground").css("background-image", "url(assets/images/dungeonpreviews/".concat(area.id, ".jpg)")).appendTo(d);
    var d1 = $("<div/>").addClass("areaStatus").html(displayText(statuses[area.status()])).appendTo(d);
    if (area.status() === DungeonStatus.EMPTY) return d;
    if (area.status() === DungeonStatus.ADVENTURING) d1.addClass("statusAdventuring");
    if (area.status() === DungeonStatus.SUCCESS) d1.addClass("statusSuccess");
    if (area.status() === DungeonStatus.FAILURE) d1.addClass("statusFailure");
    e.html(area.activeDungeonName());
    var d2 = $("<div/>").addClass("areaAdventurers").appendTo(d);
    area.activeParty().heroes.forEach(function (h) {
        $("<div/>").addClass("areaHero").html(h.head).appendTo(d2)
    });
    return d
}
$areaSelect.on("click", ".areaContainer", function (e) {
    e.preventDefault();
    var areaID = $(e.currentTarget).data("areaID");
    var openDungeon = true;
    if (e.shiftKey) openDungeon = !DungeonManager.abandonDungeon(areaID);
    if (openDungeon) openTab("dungeons_" + areaID);
    else {
        initializeSideBarDungeon();
        refreshAreaSelect()
    }
});
$areaSelect.on("click", "#dAbandonAll", function (e) {
    e.preventDefault();
    DungeonManager.abandonAllDungeons();
    initializeSideBarDungeon();
    refreshAreaSelect()
});

function screenDirectDungeon(areaID) {
    $areaSelect.hide();
    $areaTeamSelect.hide();
    $dungeonRun.hide();
    var area = AreaManager.idToArea(areaID);
    if (area.status() === DungeonStatus.EMPTY) {
        PartyCreator.areaSelect = area;
        PartyCreator.dungeonSelect = null;
        startPartyCreation(false)
    } else {
        showDungeon(area.activeDungeonID())
    }
}

function showDungeon(dungeonID) {
    DungeonManager.dungeonView = dungeonID;
    $dungeonRun.show();
    initiateDungeonFloor(dungeonID)
}
$dungeonAbandon.on("click", function (e) {
    e.preventDefault();
    DungeonManager.abandonCurrentDungeon();
    initializeSideBarDungeon();
    openTab("dungeons_overview")
});
var $floorID = $("#floorID");
var $dungeonHeroList = $("#dungeonHeroList");
var $dungeonMobList = $("#dungeonMobList");
var $drTurnOrder = $("#drTurnOrder");
var $combatBackgroundContainer = $("#combatBackgroundContainer");
var $combatFloorExit = $("#combatFloorExit");
var $combatFloorStatus = $("#combatFloorStatus");
var $combatFloorHelp = $("#combatFloorHelp");

function initiateDungeonFloor(dungeonID) {
    if (DungeonManager.dungeonView !== dungeonID) return;
    if (Tutorial.lvl === 30 && dungeonID === "D101") $(".dungeonAbandon").addClass("hasEvent");
    else $("#dungeonAbandon").removeClass("hasEvent");
    var dungeon = DungeonManager.dungeonByID(DungeonManager.dungeonView);
    $dungeonRun.removeClass().addClass(dungeon.id);
    $combatBackgroundContainer.css({
        backgroundImage: "url(assets/images/dungeonBackgrounds/".concat(dungeon.area, ".jpg)")
    });
    if (dungeon.type === "boss") {
        $dungeonRun.addClass("DBoss");
        $floorID.hide()
    } else {
        $floorID.show().html("Floor " + dungeon.floor)
    }
    if (dungeon.status === DungeonStatus.ADVENTURING) {
        $combatFloorExit.hide()
    } else if (dungeon.status === DungeonStatus.SUCCESS) {
        $combatFloorExit.show();
        $combatFloorStatus.html(displayText("adventure_area_status_success")).addClass("combatFloorSuccess").removeClass("combatFloorFailure");
        $combatFloorHelp.html(displayText("adventure_area_desc_success"))
    } else if (dungeon.status === DungeonStatus.FAILURE) {
        $combatFloorExit.show();
        $combatFloorStatus.html(displayText("adventure_area_status_failure")).removeClass("combatFloorSuccess").addClass("combatFloorFailure");
        $combatFloorHelp.html(displayText("adventure_area_desc_failure"))
    }
    $dungeonHeroList.empty();
    $dungeonMobList.empty();
    dungeon.party.heroes.forEach(function (hero) {
        var d1 = $("<div/>").addClass("dfc").attr("id", "dfc" + hero.uniqueid);
        var d2 = $("<div/>").addClass("buffListContent").attr("id", "buffList" + hero.uniqueid);
        var d3 = $("<div/>").addClass("dfcName").html(hero.name);
        var d4 = $("<div/>").addClass("dfcImage").html(hero.image);
        d1.append(d2, d3, d4);
        if (hero.hp === 0) d1.addClass("heroDead");
        $dungeonHeroList.prepend(d1)
    });
    dungeon.mobs.forEach(function (mob) {
        var d6 = $("<div/>").addClass("dfm").attr("id", "dfm" + mob.uniqueid);
        var d7 = $("<div/>").addClass("buffListContent").attr("id", "buffList" + mob.uniqueid);
        var d8 = $("<div/>").addClass("dfmName").html(mob.name);
        var d9 = $("<div/>").addClass("dfmImage").attr("id", "mobImage" + mob.uniqueid).html(mob.image);
        if (mob.event === "boss") d6.addClass("dfmBoss");
        d6.append(d7, d8, d9);
        if (mob.hp === 0) d6.addClass("mobDead");
        $dungeonMobList.append(d6)
    });
    generateTurnOrder(dungeonID);
    showSpeedButtons();
    BuffRefreshManager.hardRefreshBuff()
}
var $dungeonSpeed = $("#dungeonSpeed");

function showSpeedButtons() {
    $dungeonSpeed.empty();
    DungeonManager.availableSpeeds().forEach(function (speed) {
        var d = $("<div/>").addClass("dungeonSpeedButton").data("spd", speed).html("".concat(speed, "x")).appendTo($dungeonSpeed);
        if (DungeonManager.speedText === speed) d.addClass("highlight")
    })
}
$dungeonSpeed.on("click", ".dungeonSpeedButton", function (e) {
    e.preventDefault();
    var spd = $(e.currentTarget).data("spd");
    $(".dungeonSpeedButton").removeClass("highlight");
    $(e.currentTarget).addClass("highlight");
    DungeonManager.setSpeed(spd)
});

function generateTurnOrder(dungeonID) {
    if (DungeonManager.dungeonView !== dungeonID) return;
    $drTurnOrder.empty();
    var dungeon = DungeonManager.dungeonByID(DungeonManager.dungeonView);
    var mobs = [dungeon.mob1, dungeon.mob2, dungeon.mob3, dungeon.mob4];
    dungeon.order.getOrder().forEach(function (unit, i) {
        var d1 = $("<div/>").addClass("orderUnit").appendTo($drTurnOrder);
        if (mobs.includes(unit.id)) {
            d1.addClass("mobUnit");
            $("<div/>").addClass("mobUnitTag").html("Enemy").appendTo(d1)
        }
        $("<div/>").addClass("orderUnitHeadImg").html(unit.head).appendTo(d1);
        $("<div/>").addClass("orderUnitHead").html(unit.name).appendTo(d1);
        $("<div/>").addClass("orderUnitHP").html(createHPBar(unit, "turnOrder")).appendTo(d1);
        var d1a = $("<div/>").attr("id", "orderSkills" + unit.uniqueid).addClass("orderSkills").appendTo(d1);
        generateSkillIcons(unit).appendTo(d1a);
        generatePassiveSkill(unit).appendTo(d1a);
        var d2 = $("<div/>").addClass("beatBarDiv").appendTo(d1);
        $("<span/>").addClass("beatBarFill").attr("id", "beatbarFill" + unit.uniqueid).css("width", "0%").appendTo(d2)
    });
    refreshTurnOrder(dungeonID)
}

function refreshSkillUnit(target) {
    var d = $("#orderSkills" + target.uniqueid).empty();
    generateSkillIcons(target).appendTo(d);
    generatePassiveSkill(target).appendTo(d)
}

function refreshTurnOrder(dungeonID) {
    if (DungeonManager.dungeonView !== dungeonID) return;
    var dungeon = DungeonManager.dungeonByID(DungeonManager.dungeonView);
    var uniqueid = dungeon.order.getCurrentID();
    $(".orderUnit").removeClass("orderUnitActive");
    $("#orderUnit" + uniqueid).addClass("orderUnitActive");
    $(".orderUnitSkill").removeClass("orderUnitActiveSkill");
    dungeon.order.getOrder().forEach(function (unit) {
        var skillNum = unit.getActiveSkill();
        $("#oUS" + unit.uniqueid + skillNum).addClass("orderUnitActiveSkill")
    })
}

function generateSkillIcons(unit) {
    var d1 = $("<div/>").addClass("orderUnitSkills");
    var skillIDs = unit.getSkillIDs();
    unit.getSkillIcons().forEach(function (icon, i) {
        $("<div/>").addClass("orderUnitSkill tooltip").attr({
            id: "oUS" + unit.uniqueid + i,
            "data-tooltip": "skill_desc",
            "data-tooltip-value": skillIDs[i]
        }).html(icon).appendTo(d1)
    });
    return d1
}

function generatePassiveSkill(unit) {
    var d1 = $("<div/>").addClass("orderUnitPassiveSkill");
    var passiveID = unit.passiveSkill;
    if (passiveID) $("<div/>").addClass("orderUnitPassive tooltip").attr({
        id: "oUP" + unit.id,
        "data-tooltip": "skill_desc",
        "data-tooltip-value": passiveID
    }).html(SkillManager.idToSkill(passiveID).icon).appendTo(d1);
    return d1
}
var $dungeonTab = $("#dungeonTab");

function initializeSideBarDungeon() {
    $DungeonSideBarTeam.empty();
    AreaManager.areas.forEach(function (area) {
        if (area.type === "boss" || !area.unlocked()) return;
        var d = $("<div/>").addClass("dungeonGroup").appendTo($DungeonSideBarTeam);
        var d1 = $("<div/>").addClass("DungeonSideBarStatus").data("areaID", area.id).appendTo(d);
        if (area.status() === DungeonStatus.ADVENTURING) {
            d1.addClass("DungeonSideBarAdventuring");
            var dungeon = area.activeDungeon();
            var text = dungeon.floorClear === 0 ? "".concat(dungeon.name) : "".concat(dungeon.name, " - ").concat(dungeon.floorClear);
            $("<div/>").addClass("dungeonSidebarFloor").attr("id", "dsb" + dungeon.id).html(text).appendTo(d1);
            $("<div/>").addClass("dungeonSidebarReward").html(createDungeonSidebarReward(dungeon)).appendTo(d)
        } else {
            d1.html(area.name);
            $("<div/>").addClass("dungeonSidebarReward").html("&nbsp;").appendTo(d)
        }
    });
    intializeASMaterials()
}

function refreshSidebarDungeonMats(dungeonID) {
    var dungeon = DungeonManager.dungeonByID(dungeonID);
    if (dungeon.type === "boss") return;
    var rewards = dungeon.getRewards();
    $("#dRR".concat(dungeonID, " .dungeonRewardRateIcon")).html(ResourceManager.materialIcon(rewards.id));
    $("#dRR".concat(dungeonID, " .dungeonRewardRateAmt")).html("+".concat(rewards.amt))
}

function refreshDungeonMatBar(dungeonid) {
    var dungeon = DungeonManager.dungeonByID(dungeonid);
    var matWidth = dungeon.rewardTimeRate === 0 ? "0%" : (dungeon.rewardTime / dungeon.rewardTimeRate * 100).toFixed(1) + "%";
    $("#dsbrf" + dungeonid).css("width", matWidth);
    $("#dsbr" + dungeonid).html(ResourceManager.materialAvailable(dungeon.mat))
}

function createHPBar(hero, tag) {
    var hpPercent = hero.hp / hero.maxHP();
    var hpBarText = hero.hp + " / " + hero.maxHP();
    var hpWidth = (hpPercent * 100).toFixed(1) + "%";
    var options = {
        prefix: "hp",
        tooltip: "hp",
        icon: miscIcons.hp,
        text: hpBarText,
        textID: "hp" + tag + hero.uniqueid,
        width: hpWidth,
        fill: "hpFill" + tag + hero.uniqueid
    };
    return generateProgressBar(options)
}

function refreshBeatBar(uniqueid, dungeonTime) {
    var beatWidth = (dungeonTime / DungeonManager.speed * 100).toFixed(1) + "%";
    $("#beatbarFill" + uniqueid).css("width", beatWidth)
}

function refreshHPBar(hero) {
    if (!isDungeonScreen()) return;
    var hpPercent = hero.hp / hero.maxHP();
    var hpBarText = hero.hp + " / " + hero.maxHP();
    var hpWidth = (hpPercent * 100).toFixed(1) + "%";
    $("#hpturnOrder".concat(hero.uniqueid)).html(hpBarText);
    $("#hpFillturnOrder".concat(hero.uniqueid)).css("width", hpWidth)
}

function createDungeonSidebarReward(dungeon) {
    var matWidth = dungeon.rewardTimeRate === 0 ? "0%" : (dungeon.rewardTime / dungeon.rewardTimeRate).toFixed(1) + "%";
    var d = $("<div/>").addClass("dungeonRewardDiv tooltip").attr({
        "data-tooltip": "dungeon_material_gain_rate",
        "data-tooltip-value": dungeon.id
    });
    var t1 = $("<div/>").addClass("dungeonRewardRate").attr("id", "dRR" + dungeon.id).appendTo(d);
    $("<div/>").addClass("dungeonRewardRateIcon").html("".concat(ResourceManager.materialIcon(dungeon.mat))).appendTo(t1);
    $("<div/>").addClass("dungeonRewardRateAmt").attr("id", "dRA" + dungeon.id).html("+".concat(dungeon.rewardAmt)).appendTo(t1);
    var options = {
        prefix: "dungeonReward",
        text: ResourceManager.materialAvailable(dungeon.mat).toString(),
        textID: "dsbr" + dungeon.id,
        width: matWidth,
        fill: "dsbrf" + dungeon.id
    };
    return d.append(generateProgressBar(options))
}
$dungeonBackButton.on("click", function (e) {
    e.preventDefault();
    openTab("dungeons_overview")
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var $dtsHeader = $("#dtsHeader");
var $dtsMobsCollection = $("#dtsMobsCollection");
var $dtsDungeons = $("#dtsDungeons");
var $dungeonTeamCollection = $("#dungeonTeamCollection");
var $dtsBottom = $("#dtsBottom");
var $mobsToggleButton = $("#mobsToggleButton");
var Party = function () {
    function Party(heroID) {
        _classCallCheck(this, Party);
        this.heroID = heroID;
        this.heroes = heroID.map(function (h) {
            return HeroManager.idToHero(h)
        });
        this.playbooks = this.heroes.map(function (h) {
            return h.playbook.id
        })
    }
    _createClass(Party, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.heroID = this.heroID;
            return save
        }
    }, {
        key: "hasMember",
        value: function hasMember(heroID) {
            return this.heroID.includes(heroID)
        }
    }, {
        key: "size",
        value: function size() {
            return this.heroes.length
        }
    }, {
        key: "alive",
        value: function alive() {
            return this.heroes.some(function (hero) {
                return !hero.dead()
            })
        }
    }, {
        key: "isDead",
        value: function isDead() {
            return this.heroes.every(function (hero) {
                return hero.dead()
            })
        }
    }, {
        key: "addTime",
        value: function addTime(t) {
            this.heroes.forEach(function (h) {
                h.addTime(t, dungeonID)
            })
        }
    }, {
        key: "reset",
        value: function reset() {
            this.heroes.forEach(function (hero) {
                hero.removeBuffs();
                hero.hp = hero.maxHP();
                hero.resetPlaybookPosition()
            })
        }
    }]);
    return Party
}();
var PartyCreator = {
    heroes: [null, null, null, null],
    lastTeam: [],
    playbooks: {},
    dungeonSelect: null,
    areaSelect: null,
    mobPartyHidden: true,
    moveMember: function moveMember(heroID) {
        if (this.heroes.includes(heroID)) {
            var indx = this.heroes.findIndex(function (h) {
                return h === heroID
            });
            this.heroes[indx] = null
        } else {
            var hero = HeroManager.idToHero(heroID);
            if (hero.state() !== HeroState.IDLE) return;
            var _indx = this.heroes.findIndex(function (h) {
                return h === null
            });
            if (_indx === -1) return false;
            this.heroes[_indx] = heroID
        }
    },
    clearMembers: function clearMembers() {
        var dungeon = DungeonManager.dungeonByID(this.dungeonSelect);
        this.heroes = new Array(dungeon.partySize).fill(null)
    },
    validTeam: function validTeam() {
        if (this.heroes.filter(function (h) {
                return h !== null
            }).length === 0) return false;
        var heroesReal = this.heroes.filter(function (h) {
            return h !== null
        }).map(function (hid) {
            return HeroManager.idToHero(hid)
        });
        return heroesReal.every(function (h) {
            return h.alive()
        })
    },
    lockParty: function lockParty() {
        var _this = this;
        this.heroes.filter(function (h) {
            return h !== null
        }).map(function (hid) {
            return HeroManager.idToHero(hid)
        }).forEach(function (h) {
            h.hp = h.maxHP()
        });
        this.heroes.forEach(function (hid) {
            if (!hid) return;
            var pbid = _this.playbooks[hid];
            HeroManager.swapPlaybook(hid, pbid)
        });
        var party = new Party(this.heroes.filter(function (h) {
            return h !== null
        }));
        this.heroes = [];
        return party
    },
    startingTeam: function startingTeam(team) {
        if (team === null) return;
        team = team.map(function (h) {
            return HeroManager.idToHero(h).state() === HeroState.IDLE ? h : null
        });
        while (team.length < this.heroes.length) {
            team.push(null)
        }
        this.heroes = team
    },
    emptyPartySlots: function emptyPartySlots() {
        return this.heroes.filter(function (h) {
            return !h
        }).length
    },
    setDungeon: function setDungeon(dungeonid) {
        var _this2 = this;
        this.dungeonSelect = dungeonid;
        HeroManager.heroes.forEach(function (hero) {
            _this2.playbooks[hero.uniqueid] = hero.playbook.id
        });
        var dungeon = DungeonManager.dungeonByID(dungeonid);
        this.lastTeam = dungeon.lastParty;
        dungeon.lastPlaybook.forEach(function (pb) {
            if (pb === null) return;
            var hid = HeroManager.heroIDbyPlaybook(pb);
            _this2.playbooks[hid] = pb
        })
    }
};

function startPartyCreation(partyStarted) {
    var area = PartyCreator.areaSelect;
    if (PartyCreator.dungeonSelect === null) {
        if (area.lastVisitedDungeon === null) PartyCreator.setDungeon(area.lastOpen().id);
        else PartyCreator.setDungeon(area.lastVisitedDungeon)
    }
    var dungeon = DungeonManager.dungeonByID(PartyCreator.dungeonSelect);
    if (!partyStarted) {
        PartyCreator.clearMembers();
        PartyCreator.startingTeam(dungeon.lastParty)
    }
    $areaTeamSelect.show();
    if (!partyStarted) {
        $dtsHeader.empty();
        $("<div/>").addClass("dtsBackButton").html('<i class="fas fa-arrow-left"></i>').appendTo($dtsHeader);
        $("<div/>").addClass("dungeonAreaBanner").css("background", "url(assets/images/dungeonpreviews/".concat(area.id, ".jpg)")).appendTo($dtsHeader);
        $("<div/>").addClass("dungeonAreaTitle").html(dungeon.name).appendTo($dtsHeader);
        var partyLaunch = $("<div/>").addClass("partyLaunchButtonContainer").appendTo($dtsHeader);
        if (dungeon.type === "boss" && !dungeon.beaten()) $("<div/>").attr("id", "dungeonTeamButtonBoss").addClass("dungeonTeamButton actionButton").html(displayText("adventure_launch_floor_boss")).appendTo(partyLaunch);
        else if (dungeon.type === "boss" && !DungeonManager.bossRefightUnlocked()) $("<div/>").addClass("dungeonTeamButtonLocked tooltip").attr({
            "data-tooltip": "boss_defeated"
        }).html("".concat(miscIcons.skull, " ").concat(displayText("adventure_launch_floor_boss_defeated"))).appendTo(partyLaunch);
        else if (dungeon.type === "boss" && DungeonManager.bossRefightUnlocked()) {
            var button = $("<div/>").addClass("dungeonTeamButton actionButton tooltip").attr({
                id: "dungeonTeamButtonBoss",
                "data-tooltip": "boss_refight"
            }).html(displayText("adventure_launch_floor_boss_refight")).appendTo(partyLaunch);
            $("<div/>").addClass("dungeonTeamButtonBossText").html("".concat(miscIcons.skull, " ").concat(dungeon.maxFloor)).appendTo(button)
        } else {
            $("<div/>").attr("id", "dungeonTeamButton").addClass("dungeonTeamButton actionButton").html(displayText("adventure_launch_floor")).appendTo(partyLaunch)
        }
    }
    $(".dungeonAreaTitle").html(dungeon.name);
    $dtsMobsCollection.empty();
    dungeon.mobIDs.forEach(function (mobID) {
        mobCard(mobID).appendTo(dtsMobsCollection)
    });
    $mobsToggleButton.find(".actionButtonTextLeft").html(PartyCreator.mobPartyHidden ? displayText("enemy_party_show") : displayText("enemy_party_hide"));
    $dtsDungeons.empty();
    area.dungeons.forEach(function (dungeon) {
        if (!dungeon.unlocked()) {
            var e = $("<div/>").addClass("dtsDungeon dtsLocked tooltip").attr({
                "data-tooltip": "dungeon_locked"
            }).appendTo($dtsDungeons);
            if (dungeon.type === "boss") e.attr({
                "data-tooltip": "dungeon_locked_boss"
            });
            $("<div/>").addClass("dtsMaterial").html(miscIcons.locked).appendTo(e);
            $("<div/>").addClass("dtsDungeonName").html("".concat(displayText("universal_locked"))).appendTo(e);
            return
        }
        var d = $("<div/>").addClass("dtsDungeon").data("dungeonID", dungeon.id).appendTo($dtsDungeons);
        if (PartyCreator.dungeonSelect === dungeon.id) d.addClass("dtsHighlight");
        if (Tutorial.lvl === 30 && dungeon.id === "D102") d.addClass("hasEvent");
        if (dungeon.mat !== null) {
            var mat = ResourceManager.idToMaterial(dungeon.mat);
            var matBox = $("<div/>").addClass("dtsMaterial tooltip").attr({
                "data-tooltip": "material_desc",
                "data-tooltip-value": dungeon.mat
            }).appendTo(d);
            $("<div/>").addClass("dtsMatIcon").html(mat.img).appendTo(matBox);
            $("<div/>").addClass("dtsMatAmt").html(mat.amt).appendTo(matBox)
        }
        $("<div/>").addClass("dtsDungeonName").html(dungeon.name).appendTo(d);
        if (Tutorial.lvl === 30 && dungeon.id === "D102") d.addClass("hasEvent")
    });
    $dungeonTeamCollection.empty();
    PartyCreator.heroes.forEach(function (heroid, i) {
        if (i >= dungeon.partySize) return;
        if (heroid !== null) {
            characterCard(HeroManager.idToHero(heroid), false, true).prependTo($dungeonTeamCollection)
        } else if (PartyCreator.lastTeam !== null && i < PartyCreator.lastTeam.length && PartyCreator.lastTeam[i]) {
            characterCard(HeroManager.idToHero(PartyCreator.lastTeam[i]), true, true).prependTo($dungeonTeamCollection)
        } else characterCard(null, false, true).addClass("noHeroDungeonSelect").prependTo($dungeonTeamCollection)
    });
    var $dungeonTeamButton = $("#dungeonTeamButton");
    var $dungeonTeamButtonBoss = $("#dungeonTeamButtonBoss");
    if (PartyCreator.heroes.length === 0) {
        $dungeonTeamButton.addClass("dungeonStartNotAvailable");
        $dungeonTeamButtonBoss.addClass("dungeonStartNotAvailable")
    } else {
        $dungeonTeamButton.removeClass("dungeonStartNotAvailable");
        $dungeonTeamButtonBoss.removeClass("dungeonStartNotAvailable")
    }
    $dtsBottom.empty();
    var d1bot = $("<div/>").addClass("dtsSelectHeader");
    var d1bota = $("<div/>").addClass("headingDetails").appendTo(d1bot);
    var a = $("<div/>").addClass("headingTitle").html(displayText("header_party_heroes_title")).appendTo(d1bota);
    $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_party").html(miscIcons.keyboard).appendTo(a);
    $("<div/>").addClass("headingDescription").html(displayText("header_party_heroes_desc")).appendTo(d1bota);
    $dtsBottom.append(d1bot);
    var d2 = $("<div/>").addClass("dungeonAvailableCollection");
    HeroManager.ownedHeroes().forEach(function (hero) {
        characterCard(hero, false, false).appendTo(d2)
    });
    $dtsBottom.append(d2)
}

function toggleMobsPreview() {
    if ($dtsMobsCollection.hasClass("collapsedMobsCollection")) {
        $dtsMobsCollection.removeClass("collapsedMobsCollection hideMobsCollection").addClass("showMobsCollection");
        $mobsToggleButton.addClass("toggledOn");
        $mobsToggleButton.find(".actionButtonTextLeft").html(displayText("enemy_party_hide"));
        PartyCreator.mobPartyHidden = false
    } else {
        $dtsMobsCollection.addClass("hideMobsCollection").removeClass("showMobsCollection");
        $mobsToggleButton.removeClass("toggledOn");
        $mobsToggleButton.find(".actionButtonTextLeft").html(displayText("enemy_party_show"));
        setTimeout(function () {
            $dtsMobsCollection.addClass("collapsedMobsCollection")
        }, 200);
        PartyCreator.mobPartyHidden = true
    }
}
$mobsToggleButton.on("click", function (e) {
    e.preventDefault();
    toggleMobsPreview()
});
$dtsDungeons.on("click", ".dtsDungeon", function (e) {
    e.preventDefault();
    var dungeonid = $(e.currentTarget).data("dungeonID");
    if (!dungeonid || PartyCreator.dungeonSelect === dungeonid) return;
    PartyCreator.setDungeon(dungeonid);
    startPartyCreation(false)
});
$dtsHeader.on("click", ".dtsBackButton", function (e) {
    e.preventDefault();
    openTab("dungeons_overview")
});
$areaTeamSelect.on("click", ".partyCardClick", function (e) {
    e.preventDefault();
    var heroID = $(e.currentTarget).data("heroID");
    if (e.shiftKey && PartyCreator.emptyPartySlots() > 0) DungeonManager.releaseHero(heroID);
    if (e.shiftKey && PartyCreator.emptyPartySlots() > 0) ExpeditionManager.releaseHero(heroID);
    PartyCreator.moveMember(heroID);
    startPartyCreation(true);
    destroyTooltip()
});
$dtsHeader.on("click", "#dungeonTeamButton", function (e) {
    e.preventDefault();
    if (PartyCreator.validTeam()) {
        DungeonManager.createDungeon(PartyCreator.dungeonSelect, false);
        initializeSideBarDungeon();
        $areaTeamSelect.hide();
        $dungeonRun.show()
    } else {
        ToastManager.renderToast("no_party_selected")
    }
});
$dtsHeader.on("click", "#dungeonTeamButtonBoss", function (e) {
    e.preventDefault();
    if (PartyCreator.validTeam()) {
        DungeonManager.createDungeon(PartyCreator.dungeonSelect, true);
        initializeSideBarDungeon();
        $areaTeamSelect.hide();
        $dungeonRun.show()
    } else {
        ToastManager.renderToast("no_party_selected")
    }
});

function characterCard(hero, isShadow, partySelector) {
    var d = $("<div/>").addClass("partyCard");
    var heroStatsContainer = $("<div/>").addClass("heroStatsContainer emptyPartySlot");
    var hpStat = $("<div/>").addClass("heroStat").appendTo(heroStatsContainer);
    var hpStatValue = $("<div/>").addClass("statValue").appendTo(hpStat);
    var powStat = $("<div/>").addClass("heroStat").appendTo(heroStatsContainer);
    var powStatValue = $("<div/>").addClass("statValue").appendTo(powStat);
    if (!hero) {
        $("<div/>").addClass("partyImage").html('<i class="fas fa-question-circle"></i>').appendTo(d);
        $("<div/>").addClass("partyName").html(displayText("slot_party_empty")).appendTo(d);
        heroStatsContainer.appendTo(d);
        d.addClass("noHeroDungeonSelect");
        d.addClass("partyNoClick");
        return d
    }
    if (isShadow) {
        $("<div/>").addClass("partyImage heroShadow").html(hero.staticImage).appendTo(d);
        $("<div/>").addClass("partyName heroShadow").html(hero.name).appendTo(d);
        heroStatsContainer.appendTo(d);
        d.addClass("shadowed");
        return d
    }
    var dclick = $("<div/>").addClass("partyCardClick").data("heroID", hero.uniqueid).appendTo(d);
    generateSlotClass(hero.type).appendTo(d);
    $("<div/>").addClass("partyImage").html(hero.image).appendTo(dclick);
    $("<div/>").addClass("partyName").html(hero.name).appendTo(dclick);
    if (partySelector) {
        var pbid = PartyCreator.playbooks[hero.uniqueid];
        var playbook = PlaybookManager.idToPlaybook(pbid);
        var playbookButton = $("<div/>").addClass("partyPlaybook heroPlaybook tooltip").data("heroID", hero.uniqueid).attr({
            "data-tooltip": "playbooks_view",
            "data-tooltip-value": playbook.id,
            "data-dialog-id": "playbook"
        }).html(playbook.icon()).appendTo(dclick);
        $("<div/>").addClass("heroPlaybookTier").html('<i class="fas fa-book"></i>').appendTo(playbookButton)
    }
    var d3 = $("<div/>").addClass("partyStats").appendTo(dclick);
    hpStat.addClass("partyHP tooltip").attr("data-tooltip", "hp").html("".concat(miscIcons.hp)).appendTo(d3);
    hpStatValue.html("".concat(hero.maxHP())).appendTo(hpStat);
    powStat.addClass("partyPow tooltip").attr("data-tooltip", "pow").html("".concat(miscIcons.pow)).appendTo(d3);
    powStatValue.html("".concat(hero.getPow())).appendTo(powStat);
    heroStatsContainer.appendTo(d3);
    if (hero.state() === HeroState.DUNGEON) {
        $("<div/>").addClass("heroStatus tooltip statusDungeon").attr({
            "data-tooltip": "hero_in_combat"
        }).html('<i class="fas fa-swords"></i>').appendTo(dclick);
        d.addClass("partyNoClick")
    }
    if (PartyCreator.heroes.includes(hero.uniqueid) && !partySelector) {
        $("<div/>").addClass("heroStatus tooltip statusParty").attr({
            "data-tooltip": "hero_in_party"
        }).html('<i class="fas fa-check"></i>').appendTo(dclick);
        d.addClass("partyNoClick")
    }
    if (hero.state() === HeroState.QUEST) {
        $("<div/>").addClass("heroStatus tooltip statusQuest").attr({
            "data-tooltip": "hero_in_quest"
        }).html("".concat(miscIcons.quest)).appendTo(dclick);
        d.addClass("partyNoClick")
    }
    return d
}

function renderHeroDialogActions(hero) {
    var playbooksContainer = $("<div/>").addClass("examinePartyPlaybooksContainer");
    var pbid = PartyCreator.playbooks[hero.uniqueid];
    generateHeroPlaybooks(hero, pbid).appendTo(playbooksContainer);
    return playbooksContainer
}

function setHeroDialogOpen(heroID) {
    var hero = HeroManager.idToHero(heroID);
    var dialogContainer = $("<div/>").attr({
        id: "dialogContainer"
    }).addClass("dialogContainer").appendTo(document.body);
    var dialogBoxContainer = $("<div/>").addClass("heroPlaybookDialog dialogContent dialogOpening").appendTo(dialogContainer);
    var dialogClose = $("<div/>").attr({
        role: "button",
        tabindex: 1,
        "aria-label": "Close Dialog"
    }).addClass("dialogClose").html('<i class="fas fa-times"></i>').appendTo(dialogBoxContainer);
    var dialogTitle = $("<div/>").addClass("dialogTitle").appendTo(dialogBoxContainer);
    $("<div/>").addClass("dialogTitleIcon heroPlayBookDialogPortrait").html(hero.portrait).appendTo(dialogTitle);
    $("<div/>").addClass("dialogTitleText").html("".concat(hero.name, "'s Playbooks")).appendTo(dialogTitle);
    var dialogContentContainer = $("<div/>").addClass("dialogContentContainer").appendTo(dialogBoxContainer);
    if (hero.description) $("<div/>").addClass("dialogDescription").html(hero.description).appendTo(dialogContentContainer);
    var dialogActions = renderHeroDialogActions(hero);
    dialogActions.appendTo(dialogContentContainer);
    settings.dialogStatus = 1;
    saveSettings()
}
$areaTeamSelect.on("click", ".heroPlaybook", function (e) {
    e.stopPropagation();
    var id = $(e.currentTarget).attr("data-dialog-id");
    var heroID = $(e.currentTarget).data("heroID");
    if (settings.dialogStatus === 0 && id) setHeroDialogOpen(heroID)
});

function mobCard(mobID) {
    var mob = MobManager.idToMob(mobID);
    var d = $("<div/>").addClass("dtsMobDiv");
    $("<div/>").addClass("dtsMobPic").html(mob.image).appendTo(d);
    $("<div/>").addClass("dtsMobName").html(mob.name).appendTo(d);
    generateSkillIcons(mob).appendTo(d);
    generatePassiveSkill(mob).appendTo(d);
    return d
}
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var WorkerType = Object.freeze({
    COG: "COG",
    WEAPON: "WEAPON",
    ARMOR: "ARMOR",
    JEWEL: "JEWEL"
});
var WorkerManager = {
    canProduceBucket: {},
    workersUnlocked: function workersUnlocked(type) {
        var extra = type === WorkerType.COG ? 1 : 0;
        return Shop.boughtPerkSubtype(type).length + extra
    },
    workersFree: function workersFree(type) {
        var usage = actionSlotManager.workersUsed(type);
        return this.workersUnlocked(type) - usage
    },
    couldCraft: function couldCraft(item) {
        var needBucket = groupArray(item.gcost);
        for (var _i = 0, _Object$entries = Object.entries(needBucket); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                type = _Object$entries$_i[0],
                amt = _Object$entries$_i[1];
            if (this.workersUnlocked(type) < amt) return false
        }
        return true
    },
    canCurrentlyCraft: function canCurrentlyCraft(item) {
        var needBucket = groupArray(item.gcost);
        for (var _i2 = 0, _Object$entries2 = Object.entries(needBucket); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
                type = _Object$entries2$_i[0],
                amt = _Object$entries2$_i[1];
            if (this.workersFree(type) < amt) return false
        }
        return true
    },
    freeWorkers: function freeWorkers() {
        return {
            COG: this.workersFree(WorkerType.COG),
            JEWEL: this.workersFree(WorkerType.JEWEL),
            ARMOR: this.workersFree(WorkerType.ARMOR),
            WEAPON: this.workersFree(WorkerType.WEAPON)
        }
    }
};
var $CogWorkerFree = $("#CogWorkerFree");
var $WeaponWorkerFree = $("#WeaponWorkerFree");
var $ArmorWorkerFree = $("#ArmorWorkerFree");
var $JewelWorkerFree = $("#JewelWorkerFree");
var $CogWorkersSide = $("#CogWorkersSide");
var $WeaponWorkersSide = $("#WeaponWorkersSide");
var $ArmorWorkersSide = $("#ArmorWorkersSide");
var $JewelWorkersSide = $("#JewelWorkersSide");

function refreshSideWorkers() {
    var cogFree = WorkerManager.workersFree(WorkerType.COG);
    var weaponFree = WorkerManager.workersFree(WorkerType.WEAPON);
    var armorFree = WorkerManager.workersFree(WorkerType.ARMOR);
    var jewelFree = WorkerManager.workersFree(WorkerType.JEWEL);
    $CogWorkerFree.html(cogFree);
    $WeaponWorkerFree.html(weaponFree);
    $ArmorWorkerFree.html(armorFree);
    $JewelWorkerFree.html(jewelFree);
    if (cogFree > 0) $CogWorkersSide.removeClass("noWorkersAvailable");
    else $CogWorkersSide.addClass("noWorkersAvailable");
    if (weaponFree > 0) $WeaponWorkersSide.removeClass("noWorkersAvailable");
    else $WeaponWorkersSide.addClass("noWorkersAvailable");
    if (armorFree > 0) $ArmorWorkersSide.removeClass("noWorkersAvailable");
    else $ArmorWorkersSide.addClass("noWorkersAvailable");
    if (jewelFree > 0) $JewelWorkersSide.removeClass("noWorkersAvailable");
    else $JewelWorkersSide.addClass("noWorkersAvailable");
    if (WorkerManager.workersUnlocked(WorkerType.COG) > 0) $CogWorkersSide.show();
    else $CogWorkersSide.hide();
    if (WorkerManager.workersUnlocked(WorkerType.WEAPON) > 0) $WeaponWorkersSide.show();
    else $WeaponWorkersSide.hide();
    if (WorkerManager.workersUnlocked(WorkerType.ARMOR) > 0) $ArmorWorkersSide.show();
    else $ArmorWorkersSide.hide();
    if (WorkerManager.workersUnlocked(WorkerType.JEWEL) > 0) $JewelWorkersSide.show();
    else $JewelWorkersSide.hide()
}
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var EnchantManager = {
    enchants: [],
    createSave: function createSave() {
        var save = {};
        save.enchants = [];
        this.enchants.forEach(function (e) {
            return save.enchants.push(e.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.enchants.forEach(function (enchantSave) {
            var enchant = _this.idToEnchant(enchantSave.id);
            enchant.loadSave(enchantSave)
        })
    },
    addEnchant: function addEnchant(enchant) {
        this.enchants.push(enchant)
    },
    idToEnchant: function idToEnchant(id) {
        return this.enchants.find(function (e) {
            return e.id === id
        })
    },
    enchantItem: function enchantItem(container, eid) {
        var enchant = this.idToEnchant(eid);
        if (!enchant.types.includes(container.type)) return;
        var amt = enchant.enchantCost[container.lvl];
        if (ResourceManager.available(enchant.material, amt)) return;
        ResourceManager.deductMaterial(enchant.material, amt);
        container.addEnchant(enchant.element)
    }
};
var Enchantment = function () {
    function Enchantment(props) {
        _classCallCheck(this, Enchantment);
        Object.assign(this, props);
        this.owned = false;
        this.enchantCost = [this.t1, this.t2, this.t3, this.t4, this.t5, this.t6, this.t7, this.t8, this.t9, this.t10];
        this.element = this.elementConvert(this.elementName)
    }
    _createClass(Enchantment, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.owned = this.owned;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.owned = save.owned
        }
    }, {
        key: "own",
        value: function own() {
            this.owned = true
        }
    }, {
        key: "elementConvert",
        value: function elementConvert(name) {
            if (name === "sugar") return EnchantType.TYPE1;
            if (name === "spice") return EnchantType.TYPE2;
            if (name === "everything") return EnchantType.TYPE3;
            if (name === "nice") return EnchantType.TYPE4;
            return EnchantType.NONE
        }
    }]);
    return Enchantment
}();
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter)
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i]
        }
        return arr2
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var RuneType = Object.freeze({
    NONE: 0,
    FIRE: 1,
    WATER: 2,
    THUNDER: 3
});
var equipContainerTarget = null;
var $ietEquip = $("#ietEquip");
var $ietHero = $("#ietHero");
var $sortInventory = $("#sortInventory");
var $sellAllCommons = $("#sellAllCommons");
var $closeEquipItem = $("#closeEquipItem");
var $inventory = $("#inventory");
var $sideInventory = $("#inventorySidebar");
var $sideInventoryAmt = $("#invSidebarAmt");
$sortInventory.on("click", ".autoSortToggle", function (e) {
    e.preventDefault();
    var enabled = Inventory.toggleAutoSort();
    if (enabled) Inventory.sortInventory();
    refreshAutoSortToggle()
});
$sellAllCommons.on("click", function (e) {
    e.preventDefault();
    Inventory.sellCommons();
    Inventory.sortInventory()
});
$closeEquipItem.on("click", function (e) {
    e.preventDefault();
    $(".tabcontent").hide();
    $("#inventoryTab").show()
});
var containerid = 0;
var itemContainer = function () {
    function itemContainer(id, rarity) {
        _classCallCheck(this, itemContainer);
        this.id = id;
        this.item = recipeList.idToItem(id);
        this.name = this.item.name;
        this.type = this.item.type;
        this.lvl = this.item.lvl;
        this.rarity = rarity;
        this.sharp = 0;
        this.powRatio = this.item.pow;
        this.hpRatio = this.item.hp;
        this.pts = this.item.pts;
        this.smithCost = this.item.smithCost;
        this.description = this.item.description;
        this.rune = RuneType.NONE;
        this.qty = 1;
        this.containerID = Inventory.containernum;
        Inventory.containernum += 1;
        this.refreshTooltipValues()
    }
    _createClass(itemContainer, [{
        key: "uniqueID",
        value: function uniqueID() {
            var result = this.id + "_" + this.rarity + "_" + this.sharp + "_" + this.rune + "_" + this.isTransformed();
            return result
        }
    }, {
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.rarity = this.rarity;
            save.sharp = this.sharp;
            save.scale = this.scale;
            save.powRatio = this.powRatio;
            save.hpRatio = this.hpRatio;
            save.rune = this.rune;
            save.qty = this.qty;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.sharp = Math.min(save.sharp, bloopSmith.maxSharp());
            if (save.scale !== undefined) this.scale = save.scale;
            if (save.powRatio !== undefined) this.powRatio = save.powRatio;
            if (save.hpRatio !== undefined) this.hpRatio = save.hpRatio;
            if (save.rune !== undefined) this.rune = save.rune;
            if (save.qty !== undefined) this.qty = save.qty
        }
    }, {
        key: "picName",
        value: function picName(skipPic) {
            var shortName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var itemNameContainer = $("<div/>").addClass("itemNameContainer");
            if (!skipPic) $("<div/>").addClass("itemImage").html(this.item.itemPic()).appendTo(itemNameContainer);
            var itemPrefixContainer = $("<div/>").addClass("itemPrefixContainer").appendTo(itemNameContainer);
            if (this.sharp > 0) $("<div/>").addClass("itemPrefix sharpnessPrefix").html("".concat(miscIcons.enhancement).concat(this.sharp)).appendTo(itemPrefixContainer);
            if (this.getRunePrefix()) $("<div/>").addClass("itemPrefix runePrefix").html(this.getRunePrefix()).appendTo(itemPrefixContainer);
            if (this.prefix()) $("<div/>").addClass("itemPrefix statPrefix").html(this.prefix()).appendTo(itemPrefixContainer);
            var itemName = $("<div/>").addClass("itemNameTitle").appendTo(itemNameContainer);
            if (shortName) itemName.html(shortenName(this.item.name, 10));
            else itemName.html(this.item.name);
            return itemNameContainer
        }
    }, {
        key: "getRunePrefix",
        value: function getRunePrefix() {
            if (this.rune === RuneType.FIRE) return '<span class="item-prefix">'.concat(miscIcons.fireRune, "</span>");
            if (this.rune === RuneType.WATER) return '<span class="item-prefix">'.concat(miscIcons.waterRune, "</span>");
            if (this.rune === RuneType.THUNDER) return '<span class="item-prefix">'.concat(miscIcons.thunderRune, "</span>");
            return ""
        }
    }, {
        key: "picNamePlus",
        value: function picNamePlus(skipPic) {
            var shortName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var itemNameContainer = $("<div/>").addClass("itemNameContainer");
            if (!skipPic) $("<div/>").addClass("itemImage").html(this.item.itemPic()).appendTo(itemNameContainer);
            var itemPrefixContainer = $("<div/>").addClass("itemPrefixContainer").appendTo(itemNameContainer);
            if (bloopSmith.smithType === SmithType.ENHANCE) $("<div/>").addClass("itemPrefix sharpnessPrefix").html("".concat(miscIcons.enhancement).concat(this.sharp + 1)).appendTo(itemPrefixContainer);
            else if (this.sharp > 0) $("<div/>").addClass("itemPrefix sharpnessPrefix").html("".concat(miscIcons.enhancement).concat(this.sharp)).appendTo(itemPrefixContainer);
            if (bloopSmith.smithType === SmithType.FIRE) $("<div/>").addClass("itemPrefix runePrefix").html(miscIcons.fireRune).appendTo(itemPrefixContainer);
            else if (bloopSmith.smithType === SmithType.WATER) $("<div/>").addClass("itemPrefix runePrefix").html(miscIcons.waterRune).appendTo(itemPrefixContainer);
            else if (bloopSmith.smithType === SmithType.THUNDER) $("<div/>").addClass("itemPrefix runePrefix").html(miscIcons.thunderRune).appendTo(itemPrefixContainer);
            else if (this.getRunePrefix()) $("<div/>").addClass("itemPrefix runePrefix").html(this.getRunePrefix()).appendTo(itemPrefixContainer);
            if (this.prefix()) $("<div/>").addClass("itemPrefix statPrefix").html(this.prefix()).appendTo(itemPrefixContainer);
            var itemName = $("<div/>").addClass("itemNameTitle").appendTo(itemNameContainer);
            if (shortName) itemName.html(shortenName(this.item.name, 10));
            else itemName.html(this.item.name);
            return itemNameContainer
        }
    }, {
        key: "itemLevel",
        value: function itemLevel() {
            if (this.scale > 0) return '<div class="level_text">'.concat(miscIcons.star, '</div><div class="level_integer">').concat(this.scale, "</div>");
            return '<div class="level_text">LVL</div><div class="level_integer">'.concat(this.lvl, "</div>")
        }
    }, {
        key: "pow",
        value: function pow() {
            var sharpIncrease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var ratioMod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this.statCalc(Math.max(0, this.powRatio + ratioMod) * this.pts, sharpIncrease)
        }
    }, {
        key: "hp",
        value: function hp() {
            var sharpIncrease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var ratioMod = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            return this.statCalc(Math.max(0, 9 * (this.hpRatio + ratioMod)) * this.pts, sharpIncrease)
        }
    }, {
        key: "statCalc",
        value: function statCalc(flat, sharpIncrease) {
            var sharpAdd = sharpIncrease ? 1 : 0;
            return Math.floor(flat * miscLoadedValues.rarityMod[this.rarity] * (1 + .05 * (this.sharp + sharpAdd)))
        }
    }, {
        key: "goldValueFormatted",
        value: function goldValueFormatted() {
            return "".concat(ResourceManager.materialIcon("M001"), ' <span class="goldValue">').concat(formatToUnits(this.goldValue(), 2), "</span>")
        }
    }, {
        key: "goldValue",
        value: function goldValue() {
            return Math.round(this.item.value * (this.rarity + 1) * (1 + this.sharp * .1))
        }
    }, {
        key: "material",
        value: function material() {
            if (!this.item.mcost) return "M201";
            return Object.keys(this.item.mcost)[0]
        }
    }, {
        key: "fortuneMaterial",
        value: function fortuneMaterial() {
            return this.item.smithCost
        }
    }, {
        key: "deconType",
        value: function deconType() {
            return this.item.deconType
        }
    }, {
        key: "itemStat",
        value: function itemStat() {
            var sharpIncrease = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var powRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var hpRatio = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var stats = {};
            stats[heroStat.pow] = this.pow(sharpIncrease, powRatio);
            stats[heroStat.hp] = this.hp(sharpIncrease, hpRatio);
            return stats
        }
    }, {
        key: "prefix",
        value: function prefix() {
            if (this.powRatio === this.item.pow && this.hpRatio === this.item.hp) return null;
            return "".concat(adjective[this.powRatio.toString() + this.hpRatio.toString()], " ")
        }
    }, {
        key: "transform",
        value: function transform() {
            if (this.powRatio === 3) {
                this.powRatio = 0;
                this.hpRatio = 3
            } else {
                this.powRatio = 3;
                this.hpRatio = 0
            }
        }
    }, {
        key: "isTransformed",
        value: function isTransformed() {
            if (this.powRatio === this.item.pow && this.hpRatio === this.item.hp) return "0";
            return "1"
        }
    }, {
        key: "hasRune",
        value: function hasRune() {
            return this.rune !== RuneType.NONE
        }
    }, {
        key: "changeQty",
        value: function changeQty(amt) {
            this.qty += amt
        }
    }, {
        key: "refreshTooltipValues",
        value: function refreshTooltipValues() {
            var _this$prefix;
            this.powIcon = miscIcons.pow;
            this.hpIcon = miscIcons.hp;
            this.goldIcon = miscIcons.gold;
            this.icon = this.item.itemPic();
            this.powTT = this.pow();
            this.hpTT = this.hp();
            this.goldTT = this.goldValueFormatted();
            this.rarityTT = rarities[this.rarity];
            if (this.type === "Trinkets") return;
            this.desynth = Math.floor(this.item.craftTime / 4e3 * miscLoadedValues.fuelGainRate[this.rarity - 1]);
            if (this.rarity === 0) this.resynth = Math.max(1, Math.floor(this.item.craftTime / 4e3 * .5));
            else Math.floor(this.item.craftTime / 4e3 * miscLoadedValues.fuelGainRate[this.rarity - 1]);
            var forgeparams = bloopSmith.getSmithCost(this, SmithType.ENHANCE);
            this.forge_gold = "".concat(miscIcons.gold, "&nbsp;").concat(formatToUnits(forgeparams.gold, 2));
            this.forge_material = "".concat(ResourceManager.idToMaterial(this.item.smithCost).img, "&nbsp;").concat(forgeparams.resAmt);
            this.fuse_gold = "".concat(miscIcons.gold, "&nbsp;").concat(formatToUnits(FusionManager.getFuseInventoryCost(this), 2));
            this.fortune_material = "".concat(ResourceManager.idToMaterial(this.item.smithCost).img, "&nbsp;20");
            this.ttName = (this.sharp > 0 ? "+".concat(this.sharp, " ") : "") + this.rarityTT + " " + "".concat((_this$prefix = this.prefix()) !== null && _this$prefix !== void 0 ? _this$prefix : "") + this.name;
            this.ttType = SingularType[this.type]
        }
    }]);
    return itemContainer
}();
var adjective = {
    30: "Powerful",
    "03": "Bulky"
};
var rarities = {
    0: "Common",
    1: "Good",
    2: "Great",
    3: "Epic"
};
var blankItemStat = {
    pow: 0,
    hp: 0
};
var Inventory = {
    inv: [],
    autosort: false,
    containernum: 0,
    sideInvTabPref: "info",
    createSave: function createSave() {
        var save = [];
        this.inv.forEach(function (i) {
            save.push(i.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.forEach(function (item) {
            if (item === null) return;
            var container = new itemContainer(item.id, item.rarity);
            container.loadSave(item);
            _this.inv.push(container)
        })
    },
    clearProgress: function clearProgress() {
        this.inv = []
    },
    invMax: function invMax() {
        if (!Shop.alreadyPurchased("AL3004")) return 10;
        if (!Shop.alreadyPurchased("AL3008")) return 13;
        if (!Shop.alreadyPurchased("AL3017")) return 16;
        return 20
    },
    addToInventory: function addToInventory(uniqueID) {
        var amt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var skipAnimation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (Merchant.canContribute(uniqueID)) {
            for (var i = 0; i < amt; i++) {
                Merchant.autoContribute(uniqueID)
            }
            return null
        }
        var container = this.findContainer(uniqueID);
        if (container === undefined) {
            container = createContainerFromUniqueID(uniqueID);
            container.qty = amt;
            this.inv.push(container)
        } else {
            container.changeQty(amt)
        }
        if (this.autosort) this.sortInventory();
        if (!skipAnimation) refreshInventoryPlaces(uniqueID);
        return container
    },
    craftRecipe: function craftRecipe(id, skipAnimation) {
        if (TownManager.buildingRecipes().includes(id)) return TownManager.unlockBldg(id);
        var item = recipeList.idToItem(id);
        var isTrinket = item.type === "Trinkets";
        item.addCount();
        if (!skipAnimation) {
            refreshCraftedCount(item)
        }
        var roll = Math.floor(Math.random() * 1e4);
        var sellToggleChart = {
            None: 0,
            Common: 1,
            Good: 2,
            Great: 3,
            Epic: 4
        };
        var sellToggle = sellToggleChart[item.autoSell];
        var procRate = this.craftChance(item);
        if (item.type === "Trinkets") roll = 0;
        if (roll < procRate.epic) {
            if (sellToggle < 4) {
                this.addToInventory("".concat(id, "_3_0_0_0"), 1, skipAnimation);
                if (!skipAnimation && !isTrinket) ToastManager.renderToast("craft_epic", item.name)
            } else this.sellByUID("".concat(id, "_3_0_0_0"), skipAnimation);
            if (!isTrinket) achievementStats.craftedItem("Epic", skipAnimation);
            FortuneManager.purgeDone(id, 3, skipAnimation)
        } else if (roll < procRate.epic + procRate.great) {
            if (sellToggle < 3) {
                this.addToInventory("".concat(id, "_2_0_0_0"), 1, skipAnimation);
                if (!skipAnimation) ToastManager.renderToast("craft_great", item.name)
            } else this.sellByUID("".concat(id, "_2_0_0_0"), skipAnimation);
            achievementStats.craftedItem("Great", skipAnimation);
            FortuneManager.purgeDone(item.id, 2, skipAnimation)
        } else if (roll < procRate.epic + procRate.great + procRate.good) {
            if (sellToggle < 2) {
                this.addToInventory("".concat(id, "_1_0_0_0"), 1, skipAnimation);
                if (!skipAnimation) ToastManager.renderToast("craft_good", item.name)
            } else this.sellByUID("".concat(id, "_1_0_0_0"), skipAnimation);
            achievementStats.craftedItem("Good", skipAnimation);
            FortuneManager.purgeDone(item.id, 1, skipAnimation)
        } else {
            if (sellToggle < 1) {
                this.addToInventory("".concat(id, "_0_0_0_0"), 1, skipAnimation)
            } else this.sellByUID("".concat(id, "_0_0_0_0"), skipAnimation);
            achievementStats.craftedItem("Common", skipAnimation)
        }
    },
    craftChance: function craftChance(item) {
        var masterMod = item.isMastered() ? 2 : 1;
        var fortuneMod = FortuneManager.getProcModifier(item.type, item.lvl);
        var mods = {};
        mods.good = miscLoadedValues.qualityCheck[1] * Museum.goodChance(item.id) * masterMod * fortuneMod[0];
        mods.great = miscLoadedValues.qualityCheck[2] * Museum.greatChance(item.id) * masterMod * fortuneMod[1];
        mods.epic = miscLoadedValues.qualityCheck[3] * Museum.epicChance(item.id) * masterMod * fortuneMod[2];
        return mods
    },
    grabFromInventory: function grabFromInventory(uniqueID, qty, skipAnimation) {
        var container = this.findContainer(uniqueID);
        if (container === undefined) return undefined;
        if (container.qty > qty) {
            container.changeQty(-qty);
            if (!skipAnimation) refreshInventoryPlaces(uniqueID);
            var returnContainer = createContainerFromUniqueID(uniqueID);
            returnContainer.qty = qty;
            return returnContainer
        }
        this.inv = this.inv.filter(function (c) {
            return c.uniqueID() !== uniqueID
        });
        if (this.autosort) this.sortInventory();
        if (!skipAnimation) refreshInventoryPlaces(uniqueID);
        return container
    },
    removeFromInventory: function removeFromInventory(uniqueID, qty, skipAnimation) {
        var container = this.findContainer(uniqueID);
        if (container === undefined) return;
        if (container.qty > qty) {
            container.changeQty(-qty);
            if (!skipAnimation) refreshInventoryPlaces(uniqueID);
            return
        }
        this.inv = this.inv.filter(function (c) {
            return c.uniqueID() !== uniqueID
        });
        if (this.autosort) this.sortInventory();
        if (!skipAnimation) refreshInventoryPlaces(uniqueID)
    },
    findContainer: function findContainer(uniqueID) {
        return this.inv.find(function (c) {
            return c.uniqueID() === uniqueID
        })
    },
    sellByUID: function sellByUID(uniqueID, skipAnimation) {
        if (Merchant.canContribute(uniqueID)) {
            Merchant.autoContribute(uniqueID);
            return
        }
        var newContainer = createContainerFromUniqueID(uniqueID);
        var gold = newContainer.goldValue();
        if (achievementStats.totalGoldEarned === 0) {
            $marketTabSpan.addClass("hasEvent");
            $marketTabLink.show()
        }
        achievementStats.gold(gold, skipAnimation);
        ResourceManager.addMaterial("M001", gold, skipAnimation)
    },
    sellQty: function sellQty(q) {
        var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Inventory.sideInspect;
        var qty = Math.min(q, container.qty);
        var gold = container.goldValue();
        this.removeFromInventory(container.uniqueID(), qty, false);
        if (achievementStats.totalGoldEarned === 0) {
            $marketTabSpan.addClass("hasEvent");
            $marketTabLink.show()
        }
        achievementStats.gold(gold * qty);
        ResourceManager.addMaterial("M001", gold * qty)
    },
    sellAll: function sellAll(uniqueID) {
        var container = this.findContainer(uniqueID);
        this.sellQty(container.qty, container)
    },
    equipHero: function equipHero(heroID) {
        var uniqueID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Inventory.sideInspect.uniqueID();
        var container = this.grabFromInventory(uniqueID, 1, false);
        HeroManager.equipItem(heroID, container)
    },
    listbyType: function listbyType(type) {
        return this.inv.filter(function (r) {
            return r.type === type
        })
    },
    inventoryCount: function inventoryCount() {
        return this.inv.length
    },
    sortInventory: function sortInventory() {
        this.inv.sort(function (a, b) {
            return inventorySort(a, b)
        });
        refreshInventoryPlaces()
    },
    getMaxPowByType: function getMaxPowByType(type) {
        var pows = this.inv.filter(function (i) {
            return i.type === type
        }).map(function (p) {
            return p.pow()
        });
        if (pows.length === 0) return 0;
        return Math.max.apply(Math, _toConsumableArray(pows))
    },
    getMaxHPByType: function getMaxHPByType(type) {
        var hps = this.inv.filter(function (i) {
            return i.type === type
        }).map(function (p) {
            return p.hp()
        });
        if (hps.length === 0) return 0;
        return Math.max.apply(Math, _toConsumableArray(hps))
    },
    sellCommons: function sellCommons() {
        var _this2 = this;
        var commonContainers = this.inv.filter(function (c) {
            return c.rarity === 0 && c.item.recipeType === "normal"
        });
        commonContainers.forEach(function (container) {
            return _this2.sellQty(container.qty, container)
        });
        refreshInventoryPlaces()
    },
    getFusePossibilities: function getFusePossibilities() {
        return this.inv.filter(function (container) {
            return container.item.type === "normal" && container.qty >= 3
        })
    },
    itemCount: function itemCount(uniqueID) {
        var container = this.findContainer(uniqueID);
        if (container === undefined) return 0;
        return this.findContainer(uniqueID).qty
    },
    fortuneTargets: function fortuneTargets() {
        return this.inv.filter(function (i) {
            return i.rarity < 3 && i.item.recipeType === "normal"
        })
    },
    betterThan: function betterThan(uniqueID) {
        var props = createContainerFromUniqueID(uniqueID);
        return this.inv.filter(function (o) {
            return o.id === props.id && o.rarity >= props.rarity && o.sharp >= props.sharp
        })
    },
    cycleAC: function cycleAC(uniqueID) {
        for (var i = 0; i < this.inv.length; i++) {
            var container = this.inv[i];
            if (container === null) continue;
            if (container.uniqueID() !== uniqueID) continue;
            if (!Merchant.canContribute(container)) continue;
            Merchant.autoContribute(container)
        }
        if (this.autosort) this.sortInventory()
    },
    toggleAutoSort: function toggleAutoSort() {
        this.autosort = !this.autosort;
        return this.autosort
    }
};
var $materialSide = $("#materialSide");
var $itemInspectSide = $("#itemInspectSide");

function refreshInventory() {
    refreshAutoSortToggle();
    $inventory.empty();
    $materialSide.show();
    if (!Inventory.sideInspect || Inventory.findContainer(Inventory.sideInspect.uniqueID()) === undefined) {
        Inventory.sideInspect = null;
        $materialSide.show();
        $itemInspectSide.hide()
    } else {
        $materialSide.hide();
        $itemInspectSide.show()
    }
    Inventory.inv.forEach(function (item) {
        $inventory.append(inventoryItemCard(item, true, false, true))
    });
    $inventory.sortable({
        group: "list",
        animation: 200,
        ghostClass: "ghost",
        onUpdate: commitInventorySort
    });
    if (!Inventory.sideInspect) return;
    if (FusionManager.canFuseTooltip(Inventory.sideInspect)) $("#sidebarFuse").removeClass("otherDisabled").addClass("tooltip");
    else $("#sidebarFuse").addClass("otherDisabled").removeClass("tooltip")
}

function refreshAutoSortToggle() {
    $sortInventory.empty();
    var d = $("<div/>").addClass("autoSortToggle").appendTo($sortInventory);
    if (Inventory.autosort) {
        d.addClass("autoSortEnable");
        $("<span/>").html(miscIcons.toggleOn).appendTo(d)
    } else $("<span/>").html(miscIcons.toggleOff).appendTo(d);
    $("<span/>").addClass("autoSortText").html("&nbsp;" + displayText("auto_sort")).appendTo(d)
}

function refreshInventoryPlaces(uniqueID) {
    if (openedTabEquals("inventory")) refreshInventory();
    if (openedTabEquals("merchant_order")) refreshOrderInvCount();
    if (openedTabEquals("town_fusion")) refreshPossibleFuse();
    if (openedTabEquals("town_forge")) {
        refreshSmithInventory();
        refreshSmithStage()
    }
    if (openedTabEquals("town_synth")) refreshSynthInventory();
    if (openedTabEquals("town_fortune")) refreshFortuneGear();
    if (openedTabEquals("town_museum")) refreshMuseumInv();
    if (isHeroScreen()) examineHeroPossibleEquip(HeroManager.heroView, true);
    $sideInventoryAmt.html("".concat(Inventory.inventoryCount(), "/").concat(Inventory.invMax()));
    if (Inventory.inventoryCount() >= Inventory.invMax()) $sideInventory.addClass("inventoryFullSide");
    else $sideInventory.removeClass("inventoryFullSide");
    checkGuildOrderDisable(uniqueID)
}
$(document).on("click", ".ctrlClickItem", function (e) {
    e.preventDefault();
    var recipeID = $(e.currentTarget).data("rid");
    if (lastMuseum !== recipeID) museumInspect(recipeID);
    if (!e.ctrlKey) return;
    actionSlotManager.addSlot(recipeID);
    e.stopPropagation()
});

function createContainerFromUniqueID(uniqueID) {
    var props = uniqueID.split("_");
    var item = new itemContainer(props[0], parseInt(props[1]));
    if (props[2] !== undefined) item.sharp = parseInt(props[2]);
    if (props[3] !== undefined) item.enchant = parseInt(props[3]);
    if (props[4] === "1") item.transform();
    item.refreshTooltipValues();
    return item
}

function commitInventorySort() {
    var newOrder = $inventory.sortable("toArray");
    var newInv = [];
    newOrder.forEach(function (uniqueID) {
        newInv.push(Inventory.findContainer(uniqueID))
    });
    Inventory.inv = newInv
}
$inventory.on("click", ".inventoryItem", function (e) {
    e.preventDefault();
    var uniqueID = $(e.currentTarget).attr("data-id");
    $(".inventoryItem").removeClass("inspectHighlight");
    if (e.shiftKey) {
        Inventory.sellAll(uniqueID);
        destroyTooltip();
        return
    }
    $(e.currentTarget).addClass("inspectHighlight");
    if (Inventory.sideInspect !== null && Inventory.sideInspect.uniqueID() === uniqueID) return;
    inspectItemSideDetail(uniqueID)
});

function inspectItemSideDetail() {
    var uniqueID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Inventory.sideInspect.uniqueID();
    $materialSide.hide();
    $itemInspectSide.show().empty();
    var container = Inventory.findContainer(uniqueID);
    if (container === undefined) {
        Inventory.sideInspect = null;
        refreshInventory();
        return
    }
    var actionsContainer = $("<div/>").addClass("ItemSideInspectActions").appendTo($itemInspectSide);
    $("<div/>").attr("id", "itemSideGeneral").addClass("ItemSideInspectAction").html(miscIcons.info).appendTo(actionsContainer);
    var u = $("<div/>").attr("id", "itemSideHeroes").addClass("ItemSideInspectAction").html('<i class="fas fa-helmet-battle"></i>').appendTo(actionsContainer);
    if (HeroManager.isGearUpgrade(container)) u.addClass("hasEvent");
    if (Inventory.sideInvTabPref === "info") {
        $(".ItemSideInspectAction").removeClass("highlight");
        $("#itemSideGeneral").addClass("highlight")
    } else if (Inventory.sideInvTabPref === "heroes") {
        $(".ItemSideInspectAction").removeClass("highlight");
        $("#itemSideHeroes").addClass("highlight")
    }
    $("<div/>").addClass("closeItemSideInspect").html(miscIcons.cancelSlot).appendTo(actionsContainer);
    Inventory.sideInspect = container;
    var itemSideInspectItem = $("<div/>").addClass("itemSideInspectName itemName R".concat(container.rarity, " tooltip")).attr({
        "data-tooltip": "herogear_container",
        "data-tooltip-value": container.uniqueID()
    }).html(container.picName()).appendTo($itemInspectSide);
    $("<div/>").addClass("itemRarity RT".concat(container.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[container.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(itemSideInspectItem);
    $("<div/>").addClass("itemLevel").html(container.itemLevel()).appendTo(itemSideInspectItem);
    if (Inventory.sideInvTabPref === "info") {
        var d = $("<div/>").addClass("itemSideDiv").appendTo($itemInspectSide);
        var sellOptionsHeader = $("<div/>").addClass("itemSideHeader").html(displayText("sell_options")).appendTo(d);
        $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_inventory").html(miscIcons.keyboard).appendTo(sellOptionsHeader);
        $("<div/>").addClass("itemSideOption actionButton").attr("id", "sellOne").html(displayText("sell_one")).appendTo(d);
        $("<div/>").addClass("itemSideOption actionButton").attr("id", "sellMax").html(displayText("sell_all")).appendTo(d);
        $("<div/>").addClass("itemSideOption actionButton").attr("id", "sellCustom").html(displayText("sell_custom")).appendTo(d);
        if (container.type !== "Trinkets") {
            var showf = false;
            var f = $("<div/>").addClass("itemSideDiv").appendTo($itemInspectSide);
            var f1 = $("<div/>").addClass("itemSideHeader").html(displayText("other_options")).appendTo(f);
            $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_other_options").html(miscIcons.keyboard).appendTo(f1);
            if (!container.item.mastered) {
                showf = true;
                $("<div/>").addClass("itemSideOption actionButton tooltip").attr({
                    id: "sidebarMaster",
                    "data-tooltip": "other_master"
                }).appendTo(f);
                resetMasteryButton(container.item)
            }
            if (Shop.alreadyPurchased("AL3002") && TownManager.idToBuilding("TB001").status >= 2) {
                showf = true;
                var _f = $("<div/>").addClass("itemSideOption actionButton tooltip").attr({
                    id: "sidebarDesynth",
                    "data-tooltip": "other_desynth",
                    "data-tooltip-value": uniqueID
                }).html(displayText("other_desynth")).appendTo(f);
                if (container.rarity === 0) _f.addClass("otherDisabled").removeClass("tooltip")
            }
            if (Shop.alreadyPurchased("AL3009") && TownManager.idToBuilding("TB001").status >= 2) {
                showf = true;
                var f2 = $("<div/>").addClass("itemSideOption actionButton tooltip").attr({
                    id: "sidebarResynth",
                    "data-tooltip": "other_resynth",
                    "data-tooltip-value": uniqueID
                }).html(displayText("other_resynth")).appendTo(f);
                if (SynthManager.fuel < SynthManager.amt(container, synthToggle.RESYNTH)) f2.addClass("otherDisabled")
            }
            if (Shop.alreadyPurchased("AL3005") && TownManager.idToBuilding("TB004").status >= 2) {
                showf = true;
                var f3 = $("<div/>").addClass("itemSideOption actionButton tooltip").attr({
                    id: "sidebarForge",
                    "data-tooltip": "other_forge",
                    "data-tooltip-value": uniqueID
                }).html(displayText("other_forge")).appendTo(f);
                if (!bloopSmith.canUpgradeTooltip(container)) f3.addClass("otherDisabled").removeClass("tooltip")
            }
            if (Shop.alreadyPurchased("AL3003") && TownManager.idToBuilding("TB003").status >= 2) {
                showf = true;
                var f4 = $("<div/>").addClass("itemSideOption actionButton tooltip").attr({
                    id: "sidebarFuse",
                    "data-tooltip": "other_fuse",
                    "data-tooltip-value": uniqueID
                }).html(displayText("other_fuse")).appendTo(f);
                if (!FusionManager.canFuseTooltip(container)) f4.addClass("otherDisabled").removeClass("tooltip")
            }
            if (Shop.alreadyPurchased("AL3011") && TownManager.idToBuilding("TB005").status >= 2) {
                showf = true;
                var f5 = $("<div/>").addClass("itemSideOption actionButton tooltip").attr("id", "sidebarFortune").attr({
                    "data-tooltip": "other_fortune",
                    "data-tooltip-value": uniqueID
                }).html(displayText("other_fortune")).appendTo(f);
                if (!FortuneManager.canFortuneTooltip(container)) f5.addClass("otherDisabled").removeClass("tooltip")
            }
            if (Shop.alreadyPurchased("AL3015") && TownManager.idToBuilding("TB008").status >= 2) {
                showf = true;
                var f6 = $("<div/>").addClass("itemSideOption actionButton tooltip").attr("id", "sidebarMuseum").attr("data-tooltip", "other_museum").html(displayText("other_museum")).appendTo(f);
                if (Museum.checkSubmit(container)) f6.addClass("otherDisabled").removeClass("tooltip")
            }
            if (!showf) f.hide()
        }
    }
    if (Inventory.sideInvTabPref === "heroes") {
        var e = $("<div/>").addClass("itemSideDiv").appendTo($itemInspectSide);
        $("<div/>").addClass("itemSideHeader").html(displayText("equip_options")).appendTo(e);
        var heroes = HeroManager.heroesThatCanEquip(container);
        if (heroes.length === 0) $("<div/>").addClass("itemSideText").html(displayText("no_other_hero_equip")).appendTo(e);
        else heroes.forEach(function (hero) {
            return e.append(createHeroEquip(hero, container))
        })
    }
}

function resetMasteryButton(item) {
    var f0 = $("#sidebarMaster").empty();
    if (item.canMaster() > 0) {
        f0.addClass("otherDisabled");
        $("<span/>").addClass("actionButtonTextLeft otherDisabled").html("Craft ".concat(item.canMaster(), " More to Master")).appendTo(f0)
    } else {
        f0.removeClass("otherDisabled");
        var masteryCost = item.masteryCost();
        $("<span/>").addClass("actionButtonTextLeft").html(displayText("master_for")).appendTo(f0);
        $("<div/>").addClass("actionButtonCardValue tooltip").attr({
            "data-tooltip": "material_desc",
            "data-tooltip-value": masteryCost.id
        }).html("".concat(ResourceManager.materialIcon(masteryCost.id), " ").concat(masteryCost.amt)).appendTo(f0)
    }
}

function lockedSideItem() {
    return $("<div/>").addClass("itemSideOption tooltip itemSideLocked").attr("data-tooltip", "feature_locked").html("".concat(miscIcons.locked, "&nbsp;").concat(displayText("universal_locked")))
}
$itemInspectSide.on("click", ".closeItemSideInspect", function (e) {
    $(".inventoryItem").removeClass("inspectHighlight");
    $materialSide.show();
    $itemInspectSide.hide();
    Inventory.sideInspect = null
});
$itemInspectSide.on("click", "#sellOne", function (e) {
    e.preventDefault();
    Inventory.sellQty(1);
    refreshInventory()
});
$itemInspectSide.on("click", "#sellMax", function (e) {
    e.preventDefault();
    Inventory.sellQty(Inventory.sideInspect.qty);
    refreshInventory()
});
$itemInspectSide.on("click", "#sellCustom", function (e) {
    e.preventDefault();
    var qty = parseInt(prompt("Amount to sell?", Inventory.sideInspect.qty));
    if (!Number.isInteger(qty) || qty <= 0) return;
    Inventory.sellQty(qty);
    refreshInventory()
});
$itemInspectSide.on("click", ".heroSideEquip", function (e) {
    e.preventDefault();
    var heroID = $(e.currentTarget).data("hid");
    Inventory.equipHero(heroID);
    if (Inventory.sideInspect) inspectItemSideDetail();
    refreshInventory()
});
$itemInspectSide.on("click", "#sidebarMaster", function (e) {
    e.preventDefault();
    Inventory.sideInspect.item.attemptMastery();
    if (Inventory.sideInspect.item.isMastered()) inspectItemSideDetail()
});
$itemInspectSide.on("click", "#sidebarDesynth", function (e) {
    e.preventDefault();
    var newcontainer = SynthManager.desynthItem(Inventory.sideInspect, e.shiftKey);
    if (e.shiftKey && Inventory.sideInspect === null) {
        Inventory.sideInspect = newcontainer;
        inspectItemSideDetail()
    }
    refreshInventory()
});
$itemInspectSide.on("click", "#sidebarResynth", function (e) {
    e.preventDefault();
    var d = SynthManager.resynthItem(Inventory.sideInspect);
    if (d && !e.shiftKey) inspectItemSideDetail(d);
    refreshInventory()
});
$itemInspectSide.on("click", "#sidebarForge", function (e) {
    e.preventDefault();
    var d = bloopSmith.forgeItem(Inventory.sideInspect, SmithType.ENHANCE);
    if (d && $(e.currentTarget).hasClass("tooltip") && !e.shiftKey) inspectItemSideDetail(d);
    refreshInventory();
    if (Inventory.sideInspect && !bloopSmith.canUpgradeTooltip(Inventory.sideInspect)) $(e.currentTarget).addClass("otherDisabled").removeClass("tooltip")
});
$itemInspectSide.on("click", "#sidebarFuse", function (e) {
    e.preventDefault();
    var fuseid = FusionManager.addFuse(Inventory.sideInspect.uniqueID());
    if (fuseid === undefined) return;
    FusionManager.startFuse(fuseid);
    refreshFuseSidebar();
    refreshInventory();
    if (!Inventory.sideInspect) return;
    if (!FusionManager.canFuseTooltip(Inventory.sideInspect)) {
        $(e.currentTarget).addClass("otherDisabled").removeClass("tooltip");
        destroyTooltip()
    }
});
$itemInspectSide.on("click", "#sidebarFortune", function (e) {
    e.preventDefault();
    FortuneManager.stageItem(Inventory.sideInspect.uniqueID());
    FortuneManager.lockFortune();
    refreshInventory();
    if (Inventory.sideInspect && !FortuneManager.canFortuneTooltip(Inventory.sideInspect)) $(e.currentTarget).addClass("otherDisabled").removeClass("tooltip")
});
$itemInspectSide.on("click", "#sidebarMuseum", function (e) {
    e.preventDefault();
    if (e.shiftKey) Museum.donateUp(Inventory.sideInspect.uniqueID());
    else Museum.donate(Inventory.sideInspect.uniqueID());
    refreshInventory();
    if (Inventory.sideInspect && Museum.checkSubmit(Inventory.sideInspect, false)) $(e.currentTarget).addClass("otherDisabled").removeClass("tooltip")
});
$itemInspectSide.on("click", "#itemSideGeneral", function (e) {
    e.preventDefault();
    Inventory.sideInvTabPref = "info";
    inspectItemSideDetail()
});
$itemInspectSide.on("click", "#itemSideHeroes", function (e) {
    e.preventDefault();
    Inventory.sideInvTabPref = "heroes";
    inspectItemSideDetail()
});
$museumSidebar.on("click", ".museumRecipe", function (e) {
    e.preventDefault();
    var recipe = $(e.currentTarget).data("recipe");
    var rarity = $(e.currentTarget).data("rarity");
    var sharp = $(e.currentTarget).data("sharp");
    Museum.forceDonate(recipe, rarity, sharp)
});

function createHeroEquip(hero, container) {
    var gear = hero.getSlot(container.type).gear;
    var d = $("<div/>").addClass("heroSideEquip").data("hid", hero.id);
    if (gear !== null) d.addClass("tooltip").attr({
        "data-tooltip": "equip_sidebar",
        "data-tooltip-value": gear.uniqueID()
    });
    var currentStats = gear !== null ? gear.itemStat() : blankItemStat;
    var newStats = container.itemStat();
    $("<div/>").addClass("heroSideEquipPic").html(hero.head).appendTo(d);
    var f = $("<div/>").addClass("heroSideEquipStats").appendTo(d);
    var f2 = $("<div/>").addClass("heroSideEquipStat heroStat").appendTo(f);
    var same = true;
    for (var _i = 0, _Object$entries = Object.entries(newStats); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            stat = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
        var deltaStat = val - currentStats[stat];
        if (deltaStat === 0) continue;
        same = false;
        if (deltaStat > 0) $("<span/>").addClass("gearStatPositive statValue").html("".concat(miscIcons[stat], " +").concat(deltaStat)).appendTo(f2);
        if (deltaStat < 0) $("<span/>").addClass("gearStatNegative statValue").html("".concat(miscIcons[stat], " ").concat(deltaStat)).appendTo(f2)
    }
    if (same) $("<span/>").addClass("statValue").html(displayText("already_equipped")).appendTo(f2);
    return d
}

function inventoryItemCard(item, showUpgrade, showUpgradeMaterial, isInventory) {
    var itemdiv = $("<div/>").addClass("inventoryItem").attr("data-id", item.uniqueID());
    if (isInventory && Inventory.sideInspect !== null && Inventory.sideInspect.uniqueID() === item.uniqueID()) itemdiv.addClass("inspectHighlight");
    var itemName = $("<div/>").addClass("itemName tooltip").attr({
        "data-tooltip": "inventory_container",
        "data-tooltip-value": item.uniqueID()
    });
    if (showUpgradeMaterial) itemName.attr("data-tooltip", "herogear_container");
    var itemRarity = $("<div/>").addClass("itemRarity");
    var itemLevel = $("<div/>").addClass("itemLevel").html(item.itemLevel());
    var itemQuantity = $("<div/>").addClass("itemQty").attr("id", "iq" + item.uniqueID()).html(item.qty);
    if (showUpgradeMaterial) $("<div/>").addClass("smithItemMaterial tooltip").attr({
        "data-tooltip": "material_desc",
        "data-tooltip-value": item.smithCost
    }).html(ResourceManager.materialIcon(item.smithCost)).appendTo(itemdiv);
    item.refreshTooltipValues();
    itemdiv.addClass("R" + item.rarity).addClass("ctrlClickItem").data("rid", item.id);
    itemName.addClass("itemName").attr({
        id: item.id,
        r: item.rarity
    }).html(item.picName());
    itemRarity.addClass("RT".concat(item.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[item.rarity].toLowerCase())
    }).html(miscIcons.rarity);
    if (item.lvl === 0 && item.scale === 0) {
        itemLevel.hide()
    }
    if (HeroManager.isGearUpgrade(item) && showUpgrade) {
        $("<div/>").addClass("itemUpgrade tooltip").attr({
            "data-tooltip": "equipment_upgrade"
        }).html('<i class="fas fa-arrow-up"></i>').appendTo(itemName)
    }
    if (item.item.recipeType === "trinket") {
        itemLevel.attr({
            "data-tooltip": "star_rating"
        });
        itemRarity.hide()
    }
    itemdiv.append(itemName, itemLevel, itemRarity, itemQuantity);
    return itemdiv
}
var SingularType = {
    Staves: "Staff",
    Knives: "Knife",
    Swords: "Sword",
    Helmets: "Helmet",
    Hats: "Hat",
    Masks: "Mask",
    Gauntlets: "Gauntlet",
    Gloves: "Glove",
    Shoes: "Shoe",
    Armor: "Armor",
    Cloaks: "Cloak",
    Vests: "Vest",
    Shields: "Shield",
    Thrown: "Thrown",
    Tomes: "Tome",
    Pendants: "Pendant",
    Rings: "Ring",
    Belts: "Belt",
    Trinkets: "Trinket"
};
"use strict";

function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance")
}

function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter)
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i]
        }
        return arr2
    }
}

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var slotState = Object.freeze({
    NEEDMATERIAL: 0,
    CRAFTING: 1
});
var $actionSlots = $("#actionSlots");
$actionSlots.on("click", ".ASCancel", function (e) {
    e.preventDefault();
    e.stopPropagation();
    destroyTooltip(e);
    var slot = parseInt($(e.target).parent().data("slotNum"));
    actionSlotManager.removeSlot(slot)
});
$actionSlots.on("click", ".ASBuySlotButton", function (e) {
    e.preventDefault();
    actionSlotManager.upgradeSlot()
});
$actionSlots.on("click", ".ASauto", function (e) {
    e.preventDefault();
    var slot = parseInt($(e.currentTarget).data("slotNum"));
    actionSlotManager.toggleAuto(slot);
    actionSlotVisualManager.updateAutoSell();
    destroyTooltip();
    generateTooltip(e)
});
var actionSlot = function () {
    function actionSlot(itemid, slotNum) {
        _classCallCheck(this, actionSlot);
        this.itemid = itemid;
        this.item = recipeList.idToItem(itemid);
        this.craftTime = 0;
        this.status = slotState.NEEDMATERIAL;
        this.slotNum = slotNum
    }
    _createClass(actionSlot, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.itemid = this.itemid;
            save.craftTime = this.craftTime;
            save.status = this.status;
            save.slotNum = this.slotNum;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.craftTime = save.craftTime;
            this.status = save.status;
            this.slotNum = save.slotNum
        }
    }, {
        key: "itemPicName",
        value: function itemPicName() {
            return this.item.itemPicName()
        }
    }, {
        key: "addTime",
        value: function addTime(t, skipAnimation) {
            if (this.status === slotState.NEEDMATERIAL) this.attemptStart(skipAnimation);
            if (this.status !== slotState.CRAFTING) {
                this.craftTime = 0;
                return
            }
            this.craftTime += t;
            while (this.craftTime > this.maxCraft()) {
                this.craftTime -= this.maxCraft();
                Inventory.craftRecipe(this.itemid, skipAnimation);
                if (this.itemid === "R13001" && recipeList.idToItem("R13001").craftCount === 1) {
                    $inventoryTabSpan.addClass("hasEvent");
                    tabHide()
                }
                if (!skipAnimation) refreshRecipeMasteryAmt(this.item);
                this.status = slotState.NEEDMATERIAL;
                this.attemptStart(skipAnimation)
            }
            if (!skipAnimation) this.progress = (this.craftTime / this.maxCraft()).toFixed(3) * 100 + "%"
        }
    }, {
        key: "maxCraft",
        value: function maxCraft() {
            return Math.floor(this.item.craftTime * Museum.craftTime(this.item.id))
        }
    }, {
        key: "timeRemaining",
        value: function timeRemaining() {
            return this.maxCraft() - this.craftTime
        }
    }, {
        key: "attemptStart",
        value: function attemptStart(skipAnimation) {
            if (this.item.isMastered()) {
                this.status = slotState.CRAFTING;
                return
            }
            if (!ResourceManager.canAffordMaterial(this.item)) return;
            ResourceManager.deductMaterial(this.item, skipAnimation);
            this.status = slotState.CRAFTING
        }
    }, {
        key: "autoSellToggle",
        value: function autoSellToggle() {
            return this.item.autoSellToggle()
        }
    }, {
        key: "autoSell",
        value: function autoSell() {
            return this.item.autoSell
        }
    }, {
        key: "refundMaterial",
        value: function refundMaterial() {
            if (this.status !== slotState.CRAFTING || this.item.isMastered()) return;
            ResourceManager.refundMaterial(this.item)
        }
    }, {
        key: "isMastered",
        value: function isMastered() {
            return this.item.isMastered()
        }
    }, {
        key: "isBuildingMaterial",
        value: function isBuildingMaterial() {
            return this.item.recipeType !== "normal"
        }
    }, {
        key: "resList",
        value: function resList() {
            return this.item.gcost
        }
    }, {
        key: "matList",
        value: function matList() {
            var array = [];
            if (!this.item.mcost) return array;
            for (var _i = 0, _Object$entries = Object.entries(this.item.mcost); _i < _Object$entries.length; _i++) {
                var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                    key = _Object$entries$_i[0],
                    value = _Object$entries$_i[1];
                array.push({
                    id: key,
                    amt: value
                })
            }
            return array
        }
    }]);
    return actionSlot
}();
var craftCount = 0;
var actionSlotManager = {
    maxSlots: 1,
    slots: [],
    minTime: 0,
    createSave: function createSave() {
        var save = {};
        save.maxSlots = this.maxSlots;
        save.slots = [];
        this.slots.forEach(function (s) {
            save.slots.push(s.createSave())
        });
        save.minTime = this.minTime;
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        this.maxSlots = save.maxSlots;
        save.slots.forEach(function (s) {
            var slot = new actionSlot(s.itemid);
            slot.loadSave(s);
            _this.slots.push(slot)
        });
        this.minTime = save.minTime
    },
    clearProgress: function clearProgress() {
        this.maxSlots = 1;
        this.slots = [];
        this.minTime = 0
    },
    addSlot: function addSlot(itemid) {
        if (this.slots.length >= this.maxSlots) {
            ToastManager.renderToast("slots_full");
            return
        }
        if (Inventory.inv.length >= Inventory.invMax()) {
            ToastManager.renderToast("max_inventory");
            return
        }
        var item = recipeList.idToItem(itemid);
        if (item.recipeType !== "normal" && this.isAlreadySlotted(itemid)) return;
        if (!item.owned) return ToastManager.renderToast("recipe_not_owned");
        if (!item.canProduce) {
            ToastManager.renderToast("craft_warning");
            return
        }
        this.slots.push(new actionSlot(itemid, this.slots.length));
        this.adjustMinTime();
        refreshSideWorkers();
        recipeList.canCraft();
        checkCraftableStatus()
    },
    adjustMinTime: function adjustMinTime() {
        if (this.slots.length === 0) {
            this.minTime = 0;
            return
        }
        this.minTime = Math.min.apply(Math, _toConsumableArray(this.slots.map(function (s) {
            return s.maxCraft()
        })))
    },
    removeSlot: function removeSlot(slot) {
        this.slots[slot].refundMaterial();
        this.slots.splice(slot, 1);
        this.slots.forEach(function (s, i) {
            return s.slotNum = i
        });
        this.adjustMinTime();
        refreshSideWorkers();
        recipeList.canCraft();
        checkCraftableStatus()
    },
    isAlreadySlotted: function isAlreadySlotted(id) {
        return this.slots.map(function (s) {
            return s.itemid
        }).includes(id)
    },
    addTime: function addTime(t) {
        var _this2 = this;
        if (this.slots.length === 0) return;
        var skipAnimation = t >= this.minTime;
        if (!skipAnimation) {
            this.slots.forEach(function (slot) {
                slot.addTime(t, false)
            });
            return
        }
        var timeRemaining = t;
        var _loop = function _loop() {
            var timeChunk = Math.min(timeRemaining, _this2.minTime);
            _this2.slots.forEach(function (slot) {
                slot.addTime(timeChunk, true)
            });
            timeRemaining -= timeChunk
        };
        while (timeRemaining > 0) {
            _loop()
        }
        refreshInventoryAndMaterialPlaces()
    },
    upgradeSlot: function upgradeSlot() {
        if (this.maxSlots === 5) return;
        this.maxSlots += 1;
        recipeList.canCraft();
        checkCraftableStatus()
    },
    autoSell: function autoSell(i) {
        if (this.slots.length <= i) return "";
        return this.slots[i].autoSell()
    },
    toggleAuto: function toggleAuto(i) {
        return this.slots[i].autoSellToggle()
    },
    workersUsed: function workersUsed(type) {
        var workers = this.slots.map(function (s) {
            return s.item.gcost
        });
        var workerFlat = flattenArray(workers);
        return workerFlat.filter(function (w) {
            return w === type
        }).length
    },
    materialUsage: function materialUsage() {
        var mats = flattenArray.apply(void 0, [this.slots.map(function (s) {
            return s.item.material()
        })]);
        var uniqueMats = _toConsumableArray(new Set(mats));
        return uniqueMats
    },
    freeSlots: function freeSlots() {
        return this.maxSlots - this.slots.length
    },
    purgeSlot: function purgeSlot(recipeID) {
        var slot = this.slots.findIndex(function (s) {
            return s.itemid === recipeID
        });
        this.slots.splice(slot, 1);
        this.slots.forEach(function (s, i) {
            return s.slotNum = i
        });
        this.adjustMinTime();
        refreshSideWorkers();
        recipeList.canCraft();
        checkCraftableStatus()
    },
    showAutoSell: function showAutoSell() {
        this.slots.forEach(function (slot) {
            if (slot.item.recipeType === "normal") $("#asAuto".concat(slot.slotNum)).show()
        })
    },
    anyAutoSell: function anyAutoSell() {
        return this.slots.some(function (as) {
            return as.autoSell() != "None"
        })
    }
};
var actionSlotVisualSlotTracking = function () {
    function actionSlotVisualSlotTracking(id, status, mastered) {
        _classCallCheck(this, actionSlotVisualSlotTracking);
        this.id = id;
        this.status = status;
        this.mastered = mastered
    }
    _createClass(actionSlotVisualSlotTracking, [{
        key: "addReference",
        value: function addReference(i) {
            this.timeRef = $("#ASBar".concat(i, " .ASProgressBarTimer"));
            this.progressRef = $("#ASBarFill".concat(i))
        }
    }]);
    return actionSlotVisualSlotTracking
}();

function newActionSlot(slot) {
    var d = $("<div/>").addClass("ASBlock").attr("data-id", slot.slotNum);
    $("<div/>").addClass("ASName").attr("id", "asSlotName" + slot.slotNum).html(slot.itemPicName()).appendTo(d);
    var d2 = $("<div/>").addClass("ASCancel").data("slotNum", slot.slotNum).appendTo(d);
    $("<div/>").addClass("ASCancelText tooltip").attr({
        "data-tooltip": "cancel_craft"
    }).data("slotNum", slot.slotNum).html("".concat(miscIcons.cancelSlot)).appendTo(d2);
    var d3 = $("<div/>").addClass("ASProgressBar").attr("id", "ASBar" + slot.slotNum).appendTo(d);
    var d3a = $("<div/>").addClass("ASProgressBarTimer tooltip").appendTo(d3);
    if (slot.status === slotState.NEEDMATERIAL) d3a.addClass("matsNeeded").attr({
        "data-tooltip": "materials_needed"
    }).html(miscIcons.alert);
    var s3 = $("<span/>").addClass("ProgressBarFill").attr("id", "ASBarFill" + slot.slotNum).appendTo(d3);
    if (slot.isMastered()) s3.addClass("ProgressBarFillMaster");
    var d4 = $("<div/>").addClass("ASauto tooltip").attr("data-tooltip", "autosell_".concat(slot.autoSell().toLowerCase())).attr("id", "asAuto" + slot.slotNum).data("slotNum", slot.slotNum).html(miscIcons.autoSell).appendTo(d);
    if (slot.autoSell() !== "None") d4.addClass("ASautoEnabled" + slot.autoSell());
    if (slot.isBuildingMaterial() || !Shop.alreadyPurchased("AL3000")) d4.hide();
    if (!slot.resList) return d;
    var d5 = $("<div/>").addClass("asRes").attr("id", "asRes" + slot.slotNum).appendTo(d);
    slot.resList().forEach(function (type) {
        $("<div/>").addClass("asResIcon tooltip").attr({
            "data-tooltip": "".concat(type, "_worker")
        }).html(miscIcons[type]).appendTo(d5)
    });
    if (slot.item.recipeType === "normal") {
        slot.matList().forEach(function (m) {
            var matIcon = $("<div/>").addClass("asResIcon asMatIcon tooltip").attr({
                id: "asMat" + slot.slotNum,
                "data-tooltip": "material_desc",
                "data-tooltip-value": m.id
            }).html(ResourceManager.materialIcon(m.id)).appendTo(d5);
            if (m.id === "M001") matIcon.attr({
                "data-tooltip": "gold_value",
                "data-tooltip-value": formatWithCommas(m.amt)
            });
            if (slot.isMastered()) matIcon.hide()
        })
    }
    return d
}

function newEmptyActionSlot() {
    var d = $("<div/>").addClass("ASBlock");
    var d1 = $("<div/>").addClass("ASName ASEmpty").appendTo(d);
    $("<div/>").addClass("ASEmptyIcon").html("".concat(miscIcons.emptySlot)).appendTo(d1);
    $("<div/>").addClass("ASEmptyText").html("Empty Slot").appendTo(d1);
    return d
}
var actionSlotVisualManager = {
    slots: [],
    materials: [],
    slotCount: 0,
    disableRefresh: false,
    updateSlots: function updateSlots() {
        var _this3 = this;
        if (this.disableRefresh) return;
        if (this.slots.length !== actionSlotManager.slots.length || this.slotCount !== actionSlotManager.maxSlots) {
            this.slotCount = actionSlotManager.maxSlots;
            this.slots = [];
            $actionSlots.empty();
            var d = $("<div/>").addClass("craftingSlotsContainer").appendTo($actionSlots);
            actionSlotManager.slots.forEach(function (slot, i) {
                var newSlot = new actionSlotVisualSlotTracking(slot.item.id, slot.status, slot.isMastered());
                d.append(newActionSlot(slot, i));
                newSlot.addReference(i);
                _this3.slots.push(newSlot)
            });
            for (var i = 0; i < actionSlotManager.freeSlots(); i++) {
                d.append(newEmptyActionSlot())
            }
            intializeASMaterials();
            return
        }
        actionSlotManager.slots.forEach(function (slot, i) {
            var compareSlot = _this3.slots[i];
            if (compareSlot.status === slotState.NEEDMATERIAL && slot.status === slotState.CRAFTING) {
                compareSlot.timeRef.removeClass("matsNeeded").attr({
                    "data-tooltip": "remaining_time"
                }).html(miscIcons.time + msToTime(slot.timeRemaining()));
                compareSlot.status = slotState.CRAFTING
            } else if (compareSlot.status === slotState.CRAFTING && slot.status === slotState.NEEDMATERIAL) {
                compareSlot.timeRef.addClass("matsNeeded").attr({
                    "data-tooltip": "materials_needed"
                }).html(miscIcons.alert);
                compareSlot.progressRef.css("width", "0%");
                compareSlot.status = slotState.NEEDMATERIAL
            }
            if (compareSlot.status === slotState.CRAFTING) {
                compareSlot.progressRef.css("width", slot.progress);
                compareSlot.timeRef.attr({
                    "data-tooltip": "remaining_time"
                }).html(miscIcons.time + msToTime(slot.timeRemaining()))
            }
            if (slot.isMastered() && !compareSlot.mastered) {
                compareSlot.mastered = true;
                $("#ASBarFill" + slot.slotNum).addClass("ProgressBarFillMaster");
                $("#asMat" + slot.slotNum).hide()
            }
        });
        refreshASMaterials()
    },
    updateAutoSell: function updateAutoSell() {
        $(".ASauto").removeClass("ASautoEnabledCommon ASautoEnabledGood ASautoEnabledGreat ASautoEnabledEpic");
        actionSlotManager.slots.forEach(function (slot) {
            var rarity = slot.autoSell();
            $("#asAuto" + slot.slotNum).addClass("ASautoEnabled" + rarity).attr("data-tooltip", "autosell_".concat(rarity.toLowerCase()))
        })
    }
};

function refreshInventoryAndMaterialPlaces() {
    refreshInventoryPlaces();
    actionSlotManager.materialUsage().forEach(function (matID) {
        refreshMaterial(matID)
    })
}
var $materialQuick = $("#materialQuick");
var $materialQuick2 = $("#materialQuick2");

function intializeASMaterials() {
    $materialQuick.empty();
    $materialQuick2.empty();
    actionSlotVisualManager.materials = [];
    var materials = [];
    actionSlotManager.slots.forEach(function (slot) {
        if (slot.item.id === "R13001") return;
        if (slot.item.smithCost !== null && !materials.includes(slot.item.smithCost)) {
            materials.push(slot.item.smithCost);
            actionSlotVisualManager.materials.push({
                mid: slot.item.smithCost,
                text0: null,
                textFill0: null,
                text1: null,
                textFill1: null
            })
        }
    });
    DungeonManager.dungeons.filter(function (d) {
        return d.status === DungeonStatus.ADVENTURING
    }).forEach(function (dungeon) {
        if (!dungeon.mat) return;
        if (!materials.includes(dungeon.mat)) {
            materials.push(dungeon.mat);
            actionSlotVisualManager.materials.push({
                mid: dungeon.mat,
                text: null,
                textFill: null
            })
        }
    });
    actionSlotVisualManager.materials.forEach(function (materialObject) {
        var material = ResourceManager.idToMaterial(materialObject.mid);
        if (!material) return;
        var w = "".concat(Math.floor(material.amt / ResourceManager.materialCap() * 100, 2), "%");
        var options = {
            prefix: "asMaterial",
            tooltip: "material_desc",
            icon: material.img,
            text: material.amt.toString(),
            textID: "asMaterial0" + materialObject.mid,
            width: w,
            fill: "asMaterialFill0" + materialObject.mid,
            tooltipData: materialObject.mid
        };
        generateProgressBar(options).appendTo($materialQuick);
        materialObject["text0"] = $("#asMaterial0" + materialObject.mid);
        materialObject["textFill0"] = $("#asMaterialFill0" + materialObject.mid);
        var options1 = {
            prefix: "asMaterial",
            tooltip: "material_desc",
            icon: material.img,
            text: material.amt.toString(),
            textID: "asMaterial1" + materialObject.mid,
            width: w,
            fill: "asMaterialFill1" + materialObject.mid,
            tooltipData: materialObject.mid
        };
        generateProgressBar(options1).appendTo($materialQuick2);
        materialObject["text1"] = $("#asMaterial1" + materialObject.mid);
        materialObject["textFill1"] = $("#asMaterialFill1" + materialObject.mid)
    })
}

function refreshASMaterials() {
    actionSlotVisualManager.materials.forEach(function (materialObject) {
        var material = ResourceManager.idToMaterial(materialObject.mid);
        var w = "".concat(Math.floor(material.amt / ResourceManager.materialCap() * 100, 2), "%");
        materialObject["text0"].html(material.amt);
        materialObject["text1"].html(material.amt);
        materialObject["textFill0"].css("width", w);
        materialObject["textFill1"].css("width", w)
    })
}
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var $fuseBuilding = $("#fuseBuilding");
var fuse = function () {
    function fuse(uniqueID) {
        _classCallCheck(this, fuse);
        this.container = createContainerFromUniqueID(uniqueID);
        this.id = this.container.id;
        this.recipe = recipeList.idToItem(this.container.id);
        this.fuseTime = 0;
        this.started = false;
        this.fuseID = FusionManager.fuseNum;
        FusionManager.fuseNum += 1
    }
    _createClass(fuse, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.uniqueID = this.uniqueID();
            save.fuseTime = this.fuseTime;
            save.started = this.started;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            if (save.fuseTime !== undefined) this.fuseTime = save.fuseTime;
            if (save.started !== undefined) this.started = save.started
        }
    }, {
        key: "addTime",
        value: function addTime(ms) {
            if (this.fuseTime >= this.getMaxFuse() || this.notStarted()) return;
            this.fuseTime = Math.min(this.fuseTime + ms, this.getMaxFuse());
            if (this.fuseComplete()) {
                ToastManager.renderToast("fusion_completed", rarities[this.container.rarity].toLowerCase(), recipeList.idToItem(this.id).name)
            }
        }
    }, {
        key: "getMaxFuse",
        value: function getMaxFuse() {
            return Math.floor(this.recipe.craftTime * this.container.rarity * Museum.craftTime(this.id))
        }
    }, {
        key: "timeRemaining",
        value: function timeRemaining() {
            return this.getMaxFuse() - this.fuseTime
        }
    }, {
        key: "fuseComplete",
        value: function fuseComplete() {
            if (this.notStarted()) return false;
            return this.fuseTime >= this.getMaxFuse()
        }
    }, {
        key: "increaseRarity",
        value: function increaseRarity() {
            this.container.rarity += 1
        }
    }, {
        key: "notStarted",
        value: function notStarted() {
            return !this.started
        }
    }, {
        key: "uniqueID",
        value: function uniqueID() {
            return this.container.uniqueID()
        }
    }]);
    return fuse
}();
var FusionManager = {
    slots: [],
    lvl: 1,
    fuseNum: 0,
    createSave: function createSave() {
        var save = {};
        save.slots = [];
        this.slots.forEach(function (slot) {
            save.slots.push(slot.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.slots.forEach(function (s) {
            var slot = new fuse(s.uniqueID);
            slot.loadSave(s);
            _this.slots.push(slot)
        })
    },
    clearProgress: function clearProgress() {
        this.slots = [];
        this.fuseNum = 0
    },
    addFuse: function addFuse(uniqueid) {
        if (this.slots.length === this.maxSlots()) return ToastManager.renderToast("cant_fuse_noslot");
        var container = Inventory.findContainer(uniqueid);
        if (container.rarity > 2) return ToastManager.renderToast("cant_fuse_rarity");
        if (ResourceManager.materialAvailable("M001") < this.getFuseCost(container, 1)) return ToastManager.renderToast("cant_fuse_material");
        if (container.qty < 3) return ToastManager.renderToast("cant_fuse_quantity");
        var fuseProps = Inventory.grabFromInventory(uniqueid, 3, true);
        ResourceManager.deductMoney(this.getFuseCost(fuseProps, 1));
        var newFuse = new fuse(uniqueid);
        this.slots.push(newFuse);
        refreshFuseSlots();
        refreshPossibleFuse();
        return newFuse.fuseID
    },
    fuseByID: function fuseByID(fuseID) {
        return this.slots.find(function (f) {
            return f.fuseID === fuseID
        })
    },
    startFuse: function startFuse(fuseid) {
        var fuse = this.fuseByID(fuseid);
        fuse.increaseRarity();
        fuse.started = true;
        refreshFuseSlots();
        refreshInventoryPlaces()
    },
    cancelFuse: function cancelFuse(fuseid) {
        var fuse = this.fuseByID(fuseid);
        if (fuse.notStarted()) {
            ResourceManager.addMaterial("M001", this.getFuseCost(fuse.container, 1));
            Inventory.addToInventory(fuse.uniqueID(), 3, true)
        } else if (fuse.fuseComplete()) {
            this.collectFuse(fuseid);
            return
        }
        this.slots = this.slots.filter(function (f) {
            return f.fuseID !== fuseid
        });
        refreshFuseSlots();
        refreshPossibleFuse()
    },
    addTime: function addTime(ms) {
        var _this2 = this;
        this.slots.forEach(function (fuse) {
            if (fuse.started) fuse.addTime(ms);
            if (fuse.fuseComplete()) _this2.collectFuse(fuse.fuseID)
        });
        if (openedTabEquals("town_fusion")) refreshFuseBars();
        if (sidebarToggleTracker === 2) refreshFuseSidebarText()
    },
    getFuseCost: function getFuseCost(container) {
        var rarityBoost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return 4 * container.item.value * (container.rarity + rarityBoost)
    },
    getFuseInventoryCost: function getFuseInventoryCost(container) {
        return 4 * container.item.value * (container.rarity + 1)
    },
    aFuseIsDone: function aFuseIsDone() {
        return this.slots.some(function (f) {
            return f.fuseComplete()
        })
    },
    collectFuse: function collectFuse(fuseID) {
        var slot = this.slots.find(function (f) {
            return f.fuseID === fuseID
        });
        if (slot === undefined || !slot.fuseComplete()) return;
        Inventory.addToInventory(slot.uniqueID());
        this.slots = this.slots.filter(function (f) {
            return f.fuseID !== fuseID
        });
        achievementStats.fusePerformed();
        refreshFuseSlots();
        refreshFuseSidebar()
    },
    maxSlots: function maxSlots() {
        if (!Shop.alreadyPurchased("AL3006")) return 2;
        if (!Shop.alreadyPurchased("AL3012")) return 3;
        return 4
    },
    getMaxFuse: function getMaxFuse(uniqueID) {
        var container = createContainerFromUniqueID(uniqueID);
        container.rarity += 1;
        return container.item.craftTime * container.rarity * Museum.craftTime(container.id)
    },
    canFuseTooltip: function canFuseTooltip(container) {
        if (container.rarity >= 3) return false;
        if (this.slots.length >= this.maxSlots()) return false;
        if (ResourceManager.materialAvailable("M001") < this.getFuseCost(container, 1)) return false;
        if (container.qty < 3) return false;
        return true
    },
    findContainer: function findContainer(uniqueID) {
        return this.slots.map(function (s) {
            return s.container
        }).find(function (c) {
            return c.uniqueID() === uniqueID
        })
    }
};

function initiateFusionBldg() {
    $fuseBuilding.show();
    refreshFuseSlots();
    generateFusionHeader();
    refreshPossibleFuse()
}

function createFuseBar(fuse) {
    var fusePercent = fuse.fuseTime / fuse.getMaxFuse();
    var fuseAmt = msToTime(fuse.getMaxFuse() - fuse.fuseTime);
    var fuseWidth = (fusePercent * 100).toFixed(1) + "%";
    var d1 = $("<div/>").addClass("fuseBarDiv").attr("id", "fuseBarDiv" + fuse.fuseID);
    var d1a = $("<div/>").addClass("fuseBar").attr("data-label", fuseAmt).attr("id", "fuseBar" + fuse.fuseID);
    var s1 = $("<span/>").addClass("fuseBarFill").attr("id", "fuseFill" + fuse.fuseID).css("width", fuseWidth);
    return d1.append(d1a, s1)
}

function refreshFuseBars() {
    FusionManager.slots.forEach(function (fuse) {
        if (fuse.fbv === undefined) fuse.fbv = $("#fuseBarDiv" + fuse.fuseID);
        if (fuse.fsc === undefined) fuse.fsc = $("#fuseSlotCollect" + fuse.fuseID);
        if (fuse.fb === undefined) fuse.fb = $("#fuseBar" + fuse.fuseID);
        if (fuse.ff === undefined) fuse.ff = $("#fuseFill" + fuse.fuseID);
        if (fuse.fuseComplete()) {
            fuse.fbv.hide();
            fuse.fsc.show();
            return
        }
        if (fuse.notStarted()) return;
        var fusePercent = fuse.fuseTime / fuse.getMaxFuse();
        var fuseAmt = msToTime(fuse.getMaxFuse() - fuse.fuseTime);
        var fuseWidth = (fusePercent * 100).toFixed(1) + "%";
        fuse.fb.attr("data-label", fuseAmt);
        fuse.ff.css("width", fuseWidth)
    })
}
var $fuseSlots = $("#fuseSlots");
var $fuseHeader = $("#fuseHeader");
var $fuseList = $("#fuseList");

function refreshFuseSlots() {
    $fuseSlots.empty();
    var fusionCardsContainer = $("<div/>").addClass("fusionCardsContainer").appendTo($fuseSlots);
    FusionManager.slots.forEach(function (slot) {
        slot.fbv = undefined;
        slot.fsc = undefined;
        slot.fb = undefined;
        slot.ff = undefined;
        var d1 = $("<div/>").addClass("fuseSlot").addClass("R" + slot.container.rarity).addClass("ctrlClickItem").data("rid", slot.id);
        var d2 = $("<div/>").addClass("fuseSlotName itemName tooltip").attr({
            "data-tooltip": "fuse_slot_container",
            "data-tooltip-value": slot.container.uniqueID()
        }).html(slot.container.picName());
        var d3 = $("<div/>").addClass("itemLevel").html(recipeList.idToItem(slot.id).itemLevel());
        var d4 = createFuseBar(slot);
        var d5 = $("<div/>").addClass("fuseSlotCollect actionButtonCard").attr("id", "fuseSlotCollect" + slot.fuseID).attr("fuseid", slot.fuseID).html(displayText("fusion_slot_collect_fuse_button")).hide();
        var d6 = $("<div/>").addClass("fuseSlotStart actionButtonCard").attr("id", "fuseSlotStart" + slot.fuseID).attr("fuseid", slot.fuseID).html(displayText("fusion_slot_start_fuse_button")).hide();
        var d7 = $("<div/>").addClass("fuseCloseContainer");
        var d7a = $("<div/>").addClass("fuseClose tooltip").attr({
            "data-tooltip": "fusion_remove",
            fuseid: slot.fuseID
        }).html('<i class="fas fa-times"></i>').appendTo(d7);
        var d8 = $("<div/>").addClass("fuseRarityContainer");
        $("<div/>").addClass("fuseRarity RT".concat(slot.container.rarity, " tooltip")).attr({
            "data-tooltip": "rarity_".concat(rarities[slot.container.rarity].toLowerCase())
        }).html(miscIcons.rarity).appendTo(d8);
        if (slot.fuseComplete()) {
            d4.hide();
            d5.show();
            d7.hide()
        }
        if (slot.started) d7a.attr({
            "data-tooltip": "fusion_active_remove"
        });
        if (slot.notStarted()) {
            d4.hide();
            d6.show();
            $("<div/>").addClass("fuseRaritySeparator").html('<i class="fas fa-arrow-right"></i>').appendTo(d8);
            $("<div/>").addClass("fuseRarity RT".concat(slot.container.rarity + 1, " tooltip")).attr({
                "data-tooltip": "rarity_".concat(rarities[slot.container.rarity + 1].toLowerCase())
            }).html(miscIcons.rarity).appendTo(d8)
        }
        d1.append(d2, d3, d8, d4, d5, d6, d7);
        fusionCardsContainer.append(d1)
    });
    for (var i = 0; i < FusionManager.maxSlots() - FusionManager.slots.length; i++) {
        var d4 = $("<div/>").addClass("fuseSlot fuseSlotEmpty");
        var d5 = $("<div/>").addClass("itemLevel");
        var d6 = $("<div/>").addClass("fuseSlotName itemName");
        $("<div/>").addClass("fuseSlotNameIcon").html(miscIcons.emptySlot).appendTo(d6);
        $("<div/>").addClass("fuseSlotNameTitle").html(displayText("fusion_slot_empty")).appendTo(d6);
        var d7 = $("<div/>").addClass("fuseRarityContainer");
        $("<div/>").addClass("fuseRarity").appendTo(d7);
        $("<div/>").addClass("fuseRaritySeparator").html('<i class="fas fa-arrow-right"></i>').appendTo(d7);
        $("<div/>").addClass("fuseRarity").appendTo(d7);
        var d8 = $("<div/>").addClass("fuseSlotButton");
        d4.append(d5, d6, d7, d8);
        fusionCardsContainer.append(d4)
    }
}

function generateFusionHeader() {
    $fuseHeader.empty();
    var possibleFusionHeaderContainer = $("<div/>").addClass("possibleFusionHeaderContainer").prependTo($fuseHeader);
    var possibleFusionHeader = $("<div/>").addClass("possibleFusionHeader").appendTo(possibleFusionHeaderContainer);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(possibleFusionHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("header_fusion_possible_fuse_title")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_fuse").html(miscIcons.keyboard).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("header_fusion_possible_fuse_desc")).appendTo(headingDetails)
}

function refreshPossibleFuse() {
    $fuseList.empty();
    var fusePossibilities = Inventory.inv.filter(function (c) {
        return c.qty >= 3 && c.rarity < 3
    });
    if (fusePossibilities.length === 0) {
        $("<div/>").addClass("emptyContentMessage").html(displayText("fusion_possible_empty")).appendTo($fuseList);
        return
    }
    var e = $("<div/>").addClass("possibleFuseHolder").appendTo($fuseList);
    fusePossibilities.forEach(function (container) {
        var d = $("<div/>").addClass("possibleFusegroup").appendTo(e);
        var rarities = ["rarity_common", "rarity_good", "rarity_great", "rarity_epic"];
        var fuseRarityText = displayText("fusion_possible_fuse_rarity").replace("{0}", displayText("".concat(rarities[container.rarity + 1])));
        $("<div/>").addClass("possibleFusegroupHeader").addClass("possibleFuseRarity" + (container.rarity + 1)).html(fuseRarityText).appendTo(d);
        var fuseSelect = $("<div/>").addClass("fuseSelect R".concat(container.rarity)).addClass("ctrlClickItem").data("rid", container.id).appendTo(d);
        $("<div/>").addClass("possibleFuse itemName tooltip").attr({
            "data-tooltip": "inventory_container",
            "data-tooltip-value": container.uniqueID()
        }).html(container.picName()).appendTo(fuseSelect);
        $("<div/>").addClass("possibleFuse itemLevel").html(recipeList.idToItem(container.id).itemLevel()).appendTo(fuseSelect);
        $("<div/>").addClass("possibleFuse itemRarity").addClass("RT".concat(container.rarity, " tooltip")).attr({
            "data-tooltip": "".concat(rarities[container.rarity].toLowerCase())
        }).html(miscIcons.rarity).appendTo(fuseSelect);
        var d2 = $("<div/>").addClass("gearStat tooltip").attr("data-tooltip", "fuse_time").html('<i class="fas fa-clock"></i>').appendTo(fuseSelect);
        $("<div/>").addClass("statValue").html(msToTime(FusionManager.getMaxFuse(container.uniqueID()))).appendTo(d2);
        var d3 = $("<div/>").addClass("fuseStart actionButtonCardCost").attr("uniqueid", container.uniqueID()).appendTo(fuseSelect);
        $("<div/>").addClass("actionButtonCardText").html(displayText("fusion_possible_assign_button")).appendTo(d3);
        $("<div/>").addClass("actionButtonCardValue tooltip").attr({
            "data-tooltip": "gold_value",
            "data-tooltip-value": formatWithCommas(FusionManager.getFuseCost(container, 1))
        }).html("".concat(ResourceManager.materialIcon("M001")).concat(formatToUnits(FusionManager.getFuseCost(container, 1), 2))).appendTo(d3)
    })
}
$fuseList.on("click", ".fuseStart", function (e) {
    e.preventDefault();
    destroyTooltip();
    var uniqueid = $(e.currentTarget).attr("uniqueid");
    var fuseid = FusionManager.addFuse(uniqueid);
    if (e.shiftKey) {
        FusionManager.startFuse(fuseid);
        refreshFuseSidebar()
    }
});
$fuseSlots.on("click", ".fuseClose", function (e) {
    e.preventDefault();
    var fuseid = parseInt($(e.currentTarget).attr("fuseid"));
    FusionManager.cancelFuse(fuseid);
    destroyTooltip()
});
$fuseSlots.on("click", ".fuseSlotStart", function (e) {
    e.preventDefault();
    var fuseid = parseInt($(e.currentTarget).attr("fuseid"));
    FusionManager.startFuse(fuseid);
    refreshFuseSidebar()
});
$fuseSlots.on("click", ".fuseSlotCollect", function (e) {
    e.preventDefault();
    var id = parseInt($(e.currentTarget).attr("fuseid"));
    FusionManager.collectFuse(id);
    refreshFuseSidebar()
});
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var $bankInvSlots = $("#bankInvSlots");
var $bankBankSlots = $("#bankBankSlots");
var $bankBuilding = $("#bankBuilding");
var $bankNavigation = $("#bankNavigation");
var BankManager = {
    slots: [],
    lvl: 1,
    tab: "inv",
    createSave: function createSave() {
        var save = {};
        save.slots = [];
        this.slots.forEach(function (slot) {
            save.slots.push(slot.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.slots.forEach(function (item) {
            var container = new itemContainer(item.id, item.rarity);
            container.loadSave(item);
            _this.slots.push(container)
        })
    },
    clearProgress: function clearProgress() {
        this.slots = [];
        this.tab = "inv"
    },
    maxSlots: function maxSlots() {
        return 100
    },
    full: function full() {
        return this.slots.length === this.maxSlots()
    },
    containerToItem: function containerToItem(containerID) {
        return this.slots.find(function (s) {
            return s.containerID === containerID
        })
    },
    addFromInventory: function addFromInventory(containerID) {
        if (this.full()) return;
        var container = Inventory.containerToItem(containerID);
        Inventory.removeContainerFromInventory(containerID);
        this.addContainer(container);
        refreshBankCounts()
    },
    removeContainer: function removeContainer(containerID) {
        this.slots = this.slots.filter(function (c) {
            return c.containerID !== containerID
        });
        refreshBankBank()
    },
    sortBank: function sortBank() {
        this.slots.sort(function (a, b) {
            return inventorySort(a, b)
        });
        refreshBankBank()
    },
    addContainer: function addContainer(container) {
        this.slots.push(container)
    },
    removeFromBank: function removeFromBank(containerID) {
        if (Inventory.full()) return;
        var container = this.containerToItem(containerID);
        this.removeContainer(containerID);
        Inventory.addToInventory(container, false);
        refreshBankCounts()
    },
    addLevel: function addLevel() {
        refreshBankBank();
        refreshBankInventory()
    }
};

function initiateBankBldg() {
    $bankBuilding.show();
    $bankNavigation.empty();
    var invTab = $("<div/>").addClass("bankTabNavigation").attr({
        id: "bankNavInventory"
    }).html(displayText("bank_nav_inventory")).appendTo($bankNavigation);
    var bankTab = $("<div/>").addClass("bankTabNavigation").attr({
        id: "bankNavStorage"
    }).html(displayText("bank_nav_storage")).appendTo($bankNavigation);
    $("<div/>").addClass("bankTabCount").attr({
        id: "bankNavInvCount"
    }).html("(".concat(Inventory.nonblank().length, "/").concat(Inventory.invMax(), ")")).appendTo(invTab);
    $("<div/>").addClass("bankTabCount").attr({
        id: "bankNavStorageCount"
    }).html("(".concat(BankManager.slots.length, "/").concat(BankManager.maxSlots(), ")")).appendTo(bankTab);
    $("#bankNavStorage").removeClass("selected");
    $("#bankNavInventory").addClass("selected");
    BankManager.tab = "inv";
    refreshBankInventory()
}

function refreshBankCounts() {
    $("#bankNavInvCount").html("(".concat(Inventory.nonblank().length, "/").concat(Inventory.invMax(), ")"));
    $("#bankNavStorageCount").html("(".concat(BankManager.slots.length, "/").concat(BankManager.maxSlots(), ")"))
}

function refreshBankInventory() {
    if (BankManager.tab !== "inv") return;
    $bankBankSlots.hide();
    $bankInvSlots.empty().show();
    var bankInventoryHeaderContainer = $("<div/>").addClass("bankInventoryHeaderContainer").appendTo($bankInvSlots);
    var bankInventoryHeader = $("<div/>").addClass("bankInventoryHeader").appendTo(bankInventoryHeaderContainer);
    var bankInventoryHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(bankInventoryHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_bank_inventory_title")).appendTo(bankInventoryHeadingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_bank_inventory_desc")).appendTo(bankInventoryHeadingDetails);
    var sortInventoryBtn = $("<div/>").addClass("actionButtonAnimDisabled actionButton tooltip").attr({
        id: "sortInventoryBank",
        "data-tooltip": "sort_inventory"
    }).html('<i class="fas fa-sort-size-up-alt"></i>').appendTo(bankInventoryHeaderContainer);
    $("<span/>").addClass("actionButtonTextRight").html(displayText("bank_sort_inventory_button")).appendTo(sortInventoryBtn);
    var bankInventoryCardsContainer = $("<div/>").addClass("bankInventoryCardsContainer").attr({
        id: "bankInventoryCardsContainer"
    }).appendTo($bankInvSlots);
    if (Inventory.nonblank().length === 0) $("<div/>").addClass("emptyContentMessage").html(displayText("bank_inventory_empty")).appendTo($bankInvSlots);
    Inventory.nonblank().forEach(function (item) {
        bankInventoryCardsContainer.append(itemCard(item, false))
    });
    refreshBankCounts()
}

function refreshBankBank() {
    if (BankManager.tab !== "bank") return;
    $bankInvSlots.hide();
    $bankBankSlots.empty().show();
    var bankStorageHeaderContainer = $("<div/>").addClass("bankStorageHeaderContainer").appendTo($bankBankSlots);
    var bankStorageHeader = $("<div/>").addClass("bankStorageHeader").appendTo(bankStorageHeaderContainer);
    var bankStorageHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(bankStorageHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_bank_storage_title")).appendTo(bankStorageHeadingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_bank_storage_desc")).appendTo(bankStorageHeadingDetails);
    var sortBankBtn = $("<div/>").addClass("actionButtonAnimDisabled actionButton tooltip").attr({
        id: "sortBank",
        "data-tooltip": "sort_bank"
    }).html('<i class="fas fa-sort-size-up-alt"></i>').appendTo(bankStorageHeaderContainer);
    $("<span/>").addClass("actionButtonTextRight").html(displayText("bank_sort_bank_button")).appendTo(sortBankBtn);
    var bankStorageCardsContainer = $("<div/>").addClass("bankStorageCardsContainer").attr({
        id: "bankStorageCardsContainer"
    }).appendTo($bankBankSlots);
    if (BankManager.slots.length === 0) $("<div/>").addClass("emptyContentMessage").html(displayText("bank_storage_empty")).appendTo($bankBankSlots);
    BankManager.slots.forEach(function (item) {
        bankStorageCardsContainer.append(itemCard(item, true))
    });
    refreshBankCounts()
}

function itemCard(item, inBank) {
    var itemdiv = $("<div/>").addClass("bankItem").addClass("R" + item.rarity).addClass("ctrlClickItem").data("rid", item.id);
    var itemName = $("<div/>").addClass("itemName").html(item.picName());
    var itemLevel = $("<div/>").addClass("itemLevel").html(item.itemLevel());
    var itemRarity = $("<div/>").addClass("itemRarity").addClass("RT".concat(item.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[item.rarity].toLowerCase())
    }).html(miscIcons.rarity);
    if (item.item.recipeType === "building") itemLevel.hide();
    var equipStats = $("<div/>").addClass("equipStats");
    for (var _i = 0, _Object$entries = Object.entries(item.itemStat(false)); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            stat = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
        if (val === 0) continue;
        var ed = $("<div/>").addClass("gearStat tooltip").attr({
            "data-tooltip": stat
        }).appendTo(equipStats);
        $("<div/>").addClass("".concat(stat, "_img")).html(miscIcons[stat]).appendTo(ed);
        $("<div/>").addClass("".concat(stat, "_integer statValue")).html(val).appendTo(ed)
    }
    var bankActionButtons = $("<div/>").addClass("bankActionsButtons");
    var locationButton = $("<div/>").attr("containerID", item.containerID).appendTo(bankActionButtons);
    if (inBank) locationButton.addClass("actionButtonCard bankTake").html(displayText("bank_remove_item_button"));
    else locationButton.addClass("actionButtonCard bankStow").html(displayText("bank_stow_item_button"));
    return itemdiv.append(itemName, itemLevel, itemRarity, equipStats, bankActionButtons)
}

function refreshBankPage() {
    if (BankManager.tab === "inv") refreshBankInventory();
    if (BankManager.tab === "bank") refreshBankBank()
}
$bankBankSlots.on("click", ".bankTake", function (e) {
    e.preventDefault();
    var containerID = parseInt($(e.target).attr("containerID"));
    BankManager.removeFromBank(containerID)
});
$bankInvSlots.on("click", ".bankTake", function (e) {
    e.preventDefault();
    var containerID = parseInt($(e.target).attr("containerID"));
    BankManager.removeFromBank(containerID)
});
$bankBankSlots.on("click", ".bankStow", function (e) {
    e.preventDefault();
    var containerID = parseInt($(e.target).attr("containerID"));
    BankManager.addFromInventory(containerID)
});
$bankInvSlots.on("click", ".bankStow", function (e) {
    e.preventDefault();
    var containerID = parseInt($(e.target).attr("containerID"));
    BankManager.addFromInventory(containerID)
});
$bankBankSlots.on("click", "#sortBank", function (e) {
    e.preventDefault();
    BankManager.sortBank()
});
$bankBankSlots.on("click", "#sortInventoryBank", function (e) {
    e.preventDefault();
    Inventory.sortInventory()
});
$bankNavigation.on("click", "#bankNavInventory", function (e) {
    BankManager.tab = "inv";
    e.preventDefault();
    $("#bankNavStorage").removeClass("selected");
    $("#bankNavInventory").addClass("selected");
    refreshBankInventory()
});
$bankNavigation.on("click", "#bankNavStorage", function (e) {
    e.preventDefault();
    showBankStorage()
});

function showBankStorage() {
    BankManager.tab = "bank";
    $("#bankNavInventory").removeClass("selected");
    $("#bankNavStorage").addClass("selected");
    refreshBankBank()
}
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var $smithBuilding = $("#smithBuilding");
var $smithInvSlots = $("#smithInvSlots");
var $smithOriginal = $("#smithOriginal");
var $smithImproved = $("#smithImproved");
var $smithMax = $("#smithMax");
var $smithConfirm = $("#smithConfirm");
var $smithCanImproveDiv = $("#smithCanImproveDiv");
var $smithCantImproveDiv = $("#smithCantImproveDiv");
var $smithNoSelectionDiv = $("#smithNoSelectionDiv");
var $smithHeroSlots = $("#smithHeroSlots");
var $smithSlots = $(".smithSlots");
var $smithAssign = $(".smithAssign");
var $smithActions = $("#smithActions");
var SmithType = Object.freeze({
    ENHANCE: 0,
    FIRE: 1,
    WATER: 2,
    THUNDER: 3
});
var bloopSmith = {
    smithStage: null,
    smithLocation: null,
    smithType: SmithType.ENHANCE,
    lvl: 1,
    heroView: null,
    runeUnlock: false,
    createSave: function createSave() {
        var save = {};
        save.runeUnlock = this.runeUnlock;
        return save
    },
    loadSave: function loadSave(save) {
        if (save.runeUnlock !== undefined) this.runeUnlock = save.runeUnlock
    },
    clearProgress: function clearProgress() {
        this.smithStage = null;
        this.heroView = null;
        this.runeUnlock = false
    },
    canRune: function canRune() {
        return this.runeUnlock
    },
    addSmith: function addSmith(uniqueid, location) {
        var item = location === "inventory" ? Inventory.findContainer(uniqueid) : HeroManager.findContainer(uniqueid, location);
        this.smithStage = item;
        this.smithLocation = location;
        refreshSmithStage()
    },
    getSmithCost: function getSmithCost() {
        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bloopSmith.smithStage;
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bloopSmith.smithType;
        var amt = [25, 50, 75, 100, 150, 200, 250, 300, 400, 500];
        if (type === SmithType.ENHANCE) return {
            gold: Math.floor(item.goldValue() * miscLoadedValues.smithChance[item.sharp]),
            resType: item.smithCost,
            resAmt: amt[item.sharp]
        };
        if (type === SmithType.FIRE) return {
            gold: Math.floor(item.goldValue() * miscLoadedValues.smithChance[item.sharp]),
            resType: "M901",
            resAmt: item.lvl
        };
        if (type === SmithType.WATER) return {
            gold: Math.floor(item.goldValue() * miscLoadedValues.smithChance[item.sharp]),
            resType: "M902",
            resAmt: item.lvl
        };
        if (type === SmithType.THUNDER) return {
            gold: Math.floor(item.goldValue() * miscLoadedValues.smithChance[item.sharp]),
            resType: "M903",
            resAmt: item.lvl
        }
    },
    getSmithCostMulti: function getSmithCostMulti(item, finalSharp) {
        var amt = [25, 50, 75, 100, 150, 200, 250, 300, 400, 500];
        var result = {
            gold: 0,
            resType: item.smithCost,
            resAmt: 0
        };
        var currentSharp = item.sharp;
        while (currentSharp < finalSharp) {
            result["gold"] += Math.floor(item.goldValue() * miscLoadedValues.smithChance[currentSharp]);
            result["resAmt"] += amt[currentSharp];
            currentSharp += 1
        }
        return result
    },
    smith: function smith() {
        if (!this.canSmith()) return;
        if (this.smithStage === null) return;
        var params = this.getSmithCost();
        if (ResourceManager.materialAvailable("M001") < params.gold) {
            ToastManager.renderToast("cant_afford_smith_gold");
            return
        }
        if (ResourceManager.materialAvailable(params.resType) < params.resAmt) {
            ToastManager.renderToast("cant_afford_smith_material", ResourceManager.idToMaterial(params.resType).name, params.resAmt - ResourceManager.materialAvailable(params.resType));
            return
        }
        if (this.smithType === SmithType.ENHANCE && this.smithStage.sharp >= bloopSmith.maxSharp()) {
            return ToastManager.renderToast("cant_smith_max")
        }
        ResourceManager.deductMoney(params.gold);
        ResourceManager.addMaterial(params.resType, -params.resAmt);
        var name = this.smithStage.name;
        this.smithStage = this.enhanceSmith();
        if (this.smithStage !== null) ToastManager.renderToast("smith_success", this.smithStage.name);
        else ToastManager.renderToast("forge_autocontribute", name);
        refreshSmithInventory();
        refreshSmithStage()
    },
    enhanceSmith: function enhanceSmith() {
        if (!this.canSmith()) return;
        if (this.smithLocation === "inventory") {
            var container = Inventory.grabFromInventory(this.smithStage.uniqueID(), 1, true);
            if (bloopSmith.smithType === SmithType.ENHANCE) {
                if (container.sharp >= bloopSmith.maxSharp()) return ToastManager.renderToast("cant_smith_max");
                container.sharp += 1
            } else if (bloopSmith.smithType === SmithType.FIRE) container.rune = RuneType.FIRE;
            else if (bloopSmith.smithType === SmithType.WATER) container.rune = RuneType.WATER;
            else if (bloopSmith.smithType === SmithType.THUNDER) container.rune = RuneType.THUNDER;
            this.smithStage = Inventory.addToInventory(container.uniqueID(), 1, false)
        } else {
            if (bloopSmith.smithType === SmithType.ENHANCE) this.smithStage.sharp += 1;
            else if (bloopSmith.smithType === SmithType.FIRE) this.smithStage.rune = RuneType.FIRE;
            else if (bloopSmith.smithType === SmithType.WATER) this.smithStage.rune = RuneType.WATER;
            else if (bloopSmith.smithType === SmithType.THUNDER) this.smithStage.rune = RuneType.THUNDER
        }
        achievementStats.forgePerformed();
        return this.smithStage
    },
    forgeItem: function forgeItem(container, type) {
        var inPlace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (!this.canSmith()) return;
        if (container.sharp >= this.maxSharp()) {
            ToastManager.renderToast("cant_smith_max");
            return
        }
        var params = this.getSmithCost(container, type);
        if (ResourceManager.materialAvailable("M001") < params.gold) {
            ToastManager.renderToast("cant_afford_smith_gold");
            return
        }
        if (ResourceManager.materialAvailable(params.resType) < params.resAmt) {
            ToastManager.renderToast("cant_afford_smith_material", ResourceManager.idToMaterial(params.resType).name, params.resAmt - ResourceManager.materialAvailable(params.resType));
            return
        }
        ResourceManager.deductMoney(params.gold);
        ResourceManager.addMaterial(params.resType, -params.resAmt);
        var newContainer = inPlace ? container : Inventory.grabFromInventory(container.uniqueID(), 1, false);
        if (type === SmithType.ENHANCE) newContainer.sharp += 1;
        else if (type === SmithType.FIRE) newContainer.rune = RuneType.FIRE;
        else if (type === SmithType.WATER) newContainer.rune = RuneType.WATER;
        else if (type === SmithType.THUNDER) newContainer.rune = RuneType.THUNDER;
        if (!inPlace) Inventory.addToInventory(newContainer.uniqueID());
        achievementStats.forgePerformed();
        return newContainer.uniqueID()
    },
    maxSharp: function maxSharp() {
        if (!Shop.alreadyPurchased("AL3010")) return 3;
        if (!Shop.alreadyPurchased("AL3016")) return 6;
        return 10
    },
    canImprove: function canImprove() {
        if (this.smithType === SmithType.ENHANCE) return this.smithStage.sharp < this.maxSharp();
        if (this.smithType === SmithType.FIRE) return this.smithStage.rune !== RuneType.FIRE;
        if (this.smithType === SmithType.WATER) return this.smithStage.rune !== RuneType.WATER;
        if (this.smithType === SmithType.THUNDER) return this.smithStage.rune !== RuneType.THUNDER
    },
    hasRunecrafting: function hasRunecrafting() {
        return false
    },
    canUpgradeTooltip: function canUpgradeTooltip(container) {
        if (container.sharp === this.maxSharp()) return false;
        var params = this.getSmithCost(container);
        if (ResourceManager.materialAvailable("M001") < params.gold) return false;
        if (ResourceManager.materialAvailable(params.resType) < params.resAmt) return false;
        return true
    },
    canSmith: function canSmith() {
        return TownManager.idToBuilding("TB004").status >= 2
    }
};

function initiateForgeBldg() {
    $smithBuilding.show();
    bloopSmith.smithStage = null;
    bloopSmith.heroView = null;
    refreshSmithActions();
    refreshSmithInventory();
    refreshSmithStage()
}

function refreshSmithActions() {
    $smithActions.empty();
    if (!bloopSmith.hasRunecrafting()) return;
    $("<div/>").addClass("contentHeader").html(displayText("smith_actions_heading")).appendTo($smithActions);
    var a = $("<div/>").addClass("smithActionsContainer").appendTo($smithActions);
    var a0 = $("<div/>").addClass("smithAction").data("smithType", 0).html("".concat(miscIcons.enhancement, " Enhance")).appendTo(a);
    var a1 = $("<div/>").addClass("smithAction").data("smithType", 1).html("".concat(miscIcons.fireRune, " Etch Fire")).appendTo(a);
    var a2 = $("<div/>").addClass("smithAction").data("smithType", 2).html("".concat(miscIcons.waterRune, " Etch Water")).appendTo(a);
    var a3 = $("<div/>").addClass("smithAction").data("smithType", 3).html("".concat(miscIcons.thunderRune, " Etch Thunder")).appendTo(a);
    if (bloopSmith.smithType === SmithType.ENHANCE) a0.addClass("smithActionActive");
    if (bloopSmith.smithType === SmithType.FIRE) a1.addClass("smithActionActive");
    if (bloopSmith.smithType === SmithType.WATER) a2.addClass("smithActionActive");
    if (bloopSmith.smithType === SmithType.THUNDER) a3.addClass("smithActionActive")
}

function refreshSmithInventory() {
    $smithInvSlots.empty();
    var invItems = Inventory.inv.filter(function (i) {
        return i.sharp < bloopSmith.maxSharp() && i.item.canForge
    });
    var forgeInvHeader = $("<div/>").addClass("contentHeader").appendTo($smithInvSlots);
    var forgeInvHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(forgeInvHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("header_forge_inventory_title")).appendTo(forgeInvHeadingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_blacksmith").html(miscIcons.keyboard).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("header_forge_inventory_desc")).appendTo(forgeInvHeadingDetails);
    var sortInventoryBtn = $("<div/>").addClass("actionButtonAnimDisabled actionButton tooltip").attr({
        id: "sortSmithInventory",
        "data-tooltip": "sort_inventory"
    }).html('<i class="fas fa-sort-size-up-alt"></i>').appendTo(forgeInvHeader);
    $("<span/>").addClass("actionButtonTextRight").html(displayText("bank_sort_inventory_button")).appendTo(sortInventoryBtn);
    if (invItems.length === 0) {
        $("<div/>").addClass("emptyContentMessage").html(displayText("forge_inventory_empty")).appendTo($smithInvSlots)
    } else {
        var smithCardsContainer = $("<div/>").addClass("smithCardsContainer").appendTo($smithInvSlots);
        invItems.forEach(function (item) {
            inventoryItemCard(item, false, true).data("location", "inventory").appendTo(smithCardsContainer)
        })
    }
    smithHeroesInventory()
}

function smithHeroesInventory(skipAnimation) {
    $smithHeroSlots.empty();
    var forgeHeroesHeader = $("<div/>").addClass("contentHeader").appendTo($smithHeroSlots);
    if (skipAnimation) forgeHeroesHeader.css({
        animation: "none"
    });
    var forgeHeroesHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(forgeHeroesHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_forge_heroes_title")).appendTo(forgeHeroesHeadingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_forge_heroes_desc")).appendTo(forgeHeroesHeadingDetails);
    var forgeHeroActions = $("<div/>").addClass("forgeHeroActions").appendTo($smithHeroSlots);
    var smithHeroesContainer = $("<div/>").addClass("smithHeroesContainer").appendTo($smithHeroSlots);
    if (bloopSmith.heroView === null) {
        HeroManager.heroes.filter(function (hero) {
            return hero.owned
        }).forEach(function (hero) {
            var heroButton = $("<div/>").addClass("smithHeroButton").data("heroID", hero.id).appendTo(smithHeroesContainer);
            $("<div/>").addClass("smithHeroButtonImage").html("".concat(hero.portrait)).appendTo(heroButton);
            $("<div/>").addClass("smithHeroButtonName").html("".concat(hero.name)).appendTo(heroButton)
        })
    } else {
        var hero = HeroManager.idToHero(bloopSmith.heroView);
        forgeHeroActions.addClass("forgeActionsVisible");
        var smithBackButton = $("<div/>").addClass("actionButton smithHeroBackButton").html('<i class="fas fa-arrow-left">').appendTo(forgeHeroActions);
        $("<div/>").addClass("actionButtonTextRight").html(displayText("forge_heroes_back_button")).appendTo(smithBackButton);
        var smithHeroBrowsing = $("<div/>").addClass("smithHeroBrowsing").appendTo(forgeHeroActions);
        $("<div/>").addClass("smithHeroCycle smithHeroCycleLeft").html('<i class="fas fa-arrow-left"></i>').appendTo(smithHeroBrowsing);
        var heroBrowseCard = $("<div/>").addClass("heroBrowseCard").appendTo(smithHeroBrowsing);
        $("<div/>").addClass("heroBrowseImage").html(hero.portrait).appendTo(heroBrowseCard);
        $("<div/>").addClass("heroBrowseName").html(hero.name).appendTo(heroBrowseCard);
        $("<div/>").addClass("smithHeroCycle smithHeroCycleRight").html('<i class="fas fa-arrow-right"></i>').appendTo(smithHeroBrowsing);
        if (skipAnimation) {
            smithBackButton.css({
                animation: "none"
            });
            smithHeroBrowsing.css({
                animation: "none"
            })
        }
        if (hero.getEquipSlots(true).length === 0) {
            $("<div/>").addClass("emptyContentMessage").html(displayText("forge_heroes_empty")).appendTo($smithHeroSlots)
        }
        hero.getEquipSlots(true).forEach(function (gear) {
            if (!gear.item.canForge) return;
            inventoryItemCard(gear, false, true).data("location", hero.id).appendTo(smithHeroesContainer)
        })
    }
}

function heroCycleLeft(currentID) {
    var heroes = HeroManager.heroes.filter(function (hero) {
        return hero.owned
    });
    var currentHero = heroes.findIndex(function (hero) {
        return hero.id === currentID
    });
    var newHero = 0;
    if (currentHero > 0) newHero = currentHero - 1;
    else newHero = heroes.length - 1;
    return heroes[newHero].id
}

function heroCycleRight(currentID) {
    var heroes = HeroManager.heroes.filter(function (hero) {
        return hero.owned
    });
    var currentHero = heroes.findIndex(function (hero) {
        return hero.id === currentID
    });
    var newHero = 0;
    if (currentHero < heroes.length - 1) newHero = currentHero + 1;
    return heroes[newHero].id
}
$smithHeroSlots.on("click", ".smithHeroCycleLeft", function (e) {
    bloopSmith.heroView = heroCycleLeft(bloopSmith.heroView);
    smithHeroesInventory(true)
});
$smithHeroSlots.on("click", ".smithHeroCycleRight", function (e) {
    bloopSmith.heroView = heroCycleRight(bloopSmith.heroView);
    smithHeroesInventory(true)
});

function refreshSmithStage() {
    if (bloopSmith.smithStage === null) {
        $smithNoSelectionDiv.empty();
        var d = $("<div/>").addClass("smithSeparatorEmpty").html('<i class="fas fa-arrow-right"></i>');
        var d1 = $("<div/>").addClass("smithConfirmEmpty").appendTo(d);
        $("<div/>").addClass("actionButtonCardText").appendTo(d1);
        $("<div/>").addClass("actionButtonCardValue").appendTo(d1);
        $("<div/>").addClass("actionButtonCardValue").appendTo(d1);
        $smithNoSelectionDiv.append(blanckSmithCard(), d, blanckSmithCard()).show();
        $smithCanImproveDiv.hide();
        $smithCantImproveDiv.hide();
        return
    }
    if (!bloopSmith.canImprove()) {
        $smithCanImproveDiv.hide();
        $smithCantImproveDiv.show();
        $smithNoSelectionDiv.hide();
        $smithMax.html(itemStageCardSmith(bloopSmith.smithStage, false));
        return
    }
    $smithCanImproveDiv.show();
    $smithCantImproveDiv.hide();
    $smithNoSelectionDiv.hide();
    $smithOriginal.html(itemStageCardSmith(bloopSmith.smithStage, false));
    $smithImproved.html(itemStageCardSmith(bloopSmith.smithStage, true));
    var params = bloopSmith.getSmithCost();
    var improveText = $("<div/>").addClass("actionButtonCardText").html(displayText("forge_smith_confirm_button"));
    var improveCost = $("<div/>").addClass("improveCostContainer");
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": params.gold
    }).html("".concat(miscIcons.gold, " ").concat(formatToUnits(params.gold, 2))).appendTo(improveCost);
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        "data-tooltip": "material_desc",
        "data-tooltip-value": params.resType
    }).html("".concat(ResourceManager.idToMaterial(params.resType).img, " ").concat(params.resAmt)).appendTo(improveCost);
    $smithConfirm.empty().append(improveText, improveCost)
}

function blanckSmithCard() {
    var itemdiv = $("<div/>").addClass("smithItem emptySmithItem");
    var d = $("<div/>").addClass("emptySmithItem itemName").appendTo(itemdiv);
    $("<div/>").addClass("emptySmithItemIcon").html(miscIcons.emptySlot).appendTo(d);
    $("<div/>").addClass("emptySmithItemTitle").html(displayText("forge_smith_slot_empty")).appendTo(d);
    $("<div/>").addClass("itemLevel").appendTo(itemdiv);
    $("<div/>").addClass("itemRarity").appendTo(itemdiv);
    $("<div/>").addClass("gearStat").html("<span/>").appendTo(itemdiv);
    return itemdiv
}

function itemStageCardSmith(slot, upgrade) {
    if (slot === null) return;
    var itemdiv = $("<div/>").addClass("smithItem").addClass("R" + slot.rarity).addClass("ctrlClickItem").data("rid", slot.id);
    var itemName = $("<div/>").addClass("itemName");
    if (upgrade) itemName.html(slot.picNamePlus());
    else itemName.html(slot.picName());
    var itemLevel = $("<div/>").addClass("itemLevel").html(slot.itemLevel());
    var itemRarity = $("<div/>").addClass("itemRarity RT".concat(slot.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[slot.rarity].toLowerCase())
    }).html(miscIcons.rarity);
    var itemMaterial = $("<div/>").addClass("smithItemMaterial tooltip").attr({
        "data-tooltip": "material_desc",
        "data-tooltip-value": slot.smithCost
    }).html(ResourceManager.materialIcon(slot.smithCost));
    var smithClose = $("<div/>").addClass("smithClose tooltip").attr({
        "data-tooltip": "forge_remove"
    }).html('<i class="fas fa-times"></i>');
    if (upgrade) smithClose.hide();
    var equipStats = $("<div/>").addClass("equipStats");
    for (var _i = 0, _Object$entries = Object.entries(slot.itemStat(upgrade)); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            stat = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
        if (val === 0) continue;
        var ed = $("<div/>").addClass("gearStat tooltip").attr({
            "data-tooltip": stat
        }).appendTo(equipStats);
        $("<div/>").addClass("".concat(stat, "_img")).html(miscIcons[stat]).appendTo(ed);
        $("<div/>").addClass("".concat(stat, "_integer statValue")).html(val).appendTo(ed)
    }
    return itemdiv.append(itemName, itemLevel, itemRarity, itemMaterial, smithClose, equipStats)
}
$smithAssign.on("click", ".inventoryItem", function (e) {
    e.preventDefault();
    var uniqueid = $(e.currentTarget).attr("data-id");
    var location = $(e.currentTarget).data("location");
    bloopSmith.addSmith(uniqueid, location);
    if (e.shiftKey) {
        bloopSmith.smith();
        bloopSmith.removeSmith();
        refreshSmithInventory()
    }
    refreshSmithStage()
});
$smithConfirm.on("click", function (e) {
    e.preventDefault();
    destroyTooltip();
    bloopSmith.smith()
});
$smithHeroSlots.on("click", ".smithHeroButton", function (e) {
    var heroID = $(e.currentTarget).data("heroID");
    bloopSmith.heroView = heroID;
    refreshSmithInventory()
});
$smithHeroSlots.on("click", ".smithHeroBackButton", function () {
    bloopSmith.heroView = null;
    refreshSmithInventory()
});
$smithSlots.on("click", ".smithClose", function (e) {
    e.preventDefault();
    bloopSmith.smithStage = null;
    bloopSmith.smithLocation = null;
    refreshSmithStage();
    destroyTooltip()
});
$smithInvSlots.on("click", "#sortSmithInventory", function (e) {
    e.preventDefault();
    Inventory.sortInventory()
});
$smithActions.on("click", ".smithAction", function (e) {
    e.preventDefault();
    var type = $(e.currentTarget).data("smithType");
    bloopSmith.smithType = type;
    refreshSmithActions();
    refreshSmithStage()
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var $fortuneBuilding = $("#fortuneBuilding");
var fortuneSlotid = 0;
var fortuneSlot = function () {
    function fortuneSlot(container) {
        _classCallCheck(this, fortuneSlot);
        this.id = container.item.id;
        this.item = recipeList.idToItem(this.id);
        this.name = this.item.name;
        this.type = this.item.type;
        this.rarity = container.rarity + 1;
        this.lvl = this.item.lvl;
        this.slotid = fortuneSlotid;
        fortuneSlotid += 1
    }
    _createClass(fortuneSlot, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.rarity = this.rarity;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.rarity = save.rarity
        }
    }, {
        key: "picName",
        value: function picName() {
            return "<img src='assets/images/recipes/" + this.type + "/" + this.id + ".png'>" + "<div class='item-name'>" + this.name + "</div>"
        }
    }, {
        key: "material",
        value: function material() {
            return this.item.smithCost
        }
    }, {
        key: "itemLevel",
        value: function itemLevel() {
            return this.item.itemLevel()
        }
    }]);
    return fortuneSlot
}();
var FortuneManager = {
    slots: [],
    lvl: 1,
    stage: null,
    createSave: function createSave() {
        var save = {};
        save.slots = [];
        this.slots.forEach(function (slot) {
            var saveSlot = slot.createSave();
            save.slots.push(saveSlot)
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.slots.forEach(function (slot) {
            var container = new itemContainer(slot.id, slot.rarity);
            var saveSlot = new fortuneSlot(container);
            saveSlot.loadSave(slot);
            _this.slots.push(saveSlot)
        })
    },
    clearProgress: function clearProgress() {
        this.slots = [];
        this.stage = null
    },
    stageItem: function stageItem(uniqueID, checkMaterial) {
        if (this.slots.length >= this.maxSlot()) {
            ToastManager.renderToast("fortune_no_slot");
            return
        }
        var container = createContainerFromUniqueID(uniqueID);
        if (container.rarity > 2) return ToastManager.renderToast("cant_fortune_rarity");
        var cost = FortuneManager.getMaterialCost(container);
        if (checkMaterial && !ResourceManager.available(cost.id, cost.amt)) return ToastManager.renderToast("cant_fortune_material");
        if (this.hasFortune(container.id, container.rarity)) return ToastManager.renderToast("cant_fortune_unique");
        this.stage = uniqueID;
        refreshFortuneSlots()
    },
    fortuneByID: function fortuneByID(fortuneID) {
        return this.slots.find(function (f) {
            return f.slotid == fortuneID
        })
    },
    removeFortune: function removeFortune() {
        FortuneManager.stage = null;
        refreshFortuneGear();
        refreshFortuneSlots()
    },
    removeLockedFortune: function removeLockedFortune(fortuneID) {
        this.slots = this.slots.filter(function (f) {
            return f.slotid !== fortuneID
        });
        refreshFortuneGear();
        refreshFortuneSlots()
    },
    lockFortune: function lockFortune() {
        if (this.stage === null) return;
        var container = Inventory.findContainer(this.stage);
        var cost = FortuneManager.getMaterialCost(container);
        if (!ResourceManager.available(cost.id, cost.amt)) return ToastManager.renderToast("fortune_cant_afford");
        ResourceManager.addMaterial(cost.id, -cost.amt);
        var grabContainer = Inventory.grabFromInventory(this.stage, 1, true);
        var newfortuneSlot = new fortuneSlot(grabContainer);
        this.slots.push(newfortuneSlot);
        this.stage = null;
        refreshFortuneGear();
        refreshFortuneSlots()
    },
    emptySlotCount: function emptySlotCount() {
        if (this.stage === null) return this.maxSlot() - this.slots.length;
        return this.maxSlot() - this.slots.length - 1
    },
    getMaterialCost: function getMaterialCost(container) {
        if (container === null) return null;
        return {
            id: container.fortuneMaterial(),
            amt: 20
        }
    },
    getProcModifier: function getProcModifier(line, tier) {
        var modifier = [1, 1, 1];
        var mods = this.slots.filter(function (s) {
            return s.type === line && s.lvl === tier
        });
        mods.forEach(function (s) {
            modifier[s.rarity - 1] = 2
        });
        refreshFortuneSlots();
        return modifier
    },
    maxSlot: function maxSlot() {
        if (!Shop.alreadyPurchased("AL3014")) return 1;
        if (!Shop.alreadyPurchased("AL3019")) return 2;
        return 3
    },
    purgeDone: function purgeDone(id, rarity, skipAnimation) {
        if (this.slots.some(function (f) {
                return f.id === id && f.rarity === rarity
            })) achievementStats.fortunePerformed();
        if (!skipAnimation && this.slots.some(function (f) {
                return f.id === id && f.rarity === rarity
            })) ToastManager.renderToast("fortune_expired", rarities[rarity].toLowerCase(), recipeList.idToItem(id).name);
        this.slots = this.slots.filter(function (f) {
            return f.id !== id || f.rarity !== rarity
        });
        if (!skipAnimation) {
            refreshFortuneSlots();
            refreshFortuneGear()
        }
    },
    hasFortune: function hasFortune(id, rarity) {
        var result = false;
        this.slots.forEach(function (slot) {
            if (slot.id === id && slot.rarity === rarity + 1) {
                result = true
            }
        });
        return result
    },
    canFortuneTooltip: function canFortuneTooltip(container) {
        if (container.rarity > 2) return false;
        if (this.emptySlotCount() === 0) return false;
        if (this.hasFortune(container.id, container.rarity)) return false;
        var cost = FortuneManager.getMaterialCost(container);
        if (!ResourceManager.available(cost.id, cost.amt)) return false;
        return true
    }
};
var $fortuneStage = $("#fortuneStage");
var $fortuneGear = $("#fortuneGear");
var $fortuneHeading = $("#fortuneHeading");

function initiateFortuneBldg() {
    FortuneManager.stage = null;
    $fortuneBuilding.show();
    refreshFortuneSlots();
    generateFortuneHeader();
    refreshFortuneGear()
}

function generateFortuneHeader() {
    $fortuneHeading.empty();
    var fortuneOfferingsHeader = $("<div/>").addClass("contentHeader").appendTo($fortuneHeading);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(fortuneOfferingsHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("header_fortune_possible_title")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr({
        "data-tooltip": "more_info_fortune"
    }).html(miscIcons.question).appendTo(headingTitle);
    $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_fortune").html(miscIcons.keyboard).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("header_fortune_possible_desc")).appendTo(headingDetails)
}

function refreshFortuneSlots() {
    if (!openedTabEquals("town_fortune")) return;
    var $fortuneCount = $("#fortuneBldg .buildingNameIndicator");
    $fortuneCount.html(FortuneManager.emptySlotCount());
    if (FortuneManager.emptySlotCount() > 0) $fortuneCount.addClass("available");
    else $fortuneCount.removeClass("available");
    if (!openedTabEquals("town_fortune")) return;
    $fortuneStage.empty();
    FortuneManager.slots.forEach(function (slot) {
        $fortuneStage.append(createFortuneCardLocked(slot))
    });
    if (FortuneManager.stage !== null) $fortuneStage.append(createFortuneCard(FortuneManager.stage));
    for (var i = 0; i < FortuneManager.emptySlotCount(); i++) {
        $fortuneStage.append(createFortuneBlank())
    }
    refreshFortuneSidebar()
}

function refreshFortuneGear() {
    if (!openedTabEquals("town_fortune")) return;
    $fortuneGear.empty();
    var fortuneInv = Inventory.fortuneTargets();
    if (fortuneInv.length === 0) {
        $("<div/>").addClass("emptyContentMessage").html(displayText("fortune_possible_empty")).appendTo($fortuneGear);
        return
    }
    var fortuneCardsContainer = $("<div/>").addClass("fortuneCardsContainer").appendTo($fortuneGear);
    fortuneInv.forEach(function (container) {
        if (FortuneManager.hasFortune(container.id, container.rarity)) return;
        fortuneCardsContainer.append(inventoryItemCard(container))
    })
}

function createFortuneCard(uniqueid) {
    var container = Inventory.findContainer(uniqueid);
    var rarity = ["Common", "Good", "Great", "Epic"];
    var itemdiv = $("<div/>").addClass("fortuneSlot").addClass("R" + (container.rarity + 1)).addClass("ctrlClickItem").data("rid", container.id);
    var name = "<img src='assets/images/recipes/" + container.type + "/" + container.id + ".png'>" + "<div class='item-name'>" + container.name + "</div>";
    $("<div/>").addClass("itemName").html(name).appendTo(itemdiv);
    $("<div/>").addClass("itemLevel").html(container.itemLevel()).appendTo(itemdiv);
    $("<div/>").addClass("itemRarity RT".concat(container.rarity + 1, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[container.rarity + 1].toLowerCase())
    }).html(miscIcons.rarity).appendTo(itemdiv);
    var rarityBonus = displayText("fortune_slot_rarity_chance").replace("{0}", "100%").replace("{1}", rarity[container.rarity + 1]);
    $("<div/>").addClass("fortuneItemDesc").html(rarityBonus).appendTo(itemdiv);
    var cost = FortuneManager.getMaterialCost(container);
    var sacContainer = $("<div/>").addClass("actionButtonCardCost fortuneItemSac").data("fortuneID", uniqueid).appendTo(itemdiv);
    $("<div/>").addClass("actionButtonCardText").html(displayText("fortune_slot_confirm_button")).appendTo(sacContainer);
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        "data-tooltip": "material_desc",
        "data-tooltip-value": cost.id
    }).html("".concat(ResourceManager.idToMaterial(cost.id).img, " ").concat(cost.amt)).appendTo(sacContainer);
    $("<div/>").addClass("fortuneItemClose tooltip").attr({
        "data-tooltip": "offering_remove"
    }).html('<i class="fas fa-times"></i>').appendTo(itemdiv);
    return itemdiv
}

function createFortuneCardLocked(slot) {
    var rarity = ["Common", "Good", "Great", "Epic"];
    var itemdiv = $("<div/>").addClass("fortuneSlot").addClass("R" + slot.rarity).addClass("ctrlClickItem").data("rid", slot.id);
    $("<div/>").addClass("itemName").html(slot.picName()).appendTo(itemdiv);
    $("<div/>").addClass("itemLevel").html(slot.itemLevel()).appendTo(itemdiv);
    $("<div/>").addClass("itemRarity RT".concat(slot.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[slot.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(itemdiv);
    var rarityBonus = displayText("fortune_slot_rarity_chance").replace("{0}", "100%").replace("{1}", rarity[slot.rarity]);
    $("<div/>").addClass("fortuneItemDesc").html(rarityBonus).appendTo(itemdiv);
    $("<div/>").addClass("fortuneItemAmt").html(displayText("fortune_slot_fortune_remaining").replace("{0}", rarity[slot.rarity]).replace("{1}", slot.name)).appendTo(itemdiv);
    $("<div/>").addClass("fortuneItemSetClose tooltip").attr({
        "data-tooltip": "fortune_remove"
    }).data("fortuneID", slot.slotid).html('<i class="fas fa-times"></i>').appendTo(itemdiv);
    return itemdiv
}

function createFortuneBlank() {
    var itemdiv = $("<div/>").addClass("fortuneSlot fortuneSlotEmpty");
    var itemName = $("<div/>").addClass("itemName").appendTo(itemdiv);
    $("<div/>").addClass("fortuneSlotNameIcon").html(miscIcons.emptySlot).appendTo(itemName);
    $("<div/>").addClass("fortuneSlotNameTitle").html(displayText("fortune_slot_empty")).appendTo(itemName);
    $("<div/>").addClass("itemLevel").appendTo(itemdiv);
    $("<div/>").addClass("itemRarity").appendTo(itemdiv);
    var actionButton = $("<div/>").addClass("actionButtonCardCost").appendTo(itemdiv);
    $("<div/>").addClass("actionButtonCardText").appendTo(actionButton);
    $("<div/>").addClass("actionButtonCardValue").appendTo(actionButton);
    return itemdiv
}
$fortuneGear.on("click", ".inventoryItem", function (e) {
    e.preventDefault();
    var uniqueid = $(e.currentTarget).attr("data-id");
    FortuneManager.stageItem(uniqueid);
    if (e.shiftKey) FortuneManager.lockFortune();
    refreshFortuneSlots()
});
$fortuneStage.on("click", ".fortuneItemSac", function (e) {
    e.preventDefault();
    destroyTooltip();
    FortuneManager.lockFortune();
    refreshFortuneSlots()
});
$fortuneStage.on("click", ".fortuneItemClose", function (e) {
    e.preventDefault();
    FortuneManager.removeFortune();
    refreshFortuneSlots();
    destroyTooltip()
});
$fortuneStage.on("click", ".fortuneItemSetClose", function (e) {
    e.preventDefault();
    var fortuneID = parseInt($(e.currentTarget).data("fortuneID"));
    FortuneManager.removeLockedFortune(fortuneID);
    refreshFortuneSlots();
    destroyTooltip()
});
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var synthToggle = Object.freeze({
    DESYNTH: 0,
    RESYNTH: 1
});
var $synthSide = $("#synthSide");
var SynthManager = {
    slot: null,
    setting: synthToggle.DESYNTH,
    lvl: 1,
    boostEnable: false,
    fuel: 0,
    fuelTime: 0,
    createSave: function createSave() {
        var save = {};
        save.fuel = this.fuel;
        return save
    },
    loadSave: function loadSave(save) {
        if (save.fuel !== undefined) this.fuel = save.fuel
    },
    clearProgress: function clearProgress() {
        this.fuel = 0;
        this.slot = null;
        this.setting = synthToggle.DESYNTH;
        this.boostEnable = false;
        this.fuelTime = 0
    },
    addTime: function addTime(ms) {
        if (!this.boostEnable) {
            this.fuelTime = 0;
            return
        }
        this.fuelTime += ms;
        var needRefresh = this.fuelTime >= 1e3;
        while (this.fuelTime > 1e3) {
            this.fuelTime -= 1e3;
            this.fuel -= 1
        }
        if (this.fuel <= 0) {
            this.fuel = 0;
            synthSidebarRefresh();
            this.boostEnable = false;
            toggleSynthBoost()
        }
        if (needRefresh) {
            synthSidebarRefresh();
            refreshSynthBoost()
        }
    },
    canSynth: function canSynth() {
        return Shop.alreadyPurchased("AL3009")
    },
    canDesynth: function canDesynth() {
        return TownManager.status("synth") === BuildingState.built
    },
    toggleStatus: function toggleStatus(status) {
        if (status === synthToggle.DESYNTH && this.setting !== synthToggle.DESYNTH) {
            this.setting = synthToggle.DESYNTH;
            refreshDesynth()
        }
        if (status === synthToggle.RESYNTH && this.setting !== synthToggle.RESYNTH && this.canSynth()) {
            this.setting = synthToggle.RESYNTH;
            refreshResynth()
        }
        refreshSynthStage()
    },
    toggleBoost: function toggleBoost() {
        if (!this.boostEnable && this.fuel === 0) return;
        this.boostEnable = !this.boostEnable;
        toggleSynthBoost()
    },
    addSynth: function addSynth(uniqueID) {
        this.slot = Inventory.findContainer(uniqueID);
        refreshSynthStage()
    },
    removeSynth: function removeSynth() {
        this.slot = null;
        initiateSynthBldg()
    },
    stageButton: function stageButton() {
        if (this.slot !== null && this.setting === synthToggle.DESYNTH) this.desynth();
        if (this.slot !== null && this.setting === synthToggle.RESYNTH) this.resynth()
    },
    desynth: function desynth() {
        if (this.slot === null) return;
        this.fuel += this.amt();
        achievementStats.desynthPerformed();
        ToastManager.renderToast("synth_collect", this.amt());
        var container = Inventory.grabFromInventory(this.slot.uniqueID(), 1, false);
        container.rarity -= 1;
        Inventory.addToInventory(container.uniqueID(), 1);
        if (container.rarity === 0) this.slot = null;
        else this.slot = Inventory.findContainer(container.uniqueID());
        refreshSynthBoost(true);
        synthSidebarRefresh();
        refreshSynthStage();
        refreshSynthInventory()
    },
    desynthItem: function desynthItem(container, all) {
        if (container.rarity === 0) {
            ToastManager.renderToast("desynth_common");
            return
        }
        var qty = all ? container.qty : 1;
        this.fuel += this.amt(container, synthToggle.DESYNTH) * qty;
        ToastManager.renderToast("synth_collect", this.amt(container) * qty);
        var newcontainer = Inventory.grabFromInventory(container.uniqueID(), qty, false);
        newcontainer.rarity -= 1;
        Inventory.addToInventory(newcontainer.uniqueID(), qty);
        generateSynthBoost();
        synthSidebarRefresh();
        return Inventory.findContainer(newcontainer.uniqueID())
    },
    resynth: function resynth() {
        if (this.slot === null) return;
        if (this.fuel < this.amt()) {
            ToastManager.renderToast("insufficient_resynth_mats");
            return
        }
        achievementStats.resynthPerformed();
        this.fuel -= this.amt();
        var container = Inventory.grabFromInventory(this.slot.uniqueID(), 1, false);
        container.transform();
        Inventory.addToInventory(container.uniqueID(), 1);
        this.slot = Inventory.findContainer(container.uniqueID());
        refreshSynthBoost(true);
        refreshResynth();
        refreshSynthInventory()
    },
    resynthItem: function resynthItem(container) {
        if (this.fuel < this.amt(container, synthToggle.RESYNTH)) {
            ToastManager.renderToast("insufficient_resynth_mats");
            return false
        }
        this.fuel -= this.amt(container, synthToggle.RESYNTH);
        var newcontainer = Inventory.grabFromInventory(container.uniqueID(), 1, false);
        newcontainer.transform();
        Inventory.addToInventory(newcontainer.uniqueID(), 1);
        return newcontainer.uniqueID()
    },
    amt: function amt() {
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.slot;
        var toggle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.setting;
        if (toggle === synthToggle.DESYNTH) {
            if (container === null || container.rarity === 0) return 0;
            return Math.max(1, Math.floor(container.item.craftTime / 4e3 * miscLoadedValues.fuelGainRate[container.rarity - 1]))
        }
        if (toggle === synthToggle.RESYNTH) {
            if (container === null) return 0;
            if (container.rarity === 0) return Math.max(1, Math.floor(container.item.craftTime / 4e3 * .5));
            return Math.max(1, Math.floor(container.item.craftTime / 4e3 * miscLoadedValues.fuelGainRate[container.rarity - 1]))
        }
    },
    fuelActive: function fuelActive() {
        return this.boostEnable
    }
};
var $synthBuilding = $("#synthBuilding");
var $synthListHeader = $("#synthListHeader");
var $synthListContainer = $("#synthListContainer");
var $synthBoost = $("#synthBoost");
var $synthButton = $("#synthButton");

function synthSidebarRefresh() {
    if (!SynthManager.canDesynth()) {
        $synthButton.hide();
        return
    }
    if (SynthManager.boostEnable) {
        $synthButton.show().removeClass("disabled").html(miscIcons.essence);
        var synthInfo = $("<div>").addClass("synthInfo").appendTo($synthButton);
        $("<div>").addClass("synthName").html("Enabled").appendTo(synthInfo);
        $("<div>").addClass("synthTime").html(msToTime(SynthManager.fuel * 1e3)).appendTo(synthInfo)
    } else {
        $synthButton.show().addClass("disabled").html(miscIcons.essence);
        var _synthInfo = $("<div>").addClass("synthInfo").appendTo($synthButton);
        $("<div>").addClass("synthName").html("Boost").appendTo(_synthInfo);
        $("<div>").addClass("synthTime").html(msToTime(SynthManager.fuel * 1e3)).appendTo(_synthInfo)
    }
    $synthButton.addClass("tooltip").attr({
        "data-tooltip": "synth_boost",
        "data-tooltip-value": "req"
    })
}

function initiateSynthBldg() {
    $synthBuilding.show();
    generateSynthStageActions();
    generateSynthHeader();
    generateSynthBoost();
    refreshSynthStage();
    refreshSynthInventory();
    refreshSynthButtons();
    SynthManager.slot = null;
    if (SynthManager.setting === synthToggle.DESYNTH) refreshDesynth();
    if (SynthManager.setting === synthToggle.RESYNTH) refreshResynth()
}

function generateSynthHeader() {
    $synthListHeader.empty();
    var a = $("<div/>").addClass("contentHeader").appendTo($synthListHeader);
    var a1 = $("<div/>").addClass("contentHeading").appendTo(a);
    var a1a = $("<div/>").addClass("headingDetails").appendTo(a1);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("header_synthesizer_desynth_title")).appendTo(a1a);
    $("<div/>").addClass("questionTooltip tooltip").attr("data-tooltip", "shift_synth").html(miscIcons.keyboard).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("header_synthesizer_desynth_desc")).appendTo(a1a);
    var sortInventoryBtn = $("<div/>").addClass("actionButtonAnimDisabled actionButton tooltip").attr({
        id: "sortSynthInventory",
        "data-tooltip": "sort_inventory"
    }).html('<i class="fas fa-sort-size-up-alt"></i>').appendTo(a);
    $("<span/>").addClass("actionButtonTextRight").html(displayText("bank_sort_inventory_button")).appendTo(sortInventoryBtn)
}

function generateSynthStageActions() {
    $synthSide.empty();
    var synthSettings = $("<div/>").addClass("synthSettingsContainer").appendTo($synthSide);
    var synthSettingOptions = $("<div/>").addClass("synthSettingsOptions").appendTo(synthSettings);
    $("<div/>").addClass("synthRewardHeader").html(displayText("synthesizer_settings_title")).appendTo(synthSettingOptions);
    $("<div/>").addClass("synthPowerSetting actionButton actionButtonAnimDisabled").attr({
        id: "synthPowerDesynthesis"
    }).html(displayText("synthesizer_desynth_setting")).appendTo(synthSettingOptions);
    $("<div/>").addClass("synthPowerSetting synthPowerSettingLocked actionButton actionButtonAnimDisabled").attr({
        id: "synthPowerResynthesis"
    }).html("<i class='fas fa-lock-alt'></i>".concat(displayText("universal_locked"))).appendTo(synthSettingOptions);
    $("<div/>").addClass("synthSlot").attr({
        id: "synthSlot"
    }).appendTo($synthSide);
    var synthTutorial = $("<div/>").addClass("desynthRewards").appendTo($synthSide);
    $("<div/>").addClass("synthTutHeader").html(displayText("synthesizer_tutorial_head_title")).appendTo(synthTutorial);
    $("<div/>").addClass("synthTutDesc").attr("id", "resynthTut").html(displayText("synthesizer_tutorial_resynth_desc")).appendTo(synthTutorial);
    $("<div/>").addClass("synthTutDesc").attr("id", "desynthTut").html(displayText("synthesizer_tutorial_desynth_desc")).appendTo(synthTutorial)
}

function generateSynthBoost() {
    $synthBoost.empty();
    var header = $("<div/>").addClass("synthBoostHeaderContainer").appendTo($synthBoost);
    $("<div/>").addClass("synthBoostHeader").html(displayText("synthesizer_boost_header")).appendTo(header);
    $("<div/>").addClass("questionTooltip tooltip").attr({
        "data-tooltip": "synth_boost"
    }).html(miscIcons.question).appendTo(header);
    var actions = $("<div/>").addClass("synthBoostActionsContainer").appendTo($synthBoost);
    if (SynthManager.boostEnable) $("<div/>").addClass("synthBoostDesc synthBoostEnable").attr("id", "synthBoostDesc").html(displayText("synthesizer_boost_disable")).appendTo(actions);
    else $("<div/>").addClass("synthBoostDesc synthBoostDisable").attr("id", "synthBoostDesc").html(displayText("synthesizer_boost_enable")).appendTo(actions);
    $("<div/>").addClass("synthBoostCount").attr({
        id: "synthBoostRemaining",
        "data-tooltip-value": "req"
    }).html("".concat(formatToUnits(SynthManager.fuel, 2), " ").concat(miscIcons.essence, " Remaining")).appendTo(actions)
}

function refreshSynthBoost(manual) {
    if (!SynthManager.boostEnable && !manual) return;
    if (SynthManager.boostEnable) {
        $synthButton.html(miscIcons.essence);
        var synthInfo = $("<div>").addClass("synthInfo").appendTo($synthButton);
        $("<div>").addClass("synthName").html("Enabled").appendTo(synthInfo);
        $("<div>").addClass("synthTime").html(msToTime(SynthManager.fuel * 1e3)).appendTo(synthInfo)
    }
    $("#synthBoostRemaining").html("".concat(miscIcons.essence, " ").concat(formatToUnits(SynthManager.fuel, 2), " Remaining"))
}

function toggleSynthBoost() {
    if (SynthManager.boostEnable) $("#synthBoostDesc").removeClass("synthBoostDisable").addClass("synthBoostEnable").html(displayText("synthesizer_boost_disable"));
    else $("#synthBoostDesc").removeClass("synthBoostEnable").addClass("synthBoostDisable").html(displayText("synthesizer_boost_enable"))
}

function refreshSynthInventory() {
    $synthListContainer.empty();
    var d1 = $("<div/>").addClass("synthListCardsContainer").appendTo($synthListContainer);
    var synths = Inventory.inv.filter(function (i) {
        return i.rarity > 0
    });
    if (synths.length === 0) $("<div/>").addClass("emptyContentMessage").html(displayText("synthesizer_inventory_empty")).appendTo($synthListContainer);
    synths.forEach(function (container) {
        if (container.item.type === "Trinkets") return;
        inventoryItemCard(container).appendTo(d1)
    })
}

function refreshSynthStage() {
    $("#synthSlot").empty();
    if (SynthManager.slot === null) {
        var itemdiv = $("<div/>").addClass("synthItem synthSlotEmpty");
        var d = $("<div/>").addClass("synthSlotEmpty itemName").appendTo(itemdiv);
        $("<div/>").addClass("synthSlotEmptyIcon").html(miscIcons.emptySlot).appendTo(d);
        $("<div/>").addClass("synthSlotEmptyTitle").html("Empty Slot").appendTo(d);
        $("<div/>").addClass("itemLevel").appendTo(itemdiv);
        $("<div/>").addClass("itemRarity").appendTo(itemdiv);
        $("<div/>").addClass("gearStat").html("<span/>").appendTo(itemdiv);
        $("<div/>").addClass("synthSlotEmptyButton").appendTo(itemdiv);
        $("#synthSlot").append(itemdiv);
        return
    }
    createSynthStageCard(SynthManager.slot).appendTo($("#synthSlot"))
}

function refreshDesynth() {
    $("#desynthTut").show();
    $("#resynthTut").hide();
    if (SynthManager.setting === synthToggle.DESYNTH) {
        $(".synthPowerSetting").removeClass("synthPowerEnabled");
        $("#synthPowerDesynthesis").addClass("synthPowerEnabled")
    }
    refreshSynthStage()
}

function refreshResynth() {
    $("#desynthTut").hide();
    $("#resynthTut").show();
    if (SynthManager.setting === synthToggle.RESYNTH) {
        $(".synthPowerSetting").removeClass("synthPowerEnabled");
        $("#synthPowerResynthesis").addClass("synthPowerEnabled")
    }
    refreshSynthStage()
}

function refreshSynthButtons() {
    if (SynthManager.canSynth()) $("#synthPowerResynthesis").removeClass("synthPowerSettingLocked").html(displayText("synthesizer_synth_setting"))
}
$synthListContainer.on("click", ".inventoryItem", function (e) {
    e.preventDefault();
    var id = $(e.currentTarget).attr("data-id");
    SynthManager.addSynth(id);
    if (e.shiftKey) {
        SynthManager.stageButton(id);
        SynthManager.removeSynth()
    }
    refreshSynthInventory()
});
$synthSide.on("click", "#synthRemove", function (e) {
    e.preventDefault();
    SynthManager.removeSynth();
    refreshSynthStage()
});
$synthSide.on("click", ".synthSlotAction", function (e) {
    e.preventDefault();
    SynthManager.stageButton()
});
$synthSide.on("click", "#synthPowerDesynthesis", function (e) {
    e.preventDefault();
    SynthManager.toggleStatus(synthToggle.DESYNTH);
    refreshSynthInventory()
});
$synthSide.on("click", "#synthPowerResynthesis", function (e) {
    e.preventDefault();
    if (!SynthManager.canSynth()) return;
    SynthManager.toggleStatus(synthToggle.RESYNTH);
    refreshSynthInventory()
});
$synthBoost.on("click", "#synthBoostDesc", function (e) {
    e.preventDefault();
    if (SynthManager.fuel === 0) ToastManager.renderToast("no_fuel");
    SynthManager.toggleBoost();
    synthSidebarRefresh()
});
$synthButton.on("click", function (e) {
    e.preventDefault();
    if (SynthManager.fuel === 0) ToastManager.renderToast("no_fuel");
    SynthManager.toggleBoost();
    synthSidebarRefresh()
});

function createSynthStageCard(container) {
    var itemdiv = $("<div/>").addClass("synthItem").addClass("R" + container.rarity).addClass("ctrlClickItem").data("rid", container.id);
    var itemName = $("<div/>").addClass("itemName").attr({
        id: container.id,
        r: container.rarity
    }).html(container.picName());
    var itemLevel = $("<div/>").addClass("itemLevel").html(container.itemLevel());
    var itemRarity = $("<div/>").addClass("itemRarity RT".concat(container.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[container.rarity].toLowerCase())
    }).html(miscIcons.rarity);
    var itemProps = $("<div/>").addClass("equipStats");
    var stageRemove = $("<div/>").addClass("synthRemove").attr("id", "synthRemove").html('<i class="fas fa-times"></i>');
    for (var _i = 0, _Object$entries = Object.entries(container.itemStat(false)); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            stat = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
        if (val === 0) continue;
        var ed = $("<div/>").addClass("gearStat tooltip").attr("data-tooltip", stat).appendTo(itemProps);
        $("<div/>").addClass("".concat(stat, "_img")).html(miscIcons[stat]).appendTo(ed);
        $("<div/>").addClass("".concat(stat, "_integer statValue")).html(val).appendTo(ed)
    }
    var synthButton = $("<div/>").addClass("synthSlotAction");
    if (SynthManager.setting === synthToggle.RESYNTH) {
        synthButton.addClass("actionButtonCardCost");
        $("<div/>").addClass("actionButtonCardText").html(displayText("synthesizer_synth_assign_button")).appendTo(synthButton);
        $("<div/>").addClass("actionButtonCardValue tooltip").attr({
            "data-tooltip": "synth_essence"
        }).html("".concat(miscIcons.essence, " ").concat(SynthManager.amt())).appendTo(synthButton)
    }
    if (SynthManager.setting === synthToggle.DESYNTH) {
        synthButton.addClass("actionButtonCardCost");
        $("<div/>").addClass("actionButtonCardText").html(displayText("synthesizer_desynth_assign_button")).appendTo(synthButton);
        $("<div/>").addClass("actionButtonCardValue tooltip").attr({
            "data-tooltip": "synth_essence"
        }).html("".concat(miscIcons.essence, " ").concat(SynthManager.amt())).appendTo(synthButton)
    }
    return itemdiv.append(itemName, itemLevel, itemRarity, itemProps, stageRemove, synthButton)
}
$synthListContainer.on("click", "#sortSynthInventory", function (e) {
    e.preventDefault();
    Inventory.sortInventory()
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var $tinkerBuilding = $("#tinkerBuilding");
var $tinkerCommands = $("#tinkerCommands");
var $tinkerTopContainer = $("#tinkerTopContainer");
var $tinkerBottomContainer = $("#tinkerBottomContainer");
var $tinkerScreenRecipes = $("#tinkerScreenRecipes");
var tinkerCommand = function () {
    function tinkerCommand(props) {
        _classCallCheck(this, tinkerCommand);
        Object.assign(this, props);
        this.time = 0;
        this.progress = 0;
        this.progressMax = 1e3;
        this.lvl = 0;
        this.enabled = false;
        this.paidGold = false
    }
    _createClass(tinkerCommand, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.time = this.time;
            save.progress = this.progress;
            save.lvl = this.lvl;
            save.enabled = this.enabled;
            save.paidGold = this.paygold;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.time = save.time;
            this.progress = save.progress;
            this.lvl = save.lvl;
            this.enabled = save.enabled;
            this.paidGold = save.paidGold
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.time = 0;
            this.progress = 0;
            this.progressMax = 1e3;
            this.lvl = 0;
            this.enabled = false;
            this.paidGold = false
        }
    }, {
        key: "addTime",
        value: function addTime(ms) {
            if (!this.enabled) return;
            if (this.time === 0) this.attemptStart();
            if (!this.paidGold) {
                this.time = 0;
                this.enabled = false;
                refreshCommandToggle(this);
                ToastManager.renderToast("tinker_disable");
                return
            }
            this.time += ms;
            var needRefresh = false;
            while (this.enabled && this.time >= this.getTime()) {
                this.time -= this.getTime();
                this.act();
                needRefresh = true;
                this.attemptStart();
                if (!this.paidGold) {
                    this.time = 0;
                    this.enabled = false;
                    refreshCommandToggle(this);
                    ToastManager.renderToast("tinker_disable");
                    break
                }
            }
            refreshTinkerProgressBar(this);
            if (needRefresh) {
                refreshTinkerRecipes();
                refreshTinkerLvLBar(this);
                refreshTrinketCompleteCost(this);
                refreshTrinketResearchCost(this)
            }
        }
    }, {
        key: "attemptStart",
        value: function attemptStart() {
            if (this.paidGold) return;
            if (!ResourceManager.available("M001", this.paidGoldAmt())) return;
            ResourceManager.addMaterial("M001", -this.paidGoldAmt());
            this.paidGold = true
        }
    }, {
        key: "act",
        value: function act() {
            this.paidGold = false;
            this.progress += 1;
            if (this.progress === 1e3) {
                var recipeID = this.recipeUnlock[this.lvl];
                recipeList.unlockTrinketRecipe(recipeID);
                this.lvl += 1;
                this.progress = 0
            }
        }
    }, {
        key: "toggle",
        value: function toggle() {
            this.enabled = !this.enabled
        }
    }, {
        key: "getTime",
        value: function getTime() {
            return this.timeCost[this.lvl]
        }
    }, {
        key: "paidGoldAmt",
        value: function paidGoldAmt() {
            if (this.lvl === 10) return 0;
            return this.goldCost[this.lvl]
        }
    }, {
        key: "completeCost",
        value: function completeCost() {
            return 10 * (this.progressMax - this.progress) * this.paidGoldAmt()
        }
    }, {
        key: "completeResearch",
        value: function completeResearch() {
            if (!ResourceManager.available("M001", this.completeCost())) return ToastManager.renderToast("tinker_research");
            ResourceManager.addMaterial("M001", -this.completeCost());
            var recipeID = this.recipeUnlock[this.lvl];
            recipeList.unlockTrinketRecipe(recipeID);
            this.lvl += 1;
            this.progress = 0;
            this.time = 0;
            if (this.lvl === 10) {
                refreshTinkerCommands();
                return
            }
            refreshTinkerProgressBar(this);
            refreshTinkerLvLBar(this);
            refreshTrinketCompleteCost(this);
            refreshTrinketResearchCost(this)
        }
    }]);
    return tinkerCommand
}();
var TinkerManager = {
    commands: [],
    lvl: 0,
    createSave: function createSave() {
        var save = {};
        save.lvl = this.lvl;
        save.commands = [];
        this.commands.forEach(function (c) {
            return save.commands.push(c.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.commands.forEach(function (c) {
            var command = _this.idToCommand(c.id);
            command.loadSave(c)
        });
        this.lvl = save.lvl
    },
    clearProgress: function clearProgress() {
        this.lvl = 0;
        this.commands.forEach(function (c) {
            return c.clearProgress()
        })
    },
    addTime: function addTime(ms) {
        this.commands.forEach(function (command) {
            return command.addTime(ms)
        })
    },
    idToCommand: function idToCommand(id) {
        return this.commands.find(function (a) {
            return a.id === id
        })
    },
    addCommand: function addCommand(action) {
        this.commands.push(action)
    },
    toggle: function toggle(commandID) {
        var command = this.idToCommand(commandID);
        command.toggle()
    },
    completeResearch: function completeResearch(commandID) {
        var command = this.idToCommand(commandID);
        command.completeResearch()
    },
    unlocked: function unlocked() {
        return TownManager.idToBuilding("TB006").status === 2
    },
    addLevel: function addLevel() {
        return
    },
    progressedOnce: function progressedOnce() {
        if (this.commands.map(function (p) {
                return p.lvl
            }).some(function (a) {
                return a > 0
            })) return true;
        return this.commands.map(function (p) {
            return p.progress
        }).some(function (p) {
            return p > 0
        })
    }
};

function refreshTinkerCommands() {
    $tinkerCommands.empty();
    var tinkerCommandsContainer = $("<div/>").addClass("tinkerCommandsContainer").appendTo($tinkerCommands);
    var commands = TinkerManager.commands.filter(function (command) {
        return command.lvl !== 10
    });
    if (commands.length === 0) return $("<div/>").addClass("emptyContentMessage").html(displayText("tinker_command_research_empty")).appendTo($tinkerCommands);
    commands.forEach(function (command) {
        return createTinkerCommand(command).appendTo(tinkerCommandsContainer)
    })
}

function generateTinkerHeader() {
    $tinkerTopContainer.empty();
    var tinkerHeader = $("<div/>").addClass("contentHeader tinkerHeader").appendTo($tinkerTopContainer);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(tinkerHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("header_tinker_research_title")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr({
        "data-tooltip": "more_info_tinker"
    }).html(miscIcons.question).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("header_tinker_research_desc")).appendTo(headingDetails)
}

function createTinkerCommand(command) {
    var d = $("<div/>").addClass("tinkerCommand");
    $("<div/>").addClass("tinkerCommandName").html(command.name).appendTo(d);
    var tinkerBars = $("<div/>").addClass("tinkerBarsContainer").appendTo(d);
    createTinkerProgressBar(command).appendTo(tinkerBars);
    createTinkerLvlBar(command).appendTo(tinkerBars);
    var d1 = $("<div/>").addClass("tinkerCommandInline").data("cid", command.id).appendTo(d);
    if (command.enabled) {
        var toggle = $("<div/>").addClass("tinkerCommandToggle toggleEnabled").attr("id", "ct" + command.id).html("".concat(miscIcons.toggleOn)).appendTo(d1);
        $("<span/>").html(displayText("tinker_command_enabled")).appendTo(toggle)
    } else {
        var _toggle = $("<div/>").addClass("tinkerCommandToggle toggleDisabled").attr("id", "ct" + command.id).html("".concat(miscIcons.toggleOff)).appendTo(d1);
        $("<span/>").html(displayText("tinker_command_disabled")).appendTo(_toggle)
    }
    var d2 = $("<div/>").addClass("tinkerCommandCostContainer").appendTo(d);
    var researchCost = $("<div/>").addClass("tinkerCommandResearchCost").attr("id", "tcrc" + command.id).appendTo(d2);
    $("<div/>").addClass("researchCostHeader").html(displayText("tinker_command_research_cost")).appendTo(researchCost);
    $("<div/>").addClass("researchCostValue actionButtonCardValue tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": formatWithCommas(command.paidGoldAmt())
    }).html("".concat(miscIcons.gold, " ").concat(formatToUnits(command.paidGoldAmt(), 2))).appendTo(researchCost);
    var completeButton = $("<div/>").addClass("completeCommand actionButtonCardCost").attr("id", "tcc" + command.id).data("cid", command.id).appendTo(d2);
    $("<div/>").addClass("actionButtonCardText").html(displayText("tinker_command_research_complete")).appendTo(completeButton);
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": formatWithCommas(command.completeCost())
    }).html("".concat(miscIcons.gold, " ").concat(formatToUnits(command.completeCost(), 2))).appendTo(completeButton);
    return d
}

function refreshTrinketCompleteCost(command) {
    var completeButton = $("#tcc" + command.id).empty();
    $("<div/>").addClass("actionButtonCardText").html(displayText("tinker_command_research_complete")).appendTo(completeButton);
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": formatWithCommas(command.completeCost())
    }).html("".concat(miscIcons.gold, " ").concat(formatToUnits(command.completeCost(), 2))).appendTo(completeButton)
}

function refreshTrinketResearchCost(command) {
    var researchCost = $("#tcrc" + command.id).empty();
    $("<div/>").addClass("researchCostHeader").html(displayText("tinker_command_research_cost")).appendTo(researchCost);
    $("<div/>").addClass("researchCostValue actionButtonCardValue tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": formatWithCommas(command.paidGoldAmt())
    }).html("".concat(miscIcons.gold, " ").concat(formatToUnits(command.paidGoldAmt(), 2))).appendTo(researchCost)
}

function createTinkerProgressBar(command) {
    var commandBarPercent = command.time / command.getTime();
    var commandBarText = msToTime(command.getTime() - command.time);
    var commandBarWidth = (commandBarPercent * 100).toFixed(1) + "%";
    var options = {
        prefix: "commandTime",
        tooltip: "research_time",
        icon: miscIcons.commandTime,
        text: commandBarText,
        textID: "cb" + command.id,
        width: commandBarWidth,
        fill: "cbf" + command.id
    };
    return generateProgressBar(options)
}

function refreshTinkerProgressBar(command) {
    var commandBarPercent = command.time / command.getTime();
    var commandBarText = msToTime(command.getTime() - command.time);
    var commandBarWidth = (commandBarPercent * 100).toFixed(1) + "%";
    $("#cb".concat(command.id)).html(commandBarText);
    $("#cbf".concat(command.id)).css("width", commandBarWidth);
    $("#csbf".concat(command.id)).css("width", commandBarWidth)
}

function createTinkerLvlBar(command) {
    var commandBarPercent = command.progress / 1e3;
    var commandBarWidth = (commandBarPercent * 100).toFixed(1) + "%";
    var commandBarText = "Level ".concat(command.lvl, " (").concat(commandBarWidth, ")");
    var options = {
        prefix: "commandProgress",
        tooltip: "research_level",
        icon: miscIcons.commandProgress,
        text: commandBarText,
        textID: "cbp" + command.id,
        width: commandBarWidth,
        fill: "cbpf" + command.id
    };
    return generateProgressBar(options)
}

function refreshTinkerLvLBar(command) {
    var commandBarPercent = command.progress / 1e3;
    var commandBarWidth = (commandBarPercent * 100).toFixed(1) + "%";
    var commandBarText = "Level ".concat(command.lvl, " (").concat(commandBarWidth, ")");
    $("#cbp".concat(command.id)).html(commandBarText);
    $("#cbpf".concat(command.id)).css("width", commandBarWidth);
    $("#csbp".concat(command.id)).html(commandBarText)
}

function initiateTinkerBldg() {
    $tinkerBuilding.show();
    generateTinkerHeader();
    refreshTinkerCommands();
    refreshTinkerRecipes()
}
$tinkerCommands.on("click", ".tinkerCommandInline", function (e) {
    e.preventDefault();
    var commandID = $(e.currentTarget).data("cid");
    TinkerManager.toggle(commandID);
    var command = TinkerManager.idToCommand(commandID);
    refreshCommandToggle(command)
});
$tinkerCommands.on("click", ".completeCommand", function (e) {
    e.preventDefault();
    var commandID = $(e.currentTarget).data("cid");
    TinkerManager.completeResearch(commandID);
    refreshTinkerRecipes()
});

function refreshCommandToggle(command) {
    if (command.enabled) {
        var toggle = $("#ct" + command.id).removeClass("toggleDisabled").addClass("toggleEnabled").html("".concat(miscIcons.toggleOn));
        $("<span/>").html(displayText("tinker_command_enabled")).appendTo(toggle);
        $("#tsbToggle" + command.id).addClass("tinkerSidebarEnabled").html(miscIcons.toggleOn)
    } else {
        var _toggle2 = $("#ct" + command.id).removeClass("toggleEnabled").addClass("toggleDisabled").html("".concat(miscIcons.toggleOff));
        $("<span/>").html(displayText("tinker_command_disabled")).appendTo(_toggle2);
        $("#tsbToggle" + command.id).removeClass("tinkerSidebarEnabled").html(miscIcons.toggleOff)
    }
}

function refreshTinkerRecipes() {
    $tinkerBottomContainer.empty();
    var tinkerHeader = $("<div/>").addClass("contentHeader tinkerHeader").appendTo($tinkerBottomContainer);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(tinkerHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_tinker_recipe_title")).appendTo(headingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_tinker_recipe_desc")).appendTo(headingDetails);
    $tinkerScreenRecipes.empty();
    var trinkets = recipeList.recipes.filter(function (r) {
        return r.type === "Trinkets" && r.owned
    });
    trinkets.forEach(function (trinket) {
        var recipeCardInfo = $("<div/>").addClass("recipeCardInfo").append(recipeCardFront(trinket, true));
        var recipeCardContainer = $("<div/>").addClass("recipeCardContainer").data("recipeID", trinket.id).attr("id", "rr" + trinket.id).append(recipeCardInfo);
        $tinkerScreenRecipes.prepend(recipeCardContainer)
    })
}
$tinkerScreenRecipes.on("click", ".recipeCraft", function (e) {
    e.preventDefault();
    var itemID = $(e.currentTarget).attr("id");
    actionSlotManager.addSlot(itemID)
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var BuildingState = Object.freeze({
    hidden: -1,
    unseen: 0,
    seen: 1,
    built: 2
});
var $buildingList = $("#buildingList");
var $buildingHeader = $("#buildingHeader");
var $buildingRecipes = $("#buildingRecipes");
var Building = function () {
    function Building(props) {
        _classCallCheck(this, Building);
        Object.assign(this, props);
        this.status = BuildingState.hidden
    }
    _createClass(Building, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.status = this.status;
            save.id = this.id;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.status = save.status
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.status = BuildingState.hidden
        }
    }, {
        key: "getStatus",
        value: function getStatus() {
            return this.status
        }
    }, {
        key: "unlocked",
        value: function unlocked() {
            return this.status > 0
        }
    }, {
        key: "setStatus",
        value: function setStatus(status) {
            this.status = status
        }
    }]);
    return Building
}();
var TownManager = {
    buildings: [],
    addBuilding: function addBuilding(building) {
        this.buildings.push(building)
    },
    createSave: function createSave() {
        var save = {};
        save.buildings = [];
        this.buildings.forEach(function (b) {
            save.buildings.push(b.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        if (save.buildings === undefined) return;
        save.buildings.forEach(function (bsave) {
            var building = _this.idToBuilding(bsave.id);
            if (building !== undefined) building.loadSave(bsave)
        })
    },
    clearProgress: function clearProgress() {
        this.buildings.forEach(function (b) {
            return b.clearProgress()
        })
    },
    idToBuilding: function idToBuilding(id) {
        return this.buildings.find(function (b) {
            return b.id === id
        })
    },
    typeToBuilding: function typeToBuilding(type) {
        return this.buildings.find(function (b) {
            return b.shorthand === type
        })
    },
    recipeIDToBuilding: function recipeIDToBuilding(recipeID) {
        return this.buildings.find(function (b) {
            return b.recipeID === recipeID
        })
    },
    buildingStatus: function buildingStatus() {
        return this.buildings.map(function (b) {
            return b.getStatus()
        })
    },
    buildingRecipes: function buildingRecipes() {
        return this.buildings.map(function (b) {
            return b.recipeID
        })
    },
    unseenLeft: function unseenLeft() {
        return this.buildingStatus().includes(BuildingState.unseen)
    },
    buildingPerk: function buildingPerk(type) {
        var building = this.typeToBuilding(type);
        building.setStatus(BuildingState.unseen);
        recipeList.idToItem(building.recipeID).owned = true;
        refreshSideTown()
    },
    buildingsOwned: function buildingsOwned() {
        return this.buildings.some(function (building) {
            return building.getStatus() !== BuildingState.hidden
        })
    },
    status: function status(type) {
        var building = this.typeToBuilding(type);
        return building.getStatus()
    },
    setStatus: function setStatus(type, value) {
        var building = this.typeToBuilding(type);
        building.setStatus(value)
    },
    unlockBldg: function unlockBldg(recipeID) {
        var building = this.recipeIDToBuilding(recipeID);
        var type = building.shorthand;
        building.setStatus(BuildingState.built);
        actionSlotManager.purgeSlot(recipeID);
        $(".buildingName").removeClass("selected");
        $("#".concat(building.shorthand, "Bldg")).addClass("selected");
        refreshSideTown();
        showBldg(type);
        showSidebarHeadings();
        recipeList.recipes.forEach(function (recipe) {
            return refreshMuseumRecipeCard(recipe)
        })
    }
};
var $emptyTown = $("#emptyTown");
var $townTab = $("#townTab");

function refreshSideTown() {
    if (!TownManager.buildingsOwned()) {
        $emptyTown.show();
        $buildingList.hide();
        $townTabLink.hide();
        return
    }
    $townTabLink.show();
    $emptyTown.hide();
    $buildingList.show().empty();
    TownManager.buildings.forEach(function (building) {
        if (building.getStatus() >= 0) {
            var d = $("<div/>").addClass("buildingName").attr("id", "".concat(building.shorthand, "Bldg")).data("bldgType", building.shorthand).appendTo($buildingList);
            $("<span/>").addClass("buildingNameIcon").html(building.icon).appendTo(d);
            $("<span/>").addClass("buildingNameText").html(building.name).appendTo(d);
            if (building.shorthand === "fortune" && building.getStatus() === 2) {
                var d1 = $("<div/>").addClass("buildingNameIndicator tooltip").attr({
                    "data-tooltip": "fortune_slots_available"
                }).html(FortuneManager.emptySlotCount()).appendTo(d);
                if (FortuneManager.emptySlotCount() > 0) d1.addClass("available");
                else d1.removeClass("available")
            }
            if (building.getStatus() === BuildingState.unseen) d.addClass("hasEvent")
        }
    });
    refreshTownHasEvents()
}
var $buildBuilding = $("#buildBuilding");

function showBldg(type) {
    var building = TownManager.typeToBuilding(type);
    $(".buildingTab").removeClass("bldgTabActive").hide();
    $("#".concat(type, "Building")).addClass("bldgTabActive");
    $buildingHeader.empty();
    $buildBuilding.hide();
    var d = $("<div/>").addClass("buildingInfo building".concat(building.shorthand));
    var da = $("<div/>").addClass("buildingInfoBackground");
    var db = $("<div/>").addClass("buildingInfoImage").html("<img src='assets/images/recipes/noitem.png'>");
    if (building.getStatus() === BuildingState.built) db.html("<img src='assets/images/townImages/".concat(building.shorthand, "Building/").concat(building.shorthand, "_building.png'>"));
    var dc = $("<div/>").addClass("buildingInfoDetails");
    $("<div/>").addClass("buildingInfoName").html(building.name).appendTo(dc);
    $("<div/>").addClass("buildingInfoDesc").html(building.description).appendTo(dc);
    if (building.getStatus() !== BuildingState.built) d.addClass("buildInProgress");
    d.append(da, db, dc);
    $buildingHeader.append(d);
    var upper = building.shorthand.replace(/^\w/, function (c) {
        return c.toUpperCase()
    });
    var buildingText = "initiate".concat(upper, "Bldg");
    if (building.getStatus() === BuildingState.built) window[buildingText]();
    else {
        $buildBuilding.show();
        buildScreen(building.shorthand)
    }
    recipeCanCraft()
}
$buildingList.on("click", ".buildingName", function (e) {
    e.preventDefault();
    var type = $(e.currentTarget).data("bldgType");
    openTab("town_" + type)
});

function buildScreen(type) {
    $buildingRecipes.empty();
    var buildingCardHeader = $("<div/>").addClass("contentHeader").appendTo($buildingRecipes);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(buildingCardHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_building_construct_title")).appendTo(headingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_building_construct_desc")).appendTo(headingDetails);
    var buildingCardContainer = $("<div/>").addClass("buildingCardContainer").appendTo($buildingRecipes);
    recipeList.recipes.filter(function (r) {
        return r.type === type
    }).forEach(function (recipe) {
        var recipeCardInfo = $("<div/>").addClass("recipeCardInfo").append(recipeCardFront(recipe));
        var recipeCardContainer = $("<div/>").addClass("recipeCardContainer buildingCard").data("recipeID", recipe.id).attr("id", "rr" + recipe.id).append(recipeCardInfo);
        buildingCardContainer.append(recipeCardContainer)
    })
}

function refreshTownHasEvents() {
    $("#fusionBldg").removeClass("hasEvent");
    $("#expeditionBldg").removeClass("hasEvent");
    $("#expeditionBldg").removeClass("hasEvent");
    $townTab.removeClass("hasEvent");
    if (FusionManager.slots.some(function (f) {
            return f.fuseComplete()
        })) {
        $("#fusionBldg").addClass("hasEvent");
        $townTab.addClass("hasEvent")
    }
    if (ExpeditionManager.quests.some(function (q) {
            return q.finished()
        })) {
        $("#expeditionBldg").addClass("hasEvent");
        $townTab.addClass("hasEvent")
    }
    if (TownManager.unseenLeft()) $townTab.addClass("hasEvent");
    if (ExpeditionManager.expeditions.some(function (e) {
            return e.reachedOptimal()
        }) || ExpeditionManager.quests.some(function (q) {
            return q.finished()
        })) {
        $("#expeditionBldg").addClass("hasEvent");
        $townTab.addClass("hasEvent")
    }
}
"use strict";

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}
var $closeShopOrder = $("#closeShopOrder");
var $merchantOrderLocations = $(".merchantOrderLocations");
var $merchantOrders = $("#merchantOrders");
var $merchantMastery = $("#merchantMastery");
var Merchant = {
    tabView: "Order",
    orders: [],
    orderConfig: [],
    acDefault: false,
    createSave: function createSave() {
        var save = {};
        save.orders = [];
        this.orders.forEach(function (order) {
            save.orders.push(order.createSave())
        });
        save.acDefault = this.acDefault;
        return save
    },
    loadSave: function loadSave(save) {
        save.orders.forEach(function (order) {
            var newOrder = new orderItem(order.id);
            newOrder.loadSave(order);
            Merchant.orders.push(newOrder)
        });
        if (save.acDefault !== undefined) this.acDefault = save.acDefault;
        return
    },
    clearProgress: function clearProgress() {
        this.orders = [];
        this.tabView = "Order"
    },
    addOrderConfig: function addOrderConfig(order) {
        this.orderConfig.push(order)
    },
    maxOrders: function maxOrders() {
        return Shop.slotsPurchased()
    },
    emptyOrders: function emptyOrders() {
        return this.maxOrders() - this.orders.length
    },
    canBuyRecipe: function canBuyRecipe() {
        return this.orders.length < this.maxOrders()
    },
    nextRecipes: function nextRecipes() {
        var recipes = recipeList.availablePurchase();
        if (!Shop.alreadyPurchased("AL1026")) return [recipes.sort(function (a, b) {
            return a.unlockOrder - b.unlockOrder
        })[0]];
        var r1List = recipes.filter(function (r) {
            return r.orderGroup === 1
        }).sort(function (a, b) {
            return a.unlockOrder - b.unlockOrder
        });
        var r2List = recipes.filter(function (r) {
            return r.orderGroup === 2
        }).sort(function (a, b) {
            return a.unlockOrder - b.unlockOrder
        });
        var r3List = recipes.filter(function (r) {
            return r.orderGroup === 3
        }).sort(function (a, b) {
            return a.unlockOrder - b.unlockOrder
        });
        return [r1List[0], r2List[0], r3List[0]]
    },
    gainRecipe: function gainRecipe(recipeID) {
        var recipe = recipeList.idToItem(recipeID);
        if (recipe.owned) return;
        recipe.owned = true;
        this.orders.push(new orderItem(recipeID))
    },
    submitItem: function submitItem(uniqueID) {
        var order = this.orders.find(function (o) {
            return o.uniqueID() === uniqueID
        });
        if (Inventory.itemCount(uniqueID) === 0) return ToastManager.renderToast("shop_order_no_item");
        order.submit(uniqueID);
        if (this.orders.every(function (o) {
                return !o.complete()
            })) return;
        this.orders.forEach(function (o) {
            return o.increasePart()
        });
        this.orders = this.orders.filter(function (o) {
            return o.part < o.totalParts()
        });
        refreshShopOrder()
    },
    orderByUid: function orderByUid(uid) {
        return this.orders.find(function (o) {
            return o.uniqueID() === uid
        })
    },
    orderProp: function orderProp(lvl) {
        var count = recipeList.ownedByLvl(lvl);
        return this.orderConfig.find(function (o) {
            return o.lvl === lvl && o.order === count
        })
    },
    canChooseRecipe: function canChooseRecipe() {
        return Shop.alreadyPurchased("AL1026")
    },
    toggleAC: function toggleAC(uniqueID) {
        var order = this.orderByUid(uniqueID);
        var ac = order.toggleAC();
        if (!ac) return;
        this.orders.forEach(function (order) {
            var container = Inventory.findContainer(order.uniqueID());
            if (container === undefined) return;
            var submitted = Inventory.grabFromInventory(order.uniqueID(), order.left(), false).qty;
            order.autoSubmit(submitted)
        });
        this.orders.forEach(function (o) {
            return o.increasePart()
        });
        this.orders = this.orders.filter(function (o) {
            return o.part < o.totalParts()
        });
        refreshShopOrder();
        return ac
    },
    canContribute: function canContribute(uniqueID) {
        var fit = this.orders.find(function (o) {
            return o.uniqueID() === uniqueID && o.autoContribute && !o.complete()
        });
        return fit !== undefined
    },
    autoContribute: function autoContribute(uniqueID) {
        var fit = this.orders.find(function (o) {
            return o.uniqueID() === uniqueID && o.autoContribute && !o.complete()
        });
        if (fit === undefined) return;
        fit.autoSubmit();
        if (fit.complete()) {
            fit.increasePart();
            this.orders = this.orders.filter(function (o) {
                return o.part < o.totalParts()
            });
            refreshShopOrder()
        }
        if (openedTabEquals("merchant_order")) refreshOrderRemaining(uniqueID)
    },
    manualSubmit: function manualSubmit(uniqueID) {
        var manualSubmit = Inventory.findContainer(uniqueID);
        var order = this.orders.find(function (o) {
            return o.id === manualSubmit.id
        });
        order.submitContainer(uniqueID);
        var finishedOrder = order.complete();
        if (this.orders.every(function (o) {
                return !o.complete()
            })) return;
        this.orders.forEach(function (o) {
            return o.increasePart()
        });
        this.orders = this.orders.filter(function (o) {
            return o.part < o.totalParts()
        });
        return finishedOrder
    },
    actualUID: function actualUID(uid) {
        var props = createContainerFromUniqueID(uid);
        var order = this.orders.find(function (o) {
            return o.id === props.id
        });
        return order.uniqueID()
    },
    attemptForge: function attemptForge(uniqueID) {
        var order = this.orders.find(function (o) {
            return o.uniqueID() === uniqueID
        });
        var candidates = Inventory.inv.filter(function (i) {
            return i.id === order.id && i.rarity === order.getRarity() && i.isTransformed() === "0"
        });
        if (candidates.length === 0) {
            ToastManager.renderToast("no_candidate");
            return
        }
        var container = candidates.sort(function (a, b) {
            return a.sharp > b.sharp
        })[0];
        var needed = bloopSmith.getSmithCostMulti(container, order.getSharp());
        var params = bloopSmith.getSmithCost(container, SmithType.ENHANCE);
        if (ResourceManager.materialAvailable("M001") < needed.gold) {
            ToastManager.renderToast("cant_afford_smith_gold");
            return
        }
        if (ResourceManager.materialAvailable(needed.resType) < needed.resAmt) {
            ToastManager.renderToast("cant_afford_smith_material", ResourceManager.idToMaterial(params.resType).name, needed.resAmt - ResourceManager.materialAvailable(params.resType));
            return
        }
        ResourceManager.deductMoney(needed.gold);
        ResourceManager.addMaterial(needed.resType, -needed.resAmt);
        Inventory.removeFromInventory(container.uniqueID(), 1);
        order.autoSubmit(1);
        if (this.orders.some(function (o) {
                return o.complete()
            })) {
            this.orders.forEach(function (o) {
                return o.increasePart()
            });
            this.orders = this.orders.filter(function (o) {
                return o.part < o.totalParts()
            });
            refreshShopOrder()
        }
        if (openedTabEquals("merchant_order")) refreshOrderRemaining(uniqueID)
    },
    orderBypass: function orderBypass(uniqueID) {
        var order = this.orders.find(function (o) {
            return o.uniqueID() === uniqueID
        });
        order.bypass();
        this.orders = this.orders.filter(function (o) {
            return o.part < o.totalParts()
        });
        refreshShopOrder()
    }
};
var Order = function Order(props) {
    _classCallCheck(this, Order);
    Object.assign(this, props)
};
var orderItem = function () {
    function orderItem(id) {
        _classCallCheck(this, orderItem);
        this.id = id;
        this.item = recipeList.idToItem(id);
        this.lvl = this.item.lvl;
        var props = Merchant.orderProp(this.item.lvl);
        this.amt = props.amt;
        this.rarity = props.rarity;
        this.sharp = props.sharp;
        this.fufilled = 0;
        this.part = 0;
        this.autoContribute = Merchant.acDefault
    }
    _createClass(orderItem, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.rarity = this.rarity;
            save.sharp = this.sharp;
            save.amt = this.amt;
            save.fufilled = this.fufilled;
            save.part = this.part;
            save.autoContribute = this.autoContribute;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.amt = save.amt;
            this.rarity = save.rarity;
            this.sharp = save.sharp;
            this.amt = save.amt;
            this.fufilled = save.fufilled;
            this.part = save.part;
            this.autoContribute = save.autoContribute
        }
    }, {
        key: "complete",
        value: function complete() {
            return this.fufilled >= this.getAmt()
        }
    }, {
        key: "totalParts",
        value: function totalParts() {
            return this.amt.length
        }
    }, {
        key: "left",
        value: function left() {
            return this.getAmt() - this.fufilled
        }
    }, {
        key: "generateName",
        value: function generateName() {
            if (this.getSharp() > 0) return '<span><span class="item-prefix tooltip" data-tooltip="forge_level">'.concat(miscIcons.enhancement).concat(this.getSharp(), "</span>").concat(this.item.name, "</span>");
            return "".concat(this.item.name)
        }
    }, {
        key: "uniqueID",
        value: function uniqueID(flatOrder) {
            if (flatOrder) return this.id + "_" + this.getRarity() + "_0_0_0";
            return this.id + "_" + this.getRarity() + "_" + this.getSharp() + "_" + this.getRune() + "_" + this.getTransform()
        }
    }, {
        key: "submit",
        value: function submit(uniqueID) {
            if (this.uniqueID() !== uniqueID) return;
            if (Inventory.findContainer(uniqueID) === undefined) return;
            Inventory.removeFromInventory(this.uniqueID(), 1, false);
            ResourceManager.addMaterial("M001", this.goldValue());
            this.fufilled += 1
        }
    }, {
        key: "submitContainer",
        value: function submitContainer(uniqueID) {
            Inventory.removeFromInventory(uniqueID, 1, false);
            ResourceManager.addMaterial("M001", this.goldValue());
            this.fufilled += 1
        }
    }, {
        key: "autoSubmit",
        value: function autoSubmit() {
            var amt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            ResourceManager.addMaterial("M001", this.goldValue() * amt);
            this.fufilled += amt
        }
    }, {
        key: "goldValue",
        value: function goldValue() {
            return Math.round(2 * this.item.value * (this.getRarity() + 1) * (1 + this.getSharp() * .1))
        }
    }, {
        key: "increasePart",
        value: function increasePart() {
            if (!this.complete()) return;
            this.fufilled = 0;
            this.part += 1;
            if (this.autoContribute && this.part < this.totalParts()) {
                var container = Inventory.findContainer(this.uniqueID());
                if (container === undefined) return;
                var submitted = Inventory.grabFromInventory(this.uniqueID(), this.left(), false).qty;
                this.autoSubmit(submitted);
                this.increasePart()
            }
        }
    }, {
        key: "getAmt",
        value: function getAmt() {
            return this.amt[this.part]
        }
    }, {
        key: "getRarity",
        value: function getRarity() {
            return this.rarity[this.part]
        }
    }, {
        key: "getSharp",
        value: function getSharp() {
            return this.sharp[this.part]
        }
    }, {
        key: "getSynth",
        value: function getSynth() {
            return this.synth[this.part]
        }
    }, {
        key: "getRune",
        value: function getRune() {
            return "0"
        }
    }, {
        key: "getTransform",
        value: function getTransform() {
            return "0"
        }
    }, {
        key: "toggleAC",
        value: function toggleAC() {
            this.autoContribute = !this.autoContribute;
            return this.autoContribute
        }
    }, {
        key: "bypass",
        value: function bypass() {
            this.part = this.totalParts();
            this.fufilled = 0
        }
    }]);
    return orderItem
}();
var $merchantList = $("#merchantList");

function initializeMerchantSidebar() {
    $merchantList.empty();
    var d = $("<div/>").addClass("merchantSideTab selected").attr("id", "merchantOrderTab").appendTo($merchantList);
    $("<span/>").addClass("merchantSidebarIcon").html(miscIcons.merchantOrder).appendTo(d);
    $("<span/>").addClass("merchantSidebarName").html("Shop Order").appendTo(d);
    var e = $("<div/>").addClass("merchantSideTab").attr("id", "merchantMasteryTab").appendTo($merchantList);
    $("<span/>").addClass("merchantSidebarIcon").html(miscIcons.mastery).appendTo(e);
    $("<span/>").addClass("merchantSidebarName").html("Mastery").appendTo(e)
}

function checkCraftableStatus() {
    var $orderCraft = $(".orderCraft");
    $orderCraft.removeClass("recipeCraftDisable");
    var orderItems = Merchant.orders.map(function (o) {
        return o.item
    });
    orderItems.forEach(function (recipe) {
        if (actionSlotManager.slots.length >= actionSlotManager.maxSlots || !recipe.canProduce) $("#" + recipe.id + ".orderCraft").addClass("recipeCraftDisable")
    })
}

function refreshShopOrder() {
    $merchantOrders.empty();
    var contentHeader = $("<div/>").addClass("contentHeader").appendTo($merchantOrders);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(contentHeader);
    $("<div/>").addClass("headingTitle").html(displayText("merchant_recipe_orders_header_title")).appendTo(headingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("merchant_recipe_orders_header_desc")).appendTo(headingDetails);
    var merchantOrderContainer = $("<div/>").addClass("merchantOrderContainer").appendTo($merchantOrders);
    Merchant.orders.forEach(function (order) {
        createOrderCard(order).appendTo(merchantOrderContainer)
    });
    for (var i = 0; i < Merchant.emptyOrders(); i++) {
        createEmptyOrderCard().appendTo(merchantOrderContainer)
    }
    createRecipeBuy().appendTo($merchantOrders);
    checkCraftableStatus()
}

function refreshRecipeMastery() {
    $merchantMastery.empty();
    var recipes = recipeList.needMastery();
    var contentHeader = $("<div/>").addClass("contentHeader").appendTo($merchantMastery);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(contentHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("merchant_recipe_mastery_header_title")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr({
        "data-tooltip": "more_info_mastery"
    }).html(miscIcons.question).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("merchant_recipe_mastery_header_desc")).appendTo(headingDetails);
    if (recipes.length === 0) {
        $("<div/>").addClass("noMasteryRecipes").html(displayText("merchant_recipe_mastery_none")).appendTo($merchantMastery);
        return
    }
    var merchantOrderContainer = $("<div/>").addClass("merchantOrderContainer").appendTo($merchantMastery);
    recipes.filter(function (r) {
        return r.canBuy
    }).forEach(function (recipe) {
        createRecipeMasteryCard(recipe).appendTo(merchantOrderContainer)
    });
    recipeFilterList()
}

function createOrderCard(item, manual) {
    var d1 = $("<div/>").addClass("orderCard R".concat(item.getRarity())).data("uid", item.uniqueID());
    $("<div/>").addClass("orderIcon").html(ResourceManager.materialIcon(item.id)).appendTo(d1);
    $("<div/>").addClass("orderName itemName").html(item.generateName()).appendTo(d1);
    $("<div/>").addClass("itemLevel").html(item.item.itemLevel()).appendTo(d1);
    $("<div/>").addClass("itemRarity RT".concat(item.getRarity(), " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[item.getRarity()].toLowerCase())
    }).html(miscIcons.rarity).appendTo(d1);
    $("<div/>").addClass("itemToSac tooltip").attr({
        "data-tooltip": "recipe_desc",
        "data-tooltip-value": item.id
    }).appendTo(d1);
    var d2 = $("<div/>").addClass("orderMaterials").appendTo(d1);
    item.item.gcost.forEach(function (g) {
        $("<div/>").addClass("orderWorker tooltip").attr({
            "data-tooltip": "".concat(g, "_worker")
        }).html(miscIcons[g]).appendTo(d2)
    });
    if (item.item.mcost) {
        Object.keys(item.item.mcost).forEach(function (mat, i) {
            var matBox = $("<div/>").addClass("orderGuildMat tooltip").attr({
                "data-tooltip": "material_desc",
                "data-tooltip-value": mat
            }).appendTo(d2);
            $("<div/>").addClass("matIcon").html(ResourceManager.idToMaterial(mat).img).appendTo(matBox);
            $("<div/>").addClass("matAmt").html(Object.values(item.item.mcost)[i]).appendTo(matBox);
            if (item.item.isMastered()) matBox.addClass("isMastered")
        })
    }
    $("<div/>").addClass("itemToSacReq").attr("id", "itsr" + item.uniqueID()).html("".concat(formatToUnits(item.left(), 2), " Left")).appendTo(d1);
    var d3 = $("<div/>").addClass("guildItemSubmit").appendTo(d1);
    $("<div/>").addClass("guildItemSubmitHeading").html("Rewards").appendTo(d3);
    var d3a = $("<div/>").addClass("guildOrderRewards").appendTo(d3);
    var goldReward = $("<div/>").addClass("guildOrderReward tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": formatWithCommas(item.goldValue())
    }).appendTo(d3a);
    $("<div/>").addClass("rewardIcon").html(miscIcons.gold).appendTo(goldReward);
    $("<div/>").addClass("rewardValue").html(formatToUnits(item.goldValue(), 2)).appendTo(goldReward);
    if (manual) return d1;
    var orderActions = $("<div/>").addClass("orderActions").appendTo(d1);
    $("<div/>").addClass("orderManual tooltip").attr({
        "data-tooltip": "manual_contribute"
    }).data("uid", item.uniqueID()).html(miscIcons.manualSubmit).appendTo(orderActions);
    $("<div/>").attr("id", item.id).addClass("orderCraft").html('<i class="fas fa-hammer"></i> Craft').appendTo(orderActions);
    if (item.getSharp() > 0) {
        var d1a = $("<div/>").addClass("orderForge tooltip").attr({
            "data-tooltip": "forge_contribute",
            id: "of" + item.item.id
        }).data("uid", item.uniqueID()).html(displayText("forge_item")).appendTo(d1);
        if (Inventory.itemCount(item.uniqueID(true)) === 0) d1a.addClass("disabled")
    }
    var d4 = $("<div/>").addClass("orderAC orderACToggle tooltip").attr({
        "data-tooltip": "auto_contribute"
    }).data("uid", item.uniqueID()).appendTo(d1);
    if (item.autoContribute) {
        d4.addClass("acEnable");
        $("<div/>").html(miscIcons.toggleOn).appendTo(d4)
    } else $("<div/>").html(miscIcons.toggleOff).appendTo(d4);
    $("<span/>").addClass("orderACtext").html(displayText("merchant_order_auto_contribute")).appendTo(d4);
    if (DungeonManager.bossCount() >= item.lvl) $("<div/>").addClass("orderBypass actionButton tooltip").attr({
        "data-tooltip": "order_bypass"
    }).data("uid", item.uniqueID()).html(displayText("order_bypass")).appendTo(d1);
    $("<div/>").addClass("orderParts").attr("id", "op" + item.uniqueID()).html("Part ".concat(item.part + 1, " of ").concat(item.totalParts())).appendTo(d1);
    return d1
}

function checkGuildOrderDisable(uniqueID) {
    if (!openedTabEquals("merchant_order")) return;
    if (uniqueID === undefined) {
        Merchant.orders.forEach(function (order) {
            var orderUniqueID = order.uniqueID(true);
            if (Inventory.itemCount(orderUniqueID === 0)) $("#of" + order.item.id).addClass("disabled");
            else $("#of" + order.item.id).removeClass("disabled")
        });
        return
    }
    var order = Merchant.orders.find(function (o) {
        return o.uniqueID(true) === uniqueID
    });
    if (order === undefined) return;
    if (Inventory.itemCount(order.uniqueID(true) === 0)) $("#of" + order.item.id).addClass("disabled");
    else $("#of" + order.item.id).removeClass("disabled")
}
$merchantOrders.on("click", ".orderBypass", function (e) {
    e.preventDefault();
    var uid = $(e.currentTarget).data("uid");
    Merchant.orderBypass(uid)
});

function createEmptyOrderCard() {
    var d1 = $("<div/>").addClass("orderCardEmpty");
    $("<div/>").addClass("orderCardText").html(displayText("merchant_order_empty")).appendTo(d1);
    return d1
}

function createRecipeBuy() {
    var d = $("<div/>").addClass("orderRecipeBuy").appendTo($merchantMastery);
    var contentHeader = $("<div/>").addClass("contentHeader").appendTo(d);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(contentHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("merchant_recipe_buy_header_title")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr({
        "data-tooltip": "more_info_shop_recipes"
    }).html(miscIcons.question).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("merchant_recipe_buy_header_desc")).appendTo(headingDetails);
    if (Merchant.emptyOrders() === 0) {
        $("<div/>").addClass("orderRecipeNoBuy emptyContentMessage").html(displayText("merchant_recipe_no_buy")).appendTo(d);
        return d
    }
    var rList = Merchant.nextRecipes();
    var recipeBuyContainer = $("<div/>").addClass("orderRecipesBuyContainer").appendTo(d);
    rList.forEach(function (recipe) {
        if (recipe === undefined) {
            $("<div/>").addClass("orderRecipeNone").html(displayText("merchant_recipe_orders_none")).appendTo(recipeBuyContainer);
            return
        }
        var recipeBuy = $("<div/>").attr("id", "orderRecipeBuyChoice").addClass("orderRecipeBuyChoice").data("rid", recipe.id).appendTo(recipeBuyContainer);
        $("<div/>").addClass("recipeDescription tooltip").attr({
            "data-tooltip": "recipe_desc",
            "data-tooltip-value": recipe.id
        }).html("<i class='fas fa-info-circle'></i>").appendTo(recipeBuy);
        $("<div/>").addClass("itemName").html(recipe.itemPicName()).appendTo(recipeBuy);
        $("<div/>").addClass("itemLevel").html(recipe.itemLevel()).appendTo(recipeBuy);
        $("<div/>").addClass("itemMaterial tooltip").attr({
            "data-tooltip": "material_desc",
            "data-tooltip-value": recipe.material()
        }).html(ResourceManager.idToMaterial(recipe.material()).img).appendTo(recipeBuy);
        var itemWorkers = $("<div/>").addClass("itemWorkers").appendTo(recipeBuy);
        recipe.gcost.forEach(function (type) {
            $("<div/>").addClass("indvCost tooltip").attr({
                "data-tooltip": "".concat(type, "_worker")
            }).html(miscIcons[type]).appendTo(itemWorkers)
        });
        var d2 = $("<div/>").addClass("itemType").appendTo(recipeBuy);
        $("<div/>").addClass("recipeHeroTypeHeader").html("Hero Type").appendTo(d2);
        var d2a = $("<div/>").addClass("itemTypeText").html(recipe.usedBy).appendTo(d2);
        if (recipe.usedBy === "MIGHT") d2a.addClass("classMight");
        if (recipe.usedBy === "MIND") d2a.addClass("classMind");
        if (recipe.usedBy === "MOXIE") d2a.addClass("classMoxie")
    });
    return d
}

function refreshOrderInvCount() {
    $(".orderInv").each(function () {
        var $this = $(this);
        var uniqueID = $this.data("uid");
        var invCount = Inventory.itemCountSpecific(uniqueID);
        if (invCount > 0) $this.addClass("canContribute").html('<i class="fas fa-cube"></i> '.concat(invCount));
        else $this.removeClass("canContribute").html('<i class="fas fa-cube"></i> '.concat(invCount))
    })
}

function createRecipeMasteryCard(recipe) {
    var d1 = $("<div/>").addClass("recipeMasteryGuildCard").addClass("ctrlClickItem").data("rid", recipe.id);
    $("<div/>").addClass("itemName").html(recipe.itemPicName()).appendTo(d1);
    $("<div/>").addClass("itemLevel").html(recipe.itemLevel()).appendTo(d1);
    $("<div/>").addClass("recipeMasteryViewButton actionButton tooltip").attr({
        "data-tooltip": "guild_mastery_recipe"
    }).data("rid", recipe.id).html('<i class="fas fa-book"></i>').appendTo(d1);
    var d2 = $("<div/>").addClass("recipeMasteryRemaining").attr("id", "rmr" + recipe.id).html(displayText("merchant_recipe_mastery_craft_remaining").replace("{0}", recipe.canMaster())).appendTo(d1);
    if (recipe.canMaster() === 0) d2.hide();
    var masteryCost = recipe.masteryCost();
    var masteryButton = $("<div/>").attr("id", "rmb" + recipe.id).addClass("recipeMasteryGuildButton actionButtonCardCost").data("rid", recipe.id).appendTo(d1);
    $("<div/>").addClass("actionButtonCardText").html("Master Recipe").appendTo(masteryButton);
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        id: "rmr2" + recipe.id,
        "data-tooltip": "material_desc",
        "data-tooltip-value": masteryCost.id
    }).html("".concat(ResourceManager.materialIcon(masteryCost.id), " ").concat(masteryCost.amt)).appendTo(masteryButton);
    if (recipe.canMaster() > 0) masteryButton.hide();
    return d1
}

function refreshRecipeMasteryAmt(recipe) {
    if (Inventory.sideInspect !== null && Inventory.sideInspect.item.id === recipe.id) resetMasteryButton(recipe);
    if (recipe.canMaster() === 0) {
        var masteryCost = recipe.masteryCost();
        $("#rmb" + recipe.id).show();
        $("#rmr" + recipe.id).hide();
        $("#rmr2" + recipe.id).html("".concat(ResourceManager.materialIcon(masteryCost.id), " ").concat(masteryCost.amt));
        return
    }
    $("#rmb" + recipe.id).hide();
    $("#rmr" + recipe.id).html(displayText("merchant_recipe_mastery_craft_remaining").replace("{0}", recipe.canMaster()))
}
var $moType = $("#moType");
var $moOptions = $("#moOptions");
var $manualOrderTab = $("#manualOrderTab");

function manualOrder() {
    var uniqueID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Inventory.lastManual;
    var order = Merchant.orderByUid(uniqueID);
    if (!order) return;
    Inventory.lastManual = uniqueID;
    $moType.empty().html(createOrderCard(order, true));
    $moOptions.empty();
    Inventory.betterThan(uniqueID).forEach(function (item) {
        createManualTurnin(item).appendTo($moOptions)
    });
    $tabcontent.hide();
    $manualOrderTab.show()
}

function createManualTurnin(container) {
    var d = $("<div/>").addClass("merchantManualItem").addClass("R" + container.rarity);
    $("<div/>").addClass("itemName").html(container.picName()).appendTo(d);
    $("<div/>").addClass("itemRarity RT".concat(container.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[container.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(d);
    $("<div/>").addClass("itemLevel").html(container.itemLevel()).appendTo(d);
    var d1 = $("<div/>").addClass("manualOrderButtons").appendTo(d);
    $("<div/>").addClass("manualOrderSubmit actionButtonCard").data("cid", container.uniqueID()).html("Submit").appendTo(d1);
    return d
}
$closeShopOrder.on("click", function (e) {
    e.preventDefault();
    $tabcontent.hide();
    $merchantTab.show();
    $merchantTabOrder.show();
    refreshShopOrder()
});
$merchantOrderLocations.on("click", ".orderManual", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var uid = $(e.currentTarget).data("uid");
    manualOrder(uid)
});
$moOptions.on("click", ".manualOrderSubmit", function (e) {
    e.preventDefault();
    var cid = $(e.currentTarget).data("cid");
    var finishedOrder = Merchant.manualSubmit(cid);
    if (finishedOrder) openTab("merchant_order");
    else manualOrder()
});
$merchantList.on("click", "#merchantOrderTab", function (e) {
    e.preventDefault();
    openTab("merchant_order")
});
$merchantList.on("click", "#merchantMasteryTab", function (e) {
    e.preventDefault();
    openTab("merchant_mastery")
});
$merchantOrders.on("click", ".orderRecipeBuyChoice", function (e) {
    e.preventDefault();
    var ID = $(e.currentTarget).data("rid");
    Merchant.gainRecipe(ID);
    refreshShopOrder();
    refreshRecipeFilters()
});
$merchantMastery.on("click", ".recipeMasteryViewButton", function (e) {
    e.preventDefault();
    var ID = $(e.currentTarget).data("rid");
    var recipe = recipeList.recipes.filter(function (r) {
        return r.id === ID
    })[0];
    var searchString = recipe.name;
    openTab("recipes");
    invokeSearch(searchString)
});
$merchantMastery.on("click", ".recipeMasteryGuildButton", function (e) {
    e.preventDefault();
    var rid = $(e.currentTarget).data("rid");
    recipeList.attemptMastery(rid)
});
$merchantOrderLocations.on("click", ".orderCard", function (e) {
    e.preventDefault();
    destroyTooltip();
    var uid = $(e.currentTarget).data("uid");
    Merchant.submitItem(uid);
    refreshOrderRemaining(uid)
});

function refreshOrderRemaining(uid) {
    var order = Merchant.orderByUid(uid);
    if (order === undefined) return;
    $("#itsr" + uid).html("".concat(formatToUnits(order.left(), 2), " Left"))
}
$merchantOrderLocations.on("click", ".orderCraft", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var itemID = $(e.currentTarget).attr("id");
    recipeList.idToItem(itemID).autoSell = "None";
    actionSlotManager.addSlot(itemID)
});
$merchantOrderLocations.on("click", ".orderACToggle", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var uniqueID = $(e.currentTarget).data("uid");
    var toggle = Merchant.toggleAC(uniqueID);
    Merchant.acDefault = toggle;
    if (toggle) $(e.currentTarget).addClass("acEnable").html(miscIcons.toggleOn);
    else $(e.currentTarget).removeClass("acEnable").html(miscIcons.toggleOff);
    $("<span/>").addClass("orderACtext").html(displayText("merchant_order_auto_contribute")).appendTo($(e.currentTarget));
    refreshOrderInvCount();
    refreshInventoryPlaces()
});
$merchantOrderLocations.on("click", ".orderForge", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var uniqueID = $(e.currentTarget).data("uid");
    Merchant.attemptForge(uniqueID)
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var Shop = {
    perks: [],
    addPerk: function addPerk(reward) {
        this.perks.push(reward)
    },
    createSave: function createSave() {
        var save = {};
        save.perks = [];
        this.perks.forEach(function (p) {
            return save.perks.push(p.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        if (save.perks === undefined) return;
        save.perks.forEach(function (perk) {
            var perka = _this.idToPerk(perk.id);
            if (perka === undefined) return;
            perka.loadSave(perk)
        })
    },
    clearProgress: function clearProgress() {
        this.perks.forEach(function (p) {
            return p.clearProgress()
        })
    },
    idToPerk: function idToPerk(id) {
        return this.perks.find(function (r) {
            return r.id === id
        })
    },
    buyPerk: function buyPerk(id) {
        var perk = this.idToPerk(id);
        if (ResourceManager.materialAvailable("M001") < perk.goldCost) {
            ToastManager.renderToast("perk_cost");
            return
        }
        ResourceManager.deductMoney(perk.goldCost);
        perk.purchase();
        refreshShop();
        refreshProgress();
        tabHide()
    },
    perkCount: function perkCount() {
        return this.perks.filter(function (p) {
            return p.purchased
        }).length
    },
    perkMaxCount: function perkMaxCount() {
        return this.perks.length
    },
    perksByType: function perksByType(type) {
        return this.perks.filter(function (p) {
            return p.category === type
        }).sort(function (a, b) {
            return a.order - b.order
        })
    },
    nextUnlocks: function nextUnlocks(type) {
        var notPurchased = this.perks.filter(function (p) {
            return p.category === type && !p.purchased && p.availableThisRun()
        }).sort(function (a, b) {
            return a.order - b.order
        });
        return {
            canPurchase: notPurchased[0],
            nextUp: notPurchased[1]
        }
    },
    boughtPerks: function boughtPerks() {
        return this.perks.filter(function (p) {
            return p.purchased
        })
    },
    alreadyPurchased: function alreadyPurchased(perkID) {
        var perk = this.idToPerk(perkID);
        return perk.alreadyPurchased()
    },
    boughtPerkSubtype: function boughtPerkSubtype(subtype) {
        return this.perks.filter(function (p) {
            return p.purchased && p.subtype === subtype
        })
    },
    slotsPurchased: function slotsPurchased() {
        return 1 + this.perks.filter(function (p) {
            return p.purchased && p.type === "order"
        }).length
    }
};
var Perk = function () {
    function Perk(props) {
        _classCallCheck(this, Perk);
        Object.assign(this, props);
        this.purchased = false
    }
    _createClass(Perk, [{
        key: "canBuy",
        value: function canBuy() {
            return ResourceManager.materialAvailable("M001") >= this.goldCost
        }
    }, {
        key: "purchase",
        value: function purchase() {
            this.purchased = true;
            if (this.type === "hero") HeroManager.gainHero(this.subtype);
            if (this.type === "worker") {
                refreshSideWorkers();
                refreshRecipeFilters();
                recipeList.canCraft();
                refreshProgress()
            }
            if (this.id === "AL2001") showSidebarHeadings();
            if (this.type === "autosell") actionSlotManager.showAutoSell();
            if (this.type === "craft") actionSlotManager.upgradeSlot();
            if (this.type === "synth" && this.subtype === "open") TownManager.buildingPerk("synth");
            if (this.type === "cauldron" && this.subtype === "open") TownManager.buildingPerk("fusion");
            if (this.type === "forge" && this.subtype === "open") TownManager.buildingPerk("forge");
            if (this.type === "fortune" && this.subtype === "open") TownManager.buildingPerk("fortune");
            if (this.type === "tinker" && this.subtype === "open") TownManager.buildingPerk("tinker");
            if (this.type === "museum" && this.subtype === "open") TownManager.buildingPerk("museum");
            if (this.type === "milestone" && this.subtype === "open") TownManager.buildingPerk("milestone");
            if (this.type === "expedition" && this.subtype === "open") TownManager.buildingPerk("expedition");
            if (this.type === "rune" && this.subtype === "open") TownManager.buildingPerk("rune");
            if (this.type === "bank") refreshInventoryPlaces()
        }
    }, {
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.purchased = this.purchased;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.purchased = save.purchased
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.purchased = false
        }
    }, {
        key: "alreadyPurchased",
        value: function alreadyPurchased() {
            return this.purchased
        }
    }, {
        key: "availableForPurchase",
        value: function availableForPurchase() {
            if (this.unlockReq === null) return true;
            return DungeonManager.beaten(this.unlockReq)
        }
    }, {
        key: "availableThisRun",
        value: function availableThisRun() {
            return true
        }
    }]);
    return Perk
}();
var $purchasePerks = $("#purchasePerks");
var $boughtPerks = $("#boughtPerks");
var $purchasedPerks = $("#purchasedPerks");
var shopDivs = ["Crafting", "Dungeon", "Town"];

function refreshShop() {
    $purchasePerks.empty();
    var perksAvailableHeader = $("<div/>").addClass("contentHeader").appendTo($purchasePerks);
    var perksAvailableHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(perksAvailableHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_market_perks_available_title")).appendTo(perksAvailableHeadingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_market_perks_available_desc")).appendTo(perksAvailableHeadingDetails);
    var perksAvailableCardsContainer = $("<div/>").addClass("perksAvailableCardsContainer").appendTo($purchasePerks);
    shopDivs.forEach(function (type) {
        var perks = Shop.nextUnlocks(type);
        if (perks.canPurchase === undefined) return;
        perksAvailableCardsContainer.append(createALperk(perks.canPurchase, type))
    });
    var boughtPerks = Shop.boughtPerks();
    if (boughtPerks.length > 0) {
        $purchasedPerks.show();
        $boughtPerks.empty();
        var perksPurchasedHeader = $("<div/>").addClass("contentHeader").appendTo($boughtPerks);
        var perksPurchasedHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(perksPurchasedHeader);
        $("<div/>").addClass("headingTitle").html(displayText("header_market_perks_purchased_title")).appendTo(perksPurchasedHeadingDetails);
        $("<div/>").addClass("headingDescription").html(displayText("header_market_perks_purchased_desc")).appendTo(perksPurchasedHeadingDetails);
        var perksPurchasedCardsContainer = $("<div/>").addClass("perksPurchasedCardsContainer").appendTo($boughtPerks);
        boughtPerks.forEach(function (perk) {
            createPurchasedperk(perk).appendTo(perksPurchasedCardsContainer)
        })
    } else $purchasedPerks.hide()
}

function createALperk(perk, name) {
    var perkCount = Shop.perksByType(name).length - Shop.perksByType(name).filter(function (perk) {
        return perk.purchased
    }).length;
    var d1 = $("<div/>").addClass("alPerk");
    $("<div/>").addClass("alTitle").html(perk.title).appendTo(d1);
    $("<div/>").addClass("alSection").html("".concat(name, " Perk")).appendTo(d1);
    var perkImage = $("<div/>").addClass("alImage").html(perk.icon).appendTo(d1);
    if (perkCount > 1) $("<div/>").addClass("alPerkCount tooltip").attr({
        "data-tooltip": "perks_remaining"
    }).html("+".concat(perkCount - 1)).appendTo(perkImage);
    $("<div/>").addClass("alDesc").html(perk.description).appendTo(d1);
    if (perk.purchased) {
        return d1.addClass("perkPurchased")
    }
    if (!perk.availableForPurchase()) {
        $("<div/>").addClass("alBossBeat").html("Beat next boss to unlock!").appendTo(d1);
        return d1
    }
    if (perk.type === "quest" && TownManager.idToBuilding("TB010").status < 2) {
        $("<div/>").addClass("alBossBeat").html(displayText("need_expedition_bldg")).appendTo(d1);
        return d1
    }
    var d5 = $("<div/>").addClass("alPerkBuy actionButtonCardCost").data("pid", perk.id).appendTo(d1);
    if (!perk.canBuy()) d5.addClass("cannotAfford");
    else d5.removeClass("cannotAfford");
    $("<div/>").addClass("actionButtonCardText").html(displayText("market_perk_purchase_button")).appendTo(d5);
    $("<div/>").addClass("actionButtonCardValue tooltip").attr({
        "data-tooltip": "gold_value",
        "data-tooltip-value": formatWithCommas(perk.goldCost)
    }).html("".concat(miscIcons.gold, " ").concat(formatToUnits(perk.goldCost, 2))).appendTo(d5);
    return d1
}

function createPurchasedperk(perk) {
    var d1 = $("<div/>").addClass("alPurchasedPerk tooltip").attr({
        "data-tooltip": "perk_desc",
        "data-tooltip-value": perk.id
    });
    $("<div/>").addClass("purchasedPerkTitle").html(perk.title).appendTo(d1);
    $("<div/>").addClass("alSection").html("".concat(perk.category, " Perk")).appendTo(d1);
    $("<div/>").addClass("purchasedPerkImage").html(perk.icon).appendTo(d1);
    return d1
}
$purchasePerks.on("click", ".alPerkBuy", function (e) {
    e.preventDefault();
    destroyTooltip();
    var perkid = $(e.currentTarget).data("pid");
    Shop.buyPerk(perkid)
});
"use strict";

function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}

function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
        return
    }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break
        }
    } catch (err) {
        _d = true;
        _e = err
    } finally {
        try {
            if (!_n && _i["return"] != null) _i["return"]()
        } finally {
            if (_d) throw _e
        }
    }
    return _arr
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr
}
var $museumBuilding = $("#museumBuilding");
var $museumRecipeTypes = $("#museumRecipeTypes");
var $museumRecipeContributions = $("#museumRecipeContributions");
var $museumRewards = $("#museumRewards");
var $museumInv = $("#museumInv");
var $museumTop = $(".museumTop");
var Museum = {
    lvl: 1,
    tabView: null,
    itemInspect: null,
    createSave: function createSave() {
        var save = {};
        return save
    },
    loadSave: function loadSave(save) {},
    checkSubmit: function checkSubmit(container, multipleTiers) {
        if (container.isTransformed() === "1" || container.hasRune()) return true;
        var item = recipeList.idToItem(container.id);
        if (!multipleTiers) return item.museum[container.rarity][container.sharp];
        for (var i = 0; i < 10 - container.sharp; i++) {
            if (item.museum[container.rarity][container.sharp + 1]) continue;
            var needed = bloopSmith.getSmithCostMulti(container, container.sharp + 1);
            return ResourceManager.materialAvailable("M001") < needed.gold || ResourceManager.materialAvailable(needed.resType) < needed.resAmt
        }
        return true
    },
    possibleInventoryDonations: function possibleInventoryDonations() {
        var _this = this;
        return Inventory.inv.filter(function (i) {
            return i.item.type !== "Trinkets"
        }).filter(function (i) {
            return !_this.checkSubmit(i)
        })
    },
    completeByType: function completeByType(type) {
        var museumData = recipeList.filterByType(type).map(function (r) {
            return r.museum
        });
        return museumData.flat().flat().filter(Boolean).length
    },
    donationCount: function donationCount() {
        return recipeList.recipes.filter(function (r) {
            return r.recipeType === "normal" && r.type !== "Trinkets"
        }).map(function (r) {
            return r.museum
        }).flat().flat().filter(Boolean).length
    },
    donationMax: function donationMax() {
        return recipeList.recipes.filter(function (r) {
            return r.recipeType === "normal" && r.type !== "Trinkets"
        }).length * 11 * 4
    },
    museumData: function museumData(itemID) {
        return recipeList.idToItem(itemID).museum
    },
    isCompleted: function isCompleted(itemID) {
        return Museum.museumData(itemID).every(function (rarity) {
            return rarity.every(function (turnin) {
                return turnin === true
            })
        })
    },
    forceDonate: function forceDonate(recipeID, rarity, sharp) {
        if (recipeList.idToItem(recipeID).museum[rarity][sharp]) return;
        var firstContainer = Inventory.findContainer(recipeID + "_" + rarity + "_" + sharp + "_0_0");
        if (firstContainer !== undefined) {
            var container = Inventory.grabFromInventory(recipeID + "_" + rarity + "_" + sharp + "_0_0", 1, true);
            recipeList.idToItem(container.id).museum[container.rarity][container.sharp] = true;
            refreshCraftTimes();
            refreshMuseumRecipeCard(recipeList.idToItem(recipeID));
            museumInspect();
            return
        }
        if (sharp === "0") return;
        for (var i = parseInt(sharp) - 1; i >= 0; i--) {
            var uniqueid = recipeID + "_" + rarity + "_" + i + "_0_0";
            var _container = Inventory.findContainer(uniqueid);
            if (_container === undefined) continue;
            var needed = bloopSmith.getSmithCostMulti(_container, parseInt(sharp));
            var params = bloopSmith.getSmithCost(_container, SmithType.ENHANCE);
            if (ResourceManager.materialAvailable("M001") < needed.gold) {
                ToastManager.renderToast("cant_afford_smith_gold");
                return
            }
            if (ResourceManager.materialAvailable(needed.resType) < needed.resAmt) {
                ToastManager.renderToast("cant_afford_smith_material", ResourceManager.idToMaterial(params.resType).name, needed.resAmt - ResourceManager.materialAvailable(params.resType));
                return
            }
            ResourceManager.deductMoney(needed.gold);
            ResourceManager.addMaterial(needed.resType, -needed.resAmt);
            Inventory.grabFromInventory(uniqueid, 1, false);
            recipeList.idToItem(recipeID).museum[parseInt(rarity)][parseInt(sharp)] = true;
            refreshCraftTimes();
            refreshMuseumRecipeCard(recipeList.idToItem(recipeID));
            museumInspect()
        }
    },
    donate: function donate(uniqueid) {
        var check = Inventory.findContainer(uniqueid);
        if (check === undefined || this.checkSubmit(check)) {
            ToastManager.renderToast("already_donated_museum");
            return
        }
        var container = Inventory.grabFromInventory(uniqueid, 1, true);
        recipeList.idToItem(container.id).museum[container.rarity][container.sharp] = true;
        refreshCraftTimes();
        refreshMuseumRecipeCard(recipeList.idToItem(container.id));
        museumInspect()
    },
    donateUp: function donateUp(uniqueID) {
        var check = Inventory.findContainer(uniqueID);
        var container = Inventory.findContainer(uniqueID);
        if (!this.checkSubmit(check)) {
            Inventory.grabFromInventory(uniqueID, 1, true);
            recipeList.idToItem(container.id).museum[container.rarity][container.sharp] = true;
            refreshCraftTimes();
            refreshMuseumRecipeCard(recipeList.idToItem(container.id));
            museumInspect();
            return
        }
        for (var i = container.sharp; i < 10; i++) {
            if (!recipeList.idToItem(container.id).museum[container.rarity][i]) {
                var needed = bloopSmith.getSmithCostMulti(container, +i);
                var params = bloopSmith.getSmithCost(container, SmithType.ENHANCE);
                if (ResourceManager.materialAvailable("M001") < needed.gold) {
                    ToastManager.renderToast("cant_afford_smith_gold");
                    return
                }
                if (ResourceManager.materialAvailable(needed.resType) < needed.resAmt) {
                    ToastManager.renderToast("cant_afford_smith_material", ResourceManager.idToMaterial(params.resType).name, needed.resAmt - ResourceManager.materialAvailable(params.resType));
                    return
                }
                ResourceManager.deductMoney(needed.gold);
                ResourceManager.addMaterial(needed.resType, -needed.resAmt);
                Inventory.grabFromInventory(uniqueID, 1, true);
                recipeList.idToItem(container.id).museum[container.rarity][i] = true;
                refreshCraftTimes();
                refreshMuseumRecipeCard(recipeList.idToItem(container.id));
                museumInspect();
                return
            }
        }
        ToastManager.renderToast("already_donated_museum")
    },
    commonCount: function commonCount(recipeID) {
        var type = ItemType.includes(recipeID) ? recipeID : recipeList.idToItem(recipeID).type;
        var items = recipeList.filterByType(type);
        return flattenArray(items.map(function (i) {
            return i.museum[0]
        })).filter(function (i) {
            return i
        }).length
    },
    goodCount: function goodCount(recipeID) {
        var type = ItemType.includes(recipeID) ? recipeID : recipeList.idToItem(recipeID).type;
        var items = recipeList.filterByType(type);
        return flattenArray(items.map(function (i) {
            return i.museum[1]
        })).filter(function (i) {
            return i
        }).length
    },
    greatCount: function greatCount(recipeID) {
        var type = ItemType.includes(recipeID) ? recipeID : recipeList.idToItem(recipeID).type;
        var items = recipeList.filterByType(type);
        return flattenArray(items.map(function (i) {
            return i.museum[2]
        })).filter(function (i) {
            return i
        }).length
    },
    epicCount: function epicCount(recipeID) {
        var type = ItemType.includes(recipeID) ? recipeID : recipeList.idToItem(recipeID).type;
        var items = recipeList.filterByType(type);
        return flattenArray(items.map(function (i) {
            return i.museum[3]
        })).filter(function (i) {
            return i
        }).length
    },
    craftTime: function craftTime(recipeID) {
        var completes = Math.floor(this.commonCount(recipeID) / 11);
        return 1 - .04 * completes
    },
    goodChance: function goodChance(recipeID) {
        var completes = Math.floor(this.goodCount(recipeID) / 11);
        return 1 + .2 * completes
    },
    greatChance: function greatChance(recipeID) {
        var completes = Math.floor(this.greatCount(recipeID) / 11);
        return 1 + .2 * completes
    },
    epicChance: function epicChance(recipeID) {
        var completes = Math.floor(this.epicCount(recipeID) / 11);
        return 1 + .2 * completes
    }
};

function initiateMuseumBldg() {
    $museumBuilding.show();
    if (Museum.tabView === null) refreshMuseumTop();
    else showMuseumType(Museum.tabView);
    refreshMuseumInv()
}

function refreshMuseumTop() {
    Museum.tabView === null;
    $museumTop.hide();
    $museumRecipeTypes.empty().show();
    Museum.view = "main";
    var museumItemTypesHeader = $("<div/>").addClass("contentHeader").appendTo($museumRecipeTypes);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(museumItemTypesHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_museum_item_types_title")).appendTo(headingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_museum_item_types_desc")).appendTo(headingDetails);
    var museumItemTypesContainer = $("<div/>").addClass("museumItemTypesContainer").appendTo($museumRecipeTypes);
    ItemType.sort().forEach(function (type) {
        if (type === "Trinkets") return;
        var d = $("<div/>").addClass("museumTypeDiv").data("recipeType", type).appendTo(museumItemTypesContainer);
        $("<div/>").addClass("museumTypeName").html(displayText("type_".concat(type))).appendTo(d);
        var percent = (Museum.completeByType(type) / 440 * 100).toFixed(1) + "%";
        $("<div/>").addClass("museumTypeComplete").html(percent).appendTo(d)
    })
}

function showMuseumType(type, skipAnimation) {
    Museum.tabView = type;
    $museumTop.hide();
    $museumRecipeContributions.empty().show();
    Museum.view = type;
    var museumContributionsActions = $("<div/>").addClass("museumContributionsActions").appendTo($museumRecipeContributions);
    var backButton = $("<div/>").addClass("museumBackButton actionButton").html('<i class="fas fa-arrow-left"></i>').appendTo(museumContributionsActions);
    $("<div/>").addClass("backButtonText").html(displayText("museum_item_types_back_button")).appendTo(backButton);
    var museumTypeCycle = $("<div/>").addClass("museumTypeCycleContainer").appendTo(museumContributionsActions);
    $("<div/>").addClass("museumTypeCycle museumTypeCycleLeft").html('<i class="fas fa-arrow-left"></i>').appendTo(museumTypeCycle);
    $("<div/>").addClass("museumTypeCycleName").html(type).appendTo(museumTypeCycle);
    $("<div/>").addClass("museumTypeCycle museumTypeCycleRight").data("cycle", true).html('<i class="fas fa-arrow-right"></i>').appendTo(museumTypeCycle);
    var museumRewardsHeader = $("<div/>").addClass("contentHeader").appendTo($museumRecipeContributions);
    var museumRewardsHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(museumRewardsHeader);
    $("<div/>").addClass("headingTitle").html(displayText("museum_reward_header").replace("{0}", type)).appendTo(museumRewardsHeadingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("museum_reward_description").replace("{0}", type)).appendTo(museumRewardsHeadingDetails);
    var e = $("<div/>").addClass("museumRewards").appendTo($museumRecipeContributions);
    var e1 = $("<div/>").addClass("museumRewardDiv").appendTo(e);
    var e1a = $("<div/>").addClass("museumRewardDetails").appendTo(e1);
    $("<div/>").addClass("museumRewardName").html(displayText("museum_reward_craft_time_redux_title")).appendTo(e1a);
    $("<div/>").addClass("museumRewardDesc").html("".concat(Math.floor(Museum.craftTime(type) * 100), "%")).appendTo(e1a);
    $("<div/>").addClass("museumRewardNext").html(displayText("museum_reward_next").replace("{0}", "".concat(11 - Museum.commonCount(type) % 11))).appendTo(e1);
    var e2 = $("<div/>").addClass("museumRewardDiv").appendTo(e);
    var e2a = $("<div/>").addClass("museumRewardDetails").appendTo(e2);
    $("<div/>").addClass("museumRewardName").html(displayText("museum_reward_craft_good_rate_title")).appendTo(e2a);
    $("<div/>").addClass("museumRewardDesc").html("".concat(Math.floor(Museum.goodChance(type) * 100), "%")).appendTo(e2a);
    $("<div/>").addClass("museumRewardNext").html(displayText("museum_reward_next").replace("{0}", "".concat(11 - Museum.goodCount(type) % 11))).appendTo(e2);
    var e3 = $("<div/>").addClass("museumRewardDiv").appendTo(e);
    var e3a = $("<div/>").addClass("museumRewardDetails").appendTo(e3);
    $("<div/>").addClass("museumRewardName").html(displayText("museum_reward_craft_great_rate_title")).appendTo(e3a);
    $("<div/>").addClass("museumRewardDesc").html("".concat(Math.floor(Museum.greatChance(type) * 100), "%")).appendTo(e3a);
    $("<div/>").addClass("museumRewardNext").html(displayText("museum_reward_next").replace("{0}", "".concat(11 - Museum.greatCount(type) % 11))).appendTo(e3);
    var e4 = $("<div/>").addClass("museumRewardDiv").appendTo(e);
    var e4a = $("<div/>").addClass("museumRewardDetails").appendTo(e4);
    $("<div/>").addClass("museumRewardName").html(displayText("museum_reward_craft_epic_rate_title")).appendTo(e4a);
    $("<div/>").addClass("museumRewardDesc").html("".concat(Math.floor(Museum.epicChance(type) * 100), "%")).appendTo(e4a);
    $("<div/>").addClass("museumRewardNext").html(displayText("museum_reward_next").replace("{0}", "".concat(11 - Museum.epicCount(type) % 11))).appendTo(e4);
    var museumContributionsHeader = $("<div/>").addClass("contentHeader").appendTo($museumRecipeContributions);
    var museumContributionsHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(museumContributionsHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_museum_contributions_title")).appendTo(museumContributionsHeadingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_museum_contributions_desc")).appendTo(museumContributionsHeadingDetails);
    var museumContributionsList = $("<div/>").addClass("museumContributionsList").appendTo($museumRecipeContributions);
    recipeList.filterByType(type).forEach(function (recipe) {
        var d = $("<div/>").data("recipeID", recipe.id).addClass("museumRecipeSelection").prependTo(museumContributionsList);
        $("<div/>").addClass("museumRecipeImage").html(recipe.itemPicName()).appendTo(d);
        var total = flattenArray(recipe.museum).length;
        var current = flattenArray(recipe.museum).filter(function (r) {
            return r
        }).length;
        var progress = $("<div/>").addClass("museumRecipeProgress").appendTo(d);
        if (current !== total) $("<div/>").addClass("museumRecipeProgressText").html("".concat(current, " / ").concat(total, " Contributed")).appendTo(progress);
        else {
            progress.addClass("museumRecipeCompleted");
            $("<div/>").addClass("museumRecipeProgressIcon").html(miscIcons.checkmark).appendTo(progress);
            $("<div/>").addClass("museumRecipeProgressText").html(displayText("museum_contribution_completed_title")).appendTo(progress)
        }
    });
    if (skipAnimation) {
        backButton.css("animation", "none");
        museumTypeCycle.css("animation", "none");
        museumRewardsHeader.css("animation", "none");
        $(".museumRewardDiv").css("animation", "none");
        museumContributionsHeader.css("animation", "none")
    }
}

function generateContributionsList(recipe, skipAnimation) {
    $museumRecipeContributions.empty();
    Museum.view = "itemInspect";
    Museum.itemInspect = recipe;
    var museumContributionsActions = $("<div/>").addClass("museumContributionsActions").appendTo($museumRecipeContributions);
    var backButton = $("<div/>").addClass("museumRecipeBackButton actionButton").html('<i class="fas fa-arrow-left"></i>').appendTo(museumContributionsActions);
    $("<div/>").addClass("backButtonText").html("Back to ".concat(recipe.type)).appendTo(backButton);
    var museumTypeCycle = $("<div/>").addClass("museumTypeCycleContainer").appendTo(museumContributionsActions);
    $("<div/>").addClass("museumTypeCycle museumRecipeCycleLeft").html('<i class="fas fa-arrow-left"></i>').appendTo(museumTypeCycle);
    $("<div/>").addClass("museumTypeCycleName").html(recipe.name).appendTo(museumTypeCycle);
    $("<div/>").addClass("museumTypeCycle museumRecipeCycleRight").data("cycle", true).html('<i class="fas fa-arrow-right"></i>').appendTo(museumTypeCycle);
    generateMuseumSpecificDonation(recipe, skipAnimation).appendTo($museumRecipeContributions);
    if (skipAnimation) {
        backButton.css("animation", "none");
        museumTypeCycle.css("animation", "none")
    }
}

function generateMuseumSpecificDonation(recipe, skipAnimation) {
    if (recipe === undefined) return;
    var museumContributionsList = $("<div/>").addClass("museumContributionsListRecipe");
    var d = $("<div/>").addClass("museumRecipeDiv").addClass("ctrlClickItem").data("rid", recipe.id).appendTo(museumContributionsList);
    if (skipAnimation) d.css("animation", "none");
    $("<div/>").addClass("museumRecipeImage").html(recipe.itemPicName()).appendTo(d);
    var d1 = $("<div/>").addClass("museumRecipeCon").appendTo(d);
    recipe.museum.forEach(function (rarity, j) {
        var d1a = $("<div/>").addClass("museumRecipeConItem").appendTo(d1);
        $("<div/>").addClass("museumRecipeRarity RT".concat(j, " tooltip")).attr({
            "data-tooltip": "museum_rarity_".concat(rarities[j].toLowerCase())
        }).html(miscIcons.rarity).appendTo(d1a);
        rarity.forEach(function (sharp, i) {
            var d2 = $("<div/>").addClass("museumRecipe R".concat(j)).data({
                recipe: recipe.id,
                rarity: j,
                sharp: i
            }).appendTo(d1a);
            if (sharp) d2.addClass("museumRecipeEntryComplete").html(miscIcons.checkmark);
            else d2.html("<span>".concat(miscIcons.enhancement, "</span> ").concat(i))
        })
    });
    return museumContributionsList
}
$museumRecipeContributions.on("click", ".museumRecipeSelection", function (e) {
    var id = $(e.currentTarget).data("recipeID");
    var recipe = recipeList.idToItem(id);
    generateContributionsList(recipe)
});
$museumRecipeContributions.on("click", ".museumRecipe", function (e) {
    e.preventDefault();
    var recipe = $(e.currentTarget).data("recipe");
    var rarity = $(e.currentTarget).data("rarity");
    var sharp = $(e.currentTarget).data("sharp");
    Museum.forceDonate(recipe, rarity, sharp)
});
$museumRecipeContributions.on("click", ".museumRecipe", function (e) {
    e.preventDefault();
    var recipe = $(e.currentTarget).data("recipe");
    var rarity = $(e.currentTarget).data("rarity");
    var sharp = $(e.currentTarget).data("sharp");
    Museum.forceDonate(recipe, rarity, sharp);
    var recipeItem = recipeList.idToItem(recipe);
    if (recipeItem === undefined) return;
    generateContributionsList(recipeItem, true)
});

function museumRecipeCycleLeft() {
    var recipe = Museum.itemInspect;
    var type = recipe.type;
    var items = recipeList.recipes.filter(function (recipe) {
        return recipe.type === type
    });
    var currentIndex = items.findIndex(function (r) {
        return r === Museum.itemInspect
    });
    var newIndex = 0;
    if (currentIndex > 0) newIndex = currentIndex - 1;
    else newIndex = items.length - 1;
    Museum.itemInspect = items[newIndex]
}

function museumRecipeCycleRight() {
    var recipe = Museum.itemInspect;
    var type = recipe.type;
    var items = recipeList.recipes.filter(function (recipe) {
        return recipe.type === type
    });
    var currentIndex = items.findIndex(function (r) {
        return r === Museum.itemInspect
    });
    var newIndex = 0;
    if (currentIndex < items.length - 1) newIndex = currentIndex + 1;
    Museum.itemInspect = items[newIndex]
}
$museumRecipeContributions.on("click", ".museumRecipeCycleLeft", function (e) {
    museumRecipeCycleLeft();
    generateContributionsList(Museum.itemInspect, true)
});
$museumRecipeContributions.on("click", ".museumRecipeCycleRight", function (e) {
    museumRecipeCycleRight();
    generateContributionsList(Museum.itemInspect, true)
});

function museumTypeCycleLeft() {
    var ItemTypes = ItemType.filter(function (type) {
        return type !== "Trinkets"
    });
    var currentIndex = ItemTypes.findIndex(function (type) {
        return type === Museum.view
    });
    var newIndex = 0;
    if (currentIndex > 0) newIndex = currentIndex - 1;
    else newIndex = ItemTypes.length - 1;
    Museum.view = ItemTypes[newIndex]
}

function museumTypeCycleRight() {
    var ItemTypes = ItemType.filter(function (type) {
        return type !== "Trinkets"
    });
    var currentIndex = ItemTypes.findIndex(function (type) {
        return type === Museum.view
    });
    var newIndex = 0;
    if (currentIndex < ItemTypes.length - 1) newIndex = currentIndex + 1;
    Museum.view = ItemTypes[newIndex]
}
$museumRecipeContributions.on("click", ".museumTypeCycleLeft", function (e) {
    museumTypeCycleLeft();
    showMuseumType(Museum.view, true)
});
$museumRecipeContributions.on("click", ".museumTypeCycleRight", function (e) {
    museumTypeCycleRight();
    showMuseumType(Museum.view, true)
});

function refreshMuseumInv() {
    $museumInv.empty();
    var donations = Museum.possibleInventoryDonations();
    var museumDonationsHeader = $("<div/>").addClass("contentHeader").appendTo($museumInv);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(museumDonationsHeader);
    $("<div/>").addClass("headingTitle").html(displayText("header_museum_donations_title")).appendTo(headingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("header_museum_donations_desc")).appendTo(headingDetails);
    var museumDonationCardsContainer = $("<div/>").addClass("museumDonationCardsContainer").appendTo($museumInv);
    if (donations.length === 0) {
        $("<div/>").addClass("emptyContentMessage").html(displayText("museum_no_donations_message")).appendTo($museumInv);
        return
    }
    donations.forEach(function (container) {
        createMuseumCard(container).appendTo(museumDonationCardsContainer)
    })
}

function createMuseumCard(container) {
    var d = $("<div/>").addClass("museumItem").addClass("R" + container.rarity);
    $("<div/>").addClass("itemName").html(container.picName()).appendTo(d);
    $("<div/>").addClass("itemRarity RT".concat(container.rarity, " tooltip")).attr({
        "data-tooltip": "rarity_".concat(rarities[container.rarity].toLowerCase())
    }).html(miscIcons.rarity).appendTo(d);
    $("<div/>").addClass("itemLevel").html(container.itemLevel()).appendTo(d);
    var itemProps = $("<div/>").addClass("equipStats").appendTo(d);
    for (var _i = 0, _Object$entries = Object.entries(container.itemStat(false)); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            stat = _Object$entries$_i[0],
            val = _Object$entries$_i[1];
        if (val === 0) continue;
        $("<div/>").addClass("gearStat tooltip").attr("data-tooltip", stat).html("".concat(miscIcons[stat], ' <span class="statValue">').concat(val, "</span>")).appendTo(itemProps)
    }
    var actionBtns = $("<div/>").addClass("museumButtons").appendTo(d);
    $("<div/>").addClass("actionButtonCard museumDonate").data("uid", container.uniqueID()).html(displayText("museum_donations_donate_button")).appendTo(actionBtns);
    return d
}
$museumRecipeTypes.on("click", ".museumTypeDiv", function (e) {
    e.preventDefault();
    var type = $(e.currentTarget).data("recipeType");
    showMuseumType(type)
});
$museumRecipeContributions.on("click", ".museumBackButton", function (e) {
    e.preventDefault();
    Museum.tabView = null;
    refreshMuseumTop()
});
$museumRecipeContributions.on("click", ".museumRecipeBackButton", function (e) {
    e.preventDefault();
    var recipe = Museum.itemInspect;
    Museum.tabView = recipe.type;
    showMuseumType(Museum.tabView)
});
$museumInv.on("click", ".museumDonate", function (e) {
    var uniqueid = $(e.target).data("uid");
    Museum.donate(uniqueid);
    if (Museum.view === "main") refreshMuseumTop();
    else if (Museum.view === "rewards") showMuseumRewards();
    else if (Museum.view === "itemInspect") generateContributionsList(Museum.itemInspect, true);
    else showMuseumType(Museum.view);
    refreshMuseumInv()
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var ExpeditionManager = {
    expeditions: [],
    quests: [],
    partyBuild: [],
    subScreen: "main",
    count: 0,
    addExpedition: function addExpedition(party) {
        var expedition = new Expedition(this.count);
        this.count += 1;
        expedition.assignParty(party);
        this.expeditions.push(expedition)
    },
    lockParty: function lockParty() {
        this.addExpedition(this.partyBuild);
        this.partyBuild = []
    },
    createSave: function createSave() {
        var save = {};
        save.expeditions = [];
        this.expeditions.forEach(function (e) {
            save.expeditions.push(e.createSave())
        });
        save.quests = [];
        this.quests.forEach(function (q) {
            save.quests.push(q.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.expeditions.forEach(function (expedition) {
            var e = new Expedition(_this.count);
            _this.count += 1;
            e.loadSave(expedition);
            _this.expeditions.push(e)
        });
        if (save.quests !== undefined) {
            save.quests.forEach(function (savequest) {
                var quest = _this.idToQuest(savequest.id);
                quest.loadSave(savequest)
            })
        }
    },
    clearProgress: function clearProgress() {
        this.expeditions = [];
        this.partyBuild = [];
        this.count = 0
    },
    idToExpedition: function idToExpedition(eid) {
        return this.expeditions.find(function (e) {
            return e.id === eid
        })
    },
    addTime: function addTime(ms) {
        this.expeditions.forEach(function (expedition) {
            expedition.addTime(ms)
        });
        this.quests.forEach(function (quest) {
            quest.addTime(ms)
        });
        updateExpeditions()
    },
    collect: function collect(eid) {
        var expedition = this.idToExpedition(eid);
        expedition.collect();
        this.expeditions = this.expeditions.filter(function (e) {
            return e.id !== eid
        });
        refreshTownHasEvents();
        refreshExpeditionOptimalEnd()
    },
    heroLocked: function heroLocked(heroID) {
        if (this.expeditions.map(function (e) {
                return e.party
            }).some(function (e) {
                return e.includes(heroID)
            })) return true;
        if (this.quests.map(function (e) {
                return e.party
            }).filter(function (a) {
                return a !== null
            }).some(function (e) {
                return e.includes(heroID)
            })) return true;
        return false
    },
    addMember: function addMember(heroID) {
        var hero = HeroManager.idToHero(heroID);
        if (hero.state() !== HeroState.IDLE) return;
        if (this.partyBuild.includes(heroID)) this.partyBuild = this.partyBuild.filter(function (h) {
            return h !== heroID
        });
        else this.partyBuild.push(heroID)
    },
    clearMembers: function clearMembers() {
        this.partyBuild = []
    },
    partyPower: function partyPower() {
        return this.partyBuild.map(function (h) {
            return HeroManager.idToHero(h)
        }).map(function (p) {
            return p.getPow(true)
        }).reduce(function (a, b) {
            return a + b
        }, 0)
    },
    partyHP: function partyHP() {
        return this.partyBuild.map(function (h) {
            return HeroManager.idToHero(h)
        }).map(function (p) {
            return p.maxHP(true)
        }).reduce(function (a, b) {
            return a + b
        }, 0)
    },
    efficiency: function efficiency() {
        if (this.partyBuild.length === 0) return 0;
        return miscLoadedValues.expEff[this.partyBuild.length - 1]
    },
    addQuest: function addQuest(quest) {
        this.quests.push(quest)
    },
    idToQuest: function idToQuest(qid) {
        return this.quests.find(function (q) {
            return q.id === qid
        })
    },
    questComplete: function questComplete(qid) {
        return this.idToQuest(qid).complete()
    },
    availableQuests: function availableQuests() {
        return this.quests.filter(function (q) {
            return q.unlocked() && !q.complete()
        })
    },
    questTeam: function questTeam(qid) {
        var quest = this.idToQuest(qid);
        var hero1 = HeroManager.idToHero(quest.hero1);
        if (hero1.state() !== HeroState.IDLE) return ToastManager.renderToast("quest_hero_not_available");
        var hero2 = HeroManager.idToHero(quest.hero2);
        if (hero2 !== undefined && hero2.state() !== HeroState.IDLE) return ToastManager.renderToast("quest_hero_not_available");
        var hero3 = HeroManager.idToHero(quest.hero3);
        if (hero3 !== undefined && hero3.state() !== HeroState.IDLE) return ToastManager.renderToast("quest_hero_not_available");
        var hero4 = HeroManager.idToHero(quest.hero4);
        if (hero4 !== undefined && hero4.state() !== HeroState.IDLE) return ToastManager.renderToast("quest_hero_not_available");
        this.partyBuild = [quest.hero1];
        if (hero2 !== undefined) this.partyBuild.push(quest.hero2);
        if (hero3 !== undefined) this.partyBuild.push(quest.hero3);
        if (hero4 !== undefined) this.partyBuild.push(quest.hero4);
        refreshExpeditionParty()
    },
    optimalEnd: function optimalEnd() {
        if (this.partyBuild.length === 0) return {
            landmark: 0,
            time: 0,
            gold: 0
        };
        var party = this.partyBuild.map(function (h) {
            return HeroManager.idToHero(h)
        });
        var hp = party.map(function (h) {
            return h.maxHP(true)
        }).reduce(function (a, b) {
            return a + b
        }, 0);
        var pow = party.map(function (p) {
            return p.getPow(true)
        }).reduce(function (a, b) {
            return a + b
        }, 0);
        var efficiency = miscLoadedValues.expEff[party.length - 1];
        var bestLandmark = 0;
        var bestTime = 0;
        var bestGold = 0;
        var bestGPM = 0;
        var time = 0;
        for (var goal = 0; goal < 25; goal++) {
            var rate = Math.max(1, Math.ceil(pow * efficiency - Math.max(1, miscLoadedValues.expPow[goal])));
            var distance = Math.ceil(Math.pow(miscLoadedValues.expHP[goal], 2) / (hp * efficiency));
            time += distance / rate * 1e3;
            var gold = miscLoadedValues.expGold[goal];
            var gpm = gold / time;
            if (gpm > bestGPM) {
                bestGPM = gpm;
                bestGold = gold;
                bestTime = time;
                bestLandmark = goal
            }
        }
        return {
            landmark: bestLandmark,
            time: msToTime(bestTime, true),
            gold: bestGold
        }
    },
    activeQuests: function activeQuests() {
        return this.quests.filter(function (q) {
            return q.unlocked() && !q.complete()
        })
    },
    questInteract: function questInteract(qid) {
        var quest = this.idToQuest(qid);
        return quest.interact()
    },
    releaseHero: function releaseHero(heroid) {
        var _this2 = this;
        this.expeditions.forEach(function (exp) {
            if (exp.hasMember(heroid)) _this2.collect(exp.id)
        });
        this.quests.forEach(function (exp) {
            return exp.releaseHero(heroid)
        });
        refreshExpeditionSidebar()
    }
};
var Quest = function () {
    function Quest(props) {
        _classCallCheck(this, Quest);
        Object.assign(this, props);
        this.party = null;
        this.time = 0;
        this.distance = 0;
        this.nextGoal = 0;
        this.rate = 0;
        this.oneshot = false;
        this.type = "quest"
    }
    _createClass(Quest, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.party = this.party;
            save.time = this.time;
            save.distance = this.distance;
            save.nextGoal = this.nextGoal;
            save.rate = this.rate;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            if (save.party !== undefined) this.party = save.party;
            if (save.time !== undefined) this.time = save.time;
            if (save.distance !== undefined) this.distance = save.distance;
            if (save.nextGoal !== undefined) this.nextGoal = save.nextGoal;
            if (save.rate !== undefined) this.rate = save.rate
        }
    }, {
        key: "addTime",
        value: function addTime(ms) {
            if (this.nextGoal === 0) return;
            if (this.distance >= this.nextGoal) return;
            this.time += ms;
            while (this.time > 1e3) {
                this.time -= 1e3;
                this.distance += this.rate;
                this.distance = Math.min(this.distance, this.nextGoal)
            }
            if (this.distance === this.nextGoal && this.oneshot === false) {
                ToastManager.renderToast("quest_complete");
                this.oneshot = true;
                refreshExpeditionOptimalEnd();
                refreshTownHasEvents()
            }
        }
    }, {
        key: "complete",
        value: function complete() {
            return PlaybookManager.playbookUnlocked(this.reward)
        }
    }, {
        key: "unlocked",
        value: function unlocked() {
            return Shop.alreadyPurchased(this.unlockReq)
        }
    }, {
        key: "active",
        value: function active() {
            return this.nextGoal > 0
        }
    }, {
        key: "finished",
        value: function finished() {
            return this.active() && this.distance === this.nextGoal
        }
    }, {
        key: "clear",
        value: function clear() {
            this.distance = 0;
            this.nextGoal = 0;
            this.time = 0;
            this.rate = 0;
            this.party = null
        }
    }, {
        key: "heroes",
        value: function heroes() {
            return [this.hero1, this.hero2, this.hero3, this.hero4].filter(function (h) {
                return h !== null
            }).map(function (h) {
                return HeroManager.idToHero(h)
            })
        }
    }, {
        key: "distanceRemaining",
        value: function distanceRemaining() {
            return this.nextGoal - this.distance
        }
    }, {
        key: "timeRemaining",
        value: function timeRemaining() {
            var timeRemaining = this.distanceRemaining() / this.rate * 1e3;
            return msToTime(timeRemaining)
        }
    }, {
        key: "estimateTime",
        value: function estimateTime() {
            var hp = this.heroes().map(function (h) {
                return h.maxHP(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            var pow = this.heroes().map(function (p) {
                return p.getPow(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            var efficiency = miscLoadedValues.expEff[this.heroes().length - 1];
            var rateFake = Math.max(1, Math.ceil(pow * efficiency - Math.max(1, this.powLever)));
            var nextGoalFake = Math.ceil(Math.pow(this.hpLever, 2) / (hp * efficiency));
            return msToTime(nextGoalFake / rateFake * 1e3)
        }
    }, {
        key: "interact",
        value: function interact() {
            if (!this.active()) {
                if (this.heroes().some(function (h) {
                        return h.state() !== HeroState.IDLE
                    })) {
                    ToastManager.renderToast("hero_quest_unavailable");
                    return true
                }
                this.party = [this.hero1, this.hero2, this.hero3, this.hero4].filter(function (h) {
                    return h !== null
                });
                var hp = this.heroes().map(function (h) {
                    return h.maxHP(true)
                }).reduce(function (a, b) {
                    return a + b
                }, 0);
                var pow = this.heroes().map(function (p) {
                    return p.getPow(true)
                }).reduce(function (a, b) {
                    return a + b
                }, 0);
                var efficiency = miscLoadedValues.expEff[this.party.length - 1];
                this.rate = Math.max(1, Math.ceil(pow * efficiency - Math.max(1, this.powLever)));
                this.nextGoal = Math.ceil(Math.pow(this.hpLever, 2) / (hp * efficiency));
                this.time = 0;
                this.distance = 0;
                return
            }
            if (this.finished()) {
                this.clear();
                PlaybookManager.unlockPlaybook(this.reward);
                ToastManager.renderToast("playbook_unlock", this.heroName);
                achievementStats.expeditionsPerformed();
                refreshExpeditionOptimalEnd();
                refreshTownHasEvents();
                return
            }
            this.clear()
        }
    }, {
        key: "releaseHero",
        value: function releaseHero(heroid) {
            if (this.party === null) return;
            if (this.party.includes(heroid)) this.interact()
        }
    }]);
    return Quest
}();
var Expedition = function () {
    function Expedition(count) {
        _classCallCheck(this, Expedition);
        this.id = count;
        this.party = null;
        this.nextGoal = 0;
        this.distance = 0;
        this.goal = 0;
        this.time = 0;
        this.displayDistance = 0;
        this.type = "expedition"
    }
    _createClass(Expedition, [{
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.party = this.party;
            save.nextGoal = this.nextGoal;
            save.distance = this.distance;
            save.hp = this.hp;
            save.pow = this.pow;
            save.goal = this.goal;
            save.rate = this.rate;
            save.efficiency = this.efficiency;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.party = save.party;
            this.nextGoal = save.nextGoal;
            this.distance = save.distance;
            this.hp = save.hp;
            this.pow = save.pow;
            this.goal = save.goal;
            this.rate = save.rate;
            this.efficiency = save.efficiency;
            this.goalText = this.goal;
            this.landmarkName = displayText("expedition_name_" + this.goal);
            this.goalText = this.goal + 1;
            if (this.goal < 25) {
                this.nextLandmark = displayText("expedition_name_" + (this.goal + 2));
                this.landmarkName = displayText("expedition_name_" + (this.goal + 1));
                this.landmarkDesc = displayText("expedition_desc_" + (this.goal + 1))
            } else {
                this.goalText = "25";
                this.nextLandmark = "None";
                this.landmarkName = displayText("expedition_name_25");
                this.landmarkDesc = displayText("expedition_desc_25")
            }
            if (this.goal === 24) this.nextLandmark = "None";
            this.powDiff = miscLoadedValues.expPow[this.goal];
            this.hpDiff = miscLoadedValues.expHP[this.goal]
        }
    }, {
        key: "heroes",
        value: function heroes() {
            if (this.party === null) return [];
            return this.party.map(function (h) {
                return HeroManager.idToHero(h)
            })
        }
    }, {
        key: "assignParty",
        value: function assignParty(arrayOfHeroes) {
            this.party = arrayOfHeroes;
            this.hp = this.heroes().map(function (h) {
                return h.maxHP(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            this.pow = this.heroes().map(function (p) {
                return p.getPow(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            this.efficiency = miscLoadedValues.expEff[arrayOfHeroes.length - 1];
            this.assignNextGoal()
        }
    }, {
        key: "assignNextGoal",
        value: function assignNextGoal() {
            this.nextGoal = Math.ceil(Math.pow(miscLoadedValues.expHP[this.goal], 2) / (this.hp * this.efficiency));
            this.hp = this.heroes().map(function (h) {
                return h.maxHP(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            this.pow = this.heroes().map(function (p) {
                return p.getPow(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            this.rate = Math.max(1, Math.ceil(this.pow * this.efficiency - Math.max(1, miscLoadedValues.expPow[this.goal])));
            this.goalText = this.goal + 1;
            if (this.goal < 25) {
                this.nextLandmark = displayText("expedition_name_" + (this.goal + 2));
                this.landmarkName = displayText("expedition_name_" + (this.goal + 1));
                this.landmarkDesc = displayText("expedition_desc_" + (this.goal + 1))
            } else {
                this.nextLandmark = "None";
                this.landmarkName = displayText("expedition_name_25");
                this.landmarkDesc = displayText("expedition_desc_25")
            }
            if (this.goal === 24) this.nextLandmark = "None";
            this.landmarkDesc = displayText("expedition_desc_" + (this.goal + 1));
            this.powDiff = miscLoadedValues.expPow[this.goal];
            this.hpDiff = miscLoadedValues.expHP[this.goal];
            if (this.reachedOptimal()) {
                refreshExpeditionOptimalEnd()
            }
            updateLandmarkSidebar(this.id)
        }
    }, {
        key: "distanceRemaining",
        value: function distanceRemaining() {
            return this.nextGoal - this.distance
        }
    }, {
        key: "timeRemaining",
        value: function timeRemaining() {
            var timeRemaining = this.distanceRemaining() / this.rate * 1e3;
            return msToTime(timeRemaining)
        }
    }, {
        key: "addTime",
        value: function addTime(ms) {
            if (this.party === null || this.goal === 25) return;
            this.time += ms;
            this.displayDistance += ms;
            while (this.time > 1e3) {
                this.time -= 1e3;
                this.distance += this.rate;
                if (this.distance >= this.nextGoal) {
                    this.distance = 0;
                    this.displayDistance = 0;
                    this.goal += 1;
                    this.assignNextGoal()
                }
            }
        }
    }, {
        key: "goldReward",
        value: function goldReward(next) {
            if (next) return miscLoadedValues.expGold[this.goal];
            if (this.goal === 0) return 0;
            return miscLoadedValues.expGold[this.goal - 1]
        }
    }, {
        key: "collect",
        value: function collect() {
            ResourceManager.addGold(this.goldReward());
            if (this.goldReward() > 0) achievementStats.expeditionsPerformed();
            refreshExpeditionOptimalEnd();
            refreshTownHasEvents()
        }
    }, {
        key: "landmarks",
        value: function landmarks() {
            var results = [];
            for (var i = 0; i < 25; i++) {
                var landmark = {};
                landmark.id = i.toString();
                landmark.name = displayText("expedition_name_" + (i + 1));
                landmark.gold = miscLoadedValues.expGold[i];
                landmark.distance = this.goal === i ? this.distance : 0;
                landmark.nextGoal = Math.ceil(Math.pow(miscLoadedValues.expHP[i], 2) / (this.hp * this.efficiency));
                landmark.rate = Math.max(1, Math.ceil(this.pow * this.efficiency - Math.max(1, miscLoadedValues.expPow[i])));
                landmark.timeRemaining = msToTime((landmark.nextGoal - landmark.distance) / landmark.rate * 1e3);
                if (this.goal > i) landmark.timeRemaining = msToTime(0);
                if (this.goal < i) landmark.status = "unfinished";
                if (this.goal === i) landmark.status = "ongoing";
                if (this.goal > i) landmark.status = "finished";
                results.push(landmark)
            }
            return results
        }
    }, {
        key: "optimal",
        value: function optimal() {
            var hp = this.heroes().map(function (h) {
                return h.maxHP(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            var pow = this.heroes().map(function (p) {
                return p.getPow(true)
            }).reduce(function (a, b) {
                return a + b
            }, 0);
            var efficiency = miscLoadedValues.expEff[this.heroes().length - 1];
            var bestLandmark = 0;
            var time = 0;
            var bestGPM = 0;
            for (var goal = 0; goal < 25; goal++) {
                var rate = Math.max(1, Math.ceil(pow * efficiency - Math.max(1, miscLoadedValues.expPow[goal])));
                var distance = Math.ceil(Math.pow(miscLoadedValues.expHP[goal], 2) / (hp * efficiency));
                time += distance / rate * 1e3;
                var gold = miscLoadedValues.expGold[goal];
                var gpm = gold / time;
                if (gpm > bestGPM) {
                    bestLandmark = goal;
                    bestGPM = gpm
                }
            }
            return bestLandmark
        }
    }, {
        key: "reachedOptimal",
        value: function reachedOptimal() {
            return this.goal >= this.optimal()
        }
    }, {
        key: "hasMember",
        value: function hasMember(heroid) {
            return this.party.includes(heroid)
        }
    }]);
    return Expedition
}();
var $expeditionList = $("#expeditionList");
var $expeditionParty = $("#expeditionParty");
var $expeditionSpecific = $("#expeditionSpecific");
var $expeditionBuilding = $("#expeditionBuilding");

function initiateExpeditionBldg() {
    $expeditionBuilding.show();
    $expeditionList.show();
    $expeditionParty.hide();
    $expeditionSpecific.hide();
    ExpeditionManager.subScreen = "main";
    refreshExpeditionList()
}

function refreshExpeditionList() {
    $expeditionParty.hide();
    $expeditionSpecific.hide();
    $expeditionList.show().empty();
    ExpeditionManager.subScreen = "main";
    var contentHeader = $("<div/>").addClass("contentHeader").appendTo($expeditionList);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(contentHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("expedition_header_name")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr({
        "data-tooltip": "more_info_expedition"
    }).html(miscIcons.question).appendTo(headingTitle);
    $("<div/>").addClass("headingDescription").html(displayText("expedition_header_desc")).appendTo(headingDetails);
    var body = $("<div/>").addClass("expeditionBody").appendTo($expeditionList);
    createNewExpeditionListing().appendTo(body);
    ExpeditionManager.expeditions.forEach(function (expedition) {
        createNewExpeditionListing(expedition).appendTo(body)
    });
    ExpeditionManager.activeQuests().forEach(function (quest) {
        createNewQuestListing(quest).appendTo(body)
    })
}

function refreshExpeditionParty() {
    $expeditionList.hide();
    $expeditionSpecific.hide();
    $expeditionParty.show().empty();
    ExpeditionManager.subScreen = "party";
    var expeditionActions = $("<div/>").addClass("expeditionActions").appendTo($expeditionParty);
    var backButton = $("<div/>").addClass("actionButton").attr("id", "expBack").html(miscIcons.back).appendTo(expeditionActions);
    $("<span/>").addClass("actionButtonTextRight").html(displayText("expedition_inspect_back")).appendTo(backButton);
    $("<div/>").addClass("expeditionEmbark actionButton").html(displayText("expedition_embark")).appendTo(expeditionActions);
    var contentHeader = $("<div/>").addClass("contentHeader").appendTo($expeditionParty);
    var headingDetails = $("<div/>").addClass("headingDetails").appendTo(contentHeader);
    var headingTitle = $("<div/>").addClass("headingTitle").html(displayText("expedition_party_heading")).appendTo(headingDetails);
    $("<div/>").addClass("questionTooltip tooltip").attr({
        "data-tooltip": "more_info_expedition_party"
    }).html(miscIcons.question).appendTo(headingTitle);
    var expeditionStats = $("<div/>").addClass("expeditionStatsContainer").appendTo($expeditionParty);
    $("<div/>").addClass("expeditionPartyStats").attr("id", "expeditionPartyStats").appendTo(expeditionStats);
    $("<div/>").addClass("expeditionOptimal").attr("id", "expOptimalStats").appendTo(expeditionStats);
    var p = $("<div/>").addClass("expeditionParty").appendTo($expeditionParty);
    var partyContentHeader = $("<div/>").addClass("contentHeader").appendTo(p);
    var partyHeadingDetails = $("<div/>").addClass("headingDetails").appendTo(partyContentHeader);
    $("<div/>").addClass("headingTitle").html(displayText("expedition_party_creation_heading")).appendTo(partyHeadingDetails);
    $("<div/>").addClass("headingDescription").html(displayText("expedition_party_creation_desc")).appendTo(partyHeadingDetails);
    var heroesExpeditionContainer = $("<div/>").addClass("heroesExpeditionContainer").appendTo(p);
    HeroManager.ownedHeroes().forEach(function (hero) {
        createHeroExpeditionCard(hero).appendTo(heroesExpeditionContainer)
    });
    refreshExpeditionPartyStats()
}

function refreshSpecificExpedition(eid) {
    $expeditionList.hide();
    $expeditionSpecific.show().empty();
    $expeditionParty.hide();
    ExpeditionManager.subScreen = eid;
    var expedition = ExpeditionManager.idToExpedition(eid);
    var expeditionActions = $("<div/>").addClass("expeditionActions").appendTo($expeditionSpecific);
    var backButton = $("<div/>").addClass("actionButton").attr("id", "expBack").html(miscIcons.back).appendTo(expeditionActions);
    $("<span/>").addClass("actionButtonTextRight").html(displayText("expedition_inspect_back")).appendTo(backButton);
    $("<div/>").addClass("actionButton").attr("id", "expcollectreward" + eid).data("eid", eid).html("".concat(miscIcons.gold, " ").concat(formatToUnits(expedition.goldReward(), 2), " to Retrieve Now")).appendTo(expeditionActions);
    var d = $("<div/>").addClass("expHeadings").appendTo($expeditionSpecific);
    expedition.landmarks().forEach(function (landmark) {
        var landmarkContainer = $("<div/>").addClass("landmarkContainer").appendTo(d);
        $("<div/>").addClass("expLandMarkName").html(landmark.name).appendTo(landmarkContainer);
        createAdventureBarSpecific(landmark).appendTo(landmarkContainer);
        $("<div/>").addClass("expLandGold").html("".concat(miscIcons.gold, " ").concat(formatToUnits(landmark.gold, 2))).appendTo(landmarkContainer)
    })
}
$expeditionSpecific.on("click", "#expBack", function (e) {
    e.preventDefault();
    initiateExpeditionBldg()
});
$expeditionParty.on("click", "#expBack", function (e) {
    e.preventDefault();
    initiateExpeditionBldg()
});

function refreshExpeditionPartyStats() {
    var s = $("#expeditionPartyStats");
    s.empty();
    var powStat = $("<div/>").addClass("heroStat tooltip").attr("data-tooltip", "expedition_party_pow").appendTo(s);
    $("<div/>").addClass("pow_img").html(miscIcons.pow).appendTo(powStat);
    $("<div/>").addClass("pow_integer statValue").attr("id", "expeditionPow").html(ExpeditionManager.partyPower()).appendTo(powStat);
    var hptat = $("<div/>").addClass("heroStat tooltip").attr("data-tooltip", "expedition_party_hp").appendTo(s);
    $("<div/>").addClass("hp_img").html(miscIcons.hp).appendTo(hptat);
    $("<div/>").addClass("hp_integer statValue").attr("id", "expeditionHP").html(ExpeditionManager.partyHP()).appendTo(hptat);
    $("<div/>").addClass("expEfficiency heroStat tooltip").attr("data-tooltip", "expedition_party_efficiency").html("".concat((ExpeditionManager.efficiency() * 100).toFixed(0), "% Efficiency")).appendTo(s);
    var expStats = ExpeditionManager.optimalEnd();
    var d = $("#expOptimalStats");
    d.empty();
    var d1 = $("<div/>").addClass("expeditionOptimalStatDesc heroStat tooltip").attr("data-tooltip", "expedition_optimal_landmark").appendTo(d);
    $("<div/>").addClass("expImg").html(miscIcons.landmark).appendTo(d1);
    $("<div/>").addClass("statValue").html(expStats.landmark).appendTo(d1);
    var d2 = $("<div/>").addClass("expeditionOptimalStatDesc heroStat tooltip").attr("data-tooltip", "expedition_optimal_time").appendTo(d);
    $("<div/>").addClass("expImg").html(miscIcons.time).appendTo(d2);
    $("<div/>").addClass("statValue").html(expStats.time).appendTo(d2);
    var d3 = $("<div/>").addClass("expeditionOptimalStatDesc heroStat tooltip").attr("data-tooltip", "expedition_optimal_gold").appendTo(d);
    $("<div/>").addClass("expImg").html(miscIcons.gold).appendTo(d3);
    $("<div/>").addClass("statValue").html(formatToUnits(expStats.gold, 3)).appendTo(d3)
}

function createHeroExpeditionCard(hero) {
    var d = $("<div/>").addClass("heroExpedition").data("hid", hero.id);
    generateSlotClass(hero.type).appendTo(d);
    $("<div/>").addClass("heroExpeditionImage").html(hero.portrait).appendTo(d);
    $("<div/>").addClass("heroExpeditionName").html(hero.name).appendTo(d);
    var d2 = $("<div/>").addClass("expeditionStats").appendTo(d);
    var hpStat = $("<div/>").addClass("heroStat expeditionHP tooltip").attr("data-tooltip", "hp").html("".concat(miscIcons.hp)).appendTo(d2);
    $("<div/>").addClass("statValue").html("".concat(hero.maxHP(true))).appendTo(hpStat);
    var powStat = $("<div/>").addClass("heroStat expeditionPow tooltip").attr("data-tooltip", "pow").html("".concat(miscIcons.pow)).appendTo(d2);
    $("<div/>").addClass("statValue").html("".concat(hero.getPow(true))).appendTo(powStat);
    if (hero.state() === HeroState.DUNGEON) $("<div/>").addClass("heroStatus tooltip statusDungeon").attr({
        "data-tooltip": "hero_in_combat"
    }).html('<i class="fas fa-swords"></i>').appendTo(d);
    else if (hero.state() === HeroState.QUEST) $("<div/>").addClass("heroStatus tooltip statusQuest").attr({
        "data-tooltip": "hero_in_quest"
    }).html("".concat(miscIcons.quest)).appendTo(d);
    var d3 = $("<div/>").attr("id", "exph" + hero.id).addClass("heroStatus tooltip statusParty").attr({
        "data-tooltip": "hero_in_party"
    }).html('<i class="fas fa-check"></i>').appendTo(d).hide();
    if (ExpeditionManager.partyBuild.includes(hero.id)) d3.show();
    return d
}

function createNewExpeditionListing(expedition) {
    var d = $("<div/>").addClass("expeditionDiv");
    if (expedition === undefined || expedition === null) {
        d.addClass("newExpedition").attr("id", "newExpedition");
        $("<div/>").addClass("expeditionIcon").html("+").appendTo(d);
        $("<div/>").addClass("expeditionText").html(displayText("expedition_start")).appendTo(d);
        return d
    }
    d.addClass("expeditionListing").data("eid", expedition.id);
    if (expedition.reachedOptimal()) d.addClass("hasEvent");
    var landmarkName = $("<div/>").addClass("expeditionLandmark").appendTo(d);
    $("<div/>").addClass("expeditionLandmarkText").attr("id", "expeditionName" + expedition.id).html(expedition.landmarkName).appendTo(landmarkName);
    $("<div/>").addClass("expeditionLandmarkSubtext").attr("id", "expeditionLandmarkSubtext" + expedition.id).html("Landmark ".concat(expedition.goalText)).appendTo(d);
    $("<div/>").addClass("expeditionInfo tooltip").html(miscIcons.info).attr({
        "data-tooltip": "landmark_desc",
        "data-tooltip-value": expedition.id
    }).appendTo(landmarkName);
    var heroes = $("<div/>").addClass("expeditionHeroes").appendTo(d);
    expedition.heroes().forEach(function (hero) {
        $("<div/>").addClass("expeditionHeroPortrait").html(hero.head).appendTo(heroes)
    });
    createAdventureBar(expedition).appendTo(d);
    $("<div/>").addClass("expeditionCollect").attr("id", "expcollectreward" + expedition.id).data("eid", expedition.id).html("Retrieve Now for ".concat(miscIcons.gold, " ").concat(expedition.goldReward())).appendTo(d);
    return d
}

function createNewQuestListing(quest) {
    var d = $("<div/>").addClass("expeditionDiv");
    if (quest.finished()) d.addClass("hasEvent");
    var questName = $("<div/>").addClass("expeditionLandmark").appendTo(d);
    $("<div/>").addClass("expeditionLandmarkText").html(quest.name).appendTo(questName);
    $("<div/>").addClass("expeditionInfo tooltip").html(miscIcons.info).attr({
        "data-tooltip": "quest_desc",
        "data-tooltip-value": quest.id
    }).appendTo(questName);
    $("<div/>").addClass("expeditionLandmarkSubtext").html(quest.shortDesc).appendTo(d);
    var heroes = $("<div/>").addClass("expeditionHeroes").appendTo(d);
    quest.heroes().forEach(function (hero) {
        var e = $("<div/>").addClass("expeditionHeroPortrait").html(hero.head).appendTo(heroes);
        if (hero.state() !== HeroState.IDLE) e.addClass("heroUnavailable");
        if (!quest.active()) e.addClass("inactive")
    });
    createAdventureBar(quest, !quest.active()).appendTo(d);
    var barText = "";
    if (quest.finished()) barText = displayText("complete_quest");
    else if (quest.active()) barText = displayText("cancel_quest");
    else barText = displayText("start_quest");
    $("<div/>").addClass("questCollect").attr("id", "expcollectreward" + quest.id).data("qid", quest.id).html(barText).appendTo(d);
    return d
}

function updateExpeditions() {
    ExpeditionManager.expeditions.forEach(function (expedition) {
        refreshExpeditionSpecificSidebar(expedition)
    });
    ExpeditionManager.quests.forEach(function (expedition) {
        refreshExpeditionSpecificSidebar(expedition)
    });
    if (!openedTabEquals("town_expedition")) return;
    if (ExpeditionManager.subScreen === "main") {
        ExpeditionManager.expeditions.forEach(function (expedition) {
            refreshExpeditionStatus(expedition)
        });
        ExpeditionManager.quests.forEach(function (quest) {
            if (!quest.active()) return;
            refreshQuestStatus(quest)
        })
    } else if (ExpeditionManager.subScreen !== "party") {
        refreshExpeditionSpecific(ExpeditionManager.subScreen)
    }
}

function refreshExpeditionStatus(expedition) {
    if (expedition.goal === 25) {
        $("#expedition" + expedition.id).html("Last Landmark Reached");
        $("#expeditionFill" + expedition.id).css("width", "100%");
        $("#expeditionName" + expedition.id).html(expedition.landmarkName[25]);
        $("#expreward" + expedition.id).hide();
        $("#expcollectreward" + expedition.id).html("Retrieve Now for ".concat(miscIcons.gold, " ").concat(formatToUnits(expedition.goldReward(), 2)));
        return
    }
    var percent = expedition.displayDistance / 1e3 * expedition.rate / expedition.nextGoal;
    var width = (percent * 100).toFixed(1) + "%";
    var barText = "".concat(formatToUnits(expedition.distance, 1), "/").concat(formatToUnits(expedition.nextGoal, 1), " (").concat(expedition.timeRemaining(), " left)");
    $("#expedition" + expedition.id).html(barText);
    $("#expeditionFill" + expedition.id).css("width", width);
    $("#expeditionName" + expedition.id).html(expedition.landmarkName);
    $("#expeditionLandmarkSubtext" + expedition.id).html("Landmark ".concat(expedition.goalText));
    $("#expreward" + expedition.id).html("Next Reward: ".concat(miscIcons.gold, " ").concat(formatToUnits(expedition.goldReward(true), 2)));
    $("#expcollectreward" + expedition.id).html("Retrieve Now for ".concat(miscIcons.gold, " ").concat(formatToUnits(expedition.goldReward(), 2)))
}

function refreshQuestStatus(quest) {
    var percent = (quest.distance * 1e3 + quest.time) / (quest.nextGoal * 1e3);
    var width = (percent * 100).toFixed(1) + "%";
    var barText = "".concat(formatToUnits(quest.distance, 1), "/").concat(formatToUnits(quest.nextGoal, 1), " (").concat(quest.timeRemaining(), " left)");
    $("#expedition" + quest.id).html(barText);
    $("#expeditionFill" + quest.id).css("width", width);
    if (quest.finished()) $("#expcollectreward" + quest.id).html(displayText("complete_quest"));
    else $("#expcollectreward" + quest.id).html(displayText("cancel_quest"))
}

function refreshExpeditionSpecific(eid) {
    var expedition = ExpeditionManager.idToExpedition(eid);
    expedition.landmarks().forEach(function (landmark) {
        var percent = 0;
        var width = "0%";
        var barText = "(".concat(landmark.timeRemaining, ")");
        if (expedition.status === "finished") {
            percent = 1;
            width = "100%"
        } else if (expedition.status === "ongoing") {
            percent = landmark.distance / landmark.nextGoal;
            width = (percent * 100).toFixed(1) + "%"
        }
        $("#expeditionSpecific" + landmark.id).html(barText);
        $("#expeditionFill" + landmark.id).css("width", width)
    })
}

function createAdventureBar(expedition, notInUse) {
    var percent = notInUse ? 0 : expedition.distance / expedition.nextGoal;
    var width = (percent * 100).toFixed(1) + "%";
    var barText = notInUse ? "(".concat(expedition.estimateTime(), " to complete)") : "".concat(formatToUnits(expedition.distance, 1), "/").concat(formatToUnits(expedition.nextGoal, 1), " (").concat(expedition.timeRemaining(), " left)");
    var options = {
        prefix: "expBar",
        tooltip: "expedition",
        icon: miscIcons.quest,
        text: barText,
        textID: "expedition" + expedition.id,
        width: width,
        fill: "expeditionFill" + expedition.id
    };
    return generateProgressBar(options)
}

function createAdventureBarSpecific(expedition) {
    var percent = 0;
    var width = "0%";
    var barText = "(".concat(expedition.timeRemaining, ")");
    if (expedition.status === "finished") {
        percent = 1;
        width = "100%"
    } else if (expedition.status === "ongoing") {
        percent = expedition.distance / expedition.nextGoal;
        width = (percent * 100).toFixed(1) + "%"
    }
    var options = {
        prefix: "expBar",
        tooltip: "expedition",
        icon: miscIcons.quest,
        text: barText,
        textID: "expeditionSpecific" + expedition.id,
        width: width,
        fill: "expeditionSpecificFill" + expedition.id
    };
    return generateProgressBar(options)
}

function generateSlotClass(type) {
    var hero = HeroManager.idToHero(type);
    var slotClass = $("<div/>").addClass("slotClass");
    var slotText = $("<div/>").addClass("slotClassText").appendTo(slotClass);
    if (hero !== undefined) {
        slotClass.addClass("classHero");
        slotText.html(hero.name)
    } else {
        slotClass.addClass("class".concat(type));
        slotText.html(type)
    }
    return slotClass
}

function refreshExpeditionOptimalEnd() {
    if (ExpeditionManager.expeditions.some(function (e) {
            return e.reachedOptimal()
        }) || ExpeditionManager.quests.some(function (q) {
            return q.finished()
        })) {
        $adventureSidebarToggle.addClass("hasEvent")
    } else $adventureSidebarToggle.removeClass("hasEvent")
}
$expeditionList.on("click", ".expeditionCollect", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var eid = parseInt($(e.currentTarget).data("eid"));
    ExpeditionManager.collect(eid);
    refreshExpeditionList();
    refreshExpeditionSidebar()
});
$expeditionList.on("click", ".questCollect", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var qid = $(e.currentTarget).data("qid");
    var dontrefresh = ExpeditionManager.questInteract(qid);
    refreshTownHasEvents();
    refreshExpeditionOptimalEnd();
    refreshExpeditionSidebar();
    if (!dontrefresh) refreshExpeditionList()
});
$expeditionList.on("click", "#newExpedition", function (e) {
    e.preventDefault();
    ExpeditionManager.partyBuild = [];
    refreshExpeditionParty()
});
$expeditionParty.on("click", ".heroExpedition", function (e) {
    e.preventDefault();
    var hid = $(e.currentTarget).data("hid");
    ExpeditionManager.addMember(hid);
    refreshExpeditionPartyStats();
    if (ExpeditionManager.partyBuild.includes(hid)) $("#exph" + hid).show();
    else $("#exph" + hid).hide()
});
$expeditionParty.on("click", ".expeditionEmbark", function (e) {
    e.preventDefault();
    if (ExpeditionManager.partyBuild.length === 0) {
        ToastManager.renderToast("expedition_unavailable");
        return
    }
    ExpeditionManager.lockParty();
    initiateExpeditionBldg();
    refreshExpeditionSidebar()
});
$expeditionParty.on("click", ".expeditionPartyQuest", function (e) {
    e.preventDefault();
    var qid = $(e.currentTarget).data("qid");
    ExpeditionManager.questTeam(qid)
});
$expeditionList.on("click", ".expeditionListing", function (e) {
    e.preventDefault();
    var eid = parseInt($(e.currentTarget).data("eid"));
    refreshSpecificExpedition(eid)
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}
var Dialog = function Dialog(props) {
    _classCallCheck(this, Dialog);
    Object.assign(this, props)
};
var DialogManager = {
    dialogs: [],
    addDialog: function addDialog(dialog) {
        this.dialogs.push(dialog)
    },
    findDialog: function findDialog(id) {
        return this.dialogs.find(function (dialog) {
            return id === dialog.id
        })
    }
};
setDialogClose();

function renderDialogActions(id) {
    var dialogActions = $("<div/>").addClass("dialogActionsContainer");
    if (id === "clear_save") {
        var clearSaveActions = $("<div/>").addClass("clearSaveActions").appendTo(dialogActions);
        $("<button/>").attr({
            id: "deleteSaveButton",
            tabindex: 2
        }).addClass("deleteSaveButton actionButton").html("Delete Game Data").appendTo(clearSaveActions);
        $("<button/>").attr({
            id: "declineSaveButton",
            tabindex: 3
        }).addClass("declineSaveButton actionButton").html("Keep Game Data").appendTo(clearSaveActions);
        return dialogActions
    }
    if (id === "export_save") {
        $("<input/>").attr({
            id: "exportSaveText",
            type: "text",
            tabindex: 2
        }).addClass("exportSaveText").appendTo(dialogActions);
        var exportSaveActions = $("<div/>").addClass("exportSaveActions").appendTo(dialogActions);
        $("<button/>").attr({
            id: "exportSaveLocal",
            tabindex: 3
        }).addClass("exportSaveLocal actionButton").html("Download as File").appendTo(exportSaveActions);
        $("<button/>").attr({
            id: "exportSaveCopy",
            tabindex: 4
        }).addClass("exportSaveCopy actionButton").html("Copy to Clipboard").appendTo(exportSaveActions);
        $("<div/>").attr({
            id: "exportStatus"
        }).addClass("exportStatus").appendTo(exportSaveActions);
        return dialogActions
    }
    if (id === "import_save") {
        $("<input/>").attr({
            id: "importSaveText",
            tabindex: 2,
            type: "text",
            placeholder: "Enter an export string..."
        }).addClass("importSaveText").appendTo(dialogActions);
        var importSaveActions = $("<div/>").addClass("importSaveActions").appendTo(dialogActions);
        $("<button/>").attr({
            id: "importSaveButton",
            tabindex: 3
        }).addClass("importSaveButton actionButton").html("Import Save").appendTo(importSaveActions);
        return dialogActions
    }
    if (id === "playfab") {
        var accountContainer = $("<div/>").attr({
            id: "cloudSaveDialog"
        }).addClass("cloudSaveDialog").appendTo(dialogActions);
        $("<div/>").addClass("cloudSaveLogo").prependTo(dialogActions);
        var accountForm = $("<form/>").attr({
            id: "pfLoginRegister",
            autocomplete: "on"
        }).addClass("pfAccountForm").appendTo(accountContainer);
        var accountEmail = $("<div/>").attr({
            id: "pfEmail"
        }).addClass("pfEmailContainer").appendTo(accountForm);
        $("<div/>").addClass("pfHeader").html("Email Address").appendTo(accountEmail);
        $("<input/>").attr({
            id: "email",
            tabindex: 2,
            type: "email",
            name: "email",
            autocomplete: "email",
            placeholder: "Enter your email address..."
        }).addClass("pfText").appendTo(accountEmail);
        var accountPassword = $("<div/>").attr({
            id: "pfPassword"
        }).addClass("pfPasswordContainer").appendTo(accountForm);
        $("<div/>").addClass("pfHeader").html("Password").appendTo(accountPassword);
        $("<input/>").attr({
            id: "password",
            tabindex: 3,
            type: "password",
            name: "password",
            autocomplete: "current-password",
            placeholder: "Enter your password..."
        }).addClass("pfText").appendTo(accountPassword);
        var accountActions = $("<div/>").attr({
            id: "pfButtons"
        }).addClass("pfButtonsContainer").appendTo(accountForm);
        $("<input/>").attr({
            id: "login",
            tabindex: 4,
            type: "submit",
            name: "login",
            value: "Log into Account"
        }).addClass("actionButton").appendTo(accountActions);
        $("<input/>").attr({
            id: "register",
            tabindex: 5,
            type: "button",
            name: "register",
            value: "Register an Account"
        }).addClass("actionButton").appendTo(accountActions);
        $("<input/>").attr({
            id: "reset",
            tabindex: 6,
            type: "button",
            name: "reset",
            value: "Reset Password"
        }).addClass("actionButton").appendTo(accountActions);
        var statusMessage = $("<div/>").attr({
            id: "pfStatusSection"
        }).addClass("pfStatusContainer").appendTo(accountForm);
        $("<div/>").attr({
            id: "pfStatus"
        }).addClass("pfStatus").appendTo(statusMessage);
        var accountImportExport = $("<div/>").attr({
            id: "pfImportExport"
        }).addClass("pfImportExportContainer").appendTo(accountContainer).hide();
        $("<input/>").attr({
            id: "pfSave",
            tabindex: 2,
            type: "button",
            name: "Save to Cloud",
            value: "Save to Cloud"
        }).addClass("actionButton").appendTo(accountImportExport);
        $("<input/>").attr({
            id: "pfLoad",
            tabindex: 3,
            type: "button",
            name: "Load from Cloud",
            value: "Load from Cloud"
        }).addClass("actionButton").appendTo(accountImportExport);
        $("<input/>").attr({
            id: "pfLogout",
            tabindex: 4,
            type: "button",
            name: "Logout",
            value: "Logout"
        }).addClass("actionButton").appendTo(accountImportExport);
        var d = $("<div/>").attr({
            id: "pfAutoSave",
            tabindex: 5
        }).html("".concat(miscIcons.toggleOff, "&nbsp;&nbsp;Autosave every 5 mins")).addClass("actionButton").appendTo(accountImportExport);
        if (playFabAutoSaveEnabled) d.addClass("highlight");
        $("<div/>").attr({
            id: "pfStatusSave"
        }).addClass("pfStatusSave").appendTo(accountImportExport);
        var loadFromCloud = $("<div/>").attr({
            id: "loadSure"
        }).addClass("loadSure").appendTo(accountContainer).hide();
        $("<div/>").addClass("loadSureDescription").html("Are you sure you would like to load this cloud save data? This action is irreversible!").appendTo(loadFromCloud);
        var loadFromCloudActions = $("<div/>").attr({
            id: "pfLoadButtons"
        }).addClass("pfLoadButtons").appendTo(loadFromCloud);
        $("<input/>").attr({
            id: "pfloadYes",
            tabindex: 2,
            type: "button",
            name: "loadYes",
            value: "Yes"
        }).addClass("actionButton").appendTo(loadFromCloudActions);
        $("<input/>").attr({
            id: "pfloadNo",
            tabindex: 3,
            type: "button",
            name: "loadNo",
            value: "No"
        }).addClass("actionButton").appendTo(loadFromCloudActions);
        return dialogActions
    }
    if (id === "end_commendation") {
        var actionsContainer = $("<div/>").addClass("actionsContainer").appendTo(dialogActions);
        $("<a/>").attr({
            href: "http://www.discord.gg/3xDnH28TFQ",
            target: "_blank",
            rel: "noopener"
        }).addClass("actionButton").html("Join us on Discord").appendTo(actionsContainer);
        $("<a/>").attr({
            href: "https://www.patreon.com/forgeandfortune",
            target: "_blank",
            rel: "noopener"
        }).addClass("actionButton").html("Support us on Patreon").appendTo(actionsContainer);
        return dialogActions
    }
    if (id === "settings") {
        var settingsTabsContainer = $("<div/>").addClass("settingsTabContainer").appendTo(dialogActions);
        $("<div/>").addClass("settingsTab selected").attr({
            id: "settingTabGeneral"
        }).html("General").appendTo(settingsTabsContainer);
        $("<div/>").addClass("settingsTab").attr({
            id: "settingTabNotifications"
        }).html("Notifications").appendTo(settingsTabsContainer);
        $("<div/>").addClass("settingsTab").attr({
            id: "settingTabHotkeys"
        }).html("Hotkeys").appendTo(settingsTabsContainer);
        var tabGeneral = $("<div/>").addClass("settingTabContent selected settings-grid").attr({
            id: "settingContentGeneral"
        }).appendTo(dialogActions);
        var tabNotifications = $("<div/>").addClass("settingTabContent settings-grid").attr({
            id: "settingContentNotifcations"
        }).appendTo(dialogActions);
        var tabHotkeys = $("<div/>").addClass("settingTabContent settings-grid").attr({
            id: "settingContentHotkeys"
        }).appendTo(dialogActions);
        var hotkeyPref = $("<div/>").attr({
            id: "settings_hotkeyPref"
        }).addClass("setting-container").appendTo(tabHotkeys);
        var hotkeyPref_details = {
            title: "Hotkeys",
            description: "Choose whether hotkeys are triggered."
        };
        settingsBoilerplate(hotkeyPref_details, false).appendTo(hotkeyPref);
        var hotkeyPrefGrid = $("<div/>").addClass("selections-grid").appendTo(hotkeyPref);
        var hotkeyPrefOptions = [0, 1];
        hotkeyPrefOptions.forEach(function (option, i) {
            var label = $("<label/>").addClass("selection-container hotkeyPrefSelection").html(option === 1 ? "Enabled" : "Disabled");
            $("<input/>").attr({
                type: "radio",
                name: "hotkeyPref",
                value: option,
                checked: HotKeys.enabled === option ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(hotkeyPrefGrid)
        });
        $("<div/>").addClass("hotkeyAllDefault actionButton").attr({
            id: "hotkeyAllDefault"
        }).appendTo(tabHotkeys);
        $("<div/>").addClass("hotkeyList").attr({
            id: "hotkeyList"
        }).appendTo(tabHotkeys);
        var notificationPref = $("<div/>").attr({
            id: "settings_notificationPref"
        }).addClass("setting-container").appendTo(tabNotifications);
        var notificationPref_details = {
            title: "Notifications",
            description: "Choose whether notifications are rendered."
        };
        settingsBoilerplate(notificationPref_details).appendTo(notificationPref);
        var notificationPrefGrid = $("<div/>").addClass("selections-grid").appendTo(notificationPref);
        var notificationPrefOptions = [0, 1];
        notificationPrefOptions.forEach(function (option, i) {
            var label = $("<label/>").addClass("selection-container toastPrefSelection").html(option === 1 ? "Enabled" : "Disabled");
            $("<input/>").attr({
                type: "radio",
                name: "notificationPref",
                value: option,
                checked: settings.toasts === option ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(notificationPrefGrid)
        });
        var notificationSize = $("<div/>").attr({
            id: "settings_notificationSize"
        }).addClass("setting-container").appendTo(tabNotifications);
        var notificationSize_details = {
            title: "Notification Size",
            description: "Choose between a spacious sizing for notifications or a more compact sizing."
        };
        settingsBoilerplate(notificationSize_details).appendTo(notificationSize);
        var notificationSizeGrid = $("<div/>").addClass("selections-grid").appendTo(notificationSize);
        var sizes = [0, 1];
        sizes.forEach(function (size, i) {
            var label = $("<label/>").addClass("selection-container toastSizeSelection").html(size === 1 ? "Comfortable" : "Compact");
            $("<input/>").attr({
                type: "radio",
                name: "toastSize",
                value: size,
                checked: size === settings.toastSize ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(notificationSizeGrid)
        });
        var notificationDuration = $("<div/>").attr({
            id: "settings_notificationDuration"
        }).addClass("setting-container").appendTo(tabNotifications);
        var notificationDuration_details = {
            title: "Notification Duration",
            description: "Designates the duration a notification will remain present on the screen."
        };
        settingsBoilerplate(notificationDuration_details).appendTo(notificationDuration);
        var notificationDurationGrid = $("<div/>").addClass("selections-grid").appendTo(notificationDuration);
        var durations = [1e3, 3e3, 5e3, 1e4, 15e3, 3e4];
        durations.forEach(function (duration, i) {
            var time = duration / 1e3;
            var label = $("<label/>").addClass("selection-container toastDurationSelection").html("".concat(time, " ").concat(time > 1 ? "seconds" : "second"));
            $("<input/>").attr({
                type: "radio",
                name: "toastDuration",
                value: duration,
                checked: duration === settings.toastDuration ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(notificationDurationGrid)
        });
        var notificationLocation = $("<div/>").attr({
            id: "settings_notificationLocation"
        }).addClass("setting-container").appendTo(tabNotifications);
        var notificationLocation_details = {
            title: "Notification Location",
            description: "Designates where the notifications for various events (such as exceptional crafts) will appear."
        };
        settingsBoilerplate(notificationLocation_details).appendTo(notificationLocation);
        var selectionsGrid = $("<div/>").addClass("selections-grid").appendTo(notificationLocation);
        var locations = ["Top-Left", "Top-Center", "Top-Right", "Bottom-Left", "Bottom-Center", "Bottom-Right"];
        locations.forEach(function (location, i) {
            var label = $("<label/>").addClass("selection-container toastPositionSelection").html(location);
            $("<input/>").attr({
                type: "radio",
                name: "toast",
                value: location.toLowerCase(),
                checked: location.toLowerCase() === settings.toastPosition ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(selectionsGrid)
        });
        var tooltipPref = $("<div/>").attr({
            id: "settings_tooltipPref"
        }).addClass("setting-container").appendTo(tabGeneral);
        var tooltipPref_details = {
            title: "Tooltips",
            description: "Choose whether tooltips are rendered when hovering over tooltip-enabled content."
        };
        settingsBoilerplate(tooltipPref_details).appendTo(tooltipPref);
        var tooltipPrefGrid = $("<div/>").addClass("selections-grid").appendTo(tooltipPref);
        var options = [0, 1];
        options.forEach(function (option, i) {
            var label = $("<label/>").addClass("selection-container tooltipPrefSelection").html(option === 1 ? "Enabled" : "Disabled");
            $("<input/>").attr({
                type: "radio",
                name: "tooltipPref",
                value: option,
                checked: settings.tpref === option ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(tooltipPrefGrid)
        });
        var leaveSite = $("<div/>").attr({
            id: "settings_leaveSite"
        }).addClass("setting-container").appendTo(tabGeneral);
        var leaveSite_details = {
            title: "End Session Confirmation",
            description: "Will prompt you with a confirmation before closing the window or tab. Changes will take affect on next session."
        };
        settingsBoilerplate(leaveSite_details).appendTo(leaveSite);
        var leaveSiteGrid = $("<div/>").addClass("selections-grid").appendTo(leaveSite);
        var leaveSiteOptions = [0, 1];
        leaveSiteOptions.forEach(function (option, i) {
            var label = $("<label/>").addClass("selection-container leaveSiteSelection").html(option === 1 ? "Enabled" : "Disabled");
            $("<input/>").attr({
                type: "radio",
                name: "leaveSite",
                value: option,
                checked: settings.leavesite === option ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(leaveSiteGrid)
        });
        var animPref = $("<div/>").attr({
            id: "settings_animPref"
        }).addClass("setting-container").appendTo(tabGeneral);
        var animPref_details = {
            title: "Animations",
            description: "Choose whether animations are played when navigating through content."
        };
        settingsBoilerplate(animPref_details).appendTo(animPref);
        var animPrefGrid = $("<div/>").addClass("selections-grid").appendTo(animPref);
        var anims = [0, 1];
        anims.forEach(function (anim, i) {
            var label = $("<label/>").addClass("selection-container animPrefSelection").html(anim === 1 ? "Enabled" : "Disabled");
            $("<input/>").attr({
                type: "radio",
                name: "animPref",
                value: anim,
                checked: settings.animations === anim ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(animPrefGrid)
        });
        var gpuEffectsPref = $("<div/>").attr({
            id: "settings_gpuEffectsPref"
        }).addClass("setting-container").appendTo(tabGeneral);
        var gpuEffectsPref_details = {
            title: "GPU Effects",
            description: "Choose whether some GPU-intensive effects like background blurs are utilized."
        };
        settingsBoilerplate(gpuEffectsPref_details).appendTo(gpuEffectsPref);
        var gpuEffectsPrefGrid = $("<div/>").addClass("selections-grid").appendTo(gpuEffectsPref);
        var gpuEffects = [0, 1];
        gpuEffects.forEach(function (effect, i) {
            var label = $("<label/>").addClass("selection-container gpuEffectsPrefSelection").html(effect === 1 ? "Enabled" : "Disabled");
            $("<input/>").attr({
                type: "radio",
                name: "gpuEffectsPref",
                value: effect,
                checked: settings.gpuEffects === effect ? "checked" : null
            }).appendTo(label);
            $("<span/>").addClass("selection").appendTo(label);
            label.appendTo(gpuEffectsPrefGrid)
        });
        var clearSettings = $("<div/>").attr({
            id: "settings_clearSettings"
        }).addClass("setting-container").appendTo(tabGeneral);
        var clearSettings_details = {
            title: "Reset All Settings",
            description: "Reset your settings to default values for this browser only. This will reload the game but your progress will not be reset."
        };
        settingsBoilerplate(clearSettings_details).appendTo(clearSettings);
        $("<button/>").attr({
            id: "clearSettings"
        }).addClass("actionButton").html("Reset All Settings").appendTo(clearSettings);
        return dialogActions
    }
    if (id === "patch_notes") {
        var patchListContainer = $("<div/>").attr({
            id: "patchList"
        }).addClass("patchListContainer").appendTo(dialogActions);
        $("<div/>").attr({
            id: "descPatch",
            tabindex: 1
        }).addClass("descPatch").html("You are running the latest version of Forge & Fortune.").appendTo(patchListContainer);
        var patchListFooter = $("<div/>").attr({
            id: "patchListFooter"
        }).addClass("patchListFooter").appendTo(dialogActions);
        var updateTrigger = $("<div/>").attr({
            id: "updateTrigger"
        }).addClass("updateTriggerContainer").appendTo(patchListFooter);
        $("<div/>").addClass("updateNotice").html(displayText("update_notice_desc")).appendTo(updateTrigger);
        var updateActions = $("<div/>").addClass("updateActions").appendTo(updateTrigger);
        $("<div/>").attr({
            id: "updateDownloadSave"
        }).addClass("actionButton").html(displayText("update_notice_download")).appendTo(updateActions);
        $("<div/>").attr({
            id: "updateRefresh"
        }).addClass("actionButton").html(displayText("update_notice_update")).appendTo(updateActions);
        return dialogActions
    }
    if (id === "offline_stats") {
        var timeSince = $("<div/>").addClass("offlineStatContainer").appendTo(dialogActions);
        $("<div/>").html(displayText("offline_dialog_time_since_header")).addClass("offlineStatHeader").appendTo(timeSince);
        var timeDiv = $("<div/>").html(offlineStat.time).addClass("offlineStatBox").appendTo(timeSince);
        if (offlineStat.time === "3 days, 0 hours, 0 minutes, 0 seconds") timeDiv.html(offlineStat.time + " (max)");
        var goldEarned = $("<div/>").addClass("offlineStatContainer").appendTo(dialogActions);
        $("<div/>").html(displayText("offline_dialog_gold_earned_header")).addClass("offlineStatHeader").appendTo(goldEarned);
        $("<div/>").html(formatToUnits(offlineStat.gold, 2)).addClass("offlineStatBox").appendTo(goldEarned);
        return dialogActions
    }
}

function settingsBoilerplate(settingDetails, isBeta) {
    var detailsContainer = $("<div/>").addClass("settings-details");
    var title = $("<div/>").addClass("settings-title").html(settingDetails.title).appendTo(detailsContainer);
    if (isBeta) $("<span/>").addClass("beta-tag tooltip").attr({
        "data-tooltip": "beta_feature"
    }).html("Beta").appendTo(title);
    $("<div/>").addClass("settings-description").html(settingDetails.description).appendTo(detailsContainer);
    return detailsContainer
}

function setDialogOpen(props) {
    var dialogContainer = $("<div/>").attr({
        id: "dialogContainer"
    }).addClass("dialogContainer").appendTo(document.body);
    var dialogBoxContainer = $("<div/>").addClass("dialogContent dialogOpening").appendTo(dialogContainer);
    if (props.id === "settings") $(dialogBoxContainer).addClass("isSettingsDialog");
    if (props.id === "patch_notes") $(dialogBoxContainer).addClass("isPatchDialog");
    var dialogClose = $("<div/>").attr({
        role: "button",
        tabindex: 1,
        "aria-label": "Close Dialog"
    }).addClass("dialogClose").html('<i class="fas fa-times"></i>').appendTo(dialogBoxContainer);
    var dialogTitle = $("<div/>").addClass("dialogTitle").appendTo(dialogBoxContainer);
    $("<div/>").addClass("dialogTitleIcon").html(props.icon).appendTo(dialogTitle);
    $("<div/>").addClass("dialogTitleText").html(props.title).appendTo(dialogTitle);
    var dialogContentContainer = $("<div/>").addClass("dialogContentContainer").appendTo(dialogBoxContainer);
    if (props.description) $("<div/>").addClass("dialogDescription").html(props.description).appendTo(dialogContentContainer);
    var dialogActions = renderDialogActions(props.id);
    dialogActions.appendTo(dialogContentContainer);
    if (props.id === "patch_notes") showPatchNotes();
    settings.dialogStatus = 1;
    saveSettings()
}

function setDialogClose() {
    settings.dialogStatus = 0;
    saveSettings();
    $("#dialogContainer").addClass("dialogInactive");
    $(".dialogContent").removeClass("dialogOpening").addClass("dialogClosing")
}
$(document).on("transitionend", ".dialogContent", function (e) {
    if (e.target === e.currentTarget) $("#dialogContainer").remove()
});
$(document).on("click", ".isDialog", function (e) {
    var id = $(e.currentTarget).attr("data-dialog-id");
    if (settings.dialogStatus === 0 && id) setDialogOpen(DialogManager.findDialog(id))
});
$(document).on("click ", ".dialogClose", function (e) {
    setDialogClose();
    HotKeys.assigning = null
});
$(document).on("keyup", function (e) {
    if (e.keyCode === 27) {
        setDialogClose();
        HotKeys.assigning = null
    }
});
$(document).on("click", ".dialogContainer", function (e) {
    if (e.target === e.currentTarget) {
        setDialogClose();
        HotKeys.assigning = null
    }
});
$(document).on("click", "#settingTabNotifications", function (e) {
    $(".settingsTab").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    $("#settingContentGeneral").removeClass("selected");
    $("#settingContentHotkeys").removeClass("selected");
    $("#settingContentNotifcations").addClass("selected")
});
$(document).on("click", "#settingTabHotkeys", function (e) {
    $(".settingsTab").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    $("#settingContentGeneral").removeClass("selected");
    $("#settingContentNotifcations").removeClass("selected");
    $("#settingContentHotkeys").addClass("selected");
    showHotkey()
});
$(document).on("click", "#settingTabGeneral", function (e) {
    $(".settingsTab").removeClass("selected");
    $(e.currentTarget).addClass("selected");
    $("#settingContentNotifcations").removeClass("selected");
    $("#settingContentHotkeys").removeClass("selected");
    $("#settingContentGeneral").addClass("selected")
});
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor)
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor
}
var SkillManager = {
    skills: [],
    skillEffects: [],
    addSkill: function addSkill(skill) {
        this.skills.push(skill)
    },
    idToSkill: function idToSkill(id) {
        return this.skills.find(function (skill) {
            return skill.id === id
        })
    }
};
var PlaybookManager = {
    playbookDB: [],
    addPlaybookTemplate: function addPlaybookTemplate(pb) {
        this.playbookDB.push(pb)
    },
    idToPlaybook: function idToPlaybook(id) {
        return this.playbookDB.find(function (playbook) {
            return playbook.id === id
        })
    },
    createSave: function createSave() {
        var save = {};
        save.playbookDB = [];
        this.playbookDB.forEach(function (playbook) {
            save.playbookDB.push(playbook.createSave())
        });
        return save
    },
    loadSave: function loadSave(save) {
        var _this = this;
        save.playbookDB.forEach(function (playbookSave) {
            var playbook = _this.idToPlaybook(playbookSave.id);
            playbook.loadSave(playbookSave)
        })
    },
    clearProgress: function clearProgress() {
        this.playbookDB.forEach(function (pb) {
            return pb.clearProgress()
        })
    },
    generatePlayBook: function generatePlayBook(playbookID) {
        var playbookTemplate = this.idToPlaybook(playbookID);
        return new Playbook(playbookTemplate)
    },
    generatePlayBookFromSkills: function generatePlayBookFromSkills(s1, s2, s3, s4) {
        var skills = {
            skill1: s1,
            skill2: s2,
            skill3: s3,
            skill4: s4
        };
        return new Playbook(skills)
    },
    unlockPlaybook: function unlockPlaybook(playbookID) {
        var playbook = this.idToPlaybook(playbookID);
        playbook.unlock();
        playbook.toggleSeen();
        $("#heroTab").addClass("hasEvent")
    },
    playbookUnlocked: function playbookUnlocked(playbookID) {
        var unlocked = this.playbookDB.filter(function (pb) {
            return pb.unlocked
        }).map(function (pb) {
            return pb.id
        });
        return unlocked.includes(playbookID)
    }
};
var playBookTemplate = function () {
    function playBookTemplate(props) {
        _classCallCheck(this, playBookTemplate);
        Object.assign(this, props);
        this.unlocked = false;
        this.seen = true
    }
    _createClass(playBookTemplate, [{
        key: "skillIDs",
        value: function skillIDs() {
            return [this.skill1, this.skill2, this.skill3, this.skill4]
        }
    }, {
        key: "createSave",
        value: function createSave() {
            var save = {};
            save.id = this.id;
            save.unlocked = this.unlocked;
            return save
        }
    }, {
        key: "loadSave",
        value: function loadSave(save) {
            this.unlocked = save.unlocked
        }
    }, {
        key: "clearProgress",
        value: function clearProgress() {
            this.unlocked = false;
            this.seen = true
        }
    }, {
        key: "unlock",
        value: function unlock() {
            this.unlocked = true
        }
    }, {
        key: "toggleSeen",
        value: function toggleSeen() {
            this.seen = !this.seen
        }
    }, {
        key: "icon",
        value: function icon() {
            return SkillManager.idToSkill(this.playbookIcon).icon
        }
    }]);
    return playBookTemplate
}();
var Skill = function () {
    function Skill(props) {
        _classCallCheck(this, Skill);
        Object.assign(this, props);
        this.POWICON = miscIcons.pow
    }
    _createClass(Skill, [{
        key: "passiveCheck",
        value: function passiveCheck(type, target, attack) {
            SkillManager.skillEffects[this.id](type, target, attack, this)
        }
    }]);
    return Skill
}();
var Playbook = function () {
    function Playbook(pbTemplate) {
        _classCallCheck(this, Playbook);
        Object.assign(this, pbTemplate);
        this.skills = [SkillManager.idToSkill(pbTemplate.skill1), SkillManager.idToSkill(pbTemplate.skill2), SkillManager.idToSkill(pbTemplate.skill3), SkillManager.idToSkill(pbTemplate.skill4)];
        this.position = 0
    }
    _createClass(Playbook, [{
        key: "reset",
        value: function reset() {
            this.position = 0
        }
    }, {
        key: "nextSkill",
        value: function nextSkill(reverse) {
            var skill = this.skills[this.position];
            if (reverse) this.position -= 1;
            else this.position += 1;
            if (this.position > 3) this.position = 0;
            if (this.position < 0) this.position = 3;
            return skill
        }
    }, {
        key: "previousSkill",
        value: function previousSkill(reverse) {
            if (reverse) {
                this.position += 1;
                if (this.position > 3) this.position = 0;
                return
            }
            this.position -= 1;
            if (this.position < 0) this.position = 3
        }
    }, {
        key: "getSkillIcons",
        value: function getSkillIcons() {
            return this.skills.map(function (s) {
                return s.icon
            })
        }
    }, {
        key: "getSkillIDs",
        value: function getSkillIDs() {
            return this.skills.map(function (s) {
                return s.id
            })
        }
    }, {
        key: "skillCount",
        value: function skillCount() {
            return this.position
        }
    }, {
        key: "untilNextSpecial",
        value: function untilNextSpecial(reverse) {
            var count = 0;
            if (reverse) {
                for (var i = this.position; i > this.position - 4; i--) {
                    var reali = i < 0 ? i + 4 : i;
                    if (this.skills[reali].id !== "S0000") return count;
                    count += 1
                }
                return count
            }
            for (var _i = this.position; _i < this.position + 4; _i++) {
                var _reali = _i > 3 ? _i - 4 : _i;
                if (this.skills[_reali].id !== "S0000") return count;
                count += 1
            }
            return count
        }
    }, {
        key: "icon",
        value: function icon() {
            return SkillManager.idToSkill(this.playbookIcon).icon
        }
    }]);
    return Playbook
}();
SkillManager.skillEffects["S0000"] = function (combatParams) {
    if (combatParams.attacker.hasBuff("B0043")) combatParams.power = Math.floor(combatParams.power * 1.2);
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES, true);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["S0010"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        return BuffManager.generateBuff("B0010", target, combatParams.attack.mod1)
    })
};
SkillManager.skillEffects["S0011"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        return BuffManager.generateBuff("B0011", target, combatParams.power)
    })
};
SkillManager.skillEffects["S0012"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.BEHIND, SideType.ALLIES);
    if (targets === null) return;
    targets.forEach(function (target) {
        return BuffManager.generateBuff("B0012", target, combatParams.attack.mod1)
    })
};
SkillManager.skillEffects["S0020"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        if (target.getBuffStacks("B0020") === 5) return;
        BuffManager.generateBuff("B0020", target, combatParams.power);
        target.heal(combatParams.power);
        refreshHPBar(target)
    })
};
SkillManager.skillEffects["S0021"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        return BuffManager.generateBuff("B0021", target)
    })
};
SkillManager.skillEffects["S0022"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        if (target.getBuffStacks("B0022") === 5) return;
        var power1 = combatParams.attack.mod1;
        var power2 = combatParams.attack.mod2;
        BuffManager.generateBuff("B0022", target, power1, power2);
        refreshHPBar(target)
    })
};
SkillManager.skillEffects["S0030"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    var target = targets[0];
    if (!target.passive) {
        targets.forEach(function (target) {
            target.takeDamagePercent(combatParams.attack.mod1 * 100);
            refreshHPBar(target)
        })
    }
    var targets2 = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets2.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets2.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S0031"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var thisunit = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    targets.forEach(function (target) {
        if (target.isLifeTapped()) {
            var healAmt = Math.floor(combatParams.power * combatParams.attack.mod1);
            thisunit.heal(healAmt)
        }
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S0032"] = function (combatParams) {
    var thisUnit = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    if (!thisUnit.passive) {
        thisUnit.forEach(function (target) {
            target.takeDamagePercent(combatParams.attack.mod1 * 100);
            refreshHPBar(target)
        })
    }
    var targets = combatParams.getTarget(TargetType.CLEAVE, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S0040"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.CLEAVE, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S0041"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var selfTarget = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    combatParams.power -= Math.floor(combatParams.power * combatParams.attack.mod1 * selfTarget.getBuffStacks("B0041"));
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    BuffManager.generateBuff("B0041", selfTarget, 0);
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S0042"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var selfTarget = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    var buffPower = Math.floor(selfTarget.getPow() * combatParams.attack.mod1);
    BuffManager.generateBuff("B0042", selfTarget, buffPower);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1010"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        if (combatParams.attacker.passive) BuffManager.generateBuff("B1011", target, Math.floor(combatParams.power * combatParams.attack.mod1 * 1.25));
        else BuffManager.generateBuff("B1010", target, Math.floor(combatParams.power * combatParams.attack.mod1))
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1011"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        if (combatParams.attacker.passive) BuffManager.generateBuff("B1011", target, Math.floor(combatParams.power * combatParams.attack.mod1 * 1.25));
        else BuffManager.generateBuff("B1010", target, Math.floor(combatParams.power * combatParams.attack.mod1))
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1012"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        if (target.getBuffStacks("B1012") === 2) {
            var dmg = target.getBuff("B1012").power;
            target.takeDamage(dmg);
            BuffManager.removeBuff("B1012", target);
            return
        }
        BuffManager.generateBuff("B1012", target, Math.floor(combatParams.power))
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1020"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var originalPower = combatParams.power;
    targets.forEach(function (target) {
        if (target.isChilled()) {
            combatParams.power = Math.floor(combatParams.attack.mod1 * originalPower);
            target.takeAttack(combatParams)
        } else {
            target.takeAttack(combatParams);
            if (combatParams.attacker.id === "H102" && combatParams.attacker.passive) BuffManager.generateBuff("B1021", target, 0);
            else BuffManager.generateBuff("B1020", target, 0)
        }
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1021"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        if (combatParams.attacker.id === "H102" && combatParams.attacker.passive) BuffManager.generateBuff("B1021", target, 0);
        else BuffManager.generateBuff("B1020", target, 0)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1022"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        BuffManager.generateBuff("B1022", target, 0)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1030"] = function (combatParams) {
    if (!combatParams.attacker.passive) {
        var lifeDrain = combatParams.getTarget(TargetType.BEFORE, SideType.ALLIES, true);
        if (lifeDrain === null || lifeDrain[0].race === "undead") return;
        lifeDrain.forEach(function (target) {
            target.takeAttack(combatParams)
        })
    }
    var targets = combatParams.getTarget(TargetType.MIRROR, SideType.ENEMIES);
    var damage = Math.floor(combatParams.power * combatParams.attack.mod1);
    targets.forEach(function (target) {
        BuffManager.generateBuff("B1030", target, damage)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1031"] = function (combatParams) {
    if (!combatParams.attacker.passive) {
        var lifeDrain = combatParams.getTarget(TargetType.AFTER, SideType.ALLIES, true);
        if (lifeDrain === null || lifeDrain[0].race === "undead") return;
        lifeDrain.forEach(function (target) {
            target.takeAttack(combatParams)
        })
    }
    var targets = combatParams.getTarget(TargetType.MIRROR, SideType.ENEMIES);
    var damage = Math.floor(combatParams.power * combatParams.attack.mod1);
    targets.forEach(function (target) {
        BuffManager.generateBuff("B1030", target, damage)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S1032"] = function (combatParams) {
    if (!combatParams.attacker.passive) {
        var lifeDrainAllies = combatParams.getTarget(TargetType.ALL, SideType.ALLIES, true);
        lifeDrainAllies.forEach(function (target) {
            if (target.race === "undead") return;
            var damage1 = Math.floor(combatParams.power * combatParams.attack.mod1);
            BuffManager.generateBuff("B1030", target, damage1)
        })
    }
    var lifeDrainEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    var damage = Math.floor(combatParams.power * combatParams.attack.mod1);
    lifeDrainEnemies.forEach(function (target) {
        BuffManager.generateBuff("B1030", target, damage)
    })
};
SkillManager.skillEffects["S1040"] = function (combatParams) {
    if (combatParams.attacker.passive) combatParams.power = Math.floor(combatParams.power * 1.25);
    var targets = combatParams.getTarget(TargetType.MISSINGHP, SideType.ALLIES);
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["S1041"] = function (combatParams) {
    if (combatParams.attacker.passive) combatParams.power = Math.floor(combatParams.power * 1.25);
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["S1042"] = function (combatParams) {
    if (combatParams.attacker.passive) combatParams.power = Math.floor(combatParams.power * 1.25);
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ALLIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("B1042", target, combatParams.power)
    })
};
SkillManager.skillEffects["S2010"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    var buffID = combatParams.attacker.passive ? "B2010A" : "B2010";
    targets.forEach(function (target) {
        var stacks = target.getBuffStacks(buffID);
        var needHeal = stacks < BuffManager.maxStack(buffID) ? true : false;
        BuffManager.generateBuff(buffID, target, Math.floor(combatParams.power));
        if (!needHeal) return;
        target.heal(combatParams.power);
        refreshHPBar(target)
    })
};
SkillManager.skillEffects["S2011"] = function (combatParams) {
    var buffID = combatParams.attacker.passive ? "B2011A" : "B2011";
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff(buffID, target, Math.floor(combatParams.power))
    })
};
SkillManager.skillEffects["S2012"] = function (combatParams) {
    var buffID = combatParams.attacker.passive ? "B2012A" : "B2012";
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff(buffID, target, Math.floor(combatParams.power))
    })
};
SkillManager.skillEffects["S2020"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.LOWESTHP, SideType.ENEMIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (target.maxHP() * combatParams.attack.mod1 >= target.hp || combatParams.attacker.passive) {
            combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod2)
        }
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2021"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.THIRD, SideType.ENEMIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (combatParams.attacker.passive) {
            combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1)
        } else if (target.hasBuff("B1010")) {
            combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
            BuffManager.removeBuff("B1010", target)
        } else if (target.hasBuff("B1011")) {
            combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
            BuffManager.removeBuff("B1011", target)
        }
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2022"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FOURTH, SideType.ENEMIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (target.maxHP() === target.hp || combatParams.attacker.passive) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2030"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        target.takeAttack(combatParams);
        if (combatParams.attacker.passive) target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2031"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SECOND, SideType.ENEMIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        var powMod = combatParams.attacker.passive ? 5 : combatParams.attack.mod1;
        if (target.isChilled()) combatParams.power = Math.floor(combatParams.power * powMod);
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2032"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (combatParams.attacker.hp % 10 === 7) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
        else if (combatParams.attacker.passive && combatParams.attacker.hp > 7) {
            var damage = (combatParams.attacker.hp % 10 + 3) % 10;
            target.takeDamage(damage)
        }
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2040"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SECOND, SideType.ENEMIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("B2040", target, 0);
        if (combatParams.attacker.passive) combatParams.power *= 3;
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2041"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.THIRD, SideType.ENEMIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("B2040", target, 0);
        if (combatParams.attacker.passive) combatParams.power *= 3;
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["S2042"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FOURTH, SideType.ENEMIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("B2040", target, 0);
        if (combatParams.attacker.passive) combatParams.power *= 3;
        target.takeAttack(combatParams)
    });
    if (combatParams.attacker.getRuneCount(RuneType.FIRE) < 6) return;
    var allEnemies = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    allEnemies.forEach(function (target) {
        if (targets.includes(target)) return;
        target.takeDamage(Math.min(combatParams.power * .1))
    })
};
SkillManager.skillEffects["SM100"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        return target.takeAttack(combatParams)
    });
    var secondaryTargets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    secondaryTargets.forEach(function (target) {
        return target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM101"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        return target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM102"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        BuffManager.generateBuff("BM102", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM103"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var selfTarget = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    if (selfTarget.hp === selfTarget.maxHP()) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM104"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (target.buffCount() > 0) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    })
};
SkillManager.skillEffects["SM105"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (target.maxHP() * combatParams.attack.mod1 >= target.hp) {
            combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod2)
        }
        target.heal(combatParams.power);
        combatParams.power = ogPow
    })
};
SkillManager.skillEffects["SM106"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    targets.forEach(function (target) {
        if (target.debuffCount() > 0) target.heal(combatParams.power);
        target.removeDebuffs()
    })
};
SkillManager.skillEffects["SM107"] = function (combatParams) {
    if (combatParams.attacker.hpLessThan(combatParams.attack.mod1)) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod2);
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM108"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ADJACENT, SideType.ALLIES);
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM109"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FOURTH, SideType.ENEMIES);
    var self = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (!self.hpLessThan(combatParams.attack.mod1)) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod2);
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    })
};
SkillManager.skillEffects["SM200"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("BM200", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM201"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    var debuffCount = targets.reduce(function (a, b) {
        return a + b.debuffCount()
    }, 0);
    var originalPower = combatParams.power;
    targets.forEach(function (target) {
        target.removeDebuffs()
    });
    if (debuffCount > 0) {
        var targets2 = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
        combatParams.power = Math.floor(originalPower * debuffCount);
        targets2.forEach(function (target) {
            target.takeAttack(combatParams)
        })
    }
};
SkillManager.skillEffects["SM202"] = function (combatParams) {
    var originalDmg = combatParams.power;
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        if (target.hpLessThan(combatParams.attack.mod1)) combatParams.power = Math.floor(originalDmg * combatParams.attack.mod2);
        else combatParams.power = originalDmg;
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM203"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.MISSINGHP, SideType.ALLIES);
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM204"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeDamage(combatParams.power)
    })
};
SkillManager.skillEffects["SM205"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("BM205", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM206"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    var selfTarget = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    if (selfTarget.hp === selfTarget.maxHP()) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM207"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        if (target.hp === target.maxHP()) target.takeDamagePercent(combatParams.attack.mod1 * 100)
    })
};
SkillManager.skillEffects["SM208"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("BM208", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM209"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        var ogPow = combatParams.power;
        if (target.maxHP() === target.hp) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
        target.takeAttack(combatParams);
        combatParams.power = ogPow
    })
};
SkillManager.skillEffects["SM300"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM301"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    targets.forEach(function (target) {
        combatParams.power = Math.floor(target.maxHP() * combatParams.attack.mod1);
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM302"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FOURTH, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM303"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    var allyCount = combatParams.getTarget(TargetType.ALL, SideType.ALLIES).length - 1;
    combatParams.power = Math.floor(combatParams.power * (1 + .5 * allyCount));
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM304"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ADJACENT, SideType.ALLIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("BM304", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM305"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("BM305", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM306"] = function (combatParams) {
    var thisunit = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    thisunit.takeDamagePercent(100)
};
SkillManager.skillEffects["SM307"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.LOWESTHP, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM308"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.BEFORE, SideType.ALLIES);
    if (!targets) return;
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM309"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    var thisunit = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    if (thisunit.hp !== thisunit.maxHP()) combatParams.power = Math.floor(combatParams.power * combatParams.attack.mod1);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM901"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.SECOND, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM902"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.CLEAVE, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM903"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    var hps = targets.map(function (t) {
        return t.hp
    }).reduce(function (a, b) {
        return a + b
    }, 0);
    var equalizedHP = Math.floor(hps / targets.length);
    targets.forEach(function (target) {
        target.setHP(equalizedHP)
    })
};
SkillManager.skillEffects["SM904"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        combatParams.power = Math.ceil(target.maxHP() * .02);
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM904D"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.TWOLEASTMAX, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM904A"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM904B"] = function (combatParams) {
    var target = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    BuffManager.clearBuffs(target);
    target.healPercent(100);
    target.state = null;
    target.image = '<img src="assets/images/enemies/B904A.gif">';
    $("#mobImage" + target.uniqueid).html(target.image);
    target.playbook = PlaybookManager.generatePlayBookFromSkills("S0000", "S0000", "S0000", "SM904A");
    refreshSkillUnit(target)
};
SkillManager.skillEffects["SM904C"] = function (combatParams) {};
SkillManager.skillEffects["SM905A"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ENEMIES, SideType.ENEMIES);
    var thisMob = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    if (thisMob.state === null || thisMob.state === targets.length - 1) thisMob.state = 0;
    else thisMob.state += 1;
    var target = targets[thisMob.state];
    target.takeAttack(combatParams);
    if (target.type === "Might") {
        BuffManager.generateBuff("BM905A", thisMob, combatParams.power);
        thisMob.image = '<img src="assets/images/enemies/B905A.gif">';
        $("#mobImage" + thisMob.uniqueid).html(thisMob.image)
    } else if (target.type === "Mind") {
        BuffManager.generateBuff("BM905B", thisMob, combatParams.power);
        thisMob.image = '<img src="assets/images/enemies/B905B.gif">';
        $("#mobImage" + thisMob.uniqueid).html(thisMob.image)
    } else if (target.type === "Moxie") {
        BuffManager.generateBuff("BM905C", thisMob, combatParams.power);
        thisMob.image = '<img src="assets/images/enemies/B905C.gif">';
        $("#mobImage" + thisMob.uniqueid).html(thisMob.image)
    }
};
SkillManager.skillEffects["SM905B"] = function (combatParams) {
    var thisMob = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    thisMob.image = '<img src="assets/images/enemies/B905.gif">';
    $("#mobImage" + thisMob.uniqueid).html(thisMob.image);
    if (thisMob.hasBuff("BM905A")) {
        BuffManager.removeBuff("BM905A", thisMob);
        BuffManager.generateBuff("BM905D", thisMob, combatParams.power)
    } else if (thisMob.hasBuff("BM905B")) {
        var stacks = thisMob.getBuffStacks("BM905E");
        BuffManager.removeBuff("BM905B", thisMob);
        var healAmt = Math.floor(combatParams.power * (1 + stacks * .1));
        thisMob.heal(healAmt);
        BuffManager.generateBuff("BM905E", thisMob, combatParams.power)
    } else if (thisMob.hasBuff("BM905C")) {
        BuffManager.removeBuff("BM905C", thisMob);
        var buffTarget = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES)[0];
        BuffManager.generateBuff("BM905F", buffTarget, combatParams.power)
    }
};
SkillManager.skillEffects["SM906"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        BuffManager.generateBuff("BM906", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM906A"] = function (combatParams) {};
SkillManager.skillEffects["SM906B"] = function (combatParams) {
    var target = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    target.state = null;
    target.image = '<img src="assets/images/enemies/B906.gif">';
    $("#mobImage" + target.uniqueid).html(target.image);
    target.playbook = PlaybookManager.generatePlayBookFromSkills(target.skill1, target.skill2, target.skill3, target.skill4);
    refreshSkillUnit(target);
    BuffManager.removeBuff("BM906A", target);
    BuffManager.generateBuff("BM906B", target, 0);
    target.healPercent(100)
};
SkillManager.skillEffects["SM907A"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var aoeTarget = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    var self = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    var stacks = self[0].getBuffStacks("BM907");
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    combatParams.power += combatParams.power * stacks * combatParams.attack.mod1;
    aoeTarget.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM907B"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var self = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    var stacks = self[0].getBuffStacks("BM907");
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    });
    combatParams.power += combatParams.power * stacks * combatParams.attack.mod1;
    self.forEach(function (target) {
        target.heal(Math.floor(combatParams.power))
    })
};
SkillManager.skillEffects["SM907C"] = function (combatParams) {};
SkillManager.skillEffects["SM907D"] = function (combatParams) {
    var self = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    BuffManager.generateBuff("BM907", self, 0)
};
SkillManager.skillEffects["SM908"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams);
        combatParams.power = combatParams.power * combatParams.attack.mod1
    })
};
SkillManager.skillEffects["SM908A"] = function (combatParams) {
    var random = combatParams.getTarget(TargetType.RANDOM, SideType.ENEMIES);
    random.forEach(function (target) {
        BuffManager.generateBuff("BM908A", target, 0)
    })
};
SkillManager.skillEffects["SM908B"] = function (combatParams) {
    var self = combatParams.getTarget(TargetType.SELF, SideType.ALLIES);
    self.forEach(function (target) {
        BuffManager.generateBuff("BM908B", target, combatParams.attack.mod1)
    })
};
SkillManager.skillEffects["SM909A"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var self = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    var stacks = self.getBuffStacks("BM909");
    targets.forEach(function (target) {
        var oldPower = combatParams.power;
        if (self.hasBuff("BM909A1") && target.type === "Might") combatParams.power = combatParams.power * combatParams.attack.mod1;
        else if (self.hasBuff("BM909B1") && target.type === "Mind") combatParams.power = combatParams.power * combatParams.attack.mod1;
        else if (self.hasBuff("BM909C1") && target.type === "Moxie") combatParams.power = combatParams.power * combatParams.attack.mod1;
        for (var i = 0; i <= stacks; i++) {
            target.takeAttack(combatParams)
        }
        combatParams.power = oldPower
    })
};
SkillManager.skillEffects["SM909B"] = function (combatParams) {
    var self = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    var stacks = self.getBuffStacks("BM909");
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    if (stacks === 1) {
        targets = combatParams.getTarget(TargetType.CLEAVE, SideType.ENEMIES)
    } else if (stacks === 2) {
        targets = combatParams.getTarget(TargetType.SWIPE, SideType.ENEMIES)
    } else if (stacks === 3) {
        targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES)
    }
    targets.forEach(function (target) {
        var oldPower = combatParams.power;
        if (self.hasBuff("BM909A1") && target.type === "Might") combatParams.power = combatParams.power * combatParams.attack.mod1;
        else if (self.hasBuff("BM909B1") && target.type === "Mind") combatParams.power = combatParams.power * combatParams.attack.mod1;
        else if (self.hasBuff("BM909C1") && target.type === "Moxie") combatParams.power = combatParams.power * combatParams.attack.mod1;
        target.takeAttack(combatParams);
        combatParams.power = oldPower
    })
};
SkillManager.skillEffects["SM909C"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    var targets2 = combatParams.getTarget(TargetType.LOWESTHP, SideType.ENEMIES);
    var selfTarget = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    if (selfTarget.hasBuff("BM909C1")) {
        targets2.forEach(function (target) {
            var oldPower = combatParams.power;
            if (selfTarget.hasBuff("BM909A1") && target.type === "Might") combatParams.power = combatParams.power * combatParams.attack.mod1;
            else if (selfTarget.hasBuff("BM909B1") && target.type === "Mind") combatParams.power = combatParams.power * combatParams.attack.mod1;
            else if (selfTarget.hasBuff("BM909C1") && target.type === "Moxie") combatParams.power = combatParams.power * combatParams.attack.mod1;
            target.takeAttack(combatParams);
            combatParams.power = oldPower
        })
    } else {
        targets.forEach(function (target) {
            var oldPower = combatParams.power;
            if (selfTarget.hasBuff("BM909A1") && target.type === "Might") combatParams.power = combatParams.power * combatParams.attack.mod1;
            else if (selfTarget.hasBuff("BM909B1") && target.type === "Mind") combatParams.power = combatParams.power * combatParams.attack.mod1;
            else if (selfTarget.hasBuff("BM909C1") && target.type === "Moxie") combatParams.power = combatParams.power * combatParams.attack.mod1;
            target.takeAttack(combatParams);
            combatParams.power = oldPower
        })
    }
};
SkillManager.skillEffects["SM909A1"] = function (combatParams) {
    var targetAttempt1 = combatParams.getTarget(TargetType.FIRSTMOXIE, SideType.ENEMIES);
    var targetAttempt2 = combatParams.getTarget(TargetType.FIRST, SideType.ENEMIES);
    if (targetAttempt1 !== undefined) {
        combatParams.power = combatParams.power * combatParams.attack.mod1;
        targetAttempt1.forEach(function (target) {
            target.takeAttack(combatParams)
        })
    } else {
        targetAttempt2.forEach(function (target) {
            target.takeAttack(combatParams)
        })
    }
};
SkillManager.skillEffects["SM909A2"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.CLEAVE, SideType.ENEMIES);
    targets.forEach(function (target) {
        target.takeAttack(combatParams)
    })
};
SkillManager.skillEffects["SM909B1"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    var originalPower = combatParams.power;
    targets.forEach(function (target) {
        if (target.type === "Might") combatParams.power = combatParams.power * combatParams.attack.mod1;
        target.takeAttack(combatParams);
        combatParams.power = originalPower
    })
};
SkillManager.skillEffects["SM909B2"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ALLIES);
    targets.forEach(function (target) {
        target.heal(combatParams.power)
    })
};
SkillManager.skillEffects["SM909C1"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.LOWESTHP, SideType.ENEMIES);
    var originalPower = combatParams.power;
    targets.forEach(function (target) {
        if (target.type === "Mind") combatParams.power = combatParams.power * combatParams.attack.mod1;
        target.takeAttack(combatParams);
        combatParams.power = originalPower
    })
};
SkillManager.skillEffects["SM909C2"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("BM909C3", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM909C2"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES);
    targets.forEach(function (target) {
        BuffManager.generateBuff("BM909C3", target, combatParams.power)
    })
};
SkillManager.skillEffects["SM910"] = function (combatParams) {
    var targets = combatParams.getTarget(TargetType.ALL, SideType.ENEMIES).filter(function (h) {
        return h.playbook.id !== "PB0061"
    });
    var targetself = combatParams.getTarget(TargetType.SELF, SideType.ALLIES)[0];
    if (targetself.getBuffStacks("BM910") === 7) {
        var highestPow = combatParams.getTarget(TargetType.HIGHESTPOW, SideType.ENEMIES);
        highestPow.forEach(function (target) {
            return target.destroy()
        });
        BuffManager.removeBuff("BM910", targetself);
        return
    }
    BuffManager.generateBuff("BM910", targetself);
    var skipNow = targets.filter(function (t) {
        return t.untilNextSpecial() === 0
    }).sort(function (a, b) {
        if (a.playbook.id === "PB0021") return -1;
        if (a.getPow() > b.getPow()) return -1;
        if (a.getPow() < b.getPow()) return 1
    });
    if (skipNow.length > 0) {
        var _target = skipNow[0];
        _target.takeAttack(combatParams);
        _target.getSkill();
        return
    }
    var reverseNow = targets.filter(function (t) {
        return t.untilNextSpecial() === 1
    }).sort(function (a, b) {
        if (a.getPow() > b.getPow()) return -1;
        if (a.getPow() < b.getPow()) return 1
    });
    if (reverseNow.length > 0) {
        var _target2 = reverseNow[0];
        _target2.takeAttack(combatParams);
        if (_target2.hasBuff("BM910A")) BuffManager.removeBuff("BM910A", _target2);
        else BuffManager.generateBuff("BM910A", _target2);
        return
    }
    var previousNow = targets.filter(function (t) {
        return t.untilNextSpecial() === 2
    }).sort(function (a, b) {
        if (a.getPow() > b.getPow()) return -1;
        if (a.getPow() < b.getPow()) return 1
    });
    if (previousNow.length > 0) {
        var _target3 = previousNow[0];
        _target3.takeAttack(combatParams);
        _target3.previousSkill();
        return
    }
    var skipNow2 = targets.sort(function (a, b) {
        if (a.getPow() > b.getPow()) return -1;
        if (a.getPow() < b.getPow()) return 1
    });
    var target = skipNow2[0];
    target.takeAttack(combatParams);
    target.getSkill()
};
SkillManager.skillEffects["SMP902"] = function (type, target, attack, skillParams) {
    if (type !== "initial") return;
    BuffManager.generateBuff("BM902", target, Math.floor(skillParams.powMod * target.pow))
};
SkillManager.skillEffects["SMP904A"] = function (type, target, attack, skillParams) {
    if (type !== "dead" || target.state !== null) return;
    var lichDead = DungeonManager.dungeonByID("D404").mobs.find(function (m) {
        return m.id === "B904"
    }).dead();
    if (lichDead) return;
    target.state = "bones";
    target.image = '<img src="assets/images/enemies/B904B.gif">';
    target.hp = 1;
    $("#mobImage" + target.uniqueid).html(target.image);
    target.playbook = PlaybookManager.generatePlayBookFromSkills("SM904C", "SM904C", "SM904C", "SM904B");
    refreshSkillUnit(target);
    BuffManager.generateBuff("BM904A", target, 0)
};
SkillManager.skillEffects["SMP906"] = function (type, target, attack, skillParams) {
    if (type !== "onHit") return;
    if (target.hp > target.maxHP() / 4 || target.state !== null) return;
    target.state = "egg";
    target.image = '<img src="assets/images/enemies/B906A.gif">';
    $("#mobImage" + target.uniqueid).html(target.image);
    target.playbook = PlaybookManager.generatePlayBookFromSkills("SM906A", "SM906A", "SM906A", "SM906B");
    refreshSkillUnit(target);
    BuffManager.generateBuff("BM906A", target, 0)
};
SkillManager.skillEffects["SMP907"] = function (type, target, attack, skillParams) {
    if (type === "initial") {
        BuffManager.generateBuff("BM907B", target, skillParams.powMod * target.pow)
    }
    if (type === "onHit") {
        var stacks = target.getBuffStacks("BM907B");
        if (!target.hpLessThan(.25 * stacks)) return;
        BuffManager.clearDebuffs(target);
        target.buffTick("custom");
        target.state = "tree";
        target.image = '<img src="assets/images/enemies/B907B.gif">';
        target.playbook = PlaybookManager.generatePlayBookFromSkills("SM907C", "SM907D", "SM907C", "SM907D");
        BuffManager.generateBuff("BM907C", target);
        var dungeon = DungeonManager.dungeonByID(target.dungeonid);
        var position = dungeon.order.positionInParty();
        for (var i = 0; i < 3; i++) {
            dungeon.addMob("B907A", i < position, false)
        }
    }
    if (type === "treeBuffGone") {
        target.state = null;
        target.image = '<img src="assets/images/enemies/B907.gif">';
        target.playbook = PlaybookManager.generatePlayBookFromSkills("SM907A", "S0000", "SM907A", "SM907B");
        var _dungeon = DungeonManager.dungeonByID(target.dungeonid);
        var trees = _dungeon.mobs.filter(function (m) {
            return m.id === "B907A"
        });
        var treeuid = trees.map(function (t) {
            return t.uniqueid
        });
        treeuid.forEach(function (uid) {
            return _dungeon.removeMob(uid, false)
        });
        _dungeon.refreshDungeon()
    }
};
SkillManager.skillEffects["SMP907A"] = function (type, target, attack, skillParams) {
    if (type !== "initial") return;
    BuffManager.generateBuff("BM907A", target, skillParams.powMod * target.pow);
    target.hp = target.hpMod;
    target.hpmax = target.hpMod
};
SkillManager.skillEffects["SMP909A"] = function (type, target, attack, skillParams) {
    if (type === "initial") BuffManager.generateBuff("BM909A2", target, 1);
    if (type !== "dead") return;
    var goblinKing = DungeonManager.dungeonByID("D409").mobs.find(function (m) {
        return m.id === "B909"
    });
    BuffManager.generateBuff("BM909A1", goblinKing, skillParams.mod1 * 100);
    BuffManager.removeBuff("BM909B1", goblinKing);
    BuffManager.removeBuff("BM909C1", goblinKing);
    BuffManager.generateBuff("BM909", goblinKing, 1)
};
SkillManager.skillEffects["SMP909B"] = function (type, target, attack, skillParams) {
    if (type === "initial") BuffManager.generateBuff("BM909B2", target, 1);
    if (type !== "dead") return;
    var goblinKing = DungeonManager.dungeonByID("D409").mobs.find(function (m) {
        return m.id === "B909"
    });
    BuffManager.removeBuff("BM909A1", goblinKing);
    BuffManager.generateBuff("BM909B1", goblinKing, skillParams.mod1 * 100, skillParams.mod2 * 100);
    BuffManager.removeBuff("BM909C1", goblinKing);
    BuffManager.generateBuff("BM909", goblinKing, 1)
};
SkillManager.skillEffects["SMP909C"] = function (type, target, attack, skillParams) {
    if (type === "initial") BuffManager.generateBuff("BM909C2", target, 1);
    if (type !== "dead") return;
    var goblinKing = DungeonManager.dungeonByID("D409").mobs.find(function (m) {
        return m.id === "B909"
    });
    BuffManager.removeBuff("BM909A1", goblinKing);
    BuffManager.removeBuff("BM909B1", goblinKing);
    BuffManager.generateBuff("BM909C1", goblinKing, skillParams.mod1 * 100);
    BuffManager.generateBuff("BM909", goblinKing, 1)
};
SkillManager.skillEffects["SMP909"] = function (type, target, attack, skillParams) {
    if (type !== "dead") return;
    var goblinMobs = DungeonManager.dungeonByID("D409").mobs.filter(function (m) {
        return m.alive()
    });
    goblinMobs.forEach(function (mob) {
        BuffManager.removeBuff("BM909A2", mob);
        BuffManager.removeBuff("BM909B2", mob);
        BuffManager.removeBuff("BM909C2", mob)
    })
};
"use strict";
var Tutorial = {
    lvl: 0,
    sec: 0,
    createSave: function createSave() {
        var save = {};
        save.lvl = this.lvl;
        return save
    },
    loadSave: function loadSave(save) {
        this.lvl = save.lvl
    },
    complete: function complete() {
        var nonTutorialLevels = [33, 36, 39, 392, 42, 45, 48, 52, 56, 58, 62];
        return nonTutorialLevels.includes(this.lvl)
    },
    monitor: function monitor(ms) {
        this.sec += ms;
        if (this.sec < 1e3) return;
        this.sec = 0;
        if (this.lvl === 0 && recipeList.idToItem("R13001").craftCount > 0) {
            this.lvl = 1;
            refreshTutorial()
        }
        if (this.lvl === 1 && achievementStats.totalGoldEarned > 0) {
            this.lvl = 2;
            refreshTutorial()
        }
        if (this.lvl === 2 && Shop.alreadyPurchased("AL2000")) {
            this.lvl = 3;
            refreshTutorial()
        }
        if (this.lvl === 3 && Shop.alreadyPurchased("AL2001")) {
            this.lvl = 4;
            refreshTutorial()
        }
        if (this.lvl === 4 && HeroManager.idToHero("H203").state() === HeroState.DUNGEON) {
            this.lvl = 5;
            refreshTutorial()
        }
        if (this.lvl === 5 && HeroManager.idToHero("H203").gearSlots[0].gear !== null) {
            this.lvl = 6;
            refreshTutorial()
        }
        if (this.lvl === 6 && Shop.alreadyPurchased("AL1000")) {
            this.lvl = 7;
            refreshTutorial()
        }
        if (this.lvl === 7 && (Merchant.orders.length === 0 || recipeList.idToItem("R2301").owned)) {
            this.lvl = 8;
            refreshTutorial()
        }
        if (this.lvl === 8 && recipeList.idToItem("R2301").owned) {
            this.lvl = 9;
            refreshTutorial()
        }
        if (this.lvl === 9 && DungeonManager.dungeonByID("D101").maxFloor >= 2) {
            this.lvl = 10;
            refreshTutorial()
        }
        if (this.lvl === 10 && recipeList.idToItem("R4201").owned) {
            this.lvl = 11;
            refreshTutorial()
        }
        if (this.lvl === 11 && Shop.alreadyPurchased("AL2002")) {
            this.lvl = 12;
            refreshTutorial()
        }
        if (this.lvl === 12 && recipeList.idToItem("R4201").craftCount > 0) {
            this.lvl = 13;
            refreshTutorial()
        }
        if (this.lvl === 13 && recipeList.idToItem("R12001").owned) {
            this.lvl = 14;
            refreshTutorial()
        }
        if (this.lvl === 14 && recipeList.idToItem("R12001").craftCount > 0) {
            this.lvl = 15;
            refreshTutorial()
        }
        if (this.lvl === 15 && Shop.alreadyPurchased("AL2003")) {
            this.lvl = 16;
            refreshTutorial()
        }
        if (this.lvl === 16 && recipeList.idToItem("R11001").owned) {
            this.lvl = 17;
            refreshTutorial()
        }
        if (this.lvl === 17 && recipeList.idToItem("R11001").craftCount > 0) {
            this.lvl = 18;
            refreshTutorial()
        }
        if (this.lvl === 18 && HeroManager.idToHero("H001").state() === HeroState.DUNGEON && HeroManager.idToHero("H102").state() === HeroState.DUNGEON && HeroManager.idToHero("H203").state() === HeroState.DUNGEON) {
            this.lvl = 19;
            refreshTutorial()
        }
        if (this.lvl === 19 && recipeList.idToItem("R4101").owned) {
            this.lvl = 20;
            refreshTutorial()
        }
        if (this.lvl === 20 && recipeList.idToItem("R4101").craftCount > 0) {
            this.lvl = 21;
            refreshTutorial()
        }
        if (this.lvl === 21 && Shop.alreadyPurchased("AL1003")) {
            this.lvl = 22;
            refreshTutorial()
        }
        if (this.lvl === 22 && actionSlotManager.anyAutoSell()) {
            this.lvl = 23;
            refreshTutorial()
        }
        if (this.lvl === 23 && recipeList.masteryCount() > 0) {
            this.lvl = 24;
            refreshTutorial()
        }
        if (this.lvl === 24 && recipeList.idToItem("R5501").owned) {
            this.lvl = 25;
            refreshTutorial()
        }
        if (this.lvl === 25 && recipeList.idToItem("R5501").craftCount > 0) {
            this.lvl = 26;
            refreshTutorial()
        }
        if (this.lvl === 26 && recipeList.idToItem("R6201").owned) {
            this.lvl = 27;
            refreshTutorial()
        }
        if (this.lvl === 27 && HeroManager.idToHero("H001").fullyEquipped() && HeroManager.idToHero("H102").fullyEquipped() && HeroManager.idToHero("H203").fullyEquipped()) {
            this.lvl = 28;
            refreshTutorial()
        }
        if (this.lvl === 28 && DungeonManager.bossCount() > 0) {
            this.lvl = 29;
            refreshTutorial()
        }
        if (this.lvl === 29 && Shop.alreadyPurchased("AL20081")) {
            this.lvl = 30;
            refreshTutorial()
        }
        if (this.lvl === 30 && (DungeonManager.dungeonByID("D102").maxFloor > 0 || DungeonManager.dungeonByID("D202").maxFloor > 0 || DungeonManager.dungeonByID("D302").maxFloor > 0)) {
            this.lvl = 31;
            refreshTutorial()
        }
        if (this.lvl === 31 && Shop.alreadyPurchased("AL1026")) {
            this.lvl = 32;
            refreshTutorial()
        }
        if (this.lvl === 32 && (Merchant.orders.length >= 2 || DungeonManager.dungeonByID("D402").maxFloor >= 1)) {
            this.lvl = 33;
            refreshTutorial()
        }
        if (this.lvl === 33 && Shop.alreadyPurchased("AL3002")) {
            this.lvl = 34;
            refreshTutorial()
        }
        if (this.lvl === 34 && TownManager.idToBuilding("TB001").status >= 2) {
            this.lvl = 35;
            refreshTutorial()
        }
        if (this.lvl === 35 && SynthManager.fuel > 0) {
            this.lvl = 36;
            refreshTutorial()
        }
        if (this.lvl === 36 && Shop.alreadyPurchased("AL3003")) {
            this.lvl = 37;
            refreshTutorial()
        }
        if (this.lvl === 37 && TownManager.idToBuilding("TB003").status >= 2) {
            this.lvl = 38;
            refreshTutorial()
        }
        if (this.lvl === 38 && achievementStats.fusesDone > 0) {
            this.lvl = 39;
            refreshTutorial()
        }
        if (this.lvl === 39 && DungeonManager.bossCount() >= 2) {
            this.lvl = 391;
            refreshTutorial()
        }
        if (this.lvl === 391 && Merchant.orders.map(function (o) {
                return o.part
            }).some(function (p) {
                return p > 0
            })) {
            this.lvl = 392;
            refreshTutorial()
        }
        if (this.lvl === 392 && Shop.alreadyPurchased("AL3005")) {
            this.lvl = 40;
            refreshTutorial()
        }
        if (this.lvl === 40 && TownManager.idToBuilding("TB004").status >= 2) {
            this.lvl = 41;
            refreshTutorial()
        }
        if (this.lvl === 41 && achievementStats.forgeDone > 0) {
            this.lvl = 42;
            refreshTutorial()
        }
        if (this.lvl === 42 && Shop.alreadyPurchased("AL30062")) {
            this.lvl = 43;
            refreshTutorial()
        }
        if (this.lvl === 43 && TownManager.idToBuilding("TB010").status >= 2) {
            this.lvl = 44;
            refreshTutorial()
        }
        if (this.lvl === 44 && PlaybookManager.playbookUnlocked("PB0121")) {
            this.lvl = 45;
            refreshTutorial()
        }
        if (this.lvl === 45 && Shop.alreadyPurchased("AL3007")) {
            this.lvl = 46;
            refreshTutorial()
        }
        if (this.lvl === 46 && DungeonManager.bossRefightPerformed()) {
            this.lvl = 47;
            refreshTutorial()
        }
        if (this.lvl === 47 && HeroManager.aTrophyEquipped()) {
            this.lvl = 48;
            refreshTutorial()
        }
        if (this.lvl === 48 && Shop.alreadyPurchased("AL3013")) {
            this.lvl = 49;
            refreshTutorial()
        }
        if (this.lvl === 49 && TownManager.idToBuilding("TB006").status >= 2) {
            this.lvl = 50;
            refreshTutorial()
        }
        if (this.lvl === 50 && TinkerManager.progressedOnce()) {
            this.lvl = 51;
            refreshTutorial()
        }
        if (this.lvl === 51 && HeroManager.aTrinketEquipped()) {
            this.lvl = 52;
            refreshTutorial()
        }
        if (this.lvl === 52 && Shop.alreadyPurchased("AL3011")) {
            this.lvl = 53;
            refreshTutorial()
        }
        if (this.lvl === 53 && TownManager.idToBuilding("TB005").status >= 2) {
            this.lvl = 54;
            refreshTutorial()
        }
        if (this.lvl === 54 && FortuneManager.slots.length > 0) {
            this.lvl = 55;
            refreshTutorial()
        }
        if (this.lvl === 55 && achievementStats.fortunesPredicted > 0) {
            this.lvl = 56;
            refreshTutorial()
        }
        if (this.lvl === 56 && Shop.alreadyPurchased("AL3009")) {
            this.lvl = 57;
            refreshTutorial()
        }
        if (this.lvl === 57 && achievementStats.resynthsDone > 0) {
            this.lvl = 58;
            refreshTutorial()
        }
        if (this.lvl === 58 && Shop.alreadyPurchased("AL3015")) {
            this.lvl = 59;
            refreshTutorial()
        }
        if (this.lvl === 59 && TownManager.idToBuilding("TB006").status >= 2) {
            this.lvl = 60;
            refreshTutorial()
        }
        if (Museum.donationCount() > 0) {
            this.lvl = 62;
            refreshTutorial()
        }
    }
};
var $tutorial = $("#tutorial");
var $tutorialHeader = $("#tutorialHeader");
var $tutorialDesc = $("#tutorialDesc");
var oneshot = true;

function refreshTutorial() {
    if (Tutorial.complete()) return $tutorial.hide();
    $tutorial.show().addClass("tutorialPulse");
    $tutorialHeader.html(displayText("tutorial_header"));
    $tutorialDesc.html(displayText("tutorial_desc_".concat(Tutorial.lvl)));
    if (oneshot && Tutorial.lvl === 30) {
        $("#dungeonTab").addClass("hasEvent")
    } else $("#dungeonTab").removeClass("hasEvent")
}
$(document).on("animationend", ".tutorial", function () {
    $tutorial.removeClass("tutorialPulse")
});