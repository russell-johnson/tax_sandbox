import React from 'react';

class Lists extends React.Component {

  displayLists(list) {
    return (
      <div>
        <p></p>
      </div>
    )
  }

  componentWillMount() {
    this.props.indexLists()
  }

  render() {
    return(
      <div>
        hello
        {this.props.lists.map(this.displayLists)}
      </div>
    )
  }
}

export default Lists;
