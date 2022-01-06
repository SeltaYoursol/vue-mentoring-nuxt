<template>
  <div class="tabs-card">
    <h2>Введите логин и пароль</h2>
    <form action="">
      <div class="form-item">
        <label for="login-log">login</label>
        <input type="text" id="login-log">
      </div>
      <div class="form-item">
        <label for="password-log">password</label>
        <input type="email" id="password-log">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "LoginTab"
  }
</script>

<style scoped>

</style>
