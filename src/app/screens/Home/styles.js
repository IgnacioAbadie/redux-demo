import { StyleSheet } from 'react-native';

import { green, blue, white } from '../../../constants/colors';

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
  },
  dataContainer: {
    backgroundColor: white,
    borderRadius: 50,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }
});
