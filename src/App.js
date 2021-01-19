import React, { Fragment, useState } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from '../src/components/RobotsDb';




const App = () => {

    const [robot, setRobot] = useState('');

    
    
    
    return (
        <Fragment>
        <h1>RoboFriends</h1>
        <SearchBox onClick={() => setRobot(robot)}/>
        <CardList robots={robots}/>
        </Fragment>
    )
}

export default App;