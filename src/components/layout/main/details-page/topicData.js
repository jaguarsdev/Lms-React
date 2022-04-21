import React from 'react';



const TopicData = ({topicData}) => {

    return (
        <div>
            <h1>{topicData.id}</h1>
            <h1>{topicData.title.rendered}</h1>
        </div>
    );
};

export default TopicData;