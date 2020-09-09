import React, { Component } from 'react'
export default class AddTodo extends Component {
    
    state={
        text:''
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.addTodo(this.state.text)
        this.setState({text:''})
    }
    onChange=(e)=>{
        this.setState({text:e.target.value})
    }
    render() {
        
        return (
        <form onSubmit={this.handleSubmit}>
            <input  
            placeholder='ADD TODO...'
            style={{flex:'2'}}
            type='text'
            
            onChange={this.onChange}
            />
           
            <input 
            type='submit'
            value='submit'
            />
        </form>
        )
    }
}
