<template>
    <div>
        <h1>computed</h1>
        <span>count: {{ count }} </span>
        <br />
        <span>plusOne: {{ plusOne }} </span>
        <br />
        <span>count: {{ count2 }} </span>
        <br />
        <span>plusTwo: {{ plusTwo }} </span>
        <br />
        <a-input-search
            type="number"
            class="addnums"
            v-model:value="state"
            placeholder="只能输入数字"
            size="large"
            @search="onSearch"
        >
            <template #enterButton>
                <a-button type="dashed"> 可写计算加法 </a-button>
            </template>
        </a-input-search>
    </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
    name: "Computed",
    setup() {
        const count = ref(1);
        const count2 = ref(1);
        const state = ref(null);
        const plusOne = computed(() => {
            //只读
            return count.value + 1;
        });
        //可写
        const plusTwo = computed({
            get: () => count2.value,
            set: (val) => {
                count2.value += val;
            },
        });
        
        function onSearch() {
            console.log(state.value);
            plusTwo.value = Number(state.value);
        }

        return { count, count2, plusOne, plusTwo, state, onSearch };
    },
};
</script>

<style lang="scss" scoped>
.addnums {
    width: 300px;
}
</style>