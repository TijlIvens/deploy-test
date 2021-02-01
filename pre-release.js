const fs = require('fs');

const writFile = async (file, path) => {
  await fs.writeFile(path, JSON.stringify(file, null, 2) + '/n', (err) => {
    if (err) return console.log(err);
  });
};

module.exports = async (version) => {
  const project1Path = './packages/project1/package.json';
  const project2Path = './packages/project2/package.json';
  const package1Path = './packages/package1/package.json';

  const project1Json = require(project1Path);
  const project2Json = require(project2Path);
  const package1Json = require(package1Path);

  project1Json.version = version;
  project2Json.version = version;
  package1Json.version = version;

  project1Json.dependencies.package1Json = version;
  project2Json.dependencies.package1Json = version;

  await writFile(project1Json, project1Path);
  await writFile(project2Json, project2Path);
  await writFile(package1Json, package1Path);
};
