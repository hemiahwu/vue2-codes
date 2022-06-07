import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions';
Vue.use(Vuex);

const state = {
  isAuthenticated: false, // 是否认证
  user: {},
  profile: {}, // 存储用户个人信息
  loading: false,
  profiles: []
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
