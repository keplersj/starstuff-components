const testPathIgnorePatterns = [
  "/node_modules/",
  "/dist/",
  "/.docz/",
  "/coverage/",
  "/reports/",
];

module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      preset: "ts-jest/presets/default-esm",
      snapshotSerializers: ["@emotion/jest/serializer"],
      testPathIgnorePatterns,
      collectCoverage: true,
      globals: {
        "ts-jest": {
          useESM: true,
        },
      },
      moduleNameMapper: {
        "^(\\.{1,2}/.*)\\.js$": "$1",
      },
    },
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns,
    },
    {
      displayName: "lint:stylelint",
      preset: "jest-runner-stylelint",
      testPathIgnorePatterns,
    },
    {
      runner: "eslint",
      displayName: "lint:eslint",
      testMatch: [
        "<rootDir>/src/**/*.js",
        "<rootDir>/src/**/*.ts",
        "<rootDir>/src/**/*.tsx",
      ],
    },
  ],
};