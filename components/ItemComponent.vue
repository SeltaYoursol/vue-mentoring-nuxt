<template>
  <div class="list-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "No title",
    },
  },
  data: () => {
    return {};
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
.list-item:hover {
  background-color: rgba(197, 185, 185, 0.489);
  font-size: 16px;
  color: white;
}

</style>
