import React from 'react';
import "./leftContainer.css"

import Box from '@mui/material/Box';

import { makeStyles } from '@mui/styles';
import { margin } from '@mui/system';



import { useDispatch } from 'react-redux';

import TextButtonComponent from './TextButtonComponent';
import ImageButtonComponent from './ImageButtonComponent';
import ButtonComponent from './ButtonComponent';
import LineButtonComponent from './LineButtonComponent';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& > :not(style)': {
            width: 80,
            height: 80,
        }
    },
    
});

function LeftContainer(props) {
    const classes = useStyles();
    
    return (
        <div className='left-outer-container-div'>
            <div className='contianer-div'>
                <Box className={classes.box}>
                    <TextButtonComponent/>
                    <ImageButtonComponent/>                  
                    <ButtonComponent/>
                    <LineButtonComponent/>
                </Box>
            </div>
        </div>
    );
}

export default LeftContainer;