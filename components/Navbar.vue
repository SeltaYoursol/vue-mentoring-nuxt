<template>
	<ul>
		<li>
			<nuxt-link exact no-prefetch active-class="active" to="/">main</nuxt-link>
		</li>
		<li>
			<nuxt-link no-prefetch active-class="active" to="/client">login</nuxt-link>
		</li>
	</ul>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
	.active {
		color: red
	}
</style>
