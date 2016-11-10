import React from 'react';
import { connect } from 'react-redux';
import { showList } from '../actions/list_actions';

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.dispatch(showList(this.props.params.id));
  }

  render() {
    return(
      <div>
        <h3>{this.props.list.name}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.lists
  }
}

export default connect(mapStateToProps)(List);
