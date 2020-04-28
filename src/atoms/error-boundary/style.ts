import styled from 'styled-components';

export const ErrorDisplayContainer = styled.div<any>`
  max-height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  margin: 15px;
  padding: 15px;
  background-color: white;
  overflow: hidden;
`;

export const ErrorPreElement = styled.pre<any>`
  flex: 1 1 auto;
`;

export const ErrorButtonContainer = styled.pre<any>`
  margin-bottom: 15px;
  flex: 1 1 auto;
`;

export const ErrorHeaderContainer = styled.div<any>`
  margin-bottom: 15px;
`;

export const ErrorHeading = styled.div<any>`
  font-size: 32px;
  line-height: 34px;
  color: darkred;
`;

export const ErrorSubtext = styled.div<any>`
  margin: 5px 0;
`;
