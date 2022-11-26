<script>
import KeyValuePair from "./KeyValuePair.vue";

export default {
  name: "CountryItem",
  components: {
    KeyValuePair,
  },
  props: {
    country: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <nuxt-link :to="`/country/${country.name}`">
    <div class="CountryItem primary-background">
      <img :src="country.flags.png" loading="lazy" class="flag" />
      <div class="p-4">
        <div class="title font-bold">{{ country.name }}</div>
        <key-value-pair label="Population:" :value="country.population" />
        <key-value-pair label="Region:" :value="country.region" />
        <key-value-pair label="Capital: " :value="country.capital" />
      </div>
    </div>
  </nuxt-link>
</template>

<style scoped lang="scss">
.CountryItem {
  width: 100%;
  cursor: pointer;
  margin-bottom: 2.5rem;
  @media (min-width: 576px) {
    height: 20rem;
  }
  .flag {
    border-radius: 6px 6px 0 0;
    object-fit: cover;
    width: 100%;
    height: 9rem;
  }
  .title {
    font-size: 17px;
  }
}
</style>
