import React, { useState } from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = ()=>{
    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);

    const fileTypes = ['image/png','image/jpeg'];
    const changeHandler = (e)=>{
        let selectedFile = e.target.files[0];

        if(selectedFile && fileTypes.includes(selectedFile.type)){
            setFile(selectedFile);
            setError('');
        }else{
            setFile(null);
            setError("Please upload an image file ( png / jpeg )");
        }
    }

    return(
        <form>
            <label>
            <input type="file" onChange={changeHandler}/>
            <span>+</span>
            </label> 
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile}/>}
            </div>
        </form>
    );
}

export default UploadForm;