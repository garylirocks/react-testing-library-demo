import React from "react";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false
    };
  }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Hello">
        <h1>
          {!this.state.clicked ? "Hello" : "Hola"} {name}
        </h1>
      </div>
    );
  }
}

export default Hello;
