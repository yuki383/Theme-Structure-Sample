import React from 'react';
import styled from 'styled-components/native';
import {Repository} from './types/repository';

type Props = {
  repository: Repository;
};

export const ListItem: React.FC<Props> = (props) => {
  return (
    <ContainerView>
      <RepoNameText>{props.repository.name}</RepoNameText>
      <DescriptionText>{props.repository.description}</DescriptionText>
    </ContainerView>
  );
};

const ContainerView = styled.View`
  background-color: ${({theme}) => theme.color.background};
  padding: 12px 20px;
`;

const RepoNameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.color.onBackground};
  margin-bottom: 4px;
`;

const DescriptionText = styled.Text`
  color: ${({theme}) => theme.color.onBackgroundAlt};
`;
