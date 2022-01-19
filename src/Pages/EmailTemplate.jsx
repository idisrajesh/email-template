import React from 'react';
import LeftContainer from '../Comoponent/LeftContainer';
import RightContainer from '../Comoponent/rightContainer/RightContainer';

import "./emailTemplate.css"

function EmailTemplate(props) {
    return (
        <div className={"outer-container-div"}>
            <div className={'left-container-div'}>
                <LeftContainer/>
            </div>
            <div className={'right-container-div'}>
                <RightContainer/>
            </div>                
        </div>
    );
}

export default EmailTemplate;