'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'


export default function Quantity() {
    const [num,setNum] = useState(1)
    function add_num (){
        setNum(num+1)
    }
    function rem_num (){
        setNum(num <=1 ? 1 :  num-1)
    }

  return (
    <div className=' flex gap-3 mt-6'>
      <div className='text-lg font-bold' >Quantity:</div>
      <Button className='bg-gray-100 h-6 w-5 rounded-full text-black' onClick={rem_num}> - </Button>
      {num}
      <Button className='bg-gray-100 h-6 w-5 rounded-full text-black' onClick={add_num}> + </Button>
    </div>
  )
}
