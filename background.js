// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

var download = {};

// chrome.webRequest.onBeforeRequest.addListener(
//     function (info) {
//         if (download[info.url] == undefined) {
//             // alert("create " + info.url+ " now url = "+tab.url);
//             chrome.tabs.create({
//                 url: info.url,
//                 active: false,
//
//             }, function (tab) {
//                 download[info.url] = "done";
//             });
//         }
//
//         return {};
//     },
//     // filters
//     {
//         urls: [
//             "https://*.cloudfront.net/*.ts*"
//         ]
//         // types: ["other"]
//     },
//     // extraInfoSpec
//     ["blocking"]
// );

var tabCnt  = 0 ;
setInterval(function () {
    chrome.tabs.query({},function(tabs){
        tabCnt = tabs.length;
        // console.log(tabCnt);
        localStorage["tabs"] = tabCnt;
    });
},10);





chrome.webRequest.onBeforeRedirect.addListener(
    function (info) {

        if (info.url.indexOf("nanairo.co") == 8 ) {
            var tokenLength = "904cdf2b-576d-48a1-9529-ad97d3ed1184".length;
            var length = info.url.length;
            var token = info.url.substr(length - tokenLength, tokenLength);
            localStorage["token"] = token;
            localStorage["oldUrl"] = info.url;
        } else if (info.url.indexOf("nanairo.co") == 12){

        }


        // if (download[token] == undefined){
        //     download[token] = "done";
        //     var pos = info.url.indexOf(".ts");
        //     for (var i = 0;i<225;i++){
        //         var newUrl = info.url.substring(0,pos-3) + padLeft(i,3) + info.url.substr(pos);
        //
        //         while(tabCnt > 10){
        //             console.log("waiting "+tabCnt);
        //         }
        //
        //         tabCnt ++;
        //
        //         chrome.tabs.create({
        //             url: newUrl,
        //             active: false
        //
        //         }, function (tab) {
        //
        //             // download[info.url] = "done";
        //         });
        //     }
        // }

        // if (download[info.url] == undefined) {
        //     // alert("create " + info.url+ " now url = "+tab.url);
        //     chrome.tabs.create({
        //         url: info.url,
        //         active: false,
        //
        //     }, function (tab) {
        //         download[info.url] = "done";
        //     });
        // }

        return {};
    },
    // filters
    {
        urls: [
            "https://nanairo.co/videos/*.ts*",
            "https://api.nanairo.co/v1/user/videos/*"
        ]
        // types: ["other"]
    }
    // extraInfoSpec
    // ["blocking"]
);

function padLeft(str,lenght){
    if(str.length >= lenght)
        return str;
    else
        return padLeft("0" +str,lenght);
}