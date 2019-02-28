import React, { Component } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core';

export class ConfirmationDialog extends Component {
    render() {
        const { message, handleClose, isOpen } = this.props;

        return (
            <Dialog open={ isOpen }>
                <DialogTitle>Custom Prompt</DialogTitle>

                <DialogContent>{ message }</DialogContent>

                <DialogActions>
                    <Button onClick={ handleClose.bind(this, true) }>
                        OK
                    </Button>

                    <Button onClick={ handleClose.bind(this, false) }>
                        CANCEL
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default ConfirmationDialog;
