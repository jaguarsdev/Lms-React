import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../../../module/api/baseUrl';

import Dtail from '../courseData';
import DtailLoading from '../databoxLoading/courseDataLoading';
import Rootheader from '../../../header/Rootheader';
import Getlessons from './Getlessons';
import Ostaddate from '../dtailpageoption/Ostaddate';


const GetCoursed = () => {
    const params = useParams();
    const pageid = params.id;

    const [Data, setData] = useState({D: "", E: false});
    const [Tdata, setTdata] = useState({IMG: "",NAME: "",IMG: "", E: false});
    

    useEffect(() => {
        // Get Course Data
        axios.get(`${BASE_COURSES_API}courses/${pageid}?populate=CourseImage`)
                .then(res => {
                    setData({...Data, D: res.data})
                    setTdata({...Tdata, IMG: res.data.data.attributes.teachers.data[0].attributes.TeacherImage.data.attributes.url, NAME: res.data.data.attributes.teachers.data[0].attributes})
            })
                .catch(error => setData({...Data, E: true}))
                
    }, []);
    // console.log(Tdata)
    // ;(async () => {
    //     const teacherImg = await Data.D.data.attributes.teachers.data[0].attributes.TeacherImage.data.attributes.url
    //     return setTeacher({...Data, D: teacherImg})
    //     })()
    // const  teacherImg = await Data.D.data.attributes.teachers.data[0].attributes.TeacherImage.data.attributes.url
    //   console.log(Teacher)
      

    return (
        <>  

            <Rootheader />
            <main className="grid grid-cols-12 text-black dark:text-white h-full">
                <div id="Mainbox" className="col-span-12  flex flex-col  overflow-y-scroll scroll1">
                    <div id="Maincontent" className="bg-white/50 dark:bg-black/25 p-2 mb-52">
                        <div className="grid md:grid-cols-12">
                            {/* Content Course Right Side */}
                            <div className="md:col-span-8 p-1">
                                {!Data.D ? 
                                <DtailLoading /> :
                                    Data.E ?
                                    <p>لطفا یعد از اطمینان از اتصال شبکه با پشتیبانی تماس حاصل نمائید!</p> :
                                    <Dtail props={Data.D.data.attributes} />
                                }
                                <Getlessons courseId={pageid} />
                            </div>
                            <div className='md:col-span-4 p-1 h-full'>
                            <Ostaddate IMG={Tdata.IMG} NAME={Tdata.NAME}/>
                            </div>
                        </div>

                    </div>
                </div>
            </main>


        </>
    );
};
export default GetCoursed;