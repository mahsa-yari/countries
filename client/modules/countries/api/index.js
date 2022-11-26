export default ({ $axios }) => ({
  fetchCountries() {
    return $axios
      .get("all?fields=name,capital,flags,population,region")
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      });
  },
  searchByCountryName(name) {
    return $axios
      .get(`name/${name}?fields=name,capital,flags,population,region`)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      });
  },
  searchByCountryRegion(region) {
    return $axios
      .get(`region/${region}?fields=name,capital,flags,population,region`)
      .then((response) => {
        if (response.status === 200) {
          return response.data;
        }
      });
  },
  fetchCountryByName(name) {
    return $axios.get(`name/${name}`).then((response) => {
      if (response.status === 200) {
        return response.data[0];
      }
    });
  },
  searchByCountryCodeName(alpha) {
    return $axios.get(`alpha/${alpha}?fields=name`).then((response) => {
      if (response.status === 200) {
        return response.data;
      }
    });
  },
});
