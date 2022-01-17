export const state = () => {
  return {
    editMode: null,
    posts: [],
  };
};

export const mutations = {
  EDIT_MODE(state, payload) {
    state.editMode = payload;
  },
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  ADD_POST(state, post) {
    state.posts.push(post);
  },
  EDIT_POST(state, editedPost) {
    const postIndex = state.posts.findIndex(
      (post) => post.id === editedPost.id
    );
    state.posts[postIndex] = editedPost;
  },
  DELETE_POST(state, deletedPostId) {
    const postIndex = state.posts.findIndex(
      (post) => post.id === deletedPostId
    );
    state.posts.splice(postIndex, 1);
  },
};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    try {
      const response = await context.app.$axios.$get("/posts.json");
      const postArray = [];
      for (const key in response) {
        postArray.push({ ...response[key], id: key });
      }
      vuexContext.commit("SET_POSTS", postArray);
    } catch (err) {
      return console.error(err);
    }
  },
  setPosts({ commit }, posts) {
    commit("SET_POSTS", posts);
  },
  async addPost({ commit }, post) {
    const newPost = {
      ...post,
      date: new Date().toLocaleDateString("en-US"),
    };
    try {
      const response = await this.$axios.$post("/posts.json", newPost);
      commit("ADD_POST", { ...newPost, id: response.name });
    } catch (error) {
      return console.log(error);
    }
  },
  async editPost({ commit }, editPost) {
    try {
      await this.$axios.$put("/posts/" + editPost.id + ".json", {
        ...editPost,
        date: new Date().toLocaleDateString("en-US"),
      });
      commit("EDIT_POST", editPost);
    } catch (error) {
      return console.log(error);
    }
  },
  async deletePost({ commit }, deletedPostId) {
    try {
      await this.$axios.$delete("/posts/" + deletedPostId + ".json");
      commit("DELETE_POST", deletedPostId);
    } catch (e) {
      return console.error(e);
    }
  },
};

export const getters = {
  posts(state) {
    return state.posts;
  },
};
