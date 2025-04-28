module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'jsdom', 
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', 
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', 
    '^.+\\.(js|jsx)$': 'babel-jest', 
     '^.+\\.(css|scss)$': 'jest-transform-stub'
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'css', 'scss'], 
  collectCoverage: true, 
  coverageDirectory: './coverage', 
};
