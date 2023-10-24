import React,{ useContext } from 'react';
import './App.css';
import Spinner from './components/Spinner';
import News from './components/News';
import Search from './components/Search';
import newsContext from './context/news/newsContext';

export default function App() {
  const {news} = useContext(newsContext);
  return (
    <div className="container">
      <Search />
    {news.isLoading  ? <Spinner/>  : <News />}
  </div>
  )
}
