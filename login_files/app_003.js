(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
"use strict";window.CookieCookie=function(e){var t,c,o=Object.assign({animation_time:650,decline_settings:"1000",api_url:"",cookie_name:"cookiecookie",selector:{consent:".consent",redirect_url:"input[name=redirect_url]",cookie_img:"#kekse",cookie_overlay:"#cookie_overlay",reset:"#cookie_reset",settings:"#consentSettings",main_overlay:"#main_overlay",settings_overlay:"#settings_overlay",back:"#consentBack",decline_link:".jss_cookie_consent_decline",description:".show_more",editable_settings:".check-all",form:"#cookieform2",agree_all:"#consentAddAll",close:"#consent_close_icon",more:".more-less"},img:{kekse:"/assets/default/CookieOverlays/images/kekse.svg"},class:{hidden:"hidden",less:"more-less--click"},dataset:{more_reference:"show"}},e),n=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:document).querySelector(e)},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return Array.from(t.querySelectorAll(e))},i=function(e){var t=e?"S-":"";n(o.selector.cookie_img).src="".concat(o.img.kekse,"?").concat(t).concat(o.request_time)},l=function(e){var t,c,n,s,i,l,r,a,d=null===(s=o.cookie_name,r=RegExp(s+"=.[^;]*"),t=null==(a=document.cookie.match(r))?void 0:null===(i=a[0])||void 0===i?void 0:null===(l=i.split("="))||void 0===l?void 0:l[1])||void 0===t?void 0:null===(c=t.split("_"))||void 0===c?void 0:null===(n=c[1])||void 0===n?void 0:n.split("");d.shift(),e.forEach(function(e,t){e.checked=1===parseInt(d[t])})},r=function(e){var t,c=e[0];o.has_consent_cookie||(c.checked=!0);var n=null===(t=e.map(function(e){return+e.checked}))||void 0===t?void 0:t.join("");return"".concat(o.api_url,"1").concat(n)},a=function(){h.setAttribute("action",r(_)),f.forEach(function(e){return e.classList.add(o.class.hidden)}),s("."+o.class.less).forEach(function(e){return e.classList.remove(o.class.less)})},d=n(o.selector.settings),u=n(o.selector.main_overlay),v=n(o.selector.settings_overlay),k=n(o.selector.decline_link),f=s(o.selector.description),_=s(o.selector.editable_settings),m=n(o.selector.agree_all),h=n(o.selector.form);!function(e){var t;o.has_consent_cookie?l(e):(i(),null===(t=n(o.selector.cookie_overlay))||void 0===t||t.classList.remove(o.class.hidden))}(_),s(o.selector.redirect_url).forEach(function(e){return e.value=window.location.href}),null==(t=n(o.selector.reset))||t.addEventListener("click",function(){var e;null===(e=n(o.selector.cookie_overlay))||void 0===e||e.classList.remove(o.class.hidden),i(1)}),function(e){var t=n(o.selector.close);t&&(t.addEventListener("click",function(){n(o.selector.cookie_overlay).classList.add(o.class.hidden),a(),l(e)}),n(o.selector.consent).addEventListener("click",function(){n(o.selector.cookie_overlay).classList.add(o.class.hidden),a(),l()}),document.addEventListener("keyup",function(e){27===e.keyCode&&(n(o.selector.cookie_overlay).classList.add(o.class.hidden),a(),l())}),v.addEventListener("click",function(e){return e.stopPropagation()}))}(_),d.addEventListener("click",function(){null==u||u.classList.add(o.class.hidden),null==v||v.classList.remove(o.class.hidden)}),k.addEventListener("click",function(){n(o.selector.form).setAttribute("action","".concat(o.api_url).concat(o.decline_settings)),n(o.selector.form).submit()}),(c=s(o.selector.more)).forEach(function(e){return e.addEventListener("click",function(){var t=e.dataset[o.dataset.more_reference],s=n("#"+t);f.forEach(function(e){e.id!==t&&e.classList.add(o.class.hidden)}),s.classList.toggle(o.class.hidden),c.forEach(function(t){t.dataset!==e.dataset&&t.classList.contains(o.class.less)&&t.classList.remove(o.class.less)}),e.classList.toggle(o.class.less)})}),n(o.selector.back).addEventListener("click",function(){v.classList.add(o.class.hidden),u.classList.remove(o.class.hidden)}),m.addEventListener("click",function(){if(!_.map(function(e){return e.checked}).includes(!1))return h.setAttribute("action","".concat(o.api_url,"1111")),h.submit();_.forEach(function(e){e.checked=!0}),h.setAttribute("action","".concat(o.api_url,"1111")),setTimeout(function(){return h.submit()},o.animation_time)}),_.forEach(function(e){e.addEventListener("click",function(){var e,t=null===(e=_.map(function(e){return+e.checked}))||void 0===e?void 0:e.join("");return h.setAttribute("action","".concat(o.api_url,"1").concat(t))})}),h.setAttribute("action",r(_))};

},{}]},{},[1])
//# sourceMappingURL=app.js.map
