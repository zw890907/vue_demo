/**
 * 这里存放全局的方法或数据使用
*/
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  created () {
    // console.log('全局混乱引入成功')
  },
  computed: {
    ...mapGetters(['count', 'shopCount'])
  },
  methods: {
  }
}
