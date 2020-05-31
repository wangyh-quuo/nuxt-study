export const state = () => ({
  user: {}
});

export const mutations = {
 setUser(state, {name, age}) {
   state.user = {name, age};
 }
};

export const actions = {

}