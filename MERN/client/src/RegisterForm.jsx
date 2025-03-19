import React, { useState } from "react";
import "./RegisterForm.css"; // Importing the CSS file

function PlantOrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plant: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", email: "", plant: "" });
    alert("Order submitted!");
  };

  return (
    <div className="form-container">
      <h2>Plant Order Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Plant:</label>
          <select
            name="plant"
            value={formData.plant}
            onChange={handleChange}
            required
          >
            <option value="">--Select a Plant--</option>
            <option value="rose">Rose</option>
            <option value="tulip">Tulip</option>
            <option value="orchid">Orchid</option>
            <option value="cactus">Cactus</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit Order
        </button>
      </form>

      {submittedData.length > 0 && (
        <div>
          <h3>Submitted Orders</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Plant</th>
              </tr>
            </thead>
            <tbody>
              {submittedData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.plant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default PlantOrderForm;