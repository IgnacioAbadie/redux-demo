import { NavigationActions } from 'react-navigation';

import { stringArrayToObject } from '../../utils/arrayUtils';

export const actions = stringArrayToObject(
  ['SET_LOCAL_FILTERS', 'APPLY_FILTERS', 'RESET_FILTERS', 'RESET_LOCAL_FILTERS'],
  '@@FILTERS/'
);

export const actionCreators = {
  setLocalFilters(filterParams) {
    return async dispatch => {
      dispatch({ type: actions.SET_LOCAL_FILTERS, payload: { filterParams } });
    };
  },
  resetLocalFilters() {
    return async dispatch => {
      dispatch({ type: actions.RESET_LOCAL_FILTERS });
    };
  },
  applyFilters() {
    return async dispatch => {
      dispatch({ type: actions.APPLY_FILTERS });
      dispatch(NavigationActions.back());
    };
  },
  resetFilters() {
    return async dispatch => {
      dispatch({ type: actions.RESET_FILTERS });
      dispatch(NavigationActions.back());
    };
  }
};
