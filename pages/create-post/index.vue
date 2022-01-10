<template>
  <div class="mt">
    <div class="container my-4 pt-4">
      <h2 class="block-title">Create a new Post</h2>
      <PostForm @onsubmit="addNewPost">Create</PostForm>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    addNewPost(postData) {
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
