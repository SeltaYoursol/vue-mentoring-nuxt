<template>
	<div class="main-wrapper">
		Здесь будет показан список фильмов с сервера
		<ul>
			<li v-for="item in  films">
				{{item.title}}

			</li>
		</ul>
	</div>
</template>
<script>
    export default {
        async fetch({store}) {
            if (store.getters['films/films'].length === 0) {
                await store.dispatch('films/getList')
            }
        },

        data: function () {
            return {}
        },

        computed: {
            films() {
                return this.$store.getters['films/films'];
            }
        },
    }
</script>
<style scoped>
	*,
	body {
		box-sizing: border-box;
		font-family: Arial, sans-serif;
	}

	.main-wrapper {
		display: flex;
		width: 100%;
		height: 100vh;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	}
</style>
