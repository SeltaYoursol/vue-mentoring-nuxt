<template>
  <div class="combobox">
    <div class="search">
      <div v-if="selectedItems.length && multiple" class="items-wrapper">
        <div
          v-for="(item, index) in selectedItems"
          class="search-item"
          :key="index"
          @click="deleteItem"
        >
          <slot name="search" :data="item"></slot>,
        </div>
      </div>
      <input
        type="text"
        class="input"
        v-model="searchQuery"
        @input="search"
      />
    </div>
    <div v-if="showMenu" class="menu" >
      <div class="list">
        <div
          v-for="(item, index) in items"
          class="menu-item"
          :key="index"
          @click="selectItem($event,item.title)"
        >
          <slot name="menu" :data="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from '../mixins/select'
export default {
  mixins: [search],
  data: () => {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style scoped>
  .search-item {
    display: inline-block;
    margin-left: 5px;
  }

</style>
