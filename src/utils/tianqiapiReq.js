import axios from "axios";
const service = axios.create({
    baseURL: "https://tianqiapi.com/",
    timeout: 15000
})


service.interceptors.response.use(response => {
    const data = response.data
    if (response.status !== 200) {
        return Promise.reject('errpr')
    } else {
        return data
    }

})

export default service