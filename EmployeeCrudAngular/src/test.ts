// Este archivo es requerido por karma.conf.js y carga recursivamente todos los archivos .spec y del marco.
(window as any)._env = (window as any)._env || {};
(window as any).__env['apiUrl'] = window['env'] && window['env']['apiUrl'] || 'mrm-crud-api-qa.eastus.azurecontainer.io/api/employee'; // Valor predeterminado para las pruebas

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

// Primero, inicializa el entorno de pruebas de Angular.
getTestBed().initTestingModule({
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
});

// Luego, encontraremos todas las pruebas.
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);