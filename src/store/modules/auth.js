import { login, register, logout } from "@/services/auth.service";

const initialState = {
  userName: null,
  email: "",
  token: "",
};

export default {
  namespaced: true,
  state: { ...initialState },
  getters: {
    isLoggedIn(state) {
      return Boolean(state.token);
    },
  },
  mutations: {
    setName(state, payload) {
      state.userName = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setToken(state, payload) {
      state.token = payload;
    },
    clearStore(state) {
      Object.assign(state, { ...initialState });
    },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const { data } = await login(payload);
      const { user, token } = data;
      commit("setName", user.name);
      commit("setEmail", user.email);
      commit("setToken", token);
    },
    async registerUser({ commit }, payload) {
      const { data } = await register(payload);
      const { user, token } = data;
      commit("setName", user.name);
      commit("setEmail", user.email);
      commit("setToken", token);
    },
    async logoutUser({ commit }) {
      await logout();
      commit("clearStore");
    },
  },
};
