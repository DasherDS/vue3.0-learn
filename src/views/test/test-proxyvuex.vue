<template>
    <div>
        <h3>测试vuex响应式的页面</h3>
        <div class="test">
            <a-progress :percent="number.num" status="active" />
            <a-button type="success" @click="addnum">增加</a-button>
            <hr />
            <a-progress type="circle" :percent="numberHooks.num"/>
            <a-button type="danger" @click="hooksaddnum"
                >vuexhooks增加</a-button
            >
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { vuexNumHooks } from "../../hooks/vuextestnum";
export default {
    setup() {
        const store = useStore();
        let nums = store.state.testNum;
        const number = ref(nums);
        function addnum() {
            number.value.num++;
            store.dispatch("setNum", number.value);
            console.log(store.state.testNum);
            console.log(number.value);
        }
        const { numberHooks, hooksaddnum } = vuexNumHooks();
        return { number, addnum, numberHooks, hooksaddnum };
    },
};
</script>

<style lang="scss" scoped>
.test {
    margin: 0 auto;
    width: 500px;
}
</style>