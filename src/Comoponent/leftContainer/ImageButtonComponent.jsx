import React, { useState } from 'react';
import { Paper } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageDetailsComponent from './ImageDetailsComponent';
import "./leftContainer.css"
function ImageButtonComponent(props) {
    const [isOpenImageDetailsDialog,setIsOpenImageDetailsDialog] = useState(false)
    return (
        <div>
            <ImageDetailsComponent isOpenImageDetailsDialog={isOpenImageDetailsDialog} 
            setIsOpenImageDetailsDialog={setIsOpenImageDetailsDialog}/>
            <Paper elevation={2} className={'paper'} onClick={()=>{setIsOpenImageDetailsDialog(true)}} >
                <ImageOutlinedIcon fontSize='large' color="action" />
                Image
            </Paper>
        </div>

    );
}

export default ImageButtonComponent;