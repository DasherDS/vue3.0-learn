<template>
    <div>
        <h3>测试页面</h3>
        <router-link to="/transitionclass" target="_blank">
            <el-button type="primary">过渡效果的class</el-button>
        </router-link>
        <router-view />
    </div>
</template>

<script>
export default {
    setup() {},
};
</script>

<style>
</style>