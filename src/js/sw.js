const CACHE='jnp-v2';
const ASSETS=['/','/index.html','/src/css/styles.css','/src/js/app.js','/src/data/questions.js','/assets/icons/logo.svg','/assets/icons/open-book.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(resp=>{const clone=resp.clone();caches.open(CACHE).then(cache=>cache.put(event.request,clone)).catch(()=>{});return resp;})).catch(()=>caches.match('/index.html')));});
