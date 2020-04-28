import React, { FC } from 'react';

interface IProps {
  [x: string]: any;
}

const ProblemChild = () => {
  throw new Error('Error thrown from problem child');
};

const ErrorPage: FC<IProps> = (props: IProps) => {
  return (
    <div>
      <ProblemChild/>
    </div>
  );
};

ErrorPage.defaultProps = {};

export default ErrorPage;
