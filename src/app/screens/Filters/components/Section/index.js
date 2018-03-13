import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import CustomText from '../../../../components/CustomText';
import Selector from '../Selector';

import styles from './styles';

class Section extends PureComponent {
  state = { selected: this.props.initialValues };

  handlePress = title => {
    this.setState({ selected: title });
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomText big bold>
          {this.props.filterKey}
        </CustomText>
        <View style={styles.tagsContainer}>
          {this.props.data.map(title => (
            <Selector
              key={title}
              title={title}
              isSelected={title === this.state.selected}
              filterKey={this.props.filterKey}
              onPress={this.handlePress}
            />
          ))}
        </View>
      </View>
    );
  }
}

Section.propTypes = {
  filterKey: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  initialValues: PropTypes.string
};

export default connect()(Section);
