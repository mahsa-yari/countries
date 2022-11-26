<script>
import KeyValuePair from "../components/KeyValuePair.vue";
export default {
  name: "CountryDetailsPage",
  components: {
    KeyValuePair,
  },
  data() {
    return {
      country: null,
    };
  },
  async fetch() {
    const { params } = this.$route;
    this.country = await this.$api.countries.fetchCountryByName(params.name);
  },
  methods: {
    async getCountryNameByCountryCode(code) {
      const selectedCountry = await this.$api.countries.searchByCountryCodeName(
        code
      );
      this.$router.push(`/country/${selectedCountry.name}`);
    },
  },
};
</script>

<template>
  <div class="CountryDetailsPage container pb-5">
    <div class="mt-5">
      <nuxt-link to="/">
        <button class="primary-background back-route d-flex align-items-center">
          <fa-icon class="icon" :icon="['fa', 'long-arrow-alt-left']" />
          Back
        </button>
      </nuxt-link>
    </div>
    <div v-if="country" class="row country justify-content-between">
      <div class="col-12 col-lg-6 pr-lg-5">
        <img class="ratio-4-3" :src="country.flag" loading="lazy" />
      </div>
      <div class="col-12 col-lg-6 pl-lg-5">
        <div class="detail">
          <h1 class="title" v-text="country.name" />
          <div class="row">
            <div class="col-12 col-md-12 col-lg-6">
              <key-value-pair
                label="Native Name:"
                :value="country.nativeName"
              />
              <key-value-pair label="Population:" :value="country.population" />
              <key-value-pair label="Region:" :value="country.region" />
              <key-value-pair label="Sub Region:" :value="country.subregion" />
              <key-value-pair label="Capital:" :value="country.capital" />
            </div>
            <div class="col-12 col-md-12 col-lg-6 pt-4 pt-sm-0">
              <div class="mt-2">
                <span class="font-600">Top Level Domain: </span>
                <span class="font-light">
                  <span
                    v-for="(domain, index) in country.topLevelDomain"
                    :key="index"
                    >{{ `${index == 0 ? "" : ","} ${domain}` }}</span
                  >
                </span>
              </div>
              <div class="mt-2">
                <span class="font-600">Currencies: </span>
                <span class="font-light">
                  <span
                    v-for="(currency, index) in country.currencies"
                    :key="index"
                    >{{ `${index == 0 ? "" : ", "}${currency.name}` }}</span
                  >
                </span>
              </div>
              <div class="mt-2">
                <span class="font-600">Languages: </span>
                <span class="font-light">
                  <span
                    v-for="(lang, index) in country.languages"
                    :key="index"
                    >{{ `${index == 0 ? "" : ","} ${lang.name}` }}</span
                  >
                </span>
              </div>
            </div>
          </div>
          <div
            v-if="country.borders && country.borders.length > 0"
            class="mt-5 d-flex flex-wrap align-items-lg-baseline"
          >
            <span class="font-600 mr-2">Border Countries: </span>
            <button
              v-for="(border, index) in country.borders"
              :key="index"
              class="primary-background border-btn"
              @click="getCountryNameByCountryCode(border)"
            >
              {{ border }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.CountryDetailsPage {
  .icon {
    font-size: 18px;
    margin-right: 10px;
  }
  .country {
    margin-top: 45px;
    .flag {
      width: 100%;
      background-size: cover;
      object-fit: cover;
      background-repeat: no-repeat;
      background-position: center;
      aspect-ratio: 4/3;
    }
    .title {
      margin-top: 30px;
      margin-bottom: 25px;
    }
    .border-btn {
      border: none;
      outline: none;
      font-size: 12px;
      padding: 7px 24px;
      margin-bottom: 0.5rem;
      margin-right: 0.5rem;
      cursor: pointer;
      user-select: none;
    }
    .ratio-4-3 {
      width: 100%;
      position: relative;
      background: url() 50% 50% no-repeat;
      background-size: cover;
      background-clip: content-box;
    }
    .ratio-4-3:before {
      display: block;
      content: "";
      padding-top: 75%;
    }
  }
}
</style>
