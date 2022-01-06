<template>
  <div class="main-wrapper">
    <DynamicTabs :navigationList="navigation"/>
  </div>
</template>
<script>
import DynamicTabs from '../components/DynamicTabs'
import films from '../data.json'

export default {
  components: { DynamicTabs },
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
