module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.setTemplateFormats(['njk', 'html']);

  return {
    dir: {
      input: 'src',
      output: '_site'
    }
  };
};
