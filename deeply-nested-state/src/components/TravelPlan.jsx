import { useState } from "react";
import { initialTravelPlan } from "../data/data";
import PlaceTree from "./PlaceTree";

const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;
  console.log(planets);

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} planet={place} />
        ))}
      </ol>
    </>
  );
};

export default TravelPlan;
