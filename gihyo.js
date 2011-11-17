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
    div.setAttribute('style', 'width: 100%; font: 35px bold; position: absolute; opacity:0.5; background-color: black; color: white; left: 0px; top: 0px;');
    div.appendChild(message);
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(div);
    console.log('gihyo.js: message has shown.');
  }
};
//技評
var gihyo = function(){
  var skip = document.getElementById('skip');
  if (skip) {
    return skip.firstChild;
  }
  return null;
};

//マイナビニュース
var mynavi_news = function(){
  var iframes = document.querySelectorAll('iframe');
  console.log(iframes);
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    if (iframe) {
      if (!iframe.contentDocument) continue;

      var skip_mycom = iframe.contentDocument.querySelector('div#footer-btn-skip a');
      if (skip_mycom) {
        return skip_mycom;
      }
    }
  }
  return null;
};

var count = 1;
var timer = setInterval(function(){
  console.log('start to search skip button.');
  var result = gihyo() || mynavi_news();
  if (result) {
        do_skip(result);
        clearInterval(timer);
        return;
  }
  console.log('count ' + count);
  if (count > 10) {
    console.log('timer end.');
    clearInterval(timer);
    return;
  }
  count++;
  console.log('count ' + count);
}, 500);
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
