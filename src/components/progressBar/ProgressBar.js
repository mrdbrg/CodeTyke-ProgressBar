import React from 'react';
import './Styles.scss';

const ProgressBar = ({totalQuestions, currentValue, isComplete}) => {

  const percentage = currentValue / totalQuestions * 100

  return ( 
    <progress 
      className={`${isComplete && "progressBar__complete"} progressBar`} 
      id="file" value={percentage} 
      max="100" /> 
  )
}

export default ProgressBar;
