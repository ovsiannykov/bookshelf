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
  input: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: COLORS.stroke,
    marginBottom: 30,
    color: COLORS.light,
  },
  label: {
    marginBottom: 10,
    color: COLORS.light,
    fontSize: 16,
  },
  bottonBox: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  addButton: {
    width: '100%',
    backgroundColor: COLORS.violet,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderRadius: 10,
  },
  addButtonTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.light,
  },
});
