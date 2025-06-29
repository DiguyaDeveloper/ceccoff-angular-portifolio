import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/*.spec.ts'],

  // Diretório de saída da cobertura
  coverageDirectory: '<rootDir>/coverage',

  // Coleta de cobertura ativada
  collectCoverage: true,

  // Relatórios de cobertura
  coverageReporters: ['text-summary', 'lcov'],

  // Ignorar arquivos que não fazem sentido medir cobertura
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/main.ts',
    '<rootDir>/src/polyfills.ts',
    '.*\\.module\\.ts$', // Módulos Angular
    '.*\\.interface\\.ts$', // Interfaces
    '.*\\.mock\\.ts$', // Mocks
    '.*\\.spec\\.ts$', // Próprios testes
    '<rootDir>/src/environments/', // Environments
  ],

  // Meta mínima de cobertura global
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // Ambiente simulado de browser para Angular
  testEnvironment: 'jsdom',
};

export default config;
