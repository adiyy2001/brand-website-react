!function(e){var t,s,o={hasPreview:!0,defaultThemeId:"jssDefault",fullPath:"css/",cookie:{expires:"",isManagingLoad:!0}};s={getItem:function(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null},setItem:function(e,t,s,o,i,a){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var n="";if(s)switch(s.constructor){case Number:n=s===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+s;break;case String:n="; expires="+s;break;case Date:n="; expires="+s.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+n+(i?"; domain="+i:"")+(o?"; path="+o:"")+(a?"; secure":""),!0},removeItem:function(e,t,s){return!!this.hasItem(e)&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(s?"; domain="+s:"")+(t?"; path="+t:""),!0)},hasItem:function(e){return!!e&&new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,s=0;s<t;s++)e[s]=decodeURIComponent(e[s]);return e}},(t=function(e,t){return this.init(e,t)}).prototype={$root:null,config:{},$themeCss:null,defaultTheme:null,init:function(e,t){this.$root=e,this.config=t||{},this.setDefaultTheme(),this.defaultTheme?(this.config.cookie&&this.checkCookie(),this.config.hasPreview&&this.addHoverEvents(),this.addClickEvents()):this.$root.addClass("jssError error level0")},setDefaultTheme:function(){this.$themeCss=e("link[id="+this.config.defaultThemeId+"]"),this.$themeCss.length&&(this.defaultTheme=this.$themeCss.attr("href"))},resetStyle:function(){this.updateStyle(this.defaultTheme)},updateStyle:function(e){this.$themeCss.attr("href",e)},getFullAssetPath:function(e){return this.config.fullPath+e+".css"},checkCookie:function(){var e;this.config.cookie&&this.config.cookie.isManagingLoad&&(e=s.getItem("jss_selected"))&&(newStyle=this.getFullAssetPath(e),this.updateStyle(newStyle),this.defaultTheme=newStyle)},addHoverEvents:function(){var t=this;this.$root.find("a").hover(function(){var s=e(this).data("theme"),o=t.getFullAssetPath(s);t.updateStyle(o)},function(){t.resetStyle()})},addClickEvents:function(){var t=this;this.$root.find(".setColor").on("click",function(){var o=e(this).data("theme"),i=t.getFullAssetPath(o);t.updateStyle(i),t.defaultTheme=i,t.config.cookie&&s.setItem("jss_selected",o,t.config.cookie.expires,"/")})}},e.fn.styleSwitcher=function(s){return new t(this,e.extend(!0,o,s))},e(function(){function t(){styleCookieVal=e("body").hasClass("active-dark-mode")?"dark":"light",Cookies.set("styleCookieName",styleCookieVal,{expires:7})}"dark"==Cookies.get("styleCookieName")?e("body").addClass("active-dark-mode"):(Cookies.get("styleCookieName"),e("body").removeClass("active-light-mode"));var s=Cookies.get("styleCookieName");"dark"==s?(e(".my_switcher").find(".setColor.dark").addClass("active"),e("body").removeClass("active-light-mode").addClass("active-dark-mode")):"light"==s?(e(".my_switcher").find(".setColor.light").addClass("active"),e("body").removeClass("active-dark-mode").addClass("active-light-mode")):e("body").hasClass("active-dark-mode")?(e(".my_switcher").find(".setColor.light").removeClass("active"),e(".my_switcher").find(".setColor.dark").addClass("active")):(e(".my_switcher").find(".setColor.dark").removeClass("active"),e(".my_switcher").find(".setColor.light").addClass("active")),e(".my_switcher .setColor").on("click",function(){e(this).closest("ul").find("li").siblings().find(".active").removeClass("active"),e(this).addClass("active"),t()}),e(".my_switcher .setColor.dark").on("click",function(){e("body").removeClass("active-light-mode").addClass("active-dark-mode"),t()}),e(".my_switcher .setColor.light").on("click",function(){e("body").removeClass("active-dark-mode").addClass("active-light-mode"),t()})})}(jQuery);