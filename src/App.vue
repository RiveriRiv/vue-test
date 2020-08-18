<template>
  <div id="app">
  <label for="towns">Choose town:</label>

<select @change="getWeather" v-model="town" name="towns" id="towns">
  <option selected value="Moscow">Moscow</option>
  <option value="Saint-Petersburg">Saint-Petersburg</option>
</select>
  <weather></weather>
<p>{{town}}</p>
<graphic></graphic>
</div>
</template>

<style lang="scss">
#table, .th, .td {
  border: 2px solid black;
}

table {
  border-collapse: collapse;
}

.colored {
  background-color: red;
  width: 20px;
  line-height: 20px;
}
</style>
<script>
import weather from "@/components/weather.vue";
import graphic from "@/components/graphic.vue";


export default {
  name: "components",
  components: {
    weather,
	graphic
  },
   methods: {
        getWeather() {
            this.$store.dispatch('updateTown', this.town);
            this.$store.dispatch('updateTemperature', this.town);
        }
    }
};
</script>
