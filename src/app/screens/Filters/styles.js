import { StyleSheet } from 'react-native';

import { green, blue } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainButton: {
    backgroundColor: green,
    padding: 10,
    margin: 10,
    borderRadius: 3
  }
});
