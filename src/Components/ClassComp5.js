import React from "react";

class Component5 extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <h2>Component5</h2>
                <h2>{this.props.obj}</h2>
            </div>
        )
    }
}

export default Component5