import React, {useContext} from 'react';
import {BookType} from '../../types/books-types';

export const booksContext = React.createContext<BooksContext>(undefined!);

type BooksContext = {
  books: BookType[] | null;
  getBooks: InstanceType<typeof BooksProvider>['getBooks'];
  isLoading: boolean;
};

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
        books: null,
        getBooks: this.getBooks,
        isLoading: false,
      },
    };
  }

  getBooks = async () => {
    this.setState(prev => ({context: {...prev.context, isLoading: true}}));

    // try {
    //  // const res = await axios.get(BASE_URL);

    //   if (res.status === 200) {
    //     await this.setState(prev => ({
    //       context: {...prev.context, posts: res.data},
    //     }));
    //   }
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   this.setState(prev => ({context: {...prev.context, isLoading: false}}));
    // }
    //this.setState(prev => ({context: {...prev.context, isLoading: false}}));
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
