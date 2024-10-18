import React from "react";


class Counter1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        
    }
    increment(){
        // this.setState({
        // count:this.state.count+1
        // },()=>{console.log(`call back value ${this.state.count}`);
        // })
        this.setState((preState)=>({count:preState.count+1}))
        
console.log(this.state.count);

    };
    incrementFiveTime(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (<div>
            <h2>Counter - {this.state.count}</h2>
            <button onClick={()=>this.incrementFiveTime()}>Icrement</button>
        </div>)
    }
}

export default Counter1;