export const setIsAuthenticated = ({ commit }, data) => {
  commit('setIsAuthenticated', data);
};

export const setUser = ({ commit }, data) => {
  commit('setUser', data);
};

export const setProfile = ({ commit }, data) => {
  commit('setProfile', data);
};

export const setLoading = ({ commit }, data) => {
  commit('setLoading', data);
};

export const setProfiles = ({ commit }, data) => {
  commit('setProfiles', data);
};

export const clearCurrentState = ({ commit }, data) => {
  commit('setProfile', null);
  commit('setUser', null);
  commit('setIsAuthenticated', false);
};
