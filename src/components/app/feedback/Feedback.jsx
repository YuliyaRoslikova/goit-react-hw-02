const Feedback = ({ good, neutral, bad, positiveRelation }) => {
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
