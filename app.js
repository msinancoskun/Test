var CryptoJS = require("crypto-js");

// const key = "05e3391c94a74f0099d9f6c7c9365944";

var key = CryptoJS.enc.Utf8.parse('05e3391c94a74f0099d9f6c7c9365944');
var iv = CryptoJS.enc.Utf8.parse('4756389203948576');

var email = CryptoJS.AES.encrypt("a.kan", key,  
{
   keySize: 128 / 8,   
   iv: iv,
   mode: CryptoJS.mode.CBC,
   padding: CryptoJS.pad.Pkcs7 
});


var key = "05e3391c94a74f0099d9f6c7c9365944";
var email = CryptoJS.AES.encrypt(currentUserObj.get_email(), key);

console.log(encryptedlogin);

var data = CryptoJS.AES.decrypt(encryptedlogin, key, {
    keySize: 128 / 8,   
    iv: iv,  
    mode: CryptoJS.mode.CBC,  
    padding: CryptoJS.pad.Pkcs7 
 }).toString(CryptoJS.enc.Utf8);

console.log(data);