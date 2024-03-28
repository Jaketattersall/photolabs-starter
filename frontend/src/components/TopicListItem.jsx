import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
    const topics = props.TopicData;
    const topicHandler = (id) => {
      props.fetchPhotosByTopic(id);
    };
  
    const topicItem = topics.map((topic) => (
      <li key={topic.id}
        className="topic-list__item"
        onClick={() => topicHandler(topic.id)} // Pass the topic ID
      >
        <span>{topic.title}</span>
      </li>
    ));
    return (
      <div>
        {topicItem}
      </div>
    );
  };
export default TopicListItem;
