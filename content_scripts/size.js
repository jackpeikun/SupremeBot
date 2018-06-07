chrome.storage.sync.get(['sizeArr', 'currentIndex'], function (res) {
  console.log(res.currentSize);
  if (res.sizeArr[res.currentIndex] != 'noSize') {
    var val = $('select option').filter(function () {
      return $(this).html() === res.sizeArr[res.currentIndex];
    }).val();
    $("select").val(val).change();
  }
  $("#add-remove-buttons :input")[0].click();
});
