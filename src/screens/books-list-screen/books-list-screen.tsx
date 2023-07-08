import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
} from 'react-native';

import BookListItem from '../../components/book-list-item/book-list-item';
import {useBooksContext} from '../../entities/books/books-provider';
import {BookType} from '../../types/books-types';
import styles from './books-list-screen.styles';

function BooksListScreen() {
  const {getBooks, books, isLoading} = useBooksContext();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const keyExtractor = useCallback((item: BookType) => item.id, []);

  const renderBookItem: ListRenderItem<BookType> = useCallback(
    ({item}) => <BookListItem book={item} />,
    [],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={books}
        keyExtractor={keyExtractor}
        renderItem={renderBookItem}
        style={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getBooks}
            tintColor="#d4d4d4"
          />
        }
      />
    </SafeAreaView>
  );
}

export default BooksListScreen;
