import React from 'react';
import styled from 'styled-components/native';
import {Header} from './Header';
import {View, FlatList, StyleSheet} from 'react-native';
import Repos from './repositories.json';
import {Repositories} from './types/repository';
import {ListItem} from './ListItem';

const typeRepo = <T extends Repositories>(repos: T) => repos;

const data = typeRepo(Repos);

export const Main: React.FC = () => {
  return (
    <ContainerView>
      <View>
        <FlatList
          style={{
            marginTop: 50, // header height
          }}
          data={data}
          keyExtractor={({name}) => name}
          renderItem={({item, index}) => {
            const isLastItem = index === data.length - 1;
            return (
              <>
                <ListItem key={item.name} repository={item} />
                {!isLastItem ? (
                  <View
                    style={{
                      borderBottomWidth: StyleSheet.hairlineWidth,
                      borderBottomColor: 'gray',
                      marginHorizontal: 12,
                    }}
                  />
                ) : null}
              </>
            );
          }}
        />
        <Header label={'RNC Repos'} />
      </View>
    </ContainerView>
  );
};

const ContainerView = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;
