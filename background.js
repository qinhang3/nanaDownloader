// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

var download = {};

chrome.webRequest.onBeforeRequest.addListener(
    function (info) {
        if (download[info.url] == undefined) {
            // alert("create " + info.url+ " now url = "+tab.url);
            chrome.tabs.create({
                url: info.url,
                active: false,

            }, function (tab) {
                download[info.url] = "done";
            });
        }

        return {};
    },
    // filters
    {
        urls: [
            "https://*.cloudfront.net/*.ts*"
        ]
        // types: ["other"]
    },
    // extraInfoSpec
    ["blocking"]
);