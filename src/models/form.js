export default {
  namespace: 'form',
  state: {
    name: 'lxc',
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};