import React from 'react';

export const EditVehicleForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="brand">Brand</label>
        <input className="form-control" id="brand" />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model</label>
        <input className="form-control" id="model" />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input 
          className="form-control" 
          id="year"
          placeholder="YYYY" />
      </div>
      <div className="form-group">
        <label htmlFor="color">Color</label>
        <input className="form-control" id="color" />
      </div>
      <div className="form-group">
        <label htmlFor="vin">VIN</label>
        <input 
          className="form-control" 
          id="vin"
          placeholder="17 signs" />
      </div>
      <div className="form-group">
        <label htmlFor="brand_country">Brand Country</label>
        <input className="form-control" id="brand_country" />
      </div>
      {/* <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="editVehicle@example.com"
        />
      </div> */}
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
export default EditVehicleForm;
