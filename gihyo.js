console.log('gihyo.js: initialize start.');
var skip = document.getElementById('skip');
if (skip) {
  var skip_link = skip.firstChild;
  if (skip_link) {
    var evt = document.createEvent("MouseEvents");
    evt.initEvent('click', false, true);
    skip_link.dispatchEvent(evt);
    console.log('gihyo.js: click skip link.');
    var message = document.createTextNode();
    message.nodeValue = 'redirecting by chrome extensions(gihyo.jp cm skip)';
    var div = document.createElement('div');
    div.setAttribute('style', 'width: 350px; font: 13px bold; position: absolute; opacity:0.5; background-color: black; color: white; left: 0px; top: 0px;');
    div.appendChild(message);
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div);
    console.log('gihyo.js: message has shown.');
  }
}
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
