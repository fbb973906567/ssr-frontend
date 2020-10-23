// pages/index.tsx
import { IGetInitialProps,Helmet  } from 'umi';
import React from 'react';
import axios from 'axios'

/** 同时也可以使用 class 组件*/
class Home extends React.Component {
  static getInitialProps = (async (ctx) => {
    console.log(ctx,'...............ctx')
   const res = await axios.get('http://test-gateway.jinyi999.cn/rjhy-mars/api/1/IOS/news/query/content?newsId=5bbf266e9fc41f1a2eb7571140189e15&applicationCode=com.rjhy.mars&token=4457BB7655BDBE7A56CB868383825B28&serverId=600&subjectColumn=column_special.column')
   return Promise.resolve({
      data: {
        title: res.data.data.title,
      }
    })
  }) as IGetInitialProps
  render() {
    const { data } = this.props;
    return (
      <>
      <Helmet encodeSpecialCharacters={false}>
        <html lang="en" data-direction="666" />
        <title>Hello Umi Bar Title</title>
        <div>{data.title}</div>
      </Helmet>
    </>
     
    )
  }
}
export default Home;