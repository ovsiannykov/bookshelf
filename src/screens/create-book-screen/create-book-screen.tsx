import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS, KEYBOARD_VERTICAL_OFFSET} from '../../constants/theme';
import {useBooksContext} from '../../entities/books/books-provider';
import {CreateBookScreenNavigationType} from '../../navigation/main-navigator/main-navigator';
import LoadingScreen from '../loading-screen/loading-screen';
import styles from './create-book-screen.styles';

type CreateBookScreenNavigationProp =
  CreateBookScreenNavigationType['navigation'];

function CreateBookScreen() {
  const navigation = useNavigation<CreateBookScreenNavigationProp>();
  const {addBook, addLaoding} = useBooksContext();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Add Book',
    });
  }, [navigation]);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const createBookHandler = useCallback(() => {
    const bookData = {
      name: name,
      author: author,
      image: imageUrl,
      goBack: goBack,
    };
    addBook(bookData);
  }, [addBook, author, goBack, imageUrl, name]);

  if (addLaoding) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Write name"
            placeholderTextColor={COLORS.light_gray}
            style={styles.input}
          />
          <Text style={styles.label}>Author</Text>
          <TextInput
            value={author}
            onChangeText={setAuthor}
            placeholder="Write athor name"
            style={styles.input}
            placeholderTextColor={COLORS.light_gray}
          />
          <Text style={styles.label}>Image</Text>
          <TextInput
            value={imageUrl}
            onChangeText={setImageUrl}
            placeholder="Pate link"
            style={styles.input}
            placeholderTextColor={COLORS.light_gray}
          />
          {name.length && author.length ? (
            <TouchableOpacity
              style={styles.addButton}
              onPress={createBookHandler}>
              <Text style={styles.addButtonTitle}>Create</Text>
            </TouchableOpacity>
          ) : null}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

export default CreateBookScreen;
