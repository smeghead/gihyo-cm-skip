console.log('gihyo.js: initialize start.');
var do_skip = function(skip_link) {
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
};
//技評
var skip = document.getElementById('skip');
if (skip) {
  do_skip(skip.firstChild);
}
//マイコミ
var iframe = document.querySelector('iframe');
if (iframe) {
  var skip_mycom = iframe.contentWindow.document.querySelector('img[src="/images/header/btn_skip.gif"]');
  console.log(skip_mycom.getAttribute('alt'));
  if (skip_mycom) {
    console.log(img.parentElement);
    do_skip(img.parentElement);
  }
}

/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
