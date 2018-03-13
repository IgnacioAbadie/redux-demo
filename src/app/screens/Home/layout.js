import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CustomText from '../../components/CustomText';
import CustomButton from '../../components/CustomButton';

import styles from './styles';

export default function Home({ data, onLogout, goToFilters }) {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        {data.map(item => (
          <View key={item.name} style={styles.itemContainer}>
            <CustomText big bold red>
              {item.name}
            </CustomText>
          </View>
        ))}
      </View>
      <CustomButton onPress={goToFilters} green title="FILTRAR!!" style={styles.mainButton} />
      <CustomButton onPress={onLogout} green title="Logout!" style={styles.mainButton} />
    </View>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      sector: PropTypes.string,
      material: PropTypes.string
    })
  ),
  onLogout: PropTypes.func.isRequired,
  goToFilters: PropTypes.func.isRequired
};
