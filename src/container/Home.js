import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import All from '../home/All'
import Good from '../home/Good'
import Share from '../home/Share'
import Ask from '../home/Ask'
import Job from '../home/Job'
import Dev from '../home/Dev'

export default class Home extends Component {
    render() {
        let {url}=this.props.match
        //this.props.match指的是：获取当前url
        // console.log(this.props.match);
        return (
               <div className="panel">
                <div className="header">
                        <Link to={`${url}/all`} className="topic-tab">全部</Link>
                        <Link to={`${url}/good/1`} className="topic-tab">精华</Link>
                        <Link to={`${url}/share/1`} className="topic-tab">分享</Link>
                        <Link to={`${url}/ask/1`} className="topic-tab">问答</Link>
                        <Link to={`${url}/job/1`} className="topic-tab">招聘</Link>
                        <Link to={`${url}/dev/1`} className="topic-tab">客户端测试</Link>
                    </div>
                    <div  className="inner no-padding">
                        <Route exact path={url} component={All}></Route>
                        <Route exact path={url+'/all'} component={All}></Route>
                        <Route path={url+'/all/:id'} component={All}></Route>

                        <Route exact path={url+'/good'} component={Good}></Route>
                        <Route path={`${url}/good/:id`} component={Good}></Route>

                        <Route exact path={url+'/share'} component={Share}></Route>
                        <Route path={`${url}/share/:id`} component={Share}></Route>
                        
                        <Route exact path={url+'/ask'} component={Ask}></Route>
                        <Route path={`${url}/ask/:id`} component={Ask}></Route>

                        <Route exact path={url+'/job'} component={Job}></Route>
                        <Route path={`${url}/job/:id`} component={Job}></Route>

                        <Route exact path={url+'/dev'} component={Dev}></Route>
                        <Route path={`${url}/dev/:id`} component={Dev}></Route>
                    </div>
               </div>
        )
    }
}
