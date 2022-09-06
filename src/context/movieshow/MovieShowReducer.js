const MovieShowReducer = (state, action)=>{
    switch(action.type) {
        case  'GET_MOVIES':
            return {
                ...state,
                movies: action.payload,
                loading: false
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