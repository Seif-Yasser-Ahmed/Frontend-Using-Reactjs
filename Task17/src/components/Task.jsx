import { Component } from "react";
class Task extends Component{
    constructor(){
        super();
        this.state={name:"seif"}
    }
    // state={name:"seif"} 
    render(){
        return (
            <div>
                <h1>Task of {this.state.name}</h1>
            </div>
        )
    }
}

export default Task;