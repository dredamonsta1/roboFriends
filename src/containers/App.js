import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import { robots } from '../src/components/RobotsDb';
import Scroll from '../components/Scroll';
import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({ robots: users})});
        console.log("check")
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })    
    }

    render() {
        const { robots, searchfield } = this.state;
        const filterRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
            return !robots.length ? <h1>Loading...</h1> :  
        (
            <>
                <h1 className="robot-header">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                <CardList robots={filterRobots}/>
                </Scroll>
            </>
        );       
    }
}





export default App;
