import { renderHeader } from './components/header.js';
import { renderSidebar } from './components/sidebar.js';
import {
  registerRoute,
  getCurrentRoute,
  renderContent,
} from './components/router.js';
import { dashboardPage } from './pages/dashboard.js';
import { alunosPage } from './pages/alunos.js';
import { pagamentosPage } from './pages/pagamentos.js';

function init(): void {
  // Register routes
  registerRoute('#/', dashboardPage);
  registerRoute('#/alunos', alunosPage);
  registerRoute('#/pagamentos', pagamentosPage);

  // Render static components
  renderHeader();

  // Render dynamic components
  function update(): void {
    const route = getCurrentRoute();
    renderSidebar(route);
    renderContent();
  }

  // Listen for hash changes
  window.addEventListener('hashchange', update);

  // Initial render
  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    update();
  }
}

document.addEventListener('DOMContentLoaded', init);
