import { textAlign } from '@mui/system';
import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Navbar from '../Comoponent/navbar/navbar'
function ViewTemplate(prop) {
    let htmlString='';
    const tempArrr = useSelector((state)=>state.template.templateArray);
    const viewTemplateArray = useSelector((state)=>state.view.viewElement);
    const [htmlContent,sethtmlContent] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        for(let i=0;i<viewTemplateArray.length;i++){
            if(viewTemplateArray[i].type == 'text'){
                htmlString +=getTextHtml(viewTemplateArray[i].html);
            }
            else if(viewTemplateArray[i].type == 'button'){
                htmlString +=getButtonHtml(viewTemplateArray[i]);
            }
            else if(viewTemplateArray[i].type == 'line'){
                htmlString += getLineHtml();
            }
            else if (viewTemplateArray[i].type == 'image'){
                htmlString += getImageString(viewTemplateArray[i]);
            }
        }
        sethtmlContent(htmlString);
    });
    function getTextHtml(content){
        return `<div style="margin-bottom:1em">${content}</div>`;
    }

    function getButtonHtml(element){
        const style=`background-color:${element.bgColor};
        border: none;
        padding: 15px 32px;
        text-align: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        color:inherit;
        border-radius: ${element.borderRadius}px;`;
        let buttonHtml=`<a target="_blank"  style="margin-bottom:1em;color:black" href=${element.borderRadius}>
            <div style='${style}'>${element.buttonText}</div></a>
        `
        return buttonHtml;
    }

    function getImageString(element){
        const style = `width:${element.size.width}px;
        height:${element.size.height}px`;
        const imageStr = `<div style="margin-bottom:1em">
            <img src=${element.src} style='${style}'>
        </div>`
        return imageStr
    }

    function getLineHtml(){
        const line = `<div style=" border-bottom:3px solid #757575;width:100%; margin-bottom:1em"></div>`;
        return line;
    }
    return (
        <div>
            <Navbar/>
            <div style={{ textAlign: 'center', padding: '1em 13em' }}>
            <div  style={{display:'flex'}}>
                <Button variant='outline' onClick={()=>{navigate('/')}} style={{marginRight:'15em'}}>
                    <KeyboardBackspaceOutlinedIcon/>
                </Button>
                <h1>Preview</h1>
            </div>

            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid black',
                paddingTop: '1em',overflowY:'auto',height:'75vh'
            }}
                dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
        </div>
        
    );
}

export default ViewTemplate;