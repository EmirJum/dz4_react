import React from "react";
import {ListProducts} from "../../components/listProducts/ListProducts"



class PortfolioPage extends React.Component {

  constructor (props) {
    super(props)

    this.state = {portfolio: []}
  }

  componentDidMount() {
      this.setState({
        portfolio: ["work1", "work 2" , "work 3"]
      })
  }

  componentDidUpdate(params) {
    if(this.state.portfolio !== params.portfolio) {
      console.log(this.state.portfolio)
    }
  }
  
  render () {
    return (
        <div>
          <h1>Portfolio</h1>
          <ListProducts products={this.state.portfolio}/>
        </div>
    )
  }
}

export default PortfolioPage;