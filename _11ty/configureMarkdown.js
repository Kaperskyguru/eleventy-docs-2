"use strict";

const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItClass = require("@toycode/markdown-it-class");

module.exports = function configureMarkdown(config) {
  // configure markdown
  const mdClassesMapping = {
    h2: ["title", "is-2"],
    h3: ["title", "is-3"],
  };

  let opts = {
    permalink: true,
    permalinkClass: "anchor-link",
    permalinkSymbol: "#",
    level: [1, 2, 3, 4],
  };
  config.setLibrary(
    "md",
    markdownIt({
      html: true,
      linkify: true,
    })
      .use(markdownItAnchor, opts)
      .use(markdownItClass, mdClassesMapping)
  );
};
