module.exports = async (markdown, metaData) => {
  const fs = require("fs");

  const { version } = require("./package.json");

  var project1Json = require("./packages/project1/package.json");
  var project2Json = require("./packages/project2/package.json");

  project1Json.version = version;
  project2Json.version = version;

  fs.writeFile(
    "./packages/project1/package.json",
    JSON.stringify(project1Json, null, 2),
    (err) => {
      if (err) return console.log(err);
    }
  );

  fs.writeFile(
    "./packages/project2/package.json",
    JSON.stringify(project2Json, null, 2),
    (err) => {
      if (err) return console.log(err);
    }
  );

  return markdown;
};
