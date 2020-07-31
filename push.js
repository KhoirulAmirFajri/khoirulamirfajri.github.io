var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BH7lY7rNDptdn5WnG9EVIio1cdLzFRABoBxOsyjo_Waj8mGnQE0i4nONwltihmwD7enhPFSm-m1mEzUypfIwRjk",
   "privateKey": "45cHdR7wsQ1YY007woAZRB8MJ12tgf9YM--3jw7riHY"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/cSsSgKEvbqo:APA91bHruDj8-vEXrKML5BieULsZXOVjDTeeij0w1qtgtWYdmZowJ8ZuZS46kJwZuocPsrEG2A-UOW1KpFjDs-qG6H2k5NeQuUs5bpflffwBbFn5rh9ws0PiQc6v8Qsyqs_V6fQeDOvO",
   "keys": {
       "p256dh": "BKuQ3bwdxm4e0Oe0ZTV+Zyc6lEoNLLFf7lumVRvyzgE+4f7qjsZhIPNbL3Gl3lN8xy9KiNcSAK5mjSIcZZZfMTc",
       "auth": "hHTMsZyAOrtdyM3jGxA"
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '734854197966',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);