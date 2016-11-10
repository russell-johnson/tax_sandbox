import React from 'react';
import { connect } from 'react-redux';
import { getchaShamwow } from '../actions/shamwow_actions';


class Shamwow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.dispatch(getchaShamwow(this.props.params.id))
  }

  render() {
    return(
      <div>
        YUR SHAMMY SHAMWOW
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shamwow: state.shamwows
  }
}

export default connect(mapStateToProps)(Shamwow);
