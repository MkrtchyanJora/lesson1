import React from "react";


class Component4 extends React.Component{
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <h2>Componenet 4</h2>
                <h2>{this.props.obj}</h2>
            </div>
        )
    }
}

export default Component4