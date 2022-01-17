<template>
  <div class="mt">
    <section class="container mx-auto pt-12 px-4">
      <h2 class="post-title">{{ post.title }}</h2>
      <p class="posted-at mt-2">{{ post.date }}</p>
      <div class="post-thumbnail">
        <img :src="post.thumbnail" />
      </div>
      <div class="post-info">
        <p class="post-content">{{ post.content }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get("/posts/" + context.params.id + ".json")
      .then((res) => {
        return {
          post: { ...res, id: context.params.id },
        };
      })
      .catch((error) => console.log(error));
  },
  head() {
    return {
      title: this.post.title,
    };
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
