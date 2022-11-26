<script>
export default {
  name: "SearchInput",
  props: {
    value: {
      type: String,
      require: true,
      default: null,
    },
  },
  computed: {
    searchInput: {
      get() {
        return this.value || "";
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    focusInput() {
      this.$nextTick(() => this.$refs.searchInput.focus());
    },
  },
};
</script>

<template>
  <div class="SearchInput primary-background" @click="focusInput">
    <!-- prefix -->
    <fa-icon
      :icon="['fa', 'search']"
      class="search-icon prefix cursor-pointer"
    />

    <input
      ref="searchInput"
      v-model="searchInput"
      type="text"
      placeholder="Search for a country..."
    />
  </div>
</template>

<style scoped lang="scss">
.SearchInput {
  padding-left: 1em;
  width: 100%;
  height: 47px;
  position: relative;
  padding-left: 60px;

  // prefix
  .search-icon {
    font-size: 16px;
    position: absolute;
    left: 1.7rem;
    top: calc(50% - 8px);
  }
  input {
    width: 100%;
    height: 100%;
    outline: none;
    padding-left: 7px;
    background-color: transparent;
    border: none;
  }
}
</style>
