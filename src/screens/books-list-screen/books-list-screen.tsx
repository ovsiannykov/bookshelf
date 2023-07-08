import React from 'react';
import {SafeAreaView} from 'react-native';

import BookListItem from '../../components/book-list-item/book-list-item';
import styles from './books-list-screen.styles';

const BooksListScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <BookListItem />
    </SafeAreaView>
  );
};

export default BooksListScreen;
