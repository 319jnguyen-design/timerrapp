module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.setTemplateFormats(['njk', 'html']);

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
