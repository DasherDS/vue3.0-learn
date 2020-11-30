<template>
    <div class="about">
        <h1>This is an about page</h1>
        <h2>{{ state.msg }}</h2>
        <span> {{ datas.ress.message }} </span>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    setup() {
        const state = reactive({
            msg: "this is test",
        });
        const { datas } = test();
        return { state, datas };
    },
};
function test() {
    const datas = reactive({
        ress: {
            message: "13",
            name: "456",
        },
    });
    return { datas };
}
</script>
