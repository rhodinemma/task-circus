import React, { useState } from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";
import TaskModal from "../modal/index";

const ToDo = ({ data }) => {
  console.log(data);
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
        {data.map((todo, index) => (
          <>
            <div className="cards">
              <div
                className="card border mb-2"
                style={{ width: "20rem", borderRadius: "0.5rem" }}
                key={index}
              >
                <div
                  className="card-body border-bottom p-3"
                  onClick={() => setModalShow(true)}
                >
                  <h5 className="card-title">{todo.title}</h5>
                  <div className="bottom--part mt-4 text-end">
                    <small
                      className="bg-danger p-1 text-white mt-2"
                      style={{ borderRadius: "0.5rem", float: "left" }}
                    >
                      {todo.date}
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
        ))}
        <div className="mt-1 text-end">
          <button
            type="button"
            className="mb-1 w-75 h-2 text-muted"
            style={{
              borderRadius: "0.3rem",
              maxHeight: "auto",
              borderStyle: "none",
              float: "left",
            }}
          >
            <i
              className="fas fa-plus mt-1 text-muted"
              style={{ float: "left" }}
            ></i>
            Add Task
          </button>
          <div className="symbols" style={{ float: "left" }}>
            <i
              className="material-icons text-muted"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              title="assignments"
            >
              assignment
            </i>
            <span
              className="material-symbols-outlined"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              title="recommend"
            >
              recommend
            </span>
            <span
              className="material-symbols-outlined"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              title="group_work"
            >
              group_work
            </span>
          </div>
        </div>
      </div>

      <TaskModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default ToDo;
