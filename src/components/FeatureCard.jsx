import React from 'react'

const FeatureCard = ({ title, description, icon: Icon , iconClass, lineClass}) => {
  return (
    <div className='bg-white/25 backdrop-blur-3xl md:w-[25vw] m-auto h-full p-10 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center justify-items-center gap-5 hover:scale-[1.05]'>
      <Icon className={iconClass} />
      <div className={lineClass}></div>
      <h3 className='text-slate-900 font-bold text-2xl text-center'>{title}</h3>
      <p className='text-center text-sm text-slate-600'>{description}</p>
    </div>
  )
}

export default FeatureCard
