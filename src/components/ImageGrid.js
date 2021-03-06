import React from 'react'
import useFireStorage from '../hooks/useFireStorage';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg})=>{
    const {docs} = useFireStorage('image');
    console.log(docs);
    return (
        <div className="img-grid">
            {docs && docs.map(doc=>(
                <motion.div className="grid-wrap" key={doc.id}
                    layout
                    whileHover={{opacity:1}}
                    onClick={()=> setSelectedImg(doc.url)}>
                    <motion.img src={doc.url} alt="upload pic" 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{delay:1}}/>
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;