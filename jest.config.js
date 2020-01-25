const testPathIgnorePatterns = [
  "/node_modules/",
  "/dist/",
  "/.docz/",
  "/coverage/",
  "/reports/"
];

module.exports = {
  collectCoverage: true,
  projects: [
    {
      displayName: "test",
      preset: "ts-jest",
      snapshotSerializers: ["jest-emotion"],
      testPathIgnorePatterns,
      collectCoverage: true
    },
    {
      displayName: "lint:prettier",
      preset: "jest-runner-prettier",
      testPathIgnorePatterns
    },
    {
      displayName: "lint:stylelint",
      preset: "jest-runner-stylelint",
      testPathIgnorePatterns
    }
  ]
};
