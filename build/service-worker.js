"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","d2ec60326ac4b593be784c70c077e592"],["/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/static/js/main.a4112a8f.js","2aa4a3dab654e6d93aaa9bae03a0c751"],["/static/media/2.4a35e3ca.jpeg","4a35e3ca3b1d6a853334a2fc39598a51"],["/static/media/3.1224b88f.jpeg","1224b88fa974086fc593c18a1abbae4a"],["/static/media/GOTHIC.cfce6abb.TTF","cfce6abbbff0099b15691345d8b94dcc"],["/static/media/GOTHICB.bc420c1c.TTF","bc420c1c2b98e2ee8b2a75c1ce1fe083"],["/static/media/flipboard-1.3860c13a.png","3860c13a402a0a0df6741c00cc268ff2"],["/static/media/flipboard-2.d6d01cf3.png","d6d01cf39d22f5fc8b4e942493fcbf6b"],["/static/media/flipboard-3.5b6952ca.png","5b6952cad6b2af7ebde9fe4e2d7e5dac"],["/static/media/flipboard-4.80ae6a3b.png","80ae6a3bf88f1a5117b1c698fd277977"],["/static/media/flipboard-5.c5493956.png","c549395600a192d5bb20bec7ede1b7c7"],["/static/media/flipboard-6.f11ea5d5.png","f11ea5d5e1966f44be350f3b052a4bf1"],["/static/media/flipboard-7.001e9439.png","001e94393a82d5e0fdfe5e24ddbce9f6"],["/static/media/flipboard-8.8862e96e.png","8862e96ee18d48ecb1804772b6e49f33"],["/static/media/flipboard-9.2e9fcd9f.png","2e9fcd9fcbded0b319d17c616d4a75c5"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});