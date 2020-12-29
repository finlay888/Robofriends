import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props){
		super()
		this.state = {
			hasError: false
		}
	}

	compnentDidCatch(error, info) {
		this.setState({ hasError: true})
	}

	render() {
		if (this.state.hasError){
			return <h1> Ooooops. Thats not so good </h1>
		}else{
			return this.props.children
		}
	}
}

export default ErrorBoundary;