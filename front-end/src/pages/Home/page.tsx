import React from 'react'
import Categories from './components/categories'
import Header from '@/components/ui/header'

export default function Home() {
  return (
    <div className='p-5'>
    <Header></Header>
        <img src="/banner-home-01.png" alt="Desconto de até 55%" height={0} width={0} className='h-auto w-full ' sizes='10vw'/>

       <Categories/>

    </div>
  )
}
