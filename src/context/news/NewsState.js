import NewsContext from "./newsContext";
import { useReducer } from "react";
import reducer from "../../reducer/reducer";
import { useEffect} from "react";

  
  //NewsState
const NewsState =(props)=>{
    const newsInitial={
        nbPages:0,
        page:0,
        query:"HTML",
        hits:[],
        isLoading:false
    }
    const [news, dispatch] = useReducer(reducer, newsInitial);

    //Get_News
    const getNews = async()=>{
        dispatch({type:"LOADING"});
        const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${news.query}&page=${news.page}`);
        const data = await response.json();
        dispatch({type:'GET_NEWS',payload:data}); 
    }
    
    //Delete News 
    const deleteNews = (id)=>{
        dispatch({type:'DELETE_NEWS',payload:id}); 
    }

    //Search a query
    const searchQuery =(query)=>{
        dispatch({type:'SEARCH_QUERY',payload:query});
    }

    //update Page
    const updatePage = (value)=>{
        dispatch({type:'UPDATE_PAGE',payload:value});
    }

    //Runs on first render and when there is change in query and page
    useEffect(() => {
         getNews();
         // eslint-disable-next-line 
      }, [news.query,news.page]);

      return (
        <NewsContext.Provider value={{ news, deleteNews, searchQuery, updatePage}}>
          {props.children}
        </NewsContext.Provider>
      )
     
  };
export default NewsState;