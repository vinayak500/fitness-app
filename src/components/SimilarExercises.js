import React from 'react';
//import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <div className="similar-exercises-container">
    <h2 className="similar-exercises-title">
      Similar <span className="similar-exercises-name">Target Muscle</span> exercises
    </h2>
    <div className="similar-exercises-section">
      {targetMuscleExercises.length !== 0 ? (
        <div className="similar-exercises-scrollbar">
          {targetMuscleExercises.map((exercise, index) => (
            <div key={index} className="similar-exercises-item">
              {/* Render exercise details */}
            
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
    <h2 className="similar-exercises-title">
      Similar <span className="similar-exercises-name">Equipment</span> exercises
    </h2>
    <div className="similar-exercises-section">
      {equipmentExercises.length !== 0 ? (
        <div className="similar-exercises-scrollbar">
          {equipmentExercises.map((exercise, index) => (
            <div key={index} className="similar-exercises-item">
              {/* Render exercise details */}
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  </div>
);

export default SimilarExercises;

