const testPathIgnorePatterns = [
  "/node_modules/",
  "/dist/",
  "/.docz/",
  "/coverage/",
  "/reports/",
  "/src/Card/Card.mdx" //Sadly something in prettier's parsing is breaking here.
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
    }
  ]
};
