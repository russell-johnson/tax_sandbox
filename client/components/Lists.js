import React from 'react';
import { indexLists } from '../actions/list_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Lists extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(indexLists())
  }

  render() {
    let lists = this.props.lists.map( list => {
      return (
        <h3 key={list.id}><Link to={`/lists/${list.id}`}>{`${list.name}`}</Link></h3>
      )
    })
    return(
      <div>
        Lists
        <div>
          {lists}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

export default connect(mapStateToProps)(Lists);
