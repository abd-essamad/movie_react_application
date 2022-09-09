const MovieShowReducer = (state, action)=>{
    switch(action.type) {
        case  'GET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case 'GET_MOVIE':
            return {
                ...state,
                movie: action.payload,
                loading: false
            }
        case 'GET_TRAILER':
            return {
                ...state,
                trailer:action.payload,
                loading: false
            }
        case 'GET_BEST' :
            return {
                ...state,
                best: action.payload,
                loading:false
            }
        case 'SEARCH_MOVIES':
            return {
                ...state,
                movies:action.payload,
                loading: false
            }
        default:
            return state
    }
  
}
export default MovieShowReducer