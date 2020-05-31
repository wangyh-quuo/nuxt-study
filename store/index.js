

export const state = () => ({
   lists: []
});

export const mutations = {
  pushList(state, payload) {
    state.lists.push(payload);
  }
};

export const actions = {

}