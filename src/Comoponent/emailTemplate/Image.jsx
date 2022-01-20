import React,{useEffect, useState} from 'react';
import { ResizeProvider, ResizeConsumer } from "react-resize-context";
import "./image.css";
function Image({id,updateImageSize,src}) {
    const [imageSize,setImageSize] = useState({width:200,height:200});
    const getDatasetBySize = size => ({
        widthRange: imageSize.width > 200 ? "large" : "small",
        heightRange: imageSize.height > 200 ? "large" : "small"
      });
    useEffect(()=>{
        console.log(setImageSize)
    },[imageSize])
      const handleSizeChanged = size => {
        updateImageSize(size,id);
        setImageSize({ size });
      };
    return (
     
        <ResizeProvider>
        <ResizeConsumer
          className="container"
          onSizeChanged={(e)=>{handleSizeChanged(e)}}
          updateDatasetBySize={()=>getDatasetBySize()}
        >
          <div style={{textAlign:'center'}}>
            <img src={src}></img>
          </div>
          
        </ResizeConsumer>
      </ResizeProvider>
    );
}

export default Image;