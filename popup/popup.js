$(function() {
  $("#start-btn").click(function(e) {
    var bgPage = chrome.extension.getBackgroundPage();
    bgPage.run();
  })
});
