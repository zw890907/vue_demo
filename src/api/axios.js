'use strict'

// import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import { removeToken } from '../utils/cookie.js'

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const ajax = axios.create(config)

ajax.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
ajax.interceptors.response.use(
  function (response) {
    // Do something with response data
    // return response
    if (response.status === 200) {
      const code = response.data.code
      const errCode = response.data.error
      if (errCode === 0) {
        return response.data
      }
      if (code === 200) {
        return response.data
      } else if (code === 100002) {
        removeToken('access_token')
        Message(response.data.message)
        setTimeout(function () {
          location.href = location.href.split('#')[0] + '#/admin/login'
        }, 1000)
      } else {
        return Promise.reject(response.data.message)
      }
    } else {
      return Promise.reject(response.data.message)
    }
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

// Plugin.install = function (Vue, options) {
//   Vue.axios = ajax
//   window.axios = ajax
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get () {
//         return ajax
//       }
//     },
//     $axios: {
//       get () {
//         return ajax
//       }
//     }
//   })
// }

// Vue.use(Plugin)

export default ajax
