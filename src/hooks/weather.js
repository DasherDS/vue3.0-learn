import { ref } from "vue"
import { useStore } from "vuex"
import { setStorage, getStorage } from "../utils/storage"
import { weatherRequest } from "../api/tianqi"
export function weatherHooks(city) {
    const store = useStore()
    const reqcity = ref(city)
    console.log(store.state.weather_store);
    let weather = store.state.weather_store
   
    let states = ref(weather)
    console.log(states);
    //获取数据存储到 本地
    async function getDatas() {
        let res = await weatherRequest(reqcity.value)
        setStorage('stroage_weather', res)
    }
    //从本地获取存储到vuex
    async function setVuex() {
        let storageData = await getStorage('stroage_weather')
        states.value =  JSON.parse(storageData)
        store.dispatch("setWeatherStore", states.value)
        
    }
    return { getDatas, reqcity, setVuex, states }

}