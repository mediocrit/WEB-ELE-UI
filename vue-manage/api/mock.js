import Mock from 'mockjs'
import homeApi from './mockServeDate/home'

Mock.mock('/Home/getDate',homeApi.getStatisticalData)