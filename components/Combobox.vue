<template>
	<div class="combobox">
		<div class="search">
			<div v-if="selectedItems.length && multiple" class="items-wrapper">
				<div
						v-for="(item, index) in selectedItems"
						class="search-item"
						:key="index"
				>
					{{index === 0 ? '' : ','}}
					<slot name="search" :data="item"></slot>
				</div>
			</div>
			<input
					type="text"
					class="input"
					v-model="searchQuery"
					@input="inputHandler"
					@click="toggleMenu"
					@keydown="deleteHandler($event)"
			/>
		</div>
		<div v-if="showMenu" class="menu">
			<div class="list">
				<div
						v-for="(item, index) in list"
						class="menu-item"
						:key="index"
						@click="selectComboboxItem($event,item.title)"
				>
					{{item.title}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import selectable from '../mixins/selectable'
    import searchable from '../mixins/searchable'
    import watchers from "../mixins/watchers";

    export default {
        mixins: [selectable, searchable, watchers],
        props: {
            items: {
                type: Array
            },
            multiple: {
                type: Boolean,
                default: false
            },
            currentSearchQuery: {
                type: String,
                default: ''
            }
        },
        data: () => {
            return {
                showMenu: false
            }
        },
        computed: {
            list() {
                return this.searchResults.length ? this.searchResults : this.items
            }
        },
        methods: {
            toggleMenu() {
                this.showMenu = !this.showMenu
            },
            selectComboboxItem(event, title) {
                this.selectItem(event, title)
                this.toggleMenu()
            },
            deleteHandler(event) {
                if (event.code === 'Backspace' && this.multiple && this.selectedItems.length) {
                    this.deleteItem(this.selectedItems[-1])
                }
            },
            inputHandler() {
                this.$emit('update:currentSearchQuery', this.searchQuery)
                this.toggleMenu()
                this.search()
            }
        }
    }
</script>

<style scoped>
	.search-item {
		display: inline-block;
		margin-left: 5px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.combobox {
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
		height: 40px;
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
