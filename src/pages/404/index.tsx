import React, { FC } from 'react';

interface IProps {
  [x: string]: any;
}

const PageNotFound: FC<IProps> = (props: IProps) => {
  return (
    <div>Page not found</div>
  );
};

PageNotFound.defaultProps = {};

export default PageNotFound;
