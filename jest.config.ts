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

  moduleNameMapper: {
    '^@core/(.*)$': '<rootDir>/src/app/core/$1',
    '^@atoms/(.*)$': '<rootDir>/src/app/shared/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/src/app/shared/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/app/shared/components/organisms/$1',
    '^@pages/(.*)$': '<rootDir>/src/app/modules/pages/$1',
    '^@layout/(.*)$': '<rootDir>/src/app/layout/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

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
