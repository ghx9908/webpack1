(() => {
  var modules = {
    "./loaders/less-loader.js!./src/index.less": module => {
      module.exports = "#root {\n  color: red;\n}\n";
    },
    "./src/index.less": (module, __unused_webpack_exports, require) => {
      let styleCSS = require("./loaders/less-loader.js!./src/index.less");
      let style = document.createElement('style');
      style.innerHTML = styleCSS;
      document.head.appendChild(style);
    }
  };
  var cache = {};
  function require(moduleId) {
    var cachedModule = cache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = cache[moduleId] = {
      exports: {}
    };
    modules[moduleId](module, module.exports, require);
    return module.exports;
  }
  (() => {
    require.n = module => {
      var getter = module && module.__esModule ? () => module['default'] : () => module;
      require.d(getter, {
        a: getter
      });
      return getter;
    };
  })();
  (() => {
    require.d = (exports, definition) => {
      for (var key in definition) {
        if (require.o(definition, key) && !require.o(exports, key)) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
        }
      }
    };
  })();
  (() => {
    require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
  })();
  (() => {
    require.r = exports => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
      }
      Object.defineProperty(exports, '__esModule', {
        value: true
      });
    };
  })();
  var exports = {};
  (() => {
    "use strict";
    require.r(exports);
    var _index_less_0__ = require("./src/index.less");
    var _index_less_0___default = require.n(_index_less_0__);
  })();
})();