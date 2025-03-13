import React, { ReactNode } from 'react'
import "./Content.style.scss"

interface ContentProps {
  children?: ReactNode;
}

const Content: React.FC<ContentProps> = ({children}) => {
  return (
    <div className='content'>
        {children}
    </div>
  )
}

export default Content