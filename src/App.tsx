import { IceCream } from "react-kawaii";
import { useDispatch, useSelector } from "react-redux";
import { updateCatMood, MOODS } from "./features/mood/moodSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const currentMood = useSelector((state:any) => state.mood);

  const handleMoodUpdate = (evt: any) => {
    const mood = evt.target.dataset.type;
    dispatch(updateCatMood(mood));
  };

  return (
    <div className="App">
      <IceCream size={320} mood={currentMood} color="#FDA7DC" />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button
            data-type={mood}
            key={mood}
            className={`${currentMood === mood ? "selected" : ""}`}
            onClick={handleMoodUpdate}
          >
            {mood}
          </button>
        ))}
      </section>
    </div>
  );
}

export default App;
