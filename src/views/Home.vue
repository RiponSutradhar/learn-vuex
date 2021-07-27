import { Store } from 'vuex';
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <counter></counter>
    <counterSquared></counterSquared>
    <buttons></buttons>
    <ColorCode></ColorCode>
  </div>
</template>

<script>
//import counter from "@/components/counter";
export default {
  name: "Home",
  components: {
    // counter,
    counter: require("@/components/counter.vue").default,
    counterSquared: require("@/components/counter-squared").default,
    buttons: require("@/components/buttons").default,
    ColorCode: require("@/components/ColorCode").default,
  },
  
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
