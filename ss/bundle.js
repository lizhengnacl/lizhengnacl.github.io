!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){var t=e.target.result;t=t.slice(t.indexOf(",")+1),o(t)}function o(e){var t=a.url,n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState){var e=document.querySelector(a.container);try{var t="http://"+a.domain+"/"+JSON.parse(n.responseText).key}catch(e){throw"token is expired"}var r=document.createElement("div");r.className="item";var o=document.createElement("img");o.src=t,o.style.height="200px";var i=document.createElement("button");i.className="clipboard",i.setAttribute("data-clipboard-text",t),i.innerHTML="Copy to clipboard",r.appendChild(o),r.appendChild(i),e.appendChild(r),new Clipboard(".clipboard")}},n.open("POST",t,!0),n.setRequestHeader("Content-Type","application/octet-stream"),n.setRequestHeader("Authorization","UpToken "+a.token),n.send(e)}var a={container:"#container",url:"http://up.qiniu.com/putb64/-1",token:"xozWSPMxkMjIVoHg2JyXq4-7-oJaEADLOKHVR0vU:cBIMBDxrLxLnhOLCaxnEFN7D0T8=:eyJzY29wZSI6Impzc2RrIiwiZGVhZGxpbmUiOjE0OTA1ODc0MTh9",domain:"7xocov.com1.z0.glb.clouddn.com"};$("body").on("paste",function(e){var t=(e.clipboardData||e.originalEvent.clipboardData).items;for(var n in t){var o=t[n];if("file"===o.kind){var a=o.getAsFile(),i=new FileReader;i.readAsDataURL(a),i.onload=r}}})}]);