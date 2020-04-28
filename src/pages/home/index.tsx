import React, { FC } from 'react';
import { ClickCounter } from '~/molecules';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Home: FC<any> = (props) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <ClickCounter/>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

Home.defaultProps = {};

export default Home;
