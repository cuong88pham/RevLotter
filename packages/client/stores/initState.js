export const actionExample = () => dispatch => {
  console.log('Example Action');
  dispatch({
    type: 'FOO'
  });
};

export default {
  initState: (state = { foo: '' }, action) => {
    switch (action.type) {
      case 'FOO':
        console.log('DISPATCHED FOO TYPE');
        return { ...state, foo: action.payload };
      default:
        return state;
    }
  }
};
