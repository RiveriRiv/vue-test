import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
        town: 'Moscow',
        temperature: 0,
        day: 2
    },
    mutations: {
            updateTown(state, town) {
                state.town = town
            },
            updateTemperature(state, temperature) {
                state.temperature = Math.round(temperature - 273.5)
            }
        },
    actions: {
            updateTown(context, town) {
			console.log("town" + town)
                context.commit('updateTown', town);
            },
            async updateTemperature(context, town) {
			console.log("town" + town)
                let id = "";
                if (town === "Moscow") {
                    id = "498817";
                } else if (town === "Saint-Petersburg") {
                    id = "524894";
                }
                
                let response = await fetch("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id="+ id + "&APPID=84c375472712a1a880ffba2edbc74476", {
                        "method": "GET",
                        "headers": {
                            "Content-Type": "application/json"
                        }
                    })
                let responseJson = await response.json();
                context.commit('updateTemperature', responseJson.main.temp);
            }
        }
});
