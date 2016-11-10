import React from 'react';

class Lists extends React.Component {

  displayLists(list) {
    console.log(list)
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
        {console.log("render LIst compo")}
        hello
        {this.props.lists.map(this.displayLists)}
      </div>
    )
  }
}

export default Lists;
