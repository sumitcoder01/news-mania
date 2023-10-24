import React,{ useContext } from 'react';
import Pagination from './Pagination';
import NewsItem from './NewsItem';
import newsContext from '../context/news/newsContext';

export default function News() {
  const {news} = useContext(newsContext);
  return (
    <>
     <h2 className='heading'>Latest news about {news.query} </h2>
     <Pagination/>
     <div>
      {
        news.hits.length!==0 && news.hits.map((newsItem) =>
          <NewsItem key={newsItem.objectID} id={newsItem.objectID} author={newsItem.author} title={newsItem.title} url ={newsItem.url} comments ={newsItem.num_comments}/>
        )
      }
     </div>
     </>
  )
}

