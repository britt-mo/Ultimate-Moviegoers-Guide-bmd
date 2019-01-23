import { combineEpics } from 'redux-observable';
import movieEpic from './movieEpic'

const rootEpic = combineEpics(
    movieEpic.getMovies
);

export default rootEpic;
