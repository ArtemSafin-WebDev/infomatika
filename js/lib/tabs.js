if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (t) {
	"use strict";
	var e = t.fn.jquery.split(" ")[0].split(".");
	if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), +function (t) {
	"use strict";

	function e(e) {
		return this.each(function () {
			var n = t(this), i = n.data("bs.tab");
			i || n.data("bs.tab", i = new a(this)), "string" == typeof e && i[e]()
		})
	}

	var a = function (e) {
		this.element = t(e)
	};
	a.VERSION = "3.3.7", a.TRANSITION_DURATION = 150, a.prototype.show = function () {
		var e = this.element, a = e.closest("ul:not(.subnav-tabs)"), n = e.data("target");
		if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
			var i = a.find(".active:last a"), s = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
				r = t.Event("show.bs.tab", {relatedTarget: i[0]});
			if (i.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
				var o = t(n);
				this.activate(e.closest("li"), a), this.activate(o, o.parent(), function () {
					i.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
						type: "shown.bs.tab",
						relatedTarget: i[0]
					})
				})
			}
		}
	}, a.prototype.activate = function (e, n, i) {
		function s() {
			r.removeClass("active").find("> .subnav-tabs > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".subnav-tabs").length && e.closest("li.drop").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
		}

		var r = n.find("> .active"),
			o = i && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
		r.length && o ? r.one("bsTransitionEnd", s).emulateTransitionEnd(a.TRANSITION_DURATION) : s(), r.removeClass("in")
	};
	var n = t.fn.tab;
	t.fn.tab = e, t.fn.tab.Constructor = a, t.fn.tab.noConflict = function () {
		return t.fn.tab = n, this
	};
	var i = function (a) {
		a.preventDefault(), e.call(t(this), "show")
	};
	t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery), +function (t) {
	"use strict";

	function e(e) {
		var a, n = e.attr("data-target") || (a = e.attr("href")) && a.replace(/.*(?=#[^\s]+$)/, "");
		return t(n)
	}

	function a(e) {
		return this.each(function () {
			var a = t(this), i = a.data("bs.collapse"),
				s = t.extend({}, n.DEFAULTS, a.data(), "object" == typeof e && e);
			!i && s.toggle && /show|hide/.test(e) && (s.toggle = !1), i || a.data("bs.collapse", i = new n(this, s)), "string" == typeof e && i[e]()
		})
	}

	var n = function (e, a) {
		this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, a), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {toggle: !0}, n.prototype.dimension = function () {
		var t = this.$element.hasClass("width");
		return t ? "width" : "height"
	}, n.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
				var s = t.Event("show.bs.collapse");
				if (this.$element.trigger(s), !s.isDefaultPrevented()) {
					i && i.length && (a.call(i, "hide"), e || i.data("bs.collapse", null));
					var r = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var o = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!t.support.transition) return o.call(this);
					var l = t.camelCase(["scroll", r].join("-"));
					this.$element.one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
				}
			}
		}
	}, n.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var e = t.Event("hide.bs.collapse");
			if (this.$element.trigger(e), !e.isDefaultPrevented()) {
				var a = this.dimension();
				this.$element[a](this.$element[a]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var i = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return t.support.transition ? void this.$element[a](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : i.call(this)
			}
		}
	}, n.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, n.prototype.getParent = function () {
		return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (a, n) {
			var i = t(n);
			this.addAriaAndCollapsedClass(e(i), i)
		}, this)).end()
	}, n.prototype.addAriaAndCollapsedClass = function (t, e) {
		var a = t.hasClass("in");
		t.attr("aria-expanded", a), e.toggleClass("collapsed", !a).attr("aria-expanded", a)
	};
	var i = t.fn.collapse;
	t.fn.collapse = a, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function () {
		return t.fn.collapse = i, this
	}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (n) {
		var i = t(this);
		i.attr("data-target") || n.preventDefault();
		var s = e(i), r = s.data("bs.collapse"), o = r ? "toggle" : i.data();
		a.call(s, o)
	})
}(jQuery), +function (t) {
	"use strict";

	function e() {
		var t = document.createElement("bootstrap"), e = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "oTransitionEnd otransitionend",
			transition: "transitionend"
		};
		for (var a in e) if (void 0 !== t.style[a]) return {end: e[a]};
		return !1
	}

	t.fn.emulateTransitionEnd = function (e) {
		var a = !1, n = this;
		t(this).one("bsTransitionEnd", function () {
			a = !0
		});
		var i = function () {
			a || t(n).trigger(t.support.transition.end)
		};
		return setTimeout(i, e), this
	}, t(function () {
		t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
			bindType: t.support.transition.end,
			delegateType: t.support.transition.end,
			handle: function (e) {
				return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
			}
		})
	})
}(jQuery);