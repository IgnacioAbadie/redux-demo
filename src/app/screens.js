// https://github.com/react-community/react-navigation/issues/458
// once that issue is resolved, the initial loading screen is no longer needed and should be removed
//  in favour of setting the initialRoute as a prop of the navigator

import { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavigationActions, StackNavigator } from 'react-navigation';

import * as Routes from '../constants/routes';

import Login from './screens/Login';
import Home from './screens/Home';

// ------------------ Initial loading screen
class InitialLoadingScreen extends PureComponent {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.initialLoading) {
      nextProps.dispatch(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: nextProps.currentUser ? 'Home' : 'Login' })]
        })
      );
    }
  }
  render() {
    return null;
  }
}
InitialLoadingScreen.propTypes = {
  initialLoading: PropTypes.bool,
  currentUser: PropTypes.shape({
    sessionToken: PropTypes.string.isRequired
  })
};
const loadingScreenMapStateToProps = store => ({
  currentUser: store.auth.currentUser,
  initialLoading: store.auth.initialLoading
});
const InitialLoadingScreenContainer = connect(loadingScreenMapStateToProps)(InitialLoadingScreen);
// ------------------ Initial loading screen end

export default StackNavigator({
  [Routes.InitialLoading]: { screen: InitialLoadingScreenContainer },
  [Routes.Login]: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  [Routes.Home]: {
    screen: Home,
    navigationOptions: () => ({
      title: 'Home'
    })
  }
});
