'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "519f862dbfce9ca9f3b6201d220ce903",
"assets/assets/images/aa.jpg": "610d91ecb513a79817790f816cae4040",
"assets/assets/images/android.png": "0a094b6927626d8d1e3243bf7991210d",
"assets/assets/images/anim.gif": "eef1299826a777a7d251ab4c8066b044",
"assets/assets/images/api.png": "c0a7f4699fdc43bff5addf16f3661313",
"assets/assets/images/cv.png": "0a00f140aac23c49eaf5c16c267d6edb",
"assets/assets/images/decla.jpg": "353aff224acc6f45c496fc0d23e665ed",
"assets/assets/images/dps.png": "138466b214f8e3d15891f9032218de39",
"assets/assets/images/dpsBanner.jpg": "1da10cf9bd49d20ba8226aad50439a2b",
"assets/assets/images/facebook.png": "82921e292773b513164a01478faf8abc",
"assets/assets/images/ff.jpg": "e2cad18dbd7cee6ef549cc383a53a978",
"assets/assets/images/firebase.png": "55fad351bd7de3e6312e4ab20de59eca",
"assets/assets/images/first-min.jpg": "08d71fc75b9e6e768b54cd6608b9844c",
"assets/assets/images/flutter.png": "d67c5451d95bec02ea6f8d3920df8c0e",
"assets/assets/images/git.png": "e45dbb88d35e9870dd1733c3b6e2ac53",
"assets/assets/images/github.png": "c5b2a15ede8fa463cd8297a36e35963e",
"assets/assets/images/hackathon.jpg": "1c350e1f2efc008491fdb6b198c383f8",
"assets/assets/images/hRank.jpg": "f8e5836765d82b4a8c4957ea938f25c0",
"assets/assets/images/instagram.png": "3d6bed969d9c44ff31af4ebe10c8e5b1",
"assets/assets/images/java.png": "7d9859f8e4db3ccaf7d0c3dea2052f48",
"assets/assets/images/kotlin.png": "834e6fc6eddd1e8b5abef77fbdaad05e",
"assets/assets/images/linkedin.png": "c6688d5c4775e2ddf961644957d010ea",
"assets/assets/images/mongo.png": "46afd6cbedb35628741e40e814238d4e",
"assets/assets/images/nasa.jpg": "98a84310ad1538d50a71f9f3f53e3fdd",
"assets/assets/images/node.png": "d1abd54743d124894df961ce694b4af6",
"assets/assets/images/npm.png": "5d3abffd681c754a6b83301c8646eb27",
"assets/assets/images/poi.png": "667e6238a72501d5bf7f2be9dc4dd9cb",
"assets/assets/images/poiBanner.jpg": "3f09290406cea3f3d86f2239b0377a20",
"assets/assets/images/qr.png": "21758561a8e5f02a0ca4679d64191d02",
"assets/assets/images/qrF.jpg": "d2a6bd0639a1e1a6f85bff1251885de6",
"assets/assets/images/quizBanner.jpg": "f34561e841aed9b361bd9985e52c4030",
"assets/assets/images/quiz_bg.png": "d80c7e0f54b360816c112471a769f779",
"assets/assets/images/restAPIBanner.jpg": "c04c12c39e54e6c9133e1fbe1f57fb47",
"assets/assets/images/resume.png": "0d5ec2019727f92c11f925c5c43ece13",
"assets/assets/images/sebiz.jpg": "60d91f5d5de04b7ce4439e82b1426477",
"assets/assets/images/side.png": "2e1dca67a25ddb349a735bf7aa33320c",
"assets/assets/images/stack.png": "7d2da191609bd73570fbc1e2546bf44c",
"assets/assets/images/twitter.png": "42491d3809532795d5fd4bf2dfd2ea42",
"assets/assets/images/user-g.png": "f6e864d5a157417ed925eb5eca3bcb04",
"assets/assets/images/user.png": "401fd4f868ca4f537c32d1b6a4740981",
"assets/FontManifest.json": "31fb32695319536899b1e4ad4c990ac8",
"assets/fonts/Bubble.ttf": "f08875198203069e203b5373d3d43dca",
"assets/fonts/Indie.ttf": "0841af952c807bdf56455b1addb4c7df",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/Yan.ttf": "d3e30c393c37d05e2a80a35b05b5a8d1",
"assets/NOTICES": "fce1b0682c1df642732a3dd9ef54b24e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "31561c722abd74d31b1126cffe869b59",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e55ad087187a3f41da8234118c1fb141",
"/": "e55ad087187a3f41da8234118c1fb141",
"main.dart.js": "cf02f39dae2167af2434b26bec31ee74",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
