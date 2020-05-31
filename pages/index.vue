<template>
  <div>
    Hello Nuxt!
    <!-- store -->
    <ul>
      <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
    </ul>
    <button @click="pushNumber">push</button>
    <p>
      我的信息
      <br />
      名字: {{ user.name }}
      <br />
      年龄: {{ user.age }}
    </p>
    <button @click="setUser">setUser</button>
    {{ title }}
    <!-- assets下资源，~代表根目录 -->
    <img src="~/assets/image/img1.jpeg" />
    <!-- 引用 static 目录下的图片静态资源图 -->
    <!-- static该目录下的文件会映射至应用的根路径 / 下 -->
    <img src="/image/img1.jpg" />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "default",
  // 当前页面的head
  head() {
    return {
      title: "xx官网",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  async asyncData(context) {
    const { data } = await context.app.$axios.get(
      `https://apim.zgylt.com/News/GetDetails/4844`
    );
    return { title: data };
  },
  data() {
    return {
      title: "",
      count: 0
    };
  },
  computed: {
    // ...mapState(["lists"])
    ...mapState({
      lists: state => state.lists,
      user: state => state.profile.user
    })
  },
  async created() {
    // const { data } = await this.$axios.get(`https://apim.zgylt.com/News/GetDetails/4844`)
    // this.title = data;
  },
  methods: {
    pushNumber() {
      this.$store.commit("pushList", ++this.count);
    },
    setUser() {
      this.$store.commit("profile/setUser", {
        name: "wangyh",
        age: 23
      });
    }
  }
};
</script>

<style>
</style>