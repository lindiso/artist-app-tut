import React, { FC } from 'react';
import { Header, Nav } from './style';
import { Link } from 'react-router-dom';
import { environmentToggles } from '~/shared';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

interface IProps {
  [x: string]: any;
}

const HeaderComponent: FC<IProps> = (props: IProps) => {

  const featureFlagPageIsEnabled = environmentToggles('showFeatureFlagPage');

  return (
    <Header>
      <MDBContainer>
        <MDBRow>
          <MDBCol size={'12'}>
            <Nav>
              <ul>
                <li>
                  <Link
                    to={'/'}
                  >Home</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                { featureFlagPageIsEnabled &&
                  <li>
                    <Link to={'/feature-flagged-page'}>A feature flagged page</Link>
                  </li>
                }
                <li>
                  <Link to={'/some-random-page-a-person-landed-on'}>404 Page</Link>
                </li>
                <li>
                  <Link to={'/error-page'}>Error Page</Link>
                </li>
                <li>
                  <Link to={'/searchPage'}>Search Page</Link>
                </li>
                <li>
                  <Link to={'/favouritePage'}>Favourites Album Page</Link>
                </li>
              </ul>
            </Nav>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Header>
  );
};

HeaderComponent.defaultProps = {};

export default HeaderComponent;
