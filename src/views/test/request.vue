<template>
    <div>请求接口</div>
    <span> 输入城市<a-input type="text" v-model="iptCity" /> </span>
    <a-button @click="getWeather">获取天气</a-button>

    <a-button @click="setVuex">存vuex</a-button>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { weatherRequest } from "../../api/tianqi";
import { setStorage, getStorage } from "../../utils/storage";
export default {
    setup() {
        const iptCity = ref("");
        const store = useStore();
        console.log(store.state);
        const { getWeather, setVuex } = weatherDO(store, iptCity);
        return { getWeather, setVuex, iptCity };
    },
};
function weatherDO(store, iptCity) {
    async function getWeather() {
        let res = await weatherRequest(iptCity.value);
        setStorage("stroage_weather", res);
    }
    function setVuex() {
        let storsgeData = getStorage("stroage_weather");
        console.log(storsgeData);
        store.dispatch("setWeatherStore", JSON.parse(storsgeData));
        console.log(store.state, 13212313213);
    }
    return { getWeather, setVuex };
}
</script>

<style>
</style>