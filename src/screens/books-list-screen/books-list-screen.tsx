import {useNavigation} from '@react-navigation/native';
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
import {BooksListScreenNavigationType} from '../../navigation/main-navigator/main-navigator';
import {BookType} from '../../types/books-types';
import styles from './books-list-screen.styles';

type BooksListScreenNavigationProp =
  BooksListScreenNavigationType['navigation'];

function BooksListScreen() {
  const navigation = useNavigation<BooksListScreenNavigationProp>();
  const {getBooks, books, getLoading, deleteBook} = useBooksContext();

  useEffect(() => {
    getBooks();
  }, [getBooks]);

  const goToCrateBookScreen = useCallback(() => {
    navigation.navigate('CREATE_BOOK_SCREEN');
  }, [navigation]);

  const keyExtractor = useCallback((item: BookType) => item.id, []);

  const deleteBookHandler = useCallback(
    (id: string) => {
      deleteBook(id);
    },
    [deleteBook],
  );

  const renderBookItem: ListRenderItem<BookType> = useCallback(
    ({item}) => (
      <BookListItem book={item} onDelete={() => deleteBookHandler(item.id)} />
    ),
    [],
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Bookshelf</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={goToCrateBookScreen}>
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
            refreshing={getLoading}
            onRefresh={getBooks}
            tintColor={COLORS.light}
          />
        }
      />
    </SafeAreaView>
  );
}

export default BooksListScreen;
