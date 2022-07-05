import React, { useEffect, useState } from 'react'

import imgostad from '../../../assets/images/osfallah.webp'
// import leftarrow from '../../../assets/svgicon/leftarrow.svg';
import iconClock from '../../../assets/svgicon/iconClock.svg';
import iconUser from '../../../assets/svgicon/iconUser.svg';
import iconJalasat from '../../../assets/svgicon/iconJalasat.svg';
import { IMGHOST } from '../../../../../module/api/baseUrl';


export default function Ostaddate({IMG , NAME}) {

    // const [Teacher, setTeacher] = useState({D: "", E: false});
    // useEffect(()=>{
    //     const DATA = async () => {
    //         await setTeacher ({...Teacher , D: send})
    //     }
        
        // console.log(NAME)
    // }, [])
    // useEffect(()=>{

    // },[setTeacher])


return (
    <>
        <div><img src={IMGHOST+IMG} alt='ostad' className='rounded-md shadow-md'/></div>



        <div className="flex items-center justify-center  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <h2 className="font-medium">{NAME.TeacherName}</h2>
        </div>
        <div className='flex gap-3'>
            <div className="flex items-center gap-3  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
                <div><img src={iconClock} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
                <h2 className="font-medium">48</h2>
            </div>
            <div className="flex items-center gap-3  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
                <div><img src={iconUser} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
                <h2 className="font-medium">200</h2>
            </div>
            <div className="flex items-center gap-3  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
                <div><img src={iconJalasat} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
                <h2 className="font-medium">40</h2>
            </div>
        </div>
        <div className="flex flex-col gap-3  w-full my-2 px-2 py-3 rounded-lg bg-orange-100 dark:bg-white/30" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <h3 className="font-semibold">» مزایای شرکت در دوره </h3>
            <p className="font-medium">اهدای گواهی معتبر</p>
            <p className="font-medium">یاد گیری مفاهیم اسلامی</p>
            <p className="font-medium">فراهم سازی ارتباط مستقیم با استاد</p>
            <p className="font-medium">...</p>
        </div>
        <div className="flex items-center gap-3  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <div><img src={iconJalasat} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
            <h2 className="font-medium">امتیاز اتمام دوره معادل 400 امتیاز</h2>
        </div>
        {/* <div className="flex items-center gap-3  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <div><img src={iconJalasat} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
            <h2 className="font-medium">امتیاز اتمام دوره معادل 400 امتیاز</h2>
        </div> */}
        
        <div>
        </div>
    </>
  )
}
