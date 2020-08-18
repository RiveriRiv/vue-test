import { createLocalVue } from '@vue/test-utils'
import { mount } from "@vue/test-utils";
import weather from "@/components/weather.vue";
import Vuex from 'vuex';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("weather.vue", () => {
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
    const wrapper = mount(weather, {store, localVue});
    expect(wrapper.isVueInstance()).toBe(true)
  });

  it("matches snapshot", () => {
    const wrapper = mount(weather, {store, localVue});
     expect(wrapper.html).toMatchSnapshot();
  });

   it("matches data", () => {
    const wrapper = mount(weather, {store, localVue});
     expect(wrapper.vm.town).toBe('Moscow')
	 expect(wrapper.vm.temperature).toBe(20)
  });
});
