import { StyleSheet } from 'react-native';

import { green, white, black } from '../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tagContainer: {
    padding: 20,
    backgroundColor: white,
    borderRadius: 50,
    borderColor: black,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedTag: {
    backgroundColor: green
  }
});
