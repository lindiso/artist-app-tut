import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ErrorBoundary from './index';

Enzyme.configure({ adapter: new Adapter() });

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
};

describe('ATOMS: error-boundary', () => {
  it('should catch errors with componentDidCatch', () => {
    const component = mount(
      <ErrorBoundary>
        <ProblemChild/>
      </ErrorBoundary>
    );
    expect(component.state().hasError).toEqual(true);
  });
  it('should catch errors with componentDidCatch: silent', () => {
    const wrapper = mount(
      <ErrorBoundary silent>
        <ProblemChild />
      </ErrorBoundary>
    );

    expect(wrapper.state().hasError).toEqual(true);
    expect(wrapper.html()).toEqual('<div></div>');
  });
});
