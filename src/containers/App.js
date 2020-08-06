import React, {Component} from 'react';
//import {robots} from './robots'


import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import  '../containers/App.css'


class App extends Component {
    constructor(){
    	super()
    	this.state={
    		robots: [],
    		Searchfield:''
    	}
     console.log('constructor')
    }

    componentDidMount(){
    	console.log('componentDidMount')
    	fetch('https://jsonplaceholder.typicode.com/users')
    	 .then(response => response.json())
    	 .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
    	
    	
    	this.setState({Searchfield: event.target.value})
    }

	render(){
        //const {robots , Searchfield} = this.state
		const filterRobot = this.state.robots.filter(robots => {
    		return robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
    	})
    console.log('render')

	  return !this.state.robots.length ?
		  <h1>loading</h1> :
		  (
			<div className='tc'>
			    <h1 className='f1'>RoboFriends</h1>
			    <SearchBox onSearchChange={this.onSearchChange} />
			    <Scroll>
			     <Cardlist robots={filterRobot} />
			    </Scroll> 		    
	        </div>
		  );
	}
}

export default App;