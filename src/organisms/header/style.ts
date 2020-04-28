import styled from 'styled-components';

export const Header = styled.header<any>`
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #333;
`;

export const Nav = styled.nav<any>`
  ul {
  list-style: none;
  display: flex;
  flex: 1;
  margin: 0;
    li {
      a {
        text-decoration: none;
        padding: 15px;
        color: black;
      }
    }
  }
`;
