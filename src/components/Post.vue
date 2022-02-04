<template>
  <div class="post-item shadow-lg rounded overflow-hidden mb-5 relative">
    <div class="post-thumbnail">
      <nuxt-link :to="`/blog/${post.id}`">
        <img :src="post.thumbnail" alt="" />
      </nuxt-link>
    </div>
    <div class="post-info">
      <nuxt-link :to="`/blog/${post.id}`">
        <h2 class="post-title">{{ post.title }}</h2>
      </nuxt-link>
      <p class="post-preview">{{ post.content }}</p>
      <p class="posted-at">{{ post.date }}</p>
      <div class="text-center">
        <nuxt-link :to="`/blog/${post.id}`">
          <CommonButton
            bg="bg-gray-700"
            text-color="text-slate-50"
            hover="hover:bg-gray-500"
          >
            Read more
          </CommonButton>
        </nuxt-link>
      </div>
    </div>
    <div class="post-admin" v-if="editMode">
      <nuxt-link :to="`/blog/edit/${post.id}`">
        <i class="far fa-edit"></i>
      </nuxt-link>
      <i class="far fa-trash-alt" @click="handleDeletePost(post.id)"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    editMode() {
      return this.$store.state.editMode;
    },
  },
  methods: {
    handleDeletePost(id) {
      if(confirm("Are you sure you want to delete this post?")) {
        this.$store.dispatch("deletePost", id)
      }
    }
  }
};

</script>

<style scoped>
.post-item:hover{
  animation: move 0.3s ease;
}
@keyframes move {
  from {
    transform:translate(-1px, -1px)
  }
  to {
    transform:translate(1px, 1px)
  }
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
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.posted-at {
  font-size: 14px;
  margin-bottom: 15px;
}
</style>
