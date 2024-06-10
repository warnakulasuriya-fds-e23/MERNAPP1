import { useEffect, useState } from "react";

const Home = () => {
  const [workoutsArray, setWorkoutsArray] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts/"); // refer IMPORTANT.txt NOTE 1 for more info
      const jsonForm = await response.json();
      if (response.ok) {
        setWorkoutsArray(jsonForm);
      }
    };
    fetchWorkouts();
  }, []); //leaving the second argument of use effect as an empty array ensures that this function is fired only once upon initialization of home page

  return (
    <div className="home">
      <div className="workouts">
        {workoutsArray &&
          workoutsArray.map((workout) => (
            <>
              <p key={workout._id}>{workout.title}</p>
            </>
          ))}
      </div>
    </div>
  );
};

export default Home;
