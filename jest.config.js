module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|react-navigation)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '^react-native-reanimated$': '<rootDir>/__mocks__/react-native-reanimated.js',
  },
};
