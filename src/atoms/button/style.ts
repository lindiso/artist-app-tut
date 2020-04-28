import styled, { css } from 'styled-components';

export const Button = styled.button<any>`
  font-size: 18px;
  line-height: 20px;
  padding: 5px 10px;
  background: #efefef;
  border: 1px solid #d9d9d9;
  color: #1c1c1c;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  &:hover, &:active, &:focus {
    outline: none;
  }
`;

// export const PropsComponent = styled.div<{ aProp: boolean; }>`
//   ${({ aProp }) => {
//     return css `
//       display: ${(aProp) ? 'block' : 'flex'};
//     `;
//   }};
// `;
