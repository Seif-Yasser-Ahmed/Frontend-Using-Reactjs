import React, { useState } from 'react';
import User from './User';
import {v4 as uuid} from "uuid";
const Users = () => {
    // de array of objects 
    // hooks 
    // useState bta5od el value eli htbda beha

    const [usersArr]=useState(
        [
            {id:uuid(),name:"Movie1",duration:"2:23:00"},
            {id:uuid(),name:"Movie2",duration:"1:30:00"},
            {id:uuid(),name:"Movie3",duration:"3:00:00"},
            {id:uuid(),name:"Movie4",duration:"2:19:00"},
            {id:uuid(),name:"Movie5",duration:"1:00:00"},
            {id:uuid(),name:"Movie6",duration:"50:00"},
        ]
    );
    return (
        <div>{usersArr.map((u)=>{
            //lazem key 34an el map
            return <User key={uuid()} {...u}></User>
        })}</div>
        
    );
}

export default Users;
