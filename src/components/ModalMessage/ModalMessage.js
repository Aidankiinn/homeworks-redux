import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {DialogActions, DialogTitle} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

const ModalMessage = () => {
    const open = useSelector(state => state.open)
    const title = useSelector(state => state.title)

    const dispatch = useDispatch();

    const handleClose = () => dispatch({
        type: 'CLOSE',
    });

    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {title}
                </DialogTitle>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ModalMessage;
