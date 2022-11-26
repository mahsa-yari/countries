import HomePage from "./pages/HomePage.vue";
import CountryDetailsPage from "./pages/CountryDetailsPage.vue";

export default [
  {
    path: "/",
    component: HomePage,
    name: "home",
    meta: {
      keepScroll: true,
    },
  },
  {
    path: "/country/:name/",
    component: CountryDetailsPage,
    name: "CountryDetails",
  },
];
