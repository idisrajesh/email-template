import React from 'react';
import "./leftContainer.css"
import { Paper } from '@mui/material';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import {addTextEditor} from '../../src/state/templateSlice'
import { useDispatch } from 'react-redux';
function TextButtonComponent(props) {
    const dispatch = useDispatch()
    console.log('xyz');
    const testContext =()=>{
        console.log('in context');
        dispatch(addTextEditor({type:'text',intialValue:'xyz'}))
    }
    return (
        <React.Fragment>
            <Paper elevation={2} className={"paper"} onClick={() => { testContext() }}>
                <TextSnippetOutlinedIcon fontSize='large' color="action" />
                text

            </Paper>
        </React.Fragment>
        
    );
}

export default TextButtonComponent;