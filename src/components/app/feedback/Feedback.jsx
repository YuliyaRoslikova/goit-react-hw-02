const Feedback = ({ good, neutral, bad, totalFeedback }) => {
  const positiveRelation = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Positive: {positiveRelation}%</p>
    </div>
  );
};

export default Feedback;
