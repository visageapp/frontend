import React from 'react'

var style = require('./style.css');

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', focused: false};
  }
  handleFocus (e) {
    var s = Object.assign(this.state, {focused: true})
    this.setState(s);
  }

  handleBlur (e) {
    var s = Object.assign(this.state, {focused: false})
    this.setState(s);
  }
  render() {
    var labelStyle = {
      opacity: (this.props.value === '' || this.state.focused) ? 1 : 0,
      transform: (this.props.value !== '') ? 'translate(-125%, -8px)' :'translate(0px, 0px)'
    };

    console.log(this.state.focused);

    return (
      <div className={style.input} >
        <input type={this.props.type} value={this.props.value} onChange={e => this.props.callback(e)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} style={this.props.style}/>
        <label style={labelStyle}>{this.props.placeholder}</label>
        {this.props.children}
      </div>
    )
  }
}

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  move: true
}

export default Input;
