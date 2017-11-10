var running = false;
var shopURL = "http://www.supremenewyork.com/shop/all";
var itemArr = [];
var index = 0;
var desiredNumberOfItems = 1 //TODO EDIT THIS WITH CORRECT NUMBER OF ITEM
var maxIndex = desiredNumberOfItems + 1;

chrome.runtime.onMessage.addListener(function (req, sender, res) {
  console.log(itemArr);
  if (req.type == "addToItemArr") {
    pushToItemArr(req.url);
  }
  if (req.type == 'keep_searching') {
    search();
  }
  if (req.type == 'stop') {
    running = false;
  }
});

// listenser to go to next item page after all url loaded
chrome.tabs.onUpdated.addListener(function (tabId , info) {
  if (info.status === 'complete' && maxIndex === itemArr.length && running) {
    var next = nextIndex();
    if (next != -1) {
      chrome.tabs.update({url: itemArr[next]});
    } else {
      return;
    }
  }
});

function pushToItemArr(url) {
  itemArr.push("http://www.supremenewyork.com" + url);
}

function run() {
  chrome.tabs.create({url: shopURL});
  running = true;
};

function search() {
  if (running) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: shopURL});
    });
  }
}

function nextIndex() {
  if (index < maxIndex) {
    chrome.storage.sync.set({
      'currentIndex': index
    }, function (res) {});

    var temp = index;
    index++;
    return temp;
  } else {
    return -1;
  }
}
