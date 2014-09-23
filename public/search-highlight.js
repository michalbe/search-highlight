var SH = function(node, word) {
  node = Array.prototype.slice.call(node.children);
  node.forEach(function(node) {
    var content = node.innerHTML;
    content = content.replace(new RegExp(word, 'gi'), '<span class="sh-search">' + word + '</span>');
    node.innerHTML = content;
  });
};

SH(document.getElementsByTagName('pre')[0], 'first');
