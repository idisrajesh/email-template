import React from 'react';
import "./rightContainer.css"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

function WrapperComponent({id,delteElementFromUI,moveElementDownInUI,moveElementUpInUI,children,maxLength}) {
    return (
        <div className={"wrapper-outer-div"}>
            <div className={"wrapper-icon-div"}>
                <DeleteOutlineOutlinedIcon color="action"  onClick={()=>{delteElementFromUI(id)}}/>
                {id  !=0 &&
                  <ArrowUpwardOutlinedIcon  color="action" onClick={()=>{moveElementUpInUI(id)}}/>
                } 
                {
                    id !=maxLength && <ArrowDownwardOutlinedIcon color="action"  onClick={()=>{moveElementDownInUI(id)}}/>
                }               
                
            </div>
            {children}
        </div>
    );
}

export default WrapperComponent;