import React,{useEffect, useState} from 'react';
import { ResizeProvider, ResizeConsumer } from "react-resize-context";
import "./image.css";
function Image(props) {
    const [imageSize,setImageSize] = useState({width:300,height:300});
    const getDatasetBySize = size => ({
        widthRange: imageSize.width > 200 ? "large" : "small",
        heightRange: imageSize.height > 200 ? "large" : "small"
      });
    useEffect(()=>{
        console.log(setImageSize)
    },[imageSize])
      const handleSizeChanged = size => {
        setImageSize({ size });
      };
    return (
     
        <ResizeProvider>
        <ResizeConsumer
          className="container"
          onSizeChanged={()=>{handleSizeChanged()}}
          updateDatasetBySize={getDatasetBySize()}
        >
          <div style={{textAlign:'center'}}>
            <img src={props.src}></img>
          </div>
          
        </ResizeConsumer>
      </ResizeProvider>
    );
}

export default Image;