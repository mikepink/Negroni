define(function() {
	var browser_prefix = null;

  function get_browser_prefix() {
    if (window.navigator.userAgent.match('Safari') !== null) {
      return 'webkit';
    } else if (window.navigator.userAgent.match('Firefox') !== null) {
      return 'moz';
    } else {
      return '';
    }
  }

	return function() {
		if (browser_prefix === null) {
      browser_prefix = get_browser_prefix();
		}

		return browser_prefix;
	}
});