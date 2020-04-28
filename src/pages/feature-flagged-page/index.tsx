import React, { FC } from 'react';

interface IProps {
  [x: string]: any;
}

const FeatureFlaggedPage: FC<IProps> = (props: IProps) => {
  return (
    <div>This is a feature flagged page</div>
  );
};

FeatureFlaggedPage.defaultProps = {};

export default FeatureFlaggedPage;
