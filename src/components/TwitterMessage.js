import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      // charactersRemaining: 280
      value: "",
      characters: 0
    };
  }

  handleChange(e) {
    // debugger
    const value = e.target.value
    const characters = e.target.value.length
    this.setState({
      value: value,
      characters: characters
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={e => this.handleChange(e)}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
