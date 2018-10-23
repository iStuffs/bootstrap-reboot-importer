var reboot = require("./index");

module.exports = function(eyeglass, sass) {
  return {
    sassDir: reboot.includePaths[0]
  };
};
