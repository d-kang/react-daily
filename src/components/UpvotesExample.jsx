import React, { Component } from 'react';

const seed = [
  { id: 5544, value: 0 },
  { id: 2222, value: 0 },
  { id: 3332, value: 0 },
  { id: 5454, value: 0 },
  { id: 1111, value: 0 },
]

class ProductItem extends Component {
  handleUpvote = () => {
    this.props.upvote(this.props.id);
  }
  render() {
    const { id, value } = this.props;
    return (
      <div>
        {id}{'   :   '}
        <span
          onClick={this.handleUpvote}
        >
          {value}
        </span>
      </div>
    )
  }
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
      // return prod.id === id ? (prod.value++, prod) : prod;
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
