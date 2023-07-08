import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';

import BookListItem from '../../components/book-list-item/book-list-item';
import {useBooksContext} from '../../entities/books/books-provider';
import styles from './books-list-screen.styles';

function BooksListScreen() {
  const {getBooks, books} = useBooksContext();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  console.log(books);

  return (
    <SafeAreaView style={styles.screen}>
      <BookListItem />
    </SafeAreaView>
  );
}

export default BooksListScreen;
