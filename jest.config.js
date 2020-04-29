module.exports = {
    clearMocks: true,
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/client/setupTests.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false,
  };
  