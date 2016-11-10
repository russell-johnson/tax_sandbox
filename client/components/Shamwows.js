import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { indexShamwows } from '../actions/shamwow_actions';
import {  shimmyShamwow } from '../actions/shamwow_actions';

class Shamwows extends React.Component {
  constructor(props) {
    super(props);
    this.createShamwow = this.createShamwow.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(indexShamwows())
  }

  createShamwow(e) {
    e.preventDefault();
    let color = this.refs.color.value;
    let size = this.refs.size.value;
    this.props.dispatch(shimmyShamwow(size, color))
    this.refs.shamwowForm.reset()
  }

  render() {
    const shamwows = this.props.shamwows.map( shamwow => {
      return (
        <h3 key={shamwow.id}><Link to={`/shamwows/${shamwow.id}`}>{shamwow.size}, {shamwow.color}</Link></h3>
      )
    })
    return(
      <div>
        Shamwows
        <div>
          <form onSubmit={this.createShamwow} ref="shamwowForm">
            <input ref="size" placeholder="size"/>
            <input ref="color" placeholder="color"/>
            <button type="submit">Create</button>
          </form>
          {shamwows}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shamwows: state.shamwows
  }
}

export default connect(mapStateToProps)(Shamwows);
