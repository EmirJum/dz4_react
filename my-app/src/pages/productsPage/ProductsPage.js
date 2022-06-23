import React from "react";
import {ListProducts} from "../../components/listProducts/ListProducts"


class ProductsPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {products: []}
  }

  getProducts = () => {
    this.setState({
      products: ["Apple", "Orange", "Banana"]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.getProducts}>get products</button>
        
        <ListProducts products={this.state.products}/>
        
      </div>
    )
  }
}

export default ProductsPage;