<template>
    <div>监听多个值</div>
</template>

<script>
import { reactive, watch } from "vue";
export default {
    setup() {
        const state = reactive({
            count: 0,
            name: "李四",
        });

        watch(
            [() => state.count, () => state.name],
            ([newcount, newname], [oldcount, oldname]) => {
                console.log(`原count${oldcount}`);
                console.log(`原name${oldname}`);
                console.log("******************");
                console.log(`新count${newcount}`);
                console.log(`新name${newname}`);
            }
        );

        setTimeout(()=>{
            state.count ++ 
            state.name = "开心哦吼吼"
        },1000)
    },
};
</script>

<style>
</style>