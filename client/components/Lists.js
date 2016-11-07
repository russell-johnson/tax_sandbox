import React from 'react';
import { connect } from 'react-redux'
import { indexLists } from '../actions/actions';

class Lists extends React.Component {
  constructor() {
    super();
    this.indexLists = this.indexLists.bind(this);
  }

  indexLists() {
    this.props.dispatch(indexLists())
  }

  componentWillMount() {
    this.indexLists()
  }

  render() {
    return(
      <div>
        hellllo
      </div>
    )
  }
}

export default connect()(Lists);
