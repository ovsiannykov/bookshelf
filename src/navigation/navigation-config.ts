import {StackNavigationOptions} from '@react-navigation/stack';
import {COLORS} from '../constants/theme';

export const HEADER_STYLE_CONFIG: StackNavigationOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: COLORS.dark,
  },
  headerBackTitleStyle: {
    color: COLORS.light,
    fontSize: 12,
  },
  headerTintColor: COLORS.light,
  headerShadowVisible: false,
  headerBackTitleVisible: false,
  headerTitleStyle: {
    color: COLORS.light,
    fontWeight: '600',
    fontSize: 20,
  },
};

export const DISABLED_HEADER_STYLE_CONFIG: StackNavigationOptions = {
  headerShown: false,
};
