import { motion } from 'framer-motion'
import React from 'react'
// import { Route,useLocation } from 'react-router-dom'
// import DailyPicks from './DailyPicks'
// import Form from './Form'

const animations={
    initial:{opacity:0, x:100},
    animate:{opacity:1, x:0},
    exit:{opacity:0,x:-100}
}



const AnimatedRoutes = ({children}) => {
    
  return (
    <motion.div
    variants={animations} initial='initial' animate='animate' exit='exit'
    >
        {children}
        {/* <Route path="/form" element={<Form/>} />
        <Route path="/" element={<DailyPicks/>} /> */}
    </motion.div>
  )
}

export default AnimatedRoutes;