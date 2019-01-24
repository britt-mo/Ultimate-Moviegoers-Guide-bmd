import { combineEpics } from 'redux-observable';
import movieEpic from './movieEpic'

const rootEpic = combineEpics(
    movieEpic.getMovies,
    movieEpic.getFeatureMovies,
);

export default rootEpic;
