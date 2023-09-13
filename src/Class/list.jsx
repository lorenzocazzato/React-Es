import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Cucina", "Chiama", "Studia"],
      inputValue: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleButtonClick = (event) => {
    let { items, inputValue } = this.state;
    const updatedItems = [...items, inputValue];
    this.setState({ items: updatedItems, inputValue: "" });
  };

  handleRemove = (indexToRemove) => {
    const updatedItems = [...this.state.items];
    updatedItems.splice(indexToRemove, 1);
    this.setState({ items: updatedItems });
  };

  handleReset = () => {
    this.setState({ items: [] });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        {this.props.render(this.state.items, this.handleRemove)}
        <button onClick={this.handleButtonClick}>GO</button>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
