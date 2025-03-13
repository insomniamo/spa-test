import React from 'react'

const BurgerIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="20" height="2.25" fill="currentColor" />
      <rect y="6.75" width="20" height="2.25" fill="currentColor" />
      <rect y="13.5" width="20" height="2.25" fill="currentColor" />
    </svg>
  )
}

export default BurgerIcon
