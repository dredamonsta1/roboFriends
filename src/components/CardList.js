import React from 'react';
import RobotCard from './RobotCard';


const CardList = ({ robots }) => {
    return(
        <>
            {robots.map((user, i) => {
                return (
                    <RobotCard 
                        key={i}
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
            }   )}  
        </>
    );
}



export default CardList;