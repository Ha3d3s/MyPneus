const C='pneus-v8',F=['./','index.html','favicon.svg','icon-192.png','icon-512.png','manifest.webmanifest','libs/three.min.js','libs/GLTFLoader.js','libs/firebase-app-compat.js','libs/firebase-auth-compat.js','libs/firebase-firestore-compat.js','firebase-config.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(fetch(e.request,{cache:'reload'}).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request)))});
