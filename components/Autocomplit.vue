<template>
  <div class="autocomplite">
    <div class="search">
      <div v-if="selectedItems.length" class="items-wraper">
        <div
          v-for="(item, index) in selectedItems"
          class="search-item"
          :key="index"
        >
          <slot name="search" :data="item"></slot>
        </div>
      </div>
      <input type="text" class="input" v-model="searchQuery" @input="search" />
    </div>
    <div class="menu">
      <div v-if="searchResults.length" class="list">
        <div
          v-for="(item, index) in searchResults"
          class="menu-item"
          :key="index"
          @click="selectItem(item.title)"
        >
          <slot name="menu" :data="item"></slot>
        </div>
      </div>
      <div v-else class="list">
        <div class="menu-item"><slot name="emptyResult"></slot></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      default: [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data: () => {
    return {
      searchResults: [],
      selectedItems: [],
      searchQuery: "",
    };
  },
  methods: {
    search() {
      const query = new RegExp(this.searchQuery, "gi");
      if (this.searchQuery.length >= 1) {
        this.searchResults = this.items.filter((item) => {
          return query.test(item.title);
        });
      }
    },
    selectItem(value) {
      if (!this.selectedItems.includes(value)) {
        this.selectedItems.push(value);
      }
    },
  },
};
</script>
<style scoped>
.autocomplite {
  width: 100%;
}
.input {
  min-width: 60px;
  flex: 1 1;
  border: none;
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

.item {
  list-style: none;
  margin: 0 auto;
}

.search {
  width: 60%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid;
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
</style>
