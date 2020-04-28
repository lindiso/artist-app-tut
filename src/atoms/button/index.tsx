import React, { FC } from 'react';
import { Button } from './style';

interface IProps {
  onClick: (...args) => void;
  title: string;
}

const ButtonComponent: FC<IProps> = (props: IProps) => {

  const { onClick, title } = props;

  return (
    <Button
      onClick={onClick}
    >{ title }</Button>
  );
};

ButtonComponent.defaultProps = {
  title: 'No button text set',
};

export default ButtonComponent;
