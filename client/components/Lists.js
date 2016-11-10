import React from 'react';
import { indexLists } from '../actions/list_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Lists extends React.Component {
<<<<<<< HEAD

  displayLists(list) {
    return (
      <div>
        <p></p>
      </div>
    )
=======
  constructor(props) {
    super(props);
>>>>>>> 6b1d26b00b2469ed86ec07bd8f326a381fa3dca4
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
<<<<<<< HEAD
        hello
        {this.props.lists.map(this.displayLists)}
=======
        Lists
        <div>
          {lists}
        </div>
>>>>>>> 6b1d26b00b2469ed86ec07bd8f326a381fa3dca4
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
