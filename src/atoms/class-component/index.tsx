import React from 'react';
import { ComponentWrapper } from './style';

interface IComponentProps {
  [x: string]: any;
}

interface IContainerProps {
  [x: string]: any;
}

interface IState {
  [x: string]: any;
}

type IProps = IComponentProps & IContainerProps;

export default class ClassComponent extends React.Component <IProps, IState> {

  state: IState = {};

  constructor(props: IProps) {
    super(props);
  }

  render () {
    return (
      <ComponentWrapper>Class Component</ComponentWrapper>
    );
  }
}
