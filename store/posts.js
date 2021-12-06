export const state = () => ({
  id: 1,
  all: [],
});

export const mutations = {
  savePosts(state, posts) {
    state.all = posts;
  }
}

export const actions = {
  async get(context) {
    const { data } = await this.$axios.get('http://localhost:3001/posts');
    context.commit('savePosts', data)
  }
}