<template>
  <div class="login-page">
    <div class="login-container">
      <p class="text-center mb-5">
        You've already have an account?
        <nuxt-link to="/login" class="text-emerald-700 font-medium"
          >Log in</nuxt-link
        >
      </p>
      <h2 class="block-title">Sign In</h2>
      <div>
        <CommonInput controlType="input" type="mail" v-model="formData.email"
          >Email</CommonInput
        >
        <CommonInput
          controlType="input"
          type="password"
          v-model="formData.password"
          >Password</CommonInput
        >
        <CommonInput
          controlType="input"
          type="password"
          v-model="formData.password"
          >Confirm Password</CommonInput
        >
      </div>
      <div class="w-100 text-center my-4">
        <CommonButton
          bg="bg-emerald-600"
          text-color="text-slate-50"
          hover="hover:opacity-90"
          >Sign In</CommonButton
        >
      </div>
      <div class="w-100 text-center">
        <nuxt-link to="/"
          ><span style="text-align: center; color: #333; font-weight: 600">
            Go back to Home Page
          </span></nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "login",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
.login-page {
  position: relative;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")
    no-repeat;
  background-size: cover;
}

.login-container {
  position: absolute;
  background-color: #fff;
  width: 35%;
  padding: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-page::after {
  content: "";
  width: 100%;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.5);
  display: block;
}
@media (max-width: 1024px) {
  .login-container {
    width: 80%;
  }
}
</style>
