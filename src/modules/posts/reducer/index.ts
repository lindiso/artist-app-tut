import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
} from '../actions';
import {IPostsState} from '../interfaces';

const initialState: IPostsState = {
  payload: [],
  isLoading: false,
};

const postsReducer = (state: IPostsState = initialState, action: any) => {
  const { type, data } = action;
  switch (type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        isLoading: true,
        payload: [],
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: data,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        isLoading: false,
        payload: [],
      };
    default:
      return state;
  }
};

export default postsReducer;
