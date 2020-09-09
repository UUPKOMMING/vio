import React, { Component } from 'react'
import PropType from 'prop-types'
export default class Todoitem extends Component {
    render() {
        const{todo,markcomplete,deleteItem}=this.props
       

        return (
            <div >
                <h1 style={{textDecoration : todo.isCompleted ?'line-through':'' }} >
                <input onChange={markcomplete.bind(this,todo.id)} type='checkbox'></input>{'     '} 
                <p>{todo.text}</p> {'  '}
                <button onClick={deleteItem.bind(this,todo.id)} >x</button>
                </h1>
            </div>
        )
    }
}
Todoitem.PropType={
    todo:PropType.array.isRequired
}
