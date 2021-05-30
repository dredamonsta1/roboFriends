import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
// import { robots } from '../src/components/RobotsDb';
import Scroll from './components/Scroll';

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
            .then(users => this.setState({ robots: users}));
        console.log("check")
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })    
    }

    render() {
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase);
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {

            console.log(filterRobots);
            
            return (
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

}





export default App;
