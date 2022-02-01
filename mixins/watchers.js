const watchers = {
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
            if (!newVal && this.selectedItems.length && this.multiple) {
                this.searchResults = []
            }
        },
        selectedItems: function (newVal) {

                this.searchResults = []

        }
    },
}
export default watchers
