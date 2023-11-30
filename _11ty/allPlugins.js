"use strict";
const configureMarkdown = require("./configureMarkdown");
const navigation = require("./navigation");
const toc = require("./toc");

module.exports = function allPlugins(config) {
  config.setUseGitIgnore(false);
  config.addPlugin(configureMarkdown);
  config.addPlugin(toc);
  config.addPlugin(navigation);
};
