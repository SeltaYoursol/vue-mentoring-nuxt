const selectable = {
    props: {
        items: {
            type: Array
        },
        multiple: {
            type: Boolean,
            default: false
        },
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
            this.selectedItems = []
            this.$emit('input', this.selectedItems)
        },
    },
    methods: {
        onSelect() {
        },
        selectItem(event, value) {
            this.onSelect()
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
        addItem(item) {
            this.selectedItems.push(item)
        },
        deleteItem(item) {
            const index = this.selectedItems.indexOf(item)
            this.selectedItems.splice(index, 1)
            if (this.multiplet) {
                this.searchQuery = ''
            }
        }
    }
}
export default selectable
