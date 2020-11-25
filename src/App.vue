<template>
  <div>
    <LikeHeader v-slot="slotProps">
      <h1>{{ slotProps }}</h1>
      <h2>みなさん</h2>
      <h3>初めまして</h3>
      <p>よろしくお願いします</p>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 14
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid blue;
}
h1 {
  color: red;
}
</style>