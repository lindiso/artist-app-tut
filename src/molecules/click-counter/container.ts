import { getCount } from '~/modules/clicker/selectors';
import { addOneToCounter } from '~/modules/clicker/actions';
import { IApplicationState } from '~/core/reducer';

export const mapStateToProps = (state: IApplicationState) => {
  const count = getCount(state);
  return {
    count,
  };
};

export const mapDispatchToProps = dispatch => ({
  addOneToCounter() {
    dispatch(addOneToCounter());
  },
});
