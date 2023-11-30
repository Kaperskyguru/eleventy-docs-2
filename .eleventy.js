const allPlugins = require("./_11ty/allPlugins");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(allPlugins);

  eleventyConfig.addCollection("docsList", (collection) => {
    const tagsSet = {};
    collection.getAll().forEach((item) => {
      // console.log(item.data.collections, "as");

      if (!item.data.tags) return;
      item.data.tags
        .filter((tag) => !["docs"].includes(tag))
        .forEach((tag) => {
          if (!tagsSet[tag]) {
            tagsSet[tag] = [];
          }
          tagsSet[tag].push(item);
        });
    });

    console.log(tagsSet);

    return tagsSet;
  });

  return {
    markdownTemplateEngine: "njk",
  };
};
