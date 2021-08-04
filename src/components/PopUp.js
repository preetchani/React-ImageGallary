import React from 'react'
import { motion } from 'framer-motion';
const PopUp=({selectedImg,setSelectedImg})=>{
    const handleClick=(e)=>{
        //close image if clicking outside of image
        if(e.target.classList.contains('backdrop'))
        setSelectedImg(null);
    }
    return(
    <motion.div className="backdrop" onClick={handleClick}
    initial={{opacity:0}}
    animate={{opacity:1}}>
        <motion.img src={selectedImg} alt="Full Pic"
        initial={{y:"-100vh"}}
        animate={{y:0}} />
    </motion.div>
    )
}

export default PopUp;

