<template>
  <div>
    <div v-if="type === 'checkbox'" class="list-item">
      <input
        :id="title"
        type="checkbox"
        v-model="value"
        @change="$emit('changeValue', title, value)"
      />
      <label :for="title">
        <slot></slot>
      </label>
    </div>
    <div v-if="type === 'base'" class="list-item">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "No title",
    },
    type: {
      type: String,
      default: "base",
    },
  },
  data: () => {
    return {
      value: false,
    };
  },
};
</script>
<style scoped>
.list-item {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: sans-serif;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid grey;
  background-color: white;
  font-size: 16px;
  color: black;
  cursor: pointer;
}
</style>
