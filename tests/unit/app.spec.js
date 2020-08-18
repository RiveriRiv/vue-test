import { createLocalVue } from '@vue/test-utils'
import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import Vuex from 'vuex';
import graphic from "@/components/graphic.vue";
import weather from "@/components/weather.vue";

const localVue = createLocalVue()

localVue.use(Vuex)

describe("App.vue", () => {
  let actions
  let store
  let state

  beforeEach(() => {
	state = {
      town: 'Moscow',
	  temperature: 20,
	  day: 2
    }

    actions = {
      updateTown: jest.fn(),
      updateTemperature: jest.fn()
    }
    store = new Vuex.Store({
	  state,
      actions
    })
  })

  it("is vue instance", () => {
    const wrapper = mount(App, {store, localVue});
    expect(wrapper.isVueInstance()).toBe(true)
  });

  it("matches snapshot", () => {
    const wrapper = mount(App, {store, localVue});
     expect(wrapper.html).toMatchSnapshot();
  });

  it("contains other components", () => {
    const wrapper = mount(App, {store, localVue});
    expect(wrapper.contains(graphic)).toBe(true);
	expect(wrapper.contains(weather)).toBe(true);
  });
});