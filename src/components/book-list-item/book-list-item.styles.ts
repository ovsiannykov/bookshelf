import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  swipeBox: {
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 14},
    shadowOpacity: 0.24,
    shadowRadius: 15.38,
    elevation: 19,
    backgroundColor: 'white',
  },
  bookItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 0.2,
    borderColor: 'black',
    backgroundColor: 'white',
    marginBottom: 10,
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
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    maxWidth: 280,
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
    backgroundColor: 'red',
    borderRadius: 16,
    width: 80,
    marginHorizontal: 4,
  },
  date: {
    fontSize: 10,
    marginTop: 2,
    color: 'gray',
  },
});
