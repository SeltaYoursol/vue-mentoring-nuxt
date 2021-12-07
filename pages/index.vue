<template>
  <div class="main-wrapper">
    <h1>Введите запрос</h1>
    <p>{{ currentCheckboxes.join(", ") }}</p>
    <div class="input-wrapper">
      <input
        class="input"
        type="text"
        @input="search()"
        v-model="currentValue"
        placeholder="Введите запрос"
      />
    </div>
    <div class="list">
      <ul v-if="currentList.length > 0">
        <li v-for="item in currentList" :key="item.id">
          <item-component
            type="checkbox"
            :title="item.title"
            @changeValue="changeValue"
          >
            <span>{{ item.title }}</span>
          </item-component>
        </li>
      </ul>
      <ul v-else>
        <li>
          <item-component type="base">
            <span>Данные не найдены</span>
          </item-component>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import ItemComponent from "../components/ItemComponent";
import films from "../data.json";
export default {
  components: { ItemComponent },
  data: function () {
    return {
      currentList: [],
      currentValue: "",
      currentCheckboxes: [],
    };
  },

  methods: {
    search() {
      const query = new RegExp(this.currentValue, "gi");
      if (this.currentValue.length >= 1) {
        this.currentList = films.filter((item) => {
          return query.test(item.title);
        });
      }
    },
    changeValue(title, value) {
      if (value && !this.currentCheckboxes.includes(title)) {
        this.currentCheckboxes.push(title);
      }
      if (!value && this.currentCheckboxes.includes(title)) {
        let index = this.currentCheckboxes.indexOf(title);
        this.currentCheckboxes.splice(index, 1);
      }
    },
  },
};
</script>
<style scoped>
*,
body {
  box-sizing: border-box;
}
.main-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.input {
  width: 60%;
  height: 40px;
  padding: 10px 15px;
}

.input-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.list ul li {
  list-style: none;
  margin: 0 auto;
}

ul {
  padding: 0;
  width: 100%;
}
</style>
