import { shallowMount } from "@vue/test-utils";
import Loading from "@/components/Loading.vue";

describe("Loading", () => {
  test("is a Function Component", () => {
    const wrapper = shallowMount(Loading);
    expect(wrapper.isFunctionalComponent).toBeTruthy();
  });
});
