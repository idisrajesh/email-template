import React, { useRef } from 'react';
 import { Editor } from '@tinymce/tinymce-react';

function TextEditor({intitialContent,setEditorHtmlValue,id}) {
    const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
   return (
     <>
       <Editor
        apiKey="srbebj8g85iq25b3cvd1gp8e7qgw2y7cakw85kgl4hdlrkt9"
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue={intitialContent}
         onEditorChange={(event)=>{setEditorHtmlValue(event,id)}}
         init={{
           height: 300,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
      
     </>
   );
}

export default TextEditor;