import axios from "axios";
import { Message } from 'element-plus'
const service = axios.create({
    baseURL: "https://tianqiapi.com/",
    timeout: 15000
})


service.interceptors.response.use(response => {
    const data = response.data
    if (response.status !== 200) {
        Message({
            message: '请求出错了~~~~',
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject('errpr')
    } else {
        return data
    }

})

export default service