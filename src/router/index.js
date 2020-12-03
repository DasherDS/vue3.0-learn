import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            index: 1 //用来处理左右切换动画
        }
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
        meta: {
            index: 2
        }
    },
    {
        path: "/ref",
        name: "Ref",
        component: () => import("../views/test-ref.vue"),
        meta: {
            index: 3
        }
    },
    {
        path: "/ref02",
        name: "Ref02",
        component: () => import("../views/test-ref02.vue"),
        meta: {
            index: 4
        }
    },
    {
        path: "/lifecycle",
        name: "Lifecycle-Hooks",
        component: () => import("../views/test-Lifecycle-Hooks.vue"),
        meta: {
            index: 5
        }
    },
    {
        path: "/reactive",
        name: "Reactive",
        component: () => import("../views/test-reactive.vue"),
        meta: {
            index: 6
        }
    },
    {
        path: "/toRef",
        name: "ToRef",
        component: () => import("../views/test-toRef.vue"),
        meta: {
            index: 7
        }
    },
    {
        path: "/toRefs",
        name: "ToRefs",
        component: () => import("../views/test-toRefs.vue"),
        meta: {
            index: 8
        }
    },
    {
        path: "/shallowReactive",
        name: "ShallowReactive",
        component: () => import("../views/test-shallowReactive.vue"),
        meta: {
            index: 9
        }
    },
    {
        path: "/shallowRef",
        name: "ShallowRef",
        component: () => import("../views/test-shallowRef.vue"),
        meta: {
            index: 10
        }
    },
    {
        path: "/toRaw",
        name: "ToRaw",
        component: () => import("../views/test-toRaw.vue"),
        meta: {
            index: 11
        }
    },
    {
        path: "/markRaw",
        name: "MarkRaw",
        component: () => import("../views/test-markRaw.vue"),
        meta: {
            index: 12
        }
    },
    {
        path: "/provideinject",
        name: "ProvideInject",
        component: () => import("../views/test-provide-inject.vue"),
        meta: {
            index: 13
        }
    },
    {
        path: "/watchwatchEffect",
        name: "WatchWatchEffect",
        component: () => import("../views/test-watchwatchEffect.vue"),
        meta: {
            index: 14
        }
    },
    {
        path: "/getCurrentInstance",
        name: "getCurrentInstance",
        component: () => import("../views/test-getCurrentInstance.vue"),
        meta: {
            index: 15
        }
    },
    {
        path: "/useStore",
        name: "useStore",
        component: () => import("../views/test-useStore.vue"),
        meta: {
            index: 16
        }
    },
    {
        path: "/getElement",
        name: "getElement",
        component: () => import("../views/test-getlabelElement.vue"),
        meta: {
            index: 17
        }
    },
    {
        path: "/todolist",
        name: "todolist",
        component: () => import("../views/todolist.vue"),
        meta: {
            index: 18
        }
    },
    {
        path: "/todolist02",
        name: "todolist02",
        component: () => import("../views/todolist02.vue"),
        meta: {
            index: 19
        }
    },
    {
        path:"/computed",
        name:"Computed",
        component: ()=> import("../views/test-computed.vue"),
        meta:{
            index:20
        }
    },
    {
        path:"/filters",
        name:"Filter",
        component:()=>import("../views/test-filters.vue"),
        meta:{
            index:21
        }
    },
    {
        path: "/testindex",
        name: "Testindex",
        component: () => import("../views/test/index.vue"),
        meta: {
            index: 20
        },
        children: [
            {
                path: "/transitionclass",
                name: "TransitionTlass",
                component: () => import("../views/test/transition-class.vue")
            },
            {
                path: "/request",
                name: "Request",
                component: () => import("../views/test/request.vue")
            },
            {
                path:"/vuexproxy",
                name:"Vuexproxy",
                component:()=> import("../views/test/test-proxyvuex.vue")
            },
            {
                path:"/antuitest",
                name:"AntUI",
                component:() =>import("../views/test/antUItest.vue")
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
