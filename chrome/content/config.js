// Generated by CoffeeScript 1.3.3
(function() {
  var exports;

  exports = window;

  exports.PCPrefs = {
    branch: Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefService).getBranch('extensions.cperapera.'),
    getString: function(key) {
      return this.branch.getComplexValue(key, Components.interfaces.nsISupportsString).data;
    },
    setString: function(key, value) {
      var s;
      s = Components.classes['@mozilla.org/supports-string;1'].createInstance(Components.interfaces.nsISupportsString);
      s.data = value;
      return this.branch.setComplexValue(key, Components.interfaces.nsISupportsString, s);
    },
    getInt: function(key) {
      return this.branch.getIntPref(key);
    },
    setInt: function(key, value) {
      return this.branch.setIntPref(key, value);
    },
    getBool: function(key) {
      return this.branch.getBoolPref(key);
    },
    setBool: function(key, value) {
      return this.branch.setBoolPref(key, value);
    }
  };

  exports.ppcConfigList = [[3, 'cpick1'], [3, 'cpick2'], [3, 'cpick3'], [3, 'cpick4'], [3, 'cpick5'], [3, 'cpinyin'], [1, 'showhanzi'], [1, 'flag'], [1, 'pinyin'], [2, 'docolors'], [1, 'css'], [0, 'enmode'], [2, 'highlight'], [2, 'title'], [2, 'selinlb'], [2, 'bottomlb'], [2, 'resizedoc'], [2, 'sticon'], [2, 'minihelp'], [2, 'tmtoggle'], [2, 'tmlbar'], [2, 'cmtoggle'], [2, 'cmlbar'], [2, 'nopopkeys'], [2, 'wpos'], [2, 'wpop'], [0, 'wmax'], [2, 'hidex'], [1, 'kindex'], [1, 'sfile'], [1, 'sfcs'], [0, 'smaxfe'], [0, 'smaxfk'], [0, 'smaxce'], [0, 'smaxck'], [0, 'snlf'], [1, 'ssep'], [0, 'popdelay'], [2, 'hidedef'], [2, 'checkversion']];

}).call(this);