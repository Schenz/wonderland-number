module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(ts|ts)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['**/*.ts'],
    coverageDirectory: 'testCoverage',
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/build/",
        "testconfig.js",
        "package.json",
        "package-lock.json",
        "/src/index.ts",
        "/src/runtime.ts",
    ],
};