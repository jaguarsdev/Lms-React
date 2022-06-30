import React from 'react'

import imgostad from '../../../assets/images/1 (1).jpg'
// import leftarrow from '../../../assets/svgicon/leftarrow.svg';
import iconClock from '../../../assets/svgicon/iconClock.svg';
import iconUser from '../../../assets/svgicon/iconUser.svg';
import iconJalasat from '../../../assets/svgicon/iconJalasat.svg';

export default function Ostaddate() {
  return (
    <>
        <div><img src={imgostad} alt='ostad' className='rounded-md shadow-md'/></div>



        <div className="flex items-center justify-center  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <h2 className="font-medium">استاد حسینی آملی</h2>
        </div>
        <div className="flex items-center  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <div><img src={iconClock} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
            <h2 className="font-medium">مدت زمان دوره: 48 ساعت</h2>
        </div>
        <div className="flex items-center  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <div><img src={iconUser} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
            <h2 className="font-medium">دانشپژوه : 280 نفر</h2>
        </div>
        <div className="flex items-center  w-full my-2 px-2 py-3 rounded-lg bg-gray-50 dark:bg-white/20" style={ {boxShadow: "0px 0px 15px -5px #00000090"} }>
            <div><img src={iconJalasat} className="w-5 h-5 ml-1" alt="leftarrow" /></div>
            <h2 className="font-medium">مجموع جلسات : 40 جلسه</h2>
        </div>
        <div>
            <h3>مزایای شرکت در دوره</h3>
            <p>اهدای گواهی معتبر</p>
            <p>یاد گیری مفاهیم معرفت نفس</p>
            <p>فراهم سازی ارتباط مستقیم با استاد</p>
            <p>...</p>
        </div>
    </>
  )
}
