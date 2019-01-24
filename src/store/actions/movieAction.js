
import {
    GET_MOVIES, GET_MOVIES_SUCCESS, GET_MOVIES_FAILURE,
    GET_FEATURE_MOVIES, GET_FEATURE_MOVIES_SUCCESS, GET_FEATURE_MOVIES_FAILURE,
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

    static getFeatureMovies(payload) {
        return {
            type: GET_FEATURE_MOVIES,
            payload
        }
    }

    static getFeatureMoviesSuccess(payload) {
        return {
            type: GET_FEATURE_MOVIES_SUCCESS,
            payload
        }
    }

    static getFeatureMoviesFailure(error) {
        return {
            type: GET_FEATURE_MOVIES_FAILURE,
            error
        }
    }
}
