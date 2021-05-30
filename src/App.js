import React, { Component } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
// import { robots } from '../src/components/RobotsDb';

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
            .then(users => {
            this.setState({ robots: users});

        })
        console.log("check")
    }

    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })    
    }

    render() {
        const filterRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase);
        })
        console.log(filterRobots);

        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobots}/>
            </div>
        );
    }

}





export default App;
