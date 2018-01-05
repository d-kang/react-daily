import React, { Component } from 'react';

const seed = [
  { id: 5544, value: 0 },
  { id: 2222, value: 0 },
  { id: 3332, value: 0 },
  { id: 5454, value: 0 },
  { id: 1111, value: 0 },
]

class ProductItem extends Component {
  handleUpvote = (e) => {
    const type = e.target.innerText // is upvote or downvote
    const { upDownVote, id } = this.props;
    upDownVote(id, type);
  }
  render() {
    const { id, value } = this.props;
    return (
      <div>
        {id}{'   :   '}{value}
        {' | '}<span onClick={this.handleUpvote}>upvote</span>
        {' | '}<span onClick={this.handleUpvote}>downvote</span>
      </div>
    )
  }
}

const ProductList = ({ products, upDownVote }) => {
  return (
    products.map(({ id, value }, key) => {
      return (
        <ProductItem
          key={`product-${id}`}
          id={id}
          value={value}
          upDownVote={upDownVote}
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

  handleVote = (id, type) => {
    const updateVote = this.state.products.map((prod, key) => {
      if (prod.id === id) {
        type === 'upvote' ? prod.value++ : prod.value--
      }
      return prod;
    });

    this.setState({products: updateVote});
  }
  render() {
    return (
      <div>
        <ProductList
          products={this.state.products}
          upDownVote={this.handleVote}
        />
      </div>
    );
  }

}

export default Upvotes;
