module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk,md,html");
    
    eleventyConfig.addPassthroughCopy('src');
    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('assets');

}