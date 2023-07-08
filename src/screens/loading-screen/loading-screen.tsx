import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';

import styles from './loading-screen.styles';

type LoadingScreenProps = {
  size?: 'large' | 'small';
  color?: string;
};

const LoadingScreen = memo(({size, color}: LoadingScreenProps) => {
  return (
    <View style={styles.screen}>
      <ActivityIndicator size={size ?? 'large'} color={color || 'gray'} />
    </View>
  );
});

export default LoadingScreen;
