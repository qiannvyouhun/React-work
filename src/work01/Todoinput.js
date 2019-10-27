import React, { Component } from 'react'

export default class Todoinput extends Component {
    handleInput = (e)=>{
        // 绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            if(e.target.value==""){
                alert("请填写此字段！")
            }
            else{
                this.props.add(e.target.value);
                e.target.value = '';
            }      
        }
    }
    render() {
        return (
            <header>
                <section>
                    <div className="label">ToDoList</div>
                    <input id="inp" name="a"  onKeyDown={this.handleInput} type="text" placeholder="添加ToDo"/>    
                </section>
            </header>
        )
    }
}
