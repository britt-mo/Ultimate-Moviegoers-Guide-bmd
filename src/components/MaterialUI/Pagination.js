import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    }
});

class Pagination extends React.Component {
    render() {
        const { classes, handlePagination, page } = this.props;
        return (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Fab onClick={() => handlePagination('previous')} color="default" size="small" aria-label="Previous" className={classes.fab}>
                    <Icon>navigate_before</Icon>
                </Fab>
                <div style={{ paddingTop: '23px' }}>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 1 ? 'bold' : 'normal' }} onClick={() => handlePagination(1)} size="small" aria-label="Previous" className={classes.fab}>
                        1
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 2 ? 'bold' : 'normal' }} onClick={() => handlePagination(2)} size="small" aria-label="Previous" className={classes.fab}>
                        2
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 3 ? 'bold' : 'normal' }} onClick={() => handlePagination(3)} size="small" aria-label="Previous" className={classes.fab}>
                        3
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 4 ? 'bold' : 'normal' }} onClick={() => handlePagination(4)} size="small" aria-label="Previous" className={classes.fab}>
                        4
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 5 ? 'bold' : 'normal' }} onClick={() => handlePagination(5)} size="small" aria-label="Previous" className={classes.fab}>
                        5
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 6 ? 'bold' : 'normal' }} onClick={() => handlePagination(6)} size="small" aria-label="Previous" className={classes.fab}>
                        6
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 7 ? 'bold' : 'normal' }} onClick={() => handlePagination(7)} size="small" aria-label="Previous" className={classes.fab}>
                        7
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 8 ? 'bold' : 'normal' }} onClick={() => handlePagination(8)} size="small" aria-label="Previous" className={classes.fab}>
                        8
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 9 ? 'bold' : 'normal' }} onClick={() => handlePagination(9)} size="small" aria-label="Previous" className={classes.fab}>
                        9
                    </span>
                    <span style={{ cursor: 'pointer', color: 'white', fontWeight: page === 10 ? 'bold' : 'normal' }} onClick={() => handlePagination(10)} size="small" aria-label="Previous" className={classes.fab}>
                        10
                    </span>
                </div>
                <Fab onClick={() => handlePagination('next')} color="default" size="small" aria-label="Next" className={classes.fab}>
                    <Icon>navigate_next</Icon>
                </Fab>
            </div>
        )
    }
}

export default withStyles(styles)(Pagination);
