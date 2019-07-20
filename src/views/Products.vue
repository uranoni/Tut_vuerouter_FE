<template>
  <div>
    <h1>Products</h1>

    <h3>{{$route.params.id}}</h3>
    <h1>computed</h1>
    {{item}}
  </div>
</template>

<script>
const products = {
  10: "shoes",
  20: "t-shirt",
  30: "pants"
};
export default {
  computed: {
    // id() {
    //   console.log(this.$route.query.id);
    //   return this.$route.query.id;
    // }
    item() {
      return products[this.$route.params.id];
    }
  }
};
</script>

<style>
</style>
