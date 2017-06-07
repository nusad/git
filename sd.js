var cssId1 = 'area';  // you could encode the css path itself to generate id..
var cssId2 = 'main-menu';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId1,cssId2))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://rawgit.com/nusad/git/master/sd.css';
    link.media = 'all';
    head.appendChild(link);
}
