import React, { Component } from 'react'

class Input extends Component{
	render(){
		console.log(this.props)
		const { name, cssClass, type, placeholder } = this.props

		if(type === 'text') return (
			<input
				type={type}
				name={name}
				className={cssClass}
			/>
		)

		else return(
				<select
					name={name}
					className={cssClass}>
					<option value='x'>X</option>
					<option value='y'>Y</option>
					<option value='z'>Z</option>
				</select>
			)
	}
}

export default Input