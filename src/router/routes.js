import BasicLayout from '../layout/BasicLayout/index';

const routes = [
  {
    path: '/login',
    component: () => import('../pages/Login/index.vue'),
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/',
        // redirect:'/form',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue'),
      },
      {
        path: '/form',
        component: () => import('../pages/Form/index.vue'),
      },
      {
        path: '/monitor',
        component: () => import('../pages/Monitor/index.vue'),
      },
      {
        path: '/notice',
        component: () => import('../pages/Notice/index.vue'),
      },
      {
        path: '/account',
        component: () => import('../pages/Account/index.vue'),
      },

    ],
  },

];

export default routes;
