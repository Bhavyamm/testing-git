import React, { useState } from "react";

const S3ConfigUpdateCmp = () => {
  const [repoName, setRepoName] = useState("Select repo name");
  const [environment, setEnvironment] = useState("Select environment");
  const [infraStack, setInfraStack] = useState("Select infra stack");

  const handleRepoChange = (event) => {
    setRepoName(event.target.value);
  };

  const handleEnvironmentChange = (event) => {
    setEnvironment(event.target.value);
  };

  const handleInfraStackChange = (event) => {
    setInfraStack(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Selected Repo Name:", repoName);
    console.log("Selected Environment:", environment);
    console.log("Selected Infra Stack:", infraStack);
  };

  return (
    <div>
      <div>
        <label>Select Repo Name:</label>
        <select value={repoName} onChange={handleRepoChange}>
          <option value="Select repo name" disabled>
            Select repo name
          </option>
          <option value="frontend-insurance">frontend-insurance</option>
          <option value="frontend-lending">frontend-lending</option>
        </select>
      </div>
      <div>
        <label>Select Environment:</label>
        <select value={environment} onChange={handleEnvironmentChange}>
          <option value="Select environment" disabled>
            Select environment
          </option>
          <option value="staging">staging</option>
          <option value="prod">prod</option>
        </select>
      </div>
      <div>
        <label>Select Infra Stack:</label>
        <select value={infraStack} onChange={handleInfraStackChange}>
          <option value="Select infra stack" disabled>
            Select infra stack
          </option>
          <option value="india">india</option>
          <option value="uae">uae</option>
        </select>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default S3ConfigUpdateCmp;
