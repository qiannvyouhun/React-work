import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
    var {todoList} = this.props;
    return (
        <section>
            <h2>正在进行：<span>{this.props.a}</span></h2>
            <ol  className="demo-box">
            {
                (todoList || []).map((item,idx)=>{
                    if(item.done===false){
                        return(
                            <li key={idx}>
                                <input type="checkbox" onClick={()=>{this.props.onChange(idx)}}></input>
                                <p>{item.data}</p>  
                                <a onClick={()=>{this.props.del(idx)}}>-</a>                      
                            </li>
                        ) 
                    }
                })  
            }
            </ol>

            <h2>已经完成：<span>{this.props.b}</span></h2>
            <ul>
            {
                (todoList || []).map((item,idx)=>{
                    if(item.done===true){
                        return(
                            <li key={idx}>
                               <input type="checkbox" checked="checked" onClick={()=>{this.props.onChange(idx)}}></input>
                                <p>{item.data}</p>   
                                <a onClick={()=>{this.props.del(idx)}}>-</a>
                            </li>
                        )
                    }
                })

            }
            </ul>
        </section>        
        )
    }
}
