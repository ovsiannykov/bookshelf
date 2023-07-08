import {initializeApp} from 'firebase/app';
import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore';
import React, {useContext} from 'react';

import {Alert} from 'react-native';
import {firebaseConfig} from '../../env/firebase';
import {BookType} from '../../types/books-types';

type BooksContext = {
  books: BookType[];
  getBooks: () => void;
  addBook: ({name, author, image, goBack}: BookCreatedData) => Promise<void>;
  getLoading: boolean;
  addLaoding: boolean;
};

export const booksContext = React.createContext<BooksContext>(undefined!);

type Props = {
  children: React.ReactNode;
};

type State = {
  context: BooksContext;
};

type BookCreatedData = {
  name: string;
  author: string;
  image: string;
  goBack?: () => void;
};

export class BooksProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      context: {
        books: [],
        getBooks: this.getBooks,
        addBook: this.addBook,
        getLoading: false,
        addLaoding: false,
      },
    };
  }

  public getBooks = async () => {
    this.setState(prevState => ({
      context: {...prevState.context, getLoading: true},
    }));

    initializeApp(firebaseConfig);
    const db = getFirestore();
    const booksCollection = collection(db, 'books');

    try {
      const snapshot = await getDocs(booksCollection);
      let booksArr: BookType[] = [];
      snapshot.docs.forEach(doc => {
        booksArr.push({...doc.data(), id: doc.id} as BookType);
      });

      this.setState(prevState => ({
        context: {...prevState.context, books: booksArr},
      }));
    } catch (error) {
      console.error(error);
      Alert.alert('Ooops...', 'Fail to load books. Try again!');
    } finally {
      this.setState(prevState => ({
        context: {...prevState.context, getLoading: false},
      }));
    }
  };

  public addBook = async ({name, author, image, goBack}: BookCreatedData) => {
    this.setState(prevState => ({
      context: {...prevState.context, addLaoding: true},
    }));

    initializeApp(firebaseConfig);
    const db = getFirestore();
    const booksCollection = collection(db, 'books');

    const newBook = {
      date: Date.now(),
      name,
      author,
      image,
    };

    await addDoc(booksCollection, newBook)
      .then(() => {
        goBack && goBack();
        this.getBooks();
      })
      .catch(err => {
        console.log(err);
        Alert.alert('Ooops...', 'Something get wrong. Try again!');
      });

    this.setState(prevState => ({
      context: {...prevState.context, addLaoding: false},
    }));
  };

  render(): JSX.Element {
    return (
      <booksContext.Provider value={this.state.context}>
        {this.props.children}
      </booksContext.Provider>
    );
  }
}

export const useBooksContext = () => useContext(booksContext);
