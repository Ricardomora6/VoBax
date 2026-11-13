const V = 'vobax-v1';
const PDF = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(V).then(async c => {
    await c.addAll(CORE);
    try { await c.put(PDF, await fetch(PDF, { mode: 'no-cors' })); } catch (_) {}
  }).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(hit => {
    const net = fetch(e.request).then(r => {
      if (r && (r.ok || r.type === 'opaque')) {
        const cp = r.clone();
        caches.open(V).then(c => c.put(e.request, cp));
      }
      return r;
    }).catch(() => hit || (e.request.mode === 'navigate' ? caches.match('index.html') : undefined));
    return hit || net;
  }));
});
