import React from 'react';
import {Button, Card, makeStyles, TextField} from "@material-ui/core";
import NUMBERS from "../../constants";
import {useDispatch} from "react-redux";
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 313,
        margin: '0 auto',
    },
    button: {
        margin: '3px 2px',
        minWidth: '100px',
        height: '50px',
        padding: '0px'
    },
});

const DoorPassword = ({password}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const getNumber = (e) => dispatch({
        type: 'PASSWORD', payload: e.target.innerHTML
    });

    const deleteNumber = () => dispatch({
        type: 'DELETE',
    });

    const checkNumber = () => dispatch({
        type: 'CHECK',
    });
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
                value={2}
            />
            {NUMBERS.map(number => (
                <Button className={classes.button} onClick={getNumber} key={number} variant="contained">{number}</Button>
            ))}

            <Button className={classes.button} onClick={deleteNumber} variant="contained">X</Button>
            <Button className={classes.button} onClick={getNumber} variant="contained">0</Button>
            <Button className={classes.button} onClick={checkNumber} variant="contained">E</Button>
        </Card>
    );
};

export default DoorPassword;