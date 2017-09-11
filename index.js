var bitcore = require("bitcore-lib");
var crypto = require('crypto');
var fs = require('fs');
var algorithm = 'sha256'
    , shasum = crypto.createHash(algorithm)

var privateKey = new bitcore.PrivateKey(bitcore.Networks.testnet);
var address = privateKey.toAddress();

console.log("my address: " + address.toString());
console.log("my privKey: " + privateKey.toString());

var utxo = {
    "txId": "115e8f72f39fad874cfab0deed11a80f24f967a84079fb56ddf53ea02e308986",
    "outputIndex": 0,
    "address": "17XBj6iFEsf8kzDMGQk5ghZipxX49VXuaV",
    "script": "76a91447862fe165e6121af80d5dde1ecb478ed170565b88ac",
    "satoshis": 50000
};

var transaction = new bitcore.Transaction()
    .from(utxo)
    .to('1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK', 15000)

console.log(transaction);