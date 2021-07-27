<template>
  <div>
    <input type="text" placeholder="Enter Color code.." v-model="colorcode" />
  </div>
</template>

<script>
export default {
  name: "ColorCode",
  computed: {
    colorcode: {
      get() {
        return this.$store.state.colorCode;
      },

      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>

<style></style>
