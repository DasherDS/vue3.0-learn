import { ref } from "vue";
import { useStore } from "vuex";

export function vuexNumHooks() {
    const store = useStore()
    let nums = store.state.hookstestNum
    const numberHooks = ref(nums)
    function hooksaddnum() {
        numberHooks.value.num++
        store.dispatch('hookssetNum', numberHooks.value)
    }
    return { numberHooks, hooksaddnum }

}