<script src="../.eslintrc.js"></script>
<template>
	<div class="tabs">
		<div class="tabs-navigation">
			<button v-for="tab in navigation" :key="tab.id" class="tabs-navigation__item"
			        :class="currentTab === tab.id ? 'tabs-navigation__item_active':''"
			        @click="onTabClickHandler(tab.id, tab.title)">
				{{tab.title}}
			</button>
		</div>
		<div class="tabs-content">
			<template v-for="tab in tabs">
				<slot v-if="tab.id === currentTab" :name="tab.title">
				</slot>
			</template>
		</div>
	</div>
</template>
<script>
    export default {
        name: 'DynamicTabs',
        props: {
            navigation: {
                type: Array,
                default: []
            },
        },

        data: () => {
            return {
                currentTab: 1,
            }
        },
        computed: {
            tabs() {
                let result = this.navigation
                for (let i = 0; i < this.navigation.length; i++) {
                    result[i].id = i + 1
                }
                return result
            }
        },
        methods: {
            onTabClickHandler(id, title) {
                this.currentTab = id
            }
        }
    }
</script>
<style>
	.tabs {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.tabs-navigation {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10px;
	}

	.tabs-navigation__item {
		width: 30%;
		max-width: 200px;
		border: 1px solid grey;
		margin-right: 10px;
		padding: 10px;
	}

	.tabs-navigation__item:last-child {
		margin-right: 0;
	}

	.tabs-navigation__item:hover {
		background-color: white;
		color: black;
		cursor: pointer;
	}

	.tabs-navigation__item_active {
		background-color: cadetblue;
	}

	.tabs-navigation__item_active:hover {
		background-color: cadetblue;
	}

	.tabs-content {
		border: 1px solid grey;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.form-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		padding: 10px;
		text-align: left;
	}
</style>
