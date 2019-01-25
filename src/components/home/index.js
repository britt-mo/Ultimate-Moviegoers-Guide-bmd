import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieAction } from './../../store/actions'
import { withRouter } from 'react-router-dom';
import MovieCard from './../MaterialUI/MovieCard'
import Header from './../MaterialUI/Header'
import Pagination from './../MaterialUI/Pagination'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './index.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feature: 'all',
            page: 1
        }
    }

    componentWillMount() {
        this.props.getMovies({ page: 1 })
    }

    handlePagination = (action) => {
        let { page } = this.state

        if (action === 'previous' && page !== 1) {
            this.setState({ page: page - 1 })
        }
        else if (action === 'next' && page !== 10) {
            this.setState({ page: page + 1 })
        }
        else if (typeof action === 'number') {
            this.setState({ page: action })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            if (this.state.feature === 'all') {
                this.props.getMovies({ page: this.state.page })
            }
            else {
                this.props.getFeatureMovies({ feature: this.state.feature, page: this.state.page })
            }
        }
    }

    render() {
        let { movies, getMoviesLoader } = this.props
        return (
            <div>
                <Header
                    searchMovies={this.props.searchMovies}
                    getMovies={this.props.getMovies}
                />
                <div className="container">
                    <Grid item md={12} >
                        <Button onClick={() => { this.props.getMovies({ page: 1 }); this.setState({ feature: 'all', page: 1 }) }} variant="contained" color={this.state.feature !== 'all' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            All
                        </Button>
                        <Button onClick={() => { this.props.getFeatureMovies({ feature: 'now_playing', page: 1 }); this.setState({ feature: 'now_playing', page: 1 }) }} variant="contained" color={this.state.feature !== 'now_playing' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Now Playing
                        </Button>
                        <Button onClick={() => { this.props.getFeatureMovies({ feature: 'popular', page: 1 }); this.setState({ feature: 'popular', page: 1 }) }} variant="contained" color={this.state.feature !== 'popular' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Popular
                        </Button>
                        <Button onClick={() => { this.props.getFeatureMovies({ feature: 'top_rated', page: 1 }); this.setState({ feature: 'top_rated', page: 1 }) }} variant="contained" color={this.state.feature !== 'top_rated' ? "primary" : "secondary"} style={{ margin: '10px 10px 0 0', minWidth: '100px' }}>
                            Highest Rated
                        </Button>
                    </Grid>
                    <Pagination handlePagination={this.handlePagination} page={this.state.page} />

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
                        {
                            !getMoviesLoader && movies && !movies.length ?
                                <div style={{ width: '250px', margin: '0 auto' }}><p>No Movie Found</p></div> : ''
                        }
                    </div>
                    <Pagination handlePagination={this.handlePagination} page={this.state.page} />
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
        getMovies: (payload) => dispatch(movieAction.getMovies(payload)), //payload = {page}
        getFeatureMovies: (payload) => dispatch(movieAction.getFeatureMovies(payload)), // payload = {feature}
        searchMovies: (payload) => dispatch(movieAction.searchMovies(payload)), // payload = {query}
    };
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(withRouter(withStyles({})(Home)));
