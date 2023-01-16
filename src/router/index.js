import { createRouter, createWebHistory } from 'vue-router';

import Home from '../features/Timesheet/components/Home/Home';
import Projects from '../features/Timesheet/components/Projects/Projects';

const routes = [
  { path: '/home', component: Home },
  { path: '/projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
