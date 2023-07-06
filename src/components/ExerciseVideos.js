import React from 'react';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <div className="exercise-videos-container">
      <h2 className="exercise-videos-title">
        Watch <span className="exercise-videos-name">{name}</span> exercise videos
      </h2>
      <div className="exercise-videos-wrapper">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <div className="exercise-video-info">
              <h3 className="exercise-video-title">
                {item.video.title}
              </h3>
              <p className="exercise-video-channel">
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExerciseVideos;
