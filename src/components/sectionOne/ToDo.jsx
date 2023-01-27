import React, { useState } from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";
import TaskModal from "../modal/index";

const ToDo = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div
        className="col-sm-4 bgc-#ccc card-header card"
        style={{ borderRadius: "0.7rem" }}
      >
        <h1 className="card-header mb-3" style={{ borderRadius: "0.7rem" }}>
          <b>To Do</b>
        </h1>
        <div className="cards">
          <div
            className="card border mb-2"
            style={{ width: "20rem", borderRadius: "0.5rem" }}
          >
            <div
              className="card-body border-bottom p-3"
              onClick={() => setModalShow(true)}
            >
              <h5 className="card-title">Custom Domain for learning apps</h5>
              <div className="bottom--part mt-4 text-end">
                <small
                  className="bg-danger p-1 text-white mt-2"
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

          <div
            className="card border"
            style={{ width: "20rem", borderRadius: "0.5rem" }}
          >
            <div
              className="card-body border-bottom"
              style={{ borderRadius: "0.7rem" }}
            >
              <h5 className="card-title">
                Increase Testing Coverage and make logging run asynchronously
              </h5>
              <div className="bottom--part mt-4 text-end">
                <small
                  className="bg-danger p-1 text-white mt-2"
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
      </div>

      <TaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ToDo;
