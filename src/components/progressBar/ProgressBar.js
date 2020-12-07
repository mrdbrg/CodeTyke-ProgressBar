import React from 'react';
import './Styles.scss';

const ProgressBar = ({currentQuestionId, isComplete}) => {
  return ( <progress className={`${isComplete && "progressBar__complete"} progressBar`} id="file" value={currentQuestionId * 25} max="100"></progress> )
}

export default ProgressBar;
