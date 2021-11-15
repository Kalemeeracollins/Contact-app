import React from 'react';
import Image from './user.jfif'

const contactCard = (props) => {
    const {id, name, email, Contact} = props.contact;
    return(
        <div className="ContactList">
            <div className="contactList2">
        <div className="contactList3">
        <img src={Image} alt="User" width="30px" height="30px"/>
        <h3>{name}</h3>
        <h4>{email}</h4>
        <span>{Contact}</span>
        </div>
        <p onClick={() => props.clickHandler(id)}>X</p>
        </div>
        
    </div>
    );
}

export default contactCard;