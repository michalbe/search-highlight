var SH = function(node, word) {
  setTimeout(function() {
    node = Array.prototype.slice.call(node.children);
    node.forEach(function(node) {
      var content = node.innerHTML;
      content = content.replace(new RegExp(word, 'gi'), '<span class="sh-search">' + word + '</span>');
      node.innerHTML = content;
    });
  }, 500);
};
