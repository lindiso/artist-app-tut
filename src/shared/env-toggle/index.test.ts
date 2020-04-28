import environmentToggles from './index';

const mockEnvToggles = {
  development: {
    testFeature: true,
    prodFeature: false,
  },
  staging: {
    testFeature: true,
    prodFeature: false,
  },
  production: {
    testFeature: false,
    prodFeature: true,
  },
};

describe('feature toggle', () => {
  it('should return true when a feature that is enabled on dev is requested', () => {
    const result = environmentToggles('testFeature', mockEnvToggles);
    const expected = true;
    expect(result).toEqual(expected);
  });
  it('should return false when a feature that is disabled on dev is requested', () => {
    const result = environmentToggles('prodFeature', mockEnvToggles);
    const expected = false;
    expect(result).toEqual(expected);
  });
});
