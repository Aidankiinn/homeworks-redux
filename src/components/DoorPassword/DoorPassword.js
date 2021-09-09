import React from 'react';
import {Card, makeStyles, TextField, Typography} from "@material-ui/core";
import NUMBERS from "../../constants";
import {useDispatch, useSelector} from "react-redux";
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

const DoorPassword = () => {
    const classes = useStyles();

    const dispatch = useDispatch();
    const password = useSelector(state => state.password)
    const color = useSelector(state => state.color)

    const getNumber = (e) => dispatch({
        type: 'PASSWORD', payload: e.target.innerHTML
    });

    const deleteNumber = () => dispatch({
        type: 'DELETE',
    });

    const checkNumber = () => dispatch({
        type: 'CHECK',
    });

    const passwordStar = () => {
        let stars = '';
        for (let i = 0; i < password.length; i++) {
            if (password !== isNaN && (password.length <= 4)) {
                stars += '*';
            } else {
                stars = password;
            }
        }
        return stars;
    }
    return (
        <Card className={classes.root}>
            <Typography variant='h6'>Enter PIN</Typography>
            <TextField
                id="filled-textarea"
                label="Password"
                multiline
                variant="filled"
                fullWidth
                minRows={3}
                value={passwordStar()}
                style={{backgroundColor: color}}
            />
            {NUMBERS.map(number => (
                <button className={classes.button} onClick={getNumber} key={number}>{number}</button>
            ))}

            <button className={classes.button} onClick={deleteNumber}>X</button>
            <button className={classes.button} onClick={getNumber}>0</button>
            <button className={classes.button} onClick={checkNumber}>E</button>
        </Card>
    );
};

export default DoorPassword;