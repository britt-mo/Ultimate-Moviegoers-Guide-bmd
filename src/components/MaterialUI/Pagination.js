import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
});

class Pagination extends React.Component {
    render() {
        const { classes, handlePagination, page } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
                <Fab onClick={() => handlePagination('previous')} color="default" size="small" aria-label="Previous" className={classes.fab}>
                    <Icon>navigate_before</Icon>
                </Fab>
                <Fab onClick={() => handlePagination(1)} color={page === 1 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    1
                </Fab>
                <Fab onClick={() => handlePagination(2)} color={page === 2 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    2
                </Fab>
                <Fab onClick={() => handlePagination(3)} color={page === 3 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    3
                </Fab>
                <Fab onClick={() => handlePagination(4)} color={page === 4 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    4
                </Fab>
                <Fab onClick={() => handlePagination(5)} color={page === 5 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    5
                </Fab>
                <Fab onClick={() => handlePagination(6)} color={page === 6 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    6
                </Fab>
                <Fab onClick={() => handlePagination(7)} color={page === 7 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    7
                </Fab>
                <Fab onClick={() => handlePagination(8)} color={page === 8 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    8
                </Fab>
                <Fab onClick={() => handlePagination(9)} color={page === 9 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    9
                </Fab>
                <Fab onClick={() => handlePagination(10)} color={page === 10 ? "primary" : "default"} size="small" aria-label="Previous" className={classes.fab}>
                    10
                </Fab>
                <Fab onClick={() => handlePagination('next')} color="default" size="small" aria-label="Next" className={classes.fab}>
                    <Icon>navigate_next</Icon>
                </Fab>
            </div>
        )
    }
}


Pagination.propTypes = {
    // classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pagination);
