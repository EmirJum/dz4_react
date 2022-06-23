import React from "react";


class GoodPage extends React.Component {
  constructor () {
    super()
    this.state = {name:"", serName:"", age:"", address:""}
 }
  handleInput = (e) => {
  this.setState({
    ...this.state,
    [e.target.name]: e.target.value
  })
 }
  handleOnSubmit = () => {
    const data = {
      name: this.state.name,
      serName: this.state.serName,
      age: this.state.age,
      address: this.state.address
    }
    console.log(data);
  }
  render () {
    return (
      <div>
        <h1>Good</h1>
        <input type="text" onChange={this.handleInput} placeholder="name" name="name"/>
        <input type="text" onChange={this.handleInput} placeholder="serName" name="serName"/>
        <input type="number" onChange={this.handleInput} placeholder="age" name="age"/>
        <input type="text" onChange={this.handleInput} placeholder="address" name="address"/>
        <button onClick={this.handleOnSubmit}>on submit</button>
      </div>
    )
  }
}

export default GoodPage;