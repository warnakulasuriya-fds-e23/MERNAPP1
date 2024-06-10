import { useState } from "react";
const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  //   const [isSupervisorRecommended, setIsSupervisorRecommended] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const jsonFormOfRes = await response.json();
    if (!response.ok) {
      setError(jsonFormOfRes.error);
    } else {
      setError(null);
      console.log("Workout added successfully \n:", jsonFormOfRes);
      setTitle("");
      setLoad("");
      setReps("");
    }
  };
  return (
    <>
      <form className="create" onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>
        <label>Enter Title/name of workout:</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <br />
        <label>Load(kg):</label>
        <br />
        <input
          type="number"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
        <br />
        <label>Number of reps (repitions):</label>
        <br />
        <input
          type="number"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
        <br />
        {/* <label>Is a supervisor needed? :</label>
        <input
          type="text"
          onChange={(e) => setIsSupervisorRecommended(e.target.value)}
          value={isSupervisorRecommended}
        /> */}
        <button>Add Workout</button>
      </form>
      {error && <div className="error"> {error}</div>}
    </>
  );
};

export default WorkoutForm;
