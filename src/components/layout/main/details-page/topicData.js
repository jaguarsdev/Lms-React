import React from 'react';



const TopicData = ({topicData}) => {
    console.log(topicData)
    return (
        <div>
            <h1>{topicData.title.rendered}</h1>
        </div>
    );
};

export default TopicData;