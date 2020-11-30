<template>
    <div id="nav">
        <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="40"
            shapeType="star"
            :particleSize="4"
            linesColor="#FFFFFF"
            :linesWidth="2"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            class="cash"
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
            <router-link to="/provideinject">provide && inject</router-link> |
            <router-link to="/watchwatchEffect"
                >watch && watchEffect</router-link
            >
            |
            <router-link to="/getCurrentInstance"
                >getCurrentInstance</router-link
            >
            | <router-link to="/useStore">useStore</router-link> |
            <router-link to="/getElement">获取标签元素</router-link> |
            <router-link to="/todolist">TODOLIST</router-link> |
            <router-link to="/todolist02">TODOLIST02</router-link> |
            <router-link to="/testindex">测试DEMO</router-link>
            <router-view />
        </div>
    </div>
</template>

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
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.particles-js-canvas-el {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
.main {
    position: relative;
}
</style>
