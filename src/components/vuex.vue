<template>
  <div>
    <div class="vuex">vuex</div>
    {{ $store.state.count }}
    <button name="btn" @click="increment">增加</button>
    <button name="btn" @click="decrement">减法</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Vuex",
  data() {
    return {};
  },
  methods: mapActions([
      'increment',
      'decrement'
  ]),
};
</script>
<style scoped>
</style>