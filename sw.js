const staticCacheName = 'site-static-v1'; // Added versioning to the cache name
const assets = [
    '/',
    '/index.html',
    '/src/App.js',
    '/src/App.tsx',
    '/src/main.tsx',
    '/src/style.css',
    '/src/assets/logoBASF/logo.svg',
    '/src/assets/logo.svg',
    '/src/components/Board/BoardTopBar.css',
    '/src/components/Board/BoardTopBar.jsx',
    '/src/components/LoginScreen/LoginScreen.jsx',
    '/src/components/LoginScreen/LoginScreenStyle.js',
    '/src/components/Tools/Full/TodoList/TodoList.jsx',
    '/src/components/Tools/styles.js',
    '/src/components/WorkArea/WorkAreaLocation.jsx',
    '/src/components/WorkArea/WorkAreaStyle.css',
    '/src/component/WorkComponent/WorkComponent.jsx',
    '/src/component/WorkComponent/WorkComponentStyles.jsx',
    '/src/ElectricProvider.tsx',
    '/src/cloudinaryConfig.js',
    '/src/services/ids.js',
    '/src/services/utils.js',
    '/src/services/DOM.js'
];

let webSocket = null;

// Function to connect WebSocket
function connect() {
  webSocket = new WebSocket('ws://localhost:5173/');

  webSocket.onopen = (event) => {
    console.log('WebSocket connection opened');
    keepAlive(); // Start keep-alive pinging
  };

  webSocket.onmessage = (event) => {
    console.log(`WebSocket received message: ${event.data}`);
  };

  webSocket.onclose = (event) => {
    console.log('WebSocket connection closed');
    webSocket = null;
  };
}

// Function to disconnect WebSocket
function disconnect() {
  if (webSocket === null) {
    return;
  }
  webSocket.close();
}

// Function to send keep-alive messages
function keepAlive() {
  const keepAliveIntervalId = setInterval(() => {
    if (webSocket) {
      webSocket.send('keepalive');
    } else {
      clearInterval(keepAliveIntervalId);
    }
  }, 20 * 1000); // 20 seconds interval
}

// Initialize WebSocket connection
connect();

// Service worker installation
self.addEventListener('install', (evt) => {
  console.log('Service worker has been installed');
  evt.waitUntil(
    caches.open(staticCacheName)
      .then((cache) => {
        console.log('Caching assets');
        return cache.addAll(assets);
      })
      .catch((err) => {
        console.error('Error caching assets:', err);
      })
  );
});

// Service worker activation
self.addEventListener('activate', (evt) => {
  console.log('Service worker has been activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key)) // Delete old caches
      );
    })
  );
});

// Service worker fetch event
self.addEventListener('fetch', (evt) => {
  const url = new URL(evt.request.url);

  // Bypass WebSocket requests
//   if (url.protocol === 'ws:' || url.protocol === 'wss:') {
//     return; // Bypass the service worker for WebSocket requests
//   }

//   // Allow some requests to bypass caching (e.g., WASM files)
//   if (url.pathname.endsWith('.wasm') || url.pathname.includes('electric-sql')) {
//     return; // Bypass the service worker for these requests
//   }

  // Handle other requests by checking cache first, then network
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    }).catch((err) => {
      console.error('Fetch failed:', err);
      throw err;
    })
  );
});
