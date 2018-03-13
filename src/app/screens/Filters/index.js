import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators as filterActions } from '../../../redux/filters/actions';
import { propTypes as filtersPropstypes } from '../../../redux/filters/reducer';

import Filters from './layout';

class FiltersContainer extends Component {
  componentWillUnmount() {
    this.props.dispatch(filterActions.resetLocalFilters());
  }

  handleApply = () => {
    this.props.dispatch(filterActions.applyFilters());
  };

  handleResetFilters = () => {
    this.props.dispatch(filterActions.resetFilters());
  };

  render() {
    return (
      <Filters
        onApply={this.handleApply}
        onResetFilters={this.handleResetFilters}
        initialValues={this.props.appliedFilters}
      />
    );
  }
}

FiltersContainer.propTypes = { appliedFilters: filtersPropstypes };

const mapStateToProps = store => ({
  appliedFilters: store.filters.appliedFilters
});

export default connect(mapStateToProps)(FiltersContainer);
