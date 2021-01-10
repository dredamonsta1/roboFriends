import React, { Fragment } from 'react';
import RobotCard from './RobotCard';




const CardList = ({ robots }) => {
    return(
        <Fragment>
            {robots.map((user, i) => {
                return (
                    <RobotCard 
                        key={i}
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })}  
        </Fragment>
    );
}



export default CardList;