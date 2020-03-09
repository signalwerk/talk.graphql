import React from "react";
import ReactSpritz from "react-spritz";

class Chartwell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false
    };
  }
  handleChange(e) {
    this.setState({ start: !this.state.start });
  }
  render() {
    return (
      <div>
        <ReactSpritz
          text={this.props.text}
          wpm={this.props.wpm}
          playing={this.state.start}
          normalized={true}
        />
      <button onClick={ e => this.handleChange(e)}>{this.state.start ? "." : "→"}</button>
      </div>
    );
  }
}

export default Chartwell;
