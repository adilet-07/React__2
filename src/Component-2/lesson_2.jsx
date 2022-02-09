
import React from "react";

class   Lesson_2 extends React.Component{

constructor(props){
    super(props)
    this.state = {
        test: 'ABC',
        num: 0,
        

    }
    console.log(this.state.test)
}

btnAdd(){
    this.setState({
        // num:this.state.num == 5 ? this.state.num : this.state.num +1 
        num:this.state.num == 5 ? this.state.num : this.state.num +1 
    }
        
    )
    console.log(++this.state.num)
}
btnDell(){
    this.setState({
        num: this.state.num ==- 5 ? this.state.num : this.state.num -1 
    }
        
    )
    console.log(--this.state.num)
}
    render(){
        return(
            <>
            {/* <h1>
                Lesson_2 + {this.state.test}
            </h1> */}

                <button onClick = {() => this.btnAdd()}>
                    ADD
                </button>
                <button onClick = {() => this.btnDell()}>
                    Dell
                </button>
                {/* <h1 className={this.state.num === 5 || this.state.num === -5 ? 'red' : ''}>
                    {this.state.num}
                </h1> */}
                <h1 style={this.state.num === 5 || this.state.num === -5 ? {'color' : 'red'} : {'color' : 'blue'}}>
                    {this.state.num}
                </h1>
                {/* <h2>
                    {this.state.test}
                </h2> */}
                
            </>
        )
    }

}
export default Lesson_2;