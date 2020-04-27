
import {
    fetch_comments_list_START,
    fetch_comments_list_FAILED,
    fetch_comments_list_SUCESS,
} from '../actions/types'

const INIT_STATE = {
    commentsList: [],
    loading: false,
    errorTtile: '',
    errorMessage: ''
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case fetch_comments_list_START:
            return { ...state, loading: true }
        case fetch_comments_list_FAILED:
            return { ...state, loading: false, errorTtile: action.errorTitle, errorMessage: action.errorMessage }
        case fetch_comments_list_SUCESS:
            return { ...state, loading: false, refreshing: false, commentsList: action.commentsList }

        default:
            return state;
    }
}