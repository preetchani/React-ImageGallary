import React from 'react'
import useFireStorage from '../hooks/useFireStorage';

const ImageGrid = ()=>{
    const {docs} = useFireStorage('image');
    console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <div className="grid-wrap" key={doc.id}>
                    <img src={doc.url} alt="upload pic" />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;