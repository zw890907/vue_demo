<template>
  <div class="home">
    <p class="welcomeUse">欢迎使用vue</p>
    {{count}}
    {{shopCount}}
    <el-button type="primary" @click="getShopList()">Button组件</el-button>
    <div>
      <el-button type="success" @click="add()">+</el-button>
      <el-button type="danger" @click="del()">-</el-button>
    </div>
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
    getShopList () {
      const url = '/api/tab/1?start=0'
      ajax.getShopList(url).then(res => {
        console.log(res)
      }).catch(error => {
        console.log(error)
      })
    },
    add () {
      this.$store.commit('addCount', 1)
    },
    del () {
      this.$store.commit('delCount', 1)
    }
  }
}
</script>
