console.warn('service worker is running');

let cacheData = "appV1";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/favicon.ico',
                '/index.html',
                '/',
                '/users'
            ])
        })
    );
});

this.addEventListener("fetch", (event) => {
    if (!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((response) =>{
                if (response)
                {
                    return response;
                }

                let requestUrl=event.request.clone();
                fetch(requestUrl);
            })
        );
    }
});