/* Bio Seeker — Service Worker
   Site එකේ pages ටික cache කරලා offline (හෝ weak data) වෙලාවකදීත් වැඩ කරන්න උදව් කරනවා.
   අලුත් page එකක් add කලාම, පහළ CACHE_FILES array එකට file name එක එකතු කරන්න. */

var CACHE_NAME = 'bioseeker-v2';
var CACHE_FILES = [
  'index.html',
  'videos.html',
  'notes.html',
  'quizzes.html',
  'exam.html',
  'diagrams.html',
  'tools.html',
  'focus.html',
  'privacy.html',
  'terms.html',
  'style.css',
  'script.js',
  'quizdata.js',
  'assets/logo.png',
  'manifest.json'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(CACHE_FILES);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // External API/YouTube/font requests always go to network — only cache our own site files.
  if (event.request.url.indexOf(self.location.origin) !== 0) return;

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      var networkFetch = fetch(event.request).then(function (response) {
        if (response && response.status === 200) {
          var copy = response.clone();
          caches.open(CACHE_NAME).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function () { return cached; });
      return cached || networkFetch;
    })
  );
});
