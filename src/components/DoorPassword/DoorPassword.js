import React from 'react';
import {Button, Card, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 313,
        margin: '0 auto',
    },
    button: {
        margin: '3px 2px',
        minWidth: '100px',
        height: '50px'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const DoorPassword = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <TextField
                id="filled-textarea"
                label="Password"
                placeholder="Enter Password"
                multiline
                variant="filled"
                fullWidth
                minRows={3}
            />

            <Button className={classes.button} variant="contained">1</Button>
            <Button className={classes.button} variant="contained">2</Button>
            <Button className={classes.button} variant="contained">3</Button>
            <Button className={classes.button} variant="contained">4</Button>
            <Button className={classes.button} variant="contained">5</Button>
            <Button className={classes.button} variant="contained">6</Button>
            <Button className={classes.button} variant="contained">7</Button>
            <Button className={classes.button} variant="contained">8</Button>
            <Button className={classes.button} variant="contained">9</Button>
            <Button className={classes.button} variant="contained">X</Button>
            <Button className={classes.button} variant="contained">0</Button>
            <Button className={classes.button} variant="contained">E</Button>
        </Card>
    );
};

export default DoorPassword;