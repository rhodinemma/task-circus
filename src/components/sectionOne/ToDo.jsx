import React, { useState } from "react";
import moses from "../../assets/moses.jpeg";
import rhodin from "../../assets/rhodin.jpg";
import { Modal }  from "react-bootstrap";

const ToDo = ({ data }) => {
  console.log(data);
  
  const [todoModal ,setToDoModal] = useState(false);
  const handleToDoClose =()=> setToDoModal(false);
  

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
                  onClick={() => setToDoModal(true)}
                >
                  <h5 className="card-title">{todo.title}</h5>
                  <div className="bottom--part mt-4 text-end">
                    <small
                      className="bg-danger p-1 text-white mt-2"
                      style={{ borderRadius: "0.5rem", float: "left" }}
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title={todo.date}
                    >
                      {todo.date}
                    </small>
                    <img
                      src={moses}
                      alt="dp"
                      className="rounded-circle mt-2"
                      width="30px"
                      height="30px"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="mosesmulumba"
                    />
                    <img
                      src={rhodin}
                      alt="dp"
                      className="rounded-circle mt-2"
                      width="30px"
                      height="30px"
                      data-bs-toggle="tooltip"
                      data-bs-html="true"
                      title="rhodinemma"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
        <Modal
            keyboard={false}
            show={todoModal}
            onHide={handleToDoClose}
            style={{minHeight:"15rem"}}
          >
          <Modal.Header closeButton>
          <Modal.Title><h2 className='mt-3'>ToDo Section</h2></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h3>Custom Domain for learning apps</h3>
            <p>Setup custom domain for learning apps</p>

          </Modal.Body>
        </Modal>
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

  
    </>
  );
};

export default ToDo;
