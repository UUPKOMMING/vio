import React, { Component } from 'react'
import Todoitem from './Todoitem'
import PropType from 'prop-types'

export default class Todos extends Component {
    render() {
        const{todos,markcomplete,deleteItem}=this.props
        return (
             <div >
              {todos.map(todo=>
                 <Todoitem markcomplete={markcomplete}
                deleteItem={deleteItem} 
                key={todo.id}
                 todo={todo}/> 
              )}
        </div>
        )
    }
}
Todos.PropType={
    todo:PropType.array.isRequired
}
