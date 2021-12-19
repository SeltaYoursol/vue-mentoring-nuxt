const select = {
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
      selectedItems: [],
      searchQuery: ''
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
        this.$emit('input', this.selectedItems)
      }
    }
  },
  methods: {
    selectItem (event, value) {
      if (this.multiple) {
        this.searchQuery = ''
      } else {
        this.searchQuery = value

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
export default select
