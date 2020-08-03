"use strict";
PlayFab.settings.titleId = "D765";
var sessionID = null;
var saveFile = 0;
$(document).on("click", "#cloudSave", function (e) {
    if (!sessionID) {
        $("#pfLoginRegister").show();
        $("#pfImportExport").hide();
        $("#loadSure").hide()
    } else {
        $("#pfLoginRegister").hide();
        $("#pfImportExport").show();
        $("#loadSure").hide();
        getSaveFromCloud()
    }
});
$(document).on("click", "#register", function (e) {
    e.preventDefault();
    registerAcct()
});
$(document).on("click", "#login", function (e) {
    e.preventDefault();
    loginAcct()
});
$(document).on("click", "#reset", function (e) {
    resetPassword()
});
$(document).on("click", "#pfSave", function (e) {
    e.preventDefault();
    saveToCloud()
});
$(document).on("click", "#pfLoad", function (e) {
    e.preventDefault();
    $("#loadSure").show();
    $("#pfImportExport").hide()
});
$(document).on("click", "#pfloadYes", function (e) {
    loadFromCloud()
});
$(document).on("click", "#pfloadNo", function (e) {
    $("#pfLoginRegister").hide();
    $("#pfImportExport").show();
    $("#loadSure").hide()
});
var validateCallback = function validateCallback(result, error) {
    if (error !== null) {
        $("#pfLoginRegister").show();
        $("#pfImportExport").hide()
    } else {
        $("#pfLoginRegister").hide();
        $("#pfImportExport").show()
    }
};

function resetPassword() {
    var resetRequest = {
        TitleId: PlayFab.settings.titleId,
        Email: $("#email").val()
    };
    PlayFabClientSDK.SendAccountRecoveryEmail(resetRequest, resetCallback)
}
var resetCallback = function resetCallback(result, error) {
    if (result !== null) {
        $("#pfStatus").html("Password reset email sent to your email address.");
        setTimeout(function () {
            setDialogClose()
        }, 1500)
    } else if (error !== null) {
        $("#pfStatus").html(PlayFab.GenerateErrorReport(error));
        setTimeout(function () {
            $("#pfStatus").empty()
        }, 3500)
    }
};

function registerAcct() {
    var registerRequest = {
        TitleId: PlayFab.settings.titleId,
        Email: $("#email").val(),
        Password: $("#password").val(),
        RequireBothUsernameAndEmail: false
    };
    PlayFabClientSDK.RegisterPlayFabUser(registerRequest, registerCallback)
}
var registerCallback = function registerCallback(result, error) {
    if (result !== null) {
        loginAcct()
    } else if (error !== null) {
        $("#pfStatus").html(PlayFab.GenerateErrorReport(error));
        setTimeout(function () {
            $("#pfStatus").empty()
        }, 3500)
    }
};

function loginAcct() {
    var loginRequest = {
        TitleId: PlayFab.settings.titleId,
        Email: $("#email").val(),
        Password: $("#password").val()
    };
    PlayFabClientSDK.LoginWithEmailAddress(loginRequest, LoginCallback)
}
var LoginCallback = function LoginCallback(result, error) {
    if (result !== null) {
        sessionID = result.data.SessionTicket;
        $("#pfLoginRegister").hide();
        $("#pfImportExport").show();
        getSaveFromCloud()
    } else if (error !== null) {
        $("#pfLoginRegister").show();
        $("#pfImportExport").hide();
        $("#pfStatus").html(PlayFab.GenerateErrorReport(error));
        setTimeout(function () {
            $("#pfStatus").empty()
        }, 3500)
    }
};

function saveToCloud() {
    $("#pfStatusSave").html("Saving...");
    forceSave();
    var requestData = {
        TitleId: PlayFab.settings.titleId,
        Data: {
            savestring: createSaveExport()
        }
    };
    PlayFab.ClientApi.UpdateUserData(requestData, saveCallback)
}

function saveCallback(result, error) {
    if (result !== null) {
        getSaveFromCloud()
    }
    if (error !== null) {
        $("#pfStatusSave").html(PlayFab.GenerateErrorReport(error))
    }
}

function loadFromCloud() {
    getSaveFromCloud();
    if (saveFile) {
        localStorage.setItem("ffgs1", JSON.stringify(saveFile));
        location.reload()
    }
}

function getSaveFromCloud() {
    var requestData = {
        Keys: ["savestring"]
    };
    PlayFab.ClientApi.GetUserData(requestData, loadCallback)
}

function loadCallback(result, error) {
    if (error !== null) {
        $("#pfStatusSave").html(PlayFab.GenerateErrorReport(error))
    }
    if (result) {
        if (result.data.Data !== null) {
            saveFile = JSON.parse(JSON.parse(pako.ungzip(atob(result.data.Data.savestring.Value), {
                to: "string"
            })));
            var date = saveFile["saveTime"];
            var dateString = new Date(date).toString();
            $("#pfStatusSave").html("Last save:</br>" + dateString)
        } else {
            saveFile = null;
            $("#pfStatusSave").text("No save uploaded.")
        }
    }
}! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).pako = t()
    }
}(function () {
    return function t(e, a, i) {
        function n(s, o) {
            if (!a[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!o && l) return l(s, !0);
                    if (r) return r(s, !0);
                    var h = new Error("Cannot find module '" + s + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var d = a[s] = {
                    exports: {}
                };
                e[s][0].call(d.exports, function (t) {
                    var a = e[s][1][t];
                    return n(a || t)
                }, d, d.exports, t, e, a, i)
            }
            return a[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]);
        return n
    }({
        1: [function (t, e, a) {
            "use strict";

            function i(t) {
                if (!(this instanceof i)) return new i(t);
                this.options = s.assign({
                    level: _,
                    method: c,
                    chunkSize: 16384,
                    windowBits: 15,
                    memLevel: 8,
                    strategy: u,
                    to: ""
                }, t || {});
                var e = this.options;
                e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new h, this.strm.avail_out = 0;
                var a = r.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
                if (a !== f) throw new Error(l[a]);
                if (e.header && r.deflateSetHeader(this.strm, e.header), e.dictionary) {
                    var n;
                    if (n = "string" == typeof e.dictionary ? o.string2buf(e.dictionary) : "[object ArrayBuffer]" === d.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary, (a = r.deflateSetDictionary(this.strm, n)) !== f) throw new Error(l[a]);
                    this._dict_set = !0
                }
            }

            function n(t, e) {
                var a = new i(e);
                if (a.push(t, !0), a.err) throw a.msg || l[a.err];
                return a.result
            }
            var r = t("./zlib/deflate"),
                s = t("./utils/common"),
                o = t("./utils/strings"),
                l = t("./zlib/messages"),
                h = t("./zlib/zstream"),
                d = Object.prototype.toString,
                f = 0,
                _ = -1,
                u = 0,
                c = 8;
            i.prototype.push = function (t, e) {
                var a, i, n = this.strm,
                    l = this.options.chunkSize;
                if (this.ended) return !1;
                i = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? n.input = o.string2buf(t) : "[object ArrayBuffer]" === d.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;
                do {
                    if (0 === n.avail_out && (n.output = new s.Buf8(l), n.next_out = 0, n.avail_out = l), 1 !== (a = r.deflate(n, i)) && a !== f) return this.onEnd(a), this.ended = !0, !1;
                    0 !== n.avail_out && (0 !== n.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(o.buf2binstring(s.shrinkBuf(n.output, n.next_out))) : this.onData(s.shrinkBuf(n.output, n.next_out)))
                } while ((n.avail_in > 0 || 0 === n.avail_out) && 1 !== a);
                return 4 === i ? (a = r.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === f) : 2 !== i || (this.onEnd(f), n.avail_out = 0, !0)
            }, i.prototype.onData = function (t) {
                this.chunks.push(t)
            }, i.prototype.onEnd = function (t) {
                t === f && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
            }, a.Deflate = i, a.deflate = n, a.deflateRaw = function (t, e) {
                return e = e || {}, e.raw = !0, n(t, e)
            }, a.gzip = function (t, e) {
                return e = e || {}, e.gzip = !0, n(t, e)
            }
        }, {
            "./utils/common": 3,
            "./utils/strings": 4,
            "./zlib/deflate": 8,
            "./zlib/messages": 13,
            "./zlib/zstream": 15
        }],
        2: [function (t, e, a) {
            "use strict";

            function i(t) {
                if (!(this instanceof i)) return new i(t);
                this.options = s.assign({
                    chunkSize: 16384,
                    windowBits: 0,
                    to: ""
                }, t || {});
                var e = this.options;
                e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new d, this.strm.avail_out = 0;
                var a = r.inflateInit2(this.strm, e.windowBits);
                if (a !== l.Z_OK) throw new Error(h[a]);
                this.header = new f, r.inflateGetHeader(this.strm, this.header)
            }

            function n(t, e) {
                var a = new i(e);
                if (a.push(t, !0), a.err) throw a.msg || h[a.err];
                return a.result
            }
            var r = t("./zlib/inflate"),
                s = t("./utils/common"),
                o = t("./utils/strings"),
                l = t("./zlib/constants"),
                h = t("./zlib/messages"),
                d = t("./zlib/zstream"),
                f = t("./zlib/gzheader"),
                _ = Object.prototype.toString;
            i.prototype.push = function (t, e) {
                var a, i, n, h, d, f, u = this.strm,
                    c = this.options.chunkSize,
                    b = this.options.dictionary,
                    g = !1;
                if (this.ended) return !1;
                i = e === ~~e ? e : !0 === e ? l.Z_FINISH : l.Z_NO_FLUSH, "string" == typeof t ? u.input = o.binstring2buf(t) : "[object ArrayBuffer]" === _.call(t) ? u.input = new Uint8Array(t) : u.input = t, u.next_in = 0, u.avail_in = u.input.length;
                do {
                    if (0 === u.avail_out && (u.output = new s.Buf8(c), u.next_out = 0, u.avail_out = c), (a = r.inflate(u, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && b && (f = "string" == typeof b ? o.string2buf(b) : "[object ArrayBuffer]" === _.call(b) ? new Uint8Array(b) : b, a = r.inflateSetDictionary(this.strm, f)), a === l.Z_BUF_ERROR && !0 === g && (a = l.Z_OK, g = !1), a !== l.Z_STREAM_END && a !== l.Z_OK) return this.onEnd(a), this.ended = !0, !1;
                    u.next_out && (0 !== u.avail_out && a !== l.Z_STREAM_END && (0 !== u.avail_in || i !== l.Z_FINISH && i !== l.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = o.utf8border(u.output, u.next_out), h = u.next_out - n, d = o.buf2string(u.output, n), u.next_out = h, u.avail_out = c - h, h && s.arraySet(u.output, u.output, n, h, 0), this.onData(d)) : this.onData(s.shrinkBuf(u.output, u.next_out)))), 0 === u.avail_in && 0 === u.avail_out && (g = !0)
                } while ((u.avail_in > 0 || 0 === u.avail_out) && a !== l.Z_STREAM_END);
                return a === l.Z_STREAM_END && (i = l.Z_FINISH), i === l.Z_FINISH ? (a = r.inflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === l.Z_OK) : i !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), u.avail_out = 0, !0)
            }, i.prototype.onData = function (t) {
                this.chunks.push(t)
            }, i.prototype.onEnd = function (t) {
                t === l.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
            }, a.Inflate = i, a.inflate = n, a.inflateRaw = function (t, e) {
                return e = e || {}, e.raw = !0, n(t, e)
            }, a.ungzip = n
        }, {
            "./utils/common": 3,
            "./utils/strings": 4,
            "./zlib/constants": 6,
            "./zlib/gzheader": 9,
            "./zlib/inflate": 11,
            "./zlib/messages": 13,
            "./zlib/zstream": 15
        }],
        3: [function (t, e, a) {
            "use strict";

            function i(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
            a.assign = function (t) {
                for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                    var a = e.shift();
                    if (a) {
                        if ("object" != typeof a) throw new TypeError(a + "must be non-object");
                        for (var n in a) i(a, n) && (t[n] = a[n])
                    }
                }
                return t
            }, a.shrinkBuf = function (t, e) {
                return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
            };
            var r = {
                    arraySet: function (t, e, a, i, n) {
                        if (e.subarray && t.subarray) t.set(e.subarray(a, a + i), n);
                        else
                            for (var r = 0; r < i; r++) t[n + r] = e[a + r]
                    },
                    flattenChunks: function (t) {
                        var e, a, i, n, r, s;
                        for (i = 0, e = 0, a = t.length; e < a; e++) i += t[e].length;
                        for (s = new Uint8Array(i), n = 0, e = 0, a = t.length; e < a; e++) r = t[e], s.set(r, n), n += r.length;
                        return s
                    }
                },
                s = {
                    arraySet: function (t, e, a, i, n) {
                        for (var r = 0; r < i; r++) t[n + r] = e[a + r]
                    },
                    flattenChunks: function (t) {
                        return [].concat.apply([], t)
                    }
                };
            a.setTyped = function (t) {
                t ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, r)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, s))
            }, a.setTyped(n)
        }, {}],
        4: [function (t, e, a) {
            "use strict";

            function i(t, e) {
                if (e < 65537 && (t.subarray && s || !t.subarray && r)) return String.fromCharCode.apply(null, n.shrinkBuf(t, e));
                for (var a = "", i = 0; i < e; i++) a += String.fromCharCode(t[i]);
                return a
            }
            var n = t("./common"),
                r = !0,
                s = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (t) {
                r = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (t) {
                s = !1
            }
            for (var o = new n.Buf8(256), l = 0; l < 256; l++) o[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
            o[254] = o[254] = 1, a.string2buf = function (t) {
                var e, a, i, r, s, o = t.length,
                    l = 0;
                for (r = 0; r < o; r++) 55296 == (64512 & (a = t.charCodeAt(r))) && r + 1 < o && 56320 == (64512 & (i = t.charCodeAt(r + 1))) && (a = 65536 + (a - 55296 << 10) + (i - 56320), r++), l += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
                for (e = new n.Buf8(l), s = 0, r = 0; s < l; r++) 55296 == (64512 & (a = t.charCodeAt(r))) && r + 1 < o && 56320 == (64512 & (i = t.charCodeAt(r + 1))) && (a = 65536 + (a - 55296 << 10) + (i - 56320), r++), a < 128 ? e[s++] = a : a < 2048 ? (e[s++] = 192 | a >>> 6, e[s++] = 128 | 63 & a) : a < 65536 ? (e[s++] = 224 | a >>> 12, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a) : (e[s++] = 240 | a >>> 18, e[s++] = 128 | a >>> 12 & 63, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a);
                return e
            }, a.buf2binstring = function (t) {
                return i(t, t.length)
            }, a.binstring2buf = function (t) {
                for (var e = new n.Buf8(t.length), a = 0, i = e.length; a < i; a++) e[a] = t.charCodeAt(a);
                return e
            }, a.buf2string = function (t, e) {
                var a, n, r, s, l = e || t.length,
                    h = new Array(2 * l);
                for (n = 0, a = 0; a < l;)
                    if ((r = t[a++]) < 128) h[n++] = r;
                    else if ((s = o[r]) > 4) h[n++] = 65533, a += s - 1;
                else {
                    for (r &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && a < l;) r = r << 6 | 63 & t[a++], s--;
                    s > 1 ? h[n++] = 65533 : r < 65536 ? h[n++] = r : (r -= 65536, h[n++] = 55296 | r >> 10 & 1023, h[n++] = 56320 | 1023 & r)
                }
                return i(h, n)
            }, a.utf8border = function (t, e) {
                var a;
                for ((e = e || t.length) > t.length && (e = t.length), a = e - 1; a >= 0 && 128 == (192 & t[a]);) a--;
                return a < 0 ? e : 0 === a ? e : a + o[t[a]] > e ? a : e
            }
        }, {
            "./common": 3
        }],
        5: [function (t, e, a) {
            "use strict";
            e.exports = function (t, e, a, i) {
                for (var n = 65535 & t | 0, r = t >>> 16 & 65535 | 0, s = 0; 0 !== a;) {
                    a -= s = a > 2e3 ? 2e3 : a;
                    do {
                        r = r + (n = n + e[i++] | 0) | 0
                    } while (--s);
                    n %= 65521, r %= 65521
                }
                return n | r << 16 | 0
            }
        }, {}],
        6: [function (t, e, a) {
            "use strict";
            e.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        }, {}],
        7: [function (t, e, a) {
            "use strict";
            var i = function () {
                for (var t, e = [], a = 0; a < 256; a++) {
                    t = a;
                    for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                    e[a] = t
                }
                return e
            }();
            e.exports = function (t, e, a, n) {
                var r = i,
                    s = n + a;
                t ^= -1;
                for (var o = n; o < s; o++) t = t >>> 8 ^ r[255 & (t ^ e[o])];
                return -1 ^ t
            }
        }, {}],
        8: [function (t, e, a) {
            "use strict";

            function i(t, e) {
                return t.msg = A[e], e
            }

            function n(t) {
                return (t << 1) - (t > 4 ? 9 : 0)
            }

            function r(t) {
                for (var e = t.length; --e >= 0;) t[e] = 0
            }

            function s(t) {
                var e = t.state,
                    a = e.pending;
                a > t.avail_out && (a = t.avail_out), 0 !== a && (z.arraySet(t.output, e.pending_buf, e.pending_out, a, t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0))
            }

            function o(t, e) {
                B._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, s(t.strm)
            }

            function l(t, e) {
                t.pending_buf[t.pending++] = e
            }

            function h(t, e) {
                t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
            }

            function d(t, e, a, i) {
                var n = t.avail_in;
                return n > i && (n = i), 0 === n ? 0 : (t.avail_in -= n, z.arraySet(e, t.input, t.next_in, n, a), 1 === t.state.wrap ? t.adler = S(t.adler, e, n, a) : 2 === t.state.wrap && (t.adler = E(t.adler, e, n, a)), t.next_in += n, t.total_in += n, n)
            }

            function f(t, e) {
                var a, i, n = t.max_chain_length,
                    r = t.strstart,
                    s = t.prev_length,
                    o = t.nice_match,
                    l = t.strstart > t.w_size - it ? t.strstart - (t.w_size - it) : 0,
                    h = t.window,
                    d = t.w_mask,
                    f = t.prev,
                    _ = t.strstart + at,
                    u = h[r + s - 1],
                    c = h[r + s];
                t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);
                do {
                    if (a = e, h[a + s] === c && h[a + s - 1] === u && h[a] === h[r] && h[++a] === h[r + 1]) {
                        r += 2, a++;
                        do {} while (h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && r < _);
                        if (i = at - (_ - r), r = _ - at, i > s) {
                            if (t.match_start = e, s = i, i >= o) break;
                            u = h[r + s - 1], c = h[r + s]
                        }
                    }
                } while ((e = f[e & d]) > l && 0 != --n);
                return s <= t.lookahead ? s : t.lookahead
            }

            function _(t) {
                var e, a, i, n, r, s = t.w_size;
                do {
                    if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= s + (s - it)) {
                        z.arraySet(t.window, t.window, s, s, 0), t.match_start -= s, t.strstart -= s, t.block_start -= s, e = a = t.hash_size;
                        do {
                            i = t.head[--e], t.head[e] = i >= s ? i - s : 0
                        } while (--a);
                        e = a = s;
                        do {
                            i = t.prev[--e], t.prev[e] = i >= s ? i - s : 0
                        } while (--a);
                        n += s
                    }
                    if (0 === t.strm.avail_in) break;
                    if (a = d(t.strm, t.window, t.strstart + t.lookahead, n), t.lookahead += a, t.lookahead + t.insert >= et)
                        for (r = t.strstart - t.insert, t.ins_h = t.window[r], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[r + et - 1]) & t.hash_mask, t.prev[r & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = r, r++, t.insert--, !(t.lookahead + t.insert < et)););
                } while (t.lookahead < it && 0 !== t.strm.avail_in)
            }

            function u(t, e) {
                for (var a, i;;) {
                    if (t.lookahead < it) {
                        if (_(t), t.lookahead < it && e === Z) return _t;
                        if (0 === t.lookahead) break
                    }
                    if (a = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== a && t.strstart - a <= t.w_size - it && (t.match_length = f(t, a)), t.match_length >= et)
                        if (i = B._tr_tally(t, t.strstart - t.match_start, t.match_length - et), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= et) {
                            t.match_length--;
                            do {
                                t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart
                            } while (0 != --t.match_length);
                            t.strstart++
                        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                    else i = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                    if (i && (o(t, !1), 0 === t.strm.avail_out)) return _t
                }
                return t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut
            }

            function c(t, e) {
                for (var a, i, n;;) {
                    if (t.lookahead < it) {
                        if (_(t), t.lookahead < it && e === Z) return _t;
                        if (0 === t.lookahead) break
                    }
                    if (a = 0, t.lookahead >= et && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = et - 1, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - it && (t.match_length = f(t, a), t.match_length <= 5 && (t.strategy === H || t.match_length === et && t.strstart - t.match_start > 4096) && (t.match_length = et - 1)), t.prev_length >= et && t.match_length <= t.prev_length) {
                        n = t.strstart + t.lookahead - et, i = B._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - et), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                        do {
                            ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + et - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart)
                        } while (0 != --t.prev_length);
                        if (t.match_available = 0, t.match_length = et - 1, t.strstart++, i && (o(t, !1), 0 === t.strm.avail_out)) return _t
                    } else if (t.match_available) {
                        if ((i = B._tr_tally(t, 0, t.window[t.strstart - 1])) && o(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return _t
                    } else t.match_available = 1, t.strstart++, t.lookahead--
                }
                return t.match_available && (i = B._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < et - 1 ? t.strstart : et - 1, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut
            }

            function b(t, e) {
                for (var a, i, n, r, s = t.window;;) {
                    if (t.lookahead <= at) {
                        if (_(t), t.lookahead <= at && e === Z) return _t;
                        if (0 === t.lookahead) break
                    }
                    if (t.match_length = 0, t.lookahead >= et && t.strstart > 0 && (n = t.strstart - 1, (i = s[n]) === s[++n] && i === s[++n] && i === s[++n])) {
                        r = t.strstart + at;
                        do {} while (i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && i === s[++n] && n < r);
                        t.match_length = at - (r - n), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                    }
                    if (t.match_length >= et ? (a = B._tr_tally(t, 1, t.match_length - et), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (o(t, !1), 0 === t.strm.avail_out)) return _t
                }
                return t.insert = 0, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut
            }

            function g(t, e) {
                for (var a;;) {
                    if (0 === t.lookahead && (_(t), 0 === t.lookahead)) {
                        if (e === Z) return _t;
                        break
                    }
                    if (t.match_length = 0, a = B._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (o(t, !1), 0 === t.strm.avail_out)) return _t
                }
                return t.insert = 0, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : t.last_lit && (o(t, !1), 0 === t.strm.avail_out) ? _t : ut
            }

            function m(t, e, a, i, n) {
                this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = i, this.func = n
            }

            function w(t) {
                t.window_size = 2 * t.w_size, r(t.head), t.max_lazy_match = x[t.level].max_lazy, t.good_match = x[t.level].good_length, t.nice_match = x[t.level].nice_length, t.max_chain_length = x[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = et - 1, t.match_available = 0, t.ins_h = 0
            }

            function p() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = q, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new z.Buf16(2 * $), this.dyn_dtree = new z.Buf16(2 * (2 * Q + 1)), this.bl_tree = new z.Buf16(2 * (2 * V + 1)), r(this.dyn_ltree), r(this.dyn_dtree), r(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new z.Buf16(tt + 1), this.heap = new z.Buf16(2 * J + 1), r(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new z.Buf16(2 * J + 1), r(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
            }

            function v(t) {
                var e;
                return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = Y, e = t.state, e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? rt : dt, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = Z, B._tr_init(e), D) : i(t, U)
            }

            function k(t) {
                var e = v(t);
                return e === D && w(t.state), e
            }

            function y(t, e, a, n, r, s) {
                if (!t) return U;
                var o = 1;
                if (e === L && (e = 6), n < 0 ? (o = 0, n = -n) : n > 15 && (o = 2, n -= 16), r < 1 || r > G || a !== q || n < 8 || n > 15 || e < 0 || e > 9 || s < 0 || s > M) return i(t, U);
                8 === n && (n = 9);
                var l = new p;
                return t.state = l, l.strm = t, l.wrap = o, l.gzhead = null, l.w_bits = n, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = r + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + et - 1) / et), l.window = new z.Buf8(2 * l.w_size), l.head = new z.Buf16(l.hash_size), l.prev = new z.Buf16(l.w_size), l.lit_bufsize = 1 << r + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new z.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = e, l.strategy = s, l.method = a, k(t)
            }
            var x, z = t("../utils/common"),
                B = t("./trees"),
                S = t("./adler32"),
                E = t("./crc32"),
                A = t("./messages"),
                Z = 0,
                R = 1,
                C = 3,
                N = 4,
                O = 5,
                D = 0,
                I = 1,
                U = -2,
                T = -3,
                F = -5,
                L = -1,
                H = 1,
                j = 2,
                K = 3,
                M = 4,
                P = 0,
                Y = 2,
                q = 8,
                G = 9,
                X = 15,
                W = 8,
                J = 286,
                Q = 30,
                V = 19,
                $ = 2 * J + 1,
                tt = 15,
                et = 3,
                at = 258,
                it = at + et + 1,
                nt = 32,
                rt = 42,
                st = 69,
                ot = 73,
                lt = 91,
                ht = 103,
                dt = 113,
                ft = 666,
                _t = 1,
                ut = 2,
                ct = 3,
                bt = 4,
                gt = 3;
            x = [new m(0, 0, 0, 0, function (t, e) {
                var a = 65535;
                for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);;) {
                    if (t.lookahead <= 1) {
                        if (_(t), 0 === t.lookahead && e === Z) return _t;
                        if (0 === t.lookahead) break
                    }
                    t.strstart += t.lookahead, t.lookahead = 0;
                    var i = t.block_start + a;
                    if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, o(t, !1), 0 === t.strm.avail_out)) return _t;
                    if (t.strstart - t.block_start >= t.w_size - it && (o(t, !1), 0 === t.strm.avail_out)) return _t
                }
                return t.insert = 0, e === N ? (o(t, !0), 0 === t.strm.avail_out ? ct : bt) : (t.strstart > t.block_start && (o(t, !1), t.strm.avail_out), _t)
            }), new m(4, 4, 8, 4, u), new m(4, 5, 16, 8, u), new m(4, 6, 32, 32, u), new m(4, 4, 16, 16, c), new m(8, 16, 32, 32, c), new m(8, 16, 128, 128, c), new m(8, 32, 128, 256, c), new m(32, 128, 258, 1024, c), new m(32, 258, 258, 4096, c)], a.deflateInit = function (t, e) {
                return y(t, e, q, X, W, P)
            }, a.deflateInit2 = y, a.deflateReset = k, a.deflateResetKeep = v, a.deflateSetHeader = function (t, e) {
                return t && t.state ? 2 !== t.state.wrap ? U : (t.state.gzhead = e, D) : U
            }, a.deflate = function (t, e) {
                var a, o, d, f;
                if (!t || !t.state || e > O || e < 0) return t ? i(t, U) : U;
                if (o = t.state, !t.output || !t.input && 0 !== t.avail_in || o.status === ft && e !== N) return i(t, 0 === t.avail_out ? F : U);
                if (o.strm = t, a = o.last_flush, o.last_flush = e, o.status === rt)
                    if (2 === o.wrap) t.adler = 0, l(o, 31), l(o, 139), l(o, 8), o.gzhead ? (l(o, (o.gzhead.text ? 1 : 0) + (o.gzhead.hcrc ? 2 : 0) + (o.gzhead.extra ? 4 : 0) + (o.gzhead.name ? 8 : 0) + (o.gzhead.comment ? 16 : 0)), l(o, 255 & o.gzhead.time), l(o, o.gzhead.time >> 8 & 255), l(o, o.gzhead.time >> 16 & 255), l(o, o.gzhead.time >> 24 & 255), l(o, 9 === o.level ? 2 : o.strategy >= j || o.level < 2 ? 4 : 0), l(o, 255 & o.gzhead.os), o.gzhead.extra && o.gzhead.extra.length && (l(o, 255 & o.gzhead.extra.length), l(o, o.gzhead.extra.length >> 8 & 255)), o.gzhead.hcrc && (t.adler = E(t.adler, o.pending_buf, o.pending, 0)), o.gzindex = 0, o.status = st) : (l(o, 0), l(o, 0), l(o, 0), l(o, 0), l(o, 0), l(o, 9 === o.level ? 2 : o.strategy >= j || o.level < 2 ? 4 : 0), l(o, gt), o.status = dt);
                    else {
                        var _ = q + (o.w_bits - 8 << 4) << 8;
                        _ |= (o.strategy >= j || o.level < 2 ? 0 : o.level < 6 ? 1 : 6 === o.level ? 2 : 3) << 6, 0 !== o.strstart && (_ |= nt), _ += 31 - _ % 31, o.status = dt, h(o, _), 0 !== o.strstart && (h(o, t.adler >>> 16), h(o, 65535 & t.adler)), t.adler = 1
                    }
                if (o.status === st)
                    if (o.gzhead.extra) {
                        for (d = o.pending; o.gzindex < (65535 & o.gzhead.extra.length) && (o.pending !== o.pending_buf_size || (o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), s(t), d = o.pending, o.pending !== o.pending_buf_size));) l(o, 255 & o.gzhead.extra[o.gzindex]), o.gzindex++;
                        o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), o.gzindex === o.gzhead.extra.length && (o.gzindex = 0, o.status = ot)
                    } else o.status = ot;
                if (o.status === ot)
                    if (o.gzhead.name) {
                        d = o.pending;
                        do {
                            if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), s(t), d = o.pending, o.pending === o.pending_buf_size)) {
                                f = 1;
                                break
                            }
                            f = o.gzindex < o.gzhead.name.length ? 255 & o.gzhead.name.charCodeAt(o.gzindex++) : 0, l(o, f)
                        } while (0 !== f);
                        o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), 0 === f && (o.gzindex = 0, o.status = lt)
                    } else o.status = lt;
                if (o.status === lt)
                    if (o.gzhead.comment) {
                        d = o.pending;
                        do {
                            if (o.pending === o.pending_buf_size && (o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), s(t), d = o.pending, o.pending === o.pending_buf_size)) {
                                f = 1;
                                break
                            }
                            f = o.gzindex < o.gzhead.comment.length ? 255 & o.gzhead.comment.charCodeAt(o.gzindex++) : 0, l(o, f)
                        } while (0 !== f);
                        o.gzhead.hcrc && o.pending > d && (t.adler = E(t.adler, o.pending_buf, o.pending - d, d)), 0 === f && (o.status = ht)
                    } else o.status = ht;
                if (o.status === ht && (o.gzhead.hcrc ? (o.pending + 2 > o.pending_buf_size && s(t), o.pending + 2 <= o.pending_buf_size && (l(o, 255 & t.adler), l(o, t.adler >> 8 & 255), t.adler = 0, o.status = dt)) : o.status = dt), 0 !== o.pending) {
                    if (s(t), 0 === t.avail_out) return o.last_flush = -1, D
                } else if (0 === t.avail_in && n(e) <= n(a) && e !== N) return i(t, F);
                if (o.status === ft && 0 !== t.avail_in) return i(t, F);
                if (0 !== t.avail_in || 0 !== o.lookahead || e !== Z && o.status !== ft) {
                    var u = o.strategy === j ? g(o, e) : o.strategy === K ? b(o, e) : x[o.level].func(o, e);
                    if (u !== ct && u !== bt || (o.status = ft), u === _t || u === ct) return 0 === t.avail_out && (o.last_flush = -1), D;
                    if (u === ut && (e === R ? B._tr_align(o) : e !== O && (B._tr_stored_block(o, 0, 0, !1), e === C && (r(o.head), 0 === o.lookahead && (o.strstart = 0, o.block_start = 0, o.insert = 0))), s(t), 0 === t.avail_out)) return o.last_flush = -1, D
                }
                return e !== N ? D : o.wrap <= 0 ? I : (2 === o.wrap ? (l(o, 255 & t.adler), l(o, t.adler >> 8 & 255), l(o, t.adler >> 16 & 255), l(o, t.adler >> 24 & 255), l(o, 255 & t.total_in), l(o, t.total_in >> 8 & 255), l(o, t.total_in >> 16 & 255), l(o, t.total_in >> 24 & 255)) : (h(o, t.adler >>> 16), h(o, 65535 & t.adler)), s(t), o.wrap > 0 && (o.wrap = -o.wrap), 0 !== o.pending ? D : I)
            }, a.deflateEnd = function (t) {
                var e;
                return t && t.state ? (e = t.state.status) !== rt && e !== st && e !== ot && e !== lt && e !== ht && e !== dt && e !== ft ? i(t, U) : (t.state = null, e === dt ? i(t, T) : D) : U
            }, a.deflateSetDictionary = function (t, e) {
                var a, i, n, s, o, l, h, d, f = e.length;
                if (!t || !t.state) return U;
                if (a = t.state, 2 === (s = a.wrap) || 1 === s && a.status !== rt || a.lookahead) return U;
                for (1 === s && (t.adler = S(t.adler, e, f, 0)), a.wrap = 0, f >= a.w_size && (0 === s && (r(a.head), a.strstart = 0, a.block_start = 0, a.insert = 0), d = new z.Buf8(a.w_size), z.arraySet(d, e, f - a.w_size, a.w_size, 0), e = d, f = a.w_size), o = t.avail_in, l = t.next_in, h = t.input, t.avail_in = f, t.next_in = 0, t.input = e, _(a); a.lookahead >= et;) {
                    i = a.strstart, n = a.lookahead - (et - 1);
                    do {
                        a.ins_h = (a.ins_h << a.hash_shift ^ a.window[i + et - 1]) & a.hash_mask, a.prev[i & a.w_mask] = a.head[a.ins_h], a.head[a.ins_h] = i, i++
                    } while (--n);
                    a.strstart = i, a.lookahead = et - 1, _(a)
                }
                return a.strstart += a.lookahead, a.block_start = a.strstart, a.insert = a.lookahead, a.lookahead = 0, a.match_length = a.prev_length = et - 1, a.match_available = 0, t.next_in = l, t.input = h, t.avail_in = o, a.wrap = s, D
            }, a.deflateInfo = "pako deflate (from Nodeca project)"
        }, {
            "../utils/common": 3,
            "./adler32": 5,
            "./crc32": 7,
            "./messages": 13,
            "./trees": 14
        }],
        9: [function (t, e, a) {
            "use strict";
            e.exports = function () {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            }
        }, {}],
        10: [function (t, e, a) {
            "use strict";
            e.exports = function (t, e) {
                var a, i, n, r, s, o, l, h, d, f, _, u, c, b, g, m, w, p, v, k, y, x, z, B, S;
                a = t.state, i = t.next_in, B = t.input, n = i + (t.avail_in - 5), r = t.next_out, S = t.output, s = r - (e - t.avail_out), o = r + (t.avail_out - 257), l = a.dmax, h = a.wsize, d = a.whave, f = a.wnext, _ = a.window, u = a.hold, c = a.bits, b = a.lencode, g = a.distcode, m = (1 << a.lenbits) - 1, w = (1 << a.distbits) - 1;
                t: do {
                    c < 15 && (u += B[i++] << c, c += 8, u += B[i++] << c, c += 8), p = b[u & m];
                    e: for (;;) {
                        if (v = p >>> 24, u >>>= v, c -= v, 0 === (v = p >>> 16 & 255)) S[r++] = 65535 & p;
                        else {
                            if (!(16 & v)) {
                                if (0 == (64 & v)) {
                                    p = b[(65535 & p) + (u & (1 << v) - 1)];
                                    continue e
                                }
                                if (32 & v) {
                                    a.mode = 12;
                                    break t
                                }
                                t.msg = "invalid literal/length code", a.mode = 30;
                                break t
                            }
                            k = 65535 & p, (v &= 15) && (c < v && (u += B[i++] << c, c += 8), k += u & (1 << v) - 1, u >>>= v, c -= v), c < 15 && (u += B[i++] << c, c += 8, u += B[i++] << c, c += 8), p = g[u & w];
                            a: for (;;) {
                                if (v = p >>> 24, u >>>= v, c -= v, !(16 & (v = p >>> 16 & 255))) {
                                    if (0 == (64 & v)) {
                                        p = g[(65535 & p) + (u & (1 << v) - 1)];
                                        continue a
                                    }
                                    t.msg = "invalid distance code", a.mode = 30;
                                    break t
                                }
                                if (y = 65535 & p, v &= 15, c < v && (u += B[i++] << c, (c += 8) < v && (u += B[i++] << c, c += 8)), (y += u & (1 << v) - 1) > l) {
                                    t.msg = "invalid distance too far back", a.mode = 30;
                                    break t
                                }
                                if (u >>>= v, c -= v, v = r - s, y > v) {
                                    if ((v = y - v) > d && a.sane) {
                                        t.msg = "invalid distance too far back", a.mode = 30;
                                        break t
                                    }
                                    if (x = 0, z = _, 0 === f) {
                                        if (x += h - v, v < k) {
                                            k -= v;
                                            do {
                                                S[r++] = _[x++]
                                            } while (--v);
                                            x = r - y, z = S
                                        }
                                    } else if (f < v) {
                                        if (x += h + f - v, (v -= f) < k) {
                                            k -= v;
                                            do {
                                                S[r++] = _[x++]
                                            } while (--v);
                                            if (x = 0, f < k) {
                                                k -= v = f;
                                                do {
                                                    S[r++] = _[x++]
                                                } while (--v);
                                                x = r - y, z = S
                                            }
                                        }
                                    } else if (x += f - v, v < k) {
                                        k -= v;
                                        do {
                                            S[r++] = _[x++]
                                        } while (--v);
                                        x = r - y, z = S
                                    }
                                    for (; k > 2;) S[r++] = z[x++], S[r++] = z[x++], S[r++] = z[x++], k -= 3;
                                    k && (S[r++] = z[x++], k > 1 && (S[r++] = z[x++]))
                                } else {
                                    x = r - y;
                                    do {
                                        S[r++] = S[x++], S[r++] = S[x++], S[r++] = S[x++], k -= 3
                                    } while (k > 2);
                                    k && (S[r++] = S[x++], k > 1 && (S[r++] = S[x++]))
                                }
                                break
                            }
                        }
                        break
                    }
                } while (i < n && r < o);
                i -= k = c >> 3, u &= (1 << (c -= k << 3)) - 1, t.next_in = i, t.next_out = r, t.avail_in = i < n ? n - i + 5 : 5 - (i - n), t.avail_out = r < o ? o - r + 257 : 257 - (r - o), a.hold = u, a.bits = c
            }
        }, {}],
        11: [function (t, e, a) {
            "use strict";

            function i(t) {
                return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
            }

            function n() {
                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new u.Buf16(320), this.work = new u.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            function r(t) {
                var e;
                return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = N, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new u.Buf32(dt), e.distcode = e.distdyn = new u.Buf32(ft), e.sane = 1, e.back = -1, z) : E
            }

            function s(t) {
                var e;
                return t && t.state ? (e = t.state, e.wsize = 0, e.whave = 0, e.wnext = 0, r(t)) : E
            }

            function o(t, e) {
                var a, i;
                return t && t.state ? (i = t.state, e < 0 ? (a = 0, e = -e) : (a = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? E : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = a, i.wbits = e, s(t))) : E
            }

            function l(t, e) {
                var a, i;
                return t ? (i = new n, t.state = i, i.window = null, (a = o(t, e)) !== z && (t.state = null), a) : E
            }

            function h(t) {
                if (ut) {
                    var e;
                    for (f = new u.Buf32(512), _ = new u.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;
                    for (; e < 256;) t.lens[e++] = 9;
                    for (; e < 280;) t.lens[e++] = 7;
                    for (; e < 288;) t.lens[e++] = 8;
                    for (m(p, t.lens, 0, 288, f, 0, t.work, {
                            bits: 9
                        }), e = 0; e < 32;) t.lens[e++] = 5;
                    m(v, t.lens, 0, 32, _, 0, t.work, {
                        bits: 5
                    }), ut = !1
                }
                t.lencode = f, t.lenbits = 9, t.distcode = _, t.distbits = 5
            }

            function d(t, e, a, i) {
                var n, r = t.state;
                return null === r.window && (r.wsize = 1 << r.wbits, r.wnext = 0, r.whave = 0, r.window = new u.Buf8(r.wsize)), i >= r.wsize ? (u.arraySet(r.window, e, a - r.wsize, r.wsize, 0), r.wnext = 0, r.whave = r.wsize) : ((n = r.wsize - r.wnext) > i && (n = i), u.arraySet(r.window, e, a - i, n, r.wnext), (i -= n) ? (u.arraySet(r.window, e, a - i, i, 0), r.wnext = i, r.whave = r.wsize) : (r.wnext += n, r.wnext === r.wsize && (r.wnext = 0), r.whave < r.wsize && (r.whave += n))), 0
            }
            var f, _, u = t("../utils/common"),
                c = t("./adler32"),
                b = t("./crc32"),
                g = t("./inffast"),
                m = t("./inftrees"),
                w = 0,
                p = 1,
                v = 2,
                k = 4,
                y = 5,
                x = 6,
                z = 0,
                B = 1,
                S = 2,
                E = -2,
                A = -3,
                Z = -4,
                R = -5,
                C = 8,
                N = 1,
                O = 2,
                D = 3,
                I = 4,
                U = 5,
                T = 6,
                F = 7,
                L = 8,
                H = 9,
                j = 10,
                K = 11,
                M = 12,
                P = 13,
                Y = 14,
                q = 15,
                G = 16,
                X = 17,
                W = 18,
                J = 19,
                Q = 20,
                V = 21,
                $ = 22,
                tt = 23,
                et = 24,
                at = 25,
                it = 26,
                nt = 27,
                rt = 28,
                st = 29,
                ot = 30,
                lt = 31,
                ht = 32,
                dt = 852,
                ft = 592,
                _t = 15,
                ut = !0;
            a.inflateReset = s, a.inflateReset2 = o, a.inflateResetKeep = r, a.inflateInit = function (t) {
                return l(t, _t)
            }, a.inflateInit2 = l, a.inflate = function (t, e) {
                var a, n, r, s, o, l, f, _, dt, ft, _t, ut, ct, bt, gt, mt, wt, pt, vt, kt, yt, xt, zt, Bt, St = 0,
                    Et = new u.Buf8(4),
                    At = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return E;
                (a = t.state).mode === M && (a.mode = P), o = t.next_out, r = t.output, f = t.avail_out, s = t.next_in, n = t.input, l = t.avail_in, _ = a.hold, dt = a.bits, ft = l, _t = f, xt = z;
                t: for (;;) switch (a.mode) {
                    case N:
                        if (0 === a.wrap) {
                            a.mode = P;
                            break
                        }
                        for (; dt < 16;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        if (2 & a.wrap && 35615 === _) {
                            a.check = 0, Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0), _ = 0, dt = 0, a.mode = O;
                            break
                        }
                        if (a.flags = 0, a.head && (a.head.done = !1), !(1 & a.wrap) || (((255 & _) << 8) + (_ >> 8)) % 31) {
                            t.msg = "incorrect header check", a.mode = ot;
                            break
                        }
                        if ((15 & _) !== C) {
                            t.msg = "unknown compression method", a.mode = ot;
                            break
                        }
                        if (_ >>>= 4, dt -= 4, yt = 8 + (15 & _), 0 === a.wbits) a.wbits = yt;
                        else if (yt > a.wbits) {
                            t.msg = "invalid window size", a.mode = ot;
                            break
                        }
                        a.dmax = 1 << yt, t.adler = a.check = 1, a.mode = 512 & _ ? j : M, _ = 0, dt = 0;
                        break;
                    case O:
                        for (; dt < 16;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        if (a.flags = _, (255 & a.flags) !== C) {
                            t.msg = "unknown compression method", a.mode = ot;
                            break
                        }
                        if (57344 & a.flags) {
                            t.msg = "unknown header flags set", a.mode = ot;
                            break
                        }
                        a.head && (a.head.text = _ >> 8 & 1), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0)), _ = 0, dt = 0, a.mode = D;
                    case D:
                        for (; dt < 32;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        a.head && (a.head.time = _), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, Et[2] = _ >>> 16 & 255, Et[3] = _ >>> 24 & 255, a.check = b(a.check, Et, 4, 0)), _ = 0, dt = 0, a.mode = I;
                    case I:
                        for (; dt < 16;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        a.head && (a.head.xflags = 255 & _, a.head.os = _ >> 8), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0)), _ = 0, dt = 0, a.mode = U;
                    case U:
                        if (1024 & a.flags) {
                            for (; dt < 16;) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            a.length = _, a.head && (a.head.extra_len = _), 512 & a.flags && (Et[0] = 255 & _, Et[1] = _ >>> 8 & 255, a.check = b(a.check, Et, 2, 0)), _ = 0, dt = 0
                        } else a.head && (a.head.extra = null);
                        a.mode = T;
                    case T:
                        if (1024 & a.flags && ((ut = a.length) > l && (ut = l), ut && (a.head && (yt = a.head.extra_len - a.length, a.head.extra || (a.head.extra = new Array(a.head.extra_len)), u.arraySet(a.head.extra, n, s, ut, yt)), 512 & a.flags && (a.check = b(a.check, n, ut, s)), l -= ut, s += ut, a.length -= ut), a.length)) break t;
                        a.length = 0, a.mode = F;
                    case F:
                        if (2048 & a.flags) {
                            if (0 === l) break t;
                            ut = 0;
                            do {
                                yt = n[s + ut++], a.head && yt && a.length < 65536 && (a.head.name += String.fromCharCode(yt))
                            } while (yt && ut < l);
                            if (512 & a.flags && (a.check = b(a.check, n, ut, s)), l -= ut, s += ut, yt) break t
                        } else a.head && (a.head.name = null);
                        a.length = 0, a.mode = L;
                    case L:
                        if (4096 & a.flags) {
                            if (0 === l) break t;
                            ut = 0;
                            do {
                                yt = n[s + ut++], a.head && yt && a.length < 65536 && (a.head.comment += String.fromCharCode(yt))
                            } while (yt && ut < l);
                            if (512 & a.flags && (a.check = b(a.check, n, ut, s)), l -= ut, s += ut, yt) break t
                        } else a.head && (a.head.comment = null);
                        a.mode = H;
                    case H:
                        if (512 & a.flags) {
                            for (; dt < 16;) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            if (_ !== (65535 & a.check)) {
                                t.msg = "header crc mismatch", a.mode = ot;
                                break
                            }
                            _ = 0, dt = 0
                        }
                        a.head && (a.head.hcrc = a.flags >> 9 & 1, a.head.done = !0), t.adler = a.check = 0, a.mode = M;
                        break;
                    case j:
                        for (; dt < 32;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        t.adler = a.check = i(_), _ = 0, dt = 0, a.mode = K;
                    case K:
                        if (0 === a.havedict) return t.next_out = o, t.avail_out = f, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = dt, S;
                        t.adler = a.check = 1, a.mode = M;
                    case M:
                        if (e === y || e === x) break t;
                    case P:
                        if (a.last) {
                            _ >>>= 7 & dt, dt -= 7 & dt, a.mode = nt;
                            break
                        }
                        for (; dt < 3;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        switch (a.last = 1 & _, _ >>>= 1, dt -= 1, 3 & _) {
                            case 0:
                                a.mode = Y;
                                break;
                            case 1:
                                if (h(a), a.mode = Q, e === x) {
                                    _ >>>= 2, dt -= 2;
                                    break t
                                }
                                break;
                            case 2:
                                a.mode = X;
                                break;
                            case 3:
                                t.msg = "invalid block type", a.mode = ot
                        }
                        _ >>>= 2, dt -= 2;
                        break;
                    case Y:
                        for (_ >>>= 7 & dt, dt -= 7 & dt; dt < 32;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        if ((65535 & _) != (_ >>> 16 ^ 65535)) {
                            t.msg = "invalid stored block lengths", a.mode = ot;
                            break
                        }
                        if (a.length = 65535 & _, _ = 0, dt = 0, a.mode = q, e === x) break t;
                    case q:
                        a.mode = G;
                    case G:
                        if (ut = a.length) {
                            if (ut > l && (ut = l), ut > f && (ut = f), 0 === ut) break t;
                            u.arraySet(r, n, s, ut, o), l -= ut, s += ut, f -= ut, o += ut, a.length -= ut;
                            break
                        }
                        a.mode = M;
                        break;
                    case X:
                        for (; dt < 14;) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        if (a.nlen = 257 + (31 & _), _ >>>= 5, dt -= 5, a.ndist = 1 + (31 & _), _ >>>= 5, dt -= 5, a.ncode = 4 + (15 & _), _ >>>= 4, dt -= 4, a.nlen > 286 || a.ndist > 30) {
                            t.msg = "too many length or distance symbols", a.mode = ot;
                            break
                        }
                        a.have = 0, a.mode = W;
                    case W:
                        for (; a.have < a.ncode;) {
                            for (; dt < 3;) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            a.lens[At[a.have++]] = 7 & _, _ >>>= 3, dt -= 3
                        }
                        for (; a.have < 19;) a.lens[At[a.have++]] = 0;
                        if (a.lencode = a.lendyn, a.lenbits = 7, zt = {
                                bits: a.lenbits
                            }, xt = m(w, a.lens, 0, 19, a.lencode, 0, a.work, zt), a.lenbits = zt.bits, xt) {
                            t.msg = "invalid code lengths set", a.mode = ot;
                            break
                        }
                        a.have = 0, a.mode = J;
                    case J:
                        for (; a.have < a.nlen + a.ndist;) {
                            for (; St = a.lencode[_ & (1 << a.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= dt);) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            if (wt < 16) _ >>>= gt, dt -= gt, a.lens[a.have++] = wt;
                            else {
                                if (16 === wt) {
                                    for (Bt = gt + 2; dt < Bt;) {
                                        if (0 === l) break t;
                                        l--, _ += n[s++] << dt, dt += 8
                                    }
                                    if (_ >>>= gt, dt -= gt, 0 === a.have) {
                                        t.msg = "invalid bit length repeat", a.mode = ot;
                                        break
                                    }
                                    yt = a.lens[a.have - 1], ut = 3 + (3 & _), _ >>>= 2, dt -= 2
                                } else if (17 === wt) {
                                    for (Bt = gt + 3; dt < Bt;) {
                                        if (0 === l) break t;
                                        l--, _ += n[s++] << dt, dt += 8
                                    }
                                    dt -= gt, yt = 0, ut = 3 + (7 & (_ >>>= gt)), _ >>>= 3, dt -= 3
                                } else {
                                    for (Bt = gt + 7; dt < Bt;) {
                                        if (0 === l) break t;
                                        l--, _ += n[s++] << dt, dt += 8
                                    }
                                    dt -= gt, yt = 0, ut = 11 + (127 & (_ >>>= gt)), _ >>>= 7, dt -= 7
                                }
                                if (a.have + ut > a.nlen + a.ndist) {
                                    t.msg = "invalid bit length repeat", a.mode = ot;
                                    break
                                }
                                for (; ut--;) a.lens[a.have++] = yt
                            }
                        }
                        if (a.mode === ot) break;
                        if (0 === a.lens[256]) {
                            t.msg = "invalid code -- missing end-of-block", a.mode = ot;
                            break
                        }
                        if (a.lenbits = 9, zt = {
                                bits: a.lenbits
                            }, xt = m(p, a.lens, 0, a.nlen, a.lencode, 0, a.work, zt), a.lenbits = zt.bits, xt) {
                            t.msg = "invalid literal/lengths set", a.mode = ot;
                            break
                        }
                        if (a.distbits = 6, a.distcode = a.distdyn, zt = {
                                bits: a.distbits
                            }, xt = m(v, a.lens, a.nlen, a.ndist, a.distcode, 0, a.work, zt), a.distbits = zt.bits, xt) {
                            t.msg = "invalid distances set", a.mode = ot;
                            break
                        }
                        if (a.mode = Q, e === x) break t;
                    case Q:
                        a.mode = V;
                    case V:
                        if (l >= 6 && f >= 258) {
                            t.next_out = o, t.avail_out = f, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = dt, g(t, _t), o = t.next_out, r = t.output, f = t.avail_out, s = t.next_in, n = t.input, l = t.avail_in, _ = a.hold, dt = a.bits, a.mode === M && (a.back = -1);
                            break
                        }
                        for (a.back = 0; St = a.lencode[_ & (1 << a.lenbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= dt);) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        if (mt && 0 == (240 & mt)) {
                            for (pt = gt, vt = mt, kt = wt; St = a.lencode[kt + ((_ & (1 << pt + vt) - 1) >> pt)], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(pt + gt <= dt);) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            _ >>>= pt, dt -= pt, a.back += pt
                        }
                        if (_ >>>= gt, dt -= gt, a.back += gt, a.length = wt, 0 === mt) {
                            a.mode = it;
                            break
                        }
                        if (32 & mt) {
                            a.back = -1, a.mode = M;
                            break
                        }
                        if (64 & mt) {
                            t.msg = "invalid literal/length code", a.mode = ot;
                            break
                        }
                        a.extra = 15 & mt, a.mode = $;
                    case $:
                        if (a.extra) {
                            for (Bt = a.extra; dt < Bt;) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            a.length += _ & (1 << a.extra) - 1, _ >>>= a.extra, dt -= a.extra, a.back += a.extra
                        }
                        a.was = a.length, a.mode = tt;
                    case tt:
                        for (; St = a.distcode[_ & (1 << a.distbits) - 1], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(gt <= dt);) {
                            if (0 === l) break t;
                            l--, _ += n[s++] << dt, dt += 8
                        }
                        if (0 == (240 & mt)) {
                            for (pt = gt, vt = mt, kt = wt; St = a.distcode[kt + ((_ & (1 << pt + vt) - 1) >> pt)], gt = St >>> 24, mt = St >>> 16 & 255, wt = 65535 & St, !(pt + gt <= dt);) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            _ >>>= pt, dt -= pt, a.back += pt
                        }
                        if (_ >>>= gt, dt -= gt, a.back += gt, 64 & mt) {
                            t.msg = "invalid distance code", a.mode = ot;
                            break
                        }
                        a.offset = wt, a.extra = 15 & mt, a.mode = et;
                    case et:
                        if (a.extra) {
                            for (Bt = a.extra; dt < Bt;) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            a.offset += _ & (1 << a.extra) - 1, _ >>>= a.extra, dt -= a.extra, a.back += a.extra
                        }
                        if (a.offset > a.dmax) {
                            t.msg = "invalid distance too far back", a.mode = ot;
                            break
                        }
                        a.mode = at;
                    case at:
                        if (0 === f) break t;
                        if (ut = _t - f, a.offset > ut) {
                            if ((ut = a.offset - ut) > a.whave && a.sane) {
                                t.msg = "invalid distance too far back", a.mode = ot;
                                break
                            }
                            ut > a.wnext ? (ut -= a.wnext, ct = a.wsize - ut) : ct = a.wnext - ut, ut > a.length && (ut = a.length), bt = a.window
                        } else bt = r, ct = o - a.offset, ut = a.length;
                        ut > f && (ut = f), f -= ut, a.length -= ut;
                        do {
                            r[o++] = bt[ct++]
                        } while (--ut);
                        0 === a.length && (a.mode = V);
                        break;
                    case it:
                        if (0 === f) break t;
                        r[o++] = a.length, f--, a.mode = V;
                        break;
                    case nt:
                        if (a.wrap) {
                            for (; dt < 32;) {
                                if (0 === l) break t;
                                l--, _ |= n[s++] << dt, dt += 8
                            }
                            if (_t -= f, t.total_out += _t, a.total += _t, _t && (t.adler = a.check = a.flags ? b(a.check, r, _t, o - _t) : c(a.check, r, _t, o - _t)), _t = f, (a.flags ? _ : i(_)) !== a.check) {
                                t.msg = "incorrect data check", a.mode = ot;
                                break
                            }
                            _ = 0, dt = 0
                        }
                        a.mode = rt;
                    case rt:
                        if (a.wrap && a.flags) {
                            for (; dt < 32;) {
                                if (0 === l) break t;
                                l--, _ += n[s++] << dt, dt += 8
                            }
                            if (_ !== (4294967295 & a.total)) {
                                t.msg = "incorrect length check", a.mode = ot;
                                break
                            }
                            _ = 0, dt = 0
                        }
                        a.mode = st;
                    case st:
                        xt = B;
                        break t;
                    case ot:
                        xt = A;
                        break t;
                    case lt:
                        return Z;
                    case ht:
                    default:
                        return E
                }
                return t.next_out = o, t.avail_out = f, t.next_in = s, t.avail_in = l, a.hold = _, a.bits = dt, (a.wsize || _t !== t.avail_out && a.mode < ot && (a.mode < nt || e !== k)) && d(t, t.output, t.next_out, _t - t.avail_out) ? (a.mode = lt, Z) : (ft -= t.avail_in, _t -= t.avail_out, t.total_in += ft, t.total_out += _t, a.total += _t, a.wrap && _t && (t.adler = a.check = a.flags ? b(a.check, r, _t, t.next_out - _t) : c(a.check, r, _t, t.next_out - _t)), t.data_type = a.bits + (a.last ? 64 : 0) + (a.mode === M ? 128 : 0) + (a.mode === Q || a.mode === q ? 256 : 0), (0 === ft && 0 === _t || e === k) && xt === z && (xt = R), xt)
            }, a.inflateEnd = function (t) {
                if (!t || !t.state) return E;
                var e = t.state;
                return e.window && (e.window = null), t.state = null, z
            }, a.inflateGetHeader = function (t, e) {
                var a;
                return t && t.state ? 0 == (2 & (a = t.state).wrap) ? E : (a.head = e, e.done = !1, z) : E
            }, a.inflateSetDictionary = function (t, e) {
                var a, i, n = e.length;
                return t && t.state ? 0 !== (a = t.state).wrap && a.mode !== K ? E : a.mode === K && (i = 1, (i = c(i, e, n, 0)) !== a.check) ? A : d(t, e, n, n) ? (a.mode = lt, Z) : (a.havedict = 1, z) : E
            }, a.inflateInfo = "pako inflate (from Nodeca project)"
        }, {
            "../utils/common": 3,
            "./adler32": 5,
            "./crc32": 7,
            "./inffast": 10,
            "./inftrees": 12
        }],
        12: [function (t, e, a) {
            "use strict";
            var i = t("../utils/common"),
                n = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                r = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                o = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            e.exports = function (t, e, a, l, h, d, f, _) {
                var u, c, b, g, m, w, p, v, k, y = _.bits,
                    x = 0,
                    z = 0,
                    B = 0,
                    S = 0,
                    E = 0,
                    A = 0,
                    Z = 0,
                    R = 0,
                    C = 0,
                    N = 0,
                    O = null,
                    D = 0,
                    I = new i.Buf16(16),
                    U = new i.Buf16(16),
                    T = null,
                    F = 0;
                for (x = 0; x <= 15; x++) I[x] = 0;
                for (z = 0; z < l; z++) I[e[a + z]]++;
                for (E = y, S = 15; S >= 1 && 0 === I[S]; S--);
                if (E > S && (E = S), 0 === S) return h[d++] = 20971520, h[d++] = 20971520, _.bits = 1, 0;
                for (B = 1; B < S && 0 === I[B]; B++);
                for (E < B && (E = B), R = 1, x = 1; x <= 15; x++)
                    if (R <<= 1, (R -= I[x]) < 0) return -1;
                if (R > 0 && (0 === t || 1 !== S)) return -1;
                for (U[1] = 0, x = 1; x < 15; x++) U[x + 1] = U[x] + I[x];
                for (z = 0; z < l; z++) 0 !== e[a + z] && (f[U[e[a + z]]++] = z);
                if (0 === t ? (O = T = f, w = 19) : 1 === t ? (O = n, D -= 257, T = r, F -= 257, w = 256) : (O = s, T = o, w = -1), N = 0, z = 0, x = B, m = d, A = E, Z = 0, b = -1, C = 1 << E, g = C - 1, 1 === t && C > 852 || 2 === t && C > 592) return 1;
                for (;;) {
                    p = x - Z, f[z] < w ? (v = 0, k = f[z]) : f[z] > w ? (v = T[F + f[z]], k = O[D + f[z]]) : (v = 96, k = 0), u = 1 << x - Z, B = c = 1 << A;
                    do {
                        h[m + (N >> Z) + (c -= u)] = p << 24 | v << 16 | k | 0
                    } while (0 !== c);
                    for (u = 1 << x - 1; N & u;) u >>= 1;
                    if (0 !== u ? (N &= u - 1, N += u) : N = 0, z++, 0 == --I[x]) {
                        if (x === S) break;
                        x = e[a + f[z]]
                    }
                    if (x > E && (N & g) !== b) {
                        for (0 === Z && (Z = E), m += B, R = 1 << (A = x - Z); A + Z < S && !((R -= I[A + Z]) <= 0);) A++, R <<= 1;
                        if (C += 1 << A, 1 === t && C > 852 || 2 === t && C > 592) return 1;
                        h[b = N & g] = E << 24 | A << 16 | m - d | 0
                    }
                }
                return 0 !== N && (h[m + N] = x - Z << 24 | 64 << 16 | 0), _.bits = E, 0
            }
        }, {
            "../utils/common": 3
        }],
        13: [function (t, e, a) {
            "use strict";
            e.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        }, {}],
        14: [function (t, e, a) {
            "use strict";

            function i(t) {
                for (var e = t.length; --e >= 0;) t[e] = 0
            }

            function n(t, e, a, i, n) {
                this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = i, this.max_length = n, this.has_stree = t && t.length
            }

            function r(t, e) {
                this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
            }

            function s(t) {
                return t < 256 ? et[t] : et[256 + (t >>> 7)]
            }

            function o(t, e) {
                t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
            }

            function l(t, e, a) {
                t.bi_valid > M - a ? (t.bi_buf |= e << t.bi_valid & 65535, o(t, t.bi_buf), t.bi_buf = e >> M - t.bi_valid, t.bi_valid += a - M) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a)
            }

            function h(t, e, a) {
                l(t, a[2 * e], a[2 * e + 1])
            }

            function d(t, e) {
                var a = 0;
                do {
                    a |= 1 & t, t >>>= 1, a <<= 1
                } while (--e > 0);
                return a >>> 1
            }

            function f(t) {
                16 === t.bi_valid ? (o(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
            }

            function _(t, e) {
                var a, i, n, r, s, o, l = e.dyn_tree,
                    h = e.max_code,
                    d = e.stat_desc.static_tree,
                    f = e.stat_desc.has_stree,
                    _ = e.stat_desc.extra_bits,
                    u = e.stat_desc.extra_base,
                    c = e.stat_desc.max_length,
                    b = 0;
                for (r = 0; r <= K; r++) t.bl_count[r] = 0;
                for (l[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; a < j; a++)(r = l[2 * l[2 * (i = t.heap[a]) + 1] + 1] + 1) > c && (r = c, b++), l[2 * i + 1] = r, i > h || (t.bl_count[r]++, s = 0, i >= u && (s = _[i - u]), o = l[2 * i], t.opt_len += o * (r + s), f && (t.static_len += o * (d[2 * i + 1] + s)));
                if (0 !== b) {
                    do {
                        for (r = c - 1; 0 === t.bl_count[r];) r--;
                        t.bl_count[r]--, t.bl_count[r + 1] += 2, t.bl_count[c]--, b -= 2
                    } while (b > 0);
                    for (r = c; 0 !== r; r--)
                        for (i = t.bl_count[r]; 0 !== i;)(n = t.heap[--a]) > h || (l[2 * n + 1] !== r && (t.opt_len += (r - l[2 * n + 1]) * l[2 * n], l[2 * n + 1] = r), i--)
                }
            }

            function u(t, e, a) {
                var i, n, r = new Array(K + 1),
                    s = 0;
                for (i = 1; i <= K; i++) r[i] = s = s + a[i - 1] << 1;
                for (n = 0; n <= e; n++) {
                    var o = t[2 * n + 1];
                    0 !== o && (t[2 * n] = d(r[o]++, o))
                }
            }

            function c() {
                var t, e, a, i, r, s = new Array(K + 1);
                for (a = 0, i = 0; i < U - 1; i++)
                    for (it[i] = a, t = 0; t < 1 << W[i]; t++) at[a++] = i;
                for (at[a - 1] = i, r = 0, i = 0; i < 16; i++)
                    for (nt[i] = r, t = 0; t < 1 << J[i]; t++) et[r++] = i;
                for (r >>= 7; i < L; i++)
                    for (nt[i] = r << 7, t = 0; t < 1 << J[i] - 7; t++) et[256 + r++] = i;
                for (e = 0; e <= K; e++) s[e] = 0;
                for (t = 0; t <= 143;) $[2 * t + 1] = 8, t++, s[8]++;
                for (; t <= 255;) $[2 * t + 1] = 9, t++, s[9]++;
                for (; t <= 279;) $[2 * t + 1] = 7, t++, s[7]++;
                for (; t <= 287;) $[2 * t + 1] = 8, t++, s[8]++;
                for (u($, F + 1, s), t = 0; t < L; t++) tt[2 * t + 1] = 5, tt[2 * t] = d(t, 5);
                rt = new n($, W, T + 1, F, K), st = new n(tt, J, 0, L, K), ot = new n(new Array(0), Q, 0, H, P)
            }

            function b(t) {
                var e;
                for (e = 0; e < F; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < L; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < H; e++) t.bl_tree[2 * e] = 0;
                t.dyn_ltree[2 * Y] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
            }

            function g(t) {
                t.bi_valid > 8 ? o(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
            }

            function m(t, e, a, i) {
                g(t), i && (o(t, a), o(t, ~a)), A.arraySet(t.pending_buf, t.window, e, a, t.pending), t.pending += a
            }

            function w(t, e, a, i) {
                var n = 2 * e,
                    r = 2 * a;
                return t[n] < t[r] || t[n] === t[r] && i[e] <= i[a]
            }

            function p(t, e, a) {
                for (var i = t.heap[a], n = a << 1; n <= t.heap_len && (n < t.heap_len && w(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !w(e, i, t.heap[n], t.depth));) t.heap[a] = t.heap[n], a = n, n <<= 1;
                t.heap[a] = i
            }

            function v(t, e, a) {
                var i, n, r, o, d = 0;
                if (0 !== t.last_lit)
                    do {
                        i = t.pending_buf[t.d_buf + 2 * d] << 8 | t.pending_buf[t.d_buf + 2 * d + 1], n = t.pending_buf[t.l_buf + d], d++, 0 === i ? h(t, n, e) : (h(t, (r = at[n]) + T + 1, e), 0 !== (o = W[r]) && l(t, n -= it[r], o), h(t, r = s(--i), a), 0 !== (o = J[r]) && l(t, i -= nt[r], o))
                    } while (d < t.last_lit);
                h(t, Y, e)
            }

            function k(t, e) {
                var a, i, n, r = e.dyn_tree,
                    s = e.stat_desc.static_tree,
                    o = e.stat_desc.has_stree,
                    l = e.stat_desc.elems,
                    h = -1;
                for (t.heap_len = 0, t.heap_max = j, a = 0; a < l; a++) 0 !== r[2 * a] ? (t.heap[++t.heap_len] = h = a, t.depth[a] = 0) : r[2 * a + 1] = 0;
                for (; t.heap_len < 2;) r[2 * (n = t.heap[++t.heap_len] = h < 2 ? ++h : 0)] = 1, t.depth[n] = 0, t.opt_len--, o && (t.static_len -= s[2 * n + 1]);
                for (e.max_code = h, a = t.heap_len >> 1; a >= 1; a--) p(t, r, a);
                n = l;
                do {
                    a = t.heap[1], t.heap[1] = t.heap[t.heap_len--], p(t, r, 1), i = t.heap[1], t.heap[--t.heap_max] = a, t.heap[--t.heap_max] = i, r[2 * n] = r[2 * a] + r[2 * i], t.depth[n] = (t.depth[a] >= t.depth[i] ? t.depth[a] : t.depth[i]) + 1, r[2 * a + 1] = r[2 * i + 1] = n, t.heap[1] = n++, p(t, r, 1)
                } while (t.heap_len >= 2);
                t.heap[--t.heap_max] = t.heap[1], _(t, e), u(r, h, t.bl_count)
            }

            function y(t, e, a) {
                var i, n, r = -1,
                    s = e[1],
                    o = 0,
                    l = 7,
                    h = 4;
                for (0 === s && (l = 138, h = 3), e[2 * (a + 1) + 1] = 65535, i = 0; i <= a; i++) n = s, s = e[2 * (i + 1) + 1], ++o < l && n === s || (o < h ? t.bl_tree[2 * n] += o : 0 !== n ? (n !== r && t.bl_tree[2 * n]++, t.bl_tree[2 * q]++) : o <= 10 ? t.bl_tree[2 * G]++ : t.bl_tree[2 * X]++, o = 0, r = n, 0 === s ? (l = 138, h = 3) : n === s ? (l = 6, h = 3) : (l = 7, h = 4))
            }

            function x(t, e, a) {
                var i, n, r = -1,
                    s = e[1],
                    o = 0,
                    d = 7,
                    f = 4;
                for (0 === s && (d = 138, f = 3), i = 0; i <= a; i++)
                    if (n = s, s = e[2 * (i + 1) + 1], !(++o < d && n === s)) {
                        if (o < f)
                            do {
                                h(t, n, t.bl_tree)
                            } while (0 != --o);
                        else 0 !== n ? (n !== r && (h(t, n, t.bl_tree), o--), h(t, q, t.bl_tree), l(t, o - 3, 2)) : o <= 10 ? (h(t, G, t.bl_tree), l(t, o - 3, 3)) : (h(t, X, t.bl_tree), l(t, o - 11, 7));
                        o = 0, r = n, 0 === s ? (d = 138, f = 3) : n === s ? (d = 6, f = 3) : (d = 7, f = 4)
                    }
            }

            function z(t) {
                var e;
                for (y(t, t.dyn_ltree, t.l_desc.max_code), y(t, t.dyn_dtree, t.d_desc.max_code), k(t, t.bl_desc), e = H - 1; e >= 3 && 0 === t.bl_tree[2 * V[e] + 1]; e--);
                return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
            }

            function B(t, e, a, i) {
                var n;
                for (l(t, e - 257, 5), l(t, a - 1, 5), l(t, i - 4, 4), n = 0; n < i; n++) l(t, t.bl_tree[2 * V[n] + 1], 3);
                x(t, t.dyn_ltree, e - 1), x(t, t.dyn_dtree, a - 1)
            }

            function S(t) {
                var e, a = 4093624447;
                for (e = 0; e <= 31; e++, a >>>= 1)
                    if (1 & a && 0 !== t.dyn_ltree[2 * e]) return R;
                if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return C;
                for (e = 32; e < T; e++)
                    if (0 !== t.dyn_ltree[2 * e]) return C;
                return R
            }

            function E(t, e, a, i) {
                l(t, (O << 1) + (i ? 1 : 0), 3), m(t, e, a, !0)
            }
            var A = t("../utils/common"),
                Z = 4,
                R = 0,
                C = 1,
                N = 2,
                O = 0,
                D = 1,
                I = 2,
                U = 29,
                T = 256,
                F = T + 1 + U,
                L = 30,
                H = 19,
                j = 2 * F + 1,
                K = 15,
                M = 16,
                P = 7,
                Y = 256,
                q = 16,
                G = 17,
                X = 18,
                W = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                Q = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                $ = new Array(2 * (F + 2));
            i($);
            var tt = new Array(2 * L);
            i(tt);
            var et = new Array(512);
            i(et);
            var at = new Array(256);
            i(at);
            var it = new Array(U);
            i(it);
            var nt = new Array(L);
            i(nt);
            var rt, st, ot, lt = !1;
            a._tr_init = function (t) {
                lt || (c(), lt = !0), t.l_desc = new r(t.dyn_ltree, rt), t.d_desc = new r(t.dyn_dtree, st), t.bl_desc = new r(t.bl_tree, ot), t.bi_buf = 0, t.bi_valid = 0, b(t)
            }, a._tr_stored_block = E, a._tr_flush_block = function (t, e, a, i) {
                var n, r, s = 0;
                t.level > 0 ? (t.strm.data_type === N && (t.strm.data_type = S(t)), k(t, t.l_desc), k(t, t.d_desc), s = z(t), n = t.opt_len + 3 + 7 >>> 3, (r = t.static_len + 3 + 7 >>> 3) <= n && (n = r)) : n = r = a + 5, a + 4 <= n && -1 !== e ? E(t, e, a, i) : t.strategy === Z || r === n ? (l(t, (D << 1) + (i ? 1 : 0), 3), v(t, $, tt)) : (l(t, (I << 1) + (i ? 1 : 0), 3), B(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1), v(t, t.dyn_ltree, t.dyn_dtree)), b(t), i && g(t)
            }, a._tr_tally = function (t, e, a) {
                return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & a, t.last_lit++, 0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (at[a] + T + 1)]++, t.dyn_dtree[2 * s(e)]++), t.last_lit === t.lit_bufsize - 1
            }, a._tr_align = function (t) {
                l(t, D << 1, 3), h(t, Y, $), f(t)
            }
        }, {
            "../utils/common": 3
        }],
        15: [function (t, e, a) {
            "use strict";
            e.exports = function () {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
        }, {}],
        "/": [function (t, e, a) {
            "use strict";
            var i = {};
            (0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = i
        }, {
            "./lib/deflate": 1,
            "./lib/inflate": 2,
            "./lib/utils/common": 3,
            "./lib/zlib/constants": 6
        }]
    }, {}, [])("/")
});
"use strict";
var player = {
    saveStart: Date.now(),
    lastTime: Date.now(),
    timeWarp: 1
};

function afterLoad() {
    $("#versionNum").html(PatchManager.lastVersion());
    refreshPatchNotes();
    initializeRecipes();
    initializeMats();
    if (!loadGame()) {
        recipeList.idToItem("R13001").owned = true;
        achievementStats.startTime = Date.now();
        GuildManager.guilds.forEach(function (g) {
            g.generateNewOrder(1);
            g.generateNewOrder(2);
            g.generateNewOrder(3)
        });
        pregearHeroes();
        HeroManager.heroes.forEach(function (hero) {
            PlaybookManager.idToPlaybook(hero.startingPlaybook).unlocked = true
        })
    }
    tabHide();
    refreshInventory();
    refreshSideWorkers();
    refreshRecipeFilters();
    hardMatRefresh();
    refreshProgress();
    initializeSideBarDungeon();
    refreshSideTown();
    recipeList.recipes.forEach(function (r) {
        return refreshCraftedCount(r)
    });
    initializeGuilds();
    refreshInventoryPlaces();
    recipeList.canCraft();
    checkCraftableStatus();
    setInterval(mainLoop, 10);
    recipeList.recipeFilterType = "Knives";
    recipeList.recipeFilterString = "";
    recipeFilterList();
    refreshCraftTimes();
    GuildManager.repopulateUnmastered();
    refreshAllRecipeMastery();
    refreshTutorial();
    preloader.contentLoaded();
    refreshBossProgress();
    setTimeout(function () {
        if (settings.opnotif === 1) setDialogOpen(DialogManager.findDialog("offline_stats"));
        achievementStats.sendKongStats()
    }, 10)
}
loadMisc();
openTab("recipesTab");
var offlineStat = {};

function mainLoop() {
    var log = Date.now() - player.lastTime > 6e5 ? true : false;
    settings.opnotif = 0;
    if (log) {
        offlineStat = {};
        offlineStat.time = timeSince(Math.max(Date.now() - 2592e5, player.lastTime));
        offlineStat.initialGold = ResourceManager.idToMaterial("M001").amt;
        offlineStat.initialInv = Inventory.nonblank().length;
        offlineStat.initialMat = ResourceManager.materials.filter(function (m) {
            return m.type === "dungeon"
        }).map(function (m) {
            return m.amt
        }).reduce(function (a, b) {
            return a + b
        }, 0);
        settings.opnotif = 1;
        ResourceManager.uncapMats = true
    }
    var elapsedTime = (Date.now() - player.lastTime) * player.timeWarp;
    elapsedTime = Math.min(elapsedTime, 2592e5);
    achievementStats.setTimePlayed(elapsedTime);
    saveGame(Date.now() - player.lastTime);
    player.lastTime = Date.now();
    DungeonManager.addTime(elapsedTime);
    FusionManager.addTime(elapsedTime);
    actionSlotManager.addTime(elapsedTime);
    actionSlotVisualManager.updateSlots();
    PatchManager.patchTimer(elapsedTime);
    TinkerManager.addTime(elapsedTime);
    QuestManager.addTime(elapsedTime);
    if (log) {
        offlineStat.gold = ResourceManager.idToMaterial("M001").amt - offlineStat.initialGold;
        offlineStat.inv = Inventory.nonblank().length - offlineStat.initialInv;
        offlineStat.mat = ResourceManager.materials.filter(function (m) {
            return m.type === "dungeon"
        }).map(function (m) {
            return m.amt
        }).reduce(function (a, b) {
            return a + b
        }, 0) - offlineStat.initialMat;
        ResourceManager.uncapMats = false;
        ResourceManager.capMats();
        refreshInventoryPlaces();
        refreshMaterial("M001");
        refreshAllRecipeMastery()
    }
    Tutorial.monitor()
}

function pregearHeroes() {
    var Alok = HeroManager.idToHero("H201");
    Alok.equip(new itemContainer("R13001", 1));
    Alok.equip(new itemContainer("R2301", 1));
    Alok.equip(new itemContainer("R3301", 1));
    Alok.equip(new itemContainer("R4301", 1));
    Alok.equip(new itemContainer("R5301", 1));
    Alok.equip(new itemContainer("R6301", 1));
    var Cedric = HeroManager.idToHero("H002");
    Cedric.equip(new itemContainer("R12001", 1));
    Cedric.equip(new itemContainer("R2101", 1));
    Cedric.equip(new itemContainer("R3101", 1));
    Cedric.equip(new itemContainer("R4101", 1));
    Cedric.equip(new itemContainer("R5101", 1));
    Cedric.equip(new itemContainer("R6501", 1));
    var Zoe = HeroManager.idToHero("H101");
    Zoe.equip(new itemContainer("R11001", 1));
    Zoe.equip(new itemContainer("R2201", 1));
    Zoe.equip(new itemContainer("R3201", 1));
    Zoe.equip(new itemContainer("R4201", 1));
    Zoe.equip(new itemContainer("R5501", 1));
    Zoe.equip(new itemContainer("R6201", 1));
    var Grogmar = HeroManager.idToHero("H202");
    Grogmar.equip(new itemContainer("R13002", 1));
    Grogmar.equip(new itemContainer("R2302", 1));
    Grogmar.equip(new itemContainer("R3302", 1));
    Grogmar.equip(new itemContainer("R4302", 1));
    Grogmar.equip(new itemContainer("R5302", 1));
    Grogmar.equip(new itemContainer("R6302", 1));
    var Grim = HeroManager.idToHero("H003");
    Grim.equip(new itemContainer("R12002", 1));
    Grim.equip(new itemContainer("R2102", 1));
    Grim.equip(new itemContainer("R3102", 1));
    Grim.equip(new itemContainer("R4102", 1));
    Grim.equip(new itemContainer("R5102", 1));
    Grim.equip(new itemContainer("R6502", 1));
    var Troy = HeroManager.idToHero("H104");
    Troy.equip(new itemContainer("R11002", 1));
    Troy.equip(new itemContainer("R2202", 1));
    Troy.equip(new itemContainer("R3202", 1));
    Troy.equip(new itemContainer("R4202", 1));
    Troy.equip(new itemContainer("R5502", 1));
    Troy.equip(new itemContainer("R6202", 1));
    var Caeda = HeroManager.idToHero("H204");
    Caeda.equip(new itemContainer("R13003", 2));
    Caeda.equip(new itemContainer("R2303", 2));
    Caeda.equip(new itemContainer("R3303", 2));
    Caeda.equip(new itemContainer("R4303", 2));
    Caeda.equip(new itemContainer("R5303", 2));
    Caeda.equip(new itemContainer("R6303", 2));
    var Lambug = HeroManager.idToHero("H004");
    Lambug.equip(new itemContainer("R12003", 2));
    Lambug.equip(new itemContainer("R2103", 2));
    Lambug.equip(new itemContainer("R3103", 2));
    Lambug.equip(new itemContainer("R4103", 2));
    Lambug.equip(new itemContainer("R5103", 2));
    Lambug.equip(new itemContainer("R6503", 2));
    var Titus = HeroManager.idToHero("H103");
    Titus.equip(new itemContainer("R11003", 2));
    Titus.equip(new itemContainer("R2203", 2));
    Titus.equip(new itemContainer("R3203", 2));
    Titus.equip(new itemContainer("R4203", 2));
    Titus.equip(new itemContainer("R5503", 2));
    Titus.equip(new itemContainer("R6203", 2))
}
"use strict";
var stopSave = false;

function ClearSave() {
    localStorage.removeItem("ffgs1");
    location.reload()
}

function ExportSave() {
    var saveFile = createSaveExport();
    $("#exportSaveText").val(saveFile);
    ga("send", "event", "Save", "export", "export")
}

function ImportSaveButton() {
    stopSave = true;
    var unpako = atob($("#importSaveText").val());
    var saveFile = JSON.parse(pako.ungzip(unpako, {
        to: "string"
    }));
    localStorage.setItem("ffgs1", saveFile);
    location.reload()
}

function forceSaveChange(string) {
    localStorage.setItem("ffgs1", string);
    location.reload()
}
var saveTime = 0;

function saveGame(ms) {
    saveTime += ms;
    if (saveTime < 5e3) return;
    saveTime = 0;
    if (stopSave) return;
    localStorage.setItem("ffgs1", createSave());
    ga("send", "event", "Save", "savegame", "savegame")
}

function forceSave() {
    localStorage.setItem("ffgs1", createSave())
}

function createSave() {
    var saveFile = {};
    saveFile["ver"] = 0;
    saveFile["as"] = actionSlotManager.createSave();
    saveFile["d"] = DungeonManager.createSave();
    saveFile["h"] = HeroManager.createSave();
    saveFile["i"] = Inventory.createSave();
    saveFile["r"] = recipeList.createSave();
    saveFile["rs"] = ResourceManager.createSave();
    saveFile["w"] = WorkerManager.createSave();
    saveFile["ac"] = achievementStats.createSave();
    saveFile["ds"] = SynthManager.createSave();
    saveFile["fb"] = FusionManager.createSave();
    saveFile["bb"] = BankManager.createSave();
    saveFile["bs"] = bloopSmith.createSave();
    saveFile["fo"] = FortuneManager.createSave();
    saveFile["tm"] = TownManager.createSave();
    saveFile["gsm"] = GuildSeedManager.createSave();
    saveFile["g"] = GuildManager.createSave();
    saveFile["sh"] = Shop.createSave();
    saveFile["t"] = TinkerManager.createSave();
    saveFile["m"] = Museum.createSave();
    saveFile["pb"] = PlaybookManager.createSave();
    saveFile["q"] = QuestManager.createSave();
    saveFile["tu"] = Tutorial.createSave();
    saveFile["saveTime"] = Date.now();
    return JSON.stringify(saveFile)
}

function createSaveExport() {
    var save = createSave();
    var pakoSave = pako.gzip(JSON.stringify(save), {
        to: "string"
    });
    return btoa(pakoSave)
}

function loadGame() {
    var loadGame = JSON.parse(localStorage.getItem("ffgs1"));
    if (loadGame === null) return false;
    loadGame = saveUpdate(loadGame);
    if (typeof loadGame["as"] !== "undefined") actionSlotManager.loadSave(loadGame["as"]);
    if (typeof loadGame["d"] !== "undefined") DungeonManager.loadSave(loadGame["d"]);
    if (typeof loadGame["h"] !== "undefined") HeroManager.loadSave(loadGame["h"]);
    if (typeof loadGame["i"] !== "undefined") Inventory.loadSave(loadGame["i"]);
    if (typeof loadGame["r"] !== "undefined") recipeList.loadSave(loadGame["r"]);
    if (typeof loadGame["rs"] !== "undefined") ResourceManager.loadSave(loadGame["rs"]);
    if (typeof loadGame["w"] !== "undefined") WorkerManager.loadSave(loadGame["w"]);
    if (typeof loadGame["ac"] !== "undefined") achievementStats.loadSave(loadGame["ac"]);
    if (typeof loadGame["ds"] !== "undefined") SynthManager.loadSave(loadGame["ds"]);
    if (typeof loadGame["fb"] !== "undefined") FusionManager.loadSave(loadGame["fb"]);
    if (typeof loadGame["bb"] !== "undefined") BankManager.loadSave(loadGame["bb"]);
    if (typeof loadGame["bs"] !== "undefined") bloopSmith.loadSave(loadGame["bs"]);
    if (typeof loadGame["fo"] !== "undefined") FortuneManager.loadSave(loadGame["fo"]);
    if (typeof loadGame["tm"] !== "undefined") TownManager.loadSave(loadGame["tm"]);
    if (typeof loadGame["gsm"] !== "undefined") GuildSeedManager.loadSave(loadGame["gsm"]);
    if (typeof loadGame["g"] !== "undefined") GuildManager.loadSave(loadGame["g"]);
    if (typeof loadGame["sh"] !== "undefined") Shop.loadSave(loadGame["sh"]);
    if (typeof loadGame["t"] !== "undefined") TinkerManager.loadSave(loadGame["t"]);
    if (typeof loadGame["m"] !== "undefined") Museum.loadSave(loadGame["m"]);
    if (typeof loadGame["pb"] !== "undefined") PlaybookManager.loadSave(loadGame["pb"]);
    if (typeof loadGame["q"] !== "undefined") QuestManager.loadSave(loadGame["q"]);
    if (typeof loadGame["tu"] !== "undefined") Tutorial.loadSave(loadGame["tu"]);
    if (typeof loadGame["saveTime"] !== "undefined") player.lastTime = loadGame["saveTime"];
    return true
}

function saveUpdate(loadGame) {
    if (loadGame.v !== undefined) {
        loadGame["as"].slots = [];
        var dungeonProgress = [];
        if (loadGame["d"].bossesBeat.includes("D010")) dungeonProgress.push({
            id: "D401",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D011")) dungeonProgress.push({
            id: "D402",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D012")) dungeonProgress.push({
            id: "D403",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D013")) dungeonProgress.push({
            id: "D404",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D014")) dungeonProgress.push({
            id: "D405",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D015")) dungeonProgress.push({
            id: "D406",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D016")) dungeonProgress.push({
            id: "D407",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D017")) dungeonProgress.push({
            id: "D408",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D018")) dungeonProgress.push({
            id: "D409",
            maxFloor: 1
        });
        if (loadGame["d"].bossesBeat.includes("D019")) dungeonProgress.push({
            id: "D410",
            maxFloor: 1
        });
        delete loadGame["d"];
        loadGame["d"] = {};
        loadGame["d"].dungeons = dungeonProgress;
        delete loadGame["ds"];
        delete loadGame["f"];
        loadGame["h"].forEach(function (heroSave) {
            if (heroSave.hp === 0) heroSave.hp = 1;
            heroSave.state = HeroState.idle;
            heroSave.gearSlots = [];
            if (heroSave.slot1 !== null) {
                var gearslot1 = {};
                gearslot1.lvl = 0;
                gearslot1.gear = heroSave.slot1;
                heroSave.gearSlots.push(gearslot1)
            }
            if (heroSave.slot2 !== null) {
                var gearslot2 = {};
                gearslot2.lvl = 0;
                gearslot2.gear = heroSave.slot2;
                heroSave.gearSlots.push(gearslot2)
            }
            if (heroSave.slot3 !== null) {
                var gearslot3 = {};
                gearslot3.lvl = 0;
                gearslot3.gear = heroSave.slot3;
                heroSave.gearSlots.push(gearslot3)
            }
            if (heroSave.slot4 !== null) {
                var gearslot4 = {};
                gearslot4.lvl = 0;
                gearslot4.gear = heroSave.slot4;
                heroSave.gearSlots.push(gearslot4)
            }
            if (heroSave.slot5 !== null) {
                var gearslot5 = {};
                gearslot5.lvl = 0;
                gearslot5.gear = heroSave.slot5;
                heroSave.gearSlots.push(gearslot5)
            }
            if (heroSave.slot6 !== null) {
                var gearslot6 = {};
                gearslot6.lvl = 0;
                gearslot6.gear = heroSave.slot6;
                heroSave.gearSlots.push(gearslot6)
            }
        });
        delete loadGame["t"];
        GuildManager.guilds.forEach(function (g) {
            g.generateNewOrder(1);
            g.generateNewOrder(2);
            g.generateNewOrder(3)
        });
        HeroManager.heroes.forEach(function (hero) {
            PlaybookManager.idToPlaybook(hero.startingPlaybook).unlocked = true
        });
        loadGame["sh"] = {};
        loadGame["sh"].perks = [];
        loadGame["sh"].perks.push({
            id: "AL1000",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL1001",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL1002",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL1004",
            purchased: true
        });
        loadGame["w"].forEach(function (workerSave) {
            if (workerSave.id === "WN001" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1001",
                purchased: true
            });
            else if (workerSave.id === "WN002" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1010",
                purchased: true
            });
            else if (workerSave.id === "WN003" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1017",
                purchased: true
            });
            else if (workerSave.id === "WN004" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1023",
                purchased: true
            });
            else if (workerSave.id === "WN101" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1002",
                purchased: true
            });
            else if (workerSave.id === "WN102" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1011",
                purchased: true
            });
            else if (workerSave.id === "WN103" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1018",
                purchased: true
            });
            else if (workerSave.id === "WN104" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1024",
                purchased: true
            });
            else if (workerSave.id === "WN202" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1008",
                purchased: true
            });
            else if (workerSave.id === "WN203" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1016",
                purchased: true
            });
            else if (workerSave.id === "WN204" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1022",
                purchased: true
            });
            else if (workerSave.id === "WN301" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1004",
                purchased: true
            });
            else if (workerSave.id === "WN302" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1012",
                purchased: true
            });
            else if (workerSave.id === "WN303" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1019",
                purchased: true
            });
            else if (workerSave.id === "WN304" && workerSave.owned) loadGame["sh"].perks.push({
                id: "AL1025",
                purchased: true
            })
        });
        if (loadGame["as"].maxSlots >= 2) loadGame["sh"].perks.push({
            id: "AL1003",
            purchased: true
        });
        if (loadGame["as"].maxSlots >= 3) loadGame["sh"].perks.push({
            id: "AL1006",
            purchased: true
        });
        if (loadGame["as"].maxSlots >= 4) loadGame["sh"].perks.push({
            id: "AL1009",
            purchased: true
        });
        if (loadGame["as"].maxSlots >= 5) loadGame["sh"].perks.push({
            id: "AL1014",
            purchased: true
        });
        loadGame["h"].forEach(function (heroSave) {
            if (heroSave.id === "H001" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2003",
                purchased: true
            });
            else if (heroSave.id === "H002" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2010",
                purchased: true
            });
            else if (heroSave.id === "H003" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2016",
                purchased: true
            });
            else if (heroSave.id === "H004" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2022",
                purchased: true
            });
            else if (heroSave.id === "H101" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2011",
                purchased: true
            });
            else if (heroSave.id === "H102" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2005",
                purchased: true
            });
            else if (heroSave.id === "H103" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2023",
                purchased: true
            });
            else if (heroSave.id === "H104" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2017",
                purchased: true
            });
            else if (heroSave.id === "H201" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2008",
                purchased: true
            });
            else if (heroSave.id === "H202" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2014",
                purchased: true
            });
            else if (heroSave.id === "H203" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2000",
                purchased: true
            });
            else if (heroSave.id === "H204" && heroSave.owned) loadGame["sh"].perks.push({
                id: "AL2020",
                purchased: true
            })
        });
        loadGame["sh"].perks.push({
            id: "AL2001",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL2002",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL2004",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL20051",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL3000",
            purchased: true
        });
        loadGame["sh"].perks.push({
            id: "AL3001",
            purchased: true
        });
        loadGame["tm"].buildings.forEach(function (buildingSave) {
            if (buildingSave.id === "TB001" && buildingSave.status > 0) loadGame["sh"].perks.push({
                id: "AL3002",
                purchased: true
            });
            if (buildingSave.id === "TB002" && buildingSave.status > 0) loadGame["sh"].perks.push({
                id: "AL3004",
                purchased: true
            });
            if (buildingSave.id === "TB003" && buildingSave.status > 0) loadGame["sh"].perks.push({
                id: "AL3003",
                purchased: true
            });
            if (buildingSave.id === "TB004" && buildingSave.status > 0) loadGame["sh"].perks.push({
                id: "AL3005",
                purchased: true
            });
            if (buildingSave.id === "TB005" && buildingSave.status > 0) loadGame["sh"].perks.push({
                id: "AL3011",
                purchased: true
            });
            if (buildingSave.id === "TB006" && buildingSave.status > 0) loadGame["sh"].perks.push({
                id: "AL3013",
                purchased: true
            })
        });
        if (loadGame["fb"].lvl >= 2) loadGame["sh"].perks.push({
            id: "AL3006",
            purchased: true
        });
        if (loadGame["fb"].lvl >= 3) loadGame["sh"].perks.push({
            id: "AL3012",
            purchased: true
        });
        if (loadGame["bb"].lvl >= 2) loadGame["sh"].perks.push({
            id: "AL3008",
            purchased: true
        });
        if (loadGame["bb"].lvl >= 3) loadGame["sh"].perks.push({
            id: "AL3017",
            purchased: true
        });
        if (loadGame["bs"].lvl >= 2) loadGame["sh"].perks.push({
            id: "AL3010",
            purchased: true
        });
        if (loadGame["bs"].lvl >= 3) loadGame["sh"].perks.push({
            id: "AL3016",
            purchased: true
        });
        if (loadGame["fo"].lvl >= 2) loadGame["sh"].perks.push({
            id: "AL3014",
            purchased: true
        });
        if (loadGame["fo"].lvl >= 3) loadGame["sh"].perks.push({
            id: "AL3019",
            purchased: true
        })
    }
    loadGame["rs"] = loadGame["rs"].filter(function (mat) {
        var removedMats = ["M800", "M801", "M802"];
        return !removedMats.includes(mat.id)
    });
    return loadGame
}
$(document).on("click", "#deleteSaveButton", function (e) {
    e.preventDefault();
    ClearSave()
});
$(document).on("click", "#declineSaveButton", function (e) {
    e.preventDefault();
    setDialogClose()
});
$(document).on("click", "#exportSave", function () {
    ExportSave()
});
$(document).on("click", "#importSaveButton", function (e) {
    e.preventDefault();
    ImportSaveButton()
});
$(document).on("click", "#exportSaveCopy", function (e) {
    e.preventDefault();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#exportSaveText").val()).select();
    document.execCommand("copy");
    $temp.remove();
    $("#exportStatus").html("Copied to Clipboard.");
    setTimeout(function () {
        $("#exportStatus").empty()
    }, 3500)
});
$(document).on("click", "#exportSaveLocal", function (e) {
    e.preventDefault();
    downloadSave()
});

function downloadSave() {
    var saveFile = createSaveExport();
    var b = new Blob([saveFile], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(b, "ForgeAndFortuneSave.txt")
}

function unPackSave(file) {
    var unpako = atob(file);
    var saveFile = JSON.parse(JSON.parse(pako.ungzip(unpako, {
        to: "string"
    })));
    return saveFile
}
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
var $plBoss = $("#plBoss");
var $pbBoss = $("#pbBoss");
var $plRecipeMastery = $("#plRecipeMastery");
var $pbRecipe = $("#pbRecipe");
var $plPerk = $("#plPerk");
var $pbPerk = $("#pbPerk");
var $plMuseum = $("#plMuseum");
var $pbMuseum = $("#pbMuseum");
var $museumProgressTitle = $("#museumProgressTitle");
var $museumProgressDesc = $("#museumProgressDesc");
var $plOverall = $("#plOverall");
var $pbOverall = $("#pbOverall");
var $progresslist = $("#progresslist");

function initiateMilestoneBldg() {
    $("#milestoneBuilding").show();
    refreshProgress()
}

function refreshProgress() {
    var count = 0;
    $plBoss.html("".concat(DungeonManager.bossCount(), " / 10"));
    var bossPercent = (DungeonManager.bossCount() * 10).toFixed(2);
    $pbBoss.css("width", bossPercent + "%");
    if (DungeonManager.bossCount() === 10) $pbBoss.addClass("progressCompleted");
    count += DungeonManager.bossCount() / 10;
    $plRecipeMastery.html("".concat(recipeList.masteryCount(), " / ").concat(recipeList.recipeCount()));
    var recipePercent = (recipeList.masteryCount() / recipeList.recipeCount() * 100).toFixed(2);
    $pbRecipe.css("width", recipePercent + "%");
    if (recipeList.masteryCount() === recipeList.recipeCount()) $pbRecipe.addClass("progressCompleted");
    count += recipeList.masteryCount() / recipeList.recipeCount();
    $plPerk.html("".concat(Shop.perkCount(), " / ").concat(Shop.perkMaxCount()));
    var perkPercent = (Shop.perkCount() / Shop.perkMaxCount() * 100).toFixed(2);
    $pbPerk.css("width", perkPercent + "%");
    if (Shop.perkCount() === Shop.perkMaxCount()) $pbPerk.addClass("progressCompleted");
    count += Shop.perkCount() / Shop.perkMaxCount();
    if (!Shop.alreadyPurchased("AL3015")) {
        $museumProgressTitle.html("".concat(miscIcons.locked, "&nbsp;").concat(displayText("universal_locked")));
        $museumProgressDesc.html("Progress further to unlock this category.");
        $plMuseum.html("0 / 0")
    } else {
        $museumProgressTitle.html("Museum Donations");
        $museumProgressDesc.html("Your progress for donations to the Museum.");
        $plMuseum.html("".concat(Museum.donationCount(), " / ").concat(Museum.donationMax()))
    }
    var museumPercent = (Museum.donationCount() / Museum.donationMax() * 100).toFixed(2);
    $pbMuseum.css("width", museumPercent + "%");
    if (Museum.donationMax() === Museum.donationCount()) $pbMuseum.addClass("progressCompleted");
    count += Museum.donationCount() / Museum.donationMax();
    var overallPercent = count / 4;
    if (overallPercent === 1 && achievementStats.endTime === -1) achievementStats.endTime = Date.now();
    $plOverall.html((overallPercent * 100).toFixed(2) + "%");
    $pbOverall.css("width", (overallPercent * 100).toFixed(2) + "%");
    if (overallPercent === 1) $pbOverall.addClass("progressCompleted")
}
var $statMaxFloor = $("#statMaxFloor");
var $statFloors = $("#statFloors");
var $statTotalGoldEarned = $("#statTotalGoldEarned");
var $statTotalItems = $("#statTotalItems");
var $statCommons = $("#statCommons");
var $statGoods = $("#statGoods");
var $statGreats = $("#statGreats");
var $statEpics = $("#statEpics");
var $statTimePlayed = $("#statTimePlayed");
var $statMaxFloorD001 = $("#statMaxFloorD001");
var $statMaxFloorD002 = $("#statMaxFloorD002");
var $statMaxFloorD003 = $("#statMaxFloorD003");
var achievementStats = {
    startTime: 0,
    endTime: -1,
    maxFloor: 0,
    timePlayed: 0,
    totalGoldEarned: 0,
    epicsCrafted: 0,
    greatsCrafted: 0,
    goodsCrafted: 0,
    commonsCrafted: 0,
    totalItemsCrafted: 0,
    totalFloorsBeaten: 0,
    bossesBeat: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    setTimePlayed: function setTimePlayed(ms) {
        this.timePlayed += ms;
        $statTimePlayed.html(timeSince(this.startTime, Date.now()))
    },
    floorRecord: function floorRecord() {
        if (this.totalFloorsBeaten === undefined) this.totalFloorsBeaten = 1;
        this.totalFloorsBeaten += 1;
        $statFloors.html(this.totalFloorsBeaten);
        this.sendKongStats()
    },
    craftedItem: function craftedItem(rarity) {
        this.totalItemsCrafted += 1;
        if (rarity === "Common") this.commonsCrafted += 1;
        if (rarity === "Good") this.goodsCrafted += 1;
        if (rarity === "Great") this.greatsCrafted += 1;
        if (rarity === "Epic") this.epicsCrafted += 1;
        $statTotalItems.html(formatToUnits(this.totalItemsCrafted, 2));
        $statCommons.html(formatToUnits(this.commonsCrafted, 2));
        $statGoods.html(formatToUnits(this.goodsCrafted, 2));
        $statGreats.html(formatToUnits(this.greatsCrafted, 2));
        $statEpics.html(formatToUnits(this.epicsCrafted, 2));
        this.sendKongStats()
    },
    gold: function gold(g) {
        this.totalGoldEarned += g;
        $statTotalGoldEarned.html(formatToUnits(this.totalGoldEarned, 2));
        this.sendKongStats()
    },
    createSave: function createSave() {
        var save = {};
        save.startTime = this.startTime;
        save.endTime = this.endTime;
        save.timePlayed = this.timePlayed;
        save.totalGoldEarned = this.totalGoldEarned;
        save.epicsCrafted = this.epicsCrafted;
        save.greatsCrafted = this.greatsCrafted;
        save.goodsCrafted = this.goodsCrafted;
        save.commonsCrafted = this.commonsCrafted;
        save.totalItemsCrafted = this.totalItemsCrafted;
        save.totalFloorsBeaten = this.totalFloorsBeaten;
        save.bossesBeat = this.bossesBeat;
        return save
    },
    loadSave: function loadSave(save) {
        this.startTime = save.startTime;
        this.endTime = save.endTime;
        this.maxFloor = save.maxFloor;
        this.timePlayed = save.timePlayed;
        this.totalGoldEarned = save.totalGoldEarned;
        this.epicsCrafted = save.epicsCrafted;
        this.greatsCrafted = save.greatsCrafted;
        this.goodsCrafted = save.goodsCrafted;
        this.commonsCrafted = save.commonsCrafted;
        this.totalItemsCrafted = save.totalItemsCrafted;
        this.totalFloorsBeaten = save.totalFloorsBeaten;
        if (save.bossesBeat !== undefined) this.bossesBeat = save.bossesBeat;
        $statTotalGoldEarned.html(formatToUnits(this.totalGoldEarned, 2));
        if (save.totalFloorsBeaten !== undefined) $statFloors.html(this.totalFloorsBeaten);
        $statTimePlayed.html(timeSince(0, this.timePlayed));
        $statTotalItems.html(this.totalItemsCrafted);
        $statCommons.html(this.commonsCrafted);
        $statGoods.html(this.goodsCrafted);
        $statGreats.html(this.greatsCrafted);
        $statEpics.html(this.epicsCrafted)
    },
    sendKongStats: function sendKongStats() {
        if ((typeof kongregate === "undefined" ? "undefined" : _typeof(kongregate)) === undefined) {
            kongregateAPI.loadAPI(function () {
                window.kongregate = kongregateAPI.getAPI()
            });
            this.sendKongStats()
        } else {
            kongregate.stats.submit("gold_earned", this.totalGoldEarned);
            kongregate.stats.submit("crafted_0_common", this.commonsCrafted);
            kongregate.stats.submit("crafted_1_good", this.goodsCrafted);
            kongregate.stats.submit("crafted_2_great", this.greatsCrafted);
            kongregate.stats.submit("crafted_3_epic", this.epicsCrafted);
            kongregate.stats.submit("crafted_4_total", this.totalItemsCrafted);
            kongregate.stats.submit("floors_total", this.totalFloorsBeaten);
            kongregate.stats.submit("bosses_defeated", DungeonManager.bossCount());
            kongregate.stats.submit("recipes_mastered", recipeList.masteryCount());
            kongregate.stats.submit("perks_purchased", Shop.perkCount())
        }
    },
    bossBeat: function bossBeat(dungeonID) {
        var bosses = ["D401", "D402", "D403", "D404", "D405", "D406", "D407", "D408", "D409", "D410"];
        var idx = bosses.findIndex(function (b) {
            return b === dungeonID
        });
        if (this.bossesBeat[idx] === 0) this.bossesBeat[idx] = Date.now();
        refreshBossProgress()
    }
};
var $bossProgressContainer = $("#bossProgressContainer");

function refreshBossProgress() {
    $bossProgressContainer.empty();
    achievementStats.bossesBeat.forEach(function (boss, i) {
        var d = $("<div/>").addClass("statBox").appendTo($bossProgressContainer);
        $("<div/>").addClass("statHeading").html("Boss ".concat(i + 1, " Slain")).appendTo(d);
        var d1 = $("<div/>").addClass("statNormal").appendTo(d);
        if (boss === 0) d1.html("Not defeated yet.");
        else d1.html("".concat(timeSince(achievementStats.startTime, boss)))
    })
}
var $achieve1 = $("#achieve1");
var $achieve2 = $("#achieve2");
var $achieve3 = $("#achieve3");
var $achieve4 = $("#achieve4");
var $achieve5 = $("#achieve5");
var $achieve6 = $("#achieve6");
var $achieve7 = $("#achieve7");
var $achieve8 = $("#achieve8");
var $achieve9 = $("#achieve9");
var $achieve10 = $("#achieve10");
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
var _global = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.window === window ? window : (typeof self === "undefined" ? "undefined" : _typeof(self)) === "object" && self.self === self ? self : (typeof global === "undefined" ? "undefined" : _typeof(global)) === "object" && global.global === global ? global : void 0;

function bom(blob, opts) {
    if (typeof opts === "undefined") opts = {
        autoBom: false
    };
    else if (_typeof(opts) !== "object") {
        console.warn("Deprecated: Expected third argument to be a object");
        opts = {
            autoBom: !opts
        }
    }
    if (opts.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
        return new Blob([String.fromCharCode(65279), blob], {
            type: blob.type
        })
    }
    return blob
}

function download(url, name, opts) {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.onload = function () {
        saveAs(xhr.response, name, opts)
    };
    xhr.onerror = function () {
        console.error("could not download file")
    };
    xhr.send()
}

function corsEnabled(url) {
    var xhr = new XMLHttpRequest;
    xhr.open("HEAD", url, false);
    try {
        xhr.send()
    } catch (e) {}
    return xhr.status >= 200 && xhr.status <= 299
}

function click(node) {
    try {
        node.dispatchEvent(new MouseEvent("click"))
    } catch (e) {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
        node.dispatchEvent(evt)
    }
}
var saveAs = _global.saveAs || ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== "object" || window !== _global ? function saveAs() {} : "download" in HTMLAnchorElement.prototype ? function saveAs(blob, name, opts) {
    var URL = _global.URL || _global.webkitURL;
    var a = document.createElement("a");
    name = name || blob.name || "download";
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
        a.href = blob;
        if (a.origin !== location.origin) {
            corsEnabled(a.href) ? download(blob, name, opts) : click(a, a.target = "_blank")
        } else {
            click(a)
        }
    } else {
        a.href = URL.createObjectURL(blob);
        setTimeout(function () {
            URL.revokeObjectURL(a.href)
        }, 4e4);
        setTimeout(function () {
            click(a)
        }, 0)
    }
} : "msSaveOrOpenBlob" in navigator ? function saveAs(blob, name, opts) {
    name = name || blob.name || "download";
    if (typeof blob === "string") {
        if (corsEnabled(blob)) {
            download(blob, name, opts)
        } else {
            var a = document.createElement("a");
            a.href = blob;
            a.target = "_blank";
            setTimeout(function () {
                click(a)
            })
        }
    } else {
        navigator.msSaveOrOpenBlob(bom(blob, opts), name)
    }
} : function saveAs(blob, name, opts, popup) {
    popup = popup || open("", "_blank");
    if (popup) {
        popup.document.title = popup.document.body.innerText = "downloading..."
    }
    if (typeof blob === "string") return download(blob, name, opts);
    var force = blob.type === "application/octet-stream";
    var isSafari = /constructor/i.test(_global.HTMLElement) || _global.safari;
    var isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari) && (typeof FileReader === "undefined" ? "undefined" : _typeof(FileReader)) === "object") {
        var reader = new FileReader;
        reader.onloadend = function () {
            var url = reader.result;
            url = isChromeIOS ? url : url.replace(/^data:[^;]*;/, "data:attachment/file;");
            if (popup) popup.location.href = url;
            else location = url;
            popup = null
        };
        reader.readAsDataURL(blob)
    } else {
        var URL = _global.URL || _global.webkitURL;
        var url = URL.createObjectURL(blob);
        if (popup) popup.location = url;
        else location.href = url;
        popup = null;
        setTimeout(function () {
            URL.revokeObjectURL(url)
        }, 4e4)
    }
});
_global.saveAs = saveAs.saveAs = saveAs;
if (typeof module !== "undefined") {
    module.exports = saveAs
}
var LZString = function () {
    var f = String.fromCharCode;
    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var baseReverseDic = {};

    function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for (var i = 0; i < alphabet.length; i++) {
                baseReverseDic[alphabet][alphabet.charAt(i)] = i
            }
        }
        return baseReverseDic[alphabet][character]
    }
    var LZString = {
        compressToBase64: function (input) {
            if (input == null) return "";
            var res = LZString._compress(input, 6, function (a) {
                return keyStrBase64.charAt(a)
            });
            switch (res.length % 4) {
                default:
                    case 0:
                    return res;
                case 1:
                        return res + "===";
                case 2:
                        return res + "==";
                case 3:
                        return res + "="
            }
        },
        decompressFromBase64: function (input) {
            if (input == null) return "";
            if (input == "") return null;
            return LZString._decompress(input.length, 32, function (index) {
                return getBaseValue(keyStrBase64, input.charAt(index))
            })
        },
        compressToUTF16: function (input) {
            if (input == null) return "";
            return LZString._compress(input, 15, function (a) {
                return f(a + 32)
            }) + " "
        },
        decompressFromUTF16: function (compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString._decompress(compressed.length, 16384, function (index) {
                return compressed.charCodeAt(index) - 32
            })
        },
        compressToUint8Array: function (uncompressed) {
            var compressed = LZString.compress(uncompressed);
            var buf = new Uint8Array(compressed.length * 2);
            for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
                var current_value = compressed.charCodeAt(i);
                buf[i * 2] = current_value >>> 8;
                buf[i * 2 + 1] = current_value % 256
            }
            return buf
        },
        decompressFromUint8Array: function (compressed) {
            if (compressed === null || compressed === undefined) {
                return LZString.decompress(compressed)
            } else {
                var buf = new Array(compressed.length / 2);
                for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
                    buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1]
                }
                var result = [];
                buf.forEach(function (c) {
                    result.push(f(c))
                });
                return LZString.decompress(result.join(""))
            }
        },
        compressToEncodedURIComponent: function (input) {
            if (input == null) return "";
            return LZString._compress(input, 6, function (a) {
                return keyStrUriSafe.charAt(a)
            })
        },
        decompressFromEncodedURIComponent: function (input) {
            if (input == null) return "";
            if (input == "") return null;
            input = input.replace(/ /g, "+");
            return LZString._decompress(input.length, 32, function (index) {
                return getBaseValue(keyStrUriSafe, input.charAt(index))
            })
        },
        compress: function (uncompressed) {
            return LZString._compress(uncompressed, 16, function (a) {
                return f(a)
            })
        },
        _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
            if (uncompressed == null) return "";
            var i, value, context_dictionary = {},
                context_dictionaryToCreate = {},
                context_c = "",
                context_wc = "",
                context_w = "",
                context_enlargeIn = 2,
                context_dictSize = 3,
                context_numBits = 2,
                context_data = [],
                context_data_val = 0,
                context_data_position = 0,
                ii;
            for (ii = 0; ii < uncompressed.length; ii += 1) {
                context_c = uncompressed.charAt(ii);
                if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                    context_dictionary[context_c] = context_dictSize++;
                    context_dictionaryToCreate[context_c] = true
                }
                context_wc = context_w + context_c;
                if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
                    context_w = context_wc
                } else {
                    if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                        if (context_w.charCodeAt(0) < 256) {
                            for (i = 0; i < context_numBits; i++) {
                                context_data_val = context_data_val << 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0
                                } else {
                                    context_data_position++
                                }
                            }
                            value = context_w.charCodeAt(0);
                            for (i = 0; i < 8; i++) {
                                context_data_val = context_data_val << 1 | value & 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0
                                } else {
                                    context_data_position++
                                }
                                value = value >> 1
                            }
                        } else {
                            value = 1;
                            for (i = 0; i < context_numBits; i++) {
                                context_data_val = context_data_val << 1 | value;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0
                                } else {
                                    context_data_position++
                                }
                                value = 0
                            }
                            value = context_w.charCodeAt(0);
                            for (i = 0; i < 16; i++) {
                                context_data_val = context_data_val << 1 | value & 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0
                                } else {
                                    context_data_position++
                                }
                                value = value >> 1
                            }
                        }
                        context_enlargeIn--;
                        if (context_enlargeIn == 0) {
                            context_enlargeIn = Math.pow(2, context_numBits);
                            context_numBits++
                        }
                        delete context_dictionaryToCreate[context_w]
                    } else {
                        value = context_dictionary[context_w];
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0
                            } else {
                                context_data_position++
                            }
                            value = value >> 1
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++
                    }
                    context_dictionary[context_wc] = context_dictSize++;
                    context_w = String(context_c)
                }
            }
            if (context_w !== "") {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                    if (context_w.charCodeAt(0) < 256) {
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = context_data_val << 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0
                            } else {
                                context_data_position++
                            }
                        }
                        value = context_w.charCodeAt(0);
                        for (i = 0; i < 8; i++) {
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0
                            } else {
                                context_data_position++
                            }
                            value = value >> 1
                        }
                    } else {
                        value = 1;
                        for (i = 0; i < context_numBits; i++) {
                            context_data_val = context_data_val << 1 | value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0
                            } else {
                                context_data_position++
                            }
                            value = 0
                        }
                        value = context_w.charCodeAt(0);
                        for (i = 0; i < 16; i++) {
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0
                            } else {
                                context_data_position++
                            }
                            value = value >> 1
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++
                    }
                    delete context_dictionaryToCreate[context_w]
                } else {
                    value = context_dictionary[context_w];
                    for (i = 0; i < context_numBits; i++) {
                        context_data_val = context_data_val << 1 | value & 1;
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0
                        } else {
                            context_data_position++
                        }
                        value = value >> 1
                    }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++
                }
            }
            value = 2;
            for (i = 0; i < context_numBits; i++) {
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0
                } else {
                    context_data_position++
                }
                value = value >> 1
            }
            while (true) {
                context_data_val = context_data_val << 1;
                if (context_data_position == bitsPerChar - 1) {
                    context_data.push(getCharFromInt(context_data_val));
                    break
                } else context_data_position++
            }
            return context_data.join("")
        },
        decompress: function (compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString._decompress(compressed.length, 32768, function (index) {
                return compressed.charCodeAt(index)
            })
        },
        _decompress: function (length, resetValue, getNextValue) {
            var dictionary = [],
                next, enlargeIn = 4,
                dictSize = 4,
                numBits = 3,
                entry = "",
                result = [],
                i, w, bits, resb, maxpower, power, c, data = {
                    val: getNextValue(0),
                    position: resetValue,
                    index: 1
                };
            for (i = 0; i < 3; i += 1) {
                dictionary[i] = i
            }
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while (power != maxpower) {
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++)
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1
            }
            switch (next = bits) {
                case 0:
                    bits = 0;
                    maxpower = Math.pow(2, 8);
                    power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++)
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1
                    }
                    c = f(bits);
                    break;
                case 1:
                    bits = 0;
                    maxpower = Math.pow(2, 16);
                    power = 1;
                    while (power != maxpower) {
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++)
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1
                    }
                    c = f(bits);
                    break;
                case 2:
                    return ""
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while (true) {
                if (data.index > length) {
                    return ""
                }
                bits = 0;
                maxpower = Math.pow(2, numBits);
                power = 1;
                while (power != maxpower) {
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                        data.position = resetValue;
                        data.val = getNextValue(data.index++)
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1
                }
                switch (c = bits) {
                    case 0:
                        bits = 0;
                        maxpower = Math.pow(2, 8);
                        power = 1;
                        while (power != maxpower) {
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++)
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 1:
                        bits = 0;
                        maxpower = Math.pow(2, 16);
                        power = 1;
                        while (power != maxpower) {
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++)
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 2:
                        return result.join("")
                }
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++
                }
                if (dictionary[c]) {
                    entry = dictionary[c]
                } else {
                    if (c === dictSize) {
                        entry = w + w.charAt(0)
                    } else {
                        return null
                    }
                }
                result.push(entry);
                dictionary[dictSize++] = w + entry.charAt(0);
                enlargeIn--;
                w = entry;
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++
                }
            }
        }
    };
    return LZString
}();
if (typeof define === "function" && define.amd) {
    define(function () {
        return LZString
    })
} else if (typeof module !== "undefined" && module != null) {
    module.exports = LZString
} else if (typeof angular !== "undefined" && angular != null) {
    angular.module("LZString", []).factory("LZString", function () {
        return LZString
    })
}
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}
var $toastsWrapper = $("#toastsWrapper");
var Toast = function Toast(props) {
    _classCallCheck(this, Toast);
    Object.assign(this, props)
};
var ToastManager = {
    toasts: [],
    maxQueue: 3,
    toastLocation: settings.toastPosition,
    toastDuration: settings.toastDuration,
    addToast: function addToast(toast) {
        this.toasts.push(toast)
    },
    idToToast: function idToToast(id) {
        return this.toasts.find(function (toast) {
            return toast.id === id
        })
    },
    toastPosition: function toastPosition() {
        var position;
        if (this.toastLocation === "top-left") position = {
            "flex-direction": "column-reverse",
            "justify-content": "flex-end",
            "align-items": "flex-start"
        };
        else if (this.toastLocation === "top-center") position = {
            "flex-direction": "column-reverse",
            "justify-content": "flex-end",
            "align-items": "center"
        };
        else if (this.toastLocation === "top-right") position = {
            "flex-direction": "column-reverse",
            "justify-content": "flex-end",
            "align-items": "flex-end"
        };
        else if (this.toastLocation === "bottom-left") position = {
            "flex-direction": "column",
            "justify-content": "flex-end",
            "align-items": "flex-start"
        };
        else if (this.toastLocation === "bottom-center") position = {
            "flex-direction": "column",
            "justify-content": "flex-end",
            "align-items": "center"
        };
        else if (this.toastLocation === "bottom-right") position = {
            "flex-direction": "column",
            "justify-content": "flex-end",
            "align-items": "flex-end"
        };
        $("#toastsWrapper").css(position)
    },
    renderToast: function renderToast(id, a, b, c) {
        if (!settings.toasts) return;
        var toast = this.idToToast(id);
        if (!toast) return console.error("Could not render toast, invalid ID passed or toast does not exist. \n Toast ID passed: ".concat(id));
        var $toastsCount = $("#toastsWrapper").children().length;
        if ($toastsCount >= this.maxQueue) {
            var element = $("#toastsWrapper").children().first();
            this.destroyToast(element, true)
        }
        this.toastPosition();
        toastTemplate(toast, a, b, c)
    },
    destroyToast: function destroyToast(element, skipAnimation) {
        $(element).addClass("isClosing");
        skipAnimation ? element.remove() : setTimeout(function () {
            $(element).removeClass("isClosing");
            element.remove()
        }, 300)
    }
};

function toastTemplate(toast, a, b, c) {
    var type = toast.type,
        customClass = toast.customClass,
        icon = toast.icon,
        title = toast.title,
        description = toast.description,
        actionText = toast.actionText;
    title = toast.title.replace("{0}", a).replace("{1}", b).replace("{2}", c);
    description = toast.description.replace("{0}", a).replace("{1}", b).replace("{2}", c);
    var toastContainer = $("<div/>").addClass("toastPopupContainer ".concat(customClass)).appendTo($toastsWrapper);
    var toastIcon = $("<div/>").addClass("toastPopupIcon").html(icon).appendTo(toastContainer);
    if (type === "craft") toastIcon.addClass(customClass);
    $("<div/>").addClass("toastPopupClose").html(miscIcons.cancelSlot).appendTo(toastContainer);
    var toastDetails = $("<div/>").addClass("toastDetails").appendTo(toastContainer);
    $("<div/>").addClass("toastPopupTitle").html(title).appendTo(toastDetails);
    $("<div/>").addClass("toastPopupDesc").html(description).appendTo(toastDetails);
    if (actionText) {
        var toastAction = $("<div/>").addClass("toastPopupAction").data("actionType", type).html('<i class="fas fa-arrow-right"></i>').appendTo(toastContainer);
        $("<div/>").addClass("toastPopupActionText").html(actionText).appendTo(toastAction)
    }
    if (toastContainer) setTimeout(function () {
        ToastManager.destroyToast(toastContainer)
    }, ToastManager.toastDuration)
}
$(document).on("click", ".toastPopupAction", function (e) {
    e.preventDefault();
    var action = $(e.currentTarget).data("actionType");
    if (action === "craft") tabClick(e, "inventoryTab");
    else if (action === "fortune") {
        tabClick(e, "townsTab");
        triggerBuilding(null, "fortune");
        $("#fortuneBldg").addClass("selected");
        $("#fortuneBldg").removeClass("hasEvent")
    }
});
$(document).on("click", ".toastPopupClose", function (e) {
    e.preventDefault();
    ToastManager.destroyToast(e.currentTarget.parentNode)
});
"use strict";
$(".recipeSelect").on("click", tabHighlight);

function tabHighlight(e) {
    $(".recipeSelect").removeClass("selected");
    $(e.currentTarget).addClass("selected")
}
$(".tablinks").on("click", navTabHighlight);

function navTabHighlight(e) {
    var tab = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    $(".tablinks").removeClass("tab-selected");
    if (tab) $(tab).addClass("tab-selected");
    else $(e.currentTarget).addClass("tab-selected")
}
var $backToTopButton = $(".back-to-top");
if ($backToTopButton) $(window).scroll(function () {
    if ($("body").scrollTop() || $(document).scrollTop() > 200) $backToTopButton.addClass("show-button");
    else $backToTopButton.removeClass("show-button")
});
$(document).on("change", ".tooltipPrefSelection", function (e) {
    $(e.target).attr("checked", "checked");
    settings.tpref = parseInt($(e.target).val());
    saveSettings()
});
$(document).on("change", ".notificationPrefSelection", function (e) {
    $(e.target).attr("checked", "checked");
    settings.toasts = parseInt($(e.target).val());
    saveSettings()
});
$(document).on("change", ".toastDurationSelection", function (e) {
    $(e.target).attr("checked", "checked");
    settings.toastDuration = parseInt($(e.target).val());
    ToastManager.toastDuration = settings.toastDuration;
    saveSettings()
});
$(document).on("change", ".toastPositionSelection", function (e) {
    $(e.target).attr("checked", "checked");
    settings.toastPosition = $(e.target).val();
    ToastManager.toastLocation = settings.toastPosition;
    ToastManager.toastPosition();
    saveSettings()
});
$(document).on("change", ".leaveSiteSelection", function (e) {
    $(e.target).attr("checked", "checked");
    settings.leavesite = parseInt($(e.target).val());
    saveSettings()
});

function disableEventLayers() {
    $(".bgContainer .layer").removeClass("christmasEvent")
}

function enableChristmasLayers() {
    $(".bgContainer .layer").addClass("christmasEvent")
}
$(document).on("click", ".footer_more-btn", function (e) {
    $(e.currentTarget).toggleClass("selected")
});
var $dbpanel = $("#db-panel");
var dbi = 0;

function dbEnable() {
    $dbpanel.empty();
    dbi = 0;
    var d = $("<button/>").addClass("dbClose").html('<i class="fas fa-times"></i>');
    var d1 = $("<div/>").addClass("singleActionContainer");
    $("<button/>").addClass("dbActionButton").data("devToolType", "tutorialSkip").html("Skip Tutorial").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "godMode").html("God Mode").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "addMaterial").html("Add Materials").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "uiux").html("UI / UX Mode").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "townUnlock").html("Unlock Town").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "dungeonUnlock").html("Unlock Dungeons").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "unlockHeroes").html("Unlock Heroes").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "unlockPerks").html("Unlock Perks").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "timeWarp").html("Time Warp").appendTo(d1);
    $("<button/>").addClass("dbActionButton").data("devToolType", "clearBossBeats").html("Reset Bosses").appendTo(d1);
    var d4 = $("<div/>").addClass("addItemContainer dbActionContainer");
    var d4a = $("<div/>").addClass("addItemTitle").html("Add Item to Inventory");
    var d4b = $("<input/>").addClass("addItemName").attr("placeholder", "Item ID");
    var d4c = $("<input/>").addClass("addItemRarity").attr("placeholder", "Item Rarity");
    var d4d = $("<input/>").addClass("addItemSharp").attr("placeholder", "Item Sharp");
    var d4e = $("<button/>").addClass("addItemBtn dbActionButton").html("Add");
    d4.append(d4a, d4b, d4c, d4d, d4e);
    var d5 = $("<div/>").addClass("gearHeroesContainer dbActionContainer");
    var d5a = $("<div/>").addClass("gearHeroesTitle").html("Add Gear to Heroes");
    var d5b = $("<input/>").addClass("gearHeroesLevel").attr("placeholder", "Gear Level");
    var d5c = $("<input/>").addClass("gearHeroesRarity").attr("placeholder", "Gear Rarity");
    var d5d = $("<input/>").addClass("gearHeroesSharp").attr("placeholder", "Gear Sharp");
    var d5e = $("<button/>").addClass("gearHeroesBtn dbActionButton").html("Gear");
    d5.append(d5a, d5b, d5c, d5d, d5e);
    var d6 = $("<div/>").addClass("addGoldContainer dbActionContainer");
    var d6a = $("<div/>").addClass("addGoldTitle").html("Add Gold");
    var d6b = $("<input/>").addClass("addGoldInput").attr("placeholder", "0");
    var d6c = $("<button/>").addClass("addGoldBtn dbActionButton").html("Add");
    d6.append(d6a, d6b, d6c);
    var d7 = $("<div/>").addClass("adjustSpeedContainer dbActionContainer");
    var d7a = $("<div/>").addClass("adjustSpeedTitle").html("Adjust Speed");
    var d7b = $("<input/>").addClass("adjustSpeedInput").attr("placeholder", "0.0");
    var d7c = $("<button/>").addClass("adjustSpeedBtn dbActionButton").html("Adjust");
    d7.append(d7a, d7b, d7c);
    $dbpanel.append(d, d1, d4, d5, d6, d7);
    $dbpanel.css("display", "block");
    settings.db = 1;
    settings.dialogStatus = !settings.dialogStatus;
    saveSettings();
    checkDB()
}

function addButtonDB() {
    var dbButton = $("#debug");
    if (!dbButton.length) {
        dbButton = $("<a/>").attr("id", "debug").addClass("isDialog tooltip").attr("data-tooltip", "debug").html('<i class="fas fa-bug"></i><div class="footerButtonText">Debug</div>');
        $("#bottom-left").append(dbButton)
    }
}

function checkDB() {
    if (settings.db === 1) addButtonDB()
}
checkDB();
$(document).on("click", ".dbActionButton", function (e) {
    var type = $(e.currentTarget).data("devToolType");
    if (type === "tutorialSkip") devtools.tutorialSkip();
    if (type === "godMode") devtools.godmode();
    if (type === "uiux") devtools.designmode();
    if (type === "addMaterial") devtools.materials();
    if (type === "townUnlock") devtools.forceTown();
    if (type === "dungeonUnlock") devtools.dungeonUnlock();
    if (type === "unlockHeroes") devtools.heroUnlock();
    if (type === "unlockPerks") devtools.allPerks();
    if (type === "timeWarp") devtools.timeWarp();
    if (type === "clearBossBeats") devtools.clearBossBeats()
});
$(document).on("click", ".addGoldBtn", function (e) {
    var goldAmount = parseInt(document.querySelector(".addGoldInput").value);
    devtools.addGold(goldAmount)
});
$(document).on("click", ".adjustSpeedBtn", function (e) {
    var speedAmount = parseFloat(document.querySelector(".adjustSpeedInput").value).toFixed(2);
    devtools.speed(speedAmount)
});
$(document).on("click", ".gearHeroesBtn", function (e) {
    var itemLevel = Math.min(10, parseInt(document.querySelector(".gearHeroesLevel").value));
    if (itemLevel === undefined) itemLevel = 1;
    var itemRarity = Math.min(3, parseInt(document.querySelector(".gearHeroesRarity").value));
    if (itemRarity === undefined) itemRarity = 3;
    var itemSharp = Math.min(10, parseInt(document.querySelector(".gearHeroesSharp").value));
    if (itemSharp === undefined) itemSharp = 0;
    devtools.gearHeroes(itemLevel, itemRarity, itemSharp)
});
$(document).on("click", ".addItemBtn", function (e) {
    var itemName = document.querySelector(".addItemName").value.toString();
    var itemRarity = parseInt(document.querySelector(".addItemRarity").value);
    var itemSharp = parseInt(document.querySelector(".addItemSharp").value);
    devtools.addItem(itemName, itemRarity, itemSharp)
});
$(document).on("click", ".dbClose", function (e) {
    setDialogClose();
    $dbpanel.css("display", "none")
});
$(document).on("click", "#debug", function (e) {
    dbEnable()
});
$(document).on("click", ".recipeCraft", function (e) {
    var $button = $(e.currentTarget);
    $(".recipeCraft").removeClass("btn-press");
    $button.addClass("btn-press");
    resetBtnPressAnimation()
});

function resetBtnPressAnimation() {
    var btns = document.getElementsByClassName("btn-press");
    Array.prototype.forEach.call(btns, function (btn) {
        btn.style.animation = "none";
        btn.offsetHeight;
        btn.style.animation = null
    })
}
$(document).on("click", "#clearSettings", function (e) {
    e.preventDefault();
    clearSettings()
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
var Tooltip = function () {
    function Tooltip(props) {
        _classCallCheck(this, Tooltip);
        Object.assign(this, props)
    }
    _createClass(Tooltip, [{
        key: "tooltipValue",
        value: function tooltipValue(id, prop) {
            if (this.type === "value") return id;
            else if (this.type === "buff") return BuffManager.findBuff(id)[prop];
            else if (this.type === "dungeon") return DungeonManager.dungeonByID(id)[prop];
            else if (this.type === "guild") return GuildManager.idToGuild(id)[prop];
            else if (this.type === "hero") return HeroManager.idToHero(id)[prop];
            else if (this.type === "material") return ResourceManager.idToMaterial(id)[prop];
            else if (this.type === "mob") return MobManager.idToMob(id)[prop];
            else if (this.type === "perk") return Shop.idToPerk(id)[prop];
            else if (this.type === "recipe") return recipeList.idToItem(id)[prop];
            else if (this.type === "skill") return SkillManager.idToSkill(id)[prop];
            else if (this.type === "playbook") return PlaybookManager.idToPlaybook(id)[prop];
            else if (this.type === "worker") return WorkerManager.workerByID(id)[prop]
        }
    }, {
        key: "generateIcon",
        value: function generateIcon(id) {
            if (!this.icon) return null;
            return hashtagReplace(this, id, this.icon)
        }
    }, {
        key: "isFont",
        value: function isFont(id) {
            var iconText = this.generateIcon(id);
            return iconText ? iconText.substring(0, 2) === "<i" : false
        }
    }]);
    return Tooltip
}();
var TooltipManager = {
    tooltips: [],
    addTooltip: function addTooltip(tooltip) {
        this.tooltips.push(tooltip)
    },
    findTooltip: function findTooltip(id) {
        return this.tooltips.find(function (tooltip) {
            return tooltip.id === id
        })
    }
};

function generateTooltip(e) {
    var tooltipsContainer = $("#tooltips");
    var tooltipID = $(e.currentTarget).attr("data-tooltip");
    var tooltipEV = $(e.currentTarget).attr("data-tooltip-value");
    var tooltip = TooltipManager.findTooltip(tooltipID);
    var props = e.currentTarget.getBoundingClientRect();
    var positionBottom = window.innerHeight - props.top + 10;
    if (props.top < 100) positionBottom = window.innerHeight - props.top - 110;
    var positionLeft = props.left + props.width / 2 - 175;
    if (positionLeft < 0) positionLeft = 5;
    while (positionLeft > window.innerWidth - 350) {
        positionLeft -= 5
    }
    var defaultStyles = {
        position: "absolute",
        bottom: positionBottom,
        left: positionLeft
    };
    if (tooltip === undefined) return;
    var generatedTooltip = $("<div/>").addClass("tooltip-container").css(defaultStyles).appendTo(tooltipsContainer);
    if (tooltip.icon && !tooltip.isFont(tooltipEV)) $("<div/>").addClass("tooltip-icon").css({
        backgroundImage: "url(".concat(tooltip.generateIcon(tooltipEV), ")")
    }).appendTo(generatedTooltip);
    if (tooltip.icon && tooltip.isFont(tooltipEV)) $("<div/>").addClass("tooltip-icon").html(tooltip.generateIcon(tooltipEV)).appendTo(generatedTooltip);
    var tooltipDetails = $("<div/>").addClass("tooltip-details").appendTo(generatedTooltip);
    if (tooltip.title) {
        var titleText = tooltipEV ? hashtagReplace(tooltip, tooltipEV, tooltip.title) : tooltip.title;
        $("<div/>").addClass("tooltip-title").html(titleText).appendTo(tooltipDetails)
    }
    if (tooltip.description) {
        var descText = tooltipEV ? hashtagReplace(tooltip, tooltipEV, tooltip.description) : tooltip.description;
        $("<div/>").addClass("tooltip-description").html(descText).appendTo(tooltipDetails)
    }
    return generatedTooltip
}

function destroyTooltip(e) {
    $(".tooltip-container").addClass("destroyingTooltip");
    setTimeout(function () {
        $(".tooltip-container.destroyingTooltip").remove()
    }, 200)
}
$(document).on("mouseenter", ".tooltip", function (e) {
    e.stopPropagation();
    destroyTooltip();
    if (settings.tpref === 1) generateTooltip(e)
});
$(document).on("mouseleave", ".tooltip", function (e) {
    destroyTooltip(e)
});
$(document).on("mouseenter", ".tooltip-container", function (e) {
    destroyTooltip(e)
});

function hashtagReplace(tooltip, id, html) {
    if (!html.includes("#")) return html;
    var start = html.indexOf("#");
    var end = html.indexOf("#", start + 1);
    var prop = html.substring(start + 1, end);
    return hashtagReplace(tooltip, id, html.substring(0, start) + tooltip.tooltipValue(id, prop) + html.substring(end + 1))
}
