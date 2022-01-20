import React from 'react';
import { Paper } from '@mui/material';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { useDispatch } from 'react-redux';
import {addTextEditor} from '../../../src/state/templateSlice';
import "./leftContainer.css"


function LineButtonComponent(props) {
    const dispatch = useDispatch();
    const addLineComponent = () =>{
        console.log("inside Line Component");
        dispatch(addTextEditor({type:"line"}))
    }
    return (
        <Paper elevation={2} className={'paper'}
        onClick ={()=>{ addLineComponent()}}>
            <RemoveOutlinedIcon fontSize='large' color="action" />
             Line
        </Paper>
    );
}

export default LineButtonComponent;