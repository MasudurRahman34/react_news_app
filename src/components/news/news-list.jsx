import React from 'react'
import NewsItem from './news-item'

function NewsList({news}) {
  return (
    <div>
        {news && news.length===0 && <h4>There is No News</h4> }
        {news && news.map((item) => {
            return <NewsItem key={item.title} item={item}/>
        })}
    </div>
  )
}

export default NewsList