self.addEventListener("install", e=> {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "/black-binance-usd-busd-logo.png"]);
        })
    )
})

self.addEventListener("fetch", e => {
    console.log("intersepting")
})