const searchable = {
    data: () => {
        return {
            noData: false,
            searchResults: [],
            searchQuery: '',
        }
    },
    methods: {
        search() {
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
    }

}

export default searchable
