<template>
  <div class="autocomplete">
    seach {{searchQuery}}
    <div> listSh {{selectedItems}}</div>
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
        @input="search"
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
export default {
  props: {
    items: {
      type: Array
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  items: {
    validator: function (value) {
      return value.length > 0
    }
  },
  data: () => {
    return {
      searchResults: [],
      selectedItems: [],
      searchQuery: '',
      noData: false
    }
  },
  watch: {
    multiple: function (newVal) {
      if (!newVal) {
        this.selectedItems = []
        this.searchQuery = ''
        this.$emit('input', this.selectedItems)
      }
    },
    searchQuery: function (newVal) {
      if (!newVal && this.selectedItems.length && !this.multiple) {
        this.selectedItems = []
        this.searchResults = []
        this.$emit('input', this.selectedItems)
      }
      if (!newVal && this.selectedItems.length && this.multiple) {
        this.searchResults = []
      }
    }
  },
  methods: {
    search () {
      this.$emit('input', this.selectedItems)
      const query = new RegExp(this.searchQuery, 'gi')
      if (this.searchQuery.length >= 1) {
        this.searchResults = this.items.filter((item) => {
          return query.test(item.title)
        })
      } else {
        this.noData = true
      }
    },
    selectItem (event, value) {
      if (this.multiple) {
        this.searchQuery = ''
      } else {
        this.searchQuery = value
        this.searchResults = []
      }
      if (!this.selectedItems.includes(value)) {
        this.addItem(value)
      } else {
        this.deleteItem(value)
      }
    },
    addItem (item) {
      this.selectedItems.push(item)
    },
    deleteItem (item) {
      const index = this.selectedItems.indexOf(item)
      this.selectedItems.splice(index, 1)
      if (this.multiplet) {
        this.searchQuery = ''
      }
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

  .input-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .items-wraper {
    display: inline-flex;
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
