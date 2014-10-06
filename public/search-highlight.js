var SH = function(node, word) {
  word = word.replace(/([^A-Za-z0-9])/g, '');
  setTimeout(function() {
    mainNode = Array.prototype.slice.call(node.children);
    mainNode.forEach(function(node) {
      var content = node.innerHTML;
      content = content.replace(new RegExp(word, 'gi'), '<span class="sh-search">' + word + '</span>');
      node.innerHTML = content;
    });
  }, 500);
};
