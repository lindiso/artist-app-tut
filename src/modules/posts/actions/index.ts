export const FETCH_POSTS_START = 'posts/FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'posts/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'posts/FETCH_POSTS_ERROR';

export const fetchPostsStart = () => {
  return {
    type: FETCH_POSTS_START,
  };
};

export const fetchPostsSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS, data,
  };
};

export const fetchPostsError = () => {
  return {
    type: FETCH_POSTS_ERROR,
  };
};

