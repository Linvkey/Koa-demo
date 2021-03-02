<template>
  <div>
    {{ age }}
    <button @click="$emit('btn')">自定义事件</button>
    <!-- <button @click="getData">获取数据</button> -->
  </div>
</template>

<script>
export default {
  name: "Com",
  props: ["age"],
  data() {
    return {};
  },
  methods: {

  },
};
</script>
<style scoped>
</style>