import React from 'react'

const FeatureCard = ({ title, description, icon: Icon , iconClass, lineClass}) => {
  return (
    <div>
      <Icon className={iconClass} />
      <div className={lineClass}></div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default FeatureCard
