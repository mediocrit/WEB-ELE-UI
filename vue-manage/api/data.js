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

export const getUser=(params)=>{
    return axios.request({
        url:'/User/getUser',
        method:'get',
        params
    })
}

