import {StyleSheet} from 'react-native';

import {COLORS} from '../../constants/theme';

export default StyleSheet.create({
  swipeBox: {
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 0.24,
    shadowRadius: 15.38,
    elevation: 19,
  },
  bookItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.stroke,
    marginBottom: 10,
    backgroundColor: COLORS.dark,
  },
  imagePreview: {
    width: 60,
    height: 80,
    marginRight: 10,
    borderRadius: 4,
  },
  author: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
    maxWidth: 280,
    color: COLORS.light,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    maxWidth: 280,
    color: COLORS.light,
  },
  rightActions: {
    flexDirection: 'row',
    height: '100%',
    maxHeight: 102,
  },
  deleteButton: {
    height: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
    borderRadius: 16,
    width: 80,
    marginLeft: 8,
  },
});
