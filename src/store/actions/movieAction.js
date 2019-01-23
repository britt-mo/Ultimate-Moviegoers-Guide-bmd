
import {
    GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE
} from './../constants'

export class movieAction {

    static getMovies() {
        return {
            type: GET_MOVIES
        }
    }

    static getMoviesSuccess(payload) {
        return {
            type: GET_MOVIES_SUCCESS,
            payload
        }
    }

    static getMoviesFailure(error) {
        return {
            type: GET_MOVIES_FAILURE,
            error
        }
    }
}
