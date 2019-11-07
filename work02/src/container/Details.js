import React, { Component } from 'react'

export default class Details extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        var id=this.props.match.params.id
        fetch(' https://cnodejs.org/api/v1/topic/'+id)
            .then( res => res.json())
            .then((res) => {
                this.setState({
                    data:res.data
                })
                // console.log(this.state.data);
            })  
    }
    render() {
        // console.log(this.state.data)
        return (
            <div id='content' style={{'width':'900px'}}>
                <div className='panel'>              
                    <div className='inner topic'>
                        <div className='topic_content'>
                            <div  dangerouslySetInnerHTML={{__html:this.state.data.content}} className='markdown-text'></div>
                        </div>
                    </div>
                </div>                    
            </div>
            )
        }
    
    }

