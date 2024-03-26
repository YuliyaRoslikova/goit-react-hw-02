import { useState, useEffect } from 'react';
import Feedback from './feedback/Feedback';
import Options from './options/Options';
import Description from './description/Description';
import Notification from './notification/Notification';

const initState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const descriptionProps = {
  title: 'Sip Happens Café',
  description:
    'Please leave your feedback about our service by selecting one of the options below.',
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
  const positiveRelation = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <Description {...descriptionProps} />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback !== 0 ? (
        <Feedback {...feedback} positiveRelation={positiveRelation} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

export default App;
