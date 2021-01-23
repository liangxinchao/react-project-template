export default {
  namespace: 'dashboard',
  state: {
    name: 'lxc',
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};