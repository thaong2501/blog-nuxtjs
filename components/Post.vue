<template>
  <el-card :body-style="{ padding: '0px' }">
    <div class="post-thumbnail">
      <nuxt-link :to="`/blog/${id}`">
        <img :src="thumbnail" alt="" />
      </nuxt-link>
    </div>
    <div class="post-info">
      <nuxt-link :to="`/blog/${id}`">
        <h2 class="post-title">{{ title }}</h2>
      </nuxt-link>
      <p class="post-preview">{{ content }}</p>
      <p class="posted-at">{{ date }}</p>
      <div class="text-center">
        <nuxt-link :to="`/blog/${id}`">
          <el-button type="info" plain>Read more</el-button>
        </nuxt-link>
      </div>
    </div>
    <div class="post-admin" v-if="editMode">
      <nuxt-link :to="`/blog/edit/${id}`">
        <i class="far fa-edit"></i>
      </nuxt-link>
      <i class="far fa-trash-alt"></i>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["id", "thumbnail", "title", "content", "date"],
  computed: {
    editMode() {
      return this.$store.state.editMode
    }
  }
};
</script>

<style scoped>
.el-card {
  margin-bottom: 20px;
  position: relative;
}
.post-admin {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
}
.post-admin i {
  background-color: #fff;
  padding: 10px;
  border-radius: 50%;
  color: #333;
  font-size: 18px;
  margin-left: 4px;
  transition: all 0.4s ease;
}
.post-admin i:hover {
  background-color: #333;
  color: #fff;
}
.post-info {
  padding: 20px;
}
.post-info a {
  text-decoration: none;
}
.post-title {
  margin-bottom: 15px;
  font-weight: 600;
  color: #333;
}
.post-preview {
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* number of lines to show */
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.posted-at {
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
