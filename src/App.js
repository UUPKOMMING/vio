import React, { Component } from 'react'
import './App.scss';
import Todos from './Componenets/Todos'
import Headers from './Componenets/Header'
import AddTodo from './Componenets/AddTodo'
export default class App extends Component {
  state={
    todos:[
      {
        id:1,
        text:'finish with Appointment',
        isCompleted:false
      },
      {
        id:2,
        text:'finish with homework ',
        isCompleted:false
      },
      {
        id:3,
        text:'finish with codding',
        isCompleted:false
      }
    ]
  }
  //TOGGLE COMPLETE
  markcomplete=(id)=>{
    this.setState({todos:this.state.todos.map(todo=>{
      if(todo.id===id){
        todo.isCompleted=!todo.isCompleted
      }
      return todo
    })})
  }
  deleteItem=(id)=>{
    this.setState({todos: [...this.state.todos.filter(todo=>
      todo.id !==id
      )]})
  }
 addTodo=(text)=>{
   const newItem={
     id:4,
     text,
     isCompleted:false
   }
  this.setState({todos:[...this.state.todos,newItem]})
 }

  render() {
    const{todos}=this.state
    return (
      <div>
        <Headers/>
        <AddTodo addTodo={this.addTodo} />
        <Todos markcomplete={this.markcomplete} deleteItem={this.deleteItem} todos={todos}/>
      </div>
    )
  }
}
