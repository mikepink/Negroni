define(function() {
	var DOM = {
    append: function(elem, to) {
      to.appendChild(elem);
    },

    create: function(tag, attrs) {
      var node = document.createElement(tag);
      if (attrs) {
        for (var attr in attrs) {
          node.setAttribute(attr, attrs[attr]);
        }
      }

      return node;
    },

		createFragment: function() {
		  return document.createDocumentFragment();
		},

    empty: function(elem) {
      while(elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    },

    prepend: function(elem, to) {
      to.insertBefore(elem, to.firstChild);
    }
	};

	return DOM;
});