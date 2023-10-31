module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
  
    testMatch: ['<rootDir>/tests/**/*.test.ts', '<rootDir>/tests/**/*.test.tsx'],
  
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],

    moduleDirectories: ["node_modules", "src"],

    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1"
    },
}