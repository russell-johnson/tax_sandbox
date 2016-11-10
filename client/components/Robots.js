import React from 'react';
import { connect } from 'react-redux';
import { getAllRobots, createRobot } from '../actions/robot_actions';

class Robots extends React.Component {
  constructor(props) {
    super(props);
    this.createRobot = this.createRobot.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getAllRobots());
  }

  createRobot(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let color = this.refs.color.value;
    this.props.dispatch(createRobot(name, color));
    this.refs.robotForm.reset();
  }

  render() {
    let robots = this.props.robots.map( robot => {
      return (
        <li key={robot.id}>
          {`${robot.name} - ${robot.color}`}
        </li>
      )
    })
    return (
      <div>
        <form onSubmit={this.createRobot} ref="robotForm">
          <input ref="name" placeholder="name" />
          <input ref="color" placeholder="color" />
          <button type="submit">Create</button>
        </form>
        <ul>
          {robots}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { robots: state.robots }
}

export default connect(mapStateToProps)(Robots);
