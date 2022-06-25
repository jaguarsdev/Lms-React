import React from 'react'

import GetCourses from './courses/Getcourses'


import heart from '../../../assets/svgicon/heart.svg'

const Lastcourssectionroot = () => {
  return (
    <section className="my-3">
        <h2 className="flex items-center gap-2 p-2 text-xl font-bold"> <img src={heart} className="w-6 h-6" alt="heart" /> آخرین دوره ها </h2>
        <GetCourses />
    </section>
  )
}

export default Lastcourssectionroot