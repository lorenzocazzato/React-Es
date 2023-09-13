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
  handleReset = () => {
    this.setState({ items: [] });
  };
  handleRemove = (indexToRemove) => {
    const newItems = [...this.state.items];
    newItems.splice(indexToRemove, 1);
    this.setState({ items: newItems });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
        <button onClick={this.handleButtonClick}>Add</button>
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
