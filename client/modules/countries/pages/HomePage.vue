<script>
import SearchInput from "../components/SearchInput.vue";
import SelectOption from "../components/SelectOption.vue";
import CountryItem from "../components/CountryItem.vue";
import Loading from "~/components/Loading.vue";
import debounce from "lodash.debounce";

export default {
  name: "HomePage",
  components: {
    SearchInput,
    SelectOption,
    CountryItem,
    Loading,
  },
  data() {
    return {
      loading: true,
      continents: ["africa", "americas", "asia", "europe", "oceania"],
      sortBy: ["population", "name"],
      countries: null,
      region: null,
      sort: null,
      search: "",
      searchByName: debounce(() => {
        this.fetchData();
      }, 600),
    };
  },
  watch: {
    region: "fetchDataSearchByCountryRegion",
    search() {
      const { query } = this.$route;
      this.$router.push({
        path: "/",
        query: { ...query, search: this.search },
      });
    },
    sort: "sortCountries",
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { query } = this.$route;
      if (query.search?.length > 0) {
        this.loading = true;
        this.countries = await this.$api.countries.searchByCountryName(
          query.search
        );
      } else {
        this.loading = true;
        this.countries = await this.$api.countries.fetchCountries();
      }
      this.loading = false;
    },
    async fetchDataSearchByCountryRegion() {
      this.loading = true;
      this.countries = await this.$api.countries.searchByCountryRegion(
        this.region
      );
      this.loading = false;
    },
    sortCountries() {
      if (this.sort === "population") {
        this.countries = this.countries.sort(
          (a, b) => a.population - b.population
        );
      } else {
        this.countries = this.countries.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
    },
  },
};
</script>

<template>
  <div class="container pt-5">
    <div class="row justify-content-between">
      <div class="col-12 col-sm-6 col-md-5 col-lg-4">
        <search-input v-model="search" @input="searchByName" />
      </div>
      <div
        class="col d-flex justify-content-between justify-content-sm-end mt-5 mt-sm-0"
      >
        <select-option
          v-model="region"
          :options="continents"
          place-holder="Filter By Region"
        />
        <select-option
          v-model="sort"
          :options="sortBy"
          place-holder="Sort By"
          class="ml-2"
        />
      </div>
    </div>
    <div v-if="loading" class="d-flex justify-content-center pt-8">
      <loading />
    </div>
    <div v-else class="row mt-4 mt-sm-5">
      <div
        v-for="(country, index) in countries"
        :key="index"
        class="col-12 col-sm-6 col-md-4 col-lg-3 px-3"
      >
        <country-item :country="country" />
      </div>
    </div>
  </div>
</template>
