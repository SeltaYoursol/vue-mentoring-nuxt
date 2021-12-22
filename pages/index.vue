<template>
  <div class="main-wrapper">
    <h1>Введите запрос</h1>
    <div class="checkbox">
      <input type="checkbox" id="multiple-checkbox" v-model="multiple" />
      <label for="multiple-checkbox">Multiple</label>
    </div>
    <h2>Autocomplete</h2>
    <Autocomplete :items="films" :multiple="multiple" v-model="list">
      <template v-slot:search="{data}">
        <span>{{ data }}</span>
      </template>
      <template v-slot:menu="{data}">
        <div class="list-item" >
          <p >{{data.title}}</p>
        </div>
      </template>
      <template v-slot:emptyResult>
        <div class="list-item">No data</div>
      </template>
    </Autocomplete>
    <h2>Combobox</h2>
    <Combobox :items="films" :multiple="multiple">
      <template v-slot:search="{data}">
        <span>{{ data }}</span>
      </template>
    </Combobox>
  </div>
</template>
<script>
import Autocomplete from '../components/Autocomplete.vue'
import films from '../data.json'
import Combobox from '../components/Combobox'
export default {
  components: { Combobox, Autocomplete },
  data: function () {
    return {
      multiple: false,
      films: films,
      list: []
    }
  }
}
</script>
<style scoped>
*,
body {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
.main-wrapper {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
