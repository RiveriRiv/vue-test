<template>
	<table><tr v-for="n in temperatures" v-bind:key="n">{{n}}<td v-bind:class="{colored: (n <= temperature && y === day)}" v-for="y in daysNumbers" v-bind:key="y"></td></tr></tr><tr><td></td><td v-for="day in days" v-bind:key="day">{{day}}</td></tr></table>
</template>

<script>
export default {
	data: function() {
    return {
      temperatures: [40, 35, 30, 25, 20, 15, 10, 5, 0],
      daysNumbers: [0, 1, 2, 3, 4, 5, 6],
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    }
  },
  computed: {
        town() {
            return this.$store.state.town
        },
        temperature() {
            return this.$store.state.temperature
        },
        day() {
            return this.$store.state.day
        }
    }
	}
</script>