<template>
  <div class="mt">
    <section class="intro">
      <h1>Welcome to my silly blogs!</h1>
    </section>
    <section class="container mt-4">
      <el-row :gutter="30">
        <el-col :md="18">
          <Post
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :content="post.content"
            :date="post.date"
          />
        </el-col>
        <el-col :md="6">
          <div class="about-me">
            <h2 class="block-title">About me</h2>
            <div class="mt-2">
              <img
                src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt=""
              />
            </div>
            <p>
              Hi, I am just a silly girl writing silly blogs Lorem ipsum dolor
              sit amet, consec tetur adipi sicing elit. Iure cum provi dent ab,
              autem est ratione asper natur accusamus volup tatibus libero repu
              diandae numquam, unde dolor emque inven tore officiis veri tatis
              vero necessi tatibus beatae. Eveniet.
            </p>
          </div>
        </el-col>
      </el-row>
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
  .about-me {
    margin: 40px 0;
  }
  .about-me p {
    padding: 0 20px;
  }
}
</style>
