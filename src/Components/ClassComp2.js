import React from "react";

class Component2 extends React.Component{
    constructor(props){
        super()
    }

render(){
    return(
        <div>
            <h2>Component2</h2>
            <h2>{this.props.obj}</h2>
        </div>
    )
}
}

export default Component2