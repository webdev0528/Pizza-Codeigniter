// jQuery Placeholder Enhanced by Denis Ciccale (dciccale@gmail.com) || Dual licensed under the MIT and GPL licenses
(function(b){b.fn.placeholderEnhanced=function(){if(!this.length){return}var e="placeholder",d=e in document.createElement("input");if(b.browser.opera&&b.browser.version<"11.50"){d=false}if(!d){b("form").submit(function(){var f=b(this);f.find("input[placeholder], textarea[placeholder]").each(function(){var g=b(this);if(g.val()===g.attr("placeholder")){g.val("")}})})}return this.each(function(){var k=b(this),l=k.attr("placeholder"),m=k.attr("type")==="password";var i=function(){if(k.hasClass(e)){if(!d){k.val("")}k.removeClass(e)}};var f=function(o){if(!k.val()||k.val()===l){if(!d){if(!m){k.addClass(e).val(l)}else{j(g);n(k)}}else{k.addClass(e)}}};var n=function(o){o.css({position:"absolute",left:"-9999em"})};var j=function(o){return o.removeAttr("style")};if(!m||d){k.bind("focus.placeholder",i)}else{var h=(k[0].className)?" "+k[0].className:"";var g=b('<input type="text" class="'+e+h+'" value="'+l+'" tabindex="-1" />');g.bind("focus.placeholder",function(){k.trigger("focus.placeholder")});k.before(g).bind("focus.placeholder",function(){j(k);n(g)})}k.bind("blur.placeholder",f).trigger("blur.placeholder")})};b(function(){b("input[placeholder], textarea[placeholder]").placeholderEnhanced()});var c="placeholder" in document.createElement("input");if(b.browser.opera&&b.browser.version<"11.50"){c=false}if(!c){var a=b.fn.val;b.fn.val=function(d){if(!arguments.length){return b(this).attr("value")===b(this).attr("placeholder")?"":b(this).attr("value")}return a.call(this,d)}}})(jQuery);