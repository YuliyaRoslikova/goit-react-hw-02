import { useState, useEffect } from 'react';
import Feedback from './feedback/Feedback';
import Options from './options/Options';

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedState = localStorage.getItem('saved-feedback');
    return savedState ? JSON.parse(savedState) : initState;
  });

  useEffect(() => {
    localStorage.setItem('saved-feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setFeedback(prev => ({ ...prev, good: prev.good + 1 }));
    } else if (feedbackType === 'bad') {
      setFeedback(prev => ({ ...prev, bad: prev.bad + 1 }));
    } else if (feedbackType === 'neutral') {
      setFeedback(prev => ({ ...prev, neutral: prev.neutral + 1 }));
    } else if (feedbackType === 'reset') {
      setFeedback(initState);
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback !== 0 ? (
        <Feedback {...feedback} totalFeedback={totalFeedback} />
      ) : (
        <span>No feedback yet</span>
      )}
    </div>
  );
};

export default App;
