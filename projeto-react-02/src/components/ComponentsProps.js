import React from 'react'
export default class Lista extends React.Component {
	render() {
		return (
			<ul>
				<li>{this.props.info}</li>
			</ul> 
		)
	}
}
