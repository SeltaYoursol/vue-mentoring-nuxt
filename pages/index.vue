<template>
  <div class="main-wrapper">
    <h1>Введите запрос</h1>
    <div class="checkbox">
      <input type="checkbox" id="multiple-checkbox" v-model="multiple" />
      <label for="multiple-checkbox">Multiple</label>
    </div>
    <Autocomplite :items="films" :multiple="multiple">
      <template v-slot:search="{data}">
        <span>{{ data }}</span>
      </template>
      <template v-slot:menu="{data}">
        <div class="list-item" >
          <input :id="data.title" type="checkbox"/>
          <label :for="data.title">{{data.title}}</label>
        </div>
      </template>
      <template v-slot:emptyResult>
        <div class="list-item">No data</div>
      </template>
    </Autocomplite>
  </div>
</template>
<script>
import Autocomplite from "../components/Autocomplit.vue";
import films from "../data.json";
export default {
  components: { Autocomplite },
  data: function () {
    return {
      multiple: false,
      films: films,
    };
  },
};
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
