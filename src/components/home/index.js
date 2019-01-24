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
            feature: 'all'
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
                        <Button onClick={() => { this.props.getMovies(); this.setState({ feature: 'all' }) }} variant="contained" color={this.state.feature !== 'all' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            All
                        </Button>
                        <Button onClick={() => { this.props.getFeatureMovies({ feature: 'now_playing' }); this.setState({ feature: 'now_playing' }) }} variant="contained" color={this.state.feature !== 'now_playing' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Now Playing
                        </Button>
                        <Button onClick={() => { this.props.getFeatureMovies({ feature: 'popular' }); this.setState({ feature: 'popular' }) }} variant="contained" color={this.state.feature !== 'popular' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Popular
                        </Button>
                        <Button onClick={() => { this.props.getFeatureMovies({ feature: 'top_rated' }); this.setState({ feature: 'top_rated' }) }} variant="contained" color={this.state.feature !== 'top_rated' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
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
                                <div style={{ width: '250px', margin: '0 auto' }}><img src={require('./../../assets/img/loader.gif')} alt="loading" /></div> : ''
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
        getMovies: () => dispatch(movieAction.getMovies()),
        getFeatureMovies: (payload) => dispatch(movieAction.getFeatureMovies(payload)), // payload = {feature}
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(withStyles({})(Home)));
