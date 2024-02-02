import React, { PureComponent } from "react";
import "./../Styles/PureComponent.css"

class PureCounter extends PureComponent{
    constructor(){
        super();
        this.state = {
            count : 0,
            toggle : true
        }
    }

    toggleNow = () =>{
        this.setState((bool)=>({toggle : !bool.toggle}))
    }

    increment=()=>{
        {this.setState((prev)=>({count : prev.count+1 }))}
    }

    render(){
        let {count,toggle}=this.state
        console.log(toggle)
        console.log("This is Pure Component")

        var changeStyle = null;
        if (toggle){
            changeStyle ={
                backgroundColor : "red"
            }
        } else {
            changeStyle={
                backgroundColor:"green"
            }
        }

        return(
            <>
            <div id="pureC">
                <h1>Pure Counter</h1>
                <h3>count : {count}</h3>
                <button style={changeStyle} onClick={this.toggleNow}>Set toggle</button>
                <button onClick={this.increment} disabled={toggle}>Counter</button>
            </div>
            </>
        )
    }


    
}

export default PureCounter