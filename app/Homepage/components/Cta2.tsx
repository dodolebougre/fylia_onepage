import BlackButton from '@/app/components/Button/BlackButton'
import React from 'react'

const Cta2 = () => {
  return (
    <div className='bg-white max-w-2xl mx-auto flex  flex-col m-20 items-center justify-center p-10 text-
    black'>
        <h2 className='mb-4 text-4xl text-center '>Nous allons sauver des milliers de souvenirs.</h2>
        <p className='mb-4 text-2xl'>Nous attendons le votre !</p>
        <BlackButton/>
    </div>
  )
}

export default Cta2