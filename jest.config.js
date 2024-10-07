module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    rootDir: 'src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    coverageDirectory: '../coverage',
    collectCoverageFrom: ['**/*.{ts,tsx,js}', '!**/node_modules/**']
  };
  