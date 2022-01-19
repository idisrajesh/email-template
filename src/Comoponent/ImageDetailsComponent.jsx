import React, { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color'
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import {addTextEditor} from '../../src/state/templateSlice';

function ImageDetailsComponent({isOpenImageDetailsDialog,setIsOpenImageDetailsDialog}) {
    const dispatch = useDispatch();
    const [imageLink,setImageLink] = useState('');
    const addImageComponent =()=>{
        setIsOpenImageDetailsDialog(false);
        dispatch(addTextEditor({type:'image',src:imageLink}));
    }
    return (
        <React.Fragment>
            <Dialog open={isOpenImageDetailsDialog}>
                <DialogTitle>Give  Image Link</DialogTitle>
                <Grid container spacing={2}>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={12} md={11}>
                    <TextField
                                required                             
                                label="Image Link"
                                onChange={(event) => setImageLink(event.target.value)}
                        />
                    </Grid>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={12} md={5}>
                        <Button variant="contained" onClick={()=>{setIsOpenImageDetailsDialog(false)}}>Cancle</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Button variant="contained" onClick={()=>{addImageComponent()}}>Add Image</Button>
                    </Grid>
                </Grid>
            </Dialog>
        </React.Fragment>
    );
}

export default ImageDetailsComponent;