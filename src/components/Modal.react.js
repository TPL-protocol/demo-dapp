import React from 'react'

class Modal extends React.Component {

  render() {
    let cssClass = this.props.open ? '' : 'hidden'
    cssClass += this.props.dark ? ' dark' : ''
    return (
      <div id="overlay" className={cssClass}>
        <div className="content">
          <h4>{this.props.message}</h4>
          {this._renderProgressBar()}
        </div>
      </div>
    )
  }

  _renderProgressBar() {
    if(this.props.progressBar) return (
      <div className="progress">
        <div className="indeterminate"/>
      </div>
    )
  }
}

export default Modal;
