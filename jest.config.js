module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/coverage/',
    '<rootDir>/node_modules/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@core(.*)$': '<rootDir>/src/core$1',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/utils/**/*.{js,jsx,ts,tsx}',
    'src/hooks/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['node_modules'],
  resetMocks: false,
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.file.js'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  testTimeout: 30000,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation|@react-navigation/stack|react-native-config|@miblanchard/react-native-slider|react-native-gesture-handler|react-native-onesignal|react-native-code-push)',
  ],
  globals: {
    __DEV__: true,
  },
};
