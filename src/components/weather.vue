<template>
	<table id="table"><tr><th class="th">Town</th><th class="th">Temperature</th></tr><tr><td class="td">{{town}}</td><td class="td">{{temperature}}</td></tr></table>
</template>
<script>
export default {
	computed: {
        town() {
            return this.$store.state.town
        },
        temperature() {
            return this.$store.state.temperature
        }
    }
	}
</script>