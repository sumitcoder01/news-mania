const reducer = (state, action) => {
    switch (action.type) {
      case 'GET_NEWS':
        return {
            ...state,
            hits:action.payload.hits,
            nbPages:action.payload.nbPages,
            isLoading:false
         };
        case 'LOADING':
            return {
                ...state,
                isLoading:true,
            };

        case 'SEARCH_QUERY':
            return{
                ...state,
                query:action.payload
            };

        case 'UPDATE_PAGE':
            return{
                ...state,
                page:state.page+action.payload
            };
            
        case 'DELETE_NEWS':
            return{
                ...state,
                hits:state.hits.filter((news) => news.objectID !== action.payload)
            }    
      default:
        return state;
    }
}

export default reducer;
