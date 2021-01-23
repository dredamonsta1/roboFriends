import React, { Fragment, useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from '../src/components/RobotsDb';




const App = () => {

    const [robot, setRobot] = useState(robots);


    const onSearchChange = (e) => {
        console.log(e.target.value);
    }

    
    
    
    return (
        <Fragment>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <CardList robots={robots}/>
        </Fragment>
    )
}

export default App;