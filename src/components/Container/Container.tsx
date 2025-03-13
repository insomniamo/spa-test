import React, { ReactNode } from 'react'
import "./Container.style.scss"

interface ContainerProps {
  children?: ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

export default Container