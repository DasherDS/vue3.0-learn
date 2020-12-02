<template>
    <div>
        <h3>测试页面</h3>
        <ul>
            <li>
                <router-link to="/transitionclass" target="_blank">
                    <el-button type="primary">过渡效果的class</el-button>
                </router-link>
            </li>
            <li>
                <i class="el-icon-s-grid"></i>
                <router-link to="/vuexproxy">
                    <el-tag type="success">vuex测试</el-tag>
                </router-link>
            </li>
            <li>
                <el-button @click="handleReq" type="danger"
                    >测试请求接口</el-button
                >
            </li>
            <li>
                <router-link to="/antuitest">AntdesignUI测试</router-link>
            </li>
        </ul>

        <div class="lang">
            <ul>
                <li><a href="https://www.baidu.com/">百度</a></li>
                <li><a href="https://www.bing.com/">必应</a></li>
                <li><a href="https://www.google.com/">谷歌</a></li>
                <li><a href="https://www.sogou.com/">搜狗</a></li>
            </ul>
            <h3>测试国际化(插件I18n)</h3>
            <a-config-provider :locale="locale">
                <div
                    style="
                        width: 319px;
                        border: 1px solid #d9d9d9;
                        border-radius: 4px;
                    "
                >
                    <a-calendar :fullscreen="false" :value="datevalue" />
                </div>
            </a-config-provider>
            <el-button @click="chinese">中文</el-button>
            <el-button @click="english">english</el-button>
        </div>
        <router-view />
    </div>
</template>

<script>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import enGB from "ant-design-vue/es/locale/en_GB";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
    setup() {
        const locale = ref(zhCN);
        const datevalue = ref('')
        const router = useRouter();
        function chinese() {
            locale.value = zhCN;
        }
        function english() {
            locale.value = enGB;
            console.log(locale);
        }
        function handleReq() {
            console.log(router);
            router.push({ name: "Request" });
        }
        return { english, chinese, handleReq, locale,datevalue };
    },
};
</script>
<style lang="scss" scoped>
.lang {
    width: 300px;
}
ul,
li {
    list-style: none;
}
li {
    margin-bottom: 10px;
}
</style>