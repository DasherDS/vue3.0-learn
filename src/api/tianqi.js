import tianqiapiReq from "../utils/tianqiapiReq"

export function weatherRequest(data){
    return tianqiapiReq({
        url:'/api',
        method:'get',
        params:{
            version:'v6',
            appid:56839929,
            appsecret:'o49yM8Xe',
            city:data
        }
    })
}