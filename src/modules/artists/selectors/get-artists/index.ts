import { IApplicationState } from '~/core/reducer';
import { get } from 'lodash';

export default (state: IApplicationState) => {
  return get(state, 'artists.payload') || [];
};
