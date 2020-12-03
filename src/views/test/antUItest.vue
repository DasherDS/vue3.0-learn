<template>
    <div>
        <h1>AntUI</h1>
        <a-button type="primary" shape="round" @click="msgClick"> Primary </a-button>
        <a-button type="primary" @click="msgClick2">Primary</a-button>
    </div>
</template>

<script>
import { message } from 'ant-design-vue';
import { nextTick } from 'vue';
export default {
    name: "AntUI",
    setup() {
        function msgClick(){
            message.success('这个是antui的成功消息弹框')
        }
        function msgClick2(){
            nextTick(()=>{
                console.log("哈哈哈");
            })
        }
        return { msgClick,msgClick2 }
    },
};
</script>

<style lang="scss" scoped>
</style>