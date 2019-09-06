import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as types from './mutation-types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

// 应用初始状态
const state = {
  device: 'desktop',
  screenInfo: {
    width: document.body.clientWidth,
    height: document.body.clientHeight
  } // 浏览器尺寸
};
const mutations = {
  [types.DEVICE](state, device) {
    state.device = device;
  },
  [types.SCREEINFO](state, screenInfo) {
    state.screenInfo = screenInfo;
  }
};

// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug
});
