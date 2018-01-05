import React, { Component } from 'react';
import Modal from './Modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class App extends Component {
  state = {
    mounted: false,
  }
	componentDidMount() {
		this.setState({ mounted: true });
	}
	handleSubmit = (e) => {
		this.setState({ mounted: false });
		e.preventDefault();
	}

  render() {
    const { mounted } = this.state;
    console.log('mounted', mounted);

		return(
			<div className='App'>
				<ReactCSSTransitionGroup
          transitionName='example'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
					{ mounted && <Modal onSubmit={this.handleSubmit} /> }
				</ReactCSSTransitionGroup>
			</div>
		);
  }
}

export default App;
