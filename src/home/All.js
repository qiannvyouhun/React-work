import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
export default class All extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch(` https://cnodejs.org/api/v1/topics?tab=all&page=${this.props.match.params.id}`,{method:'GET'})
            .then( res => res.json())
            .then((res) => {
                this.setState({
                    data:res.data
                })
                // console.log(this.state.data);
            })   
    }
    render(){
        let {url}=this.props.match
        return (
            <div className='topic_list'>
                {
                    this.state.data.map((item,index) => 
                        <div className='cell'>
                            <a className="user_avatar pull-left"><img style={{'height':'30px','width':'30px'}} src={item.author.avatar_url}></img></a>
                            <span className='reply_count pull-left' style={{'marginTop': '5px'}}>
                                <span className='count_of_replies'>{item.reply_count}</span>
                                 /
                                <span className='count_of_visits'>{item.visit_count}</span>
                            </span>
                            <a className="user_avatar pull-right">
                                <img style={{'height':'20px','width':'20px'}} src={item.author.avatar_url}></img>
                                &nbsp;&nbsp;&nbsp;
                                <span style={{'fontSize':'10px'}}>1 小时前</span>
                                </a>
                            <div className="topic_title_wrapper">
                                <span className="put_top">置顶</span>
                                &nbsp;&nbsp;&nbsp;
                                <Link to={`details/${item.id}`}><a className="topic_title" style={{'color':'#333'}}>{item.title}</a></Link>
                            </div>

                        </div>
                    )
                }
                <div className="pagination">
                    <ul>   
                        <li><Link to={`/home/all/1`}>1</Link></li>
                        <li><Link to={`/home/all/2`}>2</Link></li>
                        <li><Link to={`/home/all/3`}>3</Link></li>
                        <li><Link to={`/home/all/4`}>4</Link></li>
                        <li><Link to={`/home/all/5`}>5</Link></li>
                        <li><Link to={`/home/all/6`}>6</Link></li>
                        <li><Link to={`/home/all/7`}>7</Link></li>
                        <li><Link to={`/home/all/8`}>8</Link></li>
                        <li><Link to={`/home/all/9`}>9</Link></li>
                        <li><Link to={`/home/all/10`}>10</Link></li>                
                    </ul>
                </div>  
            </div>  
        )
    }
}