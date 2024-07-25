const Movie=(props)=>{
    console.log(props);
    let {id,name,duration}=props;
    return <div style={{backgroundColor:"aqua", textAlign:"center"}}>
        <div>Movie's name: {name}</div>
        <div>duration: {duration}</div>
        <div>id: {id}</div>
        <hr />
    </div>
    
}

export default Movie;