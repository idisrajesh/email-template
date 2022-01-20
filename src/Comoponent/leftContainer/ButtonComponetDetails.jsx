import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color'
import Grid from '@mui/material/Grid';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import {addTextEditor} from '../../../src/state/templateSlice'
import "./leftContainer.css"
function ButtonComponetDetails({open,setIsOpenButtonDetails}) {
    const [isOpen, setIsOpen] = useState(open);
    const [color,setColor] = useState('#fff');
    const [buttonText,setButtonText] = useState('');
    const [buttonLink,setButtonLink] = useState('');
    const [borderRadius,setBorderRadius] = useState('');
    const dispatch = useDispatch();
    
    const addButtonComponent = ()=>{
        
        var component ={
            type:'button',
            backGroundColor:color,
            Link:buttonLink,
            ButtonText:buttonText,
            BorderRadius:borderRadius
        }
        dispatch(addTextEditor(component));
        setIsOpenButtonDetails(false);
    }

     useEffect(()=>{
        setIsOpen(open);
        console.log(open);
     },[open])
     
    return (
        <React.Fragment>
            <Dialog open={open}>
                <DialogTitle>Setup Button Config</DialogTitle>
                <Grid container spacing={2} className={"grid-outer-div"}>
                    <Grid item xs={12} md={6}>
                        <ChromePicker color={color} onChange={updateColor=>setColor(updateColor)}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Grid item xs={12} md={12} style={{marginBottom:"1em"}}>
                            <TextField
                                required                             
                                label="Button Text"
                                onChange={(event) => setButtonText(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} md={12} style={{marginBottom:"1em"}}>
                            <TextField
                                required 
                                                             
                                label="Button-Link"
                                onChange={(event) => setButtonLink(event.target.value)}
                              
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                type="number"                                 
                                label="Border-radius (in px)"
                                onChange={(event) => setBorderRadius(event.target.value)}
                            />
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" color="primary" onClick={()=>{setIsOpenButtonDetails(false)}}>Cancle</Button>
                    </Grid>
                    <Grid item xs={12} md={6} style={{textAlign:"center"}}>
                    <Button variant="contained" onClick={()=>{addButtonComponent()}}>Add Button</Button>
                    </Grid>
                </Grid>
            </Dialog>
        </React.Fragment>
    );
}

export default ButtonComponetDetails;