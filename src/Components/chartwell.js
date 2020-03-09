import React from "react";

class Chartwell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "10+10+10"
    };
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div>
        <input
          className="chartwell"
          value={this.state.value}
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <div className="chartwell">{this.state.value}</div>
        <div className="chartwell chartwell-salt">{this.state.value}</div>
      </div>
    );
  }
}

export default Chartwell;
