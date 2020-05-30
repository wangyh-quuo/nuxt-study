<template>
<div>
  <div>header</div>
  <nuxt />
  <div>footer</div>
</div>
</template>
<script>
export default {
  name: "default",
  // 默认head
  head: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ],
  }
}
</script>