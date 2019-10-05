import React from 'react'
export default class Nome extends React.Component {
	
	initialState = {value : ''}

	constructor(props){
		super(props)
		this.state = this.initialState
	}

	componentWillReceiveProps(props){
		this.setState({value : props.value})
	}
	
	
	render() {
		return (
			<p>{this.state.value}</p> 
		)
	}
}


