import React from 'react';
import { connect } from 'react-redux';
import { GetAllDatBois } from '../actions/datBoi_actions.js'
import { createDatBoi } from '../actions/datBoi_actions.js'
class DatBois extends React.Component {
  constructor(props) {
    super(props);
    this.createDatBoi = this.createDatBoi.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(GetAllDatBois());
  }

  createDatBoi(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let catch_phrase = this.refs.catchPhrase.value;
    this.props.dispatch(createDatBoi(name, catch_phrase))
    this.refs.datboiForm.reset()

  }

  render() {
    const datbois = this.props.datBois.map( datboi => {
      return (
        <h3 key={datboi.id}>DAT BOI: {datboi.name}  --CATCH PHRASE: {datboi.catch_phrase}</h3>
      )
    })
    return(
      <div>
        <form onSubmit={this.createDatBoi} ref="datboiForm">
          <input ref="name" placeholder="Name"/>
          <input ref="catchPhrase" placeholder="Catch Phrase"/>
          <button type="submit">Create</button>
        </form>
        { datbois }
      </div>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    datBois: state.datBois
  }
}

export default connect(mapStateToProps)(DatBois)
