import React,{useContext} from 'react';
import newsContext from '../context/news/newsContext';
import './NewsItem.css';

export default function NewsItem(props) {
  const {deleteNews}=useContext(newsContext);

  const {id,title,url,comments,author} = props;
  return (
    <div className='card'>
      <div className="card-title">{title}</div>
      <div className="card-body">
        <div className="details">
         <span>By {author} | {comments} comments</span>
         <button className='remove-button' onClick={() => deleteNews(id)}>Remove</button> 
        </div>
        <div><a href={url} target="_blank" rel="noopener noreferrer">Read more</a></div>                
      </div>
    
    </div>
   )
}
