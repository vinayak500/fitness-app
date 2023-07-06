import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise }) => (
  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <div className="button-group">
      <button className="exercise-button-left">{exercise.bodyPart}</button>
      <button className="exercise-button-right">{exercise.target}</button>
    </div>
    <p className="exercise-name">{exercise.name}</p>
  </Link>
);

export default ExerciseCard;

