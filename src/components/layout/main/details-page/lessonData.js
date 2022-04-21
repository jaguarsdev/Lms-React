import React from 'react';

import Gettopic from './Gettopic';

const LessonData = ({lessonData, courseId}) => {

    return (
        
        <>
        <div>
            <h1>{lessonData.id}</h1>
            <h2>{lessonData.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: lessonData.content.rendered }} />
        </div>
        <Gettopic lessonId={lessonData.id} courseId={courseId} />
        </>
    );
};

export default LessonData;