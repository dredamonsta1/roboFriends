import React, { Component} from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots } from '../src/components/RobotsDb';




const state = {
    robots: robots,
    searchfield: ''
}

class App extends Component {
    render() {

        return (
            <div>
            <h1>RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
            </div>
            )
        }

}



// const App = () => {

    // const [robot, setRobot] = useState(robots);


    // const onSearchChange = (e) => {
    //     console.log(e.target.value);
    // }

    
    
    
//     return (
//         <>
//             <h1>RoboFriends</h1>
//             <SearchBox searchChange={onSearchChange} />
//             <CardList robots={robots}/>
//         </>
//     )
// }

export default App;


// ************************blanked out class code***************

// class App extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                         <p>
//                             Edit <code>src/App.js</code> and save to reload.
//                         </p>
//                         <a
//                             className="App-link"
//                             href="https://react.org"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Learn React
//                         </a>
//                 </header>            
//             </div>
//         );
//     }
// }


// <p>{this.props.greeting}</p>