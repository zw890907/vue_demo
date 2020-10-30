import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  created () {
    console.log('全局混乱引入成功')
  },
  computed: {
    ...mapGetters(['tip', 'moduleTip'])
  },
  methods: {
  }
}
