import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

// @ts-ignore
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/chart",
                name: "Chart",
                component: () => import(/* webpackChunkName: "about" */ "../views/Chart.vue"),
            },{
                path: "/table",
                name: "Table",
                component: () => import(/* webpackChunkName: "about" */ "../views/Table.vue")
            },{
                path: "/siber",
                name: "Siber",
                component: () => import(/* webpackChunkName: "about" */ "../components/Common/Sidebar.vue")
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
