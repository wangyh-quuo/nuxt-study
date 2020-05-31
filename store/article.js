import axios from 'axios';

export const state = () => ({
  article: {}
});

export const mutations = {
 setArticle(state, payload) {
   state.article = payload;
 }
};

export const actions = {
  async asyncGetArticle({commit}) {
    const {data} = await axios.get(`https://apim.zgylt.com/News/GetDetails/4844`);
    commit("setArticle", data);
  }
}