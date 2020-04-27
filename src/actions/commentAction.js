import {
    fetch_comments_list_START,
    fetch_comments_list_FAILED,
    fetch_comments_list_SUCESS
} from '../actions/types';
import { getCommentslist } from '../services/service';

export function fetchCommentslist() {
    return async (dispatch) => {
        dispatch({
            type: fetch_comments_list_START
        })
        const response = await getCommentslist(),
            responseJson = await response.json()
        if (response) {
            /* Handling response */
            switch (response.status) {
                case 200:
                    /* Handling Success */
                    dispatch(handleCommentsListFetchRequestSuccess(responseJson))
                    break;
                case 400:
                    /* Handling Bad Request */
                    dispatch(handleCommentsListFetchRequestError(responseJson))
                    break;
                case 401:
                    /* Handling unauthorized */
                    dispatch(handleCommentsListFetchRequestError(responseJson))
                    break;
                case 403:
                    /* Handling forbidden request */
                    dispatch(handleCommentsListFetchRequestError(responseJson))
                    break;
                case 500:
                    /* Handling internal error */
                    dispatch(handleCommentsListFetchRequestError(responseJson))
                    break;
                default:
                    break;
            }
        } else {
            dispatch(handleCommentsListFetchRequestError())
        }
    }
}

function handleCommentsListFetchRequestSuccess(responseJson) {
    return {
        type: fetch_comments_list_SUCESS,
        commentsList: responseJson
    }
}

function handleCommentsListFetchRequestError(responseJson) {
    return {
        type: fetch_comments_list_FAILED,
        errorTitle: 'Something went wrong',
        errorMessage: 'Something went wrong, Please try again!'
    }
}