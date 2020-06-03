import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { MyComponent, Button } from "./styled";
import ReactForm from "./ReactForm";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      div: "",
      button: "",
    };
  }

  handleInputChange = (event) => {
    const val = event.target.value;
    console.log(val);
    this.setState((prevState) => {
      return {
        ...prevState,
        div: val,
      };
    });
  };

  render() {
    return (
      <>
        <div className="container is-fullheight row">
          <div className="column">
            <ReactForm />
          </div>
          <div className="column mt-5 pt-5">
            <div>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                </InputGroup.Prepend>
                <FormControl
                  aria-label="Text input with checkbox"
                  placeholder="bg-color for div"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </div>
            <button type="button">Primary</button>
            <MyComponent myColor={this.state.div}>Hello World</MyComponent>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
