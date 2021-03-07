// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
        console.log("[PWA Builder] Активный сервисный работник найденa, не требует регистрации");
    } else {
        // Register the service worker
        navigator.serviceWorker
        .register("pwabuilder-sw.js", {
            scope: "./"
        })
        .then(function (reg) {
            console.log("[PWA Builder] Ошибка сетевого запроса. Обслуживание содержимого из кеша: " + reg.scope);
        });
    }
    }
