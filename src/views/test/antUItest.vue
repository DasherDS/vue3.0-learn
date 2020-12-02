<template>
    <div>
        <h1>AntUI</h1>
        <a-button type="primary" shape="round" @click="msgClick"> Primary </a-button>
        <el-button type="primary" @click="msgClick2">Primary</el-button>
    </div>
</template>

<script>
import { message } from 'ant-design-vue';
export default {
    name: "AntUI",
    setup() {
        function msgClick(){
            message.success('这个是antui的成功消息弹框')
        }
        function msgClick2(){
        }
        return { msgClick,msgClick2 }
    },
};
</script>

<style lang="scss" scoped>
</style>