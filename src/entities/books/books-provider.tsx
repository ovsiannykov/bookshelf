import {initializeApp} from 'firebase/app';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import React, {useContext} from 'react';

import {firebaseConfig} from '../../env/firebase';
import {BookType} from '../../types/books-types';

type BooksContext = {
  books: BookType[];
  getBooks: () => void;
  isLoading: boolean;
};

export const booksContext = React.createContext<BooksContext>(undefined!);

type Props = {
  children: React.ReactNode;
};

type State = {
  context: BooksContext;
};

export class BooksProvider extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      context: {
        books: [],
        getBooks: this.getBooks,
        isLoading: false,
      },
    };
  }

  public getBooks = async () => {
    this.setState(prevState => ({
      context: {...prevState.context, isLoading: true},
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
    } finally {
      this.setState(prevState => ({
        context: {...prevState.context, isLoading: false},
      }));
    }
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
