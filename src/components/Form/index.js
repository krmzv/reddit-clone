import React, { Component } from 'react'
import Input from './Input'
// import Dropdown from './Dropdown'
import './form.css'

class Form extends Component {
	render(){
		return (
			<div className='form'>
				<Input type='text' name='search' cssClass='input input--search' placeholder='Search posts...' />
				{/* <Dropdown name='subreddit' cssClass='input input--dropdown' placeholder='Choose a subreddit'/>
				<Dropdown name='date' cssClass='input input--dropdown' placeholder='Sort' /> */}
			</div>
		)
	}
}

export default Form