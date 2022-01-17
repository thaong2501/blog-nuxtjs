<template>
  <div class="mt">
    <div class="container mx-auto pt-12 px-5">
      <h2 class="block-title">Edit Post</h2>
      <PostForm
        :inputTitle="post.title"
        :inputThumbnail="post.thumbnail"
        :inputContent="post.content"
        @onsubmit="editPost"
        >Save</PostForm
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        title: "",
        thumbnail: "",
        content: "",
      },
    };
  },
  created() {
    const posts = this.$store.getters.posts;
    const editPostId = this.$route.params.id;
    const editPost = posts.find((post) => post.id === editPostId);
    this.post.title = editPost.title;
    this.post.thumbnail = editPost.thumbnail;
    this.post.content = editPost.content;
  },
  methods: {
    editPost(post) {
      const editPostId = this.$route.params.id;
      this.$store.dispatch("editPost", {...post, id: editPostId}).then(() => {
        this.$router.push("/blog");
      });
    },
  },
};
</script>

<style></style>
