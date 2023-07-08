import React, {useCallback, useEffect} from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import PlusIcon from '../../assets/icons/plus.svg';
import BookListItem from '../../components/book-list-item/book-list-item';
import {COLORS} from '../../constants/theme';
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
      <View style={styles.header}>
        <Text style={styles.title}>Bookshelf</Text>
        <TouchableOpacity style={styles.addButton}>
          <PlusIcon width={24} height={24} fill={COLORS.light} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        keyExtractor={keyExtractor}
        renderItem={renderBookItem}
        style={styles.list}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={getBooks}
            tintColor={COLORS.light}
          />
        }
      />
    </SafeAreaView>
  );
}

export default BooksListScreen;
