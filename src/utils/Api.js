
import axios from 'axios'
import { APIMAP } from './ApiMap'
// import { Loading, Message} from 'element-ui';

// axios.defaults.baseURL = process.env.VUE_APP_API + '/index.php/api/'
axios.defaults.baseURL = '/api/index.php/api/'
axios.defaults.timeout = 20000

const initApiConfig = (key, params) => {
  let url = APIMAP[key]
  if (url) {
    return url
  }
}

// loading
// const options = { //loading参数
//   lock: false,
//   text: '加载中...',
//   spinner: 'el-icon-loading',
//   background: 'rgba(34, 34, 34, .8)',
//   customClass: 'load'
// }
// let loadingInstance = null;
axios.interceptors.request.use((config) => {
  if ((config.params && config.params.hl) || (config.data && config.data.hl)) {
    console.log(111)
  }
  if (config.method === 'get' || config.method === 'delete') {
    config.params = Object.assign(config.params || {})
  } else {
    config.data = Object.assign(config.data || {})
  }
  if (localStorage.getItem('token')) {
    config.headers['userToken'] = 'Bearer ' + localStorage.getItem('token')
  }
  // loadingInstance = Loading.service(options);
  return config
}, (error) => {
  // if (loadingInstance) setTimeout(() => loadingInstance.close(), 300); 
  return Promise.reject(error)
})

axios.interceptors.response.use((res) => {
  // if (loadingInstance) setTimeout(() => loadingInstance.close(), 300); 
  if (res.data.code === 301 || res.data.code === 302) {
    return
  }
  return res
}, (error) => {
  // if (loadingInstance) setTimeout(() => loadingInstance.close(), 300); 
  if (error.message.indexOf('Network Error') !== -1) {
    // Message({
    //   message: '请求错误！',
    //   type: 'error'
    // })
  }
  if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
    // Message({
    //   message: '网络请求超时，请稍后再试',
    //   type: 'warning'
    // })
  }
  return Promise.reject(error)
})

export default {
  get: (key, params) => {
    const url = initApiConfig(key, params)
    return axios.get(url, { params: params })
  },

  post: (key, data) => {
    const url = initApiConfig(key, data)
    return axios.post(url, data)
  },

  put: (key, data) => {
    const url = initApiConfig(key, data)
    return axios.put(url, data)
  },

  delete: (key, params) => {
    const url = initApiConfig(key, params)
    return axios.delete(url, { params: params })
  },

  download: (key, params) => {
    const url = initApiConfig(key, params)
    return axios({
      url: url,
      params: params,
      method: 'GET',
      responseType: 'blob'
    })
  }
}