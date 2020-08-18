import { createLocalVue } from '@vue/test-utils'
import { mount } from "@vue/test-utils";
import graphic from "@/components/graphic.vue";
import Vuex from 'vuex';

const localVue = createLocalVue()

localVue.use(Vuex)

describe("graphic.vue", () => {
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
    const wrapper = mount(graphic, {store, localVue});
    expect(wrapper.isVueInstance()).toBe(true)
  });

  it("matches snapshot", () => {
    const wrapper = mount(graphic, {store, localVue});
     expect(wrapper.html).toMatchSnapshot();
  });

  it("mathes props data", () => {
    const wrapper = mount(graphic, {store, localVue});
 
    expect(wrapper.vm.temperatures).toStrictEqual([40, 35, 30, 25, 20, 15, 10, 5, 0]);
	expect(wrapper.vm.daysNumbers).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
	expect(wrapper.vm.days).toStrictEqual(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  });
});
