import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "Home",
    redirect: { path: "/home" },
    component: () =>
      import(/* webpackChunkName: "MainLayout" */ "../layouts/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "HomeView",
        component: () =>
          import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
      },
      {
        path: "/statistics",
        name: "StatisticsView",
        component: () =>
          import(
            /* webpackChunkName: "StatisticsView" */ "../views/StatisticsView.vue"
          ),
      },
    ],
  },
];

export default routes;
