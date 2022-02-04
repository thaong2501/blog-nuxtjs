import Cookie from "js-cookie";
export const state = () => {
  return {
    editMode: null,
    posts: [],
    token: null,
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
  SET_TOKEN(state, token) {
    state.token = token;
  },
  CLEAR_TOKEN(state) {
    state.token = null;
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
  async addPost({ commit, state }, post) {
    const newPost = {
      ...post,
      date: new Date().toLocaleDateString("en-US"),
    };
    try {
      const response = await this.$axios.$post(
        "/posts.json?auth=" + state.token,
        newPost
      );
      commit("ADD_POST", { ...newPost, id: response.name });
    } catch (error) {
      return console.error(error);
    }
  },
  async editPost({ commit, state }, editPost) {
    try {
      await this.$axios.$put(
        "/posts/" + editPost.id + ".json?auth=" + state.token,
        {
          ...editPost,
          date: new Date().toLocaleDateString("en-US"),
        }
      );
      commit("EDIT_POST", editPost);
    } catch (error) {
      return console.error(error);
    }
  },
  async deletePost({ commit, state }, deletedPostId) {
    try {
      await this.$axios.$delete(
        "/posts/" + deletedPostId + ".json?auth=" + state.token
      );
      commit("DELETE_POST", deletedPostId);
    } catch (e) {
      return console.error(e);
    }
  },
  authenticateUser({ commit, dispatch }, formData) {
    return this.$axios
      .$post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.apiKey,
        {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true,
        }
      )
      .then((result) => {
        commit("SET_TOKEN", result.idToken);
        localStorage.setItem("token", result.idToken);
        localStorage.setItem(
          "tokenExpiration",
          new Date().getTime() + +result.expiresIn * 1000
        );
        Cookie.set("jwt", result.idToken);
        Cookie.set(
          "expirationDate",
          new Date().getTime() + +result.expiresIn * 1000
        );
      })
      .catch((err) => console.error(err));
  },
  initAuth(vuexContext, req) {
    let token;
    let expirationDate;
    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];
      expirationDate = req.headers.cookie
        .split(";")
        .find((c) => c.trim().startsWith("expirationDate="))
        .split("=")[1];
    } else {
      token = localStorage.getItem("token");
      expirationDate = localStorage.getItem("tokenExpiration");
    }
    if (new Date().getTime() > +expirationDate || !token) {
      vuexContext.dispatch("logout");
      return;
    }
    vuexContext.commit("SET_TOKEN", token);
  },
  logout(vuexContext) {
    vuexContext.commit("CLEAR_TOKEN");
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  },
};

export const getters = {
  posts(state) {
    return state.posts;
  },
  isAuthenticated(state) {
    return state.token != null;
  },
};
