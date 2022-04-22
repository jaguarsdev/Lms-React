import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { BASE_COURSES_API } from '../../../api/baseUrl';

import Dtail from './courseData';
import Rootheader from '../../header/Rootheader';
import Getlessons from './Getlessons';

const GetCoursed = () => {
    const params = useParams();
    const pageid = params.id;

    const [Data, setData] = useState({D: "", E: false});

    useEffect(() => {
        // Get Course Data
        axios.get(`${BASE_COURSES_API}sfwd-courses/${pageid}`)
                .then(res => setData({...Data, D: res.data}))
                .catch(error => setData({...Data, E: true}))

    }, [pageid]);
    // console.log(Data.D)
    return (
        <>  

            <Rootheader />
            <main className="grid grid-cols-12 text-black dark:text-white h-full">
                <div id="Mainbox" className="col-span-12  flex flex-col  overflow-y-scroll scroll1">
                    <div id="Maincontent" className="bg-white/50 dark:bg-black/25 p-2 mb-52">
                        <div className="grid md:grid-cols-12">
                            <div className="md:col-span-8">
                                {!Data.D ? 
                                <h1>LOADING</h1> :
                                    Data.E ?
                                    <p>Somethin went wrong</p> :
                                    <Dtail props={Data.D} />
                                }
                                <Getlessons courseId={pageid} />
                            </div>
                        </div>

                    </div>
                </div>
            </main>


        </>
    );
};
export default GetCoursed;