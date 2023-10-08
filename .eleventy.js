
const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("asPostDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
      });

    eleventyConfig.addPassthroughCopy("./src/css/")
    eleventyConfig.addWatchTarget("./src/css/")
    eleventyConfig.addPassthroughCopy("./src/images/")
    eleventyConfig.addWatchTarget("./src/images/")

    eleventyConfig.addPassthroughCopy("./admin/")

    return {

        dir: {
            input: "src",
            output: "public",
        }
    }
}