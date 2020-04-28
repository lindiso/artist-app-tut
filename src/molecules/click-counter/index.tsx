import React, { FC } from 'react';
import { Button } from '~/atoms';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './container';

interface IContainerProps {
  count: number;
  addOneToCounter: () => void;
}

interface IComponentProps {
  [x: string]: any;
}

type IProps = IComponentProps & IContainerProps;

const ClickCounter: FC<any> = (props: IProps) => {

  const { addOneToCounter, count } = props;

  const handleClick = () => {
    addOneToCounter();
  };

  return (
    <div
      data-cy={'click-counter-wrapper'}
    >
      <div>Count: { count }</div>
      <Button
        title={'Click me!'}
        onClick={handleClick}
      />
    </div>
  );
};

ClickCounter.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ClickCounter);
