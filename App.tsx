import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {StatusBar} from 'react-native';
import {BooksProvider} from './src/entities/books/books-provider';
import MainNavigator from './src/navigation/main-navigator/main-navigator';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" animated />
      <BooksProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </BooksProvider>
    </>
  );
}
