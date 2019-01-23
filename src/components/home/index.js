import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';
import MovieCard from './../MaterialUI/MovieCard'
import Header from './../MaterialUI/Header'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './index.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [
                {
                    "vote_average": 6.5,
                    "vote_count": 9731,
                    "id": 1930,
                    "video": false,
                    "media_type": "movie",
                    "title": "The Amazing Spider-Man",
                    "popularity": 30.755,
                    "poster_path": "/eA2D86Y6VPWuUzZyatiLBwpTilQ.jpg",
                    "original_language": "en",
                    "original_title": "The Amazing Spider-Man",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "backdrop_path": "/ujAY1ad7yS2TfV0GDNGUZ7DK0mo.jpg",
                    "adult": false,
                    "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
                    "release_date": "2012-06-27"
                },
                {
                    "vote_average": 6.4,
                    "vote_count": 6636,
                    "id": 102382,
                    "video": false,
                    "media_type": "movie",
                    "title": "The Amazing Spider-Man 2",
                    "popularity": 20.435,
                    "poster_path": "/mUjWof8LHDgCZC9mFp0UYKBf1Dm.jpg",
                    "original_language": "en",
                    "original_title": "The Amazing Spider-Man 2",
                    "genre_ids": [
                        28,
                        12,
                        14
                    ],
                    "backdrop_path": "/tmFDgDmrdp5DYezwpL0ymQKIbnV.jpg",
                    "adult": false,
                    "overview": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
                    "release_date": "2014-04-16"
                },
                {
                    "vote_average": 7.1,
                    "vote_count": 10576,
                    "id": 102899,
                    "video": false,
                    "media_type": "movie",
                    "title": "Ant-Man",
                    "popularity": 39.925,
                    "poster_path": "/D6e8RJf2qUstnfkTslTXNTUAlT.jpg",
                    "original_language": "en",
                    "original_title": "Ant-Man",
                    "genre_ids": [
                        878,
                        28,
                        12
                    ],
                    "backdrop_path": "/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg",
                    "adult": false,
                    "overview": "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
                    "release_date": "2015-07-14"
                },
                {
                    "vote_average": 7.6,
                    "vote_count": 17714,
                    "id": 24428,
                    "video": false,
                    "media_type": "movie",
                    "title": "The Avengers",
                    "popularity": 49.806,
                    "poster_path": "/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
                    "original_language": "en",
                    "original_title": "The Avengers",
                    "genre_ids": [
                        878,
                        28,
                        12
                    ],
                    "backdrop_path": "/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
                    "adult": false,
                    "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
                    "release_date": "2012-04-25"
                },
                {
                    "vote_average": 7.3,
                    "vote_count": 11849,
                    "id": 99861,
                    "video": false,
                    "media_type": "movie",
                    "title": "Avengers: Age of Ultron",
                    "popularity": 41.03,
                    "poster_path": "/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
                    "original_language": "en",
                    "original_title": "Avengers: Age of Ultron",
                    "genre_ids": [
                        28,
                        12,
                        878
                    ],
                    "backdrop_path": "/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg",
                    "adult": false,
                    "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
                    "release_date": "2015-04-22"
                },
                {
                    "vote_average": 6.6,
                    "vote_count": 2887,
                    "id": 36647,
                    "video": false,
                    "media_type": "movie",
                    "title": "Blade",
                    "popularity": 17.9,
                    "poster_path": "/r0RQ9ZOEZglLOeYDNJTehVTRoR6.jpg",
                    "original_language": "en",
                    "original_title": "Blade",
                    "genre_ids": [
                        27,
                        28
                    ],
                    "backdrop_path": "/dGnDGHD5vmaRow4BzAiuJaGwIz3.jpg",
                    "adult": false,
                    "overview": "When Blade's mother was bitten by a vampire during pregnancy, she did not know that she gave her son a special gift while dying: All the good vampire attributes in combination with the best human skills. Blade and his mentor Whistler battle an evil vampire rebel (Deacon Frost) who plans to take over the outdated vampire council, capture Blade and resurrect voracious blood god La Magra.",
                    "release_date": "1998-08-21"
                }
            ]
        }
    }

    componentWillMount() {
        this.props.getMovies()
    }
    render() {
        let { movies, getMoviesLoader } = this.props
        return (
            <div>
                <Header />
                <div className="container">
                    <Grid item md={12} >
                        <Button variant="contained" color="secondary" style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Now Playing
                            </Button>
                        <Button variant="contained" color="secondary" style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Popular
                            </Button>
                        <Button variant="contained" color="secondary" style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Highest Rated
                        </Button>
                    </Grid>
                    <div className="row">
                        {
                            !getMoviesLoader && movies && movies.length && movies.map((movie, i) => {
                                return (
                                    <div className="col-md-4 col-sm-6">
                                        <MovieCard movie={movie} key={i} />
                                    </div>
                                )
                            })
                        }
                        {
                            getMoviesLoader ?
                                <div style={{ width: '250px', margin: '0 auto' }}><img src={require('./../../assets/img/loader.gif')} /></div> : ''
                        }
                    </div>
                </div>
                <br />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { movieReducer: {
        movies, getMoviesLoader, getMoviesError
    } } = state;
    return {
        movies, getMoviesLoader, getMoviesError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(movieAction.getMovies())
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(withStyles({})(Home)));
