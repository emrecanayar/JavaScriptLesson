"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var BASE_URL = "https://jsonplaceholder.typicode.com";
var getPhoto = function () {
    var data = (0, node_fetch_1["default"])("".concat(BASE_URL, "/photos/1"))
        .then(function (response) { return response.json(); })
        .then(function (photoData) { return photoData; });
    return data;
};
var result = getPhoto();
console.log(result);
