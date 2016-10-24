//https://nanairo.co/videos/2158/play_lists/11173/segments/10502_1453872201467-j6cca700100.ts?token=44e26d15-b067-42a3-b4f7-39bcffb8b4a9
//https://nanairo.co/videos/2158/play_lists/11173/segments/10502_1453872201467-j6cca7000100.ts?token=44e26d15-b067-42a3-b4f7-39bcffb8b4a9

function create(){
    console.log("create!");

    for (var i = parseInt(localStorage["index"]); i < jQuery("#size").val() && localStorage["stop"]=="false" ; i++) {
        console.log("now index = " + i);
        var oldurl = jQuery("#oldUrl").val();
        var pos = oldurl.indexOf(".ts");
        var newUrl = oldurl.substring(0, pos - 3) + padLeft(i+"", 3) + oldurl.substr(pos);

        if (localStorage["tabs"] < 10) {
            localStorage["index"] = parseInt(localStorage["index"])+1;
            console.log(newUrl);
            chrome.tabs.create({
                url: newUrl,
                active: false

            }, function (tab) {
                // download[info.url] = "done";
            });
            localStorage["tabs"]++;
        } else {
            // console.log("now index = " + index);
            setTimeout(function(){create()},1000);
            break;
        }
    }
}

jQuery("#btn").on('click',function() {
    console.log(jQuery("#size").val());
    console.log(jQuery("#token").val());
    localStorage["index"]=jQuery("#start").val();
    localStorage["stop"]=false;
    create();
});

jQuery("#stopBtn").on('click',function() {
    localStorage["stop"]=true;
});

function padLeft(str,lenght){
    if(str.length >= lenght)
        return str;
    else
        return padLeft("0" +str,lenght);
}

setInterval(function(){
    jQuery("#token").val(localStorage["token"]);
    jQuery("#oldUrl").val(localStorage["oldUrl"]);
    jQuery("#tabs").val(localStorage["tabs"]);
    jQuery("#index").val(localStorage["index"]);
},1000);