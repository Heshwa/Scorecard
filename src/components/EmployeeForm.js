import React, { useState } from "react";
import ValueRating from "./ValueRating";
import ValueDescription from "./ValueDescription";
import ScorecardGraph from "./ScorecardGraph";
import { values } from "./values";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [ratings, setRatings] = useState(
    values.map((value) => ({
      name: value.name,
      rating: "",
      description: "",
    }))
  );

  const handleNameChange = (e) => setName(e.target.value);

  const handleRatingChange = (index, rating) => {
    setRatings([
      ...ratings.slice(0, index),
      { ...ratings[index], rating },
      ...ratings.slice(index + 1),
    ]);
  };

  const handleDescriptionChange = (index, description) => {
    setRatings([
      ...ratings.slice(0, index),
      { ...ratings[index], description },
      ...ratings.slice(index + 1),
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // save the ratings to the employees array (not shown)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        {ratings.map((rating, index) => (
          <ValueRating
            key={rating.name}
            value={rating.name}
            rating={rating.rating}
            description={rating.description}
            onRatingChange={(rating) => handleRatingChange(index, rating)}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
      <div>
        {ratings
          .filter((rating) => rating.rating === "exceeding" || rating.rating === "not meeting")
          .map((rating, index) => (
            <ValueDescription
              key={rating.name}
              value={rating.name}
              description={rating.description}
              onDescriptionChange={(description) => handleDescriptionChange(index, description)}
            />
          ))}
      </div>
      <ScorecardGraph ratings={ratings} />
    </div>
  );
};

export default EmployeeForm;
