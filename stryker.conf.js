const path = require("path");

module.exports = function (config) {
  config.set({
    mutate: [
      "src/**/*.ts?(x)",
      "!src/**/*@(.test|.spec|Spec).ts?(x)",
      "!src/**/*@(.stories).ts?(x)",
      "!src/__mocks__/**/*.ts?(x)",
    ],
    mutator: "typescript",
    testRunner: "jest",
    reporters: ["progress", "clear-text", "html"],
    coverageAnalysis: "off",
    jest: {
      projectType: "custom",
      // Only use the unit test project
      config: require(path.resolve(__dirname, "./jest.config.js")).projects[0],
      configFile: path.resolve(__dirname, "./jest.config.js"),
      enableFindRelatedTests: true,
    },
  });
};
