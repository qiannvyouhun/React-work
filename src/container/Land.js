import React, { Component } from 'react'
export default class Land extends Component {
    render() {
        return (
            <div className="panel">
                <div class="header">
                    <ul class="breadcrumb">
                        <li><a href="/">主页</a><span class="divider">/</span></li>
                        <li class="active">登录</li>
                    </ul>
                </div>
                <div class="inner">
                    <form id="signin_form" class="form-horizontal" action="/signin" method="post">
                    <div class="control-group">
                        <label class="control-label" for="name">用户名</label>
                        <div class="controls">
                            <input class="input-xlarge" id="name" name="name" size="30" type="text"/>
                        </div>
                    </div>
                    <div class="control-group">
                        <label class="control-label" for="pass">密码</label>
                        <div class="controls">
                            <input class="input-xlarge" id="pass" name="pass" size="30" type="password"/>
                        </div>
                    </div>
                    <input type="hidden" name="_csrf" value="pE7h5iuG-Mi5_Qy8VAWupSISgHUs6Kyv8-Wk"/>
                    <div class="form-actions">               
                        <a href="/home">
                            <span class="span-info">登录</span>
                        </a>
                        <a id="forgot_password" >忘记密码了?</a>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
