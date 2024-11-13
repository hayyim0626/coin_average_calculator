import type { Config } from "jest";

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@/utils/(.*)$": "<rootDir>/utils/$1"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};

export default config;
