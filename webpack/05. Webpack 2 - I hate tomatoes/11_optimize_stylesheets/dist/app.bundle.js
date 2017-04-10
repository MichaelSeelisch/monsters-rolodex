!function(e){function n(e){delete installedChunks[e]}function r(e){var n=document.getElementsByTagName("head")[0],r=document.createElement("script");r.type="text/javascript",r.charset="utf-8",r.src=f.p+""+e+"."+w+".hot-update.js",n.appendChild(r)}function t(){return new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,t=f.p+""+w+".hot-update.json";r.open("GET",t,!0),r.timeout=1e4,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+t+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+t+" failed."));else{try{var o=JSON.parse(r.responseText)}catch(e){return void n(e)}e(o)}}})}function o(e){var n=A[e];if(!n)return f;var r=function(r){return n.hot.active?(A[r]?A[r].parents.indexOf(e)<0&&A[r].parents.push(e):_=[e],n.children.indexOf(r)<0&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),_=[]),g=!1,f(r)};for(var t in f)Object.prototype.hasOwnProperty.call(f,t)&&Object.defineProperty(r,t,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(n){f[e]=n}}}(t));return Object.defineProperty(r,"e",{enumerable:!0,value:function(e){function n(){x--,"prepare"===E&&(P[e]||p(e),0===x&&0===H&&l())}return"ready"===E&&i("prepare"),x++,f.e(e).then(n,function(e){throw n(),e})}}),r}function c(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:g,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:a,apply:u,status:function(e){if(!e)return E;D.push(e)},addStatusHandler:function(e){D.push(e)},removeStatusHandler:function(e){var n=D.indexOf(e);n>=0&&D.splice(n,1)},data:O[e]};return g=!0,n}function i(e){E=e;for(var n=0;n<D.length;n++)D[n].call(null,e)}function d(e){return+e+""===e?+e:e}function a(e){if("idle"!==E)throw new Error("check() is only allowed in idle status");return b=e,i("check"),t().then(function(e){if(!e)return i("idle"),null;I={},P={},k=e.c,m=e.h,i("prepare");var n=new Promise(function(e,n){y={resolve:e,reject:n}});v={};return p(1),"prepare"===E&&0===x&&0===H&&l(),n})}function s(e,n){if(k[e]&&I[e]){I[e]=!1;for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0==--H&&0===x&&l()}}function p(e){k[e]?(I[e]=!0,H++,r(e)):P[e]=!0}function l(){i("ready");var e=y;if(y=null,e)if(b)u(b).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(d(r));e.resolve(n)}}function u(r){function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];e.indexOf(t)<0&&e.push(t)}}if("ready"!==E)throw new Error("apply() is only allowed in ready status");r=r||{};var o,c,a,s,p,l={},u=[],h={},y=function(){console.warn("[HMR] unexpected require("+g.moduleId+") to disposed module")};for(var b in v)if(Object.prototype.hasOwnProperty.call(v,b)){p=d(b);var g;g=v[b]?function(e){for(var n=[e],r={},o=n.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var c=o.pop(),i=c.id,d=c.chain;if((s=A[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var a=0;a<s.parents.length;a++){var p=s.parents[a],l=A[p];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([p]),moduleId:i,parentId:p};n.indexOf(p)>=0||(l.hot._acceptedDependencies[i]?(r[p]||(r[p]=[]),t(r[p],[i])):(delete r[p],n.push(p),o.push({chain:d.concat([p]),id:p})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}(p):{type:"disposed",moduleId:b};var j=!1,D=!1,H=!1,x="";switch(g.chain&&(x="\nUpdate propagation: "+g.chain.join(" -> ")),g.type){case"self-declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(j=new Error("Aborted because of self decline: "+g.moduleId+x));break;case"declined":r.onDeclined&&r.onDeclined(g),r.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+g.moduleId+" in "+g.parentId+x));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(g),r.ignoreUnaccepted||(j=new Error("Aborted because "+p+" is not accepted"+x));break;case"accepted":r.onAccepted&&r.onAccepted(g),D=!0;break;case"disposed":r.onDisposed&&r.onDisposed(g),H=!0;break;default:throw new Error("Unexception type "+g.type)}if(j)return i("abort"),Promise.reject(j);if(D){h[p]=v[p],t(u,g.outdatedModules);for(p in g.outdatedDependencies)Object.prototype.hasOwnProperty.call(g.outdatedDependencies,p)&&(l[p]||(l[p]=[]),t(l[p],g.outdatedDependencies[p]))}H&&(t(u,[g.moduleId]),h[p]=y)}var P=[];for(c=0;c<u.length;c++)p=u[c],A[p]&&A[p].hot._selfAccepted&&P.push({module:p,errorHandler:A[p].hot._selfAccepted});i("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&n(e)});for(var I,M=u.slice();M.length>0;)if(p=M.pop(),s=A[p]){var U={},q=s.hot._disposeHandlers;for(a=0;a<q.length;a++)(o=q[a])(U);for(O[p]=U,s.hot.active=!1,delete A[p],a=0;a<s.children.length;a++){var R=A[s.children[a]];R&&((I=R.parents.indexOf(p))>=0&&R.parents.splice(I,1))}}var S,T;for(p in l)if(Object.prototype.hasOwnProperty.call(l,p)&&(s=A[p]))for(T=l[p],a=0;a<T.length;a++)S=T[a],(I=s.children.indexOf(S))>=0&&s.children.splice(I,1);i("apply"),w=m;for(p in h)Object.prototype.hasOwnProperty.call(h,p)&&(e[p]=h[p]);var N=null;for(p in l)if(Object.prototype.hasOwnProperty.call(l,p)){s=A[p],T=l[p];var C=[];for(c=0;c<T.length;c++)S=T[c],o=s.hot._acceptedDependencies[S],C.indexOf(o)>=0||C.push(o);for(c=0;c<C.length;c++){o=C[c];try{o(T)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:p,dependencyId:T[c],error:e}),r.ignoreErrored||N||(N=e)}}}for(c=0;c<P.length;c++){var L=P[c];p=L.module,_=[p];try{f(p)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:p,error:n,orginalError:e}),r.ignoreErrored||N||(N=n),N||(N=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:p,error:e}),r.ignoreErrored||N||(N=e)}}return N?(i("fail"),Promise.reject(N)):(i("idle"),Promise.resolve(u))}function f(n){if(A[n])return A[n].exports;var r=A[n]={i:n,l:!1,exports:{},hot:c(n),parents:(j=_,_=[],j),children:[]};return e[n].call(r.exports,r,r.exports,o(n)),r.l=!0,r.exports}var h=this.webpackHotUpdate;this.webpackHotUpdate=function(e,n){s(e,n),h&&h(e,n)};var y,v,m,b=!0,w="3bf0f02026bc62012749",O={},g=!0,_=[],j=[],D=[],E="idle",H=0,x=0,P={},I={},k={},A={};f.m=e,f.c=A,f.i=function(e){return e},f.d=function(e,n,r){f.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},f.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(n,"a",n),n},f.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},f.p="",f.h=function(){return w},o("./src/app.js")(f.s="./src/app.js")}({"./src/app.js":function(e,n,r){"use strict";var t=r("./src/app.scss");!function(e){e&&e.__esModule}(t);console.log("Testing Hot Module Replacement!")},"./src/app.scss":function(e,n){}});