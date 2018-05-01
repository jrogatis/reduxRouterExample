import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_POSTS:
      return _.mapKeys(payload.data, 'id');
    default:
      return state;
  }
};
