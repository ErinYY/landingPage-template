import * as types from './mutation-types';

export const setDevice = ({ commit }, device) => {
  commit(types.DEVICE, device);
};
export const setScreenInfo = ({ commit }, screenInfo) => {
  commit(types.SCREEINFO, screenInfo);
};
