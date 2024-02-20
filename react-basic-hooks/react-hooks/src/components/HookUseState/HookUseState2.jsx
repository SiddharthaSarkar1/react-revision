import React, { useState } from "react";

const initialState = {
  name: "",
  city: "",
};

const HookUseState2 = () => {
  const [formData, setFormData] = useState(initialState);

//   const handleNameChange = (event) => {
//     setFormData({
//       ...formData,
//       name: event.target.value,
//     });
//   };

//   const handleCityChange = (event) => {
//     setFormData({
//       ...formData,
//       city: event.target.value,
//     });
//   };

  console.log(formData);

  return (
    <div>
      <h1>UseState Hook - 2</h1>
      <div className="">
        <input
          onChange={(event) => {
            setFormData({
              ...formData,
              name: event.target.value,
            });
          }}
          type="text"
          name="name"
          placeholder="Enter Name"
        />

        <select
          onChange={(event) => {
            setFormData({
              ...formData,
              city: event.target.value,
            });
          }}
          name="city"
        >
          <option value={""} id="">
            Select City
          </option>
          <option value={"bengaluru"} id="bengaluru">
            Bengaluru
          </option>
          <option value={"kolkata"} id="kolkata">
            Kolkata
          </option>
          <option value={"delhi"} id="delhi">
            Delhi
          </option>
          <option value={"mumbai"} id="mumbai">
            Mumbai
          </option>
          <option value={"chennai"} id="chennai">
            Chennai
          </option>
        </select>
      </div>

      <div className="">
        {formData.name !== "" && <h3>Your name is : {formData.name}</h3>}
        {formData.city !== "" && <h3>Your city is : {formData.city}</h3>}
      </div>
    </div>
  );
};

export default HookUseState2;
