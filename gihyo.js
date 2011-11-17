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
var count = 1;
var mycom_check = setInterval(function(){
  console.log('start to search skip button.');
  var iframes = document.querySelectorAll('iframe');
  console.log(iframes);
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    if (iframe) {
      if (!iframe.contentDocument) continue;

      var skip_mycom = iframe.contentDocument.querySelector('img[src="/images/header/btn_skip.gif"]');
      if (skip_mycom) {
        console.log(skip_mycom.getAttribute('alt'));
        console.log(skip_mycom.parentElement);
        do_skip(skip_mycom.parentElement);
        console.log('skip execute.');
        clearInterval(mycom_check);
        return;
      }
    }
  }
  console.log('count ' + count);
  if (count > 10) {
    console.log('timer end.');
    clearInterval(mycom_check);
    return;
  }
  count++;
  console.log('count ' + count);
}, 500);

//マイナビニュース
var count_mynavi = 1;
var mynavi_check = setInterval(function(){
  console.log('start to search skip button.');
  var iframes = document.querySelectorAll('iframe');
  console.log(iframes);
  for (var i = 0; i < iframes.length; i++) {
    var iframe = iframes[i];
    if (iframe) {
      if (!iframe.contentDocument) continue;

      var skip_mycom = iframe.contentDocument.querySelector('div#footer-btn-skip a');
      if (skip_mycom) {
        console.log(skip_mycom.innerHTML);
        do_skip(skip_mycom);
        console.log('skip execute.');
        clearInterval(mynavi_check);
        return;
      }
    }
  }
  console.log('count_mynavi ' + count_mynavi);
  if (count_mynavi > 10) {
    console.log('timer end.');
    clearInterval(mynavi_check);
    return;
  }
  count_mynavi++;
  console.log('count_mynavi ' + count_mynavi);
}, 500);
/* vim: set ts=2 sw=2 sts=2 expandtab fenc=utf-8: */
