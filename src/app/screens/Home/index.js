import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import * as Routes from '../../../constants/routes';
import { actionCreators as authActions } from '../../../redux/auth/actions';

import { data } from './homeData';
import Home from './layout';

class HomeContainer extends Component {
  state = { data };
  componentWillReceiveProps(nextProps) {
    let filteredData;
    if (nextProps.filterParams.sector) {
      data.filter(item => nextProps.filterParams.sector === item.sector);
    } else {
      filteredData = data;
    }
    if (nextProps.filterParams.material) {
      filteredData = filteredData.filter(item => nextProps.filterParams.material === item.material);
    }
    this.setState({ data: filteredData });
  }

  handleLogout = () => {
    this.props.dispatch(authActions.logout());
  };

  handleGoToFilters = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: Routes.Filters }));
  };

  render() {
    return <Home data={this.state.data} onLogout={this.handleLogout} goToFilters={this.handleGoToFilters} />;
  }
}

HomeContainer.propTypes = {
  filterParams: PropTypes.shape({
    sector: PropTypes.string,
    material: PropTypes.string
  })
};

const mapStateToProps = store => ({
  filterParams: store.filters.appliedFilters
});

export default connect(mapStateToProps)(HomeContainer);
