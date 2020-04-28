import React, { FC } from 'react';

interface IProps {
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

const Loader: FC<IProps> = (props: IProps) => {

  const { color } = props;

  return (
    <div className={'spinner-border text-' + color} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Loader.defaultProps = {
  color: 'primary',
};

export default Loader;
