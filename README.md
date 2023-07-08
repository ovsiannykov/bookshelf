# Bookshelf App 📱

### 1️⃣ Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

### 2️⃣ Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
cd ios && pod isntall

# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Congratulations! 🎉

You've successfully run this React Native App 😌

# 🎯 What the task?

Exercise:
You need to develop a simple Bookshelf application using React Native. The application should allow users to view the list of books and add new books to the library.

Requirements:
Create a book list screen that displays the title and author of each book. The book list should be implemented using a FlatList or other suitable component to display a large amount of data.

Implement the ability to add a new book. Create a separate screen or modal window where the user can enter the title and author of the book. After adding a book, it should appear in the list.

Implement the functionality to remove a book from the list. The user should be able to swipe on a list item and delete the book.

Develop a simple application design, including basic user interface elements (such as buttons, text fields, etc.). You can use the standard React Native styles or add your own styles with CSS.

The application must be developed using functional components and hooks.

To manage application state, use a suitable library such as Redux, MobX or Context API, Zustand.

Additional tasks (optional):
Implement functionality for editing book information.
Add the ability to filter the list of books by author or title.
Design animations for smooth screen transitions or other custom actions.
Include and use third party libraries such as react-navigation to improve navigation and user experience.

Try to develop clean and organized code following React Native development best practices. At the end of the assignment, provide the source code for the project, along with instructions for running it.
