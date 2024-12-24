import React from 'react'
import { UiComponents } from '@simulanisindia/ui';


const Button = () => {
 const {AnimatedButton} = UiComponents
    
  return (
    <>
        <AnimatedButton group={true}/>
        <AnimatedButton user={true}/>
    </>
  )
}

export default Button
