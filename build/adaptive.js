;(function() {
var text, text_preload_css, text_preload_html, text_preload_js, adaptivejs_utils_buildOrigin, adaptivejs_preloader, buildConfig, adaptivejs_utils_assets, adaptivejs_utils_isLocal, adaptivejs_utils_isCapturing, loader;
(function () {
  text = {
    load: function (id) {
      throw new Error('Dynamic load not allowed: ' + id);
    }
  };
  text_preload_css = 'body{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;margin:0}@-webkit-keyframes a{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}@keyframes a{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{-webkit-transform:translate3d(200%,0,0);transform:translate3d(200%,0,0)}}.loader{width:100%;position:relative;overflow:hidden;top:0;height:6px;background:#eaeaea;-webkit-background-size:400% 400%;background-size:400% 400%}.loader:after{display:block;height:6px;content:\'\';background:-webkit-linear-gradient(0deg,#f48020,#e1761e);background:linear-gradient(90deg,#f48020,#e1761e);-webkit-animation:a 2s linear infinite;animation:a 2s linear infinite}.logo{position:absolute;top:50%;left:50%;width:25%;margin:-12.5% 0 0 -12.5%;opacity:.5}';
  text_preload_html = '<div class="loader"></div><div class="logo"><svg class="js-preload-logo preloader-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" enable-background="new 0 0 32 32"><g id="Outlined" fill="#889ba6"><path d="M19.016 2.088v-.002s-5.05-2.48-6.002-2.032c-.825.385-4.118 6.257-4.9 7.674l10.902-5.64zM8.256 7.43C4.276 9.455.666 11.374.44 11.78c-.512.918 1.607 6.127 1.607 6.127s8.79-1.788 11.663-4.465c2.866-2.672 5.296-11.32 5.305-11.354L8.257 7.428z"/><path d="M27.325 13.014l-.447 12.454c.003 0 4.672-3.133 4.76-4.18.08-.907-3.474-6.883-4.313-8.274zm.303.52c.237-4.482.383-8.6.144-9-.54-.9-6.11-1.67-6.11-1.67s-2.85 8.506-1.965 12.332c.883 3.826 7.182 10.272 7.182 10.272l.74-11.934z"/><path d="M2.726 20.758c0 .006.378 5.614 1.24 6.214.746.52 7.53.43 9.154.397L2.726 20.75zm12.488-1.082C11.46 18.528 2.726 20.76 2.726 20.76l9.96 6.615h.002c3.76 2.446 7.256 4.632 7.72 4.625 1.052-.017 4.504-4.457 4.504-4.457s-5.944-6.72-9.698-7.867z"/></g></svg></div>';
  text_preload_js = '';
  adaptivejs_utils_buildOrigin = function () {
    /**
     *  Grabs the location of the build so we can reference assets
     *  with absolute urls
     */
    var cachedBuildScript;
    var getBuildOrigin = function () {
      var buildOrigin = '//localhost:8080/';
      // Find an adaptive build script
      if (!cachedBuildScript) {
        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
          if (/(mobify|adaptation|loader|adaptive)(\.min)?\.js/.test(scripts[i].getAttribute('src'))) {
            cachedBuildScript = scripts[i];
            break;
          }
        }
      }
      if (cachedBuildScript) {
        try {
          var adaptiveBuildSrc = cachedBuildScript.getAttribute('src');
          buildOrigin = adaptiveBuildSrc.replace(/\/[^\/]*$/, '/');
        } catch (e) {
          console.error('Couldn\'t determine adaptivejs build file used. The mobify-tag may be placed incorrectly.');
        }
      }
      return buildOrigin;
    };
    return getBuildOrigin;
  }();
  adaptivejs_preloader = function (preloadCss, preloadHtml, preloadJs, buildOrigin) {
    return function () {
      var head = document.getElementsByTagName('head');
      var body = document.getElementsByTagName('body');
      // Some older browsers throw exceptions if document.head/document.body doesn't exist
      if (!head.length || !body.length) {
        return;
      }
      head = head[0];
      body = body[0];
      var style = document.createElement('style');
      var container = document.createElement('div');
      var scriptEl = document.createElement('script');
      var meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width';
      style.className = 'capture-remove';
      container.className = 'preloader capture-remove';
      scriptEl.className = 'capture-remove';
      style.innerHTML = preloadCss;
      container.innerHTML = preloadHtml;
      scriptEl.innerHTML = preloadJs;
      head.appendChild(meta);
      head.appendChild(style);
      body.appendChild(container);
      head.appendChild(scriptEl);
    };
  }(text_preload_css, text_preload_html, text_preload_js, adaptivejs_utils_buildOrigin);
  buildConfig = {
    buildDate: 1446768412340,
    cacheHashManifest: {
      'css/stylesheet.css': '06599770',
      'css/stylesheet.css.map': 'f7dbb1fd',
      'js/ui.js': 'eadc88e9',
      'js/ui.js.map': '12084e0b'
    },
    captureLib: '//cdn.mobify.com/capturejs/capture-latest.min.js'
  };
  adaptivejs_utils_assets = function (buildOrigin, buildConfig) {
    var assetUtils = {};
    /**
     *  Returns the full url for the provided asset path
     *  including a cache breaker.
     *  basePath and cacheBreaker arguments are optional
     */
    assetUtils.getAssetUrl = function (path, baseUrl, cacheBreaker) {
      var hash = buildConfig.cacheHashManifest[path];
      // If path isn't found in the hashManifest, cache break with build date
      if (cacheBreaker === undefined) {
        cacheBreaker = hash ? hash : buildConfig.buildDate;
      }
      return (baseUrl || buildOrigin()) + path + '?' + cacheBreaker;
    };
    /**
     *  Dynamically adds an element to the page based on the nodeName
     *  and options supplied
     *
     *  ex: Utils.loadAsset('link', {
     *          href: 'css/stylesheet.css',
     *          rel: 'stylesheet',
     *          type: 'text/css'
     *      });
     */
    assetUtils.loadAsset = function (nodeName, options) {
      var firstScript = document.getElementsByTagName('script')[0];
      var script = document.createElement(nodeName);
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          script[prop] = options[prop];
        }
      }
      firstScript.parentNode.insertBefore(script, firstScript);
    };
    return assetUtils;
  }(adaptivejs_utils_buildOrigin, buildConfig);
  adaptivejs_utils_isLocal = function (buildOrigin) {
    /**
    *  If the build origin of adaptive.js or adaptation.js contains the string
    *  cdn.mobify, we know we are loaded from a bundle (preview or production)
    *  Otherwise, we're being previewed locally
    */
    var isLocal = function () {
      return buildOrigin().indexOf('cdn.mobify') === -1;
    };
    return isLocal;
  }(adaptivejs_utils_buildOrigin);
  adaptivejs_utils_isCapturing = function () {
    // Backwards compatibility fix needed for v6 tag
    // See https://github.com/mobify/adaptivejs/pull/209
    window.Mobify = window.Mobify || {};
    window.Mobify.api = true;
    /**
     *  Checks whether or not we're currently in "capturing" state.
     */
    var isCapturing = function () {
      if (document.getElementsByTagName('plaintext').length) {
        return true;
      }
      return false;
    };
    return isCapturing;
  }();
  /**
   * Scripts required here will be combined into adaptive.js
   */
  (function (preloader, AssetUtils, isLocal, isCapturing, buildConfig) {
    if (isCapturing()) {
      var local = isLocal();
      var adaptationScript = 'adaptation.' + (local ? '' : 'min.') + 'js';
      var stylesheetName = 'css/stylesheet.' + (local ? '' : 'min.') + 'css';
      // Load and display preload folder css/html/js (in that order)
      preloader();
      AssetUtils.loadAsset('script', {
        src: AssetUtils.getAssetUrl(adaptationScript),
        async: true,
        className: 'capture-remove'
      });
      AssetUtils.loadAsset('script', {
        src: buildConfig.captureLib || '//cdn.mobify.com/capturejs/capture-latest.min.js',
        async: true,
        className: 'capture-remove'
      });
      // Preload assets (on webkit only, as this breaks Firefox)
      if (!/webkit/i.test(navigator.userAgent)) {
        return;
      }
      AssetUtils.loadAsset('link', {
        href: AssetUtils.getAssetUrl(stylesheetName),
        rel: 'stylesheet',
        type: 'text/css',
        className: 'capture-remove'
      });
    }
  }  // relPath, forceSync
(adaptivejs_preloader, adaptivejs_utils_assets, adaptivejs_utils_isLocal, adaptivejs_utils_isCapturing, buildConfig));
  loader = undefined;
}());  //# sourceMappingURL=adaptive.js.map

}());