import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [];
function loadRoutes(ctx) {
  ctx.keys().forEach((key) => {
    if (key === './index.js') {
      return;
    }

    if (Array.isArray(ctx(key).default)) {
      routes.push(...ctx(key).default);
    }
  });
}

export function createRouter() {
  loadRoutes(require.context('~/modules', true, /routes\.js$/));
  const positionsMap = {};

  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [...routes],
    scrollBehavior(to, from, savedPosition) {
      if (from.meta.keepScroll && process.client) {
        positionsMap[from.name] = {
          x: window.scrollX,
          y: window.scrollY,
        };
      }

      if (to.meta.keepScroll) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(savedPosition || positionsMap[to.name]);
          }, 10);
        });
      }

      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth',
        };
      }

      return { x: 0, y: 0 };
    },
  });
}
