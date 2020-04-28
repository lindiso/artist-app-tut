import React, { FC } from 'react';
import { PostLister } from '~/molecules';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

interface IProps {
  [x: string]: any;
}

const AboutPage: FC<IProps> = (props: IProps) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <PostLister/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

AboutPage.defaultProps = {};

export default AboutPage;
