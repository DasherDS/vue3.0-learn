import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/ref",
        name: "Ref",
        component: () => import("../views/test-ref.vue"),
    },
    {
        path: "/ref02",
        name: "Ref02",
        component: () => import("../views/test-ref02.vue"),
    },
    {
        path: "/lifecycle",
        name: "Lifecycle-Hooks",
        component: () => import("../views/test-Lifecycle-Hooks.vue"),
    },
    {
        path: "/reactive",
        name: "Reactive",
        component: () => import("../views/test-reactive.vue"),
    },
    {
        path: "/toRef",
        name: "ToRef",
        component: () => import("../views/test-toRef.vue"),
    },
    {
        path: "/toRefs",
        name: "ToRefs",
        component: () => import("../views/test-toRefs.vue"),
    },
    {
        path: "/shallowReactive",
        name: "ShallowReactive",
        component: () => import("../views/test-shallowReactive.vue"),
    },
    {
        path: "/shallowRef",
        name: "ShallowRef",
        component: () => import("../views/test-shallowRef.vue"),
    },
    {
        path: "/toRaw",
        name: "ToRaw",
        component: () => import("../views/test-toRaw.vue"),
    },
    {
        path: "/markRaw",
        name: "MarkRaw",
        component: () => import("../views/test-markRaw.vue"),
    },
    {
        path: "/provideinject",
        name: "ProvideInject",
        component: () => import("../views/test-provide-inject.vue"),
    },
    {
        path: "/watchwatchEffect",
        name: "WatchWatchEffect",
        component: () => import("../views/test-watchwatchEffect.vue"),
    },
    {
        path: "/getCurrentInstance",
        name: "getCurrentInstance",
        component: () => import("../views/test-getCurrentInstance.vue"),
    },
    {
        path: "/useStore",
        name: "useStore",
        component: () => import("../views/test-useStore.vue"),
    },
    {
        path: "/getElement",
        name: "getElement",
        component: () => import("../views/test-getlabelElement.vue"),
    },
    {
        path: "/todolist",
        name: "todolist",
        component: () => import("../views/todolist.vue"),
    },
    {
        path: "/todolist02",
        name: "todolist02",
        component: () => import("../views/todolist02.vue"),
    },
    {
        path: "/testindex",
        name: "Testindex",
        component: () => import("../views/test/index.vue"),
        children: [
            {
                path: "/transitionclass",
                component: () => import("../views/test/transition-class.vue")
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
