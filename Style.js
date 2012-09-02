define(['./getBrowserPrefix'], function(getBrowserPrefix) {
  var needsPrefix = {'animation': true, 'transition': true};

  function get_safe_property(property) {
    if (getBrowserPrefix() && needsPrefix.hasOwnProperty(property)) {
      return '-' + getBrowserPrefix() + '-' + property.substring(0, 1).toLowerCase() + property.substring(1);
    }

    return property;
  }

  var Style = {
    set: function(elem, property, value) {
      elem.style[get_safe_property(property)] = value;
    }
  };

  return Style;
});