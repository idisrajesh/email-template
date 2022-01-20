import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import TextEditor from '../emailTemplate/TextEditor';
import Button  from '../emailTemplate/Button';
import Line from '../emailTemplate/Line';
import Image from '../emailTemplate/Image';
import WrapperComponent from './WrapperComponent';
import {getRandomString} from '../../utils/Helper'
import ButtonComponent from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {addViewElement} from '../../state/viewSlice';
import { useNavigate } from 'react-router-dom';

var template =[];
function RightContainer(props) {
    const [templateArray,setTemplateArray] = useState([]);
    const tempArrr = useSelector((state)=>state.template.templateArray);
    const [textEditorcontent,setTextEditorcontent] = useState([]);
    const [imageSize,setImageSize] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
       if(tempArrr.length > 0) addTemplateToUI(tempArrr[tempArrr.length-1]);
    },[tempArrr])

    const updateImageSize =(size,id)=> {
       let temp = [...imageSize];
       const index = imageSize.findIndex(x=>x.id ==id);
       if(index >=0){
           temp[index].size=size;
       }
       else{
           const x={id:id,size:size};
           temp.push(x);
       }
       setImageSize(temp);
    }

    const deleteFromImageSize = (id)=>{
        let temp = [...imageSize];
        const index = imageSize.findIndex(x=>x.id ==id);
        temp.map(x=>{
            if(x.id>id){
                x.id=x.id-1;
            }
        })
    }

    const swapImageSize =(id,swapId)=>{
        const index = imageSize.findIndex(x=>x.id ==id);
        const swapIndex = imageSize.findIndex(x=>x.id ==swapId);
        const tempContent  = [...imageSize];
        if(index>=0 && swapIndex>=0){
            tempContent[index].id = swapId;
            tempContent[swapIndex].id = id;
        }
        else if(index >=0 && swapIndex<0) {
            tempContent[index].id = swapId;
        }
        else if(swapIndex >=0 && index<0) {
            tempContent[swapIndex].id = id;
        }
        else{
            return;
        }
    }

    
    const delteElementFromUI=(id)=>{
        const temp = [...templateArray];
        const arr = temp.splice(id,1);
        if(arr[0].type == 'text'){
            deleteHtmlContent(id);
        }
        else if(arr[0].type == 'image'){
            deleteFromImageSize(id);
        }
        setTemplateArray(temp);
    }
    function swap(arr,id,swapId){
        const temp = arr[id];
        arr[id]=arr[swapId];
        arr[swapId] = temp;
    }
    const moveElementUpInUI =(id)=>{
        const temp = [...templateArray];
        swap(temp,id,id-1);
        swapHtmlContaint(id,id-1);
        swapImageSize(id,id-1);
        setTemplateArray(temp);
    }
    
    const moveElementDownInUI = (id)=>{
        const temp = [...templateArray];
        swap(temp,id,id+1);
        swapHtmlContaint(id,id+1);
        swapImageSize(id,id+1);
        setTemplateArray(temp);
    }

    const addTemplateToUI = (arr)=>{
        const key = getRandomString(6);
        var template = {
            html:'',
            type:arr.type,
            link:arr.buttonLink,
            borderRadius:arr.BorderRadius,
            src:arr.src,
            buttonText:arr.ButtonText,
            bgColor:arr.backGroundColor != undefined? arr.backGroundColor.hex != undefined ? arr.backGroundColor.hex : arr.backGroundColor:'',
            key :key
        }
        setTemplateArray((prev)=>[...prev,template]);
    } 

    function deleteHtmlContent(id){
        const index = textEditorcontent.findIndex(x=>x.id ==id);
        const tempContent  = [...textEditorcontent];
        tempContent.splice(index,1);
        tempContent.map(x=>{
            if(x.id>id){
                x.id=x.id-1;
            }
        })

        setTextEditorcontent(tempContent);
    }

    const viewHtmlPage = ()=>{
        const clonedArray = templateArray.map(a => {return {...a}})
        for(let i=0;i<clonedArray.length;i++){
            clonedArray[i].html = textEditorcontent.find(x=>x.id == i) != undefined ? 
            textEditorcontent.find(x=>x.id == i).html : '';
            clonedArray[i].size = imageSize.find(x=>x.id == i) != undefined ? 
            imageSize.find(x=>x.id == i).size : {size:{width:'150px',height:'150px'}};
        }
        
        dispatch(addViewElement(clonedArray));
        navigate('/view');
    }

    function swapHtmlContaint(id,swapId){
        const index = textEditorcontent.findIndex(x=>x.id ==id);
        const swapIndex = textEditorcontent.findIndex(x=>x.id ==swapId);
        const tempContent  = [...textEditorcontent];
        if(index>=0 && swapIndex>=0){
            tempContent[index].id = swapId;
            tempContent[swapIndex].id = id;
        }
        else if(index >=0 && swapIndex<0) {
            tempContent[index].id = swapId;
        }
        else if(swapIndex >=0 && index<0) {
            tempContent[swapIndex].id = id;
        }
        else{
            return;
        }
        
        setTextEditorcontent(tempContent);
    }
    

    const setEditorHtmlValue =(html,id)=>{
        const index = textEditorcontent.findIndex(x=>x.id ==id);
        const tempEditContent = [...textEditorcontent];
        if(index != -1){
            
            tempEditContent[index].html =html;
        }
        else{
            const tempHtml ={
                id:id,
                html:html
            };
            tempEditContent.push(tempHtml);
        }
        setTextEditorcontent(tempEditContent);
    }

   let UIelement=[] ;
    for(let i=0;i<templateArray.length;i++) {
       const element = templateArray[i];
       if(element.type == 'button'){
        UIelement.push( <WrapperComponent key={element.key} maxLength={templateArray.length-1}  id={i} delteElementFromUI={delteElementFromUI}
                moveElementDownInUI={moveElementDownInUI}
                moveElementUpInUI ={moveElementUpInUI}><div>
                    <Button backGroundColor={element.bgColor} buttonText={element.buttonText} buttonLink
                ={element.link}  borderRadius={element.borderRadius}></Button></div></WrapperComponent>)
       }
       else if(element.type == 'text'){
        const index = textEditorcontent.findIndex(x=>x.id ==i) ;
        const html = index !=-1 ? textEditorcontent[index].html :'';
        const text =<WrapperComponent key={element.key} maxLength={templateArray.length-1} id={i} delteElementFromUI={delteElementFromUI}
                 moveElementDownInUI={moveElementDownInUI}
                 moveElementUpInUI ={moveElementUpInUI}><TextEditor intitialContent={html} id={i} 
                 setEditorHtmlValue={setEditorHtmlValue}>
                     </TextEditor></WrapperComponent> ;
        UIelement.push(text);
                
       }

       else if(element.type == 'line'){
        const line = <WrapperComponent key={element.key} maxLength={templateArray.length-1} id={i} delteElementFromUI={delteElementFromUI}
                moveElementDownInUI={moveElementDownInUI}
                moveElementUpInUI ={moveElementUpInUI}><Line/></WrapperComponent>;
        UIelement.push(line);            
       }

       else if(element.type == 'image'){
        const image =<WrapperComponent key={element.key} maxLength={templateArray.length-1} id={i} delteElementFromUI={delteElementFromUI}
                   moveElementDownInUI={moveElementDownInUI}
                   moveElementUpInUI ={moveElementUpInUI}><Image updateImageSize={updateImageSize} id={i} src={element.src}/></WrapperComponent>;
        UIelement.push(image);
                   
       }
    }

    return (
        <div className='righ-container-template'>
             {UIelement.length>0 &&<div className='right-container-header-div'>
                <ButtonComponent  variant="contained" onClick={()=>(viewHtmlPage())}>
                    Preview</ButtonComponent>
            </div>}
            <div>
                {UIelement}
            </div>
           
        </div>
    );
}

export default RightContainer;