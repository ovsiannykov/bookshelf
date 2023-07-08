import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';

import DEFAULT_PHOTO from '../../assets/images/photo.png';
import {BookDetailScreenNavigationType} from '../../navigation/main-navigator/main-navigator';
import styles from './book-detail-screen.styles';

type BookDetailScreenNavigationProp =
  BookDetailScreenNavigationType['navigation'];
type BookDetailScreenRouteProp = BookDetailScreenNavigationType['route'];

function BookDetailScreen() {
  const navigation = useNavigation<BookDetailScreenNavigationProp>();
  const route = useRoute<BookDetailScreenRouteProp>();
  const book = route.params?.book;

  useEffect(() => {
    navigation.setOptions({
      title: book?.name || 'Book',
    });
  }, [book?.name, navigation]);

  return (
    <View style={styles.screen}>
      <Image
        source={
          book?.image
            ? {
                uri: book?.image,
              }
            : DEFAULT_PHOTO
        }
        defaultSource={DEFAULT_PHOTO}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text style={styles.title} numberOfLines={2}>
          {book?.name || 'Unknown Book'}
        </Text>

        <Text style={styles.author} numberOfLines={2}>
          Author: {book?.author || 'Noname'}
        </Text>
      </View>
    </View>
  );
}

export default BookDetailScreen;
