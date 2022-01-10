<template>
  <div class="mt">
    <div class="container my-4 pt-4">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="posted-at mt-2">{{ post.date }}</p>
      <div class="post-thumbnail">
        <img
          :src="post.thumbnail"
        />
      </div>
      <div class="post-info">
        <p class="post-content">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  asyncData(context) {
    return axios.get("https://blog-nuxtjs-3691a-default-rtdb.firebaseio.com/posts/" + context.params.id + ".json")
      .then(res => {
        return {
          post: {...res.data, id: context.params.id}
        }
      })
      .catch(error => console.log(error))
  },
};
</script>

<style scoped>
.post-title {
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 600;
}
.post-content {
  margin-top: 20px;
}
</style>
