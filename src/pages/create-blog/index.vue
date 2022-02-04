<template>
  <div class="mt">
    <div class="container mx-auto pt-12 px-5">
      <h2 class="block-title">Create a new BLog</h2>
      <PostForm @onsubmit="addNewBlog">Create</PostForm>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  head: {
    title: "Create BLog",
  },
  methods: {
    addNewBlog(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/blog");
      });
      postData.title = "";
      postData.thumbnail = "";
      postData.content = "";
    },
  },
};
</script>

<style></style>
