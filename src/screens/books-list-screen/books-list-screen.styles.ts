import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  list: {
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: COLORS.light,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.violet,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
