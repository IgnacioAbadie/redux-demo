import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as filterActions } from '../../../../../redux/filters/actions';
import CustomText from '../../../../components/CustomText';

import styles from './styles';

class Selector extends PureComponent {
  setLocalFilter = () => {
    this.props.dispatch(filterActions.setLocalFilters({ [this.props.filterKey]: this.props.title }));
    this.props.onPress(this.props.title);
  };

  render() {
    return (
      <TouchableOpacity
        key={this.props.title}
        onPress={this.setLocalFilter}
        style={[styles.tagContainer, this.props.isSelected && styles.selectedTag]}
      >
        <CustomText big bold black>
          {this.props.title}
        </CustomText>
      </TouchableOpacity>
    );
  }
}

Selector.propTypes = {
  title: PropTypes.string,
  filterKey: PropTypes.string,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func
};

export default connect()(Selector);
