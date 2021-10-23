/*!
 * amaretti v0.0.1 (http://foxythemes.net/themes/amaretti)
 * Copyright 2014-2016 Foxy Themes all rights reserved
 */
;
var App = (function() { var f = { assetsPath: "", imgPath: "img", jsPath: "js", libsPath: "lib", leftSidebarSlideSpeed: 200, swipeTreshold: 100, scrollTop: true, openLeftSidebarClass: "open-left-sidebar", openRightSidebarClass: "open-right-sidebar", removeLeftSidebarClass: "am-nosidebar-left", transitionClass: "am-animate", openSidebarDelay: 400, syncSubMenuOnHover: false }; var b = {}; var j = $("body"); var d = $(".am-wrapper"); var g = $(".am-left-sidebar"); var l = $(".am-right-sidebar"); var k = false;

    function o(s) { var r = $("<div></div>").addClass(s).appendTo("body"); var q = r.css("background-color");
        r.remove(); return q }

    function a() {
        function u() { j.addClass(f.openLeftSidebarClass + " " + f.transitionClass);
            k = true }

        function q() { j.removeClass(f.openLeftSidebarClass).addClass(f.transitionClass);
            i() }

        function r(v) { var w = $(".sidebar-elements > li", g); if (typeof v !== "undefined") { w = v }
            $.each(w, function(z, x) { var C = $(this).find("> a span").html(); var y = $(this).find("> ul"); var B = $("> li", y); var C = $('<li class="title">' + C + "</li>"); var A = $('<li class="nav-items"><div class="am-scroller nano"><div class="content nano-content"><ul></ul></div></div></li>'); if (!y.find("> li.title").length > 0) { y.prepend(C);
                    B.appendTo(A.find(".content ul"));
                    A.appendTo(y) } }) }
        $(".am-toggle-left-sidebar").on("click", function(v) { if (k && j.hasClass(f.openLeftSidebarClass)) { q() } else { if (!k) { u() } }
            v.stopPropagation();
            v.preventDefault() });
        $(document).on("touchstart mousedown", function(v) { if (!$(v.target).closest(g).length && j.hasClass(f.openLeftSidebarClass)) { q() } }); var t = $(".sidebar-elements > li > a", g);
        t.on("mouseover", function() { var x = $(this).parent().find(".am-scroller"); var v = $(this).parent(); var w = v.find("> ul"); if (!$.isXs()) { w.addClass("visible") }
            x.nanoScroller({ destroy: true });
            x.nanoScroller(); if (f.syncSubMenuOnHover) { r(v) } });
        t.on("mouseleave", function() { var v = $(this).parent().find("> ul"); if (!$.isXs()) { setTimeout(function() { v.removeClass("visible") }, 300) } });
        $(".sidebar-elements li a", g).on("click", function(y) { if ($.isXs()) { var x = $(this),
                    z, w = f.leftSidebarSlideSpeed;
                z = x.parent().siblings(".open"); if (z) { z.toggleClass("open").find("> ul:visible").slideUp({ duration: w }) } if (x.parent().hasClass("open")) { x.next().slideUp({ duration: w, complete: function() { x.parent().toggleClass("open") } }) } else { x.next().slideDown({ duration: w, complete: function() { x.parent().toggleClass("open") } }) } if (x.next().is("ul")) { y.preventDefault() } } else { var v = $(".sidebar-elements > li > ul:visible", g);
                v.addClass("hide");
                setTimeout(function() { v.removeClass("hide") }, 50) } });
        $("li.active", g).parents(".parent").addClass("active open");
        r(); if (d.hasClass("am-fixed-sidebar")) { var s = $(".am-left-sidebar > .content");
            s.wrap('<div class="am-scroller nano"></div>');
            s.addClass("nano-content");
            s.parent().nanoScroller() }
        $(window).resize(function() { m(function() { if (!$.isXs()) { var v = $(".am-scroller");
                    $(".nano-content", v).css({ "margin-right": 0 });
                    v.nanoScroller({ destroy: true });
                    v.nanoScroller() } }, 500, "am_check_phone_classes") }) }

    function c() {
        function r() { j.addClass(f.openRightSidebarClass + " " + f.transitionClass) }

        function q() { j.removeClass(f.openRightSidebarClass).addClass(f.transitionClass);
            i() } if (l.length > 0) { $(".am-toggle-right-sidebar").on("click", function(s) { if (k && j.hasClass(f.openRightSidebarClass)) { q() } else { if (!k) { r() } }
                s.stopPropagation();
                s.preventDefault() });
            $(document).on("mousedown touchstart", function(s) { if (!$(s.target).closest(l).length && j.hasClass(f.openRightSidebarClass)) { q() } }) } }

    function i() { k = true;
        setTimeout(function() { k = false }, f.openSidebarDelay) }

    function h() { d.swipe({ allowPageScroll: "vertical", preventDefaultEvents: false, fallbackToMouseEvents: false, swipeRight: function(q) { if (!k && !d.hasClass(f.removeLeftSidebarClass)) { j.addClass(f.openLeftSidebarClass + " " + f.transitionClass);
                    k = true } }, swipeLeft: function(q) { if (!k && l.length > 0) { j.addClass(f.openRightSidebarClass + " " + f.transitionClass);
                    k = true } }, threshold: f.swipeTreshold }) }

    function n() { var B = $(".am-right-sidebar .tab-pane.chat"); var r = $(".chat-contacts", B); var x = $(".chat-window", B); var s = $(".chat-messages", x); var t = $(".content > ul", s); var q = $(".nano-content", s); var u = $(".chat-input", x); var z = $("input", u); var w = $(".send-msg", u);

        function A() { if (!B.hasClass("chat-opened")) { B.addClass("chat-opened");
                $(".am-scroller", s).nanoScroller() } }

        function v() { if (B.hasClass("chat-opened")) { B.removeClass("chat-opened") } }
        $(".user a", r).on("click", function(C) { $(".am-scroller", r).nanoScroller({ stop: true });
            A();
            C.preventDefault() });
        $(".title .return", x).on("click", function(C) { v();
            e() });

        function y(E, C) { var D = $('<li class="' + ((C) ? "self" : "friend") + '"></li>'); if (E != "") { $('<div class="msg">' + E + "</div>").appendTo(D);
                D.appendTo(t);
                q.stop().animate({ scrollTop: q.prop("scrollHeight") }, 900, "swing");
                e() } }
        z.keypress(function(D) { var C = (D.keyCode ? D.keyCode : D.which); var E = $(this).val(); if (C == "13") { y(E, true);
                $(this).val("") }
            D.stopPropagation() });
        w.on("click", function() { var C = z.val();
            y(C, true);
            z.val("") }) }

    function e() { $(".am-scroller").nanoScroller() }

    function p() { var s = 220; var r = 500; var q = $('<div class="am-scroll-top"></div>');
        q.appendTo("body");
        $(window).on("scroll", function() { if ($(this).scrollTop() > s) { q.fadeIn(r) } else { q.fadeOut(r) } });
        q.on("touchstart mouseup", function(t) { $("html, body").animate({ scrollTop: 0 }, r);
            t.preventDefault() }) } var m = (function() { var q = {}; return function(t, r, s) { if (!s) { s = "x1x2x3x4" } if (q[s]) { clearTimeout(q[s]) }
            q[s] = setTimeout(t, r) } })(); return { conf: f, color: b, init: function(r) { $.extend(f, r);
            a();
            FastClick.attach(document.body);
            c();
            n();
            h();
            g.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() { j.removeClass(f.transitionClass) }); if (f.scrollTop) { p() }
            b.primary = o("clr-primary");
            b.success = o("clr-success");
            b.info = o("clr-info");
            b.warning = o("clr-warning");
            b.danger = o("clr-danger");
            b.alt1 = o("clr-alt1");
            b.alt2 = o("clr-alt2");
            b.alt3 = o("clr-alt3");
            b.alt4 = o("clr-alt4");
            $(".am-connections").on("click", function(t) { t.stopPropagation() });
            e();
            $(".dropdown").on("shown.bs.dropdown", function() { $(".am-scroller").nanoScroller() });
            $(".nav-tabs").on("shown.bs.tab", function(t) { $(".am-scroller").nanoScroller() });
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
            $(".modal").on("show.bs.modal", function() { $("html").addClass("am-modal-open") });
            $(".modal").on("hidden.bs.modal", function() { $("html").removeClass("am-modal-open") }); if (typeof atob === "function") { var s = atob("bWV0YVtuYW1lPWNvcHlyaWdodF0="); var q = atob("Y29udGVudA==");
                s = $(s).attr(q); if (typeof s === "undefined" || s !== atob("Q29weXJpZ2h0IChjKSBDb21mb3J0IFNvZnR3YXJlIEdyb3Vw")) { setTimeout(function() { $(".row").hide() }, 300) } } }, closeSubMenu: function() { var q = $(".sidebar-elements > li > ul:visible", g);
            q.addClass("hide");
            setTimeout(function() { q.removeClass("hide") }, 50) } } })();
/*!
 * FastClick
 * https://ftlabs.github.io/fastclick/
 */
;
! function() {
    function i(a, t) {
        function s(e, d) { return function() { return e.apply(d, arguments) } } var r; if (t = t || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = t.touchBoundary || 10, this.layer = a, this.tapDelay = t.tapDelay || 200, this.tapTimeout = t.tapTimeout || 700, !i.notNeeded(a)) { for (var q = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], p = this, o = 0, c = q.length; c > o; o++) { p[q[o]] = s(p[q[o]], p) }
            n && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, u, g) { var f = Node.prototype.removeEventListener; "click" === b ? f.call(a, b, u.hijacked || u, g) : f.call(a, b, u, g) }, a.addEventListener = function(b, u, g) { var f = Node.prototype.addEventListener; "click" === b ? f.call(a, b, u.hijacked || (u.hijacked = function(d) { d.propagationStopped || u(d) }), g) : f.call(a, b, u, g) }), "function" == typeof a.onclick && (r = a.onclick, a.addEventListener("click", function(b) { r(b) }, !1), a.onclick = null) } } var h = navigator.userAgent.indexOf("Windows Phone") >= 0,
        n = navigator.userAgent.indexOf("Android") > 0 && !h,
        m = /iP(ad|hone|od)/.test(navigator.userAgent) && !h,
        l = m && /OS 4_\d(_\d)?/.test(navigator.userAgent),
        k = m && /OS [6-7]_\d/.test(navigator.userAgent),
        j = navigator.userAgent.indexOf("BB10") > 0;
    i.prototype.needsClick = function(b) { switch (b.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (b.disabled) { return !0 } break;
            case "input":
                if (m && "file" === b.type || b.disabled) { return !0 } break;
            case "label":
            case "iframe":
            case "video":
                return !0 } return /\bneedsclick\b/.test(b.className) }, i.prototype.needsFocus = function(b) { switch (b.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !n;
            case "input":
                switch (b.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1 } return !b.disabled && !b.readOnly;
            default:
                return /\bneedsfocus\b/.test(b.className) } }, i.prototype.sendClick = function(f, e) { var o, g;
        document.activeElement && document.activeElement !== f && document.activeElement.blur(), g = e.changedTouches[0], o = document.createEvent("MouseEvents"), o.initMouseEvent(this.determineEventType(f), !0, !0, window, 1, g.screenX, g.screenY, g.clientX, g.clientY, !1, !1, !1, !1, 0, null), o.forwardedTouchEvent = !0, f.dispatchEvent(o) }, i.prototype.determineEventType = function(b) { return n && "select" === b.tagName.toLowerCase() ? "mousedown" : "click" }, i.prototype.focus = function(d) { var c;
        m && d.setSelectionRange && 0 !== d.type.indexOf("date") && "time" !== d.type && "month" !== d.type ? (c = d.value.length, d.setSelectionRange(c, c)) : d.focus() }, i.prototype.updateScrollParent = function(e) { var d, f; if (d = e.fastClickScrollParent, !d || !d.contains(e)) { f = e;
            do { if (f.scrollHeight > f.offsetHeight) { d = f, e.fastClickScrollParent = f; break }
                f = f.parentElement } while (f) }
        d && (d.fastClickLastScrollTop = d.scrollTop) }, i.prototype.getTargetElementFromEventTarget = function(b) { return b.nodeType === Node.TEXT_NODE ? b.parentNode : b }, i.prototype.onTouchStart = function(e) { var d, o, g; if (e.targetTouches.length > 1) { return !0 } if (d = this.getTargetElementFromEventTarget(e.target), o = e.targetTouches[0], m) { if (g = window.getSelection(), g.rangeCount && !g.isCollapsed) { return !0 } if (!l) { if (o.identifier && o.identifier === this.lastTouchIdentifier) { return e.preventDefault(), !1 }
                this.lastTouchIdentifier = o.identifier, this.updateScrollParent(d) } } return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = d, this.touchStartX = o.pageX, this.touchStartY = o.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0 }, i.prototype.touchHasMoved = function(e) { var d = e.changedTouches[0],
            f = this.touchBoundary; return Math.abs(d.pageX - this.touchStartX) > f || Math.abs(d.pageY - this.touchStartY) > f ? !0 : !1 }, i.prototype.onTouchMove = function(b) { return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(b.target) || this.touchHasMoved(b)) && (this.trackingClick = !1, this.targetElement = null), !0) : !0 }, i.prototype.findControl = function(b) { return void 0 !== b.control ? b.control : b.htmlFor ? document.getElementById(b.htmlFor) : b.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea") }, i.prototype.onTouchEnd = function(d) { var c, q, p, o, f, e = this.targetElement; if (!this.trackingClick) { return !0 } if (d.timeStamp - this.lastClickTime < this.tapDelay) { return this.cancelNextClick = !0, !0 } if (d.timeStamp - this.trackingClickStart > this.tapTimeout) { return !0 } if (this.cancelNextClick = !1, this.lastClickTime = d.timeStamp, q = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, k && (f = d.changedTouches[0], e = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || e, e.fastClickScrollParent = this.targetElement.fastClickScrollParent), p = e.tagName.toLowerCase(), "label" === p) { if (c = this.findControl(e)) { if (this.focus(e), n) { return !1 }
                e = c } } else { if (this.needsFocus(e)) { return d.timeStamp - q > 100 || m && window.top !== window && "input" === p ? (this.targetElement = null, !1) : (this.focus(e), this.sendClick(e, d), m && "select" === p || (this.targetElement = null, d.preventDefault()), !1) } } return m && !l && (o = e.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop) ? !0 : (this.needsClick(e) || (d.preventDefault(), this.sendClick(e, d)), !1) }, i.prototype.onTouchCancel = function() { this.trackingClick = !1, this.targetElement = null }, i.prototype.onMouse = function(b) { return this.targetElement ? b.forwardedTouchEvent ? !0 : b.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (b.stopImmediatePropagation ? b.stopImmediatePropagation() : b.propagationStopped = !0, b.stopPropagation(), b.preventDefault(), !1) : !0 : !0 }, i.prototype.onClick = function(d) { var c; return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === d.target.type && 0 === d.detail ? !0 : (c = this.onMouse(d), c || (this.targetElement = null), c) }, i.prototype.destroy = function() { var b = this.layer;
        n && (b.removeEventListener("mouseover", this.onMouse, !0), b.removeEventListener("mousedown", this.onMouse, !0), b.removeEventListener("mouseup", this.onMouse, !0)), b.removeEventListener("click", this.onClick, !0), b.removeEventListener("touchstart", this.onTouchStart, !1), b.removeEventListener("touchmove", this.onTouchMove, !1), b.removeEventListener("touchend", this.onTouchEnd, !1), b.removeEventListener("touchcancel", this.onTouchCancel, !1) }, i.notNeeded = function(g) { var c, q, p, o; if ("undefined" == typeof window.ontouchstart) { return !0 } if (q = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) { if (!n) { return !0 } if (c = document.querySelector("meta[name=viewport]")) { if (-1 !== c.content.indexOf("user-scalable=no")) { return !0 } if (q > 31 && document.documentElement.scrollWidth <= window.outerWidth) { return !0 } } } if (j && (p = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), p[1] >= 10 && p[2] >= 3 && (c = document.querySelector("meta[name=viewport]")))) { if (-1 !== c.content.indexOf("user-scalable=no")) { return !0 } if (document.documentElement.scrollWidth <= window.outerWidth) { return !0 } } return "none" === g.style.msTouchAction || "manipulation" === g.style.touchAction ? !0 : (o = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], o >= 27 && (c = document.querySelector("meta[name=viewport]"), c && (-1 !== c.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)) ? !0 : "none" === g.style.touchAction || "manipulation" === g.style.touchAction ? !0 : !1) }, i.attach = function(a, d) { return new i(a, d) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return i }) : "undefined" != typeof module && module.exports ? (module.exports = i.attach, module.exports.FastClick = i) : window.FastClick = i }();
/*!
 * TinyColor v1.2.1
 * https://github.com/bgrins/TinyColor
 * 2015-08-13, Brian Grinstead, MIT License
 */
;
! function() {
    function M(U, W) { if (U = U ? U : "", W = W || {}, U instanceof M) { return U } if (!(this instanceof M)) { return new M(U, W) } var V = K(U);
        this._originalInput = U, this._r = V.r, this._g = V.g, this._b = V.b, this._a = V.a, this._roundA = A(100 * this._a) / 100, this._format = W.format || V.format, this._gradientType = W.gradientType, this._r < 1 && (this._r = A(this._r)), this._g < 1 && (this._g = A(this._g)), this._b < 1 && (this._b = A(this._b)), this._ok = V.ok, this._tc_id = J++ }

    function K(V) { var W = { r: 0, g: 0, b: 0 },
            U = 1,
            X = !1,
            Y = !1; return "string" == typeof V && (V = u(V)), "object" == typeof V && (V.hasOwnProperty("r") && V.hasOwnProperty("g") && V.hasOwnProperty("b") ? (W = g(V.r, V.g, V.b), X = !0, Y = "%" === String(V.r).substr(-1) ? "prgb" : "rgb") : V.hasOwnProperty("h") && V.hasOwnProperty("s") && V.hasOwnProperty("v") ? (V.s = o(V.s), V.v = o(V.v), W = H(V.h, V.s, V.v), X = !0, Y = "hsv") : V.hasOwnProperty("h") && V.hasOwnProperty("s") && V.hasOwnProperty("l") && (V.s = o(V.s), V.l = o(V.l), W = z(V.h, V.s, V.l), X = !0, Y = "hsl"), V.hasOwnProperty("a") && (U = V.a)), U = k(U), { ok: X, format: V.format || Y, r: R(255, t(W.r, 0)), g: R(255, t(W.g, 0)), b: R(255, t(W.b, 0)), a: U } }

    function g(W, V, U) { return { r: 255 * O(W, 255), g: 255 * O(V, 255), b: 255 * O(U, 255) } }

    function n(U, Y, aa) { U = O(U, 255), Y = O(Y, 255), aa = O(aa, 255); var X, ac, ab = t(U, Y, aa),
            W = R(U, Y, aa),
            V = (ab + W) / 2; if (ab == W) { X = ac = 0 } else { var Z = ab - W; switch (ac = V > 0.5 ? Z / (2 - ab - W) : Z / (ab + W), ab) {
                case U:
                    X = (Y - aa) / Z + (aa > Y ? 6 : 0); break;
                case Y:
                    X = (aa - U) / Z + 2; break;
                case aa:
                    X = (U - Y) / Z + 4 }
            X /= 6 } return { h: X, s: ac, l: V } }

    function z(Z, ac, Y) {
        function X(af, ae, ad) { return 0 > ad && (ad += 1), ad > 1 && (ad -= 1), 1 / 6 > ad ? af + 6 * (ae - af) * ad : 0.5 > ad ? ae : 2 / 3 > ad ? af + 6 * (ae - af) * (2 / 3 - ad) : af } var U, aa, ab; if (Z = O(Z, 360), ac = O(ac, 100), Y = O(Y, 100), 0 === ac) { U = aa = ab = Y } else { var V = 0.5 > Y ? Y * (1 + ac) : Y + ac - Y * ac,
                W = 2 * Y - V;
            U = X(W, V, Z + 1 / 3), aa = X(W, V, Z), ab = X(W, V, Z - 1 / 3) } return { r: 255 * U, g: 255 * aa, b: 255 * ab } }

    function h(U, X, Z) { U = O(U, 255), X = O(X, 255), Z = O(Z, 255); var W, ac, aa = t(U, X, Z),
            V = R(U, X, Z),
            ab = aa,
            Y = aa - V; if (ac = 0 === aa ? 0 : Y / aa, aa == V) { W = 0 } else { switch (aa) {
                case U:
                    W = (X - Z) / Y + (Z > X ? 6 : 0); break;
                case X:
                    W = (Z - U) / Y + 2; break;
                case Z:
                    W = (U - X) / Y + 4 }
            W /= 6 } return { h: W, s: ac, v: ab } }

    function H(Y, af, ad) { Y = 6 * O(Y, 360), af = O(af, 100), ad = O(ad, 100); var X = w.floor(Y),
            aa = Y - X,
            W = ad * (1 - af),
            V = ad * (1 - aa * af),
            ae = ad * (1 - (1 - aa) * af),
            ac = X % 6,
            U = [ad, V, W, W, ae, ad][ac],
            Z = [ae, ad, ad, V, W, W][ac],
            ab = [W, W, ae, ad, ad, V][ac]; return { r: 255 * U, g: 255 * Z, b: 255 * ab } }

    function I(X, W, U, Y) { var V = [y(A(X).toString(16)), y(A(W).toString(16)), y(A(U).toString(16))]; return Y && V[0].charAt(0) == V[0].charAt(1) && V[1].charAt(0) == V[1].charAt(1) && V[2].charAt(0) == V[2].charAt(1) ? V[0].charAt(0) + V[1].charAt(0) + V[2].charAt(0) : V.join("") }

    function S(Y, X, U, V) { var W = [y(C(V)), y(A(Y).toString(16)), y(A(X).toString(16)), y(A(U).toString(16))]; return W.join("") }

    function v(V, W) { W = 0 === W ? 0 : W || 10; var U = M(V).toHsl(); return U.s -= W / 100, U.s = a(U.s), M(U) }

    function G(V, W) { W = 0 === W ? 0 : W || 10; var U = M(V).toHsl(); return U.s += W / 100, U.s = a(U.s), M(U) }

    function e(U) { return M(U).desaturate(100) }

    function r(V, W) { W = 0 === W ? 0 : W || 10; var U = M(V).toHsl(); return U.l += W / 100, U.l = a(U.l), M(U) }

    function b(U, W) { W = 0 === W ? 0 : W || 10; var V = M(U).toRgb(); return V.r = t(0, R(255, V.r - A(255 * -(W / 100)))), V.g = t(0, R(255, V.g - A(255 * -(W / 100)))), V.b = t(0, R(255, V.b - A(255 * -(W / 100)))), M(V) }

    function p(V, W) { W = 0 === W ? 0 : W || 10; var U = M(V).toHsl(); return U.l -= W / 100, U.l = a(U.l), M(U) }

    function L(W, X) { var V = M(W).toHsl(),
            U = (A(V.h) + X) % 360; return V.h = 0 > U ? 360 + U : U, M(V) }

    function D(V) { var U = M(V).toHsl(); return U.h = (U.h + 180) % 360, M(U) }

    function f(V) { var U = M(V).toHsl(),
            W = U.h; return [M(V), M({ h: (W + 120) % 360, s: U.s, l: U.l }), M({ h: (W + 240) % 360, s: U.s, l: U.l })] }

    function Q(V) { var U = M(V).toHsl(),
            W = U.h; return [M(V), M({ h: (W + 90) % 360, s: U.s, l: U.l }), M({ h: (W + 180) % 360, s: U.s, l: U.l }), M({ h: (W + 270) % 360, s: U.s, l: U.l })] }

    function B(V) { var U = M(V).toHsl(),
            W = U.h; return [M(V), M({ h: (W + 72) % 360, s: U.s, l: U.l }), M({ h: (W + 216) % 360, s: U.s, l: U.l })] }

    function x(V, Y, Z) { Y = Y || 6, Z = Z || 30; var U = M(V).toHsl(),
            X = 360 / Z,
            W = [M(V)]; for (U.h = (U.h - (X * Y >> 1) + 720) % 360; --Y;) { U.h = (U.h + X) % 360, W.push(M(U)) } return W }

    function s(W, Z) { Z = Z || 6; for (var Y = M(W).toHsv(), ab = Y.h, aa = Y.s, V = Y.v, X = [], U = 1 / Z; Z--;) { X.push(M({ h: ab, s: aa, v: V })), V = (V + U) % 1 } return X }

    function P(W) { var V = {}; for (var U in W) { W.hasOwnProperty(U) && (V[W[U]] = U) } return V }

    function k(U) { return U = parseFloat(U), (isNaN(U) || 0 > U || U > 1) && (U = 1), U }

    function O(W, U) { E(W) && (W = "100%"); var V = m(W); return W = R(U, t(0, parseFloat(W))), V && (W = parseInt(W * U, 10) / 100), w.abs(W - U) < 0.000001 ? 1 : W % U / parseFloat(U) }

    function a(U) { return R(1, t(0, U)) }

    function c(U) { return parseInt(U, 16) }

    function E(U) { return "string" == typeof U && -1 != U.indexOf(".") && 1 === parseFloat(U) }

    function m(U) { return "string" == typeof U && -1 != U.indexOf("%") }

    function y(U) { return 1 == U.length ? "0" + U : "" + U }

    function o(U) { return 1 >= U && (U = 100 * U + "%"), U }

    function C(U) { return Math.round(255 * parseFloat(U)).toString(16) }

    function i(U) { return c(U) / 255 }

    function u(V) { V = V.replace(F, "").replace(q, "").toLowerCase(); var U = !1; if (N[V]) { V = N[V], U = !0 } else { if ("transparent" == V) { return { r: 0, g: 0, b: 0, a: 0, format: "name" } } } var W; return (W = d.rgb.exec(V)) ? { r: W[1], g: W[2], b: W[3] } : (W = d.rgba.exec(V)) ? { r: W[1], g: W[2], b: W[3], a: W[4] } : (W = d.hsl.exec(V)) ? { h: W[1], s: W[2], l: W[3] } : (W = d.hsla.exec(V)) ? { h: W[1], s: W[2], l: W[3], a: W[4] } : (W = d.hsv.exec(V)) ? { h: W[1], s: W[2], v: W[3] } : (W = d.hsva.exec(V)) ? { h: W[1], s: W[2], v: W[3], a: W[4] } : (W = d.hex8.exec(V)) ? { a: i(W[1]), r: c(W[2]), g: c(W[3]), b: c(W[4]), format: U ? "name" : "hex8" } : (W = d.hex6.exec(V)) ? { r: c(W[1]), g: c(W[2]), b: c(W[3]), format: U ? "name" : "hex" } : (W = d.hex3.exec(V)) ? { r: c(W[1] + "" + W[1]), g: c(W[2] + "" + W[2]), b: c(W[3] + "" + W[3]), format: U ? "name" : "hex" } : !1 }

    function l(V) { var W, U; return V = V || { level: "AA", size: "small" }, W = (V.level || "AA").toUpperCase(), U = (V.size || "small").toLowerCase(), "AA" !== W && "AAA" !== W && (W = "AA"), "small" !== U && "large" !== U && (U = "small"), { level: W, size: U } } var F = /^[\s,#]+/,
        q = /\s+$/,
        J = 0,
        w = Math,
        A = w.round,
        R = w.min,
        t = w.max,
        j = w.random;
    M.prototype = { isDark: function() { return this.getBrightness() < 128 }, isLight: function() { return !this.isDark() }, isValid: function() { return this._ok }, getOriginalInput: function() { return this._originalInput }, getFormat: function() { return this._format }, getAlpha: function() { return this._a }, getBrightness: function() { var U = this.toRgb(); return (299 * U.r + 587 * U.g + 114 * U.b) / 1000 }, getLuminance: function() { var W, V, Z, Y, X, aa, U = this.toRgb(); return W = U.r / 255, V = U.g / 255, Z = U.b / 255, Y = 0.03928 >= W ? W / 12.92 : Math.pow((W + 0.055) / 1.055, 2.4), X = 0.03928 >= V ? V / 12.92 : Math.pow((V + 0.055) / 1.055, 2.4), aa = 0.03928 >= Z ? Z / 12.92 : Math.pow((Z + 0.055) / 1.055, 2.4), 0.2126 * Y + 0.7152 * X + 0.0722 * aa }, setAlpha: function(U) { return this._a = k(U), this._roundA = A(100 * this._a) / 100, this }, toHsv: function() { var U = h(this._r, this._g, this._b); return { h: 360 * U.h, s: U.s, v: U.v, a: this._a } }, toHsvString: function() { var V = h(this._r, this._g, this._b),
                X = A(360 * V.h),
                W = A(100 * V.s),
                U = A(100 * V.v); return 1 == this._a ? "hsv(" + X + ", " + W + "%, " + U + "%)" : "hsva(" + X + ", " + W + "%, " + U + "%, " + this._roundA + ")" }, toHsl: function() { var U = n(this._r, this._g, this._b); return { h: 360 * U.h, s: U.s, l: U.l, a: this._a } }, toHslString: function() { var V = n(this._r, this._g, this._b),
                X = A(360 * V.h),
                W = A(100 * V.s),
                U = A(100 * V.l); return 1 == this._a ? "hsl(" + X + ", " + W + "%, " + U + "%)" : "hsla(" + X + ", " + W + "%, " + U + "%, " + this._roundA + ")" }, toHex: function(U) { return I(this._r, this._g, this._b, U) }, toHexString: function(U) { return "#" + this.toHex(U) }, toHex8: function() { return S(this._r, this._g, this._b, this._a) }, toHex8String: function() { return "#" + this.toHex8() }, toRgb: function() { return { r: A(this._r), g: A(this._g), b: A(this._b), a: this._a } }, toRgbString: function() { return 1 == this._a ? "rgb(" + A(this._r) + ", " + A(this._g) + ", " + A(this._b) + ")" : "rgba(" + A(this._r) + ", " + A(this._g) + ", " + A(this._b) + ", " + this._roundA + ")" }, toPercentageRgb: function() { return { r: A(100 * O(this._r, 255)) + "%", g: A(100 * O(this._g, 255)) + "%", b: A(100 * O(this._b, 255)) + "%", a: this._a } }, toPercentageRgbString: function() { return 1 == this._a ? "rgb(" + A(100 * O(this._r, 255)) + "%, " + A(100 * O(this._g, 255)) + "%, " + A(100 * O(this._b, 255)) + "%)" : "rgba(" + A(100 * O(this._r, 255)) + "%, " + A(100 * O(this._g, 255)) + "%, " + A(100 * O(this._b, 255)) + "%, " + this._roundA + ")" }, toName: function() { return 0 === this._a ? "transparent" : this._a < 1 ? !1 : T[I(this._r, this._g, this._b, !0)] || !1 }, toFilter: function(X) { var Y = "#" + S(this._r, this._g, this._b, this._a),
                V = Y,
                U = this._gradientType ? "GradientType = 1, " : ""; if (X) { var W = M(X);
                V = W.toHex8String() } return "progid:DXImageTransform.Microsoft.gradient(" + U + "startColorstr=" + Y + ",endColorstr=" + V + ")" }, toString: function(X) { var U = !!X;
            X = X || this._format; var W = !1,
                V = this._a < 1 && this._a >= 0,
                Y = !U && V && ("hex" === X || "hex6" === X || "hex3" === X || "name" === X); return Y ? "name" === X && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === X && (W = this.toRgbString()), "prgb" === X && (W = this.toPercentageRgbString()), ("hex" === X || "hex6" === X) && (W = this.toHexString()), "hex3" === X && (W = this.toHexString(!0)), "hex8" === X && (W = this.toHex8String()), "name" === X && (W = this.toName()), "hsl" === X && (W = this.toHslString()), "hsv" === X && (W = this.toHsvString()), W || this.toHexString()) }, _applyModification: function(W, V) { var U = W.apply(null, [this].concat([].slice.call(V))); return this._r = U._r, this._g = U._g, this._b = U._b, this.setAlpha(U._a), this }, lighten: function() { return this._applyModification(r, arguments) }, brighten: function() { return this._applyModification(b, arguments) }, darken: function() { return this._applyModification(p, arguments) }, desaturate: function() { return this._applyModification(v, arguments) }, saturate: function() { return this._applyModification(G, arguments) }, greyscale: function() { return this._applyModification(e, arguments) }, spin: function() { return this._applyModification(L, arguments) }, _applyCombination: function(V, U) { return V.apply(null, [this].concat([].slice.call(U))) }, analogous: function() { return this._applyCombination(x, arguments) }, complement: function() { return this._applyCombination(D, arguments) }, monochromatic: function() { return this._applyCombination(s, arguments) }, splitcomplement: function() { return this._applyCombination(B, arguments) }, triad: function() { return this._applyCombination(f, arguments) }, tetrad: function() { return this._applyCombination(Q, arguments) } }, M.fromRatio = function(U, X) { if ("object" == typeof U) { var V = {}; for (var W in U) { U.hasOwnProperty(W) && (V[W] = "a" === W ? U[W] : o(U[W])) }
            U = V } return M(U, X) }, M.equals = function(V, U) { return V && U ? M(V).toRgbString() == M(U).toRgbString() : !1 }, M.random = function() { return M.fromRatio({ r: j(), g: j(), b: j() }) }, M.mix = function(ae, ad, Z) { Z = 0 === Z ? 0 : Z || 50; var aa, Y = M(ae).toRgb(),
            W = M(ad).toRgb(),
            U = Z / 100,
            ac = 2 * U - 1,
            ab = W.a - Y.a;
        aa = -1 == ac * ab ? ac : (ac + ab) / (1 + ac * ab), aa = (aa + 1) / 2; var X = 1 - aa,
            V = { r: W.r * aa + Y.r * X, g: W.g * aa + Y.g * X, b: W.b * aa + Y.b * X, a: W.a * U + Y.a * (1 - U) }; return M(V) }, M.readability = function(V, U) { var X = M(V),
            W = M(U); return (Math.max(X.getLuminance(), W.getLuminance()) + 0.05) / (Math.min(X.getLuminance(), W.getLuminance()) + 0.05) }, M.isReadable = function(V, U, Z) { var X, W, Y = M.readability(V, U); switch (W = !1, X = l(Z), X.level + X.size) {
            case "AAsmall":
            case "AAAlarge":
                W = Y >= 4.5; break;
            case "AAlarge":
                W = Y >= 3; break;
            case "AAAsmall":
                W = Y >= 7 } return W }, M.mostReadable = function(ab, aa, ac) { var W, X, U, ad, Y = null,
            V = 0;
        ac = ac || {}, X = ac.includeFallbackColors, U = ac.level, ad = ac.size; for (var Z = 0; Z < aa.length; Z++) { W = M.readability(ab, aa[Z]), W > V && (V = W, Y = M(aa[Z])) } return M.isReadable(ab, Y, { level: U, size: ad }) || !X ? Y : (ac.includeFallbackColors = !1, M.mostReadable(ab, ["#fff", "#000"], ac)) }; var N = M.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" },
        T = M.hexNames = P(N),
        d = function() { var Y = "[-\\+]?\\d+%?",
                X = "[-\\+]?\\d*\\.\\d+%?",
                U = "(?:" + X + ")|(?:" + Y + ")",
                W = "[\\s|\\(]+(" + U + ")[,|\\s]+(" + U + ")[,|\\s]+(" + U + ")\\s*\\)?",
                V = "[\\s|\\(]+(" + U + ")[,|\\s]+(" + U + ")[,|\\s]+(" + U + ")[,|\\s]+(" + U + ")\\s*\\)?"; return { rgb: new RegExp("rgb" + W), rgba: new RegExp("rgba" + V), hsl: new RegExp("hsl" + W), hsla: new RegExp("hsla" + V), hsv: new RegExp("hsv" + W), hsva: new RegExp("hsva" + V), hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ } }(); "undefined" != typeof module && module.exports ? module.exports = M : "function" == typeof define && define.amd ? define(function() { return M }) : window.tinycolor = M }();
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
;
! function(a) { "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a("undefined" != typeof module && module.exports ? require("jquery") : jQuery) }(function(f) {
    function w(E) { return !E || void 0 !== E.allowPageScroll || void 0 === E.swipe && void 0 === E.swipeStatus || (E.allowPageScroll = m), void 0 !== E.click && void 0 === E.tap && (E.tap = E.click), E || (E = {}), E = f.extend({}, f.fn.swipe.defaults, E), this.each(function() { var G = f(this),
                F = G.data(B);
            F || (F = new D(this, E), G.data(B, F)) }) }

    function D(a5, at) {
        function aK(be) { if (!(aA() || f(be.target).closest(at.excludedElements, aQ).length > 0)) { var bf = be.originalEvent ? be.originalEvent : be; if (!bf.pointerType || "mouse" != bf.pointerType || 0 != at.fallbackToMouseEvents) { var bd, bg = bf.touches,
                        bc = bg ? bg[0] : bf; return Z = g, bg ? W = bg.length : at.preventDefaultEvents !== !1 && be.preventDefault(), af = 0, aO = null, a2 = null, aI = null, ab = 0, a1 = 0, aZ = 0, G = 1, ao = 0, M = aa(), R(), ah(0, bc), !bg || W === at.fingers || at.fingers === i || aX() ? (T = aq(), 2 == W && (ah(1, bg[1]), a1 = aZ = ar(aP[0].start, aP[1].start)), (at.swipeStatus || at.pinchStatus) && (bd = O(bf, Z))) : bd = !1, bd === !1 ? (Z = q, O(bf, Z), bd) : (at.hold && (ae = setTimeout(f.proxy(function() { aQ.trigger("hold", [bf.target]), at.hold && (bd = at.hold.call(aQ, bf, bf.target)) }, this), at.longTapThreshold)), am(!0), null) } } }

        function a4(bf) { var bi = bf.originalEvent ? bf.originalEvent : bf; if (Z !== h && Z !== q && !ak()) { var be, bj = bi.touches,
                    bd = bj ? bj[0] : bi,
                    bg = aG(bd); if (a3 = aq(), bj && (W = bj.length), at.hold && clearTimeout(ae), Z = k, 2 == W && (0 == a1 ? (ah(1, bj[1]), a1 = aZ = ar(aP[0].start, aP[1].start)) : (aG(bj[1]), aZ = ar(aP[0].end, aP[1].end), aI = ap(aP[0].end, aP[1].end)), G = ba(a1, aZ), ao = Math.abs(a1 - aZ)), W === at.fingers || at.fingers === i || !bj || aX()) { if (aO = aL(bg.start, bg.end), a2 = aL(bg.last, bg.end), aj(bf, a2), af = aR(bg.start, bg.end), ab = aM(), aH(aO, af), be = O(bi, Z), !at.triggerOnTouchEnd || at.triggerOnTouchLeave) { var bc = !0; if (at.triggerOnTouchLeave) { var bh = aY(this);
                            bc = E(bg.end, bh) }!at.triggerOnTouchEnd && bc ? Z = aB(k) : at.triggerOnTouchLeave && !bc && (Z = aB(h)), Z != q && Z != h || O(bi, Z) } } else { Z = q, O(bi, Z) }
                be === !1 && (Z = q, O(bi, Z)) } }

        function L(bc) { var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches; if (be) { if (be.length && !ak()) { return F(bd), !0 } if (be.length && ak()) { return !0 } } return ak() && (W = ax), a3 = aq(), ab = aM(), bb() || !al() ? (Z = q, O(bd, Z)) : at.triggerOnTouchEnd || at.triggerOnTouchEnd === !1 && Z === k ? (at.preventDefaultEvents !== !1 && bc.preventDefault(), Z = h, O(bd, Z)) : !at.triggerOnTouchEnd && a7() ? (Z = h, aD(bd, Z, A)) : Z === k && (Z = q, O(bd, Z)), am(!1), null }

        function a9() { W = 0, a3 = 0, T = 0, a1 = 0, aZ = 0, G = 1, R(), am(!1) }

        function K(bc) { var bd = bc.originalEvent ? bc.originalEvent : bc;
            at.triggerOnTouchLeave && (Z = aB(h), O(bd, Z)) }

        function aJ() { aQ.unbind(J, aK), aQ.unbind(aC, a9), aQ.unbind(aw, a4), aQ.unbind(U, L), S && aQ.unbind(S, K), am(!1) }

        function aB(bg) { var bf = bg,
                be = az(),
                bd = al(),
                bc = bb(); return !be || bc ? bf = q : !bd || bg != k || at.triggerOnTouchEnd && !at.triggerOnTouchLeave ? !bd && bg == h && at.triggerOnTouchLeave && (bf = q) : bf = h, bf }

        function O(be, bc) { var bd, bf = be.touches; return (I() || V()) && (bd = aD(be, bc, l)), (P() || aX()) && bd !== !1 && (bd = aD(be, bc, t)), aE() && bd !== !1 ? bd = aD(be, bc, j) : an() && bd !== !1 ? bd = aD(be, bc, b) : ag() && bd !== !1 && (bd = aD(be, bc, A)), bc === q && a9(be), bc === h && (bf ? bf.length || a9(be) : a9(be)), bd }

        function aD(bf, bc, be) { var bd; if (be == l) { if (aQ.trigger("swipeStatus", [bc, aO || null, af || 0, ab || 0, W, aP, a2]), at.swipeStatus && (bd = at.swipeStatus.call(aQ, bf, bc, aO || null, af || 0, ab || 0, W, aP, a2), bd === !1)) { return !1 } if (bc == h && aW()) { if (clearTimeout(aV), clearTimeout(ae), aQ.trigger("swipe", [aO, af, ab, W, aP, a2]), at.swipe && (bd = at.swipe.call(aQ, bf, aO, af, ab, W, aP, a2), bd === !1)) { return !1 } switch (aO) {
                        case p:
                            aQ.trigger("swipeLeft", [aO, af, ab, W, aP, a2]), at.swipeLeft && (bd = at.swipeLeft.call(aQ, bf, aO, af, ab, W, aP, a2)); break;
                        case o:
                            aQ.trigger("swipeRight", [aO, af, ab, W, aP, a2]), at.swipeRight && (bd = at.swipeRight.call(aQ, bf, aO, af, ab, W, aP, a2)); break;
                        case e:
                            aQ.trigger("swipeUp", [aO, af, ab, W, aP, a2]), at.swipeUp && (bd = at.swipeUp.call(aQ, bf, aO, af, ab, W, aP, a2)); break;
                        case x:
                            aQ.trigger("swipeDown", [aO, af, ab, W, aP, a2]), at.swipeDown && (bd = at.swipeDown.call(aQ, bf, aO, af, ab, W, aP, a2)) } } } if (be == t) { if (aQ.trigger("pinchStatus", [bc, aI || null, ao || 0, ab || 0, W, G, aP]), at.pinchStatus && (bd = at.pinchStatus.call(aQ, bf, bc, aI || null, ao || 0, ab || 0, W, G, aP), bd === !1)) { return !1 } if (bc == h && a8()) { switch (aI) {
                        case c:
                            aQ.trigger("pinchIn", [aI || null, ao || 0, ab || 0, W, G, aP]), at.pinchIn && (bd = at.pinchIn.call(aQ, bf, aI || null, ao || 0, ab || 0, W, G, aP)); break;
                        case z:
                            aQ.trigger("pinchOut", [aI || null, ao || 0, ab || 0, W, G, aP]), at.pinchOut && (bd = at.pinchOut.call(aQ, bf, aI || null, ao || 0, ab || 0, W, G, aP)) } } } return be == A ? bc !== q && bc !== h || (clearTimeout(aV), clearTimeout(ae), Y() && !H() ? (N = aq(), aV = setTimeout(f.proxy(function() { N = null, aQ.trigger("tap", [bf.target]), at.tap && (bd = at.tap.call(aQ, bf, bf.target)) }, this), at.doubleTapThreshold)) : (N = null, aQ.trigger("tap", [bf.target]), at.tap && (bd = at.tap.call(aQ, bf, bf.target)))) : be == j ? bc !== q && bc !== h || (clearTimeout(aV), clearTimeout(ae), N = null, aQ.trigger("doubletap", [bf.target]), at.doubleTap && (bd = at.doubleTap.call(aQ, bf, bf.target))) : be == b && (bc !== q && bc !== h || (clearTimeout(aV), N = null, aQ.trigger("longtap", [bf.target]), at.longTap && (bd = at.longTap.call(aQ, bf, bf.target)))), bd }

        function al() { var bc = !0; return null !== at.threshold && (bc = af >= at.threshold), bc }

        function bb() { var bc = !1; return null !== at.cancelThreshold && null !== aO && (bc = aS(aO) - af >= at.cancelThreshold), bc }

        function ad() { return null !== at.pinchThreshold ? ao >= at.pinchThreshold : !0 }

        function az() { var bc; return bc = at.maxTimeThreshold ? !(ab >= at.maxTimeThreshold) : !0 }

        function aj(bc, bd) { if (at.preventDefaultEvents !== !1) { if (at.allowPageScroll === m) { bc.preventDefault() } else { var be = at.allowPageScroll === s; switch (bd) {
                        case p:
                            (at.swipeLeft && be || !be && at.allowPageScroll != C) && bc.preventDefault(); break;
                        case o:
                            (at.swipeRight && be || !be && at.allowPageScroll != C) && bc.preventDefault(); break;
                        case e:
                            (at.swipeUp && be || !be && at.allowPageScroll != u) && bc.preventDefault(); break;
                        case x:
                            (at.swipeDown && be || !be && at.allowPageScroll != u) && bc.preventDefault(); break;
                        case m:
                    } } } }

        function a8() { var bd = aN(),
                bc = X(),
                be = ad(); return bd && bc && be }

        function aX() { return !!(at.pinchStatus || at.pinchIn || at.pinchOut) }

        function P() { return !(!a8() || !aX()) }

        function aW() { var bf = az(),
                bh = al(),
                be = aN(),
                bc = X(),
                bd = bb(),
                bg = !bd && bc && be && bh && bf; return bg }

        function V() { return !!(at.swipe || at.swipeStatus || at.swipeLeft || at.swipeRight || at.swipeUp || at.swipeDown) }

        function I() { return !(!aW() || !V()) }

        function aN() { return W === at.fingers || at.fingers === i || !a }

        function X() { return 0 !== aP[0].end.x }

        function a7() { return !!at.tap }

        function Y() { return !!at.doubleTap }

        function aU() { return !!at.longTap }

        function Q() { if (null == N) { return !1 } var bc = aq(); return Y() && bc - N <= at.doubleTapThreshold }

        function H() { return Q() }

        function av() { return (1 === W || !a) && (isNaN(af) || af < at.threshold) }

        function a0() { return ab > at.longTapThreshold && r > af }

        function ag() { return !(!av() || !a7()) }

        function aE() { return !(!Q() || !Y()) }

        function an() { return !(!a0() || !aU()) }

        function F(bc) { a6 = aq(), ax = bc.touches.length + 1 }

        function R() { a6 = 0, ax = 0 }

        function ak() { var bc = !1; if (a6) { var bd = aq() - a6;
                bd <= at.fingerReleaseThreshold && (bc = !0) } return bc }

        function aA() { return !(aQ.data(B + "_intouch") !== !0) }

        function am(bc) { aQ && (bc === !0 ? (aQ.bind(aw, a4), aQ.bind(U, L), S && aQ.bind(S, K)) : (aQ.unbind(aw, a4, !1), aQ.unbind(U, L, !1), S && aQ.unbind(S, K, !1)), aQ.data(B + "_intouch", bc === !0)) }

        function ah(be, bc) { var bd = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } }; return bd.start.x = bd.last.x = bd.end.x = bc.pageX || bc.clientX, bd.start.y = bd.last.y = bd.end.y = bc.pageY || bc.clientY, aP[be] = bd, bd }

        function aG(bc) { var be = void 0 !== bc.identifier ? bc.identifier : 0,
                bd = ac(be); return null === bd && (bd = ah(be, bc)), bd.last.x = bd.end.x, bd.last.y = bd.end.y, bd.end.x = bc.pageX || bc.clientX, bd.end.y = bc.pageY || bc.clientY, bd }

        function ac(bc) { return aP[bc] || null }

        function aH(bc, bd) { bc != m && (bd = Math.max(bd, aS(bc)), M[bc].distance = bd) }

        function aS(bc) { return M[bc] ? M[bc].distance : void 0 }

        function aa() { var bc = {}; return bc[p] = au(p), bc[o] = au(o), bc[e] = au(e), bc[x] = au(x), bc }

        function au(bc) { return { direction: bc, distance: 0 } }

        function aM() { return a3 - T }

        function ar(bf, be) { var bd = Math.abs(bf.x - be.x),
                bc = Math.abs(bf.y - be.y); return Math.round(Math.sqrt(bd * bd + bc * bc)) }

        function ba(bc, bd) { var be = bd / bc * 1; return be.toFixed(2) }

        function ap() { return 1 > G ? z : c }

        function aR(bd, bc) { return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2))) }

        function aF(bf, bd) { var bc = bf.x - bd.x,
                bh = bd.y - bf.y,
                be = Math.atan2(bh, bc),
                bg = Math.round(180 * be / Math.PI); return 0 > bg && (bg = 360 - Math.abs(bg)), bg }

        function aL(bd, bc) { if (aT(bd, bc)) { return m } var be = aF(bd, bc); return 45 >= be && be >= 0 ? p : 360 >= be && be >= 315 ? p : be >= 135 && 225 >= be ? o : be > 45 && 135 > be ? x : e }

        function aq() { var bc = new Date; return bc.getTime() }

        function aY(bc) { bc = f(bc); var be = bc.offset(),
                bd = { left: be.left, right: be.left + bc.outerWidth(), top: be.top, bottom: be.top + bc.outerHeight() }; return bd }

        function E(bc, bd) { return bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom }

        function aT(bc, bd) { return bc.x == bd.x && bc.y == bd.y } var at = f.extend({}, at),
            ay = a || d || !at.fallbackToMouseEvents,
            J = ay ? d ? v ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            aw = ay ? d ? v ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            U = ay ? d ? v ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            S = ay ? d ? "mouseleave" : null : "mouseleave",
            aC = d ? v ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            af = 0,
            aO = null,
            a2 = null,
            ab = 0,
            a1 = 0,
            aZ = 0,
            G = 1,
            ao = 0,
            aI = 0,
            M = null,
            aQ = f(a5),
            Z = "start",
            W = 0,
            aP = {},
            T = 0,
            a3 = 0,
            a6 = 0,
            ax = 0,
            N = 0,
            aV = null,
            ae = null; try { aQ.bind(J, aK), aQ.bind(aC, a9) } catch (ai) { f.error("events not supported " + J + "," + aC + " on jQuery.swipe") }
        this.enable = function() { return this.disable(), aQ.bind(J, aK), aQ.bind(aC, a9), aQ }, this.disable = function() { return aJ(), aQ }, this.destroy = function() { aJ(), aQ.data(B, null), aQ = null }, this.option = function(bd, bc) { if ("object" == typeof bd) { at = f.extend(at, bd) } else { if (void 0 !== at[bd]) { if (void 0 === bc) { return at[bd] }
                    at[bd] = bc } else { if (!bd) { return at }
                    f.error("Option " + bd + " does not exist on jQuery.swipe.options") } } return null } } var y = "1.6.18",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        z = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        A = "tap",
        j = "doubletap",
        b = "longtap",
        C = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !a,
        d = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !a,
        B = "TouchSwipe",
        n = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: ".noSwipe", preventDefaultEvents: !0 };
    f.fn.swipe = function(G) { var F = f(this),
            E = F.data(B); if (E && "string" == typeof G) { if (E[G]) { return E[G].apply(E, Array.prototype.slice.call(arguments, 1)) }
            f.error("Method " + G + " does not exist on jQuery.swipe") } else { if (E && "object" == typeof G) { E.option.apply(E, arguments) } else { if (!(E || "object" != typeof G && G)) { return w.apply(this, arguments) } } } return F }, f.fn.swipe.version = y, f.fn.swipe.defaults = n, f.fn.swipe.phases = { PHASE_START: g, PHASE_MOVE: k, PHASE_END: h, PHASE_CANCEL: q }, f.fn.swipe.directions = { LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: z }, f.fn.swipe.pageScroll = { NONE: m, HORIZONTAL: C, VERTICAL: u, AUTO: s }, f.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: i } });
/*!
 * jQuery bootstrap 3 breakpoint check
 * Check the current visibility of bootstrap 3 breakpoints
 *
 * @example `$.isXs()` function alias for `$.isBreakpoint("xs")`
 * @example `$.isSm()` function alias for `$.isBreakpoint("sm")`
 * @example `$.isMd()` function alias for `$.isBreakpoint("md")`
 * @example `$.isLg()` function alias for `$.isBreakpoint("lg")`
 * @version 1.0.0
 * @copyright Jens A. (cakebake) and other contributors
 * @license Released under the MIT license
 */
;
! function(b) { b.isBreakpoint = function(a) { var f, e; return f = b("<div/>", { "class": "visible-" + a }).appendTo("body"), e = f.is(":visible"), f.remove(), e }, b.extend(b, { isXs: function() { return b.isBreakpoint("xs") }, isSm: function() { return b.isBreakpoint("sm") }, isMd: function() { return b.isBreakpoint("md") }, isLg: function() { return b.isBreakpoint("lg") } }) }(jQuery);
/*!
 * Gritter for jQuery
 * https://github.com/foxythemes/Gritter
 *
 * Copyright (c) 2015 Foxy Themes
 * Copyright (c) 2012 Jordan Boesch
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: July 28, 2015
 * Version: 1.7.5
 */
;
! function(a) { a.gritter = {}, a.gritter.options = { position: "", class_name: "", fade_in_speed: "medium", fade_out_speed: 1000, time: 6000 }, a.gritter.add = function(d) { try { return b.add(d || {}) } catch (c) { var e = "Gritter Error: " + c; "undefined" != typeof console && console.error ? console.error(e, d) : alert(e) } }, a.gritter.remove = function(d, c) { b.removeSpecific(d, c || {}) }, a.gritter.removeAll = function(c) { b.stop(c || {}) }; var b = { position: "", fade_in_speed: "", fade_out_speed: "", time: "", _custom_timer: 0, _item_count: 0, _is_setup: 0, _tpl_close: '<a class="gritter-close" href="#" tabindex="1">Close Notification</a>', _tpl_title: '<span class="gritter-title">[[title]]</span>', _tpl_item: '<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none" role="alert"><div class="gritter-item">[[image]]<div class="gritter-content [[class_name]]">[[close]][[title]]<p>[[text]]</p></div><div style="clear:both"></div></div></div>', _tpl_wrap: '<div id="gritter-notice-wrapper" class="gritter-main-wrapper"></div>', add: function(q) { if ("string" == typeof q && (q = { text: q }), null === q.text) { throw 'You must supply "text" parameter.' }
            this._is_setup || this._runSetup(); var d = q.title,
                g = q.text,
                h = q.image || "",
                z = q.sticky || !1,
                w = q.class_name || a.gritter.options.class_name,
                v = a.gritter.options.position,
                x = q.time || "";
            this._verifyWrapper(), this._item_count++; var e = this._item_count,
                k = this._tpl_item;
            a(["before_open", "after_open", "before_close", "after_close"]).each(function(c, f) { b["_" + f + "_" + e] = a.isFunction(q[f]) ? q[f] : function() {} }), this._custom_timer = 0, x && (this._custom_timer = x); var y = "" != h ? '<div class="gritter-img-container"><img src="' + h + '" class="gritter-image" /></div>' : "",
                t = "" != h ? "gritter-with-image" : "gritter-without-image"; if (d = d ? this._str_replace("[[title]]", d, this._tpl_title) : "", k = this._str_replace(["[[title]]", "[[text]]", "[[close]]", "[[image]]", "[[number]]", "[[class_name]]", "[[item_class]]"], [d, g, this._tpl_close, y, this._item_count, t, w], k), this["_before_open_" + e]() === !1) { return !1 }
            a("#gritter-notice-wrapper").addClass(v).append(k); var j = a("#gritter-item-" + this._item_count); return j.fadeIn(this.fade_in_speed, function() { b["_after_open_" + e](a(this)) }), z || this._setFadeTimer(j, e), a(j).bind("mouseenter mouseleave", function(c) { "mouseenter" == c.type ? z || b._restoreItemIfFading(a(this), e) : z || b._setFadeTimer(a(this), e), b._hoverState(a(this), c.type) }), a(j).find(".gritter-close").click(function() { return b.removeSpecific(e, {}, null, !0), !1 }), e }, _countRemoveWrapper: function(f, c, d) { c.remove(), this["_after_close_" + f](c, d), 0 == a(".gritter-item-wrapper").length && a("#gritter-notice-wrapper").remove() }, _fade: function(e, d, g, h) { var g = g || {},
                j = "undefined" != typeof g.fade ? g.fade : !0,
                f = g.speed || this.fade_out_speed,
                c = h;
            this["_before_close_" + d](e, c), h && e.unbind("mouseenter mouseleave"), j ? e.animate({ opacity: 0 }, f, function() { e.animate({ height: 0 }, 300, function() { b._countRemoveWrapper(d, e, c) }) }) : this._countRemoveWrapper(d, e) }, _hoverState: function(c, d) { "mouseenter" == d ? (c.addClass("hover"), c.find(".gritter-close").show()) : (c.removeClass("hover"), c.find(".gritter-close").hide()) }, removeSpecific: function(f, c, d, g) { if (!d) { var d = a("#gritter-item-" + f) }
            this._fade(d, f, c || {}, g) }, _restoreItemIfFading: function(c, d) { clearTimeout(this["_int_id_" + d]), c.stop().css({ opacity: "", height: "" }) }, _runSetup: function() { for (opt in a.gritter.options) { this[opt] = a.gritter.options[opt] }
            this._is_setup = 1 }, _setFadeTimer: function(d, c) { var e = this._custom_timer ? this._custom_timer : this.time;
            this["_int_id_" + c] = setTimeout(function() { b._fade(d, c) }, e) }, stop: function(f) { var c = a.isFunction(f.before_close) ? f.before_close : function() {},
                d = a.isFunction(f.after_close) ? f.after_close : function() {},
                g = a("#gritter-notice-wrapper");
            c(g), g.fadeOut(function() { a(this).remove(), d() }) }, _str_replace: function(C, x, v, d) { var h = 0,
                j = 0,
                D = "",
                z = "",
                y = 0,
                A = 0,
                g = [].concat(C),
                q = [].concat(x),
                B = v,
                w = q instanceof Array,
                k = B instanceof Array; for (B = [].concat(B), d && (this.window[d] = 0), h = 0, y = B.length; y > h; h++) { if ("" !== B[h]) { for (j = 0, A = g.length; A > j; j++) { D = B[h] + "", z = w ? void 0 !== q[j] ? q[j] : "" : q[0], B[h] = D.split(g[j]).join(z), d && B[h] !== D && (this.window[d] += (D.length - B[h].length) / g[j].length) } } } return k ? B : B[0] }, _verifyWrapper: function() { 0 == a("#gritter-notice-wrapper").length && a("body").append(this._tpl_wrap) } } }(jQuery);
/*! nanoScrollerJS - v0.8.7 - 2015
 * http://jamesflorentino.github.com/nanoScrollerJS/
 * Copyright (c) 2015 James Florentino; Licensed MIT */
(function(a) { if (typeof define === "function" && define.amd) { return define(["jquery"], function(b) { return a(b, window, document) }) } else { if (typeof exports === "object") { return module.exports = a(require("jquery"), window, document) } else { return a(jQuery, window, document) } } })(function(g, o, B) { var c, r, j, F, d, s, e, a, t, E, A, m, G, H, b, q, z, D, k, f, v, p, u, x, i, l, C, w, n, y, h;
    u = { paneClass: "nano-pane", sliderClass: "nano-slider", contentClass: "nano-content", iOSNativeScrolling: false, preventPageScrolling: false, disableResize: false, alwaysVisible: false, flashDelay: 1500, sliderMinHeight: 20, sliderMaxHeight: null, documentContext: null, windowContext: null };
    D = "scrollbar";
    z = "scroll";
    t = "mousedown";
    E = "mouseenter";
    A = "mousemove";
    G = "mousewheel";
    m = "mouseup";
    q = "resize";
    d = "drag";
    s = "enter";
    f = "up";
    b = "panedown";
    j = "DOMMouseScroll";
    F = "down";
    v = "wheel";
    e = "keydown";
    a = "keyup";
    k = "touchmove";
    c = o.navigator.appName === "Microsoft Internet Explorer" && /msie 7./i.test(o.navigator.appVersion) && o.ActiveXObject;
    r = null;
    C = o.requestAnimationFrame;
    p = o.cancelAnimationFrame;
    n = B.createElement("div").style;
    h = (function() { var K, J, N, M, L, I;
        M = ["t", "webkitT", "MozT", "msT", "OT"]; for (K = L = 0, I = M.length; L < I; K = ++L) { N = M[K];
            J = M[K] + "ransform"; if (J in n) { return M[K].substr(0, M[K].length - 1) } } return false })();
    y = function(I) { if (h === false) { return false } if (h === "") { return I } return h + I.charAt(0).toUpperCase() + I.substr(1) };
    w = y("transform");
    i = w !== false;
    x = function() { return 0 };
    l = function() { var K, J, I;
        J = o.navigator.userAgent;
        K = /(?=.+Mac OS X)(?=.+Firefox)/.test(J); if (!K) { return false }
        I = /Firefox\/\d{2}\./.exec(J); if (I) { I = I[0].replace(/\D+/g, "") } return K && +I > 23 };
    H = (function() {
        function I(K, J) { this.el = K;
            this.options = J;
            r || (r = x());
            this.$el = g(this.el);
            this.doc = g(this.options.documentContext || B);
            this.win = g(this.options.windowContext || o);
            this.body = this.doc.find("body");
            this.$content = this.$el.children("." + this.options.contentClass);
            this.$content.attr("tabindex", this.options.tabIndex || 0);
            this.content = this.$content[0];
            this.previousPosition = 0; if (this.options.iOSNativeScrolling && (this.el.style.WebkitOverflowScrolling != null)) { this.nativeScrolling() } else { this.generate() }
            this.createEvents();
            this.addEvents();
            this.reset() }
        I.prototype.preventScrolling = function(K, J) { if (!this.isActive) { return } if (K.type === j) { if (J === F && K.originalEvent.detail > 0 || J === f && K.originalEvent.detail < 0) { K.preventDefault() } } else { if (K.type === G) { if (!K.originalEvent || !K.originalEvent.wheelDelta) { return } if (J === F && K.originalEvent.wheelDelta < 0 || J === f && K.originalEvent.wheelDelta > 0) { K.preventDefault() } } } };
        I.prototype.nativeScrolling = function() { this.$content.css({ WebkitOverflowScrolling: "touch" });
            this.iOSNativeScrolling = true;
            this.isActive = true };
        I.prototype.updateScrollValues = function() { var J, K;
            J = this.content;
            this.maxScrollTop = J.scrollHeight - J.clientHeight;
            this.prevScrollTop = this.contentScrollTop || 0;
            this.contentScrollTop = J.scrollTop;
            K = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same";
            this.previousPosition = this.contentScrollTop; if (K !== "same") { this.$el.trigger("update", { position: this.contentScrollTop, maximum: this.maxScrollTop, direction: K }) } if (!this.iOSNativeScrolling) { this.maxSliderTop = this.paneHeight - this.sliderHeight;
                this.sliderTop = this.maxScrollTop === 0 ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop } };
        I.prototype.setOnScrollStyles = function() { var J; if (i) { J = {};
                J[w] = "translate(0, " + this.sliderTop + "px)" } else { J = { top: this.sliderTop } } if (C) { if (p && this.scrollRAF) { p(this.scrollRAF) }
                this.scrollRAF = C((function(K) { return function() { K.scrollRAF = null; return K.slider.css(J) } })(this)) } else { this.slider.css(J) } };
        I.prototype.createEvents = function() { this.events = { down: (function(J) { return function(K) { J.isBeingDragged = true;
                        J.offsetY = K.pageY - J.slider.offset().top; if (!J.slider.is(K.target)) { J.offsetY = 0 }
                        J.pane.addClass("active");
                        J.doc.bind(A, J.events[d]).bind(m, J.events[f]);
                        J.body.bind(E, J.events[s]); return false } })(this), drag: (function(J) { return function(K) { J.sliderY = K.pageY - J.$el.offset().top - J.paneTop - (J.offsetY || J.sliderHeight * 0.5);
                        J.scroll(); if (J.contentScrollTop >= J.maxScrollTop && J.prevScrollTop !== J.maxScrollTop) { J.$el.trigger("scrollend") } else { if (J.contentScrollTop === 0 && J.prevScrollTop !== 0) { J.$el.trigger("scrolltop") } } return false } })(this), up: (function(J) { return function(K) { J.isBeingDragged = false;
                        J.pane.removeClass("active");
                        J.doc.unbind(A, J.events[d]).unbind(m, J.events[f]);
                        J.body.unbind(E, J.events[s]); return false } })(this), resize: (function(J) { return function(K) { J.reset() } })(this), panedown: (function(J) { return function(K) { J.sliderY = (K.offsetY || K.originalEvent.layerY) - (J.sliderHeight * 0.5);
                        J.scroll();
                        J.events.down(K); return false } })(this), scroll: (function(J) { return function(K) { J.updateScrollValues(); if (J.isBeingDragged) { return } if (!J.iOSNativeScrolling) { J.sliderY = J.sliderTop;
                            J.setOnScrollStyles() } if (K == null) { return } if (J.contentScrollTop >= J.maxScrollTop) { if (J.options.preventPageScrolling) { J.preventScrolling(K, F) } if (J.prevScrollTop !== J.maxScrollTop) { J.$el.trigger("scrollend") } } else { if (J.contentScrollTop === 0) { if (J.options.preventPageScrolling) { J.preventScrolling(K, f) } if (J.prevScrollTop !== 0) { J.$el.trigger("scrolltop") } } } } })(this), wheel: (function(J) { return function(K) { var L; if (K == null) { return }
                        L = K.delta || K.wheelDelta || (K.originalEvent && K.originalEvent.wheelDelta) || -K.detail || (K.originalEvent && -K.originalEvent.detail); if (L) { J.sliderY += -L / 3 }
                        J.scroll(); return false } })(this), enter: (function(J) { return function(L) { var K; if (!J.isBeingDragged) { return } if ((L.buttons || L.which) !== 1) { return (K = J.events)[f].apply(K, arguments) } } })(this) } };
        I.prototype.addEvents = function() { var J;
            this.removeEvents();
            J = this.events; if (!this.options.disableResize) { this.win.bind(q, J[q]) } if (!this.iOSNativeScrolling) { this.slider.bind(t, J[F]);
                this.pane.bind(t, J[b]).bind("" + G + " " + j, J[v]) }
            this.$content.bind("" + z + " " + G + " " + j + " " + k, J[z]) };
        I.prototype.removeEvents = function() { var J;
            J = this.events;
            this.win.unbind(q, J[q]); if (!this.iOSNativeScrolling) { this.slider.unbind();
                this.pane.unbind() }
            this.$content.unbind("" + z + " " + G + " " + j + " " + k, J[z]) };
        I.prototype.generate = function() { var L, M, N, K, P, J, O;
            K = this.options;
            J = K.paneClass, O = K.sliderClass, L = K.contentClass; if (!(P = this.$el.children("." + J)).length && !P.children("." + O).length) { this.$el.append('<div class="' + J + '"><div class="' + O + '" /></div>') }
            this.pane = this.$el.children("." + J);
            this.slider = this.pane.find("." + O); if (r === 0 && l()) { N = o.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, "");
                M = { right: -14, paddingRight: +N + 14 } } else { if (r) { M = { right: -r };
                    this.$el.addClass("has-scrollbar") } } if (M != null) { this.$content.css(M) } return this };
        I.prototype.restore = function() { this.stopped = false; if (!this.iOSNativeScrolling) { this.pane.show() }
            this.addEvents() };
        I.prototype.reset = function() { var P, R, T, U, K, L, J, N, M, Q, S, O; if (this.iOSNativeScrolling) { this.contentHeight = this.content.scrollHeight; return } if (!this.$el.find("." + this.options.paneClass).length) { this.generate().stop() } if (this.stopped) { this.restore() }
            P = this.content;
            U = P.style;
            K = U.overflowY; if (c) { this.$content.css({ height: this.$content.height() }) }
            R = P.scrollHeight + r;
            Q = parseInt(this.$el.css("max-height"), 10); if (Q > 0) { this.$el.height("");
                this.$el.height(P.scrollHeight > Q ? Q : P.scrollHeight) }
            J = this.pane.outerHeight(false);
            M = parseInt(this.pane.css("top"), 10);
            L = parseInt(this.pane.css("bottom"), 10);
            N = J + M + L;
            O = Math.round(N / R * J); if (O < this.options.sliderMinHeight) { O = this.options.sliderMinHeight } else { if ((this.options.sliderMaxHeight != null) && O > this.options.sliderMaxHeight) { O = this.options.sliderMaxHeight } } if (K === z && U.overflowX !== z) { O += r }
            this.maxSliderTop = N - O;
            this.contentHeight = R;
            this.paneHeight = J;
            this.paneOuterHeight = N;
            this.sliderHeight = O;
            this.paneTop = M;
            this.slider.height(O);
            this.events.scroll();
            this.pane.show();
            this.isActive = true; if ((P.scrollHeight === P.clientHeight) || (this.pane.outerHeight(true) >= P.scrollHeight && K !== z)) { this.pane.hide();
                this.isActive = false } else { if (this.el.clientHeight === P.scrollHeight && K === z) { this.slider.hide() } else { this.slider.show() } }
            this.pane.css({ opacity: (this.options.alwaysVisible ? 1 : ""), visibility: (this.options.alwaysVisible ? "visible" : "") });
            T = this.$content.css("position"); if (T === "static" || T === "relative") { S = parseInt(this.$content.css("right"), 10); if (S) { this.$content.css({ right: "", marginRight: S }) } } return this };
        I.prototype.scroll = function() { if (!this.isActive) { return }
            this.sliderY = Math.max(0, this.sliderY);
            this.sliderY = Math.min(this.maxSliderTop, this.sliderY);
            this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop); if (!this.iOSNativeScrolling) { this.updateScrollValues();
                this.setOnScrollStyles() } return this };
        I.prototype.scrollBottom = function(J) { if (!this.isActive) { return }
            this.$content.scrollTop(this.contentHeight - this.$content.height() - J).trigger(G);
            this.stop().restore(); return this };
        I.prototype.scrollTop = function(J) { if (!this.isActive) { return }
            this.$content.scrollTop(+J).trigger(G);
            this.stop().restore(); return this };
        I.prototype.scrollTo = function(J) { if (!this.isActive) { return }
            this.scrollTop(this.$el.find(J).get(0).offsetTop); return this };
        I.prototype.stop = function() { if (p && this.scrollRAF) { p(this.scrollRAF);
                this.scrollRAF = null }
            this.stopped = true;
            this.removeEvents(); if (!this.iOSNativeScrolling) { this.pane.hide() } return this };
        I.prototype.destroy = function() { if (!this.stopped) { this.stop() } if (!this.iOSNativeScrolling && this.pane.length) { this.pane.remove() } if (c) { this.$content.height("") }
            this.$content.removeAttr("tabindex"); if (this.$el.hasClass("has-scrollbar")) { this.$el.removeClass("has-scrollbar");
                this.$content.css({ right: "" }) } return this };
        I.prototype.flash = function() { if (this.iOSNativeScrolling) { return } if (!this.isActive) { return }
            this.reset();
            this.pane.addClass("flashed");
            setTimeout((function(J) { return function() { J.pane.removeClass("flashed") } })(this), this.options.flashDelay); return this }; return I })();
    g.fn.nanoScroller = function(I) { return this.each(function() { var J, K; if (!(K = this.nanoscroller)) { J = g.extend({}, u, I);
                this.nanoscroller = K = new H(this, J) } if (I && typeof I === "object") { g.extend(K.options, I); if (I.scrollBottom != null) { return K.scrollBottom(I.scrollBottom) } if (I.scrollTop != null) { return K.scrollTop(I.scrollTop) } if (I.scrollTo) { return K.scrollTo(I.scrollTo) } if (I.scroll === "bottom") { return K.scrollBottom(0) } if (I.scroll === "top") { return K.scrollTop(0) } if (I.scroll && I.scroll instanceof g) { return K.scrollTo(I.scroll) } if (I.stop) { return K.stop() } if (I.destroy) { return K.destroy() } if (I.flash) { return K.flash() } } return K.reset() }) };
    g.fn.nanoScroller.Constructor = H });
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(a) { "use strict";

    function b() { var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1 }
    a.fn.emulateTransitionEnd = function(b) { var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
            b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
        e.attr("data-target") || d.preventDefault(); var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

    function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) }

    function d(b) { return this.each(function() { var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                    g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), + function(a) { "use strict";

    function b(b, d) { return this.each(function() { var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
            e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left) }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
            c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight; if (j) { var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
            j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this }, c.prototype.fixTitle = function() { var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
            c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null }) }; var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this } }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
            b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) {
    "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) { return this.each(function() { var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }
    b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
            c.call(b, b.data()) }) })
}(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height(); if (null != c && "top" == this.affixed) return e < c && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom"; var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b; return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
            b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);
/*!
 * vClock v2.3
 * Copyright 2015-2021 Comfort Software Group
 * All rights reserved
 */
;
var isEmbed = $("body").hasClass("embed");

function langInit() { var a = ""; if (langC.swOff !== "") { a += ".switch-button label:before {content: '" + langC.swOff + "'}" } if (langC.swOn !== "") { a += ".switch-button input[type='checkbox']:checked + span label:before {content: '" + langC.swOn + "'}" } if (langC.swYes !== "") { a += ".switch-button.switch-button-yesno input[type='checkbox']:checked + span label:before {content: '" + langC.swYes + "'}" } if (langC.swNo !== "") { a += ".switch-button.switch-button-yesno label:before {content: '" + langC.swNo + "'}" } if (a !== "") { $("body").append("<style>" + a + "</style>") } }
langInit();
var dayLC = langC.day.toLowerCase();
var daysLC = langC.days.toLowerCase();
(function(C) { var A, j = {},
        c = window,
        h = console,
        g = Math,
        q = "postMessage",
        b = 0,
        a = "hasOwnProperty",
        t = [].slice,
        u = "fail",
        B = c.Worker;

    function n() { do { b = 2147483647 > b ? b + 1 : 0 } while (j[a](b)); return b } if (!/MSIE 10/i.test(navigator.userAgent)) { try { C = c.URL.createObjectURL(new Blob(["var f={},p=postMessage,r='hasOwnProperty';onmessage=function(e){var d=e.data,i=d.i,t=d[r]('t')?d.t:0;switch(d.n){case'a':f[i]=setInterval(function(){p(i)},t);break;case'b':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case'c':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case'd':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}"])) } catch (k) {} } if (typeof(B) !== "undefined") { try { A = new B(C);
            c.setInterval = function(f, e) { var d = n();
                j[d] = { c: f, p: t.call(arguments, 2) };
                A[q]({ n: "a", i: d, t: e }); return d };
            c.clearInterval = function(d) { if (j[a](d)) { delete j[d], A[q]({ n: "b", i: d }) } };
            c.setTimeout = function(f, e) { var d = n();
                j[d] = { c: f, p: t.call(arguments, 2), t: !0 };
                A[q]({ n: "c", i: d, t: e }); return d };
            c.clearTimeout = function(d) { if (j[a](d)) { delete j[d], A[q]({ n: "d", i: d }) } };
            A.onmessage = function(l) { var f = l.data,
                    o, m; if (j[a](f)) { m = j[f];
                    o = m.c; if (m[a]("t")) { delete j[f] } } if (typeof(o) == "string") { try { o = new Function(o) } catch (d) {} } if (typeof(o) == "function") { o.apply(c, m.p) } } } catch (k) { h.log(u) } } else { h.log(u) } })("vClockTimerWorker");
var configC = { themeNightMode: false, themeColorId: 0, themeDigitalFont: true, themeFullScreen: false, clock12hour: true, clockDateVisible: true, buttonsVisible: true, alarmFontSizeId: 1, alarmHash: "", alarmAudioCode: "bells", alarmAudioLoop: true, timerFontSizeId: 1, timerHash: "", timerAudioCode: "xylophone", timerAudioLoop: true, swFontSizeId: 1, swHash: "", swTimeFormat: 1, clockFontSizeId: 1, clockPanels: "", audioPlayDuration: 600000, audioCustomName: "", restoreCommon: function() { if (isEmbed || typeof localStorage === "undefined") { return }
        this.clock12hour = langC.is12Default;
        this.restore("themeNightMode");
        this.restore("themeColorId");
        this.restore("clock12hour");
        this.restore("clockDateVisible");
        this.restore("themeDigitalFont");
        this.restore("audioCustomName") }, restoreAlarm: function() { if (isEmbed || typeof localStorage === "undefined") { return }
        this.restore("alarmFontSizeId");
        this.restore("alarmHash");
        this.restore("alarmAudioCode");
        this.restore("alarmAudioLoop") }, restoreTimer: function() { if (isEmbed || typeof localStorage === "undefined") { return }
        this.restore("timerFontSizeId");
        this.restore("timerHash");
        this.restore("timerAudioCode");
        this.restore("timerAudioLoop") }, restoreStopwatch: function() { if (isEmbed || typeof localStorage === "undefined") { return }
        this.restore("swFontSizeId");
        this.restore("swHash");
        this.restore("swTimeFormat") }, restoreClock: function() { if (isEmbed || typeof localStorage === "undefined") { return }
        this.restore("clockFontSizeId");
        this.restore("clockPanels") }, save: function(a) { if (isEmbed || typeof localStorage === "undefined") { return } try { localStorage.setItem(a, this[a]) } catch (b) { console.log(b) } }, restore: function(a) { var c = localStorage.getItem(a); if (c === null) { return } var b = typeof this[a];
        this[a] = (b === "boolean") ? (c === "true") : ((b === "number") ? parseFloat(c) : c) } };
var DIGIT_COLORS = [
    ["#555", "#eee"],
    ["#EF6C00", "#FF9500"],
    ["#c62828", "#d32f2f"],
    ["#2E7D32", "#388E3C"],
    ["#1565C0", "#1976D2"]
];
var MIN_LABEL_HEIGHT = 30;
var MIN_TIME_HEIGHT = 70;
var MIN_FONT_SIZE = 10;
var MIN_TITLE_FONT_SIZE = isEmbed ? 14 : 18;
var MIN_DATE_FONT_SIZE = isEmbed ? 12 : 16;
var MIN_BOTTOM_MARGIN = isEmbed ? 0 : 30;
var FONT_SIZES = [74, 128, 220, 700];
var FONT_SIZE_LEN = 3;
var ORIGINAL_TITLE = document.title;
var PRIMARY_COLOR = getStyleValue("color", ".text-primary");
(function() { window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    window.isIOS = isMobile && /iPhone|iPad|iPod/i.test(navigator.userAgent);
    window.isWindows = /Windows/i.test(navigator.userAgent);
    window.isOperaMini = /Opera Mini/i.test(navigator.userAgent); if (!isEmbed) { try { if (window.matchMedia("(prefers-color-scheme: dark)").matches) { configC.themeNightMode = true;
                configC.themeColorId = D() } } catch (B) {} }
    configC.restoreCommon(); if (isOperaMini) { $(".am-left-sidebar, .am-right-sidebar").hide();
        $(".page-title").css("min-height", "40px");
        $(".am-toggle-top-header-menu>.ci-angle-down").html("≡").removeClass("icon ci-angle-down");
        $(".am-toggle-top-header-menu").css("min-height", "35px").css("font-size", "34px");
        $(".ci-angle-down").removeClass("ci-angle-down");
        $(".navbar-nav>li, .dropdown-menu>li").css("min-height", "30px"); if ($(window).width() < 768) { $(".dropdown-menu>li> a").css("color", "#fff");
            $(".dropdown-menu").css("color", "#777").removeClass("dropdown-menu") }
        $(".icon, .icon-bar, .am-icons-nav, .panel-tools, .tools").remove() } if (window.navigator.userAgent.indexOf("MSIE ") > 0) { configC.themeDigitalFont = false;
        $("#group-dt-check").hide();
        $("#group-dt-radio").removeClass("hidden-xs") }
    $("head").append('<meta name="theme-color" content="' + PRIMARY_COLOR + '">');
    b();
    a();
    $("#switch-night-mode").prop("checked", configC.themeNightMode).change(function() { configC.themeNightMode = $("#switch-night-mode").prop("checked");
        a() });
    $("#btn-night-mode").click(function() { configC.themeNightMode = !configC.themeNightMode;
        configC.themeColorId = D();
        $("#switch-night-mode").prop("checked", configC.themeNightMode);
        f();
        a() });
    $(".am-toggle-right-sidebar").click(function() { f() });
    window.setDigitFontNames = z;

    function z() { if (configC.themeDigitalFont) { $(".digit").addClass("font-digit");
            $(".digit-text").addClass("font-digit-text"); if (langC.am != "AM") { $("#lbl-noon").css("position", "relative").css("top", "-6%") } } else { $(".digit").removeClass("font-digit");
            $(".digit-text").removeClass("font-digit-text"); if (langC.am != "AM") { $("#lbl-noon").css("position", "").css("top", "") } } }
    window.getSizeDT = h;

    function h(e) { return Math.round(e / (e > 80 ? 4 : (e > 40 ? 3 : 2))) }
    window.setColors = a;

    function a() { if (configC.themeColorId >= DIGIT_COLORS.length) { configC.themeColorId = DIGIT_COLORS.length - 1 } if (configC.themeColorId < 0) { configC.themeColorId = 0 } if (configC.themeNightMode) { $("html").addClass("dark-theme") } else { $("html").removeClass("dark-theme") } if (!isEmbed) { document.cookie = "dark-theme=" + configC.themeNightMode + "; path=/; max-age=63072000" }
        $("#color-style").html(".colored {color:" + DIGIT_COLORS[configC.themeColorId][configC.themeNightMode ? 1 : 0] + "!important;} ");
        k();
        $(".btn-digit-color").removeClass("ci-circle ci-checkmark-outline"); for (var e = 0; e < DIGIT_COLORS.length; e++) { $("#digit-color-" + e).removeClass("ci-circle ci-checkmark-outline").addClass(configC.themeColorId == e ? "ci-checkmark-outline" : "ci-circle") }
        configC.save("themeNightMode");
        configC.save("themeColorId") }

    function k() { if (isEmbed) { return }
        $("meta[name='theme-color']").attr("content", configC.themeNightMode ? "#000" : (configC.themeFullScreen ? "#fff" : PRIMARY_COLOR)) }
    window.getDefaultColorId = D;

    function D() { return configC.themeNightMode ? 1 : 0 }
    window.setSelectedColor = t;

    function t(e) { if (e === undefined) { return }
        e.css("background-color", "#0090dd");
        e.find(".colored").attr("style", function(G, H) { return (H || "") + ";color: #fff !important;" }) }
    window.setDefaultColor = n;

    function n(e) { if (e === undefined) { return }
        e.css("background-color", "");
        e.find(".colored").css("color", "") }
    window.fadeHighlight = u;

    function u(H, e) { if (H === undefined) { return }
        H.css("background-color", "hsl(206,100%,50%)"); var I = e; for (var G = 50; 0 <= G && G <= 100; G += (configC.themeNightMode ? -1 : 1)) { I += 10;
            (function(L, J, K) { setTimeout(function() { if (J === 0 || J === 100) { n(L) } else { L.css("background-color", "hsl(206,100%," + J + "%)") } }, K) })(H, G, I) } }

    function b() { var G = ""; for (var e = 0; e < DIGIT_COLORS.length; e++) { G += '<span class="btn-digit-color icon ci-circle" style="color: ' + (e == 0 ? "#eee" : DIGIT_COLORS[e][1]) + '" id="digit-color-' + e + '"></span>' }
        $("#pnl-colors").html(G);
        $(".btn-digit-color").click(function() { configC.themeColorId = parseInt($(this)[0].id.split("-")[2], 10);
            a() }) }
    window.processURIParam = l;

    function l(G, e) { switch (G) {
            case "theme":
                configC.themeNightMode = (parseInt(e, 10) === 1);
                $("#switch-night-mode").prop("checked", configC.themeNightMode);
                configC.themeColorId = D();
                a(); break;
            case "color":
                configC.themeColorId = parseInt(e, 10);
                a(); break;
            case "digital":
                C(parseInt(e, 10) === 1);
                $("#switch-digital").prop("checked", configC.themeDigitalFont); break;
            case "ampm":
                y(parseInt(e, 10) === 1);
                $("#switch-12hour").prop("checked", configC.clock12hour); break;
            case "showdate":
                E(parseInt(e, 10) === 1);
                $("#switch-date").prop("checked", configC.clockDateVisible); break;
            case "showbuttons":
                r(parseInt(e, 10) === 1); break;
            case "format":
                d(parseInt(e, 10));
                $("#select-format-time").val(configC.swTimeFormat); break } }

    function C(e) { if (configC.themeDigitalFont === e) { return }
        configC.themeDigitalFont = e;
        configC.save("themeDigitalFont"); if (typeof refreshSettings === "function") { refreshSettings() } }
    $("#switch-digital").prop("checked", configC.themeDigitalFont).change(function() { C($("#switch-digital").prop("checked")) });

    function y(e) { if (configC.clock12hour === e) { return }
        configC.clock12hour = e;
        configC.save("clock12hour"); if (typeof refreshSettings === "function") { refreshSettings() } }
    $("#switch-12hour").prop("checked", configC.clock12hour).change(function() { y($("#switch-12hour").prop("checked")) });

    function E(e) { if (configC.clockDateVisible === e) { return }
        configC.clockDateVisible = e;
        configC.save("clockDateVisible"); if (typeof refreshSettings === "function") { refreshSettings() } }
    $("#switch-date").prop("checked", configC.clockDateVisible).change(function() { E($("#switch-date").prop("checked")) });

    function r(e) { if (configC.buttonsVisible === e) { return }
        configC.buttonsVisible = e; if (typeof refreshSettings === "function") { refreshSettings() } }

    function d(e) { if (configC.swTimeFormat === e) { return }
        configC.swTimeFormat = e;
        configC.save("swTimeFormat"); if (typeof refreshSettings === "function") { refreshSettings() } }
    $("#select-format-time").change(function() { d(parseInt($("#select-format-time").val(), 10)); if (typeof onMainResize === "function") { onMainResize() } });
    $("#btn-options-close").click(function(G) { $(document).trigger("mousedown", G) });

    function o(G) { if (isEmbed) { return }
        G.tooltip({ trigger: "hover", container: "body" }) } if (!isEmbed) { o($("[data-toggle='tooltip'],.btn-share")) }
    window.hideTooltips = f;

    function f() { $(".tooltip").hide() }
    $(document).on("fullscreenchange", A).on("webkitfullscreenchange", A).on("mozfullscreenchange", A).on("MSFullscreenChange", A);
    $("#btn-full-screen").click(function() { f(); if (configC.themeFullScreen) { return } var e = $(".main-content"); var G = e.detach();
        $(".am-wrapper, .am-footer").hide();
        $("#pnl-full-screen").show().append(G);
        $("#pnl-description,#pnl-links,#pnl-share,#btn-tool-share").hide();
        e.css("background-color", configC.themeNightMode ? "#000" : "#fff");
        k();
        $("#btn-full-screen").hide();
        $("#btn-full-screen-exit").show(); var H = e[0]; if (H.requestFullscreen) { H.requestFullscreen() } else { if (H.webkitRequestFullscreen) { H.webkitRequestFullscreen() } else { if (H.mozRequestFullScreen) { H.mozRequestFullScreen() } else { if (H.msRequestFullscreen) { H.msRequestFullscreen() } } } }
        configC.themeFullScreen = true;
        $(document).trigger("resize");
        setTimeout(function() { $(document).trigger("resize") }, 1000) });
    $("#btn-full-screen-exit").click(function() { f(); if (!configC.themeFullScreen) { return } var e = $(".main-content"); var G = e.detach();
        $("#pnl-full-screen").hide();
        $(".am-content").append(G);
        $(".am-wrapper, .am-footer").show();
        $("#pnl-description,#pnl-links,#pnl-share,#btn-tool-share").show();
        e.css("background-color", "");
        k();
        $("#btn-full-screen-exit").hide();
        $("#btn-full-screen").show();
        closeAllNotifications();
        configC.themeFullScreen = false;
        $(document).trigger("resize") });
    window.cancelFullScreen = s;

    function s() { if (document.cancelFullscreen) { document.cancelFullscreen() } else { if (document.webkitCancelFullScreen) { document.webkitCancelFullScreen() } else { if (document.mozFullScreen) { document.mozCancelFullScreen() } else { if (document.msExitFullscreen) { document.msExitFullscreen() } } } } }

    function A() { var e = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement; if (e !== undefined && e !== null) { $(".main-content").css("width", "100%").css("height", "100%") } else { $(".main-content").css("width", "").css("height", "");
            $("#btn-full-screen-exit").trigger("click") }
        $(document).trigger("resize") } var c; var F; var m; var g = false;

    function x(G, e) { if (G !== undefined) { c = G } if (e !== undefined) { F = parseInt(e, 10) } if ((F < 0) && (c.selectedIndex <= 0)) { c.selectedIndex = c.length - 1 } else { if ((F > 0) && (c.selectedIndex >= c.length - 1)) { c.selectedIndex = 0 } else { c.selectedIndex += F } }
        clearTimeout(m);
        m = setTimeout(function() { x() }, (G === undefined ? 100 : 400)) }
    $(".btn-mp").on("touchstart mousedown", function(e) { if (e.type === "touchstart") { g = true } else { if (g) { return }
            g = false }
        x($("#edt-" + $(this)[0].id.split("-")[1])[0], $(this)[0].value) }).on("touchend mouseup mouseleave", function(e) { if (g && (e.type !== "touchend")) { return }
        clearTimeout(m) }); var q = $(".sidebar-elements > li > a", $(".am-left-sidebar"));
    q.on("mousedown touchstart", function() { q.css("background-color", "").css("color", "");
        $(this).css("background-color", "#afafaf").css("color", "#000") }).on("mouseout touchmove touchend", function() { $(this).css("background-color", "").css("color", "") }); if (!isEmbed) { setTimeout(function() { var G = $("#pnl-ne0n"); if (G.length && G.height() <= 30) { if (navigator.platform.toUpperCase().indexOf("MAC") > -1) {} else { if (isWindows) { var e = "alarm"; if (typeof vTimer !== "undefined") { e = "timer" } else { if (typeof vStopwatch !== "undefined") { e = "stopwatch" } else { if (typeof vClock !== "undefined") { e = "clock" } } }
                        G.load("/inf0/hot.php?type=" + e + "&hl=" + langC.id) } } } }, 5000) } var j = "a"; var p = "b";
    j += "to" + p; if (typeof window[j] === "function") { var v = window[j]("bWV0YVtuYW1lPWF1dGhvcl0="); var w = window[j]("Y29udGVu") + "t";
        v = $(v).attr(w); if (v === undefined || v !== window[j]("Q29tZm9ydCBTb2Z0d2FyZSBHcm91cA==")) { setTimeout(function() { $("div").remove() }, 5555) } } }());

function getDateText(c, b, a) { return getDateTextByParts(c.getDay(), c.getDate(), c.getMonth(), c.getFullYear(), b, a) }

function getDateTextByParts(b, d, f, e, c, a) { if (langC.isAsian) { return e + langC.year + langC.monthDelimiter + (f + 1) + langC.month + langC.dayDelimiter + d + (langC.id == "kr" ? langC.day + " " + langC.weekDays[b] : "日") } return (a ? (c ? langC.daysShort[b] + "  -  " : langC.weekDays[b] + (langC.weekDelimiter == " - " ? " &ndash; " : langC.weekDelimiter)) : "") + (langC.isMonthFirst ? (c ? langC.monthsShort[f] : langC.months[f]) + " " + d + ", " : d + langC.dayDelimiter + langC.months[f] + langC.monthDelimiter) + e }

function getTimeText(h, b) { var a = h.getHours(); var c = h.getMinutes(); var g = h.getSeconds(); var f; if (configC.clock12hour) { f = a < 12 ? langC.am : langC.pm;
        a = a % 12; if (a == 0) { a = 12 } } var e = intToStrHours(a) + ":" + intToStrTwo(c) + (b ? ":" + intToStrTwo(g) : ""); if (configC.clock12hour) { if (langC.rtlTime) { return f + " " + e } else { return e + " " + f } } return e }

function getTimerBetween(e, d, b) { var f = Math.abs(Math.floor((d - e) / 1000)) + 1; var c = Math.floor(f / 60);
    f = f % 60; var a = Math.floor(c / 60);
    c = c % 60; var g = Math.floor(a / 24);
    a = a % 24; if (b && a == 0 && g == 0) { if (c == 0) { return f + " sec" } else { return intToStrTwo(c) + ":" + intToStrTwo(f) } } else { return getCountDays(g) + intToStrTwo(a) + ":" + intToStrTwo(c) + ":" + intToStrTwo(f) } }

function getCountDays(a) { if (a == 0) { return "" } return a + " " + (a == 1 ? dayLC : daysLC) + " " }

function fillSelectHours(e) { if (e.length === 0) { return } var d = "<option>" + (configC.clock12hour ? (langC.rtlTime ? langC.am + " 12" : "12 " + langC.am) : "00") + "&nbsp;&nbsp;</option>"; for (var c = 1; c < 24; c++) { if (configC.clock12hour) { var f = (c < 12 ? langC.am : langC.pm); var a = c % 12; if (a === 0) { a = 12 }
            d += "<option>" + (langC.rtlTime ? f + " " + a : (a < 10 ? "&nbsp;&nbsp;" : "") + (a + " " + f)) + "</option>" } else { d += "<option>" + intToStrTwo(c) + "</option>" } } var b = e[0].selectedIndex;
    e.html(d); if (b > -1) { e[0].selectedIndex = b } }

function fillSelectInt(d, c) { if (d.length == 0) { return } var b = "<option>00&nbsp;&nbsp;</option>"; for (var a = 1; a < c; a++) { b += "<option>" + intToStrTwo(a) + "</option>" }
    d.html(b) }

function getFormattedLocalDT(b, c, a) { if (!a && b.getHours() == 0 && b.getMinutes() == 0 && b.getSeconds() == 0) { return b.getFullYear() + "-" + intToStrTwo(b.getMonth() + 1) + "-" + intToStrTwo(b.getDate()) } return b.getFullYear() + "-" + intToStrTwo(b.getMonth() + 1) + "-" + intToStrTwo(b.getDate()) + "T" + intToStrTwo(b.getHours()) + ":" + intToStrTwo(b.getMinutes()) + (c ? ":" + intToStrTwo(b.getSeconds()) : "") + (a ? "." + intToStrThree(b.getMilliseconds()) : "") }

function getLocalDTFromStr(a) { var b = a.split(/\D/); if (b.length < 3) { return new Date() } if (b.length < 5) { return new Date(b[0], b[1] - 1, b[2], 0, 0, 0, 0) } return new Date(b[0], b[1] - 1, b[2], b[3], b[4], (b.length < 6 ? 0 : b[5]), (b.length < 7 ? 0 : b[6])) }
var audioC = (function() { var l = new Array(langC.audioNames.length); var s; var j = $("#edt-audio"); var o = new Date(); var g; var w = "alarm"; var n = false; var v = false; var t = typeof localStorage !== "undefined" && !isMobile; if (j.length) { try { var y = document.createElement("audio");
            n = !!(y.canPlayType && y.canPlayType("audio/mpeg;").replace(/no/, "")) } catch (x) {} }

    function m(a) { w = a; if (j.length === 0) { return } if (!n) { $("#group-audio").hide(); return }
        z();
        $("#chk-audio-repeat").change(function() { configC[w + "AudioLoop"] = $("#chk-audio-repeat").prop("checked");
            configC.save(w + "AudioLoop") }); if (t) { $("#btn-audio-file").click(function() { $("#local-audio-file").click() });
            $("#local-audio-file").change(function() { b(this.files[0]) }) } else { $("#btn-audio-file").hide();
            $("#local-audio-file").hide() } }

    function d() { if (j.length === 0) { return } if (!n) { return } var A = 6; var a = configC[w + "AudioCode"]; if (a !== "custom") { for (var e = 0; e < langC.audioNames.length; e++) { if (langC.audioNames[e][1] === a) { A = e } } } else { if (configC.audioCustomName !== "") { A = langC.audioNames.length } }
        j.off("change");
        j[0].selectedIndex = A;
        j.change(q);
        q(true);
        $("#chk-audio-repeat").prop("checked", configC[w + "AudioLoop"]) }

    function z() { var e = ""; for (var a = 0; a < langC.audioNames.length; a++) { e += "<option>" + langC.audioNames[a][0] + "</option>" } if (configC.audioCustomName !== "") { e += "<option>" + configC.audioCustomName + "</option>" }
        j.html(e) }

    function b(e) { if (typeof e === "undefined") { return }
        configC.audioCustomName = e.name.replace(".mp3", ""); if (configC.audioCustomName === "") { return }
        configC.save("audioCustomName");
        f(); var a = new FileReader();
        a.onload = function(A) { try { localStorage.audioFile = a.result;
                z();
                l.length = langC.audioNames.length;
                l.length = langC.audioNames.length + 1;
                j[0].selectedIndex = l.length - 1;
                p(false) } catch (A) { alert("Can't load audio file.") } };
        a.readAsDataURL(e) }

    function c(a) { console.log("Opened file system: " + a.name) }

    function h(a) { console.log(a) }

    function p(a) { if (!n) { return }
        s = l[j[0].selectedIndex]; if (typeof s === "undefined") { q(true) } if (typeof s === "undefined") { return }
        s.loop = a && configC[w + "AudioLoop"]; if (s.currentTime !== 0) { s.currentTime = 0 }
        v = false; var e = s.play(); if (e !== undefined) { e["catch"](function(A) { console.log("Play error: " + A.message);
                v = true }) }
        r(); if (s.loop) { g = setTimeout(f, configC.audioPlayDuration) } }

    function f() { if (!n) { return } if (typeof s === "undefined") { return }
        s.pause();
        clearTimeout(g) }

    function r() { if (typeof s === "undefined") { return } if (s.paused || s.ended) { $("#audio-pause-icon").hide();
            $("#audio-play-icon").show() } else { $("#audio-play-icon").hide();
            $("#audio-pause-icon").show() } }

    function q(e) { if (!n) { return }
        f(); var a = j[0].selectedIndex; if (typeof l[a] === "undefined") { l[a] = document.createElement("audio");
            l[a].preload = "auto";
            l[a].onpause = r;
            l[a].onended = r; if (a !== langC.audioNames.length) { l[a].src = "/sound/" + langC.audioNames[a][1] + ".mp3" } else { if (typeof localStorage.audioFile === "undefined") { return }
                l[a].src = localStorage.audioFile } }
        s = l[a]; if (e !== true) { p(false);
            o = new Date() }
        configC[w + "AudioCode"] = (a !== langC.audioNames.length ? langC.audioNames[a][1] : "custom");
        configC.save(w + "AudioCode") }
    $("#btn-audio-play").click(function() { if ($("#audio-play-icon").is(":visible")) { p(false) } else { var a = new Date(); if (a.getTime() - o.getTime() > 300) { f() } } });

    function u() { return "&sound=" + configC[w + "AudioCode"] + "&loop=" + (configC[w + "AudioLoop"] ? "1" : "0") }

    function k() { if (isEmbed) { return } if (!isMobile) { return } if (!n) { return }
        p(false); if (typeof s === "undefined") { return } var a = setInterval(function() { if (v) { clearInterval(a); return } var e = 0.001; switch (langC.audioNames[j[0].selectedIndex][1]) {
                case "bells":
                    e = 0.1; break } if (s.currentTime < e) { return }
            clearInterval(a);
            f() }, 10) } return { init: m, set: d, play: p, pause: f, url: u, check: k } })();
var vNoSleep = (function() { var h; var j = false; var g = false; var c = false; var f = false; var e;

    function b() { if (g) { return } if (isMobile) { if (typeof e === "undefined") { $.getScript("/lib/NoSleep.min.js", function() { e = new NoSleep();
                    e.enable() }) } else { e.enable() } } else { if (typeof h === "undefined") { try { h = document.createElement("audio");
                    j = !!(h.canPlayType && h.canPlayType("audio/mpeg;").replace(/no/, "")) } catch (k) {} if (!j) { return }
                h.preload = "none";
                h.loop = true;
                h.src = "/sound/noise.ogg";
                h.title = "No Sleep" } if (!j) { return }
            d(); if (!c) { c = true;
                window.addEventListener("visibilitychange", function() { if (!g) { return } if (!j) { return } if (document.visibilityState === "hidden") { var l = h.play(); if (l !== undefined) { l["catch"](function(m) { console.log("Play error ns: " + m.message) }) } } else { h.pause() } }, true) } }
        g = true }

    function a() { if (!g) { return } if (isMobile) { if (typeof e !== "undefined") { e.disable() } } else { if (!j) { return }
            h.pause() }
        g = false }

    function d() { if (isEmbed) { return } if (isMobile) { return } if (!j) { return } if (f) { return }
        f = true; var k = h.play(); if (k !== undefined) { k["catch"](function(l) { console.log("Play error fns: " + l.message) }) }
        setTimeout(function() { if (document.visibilityState !== "hidden") { h.pause() } }, 1000) } return { enable: b, disable: a } })();
$(".modal").on("show.bs.modal", function() { if (isIOS) { $("html, body").css("overflow", "hidden") } }).on("hide.bs.modal", function() { if (isIOS) { $("html, body").css("overflow", "") } });

function intToStrTwo(a) { return (a < 10 ? "0" + a : a) }

function intToStrThree(a) { return (a < 10 ? "00" + a : (a < 100 ? "0" + a : a)) }

function intToStrHours(a) { return (a < 10 && !configC.clock12hour && langC.timeFmtZero ? "0" + a : a) }

function encodeTitle(a) { return a.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;") }

function closeAllNotifications() { $.gritter.removeAll() }

function getStyleValue(a, c, h) { var g = typeof h !== "undefined" ? [h] : document.styleSheets; for (var f = 0, b = g.length; f < b; f++) { h = g[f]; if (!h.cssRules) { continue } for (var e = 0, d = h.cssRules.length; e < d; e++) { var m = h.cssRules[e]; if (m.selectorText && m.selectorText.split(",").indexOf(c) !== -1) { return m.style[a] } } } return null }

function isPlainURIParam(a) { return !/[\\~`!#$%\^&*+=\[\]/{}|":<>?]/g.test(a) }
var pageTitleNotification = { originalTitle: "", intervalId: 0, on: function(b, a) { this.originalTitle = document.title; var c = this;
        c.intervalId = setInterval(function() { document.title = (c.originalTitle == document.title) ? b : c.originalTitle }, (a) ? a : 1000) }, off: function() { if (this.intervalId == 0) { return }
        clearInterval(this.intervalId);
        document.title = this.originalTitle;
        this.intervalId = 0 } };

function scrollToTop(a) { $("html, body").animate({ scrollTop: 0 }, a) }
var prevPnlBallsWidth = 0;
var prevPnlBallsHeight = 0;

function showFunnyBalls() { var g = $("#pnl-main"); if (typeof g[0] === "undefined" || typeof g[0].animate === "undefined") { return } if (prevPnlBallsWidth === g.width() && prevPnlBallsHeight === g.height()) { return }
    prevPnlBallsWidth = g.width();
    prevPnlBallsHeight = g.height();
    g.css("overflow", "hidden"); var f = g.first();
    $(".ball-div").remove(); var j = Math.max((prevPnlBallsWidth * prevPnlBallsHeight) / 10000, 20); for (i = 0; i < j; i++) { f.before('<div class="ball-div" style="left: ' + Math.floor(Math.random() * prevPnlBallsWidth) + "px; top: " + Math.floor(Math.random() * prevPnlBallsHeight) + 'px;"><p></p></div>') } try { var d = document.querySelectorAll(".ball-div > p");
        Array.prototype.slice.call(d).forEach(function(b, a) { var e = { x: (Math.random() * 22) - 11, y: (Math.random() * 22) - 11 };
            b.animate([{ transform: "translate(0,0) scale(1)", opacity: 0.5 }, { transform: "translate(" + e.x + "rem," + e.y + "rem) scale(" + Math.random() + ")", opacity: Math.random() * 0.5 }], { duration: (Math.random() + 1) * 2000, direction: "alternate", fill: "forwards", iterations: Infinity, easing: "ease-in-out", delay: 0 }) }); var c = document.querySelectorAll(".ball-div");
        Array.prototype.slice.call(c).forEach(function(b, a) { b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 5000, easing: "ease-out" }) }) } catch (h) { console.log(h) } }

function sanitizeText(b) { var a = document.createElement("div");
    a.innerText = b; return a.innerHTML };
/*!
 * vClock v2.3
 * Copyright 2015-2021 Comfort Software Group
 * All rights reserved
 */
;
var share = (function() { var m = { facebook: ["", "facebook.com/sharer.php?", "m.facebook.com/sharer.php?", 560, 530, "p[url]", "p[title]", "p[summary]", "p[images][0]"], vkontakte: ["", "vk.com/share.php?noparse=true&", "", 650, 1024, "url", "title", "description", "image"], odnoklassniki: ["", "connect.ok.ru/offer?", "", 650, 1024, "url", "title", "description", "imageUrl"], whatsapp: ["", "api.whatsapp.com/send/?phone&app_absent=0&", "", 620, 620, "text"], googleplus: ["s", "plus.google.com/share?", "", 620, 620, "url"], twitter: ["", "twitter.com/intent/tweet?", "twitter.com/share?", 420, 550, "url", "", "text"], blogger: ["", "www.blogger.com/blog-this.g?", "", 468, 768, "", "n", "b", "eurl"], livejournal: ["", "www.livejournal.com/update.bml?", "", 650, 1024, "", "subject", "event"], tumblr: ["s", "www.tumblr.com/share/link?", "", 540, 600, "url", "name", "description"], reddit: ["", "reddit.com/submit?", "", 650, 1024, "url", "title"], digg: ["", "digg.com/submit?", "", 650, 1024, "url"], ameba: ["", "blog.ameba.jp/ucs/entry/srventryinsertinput.do?editor_flg=1&", "", 650, 1024, "", "entry_title", "entry_text"], goo: ["", "blog.goo.ne.jp/admin/newentry/?", "", 650, 1024, "", "entry/entry_title", "entry/entry_text"], linkedin: ["", "www.linkedin.com/shareArticle?", "", 650, 1024, "url", "title", "summary"], pinterest: ["", "pinterest.com/pin/create/button/?", "", 650, 1024, "url", "", "description", "media"], stumbleupon: ["", "www.stumbleupon.com/submit?", "", 650, 1024, "url", "title"], skyblog: ["", "skyrock.com/m/blog/share.php?idp=10&", "", 730, 1024, "url", "title"], tuenti: ["", "www.tuenti.com/share?", "", 650, 1024, "url"], meneame: ["", "meneame.net/submit.php?", "", 650, 1024, "url"], rakuten: ["", "my.plaza.rakuten.co.jp/index.phtml?func=diary&act=write&", "", 800, 1200, "", "d_title", "d_text"], mixi: ["", "mixi.jp/share.pl?", "", 650, 1024, "u"], yahoo: ["", "blogs.yahoo.co.jp/FRONT/blogthis.html?", "", 650, 1024, "link", "linktitle"], cyworld: ["", "api.cyworld.com/openscrap/video/v1/?", "", 410, 450, "vu"], kakao: ["s", "story.kakao.com/share?", "", 530, 480, "url"], naver: ["", "blog.naver.com/LinkShare.nhn?", "", 500, 560, "url"], weibo: ["", "service.weibo.com/share/share.php?", "", 650, 1024, "url", "title"], nujij: ["", "nujij.nl/jij.lynkx?", "", 650, 1024, "u", "t"], wykop: ["", "www.wykop.pl/dodaj?", "", 650, 1024, "url", "title", "desc"], fotka: ["", "www.fotka.pl/out/opis_importer.php?", "", 650, 1024, "url"], skype: ["s", "web.skype.com/share?", "", 650, 1024, "url"] };

    function b(s) { var y = encodeURIComponent($('meta[property="og:url"]').attr("content")); var u = encodeURIComponent($('meta[property="og:title"]').attr("content")); var C = encodeURIComponent($('meta[property="og:image"]').attr("content")); var e = $('meta[property="og:description:alternate"]').attr("content"); if (typeof e === "undefined") { e = $('meta[property="og:description"]').attr("content") }
        e = encodeURIComponent(e); var A = m[s]; var t = "http" + A[0] + "://" + (isMobile && A[2] != "" ? A[2] : A[1]); var v = ""; switch (s) {
            case "twitter":
                e = decodeURIComponent(e); var D = 116; if (e.length > D) { e = e.substring(0, D - 3) + "..." }
                e = encodeURIComponent(e); break;
            case "blogger":
            case "livejournal":
            case "ameba":
            case "goo":
            case "rakuten":
                var i = window.navigator.userAgent; var x = (i.indexOf("Trident/") == -1 && i.indexOf("Edge/") == -1);
                e += "<br><br>" + (x ? '<a href="' + y + '">' : "") + '<img alt="' + u + '" src="' + C + '" width="450" />' + (x ? "</a>" : "") + "<br><br>" + (x ? '<a href="' + y + '">' + y + "</a>" : y); if (s == "livejournal") { e = '<xml:namespace ns="livejournal" prefix="lj">' + e + "</xml:namespace>" } break } if (A.length > 5 && A[5] != "") { t += v + A[5] + "=" + y;
            v = "&" } if (A.length > 6 && A[6] != "") { t += v + A[6] + "=" + u;
            v = "&" } if (A.length > 7 && A[7] != "") { t += v + A[7] + "=" + e;
            v = "&" } if (A.length > 8 && A[8] != "") { t += v + A[8] + "=" + C } switch (s) {
            case "facebook":
                if (isMobile) { t = "http://" + A[2] + "u=" + y } break;
            case "twitter":
                t += "&counturl=" + y; break } var z = Math.min(A[3], parseInt($(window).height(), 10)); var B = Math.min(A[4], parseInt($(window).width(), 10));
        window.open(t, "", "toolbar=0,status=0,location=1,scrollbars=1,height=" + z + ",width=" + B + "") }
    $("#edt-embed,#edt-share").focus(function() { var e = $(this);
        e.select();
        e.mouseup(function() { e.unbind("mouseup"); return false }) }).click(function() { if (isMobile) { this.setSelectionRange(0, this.value.length) } });

    function j(w) { var t = location.hash.substring(1); var e = []; if (t != "") { e = t.split("&"); var s = 0; while (s < e.length) { var v = e[s].split("="); switch (v[0]) {
                    case "sound":
                    case "loop":
                    case "theme":
                    case "color":
                        e.splice(s, 1); continue }
                s++ } } if (w) { if (!configC.themeDigitalFont) { e.push("digital=0") }
            e.push("theme=" + (configC.themeNightMode ? 1 : 0)); if (configC.themeColorId !== getDefaultColorId()) { e.push("color=" + configC.themeColorId) } if ($("#chk-show-buttons").length && !$("#chk-show-buttons").prop("checked")) { var u = e.indexOf("enabled=0"); if (u > -1) { e[u] = "enabled=1" } else { if (typeof vStopwatch !== "undefined") { e.push("enabled=1") } }
                e.push("showbuttons=0") } if (typeof vStopwatch === "undefined") { e.push("ampm=" + (configC.clock12hour ? 1 : 0)); if (typeof vAlarm !== "undefined" || typeof vClock !== "undefined") { e.push("showdate=" + (configC.clockDateVisible ? 1 : 0)) } if (typeof vAlarm !== "undefined") { e.push("sound=" + configC.alarmAudioCode) } if (typeof vTimer !== "undefined") { e.push("sound=" + configC.timerAudioCode) } } else { if (configC.swTimeFormat !== 1) { e.push("format=" + configC.swTimeFormat) } } } if (e.length === 0) { return "" } return "#" + e.join("&") } var d; var f = $('meta[property="og:url"]').attr("content"); if (typeof f === "undefined") { return } try { if (f.indexOf("?") === -1) { f = decodeURI(f) } } catch (l) { console.error(l) } var p = $('link[type="embed"]').attr("href"); try { if (p.indexOf("?") === -1) { p = decodeURI(p) } } catch (l) { console.error(l) } var h = $("#edt-share");
    window.setShareEdit = c;

    function c(i) { var e = f; if (i === undefined) { e += j(false) } else { e += i }
        h.val(e); if (e.indexOf("?") === -1) { e = encodeURI(e) }
        $('meta[property="og:url"]').attr("content", e) }
    $("#form-embed").on("show.bs.modal", function() { a() }).on("hide.bs.modal", function() { clearTimeout(d) });

    function a() { var s = o[0].selectedIndex; var e, t; if (s < r.length) { e = r[s][0];
            t = r[s][1] } else { e = t = "100%" }
        $("#edt-embed").val(g(e, t));
        n() }

    function g(e, i) { return '<iframe width="' + e + '" height="' + i + '" src="' + p + j(true) + '" frameborder="0" allowfullscreen></iframe>' }
    $("#edt-embed").bind("input propertychange", function() { clearTimeout(d);
        d = setTimeout(n, 1000) });

    function n() { $(".embed-preview").html($("#edt-embed").val());
        clearTimeout(d) }
    $("#btn-tool-share").click(function() { var e = $("#pnl-share").find(".panel");
        hideTooltips();
        $("html, body").animate({ scrollTop: $(document).height() }, 400);
        fadeHighlight(e, 1000) }); var r = [
        [125, 40],
        [125, 125],
        [180, 150],
        [200, 90],
        [200, 200],
        [250, 125],
        [300, 250],
        [320, 100],
        [336, 280],
        [360, 180],
        [475, 250],
        [510, 310],
        [560, 315],
        [640, 360],
        [728, 90],
        [853, 480],
        [1280, 720]
    ]; if ($("#pnl-set-timer").length > 0) { r.splice(0, 3) } var o = $("#edt-size"); if (o.length > 0) { var q = ""; for (var k = 0; k < r.length; k++) { q += "<option>" + r[k][0] + " × " + r[k][1] + "</option>" }
        o.html(q + o.html());
        o[0].selectedIndex = r.length - 7;
        o.change(a) }
    $("#chk-show-buttons").prop("checked", configC.buttonsVisible).change(a); return { popup: b } })();