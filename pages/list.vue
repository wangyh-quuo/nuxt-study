<template>
  <div>{{article}}</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  layout: "other",
  async fetch({ store, params }) {
    await store.dispatch("article/asyncGetArticle");
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      article: state => state.article.article
    })
  }
};
</script>

<style>
</style>