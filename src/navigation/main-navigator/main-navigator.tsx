import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BooksListScreen from '../../screens/books-list-screen/books-list-screen';
import {
  DISABLED_HEADER_STYLE_CONFIG,
  HEADER_STYLE_CONFIG,
} from '../navigation-config';

export type MainStackParamsList = {
  BOOKS_LIST_SCREEN: undefined;
  NEW_BOOKS_SCREEN: {bookId: string} | undefined;
};

const MainStack = createStackNavigator<MainStackParamsList>();

export type BooksListScreenNavigationType = NativeStackScreenProps<
  MainStackParamsList,
  'BOOKS_LIST_SCREEN'
>;

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      initialRouteName="BOOKS_LIST_SCREEN"
      screenOptions={HEADER_STYLE_CONFIG}>
      <MainStack.Screen
        component={BooksListScreen}
        name="BOOKS_LIST_SCREEN"
        options={DISABLED_HEADER_STYLE_CONFIG}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
