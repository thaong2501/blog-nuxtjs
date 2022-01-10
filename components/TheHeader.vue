<template>
  <header>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <nuxt-link to="/"> HOME </nuxt-link></el-menu-item
      >
      <el-menu-item index="2">
        <nuxt-link to="/blog">BLOG</nuxt-link>
      </el-menu-item>
      <el-menu-item index="3">
        <nuxt-link to="/create-post">CREATE POSTS</nuxt-link></el-menu-item
      >
      <el-menu-item index="4">
        <nuxt-link to="/login">LOG IN/REGISTER</nuxt-link></el-menu-item
      >
      <el-menu-item index="5">
        <nuxt-link to="/">LOG OUT</nuxt-link></el-menu-item
      >
    </el-menu>
    <div class="line"></div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
}
.el-menu {
  display: flex;
}
.el-menu a {
  text-decoration: none;
  display: inline-block;
  padding: 0 20px;
}
.el-menu-item {
  font-weight: 500;
  padding: 0;
}
</style>
