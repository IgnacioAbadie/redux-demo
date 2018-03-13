import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CustomButton from '../../components/CustomButton';
import { propTypes as filtersPropstypes } from '../../../redux/filters/reducer';

import { data } from './filtersData';
import Section from './components/Section';
import styles from './styles';

export default function Filters({ onApply, onResetFilters, initialValues }) {
  return (
    <View style={styles.container}>
      <Section data={data.sector} initialValues={initialValues.sector} filterKey="sector" />
      <Section data={data.material} initialValues={initialValues.material} filterKey="material" />
      <CustomButton onPress={onApply} green title="Aplicar filtros!" style={styles.mainButton} />
      <CustomButton onPress={onResetFilters} green title="Reiniciar!" style={styles.mainButton} />
    </View>
  );
}

Filters.propTypes = {
  initialValues: filtersPropstypes,
  onApply: PropTypes.func,
  onResetFilters: PropTypes.func
};
