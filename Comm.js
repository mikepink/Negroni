define(['./getBrowserPrefix'], function(getBrowserPrefix){
  var needsPrefix = {'animationEnd': true};

  function get_safe_event_name(event_name) {
    if (getBrowserPrefix() && needsPrefix.hasOwnProperty(event_name)) {
      return getBrowserPrefix() + event_name.substring(0, 1).toUpperCase() + event_name.substring(1);
    }

    return event_name;
  }

  var Comm = {
    listen: function(elem, event_name, callback) {
      if (window.addEventListener) {
        elem.addEventListener(get_safe_event_name(event_name), callback);
      }

    }
  };

  return Comm;
});