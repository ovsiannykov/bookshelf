import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    color: COLORS.light,
    fontSize: 28,
    maxWidth: 300,
    fontWeight: '700',
    marginBottom: 8,
  },
  author: {
    color: COLORS.light,
    maxWidth: 300,
    fontWeight: '600',
    fontSize: 18,
  },
});
