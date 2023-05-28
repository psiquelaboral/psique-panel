const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@apis": "src/apis",
    "@components": "src/components",
    "@css": "src/css",
    "@img": "src/img",
    "@pages": "src/pages",
    "@router": "src/router",
    "@service": "src/service",
    "@store": "src/store",
    "@hooks": "src/hooks",
  })(config);

  return config;
};
