importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');

workbox.routing.registerRoute(
    new RegExp('.*\.html'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    /.*\.css/,
    workbox.strategies.cacheFirst()
);
