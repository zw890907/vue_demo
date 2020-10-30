import * as Method from './method.js'

export default {
  getShopList (url) {
    const promise = new Promise((resolve, reject) => {
      const success = data => {
        resolve(data)
      }
      const error = err => {
        reject(err)
      }
      Method.getMethod1(url, success, error)
    })
    return promise
  }
}
