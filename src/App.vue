<template>
    <div id="nav">
        <vue-particles
            color="#fff"
            :particleOpacity="0.7"
            :particlesNumber="60"
            shapeType="star"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="2"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
        >
        </vue-particles>
        <div class="main">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/ref">Ref</router-link> |
            <router-link to="/ref02">Ref02</router-link> |
            <router-link to="/lifecycle">生命周期</router-link> |
            <router-link to="/reactive">reactive</router-link> |
            <router-link to="/toRef">toRef</router-link> |
            <router-link to="/toRefs">toRefs</router-link> |
            <router-link to="/shallowReactive">shallowReactive</router-link> |
            <router-link to="/shallowRef">shallowRef</router-link> |
            <router-link to="/toRaw">toRaw</router-link> |
            <router-link to="/markRaw">markRaw</router-link> |
            <router-link to="/provideinject">provide & inject</router-link> |
            <router-link to="/watchwatchEffect"
                >watch & watchEffect</router-link
            >
            |
            <router-link to="/getCurrentInstance"
                >getCurrentInstance</router-link
            >
            | <router-link to="/useStore">useStore</router-link> |
            <router-link to="/getElement">获取标签元素</router-link> |
            <router-link to="/todolist">TODOLIST</router-link> |
            <router-link to="/todolist02">TODOLIST02</router-link> |
            <router-link to="/computed">computed-计算属性</router-link> |
            <router-link to="/filters">filters过滤器</router-link> |
            <router-link to="/nextTick">NextTick</router-link> |
            <router-link to="/firstjsx" >JSX页面的测试</router-link> |
            <router-link to="/todolistjsx" >直接跳转jsxTODOLIST</router-link> |
            <router-link to="/testindex">测试DEMO</router-link> |
            <a-tooltip placement="bottom">
                <template #title>
                    <span> {{txtTip}}</span>
                </template>
                <a-button @click="jump" size="small" type="primary">点击跳转</a-button>
            </a-tooltip>

            <!-- //这种推荐写法没办法和jsx兼容 -->
            <!-- <router-view v-slot="{ Component }">
                <transition :name="transitionName" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view> -->
            <transition :name="transitionName" mode="out-in">
                    <router-view />
            </transition>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
    setup() {
        let router = useRouter();
        const txtTip = `点击直接跳转路由，测试编程式路由`;
        const transitionName = ref("");
        function jump() {
            console.log(router);
            router.push({ name: "TransitionTlass" });
        }

        router.afterEach((to, from) => {
            if (to.meta.index > from.meta.index) {
                transitionName.value = "fold-left";
            }
            if (to.meta.index < from.meta.index) {
                transitionName.value = "fold-right";
            }
        });

        return { jump, txtTip, transitionName };
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        line-height: 30px;
        transition: 0.8s;
        font-weight: bold;
        color: #4e4e4e;
        // -exact
        &.router-link-active {
            color: #4276b9;
        }
    }
    a:hover {
        color: #4276b9;
    }
}
//粒子效果的css设置为背景
.particles-js-canvas-el {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-image: radial-gradient(#e1e4e7, #a0a2a3);
}
.main {
    position: relative;
}
//以下是页面路由切换的动画
.fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: 0.3s;
}
.fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: 0.3s;
}
.fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: 0.3s;
}
.fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: 0.3s;
}
@keyframes fold-right-in {
    0% {
        transform: translate3d(100%, 0, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
@keyframes fold-right-out {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(100%, 0, 0);
    }
}
@keyframes fold-left-in {
    0% {
        transform: translate3d(-100%, 0, 0);
    }
    100% {
        transform: translate3d(0, 0, 0);
    }
}
@keyframes fold-left-out {
    0% {
        transform: translate3d(0, 0, 0);
    }
    100% {
        transform: translate3d(-100%, 0, 0);
    }
}
</style>
