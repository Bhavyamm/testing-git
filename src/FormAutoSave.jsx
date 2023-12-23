import React, { useState, useEffect } from "react";

const FormAutoSave = () => {
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("autoSaveFormData");
    return savedData
      ? JSON.parse(savedData)
      : { name: "", email: "", message: "" };
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem("autoSaveFormData", JSON.stringify(formData));
  }, [formData]);

  return (
    <div>
      <h1>Form Auto Save</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormAutoSave;
