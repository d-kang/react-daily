import React, { Component } from 'react';

const seed = [
  { id: 5544, value: 0 },
  { id: 2222, value: 0 },
  { id: 3332, value: 0 },
  { id: 5454, value: 0 },
  { id: 1111, value: 0 },
]

const ProductItem = ({ id, value, upvote }) => {

  return (
    <div >
      {id}{'   :   '}<div onClick={() => upvote(id)}>{value}</div>
    </div>
  )
}

const ProductList = ({ products, upvote }) => {
  return (
    products.map(({ id, value }, key) => {
      return (
        <ProductItem
          key={`product-${id}`}
          id={id}
          value={value}
          upvote={upvote}
        />
      )
    })
  )
}

class Upvotes extends Component {
  state = {
    products: [],
  }

  componentDidMount() {
    this.setState({ products: seed })
  }

  handleUpvote = (id) => {
    console.log('hi from upvote')
    const productUpvoted = this.state.products.map((prod, key) => {
      if(prod.id === id) {
        prod.value++;
      }
      return prod;
    });
    this.setState({products: productUpvoted});
  }
  render() {
    return (
      <div>
        <ProductList
          products={this.state.products}
          upvote={this.handleUpvote}
        />
      </div>
    );
  }

}

export default Upvotes;
