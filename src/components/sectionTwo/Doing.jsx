import React from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";

const Doing = () => {
  return (
    <>
      <div
        className="col-sm-4 card-header card"
        style={{ borderRadius: "0.7rem" }}
      >
        <h1 className="card-header mb-3" style={{ borderRadius: "0.7rem" }}>
          <b>Doing</b>
        </h1>

        <div
          className="card border border-1"
          style={{ width: "20rem", borderRadius: "0.5rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">User Onboarding</h5>
            <div className="bottom--part mt-4 text-end">
              <small
                className="bg-warning p-1 mt-2"
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

export default Doing;
