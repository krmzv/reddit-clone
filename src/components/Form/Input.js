import React, { Component } from 'react'

class Input extends Component{
	render(){

	const { name, cssClass, type, placeholder } = this.props

	return (
		<input
			type={type}
			name={name}
			className={cssClass}
		/>
	)
	}
}

export default Input