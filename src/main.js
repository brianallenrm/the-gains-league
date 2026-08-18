import { App } from './App.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');
  const app = new App(container);
  app.init();
});
