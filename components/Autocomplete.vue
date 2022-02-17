<template>
	<div class="autocomplete">
		<div class="search">
			<div v-if="selectedItems.length && multiple" class="items-wrapper">
				<div
						v-for="(item, index) in selectedItems"
						class="search-item"
						:key="index"
						@click="deleteItem"
				>
					<slot name="search" :data="item"></slot>
				</div>
			</div>
			<input
					type="text"
					class="input"
					v-model="searchQuery"
					@input="$emit('input', selectedItems)"
			/>
		</div>
		<div class="menu">
			<div v-if="searchResults.length" class="list">
				<div
						v-for="(item, index) in searchResults"
						class="menu-item"
						:key="index"
						@click="selectItem($event,item.title)"
				>
					<slot name="menu" :data="item"></slot>
				</div>
			</div>
			<div v-if="!searchResults.length && noData" class="list">
				<div class="menu-item">
					<slot name="emptyResult"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
    import selectable from '../mixins/selectable'

    export default {
        mixins: [selectable],
        data: () => {
            return {
                noData: false,
            }
        },
        watch: {
            searchQuery: function (newVal) {
                if (!newVal && this.selectedItems.length && !this.multiple) {
                    this.selectedItems = []
                    this.$emit('input', this.selectedItems)
                }
                if (!newVal && this.selectedItems.length && this.multiple) {
                    this.searchResults = []
                }
            },
            searchResults: function (newVal) {
                this.noData = !!(newVal.length === 0 && this.searchQuery);
            }
        },
        computed: {
            searchResults() {
                const query = new RegExp(this.searchQuery, 'gi')
                if (this.searchQuery.length >= 1) {
                    return this.items.filter((item) => {
                        return query.test(item.title)
                    })
                }
                return []
            },
        },
        methods: {
            onSelect() {
                this.searchResults = []
            }
        }
    }
</script>
<style scoped>
	.autocomplete {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px;
	}

	.input {
		min-width: 60px;
		flex: 1 1;
		border: none;
		height: 100%;
		outline: none;
	}

	.list {
		width: 60%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	}

	.search {
		width: 60%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border: 1px solid grey;
		min-height: 40px;
		overflow: hidden;
		margin-bottom: 10px;
		padding: 10px;
		box-sizing: border-box;
	}

	.items-wrapper {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.search-item {
		display: flex;
		border: 1px solid grey;
		border-radius: 20px;
		padding: 5px 10px;
		margin: 5px;
	}

	.menu {
		width: 60%;
	}

	.list {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>
