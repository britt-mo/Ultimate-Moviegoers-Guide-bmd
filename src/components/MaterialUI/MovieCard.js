import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        margin: '0 auto',
        marginTop: '15px',
        height: '280px'
    },
    media: {
        objectFit: 'cover',
    },
};

class MovieCard extends React.Component {
    render() {
        const { classes, movie } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Movie Poster"
                        className={classes.media}
                        height="140"
                        image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        title="Movie Poster"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {movie.title}
                        </Typography>
                        <Typography component="p">
                            {movie.overview.split('').splice(0,300).join('')}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Watch
                    </Button>
                </CardActions>
            </Card>
        )
    }
}


MovieCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MovieCard);
