// Nfeixukkukc noSize 气球 Nfeixukkukc
// W52najxcbis noSize 帽子 W52najxcbis
// Wojpnxl0oos 9.5    鞋子 Wojpnxl0oos 

var itemCodeArr = ['2kb2624aohk'];// TODO: EDIT THE ARRAY WITH IMG CODE Gwtwehm9ua4
var sizeArr= ['Large'] // TODO: 对应上面的img code， 没有size的写noSize Small Medium Large XLarge
var checkout = "/checkout";
var found = true;

/* store size array */
chrome.storage.sync.set({
  'sizeArr': sizeArr
}, function (res) {});

/* scrape URLs and push into itemArr */
for (var i = 0; i < itemCodeArr.length; i++) {
  var tempUrl = $('img[alt="'+ itemCodeArr[i] +'"]').parent().attr("href");
  if (!tempUrl) { // item was not found
    console.log('not found!');
    found = false;
    setTimeout(function () {
      chrome.runtime.sendMessage({type: "keep_searching"}, function(res){});
    }, 250); // retry after 250ms
    break;
  }
  console.log('found!');
  chrome.runtime.sendMessage({type: "addToItemArr", url: tempUrl}, function(res){});
}
if (found) {
  chrome.runtime.sendMessage({type: "addToItemArr", url: checkout}, function(res){});
}
