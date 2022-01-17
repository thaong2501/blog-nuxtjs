<template>
  <div class="mt">
    <div class="container mx-auto pt-12">
      <h1 class="block-title">Blogs</h1>
      <div class="toggle-edit">
        <span>Toggle Editing Mode</span>
        <input type="checkbox" v-model="editMode" />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="col-span-1 md:col-span-1 lg:col-span-1" v-for="post in posts" :key="post.id">
          <Post
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :content="post.content"
            :date="post.date"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Blog"
  },
  computed: {
    editMode: {
      get() {
        return this.$store.state.editMode;
      },
      set(payload) {
        this.$store.commit("EDIT_MODE", payload);
      },
    },
    posts() {
      return this.$store.getters.posts;
    }
  },
  beforeDestroy() {
    this.$store.commit("EDIT_MODE", false);
  },
};
</script>

<style scoped>
.toggle-edit {
  text-align: right;
  margin-bottom: 20px;
}
.toggle-edit span {
  margin: 0 10px;
  font-weight: 500;
  position: relative;
  bottom: 6px;
}
input[type="checkbox"] {
  position: relative;
  border: none;
  -webkit-appearance: none;
  background-color: #fff;
  outline: none;
  width: 80px;
  height: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input[type="checkbox"]::before {
  position: absolute;
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background-color: #303030;
  transform: scale(1.1);
  transition: 750ms ease all;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
input:checked[type="checkbox"]::before {
  background-color: #fff;
  left: 52px;
}
</style>
