import React, { FC } from 'react';

interface IProps {
  [x: string]: any;
}

const FunctionalComponent: FC<IProps> = (props: IProps) => {
  return (
    <div>Functional Component</div>
  );
};

FunctionalComponent.defaultProps = {};

export default FunctionalComponent;
