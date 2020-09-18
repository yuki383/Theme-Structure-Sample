import React from 'react';
import styled, {css} from 'styled-components/native';

export const Header: React.FC<{label: string}> = (props) => {
  return (
    <ContainerView>
      <Title>{props.label}</Title>
    </ContainerView>
  );
};

const ContainerView = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: ${({theme}) => theme.color.primary};
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  ${({theme}) => {
    if (theme.scheme !== 'dark') {
      return css`
        shadow-color: black;
        shadow-offset: 0 4px;
        shadow-opacity: 0.1;
        shadow-radius: 2px;
      `;
    }
    return undefined;
  }}
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.color.onPrimary};
`;
