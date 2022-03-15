

//메뉴 움직임
$(function(){ 
  var lastScrollTop = 0, delta = 15; 
  $(window).scroll(function(event){ var st = $(this).scrollTop(); if(Math.abs(lastScrollTop - st) <= delta)
  return;
  if ((st > lastScrollTop) && (lastScrollTop>0)) { $("header").css("top","-300px");
  } else { $("header").css("top","0");
} lastScrollTop = st; }); });


//스크롤시 움직임
!function(){
  var lax=function(){
      for(var lax={elements:[]},
      lastY=0,
      transforms={"data-lax-rotate":function(t,a){t.transform+=" rotate(".concat(a,"deg)")}},
      _crazy="",i=0;i<100;i++)_crazy+=" "+window.innerHeight*(i/100)+" "+360*Math.random()+", ";
      function intrp(t,a){
          for(var e=0;t[e][0]<=a&&void 0!==t[e+1];)e+=1;var n=t[e][0],r=void 0===t[e-1]?n:t[e-1][0],o=t[e][1],l=void 0===t[e-1]?o:t[e-1][1];
          return Math.min(Math.max((a-r)/(n-r),0),1)*(o-l)+l}return lax.presets={
              linger:function(t){return{"data-lax-translate-y":"(vh*0.7) 0, 0 200, -500 0"}},lazy:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-y":"(vh) 0, (-elh) ".concat(t)}},eager:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-y":"(vh) 0, (-elh) -".concat(t)}},spin:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"(vh) 0, (-elh) ".concat(t)}}},
              lax.setup=function(t){lax.populateElements()},lax.addElement=function(el){var o={el:el,transforms:[]},presetNames=el.attributes["data-lax-preset"]&&el.attributes["data-lax-preset"].value;presetNames&&(presetNames.split(" ").forEach(function(t){var a=t.split("-"),e=lax.presets[a[0]];if(e){var n=e(a[1]);for(var r in n)el.setAttribute(r,n[r])}else console.error("preset ".concat(a[0]," is not defined"))}),el.setAttribute("data-lax-anchor","self"),el.attributes.removeNamedItem("data-lax-preset"));
              for(var i=0;i<el.attributes.length;i++){var a=el.attributes[i],bits=a.name.split("-");if("lax"===bits[1])if("data-lax-anchor"===a.name){o["data-lax-anchor"]="self"===a.value?el:document.querySelector(a.value);var rect=o["data-lax-anchor"].getBoundingClientRect();o["data-lax-anchor-top"]=Math.floor(rect.top)+window.scrollY}else o.transforms[a.name]=a.value.replace(new RegExp("vh","g"),window.innerHeight).replace(new RegExp("elh","g"),el.clientHeight).split(",").map(function(x){return x.trim().split(" ").map(function(y){return"("===y[0]?eval(y):parseFloat(y)})}).sort(function(t,a){return t[0]-a[0]})}lax.elements.push(o),lax.updateElement(o)},lax.populateElements=function(){lax.elements=[];var t=Object.keys(transforms).map(function(t){return"[".concat(t,"]")}).join(",");t+=",[data-lax-preset]",document.querySelectorAll(t).forEach(this.addElement)},lax.updateElement=function(t){var a=lastY,e=t["data-lax-anchor-top"]?t["data-lax-anchor-top"]-a:a,n={transform:"",filter:""};for(var r in t.transforms){var o=t.transforms[r],l=transforms[r],c=intrp(o,e);l(n,c)}for(var i in n)0===n.opacity?t.el.style.opacity=0:t.el.style[i]=n[i]},lax.update=function(t){lastY=t,lax.elements.forEach(lax.updateElement)},lax}();
          "undefined"!=typeof module&&void 0!==module.exports?module.exports=lax:window.lax=lax}();

window.onload = function() {
  lax.setup()
  
  document.addEventListener('scroll', function(e) {
  lax.update(window.scrollY)
  }, false)
}

