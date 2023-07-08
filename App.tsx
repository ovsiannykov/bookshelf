import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {BooksProvider} from './src/entities/books/books-provider';
import MainNavigator from './src/navigation/main-navigator/main-navigator';

export default function App() {
  return (
    <BooksProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </BooksProvider>
  );
}
