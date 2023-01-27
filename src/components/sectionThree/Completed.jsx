import React from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";

const Completed = () => {
  return (
    <>
      <div
        className="col-sm-4 card-header card"
        style={{ borderRadius: "0.7rem" }}
      >
        <h1 className="card-header mb-3" style={{ borderRadius: "0.7rem" }}>
          <b>Completed</b>
        </h1>

        <div
          className="card border border-1"
          style={{ width: "20rem", borderRadius: "0.5rem" }}
        >
          <div className="card-body p-3">
            <h5 className="card-title">
              Implement manage user section on the admin-user profile
            </h5>
            <div className="bottom--part mt-4 text-end">
              <small
                className="bg-dark p-1 text-white mt-2"
                style={{ borderRadius: "0.5rem", float: "left" }}
              >
                Jan 30
              </small>
              <img
                src={moses}
                alt="dp"
                className="rounded-circle mt-2"
                width="30px"
                height="30px"
              />
              <img
                src={rhodin}
                alt="dp"
                className="rounded-circle mt-2"
                width="30px"
                height="30px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
