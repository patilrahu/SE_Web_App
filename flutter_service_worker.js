'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1",
"index.html": "93fe26da1e0baadacc4a6fa7afa4fdc5",
"/": "93fe26da1e0baadacc4a6fa7afa4fdc5",
"main.dart.js": "3f89f8a4dc1551f59ca8ea4dd09f78c3",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fe7743ec12c303533634fb529a77ea1d",
"assets/AssetManifest.json": "62ac949751c124662444a9f14bebfc04",
"assets/NOTICES": "7255992d7b915f95adb3cd07250ffb20",
"assets/FontManifest.json": "5c0e929a9c5351e2bd749233732d6cd6",
"assets/AssetManifest.bin.json": "286911175ba26f03360b39f7db449a10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "42bb78f3ccb5a2ec206d0710d60bc3b4",
"assets/fonts/MaterialIcons-Regular.otf": "ed0e099511962adf2bf8638cb068f9b9",
"assets/assets/good_morning.png": "44020d1ed6c5dc6a083cfec86f38a08c",
"assets/assets/transparency.png": "bdaff98de86286daa41c18a5a0e47f9d",
"assets/assets/category_bg_image.png": "b03150d8d7dd09f5a919544f3b0b69a9",
"assets/assets/flag.png": "7b200dfaee361766d412c52bfafa6bd8",
"assets/assets/temple.png": "46c968a3925762f9d385f12ed784d156",
"assets/assets/Login.png": "b8cd85e076c2e45bbb1a2c2af6a7af74",
"assets/assets/login_bg.png": "76a4e5553050f0db1d3cd193605f2b08",
"assets/assets/Onboading%2520-%2520Satsang.png": "2a91f95b776c90ca6aaadb9da678b1ba",
"assets/assets/secondforward.png": "8ab2d968c39b4fd83dfd274b51bc7358",
"assets/assets/workship.png": "b6bfe6f7decae911b70c3a359bf5139c",
"assets/assets/emailImage.png": "8a8f36edae435e980e3a212722140242",
"assets/assets/login_full.png": "1fe8c47e59f61c64147d999c4a817e1c",
"assets/assets/Onboading%2520-%2520Meditation.png": "62d0740b29ecc18cdc86dcb9a826295c",
"assets/assets/pana.png": "6f7ab5150817302ca3bf16c8597b5d80",
"assets/assets/login_image.png": "3717a381dd8b360f742b03193c6ff6f2",
"assets/assets/light_splash_logo.png": "decf3375192c2f443eed26c6fa6cedf5",
"assets/assets/padlock_icon.png": "4ce784c06bfde8ccec6175d9b1e348e9",
"assets/assets/tab.png": "6c145ac92e8431d0fd53e14587a4aac1",
"assets/assets/user.png": "d9456107ae00a0e0385fdf9001d126f5",
"assets/assets/logo_name.png": "b1e2b559688270b1117bd6e6fab79c4e",
"assets/assets/profileEventNavigationIcons/myProfile.svg": "8bbf87e4a84c2fb455638733f17db0b7",
"assets/assets/profileEventNavigationIcons/termsOfUse.svg": "0ebae2de9c14a290eaa112ad1ebbf769",
"assets/assets/profileEventNavigationIcons/deleteAccount.png": "631c7c92cf0b39100ae80e580a218ca7",
"assets/assets/profileEventNavigationIcons/privacyPolicy.svg": "c6b0ee92f2389e6c5cb9a21c57551a18",
"assets/assets/profileEventNavigationIcons/aboutUs.svg": "aad707c75d4537a6b8e525d9f2482ec1",
"assets/assets/profileEventNavigationIcons/addPackagesIcon.svg": "759b27f2b3efb0f4b62b6335430c8971",
"assets/assets/profileEventNavigationIcons/transferIcon.svg": "bb0a2926f05ad78c48512ad616fe366a",
"assets/assets/profileEventNavigationIcons/recentEvents.svg": "2ad8ddd817d9b7e69f15c1ccefed610b",
"assets/assets/profileEventNavigationIcons/feedback.png": "7dcd251d36170125cccc9e1da36b2874",
"assets/assets/profileEventNavigationIcons/helpAndFaq.svg": "f98942c3bef4b0eecd67df0a28cb3292",
"assets/assets/playIcon.png": "8472d219b58451e34c41a9bae2bba8e3",
"assets/assets/homeScreenTabIcons/moreIcon.png": "d33433822e49e253d954659533ce4b76",
"assets/assets/homeScreenTabIcons/download_arrow.svg": "3ef2617cef5b0c9751c699b93776a152",
"assets/assets/homeScreenTabIcons/searchIcon.svg": "d38d80a5fbcafb6d41ce82933e9ed48f",
"assets/assets/homeScreenTabIcons/bottomTabCategoriesIcon.svg": "36ea9f71cefc85cd3951ade2b27985d8",
"assets/assets/homeScreenTabIcons/homeIcon.svg": "f4ae5b5e8a605448cde88717412deb1d",
"assets/assets/homeScreenTabIcons/bottomTabMoreIcon.svg": "d5cbe3c8432b9c7c22c4edfdd8267a34",
"assets/assets/homeScreenTabIcons/bottomTabMypurchaseIcon.svg": "1616d333eda8dbb0148fbb0cea0ee8a0",
"assets/assets/homeScreenTabIcons/play_arrow.svg": "bdc9e8a86a25d9304612400bb9b0bd0c",
"assets/assets/bg_image_splash.png": "cbc540f1cb9ef4ce25c984f16803485b",
"assets/assets/search.png": "ed823446d96f02d419e894de6f4492a4",
"assets/assets/sub_category_mediation.png": "cfdb2e5176ba5c1e1e4cdc454993a270",
"assets/assets/Onboading%2520-%2520Bhakti.png": "766dc3c395b6b2c38ed278c78289f59e",
"assets/assets/mail_icon.png": "32d264c62c53dd4d7b2a285c7527e9d9",
"assets/assets/history.png": "143de302931aa460ad9deeeb3672041c",
"assets/assets/statue.png": "b2223a93ab754bdc6ff76fd31dd77fb1",
"assets/assets/wellcome_screen.png": "677f086bb12c88aa3f428bde5980c355",
"assets/assets/profile_icon_bg.png": "0fa9f0ff340a0f6e6e8678427e502b29",
"assets/assets/pause.png": "32c63b91c95adafc60a9a19eefb580ea",
"assets/assets/About%2520Us.png": "f9aa37396c6322db180fb1493c737a01",
"assets/assets/splash_screen_bg.png": "5309065f7e508b5e6e930105e154af18",
"assets/assets/profile_screen_icons/profile_screen_notification_icon.svg": "dba52d2cbd3f8cf726c5ae3efe94fc49",
"assets/assets/profile_screen_icons/favourateIcon.svg": "b758feecd6763ed136a50566b628599b",
"assets/assets/profile_screen_icons/playeventImage.png": "aef6f1aac756d0b11fc7890b61eefe2a",
"assets/assets/profile_screen_icons/profile_screen_mail_icon.svg": "8ccd1d4daa1d08f9a0b5b02357f31fc0",
"assets/assets/profile_screen_icons/bachward_arrow_icon.svg": "8fcf434a086a813ae5a6085a40268d47",
"assets/assets/profile_screen_icons/radi0ButtonUnselecetd.svg": "6b4494a216601cd3c58626558067cab9",
"assets/assets/profile_screen_icons/downloadImage.png": "176527abb96dbd85c56d40332c9da9e7",
"assets/assets/profile_screen_icons/profile_screen_editIcon.svg": "8ac4465ffbba2d7cb43015a1eb475b3a",
"assets/assets/profile_screen_icons/forward_arrow_icon.svg": "e3ebf0a2343cbc51a82175c3e0eef381",
"assets/assets/profile_screen_icons/radi0ButtonSelecetd.svg": "bdb9b868f2b5b9972185046cb59aefb8",
"assets/assets/profile_screen_icons/profile_screen_phone_number.svg": "c30f01fda700030dc4e0fd1222da0a80",
"assets/assets/profile_screen_icons/downloadIcon.svg": "05a2061f9200377b763ed5a3718bdc35",
"assets/assets/walkthrough_1.png": "df533eea4c591261af6ad4bdfb5f0e93",
"assets/assets/searchScreenIcons/seacrchScreenFilterIcon.svg": "70aa65e25035f06a4c370457b7e1a765",
"assets/assets/searchScreenIcons/forwardArrowBlack.svg": "f29cb69c8f07318947cadad4be7441cc",
"assets/assets/searchScreenIcons/bottomSheetCancleIcon.svg": "0e9a2609e1b160d4722f935129e8615c",
"assets/assets/searchScreenIcons/bachward_arrow_icon.svg": "f72d3e78e1a010aca32a5c073a595922",
"assets/assets/searchScreenIcons/bottomSheetCloseImage.png": "5161d785dfd50b246b49b363a5c7d7bb",
"assets/assets/searchScreenIcons/forward_arrow_icon.svg": "671c247a3c192274635205db19d4e276",
"assets/assets/art.png": "1e85f8d461264cce05ec505b44f64d2b",
"assets/assets/bg_home.png": "99e804fe44defd766f07f07399128aab",
"assets/assets/walkthrough_2.png": "4ade282edf8fcc687d21ea90be3590fa",
"assets/assets/filter_new.png": "b956794e5d80630bc2a463a8e3ab4059",
"assets/assets/walkthrough_3.png": "4c5650083fcb139c44442af2c12b69df",
"assets/assets/fonts/Gilroy-Medium.ttf": "d8ee4539e9ba9211a8b532e325075577",
"assets/assets/fonts/Gilroy-Regular.ttf": "22d25e11ebe6b43e5a9bc87d0a0ccb61",
"assets/assets/fonts/Gilroy-Light.ttf": "25e5ce9784cf3324af89cfd13fa59517",
"assets/assets/fonts/Gilroy-ExtraBold.otf": "0f6e082f42f5247d82c3ade9c2a8f928",
"assets/assets/secondback.png": "3082149e3ee31a7d0490230a1e48cc88",
"assets/assets/cuate.png": "59933afffdf92d9344efb62b2336dd84",
"assets/assets/landscape.mp4": "48172bd2c5b45574d170457a7d8b91da",
"assets/assets/notification.png": "ef8ad9bfbb82afcc8413d26c2d27cc70",
"assets/assets/splash_logo.png": "862891835c1ff32803829ce95632033e",
"assets/assets/god_1.png": "dce663b40f3cfb1146f3eccb9e7b40f2",
"assets/assets/statue_new.png": "12761a10aa5cdbf16c412ff73f8a8a8f",
"assets/assets/sadguru.png": "0ce8cd9e0d1f2d3387df386e4b04f271",
"assets/assets/Welcome.png": "b5516bef5e2822315ce87c9e5a9997b5",
"50.png": "e915c2b95412198dbfae0b443fa89d33",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
