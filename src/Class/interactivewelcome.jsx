import { isFileServingAllowed } from "vite";

export default class InteractiveWelcome extends React.Component {
  state = {
    nome: "",
  };

  handleInput = (event) => {
    this.setState({ nome: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value={nome} onChange={this.handleInput} />
        <Welcome2 name2={nome} />
      </div>
    );
  }
}
