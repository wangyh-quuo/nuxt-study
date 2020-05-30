<template>
  <div>Hello Nuxt!{{ title }}</div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'default',
  // 当前页面的head
  head () {
    return {
      title: "xx官网",
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  async asyncData (context) {
    const { data } = await context.app.$axios.get(`https://apim.zgylt.com/News/GetDetails/4844`)
    return { title: data }
  },
  data() {
    return {
      title: ""
    }
  },
  async created() {
    // const { data } = await this.$axios.get(`https://apim.zgylt.com/News/GetDetails/4844`)
    // this.title = data;
  }
};
</script>

<style>
</style>