import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/hook', component: '@/pages/hook' },
    { path: '/', component: '@/pages/index' },
  ],
  define: {
    env: 'dev',
  },
});
