import { getPosts, getLoading } from '~/modules/posts/selectors';
import { fetchPostsStart} from '~/modules/posts/actions';
import { IApplicationState } from '~/core/reducer';

export const mapStateToProps = (state: IApplicationState) => {
  const posts = getPosts(state);
  const isLoading = getLoading(state);
  return {
    posts,
    isLoading,
  };
};

export const mapDispatchToProps = dispatch => ({
  fetchPosts() {
    dispatch(fetchPostsStart());
  },
});
