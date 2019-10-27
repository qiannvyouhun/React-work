import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'
import './todo.css'
export default class Todolist extends Component {
    constructor(){
        super();
        let todo=JSON.parse(localStorage.getItem('todo'));
        if(todo===null){
           this.state={
            todoList:[]
           }
        }
        else{
            this.state={
                todoList:todo
            }
        }       
    } 
    addItem = (data)=>{
        let todo={"data":data,"done":false}
        this.setState({
            todoList: [...this.state.todoList,todo]
        })
    }
    onChange = (idx)=>{
        let todoList=[...this.state.todoList];
        todoList[idx].done = !todoList[idx].done;
        this.setState({
            todoList: todoList
        })
    }
    delItem = (idx)=>{
        this.setState((state,props)=>{
            return {
                todoList: state.todoList.filter((item,index)=>idx!==index)
            }
        })
    }
    render() {
        localStorage.setItem('todo',JSON.stringify(this.state.todoList));
        let a=0;
        let b=0;
        this.state.todoList.forEach((item)=>{
            if(item.done===false){
                a++;
                console.log(a);
            }
            else{
                b++;
            }
        });
        return (   
            <div className="div">
                <Todoinput add={this.addItem}/>
                <Todoing onChange={this.onChange} del={this.delItem} todoList={this.state.todoList} a={a} b={b}/>
            </div>            
        )
    }
}