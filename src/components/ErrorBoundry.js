import React, {Component} from 'react';

//出现错误时，可以让app继续使用而只弹出一个被包裹的错误框
class ErrorBoundry extends Component {
	constructor(props){
		super(props);
		this.state ={
			hasError: false
		}
	}

	componentDidCatch(error,info) {
		this.setState({ hasError: true })

	}
	render() {
		if (this.state.hasError) {
			return <h1>Ooooops. that is not good</h1>
		}else {
			return this.props.children
		}
	}

}

export default ErrorBoundry;