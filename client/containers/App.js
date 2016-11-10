import React from 'react';
import Lists from '../components/Lists';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default App;
