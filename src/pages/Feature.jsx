import React from 'react'
import BackgroundShapes from '../components/BackgroundShapes'
import { featureData } from '../data/featureData'
import FeatureCard from '../components/FeatureCard'
import {motion} from "framer-motion"

const Feature = () => {
  return (
    <div className='h-screen'>
      <div className="absolute -z-50">
        <BackgroundShapes/>
      </div>
      <div className='md:h-screen p-10 flex flex-col items-center justify-center'>
        <motion.h2 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-4xl font-bold text-center">Feature Highlights</motion.h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
        initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
        
            {featureData.map(feature => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
         
        </motion.div>
      </div>
    </div>
  )
}

export default Feature
