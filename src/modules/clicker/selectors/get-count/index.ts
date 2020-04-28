import { get } from 'lodash';
import { IApplicationState } from '~/core/reducer';

export default (state: IApplicationState) => {
  return get(state, 'clicker.count') || 0;
};
