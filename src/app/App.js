import React from 'react';
import { newsCategory } from '../components/news/news-categories';
import Header from '../components/header';
import NewsList from '../components/news/news-list';
const fakeNews=[
  {
    title: "title",
    content:"Content",
    url:"https:linktoimage.com",
    urlToImage:"https:linktoimage.com",
    publishAt:"published date and time",
    source:{
      name:"cnn"
    }
  },
  {
    title: "title2",
    content:"Content",
    url:"https:linktoimage.com",
    urlToImage:"https:linktoimage.com",
    publishAt:"published date and time",
    source:{
      name:"bbc"
    }
  }
]
class App extends React.Component {
  render() {
    console.log(process.env.REACT_APP_EMAIL)
    return (
      <div className='Container'>
        <div className='row'>
          <div className='col-sm-6 offset-md-3'>
            <h1>ajsdflja</h1>
            <Header category={newsCategory.technology}/>
            <NewsList news={fakeNews}/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
