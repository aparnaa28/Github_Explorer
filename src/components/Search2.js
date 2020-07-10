import React from 'react';

export default class Search2 extends React.Component
{
    inputRef=React.createRef();

    handleClick=()=>{
        const value=this.inputRef.current.value;
        alert(`The value of the input field is ${value}`)
        
    }

    render()
    {
        return(
            <div>
                <input ref={this.inputRef} type="text" name="username" placeholder="Enter your name here"></input>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}