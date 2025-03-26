"use strict";

var _warn = require("./utils/warn");

var _warn2 = _interopRequireDefault(_warn);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// https://developers.google.com/tag-manager/quickstart

var Snippets = {
  tags: function tags(_ref) {
    var id = _ref.id,
      events = _ref.events,
      dataLayer = _ref.dataLayer,
      dataLayerName = _ref.dataLayerName,
      preview = _ref.preview,
      auth = _ref.auth;

    var gtm_auth = "&gtm_auth=" + auth;
    var gtm_preview = "&gtm_preview=" + preview;

    if (!id) (0, _warn2.default)("GTM Id is required");

    var iframe =
      '\n      <iframe src="https://load.hub.viberate.com/ns.html?id=' +
      id +
      '"\n height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>';

    var script =
      '\n      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src="https://load.hub.viberate.com/7w2ksjarkvoy.js?"+i;f.parentNode.insertBefore(j,f);})(window,document,"script","hfoe","bhl16=aWQ9R1RNLU1KNDc0M1gmbD1oZm9l&apiKey=3864a2ac");';

    var dataLayerVar = this.dataLayer(dataLayer, dataLayerName);

    return {
      iframe: iframe,
      script: script,
      dataLayerVar: dataLayerVar,
    };
  },
  dataLayer: function dataLayer(_dataLayer, dataLayerName) {
    return (
      "\n      window." +
      dataLayerName +
      " = window." +
      dataLayerName +
      " || [];\n      window." +
      dataLayerName +
      ".push(" +
      JSON.stringify(_dataLayer) +
      ")"
    );
  },
};

module.exports = Snippets;
