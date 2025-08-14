import React from 'react'
import BackgroundShapes from '../components/BackgroundShapes'
import { featureData } from '../data/featureData'
import FeatureCard from '../components/FeatureCard'

const Feature = () => {
  return (
    <div className='h-screen'>
      <div className="absolute -z-50">
        <BackgroundShapes/>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-center">Feature Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {featureData.map(feature => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feature
