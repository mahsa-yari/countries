<script>
export default {
  name: "KeyValuePair",
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<template>
  <div class="KeyValuePair">
    <span class="font-600"> {{ label }} </span>
    <span class="font-light" v-text="value" />
  </div>
</template>

<style lang="scss">
.KeyValuePair {
  margin-top: 0.5rem;
}
</style>
