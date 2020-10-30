import qs from 'qs'
import { getToken } from '../utils/cookie.js'
import { Message } from 'element-ui'
import ajax from './axios.js'

export function getMethod (url, params, onsuccess, onerror, successToast, noErrToast) {
  ajax.get(url, {
    params: params,
    headers: {
      access_token: getToken('access_token') ? getToken('access_token') : ''
    }
  }).then(res => {
    onsuccess(res)
    if (successToast) {
      Message.success(res.message)
    }
    return res
  }).catch(err => {
    // 错误回调函数
    onerror && onerror(err)
    // 如果不传，默认需要错误提示
    if (!noErrToast && err && (typeof err === 'string')) {
      Message.error(err)
    }
  })
}

export function getMethod1 (url, onsuccess, onerror) {
  ajax.get(url, {
    headers: {
      access_token: getToken('access_token') ? getToken('access_token') : ''
    }
  }).then(res => {
    onsuccess(res)
    Message.success('请求成功')
    return res
  }).catch(err => {
    debugger
    // 错误回调函数
    onerror && onerror(err)
  })
}

export function postJsonData (url, params, onsuccess, onerror, successToast, noErrToast) {
  ajax.post(url, { ...params }, {
    headers: {
      access_token: getToken('access_token') ? getToken('access_token') : ''
    }
  }).then(res => {
    onsuccess(res)
    if (successToast) {
      Message.success(res.message)
    }
  }).catch(err => {
    // 错误回调函数
    onerror && onerror(err)
    // 如果不传，默认需要错误提示
    if (!noErrToast && err && (typeof err === 'string')) {
      Message.error(err)
    }
  })
}

export function postFormData (url, params, onsuccess, onerror, successToast, noErrToast) {
  const data = qs.stringify(params)
  ajax.post(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  }).then(res => {
    onsuccess(res)
    if (successToast) {
      Message.success(res.message)
    }
  }).catch(err => {
    // 错误回调函数
    onerror && onerror(err)
    // 如果不传，默认需要错误提示
    if (!noErrToast && err && (typeof err === 'string')) {
      Message.error(err)
    }
  })
}

export function postFormData2 (url, params, onsuccess, onerror, successToast, noErrToast) {
  ajax.post(url, params, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      access_token: getToken('access_token') ? getToken('access_token') : ''
    }
  }).then(res => {
    onsuccess(res)
    if (successToast) {
      Message.success(res.message)
    }
  }).catch(err => {
    // 错误回调函数
    onerror && onerror(err)
    // 如果不传，默认需要错误提示
    if (!noErrToast && err && (typeof err === 'string')) {
      Message.error(err)
    }
  })
}

export function postJsonData1 (url, params, onsuccess, onerror, successToast, noErrToast) {
  ajax.post(url, params).then(res => {
    onsuccess()
    if (successToast) {
      Message(res)
    }
  }).catch(err => {
    // 错误回调函数
    onerror && onerror(err)
    // 如果不传，默认需要错误提示
    if (!noErrToast && err && (typeof err === 'string')) {
      Message.error(err)
    }
  })
}
