console.warn("service-worker running");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const {registerRoute} = workbox.routing;
const {CacheFirst,NetworkFirst,StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponse} = workbox.cacheableResponse;

registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    plugins: [
      new CacheableResponse({statuses: [0, 200]})
    ],
  })
);

// Cache page navigations (html) with a Network First strategy
registerRoute(
    // Check to see if the request is a navigation to a new page
    ({ request }) => request.mode === 'navigate',
    // Use a Network First caching strategy
    new StaleWhileRevalidate({
      // Put all cached files in a cache named 'pages'
      cacheName: 'pages',
      plugins: [
        // Ensure that only requests that result in a 200 status are cached
        new CacheableResponse({
          statuses: [200],
        }),
      ],
    }),
  );

  // Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
    // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
    ({ request }) =>
      request.destination === 'style' ||
      request.destination === 'script' ||
      request.destination === 'worker',
    // Use a Stale While Revalidate caching strategy
    new StaleWhileRevalidate({
      // Put all cached files in a cache named 'assets'
      cacheName: 'assets',
      plugins: [
        // Ensure that only requests that result in a 200 status are cached
        new CacheableResponse({
          statuses: [200],
        }),
      ],
    }),
  );