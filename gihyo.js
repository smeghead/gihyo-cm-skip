console.log('gihyo.js: initialize start.');
var skip = document.getElementById('skip');
if (skip) {
  var skip_link = skip.firstChild;
  if (skip_link) {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent('click', false, true);
    skip_link.dispatchEvent(evt);
    console.log('gihyo.js: click skip link.');
  }
}
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
