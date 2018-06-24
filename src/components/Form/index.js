import React, { Component } from 'react'
import Input from './Input'
import './form.css'

class Form extends Component {
	render(){
		return (
			<div className='form'>
				<Input type='text' name='search' cssClass='input input--search' placeholder='Search posts...' />
				<Input type='select' name='subreddit' cssClass='input input--dropdown' placeholder='Choose a subreddit'/>
				<Input type='select' name='date' cssClass='input input--dropdown' placeholder='Sort' />
			</div>
		)
	}
}

export default Form