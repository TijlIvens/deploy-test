module.exports = async (markdown, metaData) => {
  var pjson = require("./package.json");
  console.log(pjson.version);
  return markdown;
};
