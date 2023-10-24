import React,{ useContext } from 'react';
import newsContext from '../context/news/newsContext';
import './Pagination.css';

export default function Pagination() {
    const {news,updatePage}=useContext(newsContext);
  return (
   <div className="pagecontainer">
     <div className="buttons">
        <button className="prev" onClick={()=> updatePage(-1)} disabled={news.page === 0}>Prev</button>
        <button className="next" onClick={()=> updatePage(1)} disabled={news.page === news.nbPages -1 }>Next</button>
     </div>
     <span className="pagination">{news.page+1} of {news.nbPages}</span>
   </div>
  )
}
