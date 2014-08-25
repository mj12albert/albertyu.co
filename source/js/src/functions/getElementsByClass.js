/**
 * Dustin Diaz's getElementByClass
 * (http://www.dustindiaz.com/getelementsbyclass)
 */

var getElementsByClass = function(searchClass,node,tag) {
  var classElements = new Array();
  if ( node == null )
    node = document;
  if ( tag == null )
    tag = '*';
  var els = node.getElementsByTagName(tag);
  var elsLen = els.length;
  var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
  for (i = 0, j = 0; i < elsLen; i++) {
    if ( pattern.test(els[i].className) ) {
      classElements[j] = els[i];
        j++;
    }
  }
  return classElements;
}

module.exports = getElementsByClass;