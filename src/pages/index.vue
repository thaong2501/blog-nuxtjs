<template>
  <div class="mt">
    <section class="intro">
      <h1>Welcome to my silly blogs!</h1>
    </section>
    <section class="md:container md:mx-auto">
      <div class="grid md:grid-cols-3 gap-5">
        <div class="col-span-3 md:col-span-2">
          <Post
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
        </div>
        <div class="col-span-3 md:col-span-1 order-first md:order-last">
          <AboutMe />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    posts() {
      return this.$store.getters.posts
    }
  },
};
</script>

<style scoped>
.intro {
  position: relative;
  background-image: url("https://images.unsplash.com/photo-1623096909038-480191e8e974?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80");
  min-height: 400px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.intro::after {
  content: "";
  width: 100%;
  height: 400px;
  background-color: rgba(128, 128, 128, 0.5);
  display: block;
}
.intro h1 {
  position: absolute;
  text-align: center;
  margin: 40px 0;
  font-size: 60px;
  font-weight: 500;
  top: 42%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 100%;
}
@media (max-width: 992px) {
  .intro h1 {
    font-size: 48px;
    line-height: 52px;
  }
}
</style>
