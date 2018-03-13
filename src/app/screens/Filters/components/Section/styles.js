import { StyleSheet } from 'react-native';

import { green } from '../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    margin: 5
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10
  },
  selectedTag: {
    backgroundColor: green
  }
});
