import Mock from 'mockjs'
import homeApi from './mockServeDate/home'
import userApi from './mockServeDate/user'
import permissionApi from './mockServeDate/permission'

Mock.mock('/Home/getDate',homeApi.getStatisticalData)
Mock.mock(/User\/add/,'post',userApi.createUser)
Mock.mock(/User\/edit/,'post',userApi.updateUser)

Mock.mock(/User\/getUser/,'get',userApi.getUserList)
Mock.mock(/User\/del/,'post',userApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)