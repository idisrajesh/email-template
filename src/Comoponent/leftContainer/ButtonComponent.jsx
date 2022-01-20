import React,{useState,useEffect} from 'react';
import { Paper } from '@mui/material';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import "./leftContainer.css"
import ButtonComponetDetails from './ButtonComponetDetails';
function ButtonComponent(props) {
    const [isOpenButtonDetails,setIsOpenButtonDetails] = useState(false);
    
    useEffect(()=>{
        console.log("buttonComp:",isOpenButtonDetails);
    });
    const upDateOpenButton =()=>{
        setIsOpenButtonDetails(true);
        console.log('in');
       
    }
    return (
        <div>
            <ButtonComponetDetails open={isOpenButtonDetails} setIsOpenButtonDetails={setIsOpenButtonDetails}/>
            <Paper elevation={2} className={'paper'} onClick={()=>{upDateOpenButton()}}>
                <IndeterminateCheckBoxOutlinedIcon fontSize='large' color="action" />
                Button
            </Paper>            
        </div>

    );
}

export default ButtonComponent;