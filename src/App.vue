<template>
    <div id="nav">
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
        <router-link to="/watchwatchEffect">watch && watchEffect</router-link> |
        <router-link to="/getCurrentInstance">getCurrentInstance</router-link> |
        <router-link to="/useStore">useStore</router-link> |
        <router-link to="/getElement">获取标签元素</router-link> |
        <router-link to="/todolist">TODOLIST</router-link> |
        <router-link to="/todolist02">TODOLIST02</router-link>
    </div>
    <router-view />
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
</style>
