import React from "react";

class Component3 extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <h2>Component3</h2>
                <h2>{this.props.obj}</h2>
            </div>
        )
    }
}

export default Component3