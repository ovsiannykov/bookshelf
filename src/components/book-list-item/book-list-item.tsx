import React, {memo, useCallback, useRef} from 'react';
import {Image, Text, View} from 'react-native';
import {RectButton, Swipeable} from 'react-native-gesture-handler';

import DeleteIcon from '../../assets/icons/delete.svg';
import EditIcon from '../../assets/icons/edit.svg';
import DEFAULT_PHOTO from '../../assets/images/photo.png';
import useDateFormatters from '../../hooks/use-date-formatter';
import {BookType} from '../../types/books-types';
import styles from './book-list-item.styles';

type BookListItemProps = {
  book: BookType;
  onPress?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

const BookListItem = memo(
  ({book, onPress, onEdit, onDelete}: BookListItemProps) => {
    const {dayShortMonthTime} = useDateFormatters();
    const swipeableRef = useRef<Swipeable | null>(null);

    const closeButtons = useCallback(() => {
      swipeableRef.current?.close();
    }, []);

    const editHandler = useCallback(() => {
      onEdit && onEdit();
      closeButtons();
    }, [closeButtons, onEdit]);

    const deleteHandler = useCallback(() => {
      onDelete && onDelete();
      closeButtons();
    }, [closeButtons, onDelete]);

    const renderRightActions = useCallback(() => {
      return (
        <View style={styles.rightActions}>
          <RectButton style={styles.editButton} onPress={editHandler}>
            <EditIcon width={24} height={24} fill="white" />
          </RectButton>
          <RectButton style={styles.deleteButton} onPress={deleteHandler}>
            <DeleteIcon width={24} height={24} fill="white" />
          </RectButton>
        </View>
      );
    }, [deleteHandler, editHandler]);

    return (
      <Swipeable ref={swipeableRef} renderRightActions={renderRightActions}>
        <RectButton style={styles.bookItem} onPress={onPress}>
          <Image
            source={
              book?.image
                ? {
                    uri: book.image,
                  }
                : DEFAULT_PHOTO
            }
            defaultSource={DEFAULT_PHOTO}
            style={styles.imagePreview}
          />
          <View>
            {book?.author && (
              <Text style={styles.author} numberOfLines={1}>
                {book.author}
              </Text>
            )}
            <Text style={styles.name} numberOfLines={2}>
              {book?.name || 'Book'}
            </Text>
            {book?.date && (
              <Text style={styles.date}>{dayShortMonthTime(book.date)}</Text>
            )}
          </View>
        </RectButton>
      </Swipeable>
    );
  },
);

export default BookListItem;
