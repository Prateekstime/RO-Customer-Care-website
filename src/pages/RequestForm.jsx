import  { useState, useEffect } from "react";
import downArrow from "../assets/downArrow.png";
import Cross from "../assets/Cross.png";

const RequestForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    category: "",
    pinCode: "",
    state: "",
    city: "",
    serviceType: "",
    address: "",
    landmark: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Disable scrolling when the form is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose(); // Close the form after submission
    }, 3000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
      {submitted ? (
        <div className="bg-green-500 text-white p-3 rounded-md text-center">
          Request submitted, you will receive a call from us.
        </div>
      ) : (
        <div className="relative max-w-lg w-full p-6 bg-white shadow-lg rounded-lg">
          <button onClick={onClose} className="absolute top-2 right-2">
            <img src={Cross} alt="Close" className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold mb-4">Submit Your Request</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              placeholder="Enter Mobile Number"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />

            <div className="flex space-x-2">
              <div className="relative w-1/2">
                <select
                  name="category"
                  className="w-full p-2 border rounded appearance-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="home">Home</option>
                </select>
                <img
                  src={downArrow}
                  className="absolute right-3 top-3 w-4"
                  alt="Dropdown"
                />
              </div>
              <input
                type="text"
                name="pinCode"
                placeholder="Enter Pin Code"
                className="w-1/2 p-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex space-x-2">
              <div className="relative w-1/2">
                <select
                  name="state"
                  className="w-full p-2 border rounded appearance-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
                <img
                  src={downArrow}
                  className="absolute right-3 top-3 w-4"
                  alt="Dropdown"
                />
              </div>
              <div className="relative w-1/2">
                <select
                  name="city"
                  className="w-full p-2 border rounded appearance-none"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                </select>
                <img
                  src={downArrow}
                  className="absolute right-3 top-3 w-4"
                  alt="Dropdown"
                />
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
                <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    name="serviceType1"
                    value="Services"
                    onChange={handleChange}
                    required
                    className="w-5 h-5 accent-blue-500"
                  />
                  <span className="text-gray-800 font-semibold">Services</span>
                </label>
              </div>
              <div className="flex-1">
                <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                  <input
                    type="radio"
                    name="serviceType2"
                    value="New Purchase"
                    onChange={handleChange}
                    required
                    className="w-5 h-5 accent-blue-500"
                  />
                  <span className="text-gray-800">New Purchase</span>
                </label>
              </div>
            </div>
            <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
              <input
                type="radio"
                name="serviceType3"
                value="Repair or Service"
                onChange={handleChange}
                required
                className="w-5 h-5 accent-blue-500"
              />
              <span className="text-gray-800">Repair or Service</span>
            </label>
            <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
              <input
                type="radio"
                name="serviceType4"
                value="Installation or Uninstallation"
                onChange={handleChange}
                required
                className="w-5 h-5 accent-blue-500"
              />
              <span className="text-gray-800">
                Installation or Uninstallation
              </span>
            </label>
            <label className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
              <input
                type="radio"
                name="serviceType5"
                value="AMC Plan"
                onChange={handleChange}
                required
                className="w-5 h-5 accent-blue-500"
              />
              <span className="text-gray-800">AMC Plan</span>
            </label>

            <input
              type="text"
              name="address"
              placeholder="Enter Full Address"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="landmark"
              placeholder="Enter Landmark"
              className="w-full p-2 border rounded"
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default RequestForm;
