import {StackNavigationOptions} from '@react-navigation/stack';

export const HEADER_STYLE_CONFIG: StackNavigationOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: 'white',
  },
  headerBackTitleStyle: {
    color: '#155e75',
    fontSize: 12,
  },
  headerTintColor: '#155e75',
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    color: '#155e75',
    fontWeight: '600',
    fontSize: 20,
  },
};

export const DISABLED_HEADER_STYLE_CONFIG: StackNavigationOptions = {
  headerShown: false,
};
