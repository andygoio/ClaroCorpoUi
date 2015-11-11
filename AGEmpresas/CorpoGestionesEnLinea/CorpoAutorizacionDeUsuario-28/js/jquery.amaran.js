(function() {
  (function($, window, document, undefined_) {
    var Plugin, themes;
    Plugin = function(options) {
      var defaults;
      defaults = {
        position: "bottom right",
        content: " ",
        delay: 7000,
        sticky: false,
        inEffect: "fadeIn",
        outEffect: "fadeOut",
        theme: "default",
        themeTemplate: null,
        closeOnClick: true,
        closeButton: false,
        clearAll: false,
        cssanimationIn: false,
        cssanimationOut: false,
        beforeStart: function() {},
        afterEnd: function() {},
        onClick: function() {},
        wrapper: ".amaran-wrapper",
        targetId: ""
      };
      this.config = $.extend({}, defaults, options);
      this.config.beforeStart();
      this.init();
      this.close();
    };
    Plugin.prototype = {
      init: function() {
        var amaranObject, bu, elClass, element, innerWrapper, message, wrapper, wrapperInner;
        wrapper = null;
        wrapperInner = null;
        elClass = this.config.position.split(" ");
        if (!$(this.config.wrapper).length) {
          wrapper = $("<div>", {
            "class": this.config.wrapper.substr(1, this.config.wrapper.length) + " " + this.config.position
          }).appendTo(this.config.targetId);
          innerWrapper = $("<div>", {
            "class": "amaran-wrapper-inner"
          }).appendTo(wrapper);
        } else {
          if (!$(this.config.wrapper).hasClass(this.config.position)) {
            wrapper = $("<div>", {
              "class": this.config.wrapper.substr(1, this.config.wrapper.length) + " " + this.config.position
            }).appendTo("body");
            innerWrapper = $("<div>", {
              "class": "amaran-wrapper-inner"
            }).appendTo(wrapper);
          } else {
            wrapper = $(this.config.wrapper + "." + elClass[0] + "." + elClass[1]);
            innerWrapper = wrapper.find(".amaran-wrapper-inner");
          }
        }
        if (typeof this.config.content === "object") {
          if (this.config.themeTemplate != null) {
            message = this.config.themeTemplate(this.config.content);
          } else {
            message = themes[this.config.theme.split(" ")[0] + "Theme"](this.config.content);
          }
        } else {
          this.config.content = {};
          this.config.content.message = this.config.message;
          this.config.content.color = "#27ae60";
          message = themes["defaultTheme"](this.config.content);
        }
        amaranObject = {
          "class": (this.config.themeTemplate ? "amaran " + this.config.content.themeName : (this.config.theme && !this.config.themeTemplate ? "amaran " + this.config.theme : "amaran")),
          html: (this.config.closeButton ? "" + message : message)
        };
        if (this.config.clearAll) {
          $(".amaran").remove();
        }
        element = $("<div>", amaranObject).appendTo(innerWrapper);
        this.animation(this.config.inEffect, element, "show");
        if (this.config.onClick) {
          bu = this;
          $(element).on("click", function() {
            bu.config.onClick();
          });
        }
        if (this.config.sticky !== true) {
          this.hideDiv(element);
        }
        if (elClass[0] === "center") {
          this.centerCalculate(wrapper, innerWrapper);
        }
      },
      centerCalculate: function(wrapper, innerWrapper) {
        var topAmaranMargin, totalAmarans, totalAmaransHeight;
        totalAmarans = innerWrapper.find(".amaran").length;
        totalAmaransHeight = innerWrapper.height();
        topAmaranMargin = (wrapper.height() - totalAmaransHeight) / 2;
        innerWrapper.find(".amaran:first-child").animate({
          "margin-top": topAmaranMargin
        }, 200);
      },
      animation: function(effect, element, work) {
        if (effect === "fadeIn" || effect === "fadeOut") {
          return this.fade(element, work);
        }
        if (effect === "show") {
          return this.cssanimate(element, work);
        }
        return this.slide(effect, element, work);
      },
      fade: function(element, work) {
        var bu;
        bu = this;
        if (work === "show") {
          if (this.config.cssanimationIn) {
            return element.addClass('animated ' + this.config.cssanimationIn).show();
          } else {
            return element.fadeIn();
          }
        } else {
          if (this.config.cssanimationOut) {
            element.addClass('animated ' + this.config.cssanimationOut);
            element.css({
              "min-height": 0,
              "height": element.outerHeight()
            });
            element.animate({
              opacity: 0
            }, function() {
              element.animate({
                height: 0
              }, function() {
                bu.removeIt(element);
              });
            });
            return;
          } else {
            element.css({
              "min-height": 0,
              "height": element.outerHeight()
            });
            element.animate({
              opacity: 0
            }, function() {
              element.animate({
                height: 0
              }, function() {
                bu.removeIt(element);
              });
            });
            return;
          }
        }
      },
      removeIt: function(element) {
        var innerWrapper, wrapper;
        element.remove();
        wrapper = $(this.config.wrapper + "." + this.config.position.split(" ")[0] + "." + this.config.position.split(" ")[1]);
        innerWrapper = wrapper.find(".amaran-wrapper-inner");
        if (this.config.position.split(" ")[0] === "center") {
          this.centerCalculate(wrapper, innerWrapper);
        }
      },
      getWidth: function(el) {
        var newEl, newElWidth;
        newEl = el.clone().hide().appendTo("body");
        newElWidth = newEl.outerWidth() + newEl.outerWidth() / 2;
        newEl.remove();
        return newElWidth;
      },
      getInfo: function(element) {
        var offset, wrapperOffset;
        offset = element.offset();
        wrapperOffset = $(this.config.wrapper).offset();
        return {
          t: offset.top,
          l: offset.left,
          h: element.height(),
          w: element.outerWidth(),
          wT: wrapperOffset.top,
          wL: wrapperOffset.left,
          wH: $(this.config.wrapper).outerHeight(),
          wW: $(this.config.wrapper).outerWidth()
        };
      },
      getPosition: function(element, effect) {
        var p, parca, v;
        p = this.getInfo(element);
        parca = this.config.position.split(" ")[1];
        v = {
          slideTop: {
            start: {
              top: -(p.wT + p.wH + p.h * 2)
            },
            move: {
              top: 0
            },
            hide: {
              top: -(p.t + (p.h * 2))
            },
            height: p.h
          },
          slideBottom: {
            start: {
              top: $(window).height() - p.wH + p.h * 2
            },
            move: {
              top: 0
            },
            hide: {
              top: $(window).height() - p.wH + p.h * 2
            },
            height: p.h
          },
          slideLeft: {
            start: {
              left: (parca === "left" ? -p.w * 1.5 : -$(window).width())
            },
            move: {
              left: 0
            },
            hide: {
              left: (parca === "left" ? -p.w * 1.5 : -$(window).width())
            },
            height: p.h
          },
          slideRight: {
            start: {
              left: (parca === "right" ? p.w * 1.5 : $(window).width())
            },
            move: {
              left: 0
            },
            hide: {
              left: (parca === "right" ? p.w * 1.5 : $(window).width())
            },
            height: p.h
          }
        };
        if (v[effect]) {
          return v[effect];
        } else {
          return 0;
        }
      },
      slide: function(effect, element, work) {
        var bu, position;
        position = this.getPosition(element, effect);
        if (work === "show") {
          element.show().css(position.start).animate(position.move);
        } else {
          bu = this;
          return element.animate(position.hide, function() {
            element.css({
              "min-height": 0,
              "height": position.height
            }, function() {
              element.html(" ");
            });
          }).animate({
            height: 0
          }, function() {
            bu.removeIt(element);
            return bu.config.afterEnd();
          });
        }
      },
      close: function() {
        var bu;
        bu = this;
        if (!this.config.closeOnClick && this.config.closeButton) {
          bu.animation(bu.config.outEffect, $(this).parent("div.amaran"), "hide");
          return;
        } else if (this.config.closeOnClick) {
          $(".amaran").on("click", function() {
            bu.animation(bu.config.outEffect, $(this), "hide");
          });
        }
      },
      hideDiv: function(element) {
        var bu;
        bu = this;
        setTimeout((function() {
          bu.animation(bu.config.outEffect, element, "hide");
        }), bu.config.delay);
      }
    };
    themes = {
      defaultTheme: function(data) {
        var color;
        color = "";
        if (typeof data.color !== "undefined") {
          color = data.color;
        }
        return "<div class='default-spinner'><span style='background-color:" + data.color + "'></span></div><div class='default-message'><span>" + data.message + "</span></div>";
      },
      annotationTheme: function(data) {
//        return "<i class=\"icon " + data.icon + " icon-large\"></i><p class=\"bold\">" + data.title + "</p><p><span>" + data.message + "</span><span class=\"light\">" + data.info + "</span></p>";
        return "<div class='target-selected' style='box-shadow:" + data.boxShadow + ";color:" + data.color + ";top:" + data.targetIdPositionTop + ";left:" + data.targetIdPositionLeft + ";width:" + data.targetIdWidth + ";height:" + data.targetIdHeight + "';><div class='leyend-container' style='top:" + data.leyendContainerTop + ";left:" + data.leyendContainerLeft + "';><div class='leyend-text'>" + data.message + "</div><button class='margin-button-leyend-annotation-overlay button-leyend-annotation-overlay' id='buttonAnnotationOverlayEntendidoOne'>ENTENDIDO</button><button class='margin-button-leyend-annotation-overlay button-leyend-annotation-overlay' onclick='$.amaran.close = function()'>SALIR</button></div></div>";
     },
      userTheme: function(data) {
        return "<div class=\"icon\"><i class='fa fa-ban animated infinite pulse icon-notification-error'></i></div><div class=\"info\">" + data.message + "</div>";
      },
      errorMessage2Theme: function(data) {
        return "<div class=\"icon\"><div class='errorMessageIconCenter'><i class='fa fa-times corpo-error-circle animated infinite pulse icon-notification-error2'></i></div></div><div class=\"info2\">" + data.message + "</div>";
      },
      colorfulTheme: function(data) {
        var bgcolor, color;
        if (typeof data.color !== "undefined") {
          color = data.color;
        }
        if (typeof data.bgcolor !== "undefined") {
          bgcolor = data.bgcolor;
        }
        return "<div class='colorful-inner' style='background-color:" + data.bgcolor + ";color:" + data.color + "'>" + data.message + "</div>";
      }
    };
    $.amaran = function(options) {
      var amaran;
      amaran = new Plugin(options);
      return amaran;
    };
    return $.amaran.close = function() {
      $(".amaran-wrapper").remove();
      return false;
    };
  })(jQuery, window, document);

}).call(this);
