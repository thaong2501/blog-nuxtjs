<template>
  <div class="mt">
    <div class="container my-4 pt-4">
      <h1>Blogs</h1>
      <div class="toggle-edit">
        <span>Toggle Editing Mode</span>
        <input type="checkbox" v-model="editMode" />
      </div>
      <el-row :gutter="20">
        <el-col :lg="8" :md="12" :sm="24" v-for="post in posts" :key="post.id">
          <Post
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :content="post.content"
            :date="post.date"
          />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
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
h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 36px;
  font-weight: 600;
}
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
