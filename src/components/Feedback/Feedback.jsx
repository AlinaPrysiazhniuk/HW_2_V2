export const Feedback = ({ options, onFeedback }) => {
  const stateData = Object.keys(options);

  return (
    <div>
      {stateData.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
