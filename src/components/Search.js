import React,{ useContext } from 'react';
import newsContext from '../context/news/newsContext';
import './Search.css';

export default function Search() {
  const {searchQuery} = useContext(newsContext);
  return (
    <form method="post" onSubmit={(e)=> e.preventDefault()} className="search-form">
  <div className="search-container">
    <input type="text" className="search-input" onChange={(e) => searchQuery(e.target.value)} placeholder="Search for news" />
  </div>
</form>
  )
}
