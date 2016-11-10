import React from 'react';
import Lists from '../components/Lists';
import DatBois from '../components/DatBois';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions'
import { connect } from 'react-redux';


class App extends React.Component {
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
