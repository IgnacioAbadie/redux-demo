import Immutable from 'seamless-immutable';
import PropTypes from 'prop-types';

import { actions } from './actions';

const initialState = {
  sector: null,
  material: null
};

const defaultState = {
  localFilters: initialState,
  appliedFilters: initialState
};

/* eslint-disable complexity */
export default function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.SET_LOCAL_FILTERS: {
      return state.merge({ localFilters: { ...state.localFilters, ...action.payload.filterParams } });
    }
    case actions.RESET_LOCAL_FILTERS: {
      return state.merge({ localFilters: state.appliedFilters });
    }
    case actions.APPLY_FILTERS: {
      return state.merge({ appliedFilters: state.localFilters });
    }
    case actions.RESET_FILTERS: {
      return state.merge({ localFilters: initialState, appliedFilters: initialState });
    }
    default: {
      return state;
    }
  }
}
/* eslint-enable complexity */

export const propTypes = PropTypes.shape({
  sector: PropTypes.string,
  material: PropTypes.string
});
