<template>
	<div>
		Здесь будет показан список фильмов на клиенте
		<ul>
			<li v-for="item in  films">
				{{item.title}}

			</li>
		</ul>
	</div>

</template>

<script>
    import {mapActions, mapGetters} from "vuex"

    export default {
        name: "client",
        mounted() {
            this.getList()
        },
        computed: {
            ...mapGetters({
                    films: 'films/films',
                }
            )
        },
        methods: {
            ...mapActions({
                    getList: 'films/getList'
                }
            ),
        }
    }
</script>

<style scoped>

</style>
