module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', './next', './husky'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
