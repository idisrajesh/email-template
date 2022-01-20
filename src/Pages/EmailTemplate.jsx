import React from 'react';
import LeftContainer from '../Comoponent/leftContainer/LeftContainer';
import Navbar from '../Comoponent/navbar/navbar';
import RightContainer from '../Comoponent/rightContainer/RightContainer';

import "./emailTemplate.css"

function EmailTemplate(props) {
    return (
        <div>
            <Navbar/>
            <div className={"outer-container-div"}>

                <div className={'left-container-div'}>
                    <LeftContainer />
                </div>
                <div className={'right-container-div'}>
                    <RightContainer />
                </div>
            </div>
        </div>

    );
}

export default EmailTemplate;