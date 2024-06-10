const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg):</strong> {workout.load} <br />
        <strong>reps:</strong> {workout.reps}
        <br />
        <strong>is supervisor recommended:</strong> {workout.supvisorRecomended}
        <br />
        <strong>created At:</strong> {workout.createdAt}
        <br />
      </p>
    </div>
  );
};
export default WorkoutDetails;
