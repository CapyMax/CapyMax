import React from 'react'

export default function RoundedButton(props: { children: React.ReactNode, className?: string }) {
  const { children, className } = props
  return (
    <div className={`inline-flex items-center text-white border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-transparent border-[#ffffff1f] px-3 py-2 rounded-full text-[12px] opacity-60 ${className}`}>
      {children}
    </div>
  )
}
