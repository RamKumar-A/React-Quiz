import { useQuiz } from '../contexts/QuizContext';

function Finished() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();
  const perentage = points / maxPossiblePoints / 100;
  let emoji;

  if (perentage === 100) emoji = '🎖️';
  if (perentage >= 80 && perentage <= 100) emoji = '😀';
  if (perentage >= 50 && perentage < 80) emoji = '🙃';
  if (perentage >= 0 && perentage < 50) emoji = '🤔';
  if (perentage === 0) emoji = '🤦‍♂️';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} ({Math.ceil(perentage)}%)
      </p>
      <p className="highscore">(Highscore:{highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default Finished;
