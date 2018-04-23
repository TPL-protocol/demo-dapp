import React from 'react'
import { connect } from 'react-redux'
import AlertActions from '../actions/alerts'

class Alert extends React.Component {

  render() {
    const alert = this.props.alert;
    return !alert ? <div/> :
      <div>
        <p>{alert.message} <span onClick={this._cleanAlert}>x</span>
        </p>
      </div>
  }

  _cleanAlert(e) {
    e.preventDefault();
    this.props.reset();
  }
}

function mapStateToProps({ alert }) {
  return { alert }
}

export default connect(
  mapStateToProps,
  AlertActions
)(Alert)
