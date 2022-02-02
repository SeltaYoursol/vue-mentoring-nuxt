<script src="../.eslintrc.js"></script>
<template>
	<div class="tabs">
		<div class="tabs-navigation">
			<button v-for="(item,index) in navigationList" :key="index" class="tabs-navigation__item"
			        :class="currentTab === item.id ? 'tabs-navigation__item_active':''"
			        @click="onTabClickHandler(item.id, item.title)">
				{{item.title}}
			</button>
		</div>
		<div class="tabs-content">
			<template  v-for="item in navigationList" :key="item.id">
				<slot v-if="item.title === component" :name="item.title">
				</slot>
			</template>
		</div>
	</div>
</template>
<script>


    export default {
        name: 'DynamicTabs',

        data: () => {
            return {
                currentTab: 1,
                navigationList: [
                    {title: 'Social', id: 1},
                    {title: 'Login', id: 2},
                    {title: 'Registration', id: 3}
                ],
                component: "Social",
            }
        },
        methods: {
            onTabClickHandler(id, title) {
                this.currentTab = id
                this.component = title
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
