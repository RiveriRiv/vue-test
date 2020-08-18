import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
el: '#app',
  router,
  store,
  render: h => h(App),
  data: {
        town: 'Moscow'
    },
  methods: {
        getWeather() {
            this.$store.dispatch('updateTown', this.town);
            this.$store.dispatch('updateTemperature', this.town);
        }
    }
}).$mount("#app");
