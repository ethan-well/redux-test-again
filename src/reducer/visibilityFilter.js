import { VisibilityFilters } from '../actions';
import { bindActionCreators } from 'redux';

const visibilityFilters = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilters;