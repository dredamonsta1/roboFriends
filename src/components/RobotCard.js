import React from 'react';
import '../components/RobotCard.css';




const RobotCard = ({ name, email, id }) => {
    return (
        <div className='main-card'>
            <img alt='robots' src={`https://robohash.org/${id}?100X100`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>     
        </div>
    );
}



export default RobotCard;