import React, { useState } from "react";
import Graph from "./Graph";

const Scorecard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [coreValues] = useState([
    "Integrity",
    "Teamwork",
    "Innovation",
    "Customer Satisfaction",
    "Quality",
    "Accountability",
    "Safety",
    "Respect",
  ]);
  const [ratings, setRatings] = useState({});
  const [showGraph, setShowGraph] = useState(false);
  const [scorecardData, setScorecardData] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setRatings((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const scorecardData = {
      name,
      description,
      ratings,
    };
    console.log(scorecardData);
    setScorecardData(scorecardData);
    setShowGraph(true);
  };

  return (
    <div>
      <h2>Performance Scorecard</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={name} onChange={handleNameChange} />
        </div>
        <div>
          <h3>Core Values</h3>
          <table>
            <thead>
              <tr>
                <th>Core Value</th>
                <th>Exceeding</th>
                <th>Meeting</th>
                <th>Partially Meeting</th>
                <th>Not Meeting</th>
              </tr>
            </thead>
            <tbody>
              {coreValues.map((value) => (
                <tr key={value}>
                  <td>{value}</td>
                  <td>
                    <input type="radio" id={`${value}_exceeding`} name={value} value="exceeding" required onChange={handleRadioChange} />
                  </td>
                  <td>
                    <input type="radio" id={`${value}_meeting`} name={value} value="meeting" required onChange={handleRadioChange} />
                  </td>
                  <td>
                    <input type="radio" id={`${value}_partially_meeting`} name={value} value="partially_meeting" required onChange={handleRadioChange} />
                  </td>
                  <td>
                    <input type="radio" id={`${value}_not_meeting`} name={value} value="not_meeting" required onChange={handleRadioChange} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="5" cols="40" value={description} onChange={handleDescriptionChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {showGraph && <Graph data={scorecardData} />}
    </div>
  );}

  export default Scorecard;