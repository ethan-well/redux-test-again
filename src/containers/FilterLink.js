import React from 'react';
import Link from '../components/Link';
import { setVisibilityFilter } from '../actions';
import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)