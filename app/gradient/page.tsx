import { BackgroundGradientAnimation } from '@/components/ui/gradient'
import React from 'react'

const gradient = () => {
  return (
    <div className="bg-black">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-10 relative h-screen">

        <BackgroundGradientAnimation/>
      </div>
    </div>
  )
}

export default gradient
