import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BookDetailScreen from '../../screens/book-detail-screen/book-detail-screen';
import BooksListScreen from '../../screens/books-list-screen/books-list-screen';
import CreateBookScreen from '../../screens/create-book-screen/create-book-screen';
import {BookType} from '../../types/books-types';
import {
  DISABLED_HEADER_STYLE_CONFIG,
  HEADER_STYLE_CONFIG,
} from '../navigation-config';

export type MainStackParamsList = {
  BOOKS_LIST_SCREEN: undefined;
  CREATE_BOOK_SCREEN: undefined;
  BOOK_DETAIL_SCREEN: {book: BookType} | undefined;
};

const MainStack = createStackNavigator<MainStackParamsList>();

export type BooksListScreenNavigationType = NativeStackScreenProps<
  MainStackParamsList,
  'BOOKS_LIST_SCREEN'
>;

export type CreateBookScreenNavigationType = NativeStackScreenProps<
  MainStackParamsList,
  'CREATE_BOOK_SCREEN'
>;

export type BookDetailScreenNavigationType = NativeStackScreenProps<
  MainStackParamsList,
  'BOOK_DETAIL_SCREEN'
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
      <MainStack.Screen
        component={CreateBookScreen}
        name="CREATE_BOOK_SCREEN"
      />
      <MainStack.Screen
        component={BookDetailScreen}
        name="BOOK_DETAIL_SCREEN"
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
