import React from 'react';
import axios from 'axios'

class Home extends React.Component{
    state={
        title:''
    }
    async componentDidMount(){
        const res = await axios.get('http://test-gateway.jinyi999.cn/rjhy-mars/api/1/IOS/news/query/content?newsId=5bbf266e9fc41f1a2eb7571140189e15&applicationCode=com.rjhy.mars&token=4457BB7655BDBE7A56CB868383825B28&serverId=600&subjectColumn=column_special.column')
        this.setState({
            title:res.data.data.title,
        })
    }
    render(){
        return (
        <div>{this.state.title}</div>
        )
    }
}

export default Home