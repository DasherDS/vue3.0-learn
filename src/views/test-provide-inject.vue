<template>
    <div>
        <p>{{ txt }}</p>
        <ul>
            <li v-for="(item, i) in infoMsg" :key="i">
                {{ item }}
            </li>
        </ul>
        <hr />
        <Atest />
    </div>
</template>

<script>
import Atest from "../components/provide-inject/a";
export default {
    name: "ProvideInject",
    setup() {
        const txt =
            "与 Vue2中的 provide 和 inject 作用相同，只不过在Vue3中需要手动从 vue 中导入";
        const provideInfo =
            "向子组件以及子孙组件传递数据。接收两个参数，第一个参数是 key，即数据的名称；第二个参数为 value，即数据的值";
        const injectInfo =
            "接收父组件或祖先组件传递过来的数据。接收一个参数 key，即父组件或祖先组件传递的数据名称";
        const infoMsg = [provideInfo, injectInfo];

        //假设这有三个组件，分别是 A.vue 、B.vue 、C.vue，其中 B.vue 是 A.vue 的子组件，C.vue 是 B.vue 的子组件

        // 详见 components provide-inject 文件夹
        return { txt, infoMsg };
    },
    components: {
        Atest,
    },
};
</script>
<style lang="scss" scoped>
li {
    line-height: 30px;
}
</style>