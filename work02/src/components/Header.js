//没有什么功能就写成函数组件：
import React from 'react';
import {Link} from 'react-router-dom';  
export default function Header(){

    return (
        <div className='navbar'>
            <div className="navbar-inner">
                <div className="container">
                    <a className="brand" href="/">
                        <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                    </a>
                    <form id="search_form" className="navbar-search" action="/search">
                        <input type="text" id="q" name="q" className="search-query span3" ></input>
                    </form>
                    <ul className="nav pull-right">
                        <li><Link to='/home'>首页</Link></li>
                        <li><Link to='/start'>新手入门</Link></li>
                        <li><Link to='/api'>API</Link></li>
                        <li><Link to='/about'>关于</Link></li>
                        <li><Link to='/login'>注册</Link></li>
                        <li><Link to='/land'>登录</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}