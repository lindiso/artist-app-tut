import featureToggles from './feature-toggles.json';
import { get } from 'lodash';

export default (feature: string, overrideFeatureToggles?: any): boolean => {
  try {
    const env = process.env.RUN_ENV || 'development';
    return get(overrideFeatureToggles ? overrideFeatureToggles : featureToggles, [env, feature]) || false;
  } catch (e) {
    return false;
  }
};
