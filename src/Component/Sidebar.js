import React from 'react'
import { motion } from "framer-motion"
import { useState } from 'react'
import "./sidebar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
   
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{duration:0.8}}
    >
        <motion.div className='inner-nav'>
            <ul>
                <motion.li whileHover={{backgroundColor:'whitesmoke'}} whileTap={{scale:0.9}}><a>hello</a></motion.li>
          
                
                
            </ul>
        </motion.div>
        
     
    </motion.nav>
    <motion.button
     onClick={()=>setIsOpen(!isOpen)}
     className="toggle"
     whileHover={{scale:1.5}}
     whileTap={{scale:0.9}}
     >
        {isOpen?   <CloseIcon color='primary'></CloseIcon> : <MenuIcon color="primary"></MenuIcon>}
    </motion.button>
      
    </>
  )
}

export default Sidebar