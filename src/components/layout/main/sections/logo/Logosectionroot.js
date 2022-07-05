import React from 'react'

import Logo from './Getcourses'


import heart from '../../../assets/svgicon/heart.svg'

const Logosectionroot = () => {
  return (
    <section className="my-3">
        <h2 className="flex items-center gap-2 p-2 text-xl font-bold"> <img src={heart} className="w-6 h-6" alt="heart" /> همکاران </h2>
        <Logo />
    </section>
  )
}

export default Logosectionroot