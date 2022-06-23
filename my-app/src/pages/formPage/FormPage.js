import React from "react";




class FormPage extends React.Component {

					constructor () {
										super()
										this.state = {name: "", age: 0, test: 0}
					}

					handleInput = (e) => {
										this.setState({
										...this.state,
												 [e.target.name]: e.target.value
										}
										)
					}

					onSubmit = () => {
										const data = {
													 name: this.state.name,
													 age: this.state.age,
													 test: this.state.test 
										}

										console.log(data)
					}

					render() {
							 return (
										<div>
											 <h1>From</h1>
												<input 
												type="text" 
												onChange={this.handleInput}
												name="name"
												/>

												<input 
												type="number" 
												onChange={this.handleInput}
												name="age"
												/>

<input 
												type="number" 
												onChange={this.handleInput}
												name="test"
												/>

												<button onClick={this.onSubmit}>on submit</button>
										</div>
								)
					}
}


const obj = {
					name: "Dastan",
					age: 25
}

console.log(obj["age"])

export default FormPage;