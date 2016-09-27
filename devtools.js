alert("deltools is running")
// chrome.devtools.network.onRequestFinished.addListener(
//     function (request) {
//         if (request.response.bodySize > 10 * 1024) {
//             alert(request.request.url)
//             chrome.experimental.devtools.console.addMessage(
//                 chrome.experimental.devtools.console.Severity.Warning,
//                 "Large image: " + request.request.url);
//         }
//     });

// chrome.devtools.network.onRequestFinished.addListener(function( request) {
//     alert(request.request.url)
// })

// chrome.devtools.network.onNavigated.addListener(function(url){alert(url)})