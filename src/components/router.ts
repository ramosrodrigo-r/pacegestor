export type RouteHandler = () => string;

interface Route {
  path: string;
  handler: RouteHandler;
}

const routes: Route[] = [];

export function registerRoute(path: string, handler: RouteHandler): void {
  routes.push({ path, handler });
}

export function getCurrentRoute(): string {
  return window.location.hash || '#/';
}

export function navigateTo(hash: string): void {
  window.location.hash = hash;
}

export function resolveRoute(): string {
  const current = getCurrentRoute();
  const route = routes.find((r) => r.path === current);
  if (route) {
    return route.handler();
  }
  return '<div class="empty-state"><p>Página não encontrada</p></div>';
}

export function renderContent(): void {
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = resolveRoute();
}
