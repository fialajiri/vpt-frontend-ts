import React, { useEffect, useRef } from "react";

interface EditorProps {
  onChange: (data:string) => void;
  editorLoaded:boolean;
  name: string;
  value: string;
}


const  Editor: React.FC<EditorProps>= ({ onChange, editorLoaded, name, value }) => {
  const editorRef = useRef<any>();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
      
      
    };
  }, []);

  return (
    <div className='editor'>
      {editorLoaded ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}          
          data={value}
          onChange={(event:any, editor:any) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  )
}

export default Editor;
