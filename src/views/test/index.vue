<template>
    <div>
        <h3>测试页面</h3>
        <router-link to="/transitionclass" target="_blank">
            <el-button type="primary">过渡效果的class</el-button>
        </router-link>
        <div class="lang">
            <h3>测试国际化(插件I18n)</h3>
            <ul>
                <li><a href="https://www.baidu.com/">百度</a></li>
                <li><a href="https://www.bing.com/">必应</a></li>
                <li><a href="https://www.google.com/">谷歌</a></li>
                <li><a href="https://www.sogou.com/">搜狗</a></li>
            </ul>
            <el-button @click="chinese">中文</el-button>
            <el-button @click="english">english</el-button>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    setup(props,ctx) {
        function chinese() {
            console.log(props,ctx);
        }
        function english() {}
        return { english, chinese };
    },
};
</script>
<style lang="scss" scoped>
.lang {
    width: 300px;
}
</style>