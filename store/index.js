import axios from "axios";

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
};

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    try {
      const response = await axios.get(
        "https://blog-nuxtjs-3691a-default-rtdb.firebaseio.com/posts.json"
      );
      const postArray = [];
      for (const key in response.data) {
        postArray.push({ ...response.data[key], id: key });
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
      const response = await axios.post(
        "https://blog-nuxtjs-3691a-default-rtdb.firebaseio.com/posts.json",
        newPost
      );
      commit("ADD_POST", { ...newPost, id: response.data.name });
    } catch (error) {
      return console.log(error);
    }
  },
  async editPost({ commit }, editPost) {
    try {
      await axios
        .put(
          "https://blog-nuxtjs-3691a-default-rtdb.firebaseio.com/posts/" +
          editPost.id +
          ".json",
          { ...editPost, date: new Date().toLocaleDateString("en-US") }
        );
      commit("EDIT_POST", editPost);
    } catch (error) {
      return console.log(error);
    }
  },
};

export const getters = {
  posts(state) {
    return state.posts;
  },
};
