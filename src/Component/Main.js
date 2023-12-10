import { useState } from "react";
import { Component } from "react";
import End from "./Function";
import Enter from "./Class";
function Display() {
  const [count, setCount] = useState(false);
  console.log(count);
  return (
    <div>
      <button className="btn1" onClick={() => setCount(!count)}>
        To see styling in functional component
      </button>
      {count ? <End /> : null}


      
    </div>
  );
}
export default Display;


class Buttontwo extends Component {
  constructor() {
    super();
    this.state = {
      btnValue: true,
    };
    console.log(this.state.btnValue);
  }
  render() {
    return (
      <div>
        <button
          className="btn2"
          onClick={() => this.setState({ btnValue: !this.state.btnValue })}
        >
          To see styling in Class component
        </button>
        {this.state.btnValue ? null : <Enter />}
      </div>
    );
  }
}

export { Buttontwo };
