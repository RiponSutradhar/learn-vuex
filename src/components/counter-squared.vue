<template>
  <div class="counter-squared">
    {{ $store.state.counter }}
    <sup>2</sup> = {{ $store.getters.counterSquared }}
  </div>
</template>

<script>
export default {
  name: "counter-squared",
};
</script>

<style></style>
