import React, { Component } from "react";

class Button extends Component {

  handleClick() {
    this.props.updateInsult();
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick.bind(this)}>
          Click here to generate
        </button>
      </div>
    );
  }
}

export default Button;