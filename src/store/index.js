import Vue from "vue";
import Vuex from "vuex";
import { getCharactersApi } from "@/api/charactersApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
  },
  mutations: {
    ADD_CHARACTERS(state, characters) {
      state.characters.push(...characters);
    },
  },
  actions: {
    addCharacters({ commit }, params) {
      return new Promise((resolve, reject) => {
        getCharactersApi(params).then((response) => {
          if (response.status === 200) {
            commit("ADD_CHARACTERS", response.data.results);
            resolve(response.data.info);
          } else {
            reject(response);
          }
        });
      });
    },
  },
  getters: {
    getCharacters(state) {
      return state.characters;
    },
  },
  modules: {},
});
