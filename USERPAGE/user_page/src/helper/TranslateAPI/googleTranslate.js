const apikey = "AIzaSyDpKTL5xT-dpTxyCh2xWmXQlONwf9sqzvk"
const googleTranslate = require('google-translate')(apikey, { concurrentLimit: 20 });
export default googleTranslate;