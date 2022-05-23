import axios from './axios'

export const getMenu=(param)=>{
    return axios.request({
        url:'permission/getMenu',
        method:'post',
        data:param
    })
}

export const getDate=()=>{
    return axios.request({
        url:'/Home/getDate'
    })
}
