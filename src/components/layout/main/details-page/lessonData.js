import React from 'react';

const LessonData = ({lessonData}) => {

    console.log(lessonData)
    return (
        <div>
            <h1>{lessonData.id}</h1>
            <h2>{lessonData.title.rendered}</h2>
            <p dangerouslySetInnerHTML={{ __html: lessonData.content.rendered }} />
        </div>
    );
};

export default LessonData;