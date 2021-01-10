import React, { Fragment } from 'react';
import '../components/RobotCard.css';




const RobotCard = ({ name, email, id }) => {
    return (
        <div>
            <div className='main-card'>
            <img alt='robots' src={`https://robohash.org/${id}%200X200`}/>
                <div className='card-name'>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}



export default RobotCard;