"use strict";

const pluginTOC = require("eleventy-plugin-toc");

module.exports = function toc(config) {
  config.addPlugin(pluginTOC, {
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
    wrapper: "div",
  });
};
