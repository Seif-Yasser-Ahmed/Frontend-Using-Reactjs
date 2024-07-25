import React, { useState } from 'react';
import Movie from './Movie';
import {v4 as uuid} from "uuid";
const Movies = () => {
    // de array of objects 
    // hooks 
    // useState bta5od el value eli htbda beha

    const [MoviesArr]=useState(
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
        <div>{MoviesArr.map((u)=>{
            //lazem key 34an el map
            return <Movie key={uuid()} {...u}></Movie>
        })}</div>
        
    );
}

export default Movies;
