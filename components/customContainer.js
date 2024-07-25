import React from 'react'

const CustomContainer = ({children}) => {
  return (
    <div className='max-w-[1160px] mx-auto'>
      {children}
    </div>
  )
}

export default CustomContainer