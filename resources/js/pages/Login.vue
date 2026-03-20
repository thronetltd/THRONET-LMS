<template>
  <div class="login-container">
    <div class="logo-watermark">
      <img src="@/assets/logo.png" alt="Logo" class="animated-logo" />
    </div>
    <form class="login-form">
      <h1>Login</h1>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
    },
  },
};
</script>

<style scoped>
.login-container {
  position: relative;
  text-align: center;
}

.logo-watermark {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: fadeIn 2s;
}

.animated-logo {
  opacity: 0.1;
  width: 100%;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 0.1; }
}

.login-form {
  margin-top: 20%;
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}
</style>
