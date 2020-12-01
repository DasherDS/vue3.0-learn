import { ref } from "vue"
import { useStore } from "vuex"
import { setStorage, getStorage } from "../utils/storage"
import { weatherRequest } from "../api/tianqi"
export function weatherHooks(city) {
    const store = useStore()
    const reqcity = ref(city)
    let weather = store.state.weather_store
    //获取数据存储到 本地
    async function getDatas() {
        let res = await weatherRequest(reqcity.value)
        setStorage('stroage_weather', res)
    }
    //从本地获取存储到vuex
    async function setVuex() {
        let storageData = getStorage('stroage_weather')
        await store.dispatch("setWeatherStore", JSON.parse(storageData))
        weather = store.state.weather_store
    }
    return { getDatas, reqcity, setVuex, weather }

}