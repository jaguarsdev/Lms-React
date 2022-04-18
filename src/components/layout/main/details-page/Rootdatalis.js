import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import GetCoursed from './Getcoursed'

function Rootdatalis () {
    const params = useParams();
    const pageid = params.id;

    // useEffect(() =>{

        console.log("rootpage" + pageid)
        console.log("varGetData")
    // },[])
  
    // function hi () {
        // console.log(varGetData)
    // }
    
    const varGetData = <GetCoursed  Data={pageid} />
    
    // <Dtail />
    return (
        <>
            <h1>hi</h1>
            {/* {varGetData} */}
        </>
        
    );
};

export default Rootdatalis;