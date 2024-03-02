importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
    apiKey: 'AIzaSyBqkH99jqhujUJVCy-jREKkm6i7OZ-KVwQ',
    authDomain: 'digitsitich.firebaseapp.com',
    projectId: 'digitsitich',
    storageBucket: 'digitsitich.appspot.com',
    messagingSenderId: '737410183127',
    appId: '1:737410183127:web:264216fdc2e5266cce6592',
    measurementId: 'G-RQ899NQVHN',
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
            };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});