<template>
  <div class="home">
    <p class="welcomeUse">欢迎使用vue</p>
    {{tip}}
    {{moduleTip}}
    <el-button type="primary" @click="get()">Button组件</el-button>
  </div>
</template>

<script>
// 引入jquery
import $ from 'jquery'
// 引入ajax方法
import ajax from 'api'

export default {
  name: 'Home',
  components: {},
  mounted () {
    $('.welcomeUse').click(function () {
      alert('Jquery安装成功')
    })
  },
  methods: {
    get () {
      const url = '/api/tab/1?start=0'
      ajax.getShopList(url).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    get2 () {
      const data = new URLSearchParams()
      data.append('param', 1)
      ajax.getShopList(data).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    post () {
      const data = new URLSearchParams()
      data.append('param', 1)
      ajax.getShopList(data).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
