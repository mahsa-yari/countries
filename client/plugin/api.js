import { default as CountriesModule } from "~/modules/countries/api";

function apiFactory(nuxtCtx) {
  const ctx = { ...nuxtCtx };

  return {
    countries: CountriesModule(ctx),
  };
}

export default (ctx, inject) => {
  inject("api", apiFactory(ctx));
};
