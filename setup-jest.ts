import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv();

// Mock para evitar erros de templates Angular
Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', { value: '<!DOCTYPE html>' });
